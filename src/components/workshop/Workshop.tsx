import { useState } from 'react'
import { useWorkshop } from '../../workshop'
import { skinById } from '../../data/skins'
import { WorkshopModal } from './WorkshopModal'
import { ActivityWidget } from './ActivityWidget'
import { SkinAvatar } from './SkinAvatar'

/** Left-edge dock: account chip, Dojo Studio launcher and the activity widget
 *  toggle. Holds the workshop modal + widget open state. */
export function Workshop() {
  const [modalOpen, setModalOpen] = useState(false)
  const [widget, setWidget] = useState(false)
  const account = useWorkshop((s) => s.account)

  return (
    <>
      <div className="ws-dock">
        <button className="ws-chip" onClick={() => setModalOpen(true)} title="Account & Dojo Studio">
          {account ? <SkinAvatar skin={skinById(account.avatarSkinId)} size={22} /> : <span className="ws-chip-guest">◕</span>}
          <span className="ws-chip-name">{account ? account.name || 'Founder' : 'Sign in'}</span>
        </button>
        <button className="ws-dockbtn" onClick={() => setModalOpen(true)}>◱ Dojo Studio</button>
        <button className={`ws-dockbtn ${widget ? 'on' : ''}`} onClick={() => setWidget((w) => !w)}>▭ Widget</button>
      </div>

      {widget && <ActivityWidget onClose={() => setWidget(false)} />}
      {modalOpen && <WorkshopModal onClose={() => setModalOpen(false)} />}
    </>
  )
}
