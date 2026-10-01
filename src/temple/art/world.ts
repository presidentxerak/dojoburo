// LA CARTE DU MONDE · les temples des formations sur une carte vue de dessus,
// façon Zelda en pixel art 2D.
//
// Demandé : « Dans la bottom bar on a dojoburo avec la page des temples avec
// le nom du cours au-dessus en mode Zelda pixel art 2D ».
// Puis : « Améliore les décors de la carte mets des personnages qui marchent
// et vont et partent des temples agrandi les noms des temples, ajoute une
// rivière des bassin des parc zen etc… ».
//
// Ce fichier dessine le décor (herbe, chemin, rivière et ponts, bassins,
// jardins zen, parcs, arbres, lanternes, portes) et l'icône d'un temple ; un
// autre fichier pose les icônes sur les places réservées, écrit les noms
// au-dessus et fait marcher les promeneurs. Les promeneurs suivent
// `worldRoutes` : le chemin de terre peint et les itinéraires sortent du même
// calcul, ils ne peuvent pas se contredire. Tout est tiré de la graine : la
// même carte revient d'une visite à l'autre.
import { Grid, shade, rng, OUTLINE } from '../../pixel/grid'

/* ------------------------------------------------------------------ */
/* L'icône d'un temple, 40 × 44                                        */
/* ------------------------------------------------------------------ */

/** une couleur éteinte (temple verrouillé) */
function mute(hex: string): string {
  const n = parseInt(hex.slice(1), 16)
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255
  const l = 0.3 * r + 0.59 * g + 0.11 * b
  const m = (v: number) => Math.round((v * 0.35 + l * 0.65) * 0.85)
  return `#${((1 << 24) | (m(r) << 16) | (m(g) << 8) | m(b)).toString(16).slice(1)}`
}

/** un petit toit courbe, avant-toits relevés */
function miniRoof(g: Grid, cx: number, y: number, half: number, h: number, c: (x: string) => string, tint: string) {
  const tile = c(shade(tint, -0.15)), groove = c(shade(tint, -0.42)), edge = c(shade(tint, 0.5))
  for (let j = 0; j < h; j++) {
    const hw = Math.round(3 + (half - 3) * Math.pow((j + 1) / h, 1.6))
    for (let x = cx - hw; x <= cx + hw; x++) g.set(x, y + j, (x - cx + 40) % 3 === 0 ? groove : tile)
  }
  g.hline(cx - half, y + h - 1, half * 2 + 1, edge)
  g.set(cx - half - 1, y + h - 2, edge); g.set(cx + half + 1, y + h - 2, edge)
  g.hline(cx - 3, y, 7, c(shade(tint, -0.55)))
}

/** Un temple pour la carte, 40 × 44 · deux ou trois toits empilés selon
 *  `kitSeed`, couleur de la formation ; verrouillé : couleurs éteintes et
 *  cadenas sur la porte. */
export function drawTempleIcon(tint: string, kitSeed: number, locked: boolean): Grid {
  const out = new Grid(40, 44)
  const g = new Grid(40, 44)
  const c = (x: string) => (locked ? mute(x) : x)
  const r = rng(kitSeed * 2654435761 + 7)
  const tiers = 2 + (kitSeed % 2)
  const walls = ['#f6ead2', '#fff6e6', '#efe0c4'][kitSeed % 3]
  const pillar = c('#c23b2e')
  const cx = 19
  // le socle de pierre
  g.rect(3, 39, 34, 4, c('#b9b4c4'))
  g.hline(3, 39, 34, c('#dcd8e4'))
  for (let x = 5; x < 37; x += 6) g.vline(x, 40, 3, c('#8f8aa0'))
  g.rect(cx - 5, 41, 11, 2, c('#dcd8e4'))
  // le rez-de-chaussée
  g.rect(6, 28, 28, 11, c(walls))
  for (const x of [6, 7, 32, 33]) g.vline(x, 28, 11, pillar)
  g.hline(6, 28, 28, c(shade(walls, -0.2)))
  // la porte
  g.rect(cx - 4, 31, 9, 8, c('#5e3a20'))
  g.rect(cx - 3, 32, 3, 7, c('#ffd36b')); g.rect(cx + 1, 32, 3, 7, c('#ffd36b'))
  g.vline(cx, 31, 8, c('#5e3a20'))
  g.hline(cx - 3, 35, 7, c('#d29a5c'))
  // les fenêtres
  for (const x of [10, 26]) { g.rect(x, 31, 4, 4, c('#5e3a20')); g.rect(x + 1, 32, 2, 2, c(r() < 0.5 ? '#ffd36b' : '#fff1b0')) }
  // le premier toit
  miniRoof(g, cx, 21, 19, 7, c, tint)
  // les étages supérieurs
  let y = 21
  let half = 15
  for (let t = 1; t < tiers; t++) {
    const wh = 4
    const ww = half - 4
    g.rect(cx - ww, y - wh, ww * 2 + 1, wh, c(walls))
    g.vline(cx - ww, y - wh, wh, pillar); g.vline(cx + ww, y - wh, wh, pillar)
    g.rect(cx - 1, y - wh + 1, 3, 2, c('#ffd36b'))
    y -= wh + 6
    miniRoof(g, cx, y, half, 6, c, tint)
    half -= 4
  }
  // l'épi de faîtage
  g.vline(cx, y - 4, 4, c('#f5c542'))
  g.set(cx - 1, y - 2, c('#f5c542')); g.set(cx + 1, y - 2, c('#f5c542'))
  g.set(cx, y - 5, c('#fff1a8'))
  // le cadenas
  if (locked) {
    g.rect(cx - 2, 31, 5, 3, null)
    for (const [px, py] of [[cx - 2, 32], [cx - 2, 33], [cx + 2, 32], [cx + 2, 33], [cx - 1, 31], [cx, 31], [cx + 1, 31]]) g.set(px, py, '#9aa3b8')
    g.rect(cx - 3, 34, 7, 5, '#f5c542')
    g.hline(cx - 3, 34, 7, '#fff1a8')
    g.set(cx, 36, OUTLINE); g.set(cx, 37, OUTLINE)
  }
  g.outline()
  out.blit(g, 0, 0)
  return out
}

/* ------------------------------------------------------------------ */
/* Les itinéraires · le chemin peint et le chemin des promeneurs        */
/* ------------------------------------------------------------------ */

type Pt = { x: number; y: number }

/** la place pavée autour de chaque temple */
const PW = 46, PH = 50
/** le seuil, devant la porte : sur la bande pavée au pied du temple */
const STEP_Y = 20
/** la porte elle-même, sur l'icône */
const DOOR_Y = 14
/** les sorties latérales de la place, où le chemin de terre commence */
const PORT = 30

export interface WorldDoor {
  x: number
  y: number
  /** l'itinéraire qui passe par ce seuil (toujours 0, le chemin principal) */
  path: number
  /** l'indice du point de cet itinéraire qui EST ce seuil */
  at: number
}

export interface WorldRoutes {
  /** polylignes en px logiques de la carte, le long des chemins de terre
   *  peints (un point tous les 3 px environ) · paths[0] est le chemin
   *  principal, qui passe par le seuil de chaque temple dans l'ordre ;
   *  paths[1] est l'embranchement de l'entrée : son premier point est
   *  exactement paths[0][entranceAt], son dernier est `entrance` */
  paths: Pt[][]
  /** pour chaque place (même ordre), le seuil devant la porte du temple, où
   *  les promeneurs entrent et sortent, et le point du chemin qui le porte */
  doors: WorldDoor[]
  /** là où les promeneurs apparaissent et repartent (l'entrée du bas, sous
   *  la porte d'honneur, quelques px sous le bord : la carte est rognée) */
  entrance: Pt
  /** l'indice, sur paths[0], où l'embranchement de l'entrée se raccorde */
  entranceAt: number
}

type Leg = { kind: 'h' | 'v'; from: number; to: number }
interface Plan extends WorldRoutes { legs: Leg[] }

const rd1 = (v: number) => Math.round(v * 10) / 10

const lineF = (a: Pt, b: Pt) => (t: number): Pt => ({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t })
const cubicF = (a: Pt, b: Pt, c: Pt, d: Pt) => (t: number): Pt => {
  const u = 1 - t
  return {
    x: u * u * u * a.x + 3 * u * u * t * b.x + 3 * u * t * t * c.x + t * t * t * d.x,
    y: u * u * u * a.y + 3 * u * u * t * b.y + 3 * u * t * t * c.y + t * t * t * d.y,
  }
}

/** ajoute la courbe f(0..1) à `out`, rééchantillonnée à pas régulier le long
 *  de la courbe · f(0) est déjà le dernier point de `out`, f(1) est posé
 *  exactement (les seuils et les raccords tombent juste) */
function follow(out: Pt[], f: (t: number) => Pt, step = 3) {
  const N = 64
  const fine: Pt[] = [f(0)]
  const acc = [0]
  for (let k = 1; k <= N; k++) {
    const p = f(k / N), q = fine[k - 1]
    fine.push(p)
    acc.push(acc[k - 1] + Math.hypot(p.x - q.x, p.y - q.y))
  }
  const L = acc[N]
  const m = Math.max(1, Math.round(L / step))
  let j = 0
  for (let i = 1; i < m; i++) {
    const s = (L * i) / m
    while (j < N - 1 && acc[j + 1] < s) j++
    const seg = acc[j + 1] - acc[j] || 1
    const t = Math.min(1, (s - acc[j]) / seg)
    out.push({ x: rd1(fine[j].x + (fine[j + 1].x - fine[j].x) * t), y: rd1(fine[j].y + (fine[j + 1].y - fine[j].y) * t) })
  }
  out.push({ x: fine[N].x, y: fine[N].y })
}

/** LE RÉSEAU · un seul calcul pour le chemin peint et pour les promeneurs.
 *  Le chemin principal passe sur la bande pavée au pied de chaque temple
 *  (le seuil), sort de la place par le côté, et rejoint la place suivante :
 *  en courbe douce dans une rangée, en contournant par l'extérieur au bout
 *  d'une rangée (jamais à travers un temple). L'entrée part du bas de la
 *  carte et rejoint le chemin principal entre deux places. */
