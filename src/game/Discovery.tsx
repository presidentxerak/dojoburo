// LA SEMAINE GRATUITE · la porte d'entrée, et la seule chose qu'on y demande.
//
// ---------------------------------------------------------------------------
// POURQUOI UNE ADRESSE, ET POURQUOI RIEN D'AUTRE
//
// Sept leçons sont données. En échange on demande une adresse, ce qui est le
// marché habituel et un marché honnête tant qu'il est dit. Pas de mot de passe,
// pas de nom, pas de société, pas de « quel est votre besoin » : chaque champ
// ajouté fait partir des gens qui seraient restés, et aucun de ces champs ne
// sert à donner le cours.
//
// LES SEPT JOURS SONT MONTRÉS AVANT L'ADRESSE. Une liste cachée derrière un
// formulaire demande de payer avant de savoir quoi. Les titres sont donc
// lisibles par tout le monde ; c'est le contenu qui s'ouvre avec l'adresse.
//
// ---------------------------------------------------------------------------
// CE QUE CETTE PAGE NE PROMET PAS
//
// Elle ne promet pas un courrier par jour. Rien dans ce produit n'envoie de
// courrier aujourd'hui, et écrire « vous recevrez la leçon chaque matin »
// serait une promesse que le code ne tient pas. Ce qui est promis est ce qui
// existe : les sept jours sont ouverts, un par jour si vous voulez, et ils
// restent ouverts.
import { useState } from 'react'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { SupportBot } from '../components/SupportBot'
import { BauhausIcon } from '../components/BauhausIcon'
import { Lnk } from '../lib/router'
import { useHeadTags } from '../lib/headTags'
import { useLang, useT } from '../i18n'
import {
  say, DISCOVERY_MODULE, DISCOVERY_LEVEL_COUNT, DISCOVERY_MINUTES,
  PATH_MODULE_COUNT, PATH_LEVEL_COUNT, levelPath,
} from '../data/curriculum'
import { PATH_EUR, priceTag } from '../data/plans'
import { useGame } from './progress'
import { useAccess, giveEmail } from './access'

export function DiscoveryPage() {
  const lang = useLang()
  const t = useT()
  const g = useGame()
  const a = useAccess()
  const m = DISCOVERY_MODULE
  const d = g.discovery

  useHeadTags({
    title: `${t('d.title')} · DojoBuro`,
    description: t('d.lead'),
    path: '/7-jours',
  })

  return (
    <div className="landing dg2 ac dv" style={{ ['--ac' as string]: m.tint }}>
      <SiteHeader />

      <section className="lp-sec dv-hero">
        <span className="dv-kick">{t('g.free')}</span>
        <h1>{t('d.title')}</h1>
        <p className="lp-lead">{t('d.lead')}</p>
        <div className="lp-badges">
          <span>{DISCOVERY_LEVEL_COUNT} {t('d.days')}</span>
          <span>{DISCOVERY_MINUTES} {t('ac.min')}</span>
          <span>{priceTag(0)}</span>
        </div>

        {/* L'ADRESSE, OU LA REPRISE · un seul des deux, jamais les deux. Un
            formulaire qui reste affiché après avoir été rempli fait douter de
            ce qui a été enregistré. */}
        {a.hasEmail
          ? (
            <div className="dv-in">
              <Lnk className="lp-cta" href={levelPath(m.id, (d.next ?? m.levels[0]).id)}>
                {d.done > 0 ? t('ac.continue') : t('d.start')} · {say((d.next ?? m.levels[0]).title, lang)} →
              </Lnk>
              <p className="dv-with">{t('d.openedFor')} {a.email}</p>
            </div>
          )
          : <EmailForm />}
      </section>

      {/* LES SEPT JOURS · titres et promesses en clair. Ce qui manque sans
          l'adresse, c'est la leçon elle même, pas son intitulé. */}
      <section className="lp-sec">
        <h2>{t('d.whatH2')}</h2>
        <ol className="dv-days">
          {m.levels.map((l, i) => {
            const done = g.isDone(m.id, l.id)
            return (
              <li key={l.id} className={`appcard dv-day${done ? ' done' : ''}`}>
                <span className="dv-day-n">
                  {done ? <BauhausIcon name="check" size={13} /> : i + 1}
                </span>
                <span className="dv-day-txt">
                  <strong>{say(l.title, lang)}</strong>
                  <em>{say(l.learn, lang)}</em>
                </span>
                <span className="dv-day-min">{l.minutes} {t('ac.min')}</span>
                {a.hasEmail
                  ? <Lnk className="dv-day-go" href={levelPath(m.id, l.id)}>{t('g.enter')} →</Lnk>
                  : <span className="dv-day-lock"><BauhausIcon name="box" size={12} /></span>}
              </li>
            )
          })}
        </ol>
      </section>

      {/* CE QU'IL Y A APRÈS · dit à la fin, pas au début. Quelqu'un qui n'a pas
          encore commencé la semaine gratuite n'a aucune raison de lire un prix. */}
      <section className="lp-sec alt dv-after">
        <h2>{t('d.afterH2')}</h2>
        <p className="lp-lead">
          {PATH_MODULE_COUNT} {t('g.cities')} · {PATH_LEVEL_COUNT} {t('g.dojos')} · {priceTag(PATH_EUR)} {t('price.once')}
        </p>
        <Lnk className="lp-cta" href="/formation">{t('d.seePath')} →</Lnk>
      </section>

      <SiteFooter />
      <SupportBot />
    </div>
  )
}

/* ------------------------------------------------------------------ */

/** Le formulaire · un champ, un bouton, et ce qu'on fait de l'adresse écrit
 *  juste en dessous plutôt que dans une politique qu'on n'ouvrira pas. */
function EmailForm() {
  const t = useT()
  const [v, setV] = useState('')
  const ok = /.+@.+\..+/.test(v.trim())

  return (
    <form
      className="dv-form"
      onSubmit={(e) => { e.preventDefault(); if (ok) giveEmail(v) }}
    >
      <label className="dv-lab" htmlFor="dv-mail">{t('d.ask')}</label>
      <div className="dv-row">
        <input
          id="dv-mail"
          type="email"
          className="dv-inp"
          value={v}
          placeholder={t('d.place')}
          onChange={(e) => setV(e.target.value)}
          autoComplete="email"
        />
        <button className="lp-cta" type="submit" disabled={!ok}>{t('d.open')} →</button>
      </div>
      <p className="dv-fine">{t('d.fine')}</p>
    </form>
  )
}
