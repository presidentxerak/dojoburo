// LA VÉRIFICATION D'UN CATALOGUE · node scripts/i18n-check.mjs [code...]
//
// Pour chaque langue à catalogue (src/i18n/locales/<code>.json) :
//   · JSON valide, un objet { "texte anglais": "traduction" } ;
//   · couverture des textes d'interface (src/i18n/source-ui.json) ;
//   · aucune clé inconnue (une clé qui n'existe plus ne sert à rien) ;
//   · les marqueurs gardés à l'identique ({n}, {p}...) ;
//   · aucune traduction vide, aucun tiret cadratin ni demi-cadratin, aucun
//     emoji (règles de contenu du projet).
// Sort en échec si la couverture d'une langue est sous le seuil (95 %).
import { readFileSync, existsSync } from 'node:fs'

// --content · vérifie les catalogues du contenu des cours (src/i18n/locales/
// content/<code>.json) contre src/i18n/source-content.json.
const CONTENT = process.argv.includes('--content')
const SOURCE = JSON.parse(readFileSync(CONTENT ? 'src/i18n/source-content.json' : 'src/i18n/source-ui.json', 'utf8'))
const KEYS = new Set(SOURCE.map((x) => x.en))
const args = process.argv.slice(2).filter((a) => !a.startsWith('--'))
const LANGS = args.length ? args : ['es', 'it', 'de', 'pt', 'ja']
const MIN = Number(process.env.I18N_MIN ?? 95)
const MARK = /\{[a-z]+\}/g
const DASH = /[\u2013\u2014\u2015]/
const EMOJI = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B50}\u{2705}]/u

let fails = 0
for (const l of LANGS) {
  const f = CONTENT ? `src/i18n/locales/content/${l}.json` : `src/i18n/locales/${l}.json`
  if (!existsSync(f)) { console.log(`FAIL  ${l} · fichier absent`); fails++; continue }
  let cat
  try { cat = JSON.parse(readFileSync(f, 'utf8')) } catch (e) { console.log(`FAIL  ${l} · JSON invalide · ${e.message}`); fails++; continue }
  const problems = []
  let covered = 0
  for (const [en, tr] of Object.entries(cat)) {
    if (!KEYS.has(en)) { problems.push(`clé inconnue : ${en.slice(0, 60)}`); continue }
    if (typeof tr !== 'string' || !tr.trim()) { problems.push(`vide : ${en.slice(0, 60)}`); continue }
    const a = (en.match(MARK) || []).sort().join(','), b = (tr.match(MARK) || []).sort().join(',')
    if (a !== b) problems.push(`marqueurs ${a} ≠ ${b} : ${en.slice(0, 60)}`)
    if (DASH.test(tr)) problems.push(`tiret long : ${tr.slice(0, 60)}`)
    if (EMOJI.test(tr)) problems.push(`emoji : ${tr.slice(0, 60)}`)
    covered++
  }
  const pct = Math.round((covered / KEYS.size) * 1000) / 10
  const ok = pct >= MIN && problems.length === 0
  if (!ok) fails++
  console.log(`${ok ? 'ok   ' : 'FAIL '} ${CONTENT ? 'cours · ' : ''}${l} · ${covered} / ${KEYS.size} (${pct} %)${problems.length ? ` · ${problems.length} problème(s)` : ''}`)
  for (const p of problems.slice(0, 15)) console.log(`        ${p}`)
}
process.exitCode = fails ? 1 : 0
