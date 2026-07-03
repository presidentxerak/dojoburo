import { AGENT_BY_ID, type AgentSkill } from '../data/agents'
import { CHARACTERS } from '../data/looks'
import { xpForLevel } from '../data/events'
import { useDojo } from '../store'
import { NETWORKS } from '../xrpl/network'
import { Character } from './Character'

export function AgentPanel() {
  const id = useDojo((s) => s.selectedAgent)
  const close = useDojo((s) => s.selectAgent)
  const runSkill = useDojo((s) => s.runSkill)
  const fund = useDojo((s) => s.fund)
  const ensureWallet = useDojo((s) => s.ensureWallet)
  const net = useDojo((s) => s.net)
  const wallet = useDojo((s) => (id ? s.wallets[id] : undefined))
  const rt = useDojo((s) => (id ? s.runtime[id] : undefined))
  const stats = useDojo((s) => (id ? s.stats[id] : undefined))

  if (!id) {
    return (
      <aside className="panel agent-panel empty">
        <p className="panel-hint">👆 Clique sur un agent du bureau pour ouvrir sa fiche, voir son niveau et lancer ses skills.</p>
      </aside>
    )
  }

  const agent = AGENT_BY_ID[id]
  const cfg = NETWORKS[net]
  const run = (skill: AgentSkill) => void runSkill(agent.id, skill)
  const xpNeed = stats ? xpForLevel(stats.level) : 100
  const xpPct = stats ? Math.min(100, Math.round((stats.xp / xpNeed) * 100)) : 0

  return (
    <aside className="panel agent-panel">
      <header className="agent-head">
        <div className="agent-head-avatar">
          <Character character={CHARACTERS[agent.id]} mood={rt?.mood ?? 'idle'} size={78} />
        </div>
        <div className="agent-head-meta">
          <h2>{agent.emoji} {agent.name}</h2>
          <p className="agent-role">{agent.role}</p>
          <span className={`chip dept-${agent.department}`}>{agent.department}</span>
        </div>
        <button className="icon-btn" onClick={() => close(null)} aria-label="Fermer">✕</button>
      </header>

      {stats && (
        <div className="agent-stats">
          <div className="stat-line">
            <span className="stat-medals">{stats.medals.join(' ')}</span>
            <span className="stat-lvl">Niveau {stats.level}</span>
          </div>
          <div className="xp-bar"><div className="xp-fill" style={{ width: `${xpPct}%` }} /></div>
          <div className="stat-foot">
            <span>{stats.xp}/{xpNeed} XP</span>
            <span>🪙 {stats.coins}</span>
            <span>✅ {stats.tasksDone} tâches</span>
          </div>
        </div>
      )}

      <p className="agent-mission">{agent.mission}</p>

      <div className="agent-wallet-row">
        <div>
          <span className="muted small">Wallet ({cfg.label})</span>
          <div className="mono small">
            {wallet ? (
              <a href={cfg.explorerAccount(wallet.address)} target="_blank" rel="noreferrer">{wallet.address.slice(0, 14)}…</a>
            ) : ('—')}
          </div>
        </div>
        <div className="agent-wallet-actions">
          <span className="bal">{wallet?.balanceXrp != null ? `${wallet.balanceXrp.toFixed(2)} XRP` : 'non financé'}</span>
          {!wallet ? (
            <button className="btn tiny" onClick={() => ensureWallet(agent.id)}>Créer wallet</button>
          ) : cfg.faucet ? (
            <button className="btn tiny" onClick={() => void fund(agent.id)}>Faucet</button>
          ) : null}
        </div>
      </div>

      <h3 className="skills-title">Skills</h3>
      <ul className="skill-list">
        {agent.skills.map((skill) => (
          <li key={skill.id}>
            <button className={`skill-btn kind-${skill.kind}`} disabled={rt?.busy} onClick={() => run(skill)}>
              <span className="skill-main">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-tags">
                  <span className={`tag tag-${skill.kind}`}>{kindLabel(skill.kind)}</span>
                  {skill.price > 0 && <span className="tag tag-price">x402 · {skill.price} XRP</span>}
                </span>
              </span>
              <span className="skill-desc">{skill.description}</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}

function kindLabel(k: AgentSkill['kind']): string {
  return k === 'xrpl' ? 'XRPL' : k === 'analysis' ? 'analyse' : 'action'
}
