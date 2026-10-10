// LES PAGES DE L'ÉCOLE · l'accueil (/ecole), une classe (/ecole/3e) et une
// matière (/ecole/u/maths-3e). Voir data/school pour les plans et le contenu,
// school/progress pour la progression et la validation par les parents.
import { Lnk } from '../lib/router'
import { BauhausIcon } from '../components/BauhausIcon'
import { useHeadTags } from '../lib/headTags'
import { useLang } from '../i18n'
import { say, type Bi } from '../data/bilingual'
import { Shell } from '../game/Shell'
import { LiveChibi } from '../pixel/LiveChibi'
import {
  GRADES, GRADE_SUBJECTS, SUBJECTS, IA_UNIT, UNITS_WITH_CONTENT, unitId, gradeInfo, parseUnit, subjectLabel,
  loadPlans, loadUnitPlan, loadUnitContent, useLoad, type Grade, type UnitPlan,
} from '../data/school'
import { EXAMS } from '../data/school/exams'
import { useSchool, lessonKey, lessonStatus, type SchoolState } from './progress'
import { teacherOf } from './teachers'
import { ST } from './text'

export const useS = () => { const lang = useLang(); return (b: Bi) => say(b, lang) }
/** une date lisible, dans la langue de l'interface */
export const useDate = () => {
  const lang = useLang()
  return (iso: string) => new Date(iso).toLocaleDateString(lang === 'en' ? 'en-GB' : 'fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

/** LES DEUX FAMILLES DE FORMATIONS · un onglet en tête des formations et de l'école */
export function TrainingTabs({ on }: { on: 'ai' | 'school' }) {
  const s = useS()
  return (
    <nav className="sc-tabs" aria-label="Formations">
      <Lnk className={`sc-tab${on === 'ai' ? ' on' : ''}`} href="/formations">{s(ST.tabAi)}</Lnk>
      <Lnk className={`sc-tab${on === 'school' ? ' on' : ''}`} href="/ecole">{s(ST.tabSchool)}</Lnk>
    </nav>
  )
}

const validatedIn = (st: SchoolState, unit: string) => Object.entries(st.lessons).filter(([k, v]) => k.startsWith(`${unit}/`) && v.validated).length

/* ------------------------------------------------------------------ */
/* L'ACCUEIL                                                           */
/* ------------------------------------------------------------------ */

export function SchoolHome() {
  const s = useS()
  const st = useSchool()
  useHeadTags({ title: `${s(ST.title)} · Dojoburo`, description: s(ST.lead), path: '/ecole' })
  const stage = (k: 'college' | 'lycee') => GRADES.filter((g) => g.stage === k)
  return (
    <Shell wide>
      <TrainingTabs on="school" />
      <section className="gm-sec">
        <span className="sc-badge">{s(ST.freeBeta)}</span>
        <h1 className="gm-h1">{s(ST.title)}</h1>
        <p className="gm-lead">{s(ST.lead)}</p>
      </section>

      <section className="gm-sec">
        <h2 className="sc-h2">{s(ST.pickGrade)}</h2>
        {(['college', 'lycee'] as const).map((k) => (
          <div key={k} className="sc-stage">
            <h3 className="sc-stage-h">{s(k === 'college' ? ST.college : ST.lycee)}</h3>
            <div className="sc-grades">
              {stage(k).map((g) => {
                const units = GRADE_SUBJECTS[g.id].map((x) => unitId(x, g.id))
                const ready = units.filter((u) => UNITS_WITH_CONTENT.has(u)).length
                const done = units.reduce((n, u) => n + validatedIn(st, u), 0)
                return (
                  <Lnk key={g.id} className="sc-grade" href={`/ecole/${g.id}`}>
                    <b>{g.label}</b>
                    <span>{g.cycle}</span>
                    <small>{units.length} {s(ST.subjects).toLowerCase()}{ready ? ` · ${ready} ${s(ST.written)}` : ''}{done ? ` · ${done} ${s(ST.validated)}` : ''}</small>
                    {g.exam && <i className="sc-grade-exam">{g.exam === 'brevet' ? 'Brevet' : g.exam === 'bac' ? 'Bac' : 'Bac anticipé'}</i>}
                  </Lnk>
                )
              })}
            </div>
          </div>
        ))}
      </section>

      <section className="gm-sec sc-duo">
        <Lnk className="cy-card sc-feature" href={`/ecole/u/${IA_UNIT}`}>
          <span className="sc-feature-av"><LiveChibi spec={teacherOf(IA_UNIT).spec} scale={2} seed="ia" /></span>
          <span><b>{s(ST.iaCard)}</b><small>{s(ST.iaLead)}</small></span>
        </Lnk>
        <Lnk className="cy-card sc-feature" href="/ecole/parents">
          <span className="sc-feature-ico"><BauhausIcon name="lock" size={26} /></span>
          <span>
            <b>{s(ST.parents)}</b>
            <small>{st.parent && st.child ? `${s(ST.parentsReady)} ${st.child.name}.` : s(ST.parentsLead)}</small>
          </span>
        </Lnk>
      </section>

      <section className="gm-sec">
        <h2 className="sc-h2">{s(ST.exams)}</h2>
        <p className="gm-lead">{s(ST.examsLead)}</p>
        <div className="sc-exams">
          {EXAMS.map((x) => (
            <Lnk key={x.id} className="cy-card sc-exam" href={`/ecole/examens/${x.id}`}>
              <b>{x.name}</b>
              <span>{gradeInfo(x.grade)?.label} · {x.epreuves.length} {x.epreuves.length > 1 ? 'épreuves' : 'épreuve'}</span>
              <span className="sc-go">{s(ST.examLink)} <BauhausIcon name="play" size={10} /></span>
            </Lnk>
          ))}
        </div>
      </section>
    </Shell>
  )
}

/* ------------------------------------------------------------------ */
/* UNE CLASSE                                                          */
/* ------------------------------------------------------------------ */

export function GradePage({ grade }: { grade: Grade }) {
  const s = useS()
  const st = useSchool()
  const g = gradeInfo(grade)!
  const plans = useLoad(() => loadPlans(grade), [grade])
  useHeadTags({ title: `${g.label} · ${s(ST.title)} · Dojoburo`, description: s(ST.lead), path: `/ecole/${grade}` })
  const exam = EXAMS.filter((x) => x.grade === grade)
  return (
    <Shell wide>
      <TrainingTabs on="school" />
      <section className="gm-sec">
        <Lnk className="gm-back" href="/ecole">← {s(ST.title)}</Lnk>
        <h1 className="gm-h1">{g.label}</h1>
        <p className="gm-lead">{g.cycle}</p>
        {exam.length > 0 && (
          <div className="sc-exam-links">
            {exam.map((x) => <Lnk key={x.id} className="gm-cta" href={`/ecole/examens/${x.id}`}>{x.name} →</Lnk>)}
          </div>
        )}
      </section>
      <section className="gm-sec">
        <div className="sc-subjects">
          {GRADE_SUBJECTS[grade].map((sub) => {
            const id = unitId(sub, grade)
            const plan = plans?.find((p) => p.id === id)
            const total = plan ? plan.chapters.reduce((n, c) => n + c.lessons.length, 0) : 0
            const done = validatedIn(st, id)
            const info = SUBJECTS[sub]
            const t = teacherOf(sub)
            const ready = UNITS_WITH_CONTENT.has(id)
            return (
              <Lnk key={sub} className={`sc-subject${ready ? '' : ' is-soon'}`} href={`/ecole/u/${id}`} style={{ ['--ac' as string]: info.tint }}>
                <span className="sc-subject-av"><LiveChibi spec={t.spec} scale={2} seed={id} /></span>
                <span className="sc-subject-t">
                  <b>{subjectLabel(sub, grade)}</b>
                  <small>{t.name}{total ? ` · ${total} ${s(ST.lessons)}` : ''}</small>
                  {total > 0 && <span className="sc-bar"><i style={{ width: `${(done / total) * 100}%` }} /></span>}
                  {!ready && <em className="sc-soon">{s(ST.soon)}</em>}
                </span>
              </Lnk>
            )
          })}
        </div>
      </section>
    </Shell>
  )
}

/* ------------------------------------------------------------------ */
/* UNE MATIÈRE (UNITÉ)                                                 */
/* ------------------------------------------------------------------ */

export function UnitPage({ unit }: { unit: string }) {
  const s = useS()
  const st = useSchool()
  const plan = useLoad(() => loadUnitPlan(unit), [unit])
  const content = useLoad(() => loadUnitContent(unit), [unit])
  const { subject, grade } = parseUnit(unit)
  const t = teacherOf(subject)
  const g = grade ? gradeInfo(grade) : null
  const name = subjectLabel(subject, grade)
  useHeadTags({ title: `${name}${g ? ` ${g.label}` : ''} · Dojoburo`, description: plan?.intro ?? s(ST.lead), path: `/ecole/u/${unit}` })
  if (plan === undefined) return <Shell><section className="gm-sec"><p>{s(ST.loading)}</p></section></Shell>
  if (!plan) return <Shell><section className="gm-sec"><p>{s(ST.notFound)}</p></section></Shell>
  const lessons = plan.chapters.flatMap((c) => c.lessons.map((l) => ({ c, l })))
  const done = validatedIn(st, unit)
  const exam = EXAMS.find((x) => x.epreuves.some((e) => e.units.includes(unit)))
  const firstOpen = lessons.find(({ l }) => content?.has(l.id) && !st.lessons[lessonKey(unit, l.id)]?.validated)
  return (
    <Shell wide>
      <section className="gm-sec sc-unit-head" style={{ ['--ac' as string]: SUBJECTS[subject]?.tint }}>
        <Lnk className="gm-back" href={grade ? `/ecole/${grade}` : '/ecole'}>← {g ? g.label : s(ST.title)}</Lnk>
        <div className="sc-unit-row">
          <span className="sc-unit-av"><LiveChibi spec={t.spec} scale={3} seed={unit} /></span>
          <div>
            <h1 className="gm-h1">{name}{g ? ` · ${g.label}` : ''}</h1>
            <p className="gm-lead">{plan.intro}</p>
            <p className="sc-ref">{s(ST.reference)} : {plan.reference}</p>
          </div>
        </div>
        <div className="sc-unit-stats">
          <span className="sc-bar big"><i style={{ width: `${lessons.length ? (done / lessons.length) * 100 : 0}%` }} /></span>
          <small>{done} / {lessons.length} {s(ST.lessons)} {s(ST.validated)}</small>
          {firstOpen && <Lnk className="gm-cta" href={`/ecole/u/${unit}/${firstOpen.l.id}`}>{done ? s(ST.resume) : s(ST.start)} →</Lnk>}
          {exam && <Lnk className="cc-btn cc-slate" href={`/ecole/examens/${exam.id}`}>{s(ST.examLink)}</Lnk>}
        </div>
        {!UNITS_WITH_CONTENT.has(unit) && <p className="cy-card sc-soon-card">{s(ST.soonLead)}</p>}
      </section>
      <section className="gm-sec">
        <ol className="sc-chapters">
          {plan.chapters.map((c, ci) => (
            <li key={c.id} className="cy-card sc-chapter">
              <div className="sc-chapter-h">
                <span className="sc-chapter-n">{ci + 1}</span>
                <div><b>{c.title}</b><small>{s(ST.programme)} : {c.programme}</small></div>
              </div>
              <ul className="sc-lessons">
                {c.lessons.map((l) => {
                  const written = content?.has(l.id)
                  const rec = st.lessons[lessonKey(unit, l.id)]
                  const L = content?.get(l.id)
                  const status = L ? lessonStatus(rec, L.exercises.length) : null
                  const cls = status?.validated ? 'is-validated' : status?.ready ? 'is-ready' : rec ? 'is-started' : ''
                  return (
                    <li key={l.id}>
                      {written
                        ? <Lnk className={`sc-lesson ${cls}`} href={`/ecole/u/${unit}/${l.id}`}>
                            <span className="sc-dot" aria-hidden="true">{status?.validated ? <BauhausIcon name="check" size={11} /> : null}</span>
                            <span>{l.title}</span>
                            {L && <small>{L.minutes} {s(ST.minutes)}</small>}
                          </Lnk>
                        : <span className="sc-lesson is-soon"><span className="sc-dot" aria-hidden="true" /><span>{l.title}</span><small>{s(ST.soon)}</small></span>}
                    </li>
                  )
                })}
              </ul>
            </li>
          ))}
        </ol>
      </section>
    </Shell>
  )
}

export type { UnitPlan }
