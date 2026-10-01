// LA CARTE DU MONDE · les temples des formations sur une carte vue de dessus,
// façon Zelda en pixel art 2D.
//
// Demandé : « Dans la bottom bar on a dojoburo avec la page des temples avec
// le nom du cours au-dessus en mode Zelda pixel art 2D ».
//
// Ce fichier dessine le décor (herbe, chemin, rivière, pont, arbres) et
// l'icône d'un temple ; un autre fichier pose les icônes sur les places
// réservées et écrit les noms au-dessus. Tout est tiré de la graine : la même
// carte revient d'une visite à l'autre.
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
/* La carte                                                            */
/* ------------------------------------------------------------------ */

const GRASS = '#5cbf4a'
const GRASS_D = '#4caa3e'
const GRASS_L = '#74d05c'
const DIRT = '#dcb878'
const DIRT_D = '#b8925a'
const WATER = '#3f8fe0'
const WATER_L = '#8fd0ff'
const SAND = '#ead9a0'

type Pt = { x: number; y: number }

/** un bruit doux (valeurs aléatoires sur une grille, interpolées) */
function valueNoise(w: number, h: number, cell: number, r: () => number) {
  const cw = Math.ceil(w / cell) + 2, ch = Math.ceil(h / cell) + 2
  const v = Array.from({ length: cw * ch }, () => r())
  return (x: number, y: number) => {
    const gx = x / cell, gy = y / cell
    const x0 = Math.floor(gx), y0 = Math.floor(gy)
    const fx = gx - x0, fy = gy - y0
    const a = v[y0 * cw + x0], b = v[y0 * cw + x0 + 1], c = v[(y0 + 1) * cw + x0], d = v[(y0 + 1) * cw + x0 + 1]
    const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy)
    return a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy
  }
}

class Mask {
  readonly a: Uint8Array
  constructor(readonly w: number, readonly h: number) { this.a = new Uint8Array(w * h) }
  get(x: number, y: number) { return x >= 0 && y >= 0 && x < this.w && y < this.h ? this.a[y * this.w + x] : 0 }
  set(x: number, y: number, v = 1) { if (x >= 0 && y >= 0 && x < this.w && y < this.h) this.a[y * this.w + x] = v }
  disc(cx: number, cy: number, rad: number) {
    for (let y = Math.floor(cy - rad); y <= Math.ceil(cy + rad); y++)
      for (let x = Math.floor(cx - rad); x <= Math.ceil(cx + rad); x++)
        if ((x - cx) ** 2 + (y - cy) ** 2 <= rad * rad) this.set(x, y)
  }
  rect(x: number, y: number, w: number, h: number) { for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) this.set(x + i, y + j) }
  anyIn(x: number, y: number, w: number, h: number) {
    for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) if (this.get(x + i, y + j)) return true
    return false
  }
  /** au moins un voisin vide à distance d (bord du masque) */
  edge(x: number, y: number, d = 1) {
    return !this.get(x - d, y) || !this.get(x + d, y) || !this.get(x, y - d) || !this.get(x, y + d)
  }
}

/** les objets du décor, chacun sur sa grille contourée */
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

function bush(r: () => number): Grid {
  const g = new Grid(10, 8, 1, 1)
  const c = r() < 0.5 ? '#3fae4e' : '#46b85a'
  g.round(0, 1, 8, 5, c); g.round(1, 0, 6, 3, c)
  g.hline(1, 5, 6, shade(c, -0.3))
  g.set(2, 1, shade(c, 0.4)); g.set(5, 2, shade(c, 0.4))
  if (r() < 0.4) { g.set(3, 3, '#ff5a7a'); g.set(6, 2, '#ff5a7a') }
  g.outline()
  return g
}

function rock(r: () => number): Grid {
  const g = new Grid(9, 7, 1, 1)
  const big = r() < 0.5
  const w = big ? 7 : 5, h = big ? 5 : 4
  g.round(0, 0, w, h, '#a7a2b3')
  g.hline(1, 0, w - 2, '#cfcad9'); g.set(1, 1, '#e6e2ee')
  g.hline(1, h - 1, w - 2, '#7d788c')
  g.outline()
  return g
}

/** Le fond de la carte, w × h · herbe, chemin sinueux qui relie les places
 *  dans l'ordre, une place pavée de 44 × 48 autour de chaque centre, une
 *  rivière avec un pont (ou un étang), arbres, buissons, fleurs, rochers. */
