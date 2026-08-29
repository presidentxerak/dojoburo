// The HOME · your pipeline of projects.
//
// This is the whole first screen: you pick a ready-made project card (an
// archetype — "social media campaign", "build an app", "write a book"), it drops
// a dojo into your pipeline already staffed with the exact agents that job needs
// and wired to their apps. Open a project to work in its 3D office; run its loop
// to have the crew produce the deliverables in order.
//
// Deliberately the ONLY thing on the home: a pipeline, project cards, and an
// info dot on each concept.
import { useState } from 'react'
import { useWorkshop } from '../../workshop'
import { useDojo } from '../../store'
import { ARCHETYPES, ARCHETYPE_BY_ID, archetypeAgents, archetypeConnectors, type Archetype } from '../../data/archetypes'
import { ROLE_BY_ID } from '../../data/roleAgents'
import { CONNECTOR_BY_ID } from '../../data/connectors'
import { ConnectorLogo } from '../ConnectorLogo'
import { InfoDot } from '../InfoDot'

const CATS = ['Marketing', 'Product', 'Content', 'Business'] as const

/** A card in the "add a project" catalogue. */
function ArchetypeCard({ a, onPick }: { a: Archetype; onPick: () => void }) {
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
      <span className="ph-arch-crew">
        {crew.slice(0, 5).map((r) => (
          <span key={r.id} className="ph-dot" style={{ background: r.tint }} title={`${r.code} · ${r.title}`}>{r.code[0]}</span>
        ))}
        <em>{crew.length} agents · {a.loop.length} steps</em>
      </span>
      {apps.length > 0 && (
        <span className="ph-arch-apps">
          {apps.slice(0, 6).map((id) => CONNECTOR_BY_ID[id] && <ConnectorLogo key={id} id={id} label={CONNECTOR_BY_ID[id].label} size={16} />)}
        </span>
      )}
      <span className="ph-arch-cta">Add to pipeline →</span>
    </button>
  )
}

export function PipelineHome({ onOpenProject }: { onOpenProject: (dojoId: string) => void }) {
  const dojos = useWorkshop((s) => s.dojos)
  const activeId = useWorkshop((s) => s.activeDojoId)
  const create = useWorkshop((s) => s.createDojoFromArchetype)
  const del = useWorkshop((s) => s.deleteDojo)
  const reorder = useWorkshop((s) => s.reorderDojo)
  const setActive = useWorkshop((s) => s.setActiveDojo)
  const setGoal = useWorkshop((s) => s.setDojoGoal)
  const pushToast = useDojo((s) => s.pushToast)

  const [picking, setPicking] = useState(false)
  const [cat, setCat] = useState<string>('all')

  const shown = cat === 'all' ? ARCHETYPES : ARCHETYPES.filter((a) => a.category === cat)

  const add = (a: Archetype) => {
    const id = create(a.id)
    setPicking(false)
    if (id) pushToast({ kind: 'event', badge: 'OK', color: a.tint, title: `${a.label} added`, text: `${a.agents.length} agents ready · open it to start.` })
  }

  const open = (id: string) => { setActive(id); onOpenProject(id) }

  return (
    <div className="ph">
      <header className="ph-head">
        <div>
          <h1>Your pipeline
            <InfoDot title="What is a pipeline?" label="How the pipeline works">
              <p>Your <b>pipeline</b> is everything you're working on, in order. Each card is a <b>project</b> — a dojo with its own dedicated team of AI agents.</p>
              <p>Add a project from a ready-made card, open it to work with its crew, and run its <b>loop</b> to have the agents produce the deliverables one after another.</p>
            </InfoDot>
          </h1>
          <p className="ph-sub">{dojos.length ? `${dojos.length} project${dojos.length > 1 ? 's' : ''} · pick one to open its office.` : 'Start by adding your first project below.'}</p>
        </div>
        {dojos.length > 0 && (
          <button className="ph-add" onClick={() => setPicking((v) => !v)}>{picking ? 'Close' : '+ Add a project'}</button>
        )}
      </header>

      {/* the pipeline · ordered project cards */}
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
                    <em>{a ? a.label : 'Full company'} · {crew.length} agents{a ? ` · ${a.loop.length} steps` : ''}</em>
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
                  placeholder="What should this project achieve? (one line)"
                  maxLength={240}
                  onChange={(e) => setGoal(d.id, e.target.value)}
                />
                <div className="ph-proj-acts">
                  <button className="btn primary tiny" onClick={() => open(d.id)}>Open</button>
                  <button className="ph-ic" onClick={() => reorder(d.id, -1)} disabled={i === 0} aria-label="Move up" title="Move up">↑</button>
                  <button className="ph-ic" onClick={() => reorder(d.id, 1)} disabled={i === dojos.length - 1} aria-label="Move down" title="Move down">↓</button>
                  <button className="ph-ic danger" aria-label={`Delete ${d.name}`} title="Delete project"
                    onClick={() => { if (confirm(`Delete "${d.name}"? Its agents and work are removed.`)) del(d.id) }}>×</button>
                </div>
              </li>
            )
          })}
        </ol>
      )}

      {/* the catalogue · shown when the pipeline is empty, or on demand */}
      {(picking || dojos.length === 0) && (
        <section className="ph-cat">
          <div className="ph-cat-head">
            <h2>Start a project
              <InfoDot title="Projects & agents" label="How a project works">
                <p>Every card is a <b>ready-made team</b>. Pick the one that matches what you want to do and it joins your pipeline with the right agents already hired and connected to the right apps.</p>
                <p>Nothing is locked: rename agents, add or remove them, change their apps, or run the whole thing on autopilot with the loop.</p>
              </InfoDot>
            </h2>
            <div className="ph-filters">
              <button className={cat === 'all' ? 'on' : ''} onClick={() => setCat('all')}>All</button>
              {CATS.map((c) => <button key={c} className={cat === c ? 'on' : ''} onClick={() => setCat(c)}>{c}</button>)}
            </div>
          </div>
          <div className="ph-grid">
            {shown.map((a) => <ArchetypeCard key={a.id} a={a} onPick={() => add(a)} />)}
          </div>
        </section>
      )}
    </div>
  )
}
