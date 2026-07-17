// TeamStudio · the full workspace for the OPTIONAL group agents (Engineering,
// Support, Comms, Legal). Each agent gets its OWN complete studio:
//   1. real AI deliverables · runs the server work engine with the agent's
//      connected apps as live tools (degrades to a clearly-labelled local draft
//      when no model/backend is configured · never dead)
//   2. one instant quick action · fires for REAL where a send exists (Comms →
//      Slack) and copies a ready-to-paste draft otherwise
//   3. the agent's app grid with live connect / disconnect status
//   4. the agent's deliverable history · everything it produced stays here
import { useEffect, useState } from 'react'
import type { ModuleProps } from '../registry'
import { useDojo } from '../../store'
import { useWork } from '../../agents/workStore'
import { useEngine } from '../../agents/engineStore'
import { useDeliverables } from '../../agents/deliverables'
import { startConnect, postSlack } from '../../agents/workApi'
import { ROLE_BY_ID } from '../../data/roleAgents'
import { CONNECTOR_BY_ID } from '../../data/connectors'
import { ConnectorLogo } from '../../components/ConnectorLogo'

// The AI deliverables each agent can produce · all run for real through the
// server work engine (see api/_lib/worktasks.ts) with the agent's connectors.
interface WorkSpec { id: string; label: string; blurb: string; placeholder: string }
const WORK: Record<string, WorkSpec[]> = {
  devi: [
    { id: 'prd', label: 'PRD', blurb: 'A product requirements doc: goals, scope, stories, acceptance criteria.', placeholder: 'e.g. In-app referral program' },
    { id: 'tech-spec', label: 'Technical design', blurb: 'Architecture, data model, API surface and a rollout plan.', placeholder: 'e.g. Move image processing to background jobs' },
    { id: 'code-review', label: 'Code review', blurb: 'A concrete review: risks, bugs, security, simplifications.', placeholder: 'e.g. The new checkout PR (paste a link or describe it)' },
  ],
  helpi: [
    { id: 'support-reply', label: 'Support reply', blurb: 'A ready-to-send answer + internal note for a customer message.', placeholder: 'Paste the customer message…' },
    { id: 'faq', label: 'Help-center FAQ', blurb: 'The 10 most likely questions, answered, plus 3 reusable macros.', placeholder: 'e.g. Our onboarding and billing' },
  ],
  nexa: [
    { id: 'announcement', label: 'Announcement pack', blurb: 'One update adapted for Slack, Discord, WhatsApp and email.', placeholder: 'e.g. We shipped dark mode + 2× faster exports' },
  ],
  legi: [
    { id: 'contract', label: 'Contract draft', blurb: 'A structured agreement with numbered clauses + a signature checklist.', placeholder: 'e.g. Mutual NDA with Acme Corp' },
    { id: 'policy', label: 'Privacy & terms', blurb: 'Draft privacy policy + terms of service for your website.', placeholder: 'e.g. SaaS with EU customers, Stripe payments' },
  ],
}

// One instant quick-action per agent. `realSend` (optional) actually acts inside
// a connected app; without it, the action assembles a draft copied to clipboard.
interface ActionSpec {
  title: string
  hint: string
  label: string
  multiline?: boolean
  placeholder: string
  /** connector that unlocks a REAL send · when connected, `send` fires. */
  liveConnector?: string
  send?: (text: string) => Promise<{ ok: boolean; error?: string }>
  /** turn the input into the draft that gets copied when no live send runs. */
  draft: (text: string) => string
}

