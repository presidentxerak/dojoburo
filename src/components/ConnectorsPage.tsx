// ---------------------------------------------------------------------------
// Connect apps · a FULL PAGE (route #connect), reached from the "Connect Apps"
// button in the header and from every studio's "Connect apps". It lists EVERY
// connector grouped by functionality category, explains connecting from A to Z,
// and gives a one-click Connect / Disconnect / Set-up per app. Carries the app
// header + the mobile bottom bar so a phone user can jump back anywhere.
// ---------------------------------------------------------------------------
import { useEffect, useState } from 'react'
import { CONNECTORS, connectorsForFunction, type Connector } from '../data/connectors'
import { ROLE_AGENTS } from '../data/roleAgents'
import type { Department } from '../data/agents'
import { useWork } from '../agents/workStore'
import { useWorkshop } from '../workshop'
import { isAdmin } from '../config/admin'
import { startConnect } from '../agents/workApi'
import { ConnectorLogo } from './ConnectorLogo'
import { TutorialOverlay } from './guide/TutorialOverlay'
import { FullScreen } from './FullScreen'

// Classify the connectors by the agents' JOB (métier): one section per
// department, titled with the agent(s) whose job it is · so you see which apps
// each of your agents can act inside. A connector serving several jobs appears
// under each (it genuinely works for both).
const METIER_GROUPS: { key: Department; label: string; connectors: Connector[] }[] = (() => {
  const seen = new Set<Department>()
  const groups: { key: Department; label: string; connectors: Connector[] }[] = []
  for (const a of ROLE_AGENTS) {
    if (seen.has(a.dept)) continue
    seen.add(a.dept)
    const titles = ROLE_AGENTS.filter((x) => x.dept === a.dept).map((x) => x.title)
    groups.push({ key: a.dept, label: titles.join(' · '), connectors: connectorsForFunction(a.dept) })
  }
  return groups
})()

/** Connect apps, wearing the app's ONE full-screen shell.
 *
 *  It used to be a page with the app header on top and a lone "×" of its own
 *  design floating in the corner — the only surface in the product that looked
 *  like that. It is the same shell as Manage team, Settings and Graph mode now,
 *  whether it opens over the app or as its own route. */
