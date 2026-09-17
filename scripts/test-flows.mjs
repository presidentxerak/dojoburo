// LES CHEMINS DU SITE TIENNENT-ILS ? · la navigation, vérifiée sans navigateur.
//
// Ce que cette garde protège n'est pas l'apparence d'une page, c'est le fait
// de pouvoir aller d'un endroit à un autre. Rien de tout ça ne se voit dans un
// typecheck, et un test de navigateur ne visite que les pages qu'on a pensé à
// lui nommer, donc la moitié du site peut se détacher sans qu'une seule épreuve
// rougisse.
//
// CE QU'ELLE A TROUVÉ LA PREMIÈRE FOIS, et qui explique chaque règle :
//
//   · SIX pieds de page écrits à la main, tous différents. Cinq ne
//     mentionnaient pas /build, devenu la porte d'entrée du produit. Le même
//     cours s'appelait « Academy » ici et « Prompt engineering » là.
//   · dix-sept pages de personnages qu'AUCUN lien du site n'atteignait : un
//     îlot indexé, relié à rien.
//   · un lien vers une ancre qui n'existait pas sur la page qui le portait.
//
// Un lien mort ne lève aucune erreur : il rend une page blanche, et seul un
// visiteur s'en aperçoit.
//
//   node scripts/test-flows.mjs
import { build } from 'esbuild'
import { readFileSync, readdirSync, statSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}

const OUT = 'node_modules/.dojo-flows'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}

const POS = await load('src/data/positioning.ts', 'pos.mjs')
const ROLES = await load('src/data/roleAgents.ts', 'roles.mjs')
const UC = await load('src/data/agentUseCases.ts', 'uc.mjs')
const LIB = await load('src/data/library.ts', 'lib.mjs')
const ACA = await load('src/data/academy.ts', 'aca.mjs')

function walk(dir, out = []) {
  for (const n of readdirSync(dir)) {
    if (n === 'node_modules') continue
    const p = join(dir, n)
    if (statSync(p).isDirectory()) walk(p, out)
    else if (/\.tsx$/.test(n)) out.push(p)
  }
  return out
}
const FILES = walk('src')
const read = (f) => readFileSync(f, 'utf8')

/* --- 1 · toute adresse écrite mène quelque part --------------------------- */

