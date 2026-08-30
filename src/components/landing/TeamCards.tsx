import { useState } from 'react'
import { createPortal } from 'react-dom'
import { AGENTS, agentColor, type AgentDef } from '../../data/agents'
import { CHARACTERS } from '../../data/looks'
import { ROLE_AGENTS } from '../../data/roleAgents'
import { Agent3DPreview } from '../three/Agent3DPreview'
import { TeammateCard } from '../TeammateCard'
import { useInView } from './useInView'

export const charForAgent = (id: string) => CHARACTERS[id] ?? Object.values(CHARACTERS)[0]
const charFor = charForAgent

// One distinct 3D character per teammate, so nobody in a team wears somebody
// else's face.
//
// Only eight roles were mapped; the other ten all fell through to the same
// fallback character, so a dojo could show four identical strangers with
// different names. There are eighteen roles and twelve characters, so the
// twelve who can sit in one company dojo get one each, and the six specialists
// reuse a face that never appears in a team they join.
// scripts/check-content.mjs fails the build if any team ends up with a
// duplicate face.
export const AGENT_CHAR: Record<string, string> = {
  // the company crew · twelve roles, twelve characters, no repeats
  chief: 'rex',
  brandi: 'dex',
  weblos: 'lex',
  devi: 'sam',
  marketus: 'mia',
  pumpi: 'sol',
  nexa: 'hana',
  helpi: 'pia',
  busino: 'fin',
  vaultor: 'otto',
  legi: 'ava',
  sentinel: 'ada',
  // the specialists · each avoids every face in the teams it joins
  scout: 'ada',
  scribe: 'ava',
  deck: 'pia',
  pixel: 'otto',
  pilot: 'rex',
  kaizen: 'fin',
}

/** The office grid: the AI teammates, each card entering the app. */
export function StudioTeam({ enter }: { enter: () => void }) {
  return (
    <div className="lp-studioteam">
      {ROLE_AGENTS.map((a, i) => (
        <TeammateCard key={a.id} role={a} phase={i * 0.6} onOpen={enter} />
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
