// OÙ FAIRE TOURNER L'AGENT QU'ON VIENT DE CONSTRUIRE.
//
// Le parcours se terminait sur un fichier et un silence. L'élève repartait
// avec une consigne système, des schémas d'outils et un manifeste, puis se
// retrouvait devant quinze noms de frameworks sans savoir lequel prendre ni
// quoi y coller. C'est la marche la plus haute du cours, et elle n'était pas
// enseignée du tout.
//
// CETTE PAGE N'EST PAS UNE DOCUMENTATION. Voir l'en-tête de data/frameworks
// pour le raisonnement complet : on enseigne la CORRESPONDANCE, c'est à dire
// quel morceau de ce qu'on a fabriqué devient quoi chez chacun, parce que ça
// reste vrai quand les signatures changent. On n'écrit aucun extrait de code
// d'appel, ici ni ailleurs, pour la même raison que les formats d'export n'en
// contiennent pas.
//
// ON DIT AUSSI QUAND NE PAS LES PRENDRE. Un tableau comparatif où tout est bon
// à quelque chose n'aide personne à choisir, et c'est ce qu'est presque
// toujours ce genre de tableau.
import { useState } from 'react'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { SupportBot } from '../components/SupportBot'
import { BauhausIcon } from '../components/BauhausIcon'
import { useHeadTags } from '../lib/headTags'
import { FRAMEWORKS, FRAMEWORK_COUNT, FRAMEWORK_LANGS, FRAMEWORK_PRIMER, CONNECT_STEPS, type Framework } from '../data/frameworks'
import { FORMATS, type ExportFormat } from '../lib/agentExport'
import { USE_CASE_COUNT } from '../data/agentUseCases'

/** Le nom lisible d'un format · lu depuis agentExport, jamais recopié. */
const formatLabel = (id: ExportFormat) => FORMATS.find((f) => f.id === id)?.label ?? id

export function FrameworkCard({ f, open, onToggle }: { f: Framework; open: boolean; onToggle: () => void }) {
  return (
    <article className={`fw-card${open ? ' on' : ''}`}>
      <button className="fw-head" aria-expanded={open} onClick={onToggle}>
        <span className="fw-name">
          <b>{f.name}</b>
          <span className="fw-langs">{f.langs.join(' · ')}</span>
        </span>
        <span className="fw-approach">{f.approach}</span>
        <BauhausIcon name={open ? 'cross' : 'play'} size={13} />
      </button>

      {open && (
        <div className="fw-body">
          {/* LA FORME · la phrase à comprendre avant tout le reste, parce que
              c'est elle qui décide si votre agent y rentre bien. */}
          <p className="fw-shape"><b>How it models an agent</b>{f.shape}</p>

          <h4>Where each piece of your agent goes</h4>
          <dl className="fw-fit">
            {(Object.keys(f.fit) as ExportFormat[]).map((k) => (
              <div key={k}>
                <dt>{formatLabel(k)}</dt>
                <dd>{f.fit[k]}</dd>
              </div>
            ))}
          </dl>

          <p className="fw-watch"><b>What catches people out</b>{f.watch}</p>

          <div className="fw-when">
            <p className="fw-yes"><b>Take it when</b>{f.when}</p>
            <p className="fw-no"><b>Do not, when</b>{f.notWhen}</p>
          </div>

          <a className="fw-docs" href={f.docs} target="_blank" rel="noreferrer">
            Read its own documentation <BauhausIcon name="play" size={11} />
          </a>
        </div>
      )}
    </article>
  )
}

