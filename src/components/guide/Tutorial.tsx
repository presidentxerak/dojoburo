// The interactive walkthrough · how DojoBuro works, in six animated beats.
//
// Each step animates a small stage that mimics the real UI: the pipeline filling
// up, a crew being hired, apps connecting, the loop ticking through and the
// deliverables landing. Step through it yourself or let it play.
import { useEffect, useRef, useState } from 'react'

interface Beat { id: string; title: string; body: string }

const BEATS: Beat[] = [
  { id: 'pipeline', title: '1 · Your pipeline', body: 'You land on one screen: your pipeline. It holds every project you are working on, in order. Nothing else to learn.' },
  { id: 'pick', title: '2 · Pick a project', body: 'Choose a ready-made card that matches your goal — a social campaign, an app, a book, a shop. It drops into your pipeline instantly.' },
  { id: 'crew', title: '3 · Your crew is hired', body: 'Each project arrives already staffed with exactly the agents that job needs: a researcher, a maker, an analyst, a team lead…' },
  { id: 'apps', title: '4 · Their apps connect', body: 'Every agent comes wired to the tools it works in. Connect one in a click and the agent acts inside your real account.' },
  { id: 'loop', title: '5 · Run every step', body: 'Give the project a goal and hit Run. The team lead hands each step to the right teammate, in order, and they work through it.' },
  { id: 'ship', title: '6 · You get the work', body: 'Every step produces something real you can open, edit and export. Add another project and your pipeline grows.' },
]

const CREW = [
  { n: 'Scout', t: '#0ea5e9' }, { n: 'Marketus', t: '#e0459b' },
  { n: 'Busino', t: '#1fa563' }, { n: 'Deck', t: '#f59e0b' }, { n: 'Chief', t: '#7b5cff' },
]
const APPS = ['Notion', 'Instagram', 'Gmail', 'Drive']
const STEPS = ['Audience research', 'Content plan', 'Creatives', 'Campaign brief']

/** The animated stage for a beat. Keyed by beat id so animations replay. */
function Stage({ beat }: { beat: string }) {
  // the loop beat ticks its steps one by one
  const [tick, setTick] = useState(0)
  useEffect(() => {
    if (beat !== 'loop') { setTick(0); return }
    setTick(0)
    const id = window.setInterval(() => setTick((t) => (t >= STEPS.length ? t : t + 1)), 700)
    return () => window.clearInterval(id)
  }, [beat])

  if (beat === 'pipeline') {
    return (
      <div className="tut-stage">
        <div className="tut-empty">
          <span className="tut-empty-l" />
          <span className="tut-empty-l" />
          <button className="tut-plus" type="button" tabIndex={-1}>+ Add a project</button>
        </div>
      </div>
    )
  }
  if (beat === 'pick') {
    return (
      <div className="tut-stage">
        <div className="tut-cards">
          {[{ g: '◈', c: '#e0459b' }, { g: '◱', c: '#3b82f6' }, { g: '❑', c: '#c026d3' }].map((c, i) => (
            <div key={i} className={`tut-card${i === 0 ? ' pick' : ''}`} style={{ ['--c' as string]: c.c }}>
              <span className="tut-g" style={{ background: c.c }}>{c.g}</span>
              <span className="tut-bar" /><span className="tut-bar sm" />
            </div>
          ))}
        </div>
      </div>
    )
  }
  if (beat === 'crew') {
    return (
      <div className="tut-stage">
        <div className="tut-crew">
          {CREW.map((c, i) => (
            <span key={c.n} className="tut-agent" style={{ ['--c' as string]: c.t, animationDelay: `${i * 130}ms` }}>
              <span className="tut-face" style={{ background: c.t }}>{c.n[0]}</span>
              <em>{c.n}</em>
            </span>
          ))}
        </div>
      </div>
    )
  }
  if (beat === 'apps') {
    return (
      <div className="tut-stage">
        <div className="tut-apps">
          {APPS.map((a, i) => (
            <span key={a} className="tut-app" style={{ animationDelay: `${i * 200}ms` }}>
              <span className="tut-app-dot" />{a}<b>connected</b>
            </span>
          ))}
        </div>
      </div>
    )
  }
  if (beat === 'loop') {
    return (
      <div className="tut-stage">
        <ol className="tut-loop">
          {STEPS.map((s, i) => (
            <li key={s} className={i < tick ? 'done' : i === tick ? 'run' : ''}>
              <span className="tut-loop-i">{i < tick ? '✓' : i + 1}</span>{s}
            </li>
          ))}
        </ol>
      </div>
    )
  }
  return (
    <div className="tut-stage">
      <div className="tut-docs">
        {['Research', 'Plan', 'Creatives', 'Brief'].map((d, i) => (
          <span key={d} className="tut-doc" style={{ animationDelay: `${i * 150}ms` }}>
            <span className="tut-doc-l" /><span className="tut-doc-l sm" /><span className="tut-doc-l" />
            <em>{d}</em>
          </span>
        ))}
      </div>
    </div>
  )
}

export function Tutorial() {
  const [i, setI] = useState(0)
  const [playing, setPlaying] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (!playing) return
    // the loop beat needs longer to finish ticking
    const ms = BEATS[i].id === 'loop' ? 4200 : 3000
    timer.current = window.setTimeout(() => {
      setI((n) => (n + 1 >= BEATS.length ? (setPlaying(false), n) : n + 1))
    }, ms)
    return () => window.clearTimeout(timer.current)
  }, [playing, i])

  const beat = BEATS[i]
  return (
    <div className="tut">
      <div className="tut-view">
        <Stage key={beat.id} beat={beat.id} />
        <div className="tut-txt">
          <h3>{beat.title}</h3>
          <p>{beat.body}</p>
        </div>
      </div>

      <div className="tut-bar-row">
        <div className="tut-dots">
          {BEATS.map((b, n) => (
            <button key={b.id} className={`tut-dot${n === i ? ' on' : ''}${n < i ? ' past' : ''}`}
              onClick={() => { setPlaying(false); setI(n) }} aria-label={b.title} title={b.title} />
          ))}
        </div>
        <div className="tut-nav">
          <button className="btn tiny ghost" onClick={() => { setPlaying(false); setI((n) => Math.max(0, n - 1)) }} disabled={i === 0}>Back</button>
          <button className="btn tiny ghost" onClick={() => setPlaying((p) => !p)}>{playing ? 'Pause' : 'Play all'}</button>
          <button className="btn primary tiny" onClick={() => { setPlaying(false); setI((n) => Math.min(BEATS.length - 1, n + 1)) }} disabled={i === BEATS.length - 1}>Next</button>
        </div>
      </div>
    </div>
  )
}
