// LE MAÎTRE, SUR LES TROIS PAGES.
//
// Il ne tenait la progression que dans le dojo. Les deux autres cours se
// suivaient tout seuls, sans que personne dise où on en était, et un élève qui
// finit une leçon de prompt engineering n'avait aucune raison de croire que
// quelqu'un le comptait. Un professeur qui ne regarde qu'un tiers de vos
// travaux n'est pas votre professeur.
//
// Le même bloc apparaît donc au même endroit sur /build, /academy et
// /frugality : les trois cours, ce qu'il reste, et UNE phrase qui dit où aller
// ensuite. Pas de félicitations, pas de score : un tableau qui commente ce qui
// est fait est un tableau de bord, et on cherche un professeur.
import { COURSES, PILLAR_BY_ID } from '../data/positioning'
import { BauhausIcon } from '../components/BauhausIcon'
import { useProgress } from '../academy/progress'
import { masterAdvice } from './masterProgress'
import { DIPLOMAS, diplomaFor } from './diplomas'
import { GRADES, gradeFor, BADGES, AGENT_BADGES, badgesFor } from './grades'
import { USE_CASES } from '../data/agentUseCases'
import { AGENT_TRACK } from './masterProgress'

export function MasterPanel({ here }: {
  /** le cours qu'on est en train de suivre · il est mis en avant, et son lien
   *  ne renvoie pas vers la page où l'on se trouve déjà */
  here?: 'build' | 'academy' | 'eco'
}) {
  const p = useProgress()
  const courses = p.courses
  const dip = diplomaFor(courses)
  const advice = masterAdvice(courses)
  // Les agents TERMINÉS, par identifiant · les badges d'agent en ont besoin
  // nommément, pas seulement d'un compte.
  const built = USE_CASES.filter((u) => u.steps.every((_, i) => p.isDone(AGENT_TRACK, `${u.id}/${i}`))).map((u) => u.id)
  const grade = gradeFor(built.length)
  const badges = badgesFor(courses, built)

  return (
    <section className="lp-sec alt mp">
      <span className="lp-pill">Your teacher keeps the count</span>
      <h2>Where you are, across the {COURSES.length} courses</h2>
      <p className="mp-says">{advice}</p>

      <div className="mp-courses">
        {courses.map((c) => {
          const pillar = PILLAR_BY_ID[c.id]
          const Body = (
            <>
              <span className="mp-c-top">
                <BauhausIcon name={pillar.glyph} size={18} />
                <b>{pillar.nav}</b>
                <i>{c.done} / {c.total} {c.unit[c.done === 1 ? 0 : 1]}</i>
              </span>
              {/* La barre est en pourcentage BORNÉ · elle a dépassé cent
                  pendant tout un lot, parce que deux cours écrivaient dans le
                  même compteur. Voir masterProgress. */}
              <span className="mp-bar"><i style={{ width: `${c.percent}%` }} /></span>
            </>
          )
          return c.id === here
            ? <div className="mp-c on" key={c.id}>{Body}<em>you are here</em></div>
            : <a className="mp-c" key={c.id} href={pillar.path}>{Body}<em>Open {pillar.nav} →</em></a>
        })}
      </div>

      {/* LE GRADE · une ceinture, et ce qu'il reste pour la suivante. Elle ne
          se donne pas au temps passé : chaque cran demande des parcours
          ENTIERS, ce qui est beaucoup plus rare que des étapes. */}
      <div className="mp-belt" style={{ ['--bt' as string]: grade.now.tint }}>
        <span className="mp-belt-r" />
        <div>
          <b>{grade.now.title}</b>
          <span>{grade.now.means}</span>
          {grade.next && (
            <em>{grade.toGo} more {grade.toGo === 1 ? 'agent' : 'agents'} for the {grade.next.title.toLowerCase()}.</em>
          )}
        </div>
      </div>

      {/* L'ÉCHELLE ENTIÈRE · on voit où l'on va, pas seulement où l'on est. Un
          grade affiché seul ne dit pas s'il en reste un ou cinq. */}
      <ol className="mp-ladder">
        {GRADES.map((g) => (
          <li key={g.id} className={g.id === grade.now.id ? 'on' : built.length >= g.agents ? 'past' : ''}>
            <i style={{ ['--bt' as string]: g.tint }} />
            <b>{g.title.replace(' belt', '')}</b>
            <span>{g.agents === 0 ? 'to start' : `${g.agents} agents`}</span>
          </li>
        ))}
      </ol>

      {/* LES BADGES · un par chose fabriquée. Ceux des agents sont dérivés des
          cas d'usage : écrire douze entrées à la main pour répéter un nom déjà
          écrit ailleurs, c'est douze occasions de diverger. */}
      <h3 className="mp-h3">Badges</h3>
      <div className="mp-badges">
        {[...BADGES, ...AGENT_BADGES].map((b) => {
          const got = badges.earned.includes(b.id)
          return (
            <div className={`mp-badge${got ? ' on' : ''}`} key={b.id} title={b.how}>
              <BauhausIcon name={b.icon} size={16} />
              <b>{b.title}</b>
              <span>{b.how}</span>
            </div>
          )
        })}
      </div>

      <h3 className="mp-h3">Diplomas</h3>
      <div className="mp-dips">
        {DIPLOMAS.map((d) => {
          const got = dip.earned.includes(d.id)
          return (
            <div className={`mp-dip${got ? ' on' : ''}`} key={d.id}>
              <BauhausIcon name={got ? 'check' : 'dot'} size={14} />
              <b>{d.title}</b>
              <span>{got ? d.awarded : d.how}</span>
            </div>
          )
        })}
      </div>
      {dip.next && <p className="mp-next"><b>Next: {dip.next.title}.</b> {dip.toGo}</p>}
      <p className="mp-small">
        These are progress markers, not certificates. Nobody sells them, nobody verifies them, and no employer
        has heard of them. They exist so you can tell a course you finished from one you started.
      </p>
    </section>
  )
}
