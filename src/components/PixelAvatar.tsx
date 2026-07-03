import type { Character } from '../data/looks'

// Full-body character on a 16x24 grid, built from <rect>s. Anti-aliased.
// No eyes/mouth — the ASCII expression is overlaid by <Character/>.
type Rect = { x: number; y: number; w: number; h: number; f: string }
const r = (x: number, y: number, w: number, h: number, f: string): Rect => ({ x, y, w, h, f })

const VIEW_W = 16
const VIEW_H = 24
export const AVATAR_RATIO = VIEW_H / VIEW_W // 1.5

function shade(hex: string, amt: number): string {
  const n = hex.replace('#', '')
  const v = n.length === 3 ? n.split('').map((c) => c + c).join('') : n
  const num = parseInt(v, 16)
  const ch = (c: number) => Math.max(0, Math.min(255, Math.round(c * (1 - amt))))
  return `#${[ch((num >> 16) & 255), ch((num >> 8) & 255), ch(num & 255)]
    .map((c) => c.toString(16).padStart(2, '0'))
    .join('')}`
}

// ---- lower body ----------------------------------------------------------
function lowerBody(c: Character): Rect[] {
  const o = c.outfit
  const shoe = shade(c.pants, 0.45)
  if (c.kind === 'slime') {
    // one rounded blob, no limbs
    return [
      r(3, 12, 10, 8, c.face),
      r(4, 11, 8, 1, c.face),
      r(2, 14, 1, 5, c.face),
      r(13, 14, 1, 5, c.face),
      r(3, 12, 10, 1, shade(c.face, -0.12)),
      r(5, 19, 1, 2, c.face), // drip
      r(10, 19, 1, 2, c.face),
      r(6, 13, 1, 1, '#ffffff'), // shine
    ]
  }
  return [
    // torso
    r(3, 10, 10, 6, o),
    r(3, 10, 10, 1, shade(o, -0.16)), // shoulder highlight
    r(5, 10, 6, 1, c.outfit2), // collar
    // arms
    r(2, 11, 1, 5, shade(o, 0.18)),
    r(13, 11, 1, 5, shade(o, 0.18)),
    r(2, 16, 1, 1, c.face), // hands
    r(13, 16, 1, 1, c.face),
    // legs
    r(4, 16, 3, 6, c.pants),
    r(9, 16, 3, 6, c.pants),
    r(4, 16, 3, 1, shade(c.pants, -0.12)),
    r(9, 16, 3, 1, shade(c.pants, -0.12)),
    // feet
    r(3, 22, 4, 2, shoe),
    r(9, 22, 4, 2, shoe),
  ]
}

// ---- head plate ----------------------------------------------------------
function plate(color: string, x = 4, y = 3, w = 8, h = 7): Rect[] {
  return [
    r(x, y, w, h, color),
    r(x, y, w, 1, shade(color, -0.1)),
    r(x, y + h - 1, w, 1, shade(color, 0.12)),
    r(7, 9, 2, 1, shade(color, 0.14)), // neck
  ]
}

