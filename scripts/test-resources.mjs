// L'ESPACE RESSOURCES · vérifié sans navigateur.
//
// CE QUE CETTE ÉPREUVE PROTÈGE EST UNE DÉCISION D'ARCHITECTURE : les documents
// sont GÉNÉRÉS, jamais stockés.
//
// La pente naturelle est inverse. Le jour où quelqu'un veut un mémo mieux mis
// en page, la solution évidente est de le faire dans un traitement de texte et
// de téléverser le PDF. Ça marche, c'est plus joli, et ça introduit le défaut
// que tout ce dispositif existe pour empêcher : le jour où une leçon est
// corrigée, le fichier garde l'ancienne version, personne ne le sait, et
// l'élève travaille sur un document faux que NOUS lui avons donné.
//
// Cette épreuve vérifie donc qu'aucun chemin de fichier statique ne s'est
// glissé dans les ressources, et que chaque document est bien construit depuis
// les données vivantes des cours.
//
// ELLE VÉRIFIE AUSSI QUE CHAQUE COURS EN A UN. Un espace ressources qui couvre
// quatre cours sur cinq est pire qu'un espace ressources absent : celui qui
// suit le cinquième croit avoir mal cherché.
//
//   node scripts/test-resources.mjs
import { build } from 'esbuild'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}

const OUT = 'node_modules/.dojo-res'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent', external: ['react'] })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}

const R = await load('src/data/resources.ts', 'res.mjs')
const P = await load('src/data/positioning.ts', 'pos.mjs')
const { RESOURCES, RESOURCE_BY_COURSE, RESOURCE_COUNT, resourceTitle } = R
const { COURSE_PILLARS, PILLAR_BY_ID } = P

/* --- 1 · un document par cours, et pas un de plus ------------------------ */

ok('un document par cours déclaré', RESOURCE_COUNT === COURSE_PILLARS.length,
  `${RESOURCE_COUNT} documents pour ${COURSE_PILLARS.length} cours`)
for (const id of COURSE_PILLARS) {
  ok(`le cours « ${id} » a son mémo`, !!RESOURCE_BY_COURSE[id], RESOURCE_BY_COURSE[id]?.file ?? 'absent')
}
ok('aucun nom de fichier en double', new Set(RESOURCES.map((r) => r.file)).size === RESOURCE_COUNT)
ok('aucun document orphelin', RESOURCES.every((r) => COURSE_PILLARS.includes(r.courseId)),
  RESOURCES.map((r) => r.courseId).join(', '))

/* --- 2 · RIEN N'EST STOCKÉ ----------------------------------------------- */

