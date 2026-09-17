// COMMENT CRÉER UN AGENT · on arrive dans le dojo, et le maître accueille.
//
// La page ne commence pas par un formulaire ni par un sommaire. Elle commence
// par une salle où douze agents dorment, et par une question posée par le
// maître : lequel voulez vous apprendre à construire ?
//
// C'est une décision d'interface, pas une mise en scène. Un catalogue de
// douze cartes demande de comparer douze choses avant d'avoir compris une
// seule ; une salle endormie demande de choisir UNE forme de problème, ce qui
// est la première chose à savoir faire. Et l'agent choisi se réveille, ce qui
// dit sans un mot ce que vaut le fait d'avoir choisi.
//
// Ce qu'on emporte à la fin n'est pas un score : c'est un fichier. Voir
// lib/agentExport, qui rend cinq formats dont aucun n'appartient à un
// fournisseur.
import { useEffect, useMemo, useState } from 'react'
import { SiteHeader } from '../components/SiteHeader'
import { Logo } from '../components/Logo'
import { Wordmark } from '../components/Wordmark'
import { SupportBot } from '../components/SupportBot'
import { useHeadTags } from '../lib/headTags'
import { ClassScene } from './ClassScene'
import { USE_CASES, USE_CASE_BY_ID, USE_CASE_COUNT, type UseCase } from '../data/agentUseCases'
import { markDone, clearDone, useProgress } from '../academy/progress'
import { FORMATS, render, downloadAgent, copyAgent, type BuiltAgent, type ExportFormat } from '../lib/agentExport'
import { estimateTokens } from '../agents/sandbox'
import { diplomaFor, DIPLOMAS } from './diplomas'

/* ------------------------------------------------------------------ */
/* Ce que dit le maître                                                */
/* ------------------------------------------------------------------ */

/** Le maître parle peu et dit une chose à la fois. Une bulle qui contient
 *  deux idées n'en transmet aucune, surtout au dessus d'une salle en trois
 *  dimensions où l'oeil a déjà de quoi faire. */
function masterSays(chosen: UseCase | null, done: number, total: number): string {
  // Le nombre vient des données, jamais de la phrase. Écrit « twelve » à la
  // main, il survivrait au treizième cas d'usage et le maître mentirait dans
  // sa première phrase.
  if (!chosen) return `${USE_CASE_COUNT} agents, ${USE_CASE_COUNT} shapes of problem. Which one do you need?`
  if (done === 0) return `${chosen.name} is awake. Start where it is hardest: ${chosen.hard.split('.')[0]}.`
  if (done < total) return `Step ${done} of ${total}. Keep the one you cannot explain for last.`
  return 'Finished. Take the file with you and run it somewhere real.'
}

/* ------------------------------------------------------------------ */
/* Le brouillon d'agent                                                */
/* ------------------------------------------------------------------ */

/** Le point de départ, écrit depuis le cas d'usage. Ce n'est pas un modèle
 *  vide : une page blanche est la raison numéro un pour laquelle personne ne
 *  finit un exercice. C'est un brouillon DÉJÀ FAUX par endroits, que le
 *  parcours apprend à corriger. */
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

/* ------------------------------------------------------------------ */

