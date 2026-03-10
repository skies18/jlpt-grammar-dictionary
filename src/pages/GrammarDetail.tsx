import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import type { Entry } from '../App'
import {
  loadProficiency,
  getProficiencyLevel,
  setLevel,
  PROF_LABELS,
  PROF_COLORS,
  type ProficiencyMap,
} from '../lib/proficiency'

export default function GrammarDetail({ entries }: { entries: Entry[] }) {
  const { id } = useParams()
  const entry = entries.find((e) => e.id === decodeURIComponent(id ?? ''))
  const [tab, setTab] = useState<'overview' | 'examples'>('overview')
  const [profMap, setProfMap] = useState<ProficiencyMap>(() => loadProficiency())
  const rec = entry ? profMap[entry.id] : undefined
  const profLevel = getProficiencyLevel(rec)

  const adjustLevel = (delta: number) => {
    if (!entry) return
    const next = setLevel(profMap, entry.id, profLevel + delta)
    setProfMap(next)
  }

  if (!entry) {
    return (
      <div className="detail-page">
        <Link to="/" className="detail-back">← Back to list</Link>
        <p style={{ color: 'var(--muted)' }}>Grammar entry not found.</p>
      </div>
    )
  }

  const descParagraphs = entry.description.split('\n\n').filter(Boolean)

  return (
    <div className="detail-page">
      <Link to="/" className="detail-back">← Back to list</Link>

      <div className="detail-card">
        <div className="detail-header">
          <span className="detail-name">{entry.name}</span>
          <span className={`badge badge-${entry.level}`} style={{ fontSize: '0.8rem', padding: '5px 12px' }}>
            {entry.level}
          </span>
        </div>

        {entry.romaji && (
          <div className="detail-romaji">{entry.romaji}</div>
        )}

        {/* Proficiency block */}
        <div className="detail-prof-block">
          <div className="detail-prof-top">
            <span className="detail-prof-icon" style={{ color: PROF_COLORS[profLevel] }}>
              {profLevel === 6 ? '★' : profLevel === 1 ? '✗' : profLevel > 0 ? '◉' : '○'}
            </span>
            <span className="detail-prof-label" style={{ color: PROF_COLORS[profLevel] }}>
              {PROF_LABELS[profLevel]}
            </span>
            {rec && rec.streak >= 2 && (
              <span className="detail-prof-streak">🔥 {rec.streak} streak</span>
            )}
            <div className="detail-prof-controls">
              <button
                className="detail-prof-btn"
                onClick={() => adjustLevel(-1)}
                disabled={profLevel === 0}
                title="Decrease level"
              >−</button>
              <button
                className="detail-prof-btn"
                onClick={() => adjustLevel(1)}
                disabled={profLevel === 6}
                title="Increase level"
              >+</button>
            </div>
          </div>
          <div className="detail-prof-pips">
            {profLevel === 1
              ? <span className="detail-prof-struggling">Never answered correctly yet</span>
              : Array.from({ length: 5 }).map((_, i) => {
                  const filled = profLevel > 1 ? profLevel - 1 : 0
                  return (
                    <div
                      key={i}
                      className={`detail-prof-pip ${i < filled ? 'filled' : ''}`}
                      style={i < filled ? { background: PROF_COLORS[profLevel], boxShadow: `0 0 8px ${PROF_COLORS[profLevel]}60` } : undefined}
                    />
                  )
                })
            }
          </div>
          {rec && rec.correct + rec.incorrect > 0 && (
            <div className="detail-prof-stats">
              <span className="prof-stat correct">✓ {rec.correct}</span>
              <span className="prof-stat incorrect">✗ {rec.incorrect}</span>
              <span className="prof-stat accuracy">
                {Math.round((rec.correct / (rec.correct + rec.incorrect)) * 100)}% accuracy
              </span>
              {rec.lastPracticed && (
                <span className="prof-stat date">Last: {rec.lastPracticed}</span>
              )}
            </div>
          )}
          {(!rec || rec.correct + rec.incorrect === 0) && (
            <p className="detail-prof-hint">
              Practice this in the <Link to="/practice" className="detail-prof-link">quiz</Link> to track your progress.
            </p>
          )}
        </div>

        {/* Tabs */}
        <div className="detail-tabs">
          <button
            className={`detail-tab ${tab === 'overview' ? 'active' : ''}`}
            onClick={() => setTab('overview')}
          >
            Overview
          </button>
          <button
            className={`detail-tab ${tab === 'examples' ? 'active' : ''}`}
            onClick={() => setTab('examples')}
          >
            Examples {entry.examples && entry.examples.length > 0 ? `(${entry.examples.length})` : ''}
          </button>
        </div>

        {tab === 'overview' && (
          <>
            <div className="detail-desc-block">
              {descParagraphs.map((p, i) => (
                <p key={i} className="detail-desc">{p}</p>
              ))}
            </div>

            {entry.usage && (
              <>
                <div className="detail-label">Formation</div>
                <code className="detail-usage">{entry.usage}</code>
              </>
            )}

            {entry.notes && (
              <>
                <div className="detail-label">Notes</div>
                <div className="detail-notes-block">
                  {entry.notes.split('\n\n').filter(Boolean).map((n, i) => (
                    <p key={i} className="detail-note-line">{n}</p>
                  ))}
                </div>
              </>
            )}

            {entry.links.length > 0 && (
              <>
                <div className="detail-label">Further Reading</div>
                <div className="detail-links">
                  {entry.links.map((lk) => (
                    <a
                      key={lk.label}
                      href={lk.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`link-btn link-${lk.label.toLowerCase()}`}
                    >
                      {lk.label} — more examples &amp; drills ↗
                    </a>
                  ))}
                </div>
              </>
            )}
          </>
        )}

        {tab === 'examples' && (
          <div className="detail-examples">
            {entry.examples && entry.examples.length > 0 ? (
              entry.examples.map((ex, i) => (
                <div key={i} className="example-item">
                  <p className="example-jp">{ex.japanese}</p>
                  <p className="example-romaji">{ex.romaji}</p>
                  <p className="example-en">{ex.english}</p>
                </div>
              ))
            ) : (
              <p style={{ color: 'var(--muted)' }}>No example sentences available.</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
