// LA FICHE D'UN AGENT · plein écran, et écrite pour quelqu'un qui débute.
//
// Elle tenait sur un bout de page sous la salle : la difficulté, quatre titres
// d'étape, et un brouillon à exporter. Pour qui sait déjà, c'est un aide
// mémoire suffisant. Pour qui débute, c'est une liste de choses à faire dont
// aucune n'est expliquée, et la page se referme.
//
// CE QU'ELLE PORTE MAINTENANT, dans cet ordre, et l'ordre est le cours :
//
//   1 · CE QUE C'EST · une phrase sans jargon, une comparaison connue, ce
//       qu'il faut avoir sous la main, et les trois mots qu'on va employer
//   2 · POURQUOI C'EST DUR · nommé, parce que c'est la raison d'avoir douze
//       parcours au lieu d'un cours général
//   3 · LES QUATRE ÉTAPES · chacune avec une scène animée qui montre le
//       geste, pourquoi elle existe, les gestes concrets, et un exemple RATÉ
//       à côté du même RÉUSSI
//   4 · L'AGENT · éditable, exportable en cinq formats
//
// L'EXEMPLE RATÉ EST LA PARTIE QUI APPREND. Montrer une bonne réponse enseigne
// à la reconnaître ; la mettre à côté de la mauvaise enseigne à la produire.
// C'est la partie que les cours sautent parce qu'elle demande d'écrire deux
// fois plus.
//
// LE MAÎTRE DONNE QUELQUE CHOSE À CHAQUE ÉTAPE. Pas une félicitation : une
// phrase qui dit ce qu'on vient d'acquérir. Une récompense qui ne nomme rien
// est un bruit, et on cesse de la lire à la deuxième.
import { useEffect, useMemo, useState } from 'react'
import { BauhausIcon } from '../components/BauhausIcon'
import { StepStage } from './StepStage'
import { lessonFor } from '../data/agentLessons'
import { type UseCase } from '../data/agentUseCases'
import { markDone, clearDone, useProgress } from '../academy/progress'
import { AGENT_TRACK } from './masterProgress'
import { gradeFor } from './grades'
import { FORMATS, render, downloadAgent, copyAgent, type BuiltAgent, type ExportFormat } from '../lib/agentExport'
import { estimateTokens } from '../agents/sandbox'

/** Le brouillon de départ · écrit depuis le cas d'usage. Ce n'est pas un
 *  modèle vide : une page blanche est la raison numéro un pour laquelle
 *  personne ne finit un exercice. C'est un brouillon DÉJÀ FAUX par endroits,
 *  que le parcours apprend à corriger. */
function scaffold(u: UseCase): BuiltAgent {
  return {
    slug: `${u.id}-agent`,
    name: u.name,
    shape: u.shape,
    system: [
      `You are ${u.name}.`,
      '',
      `Your job: ${u.does}`,
      '',
      '## Never',
      '- Never state something you cannot point at.',
      '- Never fill a gap with something plausible.',
      '',
      '## Always',
      ...u.steps.map((s) => `- ${s.makes.charAt(0).toUpperCase()}${s.makes.slice(1)}.`),
      '',
      '## When you cannot',
      'Say so, and say what you would need. Do not produce a best guess dressed as an answer.',
    ].join('\n'),
    tools: [],
    notes: '',
  }
}

