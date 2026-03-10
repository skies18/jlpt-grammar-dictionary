# JLPT Grammar Dictionary

Minimal Vite + React TypeScript Progressive Web App (PWA) that lists Japanese grammar points by JLPT level and links to external resources (Imabi, Bunpro, etc.).

Quick start

```bash
cd jlpt-grammar-dictionary
npm install
npm run dev
```

Importing the full grammar list from Japbase

This repo includes a helper script that scrapes headings and anchors from Japbase and writes a JSON list to `src/data/grammar_imported.json`.

Run:

```bash
npm install
node scripts/import_japbase.js
```

The script runs locally (on your machine), fetches `https://japbase.neocities.org/full_night`, and writes the results. It also creates Bunpro and Imabi (Google site-search) links for each entry as helper links.


Open the site on desktop or iOS Safari. To add more grammar entries, edit `src/data/grammar.json` and follow the existing schema.

Notes on iOS compatibility

- This is a responsive web app and includes a `manifest.json`. iOS supports adding web apps to the home screen via Safari's Share > Add to Home Screen. Some PWA features (service workers, full installability) are limited on iOS Safari.
"# jlpt-grammar-dictionary" 
