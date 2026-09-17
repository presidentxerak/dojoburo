// LA SALLE EST-ELLE PLEINE ? · les douze cas d'usage, vérifiés sans navigateur.
//
// Ce que cette garde protège n'est pas « ça compile ». C'est la promesse que la
// page /build fait à voix haute : DOUZE agents, un par forme de problème,
// chacun porté par un personnage différent du dojo, chacun avec son parcours et
// sa difficulté propre. Le jour où l'un d'eux perd ses étapes, la salle affiche
// quand même sa silhouette, la carte s'ouvre, le parcours est vide, et personne
// ne s'en aperçoit avant un visiteur.
//
// Elle vérifie aussi ce qui distingue ce cours d'un sommaire : chaque étape
// FABRIQUE quelque chose et porte une question de contrôle. Une étape qui dit
// seulement « lisez ceci » est un chapitre déguisé, et c'est exactement la
// dérive que ce fichier existe pour attraper.
//
// Enfin elle vérifie l'EXPORT, parce que c'est la raison d'être du parcours :
// ce qu'on fabrique doit sortir dans cinq formats dont aucun n'appartient à un
// fournisseur, et aucun d'eux ne doit partir vide.
//
//   node scripts/test-usecases.mjs
import { build } from 'esbuild'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}

const OUT = 'node_modules/.dojo-usecases'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}

const U = await load('src/data/agentUseCases.ts', 'usecases.mjs')
const R = await load('src/data/roleAgents.ts', 'roles.mjs')
const P = await load('src/data/positioning.ts', 'positioning.mjs')
const X = await load('src/lib/agentExport.ts', 'export.mjs')
const D = await load('src/dojo/diplomas.ts', 'diplomas.mjs')

const { USE_CASES, USE_CASE_COUNT, USE_CASE_BY_AGENT, AGENTS_WITHOUT_USE_CASE } = U

/* --- 1 · la salle est pleine, et chaque siège est pris par quelqu'un ------ */

ok('douze cas d\'usage', USE_CASE_COUNT === 12, `${USE_CASE_COUNT}`)
ok('aucun identifiant en double', new Set(USE_CASES.map((u) => u.id)).size === USE_CASE_COUNT)
ok('aucun nom en double', new Set(USE_CASES.map((u) => u.name)).size === USE_CASE_COUNT)

// Un cas d'usage porté par DEUX personnages, ou par un personnage qui n'existe
// pas, donne une salle où quelqu'un manque ou compte double. La scène place les
// silhouettes par position, donc elle ne le dirait jamais.
const roster = new Set(R.COMPANY_IDS)
const orphans = USE_CASES.filter((u) => !roster.has(u.agent)).map((u) => `${u.id}→${u.agent}`)
ok('chaque cas est porté par un personnage de l\'équipage', orphans.length === 0, orphans.join(', '))
ok('un personnage ne porte pas deux cas', Object.keys(USE_CASE_BY_AGENT).length === USE_CASE_COUNT)
ok('aucun personnage de la salle sans cas', AGENTS_WITHOUT_USE_CASE.length === 0, AGENTS_WITHOUT_USE_CASE.join(', '))

/* --- 2 · chaque parcours enseigne quelque chose --------------------------- */

for (const u of USE_CASES) {
  const steps = u.steps || []
  ok(`${u.id} · quatre étapes`, steps.length === 4, `${steps.length}`)
  // Ce qui sépare un parcours d'un sommaire : chaque étape produit un objet et
  // pose une question à laquelle il faut savoir répondre pour continuer.
  const lame = steps.filter((s) => !s.title || !s.makes || !s.check)
  ok(`${u.id} · chaque étape fabrique et vérifie`, lame.length === 0, lame.map((s) => s.title).join(', '))
  const noQuestion = steps.filter((s) => !s.check.includes('?'))
  ok(`${u.id} · chaque contrôle est une question`, noQuestion.length === 0, noQuestion.map((s) => s.title).join(', '))
  // La difficulté NOMMÉE est la raison d'avoir douze cours plutôt qu'un. Sans
  // elle on retombe sur « écrivez un bon prompt », qui ne prépare à rien.
  ok(`${u.id} · sa difficulté est nommée`, typeof u.hard === 'string' && u.hard.length > 60)
  ok(`${u.id} · sa façon de rater est écrite`, typeof u.failure === 'string' && u.failure.length > 30)
  ok(`${u.id} · on repart avec quelque chose`, Array.isArray(u.ships) && u.ships.length >= 2)
  ok(`${u.id} · des mots qu'on taperait dans un moteur`, Array.isArray(u.keywords) && u.keywords.length >= 3)
}

