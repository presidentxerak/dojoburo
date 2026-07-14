import { useEffect, useState } from 'react'
import { useWorkshop } from '../../workshop'
import { useWork } from '../../agents/workStore'
import { listSecrets, saveSecret as apiSaveSecret, removeSecret as apiRemoveSecret, type ServerSecret } from '../../agents/workApi'
import { tasksForFunction } from '../../data/connectors'
import { useDojo } from '../../store'
import { useEngine, AUTONOMY_CAP, AUTONOMY_LABEL, type Autonomy } from '../../agents/engineStore'
import { useSecrets } from '../../agents/secretsStore'
import { useDeliverables } from '../../agents/deliverables'
import { launchCeo } from '../../agents/autopilot'
import { ROLE_AGENTS, ROLE_BY_ID } from '../../data/roleAgents'
import { isAdmin } from '../../config/admin'
import { ModuleHost } from '../../modules/ModuleHost'
import { MODULES, MODULE_BY_ID } from '../../modules/registry'
import { skinById } from '../../data/skins'
import { Character3DImage } from '../three/Character3DImage'
import { SkinPicker } from '../workshop/WorkshopModal'
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

// Expand the dashboard panel to true fullscreen on desktop (native API), or
// exit if already fullscreen.
function toggleDashFull() {
  try {
    const el = (document.querySelector('.dash-side') as HTMLElement | null) ?? document.querySelector('.dash-panels') as HTMLElement | null
    if (!document.fullscreenElement) void el?.requestFullscreen?.()
    else void document.exitFullscreen?.()
  } catch { /* fullscreen not available */ }
}

