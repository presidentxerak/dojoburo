import { useDojo } from '../store'

/** Floating event / reward / level-up notifications.
 *
 *  Every toast carries its own ✕. Dismissing used to mean clicking the toast
 *  itself, which is the same gesture as opening the thing it links to — so the
 *  only way to get rid of one was to follow it, or wait. The card still opens
 *  its link; the ✕ is how you say no.
 */
export function Toasts() {
  const toasts = useDojo((s) => s.toasts)
  const dismiss = useDojo((s) => s.dismissToast)

  if (!toasts.length) return null

  return (
    <div className="toasts" role="status" aria-live="polite">
      {toasts.map((t) => {
        const inner = (
          <>
            <span className="toast-badge" style={{ background: t.color }}>{t.badge}</span>
            <span className="toast-body">
              <strong>{t.title}</strong>
              <span>{t.text}</span>
            </span>
          </>
        )
        return (
          <div key={t.id} className={`toast toast-${t.kind}`} style={{ borderColor: t.color }}>
            {t.url ? (
              <a className="toast-main toast-link" href={t.url} target="_blank" rel="noreferrer" onClick={() => dismiss(t.id)}>
                {inner}
              </a>
            ) : (
              <span className="toast-main">{inner}</span>
            )}
            <button
              className="toast-x"
              onClick={() => dismiss(t.id)}
              aria-label={`Dismiss · ${t.title}`}
              title="Dismiss"
            >
              ✕
            </button>
          </div>
        )
      })}
    </div>
  )
}
