// The animated half of every lesson.
//
// A course that is only text is a blog. Each lesson gets a stage beside it that
// shows the thing being explained actually happening — a brief being rewritten,
// a plan handing work from one teammate to the next, a wrong step being found
// and fixed. They loop on their own, so the reader can watch or ignore them.
//
// Everything here is CSS and a tick counter. The teammates are the real 3D
// characters from the app, so the Academy looks like the product it teaches.
//
// One stage per component, dispatched through a map: a stage owns its own
// timer, so switching lesson swaps the component rather than changing which
// hooks run inside one.
import { useEffect, useState } from 'react'
import { Agent3DPreview } from '../components/three/Agent3DPreview'
import { skinById } from '../data/skins'
import type { StageId } from '../data/academy'

/** A counter that advances every `ms` and wraps at `n`. The engine behind every
 *  stage: each one is just "which of these is lit right now". */
function useTick(n: number, ms = 1100) {
  const [t, setT] = useState(0)
  useEffect(() => {
    const id = window.setInterval(() => setT((x) => (x + 1) % n), ms)
    return () => window.clearInterval(id)
  }, [n, ms])
  return t
}

const CAST = [
  { n: 'Scout', r: 'Research', t: '#0ea5e9', skin: 'forest-dragon' },
  { n: 'Marketus', r: 'Marketer', t: '#e0459b', skin: 'space-ghost' },
  { n: 'Busino', r: 'Analyst', t: '#1fa563', skin: 'retro-frog' },
  { n: 'Chief', r: 'Team lead', t: '#7b5cff', skin: 'space-bibendum' },
]

const PLAN = [
  { s: 'Audience research', by: 0 },
  { s: 'Content plan', by: 3 },
  { s: 'Creatives', by: 1 },
  { s: 'Campaign brief', by: 2 },
]

const SHEET = ['Identity', 'Mission', 'Expertise', 'Operating method', 'Quality bar', 'Output', 'Works with', 'Boundaries']

function Wrap({ children }: { children: React.ReactNode }) {
  return <div className="tut-stage ac-stage">{children}</div>
}

/** One teammate, rendered in 3D with their name under them. */
function Mate({ i, size = 130, label }: { i: number; size?: number; label?: string }) {
  const c = CAST[i % CAST.length]
  return (
    <span className="ac-mate" style={{ ['--c' as string]: c.t }}>
      <span className="tut-3d" style={{ width: size, height: size }}>
        <Agent3DPreview key={c.skin} id={c.skin} character={skinById(c.skin)} size={size} dist={3.3} lift={-1.5} />
      </span>
      <b>{c.n}</b>
      {label && <em>{label}</em>}
    </span>
  )
}

// ---------------------------------------------------------------------------

function Anatomy() {
  const PARTS = [
    { k: 'Identity', v: 'A careful researcher who replaces guesswork with evidence.' },
    { k: 'Method', v: 'Ask · gather · separate fact from assumption · recommend.' },
    { k: 'Tools', v: 'Notion · Drive · Search' },
    { k: 'Boundaries', v: 'Never invent a statistic or a source.' },
  ]
  const t = useTick(PARTS.length, 1600)
  return (
    <Wrap>
      <div className="ac-anatomy">
        <Mate i={0} size={124} label="Research" />
        <ul className="ac-parts">
          {PARTS.map((p, i) => (
            <li key={p.k} className={i === t ? 'on' : ''}><b>{p.k}</b><span>{p.v}</span></li>
          ))}
        </ul>
      </div>
    </Wrap>
  )
}

function Versus() {
  const JOBS = ['Research', 'Plan', 'Creatives', 'Numbers']
  const t = useTick(JOBS.length, 1000)
  return (
    <Wrap>
      <div className="ac-versus">
        <div className="ac-vs-col">
          <span className="ac-vs-h">One assistant</span>
          <div className="ac-bot">◍</div>
          <ul className="ac-jobs">
            {JOBS.map((j, i) => <li key={j} className={i === t ? 'on' : ''}>{j}</li>)}
          </ul>
          <em className="ac-vs-note">one at a time · you are the memory</em>
        </div>
        <span className="ac-vs-split" aria-hidden />
        <div className="ac-vs-col">
          <span className="ac-vs-h">A crew</span>
          <div className="ac-crewgrid">
            {JOBS.map((j, i) => (
              <span key={j} className={`ac-chip${i <= t ? ' on' : ''}`} style={{ ['--c' as string]: CAST[i].t }}>
                <i style={{ background: CAST[i].t }}>{CAST[i].n[0]}</i>{j}
              </span>
            ))}
          </div>
          <em className="ac-vs-note">one job each · the plan is the memory</em>
        </div>
      </div>
    </Wrap>
  )
}

