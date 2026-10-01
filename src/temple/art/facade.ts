// LA FAÇADE DU TEMPLE · le toit, les poutres lumineuses entre les étages, le
// perron d'entrée. Les étages (floors.ts) s'empilent entre le toit et le
// perron, séparés par une poutre : toit, étage, poutre, étage, ..., perron.
//
// Demandé : « fais les dojo sous la forme d'un temple avec des étages », sur
// la référence d'une tour en pixel art (guirlande de lumières entre étages).
import { Grid, shade, OUTLINE } from '../../pixel/grid'

const WOOD = '#9a6236'
const WOOD_D = '#64391d'
const PILLAR = '#b8382c'
const GOLD = '#f5c542'
const STONE = '#b9b4c4'
const PAPER = '#fff4cf'

/** un pan de toit courbe · étroit au faîte, large aux avant-toits, les
 *  extrémités relevées. `cx` est l'axe, les demi-largeurs vont de `top` à
 *  `bottom`. */
function roofTier(g: Grid, cx: number, y0: number, y1: number, half0: number, half1: number, tint: string) {
  const tile = shade(tint, -0.2)
  const groove = shade(tint, -0.45)
  const light = shade(tint, 0.18)
  const fascia = shade(tint, 0.55)
  const h = y1 - y0
  const curlLen = Math.max(4, Math.round(half1 * 0.22))
  for (let y = y0; y <= y1; y++) {
    const t = (y - y0) / h
    const half = Math.round(half0 + (half1 - half0) * Math.pow(Math.min(1, t / 0.8), 1.7))
    for (let x = cx - half; x <= cx + half; x++) {
      const dx = Math.abs(x - cx)
      // la courbe relevée des avant-toits
      const over = dx - (half1 - curlLen)
      const lift = over > 0 ? Math.round(3 * Math.pow(over / curlLen, 2)) : 0
      const yb = y1 - lift
      if (y > yb) continue
      let c = tile
      if ((x - cx + 400) % 4 === 0) c = groove
      if ((y - y0) % 3 === 0 && (x - cx + 400) % 4 !== 0) c = light
      if (y >= yb - 1) c = fascia
      if (y === yb && dx > half1 - 2) c = GOLD
      g.set(x, y, c)
    }
  }
  // le faîtage
  g.hline(cx - half0 - 1, y0, half0 * 2 + 3, shade(tint, -0.55))
  g.set(cx - half0 - 2, y0 - 1, GOLD); g.set(cx + half0 + 2, y0 - 1, GOLD)
  g.set(cx - half0 - 1, y0 - 1, GOLD); g.set(cx + half0 + 1, y0 - 1, GOLD)
}

/** Le toit du temple, w × 40 · deux pans courbes, un étage de comble, un
 *  épi de faîtage doré. La couleur des tuiles vient de la formation. */
export function drawRoof(tint: string, w = 160): Grid {
  const g = new Grid(w, 40)
  const o = new Grid(w, 40)
  const cx = Math.floor(w / 2)
  // l'épi de faîtage (sorin)
  o.vline(cx, 0, 7, GOLD)
  o.vline(cx + 1, 1, 6, shade(GOLD, -0.3))
  for (const y of [2, 4]) o.hline(cx - 1, y, 4, GOLD)
  o.rect(cx - 1, 6, 4, 2, shade(GOLD, -0.15))
  // le pan supérieur
  roofTier(o, cx, 8, 18, Math.round(w * 0.06), Math.round(w * 0.3), tint)
  // l'étage de comble : piliers, fenêtre ronde éclairée, plaque
  const bw = Math.round(w * 0.22)
  o.rect(cx - bw, 19, bw * 2 + 1, 5, '#f3e6cc')
  for (const x of [cx - bw, cx - bw + 1, cx + bw - 1, cx + bw]) o.vline(x, 19, 5, PILLAR)
  for (let x = cx - bw + 6; x < cx + bw - 4; x += 8) o.vline(x, 19, 5, shade(PILLAR, -0.2))
  o.rect(cx - 3, 19, 7, 5, WOOD_D)
  o.rect(cx - 2, 20, 5, 3, '#ffd36b')
  o.set(cx, 21, '#fff6c2')
  // le grand pan
  roofTier(o, cx, 24, 35, Math.round(w * 0.24), Math.floor(w / 2) - 1, tint)
  // la frise des consoles sous l'avant-toit
  const fw = Math.round(w * 0.44)
  o.rect(cx - fw, 36, fw * 2 + 1, 4, WOOD_D)
  o.hline(cx - fw, 36, fw * 2 + 1, WOOD)
  for (let x = cx - fw + 2; x < cx + fw - 1; x += 6) {
    o.rect(x, 37, 3, 2, PILLAR)
    o.set(x, 37, shade(PILLAR, 0.3))
  }
  o.outline()
  g.blit(o, 0, 0)
  return g
}

/** La poutre entre deux étages, w × 6 · bois sombre et guirlande de petites
 *  lumières de couleur. Les extrémités prolongent les piliers. */
