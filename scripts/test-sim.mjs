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

/* --- 3b · chaque étage est différent, la porte s'ouvre, la carte vit ------- */
//
// Demandé : « Les étages doivent être tous différents là ils sont trop
// identiques [...] L'étudiant doit être positionné devant la porte du dojo qui
// s'ouvre et se ferme [...] mets des personnages qui marchent et vont et
// partent des temples [...] ajoute une rivière des bassins des parcs zen ».
const { levelsOf } = await load('src/data/packs.ts', 'packs2.mjs')
const diff = (a, b) => {
  let n = 0
  for (let y = 0; y < 64; y++) for (let x = 0; x < 160; x++) if (a.get(x, y) !== b.get(x, y)) n++
  return n / (160 * 64)
}
let worst = 1, worstAt = ''
for (const p of PACKS) {
  const gs = levelsOf(p).map(({ level }, i) => F.drawFloor(p.kit, p.tint, i, level.master))
  for (let i = 0; i < gs.length; i++) for (let j = i + 1; j < gs.length; j++) {
    const d = diff(gs[i], gs[j])
    if (d < worst) { worst = d; worstAt = `${p.id} ${i + 1}F/${j + 1}F` }
  }
}
ok('dans chaque temple, deux étages diffèrent d\'au moins un quart de leurs pixels', worst >= 0.25, `pire écart ${(worst * 100).toFixed(1)} % (${worstAt})`)
const D = await load('src/temple/art/door.ts', 'door.mjs')
const L = D.drawDoorLeaf('left'), Rt = D.drawDoorLeaf('right'), IN = D.drawDoorInside('#7c3aed')
ok('les deux battants couvrent l\'ouverture de la porte', L.w + Rt.w === D.DOOR_W && L.h === D.DOOR_H && IN.w === D.DOOR_W && IN.h === D.DOOR_H)
ok('l\'ouverture est celle du décor (x 72, y 21)', D.DOOR_X === 72 && D.DOOR_Y === 21)
{
  const TP = readFileSync('src/temple/Temple.tsx', 'utf8')
  ok('l\'élève se tient devant la porte et la franchit', /className=\{`tp-me \$\{me\}`\}/.test(TP) && /setMe\('enter'\)/.test(TP) && /setMe\('exit'\)/.test(TP))
  ok('monter passe par la porte', /onClick=\{\(\) => \(i < floors\.length - 1 \? void climb\(i, i \+ 1\)/.test(TP))
}
// LA CARTE · tous les temples sont joignables à pied depuis l'entrée
const WK = await load('src/temple/Walkers.tsx', 'walkers.mjs')
for (const [w, cols, step] of [[640, 4, 118], [320, 2, 112]]) {
  const sx = w / cols
  const spots = PACKS.map((_, i) => { const row = Math.floor(i / cols), c = i % cols, col = row % 2 === 0 ? c : cols - 1 - c; return { x: Math.round(sx / 2 + col * sx), y: Math.round(78 + row * step) } })
  const h = Math.round(78 + (Math.ceil(PACKS.length / cols) - 1) * step + 70)
  const routes = W.worldRoutes(w, h, spots, 7)
  const net = WK.walkNetwork(routes)
  const unreachable = net.doors.filter((d) => {
    const r = net.route(net.entrance.node, d.node)
    return r.length < 2 && Math.hypot(d.at.x - routes.entrance.x, d.at.y - routes.entrance.y) > 4
  })
  ok(`carte ${w} px · chaque temple est joignable depuis l'entrée`, routes.doors.length === PACKS.length && unreachable.length === 0, `${unreachable.length} injoignable(s)`)
  const t0 = performance.now(); W.drawWorld(w, h, spots, 7); const ms = performance.now() - t0
  // un premier appel à froid, sur une machine parfois chargée · la borne vise
  // une régression grossière, pas une mesure fine
  ok(`carte ${w} px · dessinée en moins de 500 ms`, ms < 500, `${ms.toFixed(0)} ms`)
}
// LE SON · rien ne se construit à l'import (Node n'a pas de son, un
// navigateur le refuse avant un geste)
const Z = await load('src/lib/zen.ts', 'zen.mjs')
ok('le moteur du son se charge sans navigateur', typeof Z.zen.sfx === 'function' && Z.zen.isPlaying() === false)

/* --- 3c · les deux cours vendus à part ---------------------------------------- */
//
// Demandé : « un grand cours à 99 € comment coder une app [...] en apprenant
// Claude Code, Vercel, Supabase, le terminal et GitHub [...] Un cours comment
// coder une app avec Lovable à 49 € ». Chacun s'achète seul et n'ouvre que lui.
{
  const CO = await load('src/data/courses/index.ts', 'courses.mjs')
  const PL = await load('src/data/plans.ts', 'plans2.mjs')
  const PK = await load('src/data/packs.ts', 'packs3.mjs')
  const cp = PK.PACKS.filter((p) => p.door === 'course')
  // UN COURS N'EST PUBLIÉ QUE PRÊT · voir data/courses (COURSE_READY)
  const ready = CO.COURSE_IDS.filter((id) => CO.COURSE_READY[id])
  ok('exactement les cours prêts sont publiés', cp.map((p) => p.id).sort().join(',') === [...ready].sort().join(',') && cp.every((p) => p.course === p.id), `${cp.map((p) => p.id).join(', ') || 'aucun'} · prêts : ${ready.join(', ') || 'aucun'}`)
  ok('un cours pas prêt n\'a aucune cité publiée', CO.COURSE_IDS.filter((id) => !CO.COURSE_READY[id]).every((id) => CO.COURSE_CITIES[id].length === 0))
  ok('le cours « Coder une app » vaut 99 euros, celui de Lovable 49', PL.COURSE_EUR['coder-une-app'] === 99 && PL.COURSE_EUR['coder-avec-lovable'] === 49)
  ok('le prix d\'un cours est lu dans la grille', cp.every((p) => PK.eurOf(p) === PL.COURSE_EUR[p.course]))
  const SESSION = readFileSync('api/_lib/checkoutSession.ts', 'utf8')
  const buyable = (SESSION.match(/BUY_COURSES[^=]*=\s*new Set\(\[([\s\S]*?)\]\)/)?.[1] ?? '').match(/'([a-z-]+)'/g)?.map((x) => x.slice(1, -1)) ?? []
  ok('le serveur vend exactement les cours du programme', buyable.join(',') === CO.COURSE_IDS.join(','), buyable.join(','))
  const BUY = readFileSync('api/buy.ts', 'utf8')
  ok('chaque cours a son prix Stripe', CO.COURSE_IDS.every((id) => new RegExp(`'${id}': ENV\\.STRIPE_PRICE_COURSE_`).test(BUY)) && /metadata\[course\]/.test(BUY))
  const ACC = readFileSync('src/game/access.ts', 'utf8')
  ok('un cours acheté n\'ouvre que lui', /m\.track === 'course'\s*\?\s*\(a\.courses \?\? \[\]\)\.includes\(COURSE_OF_CITY\[m\.id\]\)/.test(ACC)
    && /p\.door === 'course'\) return Boolean\(p\.course\) && \(a\.courses \?\? \[\]\)\.includes\(p\.course!\)/.test(ACC))
  ok('un second cours s\'ajoute au premier', /courses: \[\.\.\.have, id\]/.test(ACC))
  // LE CONTENU · lu dans ce qui est écrit, publié ou non, et exigé complet dès
  // qu'un cours est déclaré prêt
  const draft = (id) => CO.COURSE_DRAFTS[id].flatMap((p) => p.modules)
  const code = draft('coder-une-app').map((m) => m.title.fr.toLowerCase()).join(' | ')
  const lv = draft('coder-avec-lovable').map((m) => m.title.fr.toLowerCase()).join(' | ')
  const lessons = (id) => draft(id).reduce((n, m) => n + m.levels.length, 0)
  if (CO.COURSE_READY['coder-une-app']) ok('le cours de code couvre le terminal, GitHub, Claude Code, Supabase et Vercel', ['terminal', 'github', 'claude code', 'supabase', 'vercel'].every((w) => code.includes(w)), code)
  if (CO.COURSE_READY['coder-avec-lovable']) ok('le cours Lovable a son app exemple', /lovable/.test(lv) && draft('coder-avec-lovable').length >= 4, lv)
  if (ready.length === 2) ok('le grand cours est plus long que celui de Lovable', lessons('coder-une-app') > lessons('coder-avec-lovable') && lessons('coder-avec-lovable') >= 12, `${lessons('coder-une-app')} et ${lessons('coder-avec-lovable')} leçons`)
  console.log(`      rédaction en cours · ${lessons('coder-une-app')} leçons écrites pour Coder une app, ${lessons('coder-avec-lovable')} pour Lovable`)
  ok('chaque cité des cours est rangée « course »', CO.COURSE_MODULES.every((m) => m.track === 'course'))
}

/* --- 3d · trois leçons offertes, des cadenas qui suivent l'achat ------------- */
//
// Demandé : « Tous les packs sont débloqués remets les payants et mets leur un
// cadenas mets juste les 3 premières leçons de chaque ouvertes ».
{
  const ACC = readFileSync('src/game/access.ts', 'utf8')
  ok('trois leçons offertes par formation', /export const FREE_LESSONS = 3\b/.test(ACC) && /indexInPack < FREE_LESSONS/.test(ACC))
  const TP = readFileSync('src/temple/Temple.tsx', 'utf8')
  const LS = readFileSync('src/game/Lesson.tsx', 'utf8')
  ok('le temple et la leçon appliquent la même règle', /a\.opensPack\(pack!\) \|\| isFreeLesson\(i\)/.test(TP) && /a\.opensPack\(pack\) \|\| isFreeLesson\(i\)/.test(LS))
  const WD = readFileSync('src/temple/World.tsx', 'utf8')
  ok('le cadenas de la carte suit l\'achat, pas le passe-droit d\'essai', /lockedOf = \(p: Pack\) => eurOf\(p\) > 0 && !a\.ownsPack\(p\)/.test(WD) && !/ownsPack[\s\S]{0,120}tester/.test(ACC.match(/const ownsPack[\s\S]*?\n  \}/)?.[0] ?? 'tester'))
  ok('un compte d\'essai est prévenu', /a\.tester && [\s\S]{0,80}TT\.testerNote/.test(WD))
  // LE DÉCOR DU TEMPLE · « un ciel bleu avec des nuages et en bas des jardins
  // zen avec un chemin »
  const SK = await load('src/temple/art/sky.ts', 'sky.mjs')
  ok('le jardin zen fait trois fois la largeur d\'un étage', SK.drawGarden().w === 480)
  ok('des nuages différents', JSON.stringify(SK.drawCloud(1).runs()) !== JSON.stringify(SK.drawCloud(2).runs()))
  ok('le temple porte le ciel et le jardin', /className="tp-sky"/.test(TP) && /className="tp-ground"/.test(TP))
  ok('l\'élève marche jusqu\'à la porte avant d\'entrer', /setMe\('walk'\)[\s\S]{0,200}setMe\('enter'\)/.test(TP) && /await settle\(n\)/.test(TP))
}

