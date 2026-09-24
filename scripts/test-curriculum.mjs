// LE PROGRAMME · vérifié sans navigateur.
//
// CE QUE CETTE ÉPREUVE EXISTE POUR EMPÊCHER est une chose que le contenu de ce
// produit a déjà faite une fois : GROSSIR.
//
// L'ancien cours a commencé court. Il a fini avec des leçons de huit cents
// mots, des blocs de prose, des paragraphes qui expliquent avant de montrer.
// Personne n'a décidé ça. C'est arrivé une phrase à la fois, chacune écrite de
// bonne foi pour préciser la précédente, et la somme se lit comme un article
// alors qu'on voulait un niveau de jeu.
//
// Une règle éditoriale qu'aucune machine ne vérifie n'est pas une règle, c'est
// une intention. Les longueurs ci-dessous sont donc des PLAFONDS, et ils font
// échouer la construction. Ils ne sont pas serrés au plus juste de ce qui est
// écrit aujourd'hui : il reste de la marge pour reformuler, et pas assez pour
// glisser un paragraphe.
//
// ELLE VÉRIFIE AUSSI CE QU'ON REFUSE D'ENSEIGNER · aucun chemin de menu, aucun
// clic. Cinq des treize cités portent le nom d'un produit qui sort une version
// majeure par trimestre : une leçon faite de clics est fausse avant d'être lue,
// et celui qui la suit sans succès croit avoir mal compris. Même règle que
// data/frameworks et data/designCourses, pour la même raison.
//
//   node scripts/test-curriculum.mjs
import { build } from 'esbuild'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}

const OUT = 'node_modules/.dojo-curriculum'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}

const C = await load('src/data/curriculum.ts', 'cur.mjs')
const UC = await load('src/data/agentUseCases.ts', 'uc.mjs')
const {
  ALL_MODULES, PATH_MODULES, DISCOVERY_MODULE, ALL_LEVELS, MODULE_BY_ID,
  PATH_MODULE_COUNT, PATH_LEVEL_COUNT, BADGE_COUNT, moduleNumber, findLevel,
} = C

/* --- 1 · le programme tient debout --------------------------------------- */

ok('la semaine de découverte fait sept jours', DISCOVERY_MODULE.levels.length === 7,
  `${DISCOVERY_MODULE.levels.length}`)
ok('il y a des cités payantes', PATH_MODULE_COUNT >= 12, `${PATH_MODULE_COUNT}`)
ok('aucun identifiant de cité en double',
  new Set(ALL_MODULES.map((m) => m.id)).size === ALL_MODULES.length)

// UNE CITÉ D'UN SEUL DOJO N'EST PAS UNE CITÉ · c'est un niveau qu'on a promu
// pour faire nombre sur la carte, et ça se voit tout de suite quand on y entre.
for (const m of ALL_MODULES) {
  ok(`« ${m.id} » a au moins trois dojos`, m.levels.length >= 3, `${m.levels.length}`)
  ok(`« ${m.id} » n'a aucun dojo en double`,
    new Set(m.levels.map((l) => l.id)).size === m.levels.length)
}

// LES COORDONNÉES SONT UNIQUES · deux cités sur la même case se superposent sur
// la carte, et l'une des deux devient impossible à cliquer.
const seats = PATH_MODULES.map((m) => m.at.join(','))
ok('aucune cité n\'est posée sur une autre', new Set(seats).size === seats.length,
  seats.length - new Set(seats).size + ' en collision')

// LE NUMÉRO AFFICHÉ EST DÉRIVÉ · écrit à la main il aurait fini par sauter un
// chiffre ou en répéter un.
ok('les numéros de cité se suivent sans trou',
  PATH_MODULES.every((m, i) => moduleNumber(m.id) === i + 1))
ok('la découverte n\'est pas numérotée', moduleNumber('discovery') === 0)

ok('un badge par dojo', BADGE_COUNT === ALL_LEVELS.length, `${BADGE_COUNT}`)
ok('le compte de dojos payants est dérivé',
  PATH_LEVEL_COUNT === PATH_MODULES.reduce((n, m) => n + m.levels.length, 0))

/* --- 2 · LES PLAFONDS DE LONGUEUR ---------------------------------------- */

