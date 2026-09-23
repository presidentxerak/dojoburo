// La salle tient-elle debout ? · la géométrie du dojo, vérifiée sans dessiner.
//
// Ce que cette garde protège n'est pas « ça compile ». C'est la propriété qui
// décide si la scène est regardable : le maître, la porte, les postes et le
// trajet du coursier partagent le MÊME plan (src/components/three/stage.ts),
// et rien n'y occupe deux fois la même place. Un meuble posé sur l'estrade,
// une porte bouchée par une paillasse ou un coursier qui traverse un bureau
// sont exactement les reproches qu'on nous a faits — et aucun d'eux ne se
// voit dans un typecheck.
//
// Elle tourne hors du navigateur, en une seconde. Une garde qui doit lancer
// un moteur 3D pour dire si deux meubles se traversent ne se lance jamais.
//
//   node scripts/test-stage.mjs
import { build } from 'esbuild'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}

const OUT = 'node_modules/.dojo-stage'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}

const S = await load('src/components/three/stage.ts', 'stage.mjs')
const L = await load('src/three/layout3d.ts', 'layout.mjs')
const G = await load('src/components/three/gait.ts', 'gait.mjs')

/** L'empreinte d'un rectangle, sous la forme où on la teste. */
const box = (x, z, hw, hd) => ({ x0: x - hw, x1: x + hw, z0: z - hd, z1: z + hd })
const overlaps = (a, b) => a.x0 < b.x1 && b.x0 < a.x1 && a.z0 < b.z1 && b.z0 < a.z1
const inside = (p, b) => p[0] >= b.x0 && p[0] <= b.x1 && p[1] >= b.z0 && p[1] <= b.z1

const dais = box(S.DAIS.x, S.DAIS.z, S.DAIS.w / 2, S.DAIS.d / 2)
/** l'encombrement d'un personnage debout, au sol */
const R0 = 0.62

console.log('--- la porte et l’estrade se partagent le fond ------------')
for (const [name, enclosed] of [['salle fermée', true], ['monde ouvert', false]]) {
  const d = S.doorAt(enclosed)
  const shell = S.shellOf(enclosed)
  // l'ouverture, prolongée vers l'intérieur : on n'entre pas en crabe
  const lane = box(d.x, d.z + 2, d.half, 2)
  ok(`${name} · l’estrade ne bouche pas la porte`, !overlaps(dais, lane),
    `porte x ${(d.x - d.half).toFixed(1)}…${(d.x + d.half).toFixed(1)} · estrade x ${dais.x0.toFixed(1)}…${dais.x1.toFixed(1)}`)
  ok(`${name} · l’estrade tient dans la salle`,
    dais.x0 > -shell.w / 2 && dais.x1 < shell.w / 2 && dais.z0 > -shell.d / 2,
    `salle ${shell.w}×${shell.d}`)
  ok(`${name} · le seuil est bien dans le mur du fond`, Math.abs(d.z + shell.d / 2) < 1e-9)
}

console.log('\n--- le maître est chez lui --------------------------------')
ok('le maître se tient SUR l’estrade', inside([S.SENSEI_AT[0], S.SENSEI_AT[2]], dais),
  `(${S.SENSEI_AT[0]}, ${S.SENSEI_AT[2]})`)
ok('…et à sa hauteur', Math.abs(S.SENSEI_AT[1] - S.DAIS.h) < 1e-9)
ok('le maître est AU FOND, pas devant l’équipe', S.SENSEI_AT[2] < L.SEAT_CENTRE_Z - 4,
  `maître z=${S.SENSEI_AT[2].toFixed(1)} · rangées z≈${L.SEAT_CENTRE_Z}`)
ok('le pupitre est sur l’estrade', inside([S.DAIS.x + S.LECTERN.dx, S.DAIS.z + S.LECTERN.dz], dais))
ok('…et au-dessus du plateau', S.LECTERN.top > S.DAIS.h)
ok('on lui parle DEVANT l’estrade, pas dessus', !inside(S.AUDIENCE, dais) && S.AUDIENCE[1] > dais.z1)

