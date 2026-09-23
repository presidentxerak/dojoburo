// UN DOJO · le maître, une chose à faire, une question, un badge.
//
// ---------------------------------------------------------------------------
// L'ORDRE DES BLOCS EST UNE DÉCISION
//
//   la salle           on voit le maître avant de lire quoi que ce soit
//   ce qu'on apprend   la promesse, avant l'effort
//   ce qu'on fait      à l'impératif, et c'est le coeur
//   les gestes         trois ou quatre, numérotés
//   le piège           nommé · dire la bonne façon n'apprend pas à éviter
//                      la mauvaise
//   la question        elle ferme le dojo et donne le badge
//
// LA QUESTION EST APRÈS LES GESTES, jamais avant. Répondre sur ce qu'on n'a
// pas encore essayé, c'est réciter.
//
// ---------------------------------------------------------------------------
// LA SALLE A MAIGRI, ET C'EST VOULU
//
// Elle prenait quarante-six pour cent de la hauteur de l'écran. Sur un
// téléphone, ça veut dire qu'on ouvre un cours et qu'on voit un décor : il
// faut faire défiler pour trouver la première phrase. Elle occupe maintenant
// une bande, assez pour qu'on voie qui nous attend, assez peu pour que le
// cours commence au-dessus de la ligne de flottaison.
import { useState } from 'react'
import { BauhausIcon } from '../components/BauhausIcon'
import { Lnk } from '../lib/router'
import { useHeadTags } from '../lib/headTags'
import { useLang, useT } from '../i18n'
import { say } from '../data/bilingual'
import { findLesson, lessonPath, packPath, xpOf, eurOf, levelsOf } from '../data/packs'
import { USE_CASE_BY_ID, useCaseIn } from '../data/agentUseCases'
import { priceTag } from '../data/plans'
import { useGame, markDone, clearDone, recordAnswer } from './progress'
import { useAccess } from './access'
import { DojoRoom } from './DojoRoom'
import { Shell } from './Shell'

export function LessonPage({ packId, levelId }: { packId: string; levelId: string }) {
  const lang = useLang()
  const t = useT()
  const g = useGame()
  const a = useAccess()
  const found = findLesson(packId, levelId)

  useHeadTags({
    title: found ? `${say(found.level.title, lang)} · DojoBuro` : `${t('g.noLevel')} · DojoBuro`,
    description: found ? say(found.level.learn, lang) : t('g.noLevelBody'),
    path: lessonPath(packId, levelId),
  })

  if (!found) {
    return (
      <Shell>
        <section className="gm-sec">
          <h1 className="gm-h1">{t('g.noLevel')}</h1>
          <p className="gm-lead">{t('g.noLevelBody')}</p>
          <Lnk className="gm-cta" href="/">{t('gm.backDojos')}</Lnk>
        </section>
      </Shell>
    )
  }

  const { pack, module, level } = found
  const all = levelsOf(pack)
  const i = all.findIndex(({ level: l }) => l.id === level.id)
  const next = all[i + 1] ?? null
  const done = g.isDone(module.id, level.id)
  const master = USE_CASE_BY_ID[level.master]
  const masterName = master ? useCaseIn(master, lang).name : level.master
  // LE PREMIER DOJO DE LA FORMATION EST OFFERT · même règle que la liste, et
  // elle est calculée au même endroit pour ne pas pouvoir la contredire.
  const open = a.opensPack(pack) || i === 0

  return (
    <Shell>
      <DojoRoom master={level.master} tint={module.tint} />

      <article className="ln" style={{ ['--ac' as string]: module.tint }}>
        <Lnk className="gm-back" href={packPath(pack.id)}>← {say(pack.title, lang)}</Lnk>

        <header className="ln-head">
          <span className="ln-n">
            {t('g.dojo')} {i + 1} / {all.length} · {xpOf(level)} XP
            {i === 0 && !a.opensPack(pack) && <b className="ln-free"> · {t('g.freeFirst')}</b>}
          </span>
          <h1>{say(level.title, lang)}</h1>
          <p className="ln-learn">{say(level.learn, lang)}</p>
          <p className="ln-meta">
            {level.minutes} {t('ac.min')} · {t('g.master')} {masterName}
            {done && <> · <span className="ln-ok"><BauhausIcon name="check" size={11} /> {t('ac.isDone')}</span></>}
          </p>
        </header>

        {open ? (
          <>
            <section className="ln-act">
              <span className="ln-k">{t('g.youDo')}</span>
              <p>{say(level.act, lang)}</p>
            </section>

            <ol className="ln-steps">
              {level.steps.map((s, n) => (
                <li key={s.en}><span>{n + 1}</span>{say(s, lang)}</li>
              ))}
            </ol>

            <section className="ln-trap">
              <span className="ln-k">{t('g.trap')}</span>
              <p>{say(level.trap, lang)}</p>
            </section>

            <Quiz key={`${pack.id}/${level.id}`} packId={pack.id} levelId={level.id} />

            <section className="ln-end">
              <button
                className={`ln-claim${done ? ' on' : ''}`}
                onClick={() => (done ? clearDone(module.id, level.id) : markDone(module.id, level.id))}
              >
                {done
                  ? <><BauhausIcon name="check" size={13} /> {say(level.badge, lang)}</>
                  : <>{t('g.claim')} · {say(level.badge, lang)}</>}
              </button>
              {next && (
                <Lnk className="gm-cta" href={lessonPath(pack.id, next.level.id)}>
                  {say(next.level.title, lang)} →
                </Lnk>
              )}
            </section>
          </>
        ) : (
          <div className="pkl">
            <b><BauhausIcon name="box" size={13} /> {t('gm.lockTitle')}</b>
            <p>{t('gm.lockBody')}</p>
            <Lnk className="gm-cta" href="/decouvrir#pricing">
              {priceTag(eurOf(pack))} · {t('g.seePrices')} →
            </Lnk>
          </div>
        )}
      </article>
    </Shell>
  )
}

/* ------------------------------------------------------------------ */

/** La question · elle se corrige seule et ne se rejoue pas dans la foulée.
 *
 *  POURQUOI ELLE NE SE REJOUE PAS : une question qu'on peut retenter jusqu'à
 *  tomber juste ne vérifie rien, elle mesure la patience. La réponse est
 *  enregistrée, l'explication s'affiche, et on passe. */
function Quiz({ packId, levelId }: { packId: string; levelId: string }) {
  const lang = useLang()
  const t = useT()
  const g = useGame()
  const found = findLesson(packId, levelId)!
  const q = found.level.quiz
  const saved = g.answerFor(found.module.id, levelId)
  const [pick, setPick] = useState<number | undefined>(saved)
  const answered = pick !== undefined
  const right = pick === q.answer

  return (
    <section className="ln-quiz">
      <span className="ln-k">{t('ac.check')}</span>
      <h3>{say(q.q, lang)}</h3>
      <div className="ln-opts">
        {q.options.map((o, n) => {
          const state = !answered ? '' : n === q.answer ? ' right' : n === pick ? ' wrong' : ' dim'
          return (
            <button
              key={o.en}
              className={`ln-opt${state}`}
              disabled={answered}
              onClick={() => { setPick(n); recordAnswer(found.module.id, levelId, n) }}
            >
              <span className="ln-opt-k" aria-hidden>
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
        <p className={`ln-why${right ? ' right' : ''}`}>
          <b>{right ? t('ac.right') : t('ac.wrong')}</b> {say(q.why, lang)}
        </p>
      )}
    </section>
  )
}
