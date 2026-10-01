// LES ÉTAGES DU TEMPLE · une pièce par étage, vue de face, en coupe.
//
// Demandé : « fais les dojo sous la forme d'un temple avec des étages [...]
// les décors des dojos en fonction des différentes spécialités métiers ».
// Référence : une tour en pixel art où chaque étage est une pièce à thème,
// contour sombre épais, couleurs franches.
//
// LE CONTRAT DE MISE EN PAGE (d'autres fichiers posent dessus les personnages
// et une porte cliquable) · grille de 160 × 64 :
//   - sol praticable : y = 52..63 ;
//   - porte du fond (vers l'étage du dessus) : cadre x = 70..89, y = 18..51,
//     écriteau à flèche au-dessus : y = 12..17 ;
//   - le maître se tient vers x = 18..44, les élèves vers x = 100..150, entre
//     y = 20 et 52 : dans ces zones, rien de haut posé au sol (sommet sous
//     y = 40), seulement des objets accrochés au mur du fond.
import { Grid, shade, rng, hashString, OUTLINE } from '../../pixel/grid'
import type { DojoKit } from '../../data/packs'

export const FLOOR_W = 160
export const FLOOR_H = 64

/* ------------------------------------------------------------------ */
/* La palette commune                                                  */
/* ------------------------------------------------------------------ */

const WOOD = '#9a6236'
const WOOD_D = '#64391d'
const WOOD_L = '#c4864f'
const PILLAR = '#b8382c'
const PAPER = '#fff4cf'
const GOLD = '#f5c542'
const RED = '#e5413a'
const WHITE = '#ffffff'
const INK = OUTLINE
const LEAF = '#3fb35a'
const POT = '#d0683a'
const CHALK = '#eef6ea'

type Draw = (g: Grid) => void

/** un objet contouré · dessiné sur sa propre grille (coordonnées locales
 *  0..w-1, 0..h-1), puis collé avec son trait sombre autour */
function put(s: Grid, x: number, y: number, w: number, h: number, draw: Draw) {
  const g = new Grid(w + 2, h + 2, 1, 1)
  draw(g)
  g.outline()
  s.blit(g, x - 1, y - 1)
}

/* ------------------------------------------------------------------ */
/* Une petite police 3 × 5 (écriteaux, tableaux)                        */
/* ------------------------------------------------------------------ */

