import React, { useState, useRef, useCallback, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { segmentJapanese, lookupWord, type JishoResult, BLANK } from '../lib/tokenizer'

// ── Tooltip ─────────────────────────────────────────────────

interface TooltipState {
  text: string
  x: number
  y: number
  result: JishoResult | null | 'loading'
}

function WordTooltip({ state }: { state: TooltipState }) {
  const { text, x, y, result } = state
  const vw = window.innerWidth

  // Center on cursor, clamp to viewport
  const width = 260
  let left = x - width / 2
  if (left < 8) left = 8
  if (left + width > vw - 8) left = vw - width - 8

  const style: React.CSSProperties = {
    position: 'fixed',
    left,
    top: y - 12,
    transform: 'translateY(-100%)',
    width,
  }

  return createPortal(
    <div className="jp-tooltip" style={style}>
      <div className="jp-tooltip-header">
        <span className="jp-tooltip-word">
          {result && result !== 'loading' && result.word !== text ? result.word : text}
        </span>
        {result && result !== 'loading' && result.reading && result.reading !== text && (
          <span className="jp-tooltip-reading">{result.reading}</span>
        )}
        {result && result !== 'loading' && result.pos.length > 0 && (
          <span className="jp-tooltip-pos">{result.pos[0]}</span>
        )}
      </div>
      <div className="jp-tooltip-defs">
        {result === 'loading' && (
          <span className="jp-tooltip-loading">Looking up…</span>
        )}
        {result === null && (
          <span className="jp-tooltip-loading">No entry found</span>
        )}
        {result && result !== 'loading' && result.defs.map((d, i) => (
          <div key={i} className="jp-tooltip-def">
            <span className="jp-tooltip-def-num">{i + 1}</span>
            {d}
          </div>
        ))}
      </div>
    </div>,
    document.body
  )
}

// ── JapaneseText ─────────────────────────────────────────────

export default function JapaneseText({
  text,
  className,
  blankContent,
}: {
  text: string
  className?: string
  blankContent?: React.ReactNode
}) {
  const segments = useMemo(() => segmentJapanese(text), [text])
  const [tooltip, setTooltip] = useState<TooltipState | null>(null)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleEnter = useCallback(async (word: string, e: React.MouseEvent) => {
    if (hideTimer.current) clearTimeout(hideTimer.current)
    const x = e.clientX
    const y = e.clientY
    setTooltip({ text: word, x, y, result: 'loading' })
    const result = await lookupWord(word)
    // Only update if the tooltip is still for the same word
    setTooltip((prev) => prev?.text === word ? { ...prev, result } : prev)
  }, [])

  const handleLeave = useCallback(() => {
    hideTimer.current = setTimeout(() => setTooltip(null), 150)
  }, [])

  return (
    <span className={className}>
      {segments.map((seg, i) =>
        seg.text === BLANK && blankContent ? (
          <React.Fragment key={i}>{blankContent}</React.Fragment>
        ) : seg.isWord ? (
          <span
            key={i}
            className="jp-token"
            onMouseEnter={(e) => handleEnter(seg.text, e)}
            onMouseLeave={handleLeave}
          >
            {seg.text}
          </span>
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
      {tooltip && <WordTooltip state={tooltip} />}
    </span>
  )
}
