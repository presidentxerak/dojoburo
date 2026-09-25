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
import { enrichmentOf, type Enrichment } from '../data/enrich'
import { deepeningOf, type Deepening } from '../data/deep'
import type { Quiz as QuizData } from '../data/curriculum'
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
  // L'APPROFONDISSEMENT · voir data/enrich. Un dojo qui n'a pas encore le
  // sien s'affiche avec son squelette ; scripts/test-enrich empêche qu'il y en
  // ait un en production.
  const deep = enrichmentOf(module.id, level.id)
  // LA COUCHE PÉDAGOGIQUE · voir data/deep : l'essentiel, les notions, un
  // exemple guidé, les erreurs fréquentes, la synthèse.
  const more = deepeningOf(module.id, level.id)
  const extra = [...(deep?.more ?? []), ...(more?.more ?? [])]

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
            {more && (
              <section className="ln-block ln-essential">
                <h2 className="ln-h2">{t('ln.essential')}</h2>
                <p>{say(more.intro, lang)}</p>
              </section>
            )}

            <section className="ln-act">
              <span className="ln-k">{t('g.youDo')}</span>
              <p>{say(level.act, lang)}</p>
            </section>

            {more && <Concepts d={more} />}

            {deep && <Why e={deep} />}

            <section className="ln-block">
              <h2 className="ln-h2">{t('ln.steps')}</h2>
              <ol className="ln-steps">
                {level.steps.map((s, n) => (
                  <li key={s.en}><span>{n + 1}</span>{say(s, lang)}</li>
                ))}
              </ol>
            </section>

            {more && <Walkthrough d={more} />}

            {deep && <Example e={deep} />}

            {more && <Mistakes d={more} />}

            <section className="ln-trap">
              <span className="ln-k">{t('g.trap')}</span>
              <p>{say(level.trap, lang)}</p>
            </section>

            {deep && <Exercise key={`ex-${pack.id}/${level.id}`} e={deep} />}

            {more && <Recap d={more} />}

            <section className="ln-block">
              <h2 className="ln-h2">{t('ac.check')}</h2>
              <Quiz key={`${pack.id}/${level.id}`} packId={pack.id} levelId={level.id} n={1} of={1 + extra.length} />
              {extra.map((q, k) => (
                <QuizCard key={`${pack.id}/${level.id}#${k}`} q={q} n={k + 2} of={1 + extra.length} />
              ))}
            </section>

            <section className="ln-end">
              <button
                className={`cc-btn ln-claim${done ? ' on' : ''}`}
                onClick={() => (done ? clearDone(module.id, level.id) : markDone(module.id, level.id))}
              >
                {done
                  ? <><BauhausIcon name="check" size={13} /> {say(level.badge, lang)}</>
                  // LE NOM DU BADGE ENTRE GUILLEMETS · « Parle la langue » décrit ce que
                  // l'élève a acquis ; collé au bouton, il se lisait comme un ordre.
                  : <>{t('g.claim')} {lang === 'fr' ? `« ${say(level.badge, lang)} »` : `“${say(level.badge, lang)}”`}</>}
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
            <b><BauhausIcon name="lock" size={16} /> {t('gm.lockTitle')}</b>
            <p>{t('gm.lockBody')}</p>
            <Lnk className="gm-cta" href="/tarifs">
              {priceTag(eurOf(pack))} · {t('g.seePrices')} →
            </Lnk>
          </div>
        )}
      </article>
    </Shell>
  )
}

/* ------------------------------------------------------------------ */

/** La question du dojo · elle se corrige seule et ne se rejoue pas dans la
 *  foulée, et sa réponse est enregistrée avec la progression.
 *
 *  POURQUOI ELLE NE SE REJOUE PAS : une question qu'on peut retenter jusqu'à
 *  tomber juste ne vérifie rien, elle mesure la patience. La réponse est
 *  enregistrée, l'explication s'affiche, et on passe. */
function Quiz({ packId, levelId, n, of }: { packId: string; levelId: string; n: number; of: number }) {
  const found = findLesson(packId, levelId)!
  const saved = useGame().answerFor(found.module.id, levelId)
  return (
    <QuizCard q={found.level.quiz} n={n} of={of} saved={saved}
      onPick={(k) => recordAnswer(found.module.id, levelId, k)} />
  )
}

/** Une question · la carte elle-même. Les questions d'approfondissement ne
 *  sont pas enregistrées : elles vérifient, elles ne comptent pas. */
