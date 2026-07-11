import { CONNECTORS } from '../../data/connectors'
import { ConnectorLogo, connectorColor } from '../ConnectorLogo'

// A left-to-right animated banner of the rails and every app connector. Each app
// shows its brand-coloured logo tile; the strip runs in light grey and each
// brand swaps to full colour on hover. The track is duplicated for a seamless loop.

interface Brand { id: string; label: string; color: string }

// no payment-rail chips · the user never sees the settlement layer
const RAILS: Brand[] = []

const BRANDS: Brand[] = [
  ...RAILS,
  ...CONNECTORS.map((c) => ({ id: c.id, label: c.label, color: connectorColor(c.id) })),
]

const RAIL_IDS = new Set(RAILS.map((r) => r.id))

function Chip({ b }: { b: Brand }) {
  return (
    <span className="lm-chip" style={{ ['--bc' as any]: b.color }}>
      {RAIL_IDS.has(b.id)
        ? <span className="lm-mono" style={{ background: b.color }}>{b.id === 'x402' ? '402' : 'XRPL'}</span>
        : <ConnectorLogo id={b.id} label={b.label} size={30} />}
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
