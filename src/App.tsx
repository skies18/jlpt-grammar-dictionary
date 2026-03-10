import React, { useMemo, useState } from 'react'
import baseData from './data/grammar.json'
import { Link, Routes, Route } from 'react-router-dom'
import GrammarDetail from './pages/GrammarDetail'
import Quiz from './pages/Quiz'
import {
  loadProficiency,
  getProficiencyLevel,
  PROF_LABELS,
  PROF_COLORS,
  type ProficiencyMap,
} from './lib/proficiency'

export type Entry = {
  id: string
  name: string
  romaji: string
  level: string
  description: string
  usage: string
  links: { label: string; url: string }[]
  examples?: { japanese: string; romaji: string; english: string }[]
  notes?: string
}

const LEVELS = ['All', 'N5', 'N4', 'N3', 'N2', 'N1']

const LEVEL_LABELS: Record<string, string> = {
  N5: 'N5 · Beginner',
  N4: 'N4 · Elementary',
  N3: 'N3 · Intermediate',
  N2: 'N2 · Upper-Int.',
  N1: 'N1 · Advanced',
}

function GrammarList({ entries }: { entries: Entry[] }) {
  const [query, setQuery] = useState('')
  const [level, setLevel] = useState('All')
  // Re-read proficiency each time the list mounts (e.g. after returning from quiz)
  const [proficiency] = useState<ProficiencyMap>(() => loadProficiency())

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return entries.filter((e) => {
      if (level !== 'All' && e.level !== level) return false
      if (!q) return true
      return (
        e.name.toLowerCase().includes(q) ||
        (e.romaji && e.romaji.toLowerCase().includes(q)) ||
        e.description.toLowerCase().includes(q) ||
        (e.usage && e.usage.toLowerCase().includes(q)) ||
        e.level.toLowerCase().includes(q)
      )
    })
  }, [entries, query, level])

  // Group by level when showing all
  const groupedSections = useMemo(() => {
    if (level !== 'All') return null
    const order = ['N5', 'N4', 'N3', 'N2', 'N1']
    return order
      .map((lvl) => ({ lvl, items: filtered.filter((e) => e.level === lvl) }))
      .filter((s) => s.items.length > 0)
  }, [filtered, level])

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div className="header-title">
            <h1>JLPT Grammar Dictionary</h1>
            <p className="header-sub">N5 → N1 · {entries.length} grammar points</p>
          </div>
          <Link to="/practice" className="practice-nav-btn">
            鍛 Practice
          </Link>
          <input
            className="search"
            placeholder="Search by name, reading, meaning…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search grammar"
          />
        </div>
      </header>

      {/* Level tabs */}
      <nav className="tabs">
        {LEVELS.map((l) => (
          <button
            key={l}
            className={`tab tab-${l.toLowerCase()} ${level === l ? 'active' : ''}`}
            onClick={() => setLevel(l)}
          >
            {l === 'All' ? 'All' : LEVEL_LABELS[l]}
          </button>
        ))}
      </nav>

      <main className="main">
        {/* Stats */}

        <div className="stats">
          {filtered.length === 0
            ? 'No results'
            : `${filtered.length} grammar point${filtered.length !== 1 ? 's' : ''}${level !== 'All' ? ` · ${level}` : ''}`}
        </div>

        {filtered.length === 0 && (
          <div className="empty">No grammar points match your search.</div>
        )}

        {/* Grouped sections (All) or flat list */}
        {groupedSections
          ? groupedSections.map(({ lvl, items }) => (
              <section key={lvl} className="level-section">
                <div className={`section-heading section-${lvl}`}>
                  {LEVEL_LABELS[lvl]} <span className="section-count">{items.length}</span>
                </div>
                <div className="grid">
                  {items.map((g) => (
                    <GrammarCard key={g.id} entry={g} proficiency={proficiency} />
                  ))}
                </div>
              </section>
            ))
          : filtered.length > 0 && (
              <div className="grid">
                {filtered.map((g) => (
                  <GrammarCard key={g.id} entry={g} proficiency={proficiency} />
                ))}
              </div>
            )}
      </main>
      <footer className="site-footer">
        <a href="mailto:001sliu@gmail.com">001sliu@gmail.com</a>
      </footer>
    </div>
  )
}

const META_SENTENCE = /has (two|three|four|several|multiple|\d+) (primary |main |key |distinct )?uses?|has (two|three|four|\d+) meanings?/i

function firstMeaning(description: string): string {
  const sentences = description.split('\n\n')[0].split(/\.\s+/)
  for (const s of sentences) {
    if (!META_SENTENCE.test(s)) return s.trimStart() + '.'
  }
  return sentences[0] + '.'
}

function ProficiencyPips({ level }: { level: number }) {
  const color = PROF_COLORS[level]
  // Level 1 = Struggling: show a single red ✗ icon instead of pips
  if (level === 1) {
    return (
      <div className="prof-bar">
        <span className="prof-struggling-icon" style={{ color }}>✗</span>
        <span className="prof-label" style={{ color }}>{PROF_LABELS[level]}</span>
      </div>
    )
  }
  // Levels 2–6: show filled pips (level-1 filled out of 5 total)
  const filled = level > 1 ? level - 1 : 0
  return (
    <div className="prof-bar">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`prof-pip ${i < filled ? 'filled' : ''}`}
          style={i < filled ? { background: color, boxShadow: `0 0 6px ${color}60` } : undefined}
        />
      ))}
      {level > 0 && (
        <span className="prof-label" style={{ color }}>
          {PROF_LABELS[level]}
        </span>
      )}
    </div>
  )
}

function GrammarCard({ entry: g, proficiency }: { entry: Entry; proficiency: ProficiencyMap }) {
  const level = getProficiencyLevel(proficiency[g.id])
  return (
    <div className={`card card-${g.level}`}>
      <div className="card-top">
        <Link to={`/grammar/${encodeURIComponent(g.id)}`} className="card-name">
          {g.name}
        </Link>
        <span className={`badge badge-${g.level}`}>{g.level}</span>
      </div>

      {g.romaji && <div className="card-romaji">{g.romaji}</div>}
      <div className="card-desc">{firstMeaning(g.description)}</div>
      {g.usage && <code className="card-usage">{g.usage}</code>}

      <div className="card-footer">
        <div className="card-links">
          {g.links.map((lk) => (
            <a
              key={lk.label}
              href={lk.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`link-btn link-${lk.label.toLowerCase()}`}
            >
              {lk.label} ↗
            </a>
          ))}
        </div>
        <ProficiencyPips level={level} />
      </div>
    </div>
  )
}

export default function App() {
  const entries = baseData as unknown as Entry[]

  return (
    <Routes>
      <Route path="/" element={<GrammarList entries={entries} />} />
      <Route path="/grammar/:id" element={<GrammarDetail entries={entries} />} />
      <Route path="/practice" element={<Quiz entries={entries} />} />
    </Routes>
  )
}
