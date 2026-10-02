// LE DÉCOUPAGE DU TRAVAIL · node scripts/i18n-chunks.mjs [taille]
//
// Découpe src/i18n/source-content.json en lots consécutifs d'environ <taille>
// caractères anglais (110 000 par défaut), pour les confier à des traducteurs
// en parallèle. Affiche, pour chaque lot, ses indices [début, fin[.
import { readFileSync } from 'node:fs'

const SIZE = Number(process.argv[2] || 110000)
const S = JSON.parse(readFileSync('src/i18n/source-content.json', 'utf8'))
const chunks = []
let start = 0, acc = 0
S.forEach((x, i) => {
  acc += x.en.length
  if (acc >= SIZE) { chunks.push([start, i + 1]); start = i + 1; acc = 0 }
})
if (start < S.length) chunks.push([start, S.length])
console.log(JSON.stringify(chunks))
console.error(`${chunks.length} lots · ${S.length} textes`)