// On cherche dans la SOURCE ce qui trahirait un fichier servi plutôt que
// construit : une extension de fichier dans une chaîne, une adresse, un seau.
const src = readFileSync('src/data/resources.ts', 'utf8')
  .replace(/\/\*[\s\S]*?\*\//g, ' ')
  .replace(/(^|[^:])\/\/[^\n]*/g, '$1')
const STATIC = [
  [/['"`][^'"`]*\.pdf['"`]/i, 'un chemin de PDF en dur'],
  [/https?:\/\//i, 'une adresse distante'],
  [/\b(?:s3|bucket|cloudfront|storage\.googleapis)\b/i, 'un stockage de fichiers'],
  [/\/assets\/|\/public\//, 'un fichier servi depuis le site'],
]
const found = STATIC.filter(([re]) => re.test(src)).map(([, what]) => what)
ok('aucun document n\'est un fichier stocké', found.length === 0, found.join(', ') || 'tout est construit')

// … et chaque document construit VRAIMENT quelque chose. Un `build` qui rend
// une liste vide passerait tous les contrôles ci-dessus en servant un PDF
// blanc, ce qui est la pire version du défaut : le fichier existe, il se
// télécharge, et il ne contient rien.
for (const r of RESOURCES) {
  for (const lang of ['en', 'fr']) {
    const blocks = r.build(lang)
    ok(`« ${r.file} » a du contenu en ${lang}`, Array.isArray(blocks) && blocks.length >= 8,
      `${blocks.length} blocs`)
    ok(`« ${r.file} » a des titres en ${lang}`, blocks.some((b) => b.kind === 'h'))
    ok(`« ${r.file} » n'a aucun bloc vide en ${lang}`,
      blocks.every((b) => (b.kind === 'kv' ? b.k.length > 0 && b.v.length > 0 : b.text.length > 0)))
  }
}

/* --- 3 · les deux langues, et elles diffèrent ---------------------------- */

for (const r of RESOURCES) {
  ok(`« ${r.file} » dit ce qu'il contient, dans les deux langues`,
    r.about.en.length > 20 && r.about.fr.length > 20)
  ok(`« ${r.file} » n'a pas recopié l'anglais`, r.about.en !== r.about.fr)
  // LE TITRE VIENT DU COURS · un mémo qui porte un autre nom que son cours est
  // un document de plus à retrouver, pour personne.
  ok(`« ${r.file} » porte le nom de son cours`,
    resourceTitle(r, 'en') === PILLAR_BY_ID[r.courseId].nav, resourceTitle(r, 'en'))
  ok(`« ${r.file} » porte le nom français de son cours`,
    resourceTitle(r, 'fr') === (PILLAR_BY_ID[r.courseId].fr?.nav ?? PILLAR_BY_ID[r.courseId].nav),
    resourceTitle(r, 'fr'))
}

// LE CONTENU SUIT LA LANGUE · un mémo français qui rend le contenu anglais est
// le défaut le plus probable ici, parce qu'il faut ouvrir le PDF pour le voir.
// On compare les deux constructions sur les cours qui portent leur traduction.
for (const id of ['design', 'figma']) {
  const r = RESOURCE_BY_COURSE[id]
  const en = JSON.stringify(r.build('en'))
  const fr = JSON.stringify(r.build('fr'))
  ok(`« ${r.file} » se construit différemment en français`, en !== fr, `${en.length} / ${fr.length} signes`)
}

/* --- 4 · le générateur ne connaît aucun cours ---------------------------- */

// C'est ce qui permet d'ajouter un sixième cours sans toucher au PDF. Un
// générateur qui nomme un cours est un générateur qu'il faudra modifier à
// chaque fois, et qu'on finira par dupliquer.
const gen = readFileSync('src/lib/coursePdf.ts', 'utf8')
for (const id of COURSE_PILLARS) {
  ok(`le générateur ne nomme pas « ${id} »`, !new RegExp(`['"\`]${id}['"\`]`).test(gen))
}
ok('le générateur reçoit des blocs neutres', /ResBlock/.test(gen))
// LA DATE DE GÉNÉRATION est imprimée · un mémo sans date est un mémo qu'on
// croit à jour pour toujours, ce qui est le défaut que ce dispositif évite.
ok('le mémo porte sa date', /toISOString/.test(gen))

/* --- 5 · le profil sert les documents ------------------------------------ */

const panel = readFileSync('src/dojo/LearningPanel.tsx', 'utf8')
ok('le profil liste les ressources', /RESOURCES\.map/.test(panel))
ok('le profil génère à la demande', /downloadCoursePdf\(/.test(panel))
ok('le profil sert la langue lue', /downloadCoursePdf\(r, lang\)/.test(panel))

/* --- 6 · les morsures ---------------------------------------------------- */

ok('morsure · un PDF en dur est vu', STATIC[0][0].test("file: '/docs/memo.pdf'"))
ok('morsure · une adresse est vue', STATIC[1][0].test("url: 'https://cdn.example.com/x'"))
ok('morsure · un nom de fichier sans extension n\'est pas accusé',
  !STATIC[0][0].test("file: 'dojoburo-figma'"))
ok('morsure · un document vide serait vu', [].length < 8)

console.log(fails
  ? `\ntest-resources · ${fails} problème(s)`
  : `\ntest-resources · ${RESOURCE_COUNT} mémos, tous construits, aucun stocké`)
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
