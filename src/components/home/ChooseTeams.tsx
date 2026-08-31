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

export function ChooseTeams({ projectName, onAdd, onBack, existing = [] }: {
  projectName: string
  onAdd: (list: Archetype[]) => void
  onBack?: () => void
  /** archetype ids already in this company · a team is hired once, not twice */
  existing?: string[]
}) {
  const [cat, setCat] = useState<'all' | ArchCategory>('all')
  const [picked, setPicked] = useState<string[]>([])
  const [howTo, setHowTo] = useState(false)

  const have = useMemo(() => new Set(existing), [existing])
  // What you can still hire comes FIRST. The catalogue is in a fixed order, so
  // a company that had taken the first few teams opened this screen on a row of
  // greyed-out cards and read as "nothing can be added" — the teams that were
  // available were below the fold. Hired ones keep their place in the grid, at
  // the end, so you can still see what you have.
  const shown = useMemo(() => {
    const list = cat === 'all' ? ARCHETYPES : ARCHETYPES.filter((a) => a.category === cat)
    return [...list].sort((x, y) => Number(have.has(x.id)) - Number(have.has(y.id)))
  }, [cat, have])
  // what can still be hired in the current filter · "Select all" and the count
  // both work off this, so neither ever offers a team you already have
  const free = useMemo(() => shown.filter((a) => !have.has(a.id)), [shown, have])
  const allPicked = free.length > 0 && free.every((a) => picked.includes(a.id))
  const chosen = useMemo(
    () => picked.map((id) => ARCHETYPES.find((a) => a.id === id)!).filter((a) => a && !have.has(a.id)),
    [picked, have],
  )

  const total = totalBudget(chosen.map((a) => teamBudget(a, archetypeConnectors(a).length)))
  const mates = chosen.reduce((n, a) => n + archetypeAgents(a).length, 0)

  const toggle = (id: string) => {
    if (have.has(id)) return
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]))
  }

  // one tap for the whole catalogue · and the same tap clears it again
  const toggleAll = () =>
    setPicked((p) => (allPicked
      ? p.filter((id) => !free.some((a) => a.id === id))
      : [...new Set([...p, ...free.map((a) => a.id)])]))

  return (
    <div className="ct">
      <header className="ct-hero">
        {/* Back used to live ONLY in the sticky bar, and that bar only slides
            up once you have ticked something — so opening the catalogue and
            changing your mind left you with no way out. It is here, always. */}
        {onBack && <button type="button" className="ct-leave" onClick={onBack}>‹ Back</button>}
        <h1>Choose your dojo teams</h1>
        <p className="ct-sub">
          {projectName ? <>Pick what <b>{projectName}</b> needs. </> : null}
          Tick as many as you want · you can always add more later.
        </p>
        <button type="button" className="howto-btn" onClick={() => setHowTo(true)}>How to?</button>
      </header>

      <div className="ct-filters">
        <button className={cat === 'all' ? 'on' : ''} onClick={() => setCat('all')}>All {ARCHETYPES.length}</button>
        {CATS.map((c) => <button key={c} className={cat === c ? 'on' : ''} onClick={() => setCat(c)}>{c}</button>)}
        {free.length > 0 && (
          <button className="ct-all" onClick={toggleAll}>
            {allPicked ? 'Clear selection' : `Select all ${free.length}`}
          </button>
        )}
      </div>

      {have.size > 0 && (
        <p className="ct-have">
          <b>{free.length} team{free.length === 1 ? '' : 's'} still to hire</b>, shown first · the {have.size} this
          company already has {have.size > 1 ? 'are' : 'is'} marked <b>Hired</b> at the end, because a team is hired
          once per company.
        </p>
      )}

      <div className="ct-grid">
        {shown.map((a) => (
          <TeamCard
            key={a.id}
            a={a}
            selected={picked.includes(a.id)}
            owned={have.has(a.id)}
            onToggle={() => toggle(a.id)}
          />
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
                  {total.credits} tasks to run all of them once · ≈ {usdLabel(total.usd)} on Managed
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
