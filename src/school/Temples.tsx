// LES TEMPLES DE L'ÉCOLE · demandé : « faut créer une carte de temple par
// catégorie on a la carte de Apprendre l'IA, là on a la carte Les cours de la
// 3ème à la terminale avec sur la carte une démarcation entre les années même
// chose pour la page de type de classe comme pour l'IA ».
//
//   · la carte (/ecole/carte, onglet Dojoburo) : une bande par année, de la 3e
//     à la Terminale, chaque matière un temple, et au bout de l'année le
//     temple de son examen (brevet, bac, contrôle de fin) ;
//   · les cartes (page École, une classe) : le même décor que les cartes des
//     formations IA (game/Formations), une matière par carte, l'examen en
//     dernier, une section par année.
import { Lnk } from '../lib/router'
import { BauhausIcon } from '../components/BauhausIcon'
import { useHeadTags } from '../lib/headTags'
import { Shell } from '../game/Shell'
import { LiveChibi } from '../pixel/LiveChibi'
import { gridToUrl } from '../pixel/raster'
import { drawTempleIcon } from '../temple/art/world'
import { drawCardScene } from '../temple/art/cardScene'
import { TempleWorld, MapTabs, type MapTemple } from '../temple/TempleWorld'
import { TT } from '../temple/templeText'
import { zen } from '../lib/zen'
import { say } from '../data/bilingual'
import { useLang } from '../i18n'
import {
  GRADE_SUBJECTS, SUBJECTS, IA_UNIT, UNITS_WITH_CONTENT, unitId, gradeInfo, parseUnit, subjectLabel, loadPlans, loadUnitPlan, useLoad,
  type Grade, type UnitPlan,
} from '../data/school'
import { examsOf, type Exam } from '../data/school/exams'
import { useSchool, type SchoolState } from './progress'
import { teacherOf } from './teachers'
import { blancOf } from './Exams'
import { ST } from './text'
import { useS } from './SchoolPages'

/** les classes de la carte · demandé : « de la 3ème à la terminale » */
export const MAP_GRADES: Grade[] = ['3e', '2nde', '1re', 'tle']
/** la couleur des temples d'examen */
const EXAM_TINT = '#d4a017'

const lessonsIn = (p?: UnitPlan | null) => (p ? p.chapters.reduce((n, c) => n + c.lessons.length, 0) : 0)
const validatedIn = (st: SchoolState, unit: string) => Object.entries(st.lessons).filter(([k, v]) => k.startsWith(`${unit}/`) && v.validated).length

/* ------------------------------------------------------------------ */
/* LES CARTES · comme celles des formations IA                         */
/* ------------------------------------------------------------------ */

export function SubjectCard({ unit, plan, k }: { unit: string; plan?: UnitPlan | null; k: number }) {
  const s = useS()
  const st = useSchool()
  const { subject, grade } = parseUnit(unit)
  const info = SUBJECTS[subject]
  const tint = info?.tint ?? '#7c3aed'
  const t = teacherOf(subject)
  const ready = UNITS_WITH_CONTENT.has(unit)
  const total = lessonsIn(plan)
  const done = validatedIn(st, unit)
  const name = unit === IA_UNIT ? s(ST.iaCard) : subjectLabel(subject, grade)
  return (
    <Lnk className={`tw-card gm-rise sc-card${ready ? '' : ' is-soon'}`} href={`/ecole/u/${unit}`} onClick={() => zen.sfx('tap')}
      onMouseEnter={() => zen.sfx('step')} style={{ ['--ac' as string]: tint, ['--i' as string]: k }}>
      <span className="tw-card-scene" style={{ backgroundImage: `url(${gridToUrl(`cs:${unit}:${!ready}`, () => drawCardScene(tint, k + 3, !ready))})` }}>
        <img className="tw-card-temple" src={gridToUrl(`ti:${unit}:${tint}:${!ready}`, () => drawTempleIcon(tint, k + 3, !ready))} alt="" width={80} height={88} />
        <span className="tw-card-master"><LiveChibi spec={t.spec} scale={2} seed={unit} /></span>
        <i className="tw-card-shine" aria-hidden="true" />
      </span>
      <b className="tw-card-sign">{name}</b>
      <span className="tw-card-t">
        <em>{t.name}{total ? ` · ${total} ${s(ST.lessons)}` : ''}</em>
        {total > 0 && (
          <span className="tw-card-bar" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={done} aria-label={`${done} / ${total}`}>
            <i style={{ width: `${(done / total) * 100}%` }} />
          </span>
        )}
        <span className="tw-card-foot">
          <small className="tw-card-n">{total ? `${done} / ${total} ${s(ST.validated)}` : ''}</small>
          <span className={`tw-tag${ready ? ' free' : ''}`}>{ready ? s(ST.freeTag) : s(ST.soon)}</span>
        </span>
        <span className="tw-card-go">{ready ? (done ? s(ST.resume) : s(ST.start)) : s(ST.seePlan)} <BauhausIcon name="play" size={10} /></span>
      </span>
    </Lnk>
  )
}

