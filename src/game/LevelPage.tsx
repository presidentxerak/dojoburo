// UN DOJO · un maître, une chose à apprendre, une chose à faire, un badge.
//
// ---------------------------------------------------------------------------
// CE QUE CET ÉCRAN N'EST PAS
//
// Ce n'est pas une leçon. Une leçon se lit et on la quitte sans avoir rien
// fait ; c'est ce que l'ancien cours produisait, et c'est pour ça qu'il a
// grossi jusqu'à huit cents mots par page. Un dojo tient en six blocs, et on
// n'en sort qu'en ayant répondu.
//
// L'ORDRE DES BLOCS EST UNE DÉCISION.
//
//   le maître accueille     une phrase, et il dit ce qu'on vient chercher
//   ce qu'on apprend        la promesse, avant l'effort
//   ce qu'on fait           à l'impératif, et c'est le coeur
//   les gestes              trois ou quatre, numérotés
//   le piège                nommé, parce que dire la bonne façon n'apprend
//                           pas à éviter la mauvaise
//   la question             elle ferme le niveau et donne le badge
//
// LA QUESTION EST APRÈS LES GESTES, jamais avant. Répondre sur ce qu'on n'a pas
// encore essayé, c'est réciter.
import { useState } from 'react'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { SupportBot } from '../components/SupportBot'
import { BauhausIcon } from '../components/BauhausIcon'
import { Lnk } from '../lib/router'
import { useHeadTags } from '../lib/headTags'
import { useLang, useT } from '../i18n'
import { say, findLevel, modulePath, levelPath, moduleNumber } from '../data/curriculum'
import { USE_CASE_BY_ID, useCaseIn } from '../data/agentUseCases'
import { useGame, markDone, clearDone, recordAnswer } from './progress'
import { useAccess } from './access'
import { DojoRoom } from './DojoRoom'
import { Gate } from './Gate'
import { mapOf, mapKey } from './nav'