function QuizCard({ q, n, of, saved, onPick }: {
  q: QuizData
  n: number
  of: number
  saved?: number
  onPick?: (k: number) => void
}) {
  const lang = useLang()
  const t = useT()
  const [pick, setPick] = useState<number | undefined>(saved)
  const answered = pick !== undefined
  const right = pick === q.answer

  return (
    <div className="ln-quiz">
      <span className="ln-k">{t('ln.q')} {n} / {of}</span>
      <h3>{say(q.q, lang)}</h3>
      <div className="ln-opts">
        {q.options.map((o, k) => {
          const state = !answered ? '' : k === q.answer ? ' right' : k === pick ? ' wrong' : ' dim'
          return (
            <button
              key={o.en}
              className={`ln-opt${state}`}
              disabled={answered}
              onClick={() => { setPick(k); onPick?.(k) }}
            >
              <span className="ln-opt-k" aria-hidden>
                {answered && k === q.answer ? <BauhausIcon name="check" size={12} />
                  : answered && k === pick ? <BauhausIcon name="cross" size={12} />
                  : String.fromCharCode(65 + k)}
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
    </div>
  )
}

/* ------------------------------------------------------------------ */

/** LES NOTIONS CLÉS · les mots du sujet, définis avant d'être employés. */
function Concepts({ d }: { d: Deepening }) {
  const lang = useLang()
  const t = useT()
  return (
    <section className="ln-block">
      <h2 className="ln-h2">{t('ln.concepts')}</h2>
      <dl className="ln-dl">
        {d.concepts.map((c) => (
          <div key={c.term.en}>
            <dt>{say(c.term, lang)}</dt>
            <dd>{say(c.def, lang)}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

/** L'EXEMPLE GUIDÉ · un cas réel, déroulé pas à pas, raisonnement compris. */
function Walkthrough({ d }: { d: Deepening }) {
  const lang = useLang()
  const t = useT()
  return (
    <section className="ln-block">
      <h2 className="ln-h2">{t('ln.walk')}</h2>
      <p className="ln-ctx">{say(d.walkthrough.title, lang)}</p>
      <ol className="ln-steps ln-walk">
        {d.walkthrough.steps.map((s, n) => (
          <li key={s.en}><span>{n + 1}</span>{say(s, lang)}</li>
        ))}
      </ol>
    </section>
  )
}

/** LES ERREURS FRÉQUENTES · l'erreur, puis sa correction. */
function Mistakes({ d }: { d: Deepening }) {
  const lang = useLang()
  const t = useT()
  return (
    <section className="ln-block">
      <h2 className="ln-h2">{t('ln.mistakes')}</h2>
      <ul className="ln-mis">
        {d.mistakes.map((m) => (
          <li key={m.wrong.en}>
            <p className="ln-wrong"><b>{t('ln.wrong')}</b> {say(m.wrong, lang)}</p>
            <p className="ln-fix"><b>{t('ln.fix')}</b> {say(m.fix, lang)}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

/** À RETENIR · la synthèse, puis une piste pour aller plus loin. */
function Recap({ d }: { d: Deepening }) {
  const lang = useLang()
  const t = useT()
  return (
    <section className="ln-block ln-recap">
      <h2 className="ln-h2">{t('ln.recap')}</h2>
      <ul>
        {d.recap.map((r) => <li key={r.en}>{say(r, lang)}</li>)}
      </ul>
      <p className="ln-further"><b>{t('ln.further')}</b> {say(d.further, lang)}</p>
    </section>
  )
}

/** POURQUOI ÇA MARCHE · le mécanisme, avant les gestes. Savoir pourquoi un
 *  geste marche, c'est savoir quand il ne marchera pas. */
function Why({ e }: { e: Enrichment }) {
  const lang = useLang()
  const t = useT()
  return (
    <section className="ln-block ln-whyb">
      <h2 className="ln-h2">{t('ln.why')}</h2>
      {e.why.map((p) => <p key={p.en}>{say(p, lang)}</p>)}
    </section>
  )
}

/** L'AVANT / APRÈS · la même demande, ratée puis réparée. C'est là qu'on voit
 *  la technique, plus que dans n'importe quelle explication. */
function Example({ e }: { e: Enrichment }) {
  const lang = useLang()
  const t = useT()
  const x = e.example
  return (
    <section className="ln-block">
      <h2 className="ln-h2">{t('ln.example')}</h2>
      <p className="ln-ctx">{say(x.context, lang)}</p>
      <div className="ln-ba">
        <figure className="ln-pr before">
          <figcaption>{t('ln.before')}</figcaption>
          <pre>{say(x.before, lang)}</pre>
        </figure>
        <figure className="ln-pr after">
          <figcaption>{t('ln.after')}</figcaption>
          <pre>{say(x.after, lang)}</pre>
        </figure>
      </div>
      <p className="ln-take">{say(x.takeaway, lang)}</p>
    </section>
  )
}

/** À TOI DE JOUER · l'exercice se fait dans son propre outil, sur son propre
 *  travail. Le prompt se copie d'un geste, les [CHAMPS] sont à remplacer, et
 *  la liste sert à se corriger soi-même. Les cases cochées ne sont pas
 *  enregistrées : c'est un brouillon de relecture, pas un examen. */
function Exercise({ e }: { e: Enrichment }) {
  const lang = useLang()
  const t = useT()
  const x = e.exercise
  const [copied, setCopied] = useState(false)
  const [ticks, setTicks] = useState<boolean[]>(() => x.check.map(() => false))
  const text = say(x.prompt, lang)
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1800) } catch { /* presse-papiers refusé · le texte reste sélectionnable */ }
  }
  return (
    <section className="ln-ex">
      <span className="ln-k">{t('ln.exercise')}</span>
      <p className="ln-goal"><b>{t('ln.goal')}</b> {say(x.goal, lang)}</p>
      <div className="ln-code">
        <pre>{text}</pre>
        <button className="cc-btn cc-violet ln-copy" onClick={copy}>
          {copied ? <><BauhausIcon name="check" size={13} /> {t('ln.copied')}</> : t('ln.copy')}
        </button>
      </div>
      <h3 className="ln-h3">{t('ln.checkH')}</h3>
      <ul className="ln-checks">
        {x.check.map((c, k) => (
          <li key={c.en}>
            <label>
              <input type="checkbox" checked={ticks[k]} onChange={() => setTicks((v) => v.map((b, j) => (j === k ? !b : b)))} />
              <span>{say(c, lang)}</span>
            </label>
          </li>
        ))}
      </ul>
      <p className="ln-bonus"><b>{t('ln.bonus')}</b> {say(x.bonus, lang)}</p>
    </section>
  )
}
