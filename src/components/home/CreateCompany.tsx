// L'entrée du bac à sable · « ouvrez un dojo d'entraînement ».
//
// C'était « Créez votre entreprise », et c'est exactement ce que le produit ne
// propose plus. La mécanique en dessous n'a pas changé — on nomme un espace,
// on y range des équipes — mais ce qu'elle SIGNIFIE a changé du tout au tout :
// ce n'est pas une entreprise qui va travailler pour vous, c'est un établi sur
// lequel on démonte des exemples.
//
// Garder le mot « entreprise » ici aurait été la contradiction la plus chère
// du repositionnement : la page d'accueil aurait promis un cours, et le
// premier écran de l'app aurait redemandé de fonder une société.
//
// Le reste ne bouge pas : une carte centrée, un champ, un bouton, un « How
// to? » qui joue la visite guidée, et le dojo qui tourne lentement dessous.
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
        <h1>Open a practice dojo</h1>
        <p className="cc-sub">
          {existingCount
            ? <>Your {existingCount === 1 ? 'other dojo is' : `${existingCount} other dojos are`} waiting under this card. Name the new one · that is the whole setup.</>
            : <>Give it a name, and you get a room to take worked examples apart in. Nothing here calls a paid model.</>}
        </p>

        <input
          className="cc-input"
          value={projectName}
          placeholder="Name this dojo"
          maxLength={40}
          autoFocus
          aria-label="Name for this practice dojo"
          onChange={(e) => setProjectName(e.target.value)}
        />

        <button className="cc-go" type="submit" disabled={!ready}>Open the dojo</button>
        <button type="button" className="howto-btn" onClick={() => setHowTo(true)}>How to?</button>
      </form>

      {/* already have something running · one quiet way back into it */}
      {onOpenExisting && !!existingCount && (
        <button type="button" className="cc-back" onClick={onOpenExisting}>
          Or open one you already have · {existingCount} dojo{existingCount > 1 ? 's' : ''} →
        </button>
      )}

      {/* la salle où l'on va s'entraîner · elle tourne lentement sous la carte */}
      <div className="cc-art" aria-hidden>
        <DojoDiorama />
      </div>

      {howTo && (
        <TutorialOverlay
          walk="company"
          onClose={() => setHowTo(false)}
          onStart={ready ? () => { setHowTo(false); onCreate() } : undefined}
          startLabel="Open the dojo →"
        />
      )}
    </div>
  )
}
