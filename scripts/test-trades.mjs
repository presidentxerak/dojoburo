// LES FORMATIONS MÉTIER · vérifiées sans navigateur.
//
// LE GROS DU TRAVAIL EST DÉJÀ FAIT AILLEURS. Les cités métier sont des cités
// comme les autres : elles entrent dans ALL_MODULES, donc scripts/test-curriculum
// leur applique déjà les plafonds de longueur, l'interdiction des chemins de
// menu, le français, les maîtres qui existent et les coordonnées uniques. C'est
// tout l'intérêt d'avoir une seule source ; une deuxième structure aurait
// demandé une deuxième copie de ces trente règles, qui aurait divergé.
//
// CE QUI RESTE À VÉRIFIER ICI est ce qu'un métier a de particulier :
//
//   IL EST ENTIER. Une formation vendue quarante-neuf euros qui annonce trois
//   cités et en sert deux vole quelqu'un qui vient de payer.
//
//   IL EST À LUI. Une cité qui apparaît dans deux métiers serait vendue deux
//   fois, et le compteur de l'un afficherait la progression de l'autre.
//
//   ILS SONT COMPARABLES. Six métiers dont l'un fait trois dojos et l'autre
//   quinze n'ont pas le même prix, or ils en ont un seul.
//
//   IL NE REDIT PAS LE PARCOURS. Une formation métier qui reprend les leçons
//   du généraliste vend deux fois la même chose, et celui qui a payé les deux
//   s'en aperçoit au troisième dojo.
//
//   node scripts/test-trades.mjs
import { build } from 'esbuild'
import { writeFileSync, mkdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}

const OUT = 'node_modules/.dojo-trades'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}

const T = await load('src/data/trades.ts', 'trades.mjs')
const C = await load('src/data/curriculum.ts', 'cur.mjs')
const {
  TRADES, TRADE_MODULES, TRADE_BY_ID, TRADE_OF_CITY, citiesOfTrade,
  TRADE_COUNT, TRADE_CITY_COUNT, TRADE_LEVEL_COUNT,
} = T
const { PATH_MODULES, ALL_MODULES, MODULE_BY_ID } = C

/* --- 1 · chaque métier est entier ---------------------------------------- */

// QUATORZE MÉTIERS · six au départ, puis huit demandés (« ajoute pleins
// d'autres formations métier : Designer, Teacher, Student, Scientist… »).
ok('il y a quatorze métiers', TRADE_COUNT === 14, `${TRADE_COUNT}`)
// … ET CHACUN PEUT S'ACHETER · la liste du serveur est recopiée (les fonctions
// ne lisent pas les données du jeu) ; elle doit être la même, ni plus ni moins.
{
  const src = readFileSync('api/_lib/checkoutSession.ts', 'utf8')
  const block = src.match(/BUY_TRADES[^=]*=\s*new Set\(\[([\s\S]*?)\]\)/)?.[1] ?? ''
  const buy = [...block.matchAll(/'([a-z]+)'/g)].map((m) => m[1]).sort()
  const ids = TRADES.map((t) => t.id).sort()
  ok('chaque métier du programme peut s\'acheter, et rien d\'autre', buy.join(',') === ids.join(','), `serveur ${buy.length} · programme ${ids.length}`)
}
ok('aucun identifiant de métier en double',
  new Set(TRADES.map((t) => t.id)).size === TRADES.length)

for (const t of TRADES) {
  const cities = citiesOfTrade(t.id)
  ok(`« ${t.id} » a toutes ses cités`, cities.length === t.cities.length,
    `${cities.length} sur ${t.cities.length}`)
  ok(`« ${t.id} » a ${TRADE_CITY_COUNT} cités`, cities.length === TRADE_CITY_COUNT,
    `${cities.length}`)
  ok(`« ${t.id} » est écrit en deux langues`,
    t.label.en && t.label.fr && t.who.en && t.who.fr && t.who.fr !== t.who.en)
}

/* --- 2 · chaque cité appartient à un seul métier -------------------------- */

const owned = TRADES.flatMap((t) => t.cities)
ok('aucune cité ne sert deux métiers', new Set(owned).size === owned.length,
  `${owned.length - new Set(owned).size} partagée(s)`)

ok('chaque cité métier a un métier',
  TRADE_MODULES.every((m) => Boolean(TRADE_OF_CITY[m.id])),
  TRADE_MODULES.filter((m) => !TRADE_OF_CITY[m.id]).map((m) => m.id).join(', ') || 'toutes')

ok('le lien inverse dit la même chose',
  TRADES.every((t) => t.cities.every((c) => TRADE_OF_CITY[c] === t.id)))

ok('chaque cité métier porte la piste métier',
  TRADE_MODULES.every((m) => m.track === 'trade'),
  TRADE_MODULES.filter((m) => m.track !== 'trade').map((m) => m.id).join(', ') || 'toutes')

/* --- 3 · les six métiers sont comparables --------------------------------- */

