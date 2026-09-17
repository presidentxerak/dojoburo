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

const targets = [...ROOTS.flatMap((d) => walk(join(ROOT, d))), ...FILES.map((f) => join(ROOT, f))]

const hits = []
for (const f of targets) {
  const rel = relative(ROOT, f)
  const src = readFileSync(f, 'utf8')
  if (!src.includes(EM) && !src.includes(EN)) continue
  for (const [n, line] of speech(src, f.endsWith('.html'))) {
    if (line.includes(EM)) hits.push([rel, n, EM, line.trim().slice(0, 110)])
    // Le demi-cadratin n'est fautif qu'employé comme ponctuation, entouré
    // d'espaces. Entre deux nombres il est correct et doit le rester.
    else if (new RegExp(` ${EN} `).test(line)) hits.push([rel, n, EN, line.trim().slice(0, 110)])
  }
}

if (hits.length) {
  for (const [f, n, d, line] of hits) console.log(`FAIL  ${f}:${n} · ${d === EM ? 'tiret cadratin' : 'tiret demi-cadratin'} · ${line}`)
  console.log(`\ncheck-dashes · ${hits.length} dash${hits.length > 1 ? 'es' : ''} in app text · replace with a comma, a colon or a middot`)
  process.exit(1)
}

console.log(`check-dashes · ok · ${targets.length} files, no dash in any text the app shows`)
