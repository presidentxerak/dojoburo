import { useEffect, useState } from 'react'
import { type Department } from '../data/agents'
import { connectorsForFunction, WORK_TASKS } from '../data/connectors'
import { useWork } from '../agents/workStore'
import { startConnect } from '../agents/workApi'
import { ConnectorLogo } from './ConnectorLogo'

// Which real deliverables (WORK_TASKS) of this department act inside a connector,
// so the UI can say "Powers: Write a PRD, Design system" under each app.
function tasksUsing(dept: Department, connectorId: string): string[] {
  return (WORK_TASKS[dept] ?? [])
    .filter((t) => (t.usesConnectors || []).includes(connectorId))
    .map((t) => t.label.replace(/^Claude Design · /, ''))
}

/** A pedagogical "Connect apps" panel: the connectors this agent's tasks can use,
 *  a clear 3-step process, and one-click Connect / Disconnect / Set-up per app.
 *  Shared by the agent card (fiche) and the Dojo Studio editor. */
export function ConnectorsPanel({ dept }: { dept: Department }) {
  const tools = useWork((s) => s.tools)
  const backend = useWork((s) => s.backend)
  const loadedOnce = useWork((s) => s.loadedOnce)
  const loadTools = useWork((s) => s.loadTools)
  const disconnect = useWork((s) => s.disconnect)
  const [showHow, setShowHow] = useState(false)

  useEffect(() => { if (!loadedOnce) void loadTools() }, [loadedOnce, loadTools])

  const connectors = connectorsForFunction(dept)
  if (connectors.length === 0) return null
  const connectedCount = connectors.filter((c) => tools[c.id]?.connected).length

  return (
    <section className="cx">
      <div className="cx-top">
        <h3 className="skills-title">Connect apps <span className="cx-count">{connectedCount}/{connectors.length}</span></h3>
        <button className="cx-how-t" onClick={() => setShowHow((v) => !v)}>{showHow ? 'Hide guide' : 'How it works'}</button>
      </div>
      <p className="cx-sub">These are the apps this agent's tasks can act inside. Connect one and the agent does the real work · creates the page, opens the PR, drafts the mail · metered on-ledger by x402.</p>

      {showHow && (
        <ol className="cx-steps">
          <li><b>1 · Create the OAuth app</b><span>In the provider console (Notion, GitHub, Google Cloud…), register an app and set the redirect to <code>your-site/api/connect</code>, then copy the <b>client id</b> &amp; <b>secret</b>.</span></li>
          <li><b>2 · Add the keys to env</b><span>The operator sets <code>APP_CLIENT_ID</code> / <code>APP_CLIENT_SECRET</code> once (Google apps share <code>GOOGLE_CLIENT_ID/SECRET</code>). Apps with no first-party MCP also need <code>APP_MCP_URL</code> (Composio / Zapier). PKCE apps are automatic.</span></li>
          <li><b>3 · Click Connect</b><span>Approve the OAuth screen once. The token is sealed server-side (AES-256-GCM); the browser never sees a secret, and the agent can now act inside the app.</span></li>
        </ol>
      )}

      <ul className="cx-list">
        {connectors.map((c) => {
          const st = tools[c.id]
          const connected = !!st?.connected
          const available = !!st?.available
          const uses = tasksUsing(dept, c.id)
          return (
            <li key={c.id} className={`cx-row${connected ? ' on' : ''}`}>
              <ConnectorLogo id={c.id} label={c.label} size={30} />
              <span className="cx-meta">
                <span className="cx-name">
                  {c.label}
                  <em className="cx-cat">{c.category}</em>
                  <em className={`cx-auth cx-auth-${c.auth}`}>{c.auth === 'oauth' ? 'OAuth' : 'token'}</em>
                </span>
                <span className="cx-blurb">{connected && st?.account ? `Connected · ${st.account}` : c.blurb}</span>
                {uses.length > 0 && <span className="cx-uses">Powers: {uses.join(' · ')}</span>}
              </span>
              <span className="cx-action">
                {connected ? (
                  <button className="btn tiny ghost" onClick={() => void disconnect(c.id)}>Disconnect</button>
                ) : available ? (
                  <button className="btn tiny" onClick={() => startConnect(c.id)}>Connect</button>
                ) : (
                  <a className="cx-setup" href={c.docsUrl} target="_blank" rel="noreferrer" title="Operator: configure this connector first">Set up ↗</a>
                )}
              </span>
            </li>
          )
        })}
      </ul>

      {loadedOnce && !backend && (
        <p className="cx-hint">Live OAuth needs the worker configured (<code>DATABASE_URL</code>, <code>CONNECTOR_ENC_KEY</code> and each app's keys). Until then you can still see exactly which app each task uses · the Set-up link opens the provider console.</p>
      )}
    </section>
  )
}