export function ExamCard({ x, k }: { x: Exam; k: number }) {
  const s = useS()
  const st = useSchool()
  const b = blancOf(x, st)
  return (
    <Lnk className="tw-card gm-rise sc-card is-exam" href={`/ecole/examens/${x.id}`} onClick={() => zen.sfx('tap')}
      onMouseEnter={() => zen.sfx('step')} style={{ ['--ac' as string]: EXAM_TINT, ['--i' as string]: k }}>
      <span className="tw-card-scene" style={{ backgroundImage: `url(${gridToUrl(`cs:${x.id}`, () => drawCardScene(EXAM_TINT, k + 11, false))})` }}>
        <img className="tw-card-temple" src={gridToUrl(`ti:${x.id}:exam`, () => drawTempleIcon(EXAM_TINT, 1, false))} alt="" width={80} height={88} />
        <span className="sc-card-medal" aria-hidden="true"><BauhausIcon name="star" size={22} /></span>
        <i className="tw-card-shine" aria-hidden="true" />
      </span>
      <b className="tw-card-sign">{x.short}</b>
      <span className="tw-card-t">
        <em>{x.official ? s(ST.examOfficial) : s(ST.examYearEnd)} · {x.epreuves.length} {x.epreuves.length > 1 ? 'épreuves' : 'épreuve'}</em>
        {b.rows.length > 0 && (
          <span className="tw-card-bar" role="progressbar" aria-valuemin={0} aria-valuemax={b.rows.length} aria-valuenow={b.done} aria-label={`${b.done} / ${b.rows.length}`}>
            <i style={{ width: `${(b.done / b.rows.length) * 100}%` }} />
          </span>
        )}
        <span className="tw-card-foot">
          <small className="tw-card-n">{b.rows.length ? (b.complete ? `${x.blanc} : ${b.avg!.toLocaleString('fr-FR')} / 20` : `${x.blanc} : ${b.done} / ${b.rows.length}`) : ''}</small>
        </span>
        <span className="tw-card-go">{s(ST.examLink)} <BauhausIcon name="play" size={10} /></span>
      </span>
    </Lnk>
  )
}

/** une année · ses matières en cartes, puis ses examens */
export function YearCards({ grade }: { grade: Grade }) {
  const plans = useLoad(() => loadPlans(grade), [grade])
  const units = GRADE_SUBJECTS[grade].map((x) => unitId(x, grade))
  return (
    <div className="tw-cards">
      {units.map((u, k) => <SubjectCard key={u} unit={u} plan={plans?.find((p) => p.id === u)} k={k} />)}
      {examsOf(grade).map((x, k) => <ExamCard key={x.id} x={x} k={units.length + k} />)}
    </div>
  )
}

