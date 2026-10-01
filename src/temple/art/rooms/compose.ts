// LE COMPOSITEUR D'ÉTAGES · une pièce différente à chaque étage, qui reste
// celle de la spécialité.
//
// Demandé : « Les étages doivent être tous différents là ils sont trop
// identiques ». Le premier étage garde la pièce dessinée à la main ; les
// suivants sont composés :
//   - un mur, un soubassement et un sol tirés dans les listes de surfaces,
//     dans un ordre propre à la spécialité, de sorte que deux étages proches
//     n'ont jamais la même combinaison ;
//   - une palette de la famille de la spécialité, décalée d'un étage à l'autre
//     (teinte, clarté) ;
//   - un objet signature de la spécialité, découpé dans la pièce dessinée à
//     la main (le tableau, la baie, le chevalet...) ;
//   - l'objet du sujet de la leçon (la loupe, le gong, le kanban...) ;
//   - des objets de la bibliothèque, choisis selon l'ambiance de la spécialité.
// Les fentes respectent le contrat de mise en page : rien dans x = 63..96 au
// mur, objets hauts au sol seulement en x = 5..17, 45..62 et 91..99, objets
// bas (sommet sous y = 40) devant le maître et les élèves.
import { Grid, rng, hashString, shade } from '../../../pixel/grid'
import type { DojoKit } from '../../../data/packs'
import { FLOOR_W, FLOOR_H, PAPER, tone, mix, type Pal, type Ctx } from './base'
import { WALLS, FLOORS, paintWain, rug } from './surfaces'
import { PROPS, cushions, VIEWS, type Prop } from './props'
import { topicProp } from './topics'

/* ------------------------------------------------------------------ */
/* Les spécialités · palette, ambiance, objets signatures              */
/* ------------------------------------------------------------------ */

type Slot = 'WL' | 'WR' | 'A' | 'B' | 'C' | 'SL' | 'W'

/** un morceau de la pièce dessinée à la main · un rectangle du premier étage
 *  (contour compris), et l'emplacement qu'il occupe */
interface Piece { slot: Slot; x: number; y: number; w: number; h: number; cords?: number[] }

interface KitStyle {
  wall: string
  trim: string
  wood: string
  floor: string
  floor2: string
  accent: string
  dark?: boolean
  books?: string[]
  tags: string[]
  pieces: Piece[]
  /** les petits morceaux muraux (une cloche, une horloge, une affiche) que
   *  le compositeur peut accrocher dans la place qui reste */
  small?: Piece[]
}

const BOOKS = ['#c0392b', '#2e6fb5', '#2f9e5a', '#e0a93a', '#8e44ad', '#d35f2a', '#1f7a7a']
const LAWBOOKS = ['#7a1f24', '#1f4a7a', '#24553a', '#5a3319', '#8a6a2a']

const P_ = (slot: Slot, x: number, y: number, w: number, h: number, cords?: number[]): Piece => ({ slot, x, y, w, h, cords })

