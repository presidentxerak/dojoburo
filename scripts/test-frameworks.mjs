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

/* --- 3 · AUCUN CODE D'APPEL, et c'est la règle -------------------------- */

const src = readFileSync('src/data/frameworks.ts', 'utf8')
const page = readFileSync('src/dojo/Frameworks.tsx', 'utf8')
// On cherche dans les DONNÉES, pas dans le composant : le composant est du
// TypeScript, il contient forcément des parenthèses et des imports.
const prose = FRAMEWORKS.flatMap((f) => [f.shape, f.watch, f.when, f.notWhen, ...Object.values(f.fit)]).join('\n')
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
ok('la page annonce qu\'elle ne contient pas de code', /no code on this page, on purpose/i.test(page))
ok('…et dit pourquoi', /goes stale|wrong in a few months/i.test(page))
// LA LIMITE ASSUMÉE · nous ne suivons pas ces projets au jour le jour, et ils
// changent sans prévenir. Le taire serait une promesse qu'on ne tient pas.
ok('…et reconnaît qu\'elle ne suit pas ces projets', /do not track these/i.test(page))
ok('chaque entrée renvoie à sa propre documentation', /f\.docs/.test(page))

/* --- 4 · la page est atteignable ---------------------------------------- */

ok('la route existe', /path === '\/frameworks'/.test(readFileSync('src/main.tsx', 'utf8')))
ok('le pied de page y mène', /\/frameworks/.test(readFileSync('src/components/SiteFooter.tsx', 'utf8')))
ok('le plan du site la porte', /\/frameworks/.test(readFileSync('scripts/gen-seo.mjs', 'utf8')))
ok('la fiche d\'un agent y mène', /\/frameworks/.test(readFileSync('src/dojo/AgentCard.tsx', 'utf8')))
ok('le robot en a un sujet', /id: 'frameworks'/.test(readFileSync('src/support/knowledge.ts', 'utf8')))

console.log(fails ? `\n${fails} FAIL` : '\nall ok')
process.exit(fails ? 1 : 0)
