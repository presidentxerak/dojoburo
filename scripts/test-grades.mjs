// LES GRADES, LE PROFIL À ONGLETS, LES RÉGLAGES ET LES EFFETS · tenus.
//
// POURQUOI CETTE ÉPREUVE EXISTE · demandé en une fois : « crée des icônes de
// profil en fonction du grade de l'étudiant, renomme le bouton et la page
// Training par IA Training, [...] ajoute des particules et des bump sur les
// CTA [...] et surtout [le profil] : ajoute des onglets [...] avec de belles
// icônes 3D et personnages, ajoute des paramètres, masque la Valley map du
// profil ». Chacune de ces promesses peut disparaître sans casser la
// compilation : un grade qui ne suit plus le travail, un onglet retiré, un
// lien vers la carte qui revient, des particules qui ignorent le mouvement
// réduit. Cette épreuve les tient, et mord dans les deux sens.
import { build } from 'esbuild'
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}

const OUT = 'node_modules/.dojo-grades'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}

const { RANKS, rankOf, nextRank } = await load('src/game/ranks.ts', 'ranks.mjs')
const { PACKS, xpOfPack } = await load('src/data/packs.ts', 'packs.mjs')
// levelOf vit dans un composant React · sa règle est recopiée ici et
// comparée au texte de la source, pour qu'un changement de palier se voie.
const GAUGE = readFileSync('src/game/Gauge.tsx', 'utf8')
const PER = Number(GAUGE.match(/XP_PER_LEVEL\s*=\s*(\d+)/)?.[1] ?? 0)
ok('le niveau se lit dans la jauge', PER > 0, `${PER} XP par niveau`)
const levelAt = (xp) => Math.floor(xp / PER) + 1

/* --- 1 · l'échelle ------------------------------------------------------ */

ok('sept grades', RANKS.length === 7, RANKS.map((r) => r.id).join(', '))
ok('le premier s\'obtient au niveau 1', RANKS[0].from === 1)
ok('les paliers montent strictement', RANKS.every((r, i) => i === 0 || r.from > RANKS[i - 1].from), RANKS.map((r) => r.from).join(' < '))
ok('chaque grade a sa ceinture, son titre, son sens, dans les deux langues',
  RANKS.every((r) => ['belt', 'title', 'means'].every((k) => r[k]?.en && r[k]?.fr)))
ok('chaque grade a son personnage, tous différents',
  new Set(RANKS.map((r) => r.character?.kind)).size === RANKS.length)
ok('chaque ceinture a sa couleur', new Set(RANKS.map((r) => r.tint)).size === RANKS.length)
ok('rankOf rend le bon grade à chaque palier', RANKS.every((r) => rankOf(r.from).id === r.id && (r.from === 1 || rankOf(r.from - 1).id !== r.id)))
ok('au sommet, plus de grade suivant', nextRank(99) === null && nextRank(1)?.id === RANKS[1].id)

/* --- 2 · les paliers suivent les formations réelles ---------------------- */

const xp = Object.fromEntries(PACKS.map((p) => [p.id, xpOfPack(p)]))
const trade = PACKS.filter((p) => p.id.startsWith('metier-')).map((p) => xp[p.id])
const weekend = xp.weekend
const full = weekend + xp.generaliste
const withTrade = full + Math.min(...trade)
ok('le week-end de l\'IA mène à la ceinture jaune', rankOf(levelAt(weekend)).id === 'yellow', `${weekend} XP · niveau ${levelAt(weekend)}`)
ok('la formation complète en plus mène à la marron', rankOf(levelAt(full)).id === 'brown', `${full} XP · niveau ${levelAt(full)}`)
ok('une formation métier par-dessus mène à la noire', rankOf(levelAt(withTrade)).id === 'black', `${withTrade} XP · niveau ${levelAt(withTrade)}`)
ok('la noire ne s\'obtient pas sans la formation complète', rankOf(levelAt(weekend + Math.max(...trade) * 2)).id !== 'black')

