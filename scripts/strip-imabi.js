#!/usr/bin/env node
// Removes all Imabi links from grammar.json
const fs = require('fs')
const path = require('path')

const file = path.join(__dirname, '..', 'src', 'data', 'grammar.json')
const data = JSON.parse(fs.readFileSync(file, 'utf8'))

let removed = 0
for (const entry of data) {
  const before = entry.links.length
  entry.links = entry.links.filter(lk => lk.label !== 'Imabi')
  removed += before - entry.links.length
}

fs.writeFileSync(file, JSON.stringify(data, null, 2))
console.log(`Removed ${removed} Imabi links from ${data.length} entries.`)
