// LES JEUX DE LEÇON · demandé : « des cours des quiz, des jeux, des
// exercices ». Trois formes jouables au doigt : relier les paires, remettre
// dans l'ordre, vrai ou faux. Le jeu est réussi quand tout est juste ; on peut
// recommencer autant qu'on veut.
import { useMemo, useState } from 'react'
import { BauhausIcon } from '../components/BauhausIcon'
import type { SchoolGame } from '../data/school/types'
import { zen } from '../lib/zen'
import { useLang } from '../i18n'
import { say, type Bi } from '../data/bilingual'
import { ST } from './text'

const useS = () => { const lang = useLang(); return (b: Bi) => say(b, lang) }

/** un mélange reproductible, pour que l'ordre ne change pas à chaque rendu */
function shuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr]
  let s = seed || 1
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280
    const j = Math.floor((s / 233280) * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function SchoolGameBox({ game, seed, onWin }: { game: SchoolGame; seed: number; onWin: () => void }) {
  const s = useS()
  const [round, setRound] = useState(0)
  const key = `${seed}:${round}`
  return (
    <div className="sc-game">
      <p className="sc-game-prompt">{game.prompt}</p>
      {game.kind === 'pairs' && <Pairs key={key} game={game} seed={seed + round} onWin={onWin} />}
      {game.kind === 'order' && <Order key={key} game={game} seed={seed + round} onWin={onWin} />}
      {game.kind === 'truefalse' && <TrueFalse key={key} game={game} onWin={onWin} />}
      <button className="cc-btn cc-slate sc-game-again" onClick={() => setRound((r) => r + 1)}>{s(ST.replay)}</button>
    </div>
  )
}

function Pairs({ game, seed, onWin }: { game: Extract<SchoolGame, { kind: 'pairs' }>; seed: number; onWin: () => void }) {
  const s = useS()
  const rights = useMemo(() => shuffle(game.pairs.map((p, i) => ({ text: p.right, i })), seed), [game, seed])
  const [pick, setPick] = useState<number | null>(null)
  const [done, setDone] = useState<Set<number>>(new Set())
  const [miss, setMiss] = useState<number | null>(null)
  const choose = (i: number) => {
    if (pick === null || done.has(i)) return
    if (pick === i) {
      const next = new Set(done).add(i)
      setDone(next); setPick(null); zen.sfx(next.size === game.pairs.length ? 'chime' : 'tap')
      if (next.size === game.pairs.length) onWin()
    } else { setMiss(i); setTimeout(() => setMiss(null), 450) }
  }
  return (
    <div className="sc-pairs">
      <div className="sc-pairs-col">
        {game.pairs.map((p, i) => (
          <button key={i} className={`sc-chip${done.has(i) ? ' is-done' : pick === i ? ' is-on' : ''}`} disabled={done.has(i)} onClick={() => setPick(i)}>{p.left}</button>
        ))}
      </div>
      <div className="sc-pairs-col">
        {rights.map((r) => (
          <button key={r.i} className={`sc-chip${done.has(r.i) ? ' is-done' : ''}${miss === r.i ? ' is-miss' : ''}`} disabled={done.has(r.i) || pick === null} onClick={() => choose(r.i)}>{r.text}</button>
        ))}
      </div>
      {done.size === game.pairs.length && <p className="sc-game-win"><BauhausIcon name="check" size={12} /> {s(ST.pairsWin)}</p>}
    </div>
  )
}

function Order({ game, seed, onWin }: { game: Extract<SchoolGame, { kind: 'order' }>; seed: number; onWin: () => void }) {
  const s = useS()
  const start = useMemo(() => {
    let s = shuffle(game.items.map((t, i) => ({ t, i })), seed)
    if (s.every((x, k) => x.i === k)) s = [...s.slice(1), s[0]]
    return s
  }, [game, seed])
  const [list, setList] = useState(start)
  const [checked, setChecked] = useState(false)
  const right = list.every((x, k) => x.i === k)
  const move = (k: number, d: -1 | 1) => {
    const j = k + d
    if (j < 0 || j >= list.length) return
    const next = [...list]; [next[k], next[j]] = [next[j], next[k]]
    setList(next); setChecked(false); zen.sfx('tap')
  }
  const check = () => { setChecked(true); if (right) { zen.sfx('chime'); onWin() } }
  return (
    <div className="sc-order">
      <ol>
        {list.map((x, k) => (
          <li key={x.i} className={checked ? (x.i === k ? 'is-good' : 'is-bad') : ''}>
            <span className="sc-order-n">{k + 1}</span>
            <span className="sc-order-t">{x.t}</span>
            <span className="sc-order-moves">
              <button aria-label={s(ST.up)} onClick={() => move(k, -1)} disabled={k === 0}><span className="sc-up"><BauhausIcon name="play" size={11} /></span></button>
              <button aria-label={s(ST.down)} onClick={() => move(k, 1)} disabled={k === list.length - 1}><span className="sc-down"><BauhausIcon name="play" size={11} /></span></button>
            </span>
          </li>
        ))}
      </ol>
      <button className="gm-cta sc-check" onClick={check}>{s(ST.orderCheck)}</button>
      {checked && (right
        ? <p className="sc-game-win"><BauhausIcon name="check" size={12} /> {s(ST.orderWin)}</p>
        : <p className="sc-game-try">{s(ST.orderTry)}</p>)}
    </div>
  )
}

function TrueFalse({ game, onWin }: { game: Extract<SchoolGame, { kind: 'truefalse' }>; onWin: () => void }) {
  const t = useS()
  const [answers, setAnswers] = useState<Record<number, boolean>>({})
  const all = Object.keys(answers).length === game.statements.length
  const rightCount = game.statements.filter((s, i) => answers[i] === s.true).length
  const answer = (i: number, v: boolean) => {
    if (i in answers) return
    const next = { ...answers, [i]: v }
    setAnswers(next)
    zen.sfx(v === game.statements[i].true ? 'tap' : 'locked')
    if (Object.keys(next).length === game.statements.length && game.statements.every((s, k) => next[k] === s.true)) onWin()
  }
  return (
    <div className="sc-tf">
      {game.statements.map((s, i) => {
        const a = answers[i]
        const done = a !== undefined
        return (
          <div key={i} className={`sc-tf-row${done ? (a === s.true ? ' is-good' : ' is-bad') : ''}`}>
            <p>{s.text}</p>
            <div className="sc-tf-btns">
              <button className={done && a === true ? 'is-on' : ''} disabled={done} onClick={() => answer(i, true)}>{t(ST.isTrue)}</button>
              <button className={done && a === false ? 'is-on' : ''} disabled={done} onClick={() => answer(i, false)}>{t(ST.isFalse)}</button>
            </div>
            {done && <p className="sc-tf-why"><b>{s.true ? t(ST.isTrue) : t(ST.isFalse)}.</b> {s.why}</p>}
          </div>
        )
      })}
      {all && (rightCount === game.statements.length
        ? <p className="sc-game-win"><BauhausIcon name="check" size={12} /> {t(ST.tfWin)}</p>
        : <p className="sc-game-try">{rightCount} / {game.statements.length} {t(ST.tfTry)}</p>)}
    </div>
  )
}
