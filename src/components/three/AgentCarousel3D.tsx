import { Agent3DPreview } from './Agent3DPreview'
import { SKINS } from '../../data/skins'
import type { Kind } from '../../data/looks'

const pick = (kind: Kind) => SKINS.find((s) => s.kind === kind) ?? SKINS[0]

const SHOW: { kind: Kind; name: string; role: string }[] = [
  { kind: 'goldorak', name: 'Ava', role: 'CEO · Mecha' },
  { kind: 'octopus', name: 'Sol', role: 'Sales · Octopus' },
  { kind: 'monitor', name: 'Ada', role: 'Data · Terminal' },
  { kind: 'alien', name: 'Fin', role: 'Finance · Alien' },
]

/** Landing showcase: a few agents rotating in 3D to present the roster and the
 *  edit mode. */
export function AgentCarousel3D() {
  return (
    <div className="lp-carousel">
      {SHOW.map((s, i) => (
        <div className="lp-agentcard" key={s.kind} style={{ animationDelay: `${i * 0.08}s` }}>
          <Agent3DPreview id={s.kind} character={pick(s.kind)} size={150} speed={1} phase={i * 0.7} />
          <strong>{s.name}</strong>
          <span>{s.role}</span>
          <em className="lp-editchip">Editable · {SKINS.length} skins</em>
        </div>
      ))}
    </div>
  )
}
