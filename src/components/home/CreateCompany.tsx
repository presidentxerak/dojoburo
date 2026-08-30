// Step one · "Create your company".
//
// The whole screen is one centred card on a plain ground: the title, the field
// where you name your company, the button that creates it, and a "How to?" that
// plays the A-to-Z walkthrough full screen. Below the card, the dojo turns
// slowly — the thing you are about to make, in miniature.
import { useState } from 'react'
import { useWorkshop } from '../../workshop'
import { DojoDiorama } from '../landing/DojoDiorama'
import { TutorialOverlay } from '../guide/TutorialOverlay'

export function CreateCompany({ onCreate }: { onCreate: () => void }) {
  const companyName = useWorkshop((s) => s.companyName)
  const setCompanyName = useWorkshop((s) => s.setCompanyName)
  const [howTo, setHowTo] = useState(false)
  const ready = companyName.trim().length > 1

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (ready) onCreate()
  }

  return (
    <div className="cc">
      <form className="cc-card" onSubmit={submit}>
        <h1>Create your company</h1>
        <p className="cc-sub">Give it a name. That is the whole setup.</p>

        <input
          className="cc-input"
          value={companyName}
          placeholder="Name your company"
          maxLength={40}
          autoFocus
          aria-label="Your company name"
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <button className="cc-go" type="submit" disabled={!ready}>Create your company</button>
        <button type="button" className="howto-btn" onClick={() => setHowTo(true)}>How to?</button>
      </form>

      {/* the company you are about to make · slowly turning under the card */}
      <div className="cc-art" aria-hidden>
        <DojoDiorama />
      </div>

      {howTo && (
        <TutorialOverlay
          walk="company"
          onClose={() => setHowTo(false)}
          onStart={ready ? () => { setHowTo(false); onCreate() } : undefined}
          startLabel="Create your company →"
        />
      )}
    </div>
  )
}