function planRoutes(w: number, h: number, spots: Pt[], seed: number): Plan {
  const r = rng(seed * 374761393 + 668265263)
  const n = spots.length
  const sill = (s: Pt): Pt => ({ x: s.x, y: s.y + STEP_Y })
  const port = (s: Pt, side: number): Pt => ({ x: s.x + side * PORT, y: s.y + STEP_Y })
  const main: Pt[] = []
  const doorAt: number[] = []
  const legs: Leg[] = []
  if (n) main.push(sill(spots[0]))
  let inPort: Pt | null = null
  for (let i = 0; i < n; i++) {
    const s = spots[i]
    if (inPort) follow(main, lineF(inPort, sill(s)))
    doorAt.push(main.length - 1)
    if (i + 1 >= n) break
    const t = spots[i + 1]
    const dx = t.x - s.x
    let out: Pt, inn: Pt, c1: Pt, c2: Pt, kind: 'h' | 'v'
    if (Math.abs(dx) >= 40) {
      const sd = dx > 0 ? 1 : -1
      out = port(s, sd); inn = port(t, -sd); kind = 'h'
      const ddx = inn.x - out.x
      // une courbe qui remonte un peu entre deux temples, parfois en S
      const up = -(3 + r() * 12), tw = (r() - 0.5) * 10
      c1 = { x: out.x + 0.4 * ddx, y: out.y + up + tw }
      c2 = { x: inn.x - 0.4 * ddx, y: inn.y + up - tw }
    } else {
      const sd = (s.x + t.x) / 2 >= w / 2 ? 1 : -1
      out = port(s, sd); inn = port(t, sd); kind = 'v'
      const ddy = inn.y - out.y
      c1 = { x: out.x + sd * 15, y: out.y + 0.3 * ddy }
      c2 = { x: inn.x + sd * 15, y: inn.y - 0.3 * ddy }
    }
    follow(main, lineF(sill(s), out))
    const from = main.length - 1
    follow(main, cubicF(out, c1, c2, inn))
    legs.push({ kind, from, to: main.length - 1 })
    inPort = inn
  }
  if (!main.length) main.push({ x: Math.round(w / 2), y: Math.round(h / 2) })

  // l'embranchement de l'entrée · le point du chemin le plus proche du bas
  // dont la descente ne traverse aucune place, de préférence vers le milieu
  let k = -1, best = Infinity
  for (let i = 0; i < main.length; i++) {
    const p = main[i]
    let ok = true
    for (const s of spots) {
      if (Math.abs(s.x - p.x) < PW / 2 + 9 && s.y + PH / 2 > p.y - 4) { ok = false; break }
    }
    if (!ok) continue
    const c = (h - p.y) + 0.5 * Math.abs(p.x - w / 2)
    if (c < best) { best = c; k = i }
  }
  if (k < 0) {
    k = 0
    for (let i = 1; i < main.length; i++) if (main[i].y > main[k].y) k = i
  }
  const J = main[k]
  const E = { x: Math.round(Math.max(12, Math.min(w - 12, J.x + (r() - 0.5) * 14))), y: h + 4 }
  const dy = E.y - J.y
  const branch: Pt[] = [{ x: J.x, y: J.y }]
  follow(branch, cubicF(J, { x: J.x, y: J.y + 0.5 * dy }, { x: E.x, y: E.y - 0.5 * dy }, E))
  return {
    paths: [main, branch],
    doors: spots.map((s, i) => ({ x: s.x, y: s.y + STEP_Y, path: 0, at: doorAt[i] })),
    entrance: E,
    entranceAt: k,
    legs,
  }
}

/** Le réseau des promeneurs, exactement le chemin que `drawWorld` peint
 *  (mêmes arguments, même résultat). */
export function worldRoutes(w: number, h: number, spots: { x: number; y: number }[], seed: number): WorldRoutes {
  const p = planRoutes(w, h, spots, seed)
  return { paths: p.paths, doors: p.doors, entrance: p.entrance, entranceAt: p.entranceAt }
}

/** l'itinéraire complet de l'entrée jusque dans le temple `i` : la montée
 *  depuis le bas, le chemin principal jusqu'au seuil, puis le pas de la porte */
export function walkToDoor(routes: WorldRoutes, i: number): Pt[] {
  const d = routes.doors[i]
  const branch = routes.paths[1] ?? []
  const main = routes.paths[0] ?? []
  const out: Pt[] = branch.slice().reverse()
  if (!d) return out
  const a = routes.entranceAt, b = d.at
  const dir = b >= a ? 1 : -1
  for (let k = a + dir; dir > 0 ? k <= b : k >= b; k += dir) out.push(main[k])
  out.push({ x: d.x, y: d.y - (STEP_Y - DOOR_Y) })
  return out
}

/** d'un temple à un autre, de seuil à seuil, le long du chemin principal */
export function walkBetween(routes: WorldRoutes, i: number, j: number): Pt[] {
  const main = routes.paths[0] ?? []
  const a = routes.doors[i]?.at ?? 0, b = routes.doors[j]?.at ?? 0
  return a <= b ? main.slice(a, b + 1) : main.slice(b, a + 1).reverse()
}

/* ------------------------------------------------------------------ */
/* La carte                                                            */
/* ------------------------------------------------------------------ */

const GRASS = '#5cbf4a'
const GRASS_D = '#4caa3e'
const GRASS_L = '#74d05c'
const DIRT = '#dcb878'
const DIRT_D = '#b8925a'
const WATER = '#3f8fe0'
const WATER_D = '#2c6fbe'
const WATER_C = '#4b9cec'
const WATER_L = '#8fd0ff'
const SAND = '#ead9a0'
const SAND_W = '#d9c58c'
const STONE = '#b9b4c4'
const STONE_L = '#dcd8e4'
const STONE_D = '#8f8aa0'
const RED = '#d8402f'
const RED_D = '#9e2a22'
const RED_L = '#ff7058'
const GOLD = '#f5c542'
const WOOD = '#c08450'
const WOOD_L = '#dca06a'
const WOOD_D = '#7a4a2a'
const TRUNK = '#6e4128'
const TRUNK_L = '#8c5634'

/** un bruit doux (valeurs aléatoires sur une grille, interpolées) */
function valueNoise(w: number, h: number, cell: number, r: () => number) {
  const cw = Math.ceil(w / cell) + 2, ch = Math.ceil(h / cell) + 2
  const v = Array.from({ length: cw * ch }, () => r())
  return (x: number, y: number) => {
    const gx = Math.max(0, x) / cell, gy = Math.max(0, y) / cell
    const x0 = Math.min(cw - 2, Math.floor(gx)), y0 = Math.min(ch - 2, Math.floor(gy))
    const fx = gx - x0, fy = gy - y0
    const a = v[y0 * cw + x0], b = v[y0 * cw + x0 + 1], c = v[(y0 + 1) * cw + x0], d = v[(y0 + 1) * cw + x0 + 1]
    const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy)
    return a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy
  }
}

/** le même bruit, calculé d'un coup pour toute la carte (rapide) */
function noiseField(w: number, h: number, cell: number, r: () => number): Float32Array {
  const cw = Math.ceil(w / cell) + 2, ch = Math.ceil(h / cell) + 2
  const v = new Float32Array(cw * ch)
  for (let i = 0; i < v.length; i++) v[i] = r()
  const out = new Float32Array(w * h)
  const sxs = new Float32Array(w), x0s = new Int32Array(w)
  for (let x = 0; x < w; x++) {
    const gx = x / cell, x0 = Math.floor(gx), fx = gx - x0
    x0s[x] = x0; sxs[x] = fx * fx * (3 - 2 * fx)
  }
  for (let y = 0; y < h; y++) {
    const gy = y / cell, y0 = Math.floor(gy), fy = gy - y0
    const sy = fy * fy * (3 - 2 * fy)
    const r0 = y0 * cw, r1 = r0 + cw
    for (let x = 0; x < w; x++) {
      const x0 = x0s[x], sx = sxs[x]
      const a = v[r0 + x0], b = v[r0 + x0 + 1], c = v[r1 + x0], d = v[r1 + x0 + 1]
      out[y * w + x] = a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy
    }
  }
  return out
}

/** un hachage de cellule, pour les motifs fixes (pierres, gravier) */
const cellHash = (x: number, y: number) => {
  let v = Math.imul(x * 374761393 + y * 668265263, 1274126177)
  v ^= v >>> 13
  return ((Math.imul(v, 1103515245) >>> 8) & 1023) / 1024
}

class Mask {
  readonly a: Uint8Array
  constructor(readonly w: number, readonly h: number) { this.a = new Uint8Array(w * h) }
  get(x: number, y: number) { return x >= 0 && y >= 0 && x < this.w && y < this.h ? this.a[y * this.w + x] : 0 }
  set(x: number, y: number, v = 1) { if (x >= 0 && y >= 0 && x < this.w && y < this.h) this.a[y * this.w + x] = v }
  disc(cx: number, cy: number, rad: number) {
    const y0 = Math.max(0, Math.floor(cy - rad)), y1 = Math.min(this.h - 1, Math.ceil(cy + rad))
    const x0 = Math.max(0, Math.floor(cx - rad)), x1 = Math.min(this.w - 1, Math.ceil(cx + rad))
    const r2 = rad * rad
    for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) if ((x - cx) ** 2 + (y - cy) ** 2 <= r2) this.a[y * this.w + x] = 1
  }
  rect(x: number, y: number, w: number, h: number) {
    const x0 = Math.max(0, x), y0 = Math.max(0, y), x1 = Math.min(this.w, x + w), y1 = Math.min(this.h, y + h)
    for (let j = y0; j < y1; j++) this.a.fill(1, j * this.w + x0, j * this.w + x1)
  }
  anyIn(x: number, y: number, w: number, h: number) {
    const x0 = Math.max(0, x), y0 = Math.max(0, y), x1 = Math.min(this.w, x + w), y1 = Math.min(this.h, y + h)
    for (let j = y0; j < y1; j++) for (let i = x0; i < x1; i++) if (this.a[j * this.w + i]) return true
    return false
  }
  /** au moins un voisin vide à distance d (bord du masque) */
  edge(x: number, y: number, d = 1) {
    return !this.get(x - d, y) || !this.get(x + d, y) || !this.get(x, y - d) || !this.get(x, y + d)
  }
}

/** une table des sommes, pour savoir en un coup si un rectangle est libre */
function summed(m: Mask) {
  const W = m.w + 1
  const s = new Int32Array(W * (m.h + 1))
  for (let y = 0; y < m.h; y++) {
    let row = 0
    for (let x = 0; x < m.w; x++) {
      row += m.a[y * m.w + x]
      s[(y + 1) * W + x + 1] = s[y * W + x + 1] + row
    }
  }
  return (x: number, y: number, w: number, h: number) => {
    const x0 = Math.max(0, x), y0 = Math.max(0, y), x1 = Math.min(m.w, x + w), y1 = Math.min(m.h, y + h)
    if (x1 <= x0 || y1 <= y0) return 0
    return s[y1 * W + x1] - s[y0 * W + x1] - s[y1 * W + x0] + s[y0 * W + x0]
  }
}

