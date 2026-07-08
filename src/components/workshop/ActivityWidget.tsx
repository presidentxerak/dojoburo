import { useState } from 'react'
import { useDojo } from '../../store'
import { useWorkshop } from '../../workshop'
import { formatFrom } from '../../data/currency'

/** Compact, always-visible monitor of the dojo's live activity · the same view
 *  a reduced desktop widget would show while you work on other things. */
export function ActivityWidget({ onClose }: { onClose: () => void }) {
  const [min, setMin] = useState(false)
  const activity = useDojo((s) => s.activity)
  const runtime = useDojo((s) => s.runtime)
  const stats = useDojo((s) => s.stats)
  const usage = useDojo((s) => s.usage)
  const dojo = useWorkshop((s) => s.dojos.find((d) => d.id === s.activeDojoId))
  const currency = useWorkshop((s) => s.account?.currency ?? 'XRP')

  const busy = Object.values(runtime).filter((r) => r.busy).length
  const done = Object.values(stats).reduce((n, s) => n + (s?.tasksDone ?? 0), 0)

  return (
    <section className={`aw ${min ? 'min' : ''}`} aria-label="Dojo activity widget">
      <header className="aw-head">
        <span className="aw-dot" data-live={busy > 0} />
        <strong>{dojo?.name ?? 'Dojo'}</strong>
        <button className="aw-btn" onClick={() => setMin((m) => !m)} aria-label={min ? 'Expand' : 'Minimize'}>{min ? '▢' : '-'}</button>
        <button className="aw-btn" onClick={onClose} aria-label="Close widget">×</button>
      </header>
      {!min && (
        <>
          <div className="aw-stats">
            <div><span>{dojo?.agents.length ?? 0}</span>agents</div>
            <div><span>{busy}</span>working</div>
            <div><span>{done}</span>tasks</div>
            <div><span>{formatFrom(usage.xrp, currency as any)}</span>spent</div>
          </div>
          <ul className="aw-feed">
            {activity.slice(0, 4).map((a) => (
              <li key={a.id} className={`aw-${a.level}`}>{a.message}</li>
            ))}
            {activity.length === 0 && <li className="aw-idle">Idle · run a skill to see live activity.</li>}
          </ul>
        </>
      )}
    </section>
  )
}
