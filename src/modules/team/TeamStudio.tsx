// TeamStudio · the workspace for the group agents (Engineering, Comms, Support,
// Legal). Each agent gets its OWN studio: a short intro, the grid of apps it
// works with (live connect/disconnect), LIVE data pulled from the connected
// apps (issues, tickets, files, channels…), and a focused action that fires for
// real (open a GitHub issue, broadcast to Slack/Discord) or copies a ready
// draft. Everything degrades cleanly when an app or the backend isn't set up.
import { useEffect, useState, type ReactNode } from 'react'
import type { ModuleProps } from '../registry'
import { useDojo } from '../../store'
import { useWork } from '../../agents/workStore'
import { startConnect, postSlack, toolData, toolAction } from '../../agents/workApi'
import { ROLE_BY_ID } from '../../data/roleAgents'
import { CONNECTOR_BY_ID } from '../../data/connectors'

// connectors we have a live read provider for (api/tool-data.ts)
const LIVE = new Set(['github', 'linear', 'zendesk', 'intercom', 'gdrive', 'docusign', 'slack'])

function ago(iso: string): string {
  if (!iso) return ''
  const d = new Date(iso); if (Number.isNaN(d.getTime())) return ''
  const s = Math.max(0, (Date.now() - d.getTime()) / 1000)
  if (s < 3600) return `${Math.floor(s / 60)}m`
  if (s < 86400) return `${Math.floor(s / 3600)}h`
  return `${Math.floor(s / 86400)}d`
}

