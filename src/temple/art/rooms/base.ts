// LES BRIQUES DU DÉCOR · la palette, le trait, les murs, les sols et les
// objets de base, partagés par la pièce dessinée à la main de chaque
// spécialité (le premier étage) et par le compositeur des autres étages.
import { Grid, shade, OUTLINE } from '../../../pixel/grid'

export const FLOOR_W = 160
export const FLOOR_H = 64

/* ------------------------------------------------------------------ */
/* La palette commune                                                  */
/* ------------------------------------------------------------------ */

export const WOOD = '#9a6236'
export const WOOD_D = '#64391d'
export const WOOD_L = '#c4864f'
export const PILLAR = '#b8382c'
export const PAPER = '#fff4cf'
export const GOLD = '#f5c542'
export const RED = '#e5413a'
export const WHITE = '#ffffff'
export const INK = OUTLINE
export const LEAF = '#3fb35a'
export const POT = '#d0683a'
export const CHALK = '#eef6ea'

export type Draw = (g: Grid) => void

/** un objet contouré · dessiné sur sa propre grille (coordonnées locales
 *  0..w-1, 0..h-1), puis collé avec son trait sombre autour */
export function put(s: Grid, x: number, y: number, w: number, h: number, draw: Draw) {
  const g = new Grid(w + 2, h + 2, 1, 1)
  draw(g)
  g.outline()
  s.blit(g, x - 1, y - 1)
}

/* ------------------------------------------------------------------ */
/* Une petite police 3 × 5 (écriteaux, tableaux)                        */
/* ------------------------------------------------------------------ */

export const FONT: Record<string, string> = {
  A: '010101111101101', B: '110101110101110', C: '011100100100011', D: '110101101101110',
  E: '111100110100111', F: '111100110100100', G: '011100101101011', H: '101101111101101',
  I: '111010010010111', K: '101101110101101', L: '100100100100111', M: '101111111101101',
  N: '10011101101110011001', O: '010101101101010', P: '110101110100100', R: '110101110101101',
  S: '011100010001110', T: '111010010010010', U: '101101101101111', V: '101101101101010',
  W: '101101111111101', X: '101101010101101', Y: '101101010010010',
  0: '111101101101111', 1: '010110010010111', 2: '110001010100111', 3: '110001010001110',
  4: '101101111001001', 5: '111100110001110',
  '+': '000010111010000', '=': '000111000111000', '%': '101001010100101', '$': '011110010011110',
  '!': '010010010000010', '?': '110001010000010', '{': '011010110010011', '}': '110010011010110',
  '<': '001010100010001', '>': '100010001010100', '/': '001001010100100', '_': '000000000000111',
}

/** écrire un texte en capitales de 5 pixels de haut (3 de large, 4 pour N) */
export function text(g: Grid, x: number, y: number, str: string, c: string) {
  let cx = x
  for (const ch of str) {
    const f = FONT[ch]
    const fw = f ? f.length / 5 : 3
    if (f) for (let i = 0; i < f.length; i++) if (f[i] === '1') g.set(cx + (i % fw), y + Math.floor(i / fw), c)
    cx += fw + 1
  }
}

/* ------------------------------------------------------------------ */
/* Murs, sols, structure                                               */
/* ------------------------------------------------------------------ */

export const IN_X = 5
export const IN_W = 150

export function wall(s: Grid, c: string) { s.rect(0, 4, FLOOR_W, 48, c) }

export function speckle(s: Grid, x: number, y: number, w: number, h: number, c: string, n: number, r: () => number) {
  for (let i = 0; i < n; i++) s.set(x + Math.floor(r() * w), y + Math.floor(r() * h), c)
}

/** des planches verticales */
export function vboards(s: Grid, y: number, h: number, base: string, step: number) {
  s.rect(0, y, FLOOR_W, h, base)
  for (let x = IN_X; x < IN_X + IN_W; x += step) {
    s.vline(x, y, h, shade(base, -0.22))
    s.vline(x + 1, y, h, shade(base, 0.1))
  }
}

/** des briques ou des parpaings */
export function bricks(s: Grid, y: number, h: number, base: string, mortar: string, bw: number, bh: number) {
  s.rect(0, y, FLOOR_W, h, base)
  for (let j = 0; j * bh < h; j++) {
    const yy = y + j * bh
    s.hline(0, yy, FLOOR_W, mortar)
    const off = j % 2 ? bw / 2 : 0
    for (let x = off; x < FLOOR_W; x += bw) s.vline(x, yy, Math.min(bh, y + h - yy), mortar)
    s.hline(0, yy + 1, FLOOR_W, shade(base, 0.08))
  }
}

