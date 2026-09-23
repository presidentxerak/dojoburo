// LES ICÔNES TIENNENT-ELLES ? · le jeu Bauhaus, vérifié sans navigateur.
//
// Ce que cette garde protège tient en une phrase : l'app ne dessine plus ses
// icônes avec des caractères. Elle en a dessiné pendant des mois, dans cinq
// fichiers de données et une quarantaine d'endroits en JSX, et personne ne l'a
// vu parce que ça s'affiche : simplement pas pareil chez tout le monde, à une
// graisse qui n'est pas la nôtre, et pas du tout sur certains téléphones.
//
// Un caractère qui revient ne casse rien et ne se voit pas dans un typecheck.
// C'est exactement le genre de régression qui s'installe : quelqu'un écrit
// `{done ? '✓' : ''}` parce que c'est plus court, ça marche sur sa machine, et
// le jeu d'icônes est mort sans qu'un seul test soit rouge.
//
// Elle vérifie donc trois choses :
//
//   1 · le vocabulaire est fermé · chaque nom déclaré est dessiné, chaque
//       forme dessinée est déclarée, et aucun nom n'est orphelin
//   2 · chaque dessin respecte la grammaire · un pixel de trait, des
//       primitives, pas de dégradé ni d'arrondi décoratif
//   3 · aucun caractère pictographique n'est revenu dans le JSX
//
//   node scripts/test-icons.mjs
import { build } from 'esbuild'
import { readFileSync, readdirSync, statSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}

const OUT = 'node_modules/.dojo-icons'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}

const V = await load('src/data/icons.ts', 'icons.mjs')
const { ICON_NAMES, isIconName } = V
const SRC = readFileSync('src/components/BauhausIcon.tsx', 'utf8')

/* --- 1 · le vocabulaire est fermé ---------------------------------------- */

ok('le vocabulaire n\'est pas vide', ICON_NAMES.length >= 20, `${ICON_NAMES.length} noms`)
ok('aucun nom en double', new Set(ICON_NAMES).size === ICON_NAMES.length)
ok('le test d\'appartenance mord', isIconName(ICON_NAMES[0]) && !isIconName('pas-une-icone'))

// Le bloc SHAPES, isolé · on ne cherche pas un nom n'importe où dans le
// fichier, sinon un nom cité dans un commentaire ferait passer la garde.
const block = SRC.slice(SRC.indexOf('const SHAPES'), SRC.indexOf('\n}\n', SRC.indexOf('const SHAPES')))
const drawn = [...block.matchAll(/^\s{2}([A-Za-z][A-Za-z0-9]*):/gm)].map((m) => m[1])
ok('chaque nom déclaré est dessiné', ICON_NAMES.every((n) => drawn.includes(n)),
  ICON_NAMES.filter((n) => !drawn.includes(n)).join(', '))
ok('chaque forme dessinée est déclarée', drawn.every((n) => ICON_NAMES.includes(n)),
  drawn.filter((n) => !ICON_NAMES.includes(n)).join(', '))

/* --- 2 · la grammaire Bauhaus -------------------------------------------- */

// UN PIXEL, et il ne doit pas changer avec la taille. Sans
// `non-scaling-stroke`, un trait de 1 sur une grille de 24 fait 1,7 pixel à
// 40 et 0,6 à 14 : le filet respire, et c'est précisément ce que la consigne
// « une bordure de 1 pixel » interdit.
ok('le trait fait un pixel', /strokeWidth=\{1\}/.test(SRC))
ok('…et le garde à toutes les tailles', /vectorEffect="non-scaling-stroke"/.test(SRC))
// Un angle droit reste un angle droit · `round` arrondirait chaque sommet, ce
// qui est l'exact contraire de la grammaire qu'on a choisie.
ok('les angles restent vifs', /strokeLinejoin="miter"/.test(SRC) && /strokeLinecap="butt"/.test(SRC))

