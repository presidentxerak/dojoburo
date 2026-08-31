// A dojo team card.
//
// Everything you need in order to choose is on the face of the card: the whole
// crew by name (and how many of them there are), the apps they reach, how many
// steps their plan has, and what one full run costs. Same chrome as the office
// cards on the landing — white panel, accent hairline on top, lift on hover.
import { archetypeAgents, archetypeConnectors, type Archetype } from '../../data/archetypes'
import { CONNECTOR_BY_ID } from '../../data/connectors'
import { teamBudget, usdLabel } from '../../data/budget'
import { ConnectorLogo } from '../ConnectorLogo'

const APPS_SHOWN = 8

export function TeamCard({ a, selected, owned, onToggle }: {
  a: Archetype
  selected?: boolean
  /** already in the company · shown, explained, and not selectable again */
  owned?: boolean
  onToggle: () => void
}) {
  const crew = archetypeAgents(a)
  const apps = archetypeConnectors(a)
  const budget = teamBudget(a, apps.length)

  return (
    <button
      type="button"
      className={`appcard tcard${selected && !owned ? ' on' : ''}${owned ? ' owned' : ''}`}
      style={{ ['--ac' as string]: a.tint }}
      aria-pressed={owned ? undefined : selected}
      aria-disabled={owned || undefined}
      disabled={owned}
      title={owned ? `${a.label} is already in this company` : undefined}
      onClick={onToggle}
    >
      <span className="tcard-top">
        <span className="tcard-glyph" style={{ background: a.tint }}>{a.glyph}</span>
        <span className="tcard-cat">{a.category}</span>
        {owned
          ? <span className="tcard-owned">Hired</span>
          : <span className="tcard-check" aria-hidden>{selected ? '✓' : ''}</span>}
      </span>

      <strong className="tcard-title">{a.label}</strong>
      <span className="tcard-tag">{a.tagline}</span>

      {/* the whole crew, named · and how many of them join the dojo */}
      <span className="tcard-sec">
        <span className="tcard-sech">Teammates <b>{crew.length}</b></span>
        <span className="tcard-crew">
          {crew.map((r) => (
            <span key={r.id} className="tcard-mate">
              <span className="tcard-face" style={{ background: r.tint }}>{r.code[0]}</span>
              <b>{r.code}</b><em>{r.title}</em>
            </span>
          ))}
        </span>
      </span>

      {apps.length > 0 && (
        <span className="tcard-sec">
          <span className="tcard-sech">Apps <b>{apps.length}</b></span>
          <span className="tcard-apps">
            {apps.slice(0, APPS_SHOWN).map((id) => CONNECTOR_BY_ID[id] && (
              <ConnectorLogo key={id} id={id} label={CONNECTOR_BY_ID[id].label} size={18} />
            ))}
            {apps.length > APPS_SHOWN && <em className="tcard-appmore">+{apps.length - APPS_SHOWN}</em>}
          </span>
        </span>
      )}

      {/* what a full run costs · the only number we can state honestly */}
      <span className="tcard-budget">
        <span className={`tcard-tier t-${budget.tier.toLowerCase()}`}>{budget.tier}</span>
        <span className="tcard-bmain"><b>{budget.credits}</b> credits a run</span>
        <span className="tcard-busd">≈ {usdLabel(budget.usd)} · free with your own key</span>
      </span>

      <span className="tcard-cta">
        {a.loop.length} steps · {owned ? 'Already hired' : selected ? 'Selected' : 'Choose this team'}
      </span>
    </button>
  )
}