const STYLES: Record<DojoKit, KitStyle> = {
  course: {
    wall: '#f2dfba', trim: '#a8683a', wood: '#7a4526', floor: '#c9b97a', floor2: '#3e6b3a', accent: '#2f5d4a', tags: ['zen', 'school'],
    pieces: [P_('WL', 9, 7, 40, 26), P_('B', 45, 32, 19, 21), P_('WR', 103, 6, 46, 26, [5, 22, 39])],
  },
  study: {
    wall: '#5b3a24', trim: '#3f2716', wood: '#7a4526', floor: '#7a4a2a', floor2: '#5a3319', accent: '#c0392b', dark: true, tags: ['library', 'zen'],
    small: [P_('W', 18, 6, 21, 11)],
    pieces: [P_('A', 4, 5, 15, 48), P_('B', 45, 9, 16, 44), P_('WL', 18, 6, 21, 11), P_('WR', 101, 6, 43, 15), P_('SL', 131, 40, 16, 13)],
  },
  saas: {
    wall: '#d6ebf7', trim: '#f4f8fb', wood: '#5c6b80', floor: '#5c6b80', floor2: '#53627a', accent: '#16a34a', tags: ['office', 'tech'],
    small: [P_('W', 47, 7, 15, 24)],
    pieces: [P_('WL', 8, 6, 40, 27), P_('B', 45, 7, 20, 46), P_('WR', 102, 6, 48, 22)],
  },
  podcast: {
    wall: '#3b2a63', trim: '#2a1f47', wood: '#5e4a8a', floor: '#2a2340', floor2: '#4a3278', accent: '#ff3b3b', dark: true, tags: ['tech', 'office'],
    small: [P_('W', 17, 5, 29, 10)],
    pieces: [P_('WL', 17, 5, 29, 10), P_('A', 4, 11, 15, 42), P_('B', 45, 17, 18, 36), P_('C', 91, 33, 10, 20), P_('SL', 107, 39, 42, 14)],
  },
  pitch: {
    wall: '#1f2a4d', trim: '#141c36', wood: '#c48a52', floor: '#9c1f2c', floor2: '#c48a52', accent: '#f5c542', dark: true, tags: ['office', 'lux'],
    pieces: [P_('A', 4, 3, 11, 49), P_('WR', 100, 6, 50, 29), P_('B', 46, 22, 17, 31), P_('C', 91, 35, 10, 18)],
  },
  app: {
    wall: '#e8e3f6', trim: '#c7bde3', wood: '#d8b07a', floor: '#d8b07a', floor2: '#c49a64', accent: '#f59e0b', tags: ['office', 'tech'],
    small: [P_('W', 91, 6, 11, 11)],
    pieces: [P_('WL', 8, 6, 40, 28), P_('B', 46, 11, 16, 42), P_('WR', 100, 5, 52, 32), P_('SL', 127, 43, 18, 10)],
  },
  sales: {
    wall: '#f2a76b', trim: '#7a3b23', wood: '#7a3b23', floor: '#f6ead4', floor2: '#d9473b', accent: '#e5413a', tags: ['office'],
    small: [P_('W', 49, 9, 11, 12)],
    pieces: [P_('WL', 8, 6, 40, 28), P_('B', 46, 9, 17, 44), P_('WR', 100, 6, 51, 25), P_('SL', 111, 40, 32, 13)],
  },
  ops: {
    wall: '#cfe6c9', trim: '#f7f5ee', wood: '#c98f5a', floor: '#c98f5a', floor2: '#a8703f', accent: '#2f6f4a', tags: ['office'],
    small: [P_('W', 102, 8, 11, 11)],
    pieces: [P_('WL', 8, 5, 40, 30), P_('B', 46, 22, 17, 31), P_('WR', 102, 7, 45, 22), P_('C', 90, 34, 11, 19)],
  },
  design: {
    wall: '#fcebf1', trim: '#e0b9c8', wood: '#c4864f', floor: '#bdb7b0', floor2: '#e0b9c8', accent: '#ec4899', tags: ['craft'],
    pieces: [P_('WL', 8, 6, 40, 28), P_('B', 46, 11, 18, 42), P_('WR', 101, 7, 50, 15), P_('SL', 103, 39, 52, 14)],
  },
  school: {
    wall: '#f8efb8', trim: '#5fa36a', wood: '#b9773f', floor: '#f2ecd8', floor2: '#7bb87f', accent: '#2b6cb0', tags: ['school'],
    small: [P_('W', 102, 15, 11, 11)],
    pieces: [P_('WL', 7, 13, 42, 24), P_('B', 46, 26, 19, 27), P_('WR', 102, 14, 49, 21)],
  },
  campus: {
    wall: '#c8e5ef', trim: '#8fb6c6', wood: '#c4864f', floor: '#c96f4a', floor2: '#f6f1e6', accent: '#2563eb', tags: ['school', 'library'],
    small: [P_('W', 23, 18, 18, 16), P_('W', 20, 6, 26, 11)],
    pieces: [P_('WL', 20, 6, 26, 28), P_('WR', 101, 6, 50, 26), P_('B', 44, 23, 22, 30), P_('C', 90, 40, 11, 13)],
  },
  lab: {
    wall: '#eef5f8', trim: '#3aa6b9', wood: '#9aa3b8', floor: '#c9d3dc', floor2: '#a9b6c2', accent: '#22c55e', tags: ['lab', 'tech'],
    small: [P_('W', 91, 6, 9, 9)],
    pieces: [P_('WL', 9, 8, 38, 14), P_('B', 44, 24, 22, 29), P_('WR', 100, 6, 52, 30), P_('SL', 135, 43, 12, 10)],
  },
  code: {
    wall: '#1d2340', trim: '#0f1226', wood: '#3a3f55', floor: '#3a3f55', floor2: '#2a2e40', accent: '#7ee787', dark: true, tags: ['tech'],
    small: [P_('W', 22, 8, 20, 15)],
    pieces: [P_('A', 4, 7, 14, 46), P_('WL', 22, 8, 20, 15), P_('B', 43, 19, 22, 34), P_('WR', 101, 8, 50, 26)],
  },
  hire: {
    wall: '#efe1cc', trim: '#b0814f', wood: '#8a5a34', floor: '#2f8f8a', floor2: '#3aa39d', accent: '#3b82f6', tags: ['office'],
    pieces: [P_('WL', 8, 6, 40, 28), P_('B', 48, 20, 13, 33), P_('WR', 101, 6, 50, 26), P_('SL', 100, 39, 52, 14)],
  },
  law: {
    wall: '#2f4f3e', trim: '#5a3319', wood: '#5a3319', floor: '#2b2d3a', floor2: '#ece8df', accent: '#b3202f', dark: true, books: LAWBOOKS, tags: ['library', 'lux'],
    small: [P_('W', 21, 6, 22, 28)],
    pieces: [P_('A', 4, 5, 15, 48), P_('WL', 21, 6, 22, 28), P_('B', 45, 19, 19, 34), P_('WR', 101, 6, 50, 15)],
  },
  consult: {
    wall: '#dde5ee', trim: '#9aa7b8', wood: '#7a8aa0', floor: '#9aa3b0', floor2: '#8d96a3', accent: '#3b82f6', tags: ['office'],
    pieces: [P_('WL', 8, 6, 40, 28), P_('B', 46, 10, 18, 43), P_('WR', 101, 6, 50, 28), P_('C', 90, 35, 11, 18)],
  },
}