console.log('\n--- les postes ont libéré le fond ---------------------------')
for (let n = 1; n <= 12; n++) {
  const seats = L.seatPositions(n)
  const backmost = Math.min(...seats.map((s) => s[1]))
  const frontmost = Math.max(...seats.map((s) => s[1]))
  const clearOfDais = seats.every((s) => !overlaps(box(s[0], s[1] + 0.5, 1.15, 1.25), dais))
  const inRoom = frontmost + L.DESK_FWD + 0.9 < L.ROOM.d / 2
  if (n === 12 || n === 1) {
    ok(`${n} coéquipier(s) · personne n’est assis sur l’estrade`, clearOfDais,
      `rangée du fond z=${backmost.toFixed(1)}`)
    ok(`${n} coéquipier(s) · le bureau de devant reste dans la pièce`, inRoom,
      `bureau z=${(frontmost + L.DESK_FWD).toFixed(1)} · mur z=${L.ROOM.d / 2}`)
  } else if (!clearOfDais || !inRoom) {
    ok(`${n} coéquipier(s) · plan de salle tenable`, false)
  }
}
ok('toutes les tailles d’équipe tiennent', true)

console.log('\n--- le mobilier de m\u00e9tier a quitt\u00e9 le fond -----------------')
{
  const foot = S.PROP_SLOTS.map((_, i) => S.slotFootprint(i))
  const seats12 = L.seatPositions(12)
  for (let i = 0; i < foot.length; i++) {
    const f = foot[i]
    const b = box(f.x, f.z, f.hw, f.hd)
    const onDais = overlaps(b, dais)
    const inWall = Math.abs(f.x) + f.hw > L.ROOM.w / 2 || f.z - f.hd < -L.ROOM.d / 2 || f.z + f.hd > L.ROOM.d / 2
    const onSeat = seats12.some((p) => overlaps(b, box(p[0], p[1] + 0.5, 1.15, 1.25)))
    const onPlant = S.PLANTS.some(([x, z]) => overlaps(b, box(x, z, 0.7, 0.7)))
    const onSibling = foot.some((o, j) => j !== i && overlaps(b, box(o.x, o.z, o.hw, o.hd)))
    ok(`emplacement ${i} · libre (estrade, murs, postes, plantes, voisins)`,
      !onDais && !inWall && !onSeat && !onPlant && !onSibling,
      [onDais && 'estrade', inWall && 'mur', onSeat && 'poste', onPlant && 'plante', onSibling && 'voisin']
        .filter(Boolean).join(' + '))
  }
  // …et le coursier passe entre eux
  for (const enclosed of [true, false]) {
    const path = S.courierPath(enclosed)
    const { seg, total } = S.pathLengths(path)
    let bad = 0
    for (let d = 0; d <= total; d += 0.05) {
      const p = S.pointAt(path, seg, d)
      for (const f of foot) {
        if (Math.abs(p.x - f.x) < f.hw + R0 && Math.abs(p.z - f.z) < f.hd + R0) { bad++; break }
      }
    }
    ok(`le coursier ne rentre pas dans le mobilier (${enclosed ? 'ferm\u00e9e' : 'ouvert'})`, bad === 0, `${bad} point(s)`)
  }
}

