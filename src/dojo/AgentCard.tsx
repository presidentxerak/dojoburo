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
import { lessonFor, lessonIn } from '../data/agentLessons'
import { useCaseIn, type UseCase } from '../data/agentUseCases'
import { useLang, useT } from '../i18n'
import { markDone, clearDone, useProgress } from '../academy/progress'
import { AGENT_TRACK } from './masterProgress'
import { gradeFor } from './grades'
import { FORMATS, render, downloadAgent, copyAgent, type BuiltAgent, type ExportFormat } from '../lib/agentExport'
import { estimateTokens } from '../agents/sandbox'
import { FRAMEWORKS, FRAMEWORK_COUNT, frameworkIn } from '../data/frameworks'
import { Agent3DPreview } from '../components/three/Agent3DPreview'
import { characterFor, faceIdForUseCase } from '../data/agentFaces'
import { agentColor } from '../data/agents'

/** Le brouillon de départ · écrit depuis le cas d'usage. Ce n'est pas un
 *  modèle vide : une page blanche est la raison numéro un pour laquelle
 *  personne ne finit un exercice. C'est un brouillon DÉJÀ FAUX par endroits,
 *  que le parcours apprend à corriger. */
function scaffold(u: UseCase, fr: boolean): BuiltAgent {
  return {
    slug: `${u.id}-agent`,
    name: u.name,
    shape: u.shape,
    system: [
      // LE BROUILLON SUIT LA LANGUE LUE · c'est un objet qu'on emporte et
      // qu'on fait tourner, et un prompt rend dans la langue où il est écrit.
      // Le livrer en anglais à quelqu'un qui lit le cours en français lui
      // ferait le traduire avant de pouvoir s'en servir, ce qui est le
      // contraire de « repartir avec un fichier ».
      fr ? `Tu es ${u.name}.` : `You are ${u.name}.`,
      '',
      fr ? `Ton travail : ${u.does}` : `Your job: ${u.does}`,
      '',
      fr ? '## Jamais' : '## Never',
      fr ? '- Ne jamais affirmer ce que tu ne peux pas montrer.' : '- Never state something you cannot point at.',
      fr ? '- Ne jamais combler un trou avec quelque chose de plausible.' : '- Never fill a gap with something plausible.',
      '',
      fr ? '## Toujours' : '## Always',
      ...u.steps.map((s) => `- ${s.makes.charAt(0).toUpperCase()}${s.makes.slice(1)}.`),
      '',
      fr ? '## Quand tu ne peux pas' : '## When you cannot',
      fr
        ? 'Dis-le, et dis ce qu\'il te faudrait. Ne rends pas une supposition déguisée en réponse.'
        : 'Say so, and say what you would need. Do not produce a best guess dressed as an answer.',
    ].join('\n'),
    tools: [],
    notes: '',
  }
}