// Ce que le Bauhaus n'a pas : de dégradé, d'ombre portée, de flou.
for (const [what, re] of [
  ['aucun dégradé', /<(linear|radial)Gradient|url\(#/i],
  ['aucune ombre ni flou', /<filter|feGaussianBlur|feDropShadow/i],
  ['aucun arrondi décoratif', /\brx=|\bry=/],
]) ok(what, !re.test(block))

// Les primitives, et rien d'autre : un chemin, un rectangle, un cercle.
const tags = [...new Set([...block.matchAll(/<([a-zA-Z]+)[\s/>]/g)].map((m) => m[1]))]
const ALLOWED = new Set(['path', 'rect', 'circle'])
ok('rien que des primitives', tags.every((t) => ALLOWED.has(t)), tags.filter((t) => !ALLOWED.has(t)).join(', '))

// Le PLEIN prend la couleur du contexte · une couleur écrite en dur dans une
// forme rendrait l'icône aveugle au thème sombre, et c'est invisible tant
// qu'on ne bascule pas.
const hard = [...block.matchAll(/fill="(?!none|currentColor)([^"]+)"/g)].map((m) => m[1])
ok('aucune couleur en dur dans une forme', hard.length === 0, hard.join(', '))

/* --- 3 · aucun caractère n'est revenu ------------------------------------ */

// La plage volontairement LARGE : formes géométriques, flèches techniques,
// symboles divers. Les flèches de texte (→ ←) en sont exclues, elles sont de
// la typographie dans un libellé de lien et non des icônes.
const PICTO = /[⌀-⏿■-◿☀-➿⬀-⯿]/
const SKIP_DIR = new Set(['node_modules', 'dist', '.git'])
function walk(dir, out = []) {
  for (const n of readdirSync(dir)) {
    if (SKIP_DIR.has(n)) continue
    const p = join(dir, n)
    if (statSync(p).isDirectory()) walk(p, out)
    else if (/\.tsx?$/.test(n)) out.push(p)
  }
  return out
}
/** Les lignes de code d'un fichier · commentaires retirés. Un caractère dans
 *  un commentaire est une explication, pas une icône, et l'en-tête de
 *  BauhausIcon cite justement ceux qu'il remplace. */
function code(src) {
  const out = []
  let block = false
  for (const [i, line] of src.split('\n').entries()) {
    const t = line.trim()
    if (t.startsWith('/*')) block = true
    if (block) { if (t.includes('*/')) block = false; continue }
    if (t.startsWith('//') || t.startsWith('*')) continue
    out.push([i + 1, line])
  }
  return out
}

// Le clavier est une EXCEPTION nommée · `⌘K` est la légende d'un raccourci,
// pas une icône, et le remplacer par une forme dessinée dirait autre chose.
const KEYCAP = /<kbd[^>]*>[^<]*<\/kbd>/g

const files = walk('src')
const offenders = []
for (const f of files) {
  const src = readFileSync(f, 'utf8')
  if (!PICTO.test(src)) continue
  for (const [n, line] of code(src)) {
    const clean = line.replace(KEYCAP, '')
    if (PICTO.test(clean)) offenders.push(`${f}:${n} ${clean.trim().slice(0, 70)}`)
  }
}
ok('aucun caractère pictographique dans le code', offenders.length === 0, offenders.slice(0, 6).join(' | '))
ok('…et la sonde cherchait bien quelque chose', PICTO.test('◈') && !PICTO.test('abc'))

// LES DONNÉES · les champs `glyph` portent un NOM, jamais un caractère. Ils
// ont porté des caractères dans cinq fichiers, et c'est de là que tout le
// reste découlait.
const dataFiles = walk('src/data')
const badGlyphs = []
for (const f of dataFiles) {
  for (const m of readFileSync(f, 'utf8').matchAll(/glyph: '([^']*)'/g)) {
    if (!isIconName(m[1])) badGlyphs.push(`${f} → ${m[1]}`)
  }
}
ok('chaque glyphe de données est un nom d\'icône', badGlyphs.length === 0, badGlyphs.join(', '))

// LA SEULE COPIE · lib/site produit le site d'un client en HTML pur, donc il
// ne peut rien rendre en React et écrit son triangle de lecture à la main.
// Une copie non surveillée est une copie qui dérive : celle-ci doit porter le
// MÊME chemin et le MÊME filet que sa jumelle, sinon le site généré et l'app
// finissent avec deux triangles différents.
const site = readFileSync('src/lib/site.ts', 'utf8')
const playPath = /d="(M5 3 L21 12 L5 21 Z)"/.exec(block)?.[1]
ok('le triangle de lecture existe dans le jeu', !!playPath)
ok('…et la copie du site généré porte le même chemin', !!playPath && site.includes(`d="${playPath}"`))
ok('…avec le même filet d\'un pixel', /stroke-width="1"/.test(site) && /vector-effect="non-scaling-stroke"/.test(site))
// Et une seule · deux SVG écrits à la main dans ce fichier voudraient dire que
// le jeu recommence à se recopier ailleurs.
ok('…et il n\'y en a pas une seconde', (site.match(/<svg/g) || []).length === 1)

// Le LOGO reste dehors · la consigne l'excluait, et un logo passé à la
// grammaire des icônes est un logo redessiné.
ok('le logo ne passe pas par le jeu d\'icônes', !readFileSync('src/components/Logo.tsx', 'utf8').includes('BauhausIcon'))

console.log(fails ? `\n${fails} FAIL` : '\nall ok')
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
