// LE DÉCOR D'UNE CARTE DE FORMATION · demandé : « Améliore le graphisme des
// cards des formations dans le style de la page de la carte des temples ».
//
// Chaque carte porte un petit morceau de la carte : le ciel du matin, des
// collines au loin, l'herbe, un chemin de terre qui monte vers le temple, des
// fleurs, un arbre ou un cerisier de chaque côté. Le temple (drawTempleIcon)
// et le maître (LiveChibi) sont posés par-dessus, en HTML, pour que le maître
// reste animé. Le tirage dépend de la formation : deux cartes voisines n'ont
// pas le même paysage.
import { Grid, rng, shade } from '../../pixel/grid'

export const CARD_W = 120
export const CARD_H = 60

const GRASS = '#5cb04c'
const GRASS_D = '#4a9a3e'
const PATH = '#d8b77e'
const PATH_D = '#b8955a'

export function drawCardScene(tint: string, seed: number, locked: boolean): Grid {
  const g = new Grid(CARD_W, CARD_H)
  const r = rng(seed * 977 + 13)
  const m = (c: string) => (locked ? shade(c, -0.28) : c)

  // le ciel, en trois bandes tramées pour rester pixel
  const SKY = ['#8fd3ff', '#a9ddff', '#c6e9ff']
  for (let y = 0; y < 26; y++) for (let x = 0; x < CARD_W; x++) {
    const band = Math.min(2, Math.floor(y / 9))
    const dither = (x + y) % 2 === 0 && y % 9 === 8 && band < 2
    g.set(x, y, m(SKY[dither ? band + 1 : band]))
  }
  // deux nuages
  for (let k = 0; k < 2; k++) {
    const cx = 14 + Math.floor(r() * 90), cy = 4 + Math.floor(r() * 8)
    for (let y = -2; y <= 2; y++) for (let x = -7; x <= 7; x++) {
      if ((x / 7) ** 2 + (y / 2.4) ** 2 <= 1) g.set(cx + x, cy + y, m(y >= 1 ? '#e4f3ff' : '#ffffff'))
    }
  }
  // les collines au loin, teintées par la couleur de la formation
  const hill = shade(tint, -0.15)
  for (let x = 0; x < CARD_W; x++) {
    const top = 20 + Math.round(Math.sin(x / 11 + seed) * 3 + Math.sin(x / 5 + seed * 2) * 1)
    for (let y = top; y < 30; y++) g.set(x, y, m((x + y) % 7 === 0 ? shade(hill, 0.1) : hill))
  }
  // l'herbe, avec ses brins
  for (let y = 28; y < CARD_H; y++) for (let x = 0; x < CARD_W; x++) {
    g.set(x, y, m((x * 7 + y * 3) % 11 === 0 ? GRASS_D : GRASS))
  }
  for (let i = 0; i < 40; i++) {
    const x = Math.floor(r() * CARD_W), y = 30 + Math.floor(r() * (CARD_H - 31))
    g.set(x, y, m(GRASS_D)); g.set(x, y - 1, m('#79c765'))
  }
  // le chemin de terre, du bas vers le temple
  const cx = CARD_W / 2
  for (let y = 40; y < CARD_H; y++) {
    const half = 4 + Math.floor((y - 40) / 3)
    for (let x = -half; x <= half; x++) {
      const edge = Math.abs(x) === half
      g.set(Math.round(cx + x), y, m(edge ? PATH_D : (x + y) % 5 === 0 ? shade(PATH, -0.08) : PATH))
    }
  }
  // des fleurs
  const FLOWERS = ['#ff8fb8', '#ffe066', '#ffffff', '#b794ff']
  for (let i = 0; i < 14; i++) {
    const x = Math.floor(r() * CARD_W), y = 32 + Math.floor(r() * (CARD_H - 34))
    if (Math.abs(x - cx) < 14) continue
    g.set(x, y, m(FLOWERS[i % FLOWERS.length])); g.set(x, y + 1, m(GRASS_D))
  }
  // un arbre à gauche, un cerisier à droite
  const tree = (tx: number, crown: string[]) => {
    g.rect(tx - 1, 34, 3, 12, m('#6b4128'))
    for (let y = -9; y <= 5; y++) for (let x = -9; x <= 9; x++) {
      if ((x / 9) ** 2 + (y / 7) ** 2 <= 1) g.set(tx + x, 30 + y, m(crown[(x + y + 20) % 3 === 0 ? 1 : y < -2 ? 2 : 0]))
    }
    for (let x = -6; x <= 6; x++) g.set(tx + x, 46, m(shade(GRASS, -0.25)))
  }
  tree(10 + Math.floor(r() * 6), ['#3f9a46', '#2f7d3a', '#5cbf5a'])
  tree(CARD_W - 12 - Math.floor(r() * 6), ['#f48fb8', '#e07aa5', '#ffd1e3'])
  return g
}
