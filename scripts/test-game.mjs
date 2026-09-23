// LE JEU · vérifié sans navigateur.
//
// CE QUE CETTE ÉPREUVE EXISTE POUR EMPÊCHER, et chacune de ces fautes a déjà
// été commise une fois dans ce produit :
//
//   UN SECOND COMPTEUR. L'académie a annoncé « 34 sur 20 » et une barre à
//   170 % parce que deux endroits comptaient la progression. Le jeu lit le même
//   magasin que le reste ; rien dans src/game n'a le droit d'ouvrir le stockage
//   pour son compte, sauf le fichier des droits, qui ne stocke pas de
//   progression.
//
//   UN NOMBRE ÉCRIT À LA MAIN. « treize cités », « 39 dojos », « 99 € » sur un
//   écran, et le jour où le programme bouge, l'écran ment. Tous ces nombres
//   sont dérivés ; l'épreuve refuse de les voir en dur dans les écrans du jeu.
//
//   UNE FICHE QUI DONNE LES RÉPONSES. La fiche à emporter est écrite depuis le
//   cours ; il suffirait d'une ligne de plus pour qu'elle recopie les questions
//   et leurs bonnes réponses, et la vérification ne vérifierait plus rien.
//
//   UNE ADRESSE HORS DU PLAN DE SITE. Une page de cours qu'aucun plan de site
//   ne cite n'est pas trouvée, et c'est la seule chose qu'on demande à une page
//   publique.
//
//   node scripts/test-game.mjs
import { build } from 'esbuild'
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}

const OUT = 'node_modules/.dojo-game'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}

const C = await load('src/data/curriculum.ts', 'cur.mjs')
const H = await load('src/game/handout.ts', 'handout.mjs')
const { ALL_MODULES, PATH_MODULES, DISCOVERY_MODULE, ALL_LEVELS, TRACK_ACCESS } = C

const SRC = (p) => readFileSync(p, 'utf8')
const GAME_FILES = readdirSync('src/game').map((f) => join('src/game', f))
const SCREENS = GAME_FILES.filter((f) => f.endsWith('.tsx'))

/* --- 1 · un seul magasin -------------------------------------------------- */

// LA PROGRESSION NE SE RANGE QU'À UN ENDROIT · src/academy/progress. Le jeu en
// est une VUE (src/game/progress), et une vue n'écrit pas.
const storesInGame = GAME_FILES
  .filter((f) => /localStorage|sessionStorage|indexedDB/.test(SRC(f)))
  .filter((f) => !f.endsWith('access.ts'))
ok('aucun second magasin dans le jeu', storesInGame.length === 0, storesInGame.join(', ') || 'un seul')

ok('la vue de progression lit le magasin de l\'académie',
  /from '\.\.\/academy\/progress'/.test(SRC('src/game/progress.ts')))

/* --- 2 · aucun nombre écrit à la main ------------------------------------- */

// Les écrans du jeu affichent des comptes et un prix. Aucun des deux ne
// s'écrit : ils viennent de data/curriculum et de data/plans.
const COUNTS = [
  [String(PATH_MODULES.length), 'le nombre de cités'],
  [String(ALL_LEVELS.length), 'le nombre de dojos'],
  [String(DISCOVERY_MODULE.levels.length), 'le nombre de jours'],
]
const hardCounts = []
for (const f of SCREENS) {
  // on ne regarde que ce qui est AFFICHÉ · le texte entre accolades JSX et les
  // chaînes, jamais une taille de police ni une coordonnée
  const shown = SRC(f).match(/>[^<>{}]*\b\d{1,3}\b[^<>{}]*</g) || []
  for (const [n, what] of COUNTS) {
    if (shown.some((s) => new RegExp(`(^|[^\\d])${n}([^\\d]|$)`).test(s))) {
      hardCounts.push(`${f} → ${what}`)
    }
  }
}
ok('aucun écran du jeu n\'écrit un compte à la main', hardCounts.length === 0,
  hardCounts.slice(0, 3).join(', ') || `${SCREENS.length} écrans`)

const priced = SCREENS.filter((f) => /\d+\s*€|€\s*\d+|EUR\s*\d/.test(SRC(f)))
ok('aucun écran du jeu n\'écrit un prix', priced.length === 0, priced.join(', ') || 'aucun')

/* --- 3 · la fiche ne donne pas les réponses ------------------------------- */

// Une fiche qui recopie la bonne réponse transforme la question en formalité,
// et quelqu'un qui reprend le parcours six mois plus tard mérite de se tester.
const leaks = []
for (const m of ALL_MODULES) {
  for (const lang of ['fr', 'en']) {
    const sheet = H.handout(m, lang)
    for (const l of m.levels) {
      const answer = l.quiz.options[l.quiz.answer][lang]
      if (sheet.includes(answer)) leaks.push(`${m.id}/${l.id} (${lang})`)
      if (sheet.includes(l.quiz.why[lang])) leaks.push(`${m.id}/${l.id} pourquoi (${lang})`)
      // LA QUESTION NON PLUS · une fiche qui la recopie a recopié le quiz,
      // et la bonne réponse suit toujours la question de peu.
      if (sheet.includes(l.quiz.q[lang])) leaks.push(`${m.id}/${l.id} question (${lang})`)
    }
  }
}
ok('la fiche ne recopie aucune réponse', leaks.length === 0, leaks.slice(0, 3).join(', ') || `${ALL_MODULES.length} fiches`)

