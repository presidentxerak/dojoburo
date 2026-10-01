// LE CIEL ET LE JARDIN DU TEMPLE · demandé : « Le fond derrière les temples
// dans les cours doit avoir un ciel bleu avec des nuages et en bas des jardins
// zen avec un chemin ».
//
// Les nuages sont de petits dessins posés sur un ciel en dégradé (index.css,
// .tp-sky) et qui dérivent lentement. Le jardin est une bande large, trois
// fois la largeur de la tour, posée sous l'entrée : du gravier ratissé autour
// des pierres, de la mousse, un chemin de pas japonais qui part de l'escalier,
// des lanternes de pierre, des buissons taillés, deux cerisiers, une palissade
// de bambou de chaque côté.
import { Grid, OUTLINE, rng, shade } from '../../pixel/grid'

/** un nuage · des bulles blanches, une ombre bleutée en dessous */
export function drawCloud(seed: number): Grid {
  const r = rng(seed * 131 + 7)
  const w = 44 + Math.floor(r() * 20)
  const h = 18
  const g = new Grid(w, h)
  const puffs: [number, number, number][] = []
  const n = 4 + Math.floor(r() * 3)
  for (let i = 0; i < n; i++) {
    const cx = 7 + ((w - 14) * i) / (n - 1) + (r() - 0.5) * 4
    const rad = 4 + r() * 4 + (i > 0 && i < n - 1 ? 2 : 0)
    puffs.push([cx, h - 5 - rad * 0.6, rad])
  }
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const inside = puffs.some(([cx, cy, rad]) => (x - cx) ** 2 + (y - cy) ** 2 <= rad * rad) || (y >= h - 6 && y <= h - 3 && x >= 4 && x <= w - 5)
    if (!inside) continue
    const shadow = y >= h - 5
    g.set(x, y, shadow ? '#cfe3f5' : '#ffffff')
  }
  // un reflet clair sur le haut des bulles
  for (const [cx, cy, rad] of puffs) g.set(Math.round(cx - rad * 0.4), Math.round(cy - rad * 0.55), '#f4fbff')
  g.outline('#9cc2e4')
  return g
}

const GRAVEL = '#ebe5d4'
const RAKE = '#d5cdb8'
const STONE = '#9aa0a8'
const MOSS = '#5aa64a'

