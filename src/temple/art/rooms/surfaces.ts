// LES SURFACES · murs, soubassements et sols des étages composés.
//
// Demandé : « Les étages doivent être tous différents là ils sont trop
// identiques ». Chaque étage tire un mur, un soubassement et un sol dans ces
// listes, peints dans la palette de la spécialité : onze murs, neuf
// soubassements, dix sols. Le mur couvre y = 4..51, le sol y = 52..63.
import { Grid, shade } from '../../../pixel/grid'
import { FLOOR_W, vboards, bricks, tiles, wainscot, skirting, planksH, checker, carpet, speckle, mix, type Pal } from './base'

type Surf = (s: Grid, P: Pal, r: () => number) => void
type Wain = (s: Grid, P: Pal, r: () => number, y0: number) => void

/* ------------------------------------------------------------------ */
/* Les murs                                                            */
/* ------------------------------------------------------------------ */

/** des blocs de pierre irréguliers, rangée par rangée */
function stones(s: Grid, x0: number, y0: number, w: number, h: number, base: string, mortar: string, r: () => number, minW = 7, maxW = 15) {
  s.rect(x0, y0, w, h, mortar)
  let y = y0
  while (y < y0 + h) {
    const bh = Math.min(5 + Math.floor(r() * 3), y0 + h - y)
    let x = x0 - Math.floor(r() * 6)
    while (x < x0 + w) {
      const bw = minW + Math.floor(r() * (maxW - minW))
      const c = r() < 0.3 ? shade(base, -0.07) : r() < 0.3 ? shade(base, 0.07) : base
      s.rect(x + 1, y + 1, bw - 1, bh - 1, c)
      s.hline(x + 1, y + 1, bw - 1, shade(c, 0.14))
      s.hline(x + 1, y + bh - 1, bw - 1, shade(c, -0.12))
      if (r() < 0.12) s.set(x + 2 + Math.floor(r() * (bw - 3)), y + 2, shade(c, -0.2))
      x += bw
    }
    y += bh
  }
}

