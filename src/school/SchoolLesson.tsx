// LA LEÇON SCOLAIRE · /ecole/u/<unité>/<leçon>. On garde la méthode des
// formations IA : le professeur accueille, la barre de quête suit les exercices
// achevés, puis le cours, l'essentiel, un exemple corrigé, trois exercices
// corrigés, un jeu, l'erreur fréquente et la méthode, et cinq questions. Une
// fois le quiz réussi, le jeu gagné et les exercices autoévalués, un parent
// valide la leçon avec son code (demandé : « validation par les parents à
// chaque étape, donc à chaque fin de leçon »).
import { useState } from 'react'
import { Lnk } from '../lib/router'
import { BauhausIcon } from '../components/BauhausIcon'
import { useHeadTags } from '../lib/headTags'
import { Shell } from '../game/Shell'
import { LiveChibi } from '../pixel/LiveChibi'
import { QuestHud, type QuestStep } from '../game/LessonGame'
import { SUBJECTS, gradeInfo, parseUnit, subjectLabel, loadUnitPlan, loadUnitContent, useLoad, type SchoolLesson, type SchoolQuestion } from '../data/school'
import { useSchool, lessonKey, lessonStatus, recordExercise, recordGame, recordQuiz, validateLesson, hasParent } from './progress'
import { SchoolGameBox } from './Games'
import { ParentCode } from './ParentCode'
import { teacherOf } from './teachers'
import { ST } from './text'
import { useS, useDate } from './SchoolPages'
import { zen } from '../lib/zen'

export function SchoolLessonPage({ unit, lessonId }: { unit: string; lessonId: string }) {
  const s = useS()
  const plan = useLoad(() => loadUnitPlan(unit), [unit])
  const content = useLoad(() => loadUnitContent(unit), [unit])
  const L = content?.get(lessonId)
  useHeadTags({ title: `${L?.title ?? s(ST.loading)} · Dojoburo`, description: L?.objectives.join(' ') ?? '', path: `/ecole/u/${unit}/${lessonId}`, type: 'article' })
  if (plan === undefined || content === undefined) return <Shell><section className="gm-sec"><p>{s(ST.loading)}</p></section></Shell>
  if (!plan || !L) return <Shell><section className="gm-sec"><p>{s(ST.notFound)}</p><Lnk className="gm-cta" href={`/ecole/u/${unit}`}>{s(ST.back)}</Lnk></section></Shell>
  const flat = plan.chapters.flatMap((c) => c.lessons.map((l) => ({ c, l })))
  const at = flat.findIndex((x) => x.l.id === lessonId)
  const chapter = flat[at]?.c
  const next = flat.slice(at + 1).find((x) => content.has(x.l.id))
  return <LessonBody key={`${unit}/${lessonId}`} unit={unit} L={L} chapterTitle={chapter?.title ?? ''} nextId={next?.l.id ?? null} />
}

