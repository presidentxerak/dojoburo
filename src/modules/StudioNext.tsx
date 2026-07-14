// Studio flow chaining — at the end of a studio's flow we validate the work and
// propose moving on to the next studio: Brand → Website → Marketing → Growth →
// Business. Clicking selects that agent, which opens its studio.
import { useDojo } from '../store'
import { useWorkshop } from '../workshop'
import { canonicalRole } from '../data/roleAgents'

export const NEXT_STUDIO: Record<string, { role: string; label: string }> = {
  brandi: { role: 'weblos', label: 'Website Studio' },
  weblos: { role: 'marketus', label: 'Marketing Studio' },
  marketus: { role: 'pumpi', label: 'Growth Studio' },
  pumpi: { role: 'busino', label: 'Business Studio' },
}

export function StudioNext({ from, done = 'All set.' }: { from: string; done?: string }) {
  const next = NEXT_STUDIO[from]
  const selectAgent = useDojo((s) => s.selectAgent)
  const dojo = useWorkshop((s) => s.dojos.find((d) => d.id === s.activeDojoId))
  if (!next) return null
  const agent = dojo?.agents.find((a) => canonicalRole(a.role) === next.role)
  if (!agent) return null
  return (
    <div className="studio-next">
      <b>{done}</b>
      <button className="studio-next-cta" onClick={() => selectAgent(agent.id)}>Continue to {next.label} →</button>
    </div>
  )
}
