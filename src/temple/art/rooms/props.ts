// LES OBJETS DES ÉTAGES · la bibliothèque où le compositeur pioche.
//
// Demandé : « Les étages doivent être tous différents là ils sont trop
// identiques ». Chaque objet déclare sa taille et sa place possible :
//   - 'wall'   accroché au mur (bas de l'objet au-dessus de y = 38) ;
//   - 'hang'   suspendu à la poutre (lanternes, bannières, guirlandes) ;
//   - 'tall'   debout au sol, seulement dans les fentes x = 5..17 et 45..62 ;
//   - 'narrow' debout au sol, petit, dans la fente x = 91..99 ;
//   - 'low'    posé au sol, bas (sommet sous y = 40), devant le maître ou
//              les élèves.
// Les coordonnées passées à `draw` sont le coin haut gauche de l'objet.
import { shade } from '../../../pixel/grid'
import type { Grid } from '../../../pixel/grid'
import {
  WOOD, WOOD_D, WOOD_L, PAPER, GOLD, RED, WHITE, INK, LEAF, POT, CHALK,
  put, text, glow, plant, cushion, lantern, bookcase, board, clock, table, chair,
  disc, line, mix, pick, type Ctx,
} from './base'

export type Kind = 'wall' | 'hang' | 'tall' | 'narrow' | 'low'

export interface Prop {
  id: string
  kind: Kind
  w: number
  h: number
  /** les ambiances où l'objet a sa place · une spécialité qui partage une
   *  étiquette le tire plus souvent */
  tags: string[]
  draw: (c: Ctx, x: number, y: number) => void
}

const SUMI = '#2b2b2b'

/* ------------------------------------------------------------------ */
/* Les vues des fenêtres                                               */
/* ------------------------------------------------------------------ */

export const VIEWS = ['mountain', 'sea', 'city', 'sakura', 'night', 'snow', 'bamboo', 'sunset'] as const

function sky(g: Grid, x: number, y: number, w: number, h: number, top: string, bot: string) {
  for (let j = 0; j < h; j++) {
    const t = j / Math.max(1, h - 1)
    for (let i = 0; i < w; i++) g.set(x + i, y + j, ((t * 3) % 1 > 0.5 && (i + j) % 2 === 0) ? mix(top, bot, Math.min(1, Math.floor(t * 3) / 2 + 0.5)) : mix(top, bot, Math.floor(t * 3) / 2))
  }
}

/** la vue dans une fenêtre, peinte dans le rectangle (x, y, w, h) */
function view(g: Grid, x: number, y: number, w: number, h: number, v: number, r: () => number) {
  const kind = VIEWS[v % VIEWS.length]
  const ground = y + h
  if (kind === 'mountain') {
    sky(g, x, y, w, h, '#7cc4f2', '#cdeeff')
    disc(g, x + w - 5, y + 3, 1.6, '#fff2a8')
    const cx = x + Math.floor(w * 0.42)
    for (let j = 0; j < h; j++) {
      const half = Math.floor(j * 1.3)
      for (let i = -half; i <= half; i++) {
        const px = cx + i
        if (px < x || px >= x + w) continue
        g.set(px, y + 2 + j, j < 3 ? WHITE : (i > 0 ? '#5d6f9a' : '#7186b5'))
      }
    }
    for (let i = 0; i < w; i++) { const hh = 2 + Math.round(Math.sin(i / 3) + 1); g.vline(x + i, ground - hh, hh, '#4caf6a') }
  } else if (kind === 'sea') {
    sky(g, x, y, w, h, '#69b8ef', '#c4e8ff')
    disc(g, x + 4, y + 3, 2, '#fff2a8')
    const hz = y + Math.floor(h * 0.55)
    g.rect(x, hz, w, ground - hz, '#2a7fc9')
    g.hline(x, hz, w, '#5fb0ec')
    for (let k = 0; k < w; k += 4) g.hline(x + k + ((k / 4) % 2), hz + 2 + ((k / 4) % 3), 2, WHITE)
    g.rect(x + w - 6, hz - 2, 3, 2, WHITE); g.set(x + w - 5, hz - 3, '#e5413a')
  } else if (kind === 'city') {
    sky(g, x, y, w, h, '#5b3f9a', '#ff9e6b')
    let i = 0
    while (i < w) {
      const bw = 3 + Math.floor(r() * 4), bh = 4 + Math.floor(r() * (h - 4))
      const c = r() < 0.5 ? '#2b2d4a' : '#363a5e'
      g.rect(x + i, ground - bh, Math.min(bw, w - i), bh, c)
      for (let yy = ground - bh + 1; yy < ground - 1; yy += 2) for (let xx = i + 1; xx < Math.min(i + bw - 1, w); xx += 2) if (r() < 0.55) g.set(x + xx, yy, '#ffd36b')
      i += bw
    }
  } else if (kind === 'sakura') {
    sky(g, x, y, w, h, '#a9dcff', '#e6f5ff')
    g.rect(x, ground - 2, w, 2, '#8fd18a')
    line(g, x, y + h - 4, x + Math.floor(w * 0.7), y + 2, '#6b3f2a')
    line(g, x + Math.floor(w * 0.35), y + Math.floor(h * 0.45), x + w - 1, y + Math.floor(h * 0.55), '#6b3f2a')
    for (let k = 0; k < (w * h) / 9; k++) {
      const px = x + Math.floor(r() * w), py = y + Math.floor(r() * (h - 3))
      g.set(px, py, r() < 0.5 ? '#ffb7d0' : '#ff8fb8')
      if (r() < 0.5) g.set(px + 1, py, '#ffd6e5')
    }
  } else if (kind === 'night') {
    sky(g, x, y, w, h, '#0e1433', '#2a3470')
    for (let k = 0; k < w; k++) if (r() < 0.35) g.set(x + k, y + Math.floor(r() * (h - 4)), r() < 0.3 ? '#fff3b0' : WHITE)
    disc(g, x + w - 6, y + 4, 2.6, '#fff3b0'); disc(g, x + w - 5, y + 3, 2, '#2a3470')
    for (let i = 0; i < w; i++) { const hh = 2 + Math.round(1.5 + Math.sin(i / 4) * 1.5); g.vline(x + i, ground - hh, hh, '#0a0e22') }
    g.set(x + 3, ground - 4, '#ffd36b')
  } else if (kind === 'snow') {
    sky(g, x, y, w, h, '#b9cce6', '#eef4fb')
    g.rect(x, ground - 3, w, 3, WHITE)
    for (let t = 0; t < 3; t++) {
      const tx = x + 2 + Math.floor((t * (w - 4)) / 3) + Math.floor(r() * 3), th = 6 + Math.floor(r() * 4)
      for (let j = 0; j < th; j++) { const half = Math.floor(j / 2); g.hline(tx - half, ground - 3 - th + j, half * 2 + 1, j % 3 === 0 ? WHITE : '#2f6b4a') }
    }
    for (let k = 0; k < w; k++) if (r() < 0.5) g.set(x + k, y + Math.floor(r() * (h - 3)), WHITE)
  } else if (kind === 'bamboo') {
    sky(g, x, y, w, h, '#cfeec0', '#f2fbe6')
    for (let i = 1; i < w; i += 3 + Math.floor(r() * 2)) {
      const c = r() < 0.5 ? '#4f9a3c' : '#6fb84f'
      g.vline(x + i, y, h, c)
      for (let yy = y + Math.floor(r() * 4); yy < ground; yy += 5) g.set(x + i, yy, '#2f6b2a')
      g.set(x + i + 1, y + 2 + Math.floor(r() * (h - 4)), '#8fd16a')
    }
  } else {
    sky(g, x, y, w, h, '#ff7a59', '#ffd98a')
    const hz = y + Math.floor(h * 0.6)
    for (let i = -4; i <= 4; i++) for (let j = -4; j <= 0; j++) if (Math.hypot(i, j) <= 4.2) g.set(x + Math.floor(w / 2) + i, hz + j, '#fff1a8')
    g.rect(x, hz, w, ground - hz, '#3b3f8f')
    for (let j = hz + 1; j < ground; j += 2) g.hline(x + Math.floor(w / 2) - 2 + (j % 3), j, 3, '#ffb35c')
  }
}

function windowProp(w: number, h: number): Prop {
  return {
    id: `window${w}`, kind: 'wall', w, h, tags: ['zen', 'office', 'school', 'library', 'lab', 'lux', 'craft'],
    draw(c, x, y) {
      const wood = c.P.wood
      put(c.s, x, y, w, h, (g) => {
        g.rect(0, 0, w, h, wood)
        g.hline(0, 0, w, shade(wood, 0.3))
        view(g, 2, 2, w - 4, h - 6, c.view, c.r)
        g.vline(Math.floor(w / 2), 2, h - 6, wood)
        g.hline(2, 2 + Math.floor((h - 6) / 2), w - 4, shade(wood, -0.1))
        g.set(3, 3, WHITE); g.set(4, 3, WHITE); g.set(3, 4, WHITE)
        g.rect(0, h - 4, w, 4, shade(wood, -0.15))
        g.hline(0, h - 4, w, shade(wood, 0.25))
      })
    },
  }
}

