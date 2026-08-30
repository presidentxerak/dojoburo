// The dojo tab bar · the teams the founder actually chose, one tap away.
//
// Sticky under the header inside the dojo, so switching from the campaign team
// to the app team is a tap rather than a trip back to the project screen.
//
// Only teams picked from the catalogue appear here. The seeded "HQ Dojo" that
// every install starts with was never chosen by anyone, so it is not offered as
// a destination — it stays reachable from Dojo settings. And because you can
// legitimately add the same team twice, repeated labels are numbered rather
// than shown as identical twins.
import { useWorkshop } from '../../workshop'
import { ARCHETYPE_BY_ID } from '../../data/archetypes'

export function DojoTabs({ onOpen }: { onOpen?: () => void }) {
  const dojos = useWorkshop((s) => s.dojos)
  const activeId = useWorkshop((s) => s.activeDojoId)
  const setActive = useWorkshop((s) => s.setActiveDojo)

  // only the teams the founder picked
  const teams = dojos.filter((d) => d.archetype && ARCHETYPE_BY_ID[d.archetype])
  if (teams.length < 2) return null

  // "Social media campaign" twice becomes "… 1" and "… 2"
  const seen: Record<string, number> = {}
  const total: Record<string, number> = {}
  for (const d of teams) total[d.archetype!] = (total[d.archetype!] ?? 0) + 1

  return (
    <nav className="dtabs" aria-label="Your dojo teams">
      <div className="dtabs-in">
        {teams.map((d) => {
          const a = ARCHETYPE_BY_ID[d.archetype!]
          const tint = a.tint
          const crew = d.agents.filter((x) => !x.hidden).length
          seen[d.archetype!] = (seen[d.archetype!] ?? 0) + 1
          const label = total[d.archetype!] > 1 ? `${a.label} ${seen[d.archetype!]}` : a.label
          return (
            <button
              key={d.id}
              className={`dtab${d.id === activeId ? ' on' : ''}`}
              style={{ ['--ac' as string]: tint }}
              aria-current={d.id === activeId}
              title={`${d.name} · ${crew} teammates`}
              onClick={() => { setActive(d.id); onOpen?.() }}
            >
              <span className="dtab-glyph" style={{ background: tint }}>{a.glyph}</span>
              <span className="dtab-txt">{label}</span>
              <span className="dtab-n">{crew}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