// fiat credit packs · ~1 credit per task. Price per credit by currency (XRP
// display falls back to USD — the user never sees the settlement rail).
const CREDIT_UNIT: Record<string, number> = { USD: 1, EUR: 1, JPY: 150 }
const CREDIT_SYM: Record<string, string> = { USD: '$', EUR: '€', JPY: '¥' }
const CREDIT_PACKS = [30, 100, 500]

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
  const dojos = useWorkshop((s) => s.dojos)
  const setActiveDojo = useWorkshop((s) => s.setActiveDojo)
  const updateAgent = useWorkshop((s) => s.updateAgent)
  const save = useWorkshop((s) => s.save)
  const account = useWorkshop((s) => s.account)
  const agents = dojo?.agents ?? []
  const cycleDojo = (dir: 1 | -1) => {
    if (dojos.length < 2 || !dojo) return
    const i = dojos.findIndex((d) => d.id === dojo.id)
    setActiveDojo(dojos[(i + dir + dojos.length) % dojos.length].id)
  }
  // the selected agent drives the whole panel (also set by clicking a 3D agent)
  const selectedId = useDojo((s) => s.selectedAgent)
  const selectAgent = useDojo((s) => s.selectAgent)
  const byRole = (roleId: string) => agents.find((a) => a.role === roleId)
  // The 3D skin (character) of the agent that owns a given role / module — so a
  // mission or studio card shows the real agent that runs it, never an emoji.
  const skinForRole = (roleId: string) => {
    const a = byRole(roleId)
    return a ? skinById(a.skinId) : undefined
  }
  const skinForModule = (moduleId: string) => skinForRole(MODULE_BY_ID[moduleId]?.agentRole ?? '')
  const ceo = byRole('ceo') ?? agents.find((a) => a.fn === 'Leadership') ?? agents[0]
  const selected = agents.find((a) => a.id === selectedId) ?? null
  // Always resolve a role for a selected agent so the detail panel never comes
  // up blank — even if a persisted dojo carries an agent with a legacy role id.
  const selRole = selected ? (ROLE_BY_ID[selected.role ?? ''] ?? ROLE_BY_ID.ceo) : undefined

  const run = useWork((s) => s.run)
  const running = useWork((s) => s.runningTask)
  const tools = useWork((s) => s.tools)
  const openStudio = useWork((s) => s.openStudio)
  const editAgent = useWork((s) => s.editAgent)
  const autopilot = useWork((s) => s.autopilot)
  const showDeliverable = useWork((s) => s.showDeliverable)
  const delivs = useDeliverables((s) => s.byDojo[dojo?.id ?? ''] ?? [])
  const got = (kind: string) => delivs.find((d) => d.taskId === kind)
  const noModel = delivs.some((d) => d.model === 'local draft')
  const usage = useDojo((s) => s.usage)
  const stats = useDojo((s) => s.stats)
  const pushToast = useDojo((s) => s.pushToast)
  const engine = useEngine()

  const [msg, setMsg] = useState('')
  const [budget, setBudget] = useState('20')
  const [buying, setBuying] = useState(false)
  const [payMsg, setPayMsg] = useState('')
  const [picking, setPicking] = useState(false) // skin picker open for the selected agent
  const [moduleId, setModuleId] = useState<string | null>(null) // open studio module

  // Clicking an agent (roster card OR the 3D dojo) jumps STRAIGHT to its studio
  // dashboard — no intermediate profile screen. Utility agents (CEO, Engine,
  // Credits, Config) have no studio, so they show their control panel instead.
  useEffect(() => {
    if (!selectedId) return
    const a = agents.find((x) => x.id === selectedId)
    const mod = a && MODULES.find((m) => m.agentRole === (a.role ?? ''))
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
    if (engine.paused) { pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Company paused', text: 'Resume it in the Config agent dashboard.' }); return }
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
      case 'ceo': return <Guide lead="Your CEO is the brain of your company: you talk to it in plain language and it decides what to do, then hands the work out to the other agents."
        steps={[
          <>Write your goal in one sentence (e.g. "find me 20 prospects and write to them").</>,
          <>Click <b>Send</b>: the CEO breaks down the goal and assigns it to the right agents.</>,
          <>Or click <b>Launch the CEO</b>: it chains strategy, website, offer, ads and outreach on its own.</>,
          <>Every morning it sends you an <b>email report</b> (WhatsApp / Telegram coming soon).</>,
        ]} tip="One clear goal per message gives better results." />
      case 'engine': return <Guide lead="The Engine agent sets how much your CEO acts on its own, and stops it from overspending or going in circles."
        steps={[
          <>Choose an <b>autonomy level</b>: Auto self-regulates; Low / Medium / Hard / Ultra cap it at 1 / 5 / 10 / 25 autonomous tasks per day.</>,
          <>Set a <b>daily credit cap</b>.</>,
          <>An <b>anti-loop guard</b> blocks a task that keeps repeating itself.</>,
          <>Track tasks and credits used today in real time.</>,
        ]} tip="These limits only rein in background autonomy: your manual launches always go through." />
      case 'work': return <Guide lead="The Work agent runs, on demand, the concrete deliverables that your roster of agents can produce."
        steps={[
          <>Browse the list: each row shows the agent and the task.</>,
          <>Click <b>Launch</b> to run it right away.</>,
          <>The agent comes to life in the dojo and the <b>result opens</b> as soon as it's ready.</>,
        ]} tip="Connect the relevant apps (Studio) for richer results." />
      case 'web': return <Guide lead="The Web agent generates and deploys a real public website for your company, which you then customise."
        steps={[
          <>It creates a <b>first version</b> of the website from your description.</>,
          <>Edit it in a Lovable-style visual editor. <em>(coming soon)</em></>,
          <>Publish: your website goes live at your dojoburo.app address.</>,
        ]} tip="Start with the content (offer, benefits, call to action)." />
      case 'acq': return <Guide lead="The Acquisition agent runs Meta campaigns (Facebook & Instagram) — Meta only, no Google."
        steps={[
          <>Set a <b>daily budget</b> in your currency.</>,
          <>Click <b>Generate creatives</b>: 5 Meta ad variants (copy, hook, visual, audience).</>,
          <>Connect your <b>Meta</b> account (Studio) to run them for real.</>,
        ]} tip="Start with a small budget, then put more into what works." />
      case 'outbound': return <Guide lead="The Outbound agent finds prospects, verifies their emails and runs outreach sequences."
        steps={[
          <>Describe your <b>target</b> and start a prospect search.</>,
          <>The emails found are <b>verified</b> to avoid bounces.</>,
          <>Connect <b>Gmail</b> to send from your inbox.</>,
        ]} tip="A short, personalised message converts better than a long pitch." />
      case 'measure': return <Guide lead="The Measure agent is your company's numbers dashboard: what your agents produce and consume."
        steps={[
          <><b>Tasks delivered</b>: the total of deliverables produced.</>,
          <><b>Tokens</b>: the volume of AI compute used.</>,
          <><b>Credits (today)</b>: your spend today.</>,
          <><b>Connectors</b>: the number of connected apps.</>,
        ]} tip="The more apps you connect, the more real and measurable the work becomes." />
      case 'revenue': return <Guide lead="The Revenue agent builds what you sell and collects payments from your customers for real."
        steps={[
          <>It proposes an <b>offer</b>, <b>pricing</b> and the copy for a payment page.</>,
          <>Connect <b>Stripe</b> to create the products and receive payments.</>,
          <>Share the <b>payment link</b>; sales flow back into Measure.</>,
        ]} tip="Start with a single clear offer." />
      case 'credit': return <Guide lead="The Credit agent powers your agents' work. You top up in your currency, with no crypto at all."
        steps={[
          <>Choose a <b>pack</b> (30 / 100 / 500 credits) shown in {fiatCur}.</>,
          <>The payment opens in a new window (card, secure).</>,
          <>Each task uses <b>about 1 credit</b>; settlement happens behind the scenes.</>,
        ]} tip="The autonomy level (Engine) helps you keep your consumption under control." />
      case 'config': return <Guide lead="The Config agent keeps your environment variables encrypted along with the safety switches."
        steps={[
          <>Give a <b>name</b> (e.g. STRIPE_KEY), paste the <b>value</b> and a note.</>,
          <>The value is <b>encrypted server-side</b> (AES-256-GCM).</>,
          <>It is exposed to your agents as an environment variable.</>,
          <>Put the company <b>on pause</b> to stop everything.</>,
        ]} tip="Use scoped, restricted keys and rotate them regularly." />
      default: return null
    }
  }

  // ---- the specialized body for each role dashboard --------------------------
  const bodyFor = (roleId: string, agentName: string): React.ReactNode => {
    switch (roleId) {
      case 'ceo': return (
        <>
          <div className="composer-row">
            <input value={msg} onChange={(e) => setMsg(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendCeo()} placeholder="Tell your CEO what to prioritise…" />
            <button className="btn primary tiny" onClick={sendCeo} disabled={!msg.trim() || autopilot.running}>Send</button>
          </div>
          {autopilot.running ? (
            <p className="ceo-autopilot"><span className="ceo-spin" /> The CEO is working · <b>{autopilot.step}</b>…</p>
          ) : (
            <button className="btn tiny ceo-launch" disabled={!!running} onClick={() => void launchCeo(dojo?.name || 'my company')}>▶ Launch the CEO (build everything)</button>
          )}
          {noModel && (
            <p className="ceo-nomodel">⚠️ <b>No AI model connected</b> — the CEO produces <b>drafts</b>. For real generation: <button className="linklike" onClick={() => openStudio('billing')}>add your Claude key</button> (Studio → Billing), or the operator enables a free key (Groq / Gemini).</p>
          )}
          <p className="muted small">The CEO chains website, offer, ads and outreach on its own (within the Engine's limits) · daily email report.</p>
        </>
      )
      case 'engine': return (
        <>
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
        </>
      )
      case 'work': return (
        <>
          {agents.length === 0 && <p className="muted small">No agents yet — create your Dojo in the Studio.</p>}
          <ul className="dash-tasks">
            {agents.filter((a) => a.role !== 'ceo').flatMap((a) => tasksForFunction(a.fn).slice(0, 2).map((wt) => (
              <li key={`${a.id}:${wt.id}`}>
                <span><b>{a.name}</b> · {wt.label}</span>
                <button className="btn tiny" disabled={!!running} onClick={() => void runTask(a.name, wt.id)}>{running === wt.id ? '…' : 'Launch'}</button>
              </li>
            )))}
          </ul>
        </>
      )
      case 'web': return (
        <>
          <p className="muted small">Status: <b>{got('website') ? 'generated ✓' : 'not deployed'}</b> · address <code>{(dojo?.name || 'dojo').toLowerCase().replace(/\s+/g, '-')}.dojoburo.app</code></p>
          <div className="dash-actions">
            <button className="btn tiny" disabled={!!running || autopilot.running} onClick={() => void runTask(agentName, 'website', dojo?.name || '')}>{got('website') ? 'Regenerate' : 'Generate the website'}</button>
            {got('website') && <button className="btn tiny" onClick={() => showDeliverable(got('website')!)}>View website</button>}
            <button className="btn tiny ghost" onClick={() => openStudio('studio')}>Connect Figma</button>
          </div>
        </>
      )
      case 'acq': return (
        <>
          <label className="dash-inline">Budget /day
            <input type="number" min="1" value={budget} onChange={(e) => setBudget(e.target.value)} />
            <span className="muted small">{fiatCur}</span>
          </label>
          <div className="dash-actions">
            <button className="btn tiny" disabled={!!running || autopilot.running} onClick={() => void runTask(agentName, 'ads', `Budget ${budget} ${fiatCur}/day for ${dojo?.name || 'the company'}`)}>{got('ads') ? 'Regenerate' : 'Generate creatives'}</button>
            {got('ads') && <button className="btn tiny" onClick={() => showDeliverable(got('ads')!)}>View creatives</button>}
            <button className="btn tiny ghost" onClick={() => openStudio('studio')}>Connect Meta</button>
          </div>
        </>
      )
      case 'outbound': return (
        <div className="dash-actions">
          <button className="btn tiny" disabled={!!running || autopilot.running} onClick={() => void runTask(agentName, 'outreach', dojo?.name || '')}>{got('outreach') ? 'Follow up' : 'Find prospects'}</button>
          {got('outreach') && <button className="btn tiny" onClick={() => showDeliverable(got('outreach')!)}>View outreach</button>}
          <button className="btn tiny ghost" onClick={() => openStudio('studio')}>Connect Gmail</button>
        </div>
      )
      case 'measure': return (
        <div className="dash-metrics">
          <div><span>{tasksDone}</span><em>tasks delivered</em></div>
          <div><span>{Math.round(usage.tokens / 1000)}k</span><em>tokens</em></div>
          <div><span>{engine.creditsToday}</span><em>credits (today)</em></div>
          <div><span>{connectedCount}</span><em>connectors</em></div>
        </div>
      )
      case 'revenue': return (
        <div className="dash-actions">
          <button className="btn tiny" disabled={!!running || autopilot.running} onClick={() => void runTask(agentName, 'offer', dojo?.name || '')}>{got('offer') ? 'Regenerate' : 'Create an offer'}</button>
          {got('offer') && <button className="btn tiny" onClick={() => showDeliverable(got('offer')!)}>View offer</button>}
          <button className="btn tiny ghost" onClick={() => openStudio('studio')}>Connect Stripe</button>
        </div>
      )
      case 'credit': return (
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
      case 'config': return (
        <>
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
      default: return null
    }
  }

  // ------------------------------------------------------------------ MODULE --
  if (moduleId) {
    return <ModuleHost moduleId={moduleId} dojoId={dojo?.id ?? ''} onClose={() => { setModuleId(null); selectAgent(null) }} />
  }

  // ------------------------------------------------------------------ DETAIL --
  if (selected && selRole) {
    const skin = skinById(selected.skinId)
    return (
      <div className="agentdash" style={{ ['--dc' as string]: selRole.tint }}>
        <div className="ad-topbar">
          <button className="ad-back" onClick={() => selectAgent(null)}>‹ All agents</button>
          <button className="btn tiny ghost" onClick={() => editAgent(selected.id)} title="Advanced editing in the Studio">Studio ✎</button>
        </div>

        <header className="ad-head">
          <button className="ad-avatar ad-avatar-3d" onClick={() => setPicking(true)} title="Change this agent's skin">
            <Character3DImage skin={skin} size={96} />
            <span className="ad-avatar-edit">Skin</span>
          </button>
          <div className="ad-meta">
            <input
              className="ad-name"
              value={selected.name}
              onChange={(e) => updateAgent(selected.id, { name: e.target.value.slice(0, 22) })}
              onBlur={() => save()}
              onKeyDown={(e) => { if (e.key === 'Enter') (e.target as HTMLInputElement).blur() }}
              aria-label="Agent name"
            />
            <p className="ad-role">{selRole.role}</p>
            <span className="ad-cat" style={{ background: selRole.tint }}>{selRole.cat}</span>
          </div>
          <InfoDot title={selRole.cat}>{guideFor(selRole.id)}</InfoDot>
        </header>

        <p className="ad-blurb">{selRole.blurb}</p>

        {/* the agent's studio(s) — each studio agent IS its tool. Utility agents
            (CEO, Engine, Credits, Config) show their control panel instead. */}
        {(() => {
          const roleModules = MODULES.filter((m) => m.agentRole === selRole.id)
          if (roleModules.length) {
            return (
              <div className="lp-studioteam ad-studioteam">
                {roleModules.map((m) => {
                  const mSkin = skinForModule(m.id)
                  return (
                    <button key={m.id} className="lp-studiocard" style={{ ['--ac' as string]: m.tint }} onClick={() => setModuleId(m.id)}>
                      {mSkin && <span className="lp-team-3d"><Character3DImage skin={mSkin} size={110} /></span>}
                      <strong>{m.label}</strong>
                      <span className="lp-studiocard-blurb">{m.blurb}</span>
                      <span className="lp-team-more">Open the studio →</span>
                    </button>
                  )
                })}
              </div>
            )
          }
          return <div className="ad-body">{bodyFor(selRole.id, selected.name)}</div>
        })()}

        {picking && (
          <SkinPicker
            current={selected.skinId}
            onPick={(id) => { updateAgent(selected.id, { skinId: id }); save(); setPicking(false) }}
            onClose={() => setPicking(false)}
          />
        )}
      </div>
    )
  }

  // ------------------------------------------------------------------ ROSTER --
  const roster = ROLE_AGENTS.map((r) => byRole(r.id)).filter(Boolean) as typeof agents
  return (
    <div className="dash-panels">
      {dojos.length > 1 && (
        <div className="dash-hero-switch">
          <button onClick={() => cycleDojo(-1)} aria-label="Previous dojo">‹</button>
          <select value={dojo?.id} onChange={(e) => setActiveDojo(e.target.value)} aria-label="Switch dojo">
            {dojos.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}
          </select>
          <button onClick={() => cycleDojo(1)} aria-label="Next dojo">›</button>
        </div>
      )}
      <div className="dash-hero">
        <div>
          <h2>{account?.name || 'Your'} · {dojo?.name || 'Dojo'} {isAdmin(account ?? null) && <span className="admin-badge" title="Admin account · unlimited free testing">ADMIN · unlimited</span>}</h2>
          <p>Click an agent to open its dashboard. The CEO coordinates the whole team.</p>
        </div>
        <div className="dash-hero-actions">
          <button className="btn tiny" onClick={toggleDashFull} title="Fullscreen dashboard (desktop)">⤢ Fullscreen</button>
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

      {/* CEO quick action — the orchestrator sits above the roster */}
      <div className="ceo-quick" style={{ ['--dc' as string]: ROLE_BY_ID.ceo.tint }}>
        <div className="composer-row">
          <input value={msg} onChange={(e) => setMsg(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendCeo()} placeholder="Tell your CEO what to prioritise…" />
          <button className="btn primary tiny" onClick={sendCeo} disabled={!msg.trim() || autopilot.running}>Send</button>
        </div>
        {autopilot.running
          ? <p className="ceo-autopilot"><span className="ceo-spin" /> The CEO is working · <b>{autopilot.step}</b>…</p>
          : <button className="btn tiny ceo-launch" disabled={!!running} onClick={() => void launchCeo(dojo?.name || 'my company')}>▶ Launch the CEO (build everything)</button>}
        {noModel && <p className="ceo-nomodel">⚠️ <b>No AI model connected</b> — the CEO produces <b>drafts</b>. <button className="linklike" onClick={() => openStudio('billing')}>Add your Claude key</button> for real generation.</p>}
      </div>

      <div className="mission-head">
        <h3>Your team</h3>
        <span className="muted small">Click an agent to open its studio — one agent per job.</span>
      </div>
      <div className="lp-studioteam agent-roster">
        {roster.map((a) => {
          const r = ROLE_BY_ID[a.role as string]
          if (!r) return null
          const owns = MODULES.some((m) => m.agentRole === r.id)
          return (
            <button key={a.id} className="lp-studiocard" style={{ ['--ac' as string]: r.tint }} onClick={() => selectAgent(a.id)}>
              <span className="lp-team-3d"><Character3DImage skin={skinById(a.skinId)} size={110} /></span>
              <span className="lp-studiocard-cat">{r.cat}</span>
              <strong>{a.name}</strong>
              <span className="lp-team-role">{r.role}</span>
              <span className="lp-studiocard-blurb">{r.blurb}</span>
              <span className="lp-team-more">{owns ? 'Open the studio →' : 'Open →'}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
