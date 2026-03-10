const fs = require('fs')
const path = require('path')

function guessLevel(text){
  if(!text) return ''
  const m = text.match(/N([1-5])/i)
  if(m) return 'N' + m[1]
  // common patterns like "N5" or "JLPT N3"
  const m2 = text.match(/N[1-5]/i)
  if(m2) return m2[0].toUpperCase()
  return ''
}

function cleanText(t){
  return (t||'').replace(/\s+/g,' ').trim()
}

function normalize(entries){
  const map = new Map()
  for(const e of entries){
    const name = cleanText(e.name || e.title || '')
    if(!name) continue
    const key = name.toLowerCase()
    if(map.has(key)) continue
    const id = e.id || key.replace(/[^a-z0-9-_]+/gi,'-')
    const level = e.level && e.level !== 'Unknown' ? e.level : (guessLevel(name) || guessLevel(e.id || ''))
    const links = Array.isArray(e.links) ? e.links : []
    // ensure Japbase link
    if(!links.find(l=>/japbase/.test(l.url))){
      links.unshift({ label: 'Japbase', url: `https://japbase.neocities.org/full_night#${id}` })
    }
    // ensure Bunpro search link
    if(!links.find(l=>/bunpro/.test(l.url))){
      links.push({ label: 'Bunpro (search)', url: `https://www.bunpro.jp/grammar_points?search=${encodeURIComponent(name)}` })
    }
    // ensure Imabi search link via Google
    if(!links.find(l=>/imabi/.test(l.url))){
      links.push({ label: 'Imabi (site search)', url: `https://www.google.com/search?q=site:imabi.net+${encodeURIComponent(name)}` })
    }

    map.set(key, { id, name, level: level || 'Unknown', description: cleanText(e.description||''), links })
  }
  return Array.from(map.values())
}

function run(){
  const src = path.resolve(__dirname, '..', 'src', 'data', 'grammar_imported.json')
  if(!fs.existsSync(src)){
    console.error('Missing', src, '— run import first')
    process.exit(1)
  }
  const raw = JSON.parse(fs.readFileSync(src,'utf8'))
  const normalized = normalize(raw)
  const outPath = path.resolve(__dirname, '..', 'src', 'data', 'grammar_normalized.json')
  fs.writeFileSync(outPath, JSON.stringify(normalized, null, 2), 'utf8')
  console.log('Wrote', outPath, 'entries:', normalized.length)

  const args = process.argv.slice(2)
  if(args.includes('--overwrite')){
    const dest = path.resolve(__dirname, '..', 'src', 'data', 'grammar.json')
    fs.writeFileSync(dest, JSON.stringify(normalized, null, 2), 'utf8')
    console.log('Overwrote', dest)
  }
}

run()
