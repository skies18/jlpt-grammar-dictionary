#!/usr/bin/env node
// Combines partial grammar JSON files (by level) into the final grammar.json
const fs = require('fs')
const path = require('path')

const dataDir = path.join(__dirname, '..', 'src', 'data')
const parts = ['grammar-n5n4.json', 'grammar-n3n2.json', 'grammar-n1.json']

const combined = []
for (const part of parts) {
  const file = path.join(dataDir, part)
  if (!fs.existsSync(file)) {
    console.error(`Missing: ${file}`)
    process.exit(1)
  }
  const data = JSON.parse(fs.readFileSync(file, 'utf8'))
  combined.push(...data)
}

const out = path.join(dataDir, 'grammar.json')
fs.writeFileSync(out, JSON.stringify(combined, null, 2))
console.log(`Combined ${combined.length} entries → grammar.json`)

// Clean up temp files
for (const part of parts) {
  fs.unlinkSync(path.join(dataDir, part))
}
console.log('Cleaned up temp files.')
