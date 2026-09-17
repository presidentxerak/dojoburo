// Le calculateur dit-il la vérité ?
//
// Cette page enseigne aux gens ce qu'ils dépensent. Un outil de mesure qui se
// trompe est pire qu'une absence d'outil : il donne une fausse assurance, et
// on prend des décisions dessus. Ce que cette garde vérifie n'est donc pas
// « la fonction rend un nombre », mais les propriétés qui rendent le chiffre
// utilisable — et surtout LA propriété que la page existe pour enseigner :
// le coût d'une conversation croît comme le CARRÉ du nombre de tours, parce
// que l'historique repart en entier à chaque fois.
//
// Elle vérifie aussi qu'aucune promesse carbone ne revient. Nous ne mesurons
// pas d'empreinte, nous renvoyons vers Nekomai ; une phrase qui laisserait
// croire le contraire serait un chiffre inventé dans un outil qui vend la
// mesure.
//
//   node scripts/test-frugality.mjs
import { build } from 'esbuild'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}

const OUT = 'node_modules/.dojo-frugal'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}

const F = await load('src/data/frugality.ts', 'frugality.mjs')
const U = F.DEFAULT_USAGE

console.log('--- la propriété que la page enseigne ----------------------')
// LE POINT CENTRAL. Doubler le nombre de tours doit coûter NETTEMENT plus du
// double. Si ce test passe avec un facteur 2, le modèle a oublié l'historique
// et toute la page ment.
{
  const one = F.compute({ ...U, turns: 5 })
  const two = F.compute({ ...U, turns: 10 })
  const ratio = (two.inTokens + two.outTokens) / (one.inTokens + one.outTokens)
  ok('doubler les tours coûte plus du double', ratio > 2.2, `×${ratio.toFixed(2)} pour 5 → 10 tours`)
  // …et ça vient bien de l'historique, pas d'ailleurs
  const grew = two.history / Math.max(1, one.history)
  ok('…et c’est l’historique qui enfle', grew > 3, `historique ×${grew.toFixed(1)}`)
  ok('un seul tour n’a aucun historique', F.compute({ ...U, turns: 1 }).history === 0)
}

console.log('\n--- le modèle est cohérent ---------------------------------')
{
  const b = F.compute(U)
  ok('l’entrée est la somme de ses parts',
    b.inTokens === b.fixedPerTurn + b.typed + b.history,
    `${b.inTokens} = ${b.fixedPerTurn} + ${b.typed} + ${b.history}`)
  ok('la sortie ne contient que les réponses', b.written === U.answer * U.turns)
  ok('le mois est le jour multiplié par trente', b.inMonth === b.inTokens * U.perDay * F.DAYS)
  ok('les outils pèsent avant d’avoir servi',
    F.compute({ ...U, tools: 8 }).inTokens > F.compute({ ...U, tools: 0 }).inTokens)
  ok('un brief plus long coûte plus cher',
    F.compute({ ...U, brief: 4000 }).inTokens > b.inTokens)
}

console.log('\n--- aucun prix n’est inventé -------------------------------')
ok('sans prix saisi, aucun montant n’est annoncé', F.compute(U).costMonth === null,
  'un tarif écrit en dur est faux le jour où le fournisseur le change')
ok('les prix par défaut sont bien à zéro', U.inPrice === 0 && U.outPrice === 0)
{
  const priced = F.compute({ ...U, inPrice: 3, outPrice: 15 })
  ok('avec des prix, le montant apparaît', typeof priced.costMonth === 'number' && priced.costMonth > 0,
    priced.costMonth?.toFixed(2))
  // la sortie doit peser dans le montant · c'est la moitié que les gens oublient
  const cheapOut = F.compute({ ...U, inPrice: 3, outPrice: 3 })
  ok('une sortie plus chère coûte plus cher', priced.costMonth > cheapOut.costMonth)
}

