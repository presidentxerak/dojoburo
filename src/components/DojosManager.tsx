import { createPortal } from 'react-dom'
import { useDojo } from '../store'
import { useWorkshop } from '../workshop'
import { useWork } from '../agents/workStore'
import { templateById } from '../data/templates'

/** Fullscreen "Dojos" manager (from the profile menu): every company you've
 *  created — select, rename, edit (Manage Studio) or delete. Replaces the old
 *  header dropdown for switching dojos. */
export function DojosManager() {
  const open = useDojo((s) => s.dojosOpen)
  const close = () => useDojo.getState().setDojosOpen(false)
  const dojos = useWorkshop((s) => s.dojos)
  const activeId = useWorkshop((s) => s.activeDojoId)
  const setActiveDojo = useWorkshop((s) => s.setActiveDojo)
  const renameDojo = useWorkshop((s) => s.renameDojo)
  const deleteDojo = useWorkshop((s) => s.deleteDojo)
  const createDojo = useWorkshop((s) => s.createDojo)
  const openStudio = useWork((s) => s.openStudio)

  if (!open) return null
  const pick = (id: string) => { setActiveDojo(id); close() }
  const edit = (id: string) => { setActiveDojo(id); close(); openStudio('studio') }
  const remove = (id: string) => {
    if (dojos.length <= 1) return
    if (typeof window !== 'undefined' && !window.confirm('Delete this dojo and its agents? This cannot be undone.')) return
    deleteDojo(id)
  }

  return createPortal(
    <div className="djm-overlay">
      <div className="djm">
        <header className="djm-bar">
          <h2 className="djm-title">Your dojos</h2>
          <div className="djm-bar-r">
            <button className="djm-new" onClick={() => createDojo()}>＋ New dojo</button>
            <button className="djm-close" onClick={close} aria-label="Close">✕</button>
          </div>
        </header>
        <div className="djm-body">
          <div className="djm-grid">
            {dojos.map((d) => {
              const tpl = templateById(d.template)
              const active = d.id === activeId
              return (
                <div key={d.id} className={`djm-card${active ? ' on' : ''}`}>
                  {active && <span className="djm-active">Active</span>}
                  <input className="djm-name" value={d.name} onChange={(e) => renameDojo(d.id, e.target.value)} maxLength={40} aria-label="Dojo name" />
                  <span className="djm-meta">{tpl.label ?? 'Dojo'} · {d.agents.length} agents</span>
                  <div className="djm-actions">
                    <button className="djm-btn primary" onClick={() => pick(d.id)}>Open</button>
                    <button className="djm-btn" onClick={() => edit(d.id)}>Edit</button>
                    <button className="djm-btn danger" onClick={() => remove(d.id)} disabled={dojos.length <= 1}>Delete</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
