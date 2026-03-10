# JLPT Grammar Dictionary

An interactive Japanese grammar reference and quiz app covering all JLPT levels (N5–N1) with 266 grammar points.

## Features

- **Grammar reference** — browse all 266 grammar points across N5–N1, with descriptions, usage patterns, examples, and links to Bunpro
- **Search & filter** — search by name, reading, meaning, or usage; filter by JLPT level
- **Fill-in-the-blank quiz** — multiple choice practice with difficult distractors drawn from the same JLPT level
- **Proficiency tracking** — 7-level system (Unseen → Struggling → Novice → Familiar → Practiced → Confident → Mastered) persisted in localStorage
- **Word hover tooltips** — hover any Japanese word in quiz sentences to see its reading, part of speech, and English definitions (via Jisho API)
- **Manual level adjustment** — raise or lower your proficiency level on any grammar point from its detail page
- **"I don't know" button** — skip a quiz question and mark it wrong without guessing

## Tech Stack

- React 18 + TypeScript
- Vite 5
- React Router DOM v6
- Jisho API (proxied through Vite dev server to avoid CORS)
- localStorage for proficiency persistence

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Data

Grammar data lives in `src/data/grammar.json`. Each entry follows this schema:

```json
{
  "id": "n3-example",
  "name": "〜example",
  "romaji": "example",
  "level": "N3",
  "description": "Full description...",
  "usage": "Verb (dict.) + example",
  "links": [
    { "label": "Bunpro", "url": "https://bunpro.jp/grammar_points/..." }
  ],
  "examples": [
    { "japanese": "...", "romaji": "...", "english": "..." }
  ],
  "notes": "Optional extra notes."
}
```

## Proficiency System

Scores are calculated as `max(0, correct × 2 − incorrect)` and mapped to levels:

| Level | Name | Score |
|---|---|---|
| 0 | Unseen | not yet attempted |
| 1 | Struggling | seen but never answered correctly |
| 2 | Novice | score ≥ 1 |
| 3 | Familiar | score ≥ 3 |
| 4 | Practiced | score ≥ 6 |
| 5 | Confident | score ≥ 10 |
| 6 | Mastered | score ≥ 15 |

Progress is saved automatically in `localStorage` under the key `jlpt_proficiency`.
