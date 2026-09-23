// PAS UN SEUL TIRET CADRATIN DANS LES TEXTES DE L'APP.
//
// La consigne est simple et elle est absolue : « enlève tous les tirets
// cadratins des textes de l'app ». Elle a déjà été appliquée une fois à la
// main, sur 328 occurrences, et une purge faite à la main revient toujours :
// il suffit d'une page recopiée d'une autre, d'un prompt écrit dans la foulée,
// d'une entrée de catalogue ajoutée un mardi.
//
// CE QUI EST UN TEXTE DE L'APP, et ce qui ne l'est pas. Les commentaires ne
// sont pas des textes de l'app : personne ne les lit dans un navigateur, et
// les réécrire à la virgule abîmerait des explications sans rien gagner. Ce
// qui compte est ce qui SORT : les chaînes, le JSX, les métadonnées, les
// corps de la bibliothèque qu'on télécharge, le prompt du robot de support.
//
// La garde lit donc chaque fichier en sautant les commentaires, et refuse tout
// tiret cadratin dans ce qui reste. Elle attrape aussi le tiret demi-cadratin
// employé comme ponctuation (« mot – mot »), qui est la façon la plus naturelle
// de contourner la règle sans s'en rendre compte, tout en laissant passer les
// intervalles (« 2020–2024 ») où il est correct.
//
//   node scripts/check-dashes.mjs
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const EM = '—'
const EN = '–'
const ROOT = process.cwd()
// CE QUE LA GARDE BALAIE. src/ et api/ portent tout ce que l'app affiche, y
// compris les consignes système des agents : un prompt est un texte qu'on
// exporte et qu'on relit, pas un commentaire.
//
// scripts/ est DEHORS, à une exception près : ce sont des outils de
// développement, et leur sortie console n'est lue par personne d'autre que
// nous. gen-seo, lui, écrit du HTML servi à de vrais visiteurs, donc il rentre.
const ROOTS = ['src', 'api']
const FILES = ['index.html', 'scripts/gen-seo.mjs']
const EXT = /\.(ts|tsx|html|mjs)$/
const SKIP_DIR = new Set(['node_modules', 'dist', '.git'])

function walk(dir, out = []) {
  for (const n of readdirSync(dir)) {
    if (SKIP_DIR.has(n)) continue
    const p = join(dir, n)
    if (statSync(p).isDirectory()) walk(p, out)
    else if (EXT.test(n)) out.push(p)
  }
  return out
}

/** Les lignes d'un fichier, commentaires retirés.
 *
 *  C'est volontairement une heuristique de LIGNE, pas un analyseur syntaxique.
 *  Un analyseur dirait la vérité exacte sur `"//"` dans une chaîne ; il
 *  demanderait aussi une dépendance et une demi-journée, pour attraper un cas
 *  qui n'existe pas dans ce dépôt. Une garde trop coûteuse à écrire ne
 *  s'écrit pas, et c'est le pire des deux défauts. */
function speech(src, html) {
  const out = []
  let block = false
  for (const [i, line] of src.split('\n').entries()) {
    const t = line.trim()
    if (html) {
      if (t.startsWith('<!--')) block = true
      if (block) { if (t.includes('-->')) block = false; continue }
    } else {
      if (t.startsWith('/*')) block = true
      if (block) { if (t.includes('*/')) block = false; continue }
      if (t.startsWith('//') || t.startsWith('*')) continue
    }
    out.push([i + 1, line])
  }
  return out
}

/** Les tirets fautifs d'un fichier · la ligne et lequel. */
function dashesIn(src, html) {
  const out = []
  for (const [n, line] of speech(src, html)) {
    if (line.includes(EM)) out.push([n, EM, line.trim().slice(0, 110)])
    // Le demi-cadratin n'est fautif qu'employé comme ponctuation, entouré
    // d'espaces. Entre deux nombres il est correct et doit le rester.
    else if (new RegExp(` ${EN} `).test(line)) out.push([n, EN, line.trim().slice(0, 110)])
  }
  return out
}

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}

/* --- le balayage tient debout -------------------------------------------- */
// Une garde dont le balayage s'est vidé passe au vert sans rien lire. C'est la
// façon dont une barrière meurt sans qu'on s'en aperçoive, et la porte du
// verdict doit donc être le fait d'avoir REGARDÉ, pas le fait de n'avoir rien
// trouvé.
const byRoot = ROOTS.map((d) => [d, walk(join(ROOT, d))])
for (const [d, list] of byRoot) ok(`${d}/ est balayé`, list.length > 0, `${list.length} fichiers`)
const targets = [...byRoot.flatMap(([, l]) => l), ...FILES.map((f) => join(ROOT, f))]
ok('les fichiers nommés un par un sont lus', FILES.length > 0, FILES.join(', '))

// LA MORSURE · une ligne fabriquée ici, qui DOIT être refusée. Sans elle,
// « aucun tiret trouvé » ne distingue pas une app propre d'un détecteur cassé,
// et les deux se lisent pareil en vert.
ok('le détecteur mord', dashesIn(`const s = 'a ${EM} b'`, false).length === 1)
ok('…et le demi-cadratin employé comme ponctuation aussi', dashesIn(`const s = 'a ${EN} b'`, false).length === 1)
// …sans mordre ce qui est légitime : un commentaire, et un intervalle.
ok('…sans mordre un commentaire', dashesIn(`// a ${EM} b`, false).length === 0)
ok('…ni un intervalle de nombres', dashesIn(`const s = '2020${EN}2024'`, false).length === 0)

/* --- puis chaque fichier -------------------------------------------------- */
// Un `ok` par fichier PORTEUR d'un tiret quelque part · ce sont ceux où la
// garde a eu quelque chose à trancher. Les autres passent sans qu'on les
// compte : les énumérer gonflerait le chiffre sans ajouter de vigilance.
let scanned = 0
for (const f of targets) {
  const rel = relative(ROOT, f)
  const src = readFileSync(f, 'utf8')
  if (!src.includes(EM) && !src.includes(EN)) continue
  scanned++
  const hits = dashesIn(src, f.endsWith('.html'))
  ok(rel, hits.length === 0, hits.map(([n, d, l]) => `:${n} ${d === EM ? 'cadratin' : 'demi-cadratin'} · ${l}`).join(' | '))
}

console.log(
  fails
    ? `\ncheck-dashes · ${fails} problème(s) · remplacer par une virgule, un deux-points ou un point médian`
    : `\ncheck-dashes · ${targets.length} fichiers lus, ${scanned} à trancher, aucun tiret dans un texte de l'app`,
)
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
