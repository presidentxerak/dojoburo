import { useState } from 'react'
import { createPortal } from 'react-dom'
import { AGENTS, agentColor, type AgentDef } from '../../data/agents'
import { CHARACTERS } from '../../data/looks'
import { MODULES, type ModuleDef } from '../../modules/registry'
import { ROLE_BY_ID } from '../../data/roleAgents'
import { Agent3DPreview } from '../three/Agent3DPreview'
import { useInView } from './useInView'

const charFor = (id: string) => CHARACTERS[id] ?? Object.values(CHARACTERS)[0]

// One distinct 3D character per studio agent, so every studio has its own face.
const STUDIO_CHAR: Record<string, string> = {
  brand: 'dex',
  web: 'rex',
  acq: 'mia',
  video: 'lex',
  outbound: 'sol',
  revenue: 'fin',
  measure: 'ada',
  work: 'otto',
}

function StudioCard({ mod, i, onOpen }: { mod: ModuleDef; i: number; onOpen: () => void }) {
  const [ref, inView] = useInView<HTMLButtonElement>('250px')
  const agent = ROLE_BY_ID[mod.agentRole]
  const charKey = STUDIO_CHAR[mod.agentRole] ?? mod.agentRole
  return (
    <button
      ref={ref}
      className="lp-studiocard"
      style={{ ['--ac' as any]: mod.tint }}
      onClick={onOpen}
      title={`Open the ${mod.label}`}
    >
      <span className="lp-team-3d">
        {inView ? <Agent3DPreview id={charKey} character={charFor(charKey)} size={128} phase={i * 0.6} /> : null}
      </span>
      <strong>{mod.label}</strong>
      <span className="lp-team-role">{agent ? `${agent.name} · ${agent.cat} agent` : mod.blurb}</span>
      <span className="lp-studiocard-blurb">{mod.blurb}</span>
      <span className="lp-team-more">Open the studio →</span>
    </button>
  )
}

/** The merged office + studios grid: one 3D agent per studio, each card opening
 *  its pro studio. Replaces the old split "studios" + "meet the office" blocks. */
export function StudioTeam({ enter }: { enter: () => void }) {
  return (
    <div className="lp-studioteam">
      {MODULES.map((m, i) => (
        <StudioCard key={m.id} mod={m} i={i} onOpen={enter} />
      ))}
    </div>
  )
}

function TeamCard({ agent, i, onOpen }: { agent: AgentDef; i: number; onOpen: () => void }) {
  const [ref, inView] = useInView<HTMLButtonElement>('250px')
  return (
    <button ref={ref} className="lp-team" style={{ ['--ac' as any]: agentColor(agent.id) }} onClick={onOpen} title={`See ${agent.name}'s characteristics`}>
      <span className="lp-team-3d">{inView ? <Agent3DPreview id={agent.id} character={charFor(agent.id)} size={132} phase={i * 0.6} /> : null}</span>
      <strong>{agent.name}</strong>
      <span className="lp-team-role">{agent.role}</span>
      <span className="lp-team-more">View characteristics</span>
    </button>
  )
}

function TeamModal({ agent, onClose }: { agent: AgentDef; onClose: () => void }) {
  return createPortal(
    <div className="lp-team-overlay" onClick={onClose}>
      <div className="lp-team-modal" onClick={(e) => e.stopPropagation()} style={{ ['--ac' as any]: agentColor(agent.id) }}>
        <button className="lp-team-x" onClick={onClose} aria-label="Close">×</button>
        <div className="lp-team-modal-3d"><Agent3DPreview id={agent.id} character={charFor(agent.id)} size={200} mood="happy" /></div>
        <div className="lp-team-info">
          <span className="lp-team-cat">{agent.department}</span>
          <h3>{agent.name}</h3>
          <p className="lp-team-jobrole">{agent.role}</p>
          <p className="lp-team-mission">{agent.mission}</p>
          <div className="lp-team-skills">
            {agent.skills.slice(0, 6).map((s) => <span key={s.id} className="lp-team-skill">{s.name}</span>)}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}

export function TeamCards() {
  const [openId, setOpenId] = useState<string | null>(null)
  const open = openId ? AGENTS.find((a) => a.id === openId) ?? null : null
  return (
    <>
      <div className="lp-teamgrid">
        {AGENTS.map((a, i) => <TeamCard key={a.id} agent={a} i={i} onOpen={() => setOpenId(a.id)} />)}
      </div>
      {open && <TeamModal agent={open} onClose={() => setOpenId(null)} />}
    </>
  )
}