export function AgentCard({ u, onClose }: { u: UseCase; onClose: () => void }) {
  const lesson = lessonFor(u.id)
  const progress = useProgress()
  const [draft, setDraft] = useState<BuiltAgent>(() => scaffold(u))
  const [fmt, setFmt] = useState<ExportFormat>('brief')
  const [copied, setCopied] = useState(false)
  /** l'étape qu'on vient de valider · elle fait apparaître la récompense */
  const [justDone, setJustDone] = useState<number | null>(null)

  // Changer d'agent remet le brouillon à son point de départ. Garder le
  // précédent donnerait la consigne d'un agent de recherche sous le nom d'un
  // agent de tri, ce qui est la façon la plus discrète de tout casser.
  useEffect(() => { setDraft(scaffold(u)); setJustDone(null) }, [u.id])

  // Échap ferme la fiche · c'est le geste que tout le monde essaie en premier
  // devant une surface plein écran, et ne pas le servir donne l'impression
  // d'être coincé.
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [onClose])

  const stepDone = (i: number) => progress.isDone(AGENT_TRACK, `${u.id}/${i}`)
  const done = u.steps.filter((_, i) => stepDone(i)).length
  const total = u.steps.length
  const finished = done === total
  const built = useMemo(() => progress.courses.find((c) => c.id === 'build')?.done ?? 0, [progress])
  const grade = gradeFor(built)

  const toggle = (i: number) => {
    if (stepDone(i)) { clearDone(AGENT_TRACK, `${u.id}/${i}`); setJustDone(null) }
    else { markDone(AGENT_TRACK, `${u.id}/${i}`); setJustDone(i) }
  }

  return (
    <div className="ag" role="dialog" aria-label={`${u.name}, the whole path`}>
      {/* LA BARRE · elle reste visible pendant qu'on descend. Une fiche plein
          écran sans sortie permanente est un piège, et la progression en haut
          répond à la seule question qu'on se pose en lisant : où j'en suis. */}
      <header className="ag-bar">
        <button className="ag-close" onClick={onClose}>
          <BauhausIcon name="cross" size={13} /> Back to the room
        </button>
        <div className="ag-prog">
          <span className="ag-prog-bar"><i style={{ width: `${(done / total) * 100}%` }} /></span>
          <b>{done} of {total}</b>
        </div>
        <span className="ag-belt" style={{ ['--bt' as string]: grade.now.tint }}>
          <i /> {grade.now.title}
        </span>
      </header>

      <div className="ag-scroll">
        {/* 1 · CE QUE C'EST -------------------------------------------- */}
        <section className="ag-sec ag-top">
          <span className="ag-kick">{u.shape}</span>
          <h1>{u.name}</h1>
          {lesson && <p className="ag-plain">{lesson.primer.plain}</p>}
          {lesson && (
            <>
              <p className="ag-like"><b>Think of it as.</b> {lesson.primer.like}</p>
              <div className="ag-two">
                <div className="ag-need">
                  <h3>Before you start, have these ready</h3>
                  <ul>{lesson.primer.need.map((n) => <li key={n}><BauhausIcon name="box" size={11} />{n}</li>)}</ul>
                </div>
                <div className="ag-words">
                  <h3>Words we are going to use</h3>
                  <dl>
                    {lesson.primer.words.map((w) => (
                      <div key={w.term}><dt>{w.term}</dt><dd>{w.says}</dd></div>
                    ))}
                  </dl>
                </div>
              </div>
            </>
          )}
        </section>

        {/* 2 · POURQUOI C'EST DUR -------------------------------------- */}
        <section className="ag-sec ag-hard">
          <h2>Why this one is hard</h2>
          <p className="ag-hardlong">{u.hard}</p>
          <p className="ag-fail"><b>How it goes wrong.</b> {u.failure}</p>
          <p className="ag-for"><b>Who needs it.</b> {u.forWhom}</p>
        </section>

        {/* 3 · LES ÉTAPES ---------------------------------------------- */}
        <section className="ag-sec">
          <h2>The path, one step at a time</h2>
          <p className="ag-lead">
            Four steps. Each one makes something that did not exist before, and you cannot do the next one
            without it. Tick a step when you have actually made the thing, not when you have read about it.
          </p>

          {u.steps.map((s, i) => {
            const L = lesson?.steps[i]
            const on = stepDone(i)
            return (
              <article className={`ag-step${on ? ' on' : ''}`} key={s.title}>
                <header className="ag-step-h">
                  <span className="ag-step-n">{on ? <BauhausIcon name="check" size={14} /> : i + 1}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <span className="ag-makes">Makes: {s.makes}</span>
                  </div>
                </header>

                {L && <StepStage id={L.stage} />}

                {L && (
                  <>
                    <p className="ag-why"><b>Why this step exists.</b> {L.why}</p>
                    <h4>What you actually do</h4>
                    <ol className="ag-how">{L.how.map((h) => <li key={h}>{h}</li>)}</ol>

                    {/* L'EXEMPLE RATÉ, à gauche du réussi. C'est la moitié qui
                        apprend, et c'est celle que les cours omettent. */}
                    <h4>The same thing, written badly and written well</h4>
                    <div className="ag-vs">
                      <div className="ag-vs-bad">
                        <span className="ag-vs-tag">what people write</span>
                        <p>{L.bad}</p>
                      </div>
                      <div className="ag-vs-good">
                        <span className="ag-vs-tag">what works</span>
                        <p>{L.good}</p>
                      </div>
                    </div>
                    <p className="ag-note"><b>The difference.</b> {L.note}</p>
                  </>
                )}

                <p className="ag-check"><b>Before you move on.</b> {s.check}</p>

                <button className="ag-tick" aria-pressed={on} onClick={() => toggle(i)}>
                  <BauhausIcon name={on ? 'check' : 'box'} size={13} />
                  {on ? 'Made it' : 'I have made this'}
                </button>

                {/* LA RÉCOMPENSE · elle nomme ce qu'on vient d'acquérir. Une
                    félicitation qui ne dit rien cesse d'être lue à la
                    deuxième occurrence. */}
                {on && L && (
                  <p className={`ag-reward${justDone === i ? ' fresh' : ''}`}>
                    <BauhausIcon name="star4" size={14} />
                    <span><b>The master.</b> {L.reward}</span>
                  </p>
                )}
              </article>
            )
          })}
        </section>

        {/* 4 · L'AGENT -------------------------------------------------- */}
        <section className="ag-sec ag-make">
          <h2>Your agent</h2>
          <p className="ag-lead">
            This is a draft, and parts of it are deliberately wrong for your case. The path above is what turns
            it into yours. It weighs about {estimateTokens(draft.system).toLocaleString('en-US')} tokens as
            written.
          </p>
          <label className="ag-field">
            <span>Name</span>
            <input value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} />
          </label>
          <label className="ag-field">
            <span>System prompt</span>
            <textarea rows={14} value={draft.system} onChange={(e) => setDraft({ ...draft, system: e.target.value })} />
          </label>

          <h3>Take it with you</h3>
          <div className="cls-fmts">
            {FORMATS.map((f) => (
              <button key={f.id} className={fmt === f.id ? 'on' : ''} onClick={() => setFmt(f.id)} title={f.what}>
                {f.label}
              </button>
            ))}
          </div>
          <p className="cls-fmt-what">{FORMATS.find((f) => f.id === fmt)?.what}</p>
          <pre className="cls-pre"><code>{render(draft, fmt)}</code></pre>
          <div className="cls-acts">
            <button className="lp-cta" onClick={() => void copyAgent(draft, fmt).then((k) => { setCopied(k); setTimeout(() => setCopied(false), 1600) })}>
              {copied ? 'Copied' : 'Copy'}
            </button>
            <button className="lp-cta lp-cta-ghost" onClick={() => downloadAgent(draft, fmt)}>Download</button>
          </div>
          <p className="cls-note">
            None of these five formats belongs to a provider. We export the prompt and the schemas, never a
            snippet of calling code: a code example goes stale with the library it was written against, and a
            stale example in a course is worse than none at all.
          </p>
        </section>

        {/* LA FIN · ce qu'on a gagné, et où aller ensuite. */}
        {finished && (
          <section className="ag-sec ag-done">
            <BauhausIcon name="star" size={34} />
            <h2>{u.name} is built</h2>
            <p className="ag-lead">
              You took one shape of problem from a blank page to a file that runs somewhere else. That is one
              agent, and one badge. {grade.next
                ? `${grade.toGo} more and the master hands you the ${grade.next.title.toLowerCase()}.`
                : 'There is no belt above the one you now hold.'}
            </p>
            <button className="lp-cta" onClick={onClose}>Back to the room</button>
          </section>
        )}
      </div>
    </div>
  )
}
