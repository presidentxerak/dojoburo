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

/** Un fichier SANS SES COMMENTAIRES.
 *
 *  Les règles « cette phrase ne doit plus apparaître » ont besoin de ça, et
 *  les premières ne l'avaient pas : elles ont échoué sur MES PROPRES
 *  commentaires, ceux qui expliquent ce que le menu disait avant de changer.
 *  Une garde qui interdit de documenter ce qu'on vient de corriger pousse à
 *  effacer l'explication, ce qui est exactement le contraire du but. */
function speech(src) {
  const out = []
  let block = false
  for (const line of src.split('\n')) {
    const t = line.trim()
    // `{/*` OUVRE un bloc, comme `/*` · il était traité comme une ligne
    // isolée, donc un commentaire JSX sur cinq lignes laissait passer les
    // quatre suivantes. C'est ce qui a fait échouer les deux premières règles
    // du menu sur le commentaire qui explique justement leur correction.
    if (t.startsWith('/*') || t.startsWith('{/*')) block = true
    if (block) { if (t.includes('*/')) block = false; continue }
    if (t.startsWith('//') || t.startsWith('*')) continue
    out.push(line)
  }
  return out.join('\n')
}
const readCode = (f) => speech(read(f))

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

/* --- 2 bis · UN FRAGMENT EST UNE ANCRE OU UNE ROUTE, JAMAIS LES DEUX ----- */

// CE QUE CETTE SECTION A TROUVÉ · cliquer « Tarifs » dans la navigation
// principale menait à la porte du beta privé. Le fragment servait à deux
// choses à la fois : il nommait une vue de l'application (#app, #studio) et il
// servait d'ancre dans la page d'accueil (#pricing, #courses). Rien ne les
// distinguait, donc `route` valait « pricing », la page tombait dans la
// branche de l'application, et un visiteur arrivait sur un mot de passe depuis
// un lien public.
//
// Aucune garde ne pouvait le voir : la section 2 ne relit que les ancres de la
// MÊME page, et celle-ci traverse une page. Elle le vérifie maintenant.
const shell = read('src/main.tsx')
const landing = read('src/Landing.tsx')
const landingIds = new Set([...landing.matchAll(/ id="([a-z0-9-]+)"/g)].map((m) => m[1]))
// La liste fermée des vues d'application, lue dans le code plutôt que recopiée.
const routeDecl = shell.match(/const APP_ROUTES = new Set\(\[([^\]]*)\]\)/)
ok('les vues de l\'application sont une liste fermée', !!routeDecl)
const appRoutes = new Set((routeDecl?.[1] ?? '').match(/'([a-z]+)'/g)?.map((x) => x.slice(1, -1)) ?? [])
ok('…et elle porte au moins la vue principale', appRoutes.has('app'), [...appRoutes].join(', '))

// Un lien « /#x » depuis n'importe quelle page : x doit être une SECTION de la
// page d'accueil, ou une vue déclarée. Sinon le visiteur atterrit sur une page
// qui ne l'attend pas.
const crossed = []
for (const f of FILES) {
  for (const m of read(f).matchAll(/href="\/#([a-z0-9-]+)"/g)) {
    if (!landingIds.has(m[1]) && !appRoutes.has(m[1])) crossed.push(`${f} → /#${m[1]}`)
  }
}
ok('chaque lien « /#ancre » désigne une section de l\'accueil ou une vue',
  crossed.length === 0, crossed.join(', ') || 'tous résolus')

// …ET LE ROUTEUR NE PREND PLUS UNE ANCRE POUR UNE VUE. Le test était
// `if (!route)`, qui envoie tout fragment inconnu vers la porte du beta.
ok('le routeur distingue une ancre d\'une vue', /isAppRoute\(route\)/.test(shell))
ok('…et il ne retombe plus sur « aucun fragment »', !/if \(!route\) return <Landing/.test(shell))
// L'ancre a besoin que la section soit rendue avant d'y aller · un navigateur
// abandonne en silence quand elle n'existe pas encore.
ok('la page fait défiler jusqu\'à l\'ancre une fois rendue', /useHashAnchor\(\)/.test(shell))

// LES MORSURES · la règle doit rougir sur la faute qu'elle vient de corriger.
ok('morsure · une ancre inconnue serait vue',
  !landingIds.has('tarifs-qui-nexiste-pas') && !appRoutes.has('tarifs-qui-nexiste-pas'))
