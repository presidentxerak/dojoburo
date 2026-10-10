// LES EXAMENS · /ecole/examens/<examen> et /ecole/examens/<examen>/<épreuve>.
// Demandé : « les préparer soit au brevet blanc, au brevet, ou au bac blanc et
// au bac ». La page d'un examen donne son format, les chapitres à réviser et
// ses sources ; l'épreuve blanche est chronométrée comme l'épreuve réelle,
// tire ses questions des quiz et ses exercices des exercices type examen des
// leçons rédigées, puis se corrige et s'enregistre pour l'Espace parents.
import { useEffect, useMemo, useState } from 'react'
import { Lnk } from '../lib/router'
import { BauhausIcon } from '../components/BauhausIcon'
import { useHeadTags } from '../lib/headTags'
import { Shell } from '../game/Shell'
import { UNITS_WITH_CONTENT, gradeInfo, parseUnit, subjectLabel, loadUnitContent, useLoad, type Exercise, type SchoolQuestion } from '../data/school'
import { examOf, type Epreuve, type Exam } from '../data/school/exams'
import { useSchool, addMock } from './progress'
import { ST } from './text'
import { TrainingTabs, useS, useDate } from './SchoolPages'
import { zen } from '../lib/zen'

const hm = (min: number) => (min >= 60 ? `${Math.floor(min / 60)} h${min % 60 ? ` ${String(min % 60).padStart(2, '0')}` : ''}` : `${min} min`)
const unitName = (unit: string) => { const { subject, grade } = parseUnit(unit); return subjectLabel(subject, grade) }
const canMock = (e: Epreuve) => !!e.mock && e.units.some((u) => UNITS_WITH_CONTENT.has(u))

/* ------------------------------------------------------------------ */
/* LA PAGE D'UN EXAMEN                                                 */
/* ------------------------------------------------------------------ */

