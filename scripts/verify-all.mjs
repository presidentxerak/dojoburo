// La barrière avant la mise en production.
//
// Quatorze épreuves navigateur existaient dans ce dossier. AUCUNE n'était dans
// la chaîne de compilation : elles ne tournaient que si quelqu'un y pensait. Un
// garde-fou qu'on doit se rappeler de déclencher n'en est pas un — c'est un
// fichier. Les trois gros défauts de cette semaine sont tous passés devant.
//
// La raison de leur absence est technique et réelle : elles ont besoin d'un
// serveur qui sert le site compilé, et `npm run build` ne peut pas en démarrer
// un au milieu de lui-même. Ce fichier le fait : il compile si besoin, lève le
// serveur, lance tout, l'éteint, et rend un compte rendu.
//
//   npm run verify            · tout
//   npm run verify -- rapide  · seulement les épreuves courtes
//
// Ce qui échoue ici ne doit pas partir en production.
import { spawn } from 'node:child_process'
import { existsSync, mkdirSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const PORT = Number(process.env.PORT || 4173)
const BASE = `http://localhost:${PORT}`
const only = process.argv.slice(2).filter((a) => !a.startsWith('-'))

// Les captures que certaines épreuves déposent · hors du dépôt. Par défaut
// elles écrivaient dans le dossier courant : douze fichiers PNG apparaissaient
// à la racine du projet à chaque passage, et finissaient par être commités.
const SHOTS = process.env.SCRATCH || join(tmpdir(), 'dojo-verify-shots')
mkdirSync(SHOTS, { recursive: true })

// (fichier, minutes attendues, court ?)
const CHECKS = [
  // En premier, et c'est voulu : il sert le site avec sa VRAIE politique de
  // sécurité. Tout ce qu'elle refuse est refusé en silence, sans rien casser de
  // visible — deux corrections ont été prises comme ça le même jour. Il tourne
  // sans le serveur de prévisualisation, donc il coûte trente secondes.
  // Hors navigateur, et donc en une seconde : le plan de la salle. Le maître
  // sur son estrade, la porte, les postes et le trajet du coursier partagent
  // la même géométrie, et rien n'y occupe deux fois la même place.
  ['test-stage.mjs', 1, true],
  // Le dojo n'appelle plus rien · la promesse est écrite sur la page d'accueil,
  // et elle se casse sans bruit le jour où quelqu'un ajoute une action sans
  // garde. Hors navigateur, en une seconde.
  ['test-sandbox.mjs', 1, true],
  // La bibliothèque est la partie payante · la garde vérifie surtout qu'aucun
  // corps de fichier n'a fui dans le paquet du navigateur. Hors navigateur.
  // Le calculateur de jetons · il enseigne aux gens ce qu'ils dépensent, et un
  // outil de mesure qui se trompe est pire qu'une absence d'outil.
  ['test-frugality.mjs', 1, true],
  // Les ateliers · qu'ils soient manipulables, et surtout qu'ils ne
  // réimplémentent aucune formule de coût. Deux vérités qui divergent, dans
  // une leçon dont le sujet est de compter juste, seraient un mensonge.
  ['test-labs.mjs', 1, true],
  // LA SALLE DE CLASSE · douze cas d'usage, douze personnages, aucun orphelin,
  // et cinq formats d'export qui ne nomment aucun fournisseur. Rien de tout ça
  // ne se voit dans un typecheck : un parcours vidé de ses étapes compile, la
  // carte s'ouvre, et le cours est une page blanche.
  ['test-usecases.mjs', 1, true],
  // AUCUN TIRET CADRATIN dans un texte de l'app · une purge faite à la main
  // revient toujours, et celle-ci portait sur 328 occurrences.
  ['check-dashes.mjs', 1, true],
  // LES CHEMINS DU SITE · qu'aucun lien ne mène nulle part, qu'aucune page ne
  // soit un îlot, et que le pied de page ne redevienne pas six pieds de page
  // qui se contredisent. Un lien mort ne lève aucune erreur.
  ['test-flows.mjs', 1, true],
  // OÙ FAIRE TOURNER SON AGENT · et surtout : qu'aucun extrait de code
  // d'appel ne s'y glisse. La tentation d'« ajouter juste un petit snippet »
  // est permanente et arrive toujours par une bonne intention.
  ['test-frameworks.mjs', 1, true],
  // LA GRILLE DE PRIX · qu'un prix n'existe qu'à un seul endroit, et qu'aucun
  // forfait ne se remette à vendre des exécutions. Les deux fautes sont déjà
  // arrivées, aucune n'a fait rougir un typecheck, et les deux ont été trouvées
  // en lisant · ce qui veut dire qu'elles auraient pu ne pas l'être.
  ['test-pricing.mjs', 1, true],
  // QUI PORTE QUEL VISAGE · que le dormeur de la salle et la fiche sur laquelle
  // on atterrit soient le même agent. Les deux écrans calculaient la réponse
  // chacun de leur côté, onze agents sur douze changeaient de tête, et le
  // douzième tombait juste par hasard, ce qui suffisait à ne pas chercher.
  ['test-faces.mjs', 1, true],
  // L'ICEBERG DES JETONS · que le schéma ne recopie aucun levier (deux textes
  // qui disent la même chose divergent à la première correction, et c'est le
  // lecteur qui arbitre), que le nombre annoncé soit le vrai, et qu'aucun nom
  // de commande n'y soit écrit en dur.
  ['test-iceberg.mjs', 1, true],
  // LE FRANÇAIS · que les deux langues soient côte à côte et qu'aucune ne soit
  // la copie de l'autre, que les piliers portent leur traduction à leur
  // source, et surtout que la COUVERTURE soit comptée à chaque passage. Le
  // risque d'un site à moitié traduit n'est pas la faute de traduction, c'est
  // de le croire terminé.
  ['test-i18n.mjs', 1, true],
  // LES DEUX COURS DE DESIGN · qu'ils n'enseignent AUCUN chemin de menu, parce
  // qu'un chemin de menu est faux à la prochaine version et que le lecteur en
  // conclut qu'il a mal compris. Et que la forme pédagogique tienne : les mots
  // définis avant emploi, le piège nommé, un test vérifiable seul.
  ['test-design.mjs', 1, true],
  // L'ESPACE RESSOURCES · que les mémos restent GÉNÉRÉS et ne deviennent
  // jamais des fichiers téléversés. Un PDF stocké garde l'ancienne version
  // d'une leçon corrigée, et l'élève travaille alors sur un document faux que
  // nous lui avons donné · une divergence qui se produit hors de l'écran, là
  // où aucune autre garde ne regarde.
  ['test-resources.mjs', 1, true],
  // LE JEU D'ICÔNES · qu'aucune ne redevienne un caractère. L'app les a
  // dessinées avec des caractères Unicode pendant des mois : ça s'affiche, mais
  // pas pareil chez tout le monde, et pas du tout sur certains téléphones. Un
  // `{done ? '✓' : ''}` écrit un mardi ne fait rougir aucun typecheck.
  ['test-icons.mjs', 1, true],
  ['check-theme-props.mjs', 1, true],
  ['audit-csp.mjs', 2, true],
  ['verify-gate.mjs', 2, true],
  ['verify-menu.mjs', 2, true],
  ['verify-surfaces.mjs', 3, true],
  ['verify-companies.mjs', 3, true],
  ['verify-tutorial.mjs', 3, true],
  ['verify-bricks.mjs', 3, true],
  ['verify-visual.mjs', 3, true],
  ['verify-mobile.mjs', 3, true],
  ['audit-hero.mjs', 3, true],
  ['perf-scene.mjs', 3, true],
  ['verify-dedupe.mjs', 3, true],
  ['verify-documents.mjs', 3, true],
  ['verify-connect-ui.mjs', 4, true],
  ['verify-waiting.mjs', 4, true],
  ['verify-agent-pages.mjs', 6, false],
  ['audit-mobile.mjs', 7, false],
  ['verify-full.mjs', 6, false],
  ['audit-surfaces.mjs', 12, false],
]

if (!existsSync('dist/index.html')) {
  console.error('Pas de dist/ · lancez `npm run build` d’abord.')
  process.exit(1)
}

// Avec une ÉCHÉANCE · c'est le défaut que toute cette session traque, et une
// barrière qui reste bloquée sur une épreuve muette ne garde plus rien : elle
// ne dit ni vert ni rouge, et on finit par la contourner.
const run = (cmd, args, opts = {}, limitMs = 15 * 60_000) => new Promise((resolve) => {
  const c = spawn(cmd, args, { stdio: ['ignore', 'pipe', 'pipe'], ...opts })
  let out = ''
  let done = false
  const finish = (code) => { if (!done) { done = true; clearTimeout(t); resolve({ code, out }) } }
  const t = setTimeout(() => {
    out += `\n[verify-all] dépassé ${Math.round(limitMs / 60000)} min · épreuve interrompue\n`
    try { c.kill('SIGKILL') } catch { /* déjà mort */ }
    finish(124)
  }, limitMs)
  c.stdout.on('data', (d) => { out += d })
  c.stderr.on('data', (d) => { out += d })
  c.on('close', finish)
})

console.log(`Serveur sur ${BASE}…`)
const server = spawn('npx', ['vite', 'preview', '--port', String(PORT)], { stdio: 'ignore' })
const stop = () => { try { server.kill('SIGTERM') } catch { /* déjà mort */ } }
process.on('exit', stop)
process.on('SIGINT', () => { stop(); process.exit(130) })

// attendre le port · un `sleep` fixe rend l'épreuve capricieuse sur une machine
// chargée, et une épreuve capricieuse finit par être ignorée
let up = false
for (let i = 0; i < 60 && !up; i++) {
  try { up = (await fetch(BASE, { signal: AbortSignal.timeout(1500) })).ok } catch { /* pas encore */ }
  if (!up) await new Promise((r) => setTimeout(r, 1000))
}
if (!up) { console.error('Le serveur n’est pas monté.'); stop(); process.exit(1) }

const list = CHECKS.filter(([f, , quick]) => {
  if (only.includes('rapide') || only.includes('quick')) return quick
  if (only.length) return only.some((o) => f.includes(o))
  return true
})

const rows = []
for (const [file, mins] of list) {
  process.stdout.write(`  ${file.padEnd(26)} (~${mins} min) … `)
  const t0 = Date.now()
  // le budget de chaque épreuve · trois fois ce qu'elle annonce, jamais moins
  // de cinq minutes, pour qu'une machine chargée ne la déclare pas en panne
  const r = await run('node', [`scripts/${file}`], { env: { ...process.env, BASE, SCRATCH: SHOTS, SHOTS } },
    Math.max(5, mins * 3) * 60_000)
  const took = Math.round((Date.now() - t0) / 1000)
  const passed = r.code === 0
  // combien d'assertions · utile pour repérer une épreuve qui ne vérifie plus rien
  const n = (r.out.match(/^(ok|PASS)\b/gm) || []).length
  const bad = (r.out.match(/^(FAIL)/gm) || []).length
  console.log(`${passed ? 'VERT' : 'ÉCHEC'}  ${n} vérifs${bad ? `, ${bad} en échec` : ''} · ${took}s`)
  rows.push({ file, passed, n, bad, took, out: r.out })
}

stop()

const failed = rows.filter((r) => !r.passed)
console.log('\n' + '='.repeat(66))
console.log(`${rows.length} épreuves · ${rows.reduce((a, r) => a + r.n, 0)} vérifications · ${failed.length} en échec`)
for (const r of failed) {
  console.log(`\n--- ${r.file} ---`)
  const lines = r.out.split('\n').filter((l) => /^FAIL|Error|error:/.test(l))
  console.log((lines.length ? lines : r.out.split('\n').slice(-14)).slice(0, 14).join('\n'))
}
// Une épreuve qui ne vérifie plus RIEN passe en vert sans rien prouver · c'est
// la façon dont une barrière meurt sans qu'on s'en aperçoive.
const empty = rows.filter((r) => r.passed && r.n === 0)
if (empty.length) {
  console.log(`\nATTENTION · ${empty.map((r) => r.file).join(', ')} : vert, mais zéro vérification.`)
}
process.exit(failed.length || empty.length ? 1 : 0)
