// L'ESPACE PARENTS · /ecole/parents. Demandé : « un système de validation par
// les parents à chaque étape, donc à chaque fin de leçon ». Le parent y crée
// son code à 4 chiffres, suit la progression, valide les leçons prêtes et les
// épreuves blanches, change le code ou remet tout à zéro (toujours avec le
// code). Rien ne quitte le navigateur : voir school/progress.
import { useState } from 'react'
import { Lnk } from '../lib/router'
import { BauhausIcon } from '../components/BauhausIcon'
import { useHeadTags } from '../lib/headTags'
import { Shell } from '../game/Shell'
import { GRADES, gradeInfo, parseUnit, subjectLabel, loadUnitPlan, useLoad, type UnitPlan } from '../data/school'
import { examOf } from '../data/school/exams'
import {
  useSchool, lessonStatus, setParent, checkCode, validateLesson, validateMock, resetSchool,
  type SchoolState,
} from './progress'
import { ParentCode } from './ParentCode'
import { ST } from './text'
import { TrainingTabs, useS, useDate } from './SchoolPages'
import { zen } from '../lib/zen'

export function ParentsPage() {
  const s = useS()
  const st = useSchool()
  useHeadTags({ title: `${s(ST.parents)} · Dojoburo`, description: s(ST.parentsLead), path: '/ecole/parents' })
  return (
    <Shell wide>
      <TrainingTabs on="school" />
      <section className="gm-sec">
        <Lnk className="gm-back" href="/ecole">← {s(ST.title)}</Lnk>
        <h1 className="gm-h1">{s(ST.parents)}</h1>
        <p className="gm-lead">{st.parent && st.child ? `${s(ST.childOf)} ${st.child.name} · ${gradeInfo(st.child.grade as never)?.label ?? ''}` : s(ST.parentsLead)}</p>
      </section>
      {st.parent ? <Dashboard st={st} /> : <Setup />}
      <p className="sc-note"><BauhausIcon name="lock" size={12} /> {s(ST.deviceNote)}</p>
    </Shell>
  )
}

/* ------------------------------------------------------------------ */
/* LA CRÉATION DU CODE                                                 */
/* ------------------------------------------------------------------ */