/** une fenêtre ronde (marumado) */
const roundWindow: Prop = {
  id: 'marumado', kind: 'wall', w: 21, h: 21, tags: ['zen', 'lux'],
  draw(c, x, y) {
    put(c.s, x, y, 21, 21, (g) => {
      const ring = c.P.wood
      view(g, 2, 2, 17, 17, c.view, c.r)
      for (let j = 0; j < 21; j++) for (let i = 0; i < 21; i++) {
        const d = Math.hypot(i - 10, j - 10)
        if (d > 8.3 && d <= 10.4) g.set(i, j, d > 9.5 ? shade(ring, -0.25) : ring)
        if (d > 10.4) g.set(i, j, null)
      }
      for (let j = 3; j < 18; j++) if (Math.hypot(0, j - 10) <= 8.3) g.set(10, j, shade(ring, -0.1))
    })
  },
}

/* ------------------------------------------------------------------ */
/* Les objets accrochés                                                 */
/* ------------------------------------------------------------------ */

/** un rouleau suspendu (kakemono) et son dessin à l'encre */
function kakemono(h: number): Prop {
  return {
    id: `kakemono${h}`, kind: 'wall', w: 9, h, tags: ['zen', 'library', 'lux'],
    draw(c, x, y) {
      if (y > 5) c.s.vline(x + 4, 4, y - 4, INK)
      const motif = Math.floor(c.r() * 6)
      const ink = c.r() < 0.3 ? c.tint : SUMI
      put(c.s, x, y, 9, h, (g) => {
        g.rect(0, 0, 9, 2, WOOD_D)
        g.rect(1, 2, 7, h - 4, '#f6ecd3')
        g.vline(1, 2, h - 4, '#e2d3ae')
        g.rect(0, h - 2, 9, 2, WOOD_D)
        const m = Math.floor(h / 2)
        if (motif === 0) {
          // le bambou
          g.vline(4, 4, h - 8, '#3f8a3a'); for (let yy = 6; yy < h - 4; yy += 4) g.set(4, yy, '#1f4a1f')
          g.set(5, 7, '#3f8a3a'); g.set(6, 6, '#3f8a3a'); g.set(3, 11, '#3f8a3a'); g.set(2, 10, '#3f8a3a')
        } else if (motif === 1) {
          // la montagne et le soleil rouge
          disc(g, 5, 6, 1.2, RED)
          for (let j = 0; j < 5; j++) g.hline(4 - j, m + j, j * 2 + 1, j < 1 ? '#9a9a9a' : ink)
          g.hline(2, m + 6, 6, '#9a9a9a')
        } else if (motif === 2) {
          // l'ensō, le cercle d'un seul geste
          for (let a = 0; a < 330; a += 12) { const t = (a * Math.PI) / 180; g.set(Math.round(4 + Math.cos(t) * 2.6), Math.round(m - 2 + Math.sin(t) * 2.6), ink) }
          g.rect(5, h - 6, 2, 2, RED)
        } else if (motif === 3) {
          // la branche de prunier
          line(g, 2, h - 6, 6, 5, '#4a2c1c'); line(g, 4, m, 6, m + 3, '#4a2c1c')
          for (const [px, py] of [[6, 5], [5, 8], [3, m + 2], [6, m + 3], [4, h - 9]]) { g.set(px, py, '#ff7aa2'); g.set(px + 1, py, '#ffc0d4') }
        } else if (motif === 4) {
          // trois traits de pinceau, comme un caractère
          g.hline(3, 5, 3, ink); g.vline(4, 6, 5, ink); g.set(3, 9, ink); g.set(5, 10, ink)
          g.hline(2, m + 2, 5, ink); g.vline(4, m + 2, 4, ink); g.set(3, m + 5, ink)
          g.rect(5, h - 6, 2, 2, RED)
        } else {
          // la grue
          g.rect(3, m - 2, 3, 2, WHITE); g.set(2, m - 3, SUMI); g.set(3, m - 3, RED)
          line(g, 6, m - 2, 7, m - 5, SUMI); line(g, 4, m, 3, m + 4, SUMI); line(g, 5, m, 6, m + 4, SUMI)
          g.hline(2, m - 1, 5, '#d8d0bd')
        }
      })
    },
  }
}

/** un lavis encadré (sumi-e) · des montagnes à l'encre et un soleil rouge */
const calligraphy: Prop = {
  id: 'calligraphy', kind: 'wall', w: 26, h: 12, tags: ['zen', 'library', 'lux', 'school'],
  draw(c, x, y) {
    const seed = c.r() * 6
    put(c.s, x, y, 26, 12, (g) => {
      board(g, 26, 12, WOOD_D, '#f8f0da')
      disc(g, 19, 3.5, 1.4, RED)
      for (let i = 1; i < 25; i++) {
        const far = Math.round(5 + Math.sin(i / 3 + seed) * 1.6)
        g.vline(i, far, 10 - far, '#b9b2a2')
        const near = Math.round(7 + Math.sin(i / 2.2 + seed * 2) * 1.4)
        g.vline(i, near, 10 - near + 1, i % 5 === 0 ? '#2b2b2b' : '#5a5650')
      }
      g.set(4, 9, '#2b2b2b'); g.set(5, 8, '#2b2b2b'); g.rect(22, 8, 2, 2, RED)
    })
  },
}

/** un éventail ouvert */
const fan: Prop = {
  id: 'fan', kind: 'wall', w: 17, h: 10, tags: ['zen', 'lux', 'craft'],
  draw(c, x, y) {
    const a = c.r() < 0.5 ? c.tint : RED, b = c.r() < 0.5 ? PAPER : GOLD
    put(c.s, x, y, 17, 10, (g) => {
      for (let j = 0; j < 9; j++) for (let i = 0; i < 17; i++) {
        const d = Math.hypot(i - 8, j - 8.5)
        if (d > 8.6 || d < 2.4) continue
        const ang = Math.atan2(8.5 - j, i - 8)
        const seg = Math.floor((ang / Math.PI) * 8)
        g.set(i, j, d > 7.6 ? shade(a, -0.3) : seg % 2 ? a : b)
      }
      g.rect(7, 8, 3, 2, WOOD_D)
      disc(g, 11, 4, 1.2, (b === GOLD ? RED : GOLD))
    })
  },
}

/** une estampe · la grande vague */
const wavePrint: Prop = {
  id: 'wave', kind: 'wall', w: 24, h: 16, tags: ['zen', 'lux', 'craft'],
  draw(c, x, y) {
    put(c.s, x, y, 24, 16, (g) => {
      board(g, 24, 16, WOOD_D, '#f3e6c4')
      g.hline(1, 1, 22, '#e8d6a8')
      for (let j = 0; j < 3; j++) g.hline(14 - j * 2, 9 + j, 3 + j * 2, '#7a8db5')
      g.set(15, 9, WHITE)
      for (let i = 1; i < 23; i++) {
        const hh = Math.round(4 + Math.sin(i / 3.2) * 2.4)
        g.vline(i, 15 - hh, hh, i < 12 ? '#1f4f8a' : '#2f6fb5')
        g.set(i, 15 - hh, WHITE)
      }
      for (let i = 0; i < 6; i++) g.set(3 + i, 6 + Math.round(Math.abs(3 - i) * 0.7), '#1f4f8a')
      g.set(3, 6, WHITE); g.set(2, 7, WHITE); g.set(4, 5, WHITE)
      g.rect(20, 3, 2, 2, RED)
    })
  },
}

/** une étagère murale de livres */
function wallBooks(w: number): Prop {
  return {
    id: `wallbooks${w}`, kind: 'wall', w, h: 9, tags: ['library', 'school', 'office', 'lux'],
    draw(c, x, y) { bookcase(c.s, x, y, w, 9, 1, c.P.books, c.r, c.P.wood) },
  }
}

/** une planche murale, pots, bocaux et petites plantes */
const plantShelf: Prop = {
  id: 'plantshelf', kind: 'wall', w: 24, h: 11, tags: ['zen', 'craft', 'office', 'lab', 'school'],
  draw(c, x, y) {
    put(c.s, x, y, 24, 11, (g) => {
      g.rect(0, 9, 24, 2, c.P.wood); g.hline(0, 9, 24, shade(c.P.wood, 0.3))
      g.set(2, 10, null); g.set(21, 10, null)
      let px = 1
      while (px < 21) {
        const kind = Math.floor(c.r() * 3)
        if (kind === 0) {
          g.rect(px, 6, 4, 3, POT); g.hline(px, 6, 4, shade(POT, 0.2))
          disc(g, px + 1.5, 3.5, 2.2, LEAF); g.set(px + 1, 2, shade(LEAF, 0.3))
        } else if (kind === 1) {
          g.rect(px, 3, 4, 6, '#dff4ff'); g.rect(px, 6, 4, 3, pick(c.r, ['#f59e0b', '#22c55e', c.tint, '#ec4899']))
          g.hline(px, 2, 4, '#7a8396'); g.set(px, 4, WHITE)
        } else {
          g.rect(px, 5, 3, 4, WHITE); g.hline(px, 5, 3, '#c9d0de')
          g.vline(px + 1, 1, 4, '#2f9e5a'); g.set(px, 2, '#3fb35a'); g.set(px + 2, 1, '#3fb35a')
        }
        px += 6 + Math.floor(c.r() * 2)
      }
    })
  },
}

