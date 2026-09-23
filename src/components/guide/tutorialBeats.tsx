// The animated walkthroughs.
//
// A beat is one step of a story: a title, a paragraph, and a small animated
// stage that mimics the real UI. Beats are grouped into named walkthroughs so
// the same player can run any of them full screen:
//
//   overview · the whole thing, from an empty screen to finished work
//   company  · A to Z, how the practice dojo works
//   teams    · what a dojo team is and how you choose them
//   apps     · connecting your apps, and what it costs on top of your plan
import { useEffect, useState } from 'react'
import { TeamCard } from '../home/TeamCard'
import { TeammateCard } from '../TeammateCard'
import { ARCHETYPE_BY_ID } from '../../data/archetypes'
import { ROLE_BY_ID } from '../../data/roleAgents'
import { BauhausIcon } from '../BauhausIcon'

export { WALKS, walkIn, type Beat, type Walk, type WalkId } from './walks'

// ---------------------------------------------------------------------------
// the animated stages · one per beat id
// ---------------------------------------------------------------------------
// The walkthrough shows the REAL screens, not drawings of them.
//
// It used to mime the app: grey bars where the team cards go, four floating
// characters where the crew cards go. That is a lesson about a product nobody
// can find — the cards you are shown are not the cards you then meet, and every
// change to the real ones widens the gap.
//
// So the beats below mount the app's own components with the app's own data:
// TeamCard from the chooser, TeammateCard from the office. The tour cannot
// drift, because it is a specimen of the thing itself.
const TOUR = ARCHETYPE_BY_ID.social                   // the team the tour follows
const TOUR_CARDS = ['social', 'app', 'book']          // the cards it picks from
/** The crew of the tour's team, in plan order, as real roles. */
const CREW_ROLES = (TOUR?.agents ?? []).map((id) => ROLE_BY_ID[id]).filter(Boolean)
// The plan and its owners come from the archetype itself, so the tour walks the
// same steps the team really runs.
const STEPS = (TOUR?.loop ?? []).map((s) => ({
  s: s.label,
  by: Math.max(0, CREW_ROLES.findIndex((r) => r.id === s.agent)),
}))
const APPS = ['Notion', 'Instagram', 'Gmail', 'Drive']
// what the team hands back · a glyph beats three grey bars
const DOCS = [
  { d: 'Research', g: 'diamond', c: '#0ea5e9' },
  { d: 'Plan', g: 'square', c: '#7b5cff' },
  { d: 'Creatives', g: 'quadrant', c: '#e0459b' },
  { d: 'Brief', g: 'rows', c: '#1fa563' },
]