function Setup() {
  const s = useS()
  const [name, setName] = useState('')
  const [grade, setGrade] = useState('3e')
  const [step, setStep] = useState<'form' | 'code' | 'again'>('form')
  const [first, setFirst] = useState('')
  const [mismatch, setMismatch] = useState(false)
  return (
    <section className="gm-sec">
      <div className="cy-card sc-setup">
        <h2 className="sc-h2">{s(ST.setupH)}</h2>
        <p>{s(ST.setupLead)}</p>
        {step === 'form' && (
          <form className="sc-form" onSubmit={(e) => { e.preventDefault(); if (name.trim()) setStep('code') }}>
            <label>
              <span>{s(ST.childName)}</span>
              <input className="sc-field" value={name} maxLength={40} autoComplete="off" onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
              <span>{s(ST.childGrade)}</span>
              <select className="sc-field" value={grade} onChange={(e) => setGrade(e.target.value)}>
                {GRADES.map((g) => <option key={g.id} value={g.id}>{g.label}</option>)}
              </select>
            </label>
            <button className="gm-cta" type="submit" disabled={!name.trim()}>{s(ST.next)} →</button>
          </form>
        )}
        {step === 'code' && (
          <>
            {mismatch && <p className="sc-warn">{s(ST.codeMismatch)}</p>}
            <ParentCode key="first" autoFocus label={s(ST.codeFirst)} onSubmit={async (c) => { setFirst(c); setMismatch(false); setStep('again'); return true }} />
          </>
        )}
        {step === 'again' && (
          <ParentCode key="again" autoFocus label={s(ST.codeAgain)} onSubmit={async (c) => {
            if (c !== first) { setMismatch(true); setFirst(''); setStep('code'); return true }
            await setParent(c, { name: name.trim(), grade })
            zen.sfx('chime')
            return true
          }} />
        )}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* LE TABLEAU DE BORD                                                  */
/* ------------------------------------------------------------------ */

/** le titre d'une leçon, retrouvé dans le plan de son unité */
const titleIn = (plans: UnitPlan[] | undefined, unit: string, id: string) =>
  plans?.find((p) => p.id === unit)?.chapters.flatMap((c) => c.lessons).find((l) => l.id === id)?.title ?? id

const unitName = (unit: string) => {
  const { subject, grade } = parseUnit(unit)
  const g = grade ? gradeInfo(grade) : null
  return `${subjectLabel(subject, grade)}${g ? ` · ${g.label}` : ''}`
}

function Dashboard({ st }: { st: SchoolState }) {
  const s = useS()
  const date = useDate()
  const entries = Object.entries(st.lessons).map(([key, rec]) => {
    const [unit, id] = key.split('/')
    return { key, unit, id, rec, status: lessonStatus(rec, 3) }
  })
  const units = [...new Set(entries.map((e) => e.unit))]
  const plans = useLoad(() => Promise.all(units.map(loadUnitPlan)).then((x) => x.filter((p): p is UnitPlan => !!p)), [units.join(',')])
  const waiting = entries.filter((e) => e.status.ready && !e.status.validated)
  const recent = entries.filter((e) => e.rec.validated).sort((a, b) => b.rec.validated!.at.localeCompare(a.rec.validated!.at)).slice(0, 8)
  const [open, setOpen] = useState<string | null>(null)

  return (
    <>
      <section className="gm-sec">
        <h2 className="sc-h2">{s(ST.toValidate)}</h2>
        {waiting.length === 0 && <p className="cy-card sc-empty">{s(ST.noneToValidate)}</p>}
        <ul className="sc-plist">
          {waiting.map((e) => (
            <li key={e.key} className="cy-card sc-pitem">
              <div className="sc-pitem-t">
                <b>{titleIn(plans, e.unit, e.id)}</b>
                <small>{unitName(e.unit)} · {s(ST.quizScore)} {e.rec.quiz?.right} / {e.rec.quiz?.total}</small>
              </div>
              <div className="sc-pitem-a">
                <Lnk className="cc-btn cc-slate sc-small" href={`/ecole/u/${e.unit}/${e.id}`}>{s(ST.open)}</Lnk>
                <button className="cc-btn cc-violet sc-small" onClick={() => setOpen(open === e.key ? null : e.key)}>{open === e.key ? s(ST.cancel) : s(ST.validate)}</button>
              </div>
              {open === e.key && (
                <ParentCode autoFocus label={s(ST.validateWith)} onSubmit={async (c) => {
                  const ok = await validateLesson(e.key, c)
                  if (ok) { zen.sfx('chime'); setOpen(null) }
                  return ok
                }} />
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="gm-sec">
        <h2 className="sc-h2">{s(ST.unitsStarted)}</h2>
        {units.length === 0 && <p className="cy-card sc-empty">{s(ST.noProgress)}</p>}
        <div className="sc-punits">
          {units.map((u) => {
            const mine = entries.filter((e) => e.unit === u)
            const plan = plans?.find((p) => p.id === u)
            const total = plan ? plan.chapters.reduce((n, c) => n + c.lessons.length, 0) : 0
            const done = mine.filter((e) => e.status.validated).length
            const wait = mine.filter((e) => e.status.ready && !e.status.validated).length
            return (
              <Lnk key={u} className="cy-card sc-punit" href={`/ecole/u/${u}`}>
                <b>{unitName(u)}</b>
                {total > 0 && <span className="sc-bar"><i style={{ width: `${(done / total) * 100}%` }} /></span>}
                <small>{done}{total ? ` / ${total}` : ''} {s(ST.validated)} · {mine.length} {s(ST.started)}{wait ? ` · ${wait} ${s(ST.waiting)}` : ''}</small>
              </Lnk>
            )
          })}
        </div>
      </section>

      {recent.length > 0 && (
        <section className="gm-sec">
          <h2 className="sc-h2">{s(ST.recent)}</h2>
          <ul className="sc-plist">
            {recent.map((e) => (
              <li key={e.key} className="sc-pdone">
                <span className="sc-dot is-ok"><BauhausIcon name="check" size={11} /></span>
                <Lnk href={`/ecole/u/${e.unit}/${e.id}`}>{titleIn(plans, e.unit, e.id)}</Lnk>
                <small>{unitName(e.unit)} · {date(e.rec.validated!.at)}</small>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="gm-sec">
        <h2 className="sc-h2">{s(ST.mocks)}</h2>
        {st.mocks.length === 0 && <p className="cy-card sc-empty">{s(ST.noMocks)}</p>}
        <ul className="sc-plist">
          {st.mocks.slice(0, 12).map((m) => {
            const x = examOf(m.exam)
            const ep = x?.epreuves.find((e) => e.id === m.epreuve)
            return (
              <li key={m.id} className="cy-card sc-pitem">
                <div className="sc-pitem-t">
                  <b>{x?.name ?? m.exam} · {ep?.name ?? m.epreuve}</b>
                  <small>{date(m.at)}</small>
                </div>
                <div className="sc-pitem-a">
                  <span className="sc-score">{m.score.toLocaleString('fr-FR')} / 20</span>
                  {m.validated
                    ? <span className="sc-ok"><BauhausIcon name="check" size={11} /> {s(ST.mockValidated)}</span>
                    : <button className="cc-btn cc-violet sc-small" onClick={() => setOpen(open === m.id ? null : m.id)}>{open === m.id ? s(ST.cancel) : s(ST.validate)}</button>}
                </div>
                {open === m.id && (
                  <ParentCode autoFocus label={s(ST.validateWith)} onSubmit={async (c) => {
                    const ok = await validateMock(m.id, c)
                    if (ok) { zen.sfx('chime'); setOpen(null) }
                    return ok
                  }} />
                )}
              </li>
            )
          })}
        </ul>
      </section>

      <Settings st={st} />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* LES RÉGLAGES · toujours derrière le code                            */
/* ------------------------------------------------------------------ */

function Settings({ st }: { st: SchoolState }) {
  const s = useS()
  const [mode, setMode] = useState<'none' | 'old' | 'new' | 'again' | 'reset'>('none')
  const [first, setFirst] = useState('')
  const [msg, setMsg] = useState('')
  const close = () => { setMode('none'); setFirst('') }
  return (
    <section className="gm-sec">
      <div className="cy-card sc-settings">
        <h2 className="sc-h2">{s(ST.manage)}</h2>
        {msg && <p className="sc-ok-msg">{msg}</p>}
        {mode === 'none' && (
          <div className="sc-settings-btns">
            <button className="cc-btn cc-slate" onClick={() => { setMsg(''); setMode('old') }}>{s(ST.changeCode)}</button>
            <button className="cc-btn cc-slate sc-danger" onClick={() => { setMsg(''); setMode('reset') }}>{s(ST.reset)}</button>
          </div>
        )}
        {mode === 'old' && <ParentCode key="old" autoFocus label={s(ST.oldCode)} onSubmit={async (c) => { const ok = await checkCode(c); if (ok) setMode('new'); return ok }} />}
        {mode === 'new' && <ParentCode key="new" autoFocus label={s(ST.newCode)} onSubmit={async (c) => { setFirst(c); setMode('again'); return true }} />}
        {mode === 'again' && (
          <ParentCode key="again" autoFocus label={s(ST.codeAgain)} onSubmit={async (c) => {
            if (c !== first) { setMsg(s(ST.codeMismatch)); setMode('new'); return true }
            await setParent(c, st.child ?? { name: '', grade: '3e' })
            setMsg(s(ST.codeChanged)); close(); zen.sfx('chime')
            return true
          }} />
        )}
        {mode === 'reset' && (
          <>
            <p className="sc-warn">{s(ST.resetWarn)}</p>
            <ParentCode key="reset" autoFocus label={s(ST.parentCode)} onSubmit={async (c) => {
              const ok = await resetSchool(c)
              if (ok) { setMsg(s(ST.resetDone)); close() }
              return ok
            }} />
          </>
        )}
        {mode !== 'none' && <button className="cc-btn cc-slate sc-small" onClick={close}>{s(ST.cancel)}</button>}
      </div>
    </section>
  )
}