/** une grappe de post-it */
const stickyCluster: Prop = {
  id: 'sticky', kind: 'wall', w: 22, h: 15, tags: ['office', 'tech', 'craft', 'school'],
  draw(c, x, y) {
    const notes = ['#fde68a', '#fbcfe8', '#bfdbfe', '#bbf7d0', '#fed7aa']
    put(c.s, x, y, 22, 15, (g) => {
      for (let j = 0; j < 2; j++) for (let i = 0; i < 3; i++) {
        if (c.r() < 0.15) continue
        const n = pick(c.r, notes)
        const nx = i * 7 + (j % 2), ny = j * 7 + (i % 2)
        g.rect(nx, ny, 6, 6, n)
        g.hline(nx + 1, ny + 2, 4, shade(n, -0.3)); g.hline(nx + 1, ny + 4, 3, shade(n, -0.3))
        g.set(nx + 5, ny + 5, shade(n, -0.15))
      }
    })
  },
}

/** un tableau blanc et son schéma de blocs reliés */
const whiteboard: Prop = {
  id: 'whiteboard', kind: 'wall', w: 32, h: 21, tags: ['office', 'tech', 'school', 'lab'],
  draw(c, x, y) {
    put(c.s, x, y, 32, 21, (g) => {
      board(g, 32, 21, '#9aa3b8', WHITE)
      const cols = ['#3b82f6', '#ef4444', '#16a34a', c.tint]
      const boxes: [number, number][] = [[3, 3], [13, 3], [23, 3], [8, 11], [19, 11]]
      line(g, 6, 6, 11, 12, '#9aa3b8'); line(g, 16, 6, 11, 12, '#9aa3b8'); line(g, 16, 6, 22, 12, '#9aa3b8'); line(g, 26, 6, 22, 12, '#9aa3b8')
      boxes.forEach(([bx, by], i) => {
        const col = cols[i % cols.length]
        g.rect(bx, by, 7, 4, col); g.rect(bx + 1, by + 1, 5, 2, WHITE); g.hline(bx + 2, by + 2, 3, shade(col, 0.2))
      })
      g.rect(1, 19, 30, 1, '#c9cfdb')
      g.rect(4, 18, 4, 1, '#3b82f6'); g.rect(10, 18, 3, 1, RED)
    })
  },
}

/** un tableau noir et un schéma à la craie */
const chalkboard: Prop = {
  id: 'chalkboard', kind: 'wall', w: 32, h: 21, tags: ['school', 'zen', 'lab', 'library'],
  draw(c, x, y) {
    const m = Math.floor(c.r() * 3)
    put(c.s, x, y, 32, 21, (g) => {
      board(g, 32, 21, c.P.wood, '#2f5d4a')
      if (m === 0) {
        // un arbre de décision
        const n: [number, number][] = [[15, 4], [8, 10], [22, 10], [4, 16], [12, 16], [26, 16]]
        for (const [a, b] of [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5]]) line(g, n[a][0], n[a][1], n[b][0], n[b][1], '#8fb8a2')
        for (const [nx, ny] of n) g.rect(nx - 1, ny - 1, 3, 3, CHALK)
      } else if (m === 1) {
        // une courbe et ses axes
        g.vline(4, 3, 14, CHALK); g.hline(4, 16, 24, CHALK)
        for (let i = 0; i < 22; i++) g.set(5 + i, Math.round(15 - (i * i) / 40), '#ffd34d')
        text(g, 20, 4, 'AI', CHALK)
      } else {
        // une petite équation
        text(g, 3, 4, '2+3=5', CHALK)
        text(g, 3, 11, 'X', '#ffd34d'); g.hline(8, 13, 6, CHALK); text(g, 16, 11, 'Y', '#ffd34d')
        g.rect(25, 4, 4, 4, CHALK); g.rect(26, 5, 2, 2, '#2f5d4a')
      }
      g.hline(1, 19, 30, shade(c.P.wood, 0.25))
      g.rect(5, 18, 3, 1, WHITE)
    })
  },
}

/** un diplôme encadré */
const diploma: Prop = {
  id: 'diploma', kind: 'wall', w: 14, h: 11, tags: ['school', 'office', 'lux', 'library'],
  draw(c, x, y) {
    put(c.s, x, y, 14, 11, (g) => {
      board(g, 14, 11, GOLD, '#fbf3dc')
      g.hline(3, 3, 8, '#9a8a6a'); g.hline(2, 5, 10, '#c9b994'); g.hline(2, 7, 7, '#c9b994')
      disc(g, 10, 7, 1.5, RED); g.set(9, 9, RED); g.set(11, 9, RED)
    })
  },
}

/** un tableau de liège et ses fiches */
const corkboard: Prop = {
  id: 'cork', kind: 'wall', w: 26, h: 16, tags: ['office', 'school', 'craft', 'library'],
  draw(c, x, y) {
    put(c.s, x, y, 26, 16, (g) => {
      board(g, 26, 16, WOOD_L, '#d9a86a')
      for (let k = 0; k < 40; k++) g.set(1 + Math.floor(c.r() * 24), 1 + Math.floor(c.r() * 14), '#c99558')
      for (let i = 0; i < 4; i++) {
        const fx = 2 + i * 6, fy = 2 + (i % 2) * 4
        const top = pick(c.r, ['#f87171', '#60a5fa', '#34d399', '#fbbf24', c.tint])
        g.rect(fx, fy, 5, 7, WHITE); g.hline(fx, fy, 5, top); g.hline(fx + 1, fy + 3, 3, '#b8c0d8'); g.hline(fx + 1, fy + 5, 2, '#b8c0d8')
        g.set(fx + 2, fy, INK)
      }
    })
  },
}

/** une petite carte du monde */
const worldMap: Prop = {
  id: 'map', kind: 'wall', w: 26, h: 16, tags: ['school', 'office', 'library'],
  draw(c, x, y) {
    put(c.s, x, y, 26, 16, (g) => {
      board(g, 26, 16, c.P.wood, '#8fd0f5')
      g.rect(3, 3, 6, 5, '#7cc576'); g.rect(5, 8, 3, 5, '#7cc576')
      g.rect(11, 3, 5, 3, '#7cc576'); g.rect(11, 7, 4, 5, '#7cc576')
      g.rect(17, 3, 6, 5, '#7cc576'); g.rect(20, 10, 3, 3, '#7cc576')
      g.set(6, 4, RED); g.set(13, 8, c.tint); g.set(19, 4, RED)
    })
  },
}

/** une étagère de trophées */
const trophyShelf: Prop = {
  id: 'trophies', kind: 'wall', w: 22, h: 10, tags: ['office', 'school', 'lux'],
  draw(c, x, y) {
    put(c.s, x, y, 22, 10, (g) => {
      g.rect(0, 8, 22, 2, c.P.wood); g.hline(0, 8, 22, shade(c.P.wood, 0.3))
      for (const [tx, tall] of [[2, 6], [9, 8], [16, 5]] as const) {
        g.rect(tx, 8 - tall, 4, tall - 3, GOLD); g.vline(tx, 8 - tall, tall - 3, '#fff1a8')
        g.set(tx - 1, 9 - tall, GOLD); g.set(tx + 4, 9 - tall, GOLD)
        g.vline(tx + 1, 5, 2, shade(GOLD, -0.25)); g.rect(tx, 7, 4, 1, shade(GOLD, -0.3))
      }
      disc(g, 20, 5, 1.4, '#c0c0d0'); g.set(20, 3, c.tint)
    })
  },
}

/** un masque de renard (kitsune) */
const kitsune: Prop = {
  id: 'kitsune', kind: 'wall', w: 9, h: 11, tags: ['lux'],
  draw(c, x, y) {
    put(c.s, x, y, 9, 11, (g) => {
      g.rect(1, 0, 2, 3, WHITE); g.rect(6, 0, 2, 3, WHITE); g.set(1, 1, RED); g.set(7, 1, RED)
      g.round(0, 2, 9, 6, WHITE); g.rect(2, 7, 5, 2, WHITE); g.rect(3, 9, 3, 2, WHITE)
      g.hline(1, 5, 2, RED); g.hline(6, 5, 2, RED); g.set(2, 4, INK); g.set(6, 4, INK)
      g.set(4, 10, INK); g.vline(4, 3, 2, c.tint)
    })
  },
}

/** un petit calendrier */
const smallCalendar: Prop = {
  id: 'calendar', kind: 'wall', w: 13, h: 13, tags: ['office', 'school'],
  draw(c, x, y) {
    put(c.s, x, y, 13, 13, (g) => {
      g.rect(0, 0, 13, 13, WHITE); g.rect(0, 0, 13, 4, RED); g.hline(0, 0, 13, '#ff7a6e')
      for (let j = 0; j < 3; j++) for (let i = 0; i < 4; i++) g.rect(1 + i * 3, 5 + j * 3, 2, 2, (i + j * 4) === (c.floor % 12) ? c.tint : '#d8dbe4')
    })
  },
}