const ACTIONS: Record<string, ActionSpec> = {
  nexa: {
    title: 'Broadcast now',
    hint: 'Posts to your Slack channel for real when Slack is connected · otherwise copies a ready message for Discord, Zoom chat or WhatsApp.',
    label: 'Broadcast',
    multiline: true,
    placeholder: 'Team update, announcement or reminder…',
    liveConnector: 'slack',
    send: (text) => postSlack(text),
    draft: (text) => text,
  },
  devi: {
    title: 'Capture an issue',
    hint: 'Turns a one-line title into a clean issue draft (title + acceptance checklist) you can paste into GitHub, Linear or Jira.',
    label: 'Draft issue',
    placeholder: 'e.g. Checkout button misaligned on mobile',
    draft: (t) => `# ${t}\n\n## Context\n- \n\n## Acceptance criteria\n- [ ] \n- [ ] \n\n## Notes\n- `,
  },
  helpi: {
    title: 'Instant reply',
    hint: 'Writes a warm, structured reply you can drop into Zendesk or Intercom.',
    label: 'Draft reply',
    multiline: true,
    placeholder: 'Paste the customer question or describe the issue…',
    draft: (t) => `Hi there,\n\nThanks for reaching out — I'm happy to help with this.\n\n${t}\n\nHere's what I'd suggest as a next step:\n1. \n2. \n\nLet me know if that works and I'll follow it through.\n\nBest,\nSupport team`,
  },
  legi: {
    title: 'Instant outline',
    hint: 'Outlines a signature-ready document you can send from DocuSign or store in Drive.',
    label: 'Prepare draft',
    placeholder: 'e.g. Mutual NDA with Acme Corp',
    draft: (t) => `${t.toUpperCase()}\n\nThis agreement is made between the parties below.\n\n1. Purpose\n\n2. Term\n\n3. Obligations\n\n4. Signatures\n\n_____________________        _____________________\nParty A                                Party B`,
  },
}

