import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useDojo } from '../store'
import { useWork } from '../agents/workStore'

function rel(ms: number): string {
  const s = Math.max(0, (Date.now() - ms) / 1000)
  if (s < 60) return 'just now'
  if (s < 3600) return `${Math.floor(s / 60)}m ago`
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`
  return `${Math.floor(s / 86400)}d ago`
}

/** Bell button → a FULLSCREEN notification center (with a close button) that
 *  collects every agent-activity notification plus the operations running right
 *  now, with the agent concerned. Nothing floats over the dojo. */
export function NotificationBell() {
  const notifications = useDojo((s) => s.notifications)
  const clear = useDojo((s) => s.clearNotifications)
  const [open, setOpen] = useState(false)
  const running = useWork((s) => s.runningTask)
  const autopilot = useWork((s) => s.autopilot)
  const count = notifications.length

  const ongoing: { title: string; text: string }[] = []
  if (autopilot.running) ongoing.push({ title: 'Chief', text: `Building your company · ${autopilot.step}…` })
  if (running) ongoing.push({ title: 'Agent working', text: `Task “${running}” in progress…` })

  return (
    <div className="notif">
      <button className="notif-btn" onClick={() => setOpen(true)} aria-label="Notifications">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
        {count > 0 && <span className="notif-count">{count > 9 ? '9+' : count}</span>}
      </button>

      {open && createPortal(
        <div className="notifc-overlay">
          <div className="notifc">
            <header className="notifc-bar">
              <h2 className="notifc-title">Notification center</h2>
              <div className="notifc-bar-r">
                {count > 0 && <button className="notifc-clear" onClick={clear}>Clear all</button>}
                <button className="notifc-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
              </div>
            </header>
            <div className="notifc-body">
              <section className="notifc-sec">
                <h3>Operations in progress</h3>
                {ongoing.length === 0 ? (
                  <p className="notifc-empty">Nothing running right now. Launch an agent and its work appears here live.</p>
                ) : (
                  <ul className="notifc-list">
                    {ongoing.map((o, i) => (
                      <li key={i}><span className="notif-dot live" /><div className="notif-txt"><strong>{o.title}</strong><span>{o.text}</span></div></li>
                    ))}
                  </ul>
                )}
              </section>
              <section className="notifc-sec">
                <h3>Recent activity</h3>
                {count === 0 ? (
                  <p className="notifc-empty">No activity yet.</p>
                ) : (
                  <ul className="notifc-list">
                    {notifications.map((n) => (
                      <li key={n.id}>
                        <span className="notif-dot" style={{ background: n.color }} />
                        <div className="notif-txt"><strong>{n.title}</strong><span>{n.text}</span></div>
                        <time className="notif-time">{rel(n.ts)}</time>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </div>
  )
}