/** une bannière verticale suspendue à la poutre (nobori) */
const banner: Prop = {
  id: 'banner', kind: 'hang', w: 9, h: 26, tags: ['zen', 'school', 'lux', 'office'],
  draw(c, x, y) {
    c.s.vline(x + 1, 4, y - 4, INK); c.s.vline(x + 7, 4, y - 4, INK)
    const cloth = c.r() < 0.5 ? c.tint : c.P.accent
    put(c.s, x, y, 9, 26, (g) => {
      g.rect(0, 0, 9, 2, WOOD_D)
      g.rect(1, 2, 7, 22, cloth)
      g.vline(1, 2, 22, shade(cloth, 0.25)); g.vline(7, 2, 22, shade(cloth, -0.25))
      // le blason (mon) · un losange, puis des bandes
      for (let k = 0; k < 7; k++) { const half = 3 - Math.abs(3 - k); g.hline(4 - half, 5 + k, half * 2 + 1, WHITE) }
      g.set(4, 8, cloth)
      g.hline(2, 14, 5, WHITE); g.hline(2, 16, 5, shade(cloth, 0.35)); g.hline(2, 18, 5, WHITE)
      for (let i = 1; i < 8; i += 2) g.set(i, 24, cloth)
      g.hline(1, 21, 7, shade(cloth, -0.35))
    })
  },
}

/** une lanterne de papier · la pièce d'origine */
function hangLantern(): Prop {
  return {
    id: 'lantern', kind: 'hang', w: 7, h: 9, tags: ['zen', 'library', 'lux', 'school', 'craft'],
    draw(c, x, y) {
      const col = pick(c.r, [RED, c.tint, '#f5a623', c.P.accent])
      glow(c.s, x + 3, y + 4, 8, 0.1)
      lantern(c.s, x, y, col)
    },
  }
}

/** une guirlande de grues de papier */
const cranes: Prop = {
  id: 'cranes', kind: 'hang', w: 11, h: 22, tags: ['zen', 'school', 'craft'],
  draw(c, x, y) {
    const cols = ['#f87171', '#fbbf24', '#60a5fa', '#34d399', c.tint, '#f9a8d4']
    for (let k = 0; k < 3; k++) {
      const sx = x + 1 + k * 4, len = 12 + ((k * 5) % 9)
      c.s.vline(sx + 1, 4, y - 4 + len, INK)
      for (let j = 0; j < 3; j++) {
        const cy = y + 2 + j * 6 + (k % 2) * 2
        if (cy > y - 4 + len + 4) continue
        const col = cols[(k * 3 + j + c.floor) % cols.length]
        put(c.s, sx, cy, 3, 2, (g) => { g.hline(0, 0, 3, col); g.set(1, 1, shade(col, -0.25)) })
      }
    }
  },
}

/** une horloge ronde · la pièce d'origine */
const wallClock: Prop = {
  id: 'clock', kind: 'wall', w: 9, h: 9, tags: ['office', 'school', 'library', 'lab'],
  draw(c, x, y) { clock(c.s, x, y, pick(c.r, [c.tint, '#2b6cb0', '#2f6f4a', WOOD_D])) },
}

/** des casiers à rouleaux */
const scrollRack: Prop = {
  id: 'scrollrack', kind: 'wall', w: 25, h: 13, tags: ['library', 'zen'],
  draw(c, x, y) {
    put(c.s, x, y, 25, 13, (g) => {
      g.rect(0, 0, 25, 13, c.P.wood); g.hline(0, 0, 25, shade(c.P.wood, 0.3))
      for (let cx = 0; cx < 3; cx++) for (let cy = 0; cy < 2; cy++) {
        const bx = 1 + cx * 8, by = 1 + cy * 6
        g.rect(bx, by, 7, 5, '#2a170c')
        for (const [dx, dy] of [[1, 1], [4, 1], [2, 3]]) { g.rect(bx + dx, by + dy, 2, 2, (cx + cy + dx) % 3 ? PAPER : '#e3c27a'); g.set(bx + dx, by + dy, '#c9a35a') }
      }
    })
  },
}

/** deux cadres photo */
const frames: Prop = {
  id: 'frames', kind: 'wall', w: 20, h: 13, tags: ['office', 'craft', 'lux'],
  draw(c, x, y) {
    put(c.s, x, y, 9, 11, (g) => { board(g, 9, 11, '#2b2d3a', '#cfe8ff'); g.rect(2, 5, 5, 4, '#7bd389'); disc(g, 5, 3, 1, '#ffd34d') })
    put(c.s, x + 11, y + 3, 9, 9, (g) => { board(g, 9, 9, GOLD, mix(c.tint, WHITE, 0.6)); g.rect(3, 3, 3, 4, c.tint); disc(g, 4, 2, 1, '#f6c9a3') })
  },
}

/* ------------------------------------------------------------------ */
/* Les grands objets debout                                             */
/* ------------------------------------------------------------------ */

function tallBookcase(w: number, h: number): Prop {
  return {
    id: `bookcase${w}x${h}`, kind: 'tall', w, h, tags: ['library', 'school', 'lux', 'office'],
    draw(c, x, y) { bookcase(c.s, x, y, w, h, Math.max(2, Math.round(h / 9)), c.P.books, c.r, c.P.wood) },
  }
}

function tallPlant(w: number, h: number): Prop {
  return {
    id: `plant${w}x${h}`, kind: h > 20 ? 'tall' : 'narrow', w, h, tags: ['zen', 'office', 'craft', 'tech', 'school', 'lab', 'library', 'lux'],
    draw(c, x, y) {
      plant(c.s, x, y + h, w, h, pick(c.r, [LEAF, '#2fa84f', '#43c46a', '#2e8b57']), pick(c.r, [POT, '#e6e6ee', c.P.trim, '#3a3d4a']))
    },
  }
}

/** une grande plante aux feuilles en éventail */
const palm: Prop = {
  id: 'palm', kind: 'tall', w: 13, h: 28, tags: ['office', 'tech', 'craft', 'lux'],
  draw(c, x, y) {
    put(c.s, x, y, 13, 28, (g) => {
      g.rect(3, 21, 7, 7, '#e6e6ee'); g.hline(2, 21, 9, WHITE); g.vline(8, 22, 6, '#c9c9d4')
      g.vline(6, 9, 12, '#5a7a3a')
      const leaves: [number, number, number, number][] = [[6, 9, 0, 1], [6, 9, 12, 2], [6, 12, 1, 7], [6, 12, 11, 8], [6, 9, 3, 0], [6, 9, 9, 0], [6, 15, 0, 13], [6, 15, 12, 14]]
      for (const [x1, y1, x2, y2] of leaves) { line(g, x1, y1, x2, y2, '#2f9e5a'); line(g, x1, y1 + 1, x2, y2 + 1, '#3fb35a') }
      g.set(1, 2, '#6fd38a'); g.set(11, 3, '#6fd38a')
    })
  },
}

/** du bambou en pot */
const bambooPot: Prop = {
  id: 'bamboo', kind: 'tall', w: 11, h: 36, tags: ['zen', 'lux', 'craft'],
  draw(c, x, y) {
    put(c.s, x, y, 11, 36, (g) => {
      g.rect(1, 30, 9, 6, c.P.trim); g.hline(0, 30, 11, shade(c.P.trim, 0.25)); g.hline(1, 35, 9, shade(c.P.trim, -0.3))
      for (const [sx, top] of [[3, 2], [5, 0], [7, 5]] as const) {
        g.vline(sx, top, 30 - top, '#5fae3c')
        for (let yy = top + 4; yy < 30; yy += 6) g.set(sx, yy, '#2f6b2a')
      }
      for (const [lx, ly, dir] of [[3, 4, -1], [5, 2, 1], [7, 8, 1], [3, 12, -1], [5, 9, -1], [7, 15, 1]] as const) {
        g.set(lx + dir, ly, '#3fb35a'); g.set(lx + dir * 2, ly + 1, '#3fb35a'); g.set(lx + dir * 3, ly + 1, '#6fd38a')
      }
    })
  },
}