// … ET ELLE CONTIENT BIEN LE COURS. Une fiche vide ne fuite rien non plus.
const sample = H.handout(PATH_MODULES[0], 'fr')
ok('la fiche contient le geste de chaque dojo',
  PATH_MODULES[0].levels.every((l) => sample.includes(l.act.fr)))
ok('la fiche contient le piège de chaque dojo',
  PATH_MODULES[0].levels.every((l) => sample.includes(l.trap.fr)))
ok('le nom du fichier ne porte ni accent ni espace',
  ALL_MODULES.every((m) => /^[a-z0-9.-]+$/.test(H.handoutName(m))))

/* --- 4 · les droits ------------------------------------------------------- */

// LA RÈGLE D'ACCÈS EST UNE DONNÉE · un parcours dont personne ne sait quoi
// exiger serait ouvert ou fermé au hasard selon l'écran.
const tracks = new Set(ALL_MODULES.map((m) => m.track))
ok('chaque parcours dit ce qu\'il exige',
  [...tracks].every((t) => Boolean(TRACK_ACCESS[t])), [...tracks].join(', '))

ok('les droits se lisent dans un seul fichier',
  SCREENS.filter((f) => /TRACK_ACCESS/.test(SRC(f))).length === 0,
  'les écrans passent par game/access')

/* --- 5 · les adresses sont publiques -------------------------------------- */

const routes = SRC('src/main.tsx')
for (const p of ['/formation', '/7-jours', '/profil']) {
  ok(`l'adresse ${p} est branchée`, routes.includes(`'${p}'`))
}

const sitemap = SRC('scripts/gen-seo.mjs')
ok('le plan de site connaît le parcours', /\/formation/.test(sitemap))
ok('le plan de site connaît la semaine gratuite', /7-jours/.test(sitemap))
ok('le plan de site connaît les métiers', /\/metier/.test(sitemap))
// … ET IL LES LIT PLUTÔT QUE DE LES RECOPIER · une liste d'adresses écrite à
// la main aurait oublié la treizième cité le jour où elle est arrivée.
ok('le plan de site lit le programme', /PATH_MODULES/.test(sitemap))

// LA BIBLIOTHÈQUE EST PARTIE · et elle ne doit pas revenir par une ancre
// oubliée dans un écran du jeu.
const libLinks = SCREENS.filter((f) => /href="\/library/.test(SRC(f)))
ok('aucun écran ne renvoie vers la bibliothèque', libLinks.length === 0, libLinks.join(', ') || 'aucun')

/* --- 6 · la carte lit le programme ---------------------------------------- */

// Une liste de positions tenue dans la carte aurait donné une cité qui existe
// dans le programme et nulle part à l'écran. Les positions sont portées par le
// module · voir data/curriculum.
const map = SRC('src/game/WorldMap.tsx')
ok('la carte lit les cités du programme', /PATH_MODULES/.test(map))
ok('la carte ne tient aucune liste de positions',
  !/\bat\s*:\s*\[\s*\d+\s*,\s*\d+\s*\]/.test(map))

/* --- 7 · les morsures ------------------------------------------------------ */

// Une garde qu'on ne peut pas faire rougir ne garde rien.
ok('morsure · un prix en dur serait vu', /\d+\s*€/.test('le parcours à 99 € une fois'))
ok('morsure · une phrase sans prix ne l\'est pas', !/\d+\s*€|€\s*\d+/.test('le parcours entier, une fois'))
ok('morsure · un compte en dur serait vu',
  (['<span>13 cités</span>'].join('').match(/>[^<>{}]*\b\d{1,3}\b[^<>{}]*</g) || []).length > 0)
ok('morsure · une taille de police ne l\'est pas',
  (['style={{ fontSize: 13 }}'].join('').match(/>[^<>{}]*\b\d{1,3}\b[^<>{}]*</g) || []).length === 0)
ok('morsure · une fiche qui recopierait la réponse serait vue',
  `${sample}\n${PATH_MODULES[0].levels[0].quiz.options[PATH_MODULES[0].levels[0].quiz.answer].fr}`
    .includes(PATH_MODULES[0].levels[0].quiz.options[PATH_MODULES[0].levels[0].quiz.answer].fr))
ok('morsure · un magasin ouvert dans le jeu serait vu',
  /localStorage/.test('const raw = localStorage.getItem(KEY)'))

console.log(fails
  ? `\ntest-game · ${fails} problème(s)`
  : `\ntest-game · ${SCREENS.length} écrans, ${ALL_MODULES.length} fiches`)
process.exit(fails ? 1 : 0)