// Un seul prix pour six formations suppose six formations de même ampleur.
const sizes = TRADES.map((t) => citiesOfTrade(t.id).reduce((n, m) => n + m.levels.length, 0))
ok('les six métiers ont le même nombre de dojos',
  new Set(sizes).size === 1, sizes.join(', '))
ok('le compte annoncé est celui d\'un métier',
  TRADE_LEVEL_COUNT === sizes[0], `${TRADE_LEVEL_COUNT}`)

const mins = TRADES.map((t) => citiesOfTrade(t.id)
  .reduce((n, m) => n + m.levels.reduce((k, l) => k + l.minutes, 0), 0))
ok('aucune formation métier n\'est deux fois plus longue qu\'une autre',
  Math.max(...mins) <= Math.min(...mins) * 1.5, mins.join(', '))

/* --- 4 · un métier ne redit pas le parcours ------------------------------- */

// LE MÊME TITRE DANS LES DEUX est le signe le plus net d'un doublon, et c'est
// celui qui se glisse tout seul : on écrit « les bases du prompt » pour le
// growth marketer sans se souvenir que la cité 2 s'appelle déjà comme ça.
const pathTitles = new Set(PATH_MODULES.flatMap((m) => m.levels.map((l) => l.title.en.toLowerCase())))
const echoes = TRADE_MODULES.flatMap((m) => m.levels
  .filter((l) => pathTitles.has(l.title.en.toLowerCase()))
  .map((l) => `${m.id}/${l.id}`))
ok('aucun dojo métier ne reprend un titre du parcours', echoes.length === 0,
  echoes.slice(0, 3).join(', ') || `${pathTitles.size} titres`)

// … NI LE MÊME GESTE. Deux dojos qui demandent exactement la même chose sont
// un dojo, vendu deux fois.
const pathActs = new Set(PATH_MODULES.flatMap((m) => m.levels.map((l) => l.act.en.toLowerCase())))
const sameActs = TRADE_MODULES.flatMap((m) => m.levels
  .filter((l) => pathActs.has(l.act.en.toLowerCase()))
  .map((l) => `${m.id}/${l.id}`))
ok('aucun dojo métier ne reprend un geste du parcours', sameActs.length === 0,
  sameActs.slice(0, 3).join(', ') || `${pathActs.size} gestes`)

/* --- 5 · elles sont branchées au programme -------------------------------- */

// ON COMPARE DES IDENTIFIANTS, PAS DES OBJETS · cette épreuve charge
// data/trades et data/curriculum dans deux paquets distincts, donc la même
// cité y est deux objets différents. Comparer par identité aurait fait rougir
// une garde sur du code juste, ce qui est la seule chose qu'une garde n'a pas
// le droit de faire : on apprend alors à la contourner.
const inProgramme = new Set(ALL_MODULES.map((m) => m.id))
const missing = TRADE_MODULES.filter((m) => !inProgramme.has(m.id)).map((m) => m.id)
ok('les cités métier sont dans le programme', missing.length === 0,
  missing.join(', ') || `${ALL_MODULES.length} cités en tout`)
ok('les cités métier sont dans l\'index',
  TRADE_MODULES.every((m) => MODULE_BY_ID[m.id]?.id === m.id))

// … ET ELLES Y SONT ENTIÈRES · un identifiant présent dans l'index avec
// zéro dojo derrière serait un lien qui mène à une cité vide.
ok('chaque cité métier a ses dojos dans le programme',
  TRADE_MODULES.every((m) => MODULE_BY_ID[m.id]?.levels.length === m.levels.length))

// UN MÉTIER INVENTÉ NE FAIT PAS TOMBER LA PAGE · l'adresse arrive par la barre
// d'adresse, et elle doit rendre une page plutôt qu'une erreur.
ok('un métier inventé rend une liste vide', citiesOfTrade('nexistepas').length === 0)
ok('un métier inventé n\'est pas dans l\'index', TRADE_BY_ID['nexistepas'] === undefined)

/* --- 6 · les morsures ------------------------------------------------------ */

ok('morsure · une cité partagée serait vue',
  new Set(['a', 'b', 'a']).size !== 3)
ok('morsure · des cités distinctes ne le sont pas',
  new Set(['a', 'b', 'c']).size === 3)
ok('morsure · un titre repris serait vu',
  pathTitles.has(PATH_MODULES[0].levels[0].title.en.toLowerCase()))
ok('morsure · un titre neuf ne l\'est pas',
  !pathTitles.has('un titre que personne n a jamais ecrit'))
ok('morsure · deux métiers de tailles différentes seraient vus',
  new Set([9, 6]).size !== 1)

console.log(fails
  ? `\ntest-trades · ${fails} problème(s)`
  : `\ntest-trades · ${TRADE_COUNT} métiers, ${TRADE_MODULES.length} cités, ${TRADE_LEVEL_COUNT} dojos chacun`)
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