const KIT_IDS = Object.keys(STYLES) as DojoKit[]

/* ------------------------------------------------------------------ */
/* La pièce d'origine, découpée en morceaux                            */
/* ------------------------------------------------------------------ */

/** une grille qui retient les cellules posées par les objets (et pas par
 *  les murs) · c'est le masque des morceaux réutilisables */
class Rec extends Grid {
  mask = new Uint8Array(FLOOR_W * FLOOR_H)
  blit(src: Grid, x: number, y: number) {
    for (let j = 0; j < src.h; j++) {
      for (let i = 0; i < src.w; i++) {
        const c = src.rawAt(i, j)
        if (!c) continue
        const X = x + i, Y = y + j
        if (X < 0 || Y < 0 || X >= FLOOR_W || Y >= FLOOR_H) continue
        this.set(X, Y, c)
        this.mask[Y * FLOOR_W + X] = 1
      }
    }
  }
}

const CAPTURES = new Map<string, Rec>()

function capture(kit: DojoKit, tint: string, paint: (g: Grid) => void): Rec {
  const key = `${kit}|${tint}`
  let g = CAPTURES.get(key)
  if (!g) {
    g = new Rec(FLOOR_W, FLOOR_H)
    paint(g)
    if (CAPTURES.size > 64) CAPTURES.clear()
    CAPTURES.set(key, g)
  }
  return g
}

