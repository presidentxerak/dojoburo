// The interactive walkthrough player.
//
// It drives one of the named walkthroughs in ./tutorialBeats: each beat animates
// a small stage that mimics the real UI while its text explains what you are
// looking at. Step through it yourself, or let it play.
import { useEffect, useRef, useState } from 'react'
import { WALKS, Stage, type WalkId } from './tutorialBeats'

export function Tutorial({ walk = 'overview', autoPlay = false }: { walk?: WalkId; autoPlay?: boolean }) {
  const beats = WALKS[walk].beats
  const [i, setI] = useState(0)
  const [playing, setPlaying] = useState(autoPlay)
  const timer = useRef<number | undefined>(undefined)

  // a different walkthrough starts from its own first beat
  useEffect(() => { setI(0); setPlaying(autoPlay) }, [walk, autoPlay])

  useEffect(() => {
    if (!playing) return
    // the loop beat needs longer to finish ticking
    const ms = beats[i].id === 'loop' ? 4200 : 3200
    timer.current = window.setTimeout(() => {
      setI((n) => (n + 1 >= beats.length ? (setPlaying(false), n) : n + 1))
    }, ms)
    return () => window.clearTimeout(timer.current)
  }, [playing, i, beats])

  const beat = beats[i]
  return (
    <div className="tut">
      <div className="tut-view">
        <Stage key={`${walk}:${beat.id}`} beat={beat.id} />
        <div className="tut-txt">
          <h3>{beat.title}</h3>
          <p>{beat.body}</p>
        </div>
      </div>

      <div className="tut-bar-row">
        <div className="tut-dots">
          {beats.map((b, n) => (
            <button key={b.id} className={`tut-dot${n === i ? ' on' : ''}${n < i ? ' past' : ''}`}
              onClick={() => { setPlaying(false); setI(n) }} aria-label={b.title} title={b.title} />
          ))}
        </div>
        <div className="tut-nav">
          <button className="btn tiny ghost" onClick={() => { setPlaying(false); setI((n) => Math.max(0, n - 1)) }} disabled={i === 0}>Back</button>
          <button className="btn tiny ghost" onClick={() => setPlaying((p) => !p)}>{playing ? 'Pause' : 'Play all'}</button>
          <button className="btn primary tiny" onClick={() => { setPlaying(false); setI((n) => Math.min(beats.length - 1, n + 1)) }} disabled={i === beats.length - 1}>Next</button>
        </div>
      </div>
    </div>
  )
}