export function drawWorld(w: number, h: number, spots: { x: number; y: number }[], seed: number): Grid {
  const g = new Grid(w, h)
  const r = rng(seed * 2246822519 + 3266489917)
  // 1. l'herbe et sa texture
  const noise = valueNoise(w, h, 24, r)
  const fine = valueNoise(w, h, 6, r)
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const n = noise(x, y) * 0.7 + fine(x, y) * 0.3
    g.set(x, y, n > 0.62 ? GRASS_D : n < 0.3 ? GRASS_L : GRASS)
  }
  for (let i = 0; i < (w * h) / 60; i++) {
    const x = Math.floor(r() * w), y = Math.floor(r() * h)
    const c = shade(g.get(x, y) ?? GRASS, -0.2)
    g.set(x, y, c); g.set(x - 1, y - 1, c); g.set(x + 1, y - 1, c)
  }

  const plaza = new Mask(w, h)
  const path = new Mask(w, h)
  const water = new Mask(w, h)
  const busy = new Mask(w, h)
  const PW = 46, PH = 50
  for (const s of spots) plaza.rect(Math.round(s.x - PW / 2), Math.round(s.y - PH / 2), PW, PH)

  // 2. le chemin · une courbe douce entre chaque paire de places, et une
  // entrée depuis le bas de la carte
  const legs: [Pt, Pt][] = []
  if (spots.length) legs.push([{ x: spots[0].x + (r() - 0.5) * 30, y: h + 6 }, spots[0]])
  for (let i = 0; i + 1 < spots.length; i++) legs.push([spots[i], spots[i + 1]])
  for (const [a, b] of legs) {
    const dx = b.x - a.x, dy = b.y - a.y
    const len = Math.hypot(dx, dy) || 1
    const off = (r() - 0.5) * 0.7 * len
    const cxp = (a.x + b.x) / 2 - (dy / len) * off, cyp = (a.y + b.y) / 2 + (dx / len) * off
    const n = Math.ceil(len * 2)
    for (let k = 0; k <= n; k++) {
      const t = k / n
      const x = (1 - t) * (1 - t) * a.x + 2 * (1 - t) * t * cxp + t * t * b.x
      const y = (1 - t) * (1 - t) * a.y + 2 * (1 - t) * t * cyp + t * t * b.y
      path.disc(x, y, 4.5)
    }
  }

  // 3. l'eau · une rivière qui coupe la carte loin des places, sinon un étang
  const vertical = w > h * 1.15
  const span = vertical ? h : w
  const across = vertical ? w : h
  const amp = 6 + r() * 10, period = 30 + r() * 30, phase = r() * 6.28
  const centre = (u: number, c0: number) => c0 + amp * Math.sin(u / period + phase) + 4 * Math.sin(u / 13 + phase * 2)
  let best = -1, bestC = 0
  for (let k = 0; k < 24; k++) {
    const c0 = across * (0.15 + 0.7 * r())
    let dmin = 1e9
    for (const s of spots) {
      const u = vertical ? s.y : s.x, v = vertical ? s.x : s.y
      dmin = Math.min(dmin, Math.abs(centre(u, c0) - v))
    }
    if (!spots.length) dmin = 999
    if (dmin > best) { best = dmin; bestC = c0 }
  }
  const half = 6
  let pond: Pt | null = null
  if (best > PH / 2 + half + 4) {
    for (let u = -2; u < span + 2; u++) {
      const c = centre(u, bestC)
      for (let v = Math.floor(c - half); v <= Math.ceil(c + half); v++) {
        if (vertical) water.set(v, u); else water.set(u, v)
      }
    }
  } else {
    // l'étang, au point le plus éloigné des places et du chemin
    let bd = -1
    for (let k = 0; k < 400; k++) {
      const p = { x: 24 + r() * (w - 48), y: 24 + r() * (h - 48) }
      let d = 1e9
      for (const s of spots) d = Math.min(d, Math.max(Math.abs(p.x - s.x) - PW / 2, Math.abs(p.y - s.y) - PH / 2))
      for (let y = Math.floor(p.y - 20); y <= p.y + 20; y += 4) for (let x = Math.floor(p.x - 26); x <= p.x + 26; x += 4) if (path.get(x, y)) d = Math.min(d, 0)
      if (d > bd) { bd = d; pond = p }
    }
    if (pond) {
      const rx = 18, ry = 11
      for (let y = -ry; y <= ry; y++) for (let x = -rx; x <= rx; x++) {
        const wob = 1 + 0.12 * Math.sin(Math.atan2(y, x) * 3 + seed)
        if ((x / rx) ** 2 + (y / ry) ** 2 <= wob) water.set(Math.round(pond.x + x), Math.round(pond.y + y))
      }
    }
  }
  // le sable des berges, puis l'eau et ses reflets
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    if (water.get(x, y)) continue
    if (water.get(x - 2, y) || water.get(x + 2, y) || water.get(x, y - 2) || water.get(x, y + 2) || water.get(x - 1, y - 1) || water.get(x + 1, y + 1)) g.set(x, y, SAND)
  }
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    if (!water.get(x, y)) continue
    g.set(x, y, water.edge(x, y) ? '#2c6fbe' : WATER)
  }
  for (let i = 0; i < (w * h) / 90; i++) {
    const x = Math.floor(r() * w), y = Math.floor(r() * h)
    if (water.get(x, y) && water.get(x + 3, y) && !water.edge(x, y, 2)) g.hline(x, y, 3, WATER_L)
  }

  // 4. le chemin de terre, le pont là où il traverse l'eau
  const wet = (x: number, y: number) => water.get(x, y) || water.get(x - 2, y) || water.get(x + 2, y) || water.get(x, y - 2) || water.get(x, y + 2)
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    if (!path.get(x, y) || plaza.get(x, y)) continue
    if (wet(x, y)) {
      const rail = path.edge(x, y)
      const plank = vertical ? x % 3 === 0 : y % 3 === 0
      g.set(x, y, rail ? OUTLINE : plank ? '#8a5530' : '#b07a48')
      continue
    }
    g.set(x, y, path.edge(x, y) ? DIRT_D : DIRT)
  }
  for (let i = 0; i < (w * h) / 80; i++) {
    const x = Math.floor(r() * w), y = Math.floor(r() * h)
    if (path.get(x, y) && !path.edge(x, y) && !wet(x, y) && !plaza.get(x, y)) g.set(x, y, r() < 0.5 ? '#c9a465' : '#ecd29c')
  }
  // les poteaux du pont
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    if (path.get(x, y) && wet(x, y) && path.edge(x, y) && !plaza.get(x, y)) {
      const atEnd = vertical ? (!wet(x - 1, y) || !wet(x + 1, y)) : (!wet(x, y - 1) || !wet(x, y + 1))
      if (atEnd) { g.set(x, y, '#5e3a20'); g.set(vertical ? x : x + 1, vertical ? y + 1 : y, '#5e3a20') }
    }
  }

  // 5. les places pavées
  for (const s of spots) {
    const x0 = Math.round(s.x - PW / 2), y0 = Math.round(s.y - PH / 2)
    for (let j = 0; j < PH; j++) for (let i = 0; i < PW; i++) {
      const corner = (i < 3 || i > PW - 4) && (j < 3 || j > PH - 4) && Math.hypot(Math.min(i, PW - 1 - i) - 3, Math.min(j, PH - 1 - j) - 3) > 3
      if (corner) continue
      const border = i === 0 || j === 0 || i === PW - 1 || j === PH - 1 || ((i < 1 || i > PW - 2 || j < 1 || j > PH - 2))
      let c = (Math.floor(i / 6) + Math.floor(j / 4)) % 2 ? '#dcd6c4' : '#d2cbb8'
      if (i % 6 === 0 || j % 4 === 0) c = '#bdb5a0'
      if (border) c = '#8f8775'
      g.set(x0 + i, y0 + j, c)
    }
  }

  // 6. les arbres, buissons, rochers, fleurs · loin de l'eau, du chemin, des places
  const blocked = (x: number, y: number, bw: number, bh: number, m: number) =>
    x < -4 || y < -6 || x + bw > w + 4 || y + bh > h + 2 ||
    plaza.anyIn(x - m, y - m, bw + 2 * m, bh + 2 * m) || path.anyIn(x - m, y - m, bw + 2 * m, bh + 2 * m) ||
    water.anyIn(x - m, y - m, bw + 2 * m, bh + 2 * m) || busy.anyIn(x, y, bw, bh)
  const items: { x: number; y: number; g: Grid }[] = []
  const place = (x: number, y: number, item: Grid, m: number) => {
    const fx = x, fy = y + item.h - 6
    if (blocked(fx, fy, item.w, 6, m)) return false
    busy.rect(x + 1, y + 2, item.w - 2, item.h - 2)
    items.push({ x, y, g: item })
    return true
  }
  // la forêt du pourtour, puis des bosquets épars
  for (let y = -6; y < h; y += 11) for (let x = -6; x < w; x += 12) {
    const jx = x + Math.floor(r() * 6), jy = y + Math.floor(r() * 5)
    const edgeD = Math.min(jx + 8, w - jx - 8, jy + 8, h - jy - 10)
    const p = edgeD < 14 ? 0.95 : edgeD < 34 ? 0.35 : 0.1
    if (r() < p) place(jx, jy, tree(r), 2)
  }
  for (let i = 0; i < (w * h) / 900; i++) place(Math.floor(r() * w), Math.floor(r() * h), bush(r), 1)
  for (let i = 0; i < (w * h) / 2600; i++) place(Math.floor(r() * w), Math.floor(r() * h), rock(r), 1)
  items.sort((a, b) => a.y + a.g.h - (b.y + b.g.h))
  for (const it of items) g.blit(it.g, it.x, it.y)
  const petals = ['#ffffff', '#ffe14d', '#ff6b8a', '#c9a0ff']
  for (let i = 0; i < (w * h) / 220; i++) {
    const x = Math.floor(r() * w), y = Math.floor(r() * h)
    if (blocked(x - 1, y - 1, 3, 3, 1)) continue
    const c = petals[Math.floor(r() * petals.length)]
    g.set(x, y - 1, c); g.set(x - 1, y, c); g.set(x + 1, y, c); g.set(x, y + 1, c)
    g.set(x, y, '#ffb020')
  }
  return g
}