/** le jardin zen au pied du temple · w × 64, le chemin au centre */
export function drawGarden(w = 480): Grid {
  const h = 64
  const g = new Grid(w, h)
  const r = rng(4242)
  const cx = Math.floor(w / 2)

  // l'herbe du haut, dans le prolongement de l'entrée, puis le gravier
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    if (y < 4) g.set(x, y, (x + y) % 5 === 0 ? '#57b04a' : '#4fa244')
    else g.set(x, y, GRAVEL)
  }
  // les rochers et leurs ondes ratissées
  const rocks: [number, number, number][] = []
  const slots = [0.12, 0.27, 0.4, 0.62, 0.75, 0.9]
  for (const f of slots) rocks.push([Math.round(w * f + (r() - 0.5) * 20), 24 + Math.round(r() * 22), 3 + Math.round(r() * 3)])
  // les lignes droites du râteau, qui contournent les ondes
  for (let y = 6; y < h - 2; y += 3) {
    for (let x = 0; x < w; x++) {
      const wave = Math.round(Math.sin(x / 9 + y) * 0.6)
      const yy = y + wave
      const near = rocks.some(([rx, ry, rr]) => (x - rx) ** 2 / 4 + (yy - ry) ** 2 < (rr + 9) ** 2)
      if (!near && Math.abs(x - cx) > 14) g.set(x, yy, RAKE)
    }
  }
  // les ondes concentriques autour de chaque rocher
  for (const [rx, ry, rr] of rocks) {
    for (let k = 1; k <= 3; k++) {
      const R = rr + 2 + k * 3
      for (let a = 0; a < Math.PI * 2; a += 0.02) {
        const x = Math.round(rx + Math.cos(a) * R * 2)
        const y = Math.round(ry + Math.sin(a) * R)
        if (y > 4 && y < h && Math.abs(x - cx) > 14) g.set(x, y, RAKE)
      }
    }
  }
  // la mousse puis le rocher
  for (const [rx, ry, rr] of rocks) {
    for (let y = -rr - 2; y <= rr + 2; y++) for (let x = -rr * 2 - 3; x <= rr * 2 + 3; x++) {
      if ((x / 2) ** 2 + y * y <= (rr + 1.5) ** 2 && r() < 0.8) g.set(rx + x, ry + y + 1, (x + y) % 3 === 0 ? shade(MOSS, 0.15) : MOSS)
    }
    for (let y = -rr; y <= rr; y++) for (let x = -Math.round(rr * 1.4); x <= Math.round(rr * 1.4); x++) {
      if ((x / 1.4) ** 2 + (y * 1.2) ** 2 <= rr * rr) g.set(rx + x, ry + y - 1, y < -rr / 3 ? shade(STONE, 0.25) : x > rr / 2 ? shade(STONE, -0.2) : STONE)
    }
  }
  // le chemin de pas japonais, de l'escalier jusqu'en bas
  for (let y = 5, i = 0; y < h - 3; y += 6, i++) {
    const sx = cx - 6 + (i % 2 ? 2 : -2)
    for (let yy = 0; yy < 4; yy++) for (let xx = 0; xx < 12; xx++) {
      const edge = (yy === 0 || yy === 3) && (xx === 0 || xx === 11)
      if (!edge) g.set(sx + xx, y + yy, yy === 0 ? '#d8c69c' : yy === 3 ? '#a8936a' : '#c4b083')
    }
  }
  // les lanternes de pierre de part et d'autre du chemin
  for (const lx of [cx - 40, cx + 34]) {
    g.rect(lx, 30, 6, 2, STONE); g.rect(lx + 1, 32, 4, 4, '#b7bcc3'); g.rect(lx + 2, 33, 2, 2, '#ffd36b')
    g.rect(lx - 1, 28, 8, 2, shade(STONE, -0.15)); g.rect(lx + 2, 36, 2, 6, STONE); g.rect(lx, 42, 6, 2, shade(STONE, -0.2))
  }
  // des buissons taillés en boule
  for (const f of [0.2, 0.34, 0.68, 0.82]) {
    const bx = Math.round(w * f), by = 10 + Math.round(r() * 4)
    for (let y = -4; y <= 3; y++) for (let x = -6; x <= 6; x++) if ((x / 6) ** 2 + (y / 4) ** 2 <= 1) g.set(bx + x, by + y, y < -1 ? '#4caf50' : '#3a8f3f')
  }
  // deux cerisiers et une palissade de bambou à chaque bout
  for (const tx of [Math.round(w * 0.05), Math.round(w * 0.95)]) {
    g.rect(tx - 1, 16, 3, 24, '#6b4128')
    for (let y = -10; y <= 6; y++) for (let x = -14; x <= 14; x++) {
      if ((x / 14) ** 2 + (y / 9) ** 2 <= 1 && r() < 0.92) g.set(tx + x, 12 + y, r() < 0.2 ? '#ffd1e3' : (x + y) % 4 === 0 ? '#f9a8c9' : '#f48fb8')
    }
    for (let i = 0; i < 14; i++) g.set(tx - 18 + Math.floor(r() * 36), 44 + Math.floor(r() * 16), '#f9a8c9')
  }
  for (const [x0, x1] of [[0, Math.round(w * 0.1)], [Math.round(w * 0.9), w]]) {
    for (let x = x0; x < x1; x += 3) { g.vline(x, 44, 18, '#b8c25a'); g.set(x, 48, '#8f9a3c'); g.set(x, 55, '#8f9a3c') }
    g.hline(x0, 50, x1 - x0, '#6b4128')
  }
  g.outline(OUTLINE)
  return g
}
