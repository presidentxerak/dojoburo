// Renders the active studio module as a FULLSCREEN overlay: a clean header with
// a "Connect apps" button and a close button, then the module itself. "Connect
// apps" opens a panel of the connectors relevant to THIS agent's department, each
// linking to its setup page. Live modules are bundled (no lazy chunk to 404).
import { useState } from 'react'
import { MODULE_BY_ID } from './registry'
import { ErrorBoundary } from '../components/ErrorBoundary'
import { ROLE_BY_ID, canonicalRole } from '../data/roleAgents'
import { CONNECTORS } from '../data/connectors'

export function ModuleHost({ moduleId, dojoId, onClose }: { moduleId: string; dojoId: string; onClose: () => void }) {
  const def = MODULE_BY_ID[moduleId]
  const [connOpen, setConnOpen] = useState(false)
  if (!def) return null

  // connectors relevant to this agent's department (the "apps to connect" for it)
  const dept = ROLE_BY_ID[canonicalRole(def.agentRole)]?.dept
  const conns = dept ? CONNECTORS.filter((c) => c.functions.includes(dept)) : []

  return (
    <div className="modhost-fs" style={{ ['--dc' as string]: def.tint }}>
      <header className="modhost-bar">
        <div className="modhost-bar-l">
          <div>
            <h2 className="modhost-name">{def.label}</h2>
            <p className="modhost-blurb">{def.blurb}</p>
          </div>
        </div>
        <div className="modhost-bar-r">
          <div className="modhost-connect-wrap">
            <button className="modhost-connect" onClick={() => setConnOpen((v) => !v)} aria-expanded={connOpen}>Connect apps</button>
            {connOpen && (
              <>
                <div className="modhost-conn-scrim" onClick={() => setConnOpen(false)} />
                <div className="modhost-conn-pop" role="dialog" aria-label="Connect apps">
                  <div className="modhost-conn-head"><b>Connect apps for {def.label}</b><a href="/guide" className="modhost-conn-all">All apps →</a></div>
                  {conns.length === 0 ? (
                    <p className="muted small" style={{ padding: '0 4px' }}>No specific apps for this studio yet.</p>
                  ) : (
                    <ul className="modhost-conn-list">
                      {conns.map((c) => (
                        <li key={c.id}>
                          <a href={`/guide/${c.id}`} title={c.blurb}>
                            <b>{c.label}</b><span>{c.category}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </>
            )}
          </div>
          <span className="modhost-tag">{def.status === 'live' ? 'Local · serverless' : 'Coming soon'}</span>
          <button className="modhost-close" onClick={onClose} aria-label="Close studio">✕</button>
        </div>
      </header>

      <div className="modhost-body">
        {def.status === 'live' && def.comp ? (
          <ErrorBoundary label={def.label}>
            <def.comp onClose={onClose} dojoId={dojoId} />
          </ErrorBoundary>
        ) : (
          <div className="ad-body">
            <p className="muted small" style={{ marginTop: 0 }}>This module is coming in a future iteration. On the roadmap:</p>
            <ul className="mod-planned">
              {(def.planned ?? []).map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
