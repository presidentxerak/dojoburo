import { useEffect, useState } from 'react'
import { useWorkshop } from '../../workshop'
import { useWork } from '../../agents/workStore'
import { skinById } from '../../data/skins'
import { templateById } from '../../data/templates'
import { WorkshopModal } from './WorkshopModal'
import { ActivityWidget } from './ActivityWidget'
import { SkinAvatar } from './SkinAvatar'

/** Left-edge dock: account chip, a quick dojo switcher, Dojo Studio launcher and
 *  the activity widget toggle. Holds the workshop modal + widget open state. */
export function Workshop() {
  const [modalOpen, setModalOpen] = useState(false)
  const [widget, setWidget] = useState(false)
  const studioIntent = useWork((s) => s.studioIntent)
  const account = useWorkshop((s) => s.account)

  // a "add your key" hint elsewhere can request the studio open on a tab
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
      <div className="ws-dock">
        <button className="ws-chip" onClick={() => setModalOpen(true)} title="Account & Dojo Studio">
          {account ? <SkinAvatar skin={skinById(account.avatarSkinId)} size={22} /> : <span className="ws-chip-guest">◕</span>}
          <span className="ws-chip-name">{account ? account.name || 'Founder' : 'Sign in'}</span>
        </button>

        {/* quick dojo switcher — flip active dojo without opening the studio */}
        <div className="ws-dojoswitch" title="Switch dojo">
          <button className="ws-swbtn" onClick={() => cycle(-1)} disabled={dojos.length < 2} aria-label="Previous dojo">‹</button>
          <select className="ws-swsel" value={active?.id} onChange={(e) => setActive(e.target.value)}>
            {dojos.map((d) => (
              <option key={d.id} value={d.id}>{templateById(d.template).emoji} {d.name}</option>
            ))}
          </select>
          <button className="ws-swbtn" onClick={() => cycle(1)} disabled={dojos.length < 2} aria-label="Next dojo">›</button>
        </div>

        <button className="ws-dockbtn" onClick={() => setModalOpen(true)}>◱ Dojo Studio</button>
        <button className={`ws-dockbtn ${widget ? 'on' : ''}`} onClick={() => setWidget((w) => !w)}>▭ Widget</button>
      </div>

      {widget && <ActivityWidget onClose={() => setWidget(false)} />}
      {modalOpen && <WorkshopModal onClose={() => { setModalOpen(false); useWork.getState().clearStudioIntent() }} />}
    </>
  )
}