const FONT: Record<string, string> = {
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
function text(g: Grid, x: number, y: number, str: string, c: string) {
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

const IN_X = 5
const IN_W = 150

function wall(s: Grid, c: string) { s.rect(0, 4, FLOOR_W, 48, c) }

function speckle(s: Grid, x: number, y: number, w: number, h: number, c: string, n: number, r: () => number) {
  for (let i = 0; i < n; i++) s.set(x + Math.floor(r() * w), y + Math.floor(r() * h), c)
}

/** des planches verticales */
function vboards(s: Grid, y: number, h: number, base: string, step: number) {
  s.rect(0, y, FLOOR_W, h, base)
  for (let x = IN_X; x < IN_X + IN_W; x += step) {
    s.vline(x, y, h, shade(base, -0.22))
    s.vline(x + 1, y, h, shade(base, 0.1))
  }
}

/** des briques ou des parpaings */
function bricks(s: Grid, y: number, h: number, base: string, mortar: string, bw: number, bh: number) {
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
function tiles(s: Grid, x0: number, y: number, w: number, h: number, base: string, line: string, tw: number, th: number) {
  s.rect(x0, y, w, h, base)
  for (let yy = y; yy < y + h; yy += th) s.hline(x0, yy, w, line)
  for (let x = x0; x < x0 + w; x += tw) s.vline(x, y, h, line)
}

/** un soubassement en lambris */
function wainscot(s: Grid, y0: number, c: string, step = 12) {
  s.rect(0, y0, FLOOR_W, 52 - y0, c)
  s.hline(0, y0, FLOOR_W, shade(c, 0.3))
  s.hline(0, y0 + 1, FLOOR_W, shade(c, -0.35))
  for (let x = IN_X + 6; x < IN_X + IN_W; x += step) {
    s.vline(x, y0 + 3, 52 - y0 - 6, shade(c, -0.2))
    s.vline(x + 1, y0 + 3, 52 - y0 - 6, shade(c, 0.15))
  }
}

/** les plinthes · un trait sombre au pied du mur */
function skirting(s: Grid, c: string) {
  s.hline(0, 50, FLOOR_W, c)
  s.hline(0, 51, FLOOR_W, shade(c, -0.4))
}

/* les sols, de y = 52 à 63 */
function planksH(s: Grid, base: string, len: number, r: () => number) {
  s.rect(0, 52, FLOOR_W, 12, base)
  for (let j = 0; j < 4; j++) {
    const y = 52 + j * 3
    s.hline(0, y + 2, FLOOR_W, shade(base, -0.25))
    s.hline(0, y, FLOOR_W, shade(base, 0.08))
    const off = Math.floor(r() * len)
    for (let x = off; x < FLOOR_W; x += len) s.vline(x, y, 2, shade(base, -0.25))
  }
}

function checker(s: Grid, a: string, b: string, size: number, sh = size) {
  for (let y = 52; y < 64; y++) for (let x = 0; x < FLOOR_W; x++) {
    s.set(x, y, (Math.floor(x / size) + Math.floor((y - 52) / sh)) % 2 ? a : b)
  }
}

function tatami(s: Grid) {
  const mat = '#cfc781', edge = '#3e6b3a'
  s.rect(0, 52, FLOOR_W, 12, mat)
  for (let y = 53; y < 64; y += 2) s.hline(0, y, FLOOR_W, shade(mat, -0.08))
  s.hline(0, 57, FLOOR_W, edge); s.hline(0, 58, FLOOR_W, shade(edge, 0.2))
  for (const x of [20, 52, 84, 116, 148]) s.vline(x, 52, 5, edge)
  for (const x of [36, 68, 100, 132]) s.vline(x, 59, 5, edge)
}

function carpet(s: Grid, base: string, dot: string, step: number) {
  s.rect(0, 52, FLOOR_W, 12, base)
  for (let y = 53; y < 64; y += 3) for (let x = (y % 2) * 2; x < FLOOR_W; x += step) s.set(x, y, dot)
}

/** l'ombre du mur sur le sol, le bord avant de la coupe */
function floorEdges(s: Grid) {
  for (let x = 0; x < FLOOR_W; x++) {
    const c = s.get(x, 52)
    if (c) s.set(x, 52, shade(c, -0.3))
  }
  s.hline(0, 63, FLOOR_W, INK)
}

/** les poutres du plafond et les piliers laqués des deux côtés */
function structure(s: Grid, tint: string) {
  s.rect(0, 0, FLOOR_W, 3, WOOD_D)
  s.hline(0, 0, FLOOR_W, WOOD)
  for (let x = 8; x < FLOOR_W; x += 16) s.rect(x, 1, 2, 2, WOOD)
  s.hline(0, 3, FLOOR_W, tint)
  for (const [x, flip] of [[0, false], [155, true]] as const) {
    const cols = [INK, shade(PILLAR, 0.25), PILLAR, shade(PILLAR, -0.3), INK]
    const order = flip ? [...cols].reverse() : cols
    order.forEach((c, i) => s.vline(x + i, 0, 64, c))
    for (const by of [4, 48]) {
      s.rect(x + 1, by, 3, 2, GOLD)
      s.hline(x + 1, by + 1, 3, shade(GOLD, -0.25))
    }
  }
}

/** un halo de lumière sur le mur, en deux paliers (pixel art oblige) */
function glow(s: Grid, cx: number, cy: number, r: number, amt: number) {
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

/** la porte du fond · un shoji éclairé de l'intérieur, et son écriteau */
function door(s: Grid, tint: string) {
  glow(s, 79, 34, 16, 0.12)
  put(s, 71, 19, 18, 33, (g) => {
    g.rect(0, 0, 18, 33, WOOD_D)
    g.hline(0, 0, 18, WOOD_L)
    g.hline(0, 1, 18, WOOD)
    for (const px of [1, 10]) {
      for (let y = 2; y < 32; y++) {
        const mid = Math.abs(y - 17) < 8
        g.hline(px, y, 7, mid ? PAPER : '#ffe7a3')
      }
      for (let y = 6; y < 32; y += 6) g.hline(px, y, 7, '#d29a5c')
      g.vline(px + 3, 2, 30, '#d29a5c')
      g.set(px + 1, 3, WHITE); g.set(px + 1, 4, WHITE)
    }
    g.rect(8, 2, 2, 30, WOOD_D)
    g.rect(7, 16, 1, 3, WOOD_D); g.rect(10, 16, 1, 3, WOOD_D)
    g.hline(0, 32, 18, WOOD)
  })
  put(s, 75, 13, 10, 4, (g) => {
    g.rect(0, 0, 10, 4, tint)
    g.hline(0, 0, 10, shade(tint, 0.35))
    g.hline(0, 3, 10, shade(tint, -0.3))
    g.hline(4, 0, 2, WHITE); g.hline(3, 1, 4, WHITE); g.hline(2, 2, 6, WHITE); g.hline(4, 3, 2, WHITE)
  })
}

/** deux appliques de part et d'autre de la porte */
function sconces(s: Grid) {
  for (const x of [62, 93]) {
    glow(s, x + 2, 26, 7, 0.16)
    put(s, x, 22, 5, 8, (g) => {
      g.rect(0, 0, 5, 8, WOOD_D)
      g.rect(1, 1, 3, 6, '#ffd36b')
      g.set(2, 3, WHITE); g.set(2, 4, '#fff3b0')
      g.hline(0, 0, 5, WOOD)
    })
  }
}

/** la flaque de lumière de la porte sur le sol */
function doorLight(s: Grid) {
  for (let y = 53; y < 58; y++) {
    const inset = (y - 53)
    for (let x = 72 + inset; x <= 87 - inset; x++) {
      const c = s.get(x, y)
      if (c) s.set(x, y, shade(c, 0.18))
    }
  }
}

/* ------------------------------------------------------------------ */
/* Les objets réutilisés                                               */
/* ------------------------------------------------------------------ */

/** une plante en pot, posée au sol (yb = la ligne du pied) */
function plant(s: Grid, x: number, yb: number, w: number, h: number, leaf = LEAF, pot = POT) {
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
function cushion(s: Grid, x: number, y: number, c: string) {
  put(s, x, y, 12, 3, (g) => {
    g.round(0, 0, 12, 3, c)
    g.hline(1, 0, 10, shade(c, 0.3))
    g.hline(1, 2, 10, shade(c, -0.25))
    g.set(6, 1, shade(c, -0.4))
  })
}

/** une lanterne de papier suspendue à la poutre */
function lantern(s: Grid, x: number, y: number, c: string) {
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
function books(g: Grid, x: number, y: number, w: number, h: number, pal: string[], r: () => number) {
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
function bookcase(s: Grid, x: number, y: number, w: number, h: number, rows: number, pal: string[], r: () => number, wood = WOOD) {
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
function board(g: Grid, w: number, h: number, frame: string, fill: string) {
  g.rect(0, 0, w, h, frame)
  g.hline(0, 0, w, shade(frame, 0.3))
  g.rect(1, 1, w - 2, h - 2, fill)
}

/** une horloge murale ronde */
function clock(s: Grid, x: number, y: number, rim: string) {
  put(s, x, y, 9, 9, (g) => {
    g.round(0, 0, 9, 9, rim)
    g.rect(1, 2, 7, 5, WHITE); g.rect(2, 1, 5, 7, WHITE)
    g.vline(4, 2, 3, INK); g.hline(4, 4, 3, INK)
    g.set(4, 1, rim); g.set(4, 7, rim); g.set(1, 4, rim); g.set(7, 4, rim)
  })
}

/** une table basse ou un bureau · plateau, tranche, pieds */
function table(s: Grid, x: number, y: number, w: number, h: number, c: string) {
  put(s, x, y, w, h, (g) => {
    g.rect(0, 0, w, 2, c)
    g.hline(0, 0, w, shade(c, 0.3))
    g.hline(0, 2, w, shade(c, -0.3))
    g.rect(1, 3, 2, h - 3, shade(c, -0.15))
    g.rect(w - 3, 3, 2, h - 3, shade(c, -0.15))
  })
}

/** une chaise vue de face */
function chair(s: Grid, x: number, y: number, c: string) {
  put(s, x, y, 7, 12, (g) => {
    g.rect(0, 0, 7, 5, c)
    g.hline(0, 0, 7, shade(c, 0.3))
    g.rect(0, 6, 7, 2, shade(c, -0.1))
    g.vline(0, 8, 4, shade(c, -0.3)); g.vline(6, 8, 4, shade(c, -0.3))
  })
}

/** un écran (moniteur) · w × h, sans pied */
function screen(g: Grid, w: number, h: number, bezel: string, fill: string) {
  g.rect(0, 0, w, h, bezel)
  g.rect(1, 1, w - 2, h - 2, fill)
  g.set(w - 2, h - 1, '#5cff8a')
}

/* ------------------------------------------------------------------ */
/* Les seize décors                                                    */
/* ------------------------------------------------------------------ */

type Kit = (s: Grid, tint: string, r: () => number) => void

const BOOK_PAL = ['#c0392b', '#2e6fb5', '#2f9e5a', '#e0a93a', '#8e44ad', '#d35f2a', '#1f7a7a']

const KITS: Record<DojoKit, Kit> = {
  /* la salle du week-end gratuit · tableau des bases de l'IA, tatamis, rouleaux */
  course(s, tint, r) {
    wall(s, '#f2dfba')
    speckle(s, 5, 4, 150, 36, '#e8d2a8', 160, r)
    wainscot(s, 40, '#a8683a')
    tatami(s)
    // le tableau noir : un petit réseau de neurones, un triangle, un carré
    put(s, 10, 8, 38, 24, (g) => {
      board(g, 38, 24, WOOD, '#2f5d4a')
      g.hline(1, 22, 36, WOOD_L)
      const nodes = [[5, 6], [5, 12], [5, 18], [14, 9], [14, 15], [22, 12]]
      const links = [[0, 3], [0, 4], [1, 3], [1, 4], [2, 3], [2, 4], [3, 5], [4, 5]]
      for (const [a, b] of links) {
        const [x1, y1] = nodes[a], [x2, y2] = nodes[b]
        const n = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1))
        for (let i = 0; i <= n; i++) g.set(Math.round(x1 + ((x2 - x1) * i) / n), Math.round(y1 + ((y2 - y1) * i) / n), '#8fb8a2')
      }
      for (const [nx, ny] of nodes) { g.rect(nx - 1, ny - 1, 3, 3, CHALK); g.set(nx, ny, '#2f5d4a') }
      // triangle et carré
      for (let i = 0; i < 5; i++) { g.set(29 - i, 4 + i * 1, CHALK); g.set(29 + i, 4 + i, CHALK) }
      g.hline(25, 9, 9, CHALK)
      g.rect(27, 13, 6, 5, CHALK); g.rect(28, 14, 4, 3, '#2f5d4a')
      g.rect(30, 21, 3, 1, WHITE)
    })
    // la table basse et son petit robot
    put(s, 49, 33, 9, 10, (g) => {
      g.rect(0, 2, 9, 7, '#b9c6d8')
      g.vline(4, 0, 2, INK); g.set(4, 0, RED)
      g.rect(1, 3, 7, 4, '#2b3550')
      g.set(2, 4, '#6ff0ff'); g.set(6, 4, '#6ff0ff')
      g.hline(3, 6, 3, '#6ff0ff')
      g.rect(2, 9, 5, 1, '#8fa0b8')
    })
    table(s, 46, 44, 16, 8, '#7a4526')
    put(s, 58, 41, 5, 3, (g) => { g.rect(0, 0, 5, 3, WHITE); g.vline(2, 0, 3, '#c9c9c9') })
    // les rouleaux suspendus
    const inks = ['#2b2b2b', tint, '#b23a2e']
    ;[104, 121, 138].forEach((x, i) => {
      s.vline(x + 4, 4, 3, INK)
      put(s, x, 7, 9, 24, (g) => {
        g.rect(0, 0, 9, 2, WOOD_D)
        g.rect(1, 2, 7, 20, '#f6ecd3')
        g.vline(1, 2, 20, '#e2d3ae')
        g.rect(0, 22, 9, 2, WOOD_D)
        const c = inks[i]
        g.rect(3, 5, 3, 1, c); g.vline(4, 6, 5, c); g.set(3, 9, c); g.set(5, 10, c)
        g.rect(3, 13, 3, 3, c); g.set(4, 14, '#f6ecd3')
        g.rect(5, 19, 2, 2, RED)
      })
    })
    for (const x of [102, 120, 138]) cushion(s, x, 52, tint)
  },

  /* la bibliothèque de la formation complète · étagères, rouleaux, lanternes */
  study(s, tint, r) {
    vboards(s, 4, 48, '#5b3a24', 8)
    wainscot(s, 42, '#3f2716', 16)
    planksH(s, '#7a4a2a', 22, r)
    // tapis aux couleurs de la formation
    put(s, 100, 54, 52, 6, (g) => {
      g.rect(0, 0, 52, 6, tint)
      g.rect(2, 1, 48, 4, shade(tint, -0.25))
      for (let x = 4; x < 48; x += 4) g.set(x, 3, GOLD)
    })
    bookcase(s, 5, 6, 13, 46, 5, BOOK_PAL, r)
    bookcase(s, 46, 10, 14, 42, 4, BOOK_PAL, r, '#7a4526')
    // étagère murale au-dessus du maître
    bookcase(s, 19, 7, 19, 9, 1, BOOK_PAL, r, '#7a4526')
    // les casiers à rouleaux
    put(s, 102, 7, 41, 13, (g) => {
      g.rect(0, 0, 41, 13, '#7a4526')
      g.hline(0, 0, 41, '#a0643a')
      for (let cx = 0; cx < 5; cx++) for (let cy = 0; cy < 2; cy++) {
        const x = 1 + cx * 8, y = 1 + cy * 6
        g.rect(x, y, 7, 5, '#2a170c')
        for (const [dx, dy] of [[1, 1], [4, 1], [2, 3]]) {
          g.rect(x + dx, y + dy, 2, 2, (cx + cy + dx) % 3 ? PAPER : '#e3c27a')
          g.set(x + dx, y + dy, '#c9a35a')
        }
      }
    })
    lantern(s, 39, 16, RED)
    lantern(s, 146, 18, tint)
    // un pupitre de lecture, livre ouvert
    put(s, 132, 41, 14, 11, (g) => {
      g.rect(1, 0, 12, 3, WHITE)
      g.vline(7, 0, 3, '#d8cfb8')
      g.hline(2, 1, 4, '#9a9a9a'); g.hline(8, 1, 4, '#9a9a9a')
      g.rect(0, 3, 14, 2, '#7a4526')
      g.rect(5, 5, 4, 6, '#5a3319')
    })
  },

  /* le growth marketer · tableaux de bord, courbes qui montent, entonnoir */
  saas(s, tint, r) {
    wall(s, '#d6ebf7')
    for (let y = 8; y < 44; y += 8) s.hline(0, y, FLOOR_W, '#c7e0ef')
    for (let x = 9; x < 155; x += 10) s.vline(x, 4, 40, '#c7e0ef')
    wainscot(s, 44, '#f4f8fb', 20)
    checker(s, '#5c6b80', '#53627a', 8, 4)
    speckle(s, 0, 53, 160, 10, '#6c7b92', 80, r)
    // le grand tableau de bord, histogramme montant
    put(s, 9, 7, 38, 25, (g) => {
      screen(g, 38, 25, '#2a3346', '#162036')
      for (let i = 0; i < 3; i++) {
        g.rect(2 + i * 11, 2, 10, 5, '#24314d')
        g.hline(3 + i * 11, 3, 4, '#8fa6c8')
        g.hline(3 + i * 11, 5, 6 - i, ['#5cff8a', tint, '#ffd34d'][i])
      }
      const hs = [3, 5, 6, 8, 10, 12, 14]
      hs.forEach((h, i) => g.rect(4 + i * 4, 22 - h, 3, h, i === hs.length - 1 ? tint : '#4fc3f7'))
      g.hline(2, 22, 34, '#8fa6c8')
    })
    // l'affiche de l'entonnoir
    put(s, 48, 8, 13, 22, (g) => {
      board(g, 13, 22, WHITE, '#f6f2ff')
      const bands = ['#7c3aed', '#3b82f6', '#22c55e', '#f59e0b']
      bands.forEach((c, i) => {
        const y = 3 + i * 4
        const half = 5 - i
        g.rect(6 - half, y, half * 2 + 1, 3, c)
      })
      g.rect(5, 19, 3, 1, '#f59e0b')
    })
    // le bureau debout et son portable
    put(s, 49, 34, 12, 6, (g) => {
      g.rect(1, 0, 10, 5, '#cfd6e0')
      g.rect(2, 1, 8, 3, '#2b6cb0')
      g.hline(3, 2, 4, '#9be7ff')
      g.rect(0, 5, 12, 1, '#9aa5b4')
    })
    table(s, 46, 40, 18, 12, '#e6e9ee')
    // la courbe qui monte, au-dessus des élèves
    put(s, 103, 7, 46, 20, (g) => {
      screen(g, 46, 20, '#2a3346', '#f8fbff')
      for (let x = 3; x < 43; x += 5) g.vline(x, 2, 16, '#e3ebf5')
      const pts = [16, 15, 15, 13, 13, 11, 10, 8, 7, 5, 3]
      for (let i = 0; i < pts.length - 1; i++) {
        const x1 = 3 + i * 4, y1 = pts[i], y2 = pts[i + 1]
        for (let k = 0; k <= 4; k++) {
          const yy = Math.round(y1 + ((y2 - y1) * k) / 4)
          g.set(x1 + k, yy, '#16a34a'); g.set(x1 + k, yy + 1, '#16a34a')
          for (let f = yy + 2; f < 18; f++) g.set(x1 + k, f, '#c9f2d6')
        }
      }
      g.set(42, 3, '#16a34a'); g.rect(41, 2, 2, 1, '#16a34a'); g.set(42, 4, '#16a34a')
    })
    plant(s, 140, 52, 12, 14, '#2fa84f', '#f4f8fb')
  },

  /* la communication · micro, lumière annulaire, panneaux acoustiques, ON AIR */
  podcast(s, tint, r) {
    wall(s, '#3b2a63')
    speckle(s, 0, 4, 160, 48, '#43316e', 120, r)
    // panneaux de mousse en damier pyramidal
    const foam = (x0: number, y0: number, cols: number, rowsN: number) => {
      for (let i = 0; i < cols; i++) for (let j = 0; j < rowsN; j++) {
        const x = x0 + i * 6, y = y0 + j * 6
        const base = (i + j) % 2 ? '#5a3f8f' : '#4a3278'
        s.rect(x, y, 6, 6, base)
        s.hline(x, y, 6, shade(base, 0.25)); s.vline(x, y, 6, shade(base, 0.15))
        s.hline(x, y + 5, 6, shade(base, -0.35)); s.vline(x + 5, y, 6, shade(base, -0.25))
        s.set(x + 2, y + 2, shade(base, 0.35))
      }
      s.rect(x0 - 1, y0 - 1, cols * 6 + 2, 1, INK); s.rect(x0 - 1, y0 + rowsN * 6, cols * 6 + 2, 1, INK)
      s.rect(x0 - 1, y0, 1, rowsN * 6, INK); s.rect(x0 + cols * 6, y0, 1, rowsN * 6, INK)
    }
    foam(17, 16, 5, 4)
    foam(103, 8, 8, 4)
    wainscot(s, 44, '#2a1f47', 14)
    carpet(s, '#2a2340', '#352c52', 5)
    put(s, 100, 54, 54, 7, (g) => {
      g.round(0, 0, 54, 7, tint)
      g.round(2, 1, 50, 5, shade(tint, -0.3))
      for (let x = 5; x < 50; x += 6) g.set(x, 3, shade(tint, 0.3))
    })
    // ON AIR, allumé
    glow(s, 31, 9, 12, 0.12)
    put(s, 18, 6, 27, 8, (g) => {
      g.rect(0, 0, 27, 8, '#7a1010')
      g.rect(1, 1, 25, 6, '#ff3b3b')
      g.hline(1, 1, 25, '#ff7a7a')
      text(g, 2, 2, 'ON AIR', WHITE)
    })
    // la lumière annulaire
    put(s, 5, 12, 13, 40, (g) => {
      for (let y = 0; y < 13; y++) for (let x = 0; x < 13; x++) {
        const d = Math.hypot(x - 6, y - 6)
        if (d <= 6.4 && d >= 3.6) g.set(x, y, d > 5.2 ? '#cfd3ff' : '#ffffff')
      }
      g.vline(6, 13, 22, '#5a5f73')
      g.hline(2, 35, 9, '#5a5f73'); g.set(1, 36, '#5a5f73'); g.set(11, 36, '#5a5f73')
      g.vline(1, 36, 4, '#5a5f73'); g.vline(11, 36, 4, '#5a5f73'); g.vline(6, 35, 5, '#5a5f73')
    })
    // le micro sur sa perche
    put(s, 46, 18, 16, 34, (g) => {
      g.vline(13, 6, 26, '#6b6f80')
      g.hline(9, 32, 7, '#6b6f80'); g.hline(10, 33, 5, '#4a4d5c')
      for (let i = 0; i < 6; i++) g.set(13 - i, 6 - Math.floor(i / 2), '#6b6f80')
      g.round(3, 0, 6, 11, '#3a3d4a')
      for (let y = 2; y < 9; y += 2) g.hline(4, y, 4, '#8a8fa3')
      g.vline(4, 1, 8, '#9aa0b8')
      // filtre anti-pop
      for (let y = 1; y < 9; y++) g.set(0, y, '#20222b')
      g.vline(1, 2, 6, '#2c2f3a')
    })
    // les enceintes et la table des élèves
    put(s, 92, 34, 8, 18, (g) => {
      g.rect(0, 0, 8, 18, '#22202e')
      for (const [cy, rr] of [[4, 2], [12, 3]]) {
        for (let y = -rr; y <= rr; y++) for (let x = -rr; x <= rr; x++) if (Math.hypot(x, y) <= rr) g.set(4 + x, cy + y, '#4a4660')
        g.set(4, cy, '#8a86a8')
      }
    })
    table(s, 108, 45, 40, 7, '#5e4a8a')
    for (const x of [114, 136]) {
      put(s, x, 40, 3, 5, (g) => { g.rect(0, 0, 3, 3, '#3a3d4a'); g.set(1, 1, '#8a8fa3'); g.vline(1, 3, 2, '#6b6f80') })
    }
  },

  /* le fondateur · une petite scène, l'écran des slides, le trophée, des plantes */
  pitch(s, tint) {
    wall(s, '#1f2a4d')
    for (let x = 8; x < 155; x += 12) s.vline(x, 4, 40, '#26335c')
    // cônes de projecteurs
    for (const cx of [32, 126]) {
      for (let y = 4; y < 52; y++) {
        const half = Math.floor((y - 4) / 3)
        for (let x = cx - half; x <= cx + half; x++) { const c = s.get(x, y); if (c) s.set(x, y, shade(c, 0.1)) }
      }
      put(s, cx - 2, 4, 5, 3, (g) => { g.rect(0, 0, 5, 3, '#30343f'); g.hline(1, 2, 3, '#fff6c2') })
    }
    wainscot(s, 46, '#141c36', 12)
    carpet(s, '#9c1f2c', '#b52a38', 6)
    // la scène, à gauche
    s.rect(0, 52, 66, 7, '#c48a52')
    for (let x = 4; x < 66; x += 9) s.vline(x, 52, 7, '#a06c3c')
    s.hline(0, 52, 66, '#e0a96c')
    s.rect(0, 59, 66, 4, '#3a2416')
    for (let x = 6; x < 64; x += 8) s.set(x, 60, GOLD)
    // les rideaux
    put(s, 5, 4, 9, 47, (g) => {
      g.rect(0, 0, 9, 47, '#b3202f')
      for (const x of [2, 5, 7]) g.vline(x, 0, 47, '#8a1724')
      g.vline(1, 0, 47, '#d63a49')
      g.rect(0, 0, 9, 3, GOLD)
    })
    // l'écran des slides
    put(s, 101, 7, 48, 27, (g) => {
      g.rect(0, 0, 48, 2, '#30343f')
      g.rect(1, 2, 46, 24, WHITE)
      g.hline(1, 25, 46, '#d7dbe6')
      g.rect(4, 4, 20, 2, tint)
      g.hline(4, 7, 14, '#9aa3b8')
      const hs = [4, 7, 10, 14]
      hs.forEach((h, i) => g.rect(5 + i * 5, 22 - h, 3, h, i === 3 ? '#22c55e' : '#60a5fa'))
      g.hline(4, 22, 20, '#5a6278')
      for (let y = -5; y <= 5; y++) for (let x = -5; x <= 5; x++) {
        if (Math.hypot(x, y) > 5.3) continue
        g.set(36 + x, 15 + y, x >= 0 && y < 0 ? '#f59e0b' : (x < 0 ? tint : '#22c55e'))
      }
    })
    // le trophée sur son socle
    put(s, 47, 23, 15, 29, (g) => {
      g.rect(3, 0, 9, 7, GOLD)
      g.rect(4, 7, 7, 2, GOLD)
      g.vline(1, 1, 4, GOLD); g.vline(13, 1, 4, GOLD); g.set(2, 1, GOLD); g.set(12, 1, GOLD); g.set(2, 5, GOLD); g.set(12, 5, GOLD)
      g.vline(4, 1, 6, '#fff1a8')
      g.vline(11, 1, 7, shade(GOLD, -0.3))
      g.rect(6, 9, 3, 3, shade(GOLD, -0.2))
      g.rect(4, 12, 7, 2, shade(GOLD, -0.1))
      g.set(7, 3, WHITE)
      g.rect(1, 14, 13, 15, '#2a2f45')
      g.hline(1, 14, 13, '#454c6b')
      g.rect(4, 18, 7, 3, GOLD)
    })
    plant(s, 92, 52, 8, 16, '#2fae55', '#e6e6ee')
    plant(s, 146, 52, 9, 12, '#43c46a', '#e6e6ee')
  },

  /* le chef de produit · kanban à post-it, maquettes de téléphones, baie serveur */
  app(s, tint, r) {
    wall(s, '#e8e3f6')
    for (let y = 7; y < 50; y += 5) for (let x = 7; x < 155; x += 5) s.set(x, y, '#d8d0ef')
    skirting(s, '#c7bde3')
    planksH(s, '#d8b07a', 26, r)
    // les maquettes de téléphones
    put(s, 9, 7, 38, 26, (g) => {
      board(g, 38, 26, '#ffffff', '#ffffff')
      g.rect(1, 1, 36, 24, '#f1effa')
      ;[2, 14, 26].forEach((x, i) => {
        g.round(x, 2, 10, 21, '#2b2d3a')
        g.rect(x + 1, 4, 8, 16, i === 1 ? '#fef3c7' : '#eaf2ff')
        g.rect(x + 2, 5, 6, 3, [tint, '#f59e0b', '#22c55e'][i])
        g.hline(x + 2, 10, 6, '#b8c0d8'); g.hline(x + 2, 12, 4, '#b8c0d8')
        g.rect(x + 2, 15, 6, 3, '#d7dcef')
        g.hline(x + 4, 21, 2, '#6b6f80')
      })
    })
    // la baie serveur
    put(s, 47, 12, 14, 40, (g) => {
      g.rect(0, 0, 14, 40, '#2a2d3a')
      g.hline(0, 0, 14, '#454a5e')
      for (let y = 2; y < 37; y += 4) {
        g.rect(1, y, 12, 3, '#3a3e50')
        g.hline(2, y + 1, 6, '#1d2029')
        g.set(10, y + 1, (y / 4) % 3 === 0 ? '#ff5c5c' : '#5cff8a')
        g.set(11, y + 1, (y / 4) % 2 ? '#5cc8ff' : '#5cff8a')
      }
    })
    // le kanban
    put(s, 101, 6, 50, 30, (g) => {
      board(g, 50, 30, '#9aa3b8', WHITE)
      const heads = ['#f87171', '#fbbf24', '#34d399']
      heads.forEach((c, i) => {
        const x = 2 + i * 16
        g.rect(x, 2, 14, 3, c)
        if (i < 2) g.vline(x + 15, 2, 26, '#e2e6ef')
      })
      const notes = ['#fde68a', '#fbcfe8', '#bfdbfe', '#bbf7d0']
      const cards: [number, number, number][] = [[0, 0, 0], [0, 1, 1], [0, 2, 2], [1, 0, 3], [1, 1, 0], [2, 0, 1], [2, 1, 3], [2, 2, 0]]
      for (const [col, row, ci] of cards) {
        const x = 3 + col * 16 + (row % 2) * 6, y = 7 + row * 7
        g.rect(x, y, 6, 5, notes[ci])
        g.hline(x + 1, y + 1, 4, shade(notes[ci], -0.35))
        g.hline(x + 1, y + 3, 3, shade(notes[ci], -0.35))
        g.set(x + 5, y + 4, shade(notes[ci], -0.15))
      }
    })
    clock(s, 92, 7, tint)
    plant(s, 6, 52, 11, 15)
    // le pouf aux couleurs de la formation
    put(s, 128, 44, 16, 8, (g) => {
      g.round(0, 2, 16, 6, tint)
      g.round(2, 0, 12, 4, shade(tint, 0.2))
      g.hline(3, 1, 4, shade(tint, 0.45))
      g.hline(1, 7, 14, shade(tint, -0.3))
    })
  },

  /* la vente · téléphones, carte du territoire et ses épingles, poignée de main, cible */
  sales(s, tint) {
    wall(s, '#f2a76b')
    for (let y = 6; y < 44; y += 4) s.hline(0, y, FLOOR_W, '#eb9c5f')
    wainscot(s, 42, '#7a3b23', 14)
    checker(s, '#f6ead4', '#d9473b', 8, 6)
    // la carte du territoire
    put(s, 9, 7, 38, 26, (g) => {
      board(g, 38, 26, WOOD, '#7cc6f2')
      const land = (cx: number, cy: number, rx: number, ry: number) => {
        for (let y = -ry; y <= ry; y++) for (let x = -rx; x <= rx; x++) if ((x * x) / (rx * rx) + (y * y) / (ry * ry) <= 1) g.set(cx + x, cy + y, '#9bd27a')
      }
      land(11, 10, 8, 6); land(25, 15, 9, 7); land(16, 19, 6, 3)
      g.vline(18, 9, 12, '#5f9b4a'); g.hline(20, 14, 12, '#5f9b4a')
      for (const [px, py, c] of [[8, 8, RED], [14, 12, tint], [24, 12, RED], [29, 18, '#ffd34d'], [17, 20, RED]] as const) {
        g.set(px, py + 1, INK); g.rect(px - 1, py - 2, 2, 2, c); g.set(px - 1, py - 2, WHITE)
      }
      g.rect(30, 3, 5, 3, WHITE); g.set(32, 3, RED)
    })
    // la cloche des ventes signées
    put(s, 50, 10, 9, 10, (g) => {
      g.rect(3, 0, 3, 1, WOOD_D)
      g.vline(4, 1, 1, WOOD_D)
      g.round(1, 2, 7, 6, GOLD)
      g.hline(0, 7, 9, GOLD)
      g.vline(2, 3, 4, '#fff1a8')
      g.vline(6, 3, 4, shade(GOLD, -0.3))
      g.rect(4, 8, 1, 2, WOOD_D)
    })
    // la commode et son téléphone rouge
    put(s, 47, 39, 15, 13, (g) => {
      g.rect(0, 0, 15, 13, '#7a3b23')
      g.hline(0, 0, 15, '#a35a36')
      g.hline(1, 6, 13, '#5a2a18')
      g.rect(6, 3, 3, 1, GOLD); g.rect(6, 9, 3, 1, GOLD)
    })
    put(s, 49, 33, 11, 6, (g) => {
      g.rect(0, 0, 11, 2, RED)
      g.rect(0, 0, 2, 3, RED); g.rect(9, 0, 2, 3, RED)
      g.round(2, 2, 7, 4, '#c02a24')
      g.rect(4, 3, 3, 2, WHITE)
      g.set(5, 4, INK)
      g.hline(1, 0, 4, '#ff7a6e')
    })
    // l'affiche de la poignée de main
    put(s, 101, 8, 22, 22, (g) => {
      board(g, 22, 22, '#2b3a67', '#ffe9b0')
      // deux manches qui montent en diagonale, deux mains qui se serrent
      for (let i = 0; i < 6; i++) {
        g.rect(1 + i, 15 - i, 3, 4, '#2b6cb0'); g.rect(18 - i, 15 - i, 3, 4, '#16a34a')
      }
      g.vline(6, 9, 4, WHITE); g.vline(15, 9, 4, WHITE)
      g.round(7, 7, 8, 7, '#f6c9a3')
      g.hline(8, 7, 4, '#ffe0c8')
      for (const x of [9, 11, 13]) g.vline(x, 9, 3, '#c98a5e')
      g.hline(8, 13, 6, '#c98a5e')
      text(g, 5, 15, 'DEAL', '#c02a24')
      g.rect(9, 2, 4, 3, GOLD); g.set(10, 3, '#fff1a8')
    })
    // la cible et sa fléchette
    put(s, 128, 7, 21, 21, (g) => {
      const cols = [RED, WHITE, RED, WHITE, RED]
      for (let y = 0; y < 21; y++) for (let x = 0; x < 21; x++) {
        const d = Math.hypot(x - 10, y - 10)
        if (d <= 10.4) g.set(x, y, cols[Math.min(4, Math.floor(d / 2.1))] === RED ? (d < 2 ? '#ffd34d' : RED) : WHITE)
      }
      for (let i = 0; i < 6; i++) g.set(11 + i, 9 - i, '#3a3d4a')
      g.set(16, 3, tint); g.set(17, 3, tint); g.set(17, 4, tint)
    })
    // un casque-micro posé sur le bureau des élèves
    table(s, 112, 45, 30, 7, '#5a2a18')
    put(s, 120, 41, 8, 4, (g) => { g.hline(1, 0, 6, '#3a3d4a'); g.vline(0, 1, 3, '#3a3d4a'); g.vline(7, 1, 3, '#3a3d4a'); g.rect(0, 2, 2, 2, tint); g.rect(6, 2, 2, 2, tint) })
  },

  /* l'assistant de direction · calendrier mural, bannettes, colis, plante */
  ops(s, tint) {
    wall(s, '#cfe6c9')
    for (let x = 6; x < 155; x += 6) s.vline(x, 4, 38, '#c3dcbc')
    wainscot(s, 42, '#f7f5ee', 10)
    // le parquet en chevrons
    s.rect(0, 52, FLOOR_W, 12, '#c98f5a')
    for (let y = 52; y < 64; y++) for (let x = 0; x < FLOOR_W; x++) {
      const k = (x + (Math.floor(x / 6) % 2 ? y : -y) + 64) % 6
      if (k === 0) s.set(x, y, '#a8703f')
      else if (k === 1) s.set(x, y, '#dca36c')
    }
    // le calendrier mural
    put(s, 9, 6, 38, 28, (g) => {
      g.rect(0, 0, 38, 28, WHITE)
      g.rect(0, 0, 38, 5, RED)
      g.hline(0, 0, 38, '#ff7a6e')
      g.rect(8, -1, 2, 3, '#555a6e'); g.rect(28, -1, 2, 3, '#555a6e')
      for (let j = 0; j < 4; j++) for (let i = 0; i < 7; i++) {
        const x = 1 + i * 5 + 1, y = 7 + j * 5
        const mark = (i * 3 + j * 5) % 7
        g.rect(x, y, 4, 4, mark === 0 ? tint : mark === 3 ? '#fde68a' : '#eef1f6')
      }
      g.rect(17, 12, 4, 4, '#22c55e')
      g.hline(16, 11, 6, RED); g.hline(16, 16, 6, RED); g.vline(16, 12, 4, RED); g.vline(21, 12, 4, RED)
    })
    // les bannettes empilées sur le meuble
    put(s, 47, 38, 15, 14, (g) => {
      g.rect(0, 0, 15, 14, '#8a94a8')
      g.hline(0, 0, 15, '#b3bccd')
      g.hline(1, 7, 13, '#6b7489')
      g.rect(6, 3, 3, 1, '#4a5163'); g.rect(6, 10, 3, 1, '#4a5163')
    })
    put(s, 48, 23, 13, 15, (g) => {
      for (let i = 0; i < 3; i++) {
        const y = i * 5
        g.rect(1, y + 1, 11, 2, i === 1 ? '#fde68a' : WHITE)
        g.rect(0, y + 3, 13, 2, ['#3b82f6', tint, '#22c55e'][i])
        g.hline(0, y + 3, 13, shade(['#3b82f6', tint, '#22c55e'][i], 0.3))
      }
    })
    // la check-list et l'horloge
    put(s, 116, 8, 30, 20, (g) => {
      board(g, 30, 20, WOOD, '#fffaf0')
      for (let i = 0; i < 4; i++) {
        const y = 3 + i * 4
        g.rect(3, y, 3, 3, i < 3 ? '#22c55e' : '#d8dbe4')
        if (i < 3) g.set(4, y + 1, WHITE)
        g.hline(8, y + 1, 16 - (i % 2) * 5, '#9aa3b8')
      }
    })
    clock(s, 103, 9, '#2f6f4a')
    // les colis
    const parcel = (x: number, y: number, w: number, h: number) => put(s, x, y, w, h, (g) => {
      g.rect(0, 0, w, h, '#d6a464')
      g.hline(0, 0, w, '#ecc488')
      g.vline(Math.floor(w / 2), 0, h, '#b98444')
      g.rect(1, h - 3, 3, 2, WHITE)
    })
    parcel(134, 42, 12, 10)
    parcel(146, 45, 8, 7)
    parcel(137, 35, 8, 7)
    plant(s, 91, 52, 9, 17, '#2fa84f', '#f2efe6')
  },

  /* le designer · moodboard, nuancier, chevalet, tablette */
  design(s, tint, r) {
    wall(s, '#fcebf1')
    const splats = ['#ffb3c7', '#b5e3ff', '#ffe08a', '#c6f2c0', '#d8c2ff']
    for (let i = 0; i < 14; i++) {
      const x = 6 + Math.floor(r() * 148), y = 6 + Math.floor(r() * 36), c = splats[i % splats.length]
      s.rect(x, y, 2, 2, c); s.set(x + 2, y + 1, c); s.set(x - 1, y + 2, c)
    }
    skirting(s, '#e0b9c8')
    // le béton taché de peinture
    s.rect(0, 52, FLOOR_W, 12, '#bdb7b0')
    speckle(s, 0, 52, 160, 12, '#aea79f', 120, r)
    for (let x = 0; x < FLOOR_W; x += 40) s.vline(x, 52, 12, '#a39c94')
    for (let i = 0; i < 9; i++) {
      const x = 4 + Math.floor(r() * 150), y = 54 + Math.floor(r() * 8)
      const c = [tint, '#3b82f6', '#f59e0b', '#ec4899'][i % 4]
      s.rect(x, y, 3, 1, c); s.set(x + 1, y + 1, c)
    }
    // le moodboard en liège
    put(s, 9, 7, 38, 26, (g) => {
      board(g, 38, 26, WOOD_L, '#d9a86a')
      speckle(g, 1, 1, 36, 24, '#c99558', 60, r)
      const pics: [number, number, number, number, string][] = [
        [2, 2, 10, 8, '#7dd3fc'], [14, 3, 9, 11, '#fda4af'], [25, 2, 10, 7, '#fde68a'],
        [3, 13, 9, 10, '#c4b5fd'], [24, 11, 11, 12, '#86efac'], [14, 17, 8, 6, tint],
      ]
      for (const [x, y, w, h, c] of pics) {
        g.rect(x, y, w, h, WHITE)
        g.rect(x + 1, y + 1, w - 2, h - 3, c)
        g.set(x + Math.floor(w / 2), y, RED)
      }
      g.rect(3, 6, 4, 2, '#3fae5a'); g.set(9, 4, '#fff7b0')
      g.rect(26, 18, 3, 3, '#16a34a')
    })
    // le chevalet et sa toile
    put(s, 47, 12, 16, 40, (g) => {
      for (let y = 0; y < 40; y++) { g.set(7 - Math.floor(y / 6), y, WOOD); g.set(8 + Math.floor(y / 6), y, WOOD) }
      g.vline(8, 4, 34, WOOD_D)
      g.rect(1, 3, 14, 15, WHITE)
      g.rect(2, 4, 12, 13, '#a5d8ff')
      g.rect(2, 12, 12, 5, '#7bd389')
      g.rect(9, 6, 3, 3, '#ffd34d')
      g.rect(3, 10, 4, 2, '#5bbf6c'); g.rect(4, 9, 2, 1, '#5bbf6c')
      g.rect(0, 18, 16, 2, WOOD_D)
    })
    // le nuancier
    put(s, 102, 8, 48, 13, (g) => {
      const sw = ['#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16', '#22c55e', '#14b8a6', '#0ea5e9', '#3b82f6', '#7c3aed', '#c026d3', tint]
      sw.forEach((c, i) => {
        const x = i * 4
        g.rect(x, 0, 4, 9, c)
        g.hline(x, 0, 4, shade(c, 0.3))
        g.rect(x, 9, 4, 4, WHITE)
        g.set(x + 1, 11, '#c9c9c9')
      })
    })
    // le bureau, la tablette, le stylet, les pots de peinture
    table(s, 104, 44, 28, 8, WHITE)
    put(s, 108, 40, 14, 4, (g) => { g.rect(0, 0, 14, 4, '#2b2d3a'); g.rect(1, 1, 12, 2, '#c4b5fd'); g.hline(3, 1, 5, '#ff8ab3') })
    put(s, 124, 40, 6, 2, (g) => { g.hline(0, 0, 6, '#3a3d4a'); g.set(5, 0, tint); g.hline(0, 1, 6, '#1f2029') })
    const pot = (x: number, c: string) => put(s, x, 47, 6, 5, (g) => { g.rect(0, 0, 6, 5, '#d8dbe4'); g.rect(0, 0, 6, 2, c); g.set(1, 2, c) })
    pot(136, '#3b82f6'); pot(143, '#f59e0b'); pot(149, tint)
  },

  /* l'enseignant · tableau, pupitres, globe, pomme */
  school(s, tint) {
    wall(s, '#f8efb8')
    wainscot(s, 38, '#5fa36a', 12)
    checker(s, '#f2ecd8', '#7bb87f', 6, 4)
    // la frise de l'alphabet
    const letters = 'ABCDEFGHIKLMNOPRS'
    for (let i = 0; i < 16; i++) {
      const x = 7 + i * 8 + (i >= 8 ? 20 : 0)
      if (x > 148) break
      const c = ['#f87171', '#60a5fa', '#fbbf24', '#34d399', tint][i % 5]
      put(s, x, 5, 6, 7, (g) => {
        g.rect(0, 0, 6, 7, c)
        g.hline(0, 0, 6, shade(c, 0.3))
        text(g, 1, 1, letters[i % letters.length], WHITE)
      })
    }
    // le tableau noir et ses craies
    put(s, 8, 14, 40, 22, (g) => {
      board(g, 40, 22, WOOD, '#2d5b45')
      text(g, 3, 3, 'ABC', CHALK)
      text(g, 3, 11, '1+2=3', CHALK)
      g.hline(20, 5, 14, '#8fb8a2'); g.hline(22, 8, 10, '#8fb8a2')
      g.rect(32, 13, 4, 4, CHALK); g.rect(33, 14, 2, 2, '#2d5b45')
      g.rect(1, 20, 38, 1, WOOD_L)
      g.rect(6, 19, 3, 1, WHITE); g.rect(12, 19, 4, 1, '#f9a8d4')
    })
    // le meuble, le globe et la pomme
    put(s, 47, 40, 17, 12, (g) => {
      g.rect(0, 0, 17, 12, '#b9773f')
      g.hline(0, 0, 17, '#d89a5c')
      g.rect(2, 3, 6, 7, '#9a5f2e'); g.rect(9, 3, 6, 7, '#9a5f2e')
      g.set(7, 6, GOLD); g.set(9, 6, GOLD)
    })
    put(s, 48, 27, 11, 13, (g) => {
      for (let y = 0; y < 9; y++) for (let x = 0; x < 9; x++) {
        if (Math.hypot(x - 4, y - 4) > 4.4) continue
        const land = (x * 7 + y * 3) % 5 < 2 || (x > 4 && y > 4)
        g.set(x + 1, y, land ? '#4caf50' : '#3b8fe0')
      }
      g.set(3, 1, '#a6d8ff'); g.set(2, 2, '#a6d8ff')
      for (let y = 0; y < 10; y++) g.set(y < 5 ? 0 : 10 - (y - 5) * 0, y, GOLD)
      g.vline(5, 9, 2, '#7a4a2a')
      g.rect(2, 11, 7, 2, '#7a4a2a')
    })
    put(s, 59, 35, 4, 5, (g) => {
      g.round(0, 1, 4, 4, '#e53935')
      g.set(1, 2, '#ff8a80')
      g.set(2, 0, '#5a3319'); g.set(3, 0, '#43a047')
    })
    // l'horloge et la carte du monde
    clock(s, 103, 16, '#2b6cb0')
    put(s, 118, 15, 32, 19, (g) => {
      board(g, 32, 19, WOOD, '#8fd0f5')
      g.rect(3, 4, 8, 6, '#7cc576'); g.rect(5, 10, 4, 5, '#7cc576')
      g.rect(14, 3, 6, 4, '#7cc576'); g.rect(14, 8, 5, 6, '#7cc576')
      g.rect(21, 3, 8, 6, '#7cc576'); g.rect(25, 12, 4, 3, '#7cc576')
    })
    // les pupitres des élèves
    for (const x of [102, 128]) {
      put(s, x, 42, 20, 10, (g) => {
        g.rect(0, 0, 20, 3, '#d89a5c')
        g.hline(0, 0, 20, '#f0b878')
        g.rect(1, 3, 18, 3, '#9a5f2e')
        g.vline(2, 6, 4, '#5a6278'); g.vline(17, 6, 4, '#5a6278')
      })
      put(s, x + 3, 39, 6, 3, (g) => { g.rect(0, 0, 6, 3, WHITE); g.vline(3, 0, 3, '#c9c9c9'); g.hline(0, 2, 6, tint) })
    }
  },

  /* l'étudiant · table d'étude, fiches, sac à dos, lampe, livres */
  campus(s, tint, r) {
    bricks(s, 4, 48, '#c8e5ef', '#a9cfdd', 12, 6)
    skirting(s, '#8fb6c6')
    carpet(s, '#c96f4a', '#d98560', 4)
    put(s, 96, 54, 58, 6, (g) => {
      g.rect(0, 0, 58, 6, '#f6f1e6')
      for (let x = 0; x < 58; x += 6) g.rect(x, 0, 3, 6, tint)
      g.hline(0, 0, 58, shade(tint, 0.3))
    })
    // le fanion
    put(s, 21, 7, 24, 9, (g) => {
      g.vline(0, 0, 9, WOOD_D)
      for (let x = 1; x < 24; x++) {
        const half = Math.round(4 * (1 - x / 24))
        g.vline(x, 4 - half, half * 2 + 1, tint)
      }
      g.hline(2, 4, 12, WHITE)
      g.set(1, 1, shade(tint, 0.3))
    })
    // l'affiche « A+ »
    put(s, 24, 19, 16, 14, (g) => {
      board(g, 16, 14, '#2b3a67', '#ffd34d')
      text(g, 4, 4, 'A+', '#c02a24')
      g.hline(3, 11, 10, '#c47a3a')
    })
    // le tableau de liège et les fiches
    put(s, 102, 7, 48, 24, (g) => {
      board(g, 48, 24, WOOD_L, '#d9a86a')
      speckle(g, 1, 1, 46, 22, '#c99558', 60, r)
      for (let i = 0; i < 8; i++) {
        const x = 2 + (i % 4) * 11 + (Math.floor(i / 4) % 2) * 2, y = 2 + Math.floor(i / 4) * 10
        const top = ['#f87171', '#60a5fa', '#34d399', '#fbbf24'][i % 4]
        g.rect(x, y, 9, 8, WHITE)
        g.hline(x, y, 9, top)
        g.hline(x + 1, y + 3, 7, '#b8c0d8'); g.hline(x + 1, y + 5, 5, '#b8c0d8')
        g.set(x + 4, y, INK)
      }
    })
    // la table d'étude, sa lampe et ses livres
    table(s, 45, 38, 20, 14, '#e8e2d6')
    put(s, 47, 24, 9, 14, (g) => {
      g.rect(0, 12, 6, 2, '#2b2d3a')
      for (let i = 0; i < 7; i++) g.set(2 + Math.floor(i / 3), 11 - i, '#2b2d3a')
      for (let i = 0; i < 4; i++) g.set(4 + i, 4 - Math.floor(i / 2), '#2b2d3a')
      g.rect(5, 0, 4, 3, tint)
      g.hline(5, 3, 4, '#fff3b0')
    })
    glow(s, 56, 32, 6, 0.12)
    put(s, 57, 30, 7, 8, (g) => {
      const c = ['#2e6fb5', RED, '#2f9e5a', '#e0a93a']
      c.forEach((col, i) => { g.rect(i % 2, i * 2, 7 - (i % 2), 2, col); g.hline(i % 2, i * 2, 7 - (i % 2), shade(col, 0.3)) })
    })
    // le sac à dos et la pile de livres
    put(s, 91, 41, 9, 11, (g) => {
      g.round(0, 1, 9, 10, '#2563eb')
      g.rect(2, 0, 5, 2, '#1e40af')
      g.round(2, 6, 5, 4, '#3b82f6')
      g.hline(3, 7, 3, '#1e40af')
      g.set(1, 2, '#60a5fa')
    })
    put(s, 6, 40, 11, 12, (g) => {
      const c = ['#8e44ad', '#e0a93a', '#2e6fb5', '#c0392b', '#2f9e5a', '#d35f2a']
      c.forEach((col, i) => { const off = i % 2; g.rect(off, i * 2, 11 - off - (i % 3 === 2 ? 1 : 0), 2, col); g.hline(off, i * 2, 4, shade(col, 0.3)) })
    })
  },

  /* le scientifique · paillasse, fioles, microscope, tableau périodique */
  lab(s, tint, r) {
    wall(s, '#eef5f8')
    tiles(s, 0, 4, FLOOR_W, 48, '#eef5f8', '#cddbe3', 6, 6)
    s.rect(0, 40, FLOOR_W, 2, '#3aa6b9')
    tiles(s, 0, 52, FLOOR_W, 12, '#c9d3dc', '#a9b6c2', 16, 6)
    speckle(s, 0, 53, 160, 10, '#d6dfe7', 60, r)
    // l'étagère murale et ses bocaux
    put(s, 10, 9, 36, 12, (g) => {
      g.rect(0, 10, 36, 2, '#9aa3b8')
      g.hline(0, 10, 36, '#c9d0de')
      const jar = (x: number, h: number, c: string) => {
        g.rect(x, 10 - h, 4, h, '#dff4ff')
        g.rect(x, 10 - Math.ceil(h / 2), 4, Math.ceil(h / 2), c)
        g.hline(x, 10 - h, 4, '#7a8396')
        g.set(x, 10 - h + 1, WHITE)
      }
      jar(2, 7, '#22c55e'); jar(8, 5, '#f59e0b'); jar(14, 8, tint); jar(20, 6, '#ec4899'); jar(26, 9, '#3b82f6'); jar(31, 4, '#a3e635')
    })
    // la paillasse
    put(s, 45, 38, 20, 14, (g) => {
      g.rect(0, 0, 20, 3, '#2b2d3a')
      g.hline(0, 0, 20, '#4a4d5c')
      g.rect(1, 3, 18, 11, WHITE)
      g.vline(10, 3, 11, '#c9d0de')
      g.rect(4, 7, 3, 1, '#7a8396'); g.rect(13, 7, 3, 1, '#7a8396')
    })
    // le microscope
    put(s, 46, 25, 9, 13, (g) => {
      g.rect(1, 11, 7, 2, '#2b2d3a')
      g.vline(6, 3, 8, '#3a3d4a'); g.vline(7, 4, 6, '#3a3d4a')
      for (let i = 0; i < 5; i++) g.rect(2 + Math.floor(i / 2), 1 + i, 2, 1, '#e6e9ee')
      g.rect(1, 0, 3, 1, '#2b2d3a')
      g.rect(3, 7, 4, 1, '#9aa3b8')
      g.set(4, 2, WHITE)
    })
    // l'erlenmeyer et ses bulles
    put(s, 57, 27, 7, 11, (g) => {
      g.rect(2, 0, 3, 4, '#dff4ff')
      for (let y = 4; y < 11; y++) { const half = Math.min(3, y - 3); g.hline(3 - half, y, half * 2 + 1, y > 6 ? '#22c55e' : '#dff4ff') }
      g.set(2, 1, WHITE); g.set(3, 8, '#9cf2b5')
    })
    s.set(60, 23, '#8ee6a8'); s.set(61, 21, '#8ee6a8'); s.set(59, 19, '#8ee6a8')
    // le tableau périodique
    put(s, 101, 7, 50, 28, (g) => {
      board(g, 50, 28, '#2b3a67', WHITE)
      const fam = ['#f87171', '#fbbf24', '#fde68a', '#86efac', '#7dd3fc', '#c4b5fd', '#f9a8d4']
      for (let col = 0; col < 18; col++) for (let row = 0; row < 6; row++) {
        if (row === 0 && col > 0 && col < 17) continue
        if (row < 3 && col > 1 && col < 12) continue
        const c = col < 2 ? fam[0] : col > 11 ? fam[3 + (col % 3)] : fam[1 + (col % 2)]
        g.rect(2 + col * 2 + (col > 1 ? 1 : 0) + (col > 11 ? 1 : 0), 2 + row * 3, 2, 2, c)
      }
      for (let i = 0; i < 14; i++) g.rect(8 + i * 2 + Math.floor(i / 7), 22, 2, 2, fam[6])
    })
    // le panneau de danger
    put(s, 92, 7, 7, 7, (g) => {
      for (let y = 0; y < 7; y++) g.hline(3 - Math.floor(y / 2), y, Math.floor(y / 2) * 2 + 1, '#facc15')
      g.vline(3, 2, 3, INK); g.set(3, 6, INK)
    })
    // le tabouret
    put(s, 136, 44, 10, 8, (g) => { g.round(0, 0, 10, 2, tint); g.vline(2, 2, 6, '#7a8396'); g.vline(7, 2, 6, '#7a8396'); g.hline(2, 5, 6, '#7a8396') })
  },

  /* le développeur · écrans de code, clavier mécanique, canard, serveur */
  code(s, tint) {
    bricks(s, 4, 48, '#1d2340', '#161a31', 10, 5)
    s.hline(0, 5, FLOOR_W, tint)
    s.hline(0, 6, FLOOR_W, shade(tint, -0.4))
    skirting(s, '#0f1226')
    tiles(s, 0, 52, FLOOR_W, 12, '#3a3f55', '#2a2e40', 12, 6)
    for (let x = 6; x < FLOOR_W; x += 24) for (let k = 0; k < 4; k++) s.hline(x - 2, 54 + k, 4, '#2a2e40')
    const codeLines = (g: Grid, x: number, y: number, w: number, rows: number, seed: number) => {
      const rr = rng(seed)
      const cols = ['#7ee787', '#79c0ff', '#ff7b72', '#d2a8ff', '#ffa657']
      for (let i = 0; i < rows; i++) {
        const indent = Math.floor(rr() * 3) * 2
        let cx = x + indent
        const end = x + Math.floor(w * (0.5 + rr() * 0.5))
        while (cx < end) {
          const len = 2 + Math.floor(rr() * 4)
          g.hline(cx, y + i * 2, Math.min(len, end - cx), cols[Math.floor(rr() * cols.length)])
          cx += len + 1
        }
      }
    }
    // la baie serveur
    put(s, 5, 8, 12, 44, (g) => {
      g.rect(0, 0, 12, 44, '#22253a')
      g.hline(0, 0, 12, '#3a3f5c')
      for (let y = 2; y < 42; y += 4) {
        g.rect(1, y, 10, 3, '#2f3350')
        g.hline(2, y + 1, 5, '#151829')
        g.set(8, y + 1, (y / 2) % 3 ? '#5cff8a' : '#ffcc4d')
        g.set(9, y + 1, (y / 2) % 2 ? tint : '#5cc8ff')
      }
    })
    // l'affiche des accolades
    put(s, 23, 9, 18, 13, (g) => {
      board(g, 18, 13, tint, '#0f1226')
      text(g, 3, 4, '{', '#7ee787'); text(g, 7, 4, '/', '#79c0ff'); text(g, 11, 4, '}', '#7ee787')
    })
    // le bureau aux trois écrans
    table(s, 44, 40, 18, 12, '#3a3f55')
    ;[[44, 29, 9, 7], [54, 29, 9, 7], [48, 20, 11, 8]].forEach(([x, y, w, h], i) => {
      put(s, x, y, w, h, (g) => { screen(g, w, h, '#0b0d18', '#161b2e'); codeLines(g, 1, 2, w - 2, Math.floor((h - 3) / 2), 11 + i) })
    })
    for (const x of [48, 58]) s.rect(x, 37, 2, 1, '#0b0d18')
    put(s, 47, 38, 9, 2, (g) => {
      g.rect(0, 0, 9, 2, '#2b2d3a')
      for (let i = 0; i < 4; i++) g.set(1 + i * 2, 0, ['#ff7b72', '#ffa657', '#7ee787', '#79c0ff'][i])
    })
    // le canard en plastique
    put(s, 57, 36, 5, 4, (g) => {
      g.rect(0, 2, 5, 2, '#ffd23f')
      g.rect(1, 0, 3, 2, '#ffd23f')
      g.set(3, 1, INK); g.set(4, 1, '#ff8c1a')
      g.set(0, 2, '#ffe680')
    })
    // le grand terminal
    put(s, 102, 9, 48, 24, (g) => {
      screen(g, 48, 24, '#0b0d18', '#0d1117')
      g.rect(1, 1, 46, 3, '#161b22')
      g.set(3, 2, '#ff5f57'); g.set(5, 2, '#febc2e'); g.set(7, 2, '#28c840')
      codeLines(g, 3, 6, 40, 7, 7)
      text(g, 3, 18, '>_', '#7ee787')
    })
    glow(s, 126, 21, 18, 0.06)
    // les câbles au sol
    for (let x = 18; x < 44; x++) s.set(x, 56 + Math.round(Math.sin(x / 3)), '#14161f')
  },

  /* le recruteur · table d'entretien, CV, organigramme */
  hire(s, tint, r) {
    wall(s, '#efe1cc')
    speckle(s, 0, 4, 160, 40, '#e6d5bb', 120, r)
    wainscot(s, 42, '#b0814f', 8)
    carpet(s, '#2f8f8a', '#3aa39d', 4)
    // l'organigramme
    put(s, 9, 7, 38, 26, (g) => {
      board(g, 38, 26, '#9aa3b8', WHITE)
      const box = (x: number, y: number, c: string) => { g.rect(x, y, 7, 5, c); g.rect(x + 2, y + 1, 3, 2, '#f6c9a3'); g.hline(x + 1, y + 4, 5, shade(c, -0.3)) }
      g.vline(18, 7, 4, '#5a6278'); g.hline(6, 10, 25, '#5a6278')
      for (const x of [6, 18, 30]) g.vline(x, 10, 3, '#5a6278')
      g.hline(3, 17, 6, '#5a6278'); g.hline(27, 17, 6, '#5a6278')
      box(15, 2, tint)
      box(3, 12, '#3b82f6'); box(15, 12, '#22c55e'); box(27, 12, '#f59e0b')
      for (const x of [1, 6, 26, 31]) { g.vline(x + 2, 17, 2, '#5a6278'); g.rect(x, 19, 5, 4, '#c4b5fd'); g.rect(x + 1, 20, 3, 2, '#f6c9a3') }
    })
    // la fontaine à eau
    put(s, 49, 21, 11, 31, (g) => {
      g.round(1, 0, 9, 10, '#8fd3ff')
      g.vline(3, 1, 8, '#d6f0ff')
      g.rect(3, 10, 5, 1, '#5aa9e6')
      g.rect(0, 11, 11, 20, '#eef1f6')
      g.hline(0, 11, 11, WHITE)
      g.rect(3, 14, 2, 2, '#3b82f6'); g.rect(6, 14, 2, 2, RED)
      g.rect(2, 18, 7, 4, '#c9d0de')
      g.hline(1, 30, 9, '#9aa3b8')
    })
    plant(s, 6, 52, 11, 18, '#2fae55', '#e8dccb')
    // le tableau des CV
    put(s, 102, 7, 48, 24, (g) => {
      board(g, 48, 24, WOOD_L, '#d9a86a')
      for (let i = 0; i < 5; i++) {
        const x = 2 + i * 9, y = 2 + (i % 2) * 3
        g.rect(x, y, 8, 18, WHITE)
        g.rect(x + 1, y + 1, 3, 3, ['#f6c9a3', '#c98a5e', '#e7ad82', '#9b6440', '#ffe0c8'][i])
        g.hline(x + 5, y + 1, 2, '#9aa3b8'); g.hline(x + 5, y + 3, 2, '#9aa3b8')
        for (let k = 0; k < 5; k++) g.hline(x + 1, y + 6 + k * 2, 6 - (k % 2), '#c9d0de')
        g.set(x + 4, y, RED)
        if (i === 1 || i === 3) { g.set(x + 5, y + 15, '#16a34a'); g.set(x + 6, y + 14, '#16a34a'); g.set(x + 4, y + 14, '#16a34a') }
      }
    })
    // la table d'entretien, ses deux chaises, les CV posés
    chair(s, 101, 40, '#5a6278')
    chair(s, 143, 40, '#5a6278')
    table(s, 109, 44, 32, 8, '#8a5a34')
    put(s, 114, 42, 7, 2, (g) => { g.rect(0, 0, 7, 2, WHITE); g.hline(1, 0, 5, '#c9d0de') })
    put(s, 124, 42, 7, 2, (g) => { g.rect(0, 0, 7, 2, WHITE); g.set(1, 0, tint) })
    put(s, 134, 41, 3, 3, (g) => { g.rect(0, 0, 3, 3, WHITE); g.hline(0, 0, 3, '#6b4128') })
  },

  /* l'avocat · bibliothèque juridique, balance, contrat scellé, marteau */
  law(s, tint, r) {
    wall(s, '#2f4f3e')
    for (let x = 10; x < 155; x += 14) { s.vline(x, 4, 38, '#294536'); s.vline(x + 1, 4, 38, '#38604b') }
    wainscot(s, 40, '#5a3319', 14)
    // le marbre en damier
    for (let y = 52; y < 64; y++) for (let x = 0; x < FLOOR_W; x++) {
      const dark = (Math.floor(x / 10) + Math.floor((y - 52) / 6)) % 2
      s.set(x, y, dark ? '#2b2d3a' : '#ece8df')
    }
    for (let i = 0; i < 30; i++) {
      const x = Math.floor(r() * 158), y = 53 + Math.floor(r() * 10)
      const c = s.get(x, y) === '#2b2d3a' ? '#3c3f50' : '#d8d2c4'
      s.set(x, y, c); s.set(x + 1, y + 1, c)
    }
    const LAWPAL = ['#7a1f24', '#1f4a7a', '#24553a', '#5a3319', '#7a1f24']
    bookcase(s, 5, 6, 13, 46, 5, LAWPAL, r, '#5a3319')
    bookcase(s, 102, 7, 48, 13, 1, LAWPAL, r, '#5a3319')
    // le contrat scellé, encadré
    put(s, 22, 7, 20, 26, (g) => {
      board(g, 20, 26, GOLD, '#f6ecd3')
      text(g, 3, 2, 'LEX', '#5a3319')
      for (let k = 0; k < 6; k++) g.hline(3, 9 + k * 2, 14 - (k % 3) * 2, '#b8a888')
      g.round(11, 18, 6, 6, '#b3202f')
      g.set(13, 20, '#e0525d')
      g.vline(12, 23, 2, tint); g.vline(15, 23, 2, tint)
    })
    // la balance sur sa colonne
    put(s, 46, 20, 17, 32, (g) => {
      g.vline(8, 2, 18, GOLD)
      g.rect(7, 0, 3, 2, GOLD)
      g.hline(1, 3, 15, GOLD)
      for (const cx of [2, 14]) {
        g.vline(cx - 1, 4, 4, shade(GOLD, -0.3)); g.vline(cx + 1, 4, 4, shade(GOLD, -0.3))
        g.hline(cx - 2, 8, 5, GOLD); g.hline(cx - 1, 9, 3, shade(GOLD, -0.2))
      }
      g.rect(5, 19, 7, 2, shade(GOLD, -0.2))
      g.rect(4, 21, 9, 11, '#ece8df')
      g.vline(6, 22, 9, '#d0c9b8'); g.vline(10, 22, 9, '#d0c9b8')
      g.hline(3, 21, 11, WHITE)
    })
    // le bureau, la lampe de banquier, le marteau
    table(s, 112, 44, 36, 8, '#5a3319')
    put(s, 116, 37, 9, 7, (g) => {
      g.round(0, 0, 9, 3, '#1f7a4a')
      g.hline(1, 0, 7, '#3fae6f')
      g.vline(4, 3, 3, GOLD); g.hline(2, 6, 5, GOLD)
    })
    put(s, 134, 40, 9, 4, (g) => {
      g.rect(0, 0, 4, 3, '#7a4526'); g.hline(0, 0, 4, '#a0643a')
      g.hline(4, 1, 4, '#5a3319')
      g.rect(5, 3, 4, 1, '#3f2716')
    })
  },

  /* le consultant · matrice 2 × 2, mur de post-it, paperboard */
  consult(s, tint) {
    wall(s, '#dde5ee')
    for (let x = 5; x < 155; x += 25) { s.vline(x, 4, 46, '#b8c4d2'); s.vline(x + 1, 4, 46, '#eef3f8') }
    s.hline(0, 26, FLOOR_W, '#c9d4e0')
    skirting(s, '#9aa7b8')
    carpet(s, '#9aa3b0', '#a8b1be', 3)
    for (let x = 0; x < FLOOR_W; x += 20) s.vline(x, 52, 12, '#8d96a3')
    // le tableau blanc et sa matrice
    put(s, 9, 7, 38, 26, (g) => {
      board(g, 38, 26, '#9aa3b8', WHITE)
      g.vline(19, 3, 20, '#3a3d4a'); g.hline(4, 13, 31, '#3a3d4a')
      g.set(19, 2, '#3a3d4a'); g.set(18, 3, '#3a3d4a'); g.set(20, 3, '#3a3d4a')
      g.set(35, 13, '#3a3d4a'); g.set(34, 12, '#3a3d4a'); g.set(34, 14, '#3a3d4a')
      g.rect(21, 3, 13, 9, '#dcfce7')
      g.rect(5, 15, 13, 7, '#fee2e2')
      for (const [x, y, c] of [[8, 6, '#3b82f6'], [12, 9, '#f59e0b'], [26, 6, '#16a34a'], [30, 9, tint], [24, 17, '#3b82f6'], [10, 18, RED]] as const) g.rect(x, y, 2, 2, c)
      g.set(28, 4, GOLD); g.hline(27, 5, 3, GOLD); g.set(28, 6, GOLD)
      g.rect(2, 24, 6, 1, '#3b82f6'); g.rect(10, 24, 4, 1, RED)
    })
    // le paperboard
    put(s, 47, 11, 16, 41, (g) => {
      g.rect(0, 0, 16, 2, '#5a6278')
      g.rect(1, 2, 14, 18, WHITE)
      g.rect(1, 2, 14, 1, '#e2e6ef')
      g.hline(3, 4, 9, tint)
      for (let i = 0; i < 4; i++) g.rect(3 + i * 3, 17 - (i + 1) * 2, 2, (i + 1) * 2, ['#60a5fa', '#60a5fa', '#60a5fa', '#22c55e'][i])
      g.hline(2, 17, 12, '#9aa3b8')
      g.rect(1, 20, 14, 1, '#d7dbe6')
      for (let y = 21; y < 41; y++) { g.set(7 - Math.floor((y - 21) / 4), y, '#5a6278'); g.set(8 + Math.floor((y - 21) / 4), y, '#5a6278') }
      g.vline(8, 21, 17, '#454b5c')
    })
    // le mur de post-it
    put(s, 102, 7, 48, 26, (g) => {
      const notes = ['#fde68a', '#fbcfe8', '#bfdbfe', '#bbf7d0', '#fed7aa']
      for (let j = 0; j < 4; j++) for (let i = 0; i < 7; i++) {
        if ((i + j * 3) % 9 === 4) continue
        const c = notes[(i < 3 ? 0 : i < 5 ? 2 : 3) + ((i + j) % 4 === 0 ? 1 : 0)]
        const x = i * 7, y = j * 7 - (i % 2)
        g.rect(x, y + 1, 6, 6, c)
        g.hline(x + 1, y + 3, 4, shade(c, -0.3))
        g.set(x + 5, y + 6, shade(c, -0.15))
      }
    })
    // la table basse, le portable, le café
    table(s, 112, 45, 30, 7, '#f2f4f7')
    put(s, 118, 41, 10, 4, (g) => { g.rect(0, 0, 10, 3, '#cfd6e0'); g.rect(1, 0, 8, 2, '#2b6cb0'); g.hline(0, 3, 10, '#9aa5b4') })
    put(s, 132, 41, 4, 4, (g) => { g.rect(0, 0, 3, 4, WHITE); g.set(3, 1, WHITE); g.set(3, 2, WHITE); g.hline(0, 0, 3, '#6b4128') })
    plant(s, 91, 52, 9, 16, '#2fa84f', WHITE)
  },
}

/** Un étage du temple, 160 × 64, décoré selon la spécialité. */
export function drawFloor(kit: DojoKit, tint: string): Grid {
  const s = new Grid(FLOOR_W, FLOOR_H)
  const r = rng(hashString(kit))
  KITS[kit](s, tint, r)
  floorEdges(s)
  doorLight(s)
  door(s, tint)
  sconces(s)
  structure(s, tint)
  return s
}