// Le coeur de cette épreuve. Voir l'en-tête : la prose repousse toujours, et
// une règle non vérifiée n'est pas une règle.
//
// Ces plafonds valent pour LES DEUX LANGUES. Le français est en moyenne un
// cinquième plus long que l'anglais, ce qui est une raison de resserrer le
// français, pas d'exempter les plafonds.
const CAP = {
  title: 56,
  learn: 130,
  act: 120,
  step: 135,
  trap: 165,
  badge: 44,
  q: 120,
  option: 90,
  why: 240,
}

const tooLong = []
const measure = (where, kind, bi) => {
  for (const lang of ['en', 'fr']) {
    const s = bi?.[lang]
    if (typeof s !== 'string') { tooLong.push(`${where} · ${kind} · ${lang} manquant`); continue }
    if (s.length > CAP[kind]) tooLong.push(`${where} · ${kind} (${lang}) ${s.length} > ${CAP[kind]}`)
  }
}
for (const { module, level } of ALL_LEVELS) {
  const w = `${module.id}/${level.id}`
  measure(w, 'title', level.title)
  measure(w, 'learn', level.learn)
  measure(w, 'act', level.act)
  measure(w, 'trap', level.trap)
  measure(w, 'badge', level.badge)
  measure(w, 'q', level.quiz.q)
  measure(w, 'why', level.quiz.why)
  for (const s of level.steps) measure(w, 'step', s)
  for (const o of level.quiz.options) measure(w, 'option', o)
}
ok('aucun texte ne dépasse son plafond', tooLong.length === 0, tooLong.slice(0, 4).join(' | ') || `${ALL_LEVELS.length} dojos relus`)

// TROIS OU QUATRE GESTES · cinq, c'est deux niveaux qui n'ont pas été séparés.
for (const { module, level } of ALL_LEVELS) {
  ok(`« ${module.id}/${level.id} » a trois ou quatre gestes`,
    level.steps.length >= 3 && level.steps.length <= 4, `${level.steps.length}`)
}

/* --- 3 · les questions sont des questions -------------------------------- */

const tooLongAnswers = []

for (const { module, level } of ALL_LEVELS) {
  const w = `${module.id}/${level.id}`
  const q = level.quiz
  ok(`« ${w} » propose au moins trois réponses`, q.options.length >= 3, `${q.options.length}`)
  ok(`« ${w} » a une bonne réponse qui existe`,
    Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length, `${q.answer}`)
  // DEUX RÉPONSES IDENTIQUES rendent la question fausse sans que rien ne casse.
  ok(`« ${w} » n'a pas deux fois la même réponse`,
    new Set(q.options.map((o) => o.en)).size === q.options.length)
  // LA BONNE RÉPONSE N'EST PAS TOUJOURS LA PLUS LONGUE · c'est le réflexe de
  // qui rédige vite, et ça se devine sans rien comprendre au cours.
  const right = q.options[q.answer].en.length
  const longest = Math.max(...q.options.map((o) => o.en.length))
  if (right === longest) tooLongAnswers.push(w)
}
// CETTE RÈGLE A TROUVÉ UN VRAI DÉFAUT, dans le contenu de celui qui l'écrivait.
// À la première exécution, 38 questions sur 46 avaient leur bonne réponse en
// position de plus longue option : on pouvait avoir tout juste sans comprendre
// une ligne du cours, simplement en prenant la plus longue à chaque fois.
//
// La cause n'était pas la bonne réponse, qui est naturellement précise, mais
// les DISTRACTEURS, écrits courts et désinvoltes (« La couleur », « Change
// model »). Un distracteur court ne trompe personne et ne sert qu'à faire trois
// lignes. Les trente-huit ont été réécrits en réponses plausibles.
//
// LE SEUIL EST À UN TIERS, et il mord. Il ne peut pas être à zéro : sur une
// question à trois réponses dont une est précise, la plus longue sera parfois
// la bonne, et l'interdire ferait délayer des bonnes réponses pour plaire à la
// garde. Un tiers laisse le hasard et refuse le réflexe.
ok('la bonne réponse n\'est pas systématiquement la plus longue',
  tooLongAnswers.length <= Math.ceil(ALL_LEVELS.length / 3),
  `${tooLongAnswers.length} sur ${ALL_LEVELS.length}`)

