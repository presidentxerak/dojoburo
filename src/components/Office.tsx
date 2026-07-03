import { AGENTS } from '../data/agents'
import { AgentSprite } from './AgentSprite'

/** The 2D pixel-art office floor. Agents sit at their desks on a grid. */
export function Office() {
  return (
    <div className="office-wrap">
      <div className="office-floor" role="group" aria-label="Bureau DojoBuro">
        {/* decorative fixtures */}
        <div className="fixture plant" style={{ gridColumn: 1, gridRow: 1 }}>🪴</div>
        <div className="fixture board" style={{ gridColumn: 12, gridRow: 1 }}>📋</div>
        <div className="fixture coffee" style={{ gridColumn: 12, gridRow: 8 }}>☕</div>
        <div className="fixture window" style={{ gridColumn: '4 / 10', gridRow: 8 }} />
        <div className="fixture rug" style={{ gridColumn: '5 / 9', gridRow: '3 / 6' }} />

        {AGENTS.map((a) => (
          <AgentSprite key={a.id} agent={a} />
        ))}
      </div>
    </div>
  )
}