/* --- les objets du décor, chacun sur sa grille contourée -------------- */

function tree(r: () => number): Grid {
  const g = new Grid(16, 18, 1, 1)
  const leaf = ['#2f9e44', '#37a84a', '#2b8f3e'][Math.floor(r() * 3)]
  g.rect(6, 11, 3, 5, '#7a4a2a'); g.vline(6, 11, 5, '#9a6236')
  for (let y = 0; y < 13; y++) for (let x = 0; x < 14; x++) {
    const d = Math.hypot((x - 6.5) / 7, (y - 6) / 6.5)
    if (d > 1) continue
    let c = leaf
    if (y > 8 && d > 0.55) c = shade(leaf, -0.3)
    else if (d < 0.5 && x < 7 && y < 6) c = shade(leaf, 0.25)
    g.set(x, y, c)
  }
  for (const [x, y] of [[4, 3], [5, 2], [9, 5], [3, 7]]) g.set(x, y, shade(leaf, 0.45))
  g.outline()
  return g
}

type Canopy = { base: string; shade: string; deep: string; hi: string; dot: string }
const CHERRY: Canopy = { base: '#ffb1cc', shade: '#f28ab3', deep: '#d96a98', hi: '#ffd8e8', dot: '#ffffff' }
const MAPLES: Canopy[] = [
  { base: '#e8492e', shade: '#c4361f', deep: '#982818', hi: '#ff7d52', dot: '#ffb04a' },
  { base: '#f2782e', shade: '#d4591f', deep: '#a8441a', hi: '#ffa65a', dot: '#ffd36b' },
]

/** un arbre en fleurs ou un érable · une couronne en grappe de boules */
function blossom(r: () => number, p: Canopy): Grid {
  const g = new Grid(20, 20, 1, 1)
  g.rect(8, 12, 3, 6, TRUNK); g.vline(8, 12, 6, TRUNK_L)
  g.set(7, 17, TRUNK); g.set(11, 17, TRUNK)
  g.set(6, 11, TRUNK); g.set(12, 10, TRUNK)
  const j = () => (r() - 0.5) * 1.4
  const blobs: [number, number, number][] = [
    [9 + j(), 7 + j(), 5.6], [4.4 + j(), 8.6 + j(), 3.9], [13.6 + j(), 8.6 + j(), 3.9], [9 + j(), 3.4 + j(), 4.1],
  ]
  for (let y = 0; y < 14; y++) for (let x = 0; x < 18; x++) {
    let bi = -1, bd = 9
    for (let b = 0; b < blobs.length; b++) {
      const [bx, by, br] = blobs[b]
      const d = Math.hypot(x - bx, y - by) / br
      if (d <= 1 && d < bd) { bd = d; bi = b }
    }
    if (bi < 0) continue
    const [bx, by, br] = blobs[bi]
    const ry = (y - by) / br, rx = (x - bx) / br
    let c = p.base
    if (ry > 0.7) c = p.deep
    else if (ry > 0.35 || rx > 0.6) c = p.shade
    else if (rx < -0.1 && ry < -0.15) c = p.hi
    g.set(x, y, c)
  }
  for (let i = 0; i < 9; i++) {
    const x = 2 + Math.floor(r() * 14), y = 1 + Math.floor(r() * 10)
    if (g.get(x, y) && g.get(x, y) !== p.deep) g.set(x, y, p.dot)
  }
  g.outline()
  return g
}

/** un pin en étages */
function pine(r: () => number): Grid {
  const g = new Grid(17, 22, 1, 1)
  const base = r() < 0.5 ? '#2a7d4f' : '#2f8a52', dark = '#1d5c3a', hi = '#47a868'
  g.rect(6, 16, 3, 4, TRUNK); g.vline(6, 16, 4, TRUNK_L)
  for (let k = 0; k < 3; k++) {
    const top = k * 5, height = 7, half = 3 + k * 2
    for (let jj = 0; jj < height; jj++) {
      const hw = Math.round(1 + (half - 1) * (jj / (height - 1)))
      for (let x = 7 - hw; x <= 7 + hw; x++) {
        let c = base
        if (jj === height - 1 || x - 7 > hw * 0.35) c = dark
        else if (x - 7 < -hw * 0.4) c = hi
        g.set(x, top + jj, c)
      }
    }
  }
  g.set(7, 0, hi)
  g.outline()
  return g
}

/** une touffe de bambous */
function bamboo(r: () => number): Grid {
  const g = new Grid(15, 25, 1, 1)
  const xs = [1, 4, 7, 10].filter(() => r() < 0.85)
  if (xs.length < 2) xs.push(5)
  for (const x of xs) {
    const top = 1 + Math.floor(r() * 5)
    for (let y = top; y < 22; y++) {
      const node = (y - top) % 5 === 4
      g.set(x, y, node ? '#5e9a36' : '#9bd35a'); g.set(x + 1, y, node ? '#4a7f2a' : '#6fae40')
    }
    for (let l = 0; l < 3; l++) {
      const ly = top + 1 + l * 3 + Math.floor(r() * 2)
      const sd = r() < 0.5 ? -1 : 1
      const lc = l % 2 ? '#4f9e3a' : '#6cbf4a'
      for (let q = 1; q <= 3; q++) g.set(x + (sd > 0 ? 1 : 0) + sd * q, ly - (q > 2 ? 1 : 0), lc)
    }
  }
  g.outline()
  return g
}

function bush(r: () => number): Grid {
  const g = new Grid(10, 8, 1, 1)
  const c = r() < 0.5 ? '#3fae4e' : '#46b85a'
  g.round(0, 1, 8, 5, c); g.round(1, 0, 6, 3, c)
  g.hline(1, 5, 6, shade(c, -0.3))
  g.set(2, 1, shade(c, 0.4)); g.set(5, 2, shade(c, 0.4))
  if (r() < 0.45) {
    const f = ['#ff5a7a', '#ffffff', '#ffd23f', '#c98bff'][Math.floor(r() * 4)]
    g.set(3, 3, f); g.set(6, 2, f); g.set(1, 3, f)
  }
  g.outline()
  return g
}

function rock(r: () => number, big = r() < 0.5): Grid {
  const g = new Grid(10, 8, 1, 1)
  const w = big ? 8 : 5, h = big ? 6 : 4
  g.round(0, 0, w, h, '#a7a2b3')
  g.hline(1, 0, w - 2, '#cfcad9'); g.set(1, 1, '#e6e2ee')
  g.hline(1, h - 1, w - 2, '#7d788c')
  if (big) { g.set(w - 2, 1, '#cfcad9'); g.set(2, h - 2, '#7d788c') }
  g.outline()
  return g
}

/** une lanterne de pierre (tōrō) · 7 × 13, contour compris 9 × 15 */
function lantern(): Grid {
  const g = new Grid(9, 15, 1, 1)
  g.set(3, 0, STONE_L)
  g.hline(2, 1, 3, STONE_L)
  g.hline(0, 2, 7, STONE_L); g.hline(0, 3, 7, STONE_D)
  g.rect(1, 4, 5, 3, STONE); g.rect(2, 5, 3, 1, '#ffd36b'); g.set(3, 5, '#fff1a8'); g.hline(1, 6, 5, STONE_D)
  g.hline(0, 7, 7, STONE_L)
  g.rect(2, 8, 3, 3, STONE); g.vline(2, 8, 3, STONE_L)
  g.rect(1, 11, 5, 2, STONE_D); g.hline(1, 11, 5, STONE)
  g.outline()
  return g
}

/** un banc de bois */
function bench(): Grid {
  const g = new Grid(13, 7, 1, 1)
  g.hline(0, 0, 11, TRUNK_L)
  g.set(1, 1, WOOD_D); g.set(9, 1, WOOD_D)
  g.rect(0, 2, 11, 2, WOOD); g.hline(0, 2, 11, WOOD_L)
  g.set(1, 4, WOOD_D); g.set(9, 4, WOOD_D)
  g.outline()
  return g
}

/** un petit torii sur le chemin · centre en colonne 13 de la grille, les
 *  piliers à 8 px de part et d'autre, le pied en ligne 19 */
function torii(): Grid {
  const g = new Grid(27, 21, 1, 1)
  const K = '#2a2030'
  g.hline(1, 1, 23, K); g.set(0, 0, K); g.set(24, 0, K)
  g.hline(0, 2, 25, RED); g.hline(1, 3, 23, RED_D)
  g.rect(11, 4, 3, 3, RED); g.set(12, 5, GOLD)
  g.hline(2, 7, 21, RED); g.hline(2, 8, 21, RED_D)
  g.rect(3, 4, 2, 13, RED); g.vline(4, 4, 13, RED_D)
  g.rect(20, 4, 2, 13, RED); g.vline(21, 4, 13, RED_D)
  g.set(3, 4, RED_L); g.set(20, 4, RED_L)
  g.rect(2, 17, 4, 2, K); g.rect(19, 17, 4, 2, K)
  g.outline()
  return g
}

/** la porte d'honneur de l'entrée, deux toits · centre en colonne 21, le
 *  pied en ligne 34 */
function gate(): Grid {
  const g = new Grid(43, 36, 1, 1)
  const roof = '#2f5266', roofL = '#5b8aa2', roofD = '#1f3646'
  g.vline(20, 0, 2, GOLD); g.set(20, 0, '#fff1a8')
  for (let j = 0; j < 4; j++) {
    const hw = Math.round(5 + j * 3.4)
    for (let x = 20 - hw; x <= 20 + hw; x++) g.set(x, 2 + j, (x + 40) % 3 === 0 ? roofD : roof)
  }
  g.hline(2, 6, 37, roofL); g.set(1, 5, roofL); g.set(39, 5, roofL)
  g.rect(11, 7, 19, 4, RED); g.hline(11, 10, 19, RED_D)
  g.rect(16, 7, 9, 3, GOLD); g.hline(17, 8, 7, '#b8860b'); g.set(20, 8, OUTLINE)
  for (let j = 0; j < 4; j++) {
    const hw = Math.round(11 + j * 2.6)
    for (let x = 20 - hw; x <= 20 + hw; x++) g.set(x, 11 + j, (x + 40) % 3 === 0 ? roofD : roof)
  }
  g.hline(0, 15, 41, roofL); g.set(0, 14, roofL); g.set(40, 14, roofL)
  g.hline(5, 16, 31, RED); g.hline(5, 17, 31, RED_D)
  g.rect(8, 16, 3, 16, RED); g.vline(10, 16, 16, RED_D); g.vline(8, 16, 16, RED_L)
  g.rect(30, 16, 3, 16, RED); g.vline(32, 16, 16, RED_D); g.vline(30, 16, 16, RED_L)
  g.hline(8, 22, 25, RED_D)
  g.rect(7, 30, 5, 3, STONE); g.hline(7, 30, 5, STONE_L)
  g.rect(29, 30, 5, 3, STONE); g.hline(29, 30, 5, STONE_L)
  g.outline()
  return g
}

