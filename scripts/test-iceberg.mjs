// L'ICEBERG DES JETONS · vérifié sans navigateur.
//
// CE QUE CETTE ÉPREUVE GARDE EST UNE DÉCISION, pas un affichage.
//
// 1 · AUCUN ITEM NE RECOPIE UN LEVIER. Sept leviers existaient déjà dans
//     data/frugality, chacun avec son « quand ne pas le faire » et son gain
//     calculé sur les chiffres du lecteur. Le schéma en couvre une partie du
//     même terrain : la tentation d'y recopier « détachez les outils » avec sa
//     propre formulation est immédiate et parfaitement raisonnable sur le
//     moment. Elle produit deux textes qui divergent à la première correction,
//     et c'est le lecteur qui arbitre. Un item qui correspond à un levier le
//     DÉSIGNE ; on vérifie ici que le lien pointe quelque part et que le texte
//     n'a pas été dupliqué au passage.
//
// 2 · LE NOMBRE ANNONCÉ EST LE VRAI. Le titre promet N façons. Un item retiré
//     un jour de ménage, et la page promet vingt-et-un en affichant vingt.
//     C'est la faute la moins chère à commettre de toute cette base.
//
// 3 · AUCUN NOM DE COMMANDE EN DUR. C'est la même règle que sur la page des
//     frameworks, pour la même raison : un nom de commande recopié est faux au
//     premier renommage, quelqu'un le tape, ça ne marche pas, et il croit avoir
//     mal compris. On nomme le mécanisme.
//
// 4 · CHAQUE ITEM PORTE SA CONTRE-INDICATION. Un conseil d'économie sans
//     « quand ne pas le faire » est un slogan, et on finit par couper ce qui
//     tenait le reste debout. La page de sobriété impose déjà cette règle à ses
//     leviers ; elle vaut aussi pour les vingt-et-un.
//
//   node scripts/test-iceberg.mjs
import { build } from 'esbuild'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}

const OUT = 'node_modules/.dojo-iceberg'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}

const I = await load('src/data/tokenIceberg.ts', 'ice.mjs')
const G = await load('src/data/frugality.ts', 'frug.mjs')
const { ICEBERG, SURFACE, REAL, DEEPER, WAY_COUNT, DEPTH_LABEL, leverOf, COMPUTED_COUNT } = I
const { LEVERS } = G

/* --- 1 · le schéma tient debout ------------------------------------------ */

ok('les trois profondeurs sont peuplées', SURFACE.length > 0 && REAL.length > 0 && DEEPER.length > 0,
  `${SURFACE.length} / ${REAL.length} / ${DEEPER.length}`)
ok('aucun identifiant en double', new Set(ICEBERG.map((i) => i.id)).size === ICEBERG.length)
ok('aucun titre en double', new Set(ICEBERG.map((i) => i.title)).size === ICEBERG.length)
ok('chaque item est rangé à sa profondeur', [
  ...SURFACE.map((i) => i.depth === 'surface'),
  ...REAL.map((i) => i.depth === 'real'),
  ...DEEPER.map((i) => i.depth === 'deeper'),
].every(Boolean))
ok('chaque profondeur porte son libellé', ['surface', 'real', 'deeper'].every((d) => !!DEPTH_LABEL[d]?.label))

// LE NOMBRE ANNONCÉ · dérivé, jamais écrit. On vérifie qu'il l'est vraiment,
// c'est à dire qu'il suit si on enlève un item.
ok('le nombre annoncé est celui de ce qui est sous l\'eau', WAY_COUNT === REAL.length + DEEPER.length,
  `${WAY_COUNT}`)
ok('les idées reçues ne sont pas comptées comme des conseils', WAY_COUNT !== ICEBERG.length,
  `${ICEBERG.length} pavés, ${WAY_COUNT} conseils`)

/* --- 2 · chaque item enseigne quelque chose ------------------------------ */

const sentence = (s) => typeof s === 'string' && s.trim().split(/\s+/).length >= 6 && /[.!?]$/.test(s.trim())

for (const i of ICEBERG) {
  ok(`« ${i.title} » dit ce que c'est`, sentence(i.what))
  ok(`« ${i.title} » dit pourquoi ça marche`, sentence(i.why))
  // LA CONTRE-INDICATION · la règle de la page, appliquée aux vingt-et-un.
  ok(`« ${i.title} » dit quand ne pas le faire`, sentence(i.not))
  ok(`« ${i.title} » tient sur une ligne dans le schéma`, i.short.length > 0 && i.short.length <= 60,
    `${i.short.length} signes`)
}

/* --- 3 · les liens vers les leviers pointent quelque part ---------------- */

const leverIds = new Set(LEVERS.map((l) => l.id))
for (const i of ICEBERG.filter((x) => x.lever)) {
  ok(`« ${i.title} » désigne un levier qui existe`, leverIds.has(i.lever), i.lever)
  ok(`« ${i.title} » se résout par leverOf`, !!leverOf(i))
}
ok('des items s\'appuient sur un levier chiffré', COMPUTED_COUNT >= 5, `${COMPUTED_COUNT}`)
ok('un item sans levier ne se résout pas de travers',
  leverOf({ id: 'x', title: 'x', depth: 'real', short: '', what: '', why: '', not: '', called: [] }) === null)

