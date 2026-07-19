import { useState } from 'react'
import { createPortal } from 'react-dom'
import { AGENTS, agentColor, type AgentDef } from '../../data/agents'
import { CHARACTERS } from '../../data/looks'
import { ROLE_AGENTS, type RoleAgent } from '../../data/roleAgents'
import { Agent3DPreview } from '../three/Agent3DPreview'
import { useInView } from './useInView'

export const charForAgent = (id: string) => CHARACTERS[id] ?? Object.values(CHARACTERS)[0]
const charFor = charForAgent

// One distinct 3D character per agent, so every teammate has its own face.
export const AGENT_CHAR: Record<string, string> = {
  chief: 'rex',
  brandi: 'dex',
  weblos: 'lex',
  marketus: 'mia',
  pumpi: 'sol',
  busino: 'fin',
  sentinel: 'ada',
  vaultor: 'otto',
}

function StudioCard({ agent, i, onOpen }: { agent: RoleAgent; i: number; onOpen: () => void }) {
  const [ref, inView] = useInView<HTMLButtonElement>('250px')
  const charKey = AGENT_CHAR[agent.id] ?? agent.id
  return (
    <button
      ref={ref}
      className="lp-studiocard agent-card"
      style={{ ['--ac' as any]: agent.tint }}
      onClick={onOpen}
      title={`Meet ${agent.code} · ${agent.title}`}
    >
      <span className="lp-team-3d">
        {inView ? <Agent3DPreview id={charKey} character={charFor(charKey)} size={128} phase={i * 0.6} /> : null}
      </span>
      <strong className="agent-code">{agent.code}</strong>
      <span className="agent-title">{agent.title}</span>
      <span className="agent-desc">{agent.desc}</span>
      <span className="lp-team-more">Open →</span>
    </button>
  )
}

/** The office grid: the eight AI teammates, each card entering the app. */
export function StudioTeam({ enter }: { enter: () => void }) {
  return (
    <div className="lp-studioteam">
      {ROLE_AGENTS.map((a, i) => (
        <StudioCard key={a.id} agent={a} i={i} onOpen={enter} />
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