/** le mur d'enceinte, plâtre blanc et tuiles · lignes 0 à 8 */
function wall(w: number, segs: [number, number][]): Grid {
  const g = new Grid(w, 12, 0, 1)
  for (const [a, b] of segs) {
    for (let x = a; x < b; x++) {
      g.set(x, 0, '#5b8aa2')
      g.set(x, 1, (x % 3 === 0) ? '#1f3646' : '#2f5266')
      g.set(x, 2, '#1f3646')
      for (let y = 3; y < 8; y++) g.set(x, y, y === 3 ? '#d8ccb4' : '#f4ead8')
      g.set(x, 8, (x % 4 === 0) ? STONE_D : STONE)
      if (x % 16 === 8) for (let y = 3; y < 8; y++) g.set(x, y, WOOD_D)
    }
  }
  g.outline()
  return g
}

/** une petite pierre de gué, ou un rocher de jardin zen */
function stone(rad: number, moss: boolean): Grid {
  const s = Math.ceil(rad * 2) + 3
  const g = new Grid(s + 2, s + 2, 1, 1)
  const c = (s - 1) / 2
  for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) {
    const dx = (x - c) / (rad + 0.5), dy = (y - c) / (rad * 0.8 + 0.5)
    const d = dx * dx + dy * dy
    if (d > 1) continue
    let col = '#a7a2b3'
    if (dy > 0.35) col = '#7d788c'
    else if (dy < -0.25 && dx < 0.3) col = '#d6d1de'
    g.set(x, y, col)
  }
  if (moss) for (let x = 0; x < s; x++) {
    for (let y = s - 1; y >= 0; y--) if (g.get(x, y)) { if (cellHash(x, y) < 0.6) g.set(x, y, '#5a9a3a'); break }
  }
  g.outline()
  return g
}

/* --- la carte ---------------------------------------------------------- */

type FeatKind = 'pond' | 'zen' | 'park' | 'fountain' | 'bed'
type Feat = { kind: FeatKind; x: number; y: number; w: number; h: number; v: number }

const SIZES: Record<FeatKind, [number, number][]> = {
  pond: [[66, 38], [58, 34], [50, 30], [42, 26]],
  zen: [[64, 38], [56, 34], [48, 30], [40, 26]],
  park: [[60, 42], [50, 36], [42, 32]],
  fountain: [[34, 30], [30, 27], [26, 24]],
  bed: [[22, 10], [16, 9]],
}

/** Le fond de la carte, w × h · herbe, chemin qui passe au pied de chaque
 *  temple dans l'ordre, une place pavée de 46 × 50 autour de chaque centre,
 *  une rivière et ses ponts rouges, des bassins (nénuphars, carpes koï, pierres
 *  de gué), des jardins zen (gravier ratissé, rochers, mousse), des parcs de
 *  cerisiers en fleurs, une fontaine, des massifs, des lanternes, des torii,
 *  et la porte d'honneur de l'entrée. */
