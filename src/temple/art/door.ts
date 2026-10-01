// LA PORTE QUI S'OUVRE · les deux battants du shoji du fond, à part.
//
// Demandé : « L'étudiant doit être positionné devant la porte du dojo qui
// s'ouvre et se ferme : quand on monte d'un étage la porte s'ouvre et l'élève
// entre ». Le décor de l'étage (art/floors) dessine la porte fermée ; ces deux
// battants sont posés exactement par-dessus (x 72 à 88, y 21 à 50 de l'étage)
// et glissent dans le mur pour l'ouvrir, sur l'intérieur éclairé.
import { Grid, shade } from '../../pixel/grid'

const WOOD_D = '#64391d'
const PAPER = '#fff4cf'
const PAPER_W = '#ffe7a3'
const LATH = '#d29a5c'
const WHITE = '#ffffff'

/** largeur et hauteur de l'ouverture, en pixels de l'étage */
export const DOOR_X = 72
export const DOOR_Y = 21
export const DOOR_W = 17
export const DOOR_H = 30

/** un battant · 8 ou 9 pixels de large, le montant du milieu de son côté */
export function drawDoorLeaf(side: 'left' | 'right'): Grid {
  const w = side === 'left' ? 8 : 9
  const g = new Grid(w, DOOR_H)
  const px = side === 'left' ? 0 : 2
  for (let y = 0; y < DOOR_H; y++) {
    const mid = Math.abs(y - 15) < 8
    g.hline(px, y, 7, mid ? PAPER : PAPER_W)
  }
  for (let y = 4; y < DOOR_H; y += 6) g.hline(px, y, 7, LATH)
  g.vline(px + 3, 0, DOOR_H, LATH)
  g.set(px + 1, 1, WHITE); g.set(px + 1, 2, WHITE)
  // le montant et la poignée creuse
  if (side === 'left') { g.vline(7, 0, DOOR_H, WOOD_D); g.rect(6, 14, 1, 3, WOOD_D) }
  else { g.rect(0, 0, 2, DOOR_H, WOOD_D); g.rect(2, 14, 1, 3, WOOD_D) }
  return g
}

/** l'intérieur, derrière la porte · un couloir chaud et un escalier qui monte */
export function drawDoorInside(tint: string): Grid {
  const g = new Grid(DOOR_W, DOOR_H)
  for (let y = 0; y < DOOR_H; y++) g.hline(0, y, DOOR_W, shade('#3b2416', -0.35 + (y / DOOR_H) * 0.35))
  // la lumière du fond
  g.rect(5, 2, 7, 14, '#ffcf6b')
  g.rect(6, 3, 5, 12, '#ffe7a3')
  // les marches qui montent vers l'étage suivant
  for (let i = 0; i < 6; i++) {
    const y = 16 + i * 2
    g.hline(3 + i, y, DOOR_W - 6 - i * 2 > 0 ? DOOR_W - 6 - i * 2 : 1, '#8a5a34')
    g.hline(3 + i, y + 1, DOOR_W - 6 - i * 2 > 0 ? DOOR_W - 6 - i * 2 : 1, '#5e3a20')
  }
  // le tapis aux couleurs du temple
  g.vline(8, 16, 14, tint)
  return g
}
