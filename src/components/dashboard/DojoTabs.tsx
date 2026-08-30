// The dojo tab bar · every other team in the project, one tap away.
//
// Sticky under the header inside the dojo, so switching from the campaign team
// to the app team is a tap rather than a trip back to the project screen. Only
// shows when there is more than one team to switch between.
import { useWorkshop } from '../../workshop'
import { ARCHETYPE_BY_ID } from '../../data/archetypes'

export function DojoTabs({ onOpen }: { onOpen?: () => void }) {
  const dojos = useWorkshop((s) => s.dojos)
  const activeId = useWorkshop((s) => s.activeDojoId)
  const setActive = useWorkshop((s) => s.setActiveDojo)

  if (dojos.length < 2) return null

  return (
    <nav className="dtabs" aria-label="Your dojo teams">
      <div className="dtabs-in">
        {dojos.map((d) => {
          const a = d.archetype ? ARCHETYPE_BY_ID[d.archetype] : null
          const tint = a?.tint ?? '#7b5cff'
          const crew = d.agents.filter((x) => !x.hidden).length
          // the project name prefixes every team · the team is what matters here
          const label = a?.label ?? d.name
          return (
            <button
              key={d.id}
              className={`dtab${d.id === activeId ? ' on' : ''}`}
              style={{ ['--ac' as string]: tint }}
              aria-current={d.id === activeId}
              title={`${d.name} · ${crew} teammates`}
              onClick={() => { setActive(d.id); onOpen?.() }}
            >
              <span className="dtab-glyph" style={{ background: tint }}>{a?.glyph ?? '◆'}</span>
              <span className="dtab-txt">{label}</span>
              <span className="dtab-n">{crew}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
