// The HOME · four surfaces, in the order you meet them.
//
//   create    · one centred card: name your company, create it, or watch how.
//               This is where you land the first time.
//   choose    · "Choose your dojo teams" · the whole catalogue, à la carte,
//               with a sticky bar carrying the running budget.
//   companies · every company you are building, as cards. This is what "My
//               companies" opens, and where a second company starts.
//   company   · one company's dojo teams, and the two system agents.
//
// A founder runs several companies, each with its own teams — which is why the
// profile opens on the companies and not on one list of teams. Creating a
// company is the moment an account is needed, because it is the moment
// something real is saved (see ./SaveGate).
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

type View = 'create' | 'choose' | 'companies' | 'company'

export function PipelineHome({ onOpenProject, onView, initialView }: {
  onOpenProject: (dojoId: string) => void
  onView?: (v: View) => void
  /** where to open · 'companies' when the app is sending you back to your work */
  initialView?: View
}) {
  const dojos = useWorkshop((s) => s.dojos)
  const companies = useWorkshop((s) => s.companies)
  const activeCompanyId = useWorkshop((s) => s.activeCompanyId)
  const setActiveCompany = useWorkshop((s) => s.setActiveCompany)
  const createCompany = useWorkshop((s) => s.createCompany)
  const startNewCompany = useWorkshop((s) => s.startNewCompany)
  const deleteCompany = useWorkshop((s) => s.deleteCompany)
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

  /** the teams of ONE company · the list a company card opens */
  const teamsOf = (companyId: string | null) =>
    dojos.filter((d) => d.archetype && d.companyId === companyId)
  const projects = teamsOf(activeCompanyId)
  // A first visit lands on step one. When the app sends you back to your work
  // (the menu, the bottom bar) it opens the COMPANIES — that is the profile:
  // every company you are building, one card each.
  const [view, setView] = useState<View>(
    initialView === 'companies' && companies.length ? 'companies' : (initialView ?? 'create'),
  )
  // the first two steps own the whole screen · App hides its chrome for them
  useEffect(() => { onView?.(view) }, [view, onView])
  // true while we are waiting for the founder to sign in before creating
  const [gate, setGate] = useState(false)

  const open = (id: string) => { setActive(id); onOpenProject(id) }

  // "Create your company" · the save moment, so the account is asked for here
  const startCreate = () => {
    const go = () => { createCompany(useWorkshop.getState().projectName); setView('choose') }
    if (account) { go(); return }
    if (!privyConfigured()) { useWorkshop.getState().signInGuest(); go(); return }
    setGate(true)
  }
  /** open a company · its teams, and everything else follows it */
  const openCompany = (id: string) => { setActiveCompany(id); setView('company') }
  /** start a second company · the naming card again, then the catalogue. It
   *  steps out of the current company first: otherwise typing the new name
   *  renames the one you are standing in. */
  const newCompany = () => { startNewCompany(); setView('create') }

  // add every ticked team at once, then drop into the first one. A team the
  // project already has is skipped rather than duplicated — the chooser will
  // not offer one, but a stale screen still can.
  const addTeams = (list: Archetype[]) => {
    const co = projectName.trim()
    const have = new Set(teamsOf(useWorkshop.getState().activeCompanyId).map((d) => d.archetype))
    const fresh = list.filter((a) => !have.has(a.id))
    const ids = fresh.map((a) => create(a.id, co ? `${co} · ${a.label}` : undefined)).filter(Boolean) as string[]
    if (!ids.length) { setView('company'); return }
    const mates = fresh.reduce((n, a) => n + a.agents.length, 0)
    pushToast({
      kind: 'event', badge: 'OK', color: fresh[0].tint,
      title: co || 'Your company',
      text: `${ids.length} team${ids.length > 1 ? 's' : ''} · ${mates} teammates hired.`,
    })
    setView('company')
    open(ids[0])
  }

  if (view === 'create') {
    return (
      <>
        <CreateCompany
          onCreate={startCreate}
          existingCount={companies.length}
          onOpenExisting={companies.length ? () => setView('companies') : undefined}
        />
        {gate && (
          <SaveGate
            what={`"${projectName.trim() || 'Your company'}" is ready to be created.`}
            onClose={() => setGate(false)}
            onSignedIn={() => { setGate(false); createCompany(useWorkshop.getState().projectName); setView('choose') }}
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
        existing={projects.map((d) => d.archetype!).filter(Boolean)}
        onBack={projects.length ? () => setView('company') : () => setView('companies')}
      />
    )
  }

  // ------------------------------------------------------------- COMPANIES --
  // The profile: every company you are building, one card each. Opening one
  // shows its dojo teams; a company is the unit of work, not the whole app.
  if (view === 'companies') {
    return (
      <div className="ph">
        <header className="ph-sec-h ph-top">
          <h1>Your companies
            <InfoDot title="Your companies" label="How this works">
              <p>Each card is a <b>company</b> — a piece of work with its own dojo teams inside it.</p>
              <p>Open one to see its teams, or start another: the same speciality can work for two different companies, but never twice for the same one.</p>
            </InfoDot>
          </h1>
          <button className="ph-addbtn" onClick={newCompany}>+ New company</button>
        </header>

        {companies.length === 0 ? (
          <p className="ph-empty">No company yet. Create one and pick the teams it needs.</p>
        ) : (
          <ol className="ph-list ph-cos">
            {companies.map((c, i) => {
              const teams = teamsOf(c.id)
              const mates = teams.reduce((n, d) => n + d.agents.filter((x) => !x.hidden).length, 0)
              const tint = teams[0]?.archetype ? (ARCHETYPE_BY_ID[teams[0].archetype!]?.tint ?? '#7b5cff') : '#7b5cff'
              return (
                <li key={c.id} className={`ph-proj ph-co${c.id === activeCompanyId ? ' on' : ''}`} style={{ ['--ac' as string]: tint }}>
                  <span className="ph-step-n">{i + 1}</span>
                  <div className="ph-proj-main" role="button" tabIndex={0} onClick={() => openCompany(c.id)}
                    onKeyDown={(e) => { if (e.key === 'Enter') openCompany(c.id) }}>
                    <span className="ph-glyph sm" style={{ background: tint }}>◆</span>
                    <div className="ph-proj-txt">
                      <strong>{c.name}</strong>
                      <em>{teams.length} dojo team{teams.length === 1 ? '' : 's'} · {mates} teammate{mates === 1 ? '' : 's'}</em>
                    </div>
                    <span className="ph-proj-crew">
                      {teams.slice(0, 6).map((d) => {
                        const a = d.archetype ? ARCHETYPE_BY_ID[d.archetype] : null
                        return <span key={d.id} className="ph-dot" style={{ background: a?.tint ?? '#8892a6' }} title={a?.label ?? d.name}>{a?.glyph ?? '◆'}</span>
                      })}
                      {teams.length > 6 && <span className="ph-more">+{teams.length - 6}</span>}
                    </span>
                  </div>
                  <div className="ph-proj-acts">
                    <button className="btn primary tiny" onClick={() => openCompany(c.id)}>Open company</button>
                    <button className="ph-ic danger" aria-label={`Delete ${c.name}`} title="Delete company"
                      onClick={() => { if (confirm(`Delete "${c.name}"? Its ${teams.length} team${teams.length === 1 ? '' : 's'} and everything they made are removed.`)) deleteCompany(c.id) }}>×</button>
                  </div>
                </li>
              )
            })}
          </ol>
        )}
      </div>
    )
  }

  // --------------------------------------------------------------- COMPANY --
  return (
    <div className="ph">
      <header className="ph-sec-h ph-top">
        <button className="ph-back" onClick={() => setView('companies')}>‹ All companies</button>
        <h1>{projectName.trim() || 'Your company'}
          <InfoDot title="This company" label="How this works">
            <p>Everything here belongs to <b>{projectName.trim() || 'this company'}</b>. Each entry is a <b>dojo team</b>: a crew with its own teammates and its own plan.</p>
            <p>A speciality is hired once per company. Rename the company, or remove a team, from your profile at any time.</p>
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
            // A project only hires a speciality once. Copies made before that
            // rule existed are still here, so they are named as copies with
            // their remove button right beside them.
            const dup = !!d.archetype && projects.findIndex((x) => x.archetype === d.archetype) !== i
            return (
              <li key={d.id} className={`ph-proj${d.id === activeId ? ' on' : ''}`} style={{ ['--ac' as string]: tint }}>
                <span className="ph-step-n">{i + 1}</span>
                <div className="ph-proj-main" role="button" tabIndex={0} onClick={() => open(d.id)}
                  onKeyDown={(e) => { if (e.key === 'Enter') open(d.id) }}>
                  <span className="ph-glyph sm" style={{ background: tint }}>{a?.glyph ?? '◆'}</span>
                  <div className="ph-proj-txt">
                    <strong>{d.name}{dup && <span className="ph-dup" title="You already have this team · remove one of them">Duplicate</span>}</strong>
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