export const WALLS: Surf[] = [
  // 0 · l'enduit moucheté et sa cimaise
  (s, P, r) => {
    s.rect(0, 4, FLOOR_W, 48, P.wall)
    speckle(s, 0, 4, FLOOR_W, 48, P.alt, 220, r)
    speckle(s, 0, 4, FLOOR_W, 48, P.light, 70, r)
    s.hline(0, 9, FLOOR_W, P.trim); s.hline(0, 10, FLOOR_W, shade(P.trim, -0.3))
  },
  // 1 · les planches verticales et leurs nœuds
  (s, P, r) => {
    const step = [6, 8, 10][Math.floor(r() * 3)]
    vboards(s, 4, 48, P.wall, step)
    for (let i = 0; i < 26; i++) {
      const x = 6 + Math.floor(r() * 148), y = 6 + Math.floor(r() * 40)
      s.set(x, y, P.deep); s.set(x, y + 1, shade(P.deep, 0.1))
    }
  },
  // 2 · les briques
  (s, P, r) => {
    const big = r() < 0.5
    const bw = big ? 12 : 10, bh = big ? 6 : 5
    bricks(s, 4, 48, P.wall, P.deep, bw, bh)
    for (let i = 0; i < 40; i++) {
      const j = Math.floor(r() * (48 / bh)), k = Math.floor(r() * (FLOOR_W / bw))
      const x = k * bw + (j % 2 ? bw / 2 : 0) + 1, y = 4 + j * bh + 2
      s.rect(x, y, bw - 1, bh - 2, r() < 0.5 ? P.alt : P.light)
    }
  },
  // 3 · le carrelage mural et sa frise
  (s, P, r) => {
    const t = r() < 0.5 ? 6 : 8
    tiles(s, 0, 4, FLOOR_W, 48, P.wall, P.alt, t, t)
    for (let y = 4; y < 52; y += t) for (let x = 0; x < FLOOR_W; x += t) {
      s.set(x + 1, y + 1, P.light)
      if (r() < 0.06) s.rect(x + 1, y + 1, t - 1, t - 1, P.light)
    }
    const fy = 4 + t * 3
    s.rect(0, fy + 1, FLOOR_W, t - 1, mix(P.wall, P.accent, 0.45))
    for (let x = 0; x < FLOOR_W; x += t) s.set(x + t / 2, fy + t / 2, P.light)
  },
  // 4 · les panneaux de papier sur leur grille de bois (shoji)
  (s, P) => {
    const paper = mix(P.paper, P.wall, P.dark ? 0.6 : 0.25)
    s.rect(0, 4, FLOOR_W, 48, paper)
    for (let y = 4; y < 52; y += 2) s.hline(0, y, FLOOR_W, shade(paper, -0.03))
    const kumiko = shade(P.wood, 0.12)
    for (let y = 11; y < 52; y += 8) s.hline(0, y, FLOOR_W, kumiko)
    for (let x = 1; x < FLOOR_W; x += 6) s.vline(x, 4, 48, kumiko)
    for (let x = 4; x < FLOOR_W; x += 24) { s.vline(x, 4, 48, P.wood); s.vline(x + 1, 4, 48, shade(P.wood, -0.3)) }
    s.rect(0, 4, FLOOR_W, 2, P.wood); s.hline(0, 6, FLOOR_W, shade(P.wood, -0.3))
  },
  // 5 · le papier peint à motif (losanges, pois, vagues ou croisillons)
  (s, P, r) => {
    s.rect(0, 4, FLOOR_W, 48, P.wall)
    const m = Math.floor(r() * 4)
    for (let y = 4; y < 52; y++) for (let x = 0; x < FLOOR_W; x++) {
      const yy = y - 4
      let c: string | null = null
      if (m === 0) { const a = (x + yy) % 8, b = (x - yy + 400) % 8; if (a === 0 || b === 0) c = P.alt; if (a === 4 && b === 4) c = P.light }
      else if (m === 1) { if (yy % 6 === 2 && (x + (Math.floor(yy / 6) % 2) * 3) % 6 === 0) c = P.deep; else if (yy % 6 === 3 && (x + (Math.floor(yy / 6) % 2) * 3) % 6 === 0) c = P.alt }
      else if (m === 2) {
        // les vagues (seigaiha) · des arcs empilés
        const row = Math.floor(yy / 5), ox = (x + (row % 2) * 5) % 10
        const d = Math.hypot(ox - 5, (yy % 5) - 5)
        if (Math.abs(d - 4) < 0.6 || Math.abs(d - 2) < 0.5) c = P.alt
      } else { if ((x % 8 === 4 && yy % 8 < 3) || (yy % 8 === 1 && x % 8 > 2 && x % 8 < 6)) c = P.alt }
      if (c) s.set(x, y, c)
    }
  },
  // 6 · la pierre
  (s, P, r) => stones(s, 0, 4, FLOOR_W, 48, P.wall, P.deep, r),
  // 7 · le mur peint en dégradé, montagnes lointaines à l'horizon
  (s, P, r) => {
    const top = P.dark ? shade(P.wall, -0.25) : shade(P.wall, 0.18)
    const bot = P.dark ? shade(P.wall, 0.12) : shade(P.wall, -0.08)
    for (let y = 4; y < 52; y++) {
      const t = (y - 4) / 47
      const band = Math.floor(t * 5) / 4
      const nxt = Math.min(1, band + 0.25)
      for (let x = 0; x < FLOOR_W; x++) {
        const dith = ((t * 5) % 1) > 0.5 && (x + y) % 2 === 0
        s.set(x, y, mix(top, bot, dith ? nxt : band))
      }
    }
    const peak = mix(P.wall, P.accent, 0.3)
    let h = 6 + r() * 6
    for (let x = 0; x < FLOOR_W; x++) {
      h += (r() - 0.5) * 2.4 + Math.sin(x / 11) * 0.5
      h = Math.max(3, Math.min(14, h))
      s.vline(x, Math.round(42 - h), Math.round(h), shade(peak, P.dark ? 0.08 : -0.06))
      s.set(x, Math.round(42 - h), shade(peak, 0.15))
    }
    s.rect(0, 42, FLOOR_W, 10, shade(peak, P.dark ? 0.03 : -0.12))
  },
  // 8 · les rayures verticales
  (s, P, r) => {
    const a = 3 + Math.floor(r() * 3), b = 2 + Math.floor(r() * 3)
    s.rect(0, 4, FLOOR_W, 48, P.wall)
    for (let x = 0; x < FLOOR_W; x += a + b) {
      s.rect(x, 4, b, 48, P.alt)
      s.vline(x + b, 4, 48, P.light)
    }
  },
  // 9 · les boiseries · panneaux moulurés sur deux rangs
  (s, P, r) => {
    s.rect(0, 4, FLOOR_W, 48, P.wall)
    const pw = 16 + Math.floor(r() * 3) * 4
    for (let x = 7; x < FLOOR_W - 6; x += pw + 4) {
      for (const [y0, h] of [[8, 16], [27, 15]] as const) {
        s.hline(x, y0, pw, P.deep); s.vline(x, y0, h, P.deep)
        s.hline(x + 1, y0 + h - 1, pw - 1, P.light); s.vline(x + pw - 1, y0 + 1, h - 1, P.light)
        s.rect(x + 1, y0 + 1, pw - 2, h - 2, P.alt)
        s.hline(x + 2, y0 + 2, pw - 4, shade(P.alt, 0.08))
      }
    }
  },
  // 10 · les tiges de bambou serrées
  (s, P, r) => {
    const cane = mix(P.wall, '#b8b86a', P.dark ? 0.22 : 0.35)
    s.rect(0, 4, FLOOR_W, 48, shade(cane, -0.35))
    for (let x = 0; x < FLOOR_W; x += 5) {
      const c = [cane, shade(cane, 0.08), shade(cane, -0.06)][Math.floor(r() * 3)]
      s.rect(x, 4, 4, 48, c)
      s.vline(x, 4, 48, shade(c, 0.22))
      s.vline(x + 3, 4, 48, shade(c, -0.22))
      const off = Math.floor(r() * 10)
      for (let y = 4 + off; y < 52; y += 10 + Math.floor(r() * 3)) { s.hline(x, y, 4, shade(c, -0.35)); s.hline(x, y + 1, 4, shade(c, 0.25)) }
    }
  },
]