function Create() {
  const STEPS = ['Name your project', 'Choose your dojo teams', 'Land in your dojo']
  const t = useTick(STEPS.length + 1, 1300)
  return (
    <Wrap>
      <div className="ac-create">
        <span className="tut-name-field"><b>Novaranly</b>{t === 0 && <i className="tut-caret" />}</span>
        <ol className="tut-loop">
          {STEPS.map((s, i) => (
            <li key={s} className={i < t ? 'done' : i === t ? 'run' : ''}>
              <span className="tut-loop-i">{i < t ? '✓' : i + 1}</span>{s}
            </li>
          ))}
        </ol>
      </div>
    </Wrap>
  )
}

function Deliver() {
  const DOCS = [
    { d: 'Research', g: '◈', c: '#0ea5e9' },
    { d: 'Plan', g: '❑', c: '#7b5cff' },
    { d: 'Creatives', g: '◱', c: '#e0459b' },
    { d: 'Brief', g: '▤', c: '#1fa563' },
  ]
  const t = useTick(DOCS.length + 1, 900)
  return (
    <Wrap>
      <div className="tut-docs">
        {DOCS.map((x, i) => (
          <span key={x.d} className={`tut-doc ac-doc${i < t ? ' on' : ''}`} style={{ ['--c' as string]: x.c }}>
            <span className="tut-doc-g" style={{ background: x.c }}>{x.g}</span>
            <span className="tut-doc-l" /><span className="tut-doc-l sm" />
            <em>{x.d}</em>
          </span>
        ))}
      </div>
    </Wrap>
  )
}

function Brief() {
  const t = useTick(2, 2800)
  const before = 'Research the market.'
  const after = 'Write the exact question. Find three independent sources. Separate proven from assumed. End with one recommendation.'
  return (
    <Wrap>
      <div className="ac-sheet">
        <span className={`ac-sheet-tag ${t === 0 ? 'was' : 'now'}`}>{t === 0 ? 'a hope' : 'a method'}</span>
        {SHEET.map((f) => (
          <span key={f} className={`ac-field${f === 'Operating method' ? ' on' : ''}`}>
            {f}
            {f === 'Operating method' && <em key={t}>{t === 0 ? before : after}</em>}
          </span>
        ))}
      </div>
    </Wrap>
  )
}

function Apps() {
  const APPS = ['Notion', 'Gmail', 'Drive']
  const t = useTick(APPS.length + 1, 1000)
  return (
    <Wrap>
      <div className="ac-apps">
        <Mate i={1} size={112} label="Marketer" />
        <div className="tut-apps">
          {APPS.map((a, i) => (
            <span key={a} className={`tut-app ac-app${i < t ? ' on' : ''}`}>
              <span className="tut-app-dot" />{a}
              <b>{i < t ? 'acts for real' : 'drafts only'}</b>
            </span>
          ))}
        </div>
      </div>
    </Wrap>
  )
}

function Crew() {
  const t = useTick(5, 1100)
  return (
    <Wrap>
      <div className="ac-crew">
        {CAST.map((c, i) => (
          <span key={c.n} className={`ac-chip big${i <= t ? ' on' : ''}`} style={{ ['--c' as string]: c.t }}>
            <i style={{ background: c.t }}>{c.n[0]}</i>
            <b>{c.n}</b><em>{c.r}</em>
          </span>
        ))}
        <span className={`ac-chip big add${t >= 4 ? ' on' : ''}`}><i>+</i><b>Add</b><em>an unowned job</em></span>
      </div>
    </Wrap>
  )
}

function Loop() {
  const t = useTick(PLAN.length + 1, 1100)
  const at = Math.min(t, PLAN.length - 1)
  return (
    <Wrap>
      <div className="tut-run">
        <div className="tut-run-who" style={{ ['--c' as string]: CAST[PLAN[at].by].t }}>
          <Mate i={PLAN[at].by} size={134} label={t >= PLAN.length ? 'all done' : 'working on it'} />
        </div>
        <ol className="tut-loop">
          {PLAN.map((s, i) => (
            <li key={s.s} className={i < t ? 'done' : i === t ? 'run' : ''}>
              <span className="tut-loop-i">{i < t ? '✓' : i + 1}</span>{s.s}
            </li>
          ))}
        </ol>
      </div>
    </Wrap>
  )
}

