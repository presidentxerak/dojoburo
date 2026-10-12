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
  loadUnitPlan, loadUnitContent, useLoad, type Grade, type UnitPlan,
} from '../data/school'
import { EXAMS } from '../data/school/exams'
import { useSchool, lessonKey, lessonStatus, type SchoolState } from './progress'
import { teacherOf } from './teachers'
import { gridToUrl } from '../pixel/raster'
import { drawTempleIcon } from '../temple/art/world'
import { drawCardScene } from '../temple/art/cardScene'
import { MAP_GRADES, YearBand, YearCards } from './Temples'
import { ST } from './text'

// L'ÉCOLE EST EN FRANÇAIS · demandé : « fais juste la version française ». Le
// programme est celui de l'école française : les pages de l'école restent en
// français quelle que soit la langue de l'app. Seul l'onglet qui y mène, sur la
// page des formations IA, suit la langue choisie (voir TrainingTabs).
export const useS = () => (b: Bi) => say(b, 'fr')
/** une date lisible, dans la langue de l'interface */
export const useDate = () => (iso: string) => new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

/** LES DEUX FAMILLES DE FORMATIONS · un onglet en tête des formations et de l'école */
export function TrainingTabs({ on }: { on: 'ai' | 'school' }) {
  const lang = useLang()
  const s = (b: Bi) => say(b, on === 'ai' ? lang : 'fr')
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
  // LA PAGE PAR ANNÉE · demandé : « même chose pour la page de type de classe
  // comme pour l'IA » · une section par année, de la 6e à la Terminale (voir
  // MAP_GRADES), avec ses matières en cartes de temple et son examen en dernier.
  const college = GRADES.filter((g) => !MAP_GRADES.includes(g.id))
  return (
    <Shell wide>
      <TrainingTabs on="school" />
      <section className="gm-sec">
        <span className="sc-badge">{s(ST.freeBeta)}</span>
        <h1 className="gm-h1">{s(ST.title)}</h1>
        <p className="gm-lead">{s(ST.lead)}</p>
        <Lnk className="cc-btn cc-slate sc-maplink" href="/ecole/carte">{s(ST.mapLink)} →</Lnk>
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

      {MAP_GRADES.map((g) => (
        <section key={g} className="gm-sec sc-year">
          <YearBand grade={g} href={`/ecole/${g}`} />
          <YearCards grade={g} />
        </section>
      ))}

      {college.length > 0 && <section className="gm-sec sc-year">
        <header className="sc-band is-all">
          <span className="sc-band-n">{s(ST.college)}</span>
          <span className="sc-band-t"><b>{college.map((g) => g.label).join(', ')}</b><small>{s(ST.soonLead)}</small></span>
        </header>
        <div className="sc-grades">
          {college.map((g) => {
            const units = GRADE_SUBJECTS[g.id].map((x) => unitId(x, g.id))
            const done = units.reduce((n, u) => n + validatedIn(st, u), 0)
            return (
              <Lnk key={g.id} className="sc-grade" href={`/ecole/${g.id}`}>
                <b>{g.label}</b>
                <span>{g.cycle}</span>
                <small>{units.length} {s(ST.subjects).toLowerCase()}{done ? ` · ${done} ${s(ST.validated)}` : ''}</small>
              </Lnk>
            )
          })}
        </div>
      </section>}
    </Shell>
  )
}

/* ------------------------------------------------------------------ */
/* UNE CLASSE                                                          */
/* ------------------------------------------------------------------ */

export function GradePage({ grade }: { grade: Grade }) {
  const s = useS()
  const g = gradeInfo(grade)!
  useHeadTags({ title: `${g.label} · ${s(ST.title)} · Dojoburo`, description: s(ST.lead), path: `/ecole/${grade}` })
  return (
    <Shell wide>
      <TrainingTabs on="school" />
      <section className="gm-sec">
        <Lnk className="gm-back" href="/ecole">← {s(ST.title)}</Lnk>
        <h1 className="gm-h1">{g.label}</h1>
        <p className="gm-lead">{g.cycle}</p>
      </section>
      <section className="gm-sec sc-year">
        <YearBand grade={grade} />
        <YearCards grade={grade} />
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
  const ready = UNITS_WITH_CONTENT.has(unit)
  const tint = SUBJECTS[subject]?.tint ?? '#7c3aed'
  const done = validatedIn(st, unit)
  const exam = EXAMS.find((x) => x.epreuves.some((e) => e.units.includes(unit)))
  const firstOpen = lessons.find(({ l }) => content?.has(l.id) && !st.lessons[lessonKey(unit, l.id)]?.validated)
  return (
    <Shell wide>
      <section className="gm-sec sc-unit-head" style={{ ['--ac' as string]: SUBJECTS[subject]?.tint }}>
        <Lnk className="gm-back" href={grade ? `/ecole/${grade}` : '/ecole'}>← {g ? g.label : s(ST.title)}</Lnk>
        <div className="sc-unit-row">
          {/* LE TEMPLE DE LA MATIÈRE · le même décor que les cartes des formations IA */}
          <span className="tw-card-scene sc-unit-scene" style={{ backgroundImage: `url(${gridToUrl(`cs:${unit}:${!ready}`, () => drawCardScene(tint, 3, !ready))})` }}>
            <img className="tw-card-temple" src={gridToUrl(`ti:${unit}:${tint}:${!ready}`, () => drawTempleIcon(tint, 3, !ready))} alt="" width={80} height={88} />
            <span className="tw-card-master"><LiveChibi spec={t.spec} scale={2} seed={unit} /></span>
          </span>
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