/** un carrelage régulier */
export function tiles(s: Grid, x0: number, y: number, w: number, h: number, base: string, line: string, tw: number, th: number) {
  s.rect(x0, y, w, h, base)
  for (let yy = y; yy < y + h; yy += th) s.hline(x0, yy, w, line)
  for (let x = x0; x < x0 + w; x += tw) s.vline(x, y, h, line)
}

/** un soubassement en lambris */
export function wainscot(s: Grid, y0: number, c: string, step = 12) {
  s.rect(0, y0, FLOOR_W, 52 - y0, c)
  s.hline(0, y0, FLOOR_W, shade(c, 0.3))
  s.hline(0, y0 + 1, FLOOR_W, shade(c, -0.35))
  for (let x = IN_X + 6; x < IN_X + IN_W; x += step) {
    s.vline(x, y0 + 3, 52 - y0 - 6, shade(c, -0.2))
    s.vline(x + 1, y0 + 3, 52 - y0 - 6, shade(c, 0.15))
  }
}

/** les plinthes · un trait sombre au pied du mur */
export function skirting(s: Grid, c: string) {
  s.hline(0, 50, FLOOR_W, c)
  s.hline(0, 51, FLOOR_W, shade(c, -0.4))
}

/* les sols, de y = 52 à 63 */
export function planksH(s: Grid, base: string, len: number, r: () => number) {
  s.rect(0, 52, FLOOR_W, 12, base)
  for (let j = 0; j < 4; j++) {
    const y = 52 + j * 3
    s.hline(0, y + 2, FLOOR_W, shade(base, -0.25))
    s.hline(0, y, FLOOR_W, shade(base, 0.08))
    const off = Math.floor(r() * len)
    for (let x = off; x < FLOOR_W; x += len) s.vline(x, y, 2, shade(base, -0.25))
  }
}

export function checker(s: Grid, a: string, b: string, size: number, sh = size) {
  for (let y = 52; y < 64; y++) for (let x = 0; x < FLOOR_W; x++) {
    s.set(x, y, (Math.floor(x / size) + Math.floor((y - 52) / sh)) % 2 ? a : b)
  }
}

export function tatami(s: Grid) {
  const mat = '#cfc781', edge = '#3e6b3a'
  s.rect(0, 52, FLOOR_W, 12, mat)
  for (let y = 53; y < 64; y += 2) s.hline(0, y, FLOOR_W, shade(mat, -0.08))
  s.hline(0, 57, FLOOR_W, edge); s.hline(0, 58, FLOOR_W, shade(edge, 0.2))
  for (const x of [20, 52, 84, 116, 148]) s.vline(x, 52, 5, edge)
  for (const x of [36, 68, 100, 132]) s.vline(x, 59, 5, edge)
}

export function carpet(s: Grid, base: string, dot: string, step: number) {
  s.rect(0, 52, FLOOR_W, 12, base)
  for (let y = 53; y < 64; y += 3) for (let x = (y % 2) * 2; x < FLOOR_W; x += step) s.set(x, y, dot)
}


/** un halo de lumière sur le mur, en deux paliers (pixel art oblige) */
export function glow(s: Grid, cx: number, cy: number, r: number, amt: number) {
  for (let y = Math.max(4, cy - r); y <= Math.min(51, cy + r); y++) {
    for (let x = cx - r; x <= cx + r; x++) {
      const d = Math.hypot(x - cx, (y - cy) * 1.2)
      if (d > r) continue
      const c = s.get(x, y)
      if (!c || c === INK) continue
      s.set(x, y, shade(c, d < r * 0.55 ? amt : amt / 2))
    }
  }
}

/* ------------------------------------------------------------------ */
/* Les objets réutilisés                                               */
/* ------------------------------------------------------------------ */