export function FrameworksPage() {
  const [open, setOpen] = useState<string | null>(FRAMEWORKS[0].id)
  const [lang, setLang] = useState<string | null>(null)
  const shown = lang ? FRAMEWORKS.filter((f) => f.langs.includes(lang)) : FRAMEWORKS

  useHeadTags({
    title: `Where to run your agent · ${FRAMEWORK_COUNT} frameworks compared`,
    description:
      `You built an agent and exported it. Now put it somewhere: ${FRAMEWORK_COUNT} agent frameworks, what each one is for, ` +
      'where every piece of your exported agent goes, and when not to take it.',
    path: '/frameworks',
    keywords: ['agent frameworks', 'langgraph', 'crewai', 'llamaindex', 'autogen', 'semantic kernel', 'pydantic ai', 'compare agent frameworks'],
  })

  return (
    <div className="landing dg2 ac fw">
      <SiteHeader />

      <section className="lp-sec ac-hero">
        <span className="lp-pill">The last step of the first course</span>
        <h1>You built an agent. Now put it somewhere.</h1>
        <p className="lp-lead">
          The {USE_CASE_COUNT} paths in the dojo end with a file: an instruction and a set of tool schemas. This
          page is the step after. There are a lot of frameworks that will run it for you, they all want the same
          two things, and none of them is hard to start with.
        </p>
      </section>

      {/* 1 · CE QUE C'EST · la première version de cette page ouvrait sur un
          comparatif de quinze projets. Utile pour qui sait déjà ce qu'est un
          framework, inutile pour tout le monde d'autre, c'est à dire pour le
          public de ce cours. On ne commence pas par « lequel prendre » quand
          la question réelle est « c'est quoi ». */}
      <section className="lp-sec alt fw-what">
        <h2><span className="ag-h2-n">01</span> What a framework actually is</h2>
        <p className="fw-plain">{FRAMEWORK_PRIMER.plain}</p>
        <blockquote className="ag-like">
          <span className="ag-like-k">Think of it as</span>
          {FRAMEWORK_PRIMER.like}
        </blockquote>

        <div className="ag-two">
          <div className="ag-panel">
            <h3><BauhausIcon name="box" size={17} /> What it gives you</h3>
            <ul className="ag-need">
              {FRAMEWORK_PRIMER.gives.map((g, i) => (
                <li key={g}><span className="ag-need-n">{i + 1}</span>{g}</li>
              ))}
            </ul>
          </div>
          <div className="ag-panel">
            <h3><BauhausIcon name="cross" size={17} /> What it does not give you</h3>
            <p className="fw-not">{FRAMEWORK_PRIMER.doesNot}</p>
            <h3 className="fw-h3b"><BauhausIcon name="play" size={17} /> You can start without one</h3>
            <p className="fw-not">{FRAMEWORK_PRIMER.without}</p>
          </div>
        </div>

        <p className="fw-why"><b>Why there are so many</b>{FRAMEWORK_PRIMER.whySoMany}</p>
      </section>

      {/* 2 · LA PROCÉDURE · quatre gestes, les mêmes dans les quinze projets.
          C'est ce qui rend la page enseignable : les noms changent, la
          procédure non. */}
      <section className="lp-sec fw-connect">
        <h2><span className="ag-h2-n">02</span> How to export your agent and connect it</h2>
        <p className="lp-lead">
          Four moves, and they are the same wherever you take it. Only the names of the boxes change.
        </p>
        <ol className="fw-steps">
          {CONNECT_STEPS.map((c, i) => (
            <li key={c.title}>
              <span className="fw-step-n">{i + 1}</span>
              <div>
                <b>{c.title}</b>
                <span className="fw-step-d">{c.does}</span>
                <span className="fw-step-w"><b>Where it goes wrong</b>{c.watch}</span>
              </div>
            </li>
          ))}
        </ol>
        <a className="fw-go" href="/build">
          <BauhausIcon name="play" size={12} /> Build an agent first, if you have not
        </a>
      </section>

      <section className="lp-sec alt">
        <h2><span className="ag-h2-n">03</span> {FRAMEWORK_COUNT} of them, and what each one is for</h2>
        <p className="lp-lead">
          You do not have to choose well the first time. Your agent is an instruction and some schemas, so moving
          it costs an afternoon, not a rewrite. Open the two or three that sound like your problem.
        </p>
        <div className="fw-langs-filter">
          <button className={lang === null ? 'on' : ''} onClick={() => setLang(null)}>All languages</button>
          {FRAMEWORK_LANGS.map((l) => (
            <button key={l} className={lang === l ? 'on' : ''} onClick={() => setLang(lang === l ? null : l)}>{l}</button>
          ))}
        </div>
        <div className="fw-list">
          {shown.map((f) => (
            <FrameworkCard key={f.id} f={f} open={open === f.id} onToggle={() => setOpen(open === f.id ? null : f.id)} />
          ))}
        </div>
      </section>

      {/* LA PRÉCISION, en bas · elle ouvrait la page, ce qui en faisait une
          page de mise en garde plutôt qu'une page de cours. Elle reste, parce
          qu'un lecteur qui cherche du code doit savoir pourquoi il n'y en a
          pas, mais après avoir appris quelque chose. */}
      <section className="lp-sec fw-note">
        <h2>There is no code on this page, on purpose</h2>
        <p className="lp-lead">
          These projects move fast, and a snippet written today is wrong in a few months: someone copies it, it
          breaks, and they think they misunderstood. So we teach the part that does not go stale, which is also
          the part that takes the time: <b>what your agent becomes in each framework</b>. A system prompt is an
          instruction here, a backstory there, a typed signature elsewhere. Once you know that, the current
          documentation is a five minute read instead of an afternoon.
        </p>
        <p className="lp-lead sm">
          We do not track these {FRAMEWORK_COUNT} projects day to day, and they change without telling us. What
          is written here is their shape, which is stable. Every entry links to its own documentation for
          everything that is not.
        </p>
      </section>

      <SiteFooter />
      <SupportBot />
    </div>
  )
}