function copyPiece(s: Grid, src: Rec, p: Piece, dx: number, dy: number) {
  for (let j = 0; j < p.h; j++) {
    for (let i = 0; i < p.w; i++) {
      const X = p.x + i, Y = p.y + j
      if (!src.mask[Y * FLOOR_W + X]) continue
      s.set(dx + i, dy + j, src.get(X, Y))
    }
  }
  for (const off of p.cords ?? []) s.vline(dx + off, 4, dy - 4, '#1b1530')
}

/* ------------------------------------------------------------------ */
/* La palette d'un étage                                               */
/* ------------------------------------------------------------------ */

/** sept décalages · teinte (degrés), saturation, clarté · aucun n'est nul,
 *  pour qu'un étage composé ne reprenne jamais exactement le premier */
const VARIANTS: [number, number, number][] = [
  [6, 0, 0.04], [-6, 0, -0.03], [10, -0.03, -0.01], [-10, 0.03, 0.02],
  [0, 0.06, -0.05], [0, -0.06, 0.05], [-3, 0, 0.08],
]

function palette(st: KitStyle, floor: number, tint: string): Pal {
  const [dh, ds, dl] = VARIANTS[floor % VARIANTS.length]
  const wall = tone(st.wall, dh, ds, dl)
  const dark = !!st.dark
  return {
    wall,
    alt: shade(wall, dark ? 0.08 : -0.06),
    deep: shade(wall, -0.25),
    light: shade(wall, dark ? 0.16 : 0.12),
    trim: tone(st.trim, dh * 0.5, 0, dl),
    wood: tone(st.wood, dh * 0.25, 0, dl * 0.5),
    paper: dark ? mix(PAPER, wall, 0.12) : PAPER,
    floor: tone(st.floor, -dh * 0.5, 0, dl * 0.6),
    floor2: tone(st.floor2, -dh * 0.5, 0, dl * 0.6),
    accent: st.accent,
    tint,
    dark,
    books: st.books ?? BOOKS,
  }
}

/** un ordre mélangé, fixe pour une spécialité */
function order(n: number, seed: string): number[] {
  const r = rng(hashString(seed))
  const a = Array.from({ length: n }, (_, i) => i)
  for (let i = n - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }
  return a
}

/* ------------------------------------------------------------------ */
/* La place libre · ce qui est déjà pris au mur et au sol               */
/* ------------------------------------------------------------------ */

class Room {
  /** le bas le plus bas permis à un objet mural, colonne par colonne */
  free = new Int16Array(FLOOR_W)
  /** le bas le plus bas des objets muraux déjà posés */
  wallLow = new Int16Array(FLOOR_W)
  /** les colonnes déjà occupées au mur */
  occ = new Uint8Array(FLOOR_W)
  constructor() {
    for (let x = 0; x < FLOOR_W; x++) {
      const ok = (x >= 5 && x <= 62) || (x >= 100 && x <= 154)
      this.free[x] = ok ? 37 : -1
      this.wallLow[x] = 3
    }
  }
  /** un objet mural de x à x + w - 1, du haut y au bas b, tient-il ? On
   *  tolère deux colonnes de recouvrement sur les bords (l'objet debout
   *  passe devant le cadre) */
  wallFits(x: number, w: number, b: number): boolean {
    for (let i = x - 1; i <= x + w; i++) {
      if (i < 0 || i >= FLOOR_W) return false
      if (this.occ[i]) return false
      const inner = i >= x + 2 && i <= x + w - 3
      if (this.free[i] < 0) return false
      if (inner && this.free[i] < b + 1) return false
    }
    return true
  }
  takeWall(x: number, w: number, b: number) {
    for (let i = x - 1; i <= x + w; i++) {
      if (i < 0 || i >= FLOOR_W) continue
      this.occ[i] = 1
      this.wallLow[i] = Math.max(this.wallLow[i], b + 1)
    }
  }
  /** un objet debout de x à x + w - 1, de sommet y */
  floorFits(x: number, w: number, y: number): boolean {
    for (let i = x + 2; i <= x + w - 3; i++) if (this.wallLow[i] > y - 3) return false
    return true
  }
  takeFloor(x: number, w: number, y: number) {
    for (let i = x - 1; i <= x + w; i++) if (i >= 0 && i < FLOOR_W) this.free[i] = Math.min(this.free[i], y - 3)
  }
}

