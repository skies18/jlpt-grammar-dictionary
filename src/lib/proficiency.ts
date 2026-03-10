// ── Proficiency system ──────────────────────────────────

export interface ProficiencyRecord {
  correct: number
  incorrect: number
  streak: number       // current consecutive correct streak
  lastPracticed: string
}

export type ProficiencyMap = Record<string, ProficiencyRecord>

// Score = (correct × 2) – incorrect, floored at 0
function calcScore(rec: ProficiencyRecord): number {
  return Math.max(0, rec.correct * 2 - rec.incorrect)
}

export function getProficiencyLevel(rec: ProficiencyRecord | undefined): number {
  if (!rec || rec.correct + rec.incorrect === 0) return 0  // Unseen
  if (rec.correct === 0) return 1                          // Struggling — seen but never correct
  const score = calcScore(rec)
  if (score >= 15) return 6  // Mastered
  if (score >= 10) return 5  // Confident
  if (score >= 6)  return 4  // Practiced
  if (score >= 3)  return 3  // Familiar
  return 2                   // Novice
}

// Levels 0–6
export const PROF_LABELS = ['Unseen', 'Struggling', 'Novice', 'Familiar', 'Practiced', 'Confident', 'Mastered']
export const PROF_COLORS = ['#3a3555', '#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#a855f7']
export const PROF_ICONS  = ['○', '✗', '◐', '◑', '◕', '●', '★']

// ── localStorage ──

const KEY = 'jlpt_proficiency'

export function loadProficiency(): ProficiencyMap {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as ProficiencyMap) : {}
  } catch {
    return {}
  }
}

export function recordAnswer(
  map: ProficiencyMap,
  id: string,
  correct: boolean
): { next: ProficiencyMap; prevLevel: number; nextLevel: number } {
  const prev = map[id] ?? { correct: 0, incorrect: 0, streak: 0, lastPracticed: '' }
  const prevLevel = getProficiencyLevel(prev)

  const updated: ProficiencyRecord = {
    correct:       prev.correct + (correct ? 1 : 0),
    incorrect:     prev.incorrect + (correct ? 0 : 1),
    streak:        correct ? prev.streak + 1 : Math.max(0, prev.streak - 1),
    lastPracticed: new Date().toISOString().split('T')[0],
  }

  const next = { ...map, [id]: updated }
  const nextLevel = getProficiencyLevel(updated)

  try { localStorage.setItem(KEY, JSON.stringify(next)) } catch { /* ignore */ }

  return { next, prevLevel, nextLevel }
}

// Score targets that correspond to each level threshold
const LEVEL_SCORE_TARGETS = [0, 0, 1, 3, 6, 10, 15]

/** Manually set the proficiency level for an entry, adjusting the underlying record. */
export function setLevel(
  map: ProficiencyMap,
  id: string,
  targetLevel: number,
): ProficiencyMap {
  const clamped = Math.max(0, Math.min(6, targetLevel))
  const prev = map[id] ?? { correct: 0, incorrect: 0, streak: 0, lastPracticed: '' }

  let updated: ProficiencyRecord
  if (clamped === 0) {
    // Reset fully
    updated = { correct: 0, incorrect: 0, streak: 0, lastPracticed: '' }
  } else if (clamped === 1) {
    // Struggling: seen but never correct
    updated = {
      correct: 0,
      incorrect: Math.max(prev.incorrect, 1),
      streak: 0,
      lastPracticed: prev.lastPracticed || new Date().toISOString().split('T')[0],
    }
  } else {
    // Levels 2–6: set correct count so score hits the target threshold
    const targetScore = LEVEL_SCORE_TARGETS[clamped]
    // Keep existing incorrect, solve for correct: correct*2 - incorrect >= targetScore
    const incorrect = prev.incorrect
    const correctNeeded = Math.ceil((targetScore + incorrect) / 2)
    updated = {
      correct: Math.max(correctNeeded, 1),
      incorrect,
      streak: prev.streak,
      lastPracticed: prev.lastPracticed || new Date().toISOString().split('T')[0],
    }
  }

  const next = { ...map, [id]: updated }
  try { localStorage.setItem(KEY, JSON.stringify(next)) } catch { /* ignore */ }
  return next
}

// ── Aggregate stats for the setup screen ──

export interface ProficiencySummary {
  total: number
  seen: number
  mastered: number
  byLevel: number[]  // count at each level 0–6
}

export function summarizeProficiency(map: ProficiencyMap, entryIds: string[]): ProficiencySummary {
  const byLevel = [0, 0, 0, 0, 0, 0, 0]
  let seen = 0
  let mastered = 0
  for (const id of entryIds) {
    const level = getProficiencyLevel(map[id])
    byLevel[level]++
    if (level > 0) seen++
    if (level === 6) mastered++
  }
  return { total: entryIds.length, seen, mastered, byLevel }
}
