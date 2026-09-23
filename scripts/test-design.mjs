// LES DEUX COURS DE DESIGN · vérifiés sans navigateur.
//
// CE QUE CETTE ÉPREUVE PROTÈGE EST UNE DÉCISION, et c'est la même que sur la
// page des frameworks : ces cours n'enseignent AUCUN CHEMIN DE MENU.
//
// La tentation est plus forte ici qu'ailleurs, et elle arrive par une bonne
// intention. Le public n'a jamais ouvert Figma ; écrire « clic droit, puis
// Ajouter un auto layout » semble être exactement le service à lui rendre. Ça
// l'est pendant six mois. Ensuite le menu est renommé, quelqu'un le cherche,
// ne le trouve pas, et conclut qu'il a mal compris · ce qui est le pire
// résultat possible pour un cours destiné à des gens qui doutent déjà d'eux.
//
// Ce qui ne périme pas est le MODÈLE. Un cadre est un cadre. Une contrainte
// dit quoi faire quand la place change. Un composant est une chose écrite une
// fois. Ces phrases seront vraies dans cinq ans.
//
// ELLE VÉRIFIE AUSSI LA FORME PÉDAGOGIQUE, parce qu'elle est le produit : les
// mots définis AVANT emploi, le piège du débutant nommé, et un test vérifiable
// seul. Un cours pour qui n'a jamais designé qui oublie l'un des trois
// redevient un article de blog.
//
//   node scripts/test-design.mjs
import { build } from 'esbuild'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}

const OUT = 'node_modules/.dojo-design'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}

const D = await load('src/data/designCourses.ts', 'dc.mjs')
const P = await load('src/data/positioning.ts', 'pos.mjs')
const { DESIGN_COURSES, DESIGN_COURSE_BY_ID, DESIGN_LESSON_COUNT, DESIGN_TRACK } = D
const { COURSE_PILLARS, PILLAR_BY_ID } = P

/* --- 1 · les deux cours tiennent debout ---------------------------------- */

ok('deux cours de design', DESIGN_COURSES.length === 2, DESIGN_COURSES.map((c) => c.id).join(', '))
ok('aucun identifiant en double', new Set(DESIGN_COURSES.map((c) => c.id)).size === 2)
ok('aucune adresse en double', new Set(DESIGN_COURSES.map((c) => c.path)).size === 2)
ok('le compte de leçons est dérivé',
  DESIGN_LESSON_COUNT === DESIGN_COURSES.reduce((n, c) => n + c.lessons.length, 0), `${DESIGN_LESSON_COUNT}`)

// LES DEUX COURS SONT DÉCLARÉS COMME COURS. Un cours qui existe en page mais
// pas dans COURSE_PILLARS n'est compté par le maître nulle part : il ne donne
// ni progression, ni grade, ni diplôme, et personne ne s'en aperçoit avant un
// élève qui le finit et ne reçoit rien.
for (const c of DESIGN_COURSES) {
  ok(`« ${c.id} » est un cours déclaré`, COURSE_PILLARS.includes(c.id))
  ok(`« ${c.id} » a son pilier`, !!PILLAR_BY_ID[c.id], PILLAR_BY_ID[c.id]?.nav ?? 'absent')
  ok(`« ${c.id} » et son pilier ont la même adresse`, PILLAR_BY_ID[c.id]?.path === c.path,
    `${PILLAR_BY_ID[c.id]?.path} / ${c.path}`)
}

/* --- 2 · AUCUN CHEMIN DE MENU, AUCUN CLIC -------------------------------- */

