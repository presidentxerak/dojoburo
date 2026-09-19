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

/* --- 4 · le maître compte TOUS les cours --------------------------------- */
//
// CETTE SECTION DISAIT « LES TROIS COURS », et elle écrivait le chiffre 3 en
// dur à côté d'une liste ['build', 'academy', 'eco'] écrite à la main. Le jour
// où deux cours de design sont arrivés, elle est devenue rouge · ce qui est le
// bon comportement, mais pour la mauvaise raison : elle ne vérifiait pas que
// le maître compte tous les cours, elle vérifiait qu'il en compte trois.
//
// La différence n'est pas théorique. Une garde qui écrit le nombre attendu
// passe au vert si un cours DISPARAÎT en même temps qu'un autre est ajouté, et
// elle rougit quand le produit grandit légitimement, ce qui apprend à la
// modifier sans réfléchir. Elle est dérivée de COURSE_PILLARS maintenant : le
// maître doit rendre exactement les cours déclarés, ni plus, ni moins, ni dans
// un autre ordre.

const M = await load('src/dojo/masterProgress.ts', 'master.mjs')
const A = await load('src/data/academy.ts', 'academy.mjs')
const F = await load('src/data/frugality.ts', 'frugality.mjs')
const DC = await load('src/data/designCourses.ts', 'design.mjs')
const { readProgress, masterAdvice, AGENT_TRACK, LEVER_TRACK, DESIGN_TRACK } = M

/** Toutes les clés d'un parcours d'agent terminé. */
const agentKeys = (u) => u.steps.map((_, i) => `${AGENT_TRACK}/${u.id}/${i}`)
const allLessons = A.ALL_LESSONS.map((x) => `${x.track.slug}/${x.lesson.slug}`)
const allLevers = F.LEVERS.map((l) => `${LEVER_TRACK}/${l.id}`)
const allDesign = DC.DESIGN_COURSES.flatMap((c) => c.lessons.map((l) => `${DESIGN_TRACK}/${c.id}/${l.id}`))
const by = (list) => Object.fromEntries(readProgress(list).map((c) => [c.id, c]))

ok('le maître rend exactement les cours déclarés',
  readProgress([]).map((c) => c.id).join(',') === P.COURSE_PILLARS.join(','),
  readProgress([]).map((c) => c.id).join(', '))
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
const everything = [...everyAgentStep, ...allLessons, ...allLevers, ...allDesign, 'inventé/n-importe-quoi']
ok('aucun pourcentage ne dépasse cent', readProgress(everything).every((c) => c.percent <= 100),
  readProgress(everything).map((c) => `${c.id}:${c.percent}`).join(' '))
ok('une clé inconnue ne compte nulle part', readProgress(['rien/du/tout']).every((c) => c.done === 0))

// Un agent COMMENCÉ ne compte pas · c'est la même règle que pour les diplômes,
// et elle doit tenir dans le compteur aussi, sinon les deux se contredisent.
ok('un parcours entamé ne compte pas un agent', by([agentKeys(USE_CASES[0])[0]]).build.done === 0)
ok('…un parcours fini, si', by(agentKeys(USE_CASES[0])).build.done === 1)

// TOUS les cours pleins valent cent pour cent chacun · si l'un d'eux ne
// pouvait pas atteindre cent, son diplôme final serait inatteignable, et rien
// d'autre ne le dirait. La liste est DÉRIVÉE : un cours ajouté demain est
// vérifié sans que personne y pense, ce qui est tout l'intérêt.
const full = by(everything)
ok('chaque cours peut atteindre cent', P.COURSE_PILLARS.every((k) => full[k].percent === 100),
  P.COURSE_PILLARS.map((k) => `${k}:${full[k].percent}`).join(' '))

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

