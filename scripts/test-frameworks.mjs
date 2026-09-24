// OÙ FAIRE TOURNER SON AGENT · la page des frameworks, vérifiée sans navigateur.
//
// Ce que cette garde protège est une DÉCISION, pas un affichage : cette page
// n'écrit aucun extrait de code d'appel, et c'est la même règle que pour les
// formats d'export. Une ligne qui instancie un client change au rythme de la
// bibliothèque contre laquelle elle a été écrite ; un exemple périmé dans un
// cours est pire qu'une absence d'exemple, parce que quelqu'un le copie, ça
// casse, et il croit avoir mal compris.
//
// La tentation de « juste ajouter un petit snippet » est permanente, et elle
// arrive toujours par une bonne intention. C'est pour ça qu'elle est gardée.
//
//   node scripts/test-frameworks.mjs
import { build } from 'esbuild'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}

const OUT = 'node_modules/.dojo-frameworks'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}

const F = await load('src/data/frameworks.ts', 'fw.mjs')
const X = await load('src/lib/agentExport.ts', 'export.mjs')
const { FRAMEWORKS, FRAMEWORK_COUNT, FRAMEWORK_LANGS } = F

/* --- 1 · le catalogue tient debout --------------------------------------- */

ok('des frameworks sont décrits', FRAMEWORK_COUNT >= 15, `${FRAMEWORK_COUNT}`)
ok('aucun identifiant en double', new Set(FRAMEWORKS.map((f) => f.id)).size === FRAMEWORK_COUNT)
ok('aucun nom en double', new Set(FRAMEWORKS.map((f) => f.name)).size === FRAMEWORK_COUNT)
ok('les langages du filtre viennent des données', FRAMEWORK_LANGS.length > 0 &&
  FRAMEWORK_LANGS.every((l) => FRAMEWORKS.some((f) => f.langs.includes(l))))

/* --- 2 · chaque entrée enseigne quelque chose ---------------------------- */