export function LevelPage({ moduleId, levelId }: { moduleId: string; levelId: string }) {
  const lang = useLang()
  const t = useT()
  const g = useGame()
  const a = useAccess()
  const found = findLevel(moduleId, levelId)

  useHeadTags({
    title: found ? `${say(found.level.title, lang)} · DojoBuro` : `${t('g.noLevel')} · DojoBuro`,
    description: found ? say(found.level.learn, lang) : t('g.noLevelBody'),
    path: levelPath(moduleId, levelId),
  })

  if (!found) {
    return (
      <div className="landing dg2 ac">
        <SiteHeader />
        <section className="lp-sec">
          <h2>{t('g.noLevel')}</h2>
          <p className="lp-lead">{t('g.noLevelBody')}</p>
          <p><Lnk className="lp-ghost" href="/formation">← {t('g.backMap')}</Lnk></p>
        </section>
        <SiteFooter />
      </div>
    )
  }

  const { module, level } = found
  const done = g.isDone(module.id, level.id)
  const i = module.levels.findIndex((l) => l.id === level.id)
  const next = module.levels[i + 1] ?? null
  const master = USE_CASE_BY_ID[level.master]
  const masterName = master ? useCaseIn(master, lang).name : level.master
  const open = a.canOpenLevel(module, level.id)
  const first = module.levels[0]?.id === level.id

  // CE QUI EST FERMÉ MONTRE QUAND MÊME LA SALLE ET LA PROMESSE · un écran qui
  // ne montre qu'un cadenas ne dit pas ce qu'on rate, donc il ne donne aucune
  // raison d'ouvrir. On voit le maître, on lit ce qu'on apprendrait, et le
  // panneau dit ce qu'il faut pour entrer.
  if (!open) {
    return (
      <div className="landing dg2 ac lv" style={{ ['--ac' as string]: module.tint }}>
        <SiteHeader />
        <DojoRoom master={level.master} tint={module.tint} says={say(level.learn, lang)} />
        <article className="lv-body">
          <nav className="lv-crumbs">
            <Lnk href={mapOf(module)}>{t(mapKey(module))}</Lnk>
            <i aria-hidden>›</i>
            <Lnk href={modulePath(module.id)}>{say(module.title, lang)}</Lnk>
          </nav>
          <header className="lv-head">
            <span className="lv-n">{t('g.dojo')} {i + 1} / {module.levels.length}</span>
            <h1>{say(level.title, lang)}</h1>
            <p className="lv-learn">{say(level.learn, lang)}</p>
          </header>
          <Gate module={module} />
        </article>
        <SiteFooter />
        <SupportBot />
      </div>
    )
  }

  return (
    <div className="landing dg2 ac lv" style={{ ['--ac' as string]: module.tint }}>
      <SiteHeader />

      {/* LE DOJO, EN HAUT ET EN ENTIER · le maître y est, et on le voit avant
          de lire quoi que ce soit. C'est ce qui distingue un dojo d'une page. */}
      <DojoRoom master={level.master} tint={module.tint} says={say(level.act, lang)} />

      <article className="lv-body">
        <nav className="lv-crumbs">
          <Lnk href={mapOf(module)}>{t(mapKey(module))}</Lnk>
          <i aria-hidden>›</i>
          <Lnk href={modulePath(module.id)}>{say(module.title, lang)}</Lnk>
        </nav>

        <header className="lv-head">
          <span className="lv-n">
            {t('g.dojo')} {i + 1} / {module.levels.length}
            {/* LE PREMIER DOJO EST OFFERT, ET ON LE DIT · quelqu'un qui lit un
                cours sans savoir qu'il est en train d'essayer ne sait pas non
                plus qu'il y a une suite. */}
            {first && !a.canOpen(module) && <b className="lv-free"> · {t('g.freeFirst')}</b>}
          </span>
          <h1>{say(level.title, lang)}</h1>
          <p className="lv-learn">{say(level.learn, lang)}</p>
          <div className="lv-meta">
            <span>{level.minutes} {t('ac.min')}</span>
            <span>{t('g.master')} {masterName}</span>
            {done && <span className="lv-ok"><BauhausIcon name="check" size={12} /> {t('ac.isDone')}</span>}
          </div>
        </header>

        <section className="lv-act">
          <span className="lv-k">{t('g.youDo')}</span>
          <p>{say(level.act, lang)}</p>
        </section>

        <ol className="lv-steps">
          {level.steps.map((s, n) => (
            <li key={s.en}><span className="lv-step-n">{n + 1}</span>{say(s, lang)}</li>
          ))}
        </ol>

        <section className="lv-trap">
          <span className="lv-k">{t('g.trap')}</span>
          <p>{say(level.trap, lang)}</p>
        </section>

        <Quiz key={`${module.id}/${level.id}`} moduleId={module.id} levelId={level.id} />

        <section className="lv-end">
          <button
            className={`lv-done${done ? ' on' : ''}`}
            onClick={() => (done ? clearDone(module.id, level.id) : markDone(module.id, level.id))}
          >
            {done
              ? <><BauhausIcon name="check" size={13} /> {t('g.badgeGot')} {say(level.badge, lang)}</>
              : <>{t('g.claim')} {say(level.badge, lang)}</>}
          </button>
          {next
            ? <Lnk className="lp-cta sm" href={levelPath(module.id, next.id)}>{say(next.title, lang)} →</Lnk>
            : <Lnk className="lp-cta sm" href={modulePath(module.id)}>{t('g.cityDone')} →</Lnk>}
        </section>

        {/* REFAIRE N'IMPORTE QUAND · c'est une promesse de la formule payante,
            donc elle doit être visible depuis le dojo et pas seulement depuis
            le profil. Un cours qu'on ne peut pas refaire est un cours qu'on
            n'ose pas commencer. */}
        <p className="lv-replay">{t('g.replay')} · {t('g.city')} {moduleNumber(module.id) || ''} {say(module.title, lang)}</p>
      </article>

      <SiteFooter />
      <SupportBot />
    </div>
  )
}

/* ------------------------------------------------------------------ */

/** La question · elle se corrige seule et ne se rejoue pas dans la foulée.
 *
 *  POURQUOI ELLE NE SE REJOUE PAS : une question qu'on peut retenter jusqu'à
 *  tomber juste ne vérifie rien, elle mesure la patience. La réponse est
 *  enregistrée, l'explication s'affiche, et on passe. */
function Quiz({ moduleId, levelId }: { moduleId: string; levelId: string }) {
  const lang = useLang()
  const t = useT()
  const g = useGame()
  const found = findLevel(moduleId, levelId)!
  const q = found.level.quiz
  const saved = g.answerFor(moduleId, levelId)
  const [pick, setPick] = useState<number | undefined>(saved)
  const answered = pick !== undefined
  const right = pick === q.answer

  return (
    <section className="lv-quiz">
      <span className="lv-k">{t('ac.check')}</span>
      <h3>{say(q.q, lang)}</h3>
      <div className="lv-opts">
        {q.options.map((o, n) => {
          const state = !answered ? '' : n === q.answer ? ' right' : n === pick ? ' wrong' : ' dim'
          return (
            <button
              key={o.en}
              className={`lv-opt${state}`}
              disabled={answered}
              onClick={() => { setPick(n); recordAnswer(moduleId, levelId, n) }}
            >
              <span className="lv-opt-k" aria-hidden>
                {answered && n === q.answer ? <BauhausIcon name="check" size={12} />
                  : answered && n === pick ? <BauhausIcon name="cross" size={12} />
                  : String.fromCharCode(65 + n)}
              </span>
              {say(o, lang)}
            </button>
          )
        })}
      </div>
      {answered && (
        <p className={`lv-why${right ? ' right' : ''}`}>
          <b>{right ? t('ac.right') : t('ac.wrong')}</b> {say(q.why, lang)}
        </p>
      )}
    </section>
  )
}