function LessonBody({ unit, L, chapterTitle, nextId }: { unit: string; L: SchoolLesson; chapterTitle: string; nextId: string | null }) {
  const s = useS()
  const st = useSchool()
  const key = lessonKey(unit, L.id)
  const rec = st.lessons[key]
  const status = lessonStatus(rec, L.exercises.length)
  const { subject, grade } = parseUnit(unit)
  const t = teacherOf(subject)
  const g = grade ? gradeInfo(grade) : null
  const seed = [...key].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7)

  // LE QUIZ · une tentative à la fois, comme dans les formations
  const [attempt, setAttempt] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const answered = Object.keys(answers).length
  const right = L.quiz.filter((q, i) => answers[i] === q.answer).length
  const onAnswer = (i: number, k: number) => {
    if (i in answers) return
    const next = { ...answers, [i]: k }
    setAnswers(next)
    zen.sfx(k === L.quiz[i].answer ? 'tap' : 'locked')
    if (Object.keys(next).length === L.quiz.length) recordQuiz(key, L.quiz.filter((q, j) => next[j] === q.answer).length, L.quiz.length)
  }

  // LA BARRE DE QUÊTE · un carré par exercice achevé, comme dans les formations
  const steps: QuestStep[] = [
    ...L.exercises.map((_, k) => ({ id: `ex${k + 1}`, label: `${s(ST.exercises)} ${k + 1}` })),
    { id: 'game', label: s(ST.game) },
    ...L.quiz.map((_, k) => ({ id: `q${k + 1}`, label: `${s(ST.question)} ${k + 1}` })),
    { id: 'parent', label: s(ST.validation) },
  ]
  const cleared = new Set<string>([
    ...Object.keys(rec?.ex ?? {}).map((k) => `ex${Number(k) + 1}`),
    ...(rec?.game ? ['game'] : []),
    ...L.quiz.flatMap((q, i) => (answers[i] === q.answer ? [`q${i + 1}`] : [])),
    ...(status.validated ? ['parent'] : []),
  ])

  return (
    <Shell>
      <article className="ln sc-lesson-page" style={{ ['--ac' as string]: SUBJECTS[subject]?.tint }}>
        <Lnk className="gm-back" href={`/ecole/u/${unit}`}>← {subjectLabel(subject, grade)}{g ? ` · ${g.label}` : ''}</Lnk>

        <header className="sc-lhead">
          <span className="sc-lhead-av"><LiveChibi spec={t.spec} scale={3} seed={key} /></span>
          <div>
            <span className="ln-n">{chapterTitle} · {L.minutes} {s(ST.minutes)} · {t.name}</span>
            <h1>{L.title}</h1>
            <p className="sc-obj-h">{s(ST.objectives)} :</p>
            <ul className="sc-obj">{L.objectives.map((o) => <li key={o}>{o}</li>)}</ul>
          </div>
        </header>

        <QuestHud title={L.title} dojo={`${subjectLabel(subject, grade)}${g ? ` · ${g.label}` : ''}`} xp={10} steps={steps} cleared={cleared} done={status.validated} master={t.spec} />

        <section className="ln-block" data-step="cours">
          <h2 className="ln-h2">{s(ST.course)}</h2>
          {L.course.map((sec) => (
            <div key={sec.heading} className="sc-sec">
              <h3 className="ln-h3">{sec.heading}</h3>
              {sec.paragraphs.map((p, k) => <p key={k}>{p}</p>)}
              {sec.box && <div className="sc-box"><b>{sec.box.label}</b><p>{sec.box.text}</p></div>}
            </div>
          ))}
        </section>

        <section className="ln-block sc-key">
          <h2 className="ln-h2">{s(ST.keyPoints)}</h2>
          <ul>{L.keyPoints.map((k) => <li key={k}>{k}</li>)}</ul>
        </section>

        <section className="ln-block">
          <h2 className="ln-h2">{s(ST.example)}</h2>
          <p className="sc-statement">{L.example.statement}</p>
          <Reveal label={s(ST.showCorrection)} hide={s(ST.hideCorrection)}>
            <ol className="sc-solution">{L.example.solution.map((x, k) => <li key={k}>{x}</li>)}</ol>
          </Reveal>
        </section>

        <section className="ln-block">
          <h2 className="ln-h2">{s(ST.exercises)}</h2>
          {L.exercises.map((x, k) => (
            <div key={k} className="cy-card sc-ex" data-step={`ex${k + 1}`}>
              <span className={`sc-level l${x.level}`}>{s(x.level === 1 ? ST.level1 : x.level === 2 ? ST.level2 : ST.level3)}</span>
              <p className="sc-statement">{x.statement}</p>
              <Reveal label={s(ST.hint)} hide={s(ST.hint)} small><p className="sc-hint">{x.hint}</p></Reveal>
              <Reveal label={s(ST.showCorrection)} hide={s(ST.hideCorrection)}>
                <ol className="sc-solution">{x.solution.map((y, j) => <li key={j}>{y}</li>)}</ol>
                <p className="sc-self-q">{s(ST.selfCheck)}</p>
                <div className="sc-self-btns">
                  <button className={`cc-btn ${rec?.ex?.[k] === 'ok' ? 'cc-violet' : 'cc-slate'}`} onClick={() => recordExercise(key, k, 'ok')}>{s(ST.didIt)}</button>
                  <button className={`cc-btn ${rec?.ex?.[k] === 'todo' ? 'cc-violet' : 'cc-slate'}`} onClick={() => recordExercise(key, k, 'todo')}>{s(ST.toReview)}</button>
                </div>
              </Reveal>
            </div>
          ))}
        </section>

        <section className="ln-block" data-step="game">
          <h2 className="ln-h2">{s(ST.game)} {rec?.game && <BauhausIcon name="check" size={14} />}</h2>
          <SchoolGameBox game={L.game} seed={seed} onWin={() => recordGame(key)} />
        </section>

        <section className="ln-trap">
          <span className="ln-k">{s(ST.trap)}</span>
          <p>{L.trap}</p>
        </section>
        <section className="ln-block sc-method">
          <h2 className="ln-h2">{s(ST.method)}</h2>
          <p>{L.method}</p>
        </section>

        <section className="ln-block" data-step="quiz">
          <h2 className="ln-h2">{s(ST.quiz)}</h2>
          {L.quiz.map((q, i) => <QuestionCard key={`${attempt}-${i}`} q={q} n={i + 1} picked={answers[i]} onPick={(k) => onAnswer(i, k)} />)}
          {answered === L.quiz.length && (
            <div className="sc-quiz-end">
              <b>{right} / {L.quiz.length} {s(ST.quizResult)}</b>
              <button className="cc-btn cc-slate" onClick={() => { setAnswers({}); setAttempt((a) => a + 1) }}>{s(ST.retry)}</button>
            </div>
          )}
        </section>

        <Validation unitKey={key} status={status} validatedAt={rec?.validated?.at} />

        {nextId && <Lnk className="gm-cta sc-next" href={`/ecole/u/${unit}/${nextId}`}>{s(ST.nextLesson)} →</Lnk>}
      </article>
    </Shell>
  )
}

