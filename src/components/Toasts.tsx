import { useDojo } from '../store'

/** Floating event / reward / level-up notifications. */
export function Toasts() {
  const toasts = useDojo((s) => s.toasts)
  const dismiss = useDojo((s) => s.dismissToast)

  return (
    <div className="toasts" role="status" aria-live="polite">
      {toasts.map((t) => (
        <button key={t.id} className={`toast toast-${t.kind}`} onClick={() => dismiss(t.id)}>
          <span className="toast-emoji">{t.emoji}</span>
          <span className="toast-body">
            <strong>{t.title}</strong>
            <span>{t.text}</span>
          </span>
        </button>
      ))}
    </div>
  )
}
