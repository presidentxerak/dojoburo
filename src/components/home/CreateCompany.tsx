// Step one · "Create your company".
//
// The whole screen is one centred card on a plain ground: the title, the field
// where you name your company, the button that creates it, and a "How to?" that
// plays the A-to-Z walkthrough full screen. Below the card, the dojo turns
// slowly — the thing you are about to make, in miniature.
//
// This is where you land every time you open the app. If you already have a
// company, one quiet line under the card takes you straight back to it.
import { useState } from 'react'
import { useWorkshop } from '../../workshop'
import { DojoDiorama } from '../landing/DojoDiorama'
import { TutorialOverlay } from '../guide/TutorialOverlay'

export function CreateCompany({ onCreate, onOpenExisting, existingCount }: {
  onCreate: () => void
  onOpenExisting?: () => void
  existingCount?: number
}) {
  const projectName = useWorkshop((s) => s.projectName)
  const setProjectName = useWorkshop((s) => s.setProjectName)
  const [howTo, setHowTo] = useState(false)
  const ready = projectName.trim().length > 1

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (ready) onCreate()
  }

  return (
    <div className="cc">
      <form className="cc-card" onSubmit={submit}>
        <h1>Create your company</h1>
        <p className="cc-sub">
          {existingCount
            ? <>Your {existingCount === 1 ? 'other company is' : `${existingCount} other companies are`} waiting under this card. Name the new one · that is the whole setup.</>
            : <>Give it a name. That is the whole setup.</>}
        </p>

        <input
          className="cc-input"
          value={projectName}
          placeholder="Name your company"
          maxLength={40}
          autoFocus
          aria-label="Your company name"
          onChange={(e) => setProjectName(e.target.value)}
        />

        <button className="cc-go" type="submit" disabled={!ready}>Create your company</button>
        <button type="button" className="howto-btn" onClick={() => setHowTo(true)}>How to?</button>
      </form>

      {/* already have something running · one quiet way back into it */}
      {onOpenExisting && !!existingCount && (
        <button type="button" className="cc-back" onClick={onOpenExisting}>
          Or open what you already have · {existingCount} compan{existingCount > 1 ? 'ies' : 'y'} →
        </button>
      )}

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
