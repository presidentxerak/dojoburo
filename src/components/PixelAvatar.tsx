import type { Character } from '../data/looks'

// Full-body 1-bit (black & white) character on a 16x24 grid, in the Macintosh
// System 1 look: white fill, black outline, 50% dither for clothing. No colour.
// No eyes/mouth — the ASCII expression is overlaid by <Character/>.
type Rect = { x: number; y: number; w: number; h: number; f: string }
const r = (x: number, y: number, w: number, h: number, f: string): Rect => ({ x, y, w, h, f })

const VIEW_W = 16
const VIEW_H = 24
export const AVATAR_RATIO = VIEW_H / VIEW_W

const B = '#000'
const W = '#fff'
const D = 'url(#dith)'
const O = 0.64 // outline thickness — ~2px at the office avatar scale (50px / 16u)

// outlined box: black border + `fill` interior (skip interior if too thin)
const box = (x: number, y: number, w: number, h: number, fill: string): Rect[] => {
  const iw = w - 2 * O
  const ih = h - 2 * O
  if (iw <= 0 || ih <= 0) return [r(x, y, w, h, B)]
  return [r(x, y, w, h, B), r(x + O, y + O, iw, ih, fill)]
}
const blk = (x: number, y: number, w: number, h: number): Rect[] => [r(x, y, w, h, B)]

function lowerBody(c: Character): Rect[] {
  if (c.kind === 'slime') {
    return [
      ...box(3, 12, 10, 9, D),
      r(2, 15, 1, 5, B),
      r(13, 15, 1, 5, B),
      r(6, 14, 1, 1, W), // shine
      r(5, 21, 1, 1, B),
      r(10, 21, 1, 1, B),
    ]
  }
  return [
    ...box(3, 10, 10, 6, D), // torso (dither)
    r(5, 10, 6, 0.9, B), // collar line
    ...blk(2, 11, 1, 5), // arms
    ...blk(13, 11, 1, 5),
    r(2, 16, 1, 1, W), // hands
    r(13, 16, 1, 1, W),
    ...blk(4, 16, 3, 6), // legs
    ...blk(9, 16, 3, 6),
    r(5, 17, 1, 4, W), // leg highlight
    r(10, 17, 1, 4, W),
    ...blk(3, 22, 4, 2), // feet
    ...blk(9, 22, 4, 2),
  ]
}

const plate = (x = 4, y = 3, w = 8, h = 7): Rect[] => [...box(x, y, w, h, W), ...box(7, 9, 2, 1.4, W)]

function head(c: Character): Rect[] {
  switch (c.kind) {
    case 'human':
      return [...blk(4, 2, 8, 2), r(4, 4, 1, 2, B), r(11, 4, 1, 2, B), ...plate()]
    case 'goldorak':
      return [
        ...blk(2, 3, 2, 1), r(2, 4, 1, 2, B),
        ...blk(12, 3, 2, 1), r(13, 4, 1, 2, B),
        ...blk(8, 0, 1, 3), r(7, 0, 3, 1, B),
        ...plate(),
        r(7, 2, 2, 1.4, B), // crest
        r(4, 4, 8, 0.7, B), // brow
      ]
    case 'ninja':
      return [
        ...blk(3, 2, 10, 2), ...blk(3, 4, 1, 6), ...blk(12, 4, 1, 6),
        ...plate(),
        r(3, 4, 10, 0.9, W), // headband (white stripe on black hood)
        r(3, 4, 10, 0.4, B),
        ...blk(12.6, 4, 1.4, 1), r(13.4, 5, 0.8, 2, B),
      ]
    case 'robot':
      return [
        ...blk(8, 0, 1, 3), r(7, 0, 2, 1, B),
        ...plate(),
        ...blk(3, 5, 1, 2), ...blk(12, 5, 1, 2),
        r(4, 4, 8, 0.7, B), r(5, 9, 6, 0.7, B),
      ]
    case 'alien':
      return [
        r(4, 0, 2, 1, B), r(5, 1, 1, 2, B),
        r(10, 0, 2, 1, B), r(10, 1, 1, 2, B),
        ...plate(3, 3, 10, 6),
        r(6.4, 0, 0.6, 0.6, W), r(10.4, 0, 0.6, 0.6, W), // antenna tips
      ]
    case 'cat':
      return [
        ...box(4, 1, 2.2, 2.2, W), ...box(10, 1, 2.2, 2.2, W), // ears (outlined)
        r(4.7, 1.6, 0.8, 0.8, B), r(10.5, 1.6, 0.8, 0.8, B),
        ...plate(),
        r(2, 7, 2, 0.5, B), r(12, 7, 2, 0.5, B), // whiskers
      ]
    case 'skeleton':
      return [...plate(), r(4, 7, 0.8, 2, B), r(11.2, 7, 0.8, 2, B), r(5, 10, 6, 0.8, B)]
    case 'wizard':
      return [
        ...blk(3, 3, 9, 1), ...blk(5, 2, 5, 1), ...blk(6, 1, 3, 1), ...blk(7, 0, 2, 1),
        r(8, 3, 0.8, 0.8, W), // star
        ...plate(4, 4, 8, 6),
      ]
    case 'monster':
      return [
        ...box(4, 1, 1.2, 2, W), ...box(10.8, 1, 1.2, 2, W), // horns
        r(4, 2, 1, 0.8, B), r(6, 2, 1, 0.8, B), r(8, 2, 1, 0.8, B), r(10, 2, 1, 0.8, B),
        ...plate(),
        r(5, 8, 1, 1, B), r(9, 7, 1, 1, B), // spots
      ]
    case 'cyborg':
      return [
        ...box(4, 3, 4.4, 7, W), // skin (left)
        ...box(8, 3, 4, 7, D), // metal (right, dither)
        r(8, 6, 4, 0.7, B), // visor line
        ...blk(11, 0, 1, 3), r(10, 0, 2, 1, B),
      ]
    case 'slime':
      return [...box(4, 4, 8, 6, D), r(5, 5, 1, 1, W)]
    case 'vampire':
      return [...blk(4, 2, 8, 1), r(4, 3, 1, 3, B), r(11, 3, 1, 3, B), r(7, 3, 2, 1, B), ...plate()]
  }
}

function backdrop(c: Character): Rect[] {
  if (c.kind === 'vampire') {
    return [...blk(1, 10, 3, 9), ...blk(12, 10, 3, 9), ...blk(3, 9, 2, 2), ...blk(11, 9, 2, 2)]
  }
  return []
}

export function PixelAvatar({ character, width = 48, className }: { character: Character; width?: number; className?: string }) {
  const all = [...backdrop(character), ...lowerBody(character), ...head(character)]
  return (
    <svg
      className={className}
      width={width}
      height={width * AVATAR_RATIO}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      shapeRendering="crispEdges"
      style={{ display: 'block', overflow: 'visible', imageRendering: 'pixelated' }}
      aria-hidden
    >
      {all.map((rc, i) => (
        <rect key={i} x={rc.x} y={rc.y} width={rc.w} height={rc.h} fill={rc.f} />
      ))}
    </svg>
  )
}
