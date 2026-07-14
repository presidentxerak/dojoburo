// ---------------------------------------------------------------------------
// Connect apps · a FULL PAGE (route #connect), reached from the "Connect Apps"
// button in the header and from every studio's "Connect apps". It lists EVERY
// connector grouped by functionality category, explains connecting from A to Z,
// and gives a one-click Connect / Disconnect / Set-up per app. Carries the app
// header + the mobile bottom bar so a phone user can jump back anywhere.
// ---------------------------------------------------------------------------
import { useEffect } from 'react'
import { CONNECTORS, type ConnectorCategory } from '../data/connectors'
import { useWork } from '../agents/workStore'
import { startConnect } from '../agents/workApi'
import { ConnectorLogo } from './ConnectorLogo'
import { TopBar } from './TopBar'
import { PageBar } from './PageBar'

// group order · same taxonomy the Dojo Guide uses
const CATEGORY_ORDER: ConnectorCategory[] = [
  'Marketing & Social', 'CRM & Sales', 'Comms', 'Docs & Notes', 'Dev',
  'Finance', 'Design', 'Scheduling', 'Support', 'Storage & Legal',
]

export function ConnectorsPage() {
  const tools = useWork((s) => s.tools)
  const backend = useWork((s) => s.backend)
  const loadedOnce = useWork((s) => s.loadedOnce)
  const loadTools = useWork((s) => s.loadTools)
  const disconnect = useWork((s) => s.disconnect)

  useEffect(() => { if (!loadedOnce) void loadTools() }, [loadedOnce, loadTools])

  const total = CONNECTORS.length
  const connected = CONNECTORS.filter((c) => tools[c.id]?.connected).length

  return (
    <div className="app connect-page">
      <TopBar />
      <div className="connect-body">
        <header className="connect-head">
          <div>
            <h1 className="connect-title">Connect apps <span className="connect-count">{connected}/{total} linked</span></h1>
            <p className="connect-lead">
              Link your real tools so your agents act inside your own accounts — draft the Gmail, open the GitHub PR, launch the
              Meta campaign, post to your CRM. Everything is grouped by what it does. Tap <b>Connect</b>, approve the provider's
              screen once, and the token is sealed server-side (AES-256-GCM) — the browser never sees a secret.
            </p>
          </div>
          <button className="ws-x" onClick={() => { location.hash = 'app' }} aria-label="Back to dojo">×</button>
        </header>

        {/* how it works · A to Z */}
        <div className="connect-how">
          <div className="lp-step3"><span className="lp-step3-n dg2-n1">1</span><div><b>Find the app by category</b><span>Apps are grouped by function: Marketing, CRM &amp; Sales, Comms, Dev, Finance… Each agent's tasks light up the apps they use.</span></div></div>
          <div className="lp-step3"><span className="lp-step3-n dg2-n2">2</span><div><b>Click Connect</b><span>Approve the provider's OAuth screen (or paste an API token). No passwords — you authorise on the provider's own site.</span></div></div>
          <div className="lp-step3"><span className="lp-step3-n dg2-n3">3</span><div><b>Your agents act for real</b><span>The sealed token lets the agent do real work in that app. Tap <b>Full guide</b> on any app for exact scopes &amp; setup, or <b>Disconnect</b> anytime.</span></div></div>
        </div>

        {loadedOnce && !backend && (
          <p className="connect-hint">Live OAuth needs the worker configured (<code>DATABASE_URL</code>, <code>CONNECTOR_ENC_KEY</code> and each app's keys). Until then, <b>Set up ↗</b> opens the provider console and each app's full guide explains every step.</p>
        )}

        {CATEGORY_ORDER.map((cat) => {
          const list = CONNECTORS.filter((c) => c.category === cat)
          if (!list.length) return null
          return (
            <section key={cat} className="connect-cat">
              <h2 className="connect-cat-h">{cat} <span className="connect-cat-n">{list.length}</span></h2>
              <div className="connect-grid">
                {list.map((c) => {
                  const st = tools[c.id]
                  const isOn = !!st?.connected
                  const available = !!st?.available
                  return (
                    <div key={c.id} className={`connect-card${isOn ? ' on' : ''}`}>
                      <div className="connect-card-top">
                        <ConnectorLogo id={c.id} label={c.label} size={34} />
                        <div className="connect-card-meta">
                          <strong>{c.label}</strong>
                          <em>{c.auth === 'oauth' ? 'OAuth' : 'API token'}{isOn && st?.account ? ` · ${st.account}` : ''}</em>
                        </div>
                      </div>
                      <p className="connect-card-blurb">{c.blurb}</p>
                      <div className="connect-card-actions">
                        {isOn ? (
                          <button className="btn tiny ghost" onClick={() => void disconnect(c.id)}>Disconnect</button>
                        ) : available ? (
                          <button className="btn tiny" onClick={() => startConnect(c.id)}>Connect</button>
                        ) : (
                          <a className="btn tiny ghost" href={c.docsUrl} target="_blank" rel="noreferrer">Set up ↗</a>
                        )}
                        <a className="connect-card-guide" href={`/guide/${c.id}`}>Full guide →</a>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          )
        })}

        <p className="connect-foot">Need external agents (MCP / A2A / webhook) instead? Open <a href="#studio">Dojo Studio</a> → pick an agent → <b>External agents</b>. Full reference in the <a href="/guide">Dojo Guide</a>.</p>
      </div>
      <PageBar current="connect" />
    </div>
  )
}