export function drawWorld(w: number, h: number, spots: { x: number; y: number }[], seed: number): Grid {
  const g = new Grid(w, h)
  const r = rng(seed * 2246822519 + 3266489917)
  const plan = planRoutes(w, h, spots, seed)
  // les objets, tirés une fois chacun en quelques variantes puis réutilisés
  const pool = (n: number, make: (i: number) => Grid) => {
    const a = Array.from({ length: n }, (_, i) => make(i))
    return () => a[Math.floor(r() * a.length)]
  }
  const pinkTrees = new Set<Grid>()
  const P = {
    cherry: pool(6, () => { const t = blossom(r, CHERRY); pinkTrees.add(t); return t }),
    maple: pool(6, (i) => blossom(r, MAPLES[i % MAPLES.length])),
    tree: pool(6, () => tree(r)),
    pine: pool(4, () => pine(r)),
    bamboo: pool(4, () => bamboo(r)),
    bush: pool(8, () => bush(r)),
    rock: pool(4, () => rock(r)),
    bigRock: pool(2, () => rock(r, true)),
    lantern: pool(1, () => lantern()),
    bench: pool(1, () => bench()),
  }

  // 1. l'herbe et sa texture
  const noise = noiseField(w, h, 24, r)
  const fine = noiseField(w, h, 6, r)
  const biome = valueNoise(w, h, 90, r)
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const n = noise[y * w + x] * 0.7 + fine[y * w + x] * 0.3
    g.set(x, y, n > 0.62 ? GRASS_D : n < 0.3 ? GRASS_L : GRASS)
  }
  const tuft: Record<string, string> = { [GRASS]: shade(GRASS, -0.2), [GRASS_D]: shade(GRASS_D, -0.2), [GRASS_L]: shade(GRASS_L, -0.2) }
  for (let i = 0; i < (w * h) / 55; i++) {
    const x = Math.floor(r() * w), y = Math.floor(r() * h)
    const c = tuft[g.get(x, y) ?? GRASS] ?? tuft[GRASS]
    g.set(x, y, c); g.set(x - 1, y - 1, c); g.set(x + 1, y - 1, c)
  }
  for (let i = 0; i < (w * h) / 400; i++) {
    const x = Math.floor(r() * w), y = Math.floor(r() * h)
    g.set(x, y, '#8ee070')
  }

  // 2. les masques · places, chemin, abords du chemin, cartouches des noms
  const plaza = new Mask(w, h)
  const path = new Mask(w, h)
  const near = new Mask(w, h)
  const label = new Mask(w, h)
  for (const s of spots) {
    plaza.rect(Math.round(s.x - PW / 2), Math.round(s.y - PH / 2), PW, PH)
    label.rect(Math.round(s.x - 46), Math.round(s.y - PH / 2 - 24), 92, 24)
  }
  for (const line of plan.paths) {
    for (let i = 0; i < line.length; i++) {
      const a = line[i], b = line[i + 1] ?? a
      const n = Math.max(1, Math.ceil(Math.hypot(b.x - a.x, b.y - a.y)))
      for (let k = 0; k < n; k++) path.disc(a.x + ((b.x - a.x) * k) / n, a.y + ((b.y - a.y) * k) / n, 4.5)
      if (i % 2 === 0 || i === line.length - 1) near.disc(a.x, a.y, 11)
    }
  }

  // 3. la rivière · une bande sinueuse d'un bord à l'autre, entre deux
  // rangées de temples, qui coupe le chemin le moins possible (un pont)
  const river = chooseRiver(w, h, spots, path, label, r)
  const rdist = new Float32Array(w * h).fill(99)
  const water = new Mask(w, h)
  const bank = new Mask(w, h)
  const RB = 3
  if (river) {
    const span = river.vertical ? h : w
    for (let u = 0; u < span; u++) {
      const c = river.c(u), hw = river.hw(u)
      for (let v = Math.floor(c - hw - RB - 1); v <= Math.ceil(c + hw + RB + 1); v++) {
        const x = river.vertical ? v : u, y = river.vertical ? u : v
        if (x < 0 || y < 0 || x >= w || y >= h) continue
        const d = Math.abs(v - c) - hw
        rdist[y * w + x] = d
        if (d <= 0) water.set(x, y)
        else if (d <= RB) bank.set(x, y)
      }
    }
  }
  const inRiver = (x: number, y: number, m = 0) => {
    const X = Math.round(x), Y = Math.round(y)
    return X >= 0 && Y >= 0 && X < w && Y < h && rdist[Y * w + X] <= RB + m
  }

  // 4. ce qui se pose sur le chemin · ponts, torii, porte d'honneur, mur
  const solid = new Mask(w, h)
  const busy = new Mask(w, h)
  const sprites: { x: number; y: number; g: Grid; z: number }[] = []
  const addSprite = (x: number, y: number, sg: Grid, z = 0) => {
    sprites.push({ x, y, g: sg, z: y + sg.h + z })
  }
  // les ponts · chaque passage du chemin sur l'eau
  type Bridge = { pts: Pt[]; vertical: boolean }
  const bridges: Bridge[] = []
  for (const line of plan.paths) {
    let i = 0
    while (i < line.length) {
      if (!inRiver(line[i].x, line[i].y, 1)) { i++; continue }
      let j = i
      while (j + 1 < line.length && inRiver(line[j + 1].x, line[j + 1].y, 1)) j++
      const a = Math.max(0, i - 2), b = Math.min(line.length - 1, j + 2)
      const pts = line.slice(a, b + 1)
      const dx = pts[pts.length - 1].x - pts[0].x, dy = pts[pts.length - 1].y - pts[0].y
      bridges.push({ pts, vertical: Math.abs(dy) >= Math.abs(dx) })
      for (const p of pts) solid.rect(Math.round(p.x) - 9, Math.round(p.y) - 9, 19, 19)
      i = j + 1
    }
  }
  // les torii · au milieu des virages de bout de rangée sans pont
  const toriiAt: Pt[] = []
  for (const leg of plan.legs) {
    if (leg.kind !== 'v') continue
    const main = plan.paths[0]
    let wet = false
    for (let k = leg.from; k <= leg.to; k++) if (inRiver(main[k].x, main[k].y, 14)) wet = true
    if (wet) continue
    const span = leg.to - leg.from
    let bk = -1, bdx = 9
    for (let k = leg.from + Math.floor(span * 0.3); k <= leg.to - Math.floor(span * 0.3); k++) {
      const dx = Math.abs(main[Math.min(leg.to, k + 1)].x - main[Math.max(leg.from, k - 1)].x)
      if (dx < bdx) { bdx = dx; bk = k }
    }
    if (bk >= 0) toriiAt.push(main[bk])
  }
  const tg = torii()
  toriiAt.forEach((p, i) => {
    if (toriiAt.length > 3 && i % 2 === 1) return
    const x = Math.round(p.x) - 13, y = Math.round(p.y) - 15
    if (plaza.anyIn(x, y, tg.w, tg.h)) return
    addSprite(x, y, tg)
    solid.rect(x, y, tg.w, tg.h)
  })
  // la porte d'honneur et le mur d'enceinte, au bas de la carte
  const branch = plan.paths[1]
  let gateY = -1
  if (branch && spots.length) {
    let gi = 0
    for (let i = 0; i < branch.length; i++) if (Math.abs(branch[i].y - (h - 11)) < Math.abs(branch[gi].y - (h - 11))) gi = i
    const gp = branch[gi]
    const gx = Math.round(gp.x), gy = Math.round(gp.y)
    const top = gy - 33
    if (!plaza.anyIn(gx - 21, top, 43, 36) && !water.anyIn(gx - 21, top, 43, 36) && gy > h - 20) {
      gateY = gy
      const gg = gate()
      addSprite(gx - 21, gy + 3 - 34, gg, 0.5)
      solid.rect(gx - 21, top, 43, 37)
      // le mur, de la porte vers chaque bord, tant que rien ne l'arrête
      const segs: [number, number][] = []
      const wy0 = gy - 7, wy1 = gy + 2
      const blockedCol = (x: number) => plaza.anyIn(x, wy0, 1, wy1 - wy0) || bank.anyIn(x, wy0, 1, wy1 - wy0) || water.anyIn(x, wy0, 1, wy1 - wy0) || (path.anyIn(x, wy0, 1, wy1 - wy0) && Math.abs(x - gx) > 14)
      let x = gx - 12
      while (x >= 0 && !blockedCol(x)) x--
      if (gx - 12 - x > 6) segs.push([x + 1, gx - 11])
      x = gx + 12
      while (x < w && !blockedCol(x)) x++
      if (x - (gx + 12) > 6) segs.push([gx + 12, x])
      if (segs.length) {
        const wg = wall(w, segs)
        addSprite(0, gy - 7 - 1, wg)
        for (const [a, b] of segs) solid.rect(a - 1, gy - 9, b - a + 2, 12)
        // et sous le mur, une haie basse : pas d'arbre
        solid.rect(0, gy + 2, w, h - gy)
      }
      // deux lanternes devant la porte
      const lg = P.lantern()
      for (const lx of [gx - 25, gx + 16]) {
        const ly = Math.min(h - 15, gy - 2)
        if (!path.anyIn(lx, ly, 9, 15) && !water.anyIn(lx, ly, 9, 15)) { addSprite(lx, ly, lg, 1); solid.rect(lx, ly, 9, 15) }
      }
    }
  }
  // les lanternes de part et d'autre de chaque temple
  const lgT = P.lantern()
  for (const s of spots) {
    for (const lx of [s.x - 33, s.x + 25]) {
      const ly = s.y
      if (path.anyIn(lx, ly, 9, 15) || plaza.anyIn(lx, ly, 9, 15) || water.anyIn(lx, ly, 9, 15) || bank.anyIn(lx, ly, 9, 15) || solid.anyIn(lx, ly, 9, 15)) continue
      if (lx < 0 || lx + 9 > w) continue
      addSprite(lx, ly, lgT)
      solid.rect(lx, ly, 9, 15)
    }
  }

  // 5. les grands décors · bassins, jardins zen, parcs, fontaine, massifs,
  // dans l'espace libre entre les places, loin du chemin, de l'eau, des noms
  const block = new Mask(w, h)
  for (const s of spots) block.rect(Math.round(s.x - PW / 2) - 6, Math.round(s.y - PH / 2) - 6, PW + 12, PH + 12)
  for (let i = 0; i < w * h; i++) {
    if (near.a[i] || label.a[i] || solid.a[i] || rdist[i] <= RB + 5) block.a[i] = 1
  }
  const free = summed(block)
  const pathSum = summed(near)
  const feats: Feat[] = []
  // LA RECHERCHE · pour chaque taille, la liste des positions libres, et pour
  // chacune la distance au décor le plus proche, tenue à jour à chaque pose
  type Cands = { kind: FeatKind; fw: number; fh: number; xy: Int32Array; alive: Uint8Array; dAll: Float32Array; dSame: Float32Array; base: Float32Array }
  const candsOf = new Map<string, Cands>()
  const apply = (c: Cands, f: Feat) => {
    const gap = c.kind === 'bed' ? 6 : 10
    const fx = f.x + f.w / 2, fy = f.y + f.h / 2
    for (let k = 0, n = c.alive.length; k < n; k++) {
      if (!c.alive[k]) continue
      const x = c.xy[2 * k], y = c.xy[2 * k + 1]
      if (x < f.x + f.w + gap && x + c.fw + gap > f.x && y < f.y + f.h + gap && y + c.fh + gap > f.y) { c.alive[k] = 0; continue }
      const dx = x + c.fw / 2 - fx, dy = y + c.fh / 2 - fy
      const d = dx * dx + dy * dy
      if (d < c.dAll[k]) c.dAll[k] = d
      if (f.kind === c.kind && d < c.dSame[k]) c.dSame[k] = d
    }
  }
  const candsFor = (kind: FeatKind, fw: number, fh: number): Cands => {
    const key = `${kind}:${fw}x${fh}`
    let c = candsOf.get(key)
    if (c) return c
    const out: number[] = []
    const st = kind === 'bed' ? 6 : 5
    for (let y = 6; y + fh <= h - 6; y += st) for (let x = 6; x + fw <= w - 6; x += st) if (!free(x, y, fw, fh)) out.push(x, y)
    const n = out.length / 2
    c = { kind, fw, fh, xy: Int32Array.from(out), alive: new Uint8Array(n).fill(1), dAll: new Float32Array(n).fill(260 * 260), dSame: new Float32Array(n).fill(1e9), base: new Float32Array(n) }
    for (let k = 0; k < n; k++) {
      const x = out[2 * k], y = out[2 * k + 1], cx = x + fw / 2, cy = y + fh / 2
      c.base[k] = cellHash(x, y + fw) * 30 + Math.min(cx, w - cx, cy, h - cy) * 0.3 + (kind === 'bed' && pathSum(x - 8, y - 8, fw + 16, fh + 16) ? 120 : 0)
    }
    for (const f of feats) apply(c, f)
    candsOf.set(key, c)
    return c
  }
  const tryPlace = (kind: FeatKind): boolean => {
    for (const [fw, fh] of SIZES[kind]) {
      const c = candsFor(kind, fw, fh)
      let best = -Infinity, bk = -1
      for (let k = 0, n = c.alive.length; k < n; k++) {
        if (!c.alive[k]) continue
        const s = c.base[k] + Math.sqrt(Math.min(c.dAll[k], c.dSame[k] * 0.3025))
        if (s > best) { best = s; bk = k }
      }
      if (bk >= 0) {
        const f: Feat = { kind, x: c.xy[2 * bk], y: c.xy[2 * bk + 1], w: fw, h: fh, v: feats.filter((q) => q.kind === kind).length }
        feats.push(f)
        for (const other of candsOf.values()) apply(other, f)
        return true
      }
    }
    return false
  }
  const cycle: FeatKind[] = ['pond', 'zen', 'fountain', 'park', 'pond', 'zen', 'park', 'pond', 'zen', 'park', 'pond', 'zen', 'park', 'fountain', 'park', 'pond']
  for (const kind of cycle) {
    if (feats.length >= Math.max(3, Math.round((w * h) / 26000))) break
    tryPlace(kind)
  }
  const beds = Math.round((w * h) / 50000)
  for (let i = 0; i < beds; i++) if (!tryPlace('bed')) break
  for (const f of feats) {
    if (f.kind === 'park') continue
    if (f.kind === 'pond') solid.rect(f.x + 4, f.y + 4, f.w - 8, f.h - 8)
    else solid.rect(f.x, f.y, f.w, f.h)
  }

  // 6. la peinture du sol · l'eau d'abord
  const pondW = new Mask(w, h)
  const pondRim = new Mask(w, h)
  const petals: Pt[] = []
  if (river) paintRiver(g, w, h, river, rdist, water, path, r)
  for (const f of feats) if (f.kind === 'pond') paintPond(g, f, pondW, pondRim, r, sprites)
  // le chemin de terre (le pont recouvre la traversée)
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const i = y * w + x
    if (!path.a[i] || plaza.a[i] || rdist[i] <= RB) continue
    g.set(x, y, path.edge(x, y) ? DIRT_D : DIRT)
  }
  for (let i = 0; i < (w * h) / 70; i++) {
    const x = Math.floor(r() * w), y = Math.floor(r() * h)
    if (path.get(x, y) && !path.edge(x, y) && !plaza.get(x, y) && rdist[y * w + x] > RB) g.set(x, y, r() < 0.5 ? '#c9a465' : '#ecd29c')
  }
  for (const b of bridges) paintBridge(g, b.pts, b.vertical, (x, y) => water.get(x, y) === 1)
  // les places pavées
  for (const s of spots) {
    const x0 = Math.round(s.x - PW / 2), y0 = Math.round(s.y - PH / 2)
    for (let j = 0; j < PH; j++) for (let i = 0; i < PW; i++) {
      const corner = (i < 3 || i > PW - 4) && (j < 3 || j > PH - 4) && Math.hypot(Math.min(i, PW - 1 - i) - 3, Math.min(j, PH - 1 - j) - 3) > 3
      if (corner) continue
      const border = i === 0 || j === 0 || i === PW - 1 || j === PH - 1
      let c = (Math.floor(i / 6) + Math.floor(j / 4)) % 2 ? '#dcd6c4' : '#d2cbb8'
      if (i % 6 === 0 || j % 4 === 0) c = '#bdb5a0'
      if (border) c = '#8f8775'
      g.set(x0 + i, y0 + j, c)
    }
  }
  // les jardins zen, la fontaine, les massifs
  let zenN = 0
  for (const f of feats) {
    if (f.kind === 'zen') paintZen(g, f, r, zenN++)
    else if (f.kind === 'fountain') paintFountain(g, f, r)
    else if (f.kind === 'bed') paintBed(g, f, r)
  }

  // 7. les arbres et les objets · près des décors d'abord, puis la forêt
  const wet = (x: number, y: number, ww: number, hh: number) =>
    water.anyIn(x, y, ww, hh) || bank.anyIn(x, y, ww, hh) || pondW.anyIn(x, y, ww, hh) || pondRim.anyIn(x, y, ww, hh)
  const place = (x: number, y: number, sg: Grid, foot = 5): boolean => {
    const bx = x + 1, by = y + 1, bw = sg.w - 2, bh = sg.h - 2
    if (bx < -5 || bx + bw > w + 5 || by < -8 || by + bh > h + 1) return false
    if (solid.anyIn(bx, by, bw, bh) || plaza.anyIn(bx - 1, by - 1, bw + 2, bh + 2) || path.anyIn(bx, by, bw, bh)) return false
    const fy = by + bh - foot
    if (wet(bx + 1, fy, bw - 2, foot) || busy.anyIn(bx + 1, fy, bw - 2, foot)) return false
    busy.rect(bx + 1, by + 1, bw - 2, bh - 2)
    addSprite(x, y, sg)
    return true
  }
  const species = (x: number, y: number): Grid => {
    const b = biome(x, y)
    if (b < 0.3) return r() < 0.75 ? P.cherry() : P.tree()
    if (b < 0.42) return r() < 0.7 ? P.maple() : P.tree()
    if (b > 0.74) return r() < 0.7 ? P.pine() : r() < 0.4 ? P.bamboo() : P.tree()
    return r() < 0.8 ? P.tree() : P.pine()
  }
  const placeTree = (x: number, y: number, sg: Grid) => {
    if (!place(x, y, sg)) return false
    if (pinkTrees.has(sg)) petals.push({ x: x + 10, y: y + 18 })
    return true
  }
  // autour des décors
  for (const f of feats) {
    const around = (sg: () => Grid, tries: number, want: number) => {
      let got = 0
      for (let t = 0; t < tries && got < want; t++) {
        const side = Math.floor(r() * 4)
        const sgg = sg()
        let x: number, y: number
        if (side === 0) { x = f.x - sgg.w + 2 + Math.floor(r() * 4); y = f.y + Math.floor(r() * f.h) - sgg.h + 4 }
        else if (side === 1) { x = f.x + f.w - 2 - Math.floor(r() * 4); y = f.y + Math.floor(r() * f.h) - sgg.h + 4 }
        else if (side === 2) { x = f.x + Math.floor(r() * f.w) - sgg.w / 2; y = f.y - sgg.h + 1 }
        else { x = f.x + Math.floor(r() * f.w) - sgg.w / 2; y = f.y + f.h - sgg.h + 6 }
        if (placeTree(Math.round(x), Math.round(y), sgg)) got++
      }
    }
    if (f.kind === 'park') {
      const maple = f.v % 3 === 2
      // les arbres du parc, en quinconce
      for (let t = 0; t < 40; t++) {
        const sg = maple ? P.maple() : P.cherry()
        const x = f.x + Math.floor(r() * (f.w - 14)) - 3, y = f.y + Math.floor(r() * (f.h - 10)) - 8
        placeTree(x, y, sg)
      }
      const bg = P.bench()
      for (let t = 0; t < 20; t++) {
        const x = f.x + Math.floor(r() * (f.w - 12)), y = f.y + f.h - 8 + Math.floor(r() * 4)
        if (place(x, y, bg, 4)) break
      }
      for (let t = 0; t < 20; t++) {
        const x = f.x + Math.floor(r() * (f.w - 8)), y = f.y + Math.floor(r() * (f.h - 12))
        if (place(x, y, P.lantern(), 4)) break
      }
      for (let i = 0; i < 4; i++) petals.push({ x: f.x + r() * f.w, y: f.y + r() * f.h })
    } else if (f.kind === 'zen') {
      around(() => P.lantern(), 12, 1)
      around(() => P.pine(), 14, 1)
      around(() => (f.v % 2 ? P.cherry() : P.maple()), 14, 1)
      around(() => P.bamboo(), 10, 1)
    } else if (f.kind === 'pond') {
      around(() => (f.v % 2 ? P.maple() : P.cherry()), 16, 2)
      around(() => P.lantern(), 12, 1)
      around(() => P.bigRock(), 10, 1)
    } else if (f.kind === 'fountain') {
      around(() => P.bench(), 16, 2)
      around(() => P.bush(), 10, 2)
    } else if (f.kind === 'bed') {
      around(() => P.bush(), 6, 1)
    }
  }
  // la forêt du pourtour, puis des bosquets épars
  for (let y = -8; y < h; y += 10) for (let x = -6; x < w; x += 11) {
    const jx = x + Math.floor(r() * 6), jy = y + Math.floor(r() * 5)
    const edgeD = Math.min(jx + 8, w - jx - 8, jy + 8, h - jy - 10)
    const p = edgeD < 14 ? 0.95 : edgeD < 30 ? 0.45 : 0.2
    if (r() < p) placeTree(jx, jy, species(jx, jy))
  }
  for (let i = 0; i < (w * h) / 700; i++) place(Math.floor(r() * w), Math.floor(r() * h), P.bush())
  for (let i = 0; i < (w * h) / 2600; i++) place(Math.floor(r() * w), Math.floor(r() * h), P.rock())
  for (let i = 0; i < (w * h) / 9000; i++) place(Math.floor(r() * w), Math.floor(r() * h), P.bamboo())
  if (gateY > 0) for (let x = 2; x < w - 8; x += 7 + Math.floor(r() * 4)) place(x, gateY + 2 + Math.floor(r() * 3), P.bush(), 3)

  // 8. les pétales, les fleurs des prés, les roseaux des berges
  for (const p of petals) {
    for (let i = 0; i < 14; i++) {
      const x = Math.round(p.x + (r() - 0.5) * 26), y = Math.round(p.y + (r() - 0.3) * 14)
      if (x < 0 || y < 0 || x >= w || y >= h || plaza.get(x, y) || solid.get(x, y)) continue
      if (water.get(x, y) || pondW.get(x, y)) g.set(x, y, '#ffd8e8')
      else if (!bank.get(x, y) && !pondRim.get(x, y)) g.set(x, y, i % 3 ? '#ffc4dc' : '#ffffff')
    }
  }
  const flowers = ['#ffffff', '#ffe14d', '#ff6b8a', '#c9a0ff']
  for (let i = 0; i < (w * h) / 200; i++) {
    const x = Math.floor(r() * w), y = Math.floor(r() * h)
    if (path.anyIn(x - 2, y - 2, 5, 5) || plaza.anyIn(x - 2, y - 2, 5, 5) || solid.anyIn(x - 1, y - 1, 3, 3) || wet(x - 2, y - 2, 5, 5) || busy.get(x, y)) continue
    const c = flowers[Math.floor(r() * flowers.length)]
    g.set(x, y - 1, c); g.set(x - 1, y, c); g.set(x + 1, y, c); g.set(x, y + 1, c)
    g.set(x, y, '#ffb020')
  }
  for (let i = 0; i < (w * h) / 260; i++) {
    const x = Math.floor(r() * w), y = Math.floor(r() * h)
    if (!(bank.get(x, y) || pondRim.get(x, y)) || path.anyIn(x - 3, y - 4, 7, 6) || solid.get(x, y)) continue
    if (!(water.get(x, y + 2) || water.get(x, y - 2) || pondW.get(x, y + 2) || pondW.get(x + 2, y) || pondW.get(x - 2, y))) continue
    for (let k = 0; k < 3; k++) {
      const rx = x + k * 2 - 2, tall = 3 + ((k + i) % 2)
      for (let t = 0; t < tall; t++) g.set(rx, y - t, t === 0 ? '#2f7a3a' : '#4f9e3a')
      if (k === 1) { g.set(rx, y - tall, '#8a5530'); g.set(rx, y - tall - 1, '#8a5530') }
    }
  }

  // 9. les objets, du fond vers le devant
  sprites.sort((a, b) => a.z - b.z)
  for (const s of sprites) g.blit(s.g, s.x, s.y)
  return g
}

