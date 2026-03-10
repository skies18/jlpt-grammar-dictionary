// ── Japanese word segmentation ──────────────────────────────
//
// Strategy: regex-based character-type grouping.
// Pattern: [kanji]+ [kana]*  groups kanji + its okurigana into one token,
// so 追いかけて, 食べました, 読まなければ all become single hoverable units.
// Pure-kana runs (particles etc.) become their own tokens.

export interface WordSegment {
  text: string
  isWord: boolean
}

const KANJI = '\\u4e00-\\u9fff\\u3400-\\u4dbf'
const HIRA  = '\\u3040-\\u309f'
const KATA  = '\\u30a0-\\u30ff\\uff66-\\uff9f'
const KANA  = `${HIRA}${KATA}`

// Match: blank marker first, then kanji+kana | pure kana | latin | anything
const BLANK = '＿＿＿'
const WORD_RE = new RegExp(
  `${BLANK}|[${KANJI}]+[${KANA}]*|[${KANA}]+|[a-zA-Z0-9]+|[\\s\\S]`,
  'g'
)

export { BLANK }

// Literal regex — avoids u-flag issues with string-built ranges
const JP_CHAR = /[\u4e00-\u9fff\u3400-\u4dbf\u3040-\u309f\u30a0-\u30ff\uff66-\uff9f]/

export function segmentJapanese(text: string): WordSegment[] {
  const result: WordSegment[] = []
  WORD_RE.lastIndex = 0
  let m: RegExpExecArray | null
  while ((m = WORD_RE.exec(text)) !== null) {
    const s = m[0]
    result.push({
      text: s,
      isWord: s !== BLANK && (JP_CHAR.test(s) || /[a-zA-Z]/.test(s)),
    })
  }
  return result
}

// ── Jisho API lookup ────────────────────────────────────────

export interface JishoResult {
  word: string
  reading: string
  pos: string[]
  defs: string[]
}

const cache = new Map<string, JishoResult | null>()

export async function lookupWord(text: string): Promise<JishoResult | null> {
  if (cache.has(text)) return cache.get(text)!
  try {
    const res = await fetch(
      `/jisho-api/search/words?keyword=${encodeURIComponent(text)}`
    )
    if (!res.ok) { cache.set(text, null); return null }
    const json = await res.json()
    const entry = json?.data?.[0]
    if (!entry) { cache.set(text, null); return null }

    const jp = entry.japanese?.[0]
    const result: JishoResult = {
      word:    jp?.word ?? text,
      reading: jp?.reading ?? '',
      pos:     entry.senses?.[0]?.parts_of_speech?.slice(0, 2) ?? [],
      defs:    (entry.senses as Array<{ english_definitions: string[] }>)
                 .slice(0, 3)
                 .map((s) => s.english_definitions.slice(0, 3).join(', ')),
    }
    cache.set(text, result)
    return result
  } catch {
    cache.set(text, null)
    return null
  }
}
