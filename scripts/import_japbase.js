const fs = require('fs')
const path = require('path')
const axios = require('axios')
const cheerio = require('cheerio')

const BASE = 'https://japbase.neocities.org/full_night'

async function fetchPage() {
  const res = await axios.get(BASE)
  return res.data
}

function cleanText(t){
  return t.replace(/\s+/g,' ').trim()
}

async function run(){
  console.log('Fetching', BASE)
  const html = await fetchPage()
  const $ = cheerio.load(html)

  const out = []

  // Collect headings and anchors (h2-h4)
  $('h2, h3, h4').each((i, el) => {
    const el$ = $(el)
    const text = cleanText(el$.text())
    let id = el$.attr('id')
    if(!id){
      // try to find anchor child
      const a = el$.find('a').first()
      id = a.attr('id') || a.attr('name')
    }

    if(!text) return

    // Heuristics: if the heading contains kana/kanji or a JLPT marker like N5, include
    const jlptMatch = text.match(/N[1-5]/i) || text.match(/N[1-5]级|N[1-5]級/)
    const level = jlptMatch ? jlptMatch[0].toUpperCase() : ''

    const item = {
      id: id || `item-${i}`,
      name: text,
      level: level || 'Unknown',
      description: '',
      links: [
        { label: 'Japbase', url: `${BASE}${id ? '#'+id : ''}` },
        { label: 'Bunpro (search)', url: `https://www.bunpro.jp/grammar_points?search=${encodeURIComponent(text)}` },
        { label: 'Imabi (site search)', url: `https://www.google.com/search?q=site:imabi.net+${encodeURIComponent(text)}` }
      ]
    }
    out.push(item)
  })

  // If there are explicit anchor links in the content, prefer those
  $('a[href^="#"]').each((i, el) => {
    const href = $(el).attr('href')
    const text = cleanText($(el).text())
    if(!text) return
    const id = href.replace(/^#/, '')
    // avoid duplicates
    if(out.find(o => o.id === id || o.name === text)) return
    out.push({ id, name: text, level: 'Unknown', description:'', links:[{label:'Japbase', url:`${BASE}#${id}`},{label:'Bunpro (search)', url:`https://www.bunpro.jp/grammar_points?search=${encodeURIComponent(text)}`},{label:'Imabi (site search)', url:`https://www.google.com/search?q=site:imabi.net+${encodeURIComponent(text)}`} ] })
  })

  // output files
  const destImported = path.resolve(__dirname, '..', 'src', 'data', 'grammar_imported.json')
  fs.writeFileSync(destImported, JSON.stringify(out, null, 2), 'utf8')
  console.log('Wrote', destImported, 'items:', out.length)

  // optional overwrite
  const args = process.argv.slice(2)
  if(args.includes('--overwrite')){
    const dest = path.resolve(__dirname, '..', 'src', 'data', 'grammar.json')
    fs.writeFileSync(dest, JSON.stringify(out, null, 2), 'utf8')
    console.log('Overwrote', dest)
  }
}

run().catch(err=>{ console.error(err); process.exit(1) })
