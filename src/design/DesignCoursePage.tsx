// LA PAGE D'UN COURS DE DESIGN · une seule, pour les deux cours.
//
// POURQUOI UNE SEULE PAGE. Deux cours de même forme méritent deux fichiers de
// CONTENU, pas deux composants. Un second composant copié depuis le premier
// diverge au premier réglage : on corrige l'espacement d'un côté, on oublie
// l'autre, et six mois plus tard les deux cours d'un même centre de formation
// ne se ressemblent plus. C'est le même raisonnement que le pied de page
// unique, qui existait en six exemplaires contradictoires.
//
// CE QUE CETTE PAGE REND, ET DANS CET ORDRE. L'ordre est le cours :
//
//   POUR QUI · dit en premier, parce que quelqu'un qui n'est pas le public
//     doit pouvoir repartir en dix secondes plutôt qu'en vingt minutes.
//   CE QUE C'EST · la phrase sans jargon, puis la comparaison.
//   LES MOTS · définis AVANT de s'en servir. Un cours de design pour qui n'en
//     a jamais fait et qui emploie « hiérarchie » sans le définir a perdu son
//     lecteur à la troisième ligne sans le savoir.
//   CE QU'ON FAIT · des gestes.
//   LE PIÈGE · nommé. Un cours qui ne dit que la bonne façon apprend à la
//     reconnaître ; nommer la mauvaise apprend à l'éviter.
//   LE TEST · un critère vérifiable seul, parce que ce public n'a pas d'avis
//     et n'en aura pas avant longtemps. Un test, lui, s'applique tout de suite.
import { useState } from 'react'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { SupportBot } from '../components/SupportBot'
import { BauhausIcon } from '../components/BauhausIcon'
import { useHeadTags } from '../lib/headTags'
import { markDone, clearDone, useProgress } from '../academy/progress'
import { DESIGN_TRACK, type DesignCourse, type DesignLesson } from '../data/designCourses'
import { useLang, useT, pick } from '../i18n'
import type { Lang } from '../i18n'

function Lesson({ l, n, courseId, lang }: { l: DesignLesson; n: number; courseId: string; lang: Lang }) {
  const progress = useProgress()
  const key = `${courseId}/${l.id}`
  const done = progress.isDone(DESIGN_TRACK, key)
  const t = useT()
  const [open, setOpen] = useState(n === 1)

  return (
    <article className={`dc-lesson${open ? ' on' : ''}${done ? ' done' : ''}`}>
      <button className="dc-head" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        <span className="dc-n">{String(n).padStart(2, '0')}</span>
        <b>{pick(l.title, lang)}</b>
        <BauhausIcon name={open ? 'cross' : 'play'} size={13} />
      </button>

      {open && (
        <div className="dc-body">
          <p className="dc-plain">{pick(l.plain, lang)}</p>

          <blockquote className="ag-like">
            <span className="ag-like-k">{t('dc.like')}</span>
            {pick(l.like, lang)}
          </blockquote>

          {/* LES MOTS AVANT LEUR EMPLOI · voir l'en-tête. */}
          <div className="dc-words">
            <h4><BauhausIcon name="pen" size={15} /> {t('dc.words')}</h4>
            <dl>
              {l.words.map((w) => (
                <div key={w.term.en}>
                  <dt>{pick(w.term, lang)}</dt>
                  <dd>{pick(w.means, lang)}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="dc-steps">
            <h4><BauhausIcon name="bars" size={15} /> {t('dc.steps')}</h4>
            <ol>
              {l.steps.map((s, i) => (
                <li key={s.en}><span className="dc-step-n">{i + 1}</span>{pick(s, lang)}</li>
              ))}
            </ol>
          </div>

          <div className="dc-two">
            <div className="dc-trap">
              <span className="ice-k">{t('dc.trap')}</span>
              <p>{pick(l.trap, lang)}</p>
            </div>
            <div className="dc-check">
              <span className="ice-k">{t('dc.check')}</span>
              <p>{pick(l.check, lang)}</p>
            </div>
          </div>

          {/* CE QU'ON COCHE est « je l'ai appliqué », jamais « je l'ai lu ».
              Lire une leçon de design ne coûte rien et n'apprend rien · c'est
              la règle déjà retenue pour les leviers de sobriété. */}
          <button
            className={`dc-tick${done ? ' on' : ''}`}
            aria-pressed={done}
            onClick={() => (done ? clearDone(DESIGN_TRACK, key) : markDone(DESIGN_TRACK, key))}
          >
            <BauhausIcon name={done ? 'check' : 'box'} size={13} />
            {done ? t('dc.applied') : t('dc.markApplied')}
          </button>
        </div>
      )}
    </article>
  )
}

export function DesignCoursePage({ course }: { course: DesignCourse }) {
  const lang = useLang()
  const t = useT()
  const progress = useProgress()
  const done = course.lessons.filter((l) => progress.isDone(DESIGN_TRACK, `${course.id}/${l.id}`)).length

  useHeadTags({
    title: pick(course.title, lang),
    description: `${pick(course.forWho, lang)} ${pick(course.promise, lang)}`,
    path: course.path,
    keywords: course.id === 'figma'
      ? ['figma tutorial', 'figma for beginners', 'auto layout', 'design system', 'figma variables']
      : ['design with ai', 'ai design', 'design brief', 'design system', 'design for non designers'],
  })

  return (
    <div className="landing dg2 ac dc">
      <SiteHeader />

      <section className="lp-sec ac-hero">
        {/* POUR QUI, EN PREMIER · voir l'en-tête. Une page de cours qui ne dit
            pas à qui elle parle fait perdre vingt minutes à ceux qu'elle ne
            vise pas, et c'est le moment où ils décident que le site n'est pas
            pour eux. */}
        <span className="lp-pill">{pick(course.forWho, lang)}</span>
        <h1>{pick(course.title, lang)}</h1>
        <p className="lp-lead">{pick(course.promise, lang)}</p>
        <div className="dc-prog">
          <span className="ag-prog-bar"><i style={{ width: `${(done / course.lessons.length) * 100}%` }} /></span>
          <b>{done} {t('dc.of')} {course.lessons.length}</b>
        </div>
      </section>

      <section className="lp-sec alt">
        <div className="dc-list">
          {course.lessons.map((l, i) => (
            <Lesson key={l.id} l={l} n={i + 1} courseId={course.id} lang={lang} />
          ))}
        </div>
      </section>

      {/* AUCUN CHEMIN DE MENU, ET ON DIT POURQUOI · quelqu'un venu chercher
          « où est le bouton » doit comprendre que l'absence est un choix,
          pas un oubli. C'est la même note que sur la page des frameworks. */}
      <section className="lp-sec dc-note">
        <h2>{t('dc.noClicksH2')}</h2>
        <p className="lp-lead">{t('dc.noClicksBody')}</p>
      </section>

      <SiteFooter />
      <SupportBot />
    </div>
  )
}