// A small live list · title, count and up to N rows with an optional link.
function LiveList({ title, count, empty, rows }: { title: string; count?: number; empty: string; rows: { key: string; primary: string; meta?: string; badge?: string; url?: string }[] }) {
  return (
    <div className="team-live">
      <div className="team-live-head">
        <h4 className="brand-h">{title}</h4>
        {typeof count === 'number' && <span className="team-count">{count}</span>}
      </div>
      {rows.length === 0 ? (
        <p className="muted small">{empty}</p>
      ) : (
        <ul className="team-live-list">
          {rows.map((r) => (
            <li key={r.key} className="team-live-row">
              <span className="team-live-main" title={r.primary}>{r.primary}</span>
              {r.meta && <span className="team-live-meta">{r.meta}</span>}
              {r.badge && <span className="team-live-badge">{r.badge}</span>}
              {r.url && <a className="linklike" href={r.url} target="_blank" rel="noreferrer">Open</a>}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
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
  const loadedOnce = useWork((s) => s.loadedOnce)
  const loadTools = useWork((s) => s.loadTools)
  const [text, setText] = useState('')
  const [repo, setRepo] = useState('')
  const [busy, setBusy] = useState('')
  const [live, setLive] = useState<Record<string, Record<string, unknown>>>({})

  useEffect(() => { if (!loadedOnce) void loadTools() }, [loadedOnce, loadTools])

  const appsKey = role ? role.apps.join(',') : ''
  useEffect(() => {
    if (!role) return
    let alive = true
    const load = async () => {
      const out: Record<string, Record<string, unknown>> = {}
      await Promise.all(role.apps.map(async (id) => {
        if (!LIVE.has(id) || !tools[id]?.connected) return
        const r = await toolData(id)
        if (r.connected && r.data) out[id] = r.data as Record<string, unknown>
      }))
      if (alive) setLive(out)
    }
    void load()
    return () => { alive = false }
    // refetch when the set of connected apps changes
  }, [appsKey, role, tools])

  if (!role) return null
  const apps = role.apps.map((id) => CONNECTOR_BY_ID[id]).filter(Boolean)
  const connectedCount = apps.filter((c) => tools[c.id]?.connected).length

  // ---- per-agent live panels ----
  const arr = (o: unknown): Record<string, unknown>[] => (Array.isArray(o) ? o as Record<string, unknown>[] : [])
  const s = (v: unknown) => String(v ?? '')
  let panels: ReactNode = null
  if (agentKey === 'devi') {
    const gh = live.github || {}
    const li = live.linear || {}
    panels = (
      <>
        {tools.github?.connected && (
          <>
            <LiveList title="Assigned issues" count={Number(gh.openIssues) || 0} empty="No open issues assigned to you."
              rows={arr(gh.issues).map((i, k) => ({ key: `gi${k}`, primary: s(i.title), meta: `${s(i.repo)}${i.number ? ` #${i.number}` : ''}`, url: s(i.url) }))} />
            <LiveList title="Open pull requests" count={Number(gh.openPrs) || 0} empty="No open PRs involving you."
              rows={arr(gh.prs).map((p, k) => ({ key: `pr${k}`, primary: s(p.title), meta: s(p.repo), url: s(p.url) }))} />
          </>
        )}
        {tools.linear?.connected && (
          <LiveList title="Linear issues" count={Number(li.open) || 0} empty="No open Linear issues assigned to you."
            rows={arr(li.issues).map((i, k) => ({ key: `l${k}`, primary: s(i.title), meta: s(i.id), badge: s(i.state), url: s(i.url) }))} />
        )}
      </>
    )
  } else if (agentKey === 'helpi') {
    const zd = live.zendesk || {}
    const ic = live.intercom || {}
    panels = (
      <>
        {tools.zendesk?.connected && (
          <LiveList title="Zendesk tickets" count={Number(zd.open) || 0} empty="No recent tickets."
            rows={arr(zd.tickets).map((t, k) => ({ key: `z${k}`, primary: s(t.subject), meta: `#${s(t.id)}`, badge: s(t.status) }))} />
        )}
        {tools.intercom?.connected && (
          <LiveList title="Intercom conversations" count={Number(ic.open) || 0} empty="No open conversations."
            rows={arr(ic.conversations).map((c, k) => ({ key: `i${k}`, primary: s(c.title), badge: s(c.state) }))} />
        )}
      </>
    )
  } else if (agentKey === 'nexa') {
    const sl = live.slack || {}
    panels = tools.slack?.connected ? (
      <LiveList title="Slack channels" count={Number(sl.total) || 0} empty="No public channels found."
        rows={arr(sl.channels).map((c, k) => ({ key: `c${k}`, primary: `#${s(c.name)}`, meta: `${Number(c.members) || 0} members` }))} />
    ) : null
  } else if (agentKey === 'legi') {
    const dr = live.gdrive || {}
    const ds = live.docusign || {}
    panels = (
      <>
        {tools.gdrive?.connected && (
          <LiveList title="Recent files" empty="No recent files."
            rows={arr(dr.files).map((f, k) => ({ key: `f${k}`, primary: s(f.name), meta: ago(s(f.modified)), url: s(f.url) }))} />
        )}
        {tools.docusign?.connected && (
          <LiveList title="DocuSign envelopes" count={Number(ds.pending) || 0} empty="No recent envelopes."
            rows={arr(ds.envelopes).map((e, k) => ({ key: `e${k}`, primary: s(e.subject), meta: ago(s(e.sent)), badge: s(e.status) }))} />
        )}
      </>
    )
  }

  // ---- focused action ----
  const runDevi = async () => {
    const title = text.trim(); if (!title || busy) return
    if (tools.github?.connected && repo.trim()) {
      setBusy('devi'); const r = await toolAction('github', 'issue', { repo: repo.trim(), title }); setBusy('')
      if (r.ok) { setText(''); pushToast({ kind: 'event', badge: 'OK', color: '#1fa563', title: `Issue #${r.number} opened`, text: `In ${repo.trim()}.` }) }
      else { const m: Record<string, string> = { no_repo: 'Enter a repo as owner/name.', not_connected: 'Connect GitHub first.', no_backend: 'Needs the server vault configured.', create_failed: 'GitHub refused it · check repo access.' }; pushToast({ kind: 'event', badge: '!', color: '#e0483f', title: 'Not created', text: m[r.error || ''] || 'Could not open the issue.' }) }
      return
    }
    const draft = `# ${title}\n\n## Context\n- \n\n## Acceptance criteria\n- [ ] \n- [ ] `
    try { await navigator.clipboard?.writeText(draft) } catch { /* blocked */ }
    pushToast({ kind: 'event', badge: 'OK', color: '#2f6bff', title: 'Issue draft copied', text: 'Connect GitHub + set a repo to open it for real.' })
  }
  const runNexa = async (channel: 'slack' | 'discord') => {
    const t = text.trim(); if (!t || busy) return
    setBusy(channel)
    const r = channel === 'slack' ? await postSlack(t) : await toolAction('discord', 'post', { text: t })
    setBusy('')
    if (r.ok) { setText(''); pushToast({ kind: 'event', badge: 'OK', color: '#1fa563', title: channel === 'slack' ? 'Posted to Slack' : 'Posted to Discord', text: 'Your broadcast is live.' }) }
    else { const m: Record<string, string> = { not_connected: 'Connect it first.', no_backend: 'Needs the server vault configured.', no_webhook: 'Discord needs an operator webhook (DISCORD_WEBHOOK_URL).', rate: 'Too many sends · wait a minute.', post_failed: 'The app refused it.' }; pushToast({ kind: 'event', badge: '!', color: '#e0483f', title: 'Not sent', text: m[r.error || ''] || 'Could not send.' }) }
  }
  const runDraft = async (make: (t: string) => string, label: string) => {
    const t = text.trim(); if (!t) return
    try { await navigator.clipboard?.writeText(make(t)) } catch { /* blocked */ }
    pushToast({ kind: 'event', badge: 'OK', color: '#2f6bff', title: `${label} copied`, text: 'Ready to paste into your app.' })
  }

  return (
    <div className="team-mod se" style={{ ['--dc' as string]: role.tint }}>
      <header className="mod-intro">
        <h3 className="sq-title">{role.title} <span className="team-code">{role.code}</span></h3>
        <p className="sq-lead">{role.desc}</p>
      </header>

      {/* App coverage summary · full connect grid lives in the header "Connect apps" */}
      <section className="se-card team-cover">
        <div className="mission-head">
          <h3 className="sq-title">Connected apps <span className="team-count">{connectedCount}/{apps.length}</span></h3>
          <span className="muted small">Use <b>Connect apps</b> (top right) to link {apps.map((c) => c.label).slice(0, 3).join(', ')}{apps.length > 3 ? '…' : ''} · then this agent works inside them for real.</span>
        </div>
      </section>

      {/* Live data from the connected apps */}
      {panels && (connectedCount > 0) && (
        <section className="se-card team-livewrap">
          <div className="mission-head">
            <h3 className="sq-title">Live from your apps</h3>
            <span className="muted small">Pulled from the apps you connected above.</span>
          </div>
          {panels}
        </section>
      )}

      {/* Focused action */}
      <section className="se-card team-action">
        {agentKey === 'devi' && (
          <>
            <div className="mission-head"><h3 className="sq-title">Open an issue</h3><span className="muted small">Connect GitHub + set a repo to open it for real · otherwise copy a clean draft.</span></div>
            {tools.github?.connected && <input className="team-input" value={repo} onChange={(e) => setRepo(e.target.value)} placeholder="owner/repository" maxLength={140} />}
            <input className="team-input" value={text} onChange={(e) => setText(e.target.value)} placeholder="Issue title…" maxLength={250} style={{ marginTop: 8 }} />
            <div className="brand-actions"><button className="btn primary tiny" disabled={!text.trim() || !!busy} onClick={() => void runDevi()}>{busy === 'devi' ? 'Opening…' : tools.github?.connected && repo.trim() ? 'Open issue' : 'Draft issue (copy)'}</button></div>
          </>
        )}
        {agentKey === 'nexa' && (
          <>
            <div className="mission-head"><h3 className="sq-title">Broadcast to your team</h3><span className="muted small">Posts for real to Slack (and Discord when set up) · or copies a message for anywhere.</span></div>
            <textarea className="team-input" rows={4} value={text} onChange={(e) => setText(e.target.value)} placeholder="Team update, announcement or reminder…" maxLength={3000} />
            <div className="brand-actions">
              <button className="btn primary tiny" disabled={!text.trim() || !!busy} onClick={() => void (tools.slack?.connected ? runNexa('slack') : runDraft((t) => t, 'Message'))}>{busy === 'slack' ? 'Posting…' : tools.slack?.connected ? 'Post to Slack' : 'Copy message'}</button>
              {tools.discord?.available && <button className="btn tiny" disabled={!text.trim() || !!busy} onClick={() => void runNexa('discord')}>{busy === 'discord' ? 'Posting…' : 'Post to Discord'}</button>}
              {!tools.slack?.connected && <button className="btn tiny" onClick={() => startConnect('slack')}>Connect Slack for live</button>}
            </div>
          </>
        )}
        {agentKey === 'helpi' && (
          <>
            <div className="mission-head"><h3 className="sq-title">Draft a support reply</h3><span className="muted small">Writes a warm, structured reply you can drop into Zendesk or Intercom.</span></div>
            <textarea className="team-input" rows={4} value={text} onChange={(e) => setText(e.target.value)} placeholder="Paste the customer question or describe the issue…" maxLength={3000} />
            <div className="brand-actions"><button className="btn primary tiny" disabled={!text.trim()} onClick={() => void runDraft((t) => `Hi there,\n\nThanks for reaching out — happy to help.\n\n${t}\n\nSuggested next steps:\n1. \n2. \n\nBest,\nSupport team`, 'Reply')}>Draft reply (copy)</button></div>
          </>
        )}
        {agentKey === 'legi' && (
          <>
            <div className="mission-head"><h3 className="sq-title">Prepare a document</h3><span className="muted small">Outlines a signature-ready document you can send from DocuSign or store in Drive.</span></div>
            <input className="team-input" value={text} onChange={(e) => setText(e.target.value)} placeholder="e.g. Mutual NDA with Acme Corp" maxLength={300} />
            <div className="brand-actions"><button className="btn primary tiny" disabled={!text.trim()} onClick={() => void runDraft((t) => `${t.toUpperCase()}\n\nThis agreement is made between the parties below.\n\n1. Purpose\n\n2. Term\n\n3. Obligations\n\n4. Signatures\n\n____________________        ____________________\nParty A                                Party B`, 'Document')}>Prepare draft (copy)</button></div>
          </>
        )}
      </section>
    </div>
  )
}
