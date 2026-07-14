import { useState } from 'react'
import { useDojo } from '../store'

/** A bell button + dropdown panel that collects every agent-activity
 *  notification in one place (a square below the button), so notifications
 *  never float over the dojo and hide the agents. */
export function NotificationBell() {
  const notifications = useDojo((s) => s.notifications)
  const clear = useDojo((s) => s.clearNotifications)
  const [open, setOpen] = useState(false)
  const count = notifications.length

  return (
    <div className="notif">
      <button className="notif-btn" onClick={() => setOpen((v) => !v)} aria-label="Notifications" aria-expanded={open}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
        {count > 0 && <span className="notif-count">{count > 9 ? '9+' : count}</span>}
      </button>
      {open && (
        <>
          <div className="notif-scrim" onClick={() => setOpen(false)} />
          <div className="notif-panel" role="dialog" aria-label="Agent activity">
            <div className="notif-head">
              <b>Agent activity</b>
              {count > 0 && <button className="notif-clear" onClick={clear}>Clear</button>}
            </div>
            {count === 0 ? (
              <p className="notif-empty">No activity yet. Your agents' work shows up here in real time.</p>
            ) : (
              <ul className="notif-list">
                {notifications.map((n) => (
                  <li key={n.id}>
                    <span className="notif-dot" style={{ background: n.color }} />
                    <div className="notif-txt"><strong>{n.title}</strong><span>{n.text}</span></div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  )
}