export function BuildAgentPage({ slug }: { slug?: string }) {
  const [chosenId, setChosenId] = useState<string | null>(slug ?? null)
  const chosen = chosenId ? USE_CASE_BY_ID[chosenId] ?? null : null
  const progress = useProgress()
  const [draft, setDraft] = useState<BuiltAgent | null>(null)
  const [fmt, setFmt] = useState<ExportFormat>('brief')
  const [copied, setCopied] = useState(false)

  // Changer d'agent remet le brouillon à son point de départ. Garder le
  // précédent donnerait la consigne d'un agent de recherche sous le nom d'un
  // agent de tri, ce qui est la façon la plus discrète de tout casser.
  useEffect(() => { setDraft(chosen ? scaffold(chosen) : null) }, [chosenId])

  // La progression passe par le MÊME magasin que l'académie · un second
  // magasin pour « les étapes d'agent » aurait donné deux barres de
  // progression qui ne parlent pas de la même chose, et un maître qui en lit
  // une seule.
  const stepDone = (u: UseCase, i: number) => progress.isDone('agent', `${u.id}/${i}`)
  const doneSteps = chosen ? chosen.steps.filter((_, i) => stepDone(chosen, i)).length : 0
  const built = useMemo(
    () => USE_CASES.filter((u) => u.steps.every((_, i) => progress.isDone('agent', `${u.id}/${i}`))).length,
    [progress],
  )
  const diploma = diplomaFor(built, progress.doneCount)

  useHeadTags({
    title: chosen
      ? `Build ${chosen.name} · ${chosen.shape}`
      : `Build an agent · ${USE_CASE_COUNT} shapes, taught one at a time`,
    description: chosen
      ? `${chosen.does} What is hard about it: ${chosen.hard}`
      : 'Walk into the dojo, pick the shape of agent you actually need, and build it from a blank page to a file you can run in a real framework.',
    path: chosen ? `/build/${chosen.id}` : '/build',
    keywords: chosen ? chosen.keywords : ['build an ai agent', 'agent tutorial', 'agent use cases'],
  })

  const says = masterSays(chosen, doneSteps, chosen?.steps.length ?? 0)

  return (
    <div className="landing dg2 ac cls">
      <SiteHeader />

      {/* LA SALLE · elle est en haut, plein cadre, avant tout texte. On entre
          dans un lieu, on n'ouvre pas un chapitre. */}
      <ClassScene chosen={chosenId} onChoose={setChosenId} says={says} />

      <section className="lp-sec ac-hero cls-head">
        <span className="lp-pill">{USE_CASE_COUNT} agents · each one a different way of failing</span>
        <h1>{chosen ? chosen.name : 'Which agent do you need?'}</h1>
        <p className="lp-lead">
          {chosen
            ? chosen.does
            : 'They are asleep because none of them exists yet. Pick the shape of problem you actually have, and that one wakes up. A research agent and a sorting agent do not fail the same way, so they are not taught the same way.'}
        </p>
        {chosen && (
          <button className="cls-back" onClick={() => setChosenId(null)}>Back to the twelve</button>
        )}
      </section>

      {/* LE CHOIX · douze cartes, une par personnage de la salle. */}
      {!chosen && (
        <section className="lp-sec">
          <div className="cls-grid">
            {USE_CASES.map((u) => {
              const finished = u.steps.every((_, i) => stepDone(u, i))
              return (
                <button className={`cls-card${finished ? ' done' : ''}`} key={u.id} onClick={() => setChosenId(u.id)}>
                  <span className="cls-card-top">
                    <b>{u.name}</b>
                    {finished ? <i className="cls-tag">built</i> : <i className="cls-tag sleep">asleep</i>}
                  </span>
                  <span className="cls-shape">{u.shape}</span>
                  <span className="cls-hard"><b>Hard part.</b> {u.hard.split('.')[0]}.</span>
                </button>
              )
            })}
          </div>
        </section>
      )}

      {/* LE PARCOURS · quatre étapes, chacune produisant quelque chose. */}
      {chosen && draft && (
        <>
          <section className="lp-sec alt cls-body">
            <h2>What is hard about it</h2>
            <p className="cls-hardlong">{chosen.hard}</p>
            <p className="cls-fail"><b>How it fails.</b> {chosen.failure}</p>
            <p className="cls-for"><b>Who needs it.</b> {chosen.forWhom}</p>

            <h2>The path</h2>
            <ol className="cls-steps">
              {chosen.steps.map((s, i) => {
                const on = stepDone(chosen, i)
                return (
                  <li key={s.title} className={on ? 'on' : ''}>
                    <button
                      className="cls-step-tick"
                      aria-pressed={on}
                      onClick={() => (on ? clearDone('agent', `${chosen.id}/${i}`) : markDone('agent', `${chosen.id}/${i}`))}
                    >
                      {on ? '✓' : String(i + 1)}
                    </button>
                    <div>
                      <b>{s.title}</b>
                      <span className="cls-makes">Makes: {s.makes}</span>
                      <span className="cls-check">Before you move on: {s.check}</span>
                    </div>
                  </li>
                )
              })}
            </ol>
          </section>

          {/* L'AGENT · éditable, et exportable à tout moment. On n'attend pas
              la fin du parcours pour laisser partir le fichier : quelqu'un qui
              sait déjà ce qu'il fait doit pouvoir prendre le brouillon et s'en
              aller. */}
          <section className="lp-sec cls-make">
            <h2>Your agent</h2>
            <p className="lp-lead sm">
              This is a draft, and parts of it are deliberately wrong for your case. The path above is what
              turns it into yours. It weighs about {estimateTokens(draft.system).toLocaleString('en-US')} tokens
              as written.
            </p>
            <label className="cls-field">
              <span>Name</span>
              <input value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} />
            </label>
            <label className="cls-field">
              <span>System prompt</span>
              <textarea
                rows={14}
                value={draft.system}
                onChange={(e) => setDraft({ ...draft, system: e.target.value })}
              />
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
        </>
      )}

      {/* LE MAÎTRE TIENT VOTRE PROGRESSION · et délivre les diplômes. */}
      <section className="lp-sec alt cls-diploma">
        <h2>What the master has seen you do</h2>
        <p className="lp-lead sm">
          {built === 0
            ? 'Nothing yet. Build one agent all the way through and the first diploma is yours.'
            : `${built} of ${USE_CASE_COUNT} agents built, end to end.`}
        </p>
        <div className="cls-dips">
          {DIPLOMAS.map((d) => {
            const earned = diploma.earned.includes(d.id)
            return (
              <div className={`cls-dip${earned ? ' on' : ''}`} key={d.id}>
                <span className="cls-dip-g" aria-hidden>{earned ? '✓' : '◦'}</span>
                <b>{d.title}</b>
                <span>{earned ? d.awarded : d.how}</span>
              </div>
            )
          })}
        </div>
      </section>

      <footer className="lp-footer">
        <div className="lp-brand"><Logo size={26} /> <Wordmark /></div>
        <nav className="lp-foot-links">
          <a href="/">Home</a><a href="/build">Build an agent</a><a href="/academy">Prompt engineering</a>
          <a href="/frugality">Token frugality</a><a href="/library">Library</a>
          <a href="/terms">Terms</a><a href="/privacy">Privacy</a>
        </nav>
      </footer>
      <SupportBot />
    </div>
  )
}