function Build() {
  const BACK = ['The signup page', 'The offer and the price', 'What subscribers get', 'Who the readers are']
  const t = useTick(BACK.length + 1, 1100)
  return (
    <Wrap>
      <div className="ac-build">
        <span className="ac-build-h">Work backwards from the artefact</span>
        <ol className="ac-back">
          {BACK.map((b, i) => (
            <li key={b} className={i < t ? 'on' : ''}>
              <span className="ac-back-n">{BACK.length - i}</span>
              <span className="ac-back-t">{b}</span>
              {i < BACK.length - 1 && <em>needs ↓</em>}
            </li>
          ))}
        </ol>
      </div>
    </Wrap>
  )
}

function Chain() {
  const TEAMS = [
    { n: 'Brand', out: 'name · colours · voice', c: '#7b5cff' },
    { n: 'Product', out: 'the site · the offer', c: '#0ea5e9' },
    { n: 'Campaign', out: 'the launch', c: '#e0459b' },
  ]
  const t = useTick(TEAMS.length, 1400)
  return (
    <Wrap>
      <div className="ac-chain">
        {TEAMS.map((x, i) => (
          <span key={x.n} className="ac-chain-cell">
            <span className={`ac-team${i <= t ? ' on' : ''}`} style={{ ['--c' as string]: x.c }}>
              <b>{x.n}</b><em>{x.out}</em>
            </span>
            {i < TEAMS.length - 1 && <span className={`ac-arrow${i < t ? ' on' : ''}`}>→</span>}
          </span>
        ))}
      </div>
    </Wrap>
  )
}

function Watch() {
  const t = useTick(4, 1500)
  // 0 running · 1 step 2 flagged · 2 brief being fixed · 3 rerun, green
  const stateOf = (i: number) => {
    if (t === 0) return i === 0 ? 'done' : ''
    if (t === 1) return i === 0 ? 'done' : i === 1 ? 'bad' : ''
    if (t === 2) return i === 0 ? 'done' : i === 1 ? 'fix' : ''
    return i <= 1 ? 'done' : ''
  }
  const CAPTION = ['Running the plan', 'Step 2 is where it went wrong', 'Change one field of its brief', 'Rerun that one step']
  return (
    <Wrap>
      <div className="ac-watch">
        <ol className="tut-loop">
          {PLAN.map((s, i) => {
            const st = stateOf(i)
            return (
              <li key={s.s} className={st === 'done' ? 'done' : st === 'bad' ? 'ac-bad' : st === 'fix' ? 'ac-fix' : ''}>
                <span className="tut-loop-i">{st === 'done' ? '✓' : st === 'bad' ? '!' : st === 'fix' ? '✎' : i + 1}</span>{s.s}
              </li>
            )
          })}
        </ol>
        <span className="ac-caption">{CAPTION[t]}</span>
      </div>
    </Wrap>
  )
}

function Vibe() {
  const t = useTick(2, 2400)
  return (
    <Wrap>
      <div className="ac-vibe">
        <div className={`ac-vibe-card${t === 0 ? ' on' : ''}`}>
          <b>Version 1</b>
          <span className="ac-vibe-neat"><i /><i /><i /></span>
          <em>fast, and it works</em>
        </div>
        <div className={`ac-vibe-card${t === 1 ? ' on' : ''}`}>
          <b>Version 10</b>
          <span className="ac-vibe-mess"><i /><i /><i /><i /><i /></span>
          <em>nobody can say what it does</em>
        </div>
      </div>
    </Wrap>
  )
}

function Landscape() {
  const TOOLS = [
    { n: 'Chatbot', f: 'you ask, it answers', g: '◍', c: '#8892a6' },
    { n: 'AI IDE', f: 'where code is written', g: '❑', c: '#0ea5e9' },
    { n: 'Coding agent', f: 'changes your files', g: '▤', c: '#7b5cff' },
    { n: 'Agent workspace', f: 'a crew in your real apps', g: '◈', c: '#1fa563' },
  ]
  const t = useTick(TOOLS.length, 1300)
  return (
    <Wrap>
      <div className="ac-land">
        {TOOLS.map((x, i) => (
          <span key={x.n} className={`ac-land-col${i === t ? ' on' : ''}${i === 3 ? ' here' : ''}`} style={{ ['--c' as string]: x.c }}>
            <i style={{ background: x.c }}>{x.g}</i>
            <b>{x.n}</b>
            <em>{x.f}</em>
            {i === 3 && <span className="ac-here">you are here</span>}
          </span>
        ))}
      </div>
    </Wrap>
  )
}