// LE NOMBRE DE COURS · dérivé de la liste, pas écrit. Il valait 3 en dur ici,
// ce qui faisait de cette ligne une garde qui interdisait au produit de
// grandir plutôt qu'une garde qui vérifie sa cohérence.
ok('chaque cours déclaré a son pilier', P.COURSE_COUNT === P.COURSES.length && P.COURSES.every(Boolean),
  P.COURSES.map((c) => c.nav).join(', '))
ok('chaque cours a une adresse à lui',
  new Set(P.COURSES.map((c) => c.path)).size === P.COURSE_COUNT,
  P.COURSES.map((c) => c.path).join(' '))
ok('chaque cours mène quelque part', P.COURSES.every((c) => typeof c.path === 'string' && c.path.startsWith('/')))
ok('les cours sont des piliers', P.COURSES.every((c) => P.PILLARS.includes(c)))
// La liste autonome qui vivait dans agentUseCases a été supprimée · si elle
// revient, deux listes de cours divergeront, et l'en-tête annoncera un nombre
// que la page d'accueil contredira.
ok('pas de seconde liste de cours', U.COURSES === undefined)

/* --- 6 · le cours pour débutant est complet ------------------------------- */

const LS = await load('src/data/agentLessons.ts', 'lessons.mjs')
const { LESSONS, USE_CASES_WITHOUT_LESSON, LESSONS_WITHOUT_USE_CASE } = LS

// LE TROU QUI NE SE VOIT PAS. La fiche s'affiche même sans leçon : le titre
// d'étape est là, l'animation ne l'est pas, et le « A à Z » promis est une
// case vide. Douze agents annoncés avec un cours dont l'un serait muet, c'est
// exactement le genre de chose qu'on découvre par un visiteur.
ok('chaque agent a son cours de débutant', USE_CASES_WITHOUT_LESSON.length === 0, USE_CASES_WITHOUT_LESSON.join(', '))
ok('aucun cours orphelin', LESSONS_WITHOUT_USE_CASE.length === 0, LESSONS_WITHOUT_USE_CASE.join(', '))

const STAGES = new Set(['define', 'constrain', 'expose', 'test', 'measure', 'bound'])
for (const u of USE_CASES) {
  const L = LESSONS[u.id]
  if (!L) continue
  const P = L.primer
  // LE PRÉAMBULE · il existe pour quelqu'un qui n'a jamais rien construit.
  // Sans jargon veut dire sans jargon : une phrase d'explication qui emploie
  // le mot qu'elle devait expliquer n'explique rien.
  ok(`${u.id} · une phrase sans jargon`, typeof P.plain === 'string' && P.plain.length > 60)
  ok(`${u.id} · une comparaison connue`, typeof P.like === 'string' && P.like.length > 40)
  ok(`${u.id} · ce qu'il faut avoir sous la main`, Array.isArray(P.need) && P.need.length >= 2)
  ok(`${u.id} · les mots de métier sont traduits`, Array.isArray(P.words) && P.words.length >= 2)
  ok(`${u.id} · autant de leçons que d'étapes`, L.steps.length === u.steps.length, `${L.steps.length}/${u.steps.length}`)

  for (const [i, sl] of L.steps.entries()) {
    const tag = `${u.id}/${i + 1}`
    ok(`${tag} · pourquoi l'étape existe`, typeof sl.why === 'string' && sl.why.length > 60)
    ok(`${tag} · des gestes concrets`, Array.isArray(sl.how) && sl.how.length >= 2)
    // L'EXEMPLE RATÉ EST LA MOITIÉ QUI APPREND · montrer une bonne réponse
    // enseigne à la reconnaître, la mettre à côté de la mauvaise enseigne à
    // la produire. Une paire dont les deux moitiés sont identiques n'enseigne
    // rien du tout, et c'est ce qui arrive quand on remplit vite.
    ok(`${tag} · un exemple raté ET un réussi`, !!sl.bad && !!sl.good && sl.bad !== sl.good)
    ok(`${tag} · la différence est nommée`, typeof sl.note === 'string' && sl.note.length > 30)
    ok(`${tag} · une scène qui existe`, STAGES.has(sl.stage), sl.stage)
    // LA RÉCOMPENSE NOMME CE QU'ON VIENT D'ACQUÉRIR · « bravo » ne récompense
    // rien, et on cesse de le lire à la deuxième occurrence.
    ok(`${tag} · le maître dit quelque chose`, typeof sl.reward === 'string' && sl.reward.length > 25)
    ok(`${tag} · …et ce n'est pas une flatterie vide`, !/^(well done|great|nice|congratulations|bravo)\b/i.test(sl.reward))
  }
}

