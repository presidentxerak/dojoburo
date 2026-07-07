import { useEffect, useState } from 'react'
import { type AgentSkill, type Department } from '../data/agents'
import { getAgentView } from '../agentView'
import { xpForLevel, tierForLevel } from '../data/events'
import { useDojo } from '../store'
import { useWorkshop } from '../workshop'
import { NETWORKS } from '../xrpl/network'
import { connectorsForFunction, tasksForFunction } from '../data/connectors'
import { useWork } from '../agents/workStore'
import { startConnect } from '../agents/workApi'
import { Agent3DPreview } from './three/Agent3DPreview'
import { Icon } from './Icon'

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
  // re-render when the active dojo changes so live edits (name, skin, skills) show
  useWorkshop((s) => s.dojos.find((d) => d.id === s.activeDojoId))

  const tools = useWork((s) => s.tools)
  const backend = useWork((s) => s.backend)
  const loadedOnce = useWork((s) => s.loadedOnce)
  const loadTools = useWork((s) => s.loadTools)
  const run = useWork((s) => s.run)
  const disconnect = useWork((s) => s.disconnect)
  const runningTask = useWork((s) => s.runningTask)
  const runError = useWork((s) => s.runError)
  const byok = useWork((s) => s.byok)
  const openStudio = useWork((s) => s.openStudio)
  const [brief, setBrief] = useState('')

  useEffect(() => {
    if (!loadedOnce) void loadTools()
  }, [loadedOnce, loadTools])

  const agent = getAgentView(id)
  if (!id || !agent) {
    return (
      <aside className="panel agent-panel empty">
        <p className="panel-hint">Click an agent in the office to open their card, see their level and run their skills.</p>
      </aside>
    )
  }

  const cfg = NETWORKS[net]
  const dept = agent.department as Department
  const workTasks = tasksForFunction(dept)
  const connectors = connectorsForFunction(dept)
  const connectedIds = connectors.filter((c) => tools[c.id]?.connected).map((c) => c.id)
  const run3d = (skill: AgentSkill) => void runSkill(agent.id, skill)
  const xpNeed = stats ? xpForLevel(stats.level) : 100
  const xpPct = stats ? Math.min(100, Math.round((stats.xp / xpNeed) * 100)) : 0

  return (
    <aside className="panel agent-panel">
      <header className="agent-head">
        <div className="agent-head-avatar">
          <Agent3DPreview character={agent.character} mood={rt?.mood ?? 'idle'} size={64} />
        </div>
        <div className="agent-head-meta">
          <h2>{agent.name}</h2>
          <p className="agent-role">{agent.role}</p>
          <span className={`chip dept-${agent.department}`}>{agent.department}</span>
        </div>
        <button className="icon-btn" onClick={() => close(null)} aria-label="Close"><Icon name="close" /></button>
      </header>

      {stats && (
        <div className="agent-stats">
          <div className="stat-line">
            <span className="stat-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name={i < Math.min(stats.level, 5) ? 'star' : 'star-o'} size={12} />
              ))}
            </span>
            <span className="stat-lvl">Level {stats.level} · {tierForLevel(stats.level)}</span>
          </div>
          <div className="xp-bar"><div className="xp-fill" style={{ width: `${xpPct}%` }} /></div>
          <div className="stat-foot">
            <span>{stats.xp}/{xpNeed} XP</span>
            <span className="stat-coins"><Icon name="coin" size={12} /> {stats.coins}</span>
            <span className="stat-tasks"><Icon name="check" size={12} /> {stats.tasksDone} tasks</span>
          </div>
        </div>
      )}

      <p className="agent-mission">{agent.mission}</p>

      {/* ---- Real work (Claude-powered deliverables) ---- */}
      {workTasks.length > 0 && (
        <section className="work-block">
          <h3 className="skills-title">Deliver real work <span className="tag tag-live">Claude</span></h3>
          <p className="work-intro">
            {byok.connected
              ? <>🔑 Runs on <strong>your</strong> Claude key — billed to you.</>
              : <>Free for text · <button className="linklike" onClick={() => openStudio('billing')}>add your Claude key</button> for the design system & tool actions.</>}
          </p>
          <input
            className="work-brief"
            placeholder="Optional brief (what should it be about?)"
            value={brief}
            onChange={(e) => setBrief(e.target.value)}
            maxLength={300}
          />
          <ul className="work-list">
            {workTasks.map((t) => {
              const busy = runningTask === t.id
              const usable = (t.usesConnectors || []).filter((c) => connectedIds.includes(c))
              return (
                <li key={t.id}>
                  <button className="work-btn" disabled={!!runningTask} onClick={() => void run({ task: t.id, agentName: agent.name, connectors: connectedIds, brief })}>
                    <span className="work-emoji">{t.emoji}</span>
                    <span className="work-main">
                      <span className="work-name">{busy ? 'Working…' : t.label}</span>
                      <span className="work-desc">{t.blurb}</span>
                      <span className="work-tags">
                        <span className="tag tag-price">x402 · {t.priceXrp} XRP</span>
                        {usable.length > 0 && <span className="tag tag-tool">acts in {usable.join(', ')}</span>}
                      </span>
                    </span>
                    {busy && <span className="work-spin" />}
                  </button>
                </li>
              )
            })}
          </ul>
          {runError?.code === 'needs_key' && (
            <p className="work-hint">
              This deliverable {runError.reason === 'tool' ? 'acts inside a connected tool' : 'is the design system'} — it runs on Claude.{' '}
              <button className="linklike" onClick={() => openStudio('billing')}>Add your Claude key</button> (billed to your account).
            </p>
          )}
          {runError?.code === 'quota' && (
            <p className="work-hint">
              Free tier used up for today.{' '}
              <button className="linklike" onClick={() => openStudio('billing')}>Add your Claude key</button> to keep going.
            </p>
          )}
          {runError?.code === 'not_configured' && (
            <p className="work-hint">No LLM is configured on this deployment yet (free providers or a Claude key).</p>
          )}
          {runError && !['needs_key', 'quota', 'not_configured'].includes(runError.code) && (
            <p className="work-hint err">Run failed: {runError.detail || runError.code}</p>
          )}
        </section>
      )}

      {/* ---- Connect real tools (per function) ---- */}
      {connectors.length > 0 && (
        <section className="conn-block">
          <h3 className="skills-title">Connect tools</h3>
          <p className="work-intro">Link a tool once (secure OAuth) — then this agent works <em>inside</em> it: creates the page, opens the PR, drafts the mail.</p>
          <ul className="conn-list">
            {connectors.map((c) => {
              const st = tools[c.id]
              const connected = !!st?.connected
              const available = !!st?.available
              return (
                <li key={c.id} className={`conn-row${connected ? ' on' : ''}`}>
                  <span className="conn-emoji">{c.emoji}</span>
                  <span className="conn-meta">
                    <span className="conn-name">{c.label}</span>
                    <span className="conn-blurb">{connected && st?.account ? `Connected · ${st.account}` : c.blurb}</span>
                  </span>
                  {connected ? (
                    <button className="btn tiny ghost" onClick={() => void disconnect(c.id)}>Disconnect</button>
                  ) : available ? (
                    <button className="btn tiny" onClick={() => startConnect(c.id)}>Connect</button>
                  ) : (
                    <a className="conn-setup" href={c.docsUrl} target="_blank" rel="noreferrer" title="Operator must configure this connector">setup ↗</a>
                  )}
                </li>
              )
            })}
          </ul>
          {loadedOnce && !backend && (
            <p className="work-hint">Tool connections need <code>DATABASE_URL</code> + <code>CONNECTOR_ENC_KEY</code> and each tool's OAuth keys.</p>
          )}
        </section>
      )}

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
          <span className="bal">{wallet?.balanceXrp != null ? `${wallet.balanceXrp.toFixed(2)} XRP` : 'unfunded'}</span>
          {!wallet ? (
            <button className="btn tiny" onClick={() => ensureWallet(agent.id)}>Create wallet</button>
          ) : cfg.faucet ? (
            <button className="btn tiny" onClick={() => void fund(agent.id)}>Faucet</button>
          ) : null}
        </div>
      </div>

      <h3 className="skills-title">Skills</h3>
      <ul className="skill-list">
        {agent.skills.map((skill) => (
          <li key={skill.id}>
            <button className={`skill-btn kind-${skill.kind}`} disabled={rt?.busy} onClick={() => run3d(skill)}>
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
  return k === 'xrpl' ? 'XRPL' : k === 'analysis' ? 'analysis' : 'action'
}
