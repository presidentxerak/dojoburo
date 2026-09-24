// LA VERSION FRANÇAISE PARLE LE JARGON IA ANGLOPHONE.
//
// Demandé explicitement : « jeton » devient « token », et le français emploie
// les mots que les gens du métier emploient vraiment · token, prompt, system
// prompt, context window, guardrail, workflow, fine-tuning. Les traductions
// officielles (« jeton », « fenêtre de contexte ») sonnent comme une notice,
// et l'élève ne les retrouvera nulle part ailleurs : ni dans les outils, ni
// dans les vidéos, ni chez les formateurs qu'il suit.
//
// CE QUE LA GARDE REGARDE · le code de l'app (src/), commentaires retirés. Les
// commentaires sont écrits pour les développeurs et ne s'affichent jamais.
//
// CE QU'ELLE NE REGARDE PAS, VOLONTAIREMENT · les mots ambigus. « consigne »
// seul peut être la consigne d'un exercice donnée à l'élève, « fournisseur »
// peut être un fournisseur de paiement, « invite » une invitation d'équipe.
// Les interdire ferait accuser du français juste. La liste ne contient que
// des termes qui n'ont qu'un sens, et ce sens a un nom anglais dans le métier.
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const FORBIDDEN = [
  [/\bjetons?\b/i, 'token'],
  [/\b(consignes?|instructions?) système\b/i, 'system prompt'],
  [/\bfenêtres? de contexte\b/i, 'context window'],
  [/\bingénierie (de|des) (prompts?|consignes?|requêtes?)\b/i, 'prompt engineering'],
  [/\bgarde-fous?\b/i, 'guardrail'],
  [/\bréglage fin\b/i, 'fine-tuning'],
  [/\bflux de travail\b/i, 'workflow'],
  [/\bsorties? structurées?\b/i, 'structured output'],
  [/\bappels? d'outils?\b/i, 'tool call'],
  [/\b(grands? )?modèles? de langage\b/i, 'LLM'],
  [/\bplongements?\b/i, 'embedding'],
]

/** le code sans ses commentaires · blocs, JSX et lignes. Une adresse
 *  « https:// » n'est pas un commentaire : les deux barres y suivent « : ». */
export const stripComments = (src) => src
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .split('\n').map((l) => l.replace(/(^|\s)\/\/.*$/, '$1')).join('\n')

export const offences = (code) => {
  const out = []
  for (const [re, en] of FORBIDDEN) {
    const m = code.match(new RegExp(re.source, 'gi'))
    if (m) for (const w of m) out.push(`${w} → ${en}`)
  }
  return out
}

const walk = (dir) => readdirSync(dir).flatMap((n) => {
  const p = join(dir, n)
  return statSync(p).isDirectory() ? walk(p) : /\.(ts|tsx)$/.test(n) ? [p] : []
})

let fails = 0
const ok = (name, pass, detail = '') => {
  if (!pass) fails++
  console.log(`${pass ? 'ok  ' : 'FAIL'}  ${name}${detail ? ' · ' + detail : ''}`)
}

const found = []
const files = walk('src')
for (const f of files) {
  for (const o of offences(stripComments(readFileSync(f, 'utf8')))) found.push(`${f}: ${o}`)
}
ok('le français parle le jargon IA anglophone', found.length === 0,
  found.slice(0, 6).join(' | ') || `${files.length} fichiers`)

// LES MORSURES · dans les deux sens.
ok('morsure · « jeton » dans un texte serait vu', offences(stripComments("fr: 'On te facture au jeton.'")).length === 1)
ok('morsure · « fenêtre de contexte » aussi', offences("'La fenêtre de contexte est pleine.'").length === 1)
ok('morsure · un commentaire ne l\'est pas', offences(stripComments('// le jeton est compté\n/* les jetons */')).length === 0)
ok('morsure · une adresse n\'est pas un commentaire',
  offences(stripComments("fr: 'https://exemple.fr · un jeton'")).length === 1)
ok('morsure · « token » passe', offences("fr: 'On te facture au token.'").length === 0)
ok('morsure · « consigne » seul n\'est pas accusé', offences("fr: 'Lis la consigne de l\\'exercice.'").length === 0)

console.log(fails ? `\ncheck-jargon · ${fails} problème(s)` : `\ncheck-jargon · ${files.length} fichiers relus`)
process.exitCode = fails ? 1 : 0