function Prompt() {
  const t = useTick(2, 2600)
  return (
    <Wrap>
      <div className="ac-prompt">
        <span className={`ac-prompt-card wish${t === 0 ? ' on' : ''}`}>
          <em>a wish</em>
          <b>“Grow my Instagram”</b>
        </span>
        <span className="ac-prompt-arrow">↓</span>
        <span className={`ac-prompt-card brief${t === 1 ? ' on' : ''}`}>
          <em>a brief</em>
          <b>“1,000 followers who bake at home, in 8 weeks — 12 posts, my voice, no hashtags”</b>
        </span>
      </div>
    </Wrap>
  )
}

function Credits() {
  const t = useTick(5, 900)
  return (
    <Wrap>
      <div className="ac-credits">
        <span className="ac-cred-n"><b>{t}</b><em>credits so far</em></span>
        <div className="ac-cred-bar"><span style={{ width: `${(t / 4) * 100}%` }} /></div>
        <ul className="ac-cred-rows">
          {PLAN.map((s, i) => (
            <li key={s.s} className={i < t ? 'on' : ''}><span>{s.s}</span><b>{i < t ? '1 credit' : '—'}</b></li>
          ))}
        </ul>
        <em className="ac-caption">four steps ≈ four credits ≈ $0.08 · free on your own key</em>
      </div>
    </Wrap>
  )
}

function Safety() {
  const t = useTick(3, 1700)
  const ROWS = ['You approve on the app’s own screen', 'Permission is sealed server-side', 'The first send always asks you']
  return (
    <Wrap>
      <div className="ac-safety">
        <div className="ac-shield">{t === 0 ? '◈' : t === 1 ? '▲' : '✓'}</div>
        <ul className="ac-safe-rows">
          {ROWS.map((c, i) => <li key={c} className={i === t ? 'on' : i < t ? 'past' : ''}>{c}</li>)}
        </ul>
        <em className="ac-caption">your browser never holds a secret</em>
      </div>
    </Wrap>
  )
}

function Ship() {
  const CHECK = ['Numbers · prices, dates, claims', 'Names · real people and companies', 'Anything you cannot take back', 'The first run after a brief change']
  const t = useTick(CHECK.length + 1, 900)
  return (
    <Wrap>
      <ul className="ac-check">
        {CHECK.map((c, i) => <li key={c} className={i < t ? 'on' : ''}><span>{i < t ? '✓' : ''}</span>{c}</li>)}
      </ul>
    </Wrap>
  )
}

function Mistakes() {
  const M = ['Rerunning instead of rewriting', 'A goal that is a wish', 'Too many teammates', 'Connecting everything', 'Not reading the first output', 'Building the system first', 'No spending limit']
  const t = useTick(M.length + 1, 700)
  return (
    <Wrap>
      <ul className="ac-mistakes">
        {M.map((m, i) => <li key={m} className={i < t ? 'out' : ''}>{m}</li>)}
      </ul>
    </Wrap>
  )
}

function Plan() {
  const W = [
    { w: 'Week 1', d: 'One team, one real goal' },
    { w: 'Week 2', d: 'Tune the briefs' },
    { w: 'Week 3', d: 'Connect and go live' },
    { w: 'Week 4', d: 'Add the second team' },
  ]
  const t = useTick(W.length + 1, 1000)
  return (
    <Wrap>
      <ol className="ac-plan">
        {W.map((x, i) => (
          <li key={x.w} className={i < t ? 'on' : ''}><b>{x.w}</b><span>{x.d}</span></li>
        ))}
      </ol>
    </Wrap>
  )
}

const STAGES: Record<StageId, () => React.JSX.Element> = {
  anatomy: Anatomy, versus: Versus, create: Create, deliver: Deliver,
  brief: Brief, apps: Apps, crew: Crew,
  loop: Loop, build: Build, chain: Chain, watch: Watch,
  vibe: Vibe, landscape: Landscape, prompt: Prompt, credits: Credits,
  safety: Safety, ship: Ship, mistakes: Mistakes, plan: Plan,
}

export function AcademyStage({ id }: { id: StageId }) {
  const S = STAGES[id] ?? Anatomy
  return <S />
}
