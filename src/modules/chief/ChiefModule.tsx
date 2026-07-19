// Chief · CEO · the company command center. This is the dashboard that used to
// live in the right panel over the dojo: company KPIs, the "tell Chief what to
// prioritise" composer + Launch Chief, and the team roster (click a teammate to
// open its studio). Chief is the only orchestration entry point.
import { useState, useEffect } from 'react'
import type { ModuleProps } from '../registry'
import { useWorkshop } from '../../workshop'
import { useDojo } from '../../store'
import { useWork } from '../../agents/workStore'
import { postSlack, toolData } from '../../agents/workApi'
import { useEngine } from '../../agents/engineStore'
import { useDeliverables } from '../../agents/deliverables'
import { launchCeo } from '../../agents/autopilot'
import { ROLE_AGENTS, ROLE_BY_ID, canonicalRole } from '../../data/roleAgents'

const AGENT_TASKS: Record<string, string[]> = {
  chief: ['strategy'], brandi: ['brand'], weblos: ['website'],
  marketus: ['ads', 'video', 'assets'], pumpi: ['outreach'],
  busino: ['offer', 'analytics', 'finance'], sentinel: [], vaultor: [],
}
function relTime(ms: number): string {
  if (!ms) return 'No activity yet'
  const s = Math.max(0, (Date.now() - ms) / 1000)
  if (s < 60) return 'just now'
  if (s < 3600) return `${Math.floor(s / 60)}m ago`
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`
  return `${Math.floor(s / 86400)}d ago`
}

interface CalEvent { title: string; start: string; allDay: boolean; location: string; link: string; attendees: number }
function whenLabel(iso: string, allDay: boolean): string {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  const date = d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })
  if (allDay) return date
  const time = d.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })
  return `${date} · ${time}`
}

export default function ChiefModule({ dojoId }: ModuleProps) {
  const dojo = useWorkshop((s) => s.dojos.find((d) => d.id === dojoId))
  const agents = dojo?.agents ?? []
  const selectAgent = useDojo((s) => s.selectAgent)
  const pushToast = useDojo((s) => s.pushToast)
  const stats = useDojo((s) => s.stats)
  const run = useWork((s) => s.run)
  const running = useWork((s) => s.runningTask)
  const tools = useWork((s) => s.tools)
  const openStudio = useWork((s) => s.openStudio)
  const autopilot = useWork((s) => s.autopilot)
  const engine = useEngine()
  const delivs = useDeliverables((s) => s.byDojo[dojoId] ?? [])
  const noModel = delivs.some((d) => d.model === 'local draft')
  const [msg, setMsg] = useState('')

  const setAgentHidden = useWorkshop((s) => s.setAgentHidden)
  const byRole = (roleId: string) => agents.find((a) => a.role === roleId)
  const showAgent = (roleId: string, title: string) => {
    setAgentHidden(roleId, false)
    const a = byRole(roleId); if (a) selectAgent(a.id)
    pushToast({ kind: 'event', badge: 'OK', color: '#1fa563', title: `${title} shown`, text: 'Opening its studio…' })
  }
  const chief = byRole('chief') ?? agents.find((a) => a.fn === 'Leadership') ?? agents[0]
  const tasksDone = Object.values(stats).reduce((n, s) => n + (s?.tasksDone ?? 0), 0)
  const connectedCount = Object.values(tools).filter((t) => (t as { connected?: boolean }).connected).length

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
        quota: 'Daily free quota reached · add your Claude key to continue.',
        not_configured: 'No AI model is configured on this deployment (Claude key or free cascade).',
        network: 'Network error · please try again in a moment.',
        unknown_task: 'This task is not recognised by the server.',
      }
      pushToast({ kind: 'event', badge: '!', color: '#e0483f', title: 'Deliverable not launched', text: map[err.code] || `Failed: ${err.detail || err.code}.` })
    }
  }
  const sendCeo = () => { const brief = msg.trim(); if (!brief) return; setMsg(''); void runTask(chief?.name || 'Chief', 'strategy', brief) }
  // Real Slack post · shares the current note to the team channel when Slack is connected.
  const slackOn = useWork((s) => !!s.tools['slack']?.connected)
  const [posting, setPosting] = useState(false)
  const doSlack = async () => {
    const text = msg.trim(); if (!text || posting) return
    setPosting(true)
    const r = await postSlack(text)
    setPosting(false)
    if (r.ok) { setMsg(''); pushToast({ kind: 'event', badge: 'OK', color: '#4a154b', title: 'Posted to Slack', text: 'Your team update is live in Slack.' }) }
    else { const map: Record<string, string> = { not_connected: 'Connect Slack first (Connect apps).', no_backend: 'Slack posting needs the server vault configured.', rate: 'Too many posts · wait a minute.', post_failed: 'Slack refused the post · reconnect Slack.' }; pushToast({ kind: 'event', badge: '!', color: '#e0483f', title: 'Not posted', text: map[r.error || ''] || 'Could not post to Slack.' }) }
  }

  // Upcoming meetings · from Google Calendar (preferred) or Calendly, whichever
  // is connected. Degrades to nothing when neither is set up.
  const gcalOn = useWork((s) => !!s.tools['gcal']?.connected)
  const calendlyOn = useWork((s) => !!s.tools['calendly']?.connected)
  const [meetings, setMeetings] = useState<{ source: string; events: CalEvent[] } | null>(null)
  useEffect(() => {
    let live = true
    const load = async () => {
      if (gcalOn) {
        const r = await toolData('gcal')
        const ev = (r.data as { events?: CalEvent[] })?.events
        if (live && r.connected && Array.isArray(ev)) { setMeetings({ source: 'Google Calendar', events: ev }); return }
      }
      if (calendlyOn) {
        const r = await toolData('calendly')
        const ev = (r.data as { events?: CalEvent[] })?.events
        if (live && r.connected && Array.isArray(ev)) { setMeetings({ source: 'Calendly', events: ev }); return }
      }
      if (live) setMeetings(null)
    }
    void load()
    return () => { live = false }
  }, [gcalOn, calendlyOn])

  return (
    <div className="chief-mod sq">
      <div className="biz-overview">
        <div className="biz-tile"><span>{engine.creditsToday}</span><em>credits (today)</em></div>
        <div className="biz-tile"><span>{delivs.filter((d) => d.taskId === 'ads').length}</span><em>campaigns</em></div>
        <div className="biz-tile"><span>{delivs.filter((d) => d.taskId === 'outreach').length}</span><em>outreach</em></div>
        <div className="biz-tile"><span>{tasksDone}</span><em>deliverables</em></div>
        <div className="biz-tile"><span>{connectedCount}</span><em>apps</em></div>
      </div>

      <div className="ceo-quick" style={{ ['--dc' as string]: ROLE_BY_ID.chief.tint }}>
        <div className="composer-row">
          <input value={msg} onChange={(e) => setMsg(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendCeo()} placeholder="Tell Chief what to prioritise…" />
          <button className="btn primary tiny" onClick={sendCeo} disabled={!msg.trim() || autopilot.running}>Send</button>
          {slackOn && <button className="btn tiny ghost" onClick={() => void doSlack()} disabled={!msg.trim() || posting} title="Post this note to your team Slack">{posting ? 'Posting…' : 'Slack'}</button>}
        </div>
        {autopilot.running
          ? <p className="ceo-autopilot"><span className="ceo-spin" /> Chief is working · <b>{autopilot.step}</b>…</p>
          : <button className="btn tiny ceo-launch" disabled={!!running} onClick={() => void launchCeo(dojo?.name || 'my company')}>▶ Launch Chief (build everything)</button>}
        {noModel && <p className="ceo-nomodel">⚠️ <b>No AI model connected</b> · Chief produces <b>drafts</b>. <button className="linklike" onClick={() => openStudio('billing')}>Add your Claude key</button> for real generation.</p>}
      </div>

      {meetings && meetings.events.length > 0 && (
        <div className="chief-cal se-card">
          <div className="mission-head">
            <h3 className="sq-title">Upcoming meetings</h3>
            <span className="muted small">Live from {meetings.source} · your next {meetings.events.length}.</span>
          </div>
          <ul className="chief-cal-list">
            {meetings.events.map((e, i) => (
              <li key={i} className="chief-cal-row">
                <span className="chief-cal-when">{whenLabel(e.start, e.allDay)}</span>
                <span className="chief-cal-title">{e.title}</span>
                <span className="chief-cal-meta">
                  {e.attendees > 0 && <em>{e.attendees} guest{e.attendees === 1 ? '' : 's'}</em>}
                  {e.location && <em>{e.location}</em>}
                  {e.link && <a href={e.link} target="_blank" rel="noreferrer" className="linklike">Join</a>}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mission-head">
        <h3 className="sq-title">Your team</h3>
        <span className="muted small">Your full crew · click one to open it. Hide the ones you don't need · restore them below.</span>
      </div>
      <div className="lp-studioteam agent-roster">
        {ROLE_AGENTS.map((r) => {
          const a = byRole(r.id)
          if (!a || a.hidden) return null   // hidden agents render as restore slots below
          const tasks = AGENT_TASKS[r.id] ?? []
          const times = delivs.filter((d) => tasks.includes(d.taskId)).map((d) => d.createdAt)
          const last = times.length ? Math.max(...times) : 0
          const working = !!running && tasks.includes(running)
          const status = engine.paused ? 'Paused' : working ? 'Working…' : last ? 'Active' : 'Ready'
          const statusMod = engine.paused ? 'paused' : working ? 'working' : last ? 'active' : 'ready'
          const role = ROLE_BY_ID[canonicalRole(a.role)]
          return (
            <div key={a.id} className="lp-studiocard agent-card" style={{ ['--ac' as string]: role.tint }} onClick={() => selectAgent(a.id)} role="button" tabIndex={0}>
              {r.id !== 'chief' && (
                <button className="agent-hide" title={`Hide ${role.title}`} aria-label={`Hide ${role.title}`} onClick={(e) => { e.stopPropagation(); setAgentHidden(r.id, true); pushToast({ kind: 'event', badge: '–', color: '#5b6472', title: `${role.title} hidden`, text: 'Restore it from the slots below.' }) }}>×</button>
              )}
              <strong className="agent-code">{a.name}</strong>
              <span className="agent-title">{role.title}</span>
              <span className="agent-desc">{role.desc}</span>
              <span className={`agent-status s-${statusMod}`}><i />{status}</span>
              <span className="agent-last">{relTime(last)}</span>
              <span className="agent-action">Open →</span>
            </div>
          )
        })}
        {/* Hidden agents · dotted slots to bring a specialist back */}
        {ROLE_AGENTS.filter((r) => byRole(r.id)?.hidden).map((r) => (
          <button key={`show-${r.id}`} className="lp-studiocard agent-add" style={{ ['--ac' as string]: r.tint }} onClick={() => showAgent(r.id, r.title)}>
            <span className="agent-add-plus">+</span>
            <span className="agent-title">{r.title}</span>
            <span className="agent-desc">{r.desc}</span>
            <span className="agent-add-cta">Show agent</span>
          </button>
        ))}
      </div>
    </div>
  )
}
