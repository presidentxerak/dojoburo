// LE FICHIER DE DÉPLOIEMENT · vérifié ici, parce que personne ne le vérifie ailleurs.
//
// ---------------------------------------------------------------------------
// CE QUE CETTE ÉPREUVE EXISTE POUR EMPÊCHER, ET QUI EST DÉJÀ ARRIVÉ
//
// Quatre déploiements de suite ont échoué, et aucune des trente-huit épreuves
// du portail ne l'a vu. La cause : une ligne « _comment_redirects » ajoutée en
// tête de vercel.json pour expliquer pourquoi deux adresses redirigent.
//
// L'intention était bonne · ce produit explique ses décisions là où elles
// vivent. Mais vercel.json N'EST PAS DU CODE, c'est de la configuration en
// JSON strict, et JSON n'a pas de commentaires. L'hébergeur valide ce fichier
// contre son schéma AVANT de lancer la construction, refuse toute clé de tête
// qu'il ne connaît pas, et s'arrête là.
//
// D'où la forme particulière de cette panne, et pourquoi elle a duré :
//
//   · `npm run build` passait en local, du premier garde au plan de site,
//   · le portail entier était vert,
//   · et le site en production restait bloqué sur une version d'il y a six
//     heures, sans que rien ne rougisse nulle part.
//
// Une construction qui réussit partout sauf là où elle compte n'est pas une
// construction qui réussit. Le fichier qui décide de ça mérite donc une garde,
// au même titre que le contenu.
//
// ---------------------------------------------------------------------------
// LA RÈGLE EST LE MOTIF DE LA FAUTE, PAS UNE LISTE DE CLÉS AUTORISÉES
//
// La tentation est d'écrire la liste des clés que l'hébergeur accepte et de
// refuser le reste. Ce serait une garde qui accuse du travail juste : cette
// liste s'allonge à chaque version de la plateforme, on ne peut pas la lire
// d'ici (le domaine du schéma est bloqué par la sortie réseau), et la première
// clé légitime ajoutée ferait rougir une épreuve sans raison. On apprend alors
// à la contourner, et elle ne garde plus rien.
//
// La faute réelle a une forme reconnaissable : une clé qui n'est pas de la
// configuration mais de la PROSE. Elle commence par un tiret bas, ou elle
// s'appelle commentaire, note, pourquoi. Aucune clé réelle ne ressemble à ça,
// et c'est exactement ce qui a été écrit. La règle vise donc ce motif.
//
//   node scripts/test-deploy.mjs
import { readFileSync } from 'node:fs'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}

const RAW = readFileSync('vercel.json', 'utf8')

/* --- 1 · le fichier se lit ------------------------------------------------ */

let CFG = null
try {
  CFG = JSON.parse(RAW)
  ok('vercel.json est du JSON valide', true)
} catch (e) {
  ok('vercel.json est du JSON valide', false, e.message)
}
if (!CFG) {
  console.log('\ntest-deploy · 1 problème(s)')
  process.exit(1)
}

/* --- 2 · aucune prose dans un fichier de configuration -------------------- */

/** Une clé qui explique au lieu de configurer · c'est la faute exacte qui a
 *  bloqué quatre déploiements. */
const looksLikeProse = (k) => /^_/.test(k) || /comment|note|pourquoi|why|todo|fixme/i.test(k)

const prose = Object.keys(CFG).filter(looksLikeProse)
ok('aucune clé de tête n\'est un commentaire', prose.length === 0,
  prose.join(', ') || `${Object.keys(CFG).length} clés`)

// … ET PAS DAVANTAGE DANS LES SOUS-OBJETS · une redirection ou un en-tête
// commenté de la même façon tomberait pareil, un cran plus bas.
const deepProse = []
const walk = (v, path) => {
  if (Array.isArray(v)) { v.forEach((x, i) => walk(x, `${path}[${i}]`)); return }
  if (!v || typeof v !== 'object') return
  for (const k of Object.keys(v)) {
    if (looksLikeProse(k)) deepProse.push(`${path}.${k}`)
    walk(v[k], `${path}.${k}`)
  }
}
for (const k of Object.keys(CFG)) walk(CFG[k], k)
ok('aucun commentaire plus bas dans le fichier', deepProse.length === 0,
  deepProse.slice(0, 3).join(', ') || 'aucun')

// LE SEUL « COMMENTAIRE » TOLÉRÉ est $schema, qui est une vraie clé : elle dit
// à un éditeur de texte comment valider le fichier, et l'hébergeur la connaît.
ok('le fichier déclare son schéma', typeof CFG.$schema === 'string', CFG.$schema || 'absent')

/* --- 3 · ce que les redirections doivent tenir ---------------------------- */

// POURQUOI CES DEUX LIGNES EXISTENT, écrit ici plutôt que dans le JSON qui ne
// peut pas le porter. La bibliothèque a été retirée du produit ; ses deux
// adresses étaient dans le plan du site et partagées. Les laisser rendre 404
// perdrait ce qu'elles avaient gagné, et quelqu'un qui suit un lien depuis un
// moteur de recherche mérite une page plutôt qu'une erreur. Le déplacement est
// définitif, donc 301 et non 302.
const R = CFG.redirects ?? []
const find = (src) => R.find((r) => r.source === src)
for (const src of ['/library', '/library/:slug']) {
  const r = find(src)
  ok(`« ${src} » redirige encore`, Boolean(r), r ? `→ ${r.destination}` : 'absente')
  ok(`« ${src} » redirige définitivement`, r?.permanent === true,
    r ? String(r.permanent) : '')
}

// … ET ELLES NE MÈNENT PAS DANS LE VIDE. Une redirection vers une adresse
// supprimée est un 404 avec une étape de plus.
const SERVED = new Set(['/', '/formation', '/7-jours', '/metier', '/profil', '/academy', '/build'])
const lost = R.filter((r) => !SERVED.has(r.destination)).map((r) => `${r.source} → ${r.destination}`)
ok('chaque redirection mène à une adresse servie', lost.length === 0, lost.join(', ') || `${R.length} redirections`)

/* --- 4 · la bibliothèque ne revient pas ----------------------------------- */

ok('le plan de site ne cite plus la bibliothèque',
  !/'\/library/.test(readFileSync('scripts/gen-seo.mjs', 'utf8')))

/* --- 5 · les morsures ------------------------------------------------------ */

// Une garde qu'on ne peut pas faire rougir ne garde rien. On refait ici la
// faute exacte qui a bloqué quatre déploiements.
ok('morsure · la clé qui a cassé le déploiement serait vue',
  looksLikeProse('_comment_redirects'))
ok('morsure · une note en anglais aussi', looksLikeProse('noteAboutRedirects'))
ok('morsure · un « why » aussi', looksLikeProse('whyThisExists'))
// … et les vraies clés passent, sinon la garde accuse du travail juste.
for (const k of ['redirects', 'rewrites', 'headers', 'crons', 'functions', 'images', 'regions']) {
  ok(`morsure · « ${k} » n'est pas accusée`, !looksLikeProse(k))
}

console.log(fails
  ? `\ntest-deploy · ${fails} problème(s)`
  : `\ntest-deploy · ${Object.keys(CFG).length} clés, ${R.length} redirections`)
process.exit(fails ? 1 : 0)