/* --- 4 · AUCUN TEXTE N'EST RECOPIÉ D'UN LEVIER --------------------------- */

// C'est le cœur. On compare les phrases mot à mot après normalisation : deux
// textes identiques veulent dire qu'on a dupliqué une consigne au lieu de la
// désigner, et qu'elle divergera à la première correction.
const norm = (s) => String(s).toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim()
const leverText = new Set()
for (const l of LEVERS) { leverText.add(norm(l.how)); leverText.add(norm(l.why)); leverText.add(norm(l.not)) }

const copied = []
for (const i of ICEBERG) {
  for (const [field, v] of [['what', i.what], ['why', i.why], ['not', i.not]]) {
    if (leverText.has(norm(v))) copied.push(`${i.id}.${field}`)
  }
}
ok('aucun item ne recopie mot à mot le texte d\'un levier', copied.length === 0,
  copied.length ? copied.join(', ') : `${ICEBERG.length * 3} champs comparés`)

/* --- 5 · aucun nom de commande en dur ------------------------------------ */

// La même règle que la page des frameworks. Une commande recopiée est fausse au
// premier renommage, et un lecteur qui la tape croit avoir mal compris.
const COMMAND = /(^|\s)\/[a-z][a-z-]{2,}/
const strays = []
for (const i of ICEBERG) {
  const all = [i.title, i.short, i.what, i.why, i.not, ...i.called].join(' · ')
  const m = all.match(COMMAND)
  if (m) strays.push(`${i.id} · ${m[0].trim()}`)
}
ok('aucun nom de commande écrit en dur', strays.length === 0, strays.join(' | ') || 'le mécanisme, pas la commande')

// … et le schéma dit quand même OÙ on est, sinon « le mécanisme » devient une
// abstraction que personne ne sait rattacher à son écran.
const withNames = ICEBERG.filter((i) => i.called.length > 0).length
ok('la plupart des items disent comment ça s\'appelle ailleurs', withNames >= ICEBERG.length / 2,
  `${withNames} sur ${ICEBERG.length}`)

/* --- 6 · la page lit bien les données ------------------------------------ */

const page = readFileSync('src/frugality/TokenIceberg.tsx', 'utf8')
ok('le schéma vient des données', /from '\.\.\/data\/tokenIceberg'/.test(page))
ok('le nombre affiché est dérivé', /\{WAY_COUNT\}/.test(page))
ok('le gain affiché est calculé, pas écrit', /saving\(usage, lever\)/.test(page))
ok('aucun pourcentage écrit en dur dans le schéma', !/\b\d{1,3}\s?%/.test(page.replace(/\{[^}]*%[^}]*\}/g, '')))
const host = readFileSync('src/frugality/Frugality.tsx', 'utf8')
ok('la page de sobriété porte le schéma', /<TokenIceberg usage=\{u\} \/>/.test(host))
// L'ORDRE EST L'ARGUMENT · le schéma entre le calculateur et les leviers. Avant
// le calculateur il n'est qu'une affiche, après les leviers personne n'y va.
ok('le schéma est placé après le calculateur', host.indexOf('fr-calc') < host.indexOf('<TokenIceberg'))
ok('le schéma est placé avant les leviers', host.indexOf('<TokenIceberg') < host.indexOf('in the order that pays'))

/* --- 7 · les morsures ---------------------------------------------------- */

ok('morsure · une phrase trop courte est vue', !sentence('Do it.'))
ok('morsure · une phrase sans point est vue', !sentence('this is a long enough sentence but unfinished'))
ok('morsure · une vraie phrase passe', sentence('Every connected tool ships its full schema on every request.'))
ok('morsure · une commande est vue', COMMAND.test('run /compact when it gets long'))
ok('morsure · une barre oblique ordinaire ne l\'est pas', !COMMAND.test('input/output rates differ'))
ok('morsure · un texte recopié serait vu', leverText.has(norm(LEVERS[0].why)))

console.log(fails ? `\ntest-iceberg · ${fails} problème(s)` : `\ntest-iceberg · ${WAY_COUNT} façons, aucune recopiée d'un levier`)
// LA SORTIE EST VIDÉE AVANT DE PARTIR · « process.exitCode » et non
// « process.exit() ».
//
// POURQUOI CE N'EST PAS UN DÉTAIL DE STYLE. Vers un terminal, l'écriture est
// synchrone et tout s'affiche. Vers un TUYAU · c'est à dire dès que le portail
// lance cette épreuve · elle est asynchrone, et « process.exit() » part sans
// attendre : ce qui n'est pas encore parti est JETÉ.
//
// Mesuré ici même : la même épreuve sur les mêmes données rendait 30 690
// caractères une fois sur deux et 9 326 l'autre, soit 179 lignes sur 528. Le
// code de sortie, lui, restait juste · une épreuve en échec était bien
// déclarée en échec. Ce qui disparaissait, c'était le DÉTAIL, c'est à dire la
// seule chose qu'on lit pour corriger.
//
// Poser le code et laisser Node sortir tout seul vide la file d'abord. Ces
// épreuves ne tiennent aucune ressource ouverte, donc il n'y a rien à forcer.
process.exitCode = fails ? 1 : 0