/** un paravent à quatre panneaux (byobu) */
function byobu(w: number): Prop {
  return {
    id: `byobu${w}`, kind: 'tall', w, h: 27, tags: ['zen', 'lux', 'craft'],
    draw(c, x, y) {
      const scene = Math.floor(c.r() * 3)
      put(c.s, x, y, w, 27, (g) => {
        const gold = scene === 2 ? '#c9d6e8' : '#e8c25a'
        g.rect(0, 0, w, 25, '#1b1530')
        const pw = Math.floor(w / 4)
        for (let p = 0; p < 4; p++) {
          const px = p * pw + 1
          g.rect(px, 1, pw - 1, 23, p % 2 ? shade(gold, -0.12) : gold)
        }
        if (scene === 0) {
          // le pin
          line(g, 1, 20, w - 3, 8, '#5a3a24'); line(g, 1, 21, w - 3, 9, '#5a3a24')
          for (const [px, py] of [[4, 14], [8, 11], [w - 5, 6], [w - 8, 9]]) { g.rect(px - 2, py - 1, 5, 2, '#2f6b3a'); g.hline(px - 1, py - 2, 3, '#3f8a4a') }
        } else if (scene === 1) {
          // les montagnes et le soleil
          disc(g, w - 5, 5, 2, RED)
          for (let i = 1; i < w - 1; i++) { const hh = Math.round(6 + Math.sin(i / 2.2) * 3); g.vline(i, 24 - hh, hh, '#5b6b8a'); g.set(i, 24 - hh, WHITE) }
        } else {
          // les vagues
          for (let j = 12; j < 24; j += 3) for (let i = 1; i < w - 1; i++) if ((i + j) % 4 < 2) g.set(i, j + (i % 3 === 0 ? 1 : 0), '#2f6fb5')
          disc(g, 5, 6, 1.6, WHITE)
        }
        for (let p = 1; p < 4; p++) g.vline(p * pw, 1, 23, '#1b1530')
        g.rect(1, 25, 2, 2, '#1b1530'); g.rect(w - 3, 25, 2, 2, '#1b1530')
      })
    },
  }
}

/** une lanterne de pierre (tōrō) */
const stoneLantern: Prop = {
  id: 'toro', kind: 'tall', w: 13, h: 25, tags: ['zen', 'lux'],
  draw(c, x, y) {
    const st = '#9a968c', sd = '#7a766d', sl = '#b9b5ab'
    glow(c.s, x + 6, y + 9, 7, 0.12)
    put(c.s, x, y, 13, 25, (g) => {
      g.set(6, 0, sd); g.rect(5, 1, 3, 1, st)
      g.hline(3, 2, 7, st); g.hline(1, 3, 11, st); g.hline(0, 4, 13, sl); g.hline(0, 5, 13, sd)
      g.rect(2, 6, 9, 6, st); g.rect(4, 7, 5, 4, '#ffd36b'); g.rect(5, 8, 3, 2, '#fff3b0'); g.vline(6, 7, 4, sd)
      g.hline(1, 12, 11, sl); g.hline(1, 13, 11, sd)
      g.rect(5, 14, 3, 7, st); g.vline(5, 14, 7, sl)
      g.rect(2, 21, 9, 2, st); g.hline(2, 21, 9, sl); g.rect(1, 23, 11, 2, sd)
      g.set(3, 18, '#5f8f4a'); g.set(9, 22, '#5f8f4a')
    })
  },
}

/** un daruma sur son socle */
const daruma: Prop = {
  id: 'daruma', kind: 'tall', w: 11, h: 24, tags: ['zen', 'office', 'school'],
  draw(c, x, y) {
    put(c.s, x, y, 11, 24, (g) => {
      g.round(0, 0, 11, 11, RED); g.rect(1, 9, 9, 2, shade(RED, -0.25))
      g.round(2, 2, 7, 6, '#ffe8cf')
      g.rect(3, 4, 2, 2, WHITE); g.set(4, 4, INK); g.rect(6, 4, 2, 2, WHITE)
      g.hline(3, 3, 2, INK); g.hline(6, 3, 2, INK); g.hline(4, 7, 3, INK)
      g.vline(1, 2, 5, '#ff7a6e'); g.hline(3, 9, 5, GOLD)
      g.rect(1, 11, 9, 13, c.P.wood); g.hline(0, 11, 11, shade(c.P.wood, 0.3)); g.vline(8, 12, 12, shade(c.P.wood, -0.25))
      g.rect(3, 15, 5, 5, shade(c.P.wood, -0.15))
    })
  },
}

/** un chat porte-bonheur sur son socle */
const luckyCat: Prop = {
  id: 'cat', kind: 'tall', w: 11, h: 24, tags: ['office', 'craft', 'zen'],
  draw(c, x, y) {
    put(c.s, x, y, 11, 24, (g) => {
      g.set(2, 0, WHITE); g.set(7, 0, WHITE); g.rect(2, 1, 7, 5, WHITE); g.set(2, 1, '#ff9eb0'); g.set(8, 1, '#ff9eb0')
      g.set(4, 3, INK); g.set(6, 3, INK); g.set(5, 4, '#ff9eb0')
      g.rect(1, 6, 9, 5, WHITE); g.hline(2, 6, 7, RED); g.set(5, 7, GOLD)
      g.vline(9, 1, 5, WHITE); g.set(10, 1, WHITE)
      g.set(3, 9, '#f5a623'); g.set(7, 8, INK)
      g.rect(1, 11, 9, 13, c.P.trim); g.hline(0, 11, 11, shade(c.P.trim, 0.3)); g.vline(8, 12, 12, shade(c.P.trim, -0.25))
    })
  },
}

/** un buste de pierre sur sa colonne */
const bust: Prop = {
  id: 'bust', kind: 'tall', w: 11, h: 30, tags: ['lux', 'library', 'school'],
  draw(c, x, y) {
    const st = '#d8d4cc', sd = '#aaa59b'
    put(c.s, x, y, 11, 30, (g) => {
      g.round(3, 0, 5, 6, st); g.vline(7, 1, 4, sd); g.set(4, 2, sd); g.set(6, 2, sd)
      g.rect(4, 6, 3, 1, st); g.round(1, 7, 9, 4, st); g.hline(1, 10, 9, sd)
      g.rect(2, 11, 7, 2, sd)
      g.rect(3, 13, 5, 14, st); g.vline(4, 13, 14, sd); g.vline(6, 13, 14, sd)
      g.rect(1, 27, 9, 3, st); g.hline(1, 27, 9, WHITE)
      void c
    })
  },
}

/** un tambour taiko sur son support */
const taiko: Prop = {
  id: 'taiko', kind: 'tall', w: 16, h: 22, tags: ['zen', 'school'],
  draw(c, x, y) {
    put(c.s, x, y, 16, 22, (g) => {
      for (let j = 0; j < 15; j++) for (let i = 0; i < 16; i++) {
        const d = Math.hypot(i - 7.5, (j - 7) * 1.05)
        if (d <= 7.6) g.set(i, j, d > 6.4 ? '#7a3b23' : d > 5.6 ? GOLD : '#efe2c2')
      }
      // le tomoe, trois virgules
      disc(g, 7.5, 7, 2.4, c.tint); g.set(7, 7, '#efe2c2'); g.set(8, 5, '#efe2c2'); g.set(6, 8, shade(c.tint, -0.3))
      for (const a of [0, 1, 2, 3, 4, 5, 6, 7]) { const t = (a * Math.PI) / 4; g.set(Math.round(7.5 + Math.cos(t) * 6), Math.round(7 + Math.sin(t) * 6), INK) }
      line(g, 3, 13, 0, 21, WOOD_D); line(g, 12, 13, 15, 21, WOOD_D); line(g, 4, 13, 1, 21, WOOD); line(g, 11, 13, 14, 21, WOOD)
      g.hline(2, 18, 12, WOOD_D)
      line(g, 0, 2, 3, 0, WOOD_L); line(g, 15, 2, 12, 0, WOOD_L)
    })
  },
}

/** une baie serveur */
function serverRack(w: number, h: number): Prop {
  return {
    id: `rack${h}`, kind: 'tall', w, h, tags: ['tech', 'lab'],
    draw(c, x, y) {
      put(c.s, x, y, w, h, (g) => {
        g.rect(0, 0, w, h, '#22253a'); g.hline(0, 0, w, '#3a3f5c')
        for (let yy = 2; yy < h - 3; yy += 4) {
          g.rect(1, yy, w - 2, 3, '#2f3350'); g.hline(2, yy + 1, w - 7, '#151829')
          g.set(w - 4, yy + 1, c.r() < 0.7 ? '#5cff8a' : '#ffcc4d'); g.set(w - 3, yy + 1, c.r() < 0.5 ? c.tint : '#5cc8ff')
        }
        g.rect(1, h - 2, 2, 2, '#151829'); g.rect(w - 3, h - 2, 2, 2, '#151829')
      })
    },
  }
}

/** un chevalet et une toile au hasard */
const easel: Prop = {
  id: 'easel', kind: 'tall', w: 16, h: 38, tags: ['craft', 'school'],
  draw(c, x, y) {
    const m = Math.floor(c.r() * 3)
    put(c.s, x, y, 16, 38, (g) => {
      for (let yy = 0; yy < 38; yy++) { g.set(7 - Math.floor(yy / 6), yy, WOOD); g.set(8 + Math.floor(yy / 6), yy, WOOD) }
      g.vline(8, 4, 32, WOOD_D)
      g.rect(1, 3, 14, 15, WHITE)
      if (m === 0) { g.rect(2, 4, 12, 13, '#ffd0a8'); disc(g, 10, 8, 2.5, '#ff7a59'); g.rect(2, 12, 12, 5, '#3b3f8f') }
      else if (m === 1) { g.rect(2, 4, 12, 13, '#f6f2ff'); g.rect(3, 6, 4, 4, '#ef4444'); g.rect(8, 9, 5, 6, '#3b82f6'); g.rect(4, 12, 3, 3, '#facc15') }
      else { g.rect(2, 4, 12, 13, '#cfeec0'); disc(g, 7.5, 10, 3.5, c.tint); g.rect(7, 13, 1, 4, '#2f6b2a') }
      g.rect(0, 18, 16, 2, WOOD_D)
    })
  },
}

