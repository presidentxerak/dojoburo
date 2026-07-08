import { useState } from 'react'
import { createPortal } from 'react-dom'
import { AGENTS, agentColor, type AgentDef } from '../../data/agents'
import { CHARACTERS } from '../../data/looks'
import { Agent3DPreview } from '../three/Agent3DPreview'
import { useInView } from './useInView'

const charFor = (id: string) => CHARACTERS[id] ?? Object.values(CHARACTERS)[0]

function TeamCard({ agent, i, onOpen }: { agent: AgentDef; i: number; onOpen: () => void }) {
  const [ref, inView] = useInView<HTMLButtonElement>('250px')
  return (
    <button ref={ref} className="lp-team" style={{ ['--ac' as any]: agentColor(agent.id) }} onClick={onOpen} title={`See ${agent.name}'s characteristics`}>
      <span className="lp-team-3d">{inView ? <Agent3DPreview character={charFor(agent.id)} size={132} phase={i * 0.6} /> : null}</span>
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
        <div className="lp-team-modal-3d"><Agent3DPreview character={charFor(agent.id)} size={200} mood="happy" /></div>
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
