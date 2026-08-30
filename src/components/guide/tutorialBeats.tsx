// The animated walkthroughs.
//
// A beat is one step of a story: a title, a paragraph, and a small animated
// stage that mimics the real UI. Beats are grouped into named walkthroughs so
// the same player can run any of them full screen:
//
//   overview · the whole thing, from an empty screen to finished work
//   company  · A to Z, how you create your project
//   teams    · what a dojo team is and how you choose them
//   apps     · connecting your apps, and what it costs on top of your plan
import { useEffect, useState } from 'react'
import { TeamCard } from '../home/TeamCard'
import { TeammateCard } from '../TeammateCard'
import { ARCHETYPE_BY_ID } from '../../data/archetypes'
import { ROLE_BY_ID } from '../../data/roleAgents'

export interface Beat { id: string; title: string; body: string }

export type WalkId = 'overview' | 'company' | 'teams' | 'apps'

export const WALKS: Record<WalkId, { title: string; sub: string; beats: Beat[] }> = {
  overview: {
    title: 'How it works',
    sub: 'Six steps, start to finish.',
    beats: [
      { id: 'name', title: '1 · Name your project', body: 'You land on one screen. Type the name of your project — that is the whole setup. Everything you add afterwards belongs to it.' },
      { id: 'pick', title: '2 · Choose your teams', body: 'Tick the ready-made teams that match what you want to do — a social campaign, an app, a book, a shop. They join your project together.' },
      { id: 'crew', title: '3 · Your team is hired', body: 'Each card arrives already staffed with exactly the teammates that job needs: a researcher, a maker, an analyst, a team lead…' },
      { id: 'apps', title: '4 · Their apps connect', body: 'Every teammate comes wired to the apps they work in. Connect one in a click and they work inside your real account.' },
      { id: 'loop', title: '5 · Run every step', body: 'Give the project a goal and hit Run. The team lead hands each step to the right teammate, in order, and they work through it.' },
      { id: 'ship', title: '6 · You get the work', body: 'Every step produces something real you can open, edit and export. Add another team and your project grows.' },
    ],
  },

  company: {
    title: 'How to create your project',
    sub: 'From an empty screen to a working project.',
    beats: [
      { id: 'name', title: '1 · Give it a name', body: 'One field, nothing else. It can be the real name of your business or a working title — you can change it any time from your profile.' },
      { id: 'create', title: '2 · Hit Create your project', body: 'That is the project created. No forms, no plan to choose, no card to enter. It is saved the moment you sign in, and you find it again on any device you sign in from.' },
      { id: 'pick', title: '3 · Choose your dojo teams', body: 'Next you see the whole catalogue. Tick as many teams as you need — one to start is plenty, and you can come back and add more whenever you want.' },
      { id: 'crew', title: '4 · Your teammates arrive', body: 'Each team you ticked becomes a dojo: a 3D office with its own crew, already named, already briefed, already wired to the right apps.' },
      { id: 'brief', title: '5 · Tell them what you want', body: 'Write the goal of the project in one line. That single sentence is the brief every teammate works from, so make it the outcome you actually want.' },
      { id: 'loop', title: '6 · Run every step', body: 'The team lead hands each step to the teammate who owns it, in order, and they work through the whole plan while you watch it tick.' },
      { id: 'ship', title: '7 · Everything is yours', body: 'Brand, site, posts, briefs, numbers — open them, edit them, export them. Your project lives in your profile, and you can rename or remove any part of it.' },
    ],
  },

  teams: {
    title: 'How dojo teams work',
    sub: 'What is inside a card, and how to choose.',
    beats: [
      { id: 'pick', title: '1 · A card is a whole project', body: 'Not a template and not a prompt: a card is a project with a crew attached. Social campaign, mobile app, book, online shop, start-up — pick the one that matches your goal.' },
      { id: 'crew', title: '2 · The crew is listed up front', body: 'Every card names its teammates and what each one does before you pick it — a researcher, a maker, an analyst, a team lead. No surprises after the fact.' },
      { id: 'apps', title: '3 · Their apps come with them', body: 'The apps that job needs are already attached to the right teammate. Connecting one is a click; the card shows you which ones before you choose.' },
      { id: 'budget', title: '4 · You see the budget first', body: 'Each card shows what one full run costs in credits, so you know before you tick it. Light, Medium or Heavy tells you at a glance how much work it is.' },
      { id: 'loop', title: '5 · The plan runs in order', body: 'Every card has a fixed plan of steps. Hit Run every step and the team lead walks it top to bottom, handing each step to the teammate who owns it.' },
      { id: 'edit', title: '6 · Nothing is locked', body: 'Rename teammates, add or remove them, change the apps they reach, rewrite how any one of them works. The card is a starting point, not a cage.' },
    ],
  },

  apps: {
    title: 'Connecting your apps',
    sub: 'How it works, and what it costs on top of your plan.',
    beats: [
      { id: 'why', title: '1 · Why connect anything', body: 'Without apps your team writes drafts. Connected, they do the real thing: create the Notion page, draft the Gmail, open the GitHub issue, raise the Stripe invoice.' },
      { id: 'connect', title: '2 · Connecting is one click', body: 'Open a teammate, find the app under their tasks, hit Connect and approve once on the app\'s own screen. You never hand over a password, and you can disconnect any time.' },
      { id: 'apps', title: '3 · Access is sealed away', body: 'What comes back is stored on the server, encrypted, and unlocked only while your team is working. This browser never holds it.' },
      { id: 'free', title: '4 · Connecting costs nothing', body: 'There is no charge to connect an app, and no charge to keep it connected. Your plan sets how many apps you can have at once — Free 2, Solo 6, Pro every one of them.' },
      { id: 'cost', title: '5 · What you pay on top', body: 'Only the work costs anything: about one credit per task, bought in your own currency. Nothing else is added — no per-app fee, no per-teammate fee, no setup fee.' },
      { id: 'sub', title: '6 · Your own apps stay yours', body: 'We never bill you for Notion, Slack, Stripe or anything else you connect. If a plan is needed there, you pay it to them, exactly as you do today.' },
      { id: 'byok', title: '7 · Or bring your own key', body: 'Add your own Claude key and the work runs on it: unlimited tasks, no credits spent at all. Anthropic bills you directly and DojoBuro takes nothing per task.' },
    ],
  },
}

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
  { d: 'Research', g: '◈', c: '#0ea5e9' },
  { d: 'Plan', g: '❑', c: '#7b5cff' },
  { d: 'Creatives', g: '◱', c: '#e0459b' },
  { d: 'Brief', g: '▤', c: '#1fa563' },
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
          <span className="tut-name-lab">Create your project</span>
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
          <button className="tut-plus" type="button" tabIndex={-1}>Create your project</button>
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
        <div className="tut-spec tut-spec-crew" aria-hidden>
          {CREW_ROLES.slice(0, 4).map((r, i) => (
            <TeammateCard
              key={r.id}
              role={r}
              status={i === 0 ? 'Team lead' : 'Ready'}
              statusMod={i === 0 ? 'active' : 'ready'}
              phase={i * 0.6}
              size={112}
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
                <span className="tut-loop-i">{i < tick ? '✓' : i + 1}</span>{s.s}
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
          <span className="tut-name-lab">The goal of this project</span>
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
            <span className="tut-doc-g" style={{ background: x.c }}>{x.g}</span>
            <span className="tut-doc-l" /><span className="tut-doc-l sm" />
            <em>{x.d}</em>
          </span>
        ))}
      </div>
    </div>
  )
}
