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
//
// « La suite » est en premier parce que c'est la seule chose actionnable. Un
// tableau de bord qui commence par un bilan demande de lire avant de pouvoir
// agir, et la plupart des gens referment avant.
import { BauhausIcon } from '../components/BauhausIcon'
import { useProgress } from '../academy/progress'
import { readLearning } from './learning'
import { PILLAR_BY_ID } from '../data/positioning'
import { USE_CASE_COUNT } from '../data/agentUseCases'

export function LearningPanel() {
  const p = useProgress()
  const L = readLearning(p.doneKeys)

  return (
    <div className="lrn">
      {/* 1 · LA SUITE · la seule chose actionnable, donc la première. */}
      <section className="lrn-next">
        {L.nextStep ? (
          <>
            <span className="lrn-k">Pick up where you stopped</span>
            <h3>{L.nextStep.title}</h3>
            <p>Step {L.nextStep.index + 1} of {L.nextStep.name}.</p>
            <a className="lrn-go" href={`/build/${L.nextStep.useCase}`}>
              <BauhausIcon name="play" size={13} /> Continue
            </a>
          </>
        ) : (
          <>
            <span className="lrn-k">Nothing left in this room</span>
            <h3>Every agent here is built</h3>
            <p>Go and build the one this dojo did not cover.</p>
          </>
        )}
        <p className="lrn-says"><b>The master.</b> {L.advice}</p>
      </section>

      {/* 2 · LA CEINTURE · elle compte des parcours entiers, jamais des
          étapes. Le panneau le dit, parce qu'une barre qui ne bouge pas après
          une étape cochée ressemble sinon à un bug. */}
      <section className="lrn-sec">
        <h4>Your belt</h4>
        <div className="lrn-belt" style={{ ['--bt' as string]: L.grade.tint }}>
          <span className="lrn-belt-r" />
          <div>
            <b>{L.grade.title}</b>
            <span>{L.grade.means}</span>
            {L.nextGrade && (
              <em>
                {L.toNextGrade} more {L.toNextGrade === 1 ? 'agent' : 'agents'} finished end to end
                for the {L.nextGrade.title.toLowerCase()}. Belts count finished agents, never steps.
              </em>
            )}
          </div>
        </div>
      </section>

      {/* 3 · LES TROIS COURS · un seul compteur les sépare, voir
          masterProgress. */}
      <section className="lrn-sec">
        <h4>Your {L.courses.length} courses</h4>
        <div className="lrn-courses">
          {L.courses.map((c) => {
            const pill = PILLAR_BY_ID[c.id]
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

      {/* 4 · CE QUI EST GAGNÉ. */}
      <section className="lrn-sec">
        <h4>What you have earned</h4>
        {L.earned.length === 0 ? (
          <p className="lrn-empty">
            Nothing yet, and nothing is given for showing up. Finish one step and the first badge is yours.
            {' '}<a href="/build#certification">How the certification works</a>.
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
            <b>Next diploma: {L.nextDiploma.title}.</b> {L.toGo}
          </p>
        )}
      </section>

      <p className="lrn-small">
        {USE_CASE_COUNT} agents live in the dojo. Belts, badges and diplomas are progress markers kept in this
        browser. Nobody sells them, nobody verifies them, and no employer has heard of them: they exist so you
        can tell a course you finished from one you started.
      </p>
    </div>
  )
}
