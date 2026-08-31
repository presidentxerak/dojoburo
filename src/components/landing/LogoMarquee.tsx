import { CONNECTORS } from '../../data/connectors'
import { ConnectorLogo, connectorColor } from '../ConnectorLogo'

// A left-to-right animated banner of the rails and every app connector. Each app
// shows its brand-coloured logo tile; the strip runs in light grey and each
// brand swaps to full colour on hover. The track is duplicated for a seamless loop.

interface Brand { id: string; label: string; color: string }

// The apps you connect, and nothing else. There was a branch here that drew
// an "XRPL" or "402" chip for payment rails; the rail list has been empty since
// that layer was removed, so it drew nothing and only kept the name alive.
const BRANDS: Brand[] = CONNECTORS.map((c) => ({ id: c.id, label: c.label, color: connectorColor(c.id) }))

function Chip({ b }: { b: Brand }) {
  return (
    <span className="lm-chip" style={{ ['--bc' as any]: b.color }}>
      <ConnectorLogo id={b.id} label={b.label} size={30} />
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