/** une horloge de parquet */
const grandClock: Prop = {
  id: 'grandclock', kind: 'tall', w: 11, h: 36, tags: ['lux', 'library', 'office'],
  draw(c, x, y) {
    const wd = c.P.wood
    put(c.s, x, y, 11, 36, (g) => {
      g.rect(2, 0, 7, 2, wd); g.rect(0, 2, 11, 12, wd); g.hline(0, 2, 11, shade(wd, 0.3))
      disc(g, 5, 7.5, 3.6, '#fbf3dc'); g.vline(5, 5, 3, INK); g.hline(5, 8, 2, INK)
      g.rect(2, 14, 7, 18, wd); g.rect(3, 16, 5, 13, shade(wd, -0.45))
      g.vline(5, 16, 9, GOLD); disc(g, 5, 25, 1.5, GOLD)
      g.rect(0, 32, 11, 4, shade(wd, -0.2)); g.hline(0, 32, 11, shade(wd, 0.2))
    })
  },
}

/** un aquarium sur son meuble */
const aquarium: Prop = {
  id: 'aquarium', kind: 'tall', w: 16, h: 27, tags: ['office', 'zen', 'lab', 'craft'],
  draw(c, x, y) {
    put(c.s, x, y, 16, 27, (g) => {
      g.rect(0, 0, 16, 15, '#9aa3b8')
      g.rect(1, 1, 14, 13, '#5ec8f0'); g.rect(1, 1, 14, 2, '#9be3ff')
      g.rect(1, 12, 14, 2, '#e9d29a')
      g.vline(3, 7, 5, '#2f9e5a'); g.vline(4, 9, 3, '#3fb35a'); g.vline(12, 6, 6, '#2f9e5a')
      g.rect(6, 6, 3, 2, '#ff8c1a'); g.set(5, 6, '#ff8c1a'); g.set(8, 6, INK)
      g.rect(9, 10, 2, 1, c.tint); g.set(11, 10, c.tint)
      g.set(7, 4, WHITE); g.set(8, 2, WHITE)
      g.rect(1, 15, 14, 12, c.P.wood); g.hline(0, 15, 16, shade(c.P.wood, 0.3)); g.vline(8, 16, 11, shade(c.P.wood, -0.3))
      g.set(6, 21, GOLD); g.set(10, 21, GOLD)
    })
  },
}

/** un globe sur pied */
const globeStand: Prop = {
  id: 'globe', kind: 'tall', w: 11, h: 24, tags: ['school', 'library', 'office', 'lux'],
  draw(c, x, y) {
    put(c.s, x, y, 11, 24, (g) => {
      for (let j = 0; j < 9; j++) for (let i = 0; i < 9; i++) {
        if (Math.hypot(i - 4, j - 4) > 4.4) continue
        g.set(i + 1, j, (i * 7 + j * 3) % 5 < 2 || (i > 4 && j > 4) ? '#4caf50' : '#3b8fe0')
      }
      g.set(3, 1, '#a6d8ff')
      for (let j = 0; j < 10; j++) g.set(0, j, GOLD)
      g.vline(5, 9, 11, c.P.wood); g.vline(6, 9, 11, shade(c.P.wood, -0.3))
      g.rect(2, 20, 7, 2, c.P.wood); g.rect(1, 22, 9, 2, shade(c.P.wood, -0.2))
    })
  },
}

/** une lampe de papier posée au sol (andon) */
const andon: Prop = {
  id: 'andon', kind: 'narrow', w: 8, h: 18, tags: ['zen', 'lux', 'library'],
  draw(c, x, y) {
    glow(c.s, x + 4, y + 7, 8, 0.14)
    put(c.s, x, y, 8, 18, (g) => {
      g.rect(0, 0, 8, 1, WOOD_D)
      g.rect(1, 1, 6, 12, '#ffe7a3'); g.rect(2, 3, 4, 8, PAPER); g.set(3, 5, WHITE)
      g.vline(0, 1, 17, WOOD_D); g.vline(7, 1, 17, WOOD_D); g.hline(0, 13, 8, WOOD_D); g.hline(1, 7, 6, '#d29a5c')
    })
  },
}

/** un grand vase et son bouquet de branches */
const tallVase: Prop = {
  id: 'vase', kind: 'narrow', w: 9, h: 19, tags: ['zen', 'lux', 'craft'],
  draw(c, x, y) {
    const v = pick(c.r, ['#2b4f8a', '#7a1f24', '#2f6b4a', c.tint])
    put(c.s, x, y, 9, 19, (g) => {
      line(g, 4, 9, 1, 1, '#5a3a24'); line(g, 4, 9, 7, 0, '#5a3a24'); line(g, 4, 9, 4, 3, '#5a3a24')
      for (const [px, py] of [[1, 1], [2, 3], [7, 0], [6, 2], [4, 3], [5, 5]]) { g.set(px, py, '#ff7aa2'); g.set(px, py + 1, '#ffc0d4') }
      g.rect(3, 9, 3, 2, v); g.round(1, 11, 7, 8, v); g.vline(2, 12, 5, shade(v, 0.3)); g.hline(2, 18, 5, shade(v, -0.3))
    })
  },
}

/** une étagère échelle et ses pots */
const ladderShelf: Prop = {
  id: 'laddershelf', kind: 'tall', w: 14, h: 32, tags: ['craft', 'office', 'zen'],
  draw(c, x, y) {
    put(c.s, x, y, 14, 32, (g) => {
      line(g, 3, 0, 0, 31, c.P.wood); line(g, 10, 0, 13, 31, c.P.wood)
      for (const [sy, half] of [[9, 4], [19, 5], [29, 6]] as const) {
        g.hline(7 - half - 1, sy, half * 2 + 2, shade(c.P.wood, 0.15))
        const pots = sy === 9 ? 1 : 2
        for (let p = 0; p < pots; p++) {
          const px = pots === 1 ? 5 : 2 + p * 6
          g.rect(px, sy - 3, 4, 3, pick(c.r, [POT, WHITE, c.tint]))
          disc(g, px + 1.5, sy - 5, 1.8, pick(c.r, [LEAF, '#2fa84f', '#6fd38a']))
        }
      }
    })
  },
}

/** un kimono sur son portant (ikō) */
const kimonoStand: Prop = {
  id: 'kimono', kind: 'tall', w: 16, h: 30, tags: ['zen', 'lux', 'craft'],
  draw(c, x, y) {
    const k = pick(c.r, [c.tint, '#2b4f8a', '#7a1f24', '#2f6b4a'])
    put(c.s, x, y, 16, 30, (g) => {
      g.rect(0, 1, 16, 2, '#1b1530'); g.set(0, 0, '#1b1530'); g.set(15, 0, '#1b1530')
      g.vline(1, 3, 27, '#1b1530'); g.vline(14, 3, 27, '#1b1530')
      g.rect(2, 3, 12, 10, k); g.rect(4, 13, 8, 12, k)
      g.vline(7, 3, 22, shade(k, -0.3)); line(g, 6, 3, 8, 8, WHITE); line(g, 9, 3, 7, 8, WHITE)
      g.rect(4, 12, 8, 2, GOLD)
      for (let i = 0; i < 6; i++) g.set(3 + i * 2, 5 + (i % 2) * 3, shade(k, 0.35))
      g.hline(0, 28, 16, '#1b1530')
    })
  },
}

/** un coffre à marches (kaidan dansu) */
const stepChest: Prop = {
  id: 'stepchest', kind: 'tall', w: 16, h: 24, tags: ['zen', 'lux', 'library'],
  draw(c, x, y) {
    const wd = c.P.wood
    put(c.s, x, y, 16, 24, (g) => {
      for (let s = 0; s < 3; s++) {
        const top = s * 8, left = 0, right = 16 - s * 5
        g.rect(left, top, right, 24 - top, wd)
        g.hline(left, top, right, shade(wd, 0.3))
      }
      for (const [dx, dy, dw] of [[1, 2, 4], [1, 10, 9], [1, 18, 14]] as const) {
        g.rect(dx, dy, dw, 5, shade(wd, -0.15)); g.set(dx + Math.floor(dw / 2), dy + 2, '#2b2d3a')
      }
    })
  },
}

/** une fontaine de bambou (shishi-odoshi) et son bassin */
const fountain: Prop = {
  id: 'fountain', kind: 'tall', w: 16, h: 20, tags: ['zen', 'lux'],
  draw(c, x, y) {
    put(c.s, x, y, 16, 20, (g) => {
      g.vline(2, 0, 14, '#6fae4a'); g.vline(3, 0, 14, '#4f8a3a')
      g.hline(2, 2, 9, '#6fae4a'); g.hline(2, 3, 9, '#4f8a3a'); g.set(11, 3, '#4f8a3a')
      g.vline(11, 4, 5, '#7cc8f5')
      g.round(4, 9, 11, 6, '#8f8c86'); g.rect(5, 10, 9, 3, '#5ec8f0'); g.hline(6, 10, 4, '#9be3ff')
      g.rect(0, 14, 16, 6, '#7d7a75'); g.hline(0, 14, 16, '#a7a49d')
      for (let i = 1; i < 16; i += 4) g.set(i, 17, '#5d5a55')
      g.set(14, 13, '#3fb35a'); g.set(15, 12, '#3fb35a'); void c
    })
  },
}

