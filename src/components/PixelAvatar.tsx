import type { Look, HairStyle, Accessory } from '../data/looks'

// A 16x16 pixel character built from <rect>s. Crisp at any scale.
type Rect = { x: number; y: number; w: number; h: number; f: string }
const r = (x: number, y: number, w: number, h: number, f: string): Rect => ({ x, y, w, h, f })

function darken(hex: string, amt = 0.22): string {
  const n = hex.replace('#', '')
  const v = n.length === 3 ? n.split('').map((c) => c + c).join('') : n
  const num = parseInt(v, 16)
  const rr = Math.max(0, ((num >> 16) & 255) * (1 - amt))
  const gg = Math.max(0, ((num >> 8) & 255) * (1 - amt))
  const bb = Math.max(0, (num & 255) * (1 - amt))
  return `#${[rr, gg, bb].map((c) => Math.round(c).toString(16).padStart(2, '0')).join('')}`
}

function hairRects(style: HairStyle, hair: string): Rect[] {
  const h = hair
  const hd = darken(hair, 0.25)
  switch (style) {
    case 'buzz':
      return [r(5, 2, 6, 1, h), r(4, 3, 1, 1, hd), r(11, 3, 1, 1, hd)]
    case 'short':
      return [r(4, 2, 8, 2, h), r(4, 4, 1, 2, hd), r(11, 4, 1, 2, hd)]
    case 'long':
      return [r(4, 2, 8, 2, h), r(3, 3, 1, 8, h), r(12, 3, 1, 8, h), r(4, 4, 1, 4, hd), r(11, 4, 1, 4, hd)]
    case 'ponytail':
      return [r(4, 2, 8, 2, h), r(4, 4, 1, 2, hd), r(11, 4, 1, 2, hd), r(12, 2, 2, 1, h), r(13, 3, 1, 5, h), r(13, 8, 1, 1, hd)]
    case 'bun':
      return [r(4, 2, 8, 2, h), r(6, 0, 4, 2, h), r(7, 0, 2, 1, darken(hair, -0.1)), r(4, 4, 1, 2, hd), r(11, 4, 1, 2, hd)]
    case 'spiky':
      return [r(4, 2, 8, 1, h), r(4, 1, 1, 1, h), r(6, 0, 1, 2, h), r(8, 1, 1, 1, h), r(9, 0, 1, 2, h), r(11, 1, 1, 1, h)]
    case 'afro':
      return [r(3, 0, 10, 3, h), r(2, 2, 1, 4, h), r(13, 2, 1, 4, h), r(4, 3, 8, 1, hd)]
    case 'mohawk':
      return [r(7, 0, 2, 4, h), r(7, 0, 2, 1, darken(hair, -0.15)), r(6, 2, 1, 1, hd), r(9, 2, 1, 1, hd)]
    case 'beanie':
      return [r(4, 1, 8, 2, h), r(4, 3, 8, 1, darken(hair, -0.12)), r(5, 0, 6, 1, h)]
    case 'cap':
      return [r(4, 2, 8, 2, h), r(4, 3, 9, 1, hd), r(11, 3, 3, 1, h), r(6, 1, 4, 1, h)]
    case 'hijab':
      return [r(3, 1, 10, 3, h), r(3, 4, 1, 7, h), r(12, 4, 1, 7, h), r(4, 3, 8, 1, hd), r(4, 10, 1, 2, hd)]
    case 'bald':
      return [r(5, 3, 6, 1, 'rgba(255,255,255,0.12)')]
  }
}

function accessoryRects(acc: Accessory, look: Look): Rect[] {
  const dark = '#1c1f2b'
  switch (acc) {
    case 'glasses':
      return [r(5, 6, 2, 1, dark), r(8, 6, 2, 1, dark), r(7, 6, 1, 1, dark), r(5, 5, 2, 1, dark), r(8, 5, 2, 1, dark)]
    case 'shades':
      return [r(5, 5, 2, 2, dark), r(8, 5, 2, 2, dark), r(7, 6, 1, 1, dark)]
    case 'headset':
      return [r(4, 2, 8, 1, dark), r(3, 5, 1, 3, dark), r(3, 8, 3, 1, dark), r(5, 9, 1, 1, look.outfit2)]
    case 'monocle':
      return [r(8, 5, 2, 1, dark), r(8, 7, 2, 1, dark), r(10, 6, 1, 1, dark), r(7, 6, 1, 1, dark)]
    case 'earrings':
      return [r(4, 8, 1, 1, '#ffd23b'), r(11, 8, 1, 1, '#ffd23b')]
    case 'tie':
      return [r(7, 11, 2, 1, look.outfit2), r(7, 12, 2, 3, darken(look.outfit2, 0.1))]
    case 'none':
      return []
  }
}

export function PixelAvatar({ look, size = 64, className }: { look: Look; size?: number; className?: string }) {
  const skin = look.skin
  const skinShade = darken(skin, 0.14)
  const eye = '#20242f'
  const mouth = darken(skin, 0.4)
  const outfit = look.outfit
  const outfitShade = darken(outfit, 0.2)

  const rects: Rect[] = [
    // back hair for long styles is included via hairRects
    // face
    r(5, 3, 6, 7, skin),
    r(4, 4, 1, 4, skin),
    r(11, 4, 1, 4, skin),
    // ears
    r(4, 6, 1, 2, skinShade),
    r(11, 6, 1, 2, skinShade),
    // cheeks shade
    r(5, 9, 6, 1, skinShade),
    // eyes
    r(6, 6, 1, 1, eye),
    r(9, 6, 1, 1, eye),
    // blush
    r(5, 8, 1, 1, 'rgba(240,120,120,0.35)'),
    r(10, 8, 1, 1, 'rgba(240,120,120,0.35)'),
    // mouth
    r(7, 8, 2, 1, mouth),
    // neck
    r(7, 10, 2, 1, skinShade),
    // shoulders / torso
    r(3, 11, 10, 5, outfit),
    r(3, 11, 10, 1, darken(outfit, -0.12)),
    // arms
    r(3, 12, 1, 4, outfitShade),
    r(12, 12, 1, 4, outfitShade),
    // collar
    r(6, 11, 4, 1, look.outfit2),
    r(7, 11, 2, 2, skin), // neck V
  ]

  const all = [...hairRects(look.hairStyle, look.hair), ...rects, ...accessoryRects(look.accessory, look)]

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      style={{ imageRendering: 'pixelated', display: 'block' }}
      aria-hidden
    >
      {all.map((rc, i) => (
        <rect key={i} x={rc.x} y={rc.y} width={rc.w} height={rc.h} fill={rc.f} />
      ))}
    </svg>
  )
}