// Deux cas d'usage qui échouent de la même façon sont un seul cours écrit deux
// fois, et le produit en promet douze différents.
const hardParts = USE_CASES.map((u) => u.hard.split('.')[0].trim().toLowerCase())
ok('douze difficultés distinctes', new Set(hardParts).size === USE_CASE_COUNT)

/* --- 3 · ce qu'on fabrique peut partir ------------------------------------ */

const sample = {
  slug: 'probe-agent',
  name: 'Probe',
  shape: 'A shape used only by this guard',
  system: 'You are a probe.\n\n## Never\n- Never invent a source.',
  tools: [{ name: 'search', description: 'Look something up', parameters: { type: 'object', properties: {} } }],
  notes: 'a note',
}
ok('cinq formats d\'export', X.FORMATS.length === 5, X.FORMATS.map((f) => f.id).join(', '))
for (const f of X.FORMATS) {
  const out = X.render(sample, f.id)
  ok(`export ${f.id} · non vide`, typeof out === 'string' && out.trim().length > 20)
  // La consigne est ce qui fait l'agent · un format qui la perd en route
  // exporte une coquille. tools.json est la seule exception légitime.
  if (f.id !== 'tools') ok(`export ${f.id} · porte la consigne`, out.includes('You are a probe'))
  ok(`export ${f.id} · un nom de fichier`, /\.[a-z]+$/.test(X.fileNameFor(sample, f.id)))
}
for (const f of ['tools', 'manifest']) {
  let parsed = true
  try { JSON.parse(X.render(sample, f)) } catch { parsed = false }
  ok(`export ${f} · du JSON valide`, parsed)
}

// AUCUN NOM DE FOURNISSEUR dans ce qui sort. C'est la promesse écrite sur la
// page : « none of these five formats belongs to a provider ». Un identifiant
// de modèle glissé dans le manifeste la rendrait fausse et périmerait le
// fichier à la version suivante.
const VENDORS = /\b(anthropic|claude-[a-z0-9-]+|openai|gpt-[0-9]|gemini|mistral|llama)\b/i
const leaky = X.FORMATS.filter((f) => VENDORS.test(X.render(sample, f.id))).map((f) => f.id)
ok('aucun format ne nomme un fournisseur', leaky.length === 0, leaky.join(', '))

/* --- 4 · le maître ne brade pas ses diplômes ------------------------------ */

const { DIPLOMAS, diplomaFor } = D
ok('quatre diplômes', DIPLOMAS.length === 4)
ok('rien n\'est acquis à zéro agent', diplomaFor(0, 999).earned.length === 0)
// Le piège exact que ce produit refuse : récompenser le fait de COMMENCER.
// Mille étapes entamées sur douze parcours ne valent aucun diplôme.
ok('les étapes éparses ne décernent rien', diplomaFor(0, 48).earned.length === 0)
ok('un agent terminé vaut le premier', diplomaFor(1, 4).earned.includes('first'))
ok('les douze valent tout', diplomaFor(USE_CASE_COUNT, 48).earned.length === DIPLOMAS.length)
// Un seuil au dessus du nombre d'agents rendrait un diplôme inatteignable, et
// une salle promet ce qu'elle contient.
ok('aucun seuil hors d\'atteinte', DIPLOMAS.every((d) => d.needs <= USE_CASE_COUNT))

/* --- 5 · les trois cours, une seule fois ---------------------------------- */

ok('trois cours', P.COURSE_COUNT === 3, P.COURSES.map((c) => c.nav).join(', '))
ok('chaque cours mène quelque part', P.COURSES.every((c) => typeof c.path === 'string' && c.path.startsWith('/')))
ok('les cours sont des piliers', P.COURSES.every((c) => P.PILLARS.includes(c)))
// La liste autonome qui vivait dans agentUseCases a été supprimée · si elle
// revient, deux listes de cours divergeront, et l'en-tête annoncera un nombre
// que la page d'accueil contredira.
ok('pas de seconde liste de cours', U.COURSES === undefined)

/* --- 6 · la page dit ce que les données contiennent ----------------------- */

const page = readFileSync('src/dojo/BuildAgent.tsx', 'utf8')
ok('la page ne code pas le nombre d\'agents en dur', !/\b(twelve|12)\s+agents/i.test(page.replace(/^\/\/.*$/gm, '')))
ok('la page lit USE_CASE_COUNT', page.includes('USE_CASE_COUNT'))
const scene = readFileSync('src/dojo/ClassScene.tsx', 'utf8')
// Un agent qu'on n'a pas choisi DORT · c'est le point d'interface qui pose la
// question à la place du texte, et il tient en une expression.
ok('un agent non choisi dort', /mood=\{[^}]*'sleep'/.test(scene))
ok('la salle réutilise le décor du dojo', scene.includes('Decor3D') && scene.includes('Character3D'))

console.log(fails ? `\n${fails} FAIL` : '\nall ok')
process.exit(fails ? 1 : 0)
