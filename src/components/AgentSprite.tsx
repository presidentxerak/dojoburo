import { AsciiFace } from './AsciiFace'
import type { AgentDef } from '../data/agents'
import { useDojo } from '../store'

interface Props {
  agent: AgentDef
}

/**
 * A pixel-art desk with a character. The character's head is a little CRT
 * "screen" showing the animated ASCII face. Clicking selects the agent.
 */
export function AgentSprite({ agent }: Props) {
  const rt = useDojo((s) => s.runtime[agent.id])
  const selected = useDojo((s) => s.selectedAgent === agent.id)
  const select = useDojo((s) => s.selectAgent)
  const wallet = useDojo((s) => s.wallets[agent.id])

  const mood = rt?.mood ?? 'idle'
  const busy = rt?.busy

  return (
    <button
      className={`sprite ${selected ? 'is-selected' : ''} ${busy ? 'is-busy' : ''}`}
      style={{ gridColumn: agent.desk.x, gridRow: agent.desk.y }}
      onClick={() => select(agent.id)}
      title={`${agent.name} — ${agent.role}`}
    >
      {/* desk */}
      <span className="sprite-desk" style={{ ['--accent' as string]: agent.palette.accent }} />

      {/* character */}
      <span className="sprite-char">
        <span
          className="sprite-head"
          style={{ ['--shirt' as string]: agent.palette.shirt, ['--skin' as string]: agent.palette.skin }}
        >
          <AsciiFace mood={mood} className="sprite-facescreen" />
        </span>
        <span
          className="sprite-body"
          style={{ ['--shirt' as string]: agent.palette.shirt, ['--skin' as string]: agent.palette.skin }}
        />
      </span>

      <span className="sprite-name">
        {agent.emoji} {agent.name}
      </span>
      {wallet?.funded && wallet.balanceXrp != null && (
        <span className="sprite-bal">{wallet.balanceXrp.toFixed(1)} XRP</span>
      )}
      {busy && <span className="sprite-status">…</span>}
    </button>
  )
}