/* --- 3e · la leçon comme une quête, les maîtres vivants, la carte sans pierre - */
//
// Demandé : « Améliore le design des formations [...] le design d'interaction
// type jeu vidéo. Enlève les sols en pierres en dessous des temples [...] Anime
// les maîtres dans leur carte ».
{
  const LS = readFileSync('src/game/Lesson.tsx', 'utf8')
  const LG = readFileSync('src/game/LessonGame.tsx', 'utf8')
  ok('la leçon a son journal de quête', /<QuestHud /.test(LS) && /data-step="mission"/.test(LS) && /data-step="quiz"/.test(LS))
  ok('le maître ouvre la leçon en dialogue', /<MasterDialog /.test(LS) && /onKeyDown=\{\(e\) => \{ if \(e\.key === 'Enter'/.test(LG))
  ok('les étapes deviennent des objectifs à cocher', /<Mission act=\{level\.act\} steps=\{level\.steps\}/.test(LS))
  ok('le quiz se joue au clavier et compte la série', /\^\[1-4\]\$/.test(LS) && /QT\.streak/.test(LS))
  ok('la victoire mène à l\'étage suivant', /<Victory /.test(LS) && /#etage-\$\{i \+ 2\}/.test(LS))
  ok('le mouvement réduit coupe les effets de la quête', /\.lq-hit, \.lq-miss, \.lq-float[^{]*\{ animation: none !important; \}/.test(readFileSync('src/index.css', 'utf8')))
  const WD = readFileSync('src/temple/World.tsx', 'utf8')
  ok('les maîtres des cartes sont animés', /<LiveChibi spec=\{m\.spec\}/.test(WD) && /lc-blink/.test(readFileSync('src/index.css', 'utf8')))
  const icon = W.drawTempleIcon('#7c3aed', 0, false)
  let grey = 0
  for (let y = 38; y < 44; y++) for (let x = 0; x < 40; x++) { const c = icon.get(x, y); if (c && /^#(b9b4c4|dcd8e4|8f8aa0)$/i.test(c)) grey++ }
  ok('plus de socle de pierre sous les temples', grey === 0, `${grey} pixels de pierre`)
}

/* --- 4 · les morsures ------------------------------------------------------ */

ok('morsure · un import de l\'ancien jeu serait vu', OLD_IMPORT.test("import { PackArt } from './PackArt'") && OLD_IMPORT.test("import { audio } from '../sim/audio'"))
ok('morsure · un import des temples ne l\'est pas', !OLD_IMPORT.test("import { drawFloor } from './art/floors'"))

console.log(fails ? `\ntest-sim · ${fails} problème(s)` : `\ntest-sim · ${variants} variantes, ${kits.length} décors, ${PACKS.length} temples`)
process.exitCode = fails ? 1 : 0