/* ------------------------------------------------------------------ */
/* Les soubassements · de y0 (38..46) au pied du mur                    */
/* ------------------------------------------------------------------ */

export const WAINS: Wain[] = [
  // 0 · une simple plinthe
  (s, P) => skirting(s, P.trim),
  // 1 · le lambris à montants
  (s, P, r, y0) => wainscot(s, y0, P.trim, 10 + Math.floor(r() * 3) * 3),
  // 2 · les planches couchées
  (s, P, _r, y0) => {
    s.rect(0, y0, FLOOR_W, 52 - y0, P.trim)
    for (let y = y0 + 3; y < 51; y += 3) { s.hline(0, y, FLOOR_W, shade(P.trim, -0.22)); s.hline(0, y + 1, FLOOR_W, shade(P.trim, 0.08)) }
    s.hline(0, y0, FLOOR_W, shade(P.trim, 0.3)); s.hline(0, y0 + 1, FLOOR_W, shade(P.trim, -0.35))
  },
  // 3 · la bande carrelée
  (s, P, _r, y0) => {
    tiles(s, 0, y0, FLOOR_W, 52 - y0, P.trim, shade(P.trim, -0.25), 5, 4)
    for (let x = 1; x < FLOOR_W; x += 5) for (let y = y0 + 1; y < 52; y += 4) s.set(x, y, shade(P.trim, 0.25))
    s.hline(0, y0, FLOOR_W, shade(P.trim, -0.4))
  },
  // 4 · le pied de mur en pierre
  (s, P, r, y0) => { stones(s, 0, y0, FLOOR_W, 52 - y0, P.trim, shade(P.trim, -0.4), r, 6, 12); s.hline(0, y0, FLOOR_W, shade(P.trim, 0.25)) },
  // 5 · la bande peinte sous une cimaise de bois
  (s, P, _r, y0) => {
    s.rect(0, y0, FLOOR_W, 52 - y0, P.trim)
    s.rect(0, y0 - 1, FLOOR_W, 2, P.wood); s.hline(0, y0 - 1, FLOOR_W, shade(P.wood, 0.3))
    s.hline(0, y0 + 1, FLOOR_W, shade(P.trim, -0.2))
    s.hline(0, 50, FLOOR_W, shade(P.trim, -0.3)); s.hline(0, 51, FLOOR_W, shade(P.trim, -0.45))
  },
  // 6 · le panneau bas à lattes (koshi-ita)
  (s, P, _r, y0) => {
    s.rect(0, y0, FLOOR_W, 52 - y0, P.wood)
    for (let x = 1; x < FLOOR_W; x += 3) s.vline(x, y0 + 2, 50 - y0 - 2, shade(P.wood, -0.25))
    s.rect(0, y0, FLOOR_W, 2, shade(P.wood, -0.2)); s.hline(0, y0, FLOOR_W, shade(P.wood, 0.25))
    s.hline(0, 50, FLOOR_W, shade(P.wood, -0.35)); s.hline(0, 51, FLOOR_W, shade(P.wood, -0.5))
  },
  // 7 · le damier
  (s, P, _r, y0) => {
    for (let y = y0; y < 52; y++) for (let x = 0; x < FLOOR_W; x++) s.set(x, y, (Math.floor(x / 4) + Math.floor((y - y0) / 4)) % 2 ? P.trim : shade(P.trim, 0.25))
    s.hline(0, y0, FLOOR_W, shade(P.trim, -0.4))
  },
  // 8 · les briques
  (s, P, _r, y0) => { bricks(s, y0, 52 - y0, P.trim, shade(P.trim, -0.35), 8, 4); s.hline(0, y0, FLOOR_W, shade(P.trim, -0.45)) },
]

