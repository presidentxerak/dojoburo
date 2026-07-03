import type { AgentDef } from '../data/agents'
import { LOOKS } from '../data/looks'
import { POSITIONS } from '../data/layout'
import { useDojo } from '../store'
import { audio } from '../audio'
import { PixelAvatar } from './PixelAvatar'
import { AsciiFace } from './AsciiFace'

/** An agent standing at their desk. Shows the animated ASCII emote bubble,
 *  a level badge, and an XP bar. Clicking selects the agent. */
export function AgentSprite({ agent }: { agent: AgentDef }) {
  const rt = useDojo((s) => s.runtime[agent.id])
  const selected = useDojo((s) => s.selectedAgent === agent.id)
  const select = useDojo((s) => s.selectAgent)
  const wallet = useDojo((s) => s.wallets[agent.id])
  const stats = useDojo((s) => s.stats[agent.id])
  const banter = useDojo((s) => s.banter)

  const mood = rt?.mood ?? 'idle'
  const busy = rt?.busy
  const pos = POSITIONS[agent.id]
  const look = LOOKS[agent.id]

  const showAgentBubble = banter && banter.who === 'agent' && banter.agentId === agent.id

  return (
    <button
      className={`agent ${selected ? 'is-selected' : ''} ${busy ? 'is-busy' : ''}`}
      style={{ left: pos.x, top: pos.y, zIndex: 20 }}
      onClick={() => { audio.sfx('click'); select(agent.id) }}
      title={`${agent.name} — ${agent.role}`}
    >
      {/* emote bubble (animated ASCII face) */}
      <div className={`emote ${busy || mood !== 'idle' ? 'show' : ''}`}>
        <AsciiFace mood={mood} />
      </div>

      {showAgentBubble && (
        <div className="bubble agent-bubble">
          {banter!.text}
          <span className="bubble-tail" />
        </div>
      )}

      <div className="agent-avatar">
        <PixelAvatar look={look} size={72} />
      </div>
      <div className="agent-shadow" />

      <div className="agent-plate">
        <span className="agent-plate-name">{agent.emoji} {agent.name}</span>
        {stats && <span className="agent-lvl">{stats.medals[stats.medals.length - 1]} Nv.{stats.level}</span>}
      </div>
      {wallet?.funded && wallet.balanceXrp != null && (
        <span className="agent-bal">{wallet.balanceXrp.toFixed(1)} XRP</span>
      )}
      {busy && <span className="agent-progress" />}
      {busy && <span className="agent-working">⚙</span>}
    </button>
  )
}