/* --- la rivière -------------------------------------------------------- */

interface River { vertical: boolean; c: (u: number) => number; hw: (u: number) => number }

/** le meilleur tracé parmi des bandes sinueuses, horizontales ou verticales ·
 *  aucune place ne doit être touchée, le chemin le moins possible (une
 *  traversée franche, pas un long voisinage), de préférence vers le milieu */
function chooseRiver(w: number, h: number, spots: Pt[], path: Mask, label: Mask, r: () => number): River | null {
  let best: River | null = null, bestS = Infinity
  // les places, élargies de 6 px : la rivière n'y touche jamais
  const pz = new Mask(w, h)
  for (const s of spots) pz.rect(Math.round(s.x - PW / 2) - 6, Math.round(s.y - PH / 2) - 6, PW + 12, PH + 12)
  for (const vertical of [false, true]) {
    const span = vertical ? h : w, across = vertical ? w : h
    if (across < 80 || span < 60) continue
    // les cumuls le long de l'axe transverse, une tranche tous les 3 px
    const us: number[] = []
    for (let u = 0; u < span; u += 3) us.push(u)
    const N = across + 1
    const P = new Uint16Array(us.length * N), F = new Uint16Array(us.length * N), L = new Uint16Array(us.length * N)
    us.forEach((u, k) => {
      let p = 0, f = 0, l = 0
      for (let v = 0; v < across; v++) {
        const i = vertical ? u * w + v : v * w + u
        p += path.a[i]; l += label.a[i]; f += pz.a[i]
        const o = k * N + v + 1
        P[o] = p; F[o] = f; L[o] = l
      }
    })
    // les tranches qui traversent des places d'abord : un tracé fautif est
    // écarté dès les premiers essais
    const order = us.map((_, k) => k).sort((a, b) => F[b * N + across] - F[a * N + across])
    const coords = spots.map((s) => (vertical ? s.x : s.y))
    for (let variant = 0; variant < 4; variant++) {
      const A = [6, 4.5, 3, 5.5][variant]
      const per = 13 + r() * 9, ph = r() * 6.28
      const wave = (u: number) => A * Math.sin(u / per + ph) + 2 * Math.sin(u / (per * 0.43) + ph * 1.7)
      const hw = (u: number) => 6.5 + 1.5 * Math.sin(u / 23 + ph * 0.5)
      const off = us.map(wave), half = us.map((u) => hw(u) + 3 + 4)
      for (let c0 = 14; c0 <= across - 14; c0 += 2) {
        let pathPx = 0, labelPx = 0, bad = false
        for (let q = 0; q < us.length; q++) {
          const k = order[q]
          const c = c0 + off[k]
          const lo = Math.max(0, Math.floor(c - half[k])), hi = Math.min(across, Math.ceil(c + half[k]))
          const b = k * N
          if (F[b + hi] - F[b + lo]) { bad = true; break }
          pathPx += P[b + hi] - P[b + lo]; labelPx += L[b + hi] - L[b + lo]
        }
        if (bad) continue
        const before = coords.some((v) => v < c0 - 25), after = coords.some((v) => v > c0 + 25)
        let s = pathPx + 0.4 * labelPx + 1.2 * Math.abs(c0 - across / 2) - 6 * A + (vertical ? 40 : 0)
        if (spots.length && !(before && after)) s += 600
        if (s < bestS) { bestS = s; const C = c0; best = { vertical, c: (u: number) => C + wave(u), hw } }
      }
    }
  }
  return best
}

