import React, { useState, useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import type { Entry } from '../App'
import JapaneseText from '../components/JapaneseText'
import {
  loadProficiency,
  recordAnswer,
  getProficiencyLevel,
  PROF_LABELS,
  PROF_COLORS,
  summarizeProficiency,
  type ProficiencyMap,
} from '../lib/proficiency'

// ── Types ──────────────────────────────────────────────

type Phase = 'setup' | 'quiz' | 'results'

interface Example {
  japanese: string
  romaji: string
  english: string
}

interface Question {
  entry: Entry
  example: Example
  blankSentence: string
  blankRomaji: string
  options: string[]  // grammar names (e.g. "〜は")
  correct: string
}

interface Result {
  question: Question
  userAnswer: string
  correct: boolean
  prevLevel: number
  nextLevel: number
}

// ── Constants ──────────────────────────────────────────

const QUIZ_LENGTH = 10

const LEVEL_ORDER = ['N5', 'N4', 'N3', 'N2', 'N1']

const LEVEL_COLORS: Record<string, string> = {
  N5: '#22c55e',
  N4: '#06b6d4',
  N3: '#3b82f6',
  N2: '#a855f7',
  N1: '#ef4444',
  All: '#9d8ec8',
}

const LEVEL_LABELS: Record<string, string> = {
  N5: 'Beginner',
  N4: 'Elementary',
  N3: 'Intermediate',
  N2: 'Upper-Int.',
  N1: 'Advanced',
  All: 'All Levels',
}

// ── Helpers ────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const META_SENTENCE = /has (two|three|four|several|multiple|\d+) (primary |main |key |distinct )?uses?|has (two|three|four|\d+) meanings?/i

/** Return the first sentence that isn't a meta-description like "X has two uses." */
function firstMeaning(description: string): string {
  const sentences = description.split('\n\n')[0].split(/\.\s+/)
  for (const s of sentences) {
    if (!META_SENTENCE.test(s)) return s.trimStart() + '.'
  }
  return sentences[0] + '.'
}

/** Strip 〜/～ prefix and parenthetical notes to get the bare pattern */
function extractPattern(name: string): string {
  return name
    .replace(/^[〜～]/, '')
    .split(/[（(]/)[0]
    .trim()
}

/** Returns true only if the pattern literally appears in the sentence */
function patternFoundIn(japanese: string, name: string): boolean {
  const pattern = extractPattern(name)
  return pattern.length > 0 && japanese.includes(pattern)
}

/** Replace the FIRST occurrence of the pattern with ＿＿＿ */
function blankify(sentence: string, name: string): string {
  const pattern = extractPattern(name)
  const idx = sentence.indexOf(pattern)
  if (idx === -1) return sentence
  return sentence.slice(0, idx) + '＿＿＿' + sentence.slice(idx + pattern.length)
}

/** Blank the romaji equivalent if found */
function blankifyRomaji(sentence: string, romaji: string): string {
  const stripped = romaji.replace(/^[〜～]/, '').toLowerCase()
  if (!stripped) return sentence
  const idx = sentence.toLowerCase().indexOf(stripped)
  if (idx === -1) return sentence
  return sentence.slice(0, idx) + '___' + sentence.slice(idx + stripped.length)
}

/**
 * Pick 3 wrong distractors for `entry`.
 * Priority: same level → adjacent levels → any level.
 * This ensures an N2 quiz shows N2 distractors, not N5 ones.
 */
function pickDistractors(entry: Entry, allEntries: Entry[]): Entry[] {
  const levelIdx = LEVEL_ORDER.indexOf(entry.level)

  const sameLevel = shuffle(
    allEntries.filter((e) => e.id !== entry.id && e.level === entry.level)
  )
  if (sameLevel.length >= 3) return sameLevel.slice(0, 3)

  // Supplement with adjacent levels (N±1, then N±2, etc.)
  const result = [...sameLevel]
  for (let dist = 1; dist <= LEVEL_ORDER.length && result.length < 3; dist++) {
    const candidates = shuffle(
      allEntries.filter((e) => {
        const idx = LEVEL_ORDER.indexOf(e.level)
        return e.id !== entry.id &&
          !result.find((r) => r.id === e.id) &&
          Math.abs(idx - levelIdx) === dist
      })
    )
    result.push(...candidates.slice(0, 3 - result.length))
  }
  return result
}

function buildQuestions(pool: Entry[], allEntries: Entry[]): Question[] {
  // Only use entries where the grammar pattern literally appears in at least one example
  const usable = pool.filter((e) => {
    if (!e.examples || e.examples.length === 0) return false
    return e.examples.some((ex) => patternFoundIn(ex.japanese, e.name))
  })

  const count = Math.min(QUIZ_LENGTH, usable.length)
  const selected = shuffle(usable).slice(0, count)

  return selected.map((entry) => {
    // Pick an example that has the actual blank (guaranteed by the filter above)
    const validExamples = entry.examples!.filter((ex) => patternFoundIn(ex.japanese, entry.name))
    const ex = validExamples[Math.floor(Math.random() * validExamples.length)]

    return {
      entry,
      example: ex,
      blankSentence: blankify(ex.japanese, entry.name),
      blankRomaji: blankifyRomaji(ex.romaji, entry.romaji),
      options: shuffle([entry.name, ...pickDistractors(entry, allEntries).map((e) => e.name)]),
      correct: entry.name,
    }
  })
}

function getGrade(score: number, total: number): { label: string; stars: number } {
  const pct = score / total
  if (pct === 1)   return { label: 'Perfect!',     stars: 5 }
  if (pct >= 0.8)  return { label: 'Great job!',   stars: 4 }
  if (pct >= 0.6)  return { label: 'Good work!',   stars: 3 }
  if (pct >= 0.4)  return { label: 'Keep going!',  stars: 2 }
  return             { label: 'Keep studying!', stars: 1 }
}

// ── Component ──────────────────────────────────────────

export default function Quiz({ entries }: { entries: Entry[] }) {
  const [phase, setPhase] = useState<Phase>('setup')
  const [selectedLevel, setSelectedLevel] = useState<string>('N5')
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [results, setResults] = useState<Result[]>([])
  const [answered, setAnswered] = useState(false)
  const [chosenOption, setChosenOption] = useState<string | null>(null)
  const [showRomaji, setShowRomaji] = useState(false)
  const [showEnglish, setShowEnglish] = useState(false)
  const [proficiency, setProficiency] = useState<ProficiencyMap>(() => loadProficiency())

  // Count only entries that can produce a blanked question
  const levelCounts = useMemo(() => {
    const counts: Record<string, number> = { All: 0 }
    entries.forEach((e) => {
      const canBlank = e.examples?.some((ex) => patternFoundIn(ex.japanese, e.name))
      if (canBlank) {
        counts[e.level] = (counts[e.level] || 0) + 1
        counts.All++
      }
    })
    return counts
  }, [entries])

  const startQuiz = useCallback(() => {
    const pool = selectedLevel === 'All' ? entries : entries.filter((e) => e.level === selectedLevel)
    setQuestions(buildQuestions(pool, entries))
    setCurrentIdx(0)
    setResults([])
    setAnswered(false)
    setChosenOption(null)
    setShowRomaji(false)
    setShowEnglish(false)
    setPhase('quiz')
  }, [selectedLevel, entries])

  const currentQ = questions[currentIdx]
  const score = results.filter((r) => r.correct).length
  const lastResult = results[results.length - 1]

  const submitAnswer = useCallback((answer: string) => {
    if (answered || !currentQ) return
    const correct = answer === currentQ.correct
    setChosenOption(answer)
    setAnswered(true)
    const { next, prevLevel, nextLevel } = recordAnswer(proficiency, currentQ.entry.id, correct)
    setProficiency(next)
    setResults((prev) => [...prev, { question: currentQ, userAnswer: answer, correct, prevLevel, nextLevel }])
  }, [answered, currentQ, proficiency])

  const handleDontKnow = useCallback(() => {
    if (answered || !currentQ) return
    setChosenOption(null)
    setAnswered(true)
    const { next, prevLevel, nextLevel } = recordAnswer(proficiency, currentQ.entry.id, false)
    setProficiency(next)
    setResults((prev) => [...prev, { question: currentQ, userAnswer: '', correct: false, prevLevel, nextLevel }])
  }, [answered, currentQ, proficiency])

  const nextQuestion = () => {
    if (currentIdx + 1 >= questions.length) {
      setPhase('results')
    } else {
      setCurrentIdx((i) => i + 1)
      setAnswered(false)
      setChosenOption(null)
      setShowRomaji(false)
      setShowEnglish(false)
    }
  }

  const reset = () => {
    setPhase('setup')
    setResults([])
    setCurrentIdx(0)
    setAnswered(false)
    setChosenOption(null)
    setShowRomaji(false)
  }

  // ── Setup screen ───────────────────────────────────

  if (phase === 'setup') {
    return (
      <div className="quiz-page">
        <div className="quiz-setup">
          <Link to="/" className="quiz-back-link">← Dictionary</Link>

          <div className="quiz-setup-header">
            <div className="quiz-setup-icon">鍛</div>
            <h1 className="quiz-setup-title">Grammar Practice</h1>
            <p className="quiz-setup-sub">Fill in the blank — multiple choice, {QUIZ_LENGTH} questions</p>
          </div>

          <div className="quiz-section-label">Choose a level</div>
          <div className="quiz-level-grid">
            {(['N5', 'N4', 'N3', 'N2', 'N1', 'All'] as const).map((lvl) => (
              <button
                key={lvl}
                className={`quiz-level-btn ${selectedLevel === lvl ? 'active' : ''}`}
                onClick={() => setSelectedLevel(lvl)}
                style={{ '--lvl-color': LEVEL_COLORS[lvl] } as React.CSSProperties}
              >
                <span className="quiz-level-name">{lvl}</span>
                <span className="quiz-level-sub">{LEVEL_LABELS[lvl]}</span>
                <span className="quiz-level-count">{levelCounts[lvl] ?? 0} available</span>
              </button>
            ))}
          </div>

          <button className="quiz-start-btn" onClick={startQuiz}>
            Start Quiz →
          </button>
        </div>
      </div>
    )
  }

  // ── Results screen ─────────────────────────────────

  if (phase === 'results') {
    const total = results.length
    const { label, stars } = getGrade(score, total)

    return (
      <div className="quiz-page">
        <div className="quiz-results">
          <Link to="/" className="quiz-back-link">← Dictionary</Link>

          <div className="quiz-results-header">
            <div className="quiz-results-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < stars ? 'star active' : 'star'}>★</span>
              ))}
            </div>
            <h2 className="quiz-results-title">{label}</h2>
            <div className="quiz-results-score">
              <span className="quiz-score-num">{score}</span>
              <span className="quiz-score-sep">/</span>
              <span className="quiz-score-total">{total}</span>
            </div>
            <div className="quiz-results-meta">{selectedLevel} · Multiple Choice</div>
          </div>

          <div className="quiz-breakdown">
            {results.map((r, i) => (
              <div key={i} className={`quiz-breakdown-row ${r.correct ? 'correct' : 'wrong'}`}>
                <span className="breakdown-icon">{r.correct ? '✓' : '✗'}</span>
                <span className="breakdown-grammar">{r.question.entry.name}</span>
                <span className="breakdown-romaji">{r.question.entry.romaji}</span>
                {!r.correct && (
                  <span className="breakdown-your-answer">You chose: {r.userAnswer}</span>
                )}
              </div>
            ))}
          </div>

          <div className="quiz-results-actions">
            <button className="quiz-start-btn" onClick={startQuiz}>Try Again</button>
            <button className="quiz-secondary-btn" onClick={reset}>Change Level</button>
            <Link to="/" className="quiz-secondary-btn">Back to Dictionary</Link>
          </div>
        </div>
      </div>
    )
  }

  // ── Quiz screen ────────────────────────────────────

  if (!currentQ) return null

  const progress = (currentIdx / questions.length) * 100
  const patternOnly = extractPattern(currentQ.entry.name)

  return (
    <div className="quiz-page">
      <div className="quiz-screen">
        {/* Top bar */}
        <div className="quiz-top-bar">
          <button className="quiz-exit-btn" onClick={reset}>✕ Quit</button>
          <div className="quiz-progress-wrap">
            <div className="quiz-progress-bar">
              <div
                className="quiz-progress-fill"
                style={{ width: `${progress}%`, '--lvl-color': LEVEL_COLORS[selectedLevel] } as React.CSSProperties}
              />
            </div>
            <div className="quiz-progress-label">{currentIdx + 1} / {questions.length}</div>
          </div>
          <div className="quiz-score-badge">
            <span className="quiz-score-correct">{score}</span>
            <span className="quiz-score-slash">/</span>
            <span>{currentIdx}</span>
          </div>
        </div>

        {/* Question card */}
        <div className="quiz-question-card">
          <div
            className="quiz-level-pill"
            style={{ '--lvl-color': LEVEL_COLORS[selectedLevel] } as React.CSSProperties}
          >
            {selectedLevel} · Fill in the blank
          </div>

          {/* English */}
          <div className="quiz-english-wrap">
            <p className={`quiz-sentence-en ${showEnglish || answered ? '' : 'blurred'}`}>
              "{currentQ.example.english}"
            </p>
            {!answered && (
              <button className="quiz-reveal-btn" onClick={() => setShowEnglish((v) => !v)}>
                {showEnglish ? 'Hide English' : 'Show English'}
              </button>
            )}
          </div>

          {/* Japanese with blank */}
          <div className="quiz-sentence-ja">
            <JapaneseText
              text={currentQ.blankSentence}
              blankContent={
                <span className={`quiz-blank ${answered ? (lastResult?.correct ? 'correct' : 'wrong') : ''}`}>
                  {answered ? patternOnly : '＿＿＿'}
                </span>
              }
            />
          </div>

          {/* Romaji toggle */}
          <button className="quiz-romaji-toggle" onClick={() => setShowRomaji((v) => !v)}>
            {showRomaji ? 'Hide romaji' : 'Show romaji'}
          </button>
          {showRomaji && (
            <p className="quiz-sentence-romaji">{currentQ.blankRomaji}</p>
          )}

          {/* I don't know */}
          {!answered && (
            <button className="quiz-dontknow-btn" onClick={handleDontKnow}>
              I don't know — show answer
            </button>
          )}

          {/* Options */}
          <div className="quiz-options">
            {currentQ.options.map((opt) => {
              let cls = 'quiz-option-btn'
              if (answered) {
                if (opt === currentQ.correct) cls += ' correct'
                else if (opt === chosenOption) cls += ' wrong'
                else cls += ' dimmed'
              }
              return (
                <button
                  key={opt}
                  className={cls}
                  onClick={() => submitAnswer(opt)}
                  disabled={answered}
                >
                  {opt}
                </button>
              )
            })}
          </div>

          {/* Feedback */}
          {answered && (() => {
            const wrongEntry = !lastResult?.correct && chosenOption
              ? entries.find((e) => e.name === chosenOption)
              : null
            return (
            <div className={`quiz-feedback ${lastResult?.correct ? 'correct' : 'wrong'}`}>
              {lastResult && lastResult.nextLevel > lastResult.prevLevel && lastResult.nextLevel !== 1 && (
                <div className="quiz-levelup">
                  <span className="quiz-levelup-icon">⬆</span>
                  <span>Level Up!</span>
                  <span className="quiz-levelup-arrow">
                    {PROF_LABELS[lastResult.prevLevel]} → {PROF_LABELS[lastResult.nextLevel]}
                  </span>
                </div>
              )}
              <div className="quiz-feedback-top">
                <span className="quiz-feedback-icon">
                  {lastResult?.correct ? '✓ Correct!' : '✗ Incorrect'}
                </span>
                <span className="quiz-feedback-name">{currentQ.entry.name}</span>
              </div>
              {!lastResult?.correct && (
                <p className="quiz-feedback-correct-ans">
                  Correct answer: <strong>{currentQ.correct}</strong>
                </p>
              )}
              <p className="quiz-feedback-desc">
                {firstMeaning(currentQ.entry.description)}
              </p>
              {wrongEntry && (
                <div className="quiz-feedback-wrong-entry">
                  <div className="quiz-feedback-wrong-label">
                    Why not <strong>{wrongEntry.name}</strong>?
                  </div>
                  <p className="quiz-feedback-wrong-desc">
                    {firstMeaning(wrongEntry.description)}
                  </p>
                </div>
              )}
              <button className="quiz-next-btn" onClick={nextQuestion} autoFocus>
                {currentIdx + 1 >= questions.length ? 'See Results →' : 'Next →'}
              </button>
            </div>
            )
          })()}
        </div>
      </div>
    </div>
  )
}
