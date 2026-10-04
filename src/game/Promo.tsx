// LA LANDING PROMO · /decouvrir. DojoBuro de A à Z, et la formation gratuite
// au centre.
//
// ---------------------------------------------------------------------------
// LE FLUX
//
// Demandé : « créer une landing promo qui explique de A à Z Dojoburo et qui met
// en avant la formation gratuite. Trouve la meilleure UX et flow pour cela ».
//
//   1 · LE FORMULAIRE EST DANS LE HÉROS · une adresse, un bouton. Personne ne
//       doit descendre pour trouver l'action principale.
//   2 · APRÈS L'ENVOI, LA PREMIÈRE LEÇON S'OUVRE · pas de page « merci », pas
//       d'e-mail à aller chercher : l'élève tombe dans son premier dojo. La
//       valeur arrive avant la moindre attente.
//   3 · LA NEWSLETTER EST UNE CASE À PART, NON COCHÉE · l'accès gratuit n'en
//       dépend pas (RGPD). Le texte de la case dit ce qu'on y gagne.
//   4 · LE RESTE RÉPOND AUX OBJECTIONS DANS L'ORDRE · comment ça marche, ce
//       que contient le gratuit (le programme entier, lisible sans rien
//       donner), à quoi ressemble une leçon, pourquoi on revient (grades, jeu,
//       communauté), ce qui vient après et combien ça coûte, les questions.
//   5 · LE FORMULAIRE REVIENT EN BAS · pour qui a tout lu.
//
// Pas de barre du bas ici : c'est une page d'entrée, une seule action compte.
// Les couleurs sont celles du jeu (clair par défaut, sombre au choix).
import { SEO } from '../data/seo'
import { GameFooter } from './GameFooter'
import { useState } from 'react'
import { Lnk, navigate } from '../lib/router'
import { useHeadTags } from '../lib/headTags'
import { useLang, useT } from '../i18n'
import { say, type Bi } from '../data/bilingual'
import { LP } from '../data/landing'
import { FAQ } from '../data/promo'
import { DISCOVERY_MODULE, DISCOVERY_LEVEL_COUNT, DISCOVERY_MINUTES } from '../data/curriculum'
import { TRADES } from '../data/trades'
import { PACK_COUNT, FREE_PACK, lessonPath, PACKS, eurOf } from '../data/packs'

/** les formations qui se vendent au prix d'un temple · le week-end est gratuit */
const PAID_COUNT = PACKS.filter((p) => eurOf(p) > 0).length
import { TEMPLE_EUR, PASS_EUR, priceTag } from '../data/plans'
import { giveEmail } from './access'
import { sendSignup } from '../lib/newsletter'
import { Logo } from '../components/Logo'
import { Wordmark } from '../components/Wordmark'
import { LangSwitch } from '../components/LangSwitch'
import { SupportBot } from '../components/SupportBot'
import { RANKS } from './ranks'
import { GradeChibi } from '../pixel/GradeChibi'
import { PixelIcon } from '../pixel/PixelIcon'
import { ChibiSprite } from '../pixel/ChibiSprite'
import { masterOf } from '../pixel/masters'
import { gridToUrl } from '../pixel/raster'
import { drawRoof, drawFloorStrip, drawBase } from '../temple/art/facade'
import { drawFloor } from '../temple/art/floors'

const FIRST_LESSON = lessonPath(FREE_PACK.id, DISCOVERY_MODULE.levels[0].id)

