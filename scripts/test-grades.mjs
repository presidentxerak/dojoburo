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
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
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

/* --- 3 · l'en-tête montre le grade, et le bouton s'appelle IA Training ---- */

const SHELL = readFileSync('src/game/Shell.tsx', 'utf8')
ok('l\'en-tête montre l\'avatar du grade', /<GradeAvatar rank=\{rank\}/.test(SHELL) && /rankOf\(levelOf\(g\.xp\)\.level\)/.test(SHELL))
ok('… et plus l\'initiale de l\'adresse', !/initialOf\(/.test(SHELL))
ok('la fabrique des portraits est montée dans la coquille', /<SnapshotFactory \/>/.test(SHELL))
const DICT = readFileSync('src/i18n/dict.ts', 'utf8')
ok('le bouton s\'appelle IA Training', /'nav\.training': \{ en: 'AI Training', fr: 'IA Training' \}/.test(DICT))

/* --- 4 · le profil a ses onglets, et plus la carte ----------------------- */

const PROFIL = readFileSync('src/game/Profil.tsx', 'utf8')
const TAB_IDS = [...PROFIL.matchAll(/\{ id: '([a-z]+)', key: 'pr\.tab[A-Za-z]+', icon: '([a-z]+)' \}/g)]
ok('cinq onglets', TAB_IDS.length === 5, TAB_IDS.map((m) => m[1]).join(', '))
ok('chacun a son icône 3D, toutes différentes', new Set(TAB_IDS.map((m) => m[2])).size === 5)
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
ok('le son du jeu se règle depuis le profil', /audio\.setMuted\(/.test(PROFIL))
ok('la langue se règle depuis le profil', /<LangSwitch \/>/.test(PROFIL))
ok('les interrupteurs sont des « switch »', /role="switch"/.test(PROFIL) && /aria-checked=\{on\}/.test(PROFIL))

/* --- 6 · les particules et le rebond ------------------------------------- */

const JUICE = readFileSync('src/lib/juice.ts', 'utf8')
const MAIN = readFileSync('src/main.tsx', 'utf8')
const CSS = readFileSync('src/index.css', 'utf8')
ok('un seul écouteur, posé au démarrage', /installJuice\(\)/.test(MAIN))
ok('les boutons d\'action rebondissent', /'\.gm-cta'/.test(JUICE.match(/BUMP_SELECTOR = \[[\s\S]*?\]/)?.[0] ?? '') && /\.jz-bump \{ animation: jz-bump/.test(CSS))
ok('les boutons principaux lancent des particules', /'\.gm-cta'/.test(JUICE.match(/BURST_SELECTOR = \[[\s\S]*?\]/)?.[0] ?? ''))
ok('la bonne réponse d\'un quiz se fête', /if \(k === q\.answer\) burst\(/.test(readFileSync('src/game/Lesson.tsx', 'utf8')))
ok('les effets respectent le réglage ET le système', /current\.fx && !current\.calm && !systemReducesMotion\(\)/.test(ST) && /if \(!effectsOn\(\)\) return/.test(JUICE))
ok('les vignettes 3D s\'arrêtent en mouvement réduit', /getSettings\(\)\.calm \|\| systemReducesMotion\(\)/.test(readFileSync('src/components/three/cardClock.ts', 'utf8')))
ok('le mouvement réduit coupe les animations CSS', /html\.calm \*/.test(CSS))
// LE REBOND N'AJOUTE NI OMBRE NI DÉGRADÉ · les boutons restent à plat.
const BUMP_RULES = [...CSS.matchAll(/\n\.jz-bump\s*\{([^}]*)\}/g)].map((m) => m[1]).join(' ')
ok('le rebond reste à plat', BUMP_RULES.length > 0 && !/gradient\(|box-shadow/.test(BUMP_RULES))

/* --- 7 · les morsures ---------------------------------------------------- */

ok('morsure · un lien vers la carte serait vu', /\/carte/.test('<Lnk href="/carte">'))
ok('morsure · un palier qui redescend serait vu', ![1, 3, 2].every((v, i, a) => i === 0 || v > a[i - 1]))
ok('morsure · des effets qui ignorent le système seraient vus',
  !/current\.fx && !current\.calm && !systemReducesMotion\(\)/.test('return current.fx'))

console.log(`\ntest-grades · ${RANKS.length} grades, ${TAB_IDS.length} onglets`)
process.exitCode = fails ? 1 : 0
