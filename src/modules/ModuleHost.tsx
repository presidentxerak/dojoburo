// Renders the active studio module as a FULLSCREEN overlay: a clean header with
// a close button, a strip of the connectors relevant to this agent, then the
// module itself. Live modules are bundled (no lazy chunk to 404); modules still
// on the roadmap render an honest "coming soon" scaffold.
import { MODULE_BY_ID } from './registry'
import { ErrorBoundary } from '../components/ErrorBoundary'
import { ROLE_BY_ID } from '../data/roleAgents'
import { CONNECTORS } from '../data/connectors'

export function ModuleHost({ moduleId, dojoId, onClose }: { moduleId: string; dojoId: string; onClose: () => void }) {
  const def = MODULE_BY_ID[moduleId]
  if (!def) return null

  // connectors relevant to this agent's department, shown as quick-connect chips
  const dept = ROLE_BY_ID[def.agentRole]?.dept
  const conns = dept ? CONNECTORS.filter((c) => c.functions.includes(dept)).slice(0, 8) : []

  return (
    <div className="modhost-fs" style={{ ['--dc' as string]: def.tint }}>
      <header className="modhost-bar">
        <div className="modhost-bar-l">
          <span className="modhost-dot" />
          <div>
            <h2 className="modhost-name">{def.label}</h2>
            <p className="modhost-blurb">{def.blurb}</p>
          </div>
        </div>
        <div className="modhost-bar-r">
          <span className="modhost-tag">{def.status === 'live' ? 'Local · serverless' : 'Coming soon'}</span>
          <button className="modhost-close" onClick={onClose} aria-label="Close studio">✕</button>
        </div>
      </header>

      {conns.length > 0 && (
        <div className="modhost-conns">
          <span className="modhost-conns-label">Connect</span>
          <div className="modhost-conns-row">
            {conns.map((c) => (
              <a key={c.id} className="modhost-conn" href={`/guide/${c.id}`} title={`Connect ${c.label} · ${c.blurb}`}>
                {c.label}
              </a>
            ))}
          </div>
        </div>
      )}

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
