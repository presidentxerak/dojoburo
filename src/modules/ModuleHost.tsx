// Renders the active studio module in the right panel. Live modules load lazily
// (their own chunk, shown behind a Suspense spinner); modules still on the
// roadmap render an honest "coming soon" scaffold listing what's planned.
import { MODULE_BY_ID } from './registry'
import { ErrorBoundary } from '../components/ErrorBoundary'

export function ModuleHost({ moduleId, dojoId, onClose }: { moduleId: string; dojoId: string; onClose: () => void }) {
  const def = MODULE_BY_ID[moduleId]
  if (!def) return null

  return (
    <div className="modhost" style={{ ['--dc' as string]: def.tint }}>
      <div className="ad-topbar">
        <button className="ad-back" onClick={onClose}>‹ Retour</button>
        <span className="modhost-tag">{def.status === 'live' ? 'Local · sans serveur' : 'Bientôt'}</span>
      </div>
      <header className="ad-head">
        <span className="modhost-emoji" aria-hidden>{def.emoji}</span>
        <div className="ad-meta">
          <h2 className="ad-name" style={{ border: 'none', padding: 0, margin: 0 }}>{def.label}</h2>
          <p className="ad-role">{def.blurb}</p>
        </div>
      </header>

      {def.status === 'live' && def.comp ? (
        <ErrorBoundary label={def.label}>
          <def.comp onClose={onClose} dojoId={dojoId} />
        </ErrorBoundary>
      ) : (
        <div className="ad-body">
          <p className="muted small" style={{ marginTop: 0 }}>Ce module arrive dans une prochaine itération. Au programme :</p>
          <ul className="mod-planned">
            {(def.planned ?? []).map((p, i) => <li key={i}>{p}</li>)}
          </ul>
          <p className="muted small">En attendant, l’agent correspondant produit déjà une première version par IA depuis son dashboard.</p>
        </div>
      )}
    </div>
  )
}
