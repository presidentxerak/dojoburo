// The HOME · three surfaces, in the order you meet them.
//
//   create   · one centred card: name your company, create it, or watch how.
//   choose   · "Choose your dojo teams" · the whole catalogue, à la carte, with
//              a sticky bar carrying the running budget.
//   pipeline · what you have built so far, and the two system agents.
//
// Creating a company is the moment an account is needed, because it is the
// moment something real is saved (see ./SaveGate).
import { useState } from 'react'
import { useWorkshop } from '../../workshop'
import { useDojo } from '../../store'
import { useLoop, runPipeline } from '../../agents/loop'
import { ARCHETYPE_BY_ID, type Archetype } from '../../data/archetypes'
import { ROLE_BY_ID } from '../../data/roleAgents'
import { InfoDot } from '../InfoDot'
import { SystemAgents } from './SystemAgents'
import { SaveGate } from './SaveGate'
import { CreateCompany } from './CreateCompany'
import { ChooseTeams } from './ChooseTeams'
import { privyConfigured } from '../../auth/controls'

type View = 'create' | 'choose' | 'pipeline'

export function PipelineHome({ onOpenProject }: { onOpenProject: (dojoId: string) => void }) {
  const dojos = useWorkshop((s) => s.dojos)
  const activeId = useWorkshop((s) => s.activeDojoId)
  const account = useWorkshop((s) => s.account)
  const companyName = useWorkshop((s) => s.companyName)
  const create = useWorkshop((s) => s.createDojoFromArchetype)
  const del = useWorkshop((s) => s.deleteDojo)
  const reorder = useWorkshop((s) => s.reorderDojo)
  const setActive = useWorkshop((s) => s.setActiveDojo)
  const setGoal = useWorkshop((s) => s.setDojoGoal)
  const pushToast = useDojo((s) => s.pushToast)
  const loopRunning = useLoop((s) => s.running)

  const projects = dojos.filter((d) => d.archetype)
  // a founder who already has teams lands on their pipeline, not on step one
  const [view, setView] = useState<View>(projects.length ? 'pipeline' : 'create')
  // true while we are waiting for the founder to sign in before creating
  const [gate, setGate] = useState(false)

  const open = (id: string) => { setActive(id); onOpenProject(id) }

  // "Create your company" · the save moment, so the account is asked for here
  const startCreate = () => {
    if (account) { setView('choose'); return }
    if (!privyConfigured()) { useWorkshop.getState().signInGuest(); setView('choose'); return }
    setGate(true)
  }

  // add every ticked team at once, then drop into the first one
  const addTeams = (list: Archetype[]) => {
    const co = companyName.trim()
    const ids = list.map((a) => create(a.id, co ? `${co} · ${a.label}` : undefined)).filter(Boolean) as string[]
    if (!ids.length) return
    const mates = list.reduce((n, a) => n + a.agents.length, 0)
    pushToast({
      kind: 'event', badge: 'OK', color: list[0].tint,
      title: co || 'Your company',
      text: `${ids.length} team${ids.length > 1 ? 's' : ''} · ${mates} teammates hired.`,
    })
    setView('pipeline')
    open(ids[0])
  }

  if (view === 'create') {
    return (
      <>
        <CreateCompany onCreate={startCreate} />
        {gate && (
          <SaveGate
            what={`"${companyName.trim() || 'Your company'}" is ready to be created.`}
            onClose={() => setGate(false)}
            onSignedIn={() => { setGate(false); setView('choose') }}
          />
        )}
      </>
    )
  }

  if (view === 'choose') {
    return (
      <ChooseTeams
        companyName={companyName.trim()}
        onAdd={addTeams}
        onBack={projects.length ? () => setView('pipeline') : () => setView('create')}
      />
    )
  }

  return (
    <div className="ph">
      <header className="ph-sec-h ph-top">
        <h1>{companyName.trim() || 'Your company'}
          <InfoDot title="Your company" label="How this works">
            <p>Everything here belongs to <b>{companyName.trim() || 'your company'}</b>. Each entry is a <b>dojo</b>: a project with its own dedicated teammates.</p>
            <p>Rename your company, or remove a team, from your profile at any time.</p>
          </InfoDot>
        </h1>
        <button className="ph-addbtn" onClick={() => setView('choose')}>+ Add dojo teams</button>
      </header>

      {dojos.length > 0 && (
        <ol className="ph-list">
          {dojos.map((d, i) => {
            const a = d.archetype ? ARCHETYPE_BY_ID[d.archetype] : null
            const crew = d.agents.filter((x) => !x.hidden)
            const tint = a?.tint ?? '#7b5cff'
            return (
              <li key={d.id} className={`ph-proj${d.id === activeId ? ' on' : ''}`} style={{ ['--ac' as string]: tint }}>
                <span className="ph-step-n">{i + 1}</span>
                <div className="ph-proj-main" role="button" tabIndex={0} onClick={() => open(d.id)}
                  onKeyDown={(e) => { if (e.key === 'Enter') open(d.id) }}>
                  <span className="ph-glyph sm" style={{ background: tint }}>{a?.glyph ?? '◆'}</span>
                  <div className="ph-proj-txt">
                    <strong>{d.name}</strong>
                    <em>{a ? a.label : 'Full company'} · {crew.length} teammates{a ? ` · ${a.loop.length} steps` : ''}</em>
                  </div>
                  <span className="ph-proj-crew">
                    {crew.slice(0, 6).map((x) => {
                      const r = x.role ? ROLE_BY_ID[x.role] : undefined
                      const c = x.custom?.tint ?? r?.tint ?? '#8892a6'
                      return <span key={x.id} className="ph-dot" style={{ background: c }} title={x.name}>{x.name[0]}</span>
                    })}
                    {crew.length > 6 && <span className="ph-more">+{crew.length - 6}</span>}
                  </span>
                </div>
                <input
                  className="ph-goal"
                  value={d.goal ?? ''}
                  placeholder="What do you want out of this? (one line)"
                  maxLength={240}
                  onChange={(e) => setGoal(d.id, e.target.value)}
                />
                <div className="ph-proj-acts">
                  <button className="btn primary tiny" onClick={() => open(d.id)}>Open dojo</button>
                  <button className="ph-ic" onClick={() => reorder(d.id, -1)} disabled={i === 0} aria-label="Move up" title="Move up">↑</button>
                  <button className="ph-ic" onClick={() => reorder(d.id, 1)} disabled={i === dojos.length - 1} aria-label="Move down" title="Move down">↓</button>
                  <button className="ph-ic danger" aria-label={`Delete ${d.name}`} title="Delete project"
                    onClick={() => { if (confirm(`Delete "${d.name}"? Its team and everything they made are removed.`)) del(d.id) }}>×</button>
                </div>
              </li>
            )
          })}
        </ol>
      )}

      {/* the two system agents · runs the whole pipeline + looks after the app */}
      <SystemAgents projectCount={projects.length} onRunPipeline={() => void runPipeline()} running={loopRunning} />
    </div>
  )
}
