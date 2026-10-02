// LE RÉFÉRENCEMENT · vérifié sans navigateur.
//
// Demandé : « Trouve une stratégie pour améliorer le SEO dans l'app : change
// et améliore les titres et contenus en fonction ». La stratégie est écrite
// dans src/data/seo.ts ; cette garde tient ce qui la rend vraie :
//   · chaque titre vise une recherche, finit par la marque et tient sous la
//     limite d'affichage ; chaque description tient sous 160 caractères ;
//   · deux formations n'ont jamais le même titre ;
//   · les écrans lisent ces textes (useHeadTags) et le générateur les prérend.
//
//   node scripts/test-seo.mjs
import { build } from 'esbuild'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => { console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : '')); if (!c) fails++ }
const OUT = 'node_modules/.dojo-seo'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  writeFileSync(join(OUT, name), r.outputFiles[0].text)
  return import(pathToFileURL(join(OUT, name)).href)
}
const S = await load('src/data/seo.ts', 'seo.mjs')
const P = await load('src/data/packs.ts', 'packs.mjs')

const TITLE_MAX = 70
const DESC_MAX = 160
for (const lang of ['fr', 'en']) {
  for (const [k, v] of Object.entries(S.SEO)) {
    ok(`${k} (${lang}) · le titre finit par la marque et reste court`, v.title[lang].endsWith('· Dojoburo') && v.title[lang].length <= TITLE_MAX, `${v.title[lang].length} car.`)
    ok(`${k} (${lang}) · la description tient`, v.description[lang].length >= 70 && v.description[lang].length <= DESC_MAX, `${v.description[lang].length} car.`)
  }
  const titles = P.PACKS.map((p) => S.packTitle(p, lang))
  ok(`les formations ont toutes un titre distinct (${lang})`, new Set(titles).size === titles.length)
  ok(`les titres de formation restent courts (${lang})`, titles.every((t) => t.length <= TITLE_MAX), titles.filter((t) => t.length > TITLE_MAX).join(' | ') || 'tous')
}
ok('la formation complète vise « formation IA »', /Formation complète à l'IA/.test(S.packTitle(P.PACKS.find((p) => p.id === 'generaliste'), 'fr')))

const read = (f) => readFileSync(f, 'utf8')
ok('l\'accueil lit son titre dans data/seo', /SEO\.home\.title/.test(read('src/temple/World.tsx')))
ok('chaque formation lit le sien', /packTitle\(pack, lang\)/.test(read('src/temple/Temple.tsx')))
ok('les tarifs, la communauté et la présentation aussi', /SEO\.prices\.title/.test(read('src/game/Tarifs.tsx')) && /SEO\.community\.title/.test(read('src/game/Community.tsx')) && /SEO\.promo\.title/.test(read('src/game/Promo.tsx')))
const G = read('scripts/gen-seo.mjs')
ok('le générateur prérend chaque formation avec Course et Offer', /'@type': 'Course'/.test(G) && /priceCurrency: 'EUR'/.test(G) && /write\(`dojo\/\$\{p\.id\}`/.test(G))
ok('la présentation porte sa FAQ en FAQPage', /'@type': 'FAQPage'/.test(G))
ok('les tarifs et la communauté sont dans le plan du site', /loc: '\/tarifs'/.test(G) && /loc: '\/clan'/.test(G))

console.log(fails ? `\ntest-seo · ${fails} problème(s)` : '\ntest-seo · titres, descriptions, pages prérendues')
process.exitCode = fails ? 1 : 0
