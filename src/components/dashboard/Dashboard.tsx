import { useEffect, useState } from 'react'
import { useWorkshop } from '../../workshop'
import { useWork } from '../../agents/workStore'
import { listSecrets, saveSecret as apiSaveSecret, removeSecret as apiRemoveSecret, type ServerSecret } from '../../agents/workApi'
import { useDojo } from '../../store'
import { useEngine, AUTONOMY_CAP, AUTONOMY_LABEL, type Autonomy } from '../../agents/engineStore'
import { useSecrets } from '../../agents/secretsStore'
import { useDeliverables } from '../../agents/deliverables'
import { launchCeo } from '../../agents/autopilot'
import { ROLE_AGENTS, ROLE_BY_ID, canonicalRole } from '../../data/roleAgents'
import { isAdmin } from '../../config/admin'
import { ModuleHost } from '../../modules/ModuleHost'
import { MODULES } from '../../modules/registry'
import { InfoDot } from '../InfoDot'

// Build stamp (injected by Vite) so the running version is visible in-app.
declare const __BUILD_ID__: string
const BUILD_ID = typeof __BUILD_ID__ !== 'undefined' ? __BUILD_ID__ : 'dev'

// Nuke every cache + service worker and reload from the network — a one-click
// escape from a stale cached build.
async function forceUpdate() {
  try {
    if ('serviceWorker' in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations?.()
      await Promise.all((regs ?? []).map((r) => r.unregister()))
    }
    if ('caches' in window) {
      const keys = await caches.keys()
      await Promise.all(keys.map((k) => caches.delete(k)))
    }
  } catch { /* best effort */ }
  location.reload()
}

// fiat credit packs · ~1 credit per task. Price per credit by currency (XRP
// display falls back to USD — the user never sees the settlement rail).
const CREDIT_UNIT: Record<string, number> = { USD: 1, EUR: 1, JPY: 150 }
const CREDIT_SYM: Record<string, string> = { USD: '$', EUR: '€', JPY: '¥' }
const CREDIT_PACKS = [30, 100, 500]

// Which deliverable task ids belong to each agent — used to compute a card's
// status + last activity from the deliverables history.
const AGENT_TASKS: Record<string, string[]> = {
  chief: ['strategy'],
  brandi: ['brand'],
  weblos: ['website'],
  marketus: ['ads', 'video', 'assets'],
  pumpi: ['outreach'],
  busino: ['offer', 'analytics', 'finance'],
  sentinel: [],
  vaultor: [],
}

