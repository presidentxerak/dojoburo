// LE PROFIL DE L'ÉLÈVE, DANS L'APP.
//
// Le menu du compte proposait « My companies », « Your company » et « How hard
// your team works » : l'ancien produit, mot pour mot, dans la surface qu'un
// utilisateur ouvre le plus souvent. Il n'existait nulle part de réponse à la
// seule question qu'on se pose en rouvrant une application de cours : où j'en
// suis, et qu'est-ce que je fais maintenant.
//
// Ce panneau y répond dans cet ordre, et l'ordre compte :
//
//   1 · LA SUITE · un bouton, qui mène à l'étape exacte où l'on s'est arrêté
//   2 · LA CEINTURE · et ce qu'il reste pour la suivante
//   3 · LES TROIS COURS · avec leur barre
//   4 · CE QUI EST GAGNÉ · badges, ceinture, diplômes
//   5 · LES RESSOURCES · un mémo par cours, à emporter
//
// « La suite » est en premier parce que c'est la seule chose actionnable. Un
// tableau de bord qui commence par un bilan demande de lire avant de pouvoir
// agir, et la plupart des gens referment avant.
import { BauhausIcon } from '../components/BauhausIcon'
import { useProgress } from '../academy/progress'
import { readLearning } from './learning'
import { PILLAR_BY_ID, pillarIn } from '../data/positioning'
import { USE_CASE_COUNT } from '../data/agentUseCases'
import { RESOURCES, resourceTitle } from '../data/resources'
import { downloadCoursePdf } from '../lib/coursePdf'
import { useLang, useT } from '../i18n'

export function LearningPanel() {
  const p = useProgress()
  const lang = useLang()
  const t = useT()
  // LA LANGUE ENTRE DANS LA LECTURE, pas après · le profil porte des phrases.
  const L = readLearning(p.doneKeys, lang)

  return (
    <div className="lrn">
      {/* 1 · LA SUITE · la seule chose actionnable, donc la première. */}
      <section className="lrn-next">
        {L.nextStep ? (
          <>
            <span className="lrn-k">{t('lrn.pickUp')}</span>
            <h3>{L.nextStep.title}</h3>
            <p>{t('lrn.step')} {L.nextStep.index + 1} {t('lrn.of')} {L.nextStep.name}.</p>
            <a className="lrn-go" href={`/build/${L.nextStep.useCase}`}>
              <BauhausIcon name="play" size={13} /> {t('lrn.continue')}
            </a>
          </>
        ) : (
          <>
            <span className="lrn-k">{t('lrn.nothingLeft')}</span>
            <h3>{t('lrn.allBuilt')}</h3>
            <p>{t('lrn.goBuild')}</p>
          </>
        )}
        <p className="lrn-says"><b>{t('lrn.master')}</b> {L.advice}</p>
      </section>

      {/* 2 · LA CEINTURE · elle compte des parcours entiers, jamais des
          étapes. Le panneau le dit, parce qu'une barre qui ne bouge pas après
          une étape cochée ressemble sinon à un bug. */}
      <section className="lrn-sec">
        <h4>{t('lrn.yourBelt')}</h4>
        <div className="lrn-belt" style={{ ['--bt' as string]: L.grade.tint }}>
          <span className="lrn-belt-r" />
          <div>
            <b>{L.grade.title}</b>
            <span>{L.grade.means}</span>
            {L.nextGrade && (
              <em>
                {L.toNextGrade} {t('mp.agent' + (L.toNextGrade === 1 ? '' : 's'))} {t('mp.more')} {t('lrn.beltRule')}{' '}
                {L.nextGrade.title.toLowerCase()}. {t('lrn.beltCount')}
              </em>
            )}
          </div>
        </div>
      </section>

      {/* 3 · LES TROIS COURS · un seul compteur les sépare, voir
          masterProgress. */}
      <section className="lrn-sec">
        <h4>{t('lrn.yourCourses')} {L.courses.length} {t('lrn.coursesWord')}</h4>
        <div className="lrn-courses">
          {L.courses.map((c) => {
            const pill = pillarIn(PILLAR_BY_ID[c.id], lang)
            return (
              <a className="lrn-course" key={c.id} href={pill.path}>
                <span className="lrn-course-h">
                  <BauhausIcon name={pill.glyph} size={16} />
                  <b>{pill.nav}</b>
                  <i>{c.done} / {c.total}</i>
                </span>
                <span className="lrn-bar"><i style={{ width: `${c.percent}%` }} /></span>
              </a>
            )
          })}
        </div>
      </section>

      {/* 5 · LES RESSOURCES · placées APRÈS ce qui est gagné, et c'est
          délibéré. Quelqu'un qui ouvre son profil vient voir où il en est,
          pas télécharger. Les mettre plus haut ferait passer un cours pour une
          bibliothèque de fichiers, ce qu'il n'est pas.

          ILS SONT GÉNÉRÉS À LA DEMANDE · rien n'est stocké, donc un mémo ne
          peut pas garder l'ancienne version d'une leçon corrigée. Voir
          data/resources pour le raisonnement complet. */}
      <section className="lrn-sec lrn-res">
        <h4>{t('res.h')}</h4>
        <p className="lrn-res-lead">{t('res.lead')}</p>
        <div className="lrn-res-list">
          {RESOURCES.map((r) => (
            <button key={r.courseId} className="lrn-res-b" onClick={() => downloadCoursePdf(r, lang)}>
              <BauhausIcon name={PILLAR_BY_ID[r.courseId].glyph} size={16} />
              <span>
                <b>{resourceTitle(r, lang)}</b>
                <em>{lang === 'fr' ? r.about.fr : r.about.en}</em>
              </span>
              <i>PDF</i>
            </button>
          ))}
        </div>
      </section>

      {/* 4 · CE QUI EST GAGNÉ. */}
      <section className="lrn-sec">
        <h4>{t('lrn.earnedH')}</h4>
        {L.earned.length === 0 ? (
          <p className="lrn-empty">
            {t('lrn.earnedNone')}
            {' '}<a href="/build#certification">{t('lrn.howCert')}</a>.
          </p>
        ) : (
          <div className="lrn-earned">
            {L.earned.map((e) => (
              <div className={`lrn-e lrn-e-${e.kind}`} key={e.id}>
                <BauhausIcon name={e.icon} size={16} />
                <b>{e.title}</b>
                <span>{e.says}</span>
              </div>
            ))}
          </div>
        )}
        {L.nextDiploma && (
          <p className="lrn-togo">
            <b>{t('lrn.nextDiploma')} {L.nextDiploma.title}.</b> {L.toGo}
          </p>
        )}
      </section>

      <p className="lrn-small">{USE_CASE_COUNT} {t('lrn.small')}</p>
    </div>
  )
}