export function drawFloorStrip(w = 160): Grid {
  const g = new Grid(w, 6)
  g.hline(0, 0, w, OUTLINE)
  g.hline(0, 1, w, WOOD)
  g.rect(0, 2, w, 2, '#3a2214')
  g.hline(0, 4, w, WOOD_D)
  g.hline(0, 5, w, OUTLINE)
  const lights = ['#ff5a5a', '#ffd34d', '#5cff8a', '#5cd6ff', '#ff7ad9', '#ffa64d']
  let i = 0
  for (let x = 8; x < w - 8; x += 6) {
    const c = lights[i++ % lights.length]
    g.rect(x, 2, 2, 2, c)
    g.set(x, 2, shade(c, 0.6))
    g.set(x - 1, 2, shade(c, -0.5)); g.set(x + 2, 3, shade(c, -0.5))
  }
  for (const x of [0, w - 5]) {
    g.rect(x, 0, 5, 6, GOLD)
    g.hline(x, 0, 5, shade(GOLD, 0.4))
    g.hline(x, 5, 5, shade(GOLD, -0.4))
    g.vline(x === 0 ? 4 : x, 0, 6, OUTLINE)
  }
  return g
}

/** une lanterne de pierre (tōrō), ~11 × 20 */
function stoneLantern(): Grid {
  const g = new Grid(13, 22, 1, 1)
  const st = STONE, d = shade(STONE, -0.25), l = shade(STONE, 0.3)
  g.set(5, 0, d)
  g.rect(4, 1, 3, 1, st)
  g.rect(1, 2, 9, 2, st); g.hline(0, 4, 11, st); g.hline(1, 2, 7, l)
  g.rect(2, 5, 7, 5, d)
  g.rect(3, 6, 5, 3, '#ffd36b'); g.set(5, 7, '#fff6c2')
  g.rect(1, 10, 9, 2, st); g.hline(1, 10, 9, l)
  g.rect(4, 12, 3, 5, st); g.vline(4, 12, 5, l)
  g.rect(2, 17, 7, 1, st)
  g.rect(1, 18, 9, 2, d); g.hline(1, 18, 9, st)
  g.outline()
  return g
}

/** Le perron du temple, w × 28 · soubassement de pierre, escalier central,
 *  portique rouge, deux lanternes de pierre allumées. */
export function drawBase(tint: string, w = 160): Grid {
  const g = new Grid(w, 28)
  const cx = Math.floor(w / 2)
  // le soubassement en pierres appareillées
  const block = '#8f8aa0'
  g.rect(0, 0, w, 24, block)
  for (let j = 0; j < 5; j++) {
    const y = 2 + j * 5
    g.hline(0, y, w, shade(block, -0.3))
    g.hline(0, y + 1, w, shade(block, 0.15))
    for (let x = (j % 2) * 7; x < w; x += 14) g.vline(x, y, 5, shade(block, -0.3))
  }
  g.hline(0, 0, w, OUTLINE)
  g.hline(0, 1, w, shade(block, -0.45))
  // le sol de gravier et d'herbe
  g.rect(0, 24, w, 4, '#5cbf4a')
  for (let x = 0; x < w; x += 3) g.set(x, 24 + (x % 2), '#4aa83c')
  g.hline(0, 27, w, '#3f9434')
  // l'escalier
  const steps = 7
  for (let i = 0; i < steps; i++) {
    const y = 2 + i * 3 + (i === steps - 1 ? 0 : 0)
    const half = 16 + i * 2
    g.rect(cx - half, y, half * 2, 3, i % 2 ? '#d4cfdd' : '#cbc6d6')
    g.hline(cx - half, y, half * 2, '#ebe7f2')
    g.hline(cx - half, y + 2, half * 2, shade(STONE, -0.3))
    g.vline(cx - half, y, 3, OUTLINE); g.vline(cx + half - 1, y, 3, OUTLINE)
  }
  g.hline(cx - 30, 23, 60, OUTLINE)
  // le tapis aux couleurs de la formation
  for (let y = 2; y < 23; y++) g.rect(cx - 5, y, 10, 1, (y - 2) % 3 === 0 ? shade(tint, 0.25) : tint)
  // le portique
  const p = new Grid(w, 28)
  const gx0 = cx - 30, gx1 = cx + 27
  for (const x of [gx0, gx1]) {
    p.rect(x, 4, 3, 22, PILLAR)
    p.vline(x, 4, 22, shade(PILLAR, 0.25))
    p.rect(x - 1, 24, 5, 2, '#2b2d3a')
  }
  p.rect(gx0 - 5, 1, gx1 - gx0 + 13, 2, '#2b2d3a')
  p.set(gx0 - 6, 0, '#2b2d3a'); p.set(gx1 + 8, 0, '#2b2d3a')
  p.rect(gx0 - 3, 3, gx1 - gx0 + 9, 2, PILLAR)
  p.rect(gx0 - 1, 8, gx1 - gx0 + 5, 2, PILLAR)
  p.hline(gx0 - 1, 8, gx1 - gx0 + 5, shade(PILLAR, 0.25))
  p.rect(cx - 4, 4, 8, 4, tint)
  p.rect(cx - 3, 5, 6, 2, PAPER)
  p.outline()
  g.blit(p, 0, 0)
  // les lanternes de pierre
  const lan = stoneLantern()
  g.blit(lan, Math.round(w * 0.12) - 1, 5)
  g.blit(lan, w - Math.round(w * 0.12) - 12, 5)
  return g
}