/** un porte-parapluies et son ombrelle de papier */
const umbrellaStand: Prop = {
  id: 'umbrella', kind: 'narrow', w: 8, h: 19, tags: ['zen', 'office'],
  draw(c, x, y) {
    put(c.s, x, y, 8, 19, (g) => {
      g.rect(2, 0, 3, 11, c.tint); g.vline(2, 0, 11, shade(c.tint, 0.3)); g.set(3, 0, WOOD_D); g.vline(5, 3, 8, WOOD_D)
      g.rect(1, 10, 6, 9, '#3a3d4a'); g.hline(0, 10, 8, '#5a5f73'); g.vline(2, 11, 8, '#4a4d5c')
    })
  },
}

/** des caisses empilées */
const crates: Prop = {
  id: 'crates', kind: 'tall', w: 13, h: 20, tags: ['office', 'craft', 'tech'],
  draw(c, x, y) {
    const box = (g: Grid, bx: number, by: number, w: number, h: number) => {
      g.rect(bx, by, w, h, '#d6a464'); g.hline(bx, by, w, '#ecc488'); g.vline(bx + Math.floor(w / 2), by, h, '#b98444'); g.rect(bx + 1, by + h - 3, 3, 2, WHITE)
    }
    put(c.s, x, y, 13, 20, (g) => { box(g, 0, 10, 13, 10); box(g, 2, 2, 9, 8); g.set(9, 4, c.tint) })
  },
}

/** un chandelier à pied */
const candleStand: Prop = {
  id: 'candles', kind: 'narrow', w: 7, h: 18, tags: ['zen', 'lux', 'library'],
  draw(c, x, y) {
    glow(c.s, x + 3, y + 2, 6, 0.14)
    put(c.s, x, y, 7, 18, (g) => {
      g.set(3, 0, '#ffd36b'); g.set(3, 1, '#ff8c1a'); g.rect(2, 2, 3, 4, WHITE)
      g.rect(1, 6, 5, 1, GOLD); g.vline(3, 7, 9, GOLD); g.rect(1, 16, 5, 2, shade(GOLD, -0.2))
      void c
    })
  },
}

/** une enceinte sur pied */
const speaker: Prop = {
  id: 'speaker', kind: 'narrow', w: 8, h: 18, tags: ['tech', 'office'],
  draw(c, x, y) {
    put(c.s, x, y, 8, 18, (g) => {
      g.rect(0, 0, 8, 18, '#22202e')
      for (const [cy, rr] of [[4, 2], [12, 3]] as const) { disc(g, 4, cy, rr, '#4a4660'); g.set(4, cy, '#8a86a8') }
      g.set(1, 16, c.tint)
    })
  },
}

/** un râtelier de sabres de bois (bokken) */
const swordRack: Prop = {
  id: 'bokken', kind: 'tall', w: 13, h: 30, tags: ['zen', 'school'],
  draw(c, x, y) {
    put(c.s, x, y, 13, 30, (g) => {
      g.rect(0, 26, 13, 4, c.P.wood); g.hline(0, 26, 13, shade(c.P.wood, 0.3))
      g.rect(0, 8, 13, 2, c.P.wood)
      for (let k = 0; k < 4; k++) {
        const sx = 1 + k * 3
        g.vline(sx, 0, 26, k % 2 ? '#d8b07a' : '#b98a52')
        g.vline(sx + 1, 18, 8, k === 1 ? c.tint : '#2b2d3a')
        g.set(sx + 1, 17, GOLD)
      }
    })
  },
}

/** un classeur à tiroirs */
const fileCabinet: Prop = {
  id: 'filecab', kind: 'tall', w: 12, h: 24, tags: ['office', 'library', 'lab'],
  draw(c, x, y) {
    put(c.s, x, y, 12, 24, (g) => {
      g.rect(0, 0, 12, 24, '#8a94a8'); g.hline(0, 0, 12, '#b3bccd')
      for (let k = 0; k < 4; k++) {
        g.rect(1, 1 + k * 6, 10, 5, '#9aa4b8'); g.hline(1, 5 + k * 6, 10, '#6b7489')
        g.rect(4, 2 + k * 6, 4, 1, '#4a5163'); g.rect(5, 3 + k * 6, 2, 1, WHITE)
      }
      g.set(10, 2, c.tint)
    })
  },
}

/* ------------------------------------------------------------------ */
/* Les objets bas                                                       */
/* ------------------------------------------------------------------ */

/** une table basse et son service à thé */
const teaTable: Prop = {
  id: 'teatable', kind: 'low', w: 24, h: 10, tags: ['zen', 'lux', 'library'],
  draw(c, x, y) {
    table(c.s, x, y + 4, 24, 6, c.P.wood)
    put(c.s, x + 5, y, 7, 4, (g) => {
      g.round(0, 1, 6, 3, '#4a6b5a'); g.hline(1, 1, 4, '#6f9a82'); g.set(6, 1, '#4a6b5a'); g.rect(2, 0, 2, 1, '#2f4a3c')
    })
    for (const k of [0, 1]) put(c.s, x + 14 + k * 4, y + 2, 2, 2, (g) => { g.rect(0, 0, 2, 2, '#efe8d8'); g.set(0, 0, '#9fc9a8') })
  },
}

/** un bonsaï sur sa petite table */
const bonsai: Prop = {
  id: 'bonsai', kind: 'low', w: 15, h: 11, tags: ['zen', 'lux', 'office', 'library'],
  draw(c, x, y) {
    put(c.s, x, y, 15, 11, (g) => {
      line(g, 7, 7, 5, 4, '#6b3f2a'); line(g, 6, 5, 10, 3, '#6b3f2a'); g.set(7, 6, '#6b3f2a')
      g.rect(1, 1, 7, 3, '#2f7a3a'); g.rect(8, 0, 6, 3, '#3f8a4a'); g.hline(2, 1, 4, '#4fae5a'); g.hline(9, 0, 3, '#5fbe6a')
      g.rect(3, 7, 9, 2, '#2b4f8a'); g.hline(3, 7, 9, '#4a6fae')
      g.rect(1, 9, 13, 2, c.P.wood); g.hline(1, 9, 13, shade(c.P.wood, 0.25))
    })
  },
}

/** un petit ikebana */
const ikebana: Prop = {
  id: 'ikebana', kind: 'low', w: 9, h: 11, tags: ['zen', 'lux', 'craft'],
  draw(c, x, y) {
    put(c.s, x, y, 9, 11, (g) => {
      line(g, 4, 7, 1, 0, '#3f7a3a'); line(g, 4, 7, 7, 2, '#3f7a3a'); line(g, 4, 7, 5, 3, '#3f7a3a')
      g.rect(0, 0, 2, 2, c.tint); g.set(7, 2, '#ffd34d'); g.set(6, 1, '#ffd34d'); g.rect(4, 3, 2, 1, WHITE)
      g.rect(1, 8, 7, 3, '#2b2d3a'); g.hline(1, 8, 7, '#4a4d5c')
    })
  },
}

/** des piles de papiers */
const paperStacks: Prop = {
  id: 'papers', kind: 'low', w: 12, h: 8, tags: ['office', 'library', 'school'],
  draw(c, x, y) {
    put(c.s, x, y, 12, 8, (g) => {
      for (let k = 0; k < 4; k++) { g.rect(0, 4 + k, 5, 1, k % 2 ? WHITE : '#eef1f6') }
      for (let k = 0; k < 7; k++) { g.rect(6 + (k % 2), 1 + k, 5, 1, k % 3 ? WHITE : '#fde68a') }
      g.set(8, 0, c.tint)
    })
  },
}

/** une pile de livres */
const bookPile: Prop = {
  id: 'bookpile', kind: 'low', w: 10, h: 9, tags: ['library', 'school', 'office'],
  draw(c, x, y) {
    put(c.s, x, y, 10, 9, (g) => {
      for (let k = 0; k < 4; k++) {
        const col = c.P.books[(k + c.floor) % c.P.books.length], off = k % 2, w = 10 - off - (k === 3 ? 2 : 0)
        g.rect(off, 1 + k * 2, w, 2, col); g.hline(off, 1 + k * 2, 3, shade(col, 0.3)); g.set(off + w - 1, 2 + k * 2, PAPER)
      }
    })
  },
}

/** un brûle-parfum et sa fumée */
const incense: Prop = {
  id: 'incense', kind: 'low', w: 7, h: 11, tags: ['zen', 'lux'],
  draw(c, x, y) {
    put(c.s, x, y + 7, 7, 4, (g) => { g.round(0, 0, 7, 4, '#5a5f73'); g.hline(1, 0, 5, '#8a8fa3'); g.set(3, 2, GOLD) })
    c.s.vline(x + 3, y + 4, 3, '#9a5a3a')
    for (let k = 0; k < 4; k++) c.s.set(x + 3 + (k % 2), y + 3 - k, '#d8d4e8')
  },
}

