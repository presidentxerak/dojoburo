import { useEffect, useState } from 'react'
import { type AgentSkill, type Department } from '../data/agents'
import type { ExtAgent } from '../workshop'
import { delegateToAgent } from '../agents/externalAgents'
import { getAgentView } from '../agentView'
import { xpForLevel, tierForLevel } from '../data/events'
import { useDojo } from '../store'
import { useWorkshop } from '../workshop'
import { NETWORKS } from '../xrpl/network'
import { connectorsForFunction, tasksForFunction } from '../data/connectors'
import { useWork } from '../agents/workStore'
import { Agent3DPreview } from './three/Agent3DPreview'
import { ConnectorsPanel } from './ConnectorsPanel'
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
  const activeDojo = useWorkshop((s) => s.dojos.find((d) => d.id === s.activeDojoId))
  const wAgent = activeDojo?.agents.find((a) => a.id === id)
  const extAgents = wAgent?.externalAgents ?? []

  const tools = useWork((s) => s.tools)
  const loadedOnce = useWork((s) => s.loadedOnce)
  const loadTools = useWork((s) => s.loadTools)
  const run = useWork((s) => s.run)
  const runningTask = useWork((s) => s.runningTask)
  const runError = useWork((s) => s.runError)
  const byok = useWork((s) => s.byok)
  const openStudio = useWork((s) => s.openStudio)
  const editAgent = useWork((s) => s.editAgent)
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
        <button className="agent-head-avatar edit" onClick={() => editAgent(agent.id)} title="Edit this agent" aria-label="Edit this agent">
          <Agent3DPreview id={agent.id} character={agent.character} mood={rt?.mood ?? 'idle'} size={64} />
          <span className="avatar-edit-badge">Edit</span>
        </button>
        <div className="agent-head-meta">
          <h2>{agent.name}</h2>
          <p className="agent-role">{agent.role}</p>
          <span className={`chip dept-${agent.department}`}>{agent.department}</span>
        </div>
        <button className="agent-edit-btn" onClick={() => editAgent(agent.id)} title="Edit this agent">Edit</button>
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
              ? <>Runs on <strong>your</strong> Claude key · billed to you.</>
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
                  <button className="work-btn" disabled={!!runningTask} onClick={() => void run({ task: t.id, agentName: agent.name, connectors: connectedIds, brief, extAgents })}>
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
              This deliverable {runError.reason === 'tool' ? 'acts inside a connected tool' : 'is the design system'} · it runs on Claude.{' '}
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

      {/* ---- Connect real tools · pedagogical panel shared with the Studio ---- */}
      {connectors.length > 0 && <ConnectorsPanel dept={dept} />}

      {/* ---- External agents linked to this one (MCP tools + A2A delegation) ---- */}
      {extAgents.length > 0 && <ExternalAgentsBlock agents={extAgents} onEdit={() => editAgent(agent.id)} />}

      <div className="agent-wallet-row">
        <div>
          <span className="muted small">Wallet ({cfg.label})</span>
          <div className="mono small">
            {wallet ? (
              <a href={cfg.explorerAccount(wallet.address)} target="_blank" rel="noreferrer">{wallet.address.slice(0, 14)}…</a>
            ) : ('-')}
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

// External agents the user linked in the Studio. MCP ones ride along inside every
// run above (as tools); A2A / webhook ones get a whole task delegated here and the
// reply text comes straight back. Tokens never touch the browser · the server
// proxy holds them (see api/agent-proxy).
function ExternalAgentsBlock({ agents, onEdit }: { agents: ExtAgent[]; onEdit: () => void }) {
  const mcp = agents.filter((a) => a.protocol === 'mcp')
  const delegable = agents.filter((a) => a.protocol === 'a2a' || a.protocol === 'webhook')
  const [pick, setPick] = useState(delegable[0]?.id ?? '')
  const [task, setTask] = useState('')
  const [busy, setBusy] = useState(false)
  const [reply, setReply] = useState<{ ok: boolean; text: string } | null>(null)

  const target = delegable.find((a) => a.id === pick) ?? delegable[0]

  const delegate = async () => {
    if (!target || !task.trim() || busy) return
    setBusy(true); setReply(null)
    const r = await delegateToAgent(target, task.trim())
    setBusy(false)
    setReply({ ok: r.ok, text: r.ok ? (r.text || 'Done (no text returned).') : (r.error || 'The agent did not reply.') })
  }

  return (
    <section className="work-block ext-block">
      <h3 className="skills-title">Linked agents <span className="tag tag-live">{agents.length}</span></h3>
      {mcp.length > 0 && (
        <p className="work-intro">
          {mcp.length} MCP agent{mcp.length > 1 ? 's' : ''} ({mcp.map((a) => a.name).join(', ')}) join every deliverable above as tools.{' '}
          <button className="linklike" onClick={onEdit}>Manage</button>
        </p>
      )}

      {delegable.length > 0 ? (
        <>
          <p className="work-intro">Delegate a task to one of your linked agents · its reply comes straight back.</p>
          {delegable.length > 1 && (
            <select className="ext-pick" value={pick} onChange={(e) => setPick(e.target.value)}>
              {delegable.map((a) => <option key={a.id} value={a.id}>{a.name} · {a.protocol.toUpperCase()}</option>)}
            </select>
          )}
          <input
            className="work-brief"
            placeholder={`Task for ${target?.name ?? 'the agent'}…`}
            value={task}
            maxLength={600}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') void delegate() }}
          />
          <button className="work-btn ext-delegate" disabled={busy || !task.trim()} onClick={() => void delegate()}>
            <span className="work-main"><span className="work-name">{busy ? 'Delegating…' : `Delegate to ${target?.name ?? 'agent'}`}</span></span>
            {busy && <span className="work-spin" />}
          </button>
          {reply && (
            <div className={`ext-reply ${reply.ok ? 'ok' : 'err'}`}>{reply.text}</div>
          )}
        </>
      ) : mcp.length === 0 ? (
        <p className="work-intro">No linked agents yet. <button className="linklike" onClick={onEdit}>Link one</button> (Notion, Slack, MCP or A2A).</p>
      ) : null}
    </section>
  )
}
