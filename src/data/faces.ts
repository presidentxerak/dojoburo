// ---------------------------------------------------------------------------
// ASCII facial expressions, rendered directly ON the character's head (two
// compact lines: eyes + mouth). The renderer cycles frames to animate.
// Pure ASCII so it reads on any head material (skin, metal, bone, slime…).
// ---------------------------------------------------------------------------
import type { Mood } from '../store'

export type Frame = string // 2 lines joined by \n

const F = (eyes: string, mouth: string): Frame => `${eyes}\n${mouth}`

export const FACES: Record<Mood, Frame[]> = {
  idle: [F('o o', '\\_/'), F('o o', '\\_/'), F('- -', '\\_/')], // occasional blink
  work: [F('o o', '==='), F('o o', '~~~')],
  happy: [F('^ ^', '\\_/'), F('^ ^', '\\o/')],
  think: [F('o .', ' ? '), F('. o', ' ? ')],
  talk: [F('o o', ' O '), F('o o', ' _ ')],
  love: [F('* *', '\\_/'), F('* *', ' u ')],
  error: [F('x x', ' ~ '), F('X X', ' ~ ')],
}

/** Frame cycle speed per mood, in ms. */
export const FACE_SPEED: Record<Mood, number> = {
  idle: 2600,
  work: 240,
  happy: 380,
  think: 620,
  talk: 240,
  love: 400,
  error: 300,
}
