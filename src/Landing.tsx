import { useEffect, useState } from 'react'
import { SupportBot } from './components/SupportBot'
import { useWork } from './agents/workStore'
import { SiteHeader } from './components/SiteHeader'
import { Object3D } from './components/landing/Object3D'
import { DojoDiorama } from './components/landing/DojoDiorama'
import { LogoMarquee } from './components/landing/LogoMarquee'
import { Pricing } from './components/landing/Pricing'
import { TutorialOverlay } from './components/guide/TutorialOverlay'
import { APP_LIVE_COUNT } from './data/facts'
import { PROMISE_SEP, positioningFor } from './data/positioning'
import { FOR_WHOM, HOW, FAQ } from './data/promo'
import { say } from './data/bilingual'
import {
  PATH_MODULES, PATH_MODULE_COUNT, PATH_LEVEL_COUNT, PATH_HOURS,
  DISCOVERY_LEVEL_COUNT, DISCOVERY_MINUTES, modulePath, moduleNumber,
} from './data/curriculum'
import { TRADES, TRADE_COUNT, TRADE_LEVEL_COUNT, tradePath } from './data/trades'
import { PATH_EUR, TRADE_EUR, priceTag } from './data/plans'
import { useLang, useT } from './i18n'
import { BauhausIcon } from './components/BauhausIcon'
import { isIconName } from './data/icons'
import { SiteFooter } from './components/SiteFooter'

const C = { magenta: '#2f6bff', teal: '#08c2ac', orange: '#ff7a1a' }

/** Un nom d'icône venu d'un fichier de données · les données ne peuvent pas
 *  importer le composant (voir data/icons), donc le nom arrive en chaîne et on
 *  le valide ici plutôt que de laisser passer une icône vide. */
const glyph = (name: string) => (isIconName(name) ? name : 'dot')

/**
 * La page d'accueil · elle vend un parcours, et elle le vend dans l'ordre.
 *
 * ---------------------------------------------------------------------------
 * CE QU'ELLE A CESSÉ D'ÊTRE
 *
 * Elle présentait cinq piliers, trois cours, une académie, une salle de dojo
 * et une bibliothèque : la carte d'un produit, pas une offre. Quelqu'un qui
 * arrivait dessus devait comprendre l'organisation d'une maison avant de
 * savoir ce qu'il pouvait apprendre, et personne ne fait cet effort.
 *
 * Elle vend maintenant une chose : une semaine gratuite qui mène à un
 * parcours, et un métier en supplément. Les autres pages existent toujours et
 * restent liées depuis le pied de page ; elles ne sont simplement plus la
 * première chose qu'on lit.
 *
 * ---------------------------------------------------------------------------
 * AUCUN TEXTE N'EST ÉCRIT ICI
 *
 * Quatre blocs de prose anglaise vivaient dans cette page au milieu d'un site
 * traduit, parce qu'ils avaient été écrits dans le JSX là où aucune garde ne
 * regarde. Tout ce qui se lit vient maintenant de data/promo et du
 * dictionnaire, et tous les nombres viennent de data/curriculum, data/trades
 * et data/plans. Une académie qui annonce quarante dojos et en sert trente-neuf
 * a menti à son premier visiteur.
 */