/** l'en-tête d'une année · la démarcation entre les classes */
export function YearBand({ grade, href }: { grade: Grade; href?: string }) {
  const s = useS()
  const g = gradeInfo(grade)!
  const ex = examsOf(grade)
  return (
    <header className="sc-band">
      <span className="sc-band-n">{g.label}</span>
      <span className="sc-band-t">
        <b>{g.cycle}</b>
        <small>{GRADE_SUBJECTS[grade].length} {s(ST.subjects).toLowerCase()} · {ex.map((x) => x.short).join(' · ')}</small>
      </span>
      {href && <Lnk className="cc-btn cc-slate sc-small" href={href}>{s(ST.open)}</Lnk>}
    </header>
  )
}

/* ------------------------------------------------------------------ */
/* LA CARTE                                                            */
/* ------------------------------------------------------------------ */

function YearMap({ grade, k }: { grade: Grade; k: number }) {
  const s = useS()
  const st = useSchool()
  const plans = useLoad(() => loadPlans(grade), [grade])
  const items: MapTemple[] = [
    ...GRADE_SUBJECTS[grade].map((x) => {
      const u = unitId(x, grade)
      const ready = UNITS_WITH_CONTENT.has(u)
      const total = lessonsIn(plans?.find((p) => p.id === u))
      return {
        key: u, title: subjectLabel(x, grade), tint: SUBJECTS[x]?.tint ?? '#7c3aed', href: `/ecole/u/${u}`, locked: !ready,
        note: ready ? (total ? `${validatedIn(st, u)} / ${total}` : undefined) : s(ST.soon),
        aria: `${subjectLabel(x, grade)}${ready ? '' : ` · ${s(ST.soon)}`}`,
      }
    }),
    ...examsOf(grade).map((x) => {
      const b = blancOf(x, st)
      return { key: x.id, title: x.short, tint: EXAM_TINT, href: `/ecole/examens/${x.id}`, exam: true, note: b.rows.length ? `${b.done} / ${b.rows.length}` : undefined }
    }),
  ]
  return <TempleWorld items={items} seed={11 + k * 7} walkers={[8, 4]} />
}

export function SchoolMapPage() {
  const s = useS()
  const lang = useLang()
  const ia = useLoad(() => loadUnitPlan(IA_UNIT), [])
  const st = useSchool()
  useHeadTags({ title: `${s(ST.mapTitle)} · Dojoburo`, description: s(ST.mapLead), path: '/ecole/carte' })
  return (
    <Shell wide>
      <MapTabs on="school" labels={{ ai: say(TT.mapAi, lang), school: say(TT.mapSchool, lang) }} />
      <section className="gm-sec tw-head">
        <h1 className="tw-title">{s(ST.mapTitle)}</h1>
        <p className="gm-lead tw-pick">{s(ST.mapLead)}</p>
      </section>
      <section className="gm-sec">
        <YearBandAll />
        <TempleWorld seed={5} walkers={[4, 2]} items={[{
          key: IA_UNIT, title: s(ST.iaCard), tint: SUBJECTS['ia-ecole']?.tint ?? '#7c3aed', href: `/ecole/u/${IA_UNIT}`,
          note: ia ? `${validatedIn(st, IA_UNIT)} / ${lessonsIn(ia)}` : undefined,
        }]} />
      </section>
      {MAP_GRADES.map((g, k) => (
        <section key={g} className="gm-sec sc-year">
          <YearBand grade={g} href={`/ecole/${g}`} />
          <YearMap grade={g} k={k} />
        </section>
      ))}
      <section className="gm-sec tw-more">
        <Lnk className="cc-btn cc-slate" href="/ecole">{s(ST.allSchool)} →</Lnk>
      </section>
    </Shell>
  )
}

function YearBandAll() {
  const s = useS()
  return (
    <header className="sc-band is-all">
      <span className="sc-band-n">{s(ST.allGrades)}</span>
      <span className="sc-band-t"><b>{s(ST.iaCard)}</b><small>{s(ST.iaLead)}</small></span>
    </header>
  )
}
