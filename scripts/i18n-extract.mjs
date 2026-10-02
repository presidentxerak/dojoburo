// LA SOURCE DES TRADUCTIONS · demandé : « mets en place la traduction en
// fonction de la langue du user (français, anglais, espagnol, italien,
// allemand, portugais, japonais etc...) ».
//
// Rassemble chaque texte d'INTERFACE (le dictionnaire, les textes des écrans du
// jeu, les noms des formations et de leurs leçons) dans
// src/i18n/source-ui.json : une liste { en, fr }, l'anglais servant de clé aux
// catalogues des autres langues (src/i18n/locales/<code>.json).
//
// Deux chemins, parce que les textes vivent de deux façons :
//   · les MODULES DE DONNÉES sont chargés et parcourus (toute paire { en, fr }
//     trouvée, y compris les textes composés à partir de prix ou de comptes) ;
//   · les ÉCRANS (.tsx) sont lus et leurs B('…', '…') littéraux relevés.
// Le contenu des leçons (les cours eux-mêmes) n'en fait pas partie : il a son
// propre lot, bien plus gros.
//
//   node scripts/i18n-extract.mjs
import { build } from 'esbuild'
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

const OUT = 'node_modules/.dojo-i18n'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent', loader: { '.png': 'empty', '.svg': 'empty', '.md': 'text' } })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}

const pairs = new Map()
const add = (en, fr) => {
  if (typeof en !== 'string' || typeof fr !== 'string') return
  const e = en.trim()
  if (!e || pairs.has(e)) return
  pairs.set(e, fr.trim())
}
const isBi = (v) => v && typeof v === 'object' && !Array.isArray(v) && typeof v.en === 'string' && typeof v.fr === 'string'
const walk = (v, seen = new Set(), depth = 0) => {
  if (!v || typeof v !== 'object' || seen.has(v) || depth > 8) return
  seen.add(v)
  if (isBi(v)) { add(v.en, v.fr); return }
  for (const x of Array.isArray(v) ? v : Object.values(v)) walk(x, seen, depth + 1)
}

// 1 · le dictionnaire
const D = await load('src/i18n/dict.ts', 'dict.mjs')
for (const e of Object.values(D.DICT)) add(e.en, e.fr)

// 2 · les modules de données de l'interface
const MODULES = [
  'src/temple/templeText.ts', 'src/game/communityText.ts', 'src/game/clanText.ts', 'src/game/accountText.ts',
  'src/game/ranks.ts', 'src/game/achievements.ts', 'src/temple/masterDaily.ts', 'src/pixel/masters.ts',
  'src/data/landing.ts', 'src/data/promo.ts', 'src/data/legal.ts', 'src/data/seo.ts', 'src/data/plans.ts',
]
for (const [k, m] of MODULES.entries()) walk(await load(m, `m${k}.mjs`))

// 3 · les formations : leur nom, leur phrase, et le titre, l'objectif et le
// badge de chaque leçon, qui s'affichent sur la carte et dans les temples
const P = await load('src/data/packs.ts', 'packs.mjs')
for (const p of P.PACKS) {
  add(p.title.en, p.title.fr); add(p.blurb.en, p.blurb.fr)
  for (const { module, level } of P.levelsOf(p)) {
    if (module.title) add(module.title.en, module.title.fr)
    add(level.title.en, level.title.fr); add(level.learn.en, level.learn.fr); add(level.badge.en, level.badge.fr)
  }
}

// 4 · les B('…', '…') littéraux des écrans
const LIT = /\bB\(\s*(['"`])((?:\\.|(?!\1)[^\\])*)\1\s*,\s*(['"`])((?:\\.|(?!\3)[^\\])*)\3\s*,?\s*\)/g
const unq = (q, s) => (q === '`' ? s : s.replace(new RegExp(`\\\\${q}`, 'g'), q)).replace(/\\n/g, '\n').replace(/\\\\/g, '\\')
const files = (d) => readdirSync(d).flatMap((e) => { const p = join(d, e); return statSync(p).isDirectory() ? files(p) : /\.tsx$/.test(e) ? [p] : [] })
for (const f of [...files('src/game'), ...files('src/temple'), ...files('src/pixel'), 'src/components/SupportBot.tsx']) {
  const src = readFileSync(f, 'utf8')
  for (const m of src.matchAll(LIT)) {
    if (m[1] === '`' && m[2].includes('${')) continue
    if (m[3] === '`' && m[4].includes('${')) continue
    add(unq(m[1], m[2]), unq(m[3], m[4]))
  }
}

const list = [...pairs].map(([en, fr]) => ({ en, fr })).sort((a, b) => a.en.localeCompare(b.en))
writeFileSync('src/i18n/source-ui.json', JSON.stringify(list, null, 1) + '\n')
console.log(`i18n-extract · ${list.length} textes d'interface · ${list.reduce((n, x) => n + x.en.length, 0)} caractères`)

// 5 · LE CONTENU DES COURS · demandé : « fais toutes les traductions et faudra
// le faire pour tous les nouveaux cours ». Chaque leçon (corps, quiz,
// approfondissements, enrichissements), les cours vendus à part, et la
// bibliothèque de la communauté (prompts, ressources). Un texte déjà dans
// l'interface n'y est pas répété. Les catalogues de contenu sont chargés à
// part, à l'ouverture d'une leçon (voir src/i18n/catalog.ts).
const uiKeys = new Set(list.map((x) => x.en))
pairs.clear()
const CONTENT = ['src/data/curriculum.ts', 'src/data/enrich/index.ts', 'src/data/deep/index.ts', 'src/data/community/prompts.ts', 'src/data/community/resources.ts']
const walkDeep = (v, seen = new Set(), depth = 0) => {
  if (!v || typeof v !== 'object' || seen.has(v) || depth > 14) return
  seen.add(v)
  if (isBi(v)) { if (!uiKeys.has(v.en.trim())) add(v.en, v.fr); return }
  for (const x of Array.isArray(v) ? v : Object.values(v)) walkDeep(x, seen, depth + 1)
}
for (const [k, m] of CONTENT.entries()) walkDeep(await load(m, `c${k}.mjs`))
const content = [...pairs].map(([en, fr]) => ({ en, fr })).sort((a, b) => a.en.localeCompare(b.en))
writeFileSync('src/i18n/source-content.json', JSON.stringify(content, null, 1) + '\n')
console.log(`i18n-extract · ${content.length} textes de cours · ${content.reduce((n, x) => n + x.en.length, 0)} caractères`)
