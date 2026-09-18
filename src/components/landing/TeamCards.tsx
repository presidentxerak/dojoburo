import { useState } from 'react'
import { createPortal } from 'react-dom'
import { AGENTS, agentColor, type AgentDef } from '../../data/agents'
import { ROLE_AGENTS } from '../../data/roleAgents'
import { Agent3DPreview } from '../three/Agent3DPreview'
import { TeammateCard } from '../TeammateCard'
import { useInView } from './useInView'

// LA TABLE DES VISAGES A DÉMÉNAGÉ dans data/agentFaces, et ces deux lignes sont
// ce qu'il en reste ici.
//
// Elle vivait dans ce composant, qui est une grille de la page d'accueil. La
// salle de classe en 3D avait donc le choix entre importer un composant de
// landing pour lire une donnée, ou se débrouiller autrement · elle s'est
// débrouillée autrement, en distribuant les visages par position, et les deux
// écrans ont cessé de montrer le même agent. Voir l'en-tête de data/agentFaces.
//
// On les réexporte pour que rien n'ait à changer d'import : le défaut était
// l'endroit où la table vivait, pas les noms par lesquels on l'appelle.
export { ROLE_FACE as AGENT_CHAR, characterFor as charForAgent } from '../../data/agentFaces'
import { characterFor as charFor } from '../../data/agentFaces'

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