export function AgentCard({ u: u0, onClose }: { u: UseCase; onClose: () => void }) {
  const lang = useLang()
  const t = useT()
  // LE CAS D'USAGE DANS LA LANGUE LUE · un seul chemin, partagé avec la salle
  // et la liste. Voir useCaseIn dans data/agentUseCases : trois surfaces qui
  // testeraient la langue chacune de leur côté finiraient par donner à un
  // agent un nom dans la salle et un autre sur sa page.
  const u = useCaseIn(u0, lang)
  // LA LEÇON DANS LA LANGUE LUE · même chemin unique que pour le cas d'usage.
  // Sans ça, la fiche affiche un nom français au-dessus d'un primer anglais,
  // ce qui est exactement la page à moitié traduite qu'on refuse de livrer.
  const lesson0 = lessonFor(u.id)
  const lesson = lesson0 ? lessonIn(lesson0, lang) : null
  const progress = useProgress()
  const [draft, setDraft] = useState<BuiltAgent>(() => scaffold(u, lang === 'fr'))
  const [fmt, setFmt] = useState<ExportFormat>('brief')
  const [copied, setCopied] = useState(false)
  /** l'étape qu'on vient de valider · elle fait apparaître la récompense */
  const [justDone, setJustDone] = useState<number | null>(null)

  // Changer d'agent remet le brouillon à son point de départ. Garder le
  // précédent donnerait la consigne d'un agent de recherche sous le nom d'un
  // agent de tri, ce qui est la façon la plus discrète de tout casser.
  // Changer d'agent OU DE LANGUE remet le brouillon à son point de départ.
  useEffect(() => { setDraft(scaffold(u, lang === 'fr')); setJustDone(null) }, [u.id, lang])

  // Échap ferme la fiche · c'est le geste que tout le monde essaie en premier
  // devant une surface plein écran, et ne pas le servir donne l'impression
  // d'être coincé.
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [onClose])

  // LE PERSONNAGE DE LA SALLE · exactement celui qui dort à sa table, parce
  // que les deux écrans lisent la même table (data/agentFaces). Cette ligne
  // passait par AGENT_CHAR pendant que la salle distribuait les visages par
  // position : les deux tombaient d'accord sur le premier agent et sur aucun
  // autre.
  const charKey = faceIdForUseCase(u.id)

  // LA COULEUR DE L'AGENT · celle de son rôle, la même que sur les cartes de
  // l'accueil. Elle habille le fond de la vignette et l'accent des panneaux,
  // pour qu'une page d'agent soit reconnaissable à distance comme sa carte.
  const accent = agentColor(u.agent)

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
    <div className="ag" role="dialog" aria-label={u.name} style={{ ['--ac' as string]: accent }}>
      {/* LA BARRE · elle reste visible pendant qu'on descend. Une fiche plein
          écran sans sortie permanente est un piège, et la progression en haut
          répond à la seule question qu'on se pose en lisant : où j'en suis. */}
      <header className="ag-bar">
        <button className="ag-close" onClick={onClose}>
          <BauhausIcon name="cross" size={13} /> {t('ag.back')}
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
        {/* 1 · L'OUVERTURE · un aplat, un très grand titre, et la phrase sans
            jargon en grand. C'était un titre et deux paragraphes de la même
            taille que le reste : rien ne disait par où commencer. */}
        <section className="ag-hero">
          <div className="ag-hero-in">
            <div className="ag-hero-t">
              <span className="ag-kick">{u.shape}</span>
              <h1>{u.name}</h1>
              {lesson && <p className="ag-plain">{lesson.primer.plain}</p>}
              <div className="ag-hero-meta">
                <span><b>{total}</b> {t('ag.steps')}</span>
                <span><b>{u.ships.length}</b> {t('ag.ships')}</span>
                <span><b>{lesson?.primer.words.length ?? 0}</b> {t('ag.words')}</span>
              </div>
            </div>
            {/* LE PERSONNAGE · le même qui dort dans la salle, en trois
                dimensions. Il n'est pas décoratif : c'est le lien entre la
                silhouette qu'on vient de cliquer et la page où l'on atterrit.
                Sans lui, on passe d'un dojo habité à un article, et rien ne dit
                que c'est le même agent. */}
            {/* LE FOND EST UN APLAT DE COULEUR · il était gris, et pas même un
                gris choisi : .a3d peint un dégradé radial gris par défaut, et
                il traversait le fond blanc posé ici. Un personnage coloré sur
                un dégradé gris arrondi ressemble à une vignette d'application,
                pas à un agent du dojo. */}
            <div className="ag-hero-p" aria-hidden>
              <Agent3DPreview id={charKey} character={characterFor(charKey)} size={230} fit />
            </div>
          </div>
        </section>

        {lesson && (
          <section className="ag-sec ag-prime">
            {/* LA COMPARAISON · elle vaut trois paragraphes d'explication, donc
                elle est traitée comme une citation et non comme une note. */}
            <blockquote className="ag-like">
              <span className="ag-like-k">Think of it as</span>
              {lesson.primer.like}
            </blockquote>

            <div className="ag-two">
              <div className="ag-panel">
                <h3><BauhausIcon name="box" size={17} /> Before you start, have these ready</h3>
                <ul className="ag-need">
                  {lesson.primer.need.map((n, i) => (
                    <li key={n}><span className="ag-need-n">{i + 1}</span>{n}</li>
                  ))}
                </ul>
              </div>
              <div className="ag-panel">
                <h3><BauhausIcon name="pen" size={17} /> Words we are going to use</h3>
                <dl className="ag-words">
                  {lesson.primer.words.map((w) => (
                    <div key={w.term}><dt>{w.term}</dt><dd>{w.says}</dd></div>
                  ))}
                </dl>
              </div>
            </div>
          </section>
        )}

        {/* 2 · POURQUOI C'EST DUR · c'est la raison d'avoir douze parcours au
            lieu d'un cours général, donc ça ne se lit pas comme une note. */}
        <section className="ag-sec ag-hard">
          <h2><span className="ag-h2-n">01</span> Why this one is hard</h2>
          <p className="ag-hardlong">{u.hard}</p>
          <div className="ag-two">
            <p className="ag-fail"><b>{t('ag.fail')}</b>{u.failure}</p>
            <p className="ag-for"><b>Who needs it</b>{u.forWhom}</p>
          </div>
        </section>

        {/* 3 · LES ÉTAPES ---------------------------------------------- */}
        <section className="ag-sec">
          <h2><span className="ag-h2-n">02</span> The path, one step at a time</h2>
          <p className="ag-lead">
            {total} steps. Each one makes something that did not exist before, and you cannot do the next one
            without it. Tick a step when you have actually made the thing, not when you have read about it.
          </p>

          {/* LE RAIL · il colle en haut pendant qu'on descend. Une fiche de
              cette longueur sans repère permanent laisse perdu au troisième
              écran, et chaque pastille mène à son étape. */}
          <nav className="ag-rail" aria-label="The steps">
            {u.steps.map((s, i) => (
              <button
                key={s.title}
                className={`ag-rail-b${stepDone(i) ? ' on' : ''}`}
                onClick={() => document.getElementById(`step-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              >
                <span className="ag-rail-n">{stepDone(i) ? <BauhausIcon name="check" size={11} /> : i + 1}</span>
                <span className="ag-rail-t">{s.title}</span>
              </button>
            ))}
          </nav>

          {u.steps.map((s, i) => {
            const L = lesson?.steps[i]
            const on = stepDone(i)
            return (
              <article className={`ag-step${on ? ' on' : ''}`} key={s.title} id={`step-${i}`}>
                <header className="ag-step-h">
                  {/* LE NUMÉRO EN GRAND · c'est ce qui donne un rythme à une
                      page longue. Une pastille de vingt-huit pixels se lit
                      comme une puce de liste, pas comme un chapitre. */}
                  <span className="ag-step-n" aria-hidden>{on ? <BauhausIcon name="check" size={30} /> : i + 1}</span>
                  <div className="ag-step-t">
                    <span className="ag-step-of">Step {i + 1} of {total}</span>
                    <h3>{s.title}</h3>
                    <span className="ag-makes"><b>{t('ag.makes')}</b> {s.makes}</span>
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
                    {/* LE DIPTYQUE · les deux moitiés ont le même poids
                        visuel, exprès. Montrer la bonne réponse enseigne à la
                        reconnaître ; la mettre à côté de la mauvaise enseigne à
                        la produire, et la mauvaise doit donc se lire aussi
                        bien que l'autre. */}
                    <h4>The same thing, written badly and written well</h4>
                    <div className="ag-vs">
                      <div className="ag-vs-bad">
                        <span className="ag-vs-tag"><BauhausIcon name="cross" size={12} /> what people write</span>
                        <p>{L.bad}</p>
                      </div>
                      <div className="ag-vs-good">
                        <span className="ag-vs-tag"><BauhausIcon name="check" size={12} /> what works</span>
                        <p>{L.good}</p>
                      </div>
                    </div>
                    <p className="ag-note"><b>The difference</b>{L.note}</p>
                  </>
                )}

                <p className="ag-check"><b>Before you move on</b>{s.check}</p>

                <button className="ag-tick" aria-pressed={on} onClick={() => toggle(i)}>
                  <span className="ag-tick-box"><BauhausIcon name={on ? 'check' : 'box'} size={15} /></span>
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
          <h2><span className="ag-h2-n">03</span> Your agent</h2>
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

          {/* OÙ ÇA VA · la marche d'après, et la plus haute. On repartait avec
              un fichier et aucune idée de quel framework prendre ni de quoi y
              coller. Trois exemples ici, le reste sur sa page : la fiche
              enseigne à construire, pas à comparer quinze projets. */}
          <div className="ag-where">
            <h3>{t('ag.whereNext')}</h3>
            <p className="ag-lead">{t('ag.whereLead')}</p>
            <div className="ag-where-list">
              {FRAMEWORKS.slice(0, 3).map((f0) => {
                const f = frameworkIn(f0, lang)
                return (
                  <div className="ag-where-c" key={f.id}>
                    <b>{f.name}</b>
                    <span className="ag-where-l">{f.langs.join(' · ')} · {f.approach}</span>
                    <span>{f.fit.system ?? f.shape}</span>
                  </div>
                )
              })}
            </div>
            <a className="ag-where-go" href="/frameworks">
              {t('ag.compareAll')} {FRAMEWORK_COUNT} frameworks <BauhausIcon name="play" size={11} />
            </a>
          </div>
        </section>

        {/* LA FIN · ce qu'on a gagné, et où aller ensuite. */}
        {finished && (
          <section className="ag-sec ag-done">
            <BauhausIcon name="star" size={34} />
            <h2>{u.name} {t('ag.isBuilt')}</h2>
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