/* ------------------------------------------------------------------ */
/* Les tirages selon l'ambiance                                        */
/* ------------------------------------------------------------------ */


/** un cycle d'objets propre à la spécialité · ceux de son ambiance y
 *  reviennent deux fois. Chaque étage le lit à partir d'un rang différent,
 *  si bien que deux étages voisins ne tirent pas les mêmes objets. */
function cycle(list: Prop[], tags: string[], seed: string): Prop[] {
  const r = rng(hashString(seed))
  const shuffle = <T,>(a: T[]) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] } return a }
  const fav = list.filter((p) => p.tags.some((t) => tags.includes(t)))
  const rest = shuffle(list.filter((p) => !fav.includes(p)))
  const favs = [...shuffle([...fav]), ...shuffle([...fav])]
  const out: Prop[] = []
  let i = 0
  while (favs.length || rest.length) {
    if (favs.length) out.push(favs.shift() as Prop)
    if (rest.length && (i++ % 2 === 1 || !favs.length)) out.push(rest.shift() as Prop)
  }
  return out
}

/** le cycle lu à partir du rang `start` */
const from = (a: Prop[], start: number) => { const k = ((start % a.length) + a.length) % a.length; return [...a.slice(k), ...a.slice(0, k)] }

const byId = (id: string) => PROPS.find((p) => p.id === id) as Prop

/* ------------------------------------------------------------------ */
/* Le compositeur                                                      */
/* ------------------------------------------------------------------ */

/** Un étage composé (floor >= 1) · peint dans `s`, sans la porte, les
 *  appliques ni la structure, que `drawFloor` ajoute ensuite. */
