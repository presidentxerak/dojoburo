// Renders the active studio module as a FULLSCREEN overlay: a clean header with
// a "Connect apps" button and a close button, then the module itself. "Connect
// apps" opens a panel of the connectors relevant to THIS agent's department, each
// linking to its setup page. Live modules are bundled (no lazy chunk to 404).
import { MODULE_BY_ID } from './registry'
import { ErrorBoundary } from '../components/ErrorBoundary'

export function ModuleHost({ moduleId, dojoId, onClose }: { moduleId: string; dojoId: string; onClose: () => void }) {
  const def = MODULE_BY_ID[moduleId]
  if (!def) return null

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
          {/* Connect apps → the full connectors page (all apps by category) */}
          <button className="modhost-connect" onClick={() => { location.hash = 'connect' }}>Connect apps</button>
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
