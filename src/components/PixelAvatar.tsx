import type { Character } from '../data/looks'

// Front-view "kawaii" character: big rounded head, chubby body, soft shading,
// rosy cheeks and a dark outline. Colour comes from the character palette; the
// animated ASCII expression is overlaid on the face by <Character/>.

const VIEW_W = 24
const VIEW_H = 30
export const AVATAR_RATIO = VIEW_H / VIEW_W // 1.25

function sh(hex: string, amt: number): string {
  const n = hex.replace('#', '')
  const v = n.length === 3 ? n.split('').map((c) => c + c).join('') : n
  const num = parseInt(v, 16)
  const ch = (c: number) => Math.max(0, Math.min(255, Math.round(amt < 0 ? c + (255 - c) * -amt : c * (1 - amt))))
  return `#${[ch((num >> 16) & 255), ch((num >> 8) & 255), ch(num & 255)].map((c) => c.toString(16).padStart(2, '0')).join('')}`
}

const OUT = 0.9 // outline width in user units

function Body({ c }: { c: Character }) {
  const dOut = sh(c.outfit, 0.4)
  const dPant = sh(c.pants, 0.4)
  return (
    <g stroke={dOut} strokeWidth={OUT} strokeLinejoin="round">
      {/* legs */}
      <rect x="8" y="23.5" width="3.4" height="5.5" rx="1.6" fill={c.pants} stroke={dPant} />
      <rect x="12.6" y="23.5" width="3.4" height="5.5" rx="1.6" fill={c.pants} stroke={dPant} />
      {/* feet */}
      <ellipse cx="9.3" cy="29" rx="2.4" ry="1.4" fill={sh(c.pants, 0.5)} stroke={dPant} />
      <ellipse cx="14.7" cy="29" rx="2.4" ry="1.4" fill={sh(c.pants, 0.5)} stroke={dPant} />
      {/* arms */}
      <rect x="3" y="16.5" width="3.6" height="7" rx="1.8" fill={c.outfit} />
      <rect x="17.4" y="16.5" width="3.6" height="7" rx="1.8" fill={c.outfit} />
      <circle cx="4.8" cy="23" r="1.7" fill={c.face} stroke={sh(c.face, 0.35)} />
      <circle cx="19.2" cy="23" r="1.7" fill={c.face} stroke={sh(c.face, 0.35)} />
      {/* body */}
      <rect x="6" y="15.5" width="12" height="10" rx="4.2" fill={c.outfit} />
      <rect x="6" y="15.5" width="12" height="4" rx="4.2" fill={sh(c.outfit, -0.16)} stroke="none" />
      {/* collar accent */}
      <path d="M9 16 L12 19 L15 16 Z" fill={c.outfit2} stroke={sh(c.outfit2, 0.3)} strokeWidth="0.6" />
    </g>
  )
}

function Head({ c }: { c: Character }) {
  const dFace = sh(c.face, 0.34)
  return (
    <g stroke={dFace} strokeWidth={OUT} strokeLinejoin="round">
      <rect x="2.5" y="3" width="19" height="15" rx="6.5" fill={c.face} />
      {/* soft top highlight */}
      <ellipse cx="8" cy="7" rx="4.5" ry="3" fill="rgba(255,255,255,0.30)" stroke="none" />
      {/* rosy cheeks */}
      <ellipse cx="6.6" cy="12.4" rx="2" ry="1.3" fill="rgba(255,120,140,0.55)" stroke="none" />
      <ellipse cx="17.4" cy="12.4" rx="2" ry="1.3" fill="rgba(255,120,140,0.55)" stroke="none" />
    </g>
  )
}