export function composeFloor(s: Grid, kit: DojoKit, tint: string, floor: number, topic: string, paintKit: (g: Grid) => void) {
  const st = STYLES[kit]
  const ki = KIT_IDS.indexOf(kit)
  const r = rng(hashString(`${kit}:${floor}:${topic}`))
  const P = palette(st, floor, tint)
  const c: Ctx = { s, r, P, tint, floor, view: (floor + ki * 3) % VIEWS.length }
  const used = new Set<string>()

  // 1 · les surfaces
  const wallT = order(WALLS.length, `${kit}:walls`)[floor % WALLS.length]
  const floorT = order(FLOORS.length, `${kit}:floors`)[floor % FLOORS.length]
  WALLS[wallT](s, P, r)
  const wy = 38 + ((floor * 5 + ki) % 3) * 3
  paintWain((floor * 4 + ki) % 9, s, P, r, wy)
  FLOORS[floorT](s, P, r)
  if (r() < 0.35) rug(s, P, r)

  const room = new Room()
  const src = capture(kit, tint, paintKit)
  const minTop = 6

  // 2 · l'objet signature de la spécialité, tour à tour
  const tp = topicProp(topic, floor, r)
  const pieces = st.pieces.filter((p) => !(tp && p.slot === 'B'))
  // deux étages sur trois montrent un morceau de la pièce d'origine
  const shows = (f: number) => (f + ki) % 3 !== 0
  let shown = 0
  for (let f = 1; f < floor; f++) if (shows(f)) shown++
  const piece: Piece | null = shows(floor) ? pieces[(shown + ki) % pieces.length] : null
  const taken = new Set<Slot>()
  let wlPiece: Piece | null = null, wrPiece: Piece | null = null
  if (piece?.slot === 'WL' && r() < 0.35) wrPiece = piece
  else if (piece?.slot === 'WL') wlPiece = piece
  else if (piece?.slot === 'WR') wrPiece = piece

  const placeFloorPiece = (p: Piece) => {
    copyPiece(s, src, p, p.x, p.y)
    room.takeFloor(p.x + 1, p.w - 2, p.y + 1)
    taken.add(p.slot)
  }

  // 3 · la fente B · l'objet du sujet, ou le morceau, ou un grand objet
  if (tp) {
    const x = 45 + Math.floor((17 - tp.w) / 2), y = 52 - tp.h
    tp.draw(c, x, y)
    room.takeFloor(x, tp.w, y)
    taken.add('B')
  } else if (piece?.slot === 'B') placeFloorPiece(piece)
  if (piece && (piece.slot === 'A' || piece.slot === 'C' || piece.slot === 'SL')) placeFloorPiece(piece)

  // 4 · les grands objets muraux · le morceau ou un héros tiré au sort
  const HEROES = ['window30', 'window24', 'window20', 'marumado', 'chalkboard', 'whiteboard', 'wave', 'cork', 'map', 'calligraphy', 'scrollrack', 'plantshelf', 'wallbooks30', 'trophies', 'sticky']
  const heroCycle = cycle(HEROES.map(byId), st.tags, `${kit}:heroes`)
  const placeHero = (lo: number, hi: number, center: number, p: Piece | null, start: number) => {
    if (p) {
      let dx = p.x
      if ((p.slot === 'WL') !== (lo < 80)) dx = Math.round(center - p.w / 2)
      dx = Math.max(lo, Math.min(hi - p.w + 1, dx))
      copyPiece(s, src, p, dx, p.y)
      room.takeWall(dx + 1, p.w - 2, p.y + p.h - 2)
      return
    }
    for (const h of from(heroCycle, start)) {
      if (used.has(h.id)) continue
      if (h.w > hi - lo + 1) continue
      const y = minTop + 1 + Math.floor(r() * Math.max(1, 34 - h.h - minTop))
      const base = Math.round(center - h.w / 2 + (r() - 0.5) * 8)
      for (const off of [0, -3, 3, -6, 6, -10, 10]) {
        const x = Math.max(lo, Math.min(hi - h.w + 1, base + off))
        if (!room.wallFits(x, h.w, y + h.h)) continue
        h.draw(c, x, y)
        room.takeWall(x, h.w, y + h.h)
        used.add(h.id)
        return
      }
    }
  }
  if (r() < 0.85 || wlPiece) placeHero(7, 60, 30, wlPiece, floor * 2)
  placeHero(101, 153, 126, wrPiece, floor * 2 + 5)

  // 5 · les fentes debout · A (x 5..17), B si libre, C (x 91..99)
  const tallCycle = cycle(PROPS.filter((p) => p.kind === 'tall'), st.tags, `${kit}:tall`)
  const narrowCycle = cycle(PROPS.filter((p) => p.kind === 'narrow'), st.tags, `${kit}:narrow`)
  const tall = from(tallCycle, floor * 3)
  const narrow = from(narrowCycle, floor * 2)
  const fillTall = (x0: number, wMax: number, list: Prop[], hMax = 46) => {
    for (const p of list) {
      if (used.has(p.id) || p.w > wMax || p.h > hMax) continue
      const x = x0 + Math.floor((wMax - p.w) / 2), y = 52 - p.h
      if (!room.floorFits(x, p.w, y)) continue
      p.draw(c, x, y)
      room.takeFloor(x, p.w, y)
      used.add(p.id)
      return true
    }
    return false
  }
  if (!taken.has('B')) fillTall(45, 16, tall)
  if (!taken.has('A') && r() < 0.9) fillTall(5, 13, from([...tall, ...narrow], 7))
  if (!taken.has('C') && r() < 0.65) fillTall(91, 9, narrow, 19)

  // 6 · les petits objets muraux dans la place qui reste
  const smallWall = from(cycle(PROPS.filter((p) => (p.kind === 'wall' || p.kind === 'hang') && p.w <= 26 && !HEROES.includes(p.id)), st.tags, `${kit}:small`), floor * 3)
  // un étage sur deux, un petit morceau de la pièce d'origine passe en tête
  const small = st.small ?? []
  if (small.length && (floor + ki) % 2 === 0) {
    const p = small[Math.floor(floor / 2) % small.length]
    smallWall.unshift({ id: `piece${p.x}`, kind: 'wall', w: p.w - 2, h: p.h - 2, tags: [], draw: (_c, x, y) => copyPiece(s, src, p, x - 1, y - 1) })
  }
  const fillGaps = (lo: number, hi: number) => {
    let x = lo
    let guard = 0
    while (x < hi - 8 && guard < 8) {
      if (room.occ[x] || room.free[x] < 18) { x++; continue }
      let e = x
      while (e <= hi && !room.occ[e] && room.free[e] >= 18) e++
      const gw = e - x
      guard++
      let placed = false
      for (const p of smallWall) {
        if (p.w + 3 > gw) continue
        if (used.has(p.id) && p.kind !== 'hang' && p.id !== 'clock' && !p.id.startsWith('kakemono')) continue
        const hang = p.kind === 'hang'
        const y = hang ? (p.id === 'lantern' ? 13 + Math.floor(r() * 7) : minTop + 2) : Math.max(minTop + 1, Math.min(34 - p.h, 20 - Math.floor(p.h / 2) + Math.floor((r() - 0.5) * 6)))
        const px = x + 1 + Math.floor((gw - p.w - 2) * (gw > p.w + 14 ? r() * 0.3 : 0.5))
        if (!room.wallFits(px, p.w, y + p.h)) continue
        p.draw(c, px, y)
        room.takeWall(px, p.w, y + p.h)
        used.add(p.id)
        placed = true
        break
      }
      if (!placed) x = e + 1
    }
  }
  fillGaps(5, 62)
  fillGaps(100, 154)

  // 7 · les objets bas · devant les élèves, puis un petit objet près du maître
  const low = (id: string) => byId(id)
  if (!taken.has('SL')) {
    const sets: [string[], string[]][] = [
      [['studytable'], ['school', 'library', 'zen']],
      [['teatable', 'bonsai'], ['zen', 'lux']],
      [['goban', 'ikebana'], ['zen']],
      [['desk'], ['office', 'tech']],
      [['bench', 'succulent'], ['office', 'school', 'craft']],
      [['chest', 'ikebana', 'incense'], ['zen', 'lux', 'library']],
      [['pouf', 'papers', 'succulent'], ['office', 'tech', 'craft']],
      [['hibachi', 'floorcandles', 'bookpile'], ['zen', 'library']],
      [['bookpile', 'chest', 'papers'], ['library', 'school']],
    ]
    const ranked = sets
      .map((e) => ({ e, k: Math.pow(r(), 1 / (e[1].some((t) => st.tags.includes(t)) ? 4 : 1)) }))
      .sort((a, b) => b.k - a.k)
    const pickSet = ranked[0].e[0]
    const items = pickSet.map(low)
    const total = items.reduce((n, p) => n + p.w, 0) + (items.length - 1) * 4
    let x = 101 + Math.floor(r() * Math.max(1, 52 - total))
    for (const p of items) { p.draw(c, x, 52 - p.h); x += p.w + 4 }
    if (r() < 0.4) cushions(c, 102, 150)
  }
  if (r() < 0.5) {
    const opts = ['incense', 'ikebana', 'succulent', 'bookpile', 'floorcandles', 'hibachi', 'papers']
    const p = low(opts[Math.floor(r() * opts.length)])
    const x = r() < 0.5 ? 19 : 43 - p.w
    p.draw(c, x, 52 - p.h)
  }
}
