import type { Character } from '../data/looks'

// 16x16 character built from <rect>s. Anti-aliased (no crispEdges). Carries no
// eyes/mouth — the ASCII expression is overlaid by <Character/>.
type Rect = { x: number; y: number; w: number; h: number; f: string }
const r = (x: number, y: number, w: number, h: number, f: string): Rect => ({ x, y, w, h, f })

function shade(hex: string, amt: number): string {
  // amt < 0 lightens, > 0 darkens
  const n = hex.replace('#', '')
  const v = n.length === 3 ? n.split('').map((c) => c + c).join('') : n
  const num = parseInt(v, 16)
  const ch = (c: number) => Math.max(0, Math.min(255, Math.round(c * (1 - amt))))
  const rr = ch((num >> 16) & 255)
  const gg = ch((num >> 8) & 255)
  const bb = ch(num & 255)
  return `#${[rr, gg, bb].map((c) => c.toString(16).padStart(2, '0')).join('')}`
}

// Shared torso. `noArms` for slime.
function body(c: Character, noArms = false): Rect[] {
  const o = c.outfit
  const rects: Rect[] = [
    r(3, 11, 10, 5, o),
    r(3, 11, 10, 1, shade(o, -0.16)), // shoulder highlight
    r(5, 11, 6, 1, c.outfit2), // collar
    r(7, 10, 2, 1, shade(c.face, 0.12)), // neck
  ]
  if (!noArms) {
    rects.push(r(3, 12, 1, 4, shade(o, 0.2)), r(12, 12, 1, 4, shade(o, 0.2)))
  }
  return rects
}

// Default oval-ish head plate; face-centre stays around (8,6) for every kind so
// the ASCII overlay lines up.
function plate(color: string, x = 4, y = 3, w = 8, h = 7): Rect[] {
  return [
    r(x, y, w, h, color),
    r(x, y, w, 1, shade(color, -0.1)),
    r(x, y + h - 1, w, 1, shade(color, 0.12)),
  ]
}