function head(c: Character): Rect[] {
  const f = c.face
  const e = c.extra
  switch (c.kind) {
    case 'human':
      return [r(4, 2, 8, 2, e), r(4, 4, 1, 2, shade(e, 0.2)), r(11, 4, 1, 2, shade(e, 0.2)), ...plate(f)]
    case 'goldorak':
      return [
        r(2, 3, 2, 1, e), r(2, 4, 1, 2, shade(e, 0.15)),
        r(12, 3, 2, 1, e), r(13, 4, 1, 2, shade(e, 0.15)),
        r(8, 0, 1, 3, '#8b93a1'), r(7, 0, 3, 1, e),
        ...plate(f),
        r(7, 2, 2, 2, e),
        r(4, 4, 8, 1, shade(f, 0.18)),
      ]
    case 'ninja':
      return [
        r(3, 2, 10, 2, e), r(3, 4, 1, 6, e), r(12, 4, 1, 6, e),
        ...plate(f),
        r(3, 4, 10, 1, c.outfit2), r(12, 4, 2, 1, c.outfit2), r(13, 5, 1, 2, c.outfit2),
      ]
    case 'robot':
      return [
        r(8, 0, 1, 3, '#8b93a1'), r(7, 0, 2, 1, e),
        ...plate(f),
        r(3, 5, 1, 2, shade(f, 0.25)), r(12, 5, 1, 2, shade(f, 0.25)),
        r(4, 4, 8, 1, shade(f, 0.22)), r(5, 9, 6, 1, shade(f, 0.15)),
      ]
    case 'alien':
      return [
        r(4, 0, 2, 1, e), r(5, 1, 1, 2, shade(f, 0.1)),
        r(10, 0, 2, 1, e), r(10, 1, 1, 2, shade(f, 0.1)),
        ...plate(f, 3, 3, 10, 6),
        r(5, 9, 6, 1, f), r(6, 10, 4, 1, shade(f, 0.12)),
      ]
    case 'cat':
      return [
        r(4, 1, 2, 2, f), r(4, 1, 1, 1, e),
        r(10, 1, 2, 2, f), r(11, 1, 1, 1, e),
        ...plate(f),
        r(2, 7, 2, 1, shade(f, -0.3)), r(12, 7, 2, 1, shade(f, -0.3)),
      ]
    case 'skeleton':
      return [r(5, 2, 6, 1, f), ...plate(f), r(4, 7, 1, 2, shade(f, 0.14)), r(11, 7, 1, 2, shade(f, 0.14)), r(5, 10, 6, 1, f)]
    case 'wizard':
      return [
        r(3, 3, 9, 1, c.outfit2), r(5, 2, 5, 1, c.outfit2), r(6, 1, 3, 1, c.outfit2), r(7, 0, 2, 1, c.outfit2),
        r(8, 3, 1, 1, e),
        ...plate(f, 4, 4, 8, 6),
      ]
    case 'monster':
      return [
        r(4, 1, 1, 2, '#f2efe4'), r(11, 1, 1, 2, '#f2efe4'),
        r(4, 2, 1, 1, e), r(6, 2, 1, 1, e), r(8, 2, 1, 1, e), r(10, 2, 1, 1, e),
        ...plate(f),
        r(5, 8, 1, 1, shade(f, 0.25)), r(9, 7, 1, 1, shade(f, 0.25)),
      ]
    case 'cyborg':
      return [
        ...plate(f, 4, 3, 4, 7),
        r(8, 3, 4, 7, '#b7c0cc'), r(8, 3, 4, 1, '#8b93a1'), r(8, 6, 4, 1, e),
        r(11, 0, 1, 3, '#8b93a1'), r(10, 0, 2, 1, '#d8232a'), r(12, 5, 1, 2, '#8b93a1'),
      ]
    case 'slime':
      return [r(5, 3, 6, 1, c.face), ...plate(c.face, 4, 4, 8, 6), r(5, 4, 1, 1, '#ffffff')]
    case 'vampire':
      return [r(4, 2, 8, 1, e), r(4, 3, 1, 3, e), r(11, 3, 1, 3, e), r(7, 3, 2, 1, e), ...plate(f)]
  }
}

function backdrop(c: Character): Rect[] {
  if (c.kind === 'vampire') {
    return [r(1, 10, 3, 9, c.outfit2), r(12, 10, 3, 9, c.outfit2), r(3, 9, 2, 2, c.outfit2), r(11, 9, 2, 2, c.outfit2)]
  }
  return []
}

export function PixelAvatar({
  character,
  width = 48,
  className,
}: {
  character: Character
  width?: number
  className?: string
}) {
  const all = [...backdrop(character), ...lowerBody(character), ...head(character)]
  return (
    <svg
      className={className}
      width={width}
      height={width * AVATAR_RATIO}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      style={{ display: 'block', overflow: 'visible' }}
      aria-hidden
    >
      {all.map((rc, i) => (
        <rect key={i} x={rc.x} y={rc.y} width={rc.w} height={rc.h} fill={rc.f} />
      ))}
    </svg>
  )
}