// LA CORRESPONDANCE est la raison d'être de la page. Une entrée qui décrit un
// framework sans dire où va votre fichier est une fiche Wikipédia, et on en a
// déjà.
const FORMAT_IDS = new Set(X.FORMATS.map((f) => f.id))
for (const f of FRAMEWORKS) {
  ok(`${f.id} · des langages`, Array.isArray(f.langs) && f.langs.length > 0)
  ok(`${f.id} · comment il modélise un agent`, typeof f.shape === 'string' && f.shape.length > 80)
  const keys = Object.keys(f.fit)
  ok(`${f.id} · où vont les morceaux de l'agent`, keys.length >= 2, keys.join(', '))
  // Les clés sont celles des formats d'export · une clé inventée décrirait un
  // morceau que l'élève n'a pas.
  const bad = keys.filter((k) => !FORMAT_IDS.has(k))
  ok(`${f.id} · …et ce sont de vrais formats`, bad.length === 0, bad.join(', '))
  ok(`${f.id} · le piège est nommé`, typeof f.watch === 'string' && f.watch.length > 40)
  // QUAND NE PAS LE PRENDRE · un tableau comparatif où tout est bon à quelque
  // chose n'aide personne à choisir, et c'est ce qu'est presque toujours ce
  // genre de tableau.
  // UNE PHRASE, pas un nombre de caractères. La première version exigeait
  // vingt caractères et a refusé « You are not on AWS. », qui est la réponse
  // complète et juste pour Strands : la rallonger l'aurait rendue moins bonne.
  // Un seuil de longueur est un mauvais indicateur de « c'est une vraie
  // réponse », et une garde qui fait délayer une phrase juste travaille contre
  // le texte.
  const sentence = (t) => typeof t === 'string' && t.trim().split(/\s+/).length >= 4 && /[.!?]$/.test(t.trim())
  ok(`${f.id} · quand le prendre`, sentence(f.when), f.when)
  ok(`${f.id} · …et quand NE PAS le prendre`, sentence(f.notWhen), f.notWhen)
  ok(`${f.id} · un lien vers sa propre doc`, /^https:\/\//.test(f.docs))
}

// Deux frameworks qui se prennent dans les mêmes cas sont un doublon déguisé.
ok('les cas de « ne pas le prendre » sont distincts',
  new Set(FRAMEWORKS.map((f) => f.notWhen.toLowerCase())).size === FRAMEWORK_COUNT)

/* --- 3 · LA PAGE ENSEIGNE AVANT DE COMPARER ------------------------------ */

// Sa première version ouvrait sur un comparatif de quinze projets. Utile pour
// qui sait déjà ce qu'est un framework, inutile pour tout le monde d'autre,
// c'est à dire pour le public de ce cours. On ne commence pas par « lequel
// prendre » quand la question réelle est « c'est quoi ».
const { FRAMEWORK_PRIMER: P, CONNECT_STEPS } = F

ok('la page dit ce qu\'est un framework', typeof P.plain === 'string' && P.plain.length > 80)
ok('…sans jargon', !/\b(orchestrat|abstraction|runtime|middleware|SDK)\w*/i.test(P.plain), P.plain.slice(0, 60))
ok('…avec une comparaison connue', typeof P.like === 'string' && P.like.length > 60)
ok('…ce qu\'il apporte, en points', Array.isArray(P.gives) && P.gives.length >= 3)
// CE QU'IL N'APPORTE PAS · la phrase qui évite la déception. Aucun framework
// ne rend un agent meilleur, et une page qui laisse croire le contraire vend
// une solution au mauvais problème.
ok('…et ce qu\'il n\'apporte PAS', typeof P.doesNot === 'string' && P.doesNot.length > 60)
// ON PEUT COMMENCER SANS · c'est l'argument le plus honnête de la page, et
// celui qu'une page écrite par un framework n'écrirait jamais.
ok('…qu\'on peut s\'en passer pour commencer', /do not need one/i.test(P.without))
ok('…et pourquoi il y en a autant', typeof P.whySoMany === 'string' && P.whySoMany.length > 80)

// LA PROCÉDURE · les quatre gestes sont les mêmes dans les quinze projets, et
// c'est ce qui rend la page enseignable : les noms changent, la procédure non.
ok('la procédure a quatre gestes', CONNECT_STEPS.length === 4, `${CONNECT_STEPS.length}`)
for (const c of CONNECT_STEPS) {
  ok(`« ${c.title} » · ce qu'on fait`, typeof c.does === 'string' && c.does.length > 60)
  ok(`« ${c.title} » · ce qui rate`, typeof c.watch === 'string' && c.watch.length > 40)
}
// EN LECTURE SEULE D'ABORD · c'est la leçon du parcours « opérateur », et elle
// doit être dans la procédure, pas seulement dans le dojo. C'est l'étape où un
// premier branchement coûte quelque chose.
// … DANS LES DEUX LANGUES. La sonde ne lisait que l'anglais, donc une
// procédure française qui aurait perdu cette phrase serait passée : le lecteur
// à qui il manque l'avertissement est justement celui qui branche son premier
// agent sur un vrai compte.
ok('…et elle fait commencer en lecture seule',
  CONNECT_STEPS.some((c) => /read only/i.test(c.does + c.watch)))
ok('…et le dit aussi en français',
  CONNECT_STEPS.some((c) => c.fr && /lecture seule/i.test(c.fr.does + c.fr.watch)))

// L'ORDRE DE LA PAGE · « c'est quoi » avant « lequel prendre ».
//
// LA RÈGLE CHERCHAIT LES TITRES ANGLAIS, mot pour mot, dans le JSX. Ils sont
// maintenant des clés de dictionnaire, parce que la page est bilingue. On
// cherche donc les clés, ce qui vérifie exactement la même propriété et
// résiste en plus à une reformulation du titre : une clé est un identifiant,
// une phrase ne l'est pas.
const order = readFileSync('src/dojo/Frameworks.tsx', 'utf8')
/** « a vient avant b » · et les DEUX doivent exister.
 *
 *  La première version comparait deux `indexOf` directement. Or `indexOf`
 *  rend -1 quand le titre a disparu, et -1 est inférieur à tout : supprimer la
 *  section qu'on voulait voir en premier faisait PASSER la règle. Vérifié en
 *  renommant le titre, qui n'a rien fait rougir.
 *
 *  Une garde qu'on ne peut pas faire échouer en cassant ce qu'elle surveille
 *  ne surveille rien. */
const before = (a, b) => {
  const i = order.indexOf(a), j = order.indexOf(b)
  return i >= 0 && j >= 0 && i < j
}
ok('la page explique avant de comparer', before("t('fw.h2what')", "t('fw.h2list')"))
ok('…et la procédure vient avant le catalogue', before("t('fw.h2connect')", "t('fw.h2list')"))
// … et la garde reste capable de rougir : un titre supprimé doit la faire
// échouer, pas la faire passer par un -1 plus petit que tout.
ok('morsure · une section disparue est vue', !before("t('fw.h2disparue')", "t('fw.h2list')"))

/* --- 4 · AUCUN CODE D'APPEL, et c'est la règle -------------------------- */

const src = readFileSync('src/data/frameworks.ts', 'utf8')
const page = readFileSync('src/dojo/Frameworks.tsx', 'utf8')
// On cherche dans les DONNÉES, pas dans le composant : le composant est du
// TypeScript, il contient forcément des parenthèses et des imports.
const prose = [
  ...FRAMEWORKS.flatMap((f) => [f.shape, f.watch, f.when, f.notWhen, ...Object.values(f.fit)]),
  // …le préambule et la procédure aussi · c'est là que la tentation
  // d'« ajouter juste un petit exemple » est la plus forte, puisqu'on y
  // explique comment brancher.
  P.plain, P.like, P.without, P.doesNot, P.whySoMany, ...P.gives,
  ...CONNECT_STEPS.flatMap((c) => [c.does, c.watch]),
].join('\n')
const CODE = [
  [/\bimport\s+\w+\s+from\b|\bfrom\s+['"][a-z_]+['"]/, 'une ligne d\'import'],
  [/\b\w+\s*=\s*new\s+[A-Z]\w+\(/, 'une instanciation'],
  [/\b(pip|npm|yarn|uv)\s+(install|add)\b/, 'une commande d\'installation'],
  [/\b@\w+\.tool\b|\b@tool\b/, 'un décorateur'],
  [/```/, 'un bloc de code'],
]
for (const [re, what] of CODE) ok(`aucune trace de ${what} dans les données`, !re.test(prose))
// …et la page le DIT au lecteur, avant le tableau et non en note de bas de
// page : quelqu'un qui cherche du code doit le savoir tout de suite.
//
// CES TROIS RÈGLES CHERCHAIENT LA PHRASE ANGLAISE DANS LE JSX. La page est
// bilingue, et ces phrases sont maintenant dans le dictionnaire. On les y lit,
// DANS LES DEUX LANGUES : un lecteur français a droit au même avertissement,
// et une règle qui ne relit que l'anglais laisserait la moitié française le
// perdre sans rien dire.
const D = (await load('src/i18n/dict.ts', 'dict.mjs')).DICT
const says = (key, en, fr) => {
  ok(`« ${key} » le dit en anglais`, en.test(D[key].en), D[key].en.slice(0, 50))
  ok(`« ${key} » le dit en français`, fr.test(D[key].fr), D[key].fr.slice(0, 50))
}
ok('la page annonce qu\'elle ne contient pas de code', /t\('fw\.noCodeH2'\)/.test(page))
says('fw.noCodeH2', /no code on this page, on purpose/i, /aucun code sur cette page/i)
ok('…et dit pourquoi', /t\('fw\.noCodeA'\)/.test(page))
// LE FRANÇAIS EST PASSÉ AU REGISTRE ACADÉMIQUE (« faux dans quelques mois ») ·
// la garde lit le SENS, pas une tournure, dans les deux registres.
says('fw.noCodeA', /wrong in a few months/i, /(à tort|faux) dans quelques mois/i)
// LA LIMITE ASSUMÉE · nous ne suivons pas ces projets au jour le jour, et ils
// changent sans prévenir. Le taire serait une promesse qu'on ne tient pas.
ok('…et reconnaît qu\'elle ne suit pas ces projets', /t\('fw\.weDoNotTrack'\)/.test(page))
// Le texte parle maintenant au « nous » institutionnel (registre académique,
// demandé) : la garde accepte « nous ne suivons pas ces » comme l'ancien « je
// ne surveille pas ces ». Ce qu'elle protège ne change pas : la limite est dite.
says('fw.weDoNotTrack', /do not track these/i, /ne (surveille|suivons|surveillons) pas ces/i)
ok('chaque entrée renvoie à sa propre documentation', /f\.docs/.test(page))

/* --- 5 · la page est atteignable ---------------------------------------- */

ok('la route existe', /path === '\/frameworks'/.test(readFileSync('src/main.tsx', 'utf8')))
ok('le pied de page y mène', /\/frameworks/.test(readFileSync('src/components/SiteFooter.tsx', 'utf8')))
ok('le plan du site la porte', /\/frameworks/.test(readFileSync('scripts/gen-seo.mjs', 'utf8')))
ok('la fiche d\'un agent y mène', /\/frameworks/.test(readFileSync('src/dojo/AgentCard.tsx', 'utf8')))
ok('le robot en a un sujet', /id: 'frameworks'/.test(readFileSync('src/support/knowledge.ts', 'utf8')))

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
