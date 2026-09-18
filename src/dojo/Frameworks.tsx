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
import { FRAMEWORKS, FRAMEWORK_COUNT, FRAMEWORK_LANGS, type Framework } from '../data/frameworks'
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
          The {USE_CASE_COUNT} paths in the dojo end with a file: an instruction, tool schemas, a manifest. This
          page is the step after, and it is the one nobody teaches: which framework to take, and what your file
          becomes once you are inside it.
        </p>
      </section>

      {/* CE QU'ON N'ÉCRIT PAS, et pourquoi · dit AVANT le tableau, pas en
          note de bas de page. Un lecteur qui cherche du code doit savoir tout
          de suite qu'il n'y en aura pas et pourquoi, sinon il descend toute la
          page avant de se sentir floué. */}
      <section className="lp-sec alt fw-note">
        <h2>There is no code on this page, on purpose</h2>
        <p className="lp-lead">
          These projects move fast, and a snippet written today is wrong in a few months: someone copies it, it
          breaks, and they think they misunderstood. So we teach the part that does not go stale, which is also
          the part that actually takes the time: <b>what your agent becomes in each framework</b>. A system
          prompt is an instruction here, a backstory there, a typed signature elsewhere. Once you know that, the
          current documentation is a five minute read instead of an afternoon.
        </p>
        <p className="lp-lead sm">
          We do not track these {FRAMEWORK_COUNT} projects day to day, and they change without telling us. What
          is written here is their shape, which is stable. Every entry links to its own documentation for
          everything that is not.
        </p>
      </section>

      <section className="lp-sec">
        <h2>{FRAMEWORK_COUNT} frameworks, and what each one is for</h2>
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

      <SiteFooter />
      <SupportBot />
    </div>
  )
}