export function ExamPage({ id }: { id: string }) {
  const s = useS()
  const date = useDate()
  const st = useSchool()
  const x = examOf(id)
  useHeadTags({ title: `${x?.name ?? s(ST.exams)} · Dojoburo`, description: x?.summary[0] ?? s(ST.examsLead), path: `/ecole/examens/${id}` })
  if (!x) return <Shell><section className="gm-sec"><p>{s(ST.notFound)}</p><Lnk className="gm-cta" href="/ecole">{s(ST.back)}</Lnk></section></Shell>
  const mine = st.mocks.filter((m) => m.exam === x.id)
  return (
    <Shell wide>
      <TrainingTabs on="school" />
      <section className="gm-sec">
        <Lnk className="gm-back" href={`/ecole/${x.grade}`}>← {gradeInfo(x.grade as never)?.label ?? s(ST.title)}</Lnk>
        <h1 className="gm-h1">{x.name}</h1>
        <ul className="sc-summary">{x.summary.map((p, i) => <li key={i}>{p}</li>)}</ul>
      </section>

      <section className="gm-sec">
        <h2 className="sc-h2">{s(ST.epreuves)}</h2>
        <div className="sc-epreuves">
          {x.epreuves.map((e) => (
            <article key={e.id} className="cy-card sc-epreuve">
              <header>
                <b>{e.name}</b>
                <span className="sc-chips">
                  <i>{s(ST.duration)} {hm(e.duration)}</i>
                  {e.coefficient !== undefined && <i>{s(ST.coefficient)} {e.coefficient}</i>}
                </span>
              </header>
              <p>{e.format}</p>
              <div className="sc-epreuve-units">
                <small>{s(ST.revise)} :</small>
                {e.units.map((u) => <Lnk key={u} className={`sc-unit-chip${UNITS_WITH_CONTENT.has(u) ? '' : ' is-soon'}`} href={`/ecole/u/${u}`}>{unitName(u)}</Lnk>)}
              </div>
              {e.mock
                ? canMock(e)
                  ? <Lnk className="gm-cta" href={`/ecole/examens/${x.id}/${e.id}`}>{s(ST.mock)} →</Lnk>
                  : <p className="sc-soon-line">{s(ST.mockSoon)}</p>
                : <p className="sc-soon-line">{s(ST.noMockOral)}</p>}
            </article>
          ))}
        </div>
      </section>

      {mine.length > 0 && (
        <section className="gm-sec">
          <h2 className="sc-h2">{s(ST.pastMocks)}</h2>
          <ul className="sc-plist">
            {mine.slice(0, 10).map((m) => (
              <li key={m.id} className="sc-pdone">
                <span className={`sc-dot${m.validated ? ' is-ok' : ''}`}>{m.validated ? <BauhausIcon name="check" size={11} /> : null}</span>
                <span>{x.epreuves.find((e) => e.id === m.epreuve)?.name ?? m.epreuve}</span>
                <small>{date(m.at)} · <b>{m.score.toLocaleString('fr-FR')} / 20</b></small>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="gm-sec">
        <h2 className="sc-h2">{s(ST.sources)}</h2>
        <ul className="sc-sources">
          {x.sources.map((src) => <li key={src.url}><a href={src.url} target="_blank" rel="noopener noreferrer">{src.label}</a></li>)}
        </ul>
      </section>
    </Shell>
  )
}

/* ------------------------------------------------------------------ */
/* L'ÉPREUVE BLANCHE                                                   */
/* ------------------------------------------------------------------ */

/** un tirage reproductible pour une graine donnée */
function draw<T>(arr: T[], n: number, seed: number): T[] {
  const a = [...arr]
  let r = seed % 233280 || 1
  for (let i = a.length - 1; i > 0; i--) {
    r = (r * 9301 + 49297) % 233280
    const j = Math.floor((r / 233280) * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a.slice(0, n)
}

interface Pool { questions: SchoolQuestion[]; exercises: (Exercise & { from: string })[] }

async function loadPool(units: string[]): Promise<Pool> {
  const maps = await Promise.all(units.map(loadUnitContent))
  const questions: SchoolQuestion[] = []
  const exercises: Pool['exercises'] = []
  for (const m of maps) for (const L of m.values()) {
    questions.push(...L.quiz)
    for (const ex of L.exercises) if (ex.level === 3) exercises.push({ ...ex, from: L.title })
  }
  return { questions, exercises }
}

export function MockPage({ examId, epreuveId }: { examId: string; epreuveId: string }) {
  const s = useS()
  const x = examOf(examId)
  const e = x?.epreuves.find((p) => p.id === epreuveId)
  useHeadTags({ title: `${s(ST.mockTime)} · ${e?.name ?? ''} · ${x?.name ?? ''} · Dojoburo`, description: s(ST.mockIntro), path: `/ecole/examens/${examId}/${epreuveId}` })
  const pool = useLoad(() => (e ? loadPool(e.units) : Promise.resolve(null)), [examId, epreuveId])
  if (!x || !e || !e.mock) return <Shell><section className="gm-sec"><p>{s(ST.notFound)}</p><Lnk className="gm-cta" href="/ecole">{s(ST.back)}</Lnk></section></Shell>
  if (pool === undefined) return <Shell><section className="gm-sec"><p>{s(ST.loading)}</p></section></Shell>
  return <Mock key={`${examId}/${epreuveId}`} x={x} e={e} pool={pool ?? { questions: [], exercises: [] }} />
}

function Mock({ x, e, pool }: { x: Exam; e: Epreuve; pool: Pool }) {
  const s = useS()
  const [seed, setSeed] = useState(0)
  const [phase, setPhase] = useState<'intro' | 'run' | 'review' | 'saved'>('intro')
  const [endAt, setEndAt] = useState(0)
  const [now, setNow] = useState(Date.now())
  const [picks, setPicks] = useState<Record<number, number>>({})
  const [marks, setMarks] = useState<Record<number, 0 | 0.5 | 1>>({})
  const [timeUp, setTimeUp] = useState(false)
  const nQ = Math.min(e.mock!.questions, pool.questions.length)
  const nE = Math.min(e.mock!.exercises, pool.exercises.length)
  const qs = useMemo(() => draw(pool.questions, nQ, seed), [pool, nQ, seed])
  const exs = useMemo(() => draw(pool.exercises, nE, seed + 7), [pool, nE, seed])

  useEffect(() => {
    if (phase !== 'run') return
    const t = setInterval(() => {
      const n = Date.now()
      setNow(n)
      if (n >= endAt) { setTimeUp(true); setPhase('review'); zen.sfx('chime') }
    }, 1000)
    return () => clearInterval(t)
  }, [phase, endAt])

  const begin = () => {
    setSeed(Date.now() % 100000); setPicks({}); setMarks({}); setTimeUp(false)
    const n = Date.now(); setNow(n); setEndAt(n + e.duration * 60_000); setPhase('run')
    window.scrollTo({ top: 0 })
  }
  const left = Math.max(0, Math.round((endAt - now) / 1000))
  const right = qs.filter((q, i) => picks[i] === q.answer).length
  const marked = Object.keys(marks).length === exs.length
  const partA = nQ ? (8 * right) / nQ : 0
  const partB = nE ? (12 * Object.values(marks).reduce<number>((a, b) => a + b, 0)) / nE : 0
  // sans exercice, la partie A compte pour toute la note, et inversement
  const raw = nQ && nE ? partA + partB : nQ ? (20 * right) / nQ : partB * (20 / 12)
  const score = Math.round(raw * 2) / 2

  return (
    <Shell wide>
      <section className="gm-sec">
        <Lnk className="gm-back" href={`/ecole/examens/${x.id}`}>← {x.name}</Lnk>
        <h1 className="gm-h1">{s(ST.mockTime)} · {e.name}</h1>
        {phase === 'intro' && (
          <div className="cy-card sc-mock-intro">
            <p>{s(ST.mockIntro)}</p>
            <ul className="sc-chips sc-chips-col">
              <li><i>{s(ST.realPaper)} : {hm(e.duration)}</i></li>
              <li><i>{nQ} {s(ST.questionsN)}</i></li>
              <li><i>{nE} {s(ST.exercisesN)}</i></li>
            </ul>
            <p className="sc-note">{s(ST.draftNote)}</p>
            <button className="gm-cta" onClick={begin}>{s(ST.begin)} →</button>
          </div>
        )}
      </section>

      {phase === 'run' && (
        <>
          <div className={`sc-timer${left < 300 ? ' is-low' : ''}`} role="timer" aria-live="off">
            <span>{s(ST.timeLeft)}</span>
            <b>{Math.floor(left / 3600)}:{String(Math.floor((left % 3600) / 60)).padStart(2, '0')}:{String(left % 60).padStart(2, '0')}</b>
          </div>
          {nQ > 0 && (
            <section className="gm-sec">
              <h2 className="sc-h2">{s(ST.partA)}</h2>
              {qs.map((q, i) => (
                <div key={i} className="ln-quiz sc-q">
                  <span className="sc-q-n">{s(ST.question)} {i + 1} / {nQ}</span>
                  <h3>{q.q}</h3>
                  <div className="sc-q-opts">
                    {q.options.map((o, k) => (
                      <button key={k} className={`sc-opt${picks[i] === k ? ' is-picked' : ''}`} onClick={() => setPicks({ ...picks, [i]: k })}>
                        <span className="sc-opt-k">{'ABCD'[k]}</span><span>{o}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          )}
          {nE > 0 && (
            <section className="gm-sec">
              <h2 className="sc-h2">{s(ST.partB)}</h2>
              <p className="sc-note">{s(ST.draftNote)}</p>
              {exs.map((ex, i) => (
                <article key={i} className="cy-card sc-ex">
                  <span className="sc-level l3">{s(ST.exercises)} {i + 1}</span>
                  <p className="sc-ex-from">{ex.from}</p>
                  <p>{ex.statement}</p>
                </article>
              ))}
            </section>
          )}
          <section className="gm-sec"><button className="gm-cta" onClick={() => { setPhase('review'); window.scrollTo({ top: 0 }) }}>{s(ST.finish)} →</button></section>
        </>
      )}

      {(phase === 'review' || phase === 'saved') && (
        <>
          {timeUp && <section className="gm-sec"><p className="cy-card sc-warn">{s(ST.timeUp)}</p></section>}
          {nQ > 0 && (
            <section className="gm-sec">
              <h2 className="sc-h2">{s(ST.partA)} · {right} / {nQ}</h2>
              {qs.map((q, i) => {
                const p = picks[i]
                const ok = p === q.answer
                return (
                  <div key={i} className={`cy-card sc-review${ok ? ' is-good' : ' is-bad'}`}>
                    <b>{i + 1}. {q.q}</b>
                    <p>{s(ST.yourPick)} : {p === undefined ? s(ST.noAnswer) : q.options[p]}</p>
                    {!ok && <p>{s(ST.rightAnswer)} : {q.options[q.answer]}</p>}
                    <p className="sc-why">{q.why}</p>
                  </div>
                )
              })}
            </section>
          )}
          {nE > 0 && (
            <section className="gm-sec">
              <h2 className="sc-h2">{s(ST.partB)}</h2>
              {exs.map((ex, i) => (
                <article key={i} className="cy-card sc-ex">
                  <span className="sc-level l3">{s(ST.exercises)} {i + 1}</span>
                  <p>{ex.statement}</p>
                  <ol className="sc-solution">{ex.solution.map((l, k) => <li key={k}>{l}</li>)}</ol>
                  <p className="sc-self-q">{s(ST.selfAssess)}</p>
                  <div className="sc-self-btns">
                    {([[1, ST.full], [0.5, ST.partial], [0, ST.wrong]] as const).map(([v, label]) => (
                      <button key={v} disabled={phase === 'saved'} className={`cc-btn sc-small ${marks[i] === v ? 'cc-violet' : 'cc-slate'}`} onClick={() => setMarks({ ...marks, [i]: v })}>{s(label)}</button>
                    ))}
                  </div>
                </article>
              ))}
            </section>
          )}
          <section className="gm-sec">
            <div className="cy-card sc-mock-score">
              <p className="sc-note">{s(ST.scoreRule)}</p>
              {(marked || nE === 0) && <p className="sc-big-score">{s(ST.score)} : <b>{score.toLocaleString('fr-FR')} / 20</b></p>}
              {phase === 'review' && (marked || nE === 0) && (
                <button className="gm-cta" onClick={() => { addMock({ exam: x.id, epreuve: e.id, score }); setPhase('saved'); zen.sfx('chime') }}>{s(ST.saveScore)}</button>
              )}
              {phase === 'saved' && (
                <>
                  <p className="sc-ok-msg"><BauhausIcon name="check" size={12} /> {s(ST.mockSaved)}</p>
                  <div className="sc-settings-btns">
                    <Lnk className="cc-btn cc-slate" href="/ecole/parents">{s(ST.parents)}</Lnk>
                    <button className="cc-btn cc-violet" onClick={begin}>{s(ST.again)}</button>
                  </div>
                </>
              )}
            </div>
          </section>
        </>
      )}
    </Shell>
  )
}