console.log('\n--- le trajet du coursier ---------------------------------')
for (const [name, enclosed] of [['salle fermée', true], ['monde ouvert', false]]) {
  const path = S.courierPath(enclosed)
  const { seg, total } = S.pathLengths(path)
  const d = S.doorAt(enclosed)
  ok(`${name} · il part de derrière la porte`, path[0][1] < d.z && Math.abs(path[0][0] - d.x) < 1e-9)
  ok(`${name} · il franchit bien le seuil`, path[1][1] > d.z)
  ok(`${name} · il finit à portée de voix du maître`,
    Math.hypot(path[path.length - 1][0] - S.SENSEI_AT[0], path[path.length - 1][1] - S.SENSEI_AT[2]) < 3.2)

  // Le trajet, échantillonné tous les dix centimètres · un chemin dont seuls
  // les SOMMETS sont dégagés peut couper un meuble entre deux sommets, et
  // c'est précisément comme ça qu'il rasait le coin de l'estrade.
  let hitDais = 0
  let outOfRoom = 0
  const shell = S.shellOf(enclosed)
  for (let s = 0; s <= total; s += 0.1) {
    const p = S.pointAt(path, seg, s)
    if (inside([p.x, p.z], dais)) hitDais++
    // dans la salle seulement · il arrive de derrière le mur du fond
    if (p.z > -shell.d / 2 && Math.abs(p.x) > shell.w / 2 - 0.5) outOfRoom++
  }
  ok(`${name} · il ne traverse jamais l’estrade`, hitDais === 0, `${hitDais} point(s) dedans`)
  ok(`${name} · il ne traverse jamais un mur latéral`, outOfRoom === 0)
  ok(`${name} · le trajet a une longueur plausible`, total > 6 && total < 40, `${total.toFixed(1)} unités`)
}

console.log('\n--- l’évitement --------------------------------------------')
// Le cas qui compte : douze coéquipiers assis, plus l'estrade et les plantes.
S.setSolids(L.seatPositions(12).map((p, i) => ({ id: 'a' + i, x: p[0], z: p[1] })))
const list = S.solids()
ok('la scène publie bien tous ses obstacles', list.length === 12 + S.FIXED_SOLIDS.length, `${list.length} empreintes`)

const R = R0

// D'abord la règle nue, sur un décor où la question a un sens : deux meubles
// espacés. Un point pris n'importe où dedans doit en ressortir, entier.
{
  const two = [
    { x: -4, z: 0, hw: 1, hd: 1, tag: 'a' },
    { x: 4, z: 0, hw: 1, hd: 1, tag: 'b' },
  ]
  let bad = 0
  for (let i = 0; i < 20000; i++) {
    const x = -8 + ((i * 7919) % 1600) / 100
    const z = -4 + ((i * 104729) % 800) / 100
    const [ax, az] = S.avoid(x, z, R, two)
    for (const s of two) {
      if (Math.abs(ax - s.x) < s.hw + R - 1e-9 && Math.abs(az - s.z) < s.hd + R - 1e-9) { bad++; break }
    }
  }
  ok('un point pris dans un meuble en ressort', bad === 0, `${bad} sur 20000`)
}

// Puis là où ça compte vraiment : LE LONG DU TRAJET, avec les douze postes en
// place. Un couloir de travail encombré n'a pas toujours d'issue (deux postes
// voisins sont à 2,8 l'un de l'autre pour 2,3 de large : personne ne passe
// entre eux, et c'est vrai d'un vrai bureau aussi). Ce qu'on exige, c'est que
// le chemin du coursier, lui, soit franchissable de bout en bout.
for (const [name, enclosed] of [['salle fermée', true], ['monde ouvert', false]]) {
  const path = S.courierPath(enclosed)
  const { seg, total } = S.pathLengths(path)
  let bad = 0
  let nudged = 0
  for (let d = 0; d <= total; d += 0.05) {
    const p = S.pointAt(path, seg, d)
    const [ax, az] = S.avoid(p.x, p.z, R, list)
    if (Math.abs(ax - p.x) > 1e-9 || Math.abs(az - p.z) > 1e-9) nudged++
    for (const s of list) {
      if (Math.abs(ax - s.x) < s.hw + R - 1e-9 && Math.abs(az - s.z) < s.hd + R - 1e-9) { bad++; break }
    }
  }
  ok(`${name} · le trajet est franchissable avec douze postes`, bad === 0, `${bad} point(s) bloqué(s)`)
  ok(`${name} · et il n'a même pas besoin d'être corrigé`, nudged === 0, `${nudged} point(s) dévié(s)`)
}