/* --- 3 · l'en-tête montre le personnage, et la barre a trois boutons ----- */
//
// RÉPARÉE · demandé : « Change complètement le design des personnages [...] en
// pixel art 2D [...] Dans la bottom bar on a dojoburo [...] Le deuxième bouton
// c'est la communauté et le 3e le profil ». L'en-tête montre le personnage
// pixel de l'élève (son grade reste dans le libellé), la fabrique des
// portraits 3D n'est plus montée, et l'onglet IA Training a laissé sa place
// aux temples.
const SHELL = readFileSync('src/game/Shell.tsx', 'utf8')
ok('l\'en-tête montre le personnage de l\'élève', /<ChibiSprite spec=\{avatar\.spec\}/.test(SHELL) && /rankOf\(levelOf\(g\.xp\)\.level\)/.test(SHELL))
ok('… et plus l\'initiale de l\'adresse', !/initialOf\(/.test(SHELL))
ok('plus aucune fabrique de portraits 3D dans la coquille', !/SnapshotFactory/.test(SHELL))
const TAB_TO = [...SHELL.matchAll(/\{ to: '([^']+)', key: '(nav\.[a-z]+)'/g)].map((m) => `${m[1]} ${m[2]}`)
// RÉPARÉE À NOUVEAU · « Créé une page Formations avec les cards de formations
// et leur maîtres avec leur pricing ». Quatre boutons, la page Formations en
// deuxième.
ok('quatre boutons : Dojoburo, Formations, Communauté, Profil', TAB_TO.join(' | ') === '/ nav.game | /formations nav.training | /clan nav.clan | /profil nav.profile', TAB_TO.join(' | '))

/* --- 4 · le profil a ses onglets, et plus la carte ----------------------- */

const PROFIL = readFileSync('src/game/Profil.tsx', 'utf8')
const TAB_IDS = [...PROFIL.matchAll(/\{ id: '([a-z]+)', key: 'pr\.tab[A-Za-z]+', icon: '([a-z]+)' \}/g)]
ok('cinq onglets', TAB_IDS.length === 5, TAB_IDS.map((m) => m[1]).join(', '))
ok('chacun a son icône pixel, toutes différentes', new Set(TAB_IDS.map((m) => m[2])).size === 5)
ok('un vrai jeu d\'onglets (rôles ARIA)', /role="tablist"/.test(PROFIL) && /role="tab"/.test(PROFIL) && /role="tabpanel"/.test(PROFIL) && /aria-selected=/.test(PROFIL))
ok('les flèches du clavier passent d\'un onglet à l\'autre', /ArrowRight/.test(PROFIL) && /ArrowLeft/.test(PROFIL))
ok('un onglet Paramètres', TAB_IDS.some((m) => m[1] === 'parametres'))
const CODE = PROFIL.replace(/\/\/[^\n]*/g, '').replace(/\/\*[\s\S]*?\*\//g, '')
ok('la carte de la vallée n\'est plus dans le profil', !/\/carte/.test(CODE) && !/pf-map/.test(CODE))
ok('l\'échelle des grades est montrée', /RANKS\.map/.test(PROFIL) && /locked=\{!got\}/.test(PROFIL))

/* --- 5 · les réglages ----------------------------------------------------- */

const ST = readFileSync('src/lib/settings.ts', 'utf8')
ok('les réglages : effets, animations réduites, vibrations', /fx: boolean/.test(ST) && /calm: boolean/.test(ST) && /haptics: boolean/.test(ST))
for (const k of ['fx', 'calm', 'haptics']) ok(`le profil règle « ${k} »`, new RegExp(`setSetting\\('${k}'`).test(PROFIL))
// RÉPARÉE DEUX FOIS · le son de l'ancien jeu est parti avec lui (« Efface
// l'ancien jeu »), puis est revenu pour les temples : « Ajoute une musique
// générative d'ambiance japonaise zen et des sound fx ». Deux réglages à part,
// lus par le moteur (lib/zen), et l'ancien moteur ne revient pas.
ok('plus de son de l\'ancien jeu', !/audio\./.test(PROFIL) && !existsSync('src/sim/audio.ts'))
ok('la musique zen et les bruitages se règlent depuis le profil', /setSetting\('music'/.test(PROFIL) && /setSetting\('sfx'/.test(PROFIL) && /music: boolean/.test(ST) && /sfx: boolean/.test(ST))
{
  const ZEN = readFileSync('src/lib/zen.ts', 'utf8')
  ok('le moteur suit les deux réglages', /getSettings\(\)\.music/.test(ZEN) && /getSettings\(\)\.sfx/.test(ZEN))
  ok('aucun son avant un geste · le contexte naît au premier toucher', /addEventListener\('pointerdown'/.test(ZEN) && !/^const ctx = new|^let ctx = new/m.test(ZEN))
  ok('la musique se suspend quand l\'onglet est caché', /visibilityState === 'hidden'[\s\S]{0,40}suspend\(\)/.test(ZEN))
  ok('la gamme est japonaise (In) et la musique respire (le « ma »)', /IN_SCALE = \[0, 1, 5, 7, 8\]/.test(ZEN) && /le « ma »/.test(ZEN))
  ok('aucun fichier audio', !/\.(mp3|ogg|wav|m4a)['"]/.test(ZEN))
}
ok('la langue se règle depuis le profil', /<LangSwitch \/>/.test(PROFIL))
ok('les interrupteurs sont des « switch »', /role="switch"/.test(PROFIL) && /aria-checked=\{on\}/.test(PROFIL))

/* --- 6 · les particules et le rebond ------------------------------------- */

const JUICE = readFileSync('src/lib/juice.ts', 'utf8')
const MAIN = readFileSync('src/main.tsx', 'utf8')
const CSS = readFileSync('src/index.css', 'utf8')
ok('un seul écouteur, posé au démarrage', /installJuice\(\)/.test(MAIN))
ok('les boutons d\'action rebondissent', /'\.gm-cta'/.test(JUICE.match(/BUMP_SELECTOR = \[[\s\S]*?\]/)?.[0] ?? '') && /\.jz-bump \{ animation: jz-bump/.test(CSS))
ok('les boutons principaux lancent des particules', /'\.gm-cta'/.test(JUICE.match(/BURST_SELECTOR = \[[\s\S]*?\]/)?.[0] ?? ''))
// RÉPARÉE · le quiz est devenu un combat (« design d'interaction type jeu
// vidéo ») : la bonne réponse lance toujours sa gerbe, depuis choose().
ok('la bonne réponse d\'un quiz se fête', /if \(ok && x !== undefined && y !== undefined\) burst\(/.test(readFileSync('src/game/Lesson.tsx', 'utf8')))
ok('les effets respectent le réglage ET le système', /current\.fx && !current\.calm && !systemReducesMotion\(\)/.test(ST) && /if \(!effectsOn\(\)\) return/.test(JUICE))
ok('les vignettes 3D s\'arrêtent en mouvement réduit', /getSettings\(\)\.calm \|\| systemReducesMotion\(\)/.test(readFileSync('src/components/three/cardClock.ts', 'utf8')))
ok('le mouvement réduit coupe les animations CSS', /html\.calm \*/.test(CSS))
// LE REBOND N'AJOUTE NI OMBRE NI DÉGRADÉ · les boutons restent à plat.
const BUMP_RULES = [...CSS.matchAll(/\n\.jz-bump\s*\{([^}]*)\}/g)].map((m) => m[1]).join(' ')
ok('le rebond reste à plat', BUMP_RULES.length > 0 && !/gradient\(|box-shadow/.test(BUMP_RULES))

/* --- 6b · les icônes animées selon leur thème ---------------------------- */
//
// Demandé : « faut que les icônes soient animées en fonction de leur thème ».
// RÉPARÉE · les icônes 3D sont devenues des icônes pixel (« en pixel art
// 2D »). Le geste par thème reste exigé, en pas de sprite.
const ICON = readFileSync('src/pixel/PixelIcon.tsx', 'utf8')
ok('les icônes pixel portent leur thème en classe', /picon-\$\{name\}/.test(ICON))
for (const [name, what] of [['settings', 'l\'engrenage tourne'], ['badges', 'la médaille se balance'], ['progress', 'les barres montent'], ['account', 'la personne salue'], ['trainings', 'le temple saute']]) {
  ok(`${what} (.picon-${name})`, new RegExp(`\\.picon-${name} \\{[^}]*animation: pi-[a-z]+ [^}]*steps\\(`).test(CSS))
}
ok('le personnage du grade est montré dans le profil', /<GradeChibi rank=\{rank\} size=\{104\}/.test(PROFIL))
ok('chaque signe de la barre a son geste', ['game', 'clan', 'profile'].every((k) => new RegExp(`\\.gm-tab-${k}\\.on \\.gm-tab-g \\{ animation: tab-${k} `).test(CSS)))
ok('les icônes s\'arrêtent en mouvement réduit', /\.picon, \.gm-tab \.gm-tab-g \{ animation: none !important; \}/.test(CSS))

/* --- 6c · l'affichage clair ------------------------------------------------ */
//
// Demandé : « ajoute un affichage light mode ». La nuit reste le défaut.
const BOOT = readFileSync('public/boot.js', 'utf8')
ok('boot.js pose l\'affichage avant le premier pixel', /getItem\('dojoburo\.look'\)/.test(BOOT) && /setAttribute\('data-look', 'light'\)/.test(BOOT))
// LE CLAIR EST DEVENU LE DÉFAUT · demandé : « affiche le light mode par
// défaut ». La nuit n'est plus posée que sur choix ('dark'), ou par
// « appareil » quand le système la demande.
ok('… et le clair est le défaut', /look !== 'dark' && \(look !== 'system'/.test(BOOT))
ok('… côté React aussi', /v === 'dark' \|\| v === 'system' \? v : 'light'/.test(readFileSync('src/lib/settings.ts', 'utf8')))
ok('morsure · un défaut sombre serait vu', !/look !== 'dark' && \(look !== 'system'/.test("var light = look === 'light'"))
ok('le profil propose Sombre, Clair, Appareil', /<LookRow \/>/.test(PROFIL) && /setLook\(o\.id\)/.test(PROFIL))
const LIGHT = readFileSync('src/styles/look-light.css', 'utf8').replace(/\/\*[\s\S]*?\*\//g, '')
const lightSels = [...LIGHT.matchAll(/([^{}]+)\{/g)].map((m) => m[1].trim()).filter(Boolean)
ok('la feuille claire existe et ne touche que le clair', lightSels.length > 20 && lightSels.every((sel) => sel.split(',').every((x) => /^:root\[data-look='light'\]/.test(x.trim()) || /^@media|^from|^to|^\d/.test(x.trim()))),
  `${lightSels.length} règles`)
ok('elle est chargée après la feuille principale', /import '\.\/index\.css'\n[\s\S]{0,120}import '\.\/styles\/look-light\.css'/.test(MAIN))

/* --- 6d · les jauges prennent la largeur des cartes ------------------------ */
ok('les jauges du profil prennent toute la largeur', /\.pf-gauges \{[^}]*width: 100%;/.test(CSS) && !/\.pf-gauges \{[^}]*max-width/.test(CSS))

/* --- 7 · les morsures ---------------------------------------------------- */

ok('morsure · un lien vers la carte serait vu', /\/carte/.test('<Lnk href="/carte">'))
ok('morsure · un palier qui redescend serait vu', ![1, 3, 2].every((v, i, a) => i === 0 || v > a[i - 1]))
ok('morsure · des effets qui ignorent le système seraient vus',
  !/current\.fx && !current\.calm && !systemReducesMotion\(\)/.test('return current.fx'))

console.log(`\ntest-grades · ${RANKS.length} grades, ${TAB_IDS.length} onglets`)
process.exitCode = fails ? 1 : 0
