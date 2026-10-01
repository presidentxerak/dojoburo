// LES OBJETS DES SUJETS · un objet signature par cas d'usage de la leçon.
//
// Demandé : « Les étages doivent être tous différents là ils sont trop
// identiques ». L'étage d'une leçon montre l'objet de son sujet (la loupe de
// la recherche, le pinceau de l'écriture, le gong de l'orchestration...),
// debout dans la fente x = 45..61, à gauche de la porte. Deux versions par
// sujet, pour que deux étages du même sujet ne se ressemblent pas.
import { shade } from '../../../pixel/grid'
import type { Grid } from '../../../pixel/grid'
import { WOOD, WOOD_D, WOOD_L, PAPER, GOLD, RED, WHITE, INK, LEAF, POT, put, text, glow, screen, disc, line } from './base'
import type { Prop } from './props'

export const TOPICS = [
  'research', 'writing', 'support', 'coding', 'analysis', 'triage',
  'extraction', 'watch', 'planning', 'tools', 'growth', 'orchestration',
] as const
export type Topic = typeof TOPICS[number]

const STEEL = '#3a3d4a'
const tp = (id: string, w: number, h: number, draw: Prop['draw']): Prop => ({ id, kind: 'tall', w, h, tags: [], draw })

/** un guéridon à deux pieds, plateau à la hauteur y (local) */
function stand(g: Grid, w: number, top: number, h: number, wd: string) {
  g.rect(0, top, w, 2, wd); g.hline(0, top, w, shade(wd, 0.3)); g.hline(0, top + 2, w, shade(wd, -0.3))
  g.rect(1, top + 3, 2, h - top - 3, shade(wd, -0.15)); g.rect(w - 3, top + 3, 2, h - top - 3, shade(wd, -0.15))
}

/** des lignes de code colorées */
function codeLines(g: Grid, x: number, y: number, w: number, rows: number, r: () => number) {
  const cols = ['#7ee787', '#79c0ff', '#ff7b72', '#d2a8ff', '#ffa657']
  for (let i = 0; i < rows; i++) {
    let cx = x + Math.floor(r() * 3) * 2
    const end = x + Math.floor(w * (0.5 + r() * 0.5))
    while (cx < end) { const len = 2 + Math.floor(r() * 3); g.hline(cx, y + i * 2, Math.min(len, end - cx), cols[Math.floor(r() * cols.length)]); cx += len + 1 }
  }
}