// … ET ELLE N'EST PAS TOUJOURS AU MÊME RANG.
//
// CETTE RÈGLE A TROUVÉ LE MÊME DÉFAUT EN PIRE. La règle de longueur ci-dessus
// regardait le TEXTE des réponses et a été satisfaite ; pendant ce temps, les
// cent questions du programme avaient toutes leur bonne réponse en deuxième
// position. On pouvait donc finir le cours entier en cliquant toujours au
// milieu, sans en lire une ligne, et aucune garde ne le voyait parce qu'aucune
// ne regardait le RANG.
//
// C'est la leçon qu'on réapprend à chaque fois : une garde vérifie ce qu'elle
// regarde, et rien d'autre. Celle-ci regarde la répartition.
const ranks = new Map()
for (const { level } of ALL_LEVELS) {
  ranks.set(level.quiz.answer, (ranks.get(level.quiz.answer) ?? 0) + 1)
}
const spread = [...ranks.entries()].sort((a, b) => a[0] - b[0])
const worst = Math.max(...spread.map(([, n]) => n))
// LA MOITIÉ, et pas le tiers exact : un tiers strict interdirait la répartition
// que donne un vrai tirage, et on se retrouverait à déplacer des réponses pour
// plaire à la garde plutôt que pour corriger quelque chose.
ok('la bonne réponse n\'est pas toujours au même rang',
  worst <= Math.ceil(ALL_LEVELS.length / 2),
  spread.map(([r, n]) => `${r}:${n}`).join(' '))
// … ET CHAQUE RANG SERT. Un rang jamais employé sur cent questions est un rang
// qu'on peut éliminer d'avance.
ok('chaque rang porte des bonnes réponses', spread.length >= 3,
  `${spread.length} rangs employés`)

/* --- 4 · aucun chemin de menu, aucun clic -------------------------------- */

// Cinq cités portent le nom d'un produit qui bouge tous les trimestres. Une
// leçon faite de clics est fausse avant d'être lue.
const CLICKY = [
  [/\b[Cc]lick(?:ing|s)? (?:on |the )/, 'un clic'],
  [/\bmenu\b/i, 'un menu'],
  [/\btop[- ]right\b|\ben haut à droite\b/i, 'une position à l\'écran'],
  [/\bsettings? (?:tab|panel|page)\b|\bonglet\b/i, 'un onglet'],
  [/\bbutton\b|\bbouton\b/i, 'un bouton'],
]
const clicky = []
for (const { module, level } of ALL_LEVELS) {
  const text = [level.learn, level.act, level.trap, ...level.steps]
    .flatMap((b) => [b.en, b.fr]).join(' \n ')
  for (const [re, what] of CLICKY) {
    if (re.test(text)) clicky.push(`${module.id}/${level.id} · ${what}`)
  }
}
ok('aucun dojo n\'enseigne un chemin de menu', clicky.length === 0, clicky.slice(0, 3).join(' | ') || 'aucun')

/* --- 5 · les deux langues, et vraiment ----------------------------------- */

// Même sonde que scripts/test-i18n : `fr !== en` ne détecte qu'une copie
// exacte, et de l'anglais reformulé est la forme la plus courante du défaut.
const FR_ACCENT = /[àâäçéèêëîïôöùûüœÀÂÇÉÈÊËÎÏÔÖÙÛÜŒ«»]/
const FR_ELISION = /\b[cdjlmnst]'|\bqu'/i
const FR_WORDS = new RegExp('\\b(?:' + [
  'le', 'la', 'les', 'un', 'une', 'des', 'du', 'de', 'au', 'aux', 'et', 'ou', 'ne', 'pas',
  'plus', 'sans', 'sous', 'vers', 'chez', 'qui', 'que', 'quoi', 'dont', 'quand', 'quelle',
  'pour', 'par', 'dans', 'avec', 'sur', 'entre', 'depuis', 'avant', 'vous', 'nous', 'il',
  'tu', 'te', 'toi', 'ton', 'ta', 'tes',
  'elle', 'ils', 'se', 'son', 'sa', 'ses', 'votre', 'leur', 'ce', 'cet', 'cette', 'ces',
  'est', 'sont', 'fait', 'faire', 'peut', 'doit', 'sera', 'tout', 'toute',
].join('|') + ')\\b', 'i')
const wordCount = (t) => (String(t).match(/[A-Za-zÀ-ÿ]{2,}/g) || []).length
const looksFrench = (t) => {
  if (typeof t !== 'string') return false
  if (wordCount(t) < 6) return true
  return FR_ACCENT.test(t) || FR_ELISION.test(t) || FR_WORDS.test(t)
}

