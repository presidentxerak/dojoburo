// L'ASSEMBLAGE D'UN CATALOGUE · node scripts/i18n-merge.mjs <code>
//
// Les traductions s'écrivent par lots, dans node_modules/.i18n-parts/<code>/
// (hors du dépôt) : chaque lot est un fichier JSON { "start": i, "items":
// ["traduction", ...] } qui traduit, dans l'ORDRE, les textes de
// src/i18n/source-ui.json à partir de l'indice `start`. Travailler par
// position, et non en recopiant les clés anglaises, évite toute faute de
// frappe dans une clé : la clé est reprise telle quelle de la source.
//
// Les lots sont fusionnés dans src/i18n/locales/<code>.json, en gardant les
// traductions déjà présentes pour les textes qu'aucun lot ne couvre.
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const code = process.argv[2]
if (!code) { console.error('usage : node scripts/i18n-merge.mjs <code>'); process.exit(1) }
const SOURCE = JSON.parse(readFileSync('src/i18n/source-ui.json', 'utf8'))
const out = existsSync(`src/i18n/locales/${code}.json`) ? JSON.parse(readFileSync(`src/i18n/locales/${code}.json`, 'utf8')) : {}
const dir = join('node_modules/.i18n-parts', code)
let n = 0
for (const f of existsSync(dir) ? readdirSync(dir).filter((x) => x.endsWith('.json')).sort() : []) {
  const part = JSON.parse(readFileSync(join(dir, f), 'utf8'))
  if (!Number.isInteger(part.start) || !Array.isArray(part.items)) { console.error(`lot illisible : ${f}`); process.exit(1) }
  part.items.forEach((tr, k) => {
    const src = SOURCE[part.start + k]
    if (src && typeof tr === 'string' && tr.trim()) { out[src.en] = tr; n++ }
  })
}
const keep = Object.fromEntries(SOURCE.filter((s) => out[s.en]).map((s) => [s.en, out[s.en]]))
writeFileSync(`src/i18n/locales/${code}.json`, JSON.stringify(keep, null, 1) + '\n')
console.log(`i18n-merge · ${code} · ${n} traductions lues · ${Object.keys(keep).length} / ${SOURCE.length} dans le catalogue`)