/** The animated stage for a beat. Keyed by beat id so animations replay. */
export function Stage({ beat }: { beat: string }) {
  // the loop beat ticks its steps one by one
  const [tick, setTick] = useState(0)
  useEffect(() => {
    if (beat !== 'loop') { setTick(0); return }
    setTick(0)
    const id = window.setInterval(() => setTick((t) => (t >= STEPS.length ? t : t + 1)), 700)
    return () => window.clearInterval(id)
  }, [beat])

  if (beat === 'name') {
    return (
      <div className="tut-stage">
        <div className="tut-name">
          <span className="tut-name-lab">Open a lesson</span>
          <span className="tut-name-field"><b>Novaranly</b><i className="tut-caret" /></span>
        </div>
      </div>
    )
  }

  if (beat === 'create') {
    return (
      <div className="tut-stage">
        <div className="tut-name">
          <span className="tut-name-field done"><b>Novaranly</b></span>
          <button className="tut-plus" type="button" tabIndex={-1}>Start the course</button>
        </div>
      </div>
    )
  }

  if (beat === 'pick') {
    // real cards from the real catalogue · the first one ticked, exactly as it
    // looks the moment you tick it
    return (
      <div className="tut-stage">
        <div className="tut-spec tut-spec-cards" aria-hidden>
          {TOUR_CARDS.map((id) => ARCHETYPE_BY_ID[id]).filter(Boolean).map((a, i) => (
            <TeamCard key={a.id} a={a} selected={i === 0} onToggle={() => undefined} />
          ))}
        </div>
      </div>
    )
  }

  if (beat === 'crew') {
    // the crew of that same card, as the cards you meet in the office
    return (
      <div className="tut-stage">
        {/* At natural size, never scaled: a WebGL canvas is sized from its
            measured box, and any transform on an ancestor shrinks the canvas
            inside its own frame: the teammate ends up a speck in the corner
            of their portrait. Two cards fit the stage as they are. */}
        <div className="tut-spec tut-spec-crew" aria-hidden>
          {CREW_ROLES.slice(0, 2).map((r, i) => (
            <TeammateCard
              key={r.id}
              role={r}
              status={i === 0 ? 'Team lead' : 'Ready'}
              statusMod={i === 0 ? 'active' : 'ready'}
              phase={i * 0.6}
            />
          ))}
        </div>
      </div>
    )
  }

  if (beat === 'apps' || beat === 'connect' || beat === 'why') {
    return (
      <div className="tut-stage">
        <div className="tut-apps">
          {APPS.map((a, i) => (
            <span key={a} className="tut-app" style={{ animationDelay: `${i * 200}ms` }}>
              <span className="tut-app-dot" />{a}
              <b>{beat === 'why' ? 'acts for real' : beat === 'connect' ? 'one click' : 'connected'}</b>
            </span>
          ))}
        </div>
      </div>
    )
  }

  if (beat === 'loop') {
    const at = Math.min(tick, STEPS.length - 1)
    const who = CREW_ROLES[STEPS[at].by]
    const finished = tick >= STEPS.length
    return (
      <div className="tut-stage">
        <div className="tut-run">
          {/* the teammate whose turn it is · the office card, working */}
          <TeammateCard
            key={who.id}
            role={who}
            status={finished ? 'All done' : 'Working…'}
            statusMod={finished ? 'active' : 'working'}
            size={120}
          />
          <ol className="tut-loop">
            {STEPS.map((s, i) => (
              <li key={s.s} className={i < tick ? 'done' : i === tick ? 'run' : ''}>
                <span className="tut-loop-i">{i < tick ? <BauhausIcon name="check" size={12} /> : i + 1}</span>{s.s}
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }

  if (beat === 'brief') {
    return (
      <div className="tut-stage">
        <div className="tut-name">
          <span className="tut-name-lab">The goal of this team</span>
          <span className="tut-name-field wide"><b>Grow our Instagram to 10k</b><i className="tut-caret" /></span>
        </div>
      </div>
    )
  }

  if (beat === 'budget') {
    return (
      <div className="tut-stage">
        <div className="tut-budget">
          <span className="tut-budget-tier">Medium</span>
          <strong className="tut-budget-n">4<em>credits a run</em></strong>
          <span className="tut-budget-sub">≈ $0.08 · free with your own key</span>
        </div>
      </div>
    )
  }

  if (beat === 'free' || beat === 'cost' || beat === 'sub' || beat === 'byok') {
    const rows: Record<string, [string, string][]> = {
      free: [['Connecting an app', 'free'], ['Keeping it connected', 'free'], ['Apps at once', 'your plan']],
      cost: [['One task', '≈ 1 credit'], ['Per app', 'nothing'], ['Per teammate', 'nothing']],
      sub: [['Your Notion plan', 'paid to Notion'], ['Your Slack plan', 'paid to Slack'], ['We add', 'nothing']],
      byok: [['Your own Claude key', 'unlimited'], ['Credits spent', 'none'], ['Billed by', 'Anthropic']],
    }
    return (
      <div className="tut-stage">
        <div className="tut-bill">
          {rows[beat].map(([k, v], i) => (
            <span key={k} className="tut-bill-row" style={{ animationDelay: `${i * 180}ms` }}>
              <em>{k}</em><b>{v}</b>
            </span>
          ))}
        </div>
      </div>
    )
  }

  if (beat === 'edit') {
    return (
      <div className="tut-stage">
        <div className="tut-apps">
          {['Rename them', 'Swap their apps', 'Rewrite how they work'].map((a, i) => (
            <span key={a} className="tut-app" style={{ animationDelay: `${i * 200}ms` }}>
              <span className="tut-app-dot" />{a}<b>yours</b>
            </span>
          ))}
        </div>
      </div>
    )
  }

  // 'ship' and anything unknown · the finished work landing
  return (
    <div className="tut-stage">
      <div className="tut-docs">
        {DOCS.map((x, i) => (
          <span key={x.d} className="tut-doc" style={{ ['--c' as string]: x.c, animationDelay: `${i * 150}ms` }}>
            <span className="tut-doc-g" style={{ background: x.c }}><BauhausIcon name={x.g} size={16} /></span>
            <span className="tut-doc-l" /><span className="tut-doc-l sm" />
            <em>{x.d}</em>
          </span>
        ))}
      </div>
    </div>
  )
}
