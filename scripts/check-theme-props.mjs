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

console.log(`\n${ids.length + kits.length + depts.length} vérifications · 0 échec`)