function relTime(ms: number): string {
  if (!ms) return 'No activity yet'
  const s = Math.max(0, (Date.now() - ms) / 1000)
  if (s < 60) return 'just now'
  if (s < 3600) return `${Math.floor(s / 60)}m ago`
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`
  return `${Math.floor(s / 86400)}d ago`
}

/** A step-by-step explainer for an InfoDot: a short lead, numbered steps, and an
 *  optional tip — so each dashboard feature is spelled out clearly. */
function Guide({ lead, steps, tip }: { lead: string; steps: React.ReactNode[]; tip?: React.ReactNode }) {
  return (
    <>
      <p>{lead}</p>
      <ol className="info-steps">{steps.map((s, i) => <li key={i}>{s}</li>)}</ol>
      {tip && <p className="info-tip"><b>Tip:</b> {tip}</p>}
    </>
  )
}

/** The new dojo mechanic: a company is run by 10 functional agents. The right
 *  panel shows the roster; clicking an agent (here or in the 3D dojo) opens that
 *  agent's dedicated management / edition / creation dashboard. */
export function Dashboard({ onOpenDojo }: { onOpenDojo: () => void }) {
  const dojo = useWorkshop((s) => s.dojos.find((d) => d.id === s.activeDojoId))
  const updateAgent = useWorkshop((s) => s.updateAgent)
  const save = useWorkshop((s) => s.save)
  const account = useWorkshop((s) => s.account)
  const agents = dojo?.agents ?? []
  // the selected agent drives the whole panel (also set by clicking a 3D agent)
  const selectedId = useDojo((s) => s.selectedAgent)
  const selectAgent = useDojo((s) => s.selectAgent)
  const byRole = (roleId: string) => agents.find((a) => a.role === roleId)
  const ceo = byRole('chief') ?? agents.find((a) => a.fn === 'Leadership') ?? agents[0]
  const selected = agents.find((a) => a.id === selectedId) ?? null
  // Always resolve a role for a selected agent so the detail panel never comes
  // up blank — even if a persisted dojo carries an agent with a legacy role id.
  const selRole = selected ? (ROLE_BY_ID[canonicalRole(selected.role)] ?? ROLE_BY_ID.chief) : undefined

  const run = useWork((s) => s.run)
  const running = useWork((s) => s.runningTask)
  const tools = useWork((s) => s.tools)
  const openStudio = useWork((s) => s.openStudio)
  const editAgent = useWork((s) => s.editAgent)
  const autopilot = useWork((s) => s.autopilot)
  const delivs = useDeliverables((s) => s.byDojo[dojo?.id ?? ''] ?? [])
  const noModel = delivs.some((d) => d.model === 'local draft')
  const stats = useDojo((s) => s.stats)
  const pushToast = useDojo((s) => s.pushToast)
  const engine = useEngine()

  const [msg, setMsg] = useState('')
  const [buying, setBuying] = useState(false)
  const [payMsg, setPayMsg] = useState('')
  const [moduleId, setModuleId] = useState<string | null>(null) // open studio module

  // Clicking an agent (roster card OR the 3D dojo) jumps STRAIGHT to its studio
  // dashboard — no intermediate profile screen. Utility agents (CEO, Engine,
  // Credits, Config) have no studio, so they show their control panel instead.
  useEffect(() => {
    // deselecting (CEO button, closing a studio, "All agents") drops back to the
    // company roster — so clear any open module when there's no selected agent.
    if (!selectedId) { setModuleId(null); return }
    const a = agents.find((x) => x.id === selectedId)
    const mod = a && MODULES.find((m) => m.agentRole === canonicalRole(a.role))
    if (mod) setModuleId(mod.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId])

  // secrets (env vars) for the active company. Prefer the encrypted server vault
  // (/api/secrets); fall back to the local browser store when it's not deployed.
  const dojoId = dojo?.id ?? ''
  const localSecrets = useSecrets((s) => s.byDojo[dojoId] ?? [])
  const addLocalSecret = useSecrets((s) => s.add)
  const removeLocalSecret = useSecrets((s) => s.remove)
  const [secMode, setSecMode] = useState<'loading' | 'server' | 'local'>('loading')
  const [serverSecrets, setServerSecrets] = useState<ServerSecret[]>([])
  const [secKey, setSecKey] = useState('')
  const [secVal, setSecVal] = useState('')
  const [secDesc, setSecDesc] = useState('')
  const [secBusy, setSecBusy] = useState(false)

  useEffect(() => {
    let cancelled = false
    if (!dojoId) { setSecMode('local'); return }
    setSecMode('loading')
    void listSecrets(dojoId).then((r) => {
      if (cancelled) return
      setSecMode(r.backend ? 'server' : 'local')
      setServerSecrets(r.secrets)
    })
    return () => { cancelled = true }
  }, [dojoId])

  const onServer = secMode === 'server'
  const secretList = onServer
    ? serverSecrets.map((s) => ({ id: s.id, key: s.name, mask: s.preview, desc: s.description }))
    : localSecrets.map((s) => ({ id: s.id, key: s.key, mask: '••••' + s.value.slice(-4), desc: s.desc }))

  const saveSecret = async () => {
    if (!secKey.trim() || !secVal.trim() || !dojoId || secBusy) return
    setSecBusy(true)
    try {
      if (onServer) {
        const r = await apiSaveSecret(dojoId, secKey, secVal, secDesc)
        if (r.ok) {
          const l = await listSecrets(dojoId); setServerSecrets(l.secrets)
          pushToast({ kind: 'event', badge: 'OK', color: '#0e9bb5', title: 'Secret encrypted', text: 'Sealed server-side (AES-256-GCM) and exposed to your agents.' })
        } else {
          pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Failed', text: 'Could not save the secret. Please try again.' })
        }
      } else {
        addLocalSecret(dojoId, secKey, secVal, secDesc)
        pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Secret saved (local)', text: 'Stored in your browser — do not put a real production key here.' })
      }
      setSecKey(''); setSecVal(''); setSecDesc('')
    } finally { setSecBusy(false) }
  }
  const deleteSecret = async (id: string) => {
    if (onServer) { const ok = await apiRemoveSecret(dojoId, id); if (ok) { const l = await listSecrets(dojoId); setServerSecrets(l.secrets) } }
    else removeLocalSecret(dojoId, id)
  }
  const connectedCount = Object.values(tools).filter((t) => (t as { connected?: boolean }).connected).length
  const fiatCur = account?.currency && account.currency !== 'XRP' ? account.currency : 'USD'

  const buyCredits = async (credits: number) => {
    setBuying(true); setPayMsg('')
    try {
      const amount = credits * (CREDIT_UNIT[fiatCur] ?? 1)
      const res = await fetch('/api/checkout', {
        method: 'POST', headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ amount, currency: fiatCur, email: '', kind: 'credits', privyDid: account?.privyDid || '' }),
      })
      const j = await res.json().catch(() => ({}))
      if (j?.ok && j.url) { window.open(j.url as string, '_blank', 'noopener,noreferrer'); return }
      setPayMsg(j?.error === 'not_configured'
        ? 'Card payments are not enabled yet on this deployment.'
        : 'Could not start the payment. Please try again in a moment.')
    } catch { setPayMsg('Network error while starting the payment.') }
    finally { setBuying(false) }
  }
  const tasksDone = Object.values(stats).reduce((n, s) => n + (s?.tasksDone ?? 0), 0)

  // Run a real Claude-powered deliverable. Explicit user action → only a hard
  // company Pause blocks it (not the daily autonomy cap). On success the
  // deliverable opens automatically; on failure a clear toast explains why.
  const runTask = async (agentName: string, task: string, brief = '') => {
    if (running) return
    if (engine.paused) { pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Company paused', text: 'Resume it in Sentinel (Operations Guardian).' }); return }
    engine.record(`${agentName}:${task}`)
    pushToast({ kind: 'event', badge: '▶', color: '#2f7fd6', title: agentName, text: 'Working…' })
    await run({ task, agentName, connectors: [], brief })
    const err = useWork.getState().runError
    if (err) {
      const map: Record<string, string> = {
        needs_key: 'Add your Claude key (Studio → Billing) for this deliverable.',
        quota: 'Daily free quota reached — add your Claude key to continue.',
        not_configured: 'No AI model is configured on this deployment (Claude key or free cascade).',
        network: 'Network error — please try again in a moment.',
        unknown_task: 'This task is not recognised by the server.',
      }
      pushToast({ kind: 'event', badge: '!', color: '#e0483f', title: 'Deliverable not launched', text: map[err.code] || `Failed: ${err.detail || err.code}.` })
    }
  }

  const sendCeo = () => {
    const brief = msg.trim()
    if (!brief) return
    setMsg('')
    void runTask(ceo?.name || 'CEO', 'strategy', brief)
  }

  // ---- the guide (InfoDot) for each role dashboard ---------------------------
  const guideFor = (roleId: string): React.ReactNode => {
    switch (roleId) {
      case 'chief': return <Guide lead="Chief is the brain of your company: you talk to it in plain language and it decides what to do, then delegates the work to the seven specialists."
        steps={[
          <>Write your goal in one sentence (e.g. "find me 20 prospects and write to them").</>,
          <>Click <b>Send</b>: Chief breaks down the goal and assigns it to the right agents.</>,
          <>Or click <b>Launch Chief</b>: it chains brand, website, offer, ads and outreach on its own.</>,
          <>Every morning it sends you an <b>email report</b> (WhatsApp / Telegram coming soon).</>,
        ]} tip="One clear goal per message gives better results." />
      case 'sentinel': return <Guide lead="Sentinel keeps your AI efficient, secure and under control: it sets how autonomous Chief is, caps spend, blocks loops, and keeps your secrets encrypted."
        steps={[
          <>Choose an <b>autonomy level</b>: Auto self-regulates; Low / Medium / Hard / Ultra cap Chief at 1 / 5 / 10 / 25 autonomous tasks per day.</>,
          <>Set a <b>daily credit cap</b>; an <b>anti-loop guard</b> stops a task that keeps repeating.</>,
          <>Add <b>encrypted environment variables</b> (sealed server-side, AES-256-GCM) for your agents to use.</>,
          <>Flip a <b>safety switch</b> — pause outbound email, or pause the whole company.</>,
        ]} tip="These limits only rein in background autonomy: your manual launches always go through." />
      case 'vaultor': return <Guide lead="Vaultor manages credits, subscriptions and payments. You top up in your own currency, with no crypto at all."
        steps={[
          <>Choose a <b>pack</b> (30 / 100 / 500 credits) shown in {fiatCur}.</>,
          <>The payment opens in a new window (card, secure).</>,
          <>Each task uses <b>about 1 credit</b>; settlement happens behind the scenes.</>,
        ]} tip="Set an autonomy level (Sentinel) to keep your consumption under control." />
      default: return null
    }
  }

  // ---- the specialized body for each role dashboard --------------------------
  const bodyFor = (roleId: string): React.ReactNode => {
    switch (roleId) {
      case 'chief': return (
        <>
          <div className="composer-row">
            <input value={msg} onChange={(e) => setMsg(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendCeo()} placeholder="Tell Chief what to prioritise…" />
            <button className="btn primary tiny" onClick={sendCeo} disabled={!msg.trim() || autopilot.running}>Send</button>
          </div>
          {autopilot.running ? (
            <p className="ceo-autopilot"><span className="ceo-spin" /> Chief is working · <b>{autopilot.step}</b>…</p>
          ) : (
            <button className="btn tiny ceo-launch" disabled={!!running} onClick={() => void launchCeo(dojo?.name || 'my company')}>▶ Launch Chief (build everything)</button>
          )}
          {noModel && (
            <p className="ceo-nomodel">⚠️ <b>No AI model connected</b> — Chief produces <b>drafts</b>. For real generation: <button className="linklike" onClick={() => openStudio('billing')}>add your Claude key</button> (Studio → Billing), or the operator enables a free key (Groq / Gemini).</p>
          )}
          <p className="muted small">Chief delegates brand, website, offer, ads and outreach to the specialists (within Sentinel's limits) · daily email report.</p>
        </>
      )
      case 'sentinel': return (
        <>
          <div className="sq-eyebrow">Autonomy &amp; limits</div>
          <div className="tb-netseg eng-seg">
            {(['auto', 'low', 'medium', 'hard', 'ultra'] as Autonomy[]).map((a) => (
              <button key={a} className={engine.autonomy === a ? 'on' : ''} onClick={() => engine.setAutonomy(a)}>{AUTONOMY_LABEL[a]}</button>
            ))}
          </div>
          <div className="eng-row">
            <label>Daily credit cap
              <input type="number" min="1" value={engine.dailyCreditCap} onChange={(e) => engine.setDailyCap(Number(e.target.value))} />
            </label>
            <div className="eng-stat">
              <span>{engine.tasksToday}{AUTONOMY_CAP[engine.autonomy] === Infinity ? '' : ` / ${AUTONOMY_CAP[engine.autonomy]}`}</span>
              <em>tasks today</em>
            </div>
            <div className="eng-stat">
              <span>{engine.creditsToday} / {engine.dailyCreditCap}</span>
              <em>credits today</em>
            </div>
          </div>

          <div className="sq-eyebrow" style={{ marginTop: 14 }}>Encrypted environment variables</div>
          {secMode === 'server' && <p className="sec-ok">🔒 <b>Encrypted vault:</b> your secrets are sealed server-side (AES-256-GCM) — never stored in the browser.</p>}
          {secMode === 'local' && <p className="sec-warn">⚠️ <b>Server vault not configured</b> here: secrets are kept <b>in your browser</b>. Don't paste a real production key.</p>}
          <div className="sec-add">
            <input className="sec-key" placeholder="SERVICE_API_KEY" value={secKey} onChange={(e) => setSecKey(e.target.value.toUpperCase())} maxLength={48} />
            <input className="sec-val" type="password" placeholder="Secret value" value={secVal} onChange={(e) => setSecVal(e.target.value)} />
            <input className="sec-desc" placeholder="Description (optional) — helps your agents pick the right secret" value={secDesc} onChange={(e) => setSecDesc(e.target.value)} maxLength={80} />
            <button className="btn tiny" disabled={!secKey.trim() || !secVal.trim() || secBusy} onClick={() => void saveSecret()}>{secBusy ? 'Saving…' : 'Save secret'}</button>
          </div>
          {secretList.length > 0 ? (
            <ul className="sec-list">
              {secretList.map((s) => (
                <li key={s.id}>
                  <div className="sec-row-main">
                    <code>{s.key}</code>
                    <span className="sec-mask">{s.mask}</span>
                  </div>
                  {s.desc && <span className="sec-note">{s.desc}</span>}
                  <button className="sec-del" onClick={() => void deleteSecret(s.id)} aria-label={`Delete ${s.key}`}>Delete</button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="muted small">{secMode === 'loading' ? 'Loading…' : 'No secrets yet. Add one to expose it to your agents as an environment variable.'}</p>
          )}

          <div className="sq-eyebrow" style={{ marginTop: 14 }}>Safety switches</div>
          <div className="sec-toggles">
            <label className="sec-toggle">
              <span><b>Pause outbound email</b><em>When paused, the company sends no email.</em></span>
              <button role="switch" aria-checked={engine.pauseOutbound} className={`tgl${engine.pauseOutbound ? ' on' : ''}`} onClick={() => engine.setPauseOutbound(!engine.pauseOutbound)}><span /></button>
            </label>
            <label className="sec-toggle">
              <span><b>Pause the company</b><em>No task runs while paused.</em></span>
              <button role="switch" aria-checked={engine.paused} className={`tgl danger${engine.paused ? ' on' : ''}`} onClick={() => engine.setPaused(!engine.paused)}><span /></button>
            </label>
          </div>
          {engine.paused && <p className="sec-paused">⏸ Company paused — tasks are blocked.</p>}
        </>
      )
      case 'vaultor': return (
        <>
          <div className="cred-packs">
            {CREDIT_PACKS.map((c) => (
              <button key={c} className="cred-pack" disabled={buying} onClick={() => buyCredits(c)}>
                <span>{c} credits</span>
                <em>{CREDIT_SYM[fiatCur]}{c * (CREDIT_UNIT[fiatCur] ?? 1)}</em>
              </button>
            ))}
          </div>
          {payMsg && <p className="muted small">{payMsg}</p>}
          <p className="muted small">Credits used today: <b>{engine.creditsToday}</b> · connected apps: <b>{connectedCount}</b>.</p>
        </>
      )
      default: return null
    }
  }

  // ------------------------------------------------------------------ MODULE --
  if (moduleId) {
    return <ModuleHost moduleId={moduleId} dojoId={dojo?.id ?? ''} onClose={() => { setModuleId(null); selectAgent(null) }} />
  }

  // ------------------------------------------------------------------ DETAIL --
  if (selected && selRole) {
    return (
      <div className="agentdash" style={{ ['--dc' as string]: selRole.tint }}>
        <div className="ad-topbar">
          <button className="ad-back" onClick={() => selectAgent(null)}>‹ All agents</button>
          <button className="btn tiny ghost" onClick={() => editAgent(selected.id)} title="Advanced editing in the Studio">Studio ✎</button>
        </div>

        <header className="ad-head">
          <div className="ad-meta">
            <input
              className="ad-name"
              value={selected.name}
              onChange={(e) => updateAgent(selected.id, { name: e.target.value.slice(0, 22) })}
              onBlur={() => save()}
              onKeyDown={(e) => { if (e.key === 'Enter') (e.target as HTMLInputElement).blur() }}
              aria-label="Agent name"
            />
            <p className="ad-role">{selRole.title}</p>
            <span className="ad-cat" style={{ background: selRole.tint }}>{selRole.dept}</span>
          </div>
          <InfoDot title={selRole.code}>{guideFor(selRole.id)}</InfoDot>
        </header>

        <p className="ad-blurb">{selRole.desc}</p>

        {/* the agent's studio(s) — each studio agent IS its tool. Utility agents
            (Chief, Sentinel, Vaultor) show their control panel instead. */}
        {(() => {
          const roleModules = MODULES.filter((m) => m.agentRole === selRole.id)
          if (roleModules.length) {
            return (
              <div className="lp-studioteam ad-studioteam">
                {roleModules.map((m) => (
                  <button key={m.id} className="lp-studiocard agent-card" style={{ ['--ac' as string]: m.tint }} onClick={() => setModuleId(m.id)}>
                    <strong className="agent-code">{m.label}</strong>
                    <span className="agent-desc">{m.blurb}</span>
                    <span className="agent-action">Open →</span>
                  </button>
                ))}
              </div>
            )
          }
          return <div className="ad-body">{bodyFor(selRole.id)}</div>
        })()}
      </div>
    )
  }

  // ------------------------------------------------------------------ ROSTER --
  const roster = ROLE_AGENTS.map((r) => byRole(r.id)).filter(Boolean) as typeof agents
  return (
    <div className="dash-panels">
      <div className="dash-hero">
        <div>
          <h2>{account?.name || 'Your'} · {dojo?.name || 'Dojo'} {isAdmin(account ?? null) && <span className="admin-badge" title="Admin account · unlimited free testing">ADMIN · unlimited</span>}</h2>
          <p>Click an agent to open its dashboard. Chief coordinates the whole team.</p>
        </div>
        <div className="dash-hero-actions">
          <button className="btn tiny" onClick={onOpenDojo} title="Open the dojo fullscreen">⤢ Dojo</button>
          <button className="build-refresh" title={`Build ${BUILD_ID} · click to force the latest version`} onClick={forceUpdate}>
            ⟳ v{BUILD_ID}
          </button>
        </div>
      </div>

      {/* Business overview — the company dashboard at a glance */}
      <div className="biz-overview">
        <div className="biz-tile"><span>{engine.creditsToday}</span><em>credits (today)</em></div>
        <div className="biz-tile"><span>{delivs.filter((d) => d.taskId === 'ads').length}</span><em>campaigns</em></div>
        <div className="biz-tile"><span>{delivs.filter((d) => d.taskId === 'outreach').length}</span><em>outreach</em></div>
        <div className="biz-tile"><span>{tasksDone}</span><em>deliverables</em></div>
        <div className="biz-tile"><span>{connectedCount}</span><em>apps</em></div>
      </div>

      {/* Chief quick action — the only orchestration entry point, above the roster */}
      <div className="ceo-quick" style={{ ['--dc' as string]: ROLE_BY_ID.chief.tint }}>
        <div className="composer-row">
          <input value={msg} onChange={(e) => setMsg(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendCeo()} placeholder="Tell Chief what to prioritise…" />
          <button className="btn primary tiny" onClick={sendCeo} disabled={!msg.trim() || autopilot.running}>Send</button>
        </div>
        {autopilot.running
          ? <p className="ceo-autopilot"><span className="ceo-spin" /> Chief is working · <b>{autopilot.step}</b>…</p>
          : <button className="btn tiny ceo-launch" disabled={!!running} onClick={() => void launchCeo(dojo?.name || 'my company')}>▶ Launch Chief (build everything)</button>}
        {noModel && <p className="ceo-nomodel">⚠️ <b>No AI model connected</b> — Chief produces <b>drafts</b>. <button className="linklike" onClick={() => openStudio('billing')}>Add your Claude key</button> for real generation.</p>}
      </div>

      <div className="mission-head">
        <h3>Your team</h3>
        <span className="muted small">Eight AI specialists — click one to open it. Chief coordinates the rest.</span>
      </div>
      <div className="lp-studioteam agent-roster">
        {roster.map((a) => {
          const r = ROLE_BY_ID[canonicalRole(a.role)]
          if (!r) return null
          const tasks = AGENT_TASKS[r.id] ?? []
          const times = delivs.filter((d) => tasks.includes(d.taskId)).map((d) => d.createdAt)
          const last = times.length ? Math.max(...times) : 0
          const working = !!running && tasks.includes(running)
          const status = engine.paused ? 'Paused' : working ? 'Working…' : last ? 'Active' : 'Ready'
          const statusMod = engine.paused ? 'paused' : working ? 'working' : last ? 'active' : 'ready'
          return (
            <button key={a.id} className="lp-studiocard agent-card" style={{ ['--ac' as string]: r.tint }} onClick={() => selectAgent(a.id)}>
              <strong className="agent-code">{a.name}</strong>
              <span className="agent-title">{r.title}</span>
              <span className="agent-desc">{r.desc}</span>
              <span className={`agent-status s-${statusMod}`}><i />{status}</span>
              <span className="agent-last">{relTime(last)}</span>
              <span className="agent-action">Open →</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
