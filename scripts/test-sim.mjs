// LES TEMPLES · le moteur pixel art du jeu, vérifié sans navigateur.
//
// RÉPARÉE · cette garde vérifiait le moteur du jeu du studio (sim/engine).
// Demandé : « Change complètement le design des personnages et des dojo en
// pixel art 2D [...] Efface l'ancien jeu ». Le jeu du studio est effacé, et la
// garde affirme désormais ce qui le remplace :
//   · L'ANCIEN JEU EST PARTI · ses fichiers et son adresse, sans retour
//     possible par un import oublié.
//   · LES PERSONNAGES · un même réglage donne toujours le même dessin, chaque
//     espèce et chaque variante se dessinent, et un personnage reçu du serveur
//     (donc de n'importe qui) est nettoyé avant d'être dessiné.
//   · LES MAÎTRES ET LES TEMPLES · chaque formation a son maître, son décor et
//     ses dessins aux bonnes dimensions.
import { build } from 'esbuild'
import { writeFileSync, mkdirSync, existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}
const OUT = 'node_modules/.dojo-sim'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({
    entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent',
    jsx: 'automatic', external: ['react', 'react/jsx-runtime'],
  })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}

/* --- 1 · l'ancien jeu est parti ------------------------------------------- */

ok('le jeu du studio est effacé', !existsSync('src/sim'))
for (const f of ['Dojos', 'PackPage', 'DojoRoom', 'PackArt', 'WorldMap', 'Carte', 'Icon3D']) {
  ok(`game/${f} est effacé`, !existsSync(`src/game/${f}.tsx`))
}
function walk(dir, out = []) {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n)
    if (statSync(p).isDirectory()) walk(p, out)
    else if (/\.tsx?$/.test(n)) out.push(p)
  }
  return out
}
const OLD_IMPORT = /from '[./]*(sim\/|game\/(Dojos|PackPage|DojoRoom|PackArt|WorldMap|Carte|Icon3D)')|from '\.\/(Dojos|PackPage|DojoRoom|PackArt|WorldMap|Carte|Icon3D)'/
const stale = walk('src').filter((f) => OLD_IMPORT.test(readFileSync(f, 'utf8')))
ok('plus aucun import de l\'ancien jeu', stale.length === 0, stale.join(', ') || 'aucun')
const MAIN = readFileSync('src/main.tsx', 'utf8')
ok('l\'adresse /dojoburo ne sert plus le jeu', !/SimPage/.test(MAIN))

/* --- 2 · les personnages --------------------------------------------------- */

const C = await load('src/pixel/chibi.ts', 'chibi.mjs')
const sig = (g) => JSON.stringify(g.runs())
const a = C.randomChibi(42)
ok('un même réglage donne le même dessin', sig(C.drawChibi(a)) === sig(C.drawChibi({ ...a })))
ok('deux graines donnent deux personnages', sig(C.drawChibi(C.randomChibi(1))) !== sig(C.drawChibi(C.randomChibi(2))))
let drawn = 0
for (const sp of C.SPECIES) {
  for (const v of C.VARIANTS[sp]) {
    const g = C.drawChibi({ ...C.randomChibi(7, sp), species: sp, variant: v })
    if (g.runs().length > 20) drawn++
  }
}
const variants = C.SPECIES.reduce((n, sp) => n + C.VARIANTS[sp].length, 0)
ok('chaque espèce et chaque variante se dessinent', drawn === variants, `${drawn}/${variants}`)
ok('humains, aliens, robots, monstres, animaux, bizarres', ['human', 'alien', 'robot', 'monster', 'animal', 'weird'].every((s) => C.SPECIES.includes(s)))
ok('les drapeaux des fiertés s\'épinglent', ['rainbow', 'trans', 'bi', 'nonbinary', 'lesbian', 'pan', 'ace'].every((p) => C.PRIDES.includes(p)))

