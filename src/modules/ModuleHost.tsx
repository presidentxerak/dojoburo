// Renders the active studio module as a FULLSCREEN overlay: a clean header with
// a single "Connect apps" button and a close button, then the module itself.
// Connectors are no longer shown as a strip in every UI — one button opens the
// Studio connect panel. Live modules are bundled (no lazy chunk to 404); modules
// still on the roadmap render an honest "coming soon" scaffold.
import { MODULE_BY_ID } from './registry'
import { ErrorBoundary } from '../components/ErrorBoundary'
import { useWork } from '../agents/workStore'

export function ModuleHost({ moduleId, dojoId, onClose }: { moduleId: string; dojoId: string; onClose: () => void }) {
  const def = MODULE_BY_ID[moduleId]
  const openStudio = useWork((s) => s.openStudio)
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
          <button className="modhost-connect" onClick={() => openStudio('studio')}>Connect apps</button>
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
