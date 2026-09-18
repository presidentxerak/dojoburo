// QUI PORTE QUEL VISAGE · vérifié sans navigateur.
//
// LE DÉFAUT QUE CETTE ÉPREUVE AURAIT VU. La salle de classe distribuait les
// visages par POSITION (le i-ième agent recevait le i-ième look du catalogue),
// la fiche d'un agent les prenait par NOM (en passant par le rôle du cas
// d'usage). Deux règles pour une question, donc onze agents sur douze qui
// changeaient de tête entre la salle et leur page.
//
// Rien ne pouvait l'attraper : les deux écrans compilaient, rendaient un
// personnage valide, et personne ne compare deux captures d'écran prises à
// trente secondes d'intervalle. Le typecheck voyait deux `Character` bien
// typés. Ils étaient simplement différents.
//
// PIRE, LE PREMIER TOMBAIT JUSTE. Le premier cas d'usage et le premier look se
// trouvaient correspondre, donc l'agent du haut de la salle avait la bonne tête
// sur sa page. C'est le genre de coïncidence qui empêche de chercher.
//
// Cette épreuve compare donc les deux règles sur les douze, une par une, et ne
// se contente pas de constater qu'elles existent.
//
//   node scripts/test-faces.mjs
import { build } from 'esbuild'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}

const OUT = 'node_modules/.dojo-faces'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}

const A = await load('src/data/agentFaces.ts', 'faces.mjs')
const U = await load('src/data/agentUseCases.ts', 'uc.mjs')
const L = await load('src/data/looks.ts', 'looks.mjs')
const { ROLE_FACE, USE_CASE_FACE, faceIdForUseCase, faceIdForRole, characterFor } = A
const { USE_CASES } = U
const { CHARACTERS } = L

/* --- 1 · la table couvre tout le monde ----------------------------------- */

ok('chaque cas d\'usage a un visage', USE_CASES.every((u) => !!USE_CASE_FACE[u.id]),
  `${Object.keys(USE_CASE_FACE).length} / ${USE_CASES.length}`)

// Un identifiant de look qui n'existe pas dans le catalogue ne lève aucune
// erreur : characterFor rend le premier personnage, et douze agents finissent
// par se ressembler sans que rien ne rougisse.
for (const u of USE_CASES) {
  const id = faceIdForUseCase(u.id)
  ok(`« ${u.name} » porte un look qui existe`, !!CHARACTERS[id], id)
}

// DOUZE AGENTS, DOUZE TÊTES. La salle est vue de haut, tout le monde dort dans
// la même posture : deux visages identiques y sont indiscernables, et c'est
// exactement ce qu'on ne peut pas voir en relisant du code.
const used = new Map()
for (const u of USE_CASES) {
  const id = faceIdForUseCase(u.id)
  if (used.has(id)) fails++, console.log(`FAIL  deux agents portent « ${id} » · ${used.get(id)} et ${u.name}`)
  used.set(id, u.name)
}
ok('les douze agents ont douze visages différents', used.size === USE_CASES.length,
  `${used.size} visages pour ${USE_CASES.length} agents`)

/* --- 2 · LA SALLE ET LA FICHE MONTRENT LE MÊME AGENT ---------------------- */

// C'est le cœur. On rejoue la règle que la salle appliquait AVANT la
// correction (le visage pris par position) et on vérifie qu'elle n'est pas
// celle qu'on applique maintenant · si elle l'était, ça voudrait dire que la
// correction n'a rien corrigé.
// ON COMPARE DES IDENTIFIANTS, PAS DES OBJETS · et ce n'est pas un détail.
// La première version de cette épreuve comparait `characterFor(...)` à
// `Object.values(CHARACTERS)[i]` avec ===. Les deux viennent de deux bundles
// esbuild distincts, donc de deux copies distinctes du même objet : la
// comparaison était fausse À TOUS LES COUPS, l'épreuve passait au vert, et
// elle ne vérifiait rien du tout. Une sonde qui ne peut pas être vraie accuse
// le bon code exactement comme elle absout le mauvais.
const CATALOGUE = Object.keys(CHARACTERS)
const byPosition = (i) => CATALOGUE[i % CATALOGUE.length]