// On cherche ce qui ressemble à une instruction d'interface : un clic, un
// raccourci, un chemin fléché entre deux menus, un nom de panneau. La règle ne
// peut pas être « aucun nom propre » · le cours DOIT pouvoir dire « auto
// layout », qui est le nom du concept et pas l'endroit d'un bouton.
const CLICKY = [
  // LA MAJUSCULE DU DÉBUT DE PHRASE · cette règle s'écrivait `\bclick`, en
  // minuscules et sans drapeau d'insensibilité. Elle ne voyait donc pas
  // « Click the Move tool », qui est très exactement la forme sous laquelle un
  // chemin de menu arrive dans un cours : en tête de phrase. Sa propre morsure
  // l'a dit. On accepte les deux casses pour le verbe, et on garde la
  // majuscule obligatoire APRÈS, qui est ce qui distingue « cliquez sur
  // Calque » d'un « cliquez dessus » inoffensif.
  [/\b[Cc]lick(?:ing)? (?:on )?(?:the )?[A-Z]/, 'un clic sur un élément nommé'],
  [/\bright.click\b/i, 'un clic droit'],
  [/\bpress \w+\s*\+\s*\w+/i, 'un raccourci clavier'],
  [/\b(?:menu|panel|toolbar|sidebar|inspector)\b/i, 'un élément d\'interface nommé'],
  [/→\s*[A-Z]\w+\s*→/, 'un chemin fléché entre menus'],
  [/\bgo to (?:the )?[A-Z]/, 'une navigation vers un endroit nommé'],
]
const texts = []
for (const c of DESIGN_COURSES) {
  texts.push([`${c.id}.forWho`, c.forWho], [`${c.id}.promise`, c.promise], [`${c.id}.title`, c.title])
  for (const l of c.lessons) {
    texts.push([`${c.id}/${l.id}.title`, l.title], [`${c.id}/${l.id}.plain`, l.plain],
      [`${c.id}/${l.id}.like`, l.like], [`${c.id}/${l.id}.trap`, l.trap], [`${c.id}/${l.id}.check`, l.check])
    l.steps.forEach((st, i) => texts.push([`${c.id}/${l.id}.step${i + 1}`, st]))
    l.words.forEach((w) => texts.push([`${c.id}/${l.id}.${w.term.en}`, w.means]))
  }
}
const clicky = []
for (const [where, bi] of texts) {
  for (const [re, what] of CLICKY) {
    if (re.test(bi.en) || re.test(bi.fr)) clicky.push(`${where} · ${what}`)
  }
}
ok('aucun chemin de menu dans les deux cours', clicky.length === 0,
  clicky.slice(0, 3).join(' | ') || `${texts.length} textes relus`)

/* --- 3 · la forme pédagogique est tenue ---------------------------------- */