export function paintWain(i: number, s: Grid, P: Pal, r: () => number, y0: number) {
  WAINS[i % WAINS.length](s, P, r, y0)
}

/* ------------------------------------------------------------------ */
/* Les sols · y = 52..63                                               */
/* ------------------------------------------------------------------ */

export const FLOORS: Surf[] = [
  // 0 · les tatamis
  (s, P) => {
    const mat = mix('#cfc781', P.floor, P.dark ? 0.45 : 0.18), edge = mix('#3e6b3a', P.trim, 0.35)
    s.rect(0, 52, FLOOR_W, 12, mat)
    for (let y = 53; y < 64; y += 2) s.hline(0, y, FLOOR_W, shade(mat, -0.08))
    s.hline(0, 57, FLOOR_W, edge); s.hline(0, 58, FLOOR_W, shade(edge, 0.2))
    for (const x of [12, 44, 76, 108, 140]) s.vline(x, 52, 5, edge)
    for (const x of [28, 60, 92, 124, 156]) s.vline(x, 59, 5, edge)
  },
  // 1 · le parquet en longueur
  (s, P, r) => planksH(s, P.floor, 18 + Math.floor(r() * 12), r),
  // 2 · les lames qui fuient vers le fond
  (s, P, r) => {
    s.rect(0, 52, FLOOR_W, 12, P.floor)
    for (let x = 0; x < FLOOR_W; x += 7) {
      s.vline(x, 52, 12, shade(P.floor, -0.25)); s.vline(x + 1, 52, 12, shade(P.floor, 0.1))
      const j = 53 + Math.floor(r() * 9)
      s.hline(x + 1, j, 6, shade(P.floor, -0.2))
    }
  },
  // 3 · les chevrons
  (s, P) => {
    s.rect(0, 52, FLOOR_W, 12, P.floor)
    for (let y = 52; y < 64; y++) for (let x = 0; x < FLOOR_W; x++) {
      const k = (x + (Math.floor(x / 6) % 2 ? y : -y) + 64) % 6
      if (k === 0) s.set(x, y, shade(P.floor, -0.2))
      else if (k === 1) s.set(x, y, shade(P.floor, 0.1))
    }
  },
  // 4 · le damier
  (s, P, r) => { const big = r() < 0.5; checker(s, P.floor, P.floor2, big ? 10 : 8, big ? 6 : 4) },
  // 5 · les grandes dalles brillantes
  (s, P) => {
    tiles(s, 0, 52, FLOOR_W, 12, P.floor, shade(P.floor, -0.22), 16, 6)
    for (let x = 0; x < FLOOR_W; x += 16) { s.hline(x + 2, 53, 4, shade(P.floor, 0.2)); s.set(x + 2, 54, shade(P.floor, 0.2)) }
  },
  // 6 · le tapis à bordure
  (s, P, r) => {
    carpet(s, P.floor, shade(P.floor, 0.12), 3 + Math.floor(r() * 3))
    s.hline(0, 54, FLOOR_W, P.floor2); s.hline(0, 61, FLOOR_W, P.floor2)
    for (let x = 2; x < FLOOR_W; x += 6) { s.set(x, 55, P.floor2); s.set(x + 3, 60, P.floor2) }
  },
  // 7 · les dalles de pierre irrégulières
  (s, P, r) => stones(s, 0, 52, FLOOR_W, 12, P.floor, shade(P.floor, -0.35), r, 9, 20),
  // 8 · le sable ratissé du jardin sec
  (s, P, r) => {
    const sand = mix('#e9dfc4', P.floor, P.dark ? 0.4 : 0.15)
    s.rect(0, 52, FLOOR_W, 12, sand)
    for (let y = 53; y < 64; y += 2) for (let x = 0; x < FLOOR_W; x++) {
      const yy = y + Math.round(Math.sin(x / 7 + y) * 0.6)
      s.set(x, yy, shade(sand, -0.12))
    }
    // deux pierres et leurs ronds, loin du chemin de la porte
    for (const cx of [20 + Math.floor(r() * 30), 108 + Math.floor(r() * 40)]) {
      for (let y = 52; y < 63; y++) for (let x = cx - 12; x <= cx + 12; x++) {
        const d = Math.hypot(x - cx, (y - 58) * 2)
        if (d < 14 && Math.round(d) % 3 === 0) s.set(x, y, shade(sand, -0.14))
        else if (d < 14) s.set(x, y, sand)
      }
      s.rect(cx - 3, 56, 7, 4, '#7d7a75'); s.rect(cx - 2, 55, 5, 1, '#8f8c86'); s.hline(cx - 2, 56, 4, '#a7a49d')
      s.hline(cx - 3, 60, 7, '#5d5a55')
    }
  },
  // 9 · le béton ciré et ses reflets
  (s, P, r) => {
    const base = mix('#a9a9a6', P.floor, 0.35)
    s.rect(0, 52, FLOOR_W, 12, base)
    speckle(s, 0, 52, FLOOR_W, 12, shade(base, -0.08), 140, r)
    for (let x = 0; x < FLOOR_W; x += 32) s.vline(x, 52, 12, shade(base, -0.2))
    s.hline(0, 58, FLOOR_W, shade(base, -0.15))
    for (let x = 10; x < FLOOR_W; x += 32) for (let k = 0; k < 6; k++) s.set(x + k, 53 + k, shade(base, 0.2))
  },
]

/** un tapis devant les élèves, aux couleurs de la formation */
export function rug(s: Grid, P: Pal, r: () => number) {
  const x0 = 100 + Math.floor(r() * 4), w = 50 + Math.floor(r() * 4)
  const m = Math.floor(r() * 3)
  const base = m === 1 ? P.accent : P.tint
  s.rect(x0, 54, w, 7, shade(base, -0.45))
  s.rect(x0 + 1, 55, w - 2, 5, base)
  s.rect(x0 + 2, 56, w - 4, 3, shade(base, -0.2))
  for (let x = x0 + 3; x < x0 + w - 3; x += 4) s.set(x, 57, m === 2 ? '#f5c542' : shade(base, 0.35))
  for (let x = x0; x < x0 + w; x += 2) { s.set(x, 53, shade(base, 0.2)); s.set(x, 61, shade(base, 0.2)) }
}