/** une plante en pot, posée au sol (yb = la ligne du pied) */
export function plant(s: Grid, x: number, yb: number, w: number, h: number, leaf = LEAF, pot = POT) {
  put(s, x, yb - h, w, h, (g) => {
    const ph = Math.max(4, Math.floor(h / 3))
    const top = h - ph
    g.rect(1, top, w - 2, ph, pot)
    g.hline(0, top, w, shade(pot, 0.2))
    g.vline(w - 2, top + 1, ph - 1, shade(pot, -0.2))
    const cx = (w - 1) / 2
    const rad = Math.min(w / 2, top / 2 + 1)
    for (let y = 0; y < top; y++) for (let xx = 0; xx < w; xx++) {
      const d = Math.hypot(xx - cx, (y - top / 2) * (w / Math.max(top, 1)))
      if (d <= rad) g.set(xx, y, (xx + y) % 5 === 0 ? shade(leaf, 0.3) : (xx > cx + 1 ? shade(leaf, -0.2) : leaf))
    }
    g.vline(Math.round(cx), top - 2, 2, shade(leaf, -0.35))
  })
}

/** un coussin (zabuton) posé au sol */
export function cushion(s: Grid, x: number, y: number, c: string) {
  put(s, x, y, 12, 3, (g) => {
    g.round(0, 0, 12, 3, c)
    g.hline(1, 0, 10, shade(c, 0.3))
    g.hline(1, 2, 10, shade(c, -0.25))
    g.set(6, 1, shade(c, -0.4))
  })
}

/** une lanterne de papier suspendue à la poutre */
export function lantern(s: Grid, x: number, y: number, c: string) {
  s.vline(x + 3, 4, y - 4, INK)
  put(s, x, y, 7, 9, (g) => {
    g.rect(1, 0, 5, 1, INK)
    g.round(0, 1, 7, 7, c)
    for (const yy of [3, 5]) g.hline(0, yy, 7, shade(c, -0.25))
    g.vline(1, 2, 5, shade(c, 0.3))
    g.set(3, 4, '#ffe58a')
    g.rect(1, 8, 5, 1, INK)
  })
}

/** des dos de livres sur une étagère (dans une grille locale) */
export function books(g: Grid, x: number, y: number, w: number, h: number, pal: string[], r: () => number) {
  let cx = x
  while (cx < x + w - 1) {
    const bw = 2 + Math.floor(r() * 2)
    if (cx + bw > x + w) break
    const bh = h - Math.floor(r() * 3)
    const c = pal[Math.floor(r() * pal.length)]
    g.rect(cx, y + h - bh, bw, bh, c)
    g.vline(cx, y + h - bh, bh, shade(c, 0.25))
    g.set(cx + bw - 1, y + h - bh + 1, GOLD)
    cx += bw
    if (r() < 0.12) cx += 1
  }
}

/** une bibliothèque sur pied ou murale */
export function bookcase(s: Grid, x: number, y: number, w: number, h: number, rows: number, pal: string[], r: () => number, wood = WOOD) {
  put(s, x, y, w, h, (g) => {
    g.rect(0, 0, w, h, wood)
    g.hline(0, 0, w, shade(wood, 0.3))
    const inner = Math.floor((h - 2) / rows)
    for (let i = 0; i < rows; i++) {
      const yy = 1 + i * inner
      g.rect(1, yy, w - 2, inner - 1, shade(wood, -0.55))
      books(g, 1, yy + 1, w - 2, inner - 2, pal, r)
    }
  })
}

/** un tableau encadré (fond + cadre) */
export function board(g: Grid, w: number, h: number, frame: string, fill: string) {
  g.rect(0, 0, w, h, frame)
  g.hline(0, 0, w, shade(frame, 0.3))
  g.rect(1, 1, w - 2, h - 2, fill)
}

/** une horloge murale ronde */
export function clock(s: Grid, x: number, y: number, rim: string) {
  put(s, x, y, 9, 9, (g) => {
    g.round(0, 0, 9, 9, rim)
    g.rect(1, 2, 7, 5, WHITE); g.rect(2, 1, 5, 7, WHITE)
    g.vline(4, 2, 3, INK); g.hline(4, 4, 3, INK)
    g.set(4, 1, rim); g.set(4, 7, rim); g.set(1, 4, rim); g.set(7, 4, rim)
  })
}

/** une table basse ou un bureau · plateau, tranche, pieds */
export function table(s: Grid, x: number, y: number, w: number, h: number, c: string) {
  put(s, x, y, w, h, (g) => {
    g.rect(0, 0, w, 2, c)
    g.hline(0, 0, w, shade(c, 0.3))
    g.hline(0, 2, w, shade(c, -0.3))
    g.rect(1, 3, 2, h - 3, shade(c, -0.15))
    g.rect(w - 3, 3, 2, h - 3, shade(c, -0.15))
  })
}

