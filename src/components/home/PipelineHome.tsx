// The HOME · "Create your company".
//
// Three things, in this order: the title, the field where you name your company,
// and the catalogue of ready-made dojo teams. Tick a card and you get a dedicated
// dojo, already staffed with the exact agents that job needs and wired to their
// apps — then you land straight in it.
//
// Saving is the one thing that needs an account: picking a card writes a project
// to this browser, so we ask you to sign in first (or carry on as a guest).
//
// Below the catalogue: your pipeline so far, plus the two system agents — Pilot
// runs the WHOLE pipeline, Kaizen watches over the app itself.
import { useState } from 'react'
import { useWorkshop } from '../../workshop'
import { useDojo } from '../../store'
import { useLoop, runPipeline } from '../../agents/loop'
import {
  ARCHETYPES, ARCHETYPE_BY_ID, archetypeAgents, archetypeConnectors,
  type Archetype, type ArchCategory,
} from '../../data/archetypes'
import { ROLE_BY_ID } from '../../data/roleAgents'
import { CONNECTOR_BY_ID } from '../../data/connectors'
import { ConnectorLogo } from '../ConnectorLogo'
import { InfoDot } from '../InfoDot'
import { SystemAgents } from './SystemAgents'
import { SaveGate } from './SaveGate'
import { privyConfigured } from '../../auth/controls'

/** how many teammates a card names before it says "+N more" */
const CREW_SHOWN = 6

const CATS: ArchCategory[] = ['Marketing', 'Product', 'Content', 'Creative', 'Business', 'Operations']

/** A team card · the whole crew is visible before you pick it. */
function TeamCard({ a, onPick }: { a: Archetype; onPick: () => void }) {
  const crew = archetypeAgents(a)
  const apps = archetypeConnectors(a)
  return (
    <button className="ph-arch" style={{ ['--ac' as string]: a.tint }} onClick={onPick}>
      <span className="ph-arch-top">
        <span className="ph-glyph" style={{ background: a.tint }}>{a.glyph}</span>
        <span className="ph-arch-cat">{a.category}</span>
      </span>
      <strong className="ph-arch-title">{a.label}</strong>
      <span className="ph-arch-tag">{a.tagline}</span>

      {/* the teammates INSIDE the card, named · capped so every card in a row
          stays roughly the same height */}
      <span className="ph-crewlist">
        {crew.slice(0, CREW_SHOWN).map((r) => (
          <span key={r.id} className="ph-crewrow">
            <span className="ph-dot solo" style={{ background: r.tint }}>{r.code[0]}</span>
            <b>{r.code}</b><em>{r.title}</em>
          </span>
        ))}
        {crew.length > CREW_SHOWN && <span className="ph-crewmore">+{crew.length - CREW_SHOWN} more teammates</span>}
      </span>

      {apps.length > 0 && (
        <span className="ph-arch-apps">
          {apps.slice(0, 7).map((id) => CONNECTOR_BY_ID[id] && <ConnectorLogo key={id} id={id} label={CONNECTOR_BY_ID[id].label} size={16} />)}
        </span>
      )}
      <span className="ph-arch-cta">{a.loop.length} steps · Add this team →</span>
    </button>
  )
}

