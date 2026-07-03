import type { AgentDef } from '../data/agents'
import { CHARACTERS } from '../data/looks'
import { POSITIONS } from '../data/layout'
import { useDojo } from '../store'
import { audio } from '../audio'
import { Character } from './Character'

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
  const character = CHARACTERS[agent.id]

  const showAgentBubble = banter && banter.who === 'agent' && banter.agentId === agent.id

  return (
    <button
      className={`agent ${selected ? 'is-selected' : ''} ${busy ? 'is-busy' : ''}`}
      style={{ left: pos.x, top: pos.y, zIndex: 20 }}
      onClick={() => { audio.sfx('click'); select(agent.id) }}
      title={`${agent.name} — ${agent.role}`}
    >
      {showAgentBubble && (
        <div className="bubble agent-bubble">
          {banter!.text}
          <span className="bubble-tail" />
        </div>
      )}

      {/* name tag floats above the head so the desk never hides it */}
      <div className="agent-plate">
        <span className="agent-plate-name">{agent.name}</span>
        {stats && <span className="agent-lvl">Lv.{stats.level}</span>}
        {wallet?.funded && wallet.balanceXrp != null && (
          <span className="agent-bal">{wallet.balanceXrp.toFixed(1)} XRP</span>
        )}
      </div>
      {busy && <span className="agent-progress" />}

      <div className="agent-avatar">
        <Character character={character} mood={mood} size={50} />
      </div>
      <div className="agent-shadow" />
      {busy && <span className="agent-working" aria-hidden />}
    </button>
  )
}