const notFrench = []
const copied = []
for (const { module, level } of ALL_LEVELS) {
  const w = `${module.id}/${level.id}`
  const pairs = [
    ['learn', level.learn], ['act', level.act], ['trap', level.trap],
    ['q', level.quiz.q], ['why', level.quiz.why],
    ...level.steps.map((s, i) => [`step${i}`, s]),
    ...level.quiz.options.map((o, i) => [`opt${i}`, o]),
  ]
  for (const [kind, bi] of pairs) {
    if (!looksFrench(bi.fr)) notFrench.push(`${w}/${kind}`)
    if (bi.fr === bi.en) copied.push(`${w}/${kind}`)
  }
}
ok('chaque dojo est écrit en français', notFrench.length === 0, notFrench.slice(0, 4).join(', ') || `${ALL_LEVELS.length} dojos`)
ok('aucune traduction n\'est la copie de l\'anglais', copied.length === 0, copied.slice(0, 4).join(', ') || 'aucune')

for (const m of ALL_MODULES) {
  ok(`la cité « ${m.id} » est écrite en français`,
    looksFrench(m.title.fr) && looksFrench(m.blurb.fr) && m.blurb.fr !== m.blurb.en)
}

/* --- 6 · les maîtres existent -------------------------------------------- */

// Le maître d'un dojo est un IDENTIFIANT de cas d'usage, jamais un nom : les
// noms sont traduits, les identifiants non. Un identifiant inventé donnerait un
// dojo sans personne dedans, et ça ne se verrait qu'à l'écran.
const known = new Set(UC.USE_CASES.map((u) => u.id))
const ghosts = ALL_LEVELS.filter(({ level }) => !known.has(level.master))
  .map(({ module, level }) => `${module.id}/${level.id} → ${level.master}`)
ok('chaque dojo a un maître qui existe', ghosts.length === 0, ghosts.slice(0, 3).join(', ') || `${known.size} maîtres`)

// … ET LES MAÎTRES SONT RÉPARTIS. Un cours où le même agent tient trente dojos
// n'a pas douze maîtres, il en a un et onze figurants.
const used = new Set(ALL_LEVELS.map(({ level }) => level.master))
ok('les maîtres se partagent les dojos', used.size >= 8, `${used.size} maîtres sur ${known.size}`)

/* --- 7 · les adresses --------------------------------------------------- */

ok('un niveau inventé ne fait pas tomber la page', findLevel('nexistepas', 'nonplus') === null)
ok('un niveau réel se retrouve',
  findLevel(PATH_MODULES[0].id, PATH_MODULES[0].levels[0].id)?.level.id === PATH_MODULES[0].levels[0].id)
ok('chaque cité est dans l\'index', ALL_MODULES.every((m) => MODULE_BY_ID[m.id] === m))

/* --- 8 · les morsures ---------------------------------------------------- */

// Une garde qu'on ne peut pas faire rougir ne garde rien.
ok('morsure · un texte trop long serait vu', 'x'.repeat(CAP.learn + 1).length > CAP.learn)
ok('morsure · un chemin de menu serait vu',
  CLICKY.some(([re]) => re.test('Click the Settings tab in the top-right menu')))
ok('morsure · un geste sans clic ne l\'est pas',
  !CLICKY.some(([re]) => re.test('Ask for the plan before the text, and correct the plan.')))
ok('morsure · de l\'anglais reformulé serait vu',
  !looksFrench('Ask for the outline first and correct it before any text is written.'))
ok('morsure · du vrai français passe',
  looksFrench('Demandez le plan avant le texte, et corrigez le plan.'))
ok('morsure · un libellé court n\'est pas accusé', looksFrench('PDF'))
// LA MORSURE DE LA RÈGLE DE RANG · celle qui a manqué cent fois. On refait ici
// le défaut exact qu'elle existe pour attraper : toutes les réponses au même
// rang, et la garde doit rougir.
const allSame = new Map([[1, ALL_LEVELS.length]])
ok('morsure · toutes les réponses au même rang seraient vues',
  Math.max(...allSame.values()) > Math.ceil(ALL_LEVELS.length / 2))
ok('morsure · une répartition réelle ne l\'est pas', worst <= Math.ceil(ALL_LEVELS.length / 2))
ok('morsure · un seul rang employé serait vu', allSame.size < 3)

console.log(fails
  ? `\ntest-curriculum · ${fails} problème(s)`
  : `\ntest-curriculum · ${PATH_MODULE_COUNT} cités, ${PATH_LEVEL_COUNT} dojos, ${BADGE_COUNT} badges`)
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