export function PipelineHome({ onOpenProject }: { onOpenProject: (dojoId: string) => void }) {
  const dojos = useWorkshop((s) => s.dojos)
  const activeId = useWorkshop((s) => s.activeDojoId)
  const account = useWorkshop((s) => s.account)
  const companyName = useWorkshop((s) => s.companyName)
  const setCompanyName = useWorkshop((s) => s.setCompanyName)
  const create = useWorkshop((s) => s.createDojoFromArchetype)
  const del = useWorkshop((s) => s.deleteDojo)
  const reorder = useWorkshop((s) => s.reorderDojo)
  const setActive = useWorkshop((s) => s.setActiveDojo)
  const setGoal = useWorkshop((s) => s.setDojoGoal)
  const pushToast = useDojo((s) => s.pushToast)
  const loopRunning = useLoop((s) => s.running)

  const [cat, setCat] = useState<'all' | ArchCategory>('all')
  // the card the founder picked while signed out · added as soon as they are in
  const [pending, setPending] = useState<Archetype | null>(null)
  const shown = cat === 'all' ? ARCHETYPES : ARCHETYPES.filter((a) => a.category === cat)
  const projects = dojos.filter((d) => d.archetype)

  const open = (id: string) => { setActive(id); onOpenProject(id) }

  // picking a card creates its dedicated dojo AND takes you into it
  const addNow = (a: Archetype) => {
    const co = companyName.trim()
    const id = create(a.id, co ? `${co} · ${a.label}` : undefined)
    if (!id) return
    pushToast({ kind: 'event', badge: 'OK', color: a.tint, title: a.label, text: `${a.agents.length} teammates hired · opening your dojo.` })
    open(id)
  }

  // saving a project is the moment an account is needed
  const add = (a: Archetype) => {
    if (account) { addNow(a); return }
    // nothing to sign in with on this deployment · fall through as a guest
    if (!privyConfigured()) { useWorkshop.getState().signInGuest(); addNow(a); return }
    setPending(a)
  }

  return (
    <div className="ph">
      <header className="ph-hero">
        <h1>Create your company</h1>
        <label className="ph-name">
          <input
            value={companyName}
            placeholder="Name your company"
            maxLength={40}
            aria-label="Your company name"
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <span className="ph-name-hint">
            Every team you add below joins this company.
            <InfoDot title="How this works" label="Company, teams, agents">
              <p>Name your company once. Everything you add afterwards belongs to it, so the whole pipeline reads as one business.</p>
              <p>Each card below is a <b>ready-made team</b> — a project with its own dedicated AI teammates, already wired to the apps that job needs. Pick one and you land straight inside it.</p>
            </InfoDot>
          </span>
        </label>
      </header>

      {/* the catalogue · always visible, grouped by speciality */}
      <section className="ph-sec">
        <div className="ph-sec-h">
          <h2>Dojo teams by speciality
            <InfoDot title="Teams & agents" label="What is in a card">
              <p>Every card is a <b>ready-made team</b>: the teammates are listed inside it, each with what they do and the apps they use.</p>
              <p>Pick one and it becomes your dojo. Then rename teammates, add or remove them, change the apps they use, change how each one works, or run the whole plan in one go.</p>
            </InfoDot>
          </h2>
          <div className="ph-filters">
            <button className={cat === 'all' ? 'on' : ''} onClick={() => setCat('all')}>All {ARCHETYPES.length}</button>
            {CATS.map((c) => <button key={c} className={cat === c ? 'on' : ''} onClick={() => setCat(c)}>{c}</button>)}
          </div>
        </div>
        <div className="ph-grid">
          {shown.map((a) => <TeamCard key={a.id} a={a} onPick={() => add(a)} />)}
        </div>
      </section>

      {/* your pipeline so far */}
      {dojos.length > 0 && (
        <section className="ph-sec">
          <div className="ph-sec-h">
            <h2>{companyName.trim() || 'Your pipeline'} <span className="ph-badge">{dojos.length}</span></h2>
            <span className="muted small">Tap a dojo to open its office · use the arrows to reorder.</span>
          </div>
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
        </section>
      )}

      {/* the two system agents · runs the whole pipeline + looks after the app */}
      <SystemAgents projectCount={projects.length} onRunPipeline={() => void runPipeline()} running={loopRunning} />

      {pending && (
        <SaveGate
          archetypeLabel={pending.label}
          onClose={() => setPending(null)}
          onSignedIn={() => { const a = pending; setPending(null); if (a) addNow(a) }}
        />
      )}
    </div>
  )
}