// Les six scènes du tutoriel sont TOUTES employées · une scène dessinée que
// rien n'utilise est du code mort avec une animation dedans.
const used = new Set(Object.values(LESSONS).flatMap((L) => L.steps.map((x) => x.stage)))
ok('chaque scène du tutoriel sert', [...STAGES].every((x) => used.has(x)), [...STAGES].filter((x) => !used.has(x)).join(', '))
const stage = readFileSync('src/dojo/StepStage.tsx', 'utf8')
ok('…et chacune est dessinée', [...STAGES].every((x) => new RegExp(`\\b${x}:`).test(stage)))

/* --- 7 · les grades et les badges ---------------------------------------- */

const G = await load('src/dojo/grades.ts', 'grades.mjs')
const { GRADES, gradeFor, BADGES, AGENT_BADGES, badgesFor } = G

ok('une échelle de grades', GRADES.length >= 4, `${GRADES.length}`)
// Une ceinture s'obtient par des parcours ENTIERS. Un grade qu'on décroche en
// cochant trois cases éparses est un grade que personne ne respecte.
ok('le premier grade ne demande rien', GRADES[0].agents === 0)
ok('les seuils montent', GRADES.every((g, i) => i === 0 || g.agents > GRADES[i - 1].agents))
ok('le dernier grade demande toute la salle', GRADES[GRADES.length - 1].agents === USE_CASE_COUNT)
ok('aucun grade hors d\'atteinte', GRADES.every((g) => g.agents <= USE_CASE_COUNT))
ok('à zéro agent on porte la première ceinture', gradeFor(0).now.id === GRADES[0].id)
ok('…et la suivante est nommée', gradeFor(0).next?.id === GRADES[1].id && gradeFor(0).toGo > 0)
ok('tout terminé, plus de suivante', gradeFor(USE_CASE_COUNT).next === null)
// Le piège du « premier trouvé » · une recherche naïve rendrait la ceinture
// blanche à quelqu'un qui a fini la salle entière, puisque son seuil est
// atteint lui aussi.
ok('le grade est le PLUS HAUT atteint', gradeFor(USE_CASE_COUNT).now.id === GRADES[GRADES.length - 1].id)

ok('des badges hors agents', BADGES.length >= 5, `${BADGES.length}`)
ok('un badge par agent', AGENT_BADGES.length === USE_CASE_COUNT)
ok('aucun identifiant de badge en double',
  new Set([...BADGES, ...AGENT_BADGES].map((b) => b.id)).size === BADGES.length + AGENT_BADGES.length)
ok('chaque badge dit comment on l\'obtient', [...BADGES, ...AGENT_BADGES].every((b) => b.how && b.how.length > 20))
ok('rien n\'est acquis à vide', badgesFor(readProgress([]), []).earned.length === 0)
ok('tout terminé décerne tout',
  badgesFor(readProgress(everything), USE_CASES.map((u) => u.id)).earned.length === BADGES.length + AGENT_BADGES.length)
// Un agent terminé donne SON badge, et pas celui d'un autre.
const one = badgesFor(readProgress(agentKeys(USE_CASES[0])), [USE_CASES[0].id]).earned
ok('un agent terminé donne son badge', one.includes(`agent-${USE_CASES[0].id}`))
ok('…et pas celui du voisin', !one.includes(`agent-${USE_CASES[1].id}`))

/* --- 8 · la page dit ce que les données contiennent ----------------------- */

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