function paintRiver(g: Grid, w: number, h: number, rv: River, rdist: Float32Array, water: Mask, path: Mask, r: () => number) {
  // seulement la bande que la rivière occupe
  let lo = Infinity, hi = -Infinity
  for (let u = 0; u < (rv.vertical ? h : w); u++) { lo = Math.min(lo, rv.c(u) - rv.hw(u)); hi = Math.max(hi, rv.c(u) + rv.hw(u)) }
  lo = Math.max(0, Math.floor(lo - 6)); hi = Math.ceil(hi + 6)
  const ys0 = rv.vertical ? 0 : lo, ys1 = rv.vertical ? h : Math.min(h, hi)
  const xs0 = rv.vertical ? lo : 0, xs1 = rv.vertical ? Math.min(w, hi) : w
  for (let y = ys0; y < ys1; y++) for (let x = xs0; x < xs1; x++) {
    const d = rdist[y * w + x]
    if (d > 4) continue
    if (d > 3) { g.set(x, y, shade(g.get(x, y) ?? GRASS, -0.22)); continue }
    if (d > 1.2) { g.set(x, y, cellHash(x, y) < 0.08 ? STONE : SAND); continue }
    if (d > 0) { g.set(x, y, SAND_W); continue }
    g.set(x, y, d > -1 ? WATER_D : d < -4.2 ? WATER_C : WATER)
  }
  const span = rv.vertical ? h : w
  const put = (u: number, v: number, c: string) => { if (rv.vertical) g.set(v, u, c); else g.set(u, v, c) }
  const at = (u: number, v: number) => (rv.vertical ? water.get(v, u) : water.get(u, v))
  // le courant · des traits clairs qui suivent la rivière
  for (let i = 0; i < span / 3; i++) {
    const u0 = Math.floor(r() * span), o = (r() - 0.5) * 2 * (rv.hw(u0) - 2.5)
    const len = 2 + Math.floor(r() * 4)
    for (let u = u0; u < u0 + len; u++) {
      const v = Math.round(rv.c(u) + o)
      if (at(u, v)) put(u, v, i % 4 === 0 ? '#ffffff' : WATER_L)
    }
  }
  // l'écume des berges
  for (let i = 0; i < span / 2; i++) {
    const u = Math.floor(r() * span), sd = r() < 0.5 ? -1 : 1
    const v = Math.round(rv.c(u) + sd * (rv.hw(u) - 1.5))
    if (at(u, v)) put(u, v, '#cfeaff')
  }
  // une cascade · une rangée de rochers en travers, l'écume en aval, loin
  // des ponts
  const pathNear = (u: number) => {
    for (let du = -26; du <= 26; du += 2) {
      const v = Math.round(rv.c(u + du))
      if (rv.vertical ? path.anyIn(v - 12, u + du, 25, 1) : path.anyIn(u + du, v - 12, 1, 25)) return true
    }
    return false
  }
  let cu = -1
  for (const f of [0.18, 0.8, 0.3, 0.68, 0.12, 0.88]) {
    const u = Math.round(span * f)
    if (!pathNear(u)) { cu = u; break }
  }
  if (cu > 0) {
    const c = rv.c(cu), hw = rv.hw(cu)
    const v0 = Math.floor(c - hw), v1 = Math.ceil(c + hw)
    // le seuil · l'eau s'assombrit, déborde en nappe claire, tombe en filets
    for (let v = v0; v <= v1; v++) {
      if (!at(cu, v) && !at(cu + 2, v)) continue
      put(cu - 3, v, WATER_D); put(cu - 2, v, '#2558a0')
      put(cu - 1, v, '#bfe6ff')
      for (let du = 0; du < 4; du++) put(cu + du, v, (v + (du >> 1)) % 2 ? '#ffffff' : '#a8dcff')
      for (let du = 4; du < 7; du++) put(cu + du, v, cellHash(cu + du, v) < 0.7 ? '#ffffff' : '#d8f0ff')
    }
    for (let du = 7; du < 16; du++) for (let v = v0 + 1; v < v1; v++) {
      if (!at(cu + du, v)) continue
      const p = cellHash(cu + du, v)
      if (p < 0.6 - du * 0.035) put(cu + du, v, p < 0.25 ? '#ffffff' : '#d8f0ff')
    }
    // les rochers du seuil, sur les berges et en travers
    const boulder = (v: number, rad: number) => {
      const sg = stone(rad, rad > 2)
      const x = rv.vertical ? v : cu, y = rv.vertical ? cu : v
      g.blit(sg, Math.round(x - sg.w / 2), Math.round(y - sg.h / 2))
    }
    boulder(c - hw - 2, 2.8); boulder(c + hw + 2, 2.6)
  }
  // quelques rochers dans le courant, des nénuphars dans les anses, des koï
  for (let i = 0; i < span / 90; i++) {
    const u = Math.floor(r() * span)
    if (pathNear(u) || Math.abs(u - cu) < 14) continue
    const v = Math.round(rv.c(u) + (r() - 0.5) * rv.hw(u))
    put(u, v, STONE); put(u + 1, v, STONE_L); put(u, v + 1, STONE_D); put(u + 1, v + 1, STONE_D)
    put(u - 1, v, '#ffffff'); put(u + 2, v + 1, '#d8f0ff')
  }
  for (let i = 0; i < span / 60; i++) {
    const u = Math.floor(r() * span), sd = r() < 0.5 ? -1 : 1
    if (pathNear(u) || Math.abs(u - cu) < 14) continue
    const v = Math.round(rv.c(u) + sd * (rv.hw(u) - 3))
    lily(g, rv.vertical ? v - 1 : u - 1, rv.vertical ? u - 1 : v - 1, r)
  }
  for (let i = 0; i < span / 110; i++) {
    const u = Math.floor(r() * span)
    if (pathNear(u) || Math.abs(u - cu) < 14) continue
    const v = Math.round(rv.c(u) + (r() - 0.5) * 4)
    koi(g, rv.vertical ? v : u, rv.vertical ? u : v, r() < 0.5, rv.vertical)
  }
}

/* --- les détails de l'eau ---------------------------------------------- */

function lily(g: Grid, x: number, y: number, r: () => number) {
  const c = '#3fae4e', hi = '#7cd46a', dk = '#2b8a3c'
  g.hline(x + 1, y, 2, c); g.hline(x, y + 1, 4, c); g.hline(x + 1, y + 2, 2, dk)
  g.set(x + 1, y, hi); g.set(x + 3, y + 1, WATER_D)
  if (r() < 0.4) { g.set(x, y, '#ff8fb8'); g.set(x + 1, y + 1, '#ffffff') }
}

function koi(g: Grid, x: number, y: number, white: boolean, vertical: boolean) {
  const body = white ? '#ffffff' : '#ff7a1a', spot = white ? '#ff5a2a' : '#ffffff', fin = white ? '#ffd0b0' : '#ffb070'
  if (vertical) {
    g.set(x, y, body); g.set(x, y + 1, spot); g.set(x, y + 2, body); g.set(x - 1, y + 3, fin); g.set(x + 1, y + 3, fin)
  } else {
    g.set(x, y, body); g.set(x + 1, y, spot); g.set(x + 2, y, body); g.set(x - 1, y - 1, fin); g.set(x - 1, y + 1, fin)
  }
}

/* --- un bassin ----------------------------------------------------------- */

function paintPond(g: Grid, f: Feat, pondW: Mask, pondRim: Mask, r: () => number, sprites: { x: number; y: number; g: Grid; z: number }[]) {
  const cx = f.x + f.w / 2, cy = f.y + f.h / 2
  const rx = f.w / 2 - 4, ry = f.h / 2 - 4
  const a1 = r() * 6.28, a2 = r() * 6.28
  const inside = (x: number, y: number) => {
    const dx = (x - cx) / rx, dy = (y - cy) / ry
    const th = Math.atan2(dy, dx)
    return dx * dx + dy * dy <= 0.82 + 0.12 * Math.sin(th * 2 + a1) + 0.07 * Math.sin(th * 3 + a2)
  }
  const m = new Mask(f.w, f.h)
  for (let y = 0; y < f.h; y++) for (let x = 0; x < f.w; x++) if (inside(f.x + x, f.y + y)) m.set(x, y)
  // la margelle de pierres, la ligne sombre, puis l'eau
  for (let y = -1; y <= f.h; y++) for (let x = -1; x <= f.w; x++) {
    if (m.get(x, y)) continue
    let d = 9
    for (let dy = -3; dy <= 3; dy++) for (let dx = -3; dx <= 3; dx++) {
      if (m.get(x + dx, y + dy)) d = Math.min(d, Math.max(Math.abs(dx), Math.abs(dy)))
    }
    const X = f.x + x, Y = f.y + y
    if (d <= 2) {
      const hsh = cellHash(X >> 1, Y >> 1)
      g.set(X, Y, d === 1 ? (hsh < 0.5 ? '#a7a2b3' : '#8f8aa0') : hsh < 0.35 ? STONE_L : hsh < 0.7 ? STONE : SAND)
      pondRim.set(X, Y)
    } else if (d === 3) {
      g.set(X, Y, OUTLINE)
      pondRim.set(X, Y)
    }
  }
  for (let y = 0; y < f.h; y++) for (let x = 0; x < f.w; x++) {
    if (!m.get(x, y)) continue
    const X = f.x + x, Y = f.y + y
    pondW.set(X, Y)
    const edge = m.edge(x, y), deep = !m.edge(x, y, 4)
    g.set(X, Y, edge ? WATER_D : deep ? '#3584d8' : WATER)
    if (!edge && m.get(x, y - 1) && !m.get(x, y - 2)) g.set(X, Y, '#2a64ad')
  }
  for (let i = 0; i < f.w / 3; i++) {
    const x = Math.floor(r() * f.w), y = Math.floor(r() * f.h)
    if (m.get(x, y) && m.get(x + 2, y) && !m.edge(x, y, 2)) g.hline(f.x + x, f.y + y, 3, WATER_L)
  }
  // les pierres de gué en travers, ou un petit pont rouge
  if (f.v % 2 === 0) {
    const n = Math.max(3, Math.round(rx / 7))
    for (let k = 0; k < n; k++) {
      const sx = cx - rx * 0.75 + (k * rx * 1.5) / (n - 1), sy = cy + (k % 2 ? 2 : -1)
      const sg = stone(1.8, false)
      sprites.push({ x: Math.round(sx) - 3, y: Math.round(sy) - 3, g: sg, z: -1000 })
    }
  } else {
    const bx = Math.round(cx + (r() - 0.5) * rx * 0.6)
    const pts: Pt[] = []
    for (let y = f.y + 1; y <= f.y + f.h - 2; y += 2) pts.push({ x: bx, y })
    paintBridge(g, pts, true, (x, y) => pondW.get(x, y) === 1)
  }
  // les nénuphars et les carpes
  for (let i = 0; i < 6 + f.w / 12; i++) {
    const x = Math.floor(r() * f.w), y = Math.floor(r() * f.h)
    if (!m.get(x, y) || !m.get(x + 4, y + 3) || !m.get(x, y + 3) || !m.get(x + 4, y)) continue
    if (Math.abs(f.y + y - cy) < 4) continue
    lily(g, f.x + x, f.y + y, r)
  }
  for (let i = 0; i < 3; i++) {
    for (let t = 0; t < 10; t++) {
      const x = Math.floor(r() * f.w), y = Math.floor(r() * f.h)
      if (!m.get(x - 2, y) || !m.get(x + 3, y) || m.edge(x, y, 2) || Math.abs(f.y + y - cy) < 4) continue
      koi(g, f.x + x, f.y + y, i === 1, false)
      break
    }
  }
}

