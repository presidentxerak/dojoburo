import { useDojo } from '../store'

/** Floating event / reward / level-up notifications. */
export function Toasts() {
  const toasts = useDojo((s) => s.toasts)
  const dismiss = useDojo((s) => s.dismissToast)

  return (
    <div className="toasts" role="status" aria-live="polite">
      {toasts.map((t) => (
        <button key={t.id} className={`toast toast-${t.kind}`} onClick={() => dismiss(t.id)} style={{ borderColor: t.color }}>
          <span className="toast-badge" style={{ background: t.color }}>{t.badge}</span>
          <span className="toast-body">
            <strong>{t.title}</strong>
            <span>{t.text}</span>
          </span>
        </button>
      ))}
    </div>
  )
}