export function PromoPage() {
  const lang = useLang()
  const t = useT()
  const s = (b: Bi) => say(b, lang)

  useHeadTags({
    title: s(SEO.promo.title),
    description: s(SEO.promo.description),
    path: '/decouvrir',
  })

  return (
    <div className="gm promo">
      <header className="gm-top promo-top">
        <Lnk className="gm-brand" href="/decouvrir">
          <Logo size={30} />
          <span className="gm-brand-wm"><Wordmark /></span>
        </Lnk>
        <div className="gm-top-right">
          <LangSwitch compact />
          <Lnk className="promo-signin" href="/profil#compte">{s(LP.signIn)}</Lnk>
          <a className="gm-cta promo-top-go" href="#commencer">{s(LP.start)}</a>
        </div>
      </header>

      <main className="promo-main">
        {/* 1 · LE HÉROS · la promesse, puis le formulaire, tout de suite. */}
        <section className="promo-hero" id="commencer">
          <div className="promo-hero-t">
            <span className="promo-kicker">
              {s(LP.kicker)} · {DISCOVERY_LEVEL_COUNT} {s(LP.lessons)} · {DISCOVERY_MINUTES} {s(LP.min)}
            </span>
            <h1 className="promo-h1">{s(LP.h1)}</h1>
            <p className="promo-sub">{s(LP.sub)}</p>
            <StartForm source="landing" />
          </div>
          <div className="promo-hero-art" aria-hidden="true">
            <HeroTemple />
          </div>
        </section>

        <ul className="promo-facts">
          <li><b>{DISCOVERY_LEVEL_COUNT}</b><span>{s(LP.factLessons)}</span></li>
          <li><b>{DISCOVERY_MINUTES}</b><span>{s(LP.factMinutes)}</span></li>
          <li><b>{PACK_COUNT}</b><span>{s(LP.factTrainings)}</span></li>
          <li><b>{priceTag(0)}</b><span>{s(LP.factFree)}</span></li>
        </ul>

        {/* 2 · COMMENT ÇA MARCHE */}
        <section className="promo-sec">
          <span className="promo-pill">{s(LP.howPill)}</span>
          <h2 className="promo-h2">{s(LP.howH2)}</h2>
          <ol className="promo-steps">
            {LP.steps.map((st, i) => (
              <li key={i}>
                <span className="promo-step-n">{i + 1}</span>
                <b>{s(st.title)}</b>
                <span>{s(st.body)}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* 3 · LE PROGRAMME GRATUIT · entier, lisible sans rien donner. */}
        <section className="promo-sec">
          <span className="promo-pill free">{s(LP.freePill)}</span>
          <h2 className="promo-h2">{s(LP.freeH2)}</h2>
          <p className="promo-lead">{s(LP.freeLead)}</p>
          <ol className="promo-lessons">
            {DISCOVERY_MODULE.levels.map((l, i) => (
              <li key={l.id}>
                <span className="promo-lesson-n">{i + 1}</span>
                <span className="promo-lesson-t">
                  <b>{s(l.title)}</b>
                  <em>{s(l.learn)}</em>
                </span>
                <span className="promo-lesson-m">{l.minutes} {s(LP.min)}</span>
              </li>
            ))}
          </ol>
          <a className="gm-cta" href="#commencer">{s(LP.start)} →</a>
        </section>

        {/* 4 · UNE LEÇON · ce qu'on y trouve, dans l'ordre de la page. */}
        <section className="promo-sec">
          <span className="promo-pill">{s(LP.lessonPill)}</span>
          <h2 className="promo-h2">{s(LP.lessonH2)}</h2>
          <div className="promo-parts">
            {LP.lessonParts.map((p, i) => (
              <div className="promo-part" key={i}>
                <span className="promo-part-n">{i + 1}</span>
                <b>{s(p.title)}</b>
                <span>{s(p.body)}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5 · POURQUOI ON REVIENT · les grades, le jeu, la communauté. */}
        <section className="promo-sec">
          <span className="promo-pill">{s(LP.playPill)}</span>
          <h2 className="promo-h2">{s(LP.playH2)}</h2>
          <p className="promo-lead">{s(LP.playLead)}</p>
          <ol className="promo-belts">
            {RANKS.map((r) => (
              <li key={r.id} style={{ ['--belt' as string]: r.tint }}>
                <GradeChibi rank={r} size={64} />
                <b>{s(r.belt)}</b>
                <em>{s(r.title)}</em>
              </li>
            ))}
          </ol>
          <div className="promo-duo">
            <div className="promo-card">
              <PixelIcon name="trainings" size={48} />
              <h3>{s(LP.gameH3)}</h3>
              <p>{s(LP.gameBody)}</p>
              <Lnk className="cc-btn cc-slate" href="/">{s(LP.gameGo)} →</Lnk>
            </div>
            <div className="promo-card">
              <PixelIcon name="account" size={48} />
              <h3>{s(LP.clanPill)} · {s(LP.clanH2)}</h3>
              <p>{s(LP.clanBody)}</p>
              <Lnk className="cc-btn cc-slate" href="/clan">{s(LP.clanGo)} →</Lnk>
            </div>
          </div>
        </section>

        {/* 6 · ENSUITE · les formations payantes et leur prix, sans détour. */}
        <section className="promo-sec">
          <span className="promo-pill">{s(LP.nextPill)}</span>
          <h2 className="promo-h2">{s(LP.nextH2)}</h2>
          <div className="promo-duo">
            <div className="promo-card">
              <PixelIcon name="badges" size={48} />
              <h3>{s(LP.unitTitle)}</h3>
              <p className="promo-price"><b>{priceTag(TEMPLE_EUR)}</b> {s(LP.once)} · {PAID_COUNT} {s(LP.trainings)}</p>
              <p>{s(LP.unitBody)}</p>
              <div className="promo-trades">
                {TRADES.map((tr) => <span key={tr.id} style={{ ['--ac' as string]: tr.tint }}>{s(tr.label)}</span>)}
              </div>
            </div>
            <div className="promo-card">
              <PixelIcon name="trainings" size={48} />
              <h3>{s(LP.passTitle)}</h3>
              <p className="promo-price"><b>{priceTag(PASS_EUR)}</b> {s(LP.forLife)}</p>
              <p>{s(LP.passBody)}</p>
            </div>
          </div>
          <Lnk className="cc-btn cc-slate" href="/tarifs">{s(LP.seePrices)} →</Lnk>
        </section>

        {/* 7 · LES QUESTIONS */}
        <section className="promo-sec">
          <h2 className="promo-h2">{s(LP.faqH2)}</h2>
          <div className="promo-faq">
            {FAQ.map((qa) => (
              <details key={qa.q.en}>
                <summary>{s(qa.q)}</summary>
                <p>{s(qa.a)}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 8 · LE FORMULAIRE, ENCORE · pour qui a tout lu. */}
        <section className="promo-sec promo-final">
          <h2 className="promo-h2">{s(LP.finalH2)}</h2>
          <p className="promo-lead">{s(LP.finalBody)}</p>
          <StartForm source="landing" />
        </section>
        <p className="promo-legal">
          <Lnk href="/privacy">{t('nav.privacy')}</Lnk> · <Lnk href="/terms">{t('nav.terms')}</Lnk>
        </p>
      </main>
      <GameFooter />
      <SupportBot />
    </div>
  )
}

/** LE FORMULAIRE · une adresse, la case newsletter à part, et la première
 *  leçon qui s'ouvre aussitôt. */
function StartForm({ source }: { source: 'landing' }) {
  const lang = useLang()
  const t = useT()
  const [v, setV] = useState('')
  const [news, setNews] = useState(false)
  const ok = /.+@.+\..+/.test(v.trim())
  return (
    <form
      className="promo-form"
      onSubmit={(e) => {
        e.preventDefault()
        if (!ok) return
        giveEmail(v)
        void sendSignup(v, news, source)
        navigate(FIRST_LESSON)
      }}
    >
      <div className="promo-form-row">
        <input
          type="email" className="promo-inp" value={v} autoComplete="email" required
          aria-label={say(LP.place, lang)} placeholder={say(LP.place, lang)}
          onChange={(e) => setV(e.target.value)}
        />
        <button className="gm-cta" type="submit" disabled={!ok}>{say(LP.start, lang)} →</button>
      </div>
      <label className="ae-news">
        <input type="checkbox" checked={news} onChange={(e) => setNews(e.target.checked)} />
        <span>{t('d.news')}</span>
      </label>
      <p className="promo-fine">{say(LP.reassure, lang)} {t('d.fine')}</p>
    </form>
  )
}

/** LE TEMPLE GRATUIT EN VITRINE · le toit, deux étages et l'entrée, avec son
 *  maître. Les mêmes dessins que l'écran du temple (voir temple/art). */
export function HeroTemple() {
  const p = FREE_PACK
  const roof = gridToUrl(`roof:${p.id}`, () => drawRoof(p.tint))
  const floor = gridToUrl(`floor:${p.kit}:${p.tint}:0:`, () => drawFloor(p.kit, p.tint, 0))
  const floor2 = gridToUrl(`floor:${p.kit}:${p.tint}:1:`, () => drawFloor(p.kit, p.tint, 1))
  const strip = gridToUrl('strip', () => drawFloorStrip())
  const base = gridToUrl(`base:${p.id}`, () => drawBase(p.tint))
  const m = masterOf(p.id)
  return (
    <div className="promo-temple">
      {roof && <img src={roof} alt="" />}
      {floor2 && <img src={floor2} alt="" />}
      {strip && <img src={strip} alt="" />}
      <div className="promo-temple-f">
        {floor && <img src={floor} alt="" />}
        <span className="promo-temple-m"><ChibiSprite spec={m.spec} scale={1} /></span>
      </div>
      {base && <img src={base} alt="" />}
    </div>
  )
}
