import { useEffect, useState } from 'react'
import { useWorkshop } from '../../workshop'
import { useWork } from '../../agents/workStore'
import { WorkshopModal } from './WorkshopModal'

/** Left-edge dock: a quick dojo switcher. The Studio launcher and account now
 *  live in the top-bar header; this just flips the active dojo. Holds the
 *  workshop modal open state (opened from the header Studio button). */
export function Workshop() {
  const [modalOpen, setModalOpen] = useState(false)
  const studioIntent = useWork((s) => s.studioIntent)

  // the header Studio button (and "add your key" hints) request the studio open
  useEffect(() => {
    if (studioIntent) setModalOpen(true)
  }, [studioIntent])
  const dojos = useWorkshop((s) => s.dojos)
  const activeId = useWorkshop((s) => s.activeDojoId)
  const setActive = useWorkshop((s) => s.setActiveDojo)
  const active = dojos.find((d) => d.id === activeId) ?? dojos[0]

  const cycle = (dir: 1 | -1) => {
    if (dojos.length < 2) return
    const i = dojos.findIndex((d) => d.id === active.id)
    setActive(dojos[(i + dir + dojos.length) % dojos.length].id)
  }

  return (
    <>
      {dojos.length > 1 && (
        <div className="ws-dock">
          {/* quick dojo switcher · flip active dojo without opening the studio */}
          <div className="ws-dojoswitch" title="Switch dojo">
            <button className="ws-swbtn" onClick={() => cycle(-1)} aria-label="Previous dojo">‹</button>
            <select className="ws-swsel" value={active?.id} onChange={(e) => setActive(e.target.value)}>
              {dojos.map((d) => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </select>
            <button className="ws-swbtn" onClick={() => cycle(1)} aria-label="Next dojo">›</button>
          </div>
        </div>
      )}

      {modalOpen && <WorkshopModal onClose={() => { setModalOpen(false); useWork.getState().clearStudioIntent() }} />}
    </>
  )
}
