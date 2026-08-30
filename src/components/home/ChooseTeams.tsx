// Step two · "Choose your dojo teams".
//
// The whole catalogue, à la carte: tick as many teams as you need and add them
// in one go. The sticky bar at the bottom keeps the running total in view —
// how many teams, how many teammates, and what a full run of all of them costs
// — so the budget is never a surprise after the fact.
import { useMemo, useState } from 'react'
import { ARCHETYPES, archetypeAgents, archetypeConnectors, type Archetype, type ArchCategory } from '../../data/archetypes'
import { teamBudget, totalBudget, usdLabel } from '../../data/budget'
import { TutorialOverlay } from '../guide/TutorialOverlay'
import { TeamCard } from './TeamCard'

const CATS: ArchCategory[] = ['Marketing', 'Product', 'Content', 'Creative', 'Business', 'Operations']

export function ChooseTeams({ companyName, onAdd, onBack }: {
  companyName: string
  onAdd: (list: Archetype[]) => void
  onBack?: () => void
}) {
  const [cat, setCat] = useState<'all' | ArchCategory>('all')
  const [picked, setPicked] = useState<string[]>([])
  const [howTo, setHowTo] = useState(false)

  const shown = cat === 'all' ? ARCHETYPES : ARCHETYPES.filter((a) => a.category === cat)
  const chosen = useMemo(() => picked.map((id) => ARCHETYPES.find((a) => a.id === id)!).filter(Boolean), [picked])

  const total = totalBudget(chosen.map((a) => teamBudget(a, archetypeConnectors(a).length)))
  const mates = chosen.reduce((n, a) => n + archetypeAgents(a).length, 0)

  const toggle = (id: string) =>
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]))

  return (
    <div className="ct">
      <header className="ct-hero">
        <h1>Choose your dojo teams</h1>
        <p className="ct-sub">
          {companyName ? <>Pick what <b>{companyName}</b> needs. </> : null}
          Tick as many as you want · you can always add more later.
        </p>
        <button type="button" className="howto-btn" onClick={() => setHowTo(true)}>How to?</button>
      </header>

      <div className="ct-filters">
        <button className={cat === 'all' ? 'on' : ''} onClick={() => setCat('all')}>All {ARCHETYPES.length}</button>
        {CATS.map((c) => <button key={c} className={cat === c ? 'on' : ''} onClick={() => setCat(c)}>{c}</button>)}
      </div>

      <div className="ct-grid">
        {shown.map((a) => (
          <TeamCard key={a.id} a={a} selected={picked.includes(a.id)} onToggle={() => toggle(a.id)} />
        ))}
      </div>

      {/* the running total, always in view */}
      <div className={`ct-bar${picked.length ? ' on' : ''}`}>
        <div className="ct-bar-in">
          <div className="ct-bar-txt">
            {picked.length === 0 ? (
              <strong>Pick at least one team</strong>
            ) : (
              <>
                <strong>{picked.length} team{picked.length > 1 ? 's' : ''} · {mates} teammates</strong>
                <span>
                  {total.credits} credits to run all of them once · ≈ {usdLabel(total.usd)}
                  {' '}· {total.apps} app connection{total.apps > 1 ? 's' : ''} available
                </span>
              </>
            )}
          </div>
          <div className="ct-bar-acts">
            {onBack && <button className="ct-back" onClick={onBack}>Back</button>}
            <button className="ct-go" disabled={!picked.length} onClick={() => onAdd(chosen)}>
              Add {picked.length || ''} team{picked.length === 1 ? '' : 's'} →
            </button>
          </div>
        </div>
      </div>

      {howTo && (
        <TutorialOverlay
          walk="teams"
          onClose={() => setHowTo(false)}
          onStart={() => setHowTo(false)}
          startLabel="Choose my teams →"
        />
      )}
    </div>
  )
}