const agreed = USE_CASES.filter((u, i) => faceIdForUseCase(u.id) === byPosition(i)).length
// LE PIÈGE DU PREMIER · le premier cas d'usage et le premier look coïncident
// pour de bon (research porte « ava », qui ouvre aussi le catalogue). L'agent du
// haut de la salle avait donc la bonne tête sur sa page pendant que les onze
// autres se trompaient, ce qui est la meilleure façon de ne pas chercher. On
// exige donc que la coïncidence reste MARGINALE, pas qu'elle disparaisse.
ok('les visages ne sont plus distribués par position', agreed <= 1,
  `${agreed} coïncidence(s) sur ${USE_CASES.length}`)
ok('l\'ancienne règle donnait bien un autre résultat', agreed < USE_CASES.length,
  `${USE_CASES.length - agreed} agents changeaient de tête entre la salle et leur page`)

// … et surtout : la salle et la fiche appellent la MÊME fonction sur le même
// argument. On le vérifie dans les sources, parce que c'est là que les deux
// écrans peuvent redivergerent : il suffit que l'un rappelle CHARACTERS
// directement.
const scene = readFileSync('src/dojo/ClassScene.tsx', 'utf8')
const card = readFileSync('src/dojo/AgentCard.tsx', 'utf8')
ok('la salle lit la table partagée', /faceIdForUseCase\(\s*u\.id\s*\)/.test(scene))
ok('la fiche lit la table partagée', /faceIdForUseCase\(\s*u\.id\s*\)/.test(card))
ok('la salle ne pioche plus dans le catalogue de looks', !/Object\.values\(CHARACTERS\)/.test(scene))
ok('la fiche ne passe plus par le rôle', !/AGENT_CHAR\[/.test(card))

/* --- 3 · les rôles gardent leur visage ------------------------------------ */

// La table des rôles servait déjà aux cartes de l'accueil et aux pages
// d'équipiers. Le déménagement ne devait rien changer pour eux.
ok('les rôles sont toujours servis', Object.keys(ROLE_FACE).length >= 18, `${Object.keys(ROLE_FACE).length}`)
ok('un rôle inconnu ne rend pas undefined', typeof faceIdForRole('rôle-qui-nexiste-pas') === 'string')
ok('un look inconnu rend quand même un personnage', !!characterFor('look-qui-nexiste-pas'))

// Le cas d'usage dérive de son rôle, il ne le recopie pas : si un cas d'usage
// changeait de rôle, le dormeur et la page devraient changer ENSEMBLE.
for (const u of USE_CASES) {
  ok(`« ${u.name} » dérive son visage de son rôle`, USE_CASE_FACE[u.id] === faceIdForRole(u.agent),
    `${u.agent} → ${USE_CASE_FACE[u.id]}`)
}

/* --- 4 · la morsure ------------------------------------------------------ */

// Une garde qui ne peut pas rougir ne garde rien. On rejoue le défaut réel :
// une salle qui distribue par position, une fiche qui lit la table, et on
// vérifie que la comparaison les voit diverger.
const asItWas = USE_CASES.map((u, i) => byPosition(i))
const asItIs = USE_CASES.map((u) => faceIdForUseCase(u.id))
const divergences = asItWas.filter((f, i) => f !== asItIs[i]).length
ok('morsure · la salle d\'avant et les fiches divergeaient', divergences >= USE_CASES.length - 1,
  `${divergences} sur ${USE_CASES.length}`)

// … et la même comparaison ne doit PAS crier quand les deux côtés s'accordent,
// sinon elle accuserait le code corrigé.
const bothShared = USE_CASES.map((u) => faceIdForUseCase(u.id))
ok('morsure · deux côtés d\'accord ne sont pas accusés',
  bothShared.filter((f, i) => f !== asItIs[i]).length === 0)

// Et la comparaison porte bien sur des chaînes · si elle repassait sur des
// objets venus de deux bundles, tout redeviendrait vert sans rien vérifier.
ok('morsure · la comparaison porte sur des identifiants',
  asItIs.every((f) => typeof f === 'string') && typeof byPosition(0) === 'string')

console.log(fails ? `\ntest-faces · ${fails} problème(s)` : '\ntest-faces · la salle et les fiches montrent le même agent')
process.exit(fails ? 1 : 0)