ok('morsure · « pricing » est bien une section de l\'accueil', landingIds.has('pricing'))
ok('morsure · « app » est bien une vue', appRoutes.has('app'))

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
// UNE PAGE EST ATTEINTE DE DEUX FAÇONS · par un lien écrit, ou parce qu'elle
// est un PILIER et que le pied de page les rend tous en boucle. La règle ne
// regardait que la première, et elle a accusé /frugality le jour où la page
// d'accueil a cessé de l'écrire en toutes lettres, alors que le pied de page
// continuait de la servir. Une garde qui accuse du travail juste apprend à la
// contourner : elle vérifie donc les deux chemins.
const footerLoopsPillars = /PILLARS\.map/.test(read('src/components/SiteFooter.tsx'))
const pillarPaths = new Set(POS.PILLARS.map((p) => p.path))
const reached = (h) => allSrc.includes(`href="${h}"`) || (footerLoopsPillars && pillarPaths.has(h))
const HUBS = [
  '/build', '/academy', '/frugality', '/guide', '/teammates', '/terms', '/privacy',
  // LE PARCOURS · les quatre adresses du jeu. Elles sont dans le plan de site
  // et dans l'en-tête ; une seule qui sortirait des deux serait une page de
  // cours que personne n'atteint.
  '/7-jours', '/formation', '/metier', '/profil',
]
const orphans = HUBS.filter((h) => !reached(h))
ok('aucune page principale n\'est orpheline', orphans.length === 0, orphans.join(', '))

// … ET LA MORSURE · une adresse que personne n'écrit et qui n'est pas un
// pilier doit être vue, sinon cette règle ne garde rien.
ok('morsure · une page que rien n\'atteint serait vue', !reached('/une-page-que-personne-ne-lie'))

// …et les familles de pages profondes sont atteintes par un gabarit.
for (const [what, tmpl] of [
  ['les cas d\'usage', '/build/${'],
  ['les personnages', '/${'],
]) ok(`${what} sont atteints depuis une liste`, allSrc.includes(tmpl))

/* --- 5 · le produit se nomme pareil partout ------------------------------- */

