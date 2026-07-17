// TeamStudio · the shared workspace for the OPTIONAL group agents (Engineering,
// Support, Comms, Legal). Each agent gets its OWN studio: a short intro, the
// grid of apps it works with (live connect / disconnect status), and one focused
// quick action. Where a real send exists (Comms → Slack) the action fires for
// real; otherwise it produces a ready-to-use draft you can copy. Degrades
// cleanly when no connector backend is configured · zero regression.
import { useEffect, useState } from 'react'
import type { ModuleProps } from '../registry'
import { useDojo } from '../../store'
import { useWork } from '../../agents/workStore'
import { startConnect, postSlack } from '../../agents/workApi'
import { ROLE_BY_ID } from '../../data/roleAgents'
import { CONNECTOR_BY_ID } from '../../data/connectors'
import { ConnectorLogo } from '../../components/ConnectorLogo'

// One focused quick-action per agent. `realSend` (optional) actually acts inside
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
    title: 'Broadcast to your team',
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
    title: 'Draft a support reply',
    hint: 'Writes a warm, structured reply you can drop into Zendesk or Intercom.',
    label: 'Draft reply',
    multiline: true,
    placeholder: 'Paste the customer question or describe the issue…',
    draft: (t) => `Hi there,\n\nThanks for reaching out — I'm happy to help with this.\n\n${t}\n\nHere's what I'd suggest as a next step:\n1. \n2. \n\nLet me know if that works and I'll follow it through.\n\nBest,\nSupport team`,
  },
  legi: {
    title: 'Prepare a document',
    hint: 'Outlines a signature-ready document you can send from DocuSign or store in Drive.',
    label: 'Prepare draft',
    placeholder: 'e.g. Mutual NDA with Acme Corp',
    draft: (t) => `${t.toUpperCase()}\n\nThis agreement is made between the parties below.\n\n1. Purpose\n\n2. Term\n\n3. Obligations\n\n4. Signatures\n\n_____________________        _____________________\nParty A                                Party B`,
  },
}

// Thin per-agent wrappers · each is its own studio, same consistent workspace.
export const DeviModule = (p: ModuleProps) => <TeamStudio {...p} agentKey="devi" />
export const HelpiModule = (p: ModuleProps) => <TeamStudio {...p} agentKey="helpi" />
export const NexaModule = (p: ModuleProps) => <TeamStudio {...p} agentKey="nexa" />
export const LegiModule = (p: ModuleProps) => <TeamStudio {...p} agentKey="legi" />

export default function TeamStudio({ agentKey }: ModuleProps & { agentKey: string }) {
  const role = ROLE_BY_ID[agentKey]
  const pushToast = useDojo((s) => s.pushToast)
  const tools = useWork((s) => s.tools)
  const backend = useWork((s) => s.backend)
  const loadedOnce = useWork((s) => s.loadedOnce)
  const loadTools = useWork((s) => s.loadTools)
  const disconnect = useWork((s) => s.disconnect)
  const [text, setText] = useState('')
  const [busy, setBusy] = useState(false)

  useEffect(() => { if (!loadedOnce) void loadTools() }, [loadedOnce, loadTools])

  if (!role) return null
  const apps = role.apps.map((id) => CONNECTOR_BY_ID[id]).filter(Boolean)
  const connectedCount = apps.filter((c) => tools[c.id]?.connected).length
  const action = ACTIONS[agentKey]
  const liveOn = !!(action?.liveConnector && tools[action.liveConnector]?.connected)

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
          <p className="muted small">Live OAuth needs the worker configured. Until then you can still see each app and use the drafts below.</p>
        )}
      </section>

      {/* One focused action */}
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
    </div>
  )
}