// Les routes que main.tsx sait servir · lues dans le routeur, jamais recopiées.
const router = read('src/main.tsx')
const exact = new Set([...router.matchAll(/path === '(\/[^']*)'/g)].map((m) => m[1]))
// les routes à motif, sous la forme d'un test
const patterns = [...router.matchAll(/path\.match\(\/\^([^/]*(?:\\\/[^/]*)*)\/i?\)/g)]
  .map((m) => new RegExp('^' + m[1].replace(/\\\//g, '/'), 'i'))

ok('le routeur déclare des routes exactes', exact.size >= 6, `${exact.size}`)
ok('…et des routes à motif', patterns.length >= 3, `${patterns.length}`)

/** Une adresse est-elle servie ? */
function served(href) {
  const path = href.split('#')[0].split('?')[0]
  if (path === '' || path === '/') return true
  if (exact.has(path)) return true
  return patterns.some((re) => re.test(path))
}

const dead = []
for (const f of FILES) {
  for (const m of read(f).matchAll(/href="(\/[^"]*)"/g)) {
    // Un gabarit (`/build/${x}`) n'est pas vérifiable ici · les cibles
    // concrètes le sont par les listes de données, plus bas.
    if (m[1].includes('${')) continue
    if (!served(m[1])) dead.push(`${f} → ${m[1]}`)
  }
}
ok('aucun lien vers une adresse que le routeur ne sert pas', dead.length === 0, dead.join(', '))
// …et la sonde sait dire non, sinon elle ne prouve rien.
ok('…et la sonde sait refuser', served('/academy') && !served('/page-qui-nexiste-pas'))

/* --- 2 · chaque ancre existe sur la page qui la porte --------------------- */

// Un lien « #pricing » sur une page sans section `id="pricing"` ne fait rien du
// tout : la page ne bouge pas, et rien ne le signale.
const badAnchors = []
for (const f of FILES) {
  const src = read(f)
  const ids = new Set([...src.matchAll(/ id="([a-z0-9-]+)"/g)].map((m) => m[1]))
  for (const m of src.matchAll(/href="#([a-z0-9-]+)"/g)) {
    // Les fragments d'app (#app, #guide, #academy) sont des ROUTES, pas des
    // ancres · App.tsx lit location.hash pour changer de vue.
    if (['app', 'guide', 'academy', 'pricing'].includes(m[1])) continue
    if (!ids.has(m[1])) badAnchors.push(`${f} → #${m[1]}`)
  }
}
ok('chaque ancre pointe vers une section de sa page', badAnchors.length === 0, badAnchors.join(', '))

/* --- 3 · les piliers sont atteignables des deux côtés --------------------- */

const header = read('src/components/SiteHeader.tsx')
const footer = read('src/components/SiteFooter.tsx')
ok('l\'en-tête lit les piliers', /PILLARS/.test(header))
// LE PIED DE PAGE aussi · il en existait six, écrits à la main, et cinq
// ignoraient /build. Un pied de page ne se regarde pas, donc rien ne le
// contredit, donc il pourrit.
ok('le pied de page lit les piliers', /PILLARS/.test(footer))
ok('…et il n\'écrit aucun libellé de pilier lui même',
  POS.PILLARS.every((p) => !footer.includes(`>${p.nav}<`)),
  POS.PILLARS.filter((p) => footer.includes(`>${p.nav}<`)).map((p) => p.nav).join(', '))

// UN SEUL pied de page dans tout le produit.
const ownFooters = FILES.filter((f) => f !== 'src/components/SiteFooter.tsx' && read(f).includes('<footer className="lp-footer">'))
ok('un seul pied de page pour tout le site', ownFooters.length === 0, ownFooters.join(', '))

// Chaque pilier mène à une adresse servie.
const badPillars = POS.PILLARS.filter((p) => !served(p.path)).map((p) => `${p.id} → ${p.path}`)
ok('chaque pilier mène à une page qui existe', badPillars.length === 0, badPillars.join(', '))

/* --- 4 · aucune page n'est un îlot ---------------------------------------- */

// Une page indexée que rien n'atteint depuis le site est un cul-de-sac : elle
// reçoit des visiteurs par un moteur de recherche et ne les mène nulle part.
// Les dix-sept pages de personnages l'ont été pendant des mois.
const allSrc = FILES.map(read).join('\n') + read('src/components/SiteFooter.tsx')
const HUBS = ['/build', '/academy', '/library', '/frugality', '/guide', '/teammates', '/terms', '/privacy']
const orphans = HUBS.filter((h) => !allSrc.includes(`href="${h}"`))
ok('aucune page principale n\'est orpheline', orphans.length === 0, orphans.join(', '))

// …et les familles de pages profondes sont atteintes par un gabarit.
for (const [what, tmpl] of [
  ['les cas d\'usage', '/build/${'],
  ['les entrées de bibliothèque', '/library/${'],
  ['les personnages', '/${'],
]) ok(`${what} sont atteints depuis une liste`, allSrc.includes(tmpl))

/* --- 5 · le produit se nomme pareil partout ------------------------------- */

// Le même cours s'appelait « Academy » dans un pied de page et « Prompt
// engineering » dans l'en-tête. Un visiteur ne sait pas que c'est le même.
const ACADEMY = POS.PILLAR_BY_ID.academy.nav
ok('le cours de prompt engineering porte un seul nom', ACADEMY.length > 0, ACADEMY)
const page = read('src/academy/Academy.tsx')
ok('…et sa page le porte aussi', page.includes('PILLAR_BY_ID.academy.nav'))

// LES EFFECTIFS NE S'ÉCRIVENT PAS. « eighteen teammates » est resté affiché
// sur dix-sept pages, et « Seventeen specialists » juste à côté d'une liste
// qui en comptait un autre nombre.
//
// LA RÈGLE VISE UN COMPTE DE NOS CHOSES, pas un nombre écrit en lettres. Sa
// première version attrapait « twenty turns is not twenty times the price of
// one », qui est une phrase d'arithmétique parfaitement juste au coeur de la
// leçon sur le coût d'une conversation. Une garde qui fait corriger une bonne
// phrase est pire qu'une garde absente : on finit par la contourner, et elle
// ne surveille plus rien.
//
// Elle exige donc le mot-nombre COLLÉ au nom de ce qu'on compte.
const COUNTED = 'lessons|tracks|teammates|specialists|agents|characters|use cases|courses|levers|entries|files|prompts|skills|briefs|pillars|steps|diplomas'
const WORDS = new RegExp(`\\b(twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty)\\s+(?:\\w+\\s+)?(${COUNTED})\\b`, 'i')
// …et « the twelve », « all seventeen », qui comptent sans nommer.
const BARE = /\b(?:the|all|these|our)\s+(twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty)\b/i
const typed = []
for (const f of FILES) {
  for (const [i, line] of read(f).split('\n').entries()) {
    const t = line.trim()
    if (t.startsWith('//') || t.startsWith('*') || t.startsWith('/*') || t.startsWith('{/*')) continue
    if (WORDS.test(line) || BARE.test(line)) typed.push(`${f}:${i + 1} ${t.slice(0, 60)}`)
  }
}
ok('aucun effectif écrit en toutes lettres dans le JSX', typed.length === 0, typed.slice(0, 4).join(' | '))
// LA MORSURE · sans elle, « rien trouvé » ne distingue pas un produit propre
// d'une expression qui ne correspond plus à rien.
ok('…et la règle attrape bien un effectif', WORDS.test('eighteen teammates you can hire') && BARE.test('Back to the twelve'))
// …sans attraper l'arithmétique de la leçon sur le coût d'une conversation.
ok('…sans attraper une phrase de calcul',
  !WORDS.test('twenty turns is not twenty times the price of one') &&
  !BARE.test('turn twenty carries turns one to nineteen with it'))

/* --- 6 · les listes que les pages parcourent ne sont pas vides ------------ */

// Une page qui itère sur une liste vide s'affiche : elle est simplement nue,
// et c'est le genre de page qu'on découvre en production.
for (const [what, n] of [
  ['les piliers', POS.PILLARS.length],
  ['les cours', POS.COURSES.length],
  ['les cas d\'usage', UC.USE_CASES.length],
  ['les personnages publics', ROLES.PUBLIC_AGENTS.length],
  ['les entrées de bibliothèque', LIB.ENTRIES.length],
  ['les pistes de l\'académie', ACA.TRACKS.length],
]) ok(`${what} ne sont pas une liste vide`, n > 0, `${n}`)

// Les douze cas d'usage doivent désigner des personnages qui ont une page
// publique, sinon le lien depuis la page du personnage n'existe jamais.
const pub = new Set(ROLES.PUBLIC_AGENTS.map((r) => r.id))
const hidden = UC.USE_CASES.filter((u) => !pub.has(u.agent)).map((u) => u.agent)
ok('chaque cas d\'usage est porté par un personnage qui a une page', hidden.length === 0, hidden.join(', '))

console.log(fails ? `\n${fails} FAIL` : '\nall ok')
process.exit(fails ? 1 : 0)
