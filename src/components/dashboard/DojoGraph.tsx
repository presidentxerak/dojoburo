// Graph mode · the dojo as a map instead of a 3D room.
//
// Every teammate is a card wired to the apps they can reach, so you can see the
// whole shape of a team at once: who is in it, what each one does, how much they
// have actually produced, and where their work lands. Apps are editable right
// on the card — tap one to connect or disconnect it for that teammate.
//
// It is deliberately a picture of what is TRUE: activity is counted from the
// work that exists, not invented, and an app that is not connected says so.
import { useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { useWorkshop } from '../../workshop'
import { useWork } from '../../agents/workStore'
import { useDeliverables } from '../../agents/deliverables'
import { useAgentApps, effectiveApps } from '../../agents/agentApps'
import { ROLE_BY_ID } from '../../data/roleAgents'
import { CONNECTOR_BY_ID, CONNECTORS } from '../../data/connectors'
import { ARCHETYPE_BY_ID } from '../../data/archetypes'
import { ConnectorLogo } from '../ConnectorLogo'
import { AGENT_TASKS } from './agentTasks'

const relTime = (t: number) => {
  if (!t) return 'nothing yet'
  const m = Math.round((Date.now() - t) / 60000)
  if (m < 1) return 'just now'
  if (m < 60) return `${m} min ago`
  const h = Math.round(m / 60)
  if (h < 24) return `${h} h ago`
  return `${Math.round(h / 24)} d ago`
}

export function DojoGraph({ dojoId, onClose, onOpenAgent }: {
  dojoId: string
  onClose: () => void
  onOpenAgent?: (agentId: string) => void
}) {
  const dojo = useWorkshop((s) => s.dojos.find((d) => d.id === dojoId))
  const tools = useWork((s) => s.tools)
  const delivs = useDeliverables((s) => s.byDojo[dojoId] ?? [])
  const byKey = useAgentApps((s) => s.byKey)
  const setApp = useAgentApps((s) => s.setApp)
  // which teammate's app picker is open
  const [editing, setEditing] = useState<string | null>(null)

  const crew = useMemo(() => (dojo?.agents ?? []).filter((a) => !a.hidden), [dojo])
  const arch = dojo?.archetype ? ARCHETYPE_BY_ID[dojo.archetype] : null

  // total work in this dojo · the yardstick each teammate's bar is drawn against
  const counts = crew.map((a) => {
    const tasks = AGENT_TASKS[a.role ?? ''] ?? []
    return delivs.filter((d) => tasks.includes(d.taskId)).length
  })
  const peak = Math.max(1, ...counts)

  return createPortal(
    <div className="dg" role="dialog" aria-modal="true" aria-label="Team graph">
      <header className="dg-head">
        <div>
          <strong>{dojo?.name ?? 'Your team'}</strong>
          <span>
            {crew.length} teammate{crew.length > 1 ? 's' : ''}
            {arch ? ` · ${arch.loop.length} steps` : ''} · {delivs.length} result{delivs.length === 1 ? '' : 's'} so far
          </span>
        </div>
        <button className="dg-x" onClick={onClose} aria-label="Close">×</button>
      </header>

      <div className="dg-body">
        <div className="dg-grid">
          {crew.map((a, i) => {
            const r = a.role ? ROLE_BY_ID[a.role] : undefined
            const tint = a.custom?.tint ?? r?.tint ?? '#8892a6'
            const title = a.custom?.title ?? r?.title ?? 'Teammate'
            const blurb = a.custom?.desc ?? r?.desc ?? ''
            const defaults = a.custom?.apps ?? r?.apps ?? []
            const apps = effectiveApps(defaults, byKey[`${dojoId}::${a.role}`])
            const connected = apps.filter((id) => tools[id]?.connected)
            const done = counts[i]
            const tasks = AGENT_TASKS[a.role ?? ''] ?? []
            const times = delivs.filter((d) => tasks.includes(d.taskId)).map((d) => d.createdAt)
            const last = times.length ? Math.max(...times) : 0
            const step = arch?.loop.findIndex((s) => s.agent === a.role) ?? -1
            const open = editing === a.id

            return (
              <article key={a.id} className="dg-card appcard" style={{ ['--ac' as string]: tint }}>
                <header className="dg-card-h">
                  <span className="dg-face" style={{ background: tint }}>{a.name[0]}</span>
                  <div className="dg-id">
                    <strong>{a.name}</strong>
                    <em>{title}</em>
                  </div>
                  {step >= 0 && <span className="dg-step" title="Position in the team's plan">Step {step + 1}</span>}
                </header>

                {blurb && <p className="dg-blurb">{blurb}</p>}

                {/* activity · counted from work that exists, never invented */}
                <div className="dg-stats">
                  <span className="dg-stat"><b>{done}</b><em>result{done === 1 ? '' : 's'}</em></span>
                  <span className="dg-stat"><b>{connected.length}/{apps.length}</b><em>apps live</em></span>
                  <span className="dg-stat wide"><b>{relTime(last)}</b><em>last worked</em></span>
                </div>
                <div className="dg-bar" aria-hidden>
                  <span style={{ width: `${Math.round((done / peak) * 100)}%`, background: tint }} />
                </div>

                {/* the wires · every app this teammate can reach */}
                <div className="dg-apps">
                  {apps.length === 0 && <span className="dg-noapps">No apps yet</span>}
                  {apps.map((id) => {
                    const c = CONNECTOR_BY_ID[id]
                    if (!c) return null
                    const on = !!tools[id]?.connected
                    return (
                      <span key={id} className={`dg-app${on ? ' on' : ''}`} title={on ? `${c.label} · connected` : `${c.label} · not connected yet`}>
                        <ConnectorLogo id={id} label={c.label} size={16} />
                        {c.label}
                        <button
                          className="dg-app-x"
                          aria-label={`Remove ${c.label} from ${a.name}`}
                          onClick={() => a.role && setApp(dojoId, a.role, id, false, defaults)}
                        >×</button>
                      </span>
                    )
                  })}
                  {a.role && (
                    <button className="dg-addapp" onClick={() => setEditing(open ? null : a.id)}>
                      {open ? 'Done' : '+ App'}
                    </button>
                  )}
                </div>

                {open && a.role && (
                  <div className="dg-picker">
                    {CONNECTORS.filter((c) => !apps.includes(c.id)).slice(0, 40).map((c) => (
                      <button key={c.id} className="dg-pick" onClick={() => setApp(dojoId, a.role!, c.id, true, defaults)}>
                        <ConnectorLogo id={c.id} label={c.label} size={14} />{c.label}
                      </button>
                    ))}
                  </div>
                )}

                {onOpenAgent && (
                  <button className="dg-open" onClick={() => { onOpenAgent(a.id); onClose() }}>
                    Open {a.name} →
                  </button>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </div>,
    document.body,
  )
}
