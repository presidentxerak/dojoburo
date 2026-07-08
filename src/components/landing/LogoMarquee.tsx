import { CONNECTORS } from '../../data/connectors'

// A left-to-right animated banner of the rails and every app connector. Shown
// in light grey (a clean, uniform strip) and each brand swaps to its own colour
// on hover. Purely decorative · the track is duplicated for a seamless loop.

interface Brand { id: string; label: string; mono: string; color: string }

const RAILS: Brand[] = [
  { id: 'xrpl', label: 'XRP Ledger', mono: 'XRPL', color: '#23c1d6' },
  { id: 'x402', label: 'x402', mono: '402', color: '#ff2d9b' },
]

// give each brand a stable colour for the hover swap
const PALETTE = ['#2f6bff', '#08c2ac', '#ff7a1a', '#a06bff', '#ff2d9b', '#ffc61a', '#e0524f', '#2fae60']
function colorFor(id: string, i: number): string {
  let h = 0
  for (let k = 0; k < id.length; k++) h = (h << 5) - h + id.charCodeAt(k)
  return PALETTE[(Math.abs(h) + i) % PALETTE.length]
}

const BRANDS: Brand[] = [
  ...RAILS,
  ...CONNECTORS.map((c, i) => ({
    id: c.id,
    label: c.label,
    mono: c.label.replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase(),
    color: colorFor(c.id, i),
  })),
]

function Chip({ b }: { b: Brand }) {
  return (
    <span className="lm-chip" style={{ ['--bc' as any]: b.color }}>
      <span className="lm-mono">{b.mono}</span>
      <span className="lm-label">{b.label}</span>
    </span>
  )
}

/** The scrolling brand strip. Rendered twice inside the track for a seamless loop. */
export function LogoMarquee() {
  return (
    <div className="lm" aria-hidden>
      <div className="lm-track">
        {BRANDS.map((b) => <Chip key={`a-${b.id}`} b={b} />)}
        {BRANDS.map((b) => <Chip key={`b-${b.id}`} b={b} />)}
      </div>
    </div>
  )
}