export function Landing({ enter }: { enter: () => void }) {
  const goBilling = () => { useWork.getState().openStudio('billing'); enter() }
  const goAssistant = () => document.querySelector<HTMLButtonElement>('.sb-launch')?.click()
  const [howTo, setHowTo] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const secs = Array.from(document.querySelectorAll<HTMLElement>('.landing .lp-sec'))
    if (reduce || !('IntersectionObserver' in window)) { secs.forEach((s) => s.classList.add('lp-in')); return }
    secs.forEach((s) => s.classList.add('lp-reveal'))
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) e.target.classList.add('lp-in')
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 })
    secs.forEach((s) => io.observe(s))
    const safety = window.setTimeout(() => secs.forEach((s) => s.classList.add('lp-in')), 5000)
    return () => { io.disconnect(); clearTimeout(safety) }
  }, [])

  const t = useT()
  const lang = useLang()
  const pos = positioningFor(lang)

  return (
    <div className="landing">
      <SiteHeader enter={enter} />

      {/* LE HERO · le dojo en 3D reste, c'est l'identité. Ce qui change est
          l'action proposée : on n'entre plus dans un produit, on commence une
          semaine gratuite, et c'est la seule chose demandée. */}
      <section className="lp-hero lp-hero-stage">
        <div className="lp-hero-scene" aria-hidden>
          <DojoDiorama />
        </div>
        <div className="lp-hero-card">
          <h1>{pos.promiseLead}{PROMISE_SEP}<span className="hl-acid">{pos.promiseHl}</span></h1>
          <p className="lp-hero-sub">{pos.subtitle}</p>
          <div className="lp-hero-acts">
            <a className="lp-hero-go lp-cta-create" href="/7-jours">{t('lp2.heroGo')}</a>
            <button className="lp-hero-how" onClick={() => setHowTo(true)}>{t('lp.heroHow')}</button>
          </div>
          <a className="lp-hero-learn" href="/formation">
            {PATH_MODULE_COUNT} {t('g.cities')} · {PATH_LEVEL_COUNT} {t('g.dojos')} · {PATH_HOURS} {t('lp.hours')} · {t('lp.noCode')} →
          </a>
        </div>
      </section>

      <div className="lm-band">
        <p className="lm-cap">{t('lp.marquee')}</p>
        <LogoMarquee />
      </div>

      {/* À QUI C'EST DESTINÉ · avant tout le reste, parce que quelqu'un qui ne
          se reconnaît pas doit pouvoir partir en dix secondes. Lui faire lire
          un programme entier d'abord ne lui rend aucun service. */}
      <section className="lp-sec" id="pour-qui">
        <span className="lp-pill">{t('lp2.whoPill')}</span>
        <h2>{t('lp2.whoH2')}</h2>
        <div className="lp2-who">
          {FOR_WHOM.map((w) => (
            <div className="appcard lp2-w" key={w.glyph}>
              <BauhausIcon name={glyph(w.glyph)} size={22} />
              <b>{say(w.title, lang)}</b>
              <span>{say(w.body, lang)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CE QU'IL Y A DEDANS · les trois formules avec leur prix, tout de
          suite. Faire descendre quelqu'un sur sept sections avant de lui dire
          combien ça coûte est la façon la plus sûre de le perdre en chemin. */}
      <section className="lp-sec alt" id="dedans">
        <Object3D kind="briefcase" color={C.magenta} side="right" parallax={0.16} />
        <span className="lp-pill">{t('lp2.insidePill')}</span>
        <h2>{t('lp2.insideH2')}</h2>
        <div className="lp2-offers">
          <a className="appcard lp2-offer" href="/7-jours">
            <span className="lp2-o-price">{priceTag(0)}</span>
            <b>{t('lp2.o1')}</b>
            <em>{DISCOVERY_LEVEL_COUNT} {t('d.days')} · {DISCOVERY_MINUTES} {t('ac.min')}</em>
            <span>{t('lp2.o1b')}</span>
            <i>{t('lp2.o1go')} →</i>
          </a>
          <a className="appcard lp2-offer main" href="/formation">
            <span className="lp2-o-price">{priceTag(PATH_EUR)} <small>{t('price.once')}</small></span>
            <b>{t('lp2.o2')}</b>
            <em>{PATH_MODULE_COUNT} {t('g.cities')} · {PATH_LEVEL_COUNT} {t('g.dojos')} · {PATH_HOURS} {t('lp.hours')}</em>
            <span>{t('lp2.o2b')}</span>
            <i>{t('lp2.o2go')} →</i>
          </a>
          <a className="appcard lp2-offer" href="/metier">
            <span className="lp2-o-price">{priceTag(TRADE_EUR)} <small>{t('price.addOn')}</small></span>
            <b>{t('lp2.o3')}</b>
            <em>{TRADE_COUNT} {t('lp2.trades')} · {TRADE_LEVEL_COUNT} {t('g.dojos')}</em>
            <span>{t('lp2.o3b')}</span>
            <i>{t('lp2.o3go')} →</i>
          </a>
        </div>
      </section>

      {/* LES CITÉS · le programme en entier, visible sans payer. Cacher la
          liste derrière l'achat est ce que fait quelqu'un qui n'est pas fier
          de son sommaire. */}
      <section className="lp-sec" id="cites">
        <span className="lp-pill">{PATH_MODULE_COUNT} {t('g.cities')}</span>
        <h2>{t('lp2.citiesH2')}</h2>
        <p className="lp-lead">{t('lp2.citiesLead')}</p>
        <div className="lp2-cities">
          {PATH_MODULES.map((m) => (
            <a className="lp2-city" key={m.id} href={modulePath(m.id)} style={{ ['--ac' as string]: m.tint }}>
              <span className="lp2-c-n">{moduleNumber(m.id)}</span>
              <BauhausIcon className="lp2-c-g" name={m.glyph} size={20} />
              <b>{say(m.title, lang)}</b>
              <span>{say(m.blurb, lang)}</span>
              <em>{m.levels.length} {t('g.dojos')}</em>
            </a>
          ))}
        </div>
      </section>

      {/* COMMENT ÇA SE PASSE · quatre temps. C'est ce qui rend la chose
          faisable, et donc c'est ce qui décide quelqu'un qui a déjà abandonné
          trois cours en ligne. */}
      <section className="lp-sec alt" id="comment">
        <Object3D kind="gem" color={C.teal} side="left" parallax={0.12} />
        <span className="lp-pill">{t('lp2.howPill')}</span>
        <h2>{t('lp2.howH2')}</h2>
        <div className="lp-schema lp-flow lp2-how">
          {HOW.map((h, i) => (
            <div className="lp-node" key={h.glyph}>
              <span className="lp-nico">{i + 1}</span>
              <b>{say(h.title, lang)}</b>
              <span>{say(h.body, lang)}</span>
            </div>
          ))}
        </div>
        <p className="lp-lead sm">{PATH_LEVEL_COUNT} {t('lp2.badges')}</p>
      </section>

      {/* LES MÉTIERS · après le parcours, jamais avant. C'est un supplément, et
          le présenter d'abord ferait croire qu'il faut choisir son métier pour
          commencer. */}
      <section className="lp-sec" id="metiers">
        <span className="lp-pill">{TRADE_COUNT} {t('lp2.trades')}</span>
        <h2>{t('lp2.tradesH2')}</h2>
        <p className="lp-lead">{t('lp2.tradesLead')}</p>
        <div className="lp2-trades">
          {TRADES.map((tr) => (
            <a className="lp2-trade" key={tr.id} href={tradePath(tr.id)} style={{ ['--ac' as string]: tr.tint }}>
              <BauhausIcon name={tr.glyph} size={18} />
              <b>{say(tr.label, lang)}</b>
              <span>{say(tr.who, lang)}</span>
            </a>
          ))}
        </div>
      </section>

      {/* LES AVIS · vides, et dit en toutes lettres.
          Trois témoignages inventés auraient coûté une heure et auraient menti
          avant qu'on ait enseigné quoi que ce soit. Le dire est la seule chose
          qui reste vraie le jour où les vrais arrivent. */}
      <section className="lp-sec alt" id="avis">
        <span className="lp-pill">{t('lp2.saidPill')}</span>
        <h2>{t('lp2.saidH2')}</h2>
        <div className="lp2-empty">
          <p>{t('lp2.saidBody')}</p>
          <a className="lp-cta sm" href="/7-jours">{t('lp2.saidGo')} →</a>
        </div>
      </section>

      {/* LES QUESTIONS · celles qu'on se pose avant de payer, y compris celles
          qui dérangent. Une page de questions qui n'aborde que ce qui arrange
          se lit comme une page de vente, ce qu'elle est alors. */}
      <section className="lp-sec" id="questions">
        <h2>{t('lp2.faqH2')}</h2>
        <div className="lp2-faq">
          {FAQ.map((qa) => (
            <details className="lp2-qa" key={qa.q.en}>
              <summary>{say(qa.q, lang)}</summary>
              <p>{say(qa.a, lang)}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="lp-sec alt" id="pricing">
        <Object3D kind="gem" color={C.orange} side="left" parallax={0.12} />
        <h2>{t('lp.priceH2')}</h2>
        <Pricing enter={enter} goBilling={goBilling} goAssistant={goAssistant} connectors={APP_LIVE_COUNT} />
      </section>

      {/* CE QUE NOUS NE FAISONS PAS · gardé, et raccourci. Quelqu'un qui vient
          faire faire son travail doit l'apprendre ici, pas après avoir payé. */}
      <section className="lp-sec" id="not">
        <h2>{t('lp.notH2')}</h2>
        <ul className="lp-nots">
          {pos.notThis.map((line) => <li key={line}>{line}</li>)}
        </ul>
      </section>

      <section className="lp-final">
        <Object3D kind="rocket" color={C.orange} side="right" parallax={0.1} />
        <span className="lp-ico" style={{ background: C.orange }}><BauhausIcon name="play" size={22} /></span>
        <h2>{t('lp2.finalH2')}</h2>
        <a className="lp-cta big lp-cta-create" href="/7-jours">{t('lp2.heroGo')} →</a>
        <p className="lp-foot">{t('lp2.finalFoot')}</p>
      </section>

      <SiteFooter />
      <SupportBot />
      {howTo && <TutorialOverlay onClose={() => setHowTo(false)} onStart={() => { setHowTo(false); enter() }} />}
    </div>
  )
}