function relTime(ms: number): string {
  const s = Math.max(0, (Date.now() - ms) / 1000)
  if (s < 60) return 'just now'
  if (s < 3600) return `${Math.floor(s / 60)}m ago`
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`
  return `${Math.floor(s / 86400)}d ago`
}

// Thin per-agent wrappers · each is its own studio, same consistent workspace.
export const DeviModule = (p: ModuleProps) => <TeamStudio {...p} agentKey="devi" />
export const HelpiModule = (p: ModuleProps) => <TeamStudio {...p} agentKey="helpi" />
export const NexaModule = (p: ModuleProps) => <TeamStudio {...p} agentKey="nexa" />
export const LegiModule = (p: ModuleProps) => <TeamStudio {...p} agentKey="legi" />

export default function TeamStudio({ agentKey, dojoId }: ModuleProps & { agentKey: string }) {
  const role = ROLE_BY_ID[agentKey]
  const pushToast = useDojo((s) => s.pushToast)
  const tools = useWork((s) => s.tools)
  const backend = useWork((s) => s.backend)
  const loadedOnce = useWork((s) => s.loadedOnce)
  const loadTools = useWork((s) => s.loadTools)
  const disconnect = useWork((s) => s.disconnect)
  const run = useWork((s) => s.run)
  const running = useWork((s) => s.runningTask)
  const showDeliverable = useWork((s) => s.showDeliverable)
  const engine = useEngine()
  const delivs = useDeliverables((s) => s.byDojo[dojoId] ?? [])

  const [text, setText] = useState('')
  const [busy, setBusy] = useState(false)
  const work = WORK[agentKey] ?? []
  const [taskId, setTaskId] = useState(work[0]?.id ?? '')
  const [brief, setBrief] = useState('')

  useEffect(() => { if (!loadedOnce) void loadTools() }, [loadedOnce, loadTools])

  if (!role) return null
  const apps = role.apps.map((id) => CONNECTOR_BY_ID[id]).filter(Boolean)
  const connectedCount = apps.filter((c) => tools[c.id]?.connected).length
  const action = ACTIONS[agentKey]
  const liveOn = !!(action?.liveConnector && tools[action.liveConnector]?.connected)
  const workIds = new Set(work.map((w) => w.id))
  const mine = delivs.filter((d) => workIds.has(d.taskId))
  const activeTask = work.find((w) => w.id === taskId) ?? work[0]

  // Run a real AI deliverable through the work engine, with this agent's apps
  // attached as live tools. Same guard rails as everywhere else: hard company
  // pause blocks it; every failure surfaces a clear, actionable toast.
  const runDeliverable = async () => {
    if (!activeTask || running) return
    if (engine.paused) {
      pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Company paused', text: 'Resume it in Sentinel (Security Studio).' })
      return
    }
    engine.record(`${role.code}:${activeTask.id}`)
    pushToast({ kind: 'event', badge: '▶', color: role.tint, title: role.code, text: `Working on “${activeTask.label}”…` })
    await run({ task: activeTask.id, agentName: role.code, connectors: role.apps, brief: brief.trim() })
    const err = useWork.getState().runError
    if (err) {
      const map: Record<string, string> = {
        needs_key: 'Add your Claude key (Studio → Billing) for this deliverable.',
        quota: 'Daily free quota reached · add your Claude key to continue.',
        not_configured: 'No AI model is configured on this deployment (Claude key or free cascade).',
        network: 'Network error · please try again in a moment.',
        unknown_task: 'This deployment does not know this task yet · redeploy the server.',
      }
      pushToast({ kind: 'event', badge: '!', color: '#e0483f', title: 'Deliverable not launched', text: map[err.code] || `Failed: ${err.detail || err.code}.` })
    } else {
      setBrief('')
    }
  }

  const runAction = async () => {
    const t = text.trim()
    if (!t || busy || !action) return
    if (liveOn && action.send) {
      setBusy(true)
      const r = await action.send(t)
      setBusy(false)
      if (r.ok) { setText(''); pushToast({ kind: 'event', badge: 'OK', color: '#1fa563', title: 'Sent', text: 'Broadcast posted to your team.' }) }
      else { const map: Record<string, string> = { not_connected: 'Reconnect the app first.', no_backend: 'Publishing needs the server vault configured.', rate: 'Too many sends · wait a minute.', post_failed: 'The app refused it · reconnect it.' }; pushToast({ kind: 'event', badge: '!', color: '#e0483f', title: 'Not sent', text: map[r.error || ''] || 'Could not send.' }) }
      return
    }
    // no live send → assemble a draft and copy it
    const draft = action.draft(t)
    try { await navigator.clipboard?.writeText(draft) } catch { /* clipboard blocked */ }
    pushToast({ kind: 'event', badge: 'OK', color: '#2f6bff', title: 'Draft copied', text: 'Ready to paste into your app.' })
  }

  return (
    <div className="team-mod se" style={{ ['--dc' as string]: role.tint }}>
      <header className="mod-intro">
        <h3 className="sq-title">{role.title} <span className="team-code">{role.code}</span></h3>
        <p className="sq-lead">{role.desc}</p>
      </header>

      {/* the studio at a glance */}
      <div className="biz-overview team-overview">
        <div className="biz-tile"><span>{connectedCount}/{apps.length}</span><em>apps connected</em></div>
        <div className="biz-tile"><span>{mine.length}</span><em>deliverables</em></div>
        <div className="biz-tile"><span>{liveOn ? 'LIVE' : 'draft'}</span><em>quick action</em></div>
      </div>

      {/* Real AI deliverables · the agent's core work */}
      {work.length > 0 && (
        <section className="se-card team-work">
          <div className="mission-head">
            <h3 className="sq-title">Ask {role.code} for a deliverable</h3>
            <span className="muted small">Runs for real with the AI engine · connected apps join in as live tools.</span>
          </div>
          <div className="team-work-tabs">
            {work.map((w) => (
              <button key={w.id} className={`team-work-tab${w.id === (activeTask?.id ?? '') ? ' on' : ''}`} onClick={() => setTaskId(w.id)}>
                {w.label}
              </button>
            ))}
          </div>
          {activeTask && (
            <>
              <p className="muted small">{activeTask.blurb}</p>
              <textarea
                className="team-input"
                rows={2}
                value={brief}
                onChange={(e) => setBrief(e.target.value)}
                placeholder={activeTask.placeholder}
                maxLength={2000}
              />
              <div className="brand-actions">
                <button className="btn primary tiny" disabled={!!running} onClick={() => void runDeliverable()}>
                  {running === activeTask.id ? 'Working…' : `Run ${activeTask.label}`}
                </button>
              </div>
            </>
          )}
        </section>
      )}

      {/* One instant quick action */}
      {action && (
        <section className="se-card team-action">
          <div className="mission-head">
            <h3 className="sq-title">{action.title}</h3>
            <span className="muted small">{action.hint}</span>
          </div>
          {action.multiline ? (
            <textarea className="team-input" rows={4} value={text} onChange={(e) => setText(e.target.value)} placeholder={action.placeholder} maxLength={3000} />
          ) : (
            <input className="team-input" value={text} onChange={(e) => setText(e.target.value)} placeholder={action.placeholder} maxLength={300} />
          )}
          <div className="brand-actions">
            <button className="btn primary tiny" disabled={!text.trim() || busy} onClick={() => void runAction()}>
              {busy ? 'Sending…' : liveOn ? action.label : `${action.label} (copy)`}
            </button>
            {action.liveConnector && !liveOn && (
              <button className="btn tiny" onClick={() => startConnect(action.liveConnector!)}>Connect {CONNECTOR_BY_ID[action.liveConnector]?.label} for live send</button>
            )}
          </div>
        </section>
      )}

      {/* Apps this agent works with */}
      <section className="se-card team-apps">
        <div className="mission-head">
          <h3 className="sq-title">Connected apps <span className="team-count">{connectedCount}/{apps.length}</span></h3>
          <span className="muted small">Link an app and this agent works inside it for real.</span>
        </div>
        <ul className="team-app-list">
          {apps.map((c) => {
            const st = tools[c.id]
            const connected = !!st?.connected
            const available = !!st?.available
            return (
              <li key={c.id} className={`team-app${connected ? ' on' : ''}`}>
                <ConnectorLogo id={c.id} label={c.label} size={30} />
                <span className="team-app-meta">
                  <span className="team-app-name">{c.label}<em className="team-app-cat">{c.category}</em></span>
                  <span className="team-app-blurb">{connected && st?.account ? `Connected · ${st.account}` : c.blurb}</span>
                </span>
                <span className="team-app-act">
                  {connected ? (
                    <button className="btn tiny ghost" onClick={() => void disconnect(c.id)}>Disconnect</button>
                  ) : available ? (
                    <button className="btn tiny" onClick={() => startConnect(c.id)}>Connect</button>
                  ) : (
                    <a className="cx-setup" href={`/guide/${c.id}`} target="_blank" rel="noreferrer" title="See how to set this app up">Set up</a>
                  )}
                </span>
              </li>
            )
          })}
        </ul>
        {loadedOnce && !backend && (
          <p className="muted small">Live OAuth needs the worker configured. Until then you can still see each app and use the drafts above.</p>
        )}
      </section>

      {/* Everything this agent produced stays here */}
      {mine.length > 0 && (
        <section className="se-card team-delivs">
          <div className="mission-head">
            <h3 className="sq-title">{role.code}'s deliverables</h3>
            <span className="muted small">The latest of each kind is kept per company.</span>
          </div>
          <ul className="team-deliv-list">
            {mine.map((d) => (
              <li key={d.id} className="team-deliv">
                <span className="team-deliv-meta">
                  <b>{d.title}</b>
                  <em>{relTime(d.createdAt)}{d.model === 'local draft' ? ' · local draft' : ''}</em>
                </span>
                <button className="btn tiny" onClick={() => showDeliverable(d)}>View</button>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
