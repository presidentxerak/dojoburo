// Le dojo ne doit rien appeler, rien écrire, rien facturer.
//
// Le produit a cessé d'exécuter pour enseigner. C'est une promesse écrite en
// toutes lettres sur la page d'accueil (« nothing here calls a paid model or
// writes to your accounts »), et c'est le genre de promesse qui se casse sans
// bruit : quelqu'un ajoute une action, oublie le garde, et une requête part
// chez un fournisseur — ou pire, un vrai courriel part chez un vrai client.
//
// Ce que cette garde vérifie n'est donc pas « la fonction rend un objet ».
// C'est la propriété qui décide si la promesse tient : AUCUNE fonction de
// src/agents/workApi.ts qui touche un point d'accès sortant ne peut y arriver
// sans passer par isSandbox(). Elle le vérifie sur le texte du fichier, pas
// sur les fonctions qu'on a pensé à tester — c'est la différence entre une
// garde et une liste.
//
//   node scripts/test-sandbox.mjs
import { build } from 'esbuild'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}

const OUT = 'node_modules/.dojo-sandbox'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}

const S = await load('src/agents/sandbox.ts', 'sandbox.mjs')

console.log('--- l’interrupteur ----------------------------------------')
ok('le bac à sable est le DÉFAUT', S.isSandbox() === true)
ok('…et l’exécution réelle demande un drapeau explicite', S.isLive() === false)

console.log('\n--- ce que rend un run ------------------------------------')
const run = S.sandboxRun({
  task: 'market-study',
  agentName: 'Scribe',
  connectors: ['gmail', 'notion', 'slack'],
  brief: 'You are Scribe. '.repeat(60),
  context: 'Earlier in this conversation: '.repeat(40),
})
ok('il répond au lieu d’échouer', run.ok === true)
ok('aucune application n’a voyagé', run.appsSent === 0)
ok('aucune consommation n’est rapportée', run.usage === null)
ok('le moteur dit qu’il n’a rien coûté', /sandbox/i.test(run.deliverable.model), run.deliverable.model)
// Le livrable doit porter l'identifiant RÉEL de l'étape · le tableau de bord
// compte par étape pour savoir si un coéquipier a déjà produit. Avec une
// constante, aucune carte n'enregistrait jamais rien.
ok('il est rattaché à l’étape demandée', run.deliverable.taskId === 'market-study', run.deliverable.taskId)

const md = run.deliverable.markdown
ok('la fiche dit que RIEN n’a été envoyé', /nothing was sent/i.test(md))
ok('…et que rien n’a été facturé', /nothing was charged/i.test(md))
ok('elle annonce que ses chiffres sont des ESTIMATIONS', /estimates.*not measurements/i.test(md))
ok('elle détaille les quatre postes du coût',
  /Brief/.test(md) && /Carried context/.test(md) && /Your task/.test(md) && /Tool definitions/.test(md))
ok('elle donne un total', /\*\*Total in\*\*/.test(md))
ok('elle nomme les leviers à tirer', /What to change first/.test(md))
ok('elle renvoie vers le guide pour faire ça en vrai', /\/guide/.test(md))

// Le piège à éviter : fabriquer un faux livrable. Un bac à sable qui rend une
// campagne marketing inventée ment sur ce que l'outil sait faire, dans un
// produit dont l'argument est l'honnêteté des chiffres.
ok('elle ne fabrique PAS un faux résultat', !/here is your (campaign|draft|post|article)/i.test(md))

console.log('\n--- les estimations ----------------------------------------')
ok('plus de texte, plus de jetons', S.estimateTokens('a'.repeat(1000)) > S.estimateTokens('a'.repeat(100)))
ok('un texte vide coûte au moins un jeton', S.estimateTokens('') === 1)
ok('l’ordre de grandeur est plausible', Math.abs(S.estimateTokens('a'.repeat(3600)) - 1000) < 60,
  `${S.estimateTokens('a'.repeat(3600))} pour 3600 caractères`)
ok('une application coûte quelque chose avant d’avoir servi', S.TOKENS_PER_TOOL > 0)
{
  const none = S.sandboxDeliverable({ task: 'x', agentName: 'A', connectors: [] })
  const three = S.sandboxDeliverable({ task: 'x', agentName: 'A', connectors: ['a', 'b', 'c'] })
  ok('trois applications pèsent plus que zéro', three.markdown.length !== none.markdown.length)
  ok('sans application, on ne conseille pas d’en éteindre', !/Turn off the/.test(none.markdown))
  ok('avec trois, on conseille d’en éteindre', /Turn off the 3 connected apps/.test(three.markdown))
}

console.log('\n--- un refus d’écriture reste un refus --------------------')
ok('l’écriture est refusée', S.SANDBOX_REFUSAL.ok === false)
ok('…et la raison est dite en clair', /practice room/i.test(S.SANDBOX_REFUSAL.detail))

console.log('\n--- AUCUNE SORTIE SANS GARDE -------------------------------')
// La vraie garde. On lit le fichier et on exige que toute fonction exportée
// qui atteint un point d'accès sortant contienne isSandbox(). Tester les
// fonctions qu'on a pensé à tester n'aurait rien prouvé sur la prochaine.
const src = readFileSync('src/agents/workApi.ts', 'utf8')
// les points d'accès qui FONT quelque chose · lister, lire ou décrire est
// permis (on apprend en lisant un catalogue), agir ne l'est pas
const OUTBOUND = ['/api/tool-action', '/api/agent-run']
const fns = [...src.matchAll(/export (?:async )?function (\w+)[\s\S]*?\n\}/g)]
ok('le fichier a bien été découpé en fonctions', fns.length > 5, `${fns.length} fonctions`)
let unguarded = []
for (const m of fns) {
  const [body, name] = [m[0], m[1]]
  if (!OUTBOUND.some((e) => body.includes(e))) continue
  if (!body.includes('isSandbox()')) unguarded.push(name)
}
ok('toute fonction qui agit passe par isSandbox()', unguarded.length === 0,
  unguarded.length ? unguarded.join(', ') : 'vérifié sur le texte, pas sur une liste')

// …et le garde doit être la PREMIÈRE chose de la fonction : un garde placé
// après le fetch ne garde rien.
let late = []
for (const m of fns) {
  const [body, name] = [m[0], m[1]]
  if (!body.includes('isSandbox()')) continue
  for (const e of OUTBOUND) {
    const g = body.indexOf('isSandbox()')
    const f = body.indexOf(e)
    if (f >= 0 && g > f) late.push(`${name} (${e})`)
  }
}
ok('…et il passe AVANT l’appel, pas après', late.length === 0, late.join(', '))

console.log('\n' + (fails ? `${fails} échec(s)` : 'le dojo n’appelle rien'))
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
