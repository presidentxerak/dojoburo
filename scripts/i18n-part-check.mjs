// LA VÉRIFICATION D'UN LOT · node scripts/i18n-part-check.mjs <fichier> [ui|content]
//
// Pour un traducteur, avant la fusion : le lot est-il aligné sur la source ?
// Même nombre de textes, mêmes marqueurs ({n}, {p}...), mêmes retours à la
// ligne, aucun texte vide, aucun tiret long, aucun emoji, et les nombres de la
// source présents dans la traduction.
import { readFileSync } from 'node:fs'

const [file, kind = 'content'] = process.argv.slice(2)
const SOURCE = JSON.parse(readFileSync(kind === 'ui' ? 'src/i18n/source-ui.json' : 'src/i18n/source-content.json', 'utf8'))
const part = JSON.parse(readFileSync(file, 'utf8'))
const idx = Array.isArray(part.indices) ? part.indices : part.items.map((_, k) => part.start + k)
const MARK = /\{[a-z]+\}/g
const DASH = /[–—―]/
const EMOJI = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B50}\u{2705}]/u
const NUM = /\d+/g
const bad = []
if (idx.length !== part.items.length) bad.push(`indices ${idx.length} ≠ items ${part.items.length}`)
part.items.forEach((tr, k) => {
  const src = SOURCE[idx[k]]
  if (!src) { bad.push(`#${idx[k]} hors de la source`); return }
  if (typeof tr !== 'string' || !tr.trim()) { bad.push(`#${idx[k]} vide`); return }
  const a = (src.en.match(MARK) || []).sort().join(','), b = (tr.match(MARK) || []).sort().join(',')
  if (a !== b) bad.push(`#${idx[k]} marqueurs ${a} ≠ ${b}`)
  if ((src.en.match(/\n/g) || []).length !== (tr.match(/\n/g) || []).length) bad.push(`#${idx[k]} retours à la ligne différents`)
  if (DASH.test(tr)) bad.push(`#${idx[k]} tiret long`)
  if (EMOJI.test(tr)) bad.push(`#${idx[k]} emoji`)
  const miss = (src.en.match(NUM) || []).filter((x) => !tr.includes(x))
  if (miss.length) bad.push(`#${idx[k]} nombre(s) absent(s) : ${miss.slice(0, 4).join(' ')} · « ${src.en.slice(0, 50)} »`)
})
console.log(bad.length ? `FAIL  ${file} · ${bad.length} problème(s)\n  ${bad.slice(0, 25).join('\n  ')}` : `ok    ${file} · ${part.items.length} textes alignés`)
process.exitCode = bad.length ? 1 : 0
