// The landing hero call-to-action.
//
// There is deliberately NO prompt here any more. Describing a company in one
// sentence always produced the same generic crew, which is exactly what the
// pipeline replaces: you enter the app and pick ready-made team cards, so the
// dojo you land in is the one you actually asked for.
import { ARCHETYPES } from '../../data/archetypes'

export function HeroCreate({ enter }: { enter: () => void }) {
  // a few teasers so the landing shows what you'll be choosing from
  const teasers = ARCHETYPES.slice(0, 6)
  return (
    <div className="hc" id="create-hero">
      <div className="hc-teasers">
        {teasers.map((a) => (
          <button key={a.id} className="hc-teaser" style={{ ['--ac' as string]: a.tint }} onClick={enter}>
            <span className="hc-teaser-g" style={{ background: a.tint }}>{a.glyph}</span>
            {a.label}
          </button>
        ))}
      </div>
      <div className="hc-row">
        <button className="hc-go lp-cta-create" onClick={enter}>Create your company →</button>
      </div>
      <p className="hc-hint">
        Pick a ready-made team card · {ARCHETYPES.length} project types, each arriving with the exact agents
        that job needs, already wired to the right apps. Everything stays editable.
      </p>
    </div>
  )
}