console.log('\n--- les leviers gagnent vraiment quelque chose --------------')
{
  const priced = { ...U, inPrice: 3, outPrice: 15 }
  const rank = F.ranked(priced)
  ok('tous les leviers sont classés', rank.length === F.LEVERS.length, `${rank.length} leviers`)
  const losers = rank.filter((r) => r.gain.tokens < 0)
  ok('aucun levier ne coûte plus qu’il ne rapporte', losers.length === 0,
    losers.map((r) => r.lever.id).join(', '))
  ok('le classement est décroissant',
    rank.every((r, i) => i === 0 || rank[i - 1].gain.tokens >= r.gain.tokens))
  // Le classement doit DÉPENDRE des chiffres · un ordre figé mentirait à la
  // moitié des lecteurs. Sans outils branchés, en détacher ne rapporte rien.
  const noTools = F.ranked({ ...priced, tools: 0 })
  const detach = noTools.find((r) => r.lever.id === 'tools-off')
  ok('sans outils, en détacher ne rapporte rien', detach.gain.tokens === 0)
  ok('…et le classement a donc changé', noTools[0].lever.id !== 'tools-off' || rank[0].lever.id === 'tools-off')
}

console.log('\n--- chaque levier dit quand NE PAS le faire -----------------')
{
  const thin = F.LEVERS.filter((l) => !l.not || l.not.length < 60 || !l.why || l.why.length < 60 || !l.how)
  ok('aucun levier n’est un slogan', thin.length === 0, thin.map((l) => l.id).join(', '))
  const fams = new Set(F.LEVERS.map((l) => l.family))
  ok('les deux familles existent', fams.has('setup') && fams.has('writing'), [...fams].join(', '))
  ok('les réglages sont la famille la mieux fournie',
    F.LEVERS.filter((l) => l.family === 'setup').length >= 3,
    'c’est la moitié que les cours sautent, et celle qui rapporte le plus')
}

console.log('\n--- pas de carbone, et Nekomai est nommé --------------------')
{
  const page = readFileSync('src/frugality/Frugality.tsx', 'utf8')
  const model = readFileSync('src/data/frugality.ts', 'utf8')
  // On ne PROMET pas de mesurer une empreinte. Mais on a le droit — et même le
  // devoir — de dire qu'on ne le fait pas, et que c'est le métier de
  // quelqu'un d'autre.
  //
  // La première version de cette règle cherchait « nous … mesurons … carbone »
  // et attrapait sa propre clause de démenti : « we deliberately do not
  // measure carbon here ». Une garde qui ne distingue pas une affirmation de
  // sa négation interdit d'être honnête, ce qui est le contraire du but.
  //
  // On découpe donc en phrases, on garde celles qui parlent de mesurer ET de
  // carbone, et on n'accuse que celles où rien ne nie.
  const sentences = page.split(/(?<=[.!?])\s+/)
  const suspect = sentences.filter((x) =>
    /(measure|mesur|count|track)/i.test(x) &&
    /(carbon|CO2|CO₂|footprint)/i.test(x) &&
    !/(do not|don't|does not|doesn't|never|rather than|instead of|without)/i.test(x))
  ok('la page ne prétend pas mesurer le carbone', suspect.length === 0,
    suspect.map((x) => x.trim().slice(0, 70)).join(' | '))
  ok('…et elle dit explicitement qu’elle ne le fait pas',
    /do not measure carbon/i.test(page))
  ok('le modèle ne calcule aucune empreinte', !/co2|carbon|gco/i.test(model.replace(/\/\/.*$/gm, '')))
  ok('Nekomai est nommé et lié', /nekomai\.com/i.test(page) && /Nekomai/.test(page))
  ok('le lien sortant est sûr', /rel="noopener"/.test(page),
    'un target=_blank sans noopener donne la main sur l’onglet d’origine')
  ok('l’encart s’adresse aux entreprises', /For companies/i.test(page))
}

console.log('\n' + (fails ? `${fails} échec(s)` : 'le calcul tient'))
process.exit(fails ? 1 : 0)