// LE NETTOYAGE · un avatar vient du serveur, donc de n'importe qui.
const clean = C.sanitizeChibi({ species: 'robot', variant: 'visor', skin: 'url(javascript:1)', hair: '<script>', accessory: 'crown' }, 5)
ok('un personnage reçu garde ce qui est valide', clean.species === 'robot' && clean.variant === 'visor' && clean.accessory === 'crown')
ok('… et remplace ce qui ne l\'est pas', /^#[0-9a-f]{6}$/i.test(clean.skin) && C.HAIRS.includes(clean.hair))
ok('une variante d\'une autre espèce est refusée', C.VARIANTS.robot.includes(C.sanitizeChibi({ species: 'robot', variant: 'cat' }, 1).variant))
ok('n\'importe quoi donne un personnage', C.drawChibi(C.sanitizeChibi('n\'importe quoi', 9)).runs().length > 20)
ok('rien du tout aussi', C.drawChibi(C.sanitizeChibi(null, 9)).runs().length > 20)

/* --- 3 · les maîtres et les temples ---------------------------------------- */

const { PACKS } = await load('src/data/packs.ts', 'packs.mjs')
const M = await load('src/pixel/masters.ts', 'masters.mjs')
const noMaster = PACKS.filter((p) => !M.MASTERS[p.id])
ok('chaque formation a son maître', noMaster.length === 0, noMaster.map((p) => p.id).join(', ') || `${PACKS.length} maîtres`)
ok('chaque maître accueille dans les deux langues', Object.values(M.MASTERS).every((m) => m.welcome.en && m.welcome.fr && m.role.en && m.role.fr))
ok('les maîtres sont tous différents', new Set(Object.values(M.MASTERS).map((m) => sig(C.drawChibi(m.spec)))).size === Object.keys(M.MASTERS).length)

const F = await load('src/temple/art/floors.ts', 'floors.mjs')
const kits = [...new Set(PACKS.map((p) => p.kit))]
const sizes = kits.map((k) => { const g = F.drawFloor(k, '#7c3aed'); return [k, g.w, g.h, g.runs().length] })
ok('chaque décor d\'étage fait 160 sur 64', sizes.every(([, w, h]) => w === 160 && h === 64), sizes.filter(([, w, h]) => w !== 160 || h !== 64).map(([k]) => k).join(', ') || `${kits.length} décors`)
ok('chaque décor est dessiné', sizes.every(([, , , n]) => n > 200))
ok('les décors des spécialités sont tous différents', new Set(kits.map((k) => sig(F.drawFloor(k, '#7c3aed')))).size === kits.length)
const FA = await load('src/temple/art/facade.ts', 'facade.mjs')
ok('le toit, l\'entre-étage et l\'entrée ont la largeur d\'un étage',
  FA.drawRoof('#7c3aed').w === 160 && FA.drawFloorStrip().w === 160 && FA.drawBase('#7c3aed').w === 160)
const W = await load('src/temple/art/world.ts', 'world.mjs')
ok('un temple de la carte fait 40 sur 44', (() => { const g = W.drawTempleIcon('#7c3aed', 0, false); return g.w === 40 && g.h === 44 })())
ok('un temple fermé se distingue d\'un temple ouvert', sig(W.drawTempleIcon('#7c3aed', 0, true)) !== sig(W.drawTempleIcon('#7c3aed', 0, false)))

/* --- 4 · les morsures ------------------------------------------------------ */

ok('morsure · un import de l\'ancien jeu serait vu', OLD_IMPORT.test("import { PackArt } from './PackArt'") && OLD_IMPORT.test("import { audio } from '../sim/audio'"))
ok('morsure · un import des temples ne l\'est pas', !OLD_IMPORT.test("import { drawFloor } from './art/floors'"))

console.log(fails ? `\ntest-sim · ${fails} problème(s)` : `\ntest-sim · ${variants} variantes, ${kits.length} décors, ${PACKS.length} temples`)
process.exitCode = fails ? 1 : 0