export function ConnectorsSurface({ onClose }: { onClose: () => void }) {
  const tools = useWork((s) => s.tools)
  const backend = useWork((s) => s.backend)
  const loadedOnce = useWork((s) => s.loadedOnce)
  const loadTools = useWork((s) => s.loadTools)
  const disconnect = useWork((s) => s.disconnect)
  const account = useWorkshop((s) => s.account)
  const admin = isAdmin(account ?? null)

  // the "How to?" walkthrough · connecting apps, and what it costs on top
  const [howTo, setHowTo] = useState(false)

  useEffect(() => { if (!loadedOnce) void loadTools() }, [loadedOnce, loadTools])

  const total = CONNECTORS.length
  const connected = CONNECTORS.filter((c) => tools[c.id]?.connected).length

  // ---- the operator's own view -------------------------------------------
  // "0/44 linked" counts what THIS founder has connected. Setting up the app is
  // a different question — how many apps can be connected at all, which depends
  // on OAuth keys only the operator can add. Those two numbers were conflated,
  // so after adding a key there was no way to see whether it had landed short
  // of trying to connect. Admins get the second number.
  const wired = CONNECTORS.filter((c) => !c.unwired)
  const ready = wired.filter((c) => tools[c.id]?.available).length
  const needKeys = wired.length - ready
  const noPath = CONNECTORS.filter((c) => c.unwired).length

  return (
    <FullScreen
      title="Connect apps"
      sub={`${connected}/${total} linked · your teammates act inside your own accounts`}
      bodyClass="connect-fs"
      onClose={onClose}
    >
      <div className="connect-body">
        <header className="connect-head">
          <div>
            <p className="connect-lead">
              Link the apps you already use so your teammates work inside your own accounts · draft the Gmail, open the GitHub
              PR, launch the Meta campaign, add to your CRM. Tap <b>Connect</b>, approve once on the app's own screen, and access
              is sealed away on the server · this browser never holds a secret.
            </p>
            <button type="button" className="howto-btn" onClick={() => setHowTo(true)}>How to? · and what it costs</button>
            {admin && loadedOnce && (
              <div className="connect-op">
                <span className="connect-op-k">Operator</span>
                <span className="connect-op-n"><b>{ready}</b> ready to connect</span>
                <span className="connect-op-n"><b>{needKeys}</b> waiting on your OAuth keys</span>
                <span className="connect-op-n muted"><b>{noPath}</b> with no integration yet</span>
                {!backend && <span className="connect-op-warn">The worker is not configured · DATABASE_URL + CONNECTOR_ENC_KEY</span>}
              </div>
            )}
          </div>
        </header>

        {howTo && <TutorialOverlay walk="apps" onClose={() => setHowTo(false)} />}

        {/* how it works · A to Z */}
        <div className="connect-how">
          <div className="lp-step3"><span className="lp-step3-n dg2-n1">1</span><div><b>Find the app by agent</b><span>Apps are grouped by the agent whose job uses them · your Marketer's channels, your Business Analyst's finance tools, and so on.</span></div></div>
          <div className="lp-step3"><span className="lp-step3-n dg2-n2">2</span><div><b>Click Connect</b><span>Approve once on the app's own screen. No password ever leaves your hands · you authorise on their site, not ours.</span></div></div>
          <div className="lp-step3"><span className="lp-step3-n dg2-n3">3</span><div><b>They work for real</b><span>Connecting is free and stays free · you only ever pay for the work itself, about one credit a task. Tap <b>Full guide</b> on any app for the exact steps, or <b>Disconnect</b> whenever you want.</span></div></div>
        </div>

        {loadedOnce && !backend && (
          <p className="connect-hint">Live OAuth needs the worker configured (<code>DATABASE_URL</code>, <code>CONNECTOR_ENC_KEY</code> and each app's keys). Until then, <b>Set up ↗</b> opens the provider console and each app's full guide explains every step.</p>
        )}

        {METIER_GROUPS.map((group) => {
          const list = group.connectors
          if (!list.length) return null
          return (
            <section key={group.key} className="connect-cat">
              <h2 className="connect-cat-h">{group.label} <span className="connect-cat-n">{list.length} apps</span></h2>
              <div className="connect-grid">
                {list.map((c) => {
                  const st = tools[c.id]
                  const isOn = !!st?.connected
                  const available = !!st?.available
                  // Three honest states, because "greyed out" tells nobody why.
                  //   ready    · keys are in place, one click and it works
                  //   setup    · this deployment has not added this app's keys
                  //   unwired  · there is no path for this one yet, at all
                  const state = isOn ? 'on' : c.unwired ? 'unwired' : available ? 'ready' : 'setup'
                  return (
                    <div key={c.id} className={`connect-card s-${state}${isOn ? ' on' : ''}`}>
                      <div className="connect-card-top">
                        <ConnectorLogo id={c.id} label={c.label} size={34} />
                        <div className="connect-card-meta">
                          <strong>{c.label}</strong>
                          <em>{c.auth === 'oauth' ? 'OAuth' : 'API token'} · {c.category}{isOn && st?.account ? ` · ${st.account}` : ''}</em>
                        </div>
                        <span className={`connect-state ${state}`}>
                          {state === 'on' ? 'Connected' : state === 'ready' ? 'Ready' : state === 'setup' ? 'Needs setup' : 'Not built yet'}
                        </span>
                      </div>
                      <p className="connect-card-blurb">{c.blurb}</p>
                      <p className="connect-why">
                        {state === 'on'
                          ? 'Your team can act inside this app for real. It adds about 400 tokens to every step that uses it.'
                          : state === 'ready'
                            ? 'The keys are already in place here. One click, approve on their screen, done — nothing to paste.'
                            : state === 'setup'
                              ? 'This deployment has not added this app\'s keys yet. The full guide has the exact steps and env vars.'
                              : 'This one has no connection path yet — no handshake and nothing to call. It is listed so you know it exists, not so you can switch it on.'}
                      </p>
                      {admin && state === 'setup' && (
                        <p className="connect-op-env">
                          Add {c.env.filter((e) => /_CLIENT_ID$|_CLIENT_SECRET$/.test(e.name)).map((e) => e.name).join(' and ')} in Vercel, then redeploy.
                        </p>
                      )}
                      <div className="connect-card-actions">
                        {isOn ? (
                          <button className="btn tiny ghost" onClick={() => void disconnect(c.id)}>Disconnect</button>
                        ) : state === 'ready' ? (
                          <button className="btn tiny" onClick={() => startConnect(c.id)}>Connect</button>
                        ) : state === 'setup' ? (
                          <a className="btn tiny ghost" href={c.docsUrl} target="_blank" rel="noreferrer">Set up ↗</a>
                        ) : (
                          <span className="connect-soon">Not available</span>
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

        <p className="connect-foot">Need external agents (MCP / A2A / webhook) instead? Open <a href="#studio">Dojo Studio</a> → pick an agent → <b>External agents</b>. Full reference in the <a href="#guide">Dojo Guide</a>.</p>
      </div>
    </FullScreen>
  )
}

/** The #connect route · the same surface, reached as its own URL. Closing it
 *  goes back INSIDE the dojo rather than to the app's naming card. */
export function ConnectorsPage() {
  const back = () => { try { sessionStorage.setItem('dojoburo.nav', 'dojo') } catch { /* ignore */ } location.hash = 'app' }
  return <ConnectorsSurface onClose={back} />
}