/** un banc bas */
const bench: Prop = {
  id: 'bench', kind: 'low', w: 28, h: 7, tags: ['zen', 'school', 'office', 'lux'],
  draw(c, x, y) {
    put(c.s, x, y, 28, 7, (g) => {
      g.rect(0, 0, 28, 3, c.P.wood); g.hline(0, 0, 28, shade(c.P.wood, 0.3)); g.hline(0, 2, 28, shade(c.P.wood, -0.3))
      g.rect(2, 3, 3, 4, shade(c.P.wood, -0.2)); g.rect(23, 3, 3, 4, shade(c.P.wood, -0.2))
    })
  },
}

/** un coffre bas */
const lowChest: Prop = {
  id: 'chest', kind: 'low', w: 18, h: 10, tags: ['zen', 'lux', 'library', 'office'],
  draw(c, x, y) {
    const wd = c.P.wood
    put(c.s, x, y, 18, 10, (g) => {
      g.rect(0, 0, 18, 10, wd); g.hline(0, 0, 18, shade(wd, 0.3))
      g.rect(1, 2, 7, 3, shade(wd, -0.15)); g.rect(10, 2, 7, 3, shade(wd, -0.15)); g.rect(1, 6, 16, 3, shade(wd, -0.15))
      for (const [hx, hy] of [[4, 3], [13, 3], [8, 7]]) { g.set(hx, hy, '#2b2d3a'); g.set(hx + 1, hy, '#2b2d3a') }
      g.rect(0, 0, 2, 2, '#2b2d3a'); g.rect(16, 0, 2, 2, '#2b2d3a')
    })
  },
}

/** un brasero et sa bouilloire */
const hibachi: Prop = {
  id: 'hibachi', kind: 'low', w: 11, h: 11, tags: ['zen', 'lux'],
  draw(c, x, y) {
    put(c.s, x, y, 11, 11, (g) => {
      g.vline(5, 0, 2, '#2b2d3a'); g.hline(3, 0, 5, '#2b2d3a')
      g.round(2, 1, 7, 5, '#3a3d4a'); g.hline(3, 2, 4, '#5a5f73'); g.set(9, 3, '#3a3d4a'); g.set(10, 2, '#3a3d4a')
      g.rect(0, 6, 11, 5, '#9a5a3a'); g.hline(0, 6, 11, '#c47a4a'); g.hline(2, 7, 7, '#ff8c1a'); g.set(4, 7, '#ffd36b')
      void c
    })
  },
}

/** un goban et ses deux bols de pierres */
const goban: Prop = {
  id: 'goban', kind: 'low', w: 24, h: 9, tags: ['zen', 'school', 'lux'],
  draw(c, x, y) {
    put(c.s, x + 4, y, 16, 9, (g) => {
      g.rect(0, 0, 16, 5, '#e0b46a'); g.hline(0, 0, 16, '#f0cc8a')
      for (let i = 2; i < 15; i += 3) g.vline(i, 1, 3, '#8a6a3a')
      g.hline(1, 2, 14, '#8a6a3a')
      g.set(5, 1, INK); g.set(8, 2, WHITE); g.set(11, 3, INK); g.set(2, 3, WHITE)
      g.rect(0, 5, 16, 2, '#b8884a'); g.rect(1, 7, 2, 2, '#8a6a3a'); g.rect(13, 7, 2, 2, '#8a6a3a')
    })
    put(c.s, x, y + 5, 3, 4, (g) => { g.round(0, 0, 3, 4, c.P.wood); g.set(1, 0, INK) })
    put(c.s, x + 21, y + 5, 3, 4, (g) => { g.round(0, 0, 3, 4, c.P.wood); g.set(1, 0, WHITE) })
  },
}

/** des cierges posés au sol */
const floorCandles: Prop = {
  id: 'floorcandles', kind: 'low', w: 9, h: 8, tags: ['zen', 'lux'],
  draw(c, x, y) {
    glow(c.s, x + 4, y + 2, 6, 0.1)
    put(c.s, x, y, 9, 8, (g) => {
      for (const [cx, h] of [[0, 5], [3, 7], [6, 4]] as const) {
        g.rect(cx, 8 - h, 3, h, '#fbf3dc'); g.set(cx + 1, 7 - h, '#ff8c1a'); g.set(cx + 1, 6 - h, '#ffd36b')
      }
      void c
    })
  },
}

/** un bureau et ses deux chaises */
const desk: Prop = {
  id: 'desk', kind: 'low', w: 44, h: 12, tags: ['office', 'tech', 'school'],
  draw(c, x, y) {
    chair(c.s, x, y, '#5a6278'); chair(c.s, x + 37, y, '#5a6278')
    table(c.s, x + 8, y + 4, 28, 8, c.P.wood)
    put(c.s, x + 12, y, 10, 4, (g) => { g.rect(0, 0, 10, 3, '#cfd6e0'); g.rect(1, 0, 8, 2, '#2b6cb0'); g.hline(0, 3, 10, '#9aa5b4') })
    put(c.s, x + 27, y + 1, 3, 3, (g) => { g.rect(0, 0, 3, 3, WHITE); g.hline(0, 0, 3, '#6b4128') })
  },
}

/** un pouf */
const pouf: Prop = {
  id: 'pouf', kind: 'low', w: 16, h: 8, tags: ['office', 'tech', 'craft', 'school'],
  draw(c, x, y) {
    const t = c.r() < 0.5 ? c.tint : c.P.accent
    put(c.s, x, y, 16, 8, (g) => {
      g.round(0, 2, 16, 6, t); g.round(2, 0, 12, 4, shade(t, 0.2)); g.hline(3, 1, 4, shade(t, 0.45)); g.hline(1, 7, 14, shade(t, -0.3))
    })
  },
}

/** une plante grasse */
const succulent: Prop = {
  id: 'succulent', kind: 'low', w: 7, h: 8, tags: ['office', 'tech', 'craft', 'zen'],
  draw(c, x, y) {
    put(c.s, x, y, 7, 8, (g) => {
      g.rect(1, 4, 5, 4, pick(c.r, [WHITE, POT, '#3a3d4a'])); g.hline(0, 4, 7, '#d8dbe4')
      g.rect(2, 1, 3, 3, '#5fae6a'); g.set(1, 2, '#4f9a5a'); g.set(5, 2, '#4f9a5a'); g.set(3, 0, '#8fd18a')
    })
  },
}

/** une rangée de coussins posés au sol, devant les élèves */
export function cushions(c: Ctx, x0: number, x1: number, y = 52) {
  const n = Math.max(1, Math.floor((x1 - x0) / 17))
  const col = c.r() < 0.6 ? c.tint : c.P.accent
  for (let i = 0; i < n; i++) {
    const cx = n === 1 ? Math.round((x0 + x1 - 12) / 2) : x0 + Math.round((i * (x1 - x0 - 12)) / (n - 1))
    cushion(c.s, cx, y, col)
  }
}

/** une table basse et les affaires des élèves (cahiers, tasses) */
const studyTable: Prop = {
  id: 'studytable', kind: 'low', w: 38, h: 9, tags: ['school', 'library', 'zen', 'office'],
  draw(c, x, y) {
    table(c.s, x, y + 3, 38, 6, c.P.wood)
    for (const k of [0, 1, 2]) {
      const px = x + 4 + k * 12
      put(c.s, px, y + 1, 6, 2, (g) => { g.rect(0, 0, 6, 2, WHITE); g.vline(3, 0, 2, '#c9c9c9'); g.hline(0, 1, 6, k === 1 ? c.tint : '#e2e6ef') })
    }
  },
}

/* ------------------------------------------------------------------ */
/* La bibliothèque                                                      */
/* ------------------------------------------------------------------ */

export const PROPS: Prop[] = [
  // accrochés
  windowProp(24, 21), windowProp(30, 22), windowProp(20, 24), roundWindow,
  kakemono(24), kakemono(20), calligraphy, fan, wavePrint, wallBooks(22), wallBooks(30), plantShelf,
  stickyCluster, whiteboard, chalkboard, diploma, corkboard, worldMap, trophyShelf, kitsune, smallCalendar,
  wallClock, scrollRack, frames,
  // suspendus
  banner, hangLantern(), cranes,
  // debout
  tallBookcase(13, 44), tallBookcase(16, 40), tallBookcase(13, 26), tallPlant(11, 22), tallPlant(13, 28), palm, bambooPot,
  byobu(16), byobu(13), stoneLantern, daruma, luckyCat, bust, taiko, serverRack(12, 40), serverRack(13, 30), easel,
  grandClock, aquarium, globeStand, ladderShelf, kimonoStand, stepChest, fountain, crates, swordRack, fileCabinet,
  // petits, à droite de la porte
  andon, tallVase, umbrellaStand, candleStand, speaker, tallPlant(9, 16), tallPlant(8, 13),
  // bas
  teaTable, bonsai, ikebana, paperStacks, bookPile, incense, bench, lowChest, hibachi, goban, floorCandles, desk, pouf,
  succulent, studyTable,
]

