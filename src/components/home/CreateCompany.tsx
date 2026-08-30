// Step one · "Create your project".
//
// The whole screen is one centred card on a plain ground: the title, the field
// where you name your project, the button that creates it, and a "How to?" that
// plays the A-to-Z walkthrough full screen. Below the card, the dojo turns
// slowly — the thing you are about to make, in miniature.
//
// This is where you land every time you open the app. If you already have a
// project, one quiet line under the card takes you straight back to it.
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
        <h1>Create your project</h1>
        <p className="cc-sub">
          {existingCount
            ? <>You are working on <b>{projectName.trim() || 'your project'}</b> · rename it here, or add more teams to it.</>
            : <>Give it a name. That is the whole setup.</>}
        </p>

        <input
          className="cc-input"
          value={projectName}
          placeholder="Name your project"
          maxLength={40}
          autoFocus
          aria-label="Your project name"
          onChange={(e) => setProjectName(e.target.value)}
        />

        <button className="cc-go" type="submit" disabled={!ready}>Create your project</button>
        <button type="button" className="howto-btn" onClick={() => setHowTo(true)}>How to?</button>
      </form>

      {/* already have something running · one quiet way back into it */}
      {onOpenExisting && !!existingCount && (
        <button type="button" className="cc-back" onClick={onOpenExisting}>
          Or open what you already have · {existingCount} team{existingCount > 1 ? 's' : ''} →
        </button>
      )}

      {/* the project you are about to make · slowly turning under the card */}
      <div className="cc-art" aria-hidden>
        <DojoDiorama />
      </div>

      {howTo && (
        <TutorialOverlay
          walk="company"
          onClose={() => setHowTo(false)}
          onStart={ready ? () => { setHowTo(false); onCreate() } : undefined}
          startLabel="Create your project →"
        />
      )}
    </div>
  )
}