// UNE PHRASE FINIT PAR UNE PONCTUATION, éventuellement suivie d'un guillemet
// fermant, lui-même éventuellement précédé d'une espace.
//
// DEUX CORRECTIONS ICI, et la seconde est la plus instructive. La première
// version exigeait que le dernier caractère soit un point, ce qui accusait une
// consigne se terminant par une citation. La deuxième acceptait le guillemet
// mais COLLÉ à la ponctuation · elle accusait alors tout le français, parce
// qu'en typographie française le guillemet fermant est précédé d'une espace.
// Une règle écrite en pensant à l'anglais et appliquée à un texte bilingue
// accuse systématiquement la moitié française, qui est justement celle que
// personne ne relit.
const sentence = (s) =>
  typeof s === 'string' && s.trim().split(/\s+/).length >= 6 && /[.!?]\s?["»'\u201d]?$/.test(s.trim())

for (const c of DESIGN_COURSES) {
  ok(`« ${c.id} » dit à qui il s'adresse`, sentence(c.forWho.en) && sentence(c.forWho.fr))
  ok(`« ${c.id} » dit ce qu'on saura faire`, sentence(c.promise.en) && sentence(c.promise.fr))
  ok(`« ${c.id} » a de quoi faire un cours`, c.lessons.length >= 5, `${c.lessons.length} leçons`)
  ok(`« ${c.id} » n'a aucune leçon en double`, new Set(c.lessons.map((l) => l.id)).size === c.lessons.length)

  for (const l of c.lessons) {
    // LA PHRASE SANS JARGON · c'est le bloc que les cours de design sautent,
    // parce que leurs auteurs ont oublié le jour où ils ne savaient pas.
    ok(`${c.id}/${l.id} · la phrase sans jargon`, sentence(l.plain.en) && sentence(l.plain.fr))
    ok(`${c.id}/${l.id} · la comparaison`, sentence(l.like.en) && sentence(l.like.fr))
    // LES MOTS DÉFINIS AVANT EMPLOI · un cours pour qui n'a jamais designé et
    // qui emploie « hiérarchie » sans le définir a perdu son lecteur à la
    // troisième ligne, sans le savoir.
    ok(`${c.id}/${l.id} · des mots définis`, l.words.length >= 2, `${l.words.length}`)
    ok(`${c.id}/${l.id} · chaque mot est expliqué`, l.words.every((w) => sentence(w.means.en) && sentence(w.means.fr)))
    ok(`${c.id}/${l.id} · des gestes`, l.steps.length >= 2 && l.steps.every((st) => sentence(st.en) && sentence(st.fr)))
    // LE PIÈGE · un cours qui ne dit que la bonne façon apprend à la
    // reconnaître ; nommer la mauvaise apprend à l'éviter.
    ok(`${c.id}/${l.id} · le piège du débutant`, sentence(l.trap.en) && sentence(l.trap.fr))
    // LE TEST · ce public n'a pas d'avis et n'en aura pas avant longtemps. Un
    // critère vérifiable seul, lui, s'applique tout de suite.
    ok(`${c.id}/${l.id} · un test vérifiable`, sentence(l.check.en) && sentence(l.check.fr))
  }
}

/* --- 4 · les deux langues, et aucune recopiée ---------------------------- */

const copied = texts.filter(([, bi]) => bi.en === bi.fr).map(([w]) => w)
ok('aucune traduction n\'est la copie de l\'anglais', copied.length === 0,
  copied.slice(0, 3).join(', ') || `${texts.length} paires comparées`)
ok('chaque texte porte ses deux langues',
  texts.every(([, bi]) => typeof bi.en === 'string' && bi.en.length > 0 && typeof bi.fr === 'string' && bi.fr.length > 0))

/* --- 5 · la page lit les données ----------------------------------------- */

const page = readFileSync('src/design/DesignCoursePage.tsx', 'utf8')
ok('la page vient des données', /from '\.\.\/data\/designCourses'/.test(page))
ok('la page sert la langue lue', /pick\(/.test(page))
ok('la page range la progression sous sa piste', new RegExp(`DESIGN_TRACK`).test(page))
ok('une seule page pour les deux cours',
  /course: DesignCourse/.test(page), 'le contenu change, pas le composant')
const router = readFileSync('src/main.tsx', 'utf8')
for (const c of DESIGN_COURSES) {
  ok(`« ${c.path} » est routée`, new RegExp(`path === '${c.path}'`).test(router))
}
ok('la piste de design est distincte', DESIGN_TRACK !== 'agent' && DESIGN_TRACK !== 'lever', DESIGN_TRACK)

/* --- 6 · les morsures ---------------------------------------------------- */

ok('morsure · un clic est vu', CLICKY.some(([re]) => re.test('Click the Move tool to begin')))
ok('morsure · un clic droit est vu', CLICKY.some(([re]) => re.test('right-click the frame')))
ok('morsure · un panneau nommé est vu', CLICKY.some(([re]) => re.test('open the right sidebar')))
// … et le cours DOIT pouvoir nommer les concepts, sinon la règle interdirait
// d'enseigner. « auto layout » est le nom d'une idée, pas l'endroit d'un bouton.
ok('morsure · nommer un concept n\'est pas accusé',
  !CLICKY.some(([re]) => re.test('Auto layout arranges children in a direction.')))
ok('morsure · nommer un cadre n\'est pas accusé',
  !CLICKY.some(([re]) => re.test('A frame is a box that knows its own size.')))
ok('morsure · une phrase trop courte est vue', !sentence('Do it.'))

console.log(fails
  ? `\ntest-design · ${fails} problème(s)`
  : `\ntest-design · ${DESIGN_COURSES.length} cours, ${DESIGN_LESSON_COUNT} leçons, aucun chemin de menu`)
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
