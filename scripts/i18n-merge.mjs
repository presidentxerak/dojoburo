// L'ASSEMBLAGE D'UN CATALOGUE · node scripts/i18n-merge.mjs <code> [ui|content]
//
// Les traductions s'écrivent par lots, hors du dépôt :
//   · interface : node_modules/.i18n-parts/<code>/*.json
//   · cours     : node_modules/.i18n-parts/content-<code>/*.json
// Un lot est { "start": i, "items": [...] } (des textes consécutifs de la
// source à partir de l'indice i) ou { "indices": [...], "items": [...] } (des
// textes choisis, pour compléter un catalogue). Travailler par position et non
// en recopiant les clés anglaises évite toute faute de frappe dans une clé.
//
// Source et catalogue :
//   · interface : src/i18n/source-ui.json      → src/i18n/locales/<code>.json
//   · cours     : src/i18n/source-content.json → src/i18n/locales/content/<code>.json
// Les traductions déjà présentes sont gardées ; seules celles dont le texte
// anglais a disparu de la source sont retirées.
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const [code, kind = 'ui'] = process.argv.slice(2)
if (!code || !['ui', 'content'].includes(kind)) { console.error('usage : node scripts/i18n-merge.mjs <code> [ui|content]'); process.exit(1) }
const SRC = kind === 'ui' ? 'src/i18n/source-ui.json' : 'src/i18n/source-content.json'
const CAT = kind === 'ui' ? `src/i18n/locales/${code}.json` : `src/i18n/locales/content/${code}.json`
const DIR = join('node_modules/.i18n-parts', kind === 'ui' ? code : `content-${code}`)
const SOURCE = JSON.parse(readFileSync(SRC, 'utf8'))
const out = existsSync(CAT) ? JSON.parse(readFileSync(CAT, 'utf8')) : {}
let n = 0
for (const f of existsSync(DIR) ? readdirSync(DIR).filter((x) => x.endsWith('.json')).sort() : []) {
  const part = JSON.parse(readFileSync(join(DIR, f), 'utf8'))
  const idx = Array.isArray(part.indices) ? part.indices : Number.isInteger(part.start) ? part.items.map((_, k) => part.start + k) : null
  if (!idx || !Array.isArray(part.items) || idx.length !== part.items.length) { console.error(`lot illisible : ${f}`); process.exit(1) }
  part.items.forEach((tr, k) => {
    const src = SOURCE[idx[k]]
    if (src && typeof tr === 'string' && tr.trim()) { out[src.en] = tr; n++ }
  })
}
const keep = Object.fromEntries(SOURCE.filter((s) => out[s.en]).map((s) => [s.en, out[s.en]]))
writeFileSync(CAT, JSON.stringify(keep, null, kind === 'ui' ? 1 : 0) + '\n')
console.log(`i18n-merge · ${code} · ${kind} · ${n} traductions lues · ${Object.keys(keep).length} / ${SOURCE.length} dans le catalogue`)
