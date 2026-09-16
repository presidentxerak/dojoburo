// Quelle spécialité a son mobilier, et laquelle n'en a pas.
//
// Ajouter une carte dans data/archetypes.ts sans lui donner de kit dans
// ThemeProps.tsx ne casse rien : le dojo garde le décor de son monde, et
// c'est le comportement voulu. Mais personne ne le remarque, et la
// spécialité reste indéfiniment sans mobilier de métier par simple oubli.
// Cette épreuve le DIT, à chaque passage.
//
// Elle ne fait pas échouer la barrière pour une spécialité sans kit — ce
// n'est pas un défaut. Elle échoue si elle ne trouve RIEN à comparer, parce
// qu'une vérification qui ne peut pas échouer ne garde rien.
//
//   node scripts/check-theme-props.mjs
import { readFileSync } from 'node:fs'

const arch = readFileSync('src/data/archetypes.ts', 'utf8')
const props = readFileSync('src/components/three/ThemeProps.tsx', 'utf8')

// les identifiants de cartes · `id: 'book',`
const ids = [...arch.matchAll(/^\s*id: '([a-z0-9-]+)',/gm)].map((m) => m[1])

// les clés de KITS · tout ce qui est entre `const KITS` et l'accolade
// fermante en début de ligne qui le termine. On ne s'accroche pas au
// commentaire suivant : le jour où quelqu'un le réécrit, cette épreuve se
// mettrait à lire le fichier entier sans le dire.
const from = props.indexOf('const KITS')
const end = props.indexOf('\n}\n', from)
if (from < 0 || end < 0) { console.error('KO  bloc KITS introuvable dans ThemeProps.tsx'); process.exit(1) }
const block = props.slice(from, end)
const kits = [...block.matchAll(/^\s{2}'?([a-z0-9-]+)'?:\s*\[/gm)].map((m) => m[1])

if (ids.length < 5) { console.error(`KO  ${ids.length} spécialité(s) trouvée(s) · la lecture de archetypes.ts a échoué`); process.exit(1) }
if (kits.length < 5) { console.error(`KO  ${kits.length} kit(s) trouvé(s) · la lecture de ThemeProps.tsx a échoué`); process.exit(1) }

const missing = ids.filter((id) => !kits.includes(id))
const orphan = kits.filter((k) => !ids.includes(k))

console.log(`ok  ${ids.length} spécialités, ${kits.length} kits de mobilier`)
console.log(`ok  ${ids.length - missing.length}/${ids.length} spécialités meublées`)
if (missing.length) console.log(`--  sans mobilier de métier (le monde suffit) · ${missing.join(', ')}`)

// un kit qui ne correspond à AUCUNE carte, lui, est une faute de frappe :
// il ne s'affichera jamais, et rien ne le signalerait.
if (orphan.length) { console.error(`KO  kit(s) sans spécialité correspondante · ${orphan.join(', ')}`); process.exit(1) }

// --- chaque DÉPARTEMENT doit avoir une tenue ------------------------------
//
// Le défaut que ceci garde ne casse rien et ne se voit pas : un département
// absent du `switch` de JobLook3D retombe sur `null`, le coéquipier s'affiche
// sans tenue, et aucune erreur n'est levée. Il a fallu une capture d'écran et
// une fausse piste sur le cadrage pour s'en apercevoir la première fois.
const roles = readFileSync('src/data/roleAgents.ts', 'utf8')
const look = readFileSync('src/components/three/JobLook3D.tsx', 'utf8')

const depts = [...new Set([...roles.matchAll(/dept: '([A-Za-z]+)'/g)].map((m) => m[1]))]
const body = look.slice(look.indexOf('export function JobBody'), look.indexOf('export function JobHead'))
const head = look.slice(look.indexOf('export function JobHead'))
const cased = (block) => new Set([...block.matchAll(/case '([A-Za-z]+)':/g)].map((m) => m[1]))
const inBody = cased(body)
const inHead = cased(head)

if (depts.length < 4) { console.error(`KO  ${depts.length} département(s) trouvé(s) · la lecture de roleAgents.ts a échoué`); process.exit(1) }
if (inBody.size < 4 || inHead.size < 4) { console.error('KO  lecture de JobLook3D.tsx échouée'); process.exit(1) }

const nus = depts.filter((d) => !inBody.has(d) || !inHead.has(d))
console.log(`ok  ${depts.length} départements, ${inBody.size} tenues de corps, ${inHead.size} accessoires de tête`)
if (nus.length) {
  console.error(`KO  département(s) sans tenue · ${nus.join(', ')}`)
  process.exit(1)
}
console.log('ok  chaque département est habillé')

// --- chaque ESPÈCE nommée dans les tables doit exister --------------------
//
// Deux tables décident de l'allure d'une espèce : son VISAGE au repos
// (data/faces.ts) et la FORME de sa tête (Character3D). Les deux sont
// volontairement partielles — une espèce absente reçoit le visage commun et
// une tête ronde, et c'est le comportement voulu. On ne peut donc pas exiger
// qu'elles y soient toutes.
//
// L'inverse, lui, est une faute de frappe silencieuse : une clé qui ne
// correspond à aucune espèce ne s'applique jamais, et rien ne le dirait — le
// museau qu'on croit avoir donné au chat n'existerait tout simplement pas.
const looks = readFileSync('src/data/looks.ts', 'utf8')
const headSrc = readFileSync('src/components/three/head.ts', 'utf8')
const facesSrc = readFileSync('src/data/faces.ts', 'utf8')

const kindType = looks.slice(looks.indexOf('export type Kind'))
const kinds = new Set([...kindType.slice(0, kindType.indexOf('\n\n')).matchAll(/'([a-z]+)'/g)].map((m) => m[1]))
if (kinds.size < 20) { console.error(`KO  ${kinds.size} espèces · lecture de Kind échouée`); process.exit(1) }

/** les clés d'une table `const NAME ... = { … }`, à deux espaces d'indentation */
function keysOf(src, decl, re) {
  const from = src.indexOf(decl)
  const end = src.indexOf('\n}\n', from)
  if (from < 0 || end < 0) return null
  return [...src.slice(from, end).matchAll(re)].map((m) => m[1])
}

const tables = [
  ['FACE_BY_KIND (data/faces.ts)', keysOf(facesSrc, 'export const FACE_BY_KIND', /^\s{2}([a-z]+):\s*S\(/gm), 10],
  ['HEAD_BY_KIND (three/head.ts)', keysOf(headSrc, 'const HEAD_BY_KIND', /([a-z]+):\s*'(?:cube|block|wide|round|oval)'/g), 10],
]

let named = 0
for (const [label, keys, floor] of tables) {
  if (!keys || keys.length < floor) { console.error(`KO  lecture de ${label} échouée · ${keys ? keys.length : 0} clé(s)`); process.exit(1) }
  const ghosts = keys.filter((k) => !kinds.has(k))
  if (ghosts.length) { console.error(`KO  ${label} nomme des espèces inexistantes · ${ghosts.join(', ')}`); process.exit(1) }
  console.log(`ok  ${label} · ${keys.length}/${kinds.size} espèces`)
  named += keys.length
}
const faced = { length: named }
console.log(`ok  ${kinds.size} espèces, aucune clé orpheline`)

// --- aucun personnage ne doit en écraser un autre ---------------------------
//
// Les identifiants de personnages sont `theme-espece`, et ils sont SAUVEGARDÉS
// dans le navigateur. Deux familles qui choisissent le même nom de thème
// produisent donc les mêmes identifiants, et la seconde écrase silencieusement
// la première dans la table de correspondance : le personnage qu'on croyait
// avoir défini n'existe pas, et celui qui s'affiche vient d'ailleurs.
//
// C'est arrivé en ajoutant les écoles de dojo : « Sakura » existait déjà parmi
// les anciens thèmes, et six personnages de dojo se seraient retrouvés en
// fourrure fluorescente sans que rien ne le signale.
const skinsSrc = readFileSync('src/data/skins.ts', 'utf8')
const themeNames = [...skinsSrc.matchAll(/^\s*\['([A-Za-z]+)', '#/gm)].map((m) => m[1].toLowerCase())
if (themeNames.length < 20) { console.error(`KO  ${themeNames.length} thème(s) lus · lecture de skins.ts échouée`); process.exit(1) }
const dupes = themeNames.filter((n, i) => themeNames.indexOf(n) !== i)
if (dupes.length) {
  console.error(`KO  thème(s) en double · ${[...new Set(dupes)].join(', ')} · leurs personnages s'écrasent`)
  process.exit(1)
}
console.log(`ok  ${themeNames.length} familles de personnages, aucun nom en double`)

console.log(`\n${ids.length + kits.length + depts.length + faced.length + themeNames.length} vérifications · 0 échec`)