export function Reveal({ label, hide, small = false, children }: { label: string; hide: string; small?: boolean; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="sc-reveal">
      <button className={`cc-btn ${small ? 'cc-slate sc-small' : 'cc-violet'}`} onClick={() => setOpen((o) => !o)} aria-expanded={open}>{open ? hide : label}</button>
      {open && <div className="sc-reveal-body">{children}</div>}
    </div>
  )
}

export function QuestionCard({ q, n, total = 5, picked, onPick }: { q: SchoolQuestion; n: number; total?: number; picked: number | undefined; onPick: (k: number) => void }) {
  const s = useS()
  const done = picked !== undefined
  return (
    <div className="ln-quiz sc-q">
      <span className="sc-q-n">{s(ST.question)} {n} / {total}</span>
      <h3>{q.q}</h3>
      <div className="sc-q-opts">
        {q.options.map((o, k) => (
          <button key={k} disabled={done} onClick={() => onPick(k)}
            className={`sc-opt${done && k === q.answer ? ' is-right' : ''}${done && k === picked && k !== q.answer ? ' is-wrong' : ''}`}>
            <span className="sc-opt-k">{'ABCD'[k]}</span><span>{o}</span>
          </button>
        ))}
      </div>
      {done && <p className="sc-why">{q.why}</p>}
    </div>
  )
}

function Validation({ unitKey, status, validatedAt }: { unitKey: string; status: ReturnType<typeof lessonStatus>; validatedAt?: string }) {
  const s = useS()
  const [justDone, setJustDone] = useState(false)
  const fmt = useDate()
  const item = (ok: boolean, label: string) => <li className={ok ? 'is-ok' : ''}><span className="sc-dot">{ok ? <BauhausIcon name="check" size={11} /> : null}</span>{label}</li>
  return (
    <section className="cy-card sc-validate" data-step="parent">
      <h2 className="ln-h2">{s(ST.validation)}</h2>
      {status.validated
        ? <p className={`sc-validated${justDone ? ' is-new' : ''}`}><BauhausIcon name="check" size={14} /> {s(ST.validatedOn)} {validatedAt ? fmt(validatedAt) : ''}.</p>
        : (
          <>
            <ul className="sc-checks">
              {item(status.exOk, s(ST.needEx))}
              {item(status.gameOk, s(ST.needGame))}
              {item(status.quizOk, s(ST.needQuiz))}
            </ul>
            {status.ready && (hasParent()
              ? <>
                  <p>{s(ST.askParent)}</p>
                  <ParentCode label={s(ST.parentCode)} onSubmit={async (code) => { const ok = await validateLesson(unitKey, code); if (ok) { setJustDone(true); zen.sfx('chime') } return ok }} />
                </>
              : <p>{s(ST.noParent)} <Lnk href="/ecole/parents">{s(ST.parents)} →</Lnk></p>)}
          </>
        )}
    </section>
  )
}
