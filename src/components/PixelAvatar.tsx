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
// stepped upward triangle (points up) made of black rects — reads as ear/horn/hat
const spikeUp = (cx: number, baseY: number, halfW: number, hgt: number, fill = B): Rect[] => {
  const out: Rect[] = []
  for (let i = 0; i < hgt; i++) {
    const w = Math.max(1, halfW * 2 - i * 2 + (i === hgt - 1 ? 0 : 0))
    out.push(r(cx - w / 2, baseY - i, w, 1, fill))
  }
  return out
}

function head(c: Character): Rect[] {
  switch (c.kind) {
    case 'human':
      return [
        ...blk(4, 2, 8, 2), // hair cap
        r(4, 4, 1, 2, B), r(11, 4, 1, 2, B), // sideburns
        r(5, 2, 6, 1, B),
        ...plate(),
      ]
    case 'goldorak':
      // mecha: big side wings + top antenna + face crest
      return [
        // left wing
        ...blk(0, 2, 2, 1), ...blk(0, 3, 3, 1), ...blk(1, 4, 2, 1), ...blk(2, 5, 1, 1),
        // right wing
        ...blk(12, 2, 2, 1), ...blk(11, 3, 3, 1), ...blk(11, 4, 2, 1), ...blk(11, 5, 1, 1),
        // antenna
        ...blk(7, 0, 2, 1), ...blk(8, 0, 1, 3),
        ...plate(),
        ...blk(7, 2, 2, 3), // central crest down the forehead
        r(4, 4, 8, 1, B), // brow bar
      ]
    case 'ninja': {
      // black balaclava hood framing the face + a bold headband with tails
      return [
        ...blk(3, 1, 10, 3), // hood top
        ...blk(3, 3, 1, 8), ...blk(12, 3, 1, 8), // hood sides
        ...blk(4, 9, 8, 2), // hood lower jaw wrap
        ...plate(4, 3, 8, 6),
        ...blk(4, 3, 8, 1.4), // headband band (black)
        r(7, 3.2, 2, 1, W), // metal plate on band
        // knot + tails flying to the right
        ...blk(12, 3, 2, 1), ...blk(13, 4, 1, 2), ...blk(13.5, 6, 1, 2),
      ]
    }
    case 'robot':
      // boxy head, antenna with ball, side bolts, brow + mouth grille
      return [
        ...blk(8, 0, 1, 3), ...box(7, 0, 3, 1.4, W), // antenna + ball
        ...blk(3.5, 3, 9, 7), // square black shell
        ...box(4.4, 3.8, 7.2, 5.4, W), // white face inset
        ...blk(3, 5, 1, 2), ...blk(12, 5, 1, 2), // bolts
        r(4.4, 4, 7.2, 1, B), // brow bar
        // mouth grille
        ...blk(5.5, 8.6, 5, 1.2), r(6.4, 8.9, 0.7, 0.6, W), r(7.9, 8.9, 0.7, 0.6, W), r(9.4, 8.9, 0.7, 0.6, W),
        ...box(7, 9, 2, 1.4, W),
      ]
    case 'alien':
      // wide bulbous head, tall antennae with bobbles, narrow chin
      return [
        ...blk(5, 1, 1, 2), ...box(4.4, 0, 2, 1.4, W), // left antenna + bobble
        ...blk(10, 1, 1, 2), ...box(9.6, 0, 2, 1.4, W), // right antenna + bobble
        ...box(2.5, 3, 11, 5, W), // very wide cranium
        ...box(4.5, 7.5, 7, 3, W), // narrowing chin
        ...box(7, 10, 2, 1.2, W),
      ]
    case 'cat':
      // big pointed ears (black w/ white inner) + long whiskers
      return [
        ...spikeUp(5.5, 4, 1.6, 4), // left ear (black triangle)
        ...spikeUp(10.5, 4, 1.6, 4), // right ear
        r(5, 1.5, 1, 1.4, W), r(10, 1.5, 1, 1.4, W), // white inner ear
        ...plate(),
        // whiskers, both sides
        ...blk(1, 6.5, 3, 0.9), ...blk(1, 8, 2.5, 0.9),
        ...blk(12, 6.5, 3, 0.9), ...blk(12.5, 8, 2.5, 0.9),
        r(7.5, 6.5, 1, 1, B), // little nose
      ]
    case 'skeleton':
      // clear skull: domed cranium, black eye sockets around the ascii, jaw + teeth
      return [
        ...box(4, 2, 8, 6, W), // cranium
        r(4, 7.5, 8, 0.6, B), // brow/cheek line
        ...blk(3.6, 6.5, 1.2, 2), ...blk(11.2, 6.5, 1.2, 2), // temple hollows
        ...box(5, 8, 6, 3, W), // jaw
        r(6, 10, 0.7, 1, B), r(7.6, 10, 0.7, 1, B), r(9.3, 10, 0.7, 1, B), // teeth gaps
      ]
    case 'wizard': {
      // tall pointed hat with brim, band + star, and a beard
      return [
        ...spikeUp(8, 3, 4, 4, B), // cone
        ...blk(2.5, 3, 11, 1), // wide brim
        r(4, 3, 8, 1, B),
        r(7.4, 1.6, 1.2, 1.2, W), // star
        ...plate(4, 4, 8, 5),
        ...box(4.5, 8, 7, 2.5, W), // beard
        r(5, 9, 6, 0.6, B),
      ]
    }
    case 'monster':
      // big curved horns + jagged brow + fangs
      return [
        ...blk(3, 0, 1, 3), ...blk(2.5, 0, 1.5, 1), // left horn curling out
        ...blk(12, 0, 1, 3), ...blk(12, 0, 1.5, 1), // right horn
        r(4.5, 2, 1, 1, B), r(6.5, 2, 1, 1, B), r(8.5, 2, 1, 1, B), r(10.5, 2, 1, 1, B), // fur spikes
        ...plate(),
        r(5, 8, 1, 1.2, B), r(10, 8, 1, 1.2, B), // fangs at mouth corners
        r(5.5, 7.5, 0.9, 0.9, B), // spot
      ]
    case 'cyborg':
      // split head: white skin | dither metal with a visor + antenna
      return [
        ...box(4, 3, 4, 7, W), // skin half
        ...box(8, 3, 4, 7, D), // metal half
        r(8, 3, 4, 1, B), // top plate seam
        ...blk(8, 5.4, 4, 1.4), r(9, 5.7, 2.4, 0.8, W), // glowing visor
        ...blk(11.4, 0, 1, 3), ...box(10.6, 0, 2, 1.2, W), // antenna
        r(12, 7, 0.9, 1, B), // bolt
      ]
    case 'slime':
      // rounded blob head with an eye-stalk antenna
      return [
        ...blk(9, 0, 1, 3), ...box(8, 0, 2.2, 2, W), r(8.7, 0.7, 0.7, 0.7, B), // eye stalk
        ...box(3.5, 4, 9, 6, W), // rounded white face
        r(4, 4, 8, 0.8, B), // top shading line
        r(5, 5, 1, 1, W),
      ]
    case 'vampire':
      // slicked hair with a sharp widow's peak + pointed ears (collar in backdrop)
      return [
        ...blk(4, 2, 8, 1), // hairline
        ...blk(4, 2, 1, 4), ...blk(11, 2, 1, 4), // temples
        ...blk(6.5, 2, 3, 1), ...blk(7, 3, 2, 1.4), ...blk(7.5, 4, 1, 1), // widow's peak
        ...spikeUp(3.5, 6, 0.8, 2), ...spikeUp(12.5, 6, 0.8, 2), // pointed ears
        ...plate(),
        r(6, 8, 0.8, 1.2, B), r(9.2, 8, 0.8, 1.2, B), // fangs
      ]
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
