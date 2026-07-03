// ---------------------------------------------------------------------------
// ASCII-art facial expressions. Each mood is a list of frames; the renderer
// cycles them to animate (blinking, typing, talking...). Kept as compact 4-line
// monospace glyphs so they read well inside a pixel screen.
// ---------------------------------------------------------------------------
import type { Mood } from '../store'

export type Frame = string // 4 lines joined by \n

const F = (a: string, b: string, c: string, d: string): Frame => [a, b, c, d].join('\n')

export const FACES: Record<Mood, Frame[]> = {
  idle: [
    F('.------.', '| o  o |', '|  --  |', "'------'"),
    F('.------.', '| -  - |', '|  --  |', "'------'"), // blink
    F('.------.', '| o  o |', '|  --  |', "'------'"),
  ],
  work: [
    F('.------.', '| o  o |', '| ~~~~ |', "'------'"),
    F('.------.', '| o  o |', '| ≈≈≈≈ |', "'------'"),
  ],
  happy: [
    F('.------.', '| ^  ^ |', '| \\__/ |', "'------'"),
    F('.------.', '| ^  ^ |', '|  \\/  |', "'------'"),
  ],
  think: [
    F('.------.', '| o  . |', '|  ?   |', "'------'"),
    F('.------.', '| .  o |', '|   ?  |', "'------'"),
  ],
  talk: [
    F('.------.', '| o  o |', '|  ()  |', "'------'"),
    F('.------.', '| o  o |', '|  --  |', "'------'"),
  ],
  love: [
    F('.------.', '| <3 <3|', '| \\__/ |', "'------'"),
    F('.------.', '| <3 <3|', '|  \\/  |', "'------'"),
  ],
  error: [
    F('.------.', '| x  x |', '|  ..  |', "'------'"),
    F('.------.', '| X  X |', '|  ~~  |', "'------'"),
  ],
}

/** Frame cycle speed per mood, in ms. */
export const FACE_SPEED: Record<Mood, number> = {
  idle: 2600,
  work: 240,
  happy: 360,
  think: 620,
  talk: 220,
  love: 380,
  error: 300,
}