// L'évitement doit quand même SERVIR : un pas de côté dans un poste est
// rattrapé. C'est le filet quand l'équipe change de place sous ses pieds.
{
  const seat = L.seatPositions(12)[0]
  const [ax, az] = S.avoid(seat[0], seat[1], R, list)
  ok('marcher sur un coéquipier est rattrapé', ax !== seat[0] || az !== seat[1],
    `(${ax.toFixed(2)}, ${az.toFixed(2)})`)
}

// Un point déjà libre ne doit pas bouger · un évitement qui remue tout le
// monde donnerait un coursier qui zigzague sur un plancher vide.
{
  const free = S.avoid(-7.0, 0, R, list)
  ok('un point dégagé est laissé tranquille', free[0] === -7.0 && free[1] === 0,
    `(${free[0].toFixed(2)}, ${free[1].toFixed(2)})`)
}

for (const enclosed of [true, false]) {
  const shell = S.shellOf(enclosed)
  const [cx, cz] = S.clampRoom(99, 99, R, enclosed)
  ok(`les murs tiennent (${enclosed ? 'fermée' : 'ouvert'})`,
    cx < shell.w / 2 - R && cz < shell.d / 2 - R, `(${cx.toFixed(1)}, ${cz.toFixed(1)})`)
}

console.log('\n--- la démarche -------------------------------------------')
ok('à l’arrêt, aucune amplitude', G.strideAmp(0) === 0)
ok('la cadence monte avec la vitesse', G.strideHz(1.6) > G.strideHz(0))
ok('…et sature au lieu de faire le grand écart', G.strideAmp(9) === 1)
{
  const g = { speed: 1.55, phase: 0, bow: 0 }
  G.advance(g, 1 / 60)
  const first = g.phase
  G.advance(g, 1 / 60)
  ok('la phase AVANCE, elle ne se recalcule pas', g.phase > first && first > 0)
  // une image longue (un onglet réveillé) ne doit pas faire sauter dix pas
  const j = { speed: 1.55, phase: 0, bow: 0 }
  G.advance(j, 4)
  ok('une image longue ne téléporte pas les jambes', j.phase < Math.PI * 2 * 1.5, j.phase.toFixed(2))
}

console.log('\n--- ce que le coursier dit ---------------------------------')
const newsSrc = readFileSync('src/components/three/news.ts', 'utf8')
const pics = newsSrc.match(/\p{Extended_Pictographic}/gu)
ok('aucun emoji dans les répliques', !pics, pics ? [...new Set(pics)].join(' ') : '')
const strings = [...newsSrc.matchAll(/^\s+'([^']{6,})',$/gm)].map((m) => m[1])
ok('il y a de quoi ne pas se répéter', strings.length >= 16, `${strings.length} répliques`)
ok('elles tiennent dans une bulle', strings.every((s) => s.length <= 46),
  strings.filter((s) => s.length > 46).join(' | '))

console.log('\n' + (fails ? `${fails} échec(s)` : 'tout est en place'))
// LA SORTIE EST VIDÉE AVANT DE PARTIR · « process.exitCode » et non
// « process.exit() ».
//
// POURQUOI CE N'EST PAS UN DÉTAIL DE STYLE. Vers un terminal, l'écriture est
// synchrone et tout s'affiche. Vers un TUYAU · c'est à dire dès que le portail
// lance cette épreuve · elle est asynchrone, et « process.exit() » part sans
// attendre : ce qui n'est pas encore parti est JETÉ.
//
// Mesuré ici même : la même épreuve sur les mêmes données rendait 30 690
// caractères une fois sur deux et 9 326 l'autre, soit 179 lignes sur 528. Le
// code de sortie, lui, restait juste · une épreuve en échec était bien
// déclarée en échec. Ce qui disparaissait, c'était le DÉTAIL, c'est à dire la
// seule chose qu'on lit pour corriger.
//
// Poser le code et laisser Node sortir tout seul vide la file d'abord. Ces
// épreuves ne tiennent aucune ressource ouverte, donc il n'y a rien à forcer.
process.exitCode = fails ? 1 : 0