function head(c: Character): Rect[] {
  const f = c.face
  const e = c.extra
  switch (c.kind) {
    case 'human':
      return [
        r(4, 2, 8, 2, e), // hair
        r(4, 4, 1, 2, shade(e, 0.2)),
        r(11, 4, 1, 2, shade(e, 0.2)),
        ...plate(f, 4, 3, 8, 7),
      ]
    case 'goldorak':
      return [
        r(2, 3, 2, 1, e), r(2, 4, 1, 2, shade(e, 0.15)), // left fin
        r(12, 3, 2, 1, e), r(13, 4, 1, 2, shade(e, 0.15)), // right fin
        r(8, 0, 1, 3, '#8b93a1'), r(7, 0, 3, 1, e), // antenna + tip
        ...plate(f, 4, 3, 8, 7),
        r(7, 2, 2, 2, e), // gold crest
        r(4, 4, 8, 1, shade(f, 0.18)), // brow bar
      ]
    case 'ninja':
      return [
        r(3, 2, 10, 2, e), // hood top
        r(3, 4, 1, 6, e), r(12, 4, 1, 6, e), // hood sides
        ...plate(f, 4, 3, 8, 7),
        r(3, 4, 10, 1, c.outfit2), // headband
        r(12, 4, 2, 1, c.outfit2), r(13, 5, 1, 2, c.outfit2), // knot tails
      ]
    case 'robot':
      return [
        r(8, 0, 1, 3, '#8b93a1'), r(7, 0, 2, 1, e), // antenna
        ...plate(f, 4, 3, 8, 7),
        r(3, 5, 1, 2, shade(f, 0.25)), r(12, 5, 1, 2, shade(f, 0.25)), // ears/bolts
        r(4, 4, 8, 1, shade(f, 0.22)), // brow panel
        r(5, 9, 6, 1, shade(f, 0.15)), // grille
      ]
    case 'alien':
      return [
        r(4, 0, 2, 1, e), r(5, 1, 1, 2, shade(f, 0.1)), // left antenna
        r(10, 0, 2, 1, e), r(10, 1, 1, 2, shade(f, 0.1)), // right antenna
        ...plate(f, 3, 3, 10, 6), // wide head
        r(5, 9, 6, 1, f), // tapered chin
        r(6, 10, 4, 1, shade(f, 0.12)),
      ]
    case 'cat':
      return [
        r(4, 1, 2, 2, f), r(4, 1, 1, 1, e), // left ear
        r(10, 1, 2, 2, f), r(11, 1, 1, 1, e), // right ear
        ...plate(f, 4, 3, 8, 7),
        r(2, 7, 2, 1, shade(f, -0.3)), r(12, 7, 2, 1, shade(f, -0.3)), // whiskers
      ]
    case 'skeleton':
      return [
        r(5, 2, 6, 1, f), // cranium dome
        ...plate(f, 4, 3, 8, 7),
        r(4, 7, 1, 2, shade(f, 0.14)), r(11, 7, 1, 2, shade(f, 0.14)), // cheek hollows
        r(5, 10, 6, 1, f), // jaw
      ]
    case 'wizard':
      return [
        // pointy hat
        r(3, 3, 9, 1, c.outfit2),
        r(5, 2, 5, 1, c.outfit2),
        r(6, 1, 3, 1, c.outfit2),
        r(7, 0, 2, 1, c.outfit2),
        r(8, 3, 1, 1, e), // star on hat
        ...plate(f, 4, 4, 8, 6),
      ]
    case 'monster':
      return [
        r(4, 1, 1, 2, '#f2efe4'), r(11, 1, 1, 2, '#f2efe4'), // horns
        r(4, 2, 1, 1, e), r(6, 2, 1, 1, e), r(8, 2, 1, 1, e), r(10, 2, 1, 1, e), // fur spikes
        ...plate(f, 4, 3, 8, 7),
        r(5, 8, 1, 1, shade(f, 0.25)), r(9, 7, 1, 1, shade(f, 0.25)), // spots
      ]
    case 'cyborg':
      return [
        ...plate(f, 4, 3, 4, 7), // left skin half
        r(8, 3, 4, 7, '#b7c0cc'), // right metal half
        r(8, 3, 4, 1, '#8b93a1'),
        r(8, 6, 4, 1, e), // red visor line uses extra
        r(11, 0, 1, 3, '#8b93a1'), r(10, 0, 2, 1, '#d8232a'), // antenna
        r(12, 5, 1, 2, '#8b93a1'), // bolt
      ]
    case 'slime':
      return [
        r(5, 3, 6, 1, c.face), // rounded top
        ...plate(c.face, 4, 4, 8, 6),
        r(5, 4, 1, 1, '#ffffff'), // shine
        r(5, 15, 1, 1, c.face), r(9, 15, 1, 1, c.face), // drips
      ]
    case 'vampire':
      return [
        // slicked hair with widow's peak
        r(4, 2, 8, 1, e),
        r(4, 3, 1, 3, e), r(11, 3, 1, 3, e),
        r(7, 3, 2, 1, e),
        ...plate(f, 4, 3, 8, 7),
      ]
  }
}

// Bits drawn BEHIND the body (capes, slime base).
function backdrop(c: Character): Rect[] {
  if (c.kind === 'vampire') {
    return [
      r(1, 11, 3, 5, c.outfit2), r(12, 11, 3, 5, c.outfit2), // cape
      r(3, 10, 2, 2, c.outfit2), r(11, 10, 2, 2, c.outfit2), // high collar
    ]
  }
  return []
}

export function PixelAvatar({ character, size = 64, className }: { character: Character; size?: number; className?: string }) {
  const noArms = character.kind === 'slime'
  const all = [...backdrop(character), ...body(character, noArms), ...head(character)]
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      style={{ display: 'block', overflow: 'visible' }}
      aria-hidden
    >
      {all.map((rc, i) => (
        <rect key={i} x={rc.x} y={rc.y} width={rc.w} height={rc.h} fill={rc.f} />
      ))}
    </svg>
  )
}
