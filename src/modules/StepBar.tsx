// Squarespace-style bottom step navigation: RETOUR on the left, the labelled
// steps with a progress underline in the middle, SUIVANT (dark) on the right.
// Shared by the stepped studios (Branding, Campaign, Website wizard…).
export interface Step { id: string; label: string }

export function StepBar({
  steps, current, onJump, onBack, onNext,
  backLabel = 'Back', nextLabel = 'Next', canNext = true, backDisabled = false,
}: {
  steps: Step[]
  current: string
  onJump?: (id: string) => void
  onBack: () => void
  onNext: () => void
  backLabel?: string
  nextLabel?: string
  canNext?: boolean
  backDisabled?: boolean
}) {
  const idx = Math.max(0, steps.findIndex((s) => s.id === current))
  const pct = steps.length > 1 ? (idx / (steps.length - 1)) * 100 : 0
  return (
    <div className="stepbar">
      <button className="stepbar-back" onClick={onBack} disabled={backDisabled}>{backLabel}</button>
      <nav className="stepbar-steps" aria-label="Steps">
        <span className="stepbar-track"><span className="stepbar-fill" style={{ width: `${pct}%` }} /></span>
        {steps.map((s, i) => (
          <button
            key={s.id}
            className={`stepbar-step${i === idx ? ' on' : ''}${i < idx ? ' done' : ''}`}
            onClick={() => onJump?.(s.id)}
            disabled={i > idx && !onJump}
          >
            {s.label}
          </button>
        ))}
      </nav>
      <button className="stepbar-next" onClick={onNext} disabled={!canNext}>{nextLabel}</button>
    </div>
  )
}
