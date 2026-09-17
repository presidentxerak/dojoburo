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

/* --- 4 · le maître compte les TROIS cours -------------------------------- */

const M = await load('src/dojo/masterProgress.ts', 'master.mjs')
const A = await load('src/data/academy.ts', 'academy.mjs')
const F = await load('src/data/frugality.ts', 'frugality.mjs')
const { readProgress, masterAdvice, AGENT_TRACK, LEVER_TRACK } = M

/** Toutes les clés d'un parcours d'agent terminé. */
const agentKeys = (u) => u.steps.map((_, i) => `${AGENT_TRACK}/${u.id}/${i}`)
const allLessons = A.ALL_LESSONS.map((x) => `${x.track.slug}/${x.lesson.slug}`)
const allLevers = F.LEVERS.map((l) => `${LEVER_TRACK}/${l.id}`)
const by = (list) => Object.fromEntries(readProgress(list).map((c) => [c.id, c]))

ok('trois cours comptés', readProgress([]).length === 3)
ok('à vide, tout est à zéro', readProgress([]).every((c) => c.done === 0 && c.percent === 0))

// LE DÉFAUT QUE CETTE GARDE EXISTE POUR TENIR FERMÉ.
//
// Les étapes d'agent, les leçons et les leviers partagent un seul magasin. Le
// compteur de l'académie les additionnait TOUS contre un dénominateur de
// vingt leçons : finir trois agents affichait « 34 sur 20 » et une barre à
// 170 %. Rien ne le montrait, parce qu'il faut avoir suivi deux cours pour le
// déclencher et que chaque page est testée seule.
const everyAgentStep = USE_CASES.flatMap(agentKeys)
ok('les étapes d\'agent ne comptent pas comme des leçons', by(everyAgentStep).academy.done === 0,
  `${by(everyAgentStep).academy.done}`)
ok('les leviers non plus', by(allLevers).academy.done === 0)
ok('…et les leçons ne comptent pas comme des agents', by(allLessons).build.done === 0)
ok('…ni comme des leviers', by(allLessons).eco.done === 0)

// Aucun pourcentage ne peut dépasser cent, quoi qu'on lui donne · une barre
// qui déborde de son rail ne se voit pas sur une page qu'on regarde à zéro.
const everything = [...everyAgentStep, ...allLessons, ...allLevers, 'inventé/n-importe-quoi']
ok('aucun pourcentage ne dépasse cent', readProgress(everything).every((c) => c.percent <= 100),
  readProgress(everything).map((c) => `${c.id}:${c.percent}`).join(' '))
ok('une clé inconnue ne compte nulle part', readProgress(['rien/du/tout']).every((c) => c.done === 0))

// Un agent COMMENCÉ ne compte pas · c'est la même règle que pour les diplômes,
// et elle doit tenir dans le compteur aussi, sinon les deux se contredisent.
ok('un parcours entamé ne compte pas un agent', by([agentKeys(USE_CASES[0])[0]]).build.done === 0)
ok('…un parcours fini, si', by(agentKeys(USE_CASES[0])).build.done === 1)

// Les trois cours PLEINS valent cent pour cent chacun · si l'un d'eux ne
// pouvait pas atteindre cent, son diplôme final serait inatteignable.
const full = by(everything)
ok('chaque cours peut atteindre cent', ['build', 'academy', 'eco'].every((k) => full[k].percent === 100),
  ['build', 'academy', 'eco'].map((k) => `${k}:${full[k].percent}`).join(' '))

// Le conseil du maître DIT QUOI FAIRE · il change avec l'avancement, sinon
// c'est une phrase décorative posée au dessus d'un tableau.
const advices = new Set([
  masterAdvice(readProgress([])),
  masterAdvice(readProgress(agentKeys(USE_CASES[0]))),
  masterAdvice(readProgress(allLessons)),
  masterAdvice(readProgress(everything)),
])
ok('le conseil change avec l\'avancement', advices.size === 4, `${advices.size} phrases distinctes`)
ok('…et aucun n\'est vide', [...advices].every((a) => a.length > 30))

/* --- 5 · le maître ne brade pas ses diplômes ------------------------------ */

const { DIPLOMAS, diplomaFor } = D
ok('au moins un diplôme par cours et un pour l\'ensemble', DIPLOMAS.length >= 4, `${DIPLOMAS.length}`)
ok('rien n\'est acquis à vide', diplomaFor(readProgress([])).earned.length === 0)
// Le piège exact que ce produit refuse : récompenser le fait de COMMENCER.
// Une étape entamée sur chacun des douze parcours ne vaut aucun diplôme.
const started = USE_CASES.map((u) => agentKeys(u)[0])
ok('les étapes éparses ne décernent rien', diplomaFor(readProgress(started)).earned.length === 0)
ok('un agent terminé vaut le premier', diplomaFor(readProgress(agentKeys(USE_CASES[0]))).earned.includes('first'))

// CHAQUE COURS PÈSE · un diplôme au moins doit dépendre de chacun des trois,
// sinon le centre annonce trois cours et n'en récompense qu'un, ce qui dit à
// l'élève lequel compte vraiment.
const allButBuild = [...allLessons, ...allLevers]
const allButAcademy = [...everyAgentStep, ...allLevers]
const allButEco = [...everyAgentStep, ...allLessons]
const n = (list) => diplomaFor(readProgress(list)).earned.length
const nAll = n(everything)
ok('tout terminé décerne tout', nAll === DIPLOMAS.length, `${nAll}/${DIPLOMAS.length}`)
ok('sans le cours de construction, il manque des diplômes', n(allButBuild) < nAll)
ok('sans le prompt engineering aussi', n(allButAcademy) < nAll)
ok('sans la sobriété aussi', n(allButEco) < nAll)

// Le prochain diplôme dit ce qu'il RESTE · une case grisée sans reste est un
// mur, pas un repère.
const mid = diplomaFor(readProgress(agentKeys(USE_CASES[0])))
ok('le prochain diplôme est nommé', !!mid.next)
ok('…et ce qu\'il reste est écrit', mid.toGo.length > 3, mid.toGo)
ok('plus rien à faire, plus de prochain', diplomaFor(readProgress(everything)).next === null)

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