/* --- un pont rouge ------------------------------------------------------- */

/** un pont arqué le long d'une polyligne (le chemin), tablier de planches,
 *  garde-corps rouges, poteaux à chapeau doré, ombre portée sur l'eau */
function paintBridge(g: Grid, pts: Pt[], vertical: boolean, isWater: (x: number, y: number) => boolean) {
  if (pts.length < 2) return
  // la ligne médiane, un point par rangée (pont vertical) ou par colonne
  const fineP: Pt[] = []
  for (let i = 0; i + 1 < pts.length; i++) {
    const a = pts[i], b = pts[i + 1]
    const n = Math.max(1, Math.ceil(Math.hypot(b.x - a.x, b.y - a.y) * 2))
    for (let k = 0; k < n; k++) fineP.push({ x: a.x + ((b.x - a.x) * k) / n, y: a.y + ((b.y - a.y) * k) / n })
  }
  fineP.push(pts[pts.length - 1])
  const along = (p: Pt) => (vertical ? p.y : p.x)
  const cross = (p: Pt) => (vertical ? p.x : p.y)
  const a0 = Math.round(Math.min(...fineP.map(along))), a1 = Math.round(Math.max(...fineP.map(along)))
  const centre = new Map<number, number>()
  for (const p of fineP) centre.set(Math.round(along(p)), Math.round(cross(p)))
  let last = Math.round(cross(fineP[0]))
  const put = (a: number, c: number, col: string) => { if (vertical) g.set(c, a, col); else g.set(a, c, col) }
  const wet = (a: number, c: number) => (vertical ? isWater(c, a) : isWater(a, c))
  for (let a = a0; a <= a1; a++) {
    const c = centre.get(a) ?? last
    last = c
    const t = a1 > a0 ? (a - a0) / (a1 - a0) : 0.5
    const lift = Math.sin(Math.PI * t)
    const post = (a - a0) % 5 === 0 || a === a1
    for (let o = -7; o <= 7; o++) {
      let col: string
      const ao = Math.abs(o)
      if (ao === 7) col = OUTLINE
      else if (ao === 6) col = post ? RED_D : shade(o < 0 ? RED_L : RED, lift * 0.12)
      else if (ao === 5) col = RED_D
      else {
        const plank = (a - a0) % 3 === 2
        col = shade(plank ? '#8a5530' : (a - a0) % 6 < 3 ? WOOD : '#b47746', lift * 0.2 - (ao === 4 ? 0.14 : 0))
      }
      put(a, c + o, col)
    }
    if (post) { put(a, c - 6, GOLD); put(a, c + 6, GOLD) }
    // l'ombre du pont sur l'eau
    for (const o of [8, 9]) if (wet(a, c + o)) put(a, c + o, '#2558a0')
  }
  // les bouts, deux gros poteaux de chaque côté
  for (const a of [a0, a1]) {
    const c = centre.get(a) ?? last
    for (const sd of [-1, 1]) {
      for (let o = 5; o <= 7; o++) { put(a, c + sd * o, RED_D); put(a + (a === a0 ? 1 : -1), c + sd * o, RED_D) }
      put(a, c + sd * 6, GOLD)
      put(a, c + sd * 8, OUTLINE); put(a + (a === a0 ? 1 : -1), c + sd * 8, OUTLINE)
      put(a + (a === a0 ? -1 : 1), c + sd * 6, OUTLINE); put(a + (a === a0 ? -1 : 1), c + sd * 7, OUTLINE); put(a + (a === a0 ? -1 : 1), c + sd * 5, OUTLINE)
    }
  }
}

/* --- un jardin zen ------------------------------------------------------- */

function paintZen(g: Grid, f: Feat, r: () => number, n: number) {
  const x0 = f.x, y0 = f.y, x1 = f.x + f.w - 1, y1 = f.y + f.h - 1
  // les rochers, posés en triangle déséquilibré
  const count = 1 + ((n + Math.floor(r() * 3)) % 3)
  const anchors: [number, number][] = [[0.3, 0.42], [0.7, 0.6], [0.52, 0.3]]
  const rocks = anchors.slice(0, count).map(([ax, ay], i) => ({
    x: x0 + f.w * ax + (r() - 0.5) * 6, y: y0 + f.h * ay + (r() - 0.5) * 4, rad: i === 0 ? 3.6 : 2.6 + r() * 0.8,
  }))
  const phase = r() * 10
  for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
    const bx = Math.min(x - x0, x1 - x), by = Math.min(y - y0, y1 - y)
    if (bx === 0 || by === 0) { g.set(x, y, '#4a3626'); continue }
    if (bx === 1 || by === 1) { g.set(x, y, by === 1 && y - y0 === 1 ? '#b08a5c' : '#8a6a4a'); continue }
    let dmin = 99
    for (const k of rocks) dmin = Math.min(dmin, Math.hypot(x - k.x, (y - k.y) * 1.35) - k.rad)
    let line: boolean
    if (dmin < 10) line = dmin > 1.5 && Math.round(dmin) % 3 === 0
    else line = (y + Math.round(Math.sin((x + phase) / 5) * 1.2)) % 3 === 0
    let c = line ? '#bdb197' : '#f4f0e6'
    if (!line && cellHash(x, y) < 0.06) c = '#e2dccd'
    g.set(x, y, c)
  }
  // la mousse · une île au pied du grand rocher, et un coin
  const mossAt = (mx: number, my: number, mrx: number, mry: number) => {
    for (let y = Math.floor(my - mry); y <= my + mry; y++) for (let x = Math.floor(mx - mrx); x <= mx + mrx; x++) {
      if (x <= x0 + 1 || x >= x1 - 1 || y <= y0 + 1 || y >= y1 - 1) continue
      const d = ((x - mx) / mrx) ** 2 + ((y - my) / mry) ** 2
      if (d > 1 - cellHash(x, y) * 0.25) continue
      g.set(x, y, d > 0.7 ? '#3d7e2e' : cellHash(y, x) < 0.25 ? '#7cc458' : '#559a3a')
    }
  }
  const k0 = rocks[0]
  mossAt(k0.x, k0.y + 1.5, k0.rad + 3, k0.rad + 1)
  const corner = Math.floor(r() * 4)
  mossAt(corner % 2 ? x1 - 5 : x0 + 6, corner < 2 ? y0 + 5 : y1 - 4, 6, 3.5)
  for (const k of rocks) {
    const sg = stone(k.rad, k === k0)
    g.blit(sg, Math.round(k.x - sg.w / 2), Math.round(k.y - sg.h / 2))
  }
}

/* --- une fontaine -------------------------------------------------------- */

function paintFountain(g: Grid, f: Feat, r: () => number) {
  const cx = f.x + f.w / 2 - 0.5, cy = f.y + f.h / 2 - 0.5
  const R = Math.min(f.w, f.h) / 2 - 1
  for (let y = f.y; y < f.y + f.h; y++) for (let x = f.x; x < f.x + f.w; x++) {
    const d = Math.hypot(x - cx, (y - cy) * 1.1)
    if (d > R) continue
    let c: string
    if (d > R - 1) c = '#8f8775'
    else if (d > R - 4) c = (Math.floor(Math.atan2(y - cy, x - cx) * 4) + Math.floor(d)) % 2 ? '#dcd6c4' : '#d2cbb8'
    else if (d > R - 5) c = OUTLINE
    else if (d > R - 7) c = y < cy ? STONE_L : STONE
    else if (d > R - 8) c = WATER_D
    else c = cellHash(x, y) < 0.12 ? WATER_L : WATER
    g.set(x, y, c)
  }
  // la vasque du centre et le jet
  const X = Math.round(cx), Y = Math.round(cy)
  g.rect(X - 1, Y - 1, 3, 3, STONE); g.hline(X - 1, Y - 1, 3, STONE_L); g.set(X, Y + 1, STONE_D)
  g.set(X - 2, Y, OUTLINE); g.set(X + 2, Y, OUTLINE); g.hline(X - 1, Y + 2, 3, OUTLINE)
  for (const [dx, dy, c] of [[0, -2, '#ffffff'], [0, -3, '#d8f0ff'], [0, -4, '#ffffff'], [-1, -5, '#d8f0ff'], [1, -5, '#d8f0ff'], [-2, -4, WATER_L], [2, -4, WATER_L], [-3, -2, WATER_L], [3, -2, WATER_L]] as [number, number, string][]) g.set(X + dx, Y + dy, c)
  for (let i = 0; i < 8; i++) {
    const a = r() * 6.28, d = 3 + r() * (R - 9)
    g.set(Math.round(cx + Math.cos(a) * d), Math.round(cy + Math.sin(a) * d / 1.1), '#ffffff')
  }
}

/* --- un massif de fleurs ------------------------------------------------- */

function paintBed(g: Grid, f: Feat, r: () => number) {
  const pal = [['#ff5a7a', '#ffe14d', '#ffffff'], ['#c98bff', '#ffffff', '#ff8fd0'], ['#ff8a3d', '#ffe14d', '#ff5a5a'], ['#ff6bb0', '#ffffff', '#ffd23f']][Math.floor(r() * 4)]
  const x1 = f.x + f.w - 1, y1 = f.y + f.h - 1
  for (let y = f.y; y <= y1; y++) for (let x = f.x; x <= x1; x++) {
    const bx = Math.min(x - f.x, x1 - x), by = Math.min(y - f.y, y1 - y)
    if (bx === 0 && by <= 1 || by === 0 && bx <= 1) continue
    if (bx === 0 || by === 0) { g.set(x, y, OUTLINE); continue }
    if (bx === 1 || by === 1) { g.set(x, y, y === f.y + 1 ? STONE_L : (x + y) % 3 === 0 ? STONE_D : STONE); continue }
    const hsh = cellHash(x, y)
    g.set(x, y, hsh < 0.5 ? pal[Math.floor(hsh * 6)] : hsh < 0.8 ? '#3f9e44' : '#2f7a3a')
  }
}