export const TOPIC_PROPS: Record<Topic, Prop[]> = {
  /* la recherche · la loupe et la pile de livres */
  research: [
    tp('research-a', 16, 26, (c, x, y) => {
      put(c.s, x, y, 16, 26, (g) => {
        stand(g, 16, 16, 26, c.P.wood)
        for (let k = 0; k < 4; k++) { const col = c.P.books[(k * 2 + c.floor) % c.P.books.length]; g.rect(1 + (k % 2), 8 + k * 2, 9 - (k % 2), 2, col); g.hline(1 + (k % 2), 8 + k * 2, 3, shade(col, 0.3)) }
        for (let j = 0; j < 9; j++) for (let i = 0; i < 9; i++) { const d = Math.hypot(i - 4, j - 4); if (d <= 4.4) g.set(6 + i, j, d > 3.3 ? GOLD : '#cdeeff') }
        g.set(8, 2, WHITE); g.set(9, 2, WHITE); g.set(8, 3, WHITE)
        line(g, 13, 8, 15, 13, WOOD_D); line(g, 14, 8, 15, 11, WOOD_D)
      })
    }),
    tp('research-b', 14, 34, (c, x, y) => {
      put(c.s, x, y, 14, 34, (g) => {
        // le pupitre, le livre ouvert, la loupe posée dessus
        g.rect(1, 12, 12, 3, WHITE); g.vline(7, 12, 3, '#d8cfb8'); g.hline(2, 13, 4, '#9a9a9a'); g.hline(8, 13, 4, '#9a9a9a')
        g.rect(0, 15, 14, 2, c.P.wood); g.rect(5, 17, 4, 15, shade(c.P.wood, -0.2)); g.rect(2, 32, 10, 2, c.P.wood)
        for (let j = 0; j < 7; j++) for (let i = 0; i < 7; i++) { const d = Math.hypot(i - 3, j - 3); if (d <= 3.4) g.set(4 + i, 2 + j, d > 2.4 ? GOLD : '#cdeeff') }
        line(g, 9, 8, 12, 11, WOOD_D); g.set(5, 4, WHITE)
        g.rect(0, 0, 3, 2, c.tint); g.set(1, 2, c.tint)
      })
    }),
  ],
  /* l'écriture · le pinceau et le papier, ou la machine à écrire */
  writing: [
    tp('writing-a', 16, 22, (c, x, y) => {
      put(c.s, x, y, 16, 22, (g) => {
        stand(g, 16, 12, 22, c.P.wood)
        g.rect(1, 9, 10, 3, PAPER); g.hline(1, 9, 10, WHITE)
        g.vline(4, 10, 1, INK); g.hline(3, 10, 3, INK); g.set(8, 10, INK); g.set(9, 11, INK)
        g.rect(12, 9, 3, 3, '#2b2d3a'); g.set(13, 9, '#4a4d5c')
        g.vline(13, 1, 8, '#c9a35a'); g.vline(13, 0, 1, WOOD_D); g.rect(12, 7, 3, 2, INK)
        g.rect(1, 0, 3, 8, c.tint); g.vline(1, 0, 8, shade(c.tint, 0.3)); g.vline(2, 8, 1, c.tint)
      })
    }),
    tp('writing-b', 16, 24, (c, x, y) => {
      put(c.s, x, y, 16, 24, (g) => {
        stand(g, 16, 14, 24, c.P.wood)
        g.rect(4, 0, 8, 7, WHITE); for (let k = 0; k < 3; k++) g.hline(5, 2 + k * 2, 6 - k, '#9aa3b8')
        g.rect(1, 6, 14, 3, STEEL); g.hline(1, 6, 14, '#5a5f73'); g.set(0, 7, STEEL); g.set(15, 7, STEEL)
        g.rect(1, 9, 14, 5, '#2b2d3a')
        for (let j = 0; j < 2; j++) for (let i = 0; i < 6; i++) g.set(2 + i * 2 + j, 10 + j * 2, '#d8dbe4')
        g.set(13, 7, c.tint)
      })
    }),
  ],
  /* le support · la sonnette de l'accueil et le casque */
  support: [
    tp('support-a', 16, 24, (c, x, y) => {
      put(c.s, x, y, 16, 24, (g) => {
        g.rect(0, 10, 16, 14, c.P.wood); g.hline(0, 10, 16, shade(c.P.wood, 0.3)); g.rect(0, 10, 16, 2, shade(c.P.wood, 0.15))
        g.rect(2, 14, 12, 7, shade(c.P.wood, -0.2)); disc(g, 8, 17, 2, c.tint); g.set(8, 17, WHITE)
        g.round(1, 6, 6, 4, GOLD); g.set(4, 5, GOLD); g.rect(0, 9, 8, 1, shade(GOLD, -0.3)); g.set(2, 7, '#fff1a8')
        g.hline(10, 1, 4, STEEL); g.vline(9, 2, 4, STEEL); g.vline(14, 2, 4, STEEL); g.rect(8, 4, 2, 3, c.tint); g.rect(14, 4, 2, 3, c.tint)
        line(g, 9, 7, 11, 8, STEEL); g.set(12, 8, '#5a5f73')
        g.vline(12, 2, 8, '#5a5f73'); g.rect(11, 9, 3, 1, STEEL)
      })
    }),
    tp('support-b', 14, 32, (c, x, y) => {
      put(c.s, x, y, 14, 32, (g) => {
        // le casque sur sa tête de présentation, la bulle de dialogue
        g.round(3, 8, 8, 9, '#d8dbe4'); g.rect(5, 17, 4, 3, '#c9cfdb')
        g.hline(4, 7, 6, STEEL); g.vline(3, 8, 4, STEEL); g.vline(10, 8, 4, STEEL); g.rect(2, 11, 2, 4, c.tint); g.rect(10, 11, 2, 4, c.tint)
        line(g, 3, 15, 6, 16, STEEL)
        g.vline(7, 20, 10, STEEL); g.rect(3, 30, 8, 2, STEEL)
        g.round(5, 0, 9, 6, WHITE); g.set(6, 6, WHITE); g.hline(7, 2, 5, '#9aa3b8'); g.hline(7, 3, 3, '#9aa3b8')
      })
    }),
  ],
  /* le code · l'écran et ses lignes colorées */
  coding: [
    tp('coding-a', 16, 26, (c, x, y) => {
      put(c.s, x, y, 16, 26, (g) => {
        stand(g, 16, 16, 26, c.P.wood)
        screen(g, 16, 11, '#0b0d18', '#161b2e'); codeLines(g, 2, 2, 13, 4, c.r)
        g.rect(7, 11, 2, 3, '#0b0d18'); g.rect(5, 13, 6, 1, '#0b0d18')
        g.rect(2, 14, 10, 2, '#2b2d3a'); for (let i = 0; i < 4; i++) g.set(3 + i * 2, 14, ['#ff7b72', '#ffa657', '#7ee787', '#79c0ff'][i])
        g.rect(13, 13, 2, 3, '#ffd23f')
      })
    }),
    tp('coding-b', 16, 24, (c, x, y) => {
      put(c.s, x, y, 16, 24, (g) => {
        // deux écrans côte à côte sur le bureau, le clavier, la tasse
        stand(g, 16, 14, 24, c.P.wood)
        screen(g, 8, 9, '#5a5f73', '#0d1117'); codeLines(g, 1, 2, 6, 3, c.r); g.hline(0, 0, 8, '#8a8fa3')
        g.rect(8, 2, 8, 7, '#5a5f73'); g.hline(8, 2, 8, '#8a8fa3'); g.rect(9, 3, 6, 5, '#0d1117'); text(g, 10, 3, '>', '#7ee787')
        g.vline(7, 1, 8, '#2b2d3a')
        g.rect(3, 9, 2, 2, '#2b2d3a'); g.rect(11, 9, 2, 2, '#2b2d3a')
        g.rect(2, 12, 9, 2, '#2b2d3a'); g.hline(3, 12, 7, '#5a5f73')
        g.rect(12, 11, 3, 3, WHITE); g.hline(12, 11, 3, '#6b4128')
      })
      glow(c.s, x + 8, y + 4, 8, 0.05)
    }),
  ],
  /* l'analyse · le tableau des graphiques */
  analysis: [
    tp('analysis-a', 16, 38, (c, x, y) => {
      put(c.s, x, y, 16, 38, (g) => {
        for (let yy = 16; yy < 38; yy++) { g.set(7 - Math.floor((yy - 16) / 5), yy, c.P.wood); g.set(8 + Math.floor((yy - 16) / 5), yy, c.P.wood) }
        g.rect(0, 0, 16, 18, '#9aa3b8'); g.rect(1, 1, 14, 16, WHITE)
        const hs = [3, 6, 4, 9, 12]; hs.forEach((h, i) => g.rect(2 + i * 2, 15 - h, 2, h, i === 4 ? c.tint : '#60a5fa'))
        g.hline(1, 15, 14, '#5a6278')
        for (let j = -3; j <= 3; j++) for (let i = -3; i <= 3; i++) if (Math.hypot(i, j) <= 3.2) g.set(12 + i, 5 + j, i >= 0 && j < 0 ? '#f59e0b' : i < 0 ? '#22c55e' : c.tint)
      })
    }),
    tp('analysis-b', 16, 34, (c, x, y) => {
      put(c.s, x, y, 16, 34, (g) => {
        screen(g, 16, 13, '#2a3346', '#162036')
        const pts = [10, 9, 10, 7, 8, 5, 6, 3]
        for (let i = 0; i < pts.length - 1; i++) line(g, 1 + i * 2, pts[i], 3 + i * 2, pts[i + 1], '#5cff8a')
        for (let i = 0; i < 4; i++) g.set(2 + i * 4, 11, '#8fa6c8')
        g.rect(7, 13, 2, 17, STEEL); g.rect(3, 30, 10, 2, STEEL); g.rect(1, 32, 14, 2, '#2a3346')
        g.rect(10, 2, 4, 2, c.tint)
      })
    }),
  ],
  /* le tri · les bannettes empilées */
  triage: [
    tp('triage-a', 15, 30, (c, x, y) => {
      put(c.s, x, y, 15, 30, (g) => {
        g.rect(0, 16, 15, 14, '#8a94a8'); g.hline(0, 16, 15, '#b3bccd'); g.hline(1, 23, 13, '#6b7489')
        g.rect(6, 19, 3, 1, '#4a5163'); g.rect(6, 26, 3, 1, '#4a5163')
        const cols = ['#ef4444', '#f59e0b', '#22c55e']
        for (let i = 0; i < 3; i++) {
          const yy = i * 5
          g.rect(1, yy + 1, 11, 2, i === 1 ? '#fde68a' : WHITE)
          g.rect(0, yy + 3, 15, 2, cols[i]); g.hline(0, yy + 3, 15, shade(cols[i], 0.3))
        }
        g.set(13, 1, c.tint)
      })
    }),
    tp('triage-b', 16, 22, (c, x, y) => {
      put(c.s, x, y, 16, 22, (g) => {
        stand(g, 16, 12, 22, c.P.wood)
        const cols = ['#ef4444', '#f59e0b', '#22c55e']
        for (let i = 0; i < 3; i++) {
          const bx = i * 5 + (i > 0 ? 1 : 0)
          g.rect(bx, 6, 5, 6, cols[i]); g.hline(bx, 6, 5, shade(cols[i], 0.3)); g.rect(bx + 1, 4, 3, 2, WHITE); g.set(bx + 2, 8, WHITE)
        }
        g.rect(3, 0, 6, 3, WHITE); g.hline(4, 1, 4, '#9aa3b8'); line(g, 10, 1, 13, 3, c.tint); g.set(13, 4, c.tint)
      })
    }),
  ],
  /* l'extraction · l'entonnoir et le classeur */
  extraction: [
    tp('extraction-a', 14, 34, (c, x, y) => {
      put(c.s, x, y, 14, 34, (g) => {
        g.rect(0, 10, 14, 24, '#8a94a8'); g.hline(0, 10, 14, '#b3bccd')
        for (let k = 0; k < 3; k++) { g.rect(1, 12 + k * 7, 12, 6, '#9aa4b8'); g.hline(1, 17 + k * 7, 12, '#6b7489'); g.rect(5, 13 + k * 7, 4, 1, '#4a5163') }
        g.rect(1, 9, 12, 3, '#9aa4b8'); for (let i = 0; i < 5; i++) g.rect(2 + i * 2, 6 + (i % 2), 2, 4, i === 2 ? c.tint : PAPER)
        for (let j = 0; j < 4; j++) g.hline(4 + j, j, 10 - j * 2, '#c9cfdb')
        g.vline(8, 4, 2, '#c9cfdb'); g.set(8, 6, '#5cc8ff')
        g.set(5, 0, '#5cc8ff'); g.set(9, 1, c.tint)
      })
    }),
    tp('extraction-b', 14, 32, (c, x, y) => {
      put(c.s, x, y, 14, 32, (g) => {
        // l'entonnoir sur son trépied, les gouttes qui tombent dans le bocal
        for (let j = 0; j < 6; j++) g.hline(j, 2 + j, 14 - j * 2, j === 0 ? '#e6e9ee' : '#c9cfdb')
        g.rect(6, 8, 2, 3, '#c9cfdb'); for (let i = 0; i < 4; i++) g.set(1 + i * 3, 0 + (i % 2), [RED, '#f59e0b', c.tint, '#22c55e'][i])
        g.set(7, 12, '#5cc8ff'); g.set(7, 14, '#5cc8ff')
        line(g, 1, 7, 0, 31, STEEL); line(g, 12, 7, 13, 31, STEEL)
        g.rect(3, 16, 8, 14, '#dff4ff'); g.rect(3, 22, 8, 8, '#5cc8ff'); g.hline(3, 16, 8, '#7a8396'); g.vline(4, 17, 12, WHITE)
        g.rect(2, 30, 10, 2, c.P.wood)
      })
    }),
  ],
  /* la veille · la longue-vue ou l'écran radar */
  watch: [
    tp('watch-a', 16, 34, (c, x, y) => {
      put(c.s, x, y, 16, 34, (g) => {
        for (let i = 0; i < 12; i++) { g.set(2 + i, 9 - Math.floor(i / 2), '#b8862f'); g.set(2 + i, 10 - Math.floor(i / 2), GOLD) }
        g.rect(12, 2, 4, 4, '#b8862f'); g.vline(15, 2, 4, '#cdeeff'); g.rect(0, 9, 3, 3, '#7a5a2a')
        g.set(5, 7, '#fff1a8'); g.set(8, 6, '#fff1a8')
        g.rect(6, 9, 3, 3, STEEL)
        line(g, 7, 12, 1, 33, WOOD_D); line(g, 7, 12, 14, 33, WOOD_D); g.vline(7, 12, 22, WOOD); void c
      })
    }),
    tp('watch-b', 16, 26, (c, x, y) => {
      put(c.s, x, y, 16, 26, (g) => {
        g.rect(0, 14, 16, 12, '#3a3f55'); g.hline(0, 14, 16, '#5a5f73'); g.rect(2, 17, 3, 2, RED); g.rect(6, 17, 3, 2, '#22c55e'); g.rect(10, 17, 4, 2, '#f59e0b')
        g.rect(2, 21, 12, 3, '#2b2d3a')
        g.rect(1, 0, 14, 14, '#22253a')
        for (let j = 0; j < 12; j++) for (let i = 0; i < 12; i++) {
          const d = Math.hypot(i - 5.5, j - 5.5)
          if (d <= 5.8) g.set(2 + i, 1 + j, Math.abs(d - 3) < 0.5 || Math.abs(d - 5.4) < 0.5 ? '#2f8f4a' : '#0d2a1a')
        }
        line(g, 8, 7, 12, 3, '#5cff8a'); g.set(5, 5, '#5cff8a'); g.set(10, 9, c.tint); g.set(8, 7, '#b8ffcf')
      })
    }),
  ],
  /* la planification · le kanban ou le calendrier sur chevalet */
  planning: [
    tp('planning-a', 16, 38, (c, x, y) => {
      put(c.s, x, y, 16, 38, (g) => {
        g.vline(2, 18, 20, '#5a6278'); g.vline(13, 18, 20, '#5a6278'); g.hline(0, 37, 5, '#5a6278'); g.hline(11, 37, 5, '#5a6278')
        g.rect(0, 0, 16, 19, '#9aa3b8'); g.rect(1, 1, 14, 17, WHITE)
        const heads = ['#f87171', '#fbbf24', '#34d399']
        heads.forEach((h, i) => { g.rect(1 + i * 5, 1, 4, 2, h); if (i < 2) g.vline(5 + i * 5, 3, 15, '#e2e6ef') })
        const notes = ['#fde68a', '#fbcfe8', '#bfdbfe', '#bbf7d0']
        for (const [col, row] of [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [2, 0]] as const) {
          const n = notes[(col + row + c.floor) % 4]; g.rect(2 + col * 5, 4 + row * 4, 3, 3, n); g.set(3 + col * 5, 5 + row * 4, shade(n, -0.35))
        }
      })
    }),
    tp('planning-b', 16, 36, (c, x, y) => {
      put(c.s, x, y, 16, 36, (g) => {
        for (let yy = 14; yy < 36; yy++) { g.set(7 - Math.floor((yy - 14) / 5), yy, c.P.wood); g.set(8 + Math.floor((yy - 14) / 5), yy, c.P.wood) }
        g.rect(0, 0, 16, 16, WHITE); g.rect(0, 0, 16, 4, RED); g.hline(0, 0, 16, '#ff7a6e')
        g.rect(3, -1, 2, 2, STEEL); g.rect(11, -1, 2, 2, STEEL)
        for (let j = 0; j < 3; j++) for (let i = 0; i < 5; i++) g.rect(1 + i * 3, 5 + j * 3, 2, 2, (i + j * 5) % 6 === 0 ? c.tint : '#e2e6ef')
        g.rect(7, 8, 2, 2, '#22c55e'); line(g, 6, 7, 9, 10, RED)
      })
    }),
  ],
  /* les outils · le panneau perforé ou la servante */
  tools: [
    tp('tools-a', 16, 38, (c, x, y) => {
      put(c.s, x, y, 16, 38, (g) => {
        g.vline(2, 20, 18, STEEL); g.vline(13, 20, 18, STEEL); g.hline(0, 37, 16, STEEL)
        g.rect(0, 0, 16, 21, '#c9a36a'); g.hline(0, 0, 16, '#e0bd84')
        for (let j = 2; j < 20; j += 3) for (let i = 1; i < 16; i += 3) g.set(i, j, '#a8844f')
        // le marteau, la clé, le tournevis, la scie
        g.rect(2, 2, 4, 2, STEEL); g.vline(3, 4, 7, WOOD_L)
        g.vline(8, 2, 9, '#9aa3b8'); g.rect(7, 2, 3, 2, '#9aa3b8'); g.set(8, 2, '#c9c9c9')
        g.vline(12, 2, 5, '#c9c9c9'); g.rect(11, 7, 3, 4, c.tint)
        g.rect(2, 13, 9, 3, '#c9cfdb'); for (let i = 2; i < 11; i += 2) g.set(i, 16, '#9aa3b8'); g.rect(11, 13, 3, 4, RED)
      })
    }),
    tp('tools-b', 16, 24, (c, x, y) => {
      put(c.s, x, y, 16, 24, (g) => {
        g.rect(0, 6, 16, 18, '#c0392b'); g.hline(0, 6, 16, '#e5554a')
        for (let k = 0; k < 4; k++) { g.hline(1, 10 + k * 4, 14, '#8a1f17'); g.rect(6, 8 + k * 4, 4, 1, '#d8dbe4') }
        g.rect(1, 22, 2, 2, STEEL); g.rect(13, 22, 2, 2, STEEL)
        g.rect(1, 3, 6, 2, '#9aa3b8'); g.rect(0, 2, 2, 2, '#9aa3b8'); g.rect(6, 2, 2, 2, '#9aa3b8')
        g.rect(9, 1, 2, 5, STEEL); g.rect(8, 0, 4, 2, STEEL); g.vline(12, 0, 5, WOOD_L); g.set(12, 0, c.tint)
      })
    }),
  ],
  /* la croissance · la plante et la courbe qui monte */
  growth: [
    tp('growth-a', 16, 34, (c, x, y) => {
      put(c.s, x, y, 16, 34, (g) => {
        g.rect(2, 26, 10, 8, POT); g.hline(1, 26, 12, shade(POT, 0.25)); g.vline(10, 27, 7, shade(POT, -0.2))
        g.vline(7, 6, 20, '#3f7a3a')
        for (const [lx, ly, d] of [[7, 22, -1], [7, 18, 1], [7, 14, -1], [7, 10, 1], [7, 6, -1]] as const) {
          g.rect(d < 0 ? lx - 4 : lx + 1, ly - 1, 4, 2, LEAF); g.set(d < 0 ? lx - 4 : lx + 4, ly - 2, '#6fd38a')
        }
        g.rect(11, 8, 5, 11, WHITE); g.vline(13, 19, 7, WOOD_D)
        g.set(12, 17, '#16a34a'); g.set(13, 15, '#16a34a'); g.set(14, 12, '#16a34a'); g.set(14, 10, '#16a34a'); g.set(13, 10, '#16a34a'); g.set(15, 11, '#16a34a')
        g.set(7, 5, c.tint)
      })
    }),
    tp('growth-b', 16, 26, (c, x, y) => {
      put(c.s, x, y, 16, 26, (g) => {
        // trois pots, trois pousses de plus en plus grandes, la flèche
        stand(g, 16, 18, 26, c.P.wood)
        for (let k = 0; k < 3; k++) {
          const px = k * 5 + (k > 0 ? 1 : 0), hh = 3 + k * 3
          g.rect(px, 15, 4, 3, POT); g.vline(px + 1, 15 - hh, hh, '#3f7a3a'); g.rect(px, 15 - hh, 2, 2, LEAF); g.rect(px + 2, 16 - hh + 1, 2, 2, '#2fa84f')
        }
        line(g, 1, 7, 12, 0, c.tint); g.rect(12, 0, 3, 1, c.tint); g.vline(14, 0, 3, c.tint)
      })
    }),
  ],
  /* l'orchestration · le gong ou le pupitre du chef */
  orchestration: [
    tp('orchestration-a', 16, 34, (c, x, y) => {
      put(c.s, x, y, 16, 34, (g) => {
        g.rect(0, 0, 16, 2, c.P.wood); g.hline(0, 0, 16, shade(c.P.wood, 0.3)); g.set(0, 2, c.P.wood); g.set(15, 2, c.P.wood)
        g.vline(1, 2, 31, c.P.wood); g.vline(14, 2, 31, c.P.wood); g.hline(0, 33, 16, shade(c.P.wood, -0.3))
        g.vline(5, 2, 3, INK); g.vline(10, 2, 3, INK)
        for (let j = 0; j < 12; j++) for (let i = 0; i < 12; i++) { const d = Math.hypot(i - 5.5, j - 5.5); if (d <= 5.8) g.set(2 + i, 5 + j, d > 4.8 ? '#b8862f' : d < 1.8 ? '#fff1a8' : GOLD) }
        g.set(6, 9, WHITE); g.set(5, 10, '#fff1a8')
        line(g, 11, 28, 14, 20, WOOD_L); disc(g, 14, 20, 1.2, c.tint)
      })
    }),
    tp('orchestration-b', 14, 32, (c, x, y) => {
      put(c.s, x, y, 14, 32, (g) => {
        g.rect(0, 2, 14, 10, STEEL); g.rect(1, 3, 12, 8, WHITE)
        for (let k = 0; k < 3; k++) { g.hline(2, 4 + k * 3, 10, '#9aa3b8'); g.set(3 + k * 3, 3 + k * 3, INK); g.set(8 + k, 5 + k * 2, INK) }
        g.hline(0, 12, 14, '#5a5f73')
        g.vline(7, 13, 17, STEEL); line(g, 7, 29, 2, 31, STEEL); line(g, 7, 29, 12, 31, STEEL)
        line(g, 9, 1, 13, 0, WHITE); g.set(8, 1, c.tint)
        glow(c.s, x + 7, y + 6, 9, 0.06)
      })
    }),
  ],
}

/** l'objet du sujet pour cet étage · deux versions selon l'étage */
export function topicProp(topic: string, floor: number, r: () => number): Prop | null {
  const list = (TOPIC_PROPS as Record<string, Prop[]>)[topic]
  if (!list) return null
  return list[(floor + (r() < 0.5 ? 1 : 0)) % list.length]
}