/** une chaise vue de face */
export function chair(s: Grid, x: number, y: number, c: string) {
  put(s, x, y, 7, 12, (g) => {
    g.rect(0, 0, 7, 5, c)
    g.hline(0, 0, 7, shade(c, 0.3))
    g.rect(0, 6, 7, 2, shade(c, -0.1))
    g.vline(0, 8, 4, shade(c, -0.3)); g.vline(6, 8, 4, shade(c, -0.3))
  })
}

/** un écran (moniteur) · w × h, sans pied */
export function screen(g: Grid, w: number, h: number, bezel: string, fill: string) {
  g.rect(0, 0, w, h, bezel)
  g.rect(1, 1, w - 2, h - 2, fill)
  g.set(w - 2, h - 1, '#5cff8a')
}

/* ------------------------------------------------------------------ */
/* Les couleurs voisines · une même famille, plusieurs nuances          */
/* ------------------------------------------------------------------ */

/** une couleur en teinte (0..360), saturation et luminosité (0..1) */
export function toHsl(hex: string): [number, number, number] {
  const n = parseInt(hex.replace('#', ''), 16)
  const r = ((n >> 16) & 255) / 255, g = ((n >> 8) & 255) / 255, b = (n & 255) / 255
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  const l = (max + min) / 2
  if (max === min) return [0, 0, l]
  const d = max - min
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  let h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4
  h *= 60
  return [h, s, l]
}

export function fromHsl(h: number, s: number, l: number): string {
  h = ((h % 360) + 360) % 360
  s = Math.max(0, Math.min(1, s)); l = Math.max(0, Math.min(1, l))
  const k = (n: number) => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = (n: number) => Math.round(255 * (l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1))))
  return `#${((1 << 24) | (f(0) << 16) | (f(8) << 8) | f(4)).toString(16).slice(1)}`
}

/** décaler une couleur · dh en degrés, ds et dl en absolu */
export function tone(hex: string, dh: number, ds = 0, dl = 0): string {
  const [h, s, l] = toHsl(hex)
  return fromHsl(h + dh, s + ds, Math.max(0.08, Math.min(0.95, l + dl)))
}

/** mélanger deux couleurs (t = 0 : a, t = 1 : b) */
export function mix(a: string, b: string, t: number): string {
  const p = (h: string) => parseInt(h.replace('#', ''), 16)
  const x = p(a), y = p(b)
  const ch = (sh: number) => Math.round(((x >> sh) & 255) * (1 - t) + ((y >> sh) & 255) * t)
  return `#${((1 << 24) | (ch(16) << 16) | (ch(8) << 8) | ch(0)).toString(16).slice(1)}`
}

/** un disque plein */
export function disc(g: Grid, cx: number, cy: number, rad: number, c: string) {
  for (let y = Math.floor(cy - rad); y <= Math.ceil(cy + rad); y++) {
    for (let x = Math.floor(cx - rad); x <= Math.ceil(cx + rad); x++) {
      if (Math.hypot(x - cx, y - cy) <= rad + 0.15) g.set(x, y, c)
    }
  }
}

/** une ligne d'un point à un autre */
export function line(g: Grid, x1: number, y1: number, x2: number, y2: number, c: string) {
  const n = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1), 1)
  for (let i = 0; i <= n; i++) g.set(Math.round(x1 + ((x2 - x1) * i) / n), Math.round(y1 + ((y2 - y1) * i) / n), c)
}

/* ------------------------------------------------------------------ */
/* La palette d'un étage et le contexte de dessin                       */
/* ------------------------------------------------------------------ */

export interface Pal {
  wall: string
  alt: string
  deep: string
  light: string
  trim: string
  wood: string
  paper: string
  floor: string
  floor2: string
  accent: string
  tint: string
  dark: boolean
  books: string[]
}

export interface Ctx {
  s: Grid
  r: () => number
  P: Pal
  tint: string
  floor: number
  /** la vue des fenêtres de l'étage (montagne, mer, ville...) */
  view: number
}

/** un tirage dans une liste */
export const pick = <T,>(r: () => number, a: readonly T[]): T => a[Math.floor(r() * a.length)]
