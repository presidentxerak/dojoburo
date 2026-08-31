// One teammate, as a card · THE card.
//
// The same face appears in three places — the landing office, the CEO roster
// inside a dojo, and the walkthrough that explains what a teammate is. It used
// to be written out three times, which is how a walkthrough ends up showing a
// product that no longer exists: initials in a circle where the app shows a 3D
// character, a job title the data renamed months ago.
//
// So there is one card, and the tutorial shows a REAL one — same component,
// same data, same 3D portrait. If the card changes, the lesson changes with it.
import { Agent3DPreview } from './three/Agent3DPreview'
import { useInView } from './landing/useInView'
import { AGENT_CHAR, charForAgent } from './landing/TeamCards'
import type { RoleAgent } from '../data/roleAgents'

export function TeammateCard({
  role, name, status, statusMod = 'ready', lastLabel, phase = 0, size = 132, onOpen, onHide,
}: {
  role: RoleAgent
  /** the teammate's name in THIS dojo · renamed teammates keep their new name */
  name?: string
  /** management state · omitted on the landing, where there is nothing running */
  status?: string
  statusMod?: string
  lastLabel?: string
  phase?: number
  size?: number
  onOpen?: () => void
  onHide?: () => void
}) {
  const [ref, inView] = useInView<HTMLDivElement>('250px')
  const charKey = AGENT_CHAR[role.id] ?? role.id
  const label = name ?? role.code
  return (
    <div
      ref={ref}
      className={`lp-studiocard agent-card${onOpen ? '' : ' still'}`}
      style={{ ['--ac' as string]: role.tint }}
      {...(onOpen
        ? { onClick: onOpen, role: 'button', tabIndex: 0, title: `Open ${label} · ${role.title}` }
        : {})}
    >
      {onHide && (
        <button className="agent-hide" title={`Hide ${role.title}`} aria-label={`Hide ${role.title}`}
          onClick={(e) => { e.stopPropagation(); onHide() }}>×</button>
      )}
      {status && <span className={`agent-status s-${statusMod}`}><i />{status}</span>}
      <span className="lp-team-3d">
        {/* fit = the camera is computed from the character's own size, so every
            teammate fills its portrait and none of them is clipped */}
        {inView ? <Agent3DPreview id={charKey} character={charForAgent(charKey)} size={size} phase={phase} fit /> : null}
      </span>
      <strong className="agent-code">{label}</strong>
      <span className="agent-title">{role.title}</span>
      <span className="agent-desc">{role.desc}</span>
      {lastLabel && <span className="agent-last">{lastLabel}</span>}
      {onOpen && <span className="lp-team-more">Open →</span>}
    </div>
  )
}