// per-kind toppers drawn BEHIND the head (hair, hats, ears, antennae, wings)
function BehindHead({ c }: { c: Character }) {
  const e = c.extra
  const dE = sh(e, 0.35)
  const S = { stroke: dE, strokeWidth: OUT, strokeLinejoin: 'round' as const }
  switch (c.kind) {
    case 'human':
      return <g {...S}><path d="M3 8 Q3 1 12 1 Q21 1 21 8 L21 6 Q12 -1 3 6 Z" fill={e} /></g>
    case 'goldorak':
      return (
        <g {...S}>
          <path d="M2 3 L-1 6 L4 9 Z" fill={e} />
          <path d="M22 3 L25 6 L20 9 Z" fill={e} />
          <rect x="11" y="-1" width="2" height="4" rx="1" fill={sh(e, 0.2)} />
          <circle cx="12" cy="-1.5" r="1.6" fill={e} />
        </g>
      )
    case 'ninja':
      return <g {...S}><path d="M2 9 Q2 0 12 0 Q22 0 22 9 L22 5 Q12 -1 2 5 Z" fill={sh(c.outfit2, 0.35)} /></g>
    case 'robot':
      return <g {...S}><rect x="11.2" y="-2" width="1.6" height="4" fill={sh(e, 0.2)} /><circle cx="12" cy="-2.5" r="1.7" fill={e} /></g>
    case 'alien':
      return (
        <g {...S}>
          <rect x="7" y="-3" width="1.4" height="5" rx="0.7" fill={sh(c.face, 0.3)} />
          <rect x="15.6" y="-3" width="1.4" height="5" rx="0.7" fill={sh(c.face, 0.3)} />
          <circle cx="7.7" cy="-3.5" r="1.8" fill={e} />
          <circle cx="16.3" cy="-3.5" r="1.8" fill={e} />
        </g>
      )
    case 'cat':
      return (
        <g {...S}>
          <path d="M4 5 L5 -1 L10 3 Z" fill={c.face} />
          <path d="M20 5 L19 -1 L14 3 Z" fill={c.face} />
          <path d="M5.4 3.5 L6 0.5 L8.2 2.8 Z" fill={sh(e, -0.1)} stroke="none" />
          <path d="M18.6 3.5 L18 0.5 L15.8 2.8 Z" fill={sh(e, -0.1)} stroke="none" />
        </g>
      )
    case 'wizard':
      return (
        <g {...S}>
          <path d="M12 -6 L18 6 L6 6 Z" fill={c.outfit2} stroke={sh(c.outfit2, 0.35)} />
          <rect x="4" y="5" width="16" height="2.4" rx="1.2" fill={c.outfit2} stroke={sh(c.outfit2, 0.35)} />
          <path d="M12 -1 l0.9 1.8 2 .3 -1.45 1.4 .35 2 -1.8 -.95 -1.8 .95 .35 -2 -1.45 -1.4 2 -.3 Z" fill="#ffe066" stroke="#e0a800" strokeWidth="0.4" />
        </g>
      )
    case 'monster':
      return (
        <g {...S}>
          <path d="M4 4 Q2 -2 6 -1 L6 4 Z" fill="#f4efe0" stroke="#cbb98a" />
          <path d="M20 4 Q22 -2 18 -1 L18 4 Z" fill="#f4efe0" stroke="#cbb98a" />
        </g>
      )
    case 'vampire':
      return <g {...S}><path d="M3 8 L3 3 Q12 -1 21 3 L21 8 L12 4 Z" fill={e} /></g>
    case 'skeleton':
    case 'cyborg':
    case 'slime':
    default:
      return null
  }
}

// per-kind extras drawn ON TOP of the head (visors, headbands, ears inner, fangs)
function FrontHead({ c }: { c: Character }) {
  switch (c.kind) {
    case 'ninja':
      return (
        <g stroke={sh(c.outfit2, 0.35)} strokeWidth="0.5">
          <rect x="2.5" y="6.5" width="19" height="2.6" fill={c.outfit2} />
          <rect x="10.5" y="6.7" width="3" height="2.2" fill="#e7ecf5" stroke="#b7c0cc" />
          <path d="M21 7 l4 -1 l-1 3 Z" fill={c.outfit2} />
        </g>
      )
    case 'robot':
      return (
        <g>
          <circle cx="5.4" cy="11.5" r="1.2" fill={sh(c.face, 0.4)} />
          <circle cx="18.6" cy="11.5" r="1.2" fill={sh(c.face, 0.4)} />
          <rect x="8" y="14.5" width="8" height="1.6" rx="0.8" fill={sh(c.face, 0.45)} />
        </g>
      )
    case 'cyborg':
      return (
        <g stroke="#7a8492" strokeWidth="0.6" strokeLinejoin="round">
          <path d="M12 3 L21.5 3 A6.5 6.5 0 0 1 21.5 18 L12 18 Z" fill="#c3ccd8" opacity="0.96" />
          <rect x="13" y="9.5" width="7.5" height="1.8" rx="0.9" fill="#ff5a5f" stroke="#b02a2f" />
          <circle cx="18.5" cy="6" r="0.9" fill="#7a8492" />
        </g>
      )
    case 'vampire':
      return <g><path d="M9.5 14 l1 2 1 -2 Z" fill="#fff" /><path d="M13.5 14 l1 2 1 -2 Z" fill="#fff" /></g>
    case 'monster':
      return <g><path d="M8 14 l1 2 1 -2 Z" fill="#fff" /><path d="M14 14 l1 2 1 -2 Z" fill="#fff" /></g>
    case 'skeleton':
      return <g stroke="#c9ccd2" strokeWidth="0.5"><path d="M9 16 l0 2 M12 16 l0 2 M15 16 l0 2" /></g>
    case 'slime':
      return (
        <g stroke={sh(c.face, 0.32)} strokeWidth={OUT}>
          <rect x="10.5" y="-2.5" width="1.2" height="3" rx="0.6" fill={sh(c.face, 0.25)} />
          <circle cx="11.1" cy="-3" r="1.5" fill="#fff" stroke={sh(c.face, 0.32)} />
          <circle cx="11.1" cy="-3" r="0.6" fill="#333" stroke="none" />
        </g>
      )
    default:
      return null
  }
}

export function PixelAvatar({ character, width = 48, className }: { character: Character; width?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={width}
      height={width * AVATAR_RATIO}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      style={{ display: 'block', overflow: 'visible' }}
      aria-hidden
    >
      <BehindHead c={character} />
      <Body c={character} />
      <Head c={character} />
      <FrontHead c={character} />
    </svg>
  )
}