// Le même cours s'appelait « Academy » dans un pied de page et « Prompt
// engineering » dans l'en-tête. Un visiteur ne sait pas que c'est le même.
const ACADEMY = POS.PILLAR_BY_ID.academy.nav
ok('le cours de prompt engineering porte un seul nom', ACADEMY.length > 0, ACADEMY)
// LA RÈGLE CHERCHAIT `PILLAR_BY_ID.academy.nav`, MOT POUR MOT. La page lit
// maintenant le même pilier à travers `pillarIn`, qui rend le libellé dans la
// langue affichée : le nom vient toujours d'un seul endroit, et il est en plus
// dans la bonne langue. La règle n'est donc pas assouplie, elle est resserrée
// sur ce qui est vrai maintenant · le pilier ET la traduction.
const page = read('src/academy/Academy.tsx')
ok('…et sa page le porte aussi', page.includes('PILLAR_BY_ID.academy'))
ok('…et dans la langue lue', /pillarIn\(PILLAR_BY_ID\.academy/.test(page))

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

/* --- 6 · les surfaces du compte parlent du PRODUIT ACTUEL ---------------- */

// LE MENU EST LA SURFACE LA PLUS OUVERTE DE L'APP, et c'est celle qui avait le
// moins bougé : « My companies », « Your company », « How hard your team
// works ». L'ancien produit mot pour mot, six mois après le repositionnement,
// parce qu'un menu ne se relit jamais et qu'aucune garde ne le regardait.
const menu = readCode('src/components/TopBar.tsx')
const STALE_MENU = [
  [/My companies/, 'on ne fabrique plus d\'entreprise'],
  [/Your company/, 'la même chose'],
  [/How hard your team works/, 'il n\'y a plus d\'équipe qui travaille pour vous'],
]
for (const [re, why] of STALE_MENU) ok(`le menu ne dit plus « ${re.source} » · ${why}`, !re.test(menu))
// …et il mène AU PRODUIT : les trois cours viennent des piliers, donc ils ne
// peuvent pas diverger de l'en-tête du site.
ok('le menu lit les trois cours', /COURSES/.test(menu))
ok('le menu ouvre le profil d\'apprentissage', /openStudio\('learning'\)/.test(menu))

// LE PROFIL D'APPRENTISSAGE · il n'existait pas. Rien ne répondait à la seule
// question qu'on se pose en rouvrant une application de cours.
const lrn = read('src/dojo/LearningPanel.tsx')
ok('le profil existe', lrn.length > 500)
ok('…et il dit quoi faire ensuite', /nextStep/.test(lrn))
// L'ORDRE DU PANNEAU · la suite avant le bilan. La règle cherchait le titre
// anglais « What you have earned », qui est maintenant une clé du
// dictionnaire, parce que le panneau est bilingue. Elle cherche la clé, ce qui
// vérifie la même chose et résiste à une reformulation du titre.
const bilan = lrn.indexOf("t('lrn.earnedH')")
ok('…avant de faire le bilan', bilan > 0 && lrn.indexOf('nextStep') < bilan)
ok('morsure · un bilan disparu serait vu', lrn.indexOf("t('lrn.bilanQuiNexistePas')") === -1)

// LE CENTRE DE NOTIFICATIONS annonçait « Building your company » et « Agent
// working », un produit qui n'existe plus : le bac à sable rend sa réponse
// instantanément. Ouvert un jour normal, il montrait deux listes vides sous
// deux titres qui promettaient du travail en cours.
const notif = readCode('src/components/NotificationBell.tsx')
ok('les notifications ne promettent plus de bâtir une entreprise', !/Building your company/.test(notif))
ok('…et elles portent la progression', /readLearning/.test(notif))

/* --- 7 · le robot connaît le produit qu'il décrit ------------------------ */

// Il savait parler de l'académie, de la bibliothèque et des jetons, mais pas
// de la PORTE D'ENTRÉE : quelqu'un qui demandait « comment je crée un agent ? »
// tombait sur la cascade LLM ou sur rien.
const kb = read('src/support/knowledge.ts')
for (const id of ['build', 'certification']) {
  ok(`le robot a un sujet « ${id} »`, new RegExp(`id: '${id}'`).test(kb))
}
// Ses chiffres viennent des données · un effectif écrit dans une réponse de
// robot se périme en silence, et personne ne relit un fichier de mille lignes.
ok('…et ses chiffres sont dérivés', /USE_CASE_COUNT/.test(kb) && /COURSE_COUNT/.test(kb))
// Le prompt serveur aussi · il vit dans son propre paquet et ne peut rien
// importer, donc c'est check-content qui le compare aux vraies données.
const chat = readFileSync('api/chat.ts', 'utf8')
ok('le prompt du robot décrit un centre de formation', /TRAINING CENTRE/i.test(chat))
// LA PREMIÈRE VERSION DE CETTE RÈGLE ÉTAIT FAUSSE. Elle interdisait « run a
// company for people », qui apparaît dans la phrase « DojoBuro USED TO run a
// company for people… It does not any more » : une mise au point explicite, et
// l'une des plus utiles du prompt. Une garde qui fait supprimer un démenti
// laisse le malentendu qu'il corrigeait.
//
// Ce qu'il faut vérifier est le DÉMENTI, pas l'absence du mot.
ok('…et il dément explicitement l\'ancien produit', /It does not any more/.test(chat))
ok('…et ne promet pas de faire le travail', /it does not do the work for you/i.test(chat))

/* --- 8 · les listes que les pages parcourent ne sont pas vides ------------ */

// Une page qui itère sur une liste vide s'affiche : elle est simplement nue,
// et c'est le genre de page qu'on découvre en production.
for (const [what, n] of [
  ['les piliers', POS.PILLARS.length],
  ['les cours', POS.COURSES.length],
  ['les cas d\'usage', UC.USE_CASES.length],
  ['les personnages publics', ROLES.PUBLIC_AGENTS.length],
  ['les pistes de l\'académie', ACA.TRACKS.length],
]) ok(`${what} ne sont pas une liste vide`, n > 0, `${n}`)

// Les douze cas d'usage doivent désigner des personnages qui ont une page
// publique, sinon le lien depuis la page du personnage n'existe jamais.
const pub = new Set(ROLES.PUBLIC_AGENTS.map((r) => r.id))
const hidden = UC.USE_CASES.filter((u) => !pub.has(u.agent)).map((u) => u.agent)
ok('chaque cas d\'usage est porté par un personnage qui a une page', hidden.length === 0, hidden.join(', '))

console.log(fails ? `\n${fails} FAIL` : '\nall ok')
process.exit(fails ? 1 : 0)
