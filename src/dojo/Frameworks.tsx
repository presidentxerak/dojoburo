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
import { FRAMEWORKS, FRAMEWORK_COUNT, FRAMEWORK_LANGS, CONNECT_STEPS, frameworkIn, connectStepIn, primerIn, type Framework } from '../data/frameworks'
import { useLang, useT } from '../i18n'
import { FORMATS, type ExportFormat } from '../lib/agentExport'
import { USE_CASE_COUNT } from '../data/agentUseCases'

/** Le nom lisible d'un format · lu depuis agentExport, jamais recopié. */
const formatLabel = (id: ExportFormat) => FORMATS.find((f) => f.id === id)?.label ?? id

export function FrameworkCard({ f: f0, open, onToggle }: { f: Framework; open: boolean; onToggle: () => void }) {
  const lang = useLang()
  const t = useT()
  const f = frameworkIn(f0, lang)
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
          <p className="fw-shape"><b>{t('fw.models')}</b>{f.shape}</p>

          <h4>{t('fw.where')}</h4>
          <dl className="fw-fit">
            {(Object.keys(f.fit) as ExportFormat[]).map((k) => (
              <div key={k}>
                <dt>{formatLabel(k)}</dt>
                <dd>{f.fit[k]}</dd>
              </div>
            ))}
          </dl>

          <p className="fw-watch"><b>{t('fw.catches')}</b>{f.watch}</p>

          <div className="fw-when">
            <p className="fw-yes"><b>{t('fw.takeWhen')}</b>{f.when}</p>
            <p className="fw-no"><b>{t('fw.notWhen')}</b>{f.notWhen}</p>
          </div>

          <a className="fw-docs" href={f.docs} target="_blank" rel="noreferrer">
            {t('fw.readDocs')} <BauhausIcon name="play" size={11} />
          </a>
        </div>
      )}
    </article>
  )
}

export function FrameworksPage() {
  const [open, setOpen] = useState<string | null>(FRAMEWORKS[0].id)
  // LE FILTRE S'APPELAIT `lang` · c'est le langage de programmation, pas la
  // langue qu'on lit. Les deux au même endroit, l'un aurait masqué l'autre.
  const [only, setOnly] = useState<string | null>(null)
  const lang = useLang()
  const t = useT()
  const shown = only ? FRAMEWORKS.filter((f) => f.langs.includes(only)) : FRAMEWORKS
  const primer = primerIn(lang)

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
        <span className="lp-pill">{t('fw.pill')}</span>
        <h1>{t('fw.h1')}</h1>
        <p className="lp-lead">{USE_CASE_COUNT} {t('fw.lead')}</p>
      </section>

      {/* 1 · CE QUE C'EST · la première version de cette page ouvrait sur un
          comparatif de quinze projets. Utile pour qui sait déjà ce qu'est un
          framework, inutile pour tout le monde d'autre, c'est à dire pour le
          public de ce cours. On ne commence pas par « lequel prendre » quand
          la question réelle est « c'est quoi ». */}
      <section className="lp-sec alt fw-what">
        <h2><span className="ag-h2-n">01</span> {t('fw.h2what')}</h2>
        <p className="fw-plain">{primer.plain}</p>
        <blockquote className="ag-like">
          <span className="ag-like-k">{t('fw.thinkOf')}</span>
          {primer.like}
        </blockquote>

        <div className="ag-two">
          <div className="ag-panel">
            <h3><BauhausIcon name="box" size={17} /> {t('fw.gives')}</h3>
            <ul className="ag-need">
              {primer.gives.map((g, i) => (
                <li key={g}><span className="ag-need-n">{i + 1}</span>{g}</li>
              ))}
            </ul>
          </div>
          <div className="ag-panel">
            <h3><BauhausIcon name="cross" size={17} /> {t('fw.givesNot')}</h3>
            <p className="fw-not">{primer.doesNot}</p>
            <h3 className="fw-h3b"><BauhausIcon name="play" size={17} /> {t('fw.without')}</h3>
            <p className="fw-not">{primer.without}</p>
          </div>
        </div>

        <p className="fw-why"><b>{t('fw.whySoMany')}</b>{primer.whySoMany}</p>
      </section>

      {/* 2 · LA PROCÉDURE · quatre gestes, les mêmes dans les quinze projets.
          C'est ce qui rend la page enseignable : les noms changent, la
          procédure non. */}
      <section className="lp-sec fw-connect">
        <h2><span className="ag-h2-n">02</span> {t('fw.h2connect')}</h2>
        <p className="lp-lead">{t('fw.connectLead')}</p>
        <ol className="fw-steps">
          {CONNECT_STEPS.map((c0, i) => {
            const c = connectStepIn(c0, lang)
            return (
              <li key={c0.title}>
                <span className="fw-step-n">{i + 1}</span>
                <div>
                  <b>{c.title}</b>
                  <span className="fw-step-d">{c.does}</span>
                  <span className="fw-step-w"><b>{t('fw.stepWrong')}</b>{c.watch}</span>
                </div>
              </li>
            )
          })}
        </ol>
        <a className="fw-go" href="/build">
          <BauhausIcon name="play" size={12} /> {t('fw.buildFirst')}
        </a>
      </section>

      <section className="lp-sec alt">
        <h2><span className="ag-h2-n">03</span> {FRAMEWORK_COUNT} {t('fw.h2list')}</h2>
        <p className="lp-lead">{t('fw.listLead')}</p>
        <div className="fw-langs-filter">
          <button className={only === null ? 'on' : ''} onClick={() => setOnly(null)}>{t('fw.allLangs')}</button>
          {FRAMEWORK_LANGS.map((l) => (
            <button key={l} className={only === l ? 'on' : ''} onClick={() => setOnly(only === l ? null : l)}>{l}</button>
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
        <h2>{t('fw.noCodeH2')}</h2>
        <p className="lp-lead">
          {t('fw.noCodeA')} <b>{t('fw.noCodeB')}</b>. {t('fw.noCodeC')}
        </p>
        <p className="lp-lead sm">
          {t('fw.weDoNotTrack')} {FRAMEWORK_COUNT} {t('fw.noCodeD')}
        </p>
      </section>

      <SiteFooter />
      <SupportBot />
    </div>
  )
}
