// The HOME · three surfaces, in the order you meet them.
//
//   create   · one centred card: name your project, create it, or watch how.
//              This is where you land every time · a project you already have
//              is one quiet line away, never in the way.
//   choose   · "Choose your dojo teams" · the whole catalogue, à la carte, with
//              a sticky bar carrying the running budget.
//   project  · what you have built so far, and the two system agents.
//
// Creating a project is the moment an account is needed, because it is the
// moment something real is saved (see ./SaveGate).
import { useEffect, useState } from 'react'
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

type View = 'create' | 'choose' | 'project'

export function PipelineHome({ onOpenProject, onView, initialView }: {
  onOpenProject: (dojoId: string) => void
  onView?: (v: View) => void
  /** where to open · 'project' when the app is sending you back to your work */
  initialView?: View
}) {
  const dojos = useWorkshop((s) => s.dojos)
  const activeId = useWorkshop((s) => s.activeDojoId)
  const account = useWorkshop((s) => s.account)
  const projectName = useWorkshop((s) => s.projectName)
  const create = useWorkshop((s) => s.createDojoFromArchetype)
  const del = useWorkshop((s) => s.deleteDojo)
  const reorder = useWorkshop((s) => s.reorderDojo)
  const setActive = useWorkshop((s) => s.setActiveDojo)
  const setGoal = useWorkshop((s) => s.setDojoGoal)
  const pushToast = useDojo((s) => s.pushToast)
  const loopRunning = useLoop((s) => s.running)

  const projects = dojos.filter((d) => d.archetype)
  // A first visit lands on step one · "Create your project" is the whole
  // screen, and what you already built is one line under the card. But when
  // the app sends you back to YOUR PROJECT (the menu, the bottom bar), the
  // project is what has to be there — and only if there is one to show.
  const [view, setView] = useState<View>(
    initialView === 'project' && projects.length ? 'project' : (initialView ?? 'create'),
  )
  // the first two steps own the whole screen · App hides its chrome for them
  useEffect(() => { onView?.(view) }, [view, onView])
  // true while we are waiting for the founder to sign in before creating
  const [gate, setGate] = useState(false)

  const open = (id: string) => { setActive(id); onOpenProject(id) }

  // "Create your project" · the save moment, so the account is asked for here
  const startCreate = () => {
    if (account) { setView('choose'); return }
    if (!privyConfigured()) { useWorkshop.getState().signInGuest(); setView('choose'); return }
    setGate(true)
  }

  // add every ticked team at once, then drop into the first one
  const addTeams = (list: Archetype[]) => {
    const co = projectName.trim()
    const ids = list.map((a) => create(a.id, co ? `${co} · ${a.label}` : undefined)).filter(Boolean) as string[]
    if (!ids.length) return
    const mates = list.reduce((n, a) => n + a.agents.length, 0)
    pushToast({
      kind: 'event', badge: 'OK', color: list[0].tint,
      title: co || 'Your project',
      text: `${ids.length} team${ids.length > 1 ? 's' : ''} · ${mates} teammates hired.`,
    })
    setView('project')
    open(ids[0])
  }

  if (view === 'create') {
    return (
      <>
        <CreateCompany
          onCreate={startCreate}
          existingCount={projects.length}
          onOpenExisting={projects.length ? () => setView('project') : undefined}
        />
        {gate && (
          <SaveGate
            what={`"${projectName.trim() || 'Your project'}" is ready to be created.`}
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
        projectName={projectName.trim()}
        onAdd={addTeams}
        onBack={projects.length ? () => setView('project') : () => setView('create')}
      />
    )
  }

  return (
    <div className="ph">
      <header className="ph-sec-h ph-top">
        <h1>{projectName.trim() || 'Your project'}
          <InfoDot title="Your project" label="How this works">
            <p>Everything here belongs to <b>{projectName.trim() || 'your project'}</b>. Each entry is a <b>dojo</b>: a team with its own dedicated teammates.</p>
            <p>Rename your project, or remove a team, from your profile at any time.</p>
          </InfoDot>
        </h1>
        <button className="ph-addbtn" onClick={() => setView('choose')}>+ Add dojo teams</button>
      </header>

      {/* only the teams the founder actually picked · the seeded HQ dojo that
          ships with every install was never chosen, so it is not part of the
          project (it stays reachable from Dojo settings, like in the tab bar) */}
      {projects.length > 0 && (
        <ol className="ph-list">
          {projects.map((d, i) => {
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
                  <button className="ph-ic" onClick={() => reorder(d.id, 1)} disabled={i === projects.length - 1} aria-label="Move down" title="Move down">↓</button>
                  <button className="ph-ic danger" aria-label={`Delete ${d.name}`} title="Delete project"
                    onClick={() => { if (confirm(`Delete "${d.name}"? Its team and everything they made are removed.`)) del(d.id) }}>×</button>
                </div>
              </li>
            )
          })}
        </ol>
      )}

      {/* the two system agents · runs the whole project + looks after the app */}
      <SystemAgents projectCount={projects.length} onRunPipeline={() => void runPipeline()} running={loopRunning} />
    </div>
  )
}
