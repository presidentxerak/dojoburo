import { useEffect, useState } from 'react'
import { PROFESSIONS, professionColor } from './data/professions'
import { SupportBot } from './components/SupportBot'
import { useWork } from './agents/workStore'
import { SiteHeader } from './components/SiteHeader'
import { Object3D } from './components/landing/Object3D'
import { DojoDiorama } from './components/landing/DojoDiorama'
import { StudioTeam } from './components/landing/TeamCards'
import { LogoMarquee } from './components/landing/LogoMarquee'
import { Pricing } from './components/landing/Pricing'
import { TutorialOverlay } from './components/guide/TutorialOverlay'
import { APP_LIVE_COUNT } from './data/facts'
import { TRACKS } from './data/academy'
import { ENTRY_COUNT, countByTrade } from './data/library'
import { PILLARS, COURSES, COURSE_COUNT, PROMISE_SEP, LESSON_COUNT, TRACK_COUNT, COURSE_HOURS, positioningFor, pillarIn } from './data/positioning'
import { useLang, useT } from './i18n'
import { BauhausIcon } from './components/BauhausIcon'
import { SiteFooter } from './components/SiteFooter'
import { USE_CASE_COUNT } from './data/agentUseCases'

// vivid complementary primaries used as per-section accent touches
const C = { magenta: '#2f6bff', teal: '#08c2ac', yellow: '#ffc61a', orange: '#ff7a1a', blue: '#2f6bff' }

/**
 * La page d'accueil · ce qu'on APPREND ici.
 *
 * Elle vendait une entreprise déjà dotée de son personnel : « vos coéquipiers
 * arrivent formés et branchés ». Le produit ne fait plus ça. Il enseigne — les
 * agents, les prompts, l'outillage, et la sobriété que les cours passent sous
 * silence. Chaque section de cette page a donc changé de sujet, pas de ton.
 *
 * Ce qui RESTE, et c'est voulu : le dojo en 3D plein écran, les cartes, les
 * objets qui flottent en marge. C'est l'identité visuelle, elle n'était pas en
 * cause — seul le discours l'était. Le dojo, lui, a changé de rôle : ce n'est
 * plus l'usine où le travail se fait, c'est la salle où l'on s'entraîne.
 *
 * Aucun chiffre n'est écrit ici : tout vient de ./data/positioning, qui les
 * dérive du contenu réel. Une académie qui annonce vingt leçons et en sert
 * dix-huit a menti à son premier visiteur.
 */
export function Landing({ enter }: { enter: () => void }) {
  // paid plans drop the user on the Billing / plans view inside the app
  const goBilling = () => { useWork.getState().openStudio('billing'); enter() }
  // The Enterprise card used to scroll to an #assistant section. That section
  // is gone; Dojobot is the launcher in the corner, so open it directly.
  const goAssistant = () => document.querySelector<HTMLButtonElement>('.sb-launch')?.click()
  // the "How to?" walkthrough · full screen, plays on its own
  const [howTo, setHowTo] = useState(false)

  // Scroll-reveal · each landing section cascades in as it enters the viewport.
  // An IntersectionObserver (root = viewport, so it works whichever element
  // actually scrolls) flips .lp-in; we keep observing (cheap) so nothing is
  // missed, and a safety timer reveals everything after a few seconds no matter
  // what. Reduced-motion / no-JS shows the page fully.
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
  // LE POSITIONNEMENT dans la langue lue · un seul point d'entrée, parce que
  // trois tests de langue disséminés dans cette page seraient trois endroits
  // où les versions commenceraient à diverger.
  const pos = positioningFor(lang)
  // LE LIBELLÉ D'UN PILIER · une seule fonction, partagée avec les panneaux du
  // maître et l'académie. Elles étaient trois ici et zéro là-bas.
  const inLang = (p: Parameters<typeof pillarIn>[0]) => pillarIn(p, lang)

  return (
    <div className="landing">
      <SiteHeader enter={enter} />

      {/* LE HERO · un dojo 3D plein écran, et le texte posé dessus dans une
          carte de verre. Il reste tel quel : le lieu est l'identité du produit,
          et il dit maintenant la bonne chose: une salle où l'on s'entraîne.
          Seul le texte a changé de promesse.

          Le bouton principal n'envoie plus créer une entreprise, il ouvre le
          dojo, où le maître accueille et où l'on choisit son agent. C'est la
          modification qui compte vraiment sur cette page : ce qu'on propose de
          FAIRE en arrivant. */}
      <section className="lp-hero lp-hero-stage">
        <div className="lp-hero-scene" aria-hidden>
          <DojoDiorama />
        </div>
        <div className="lp-hero-card">
          <h1>{pos.promiseLead}{PROMISE_SEP}<span className="hl-acid">{pos.promiseHl}</span></h1>
          <p className="lp-hero-sub">{pos.subtitle}</p>
          <div className="lp-hero-acts">
            <a className="lp-hero-go lp-cta-create" href="/build">{t('lp.heroGo')}</a>
            <button className="lp-hero-how" onClick={() => setHowTo(true)}>{t('lp.heroHow')}</button>
          </div>
          <a className="lp-hero-learn" href="/academy">
            {TRACK_COUNT} {t('lp.heroLearn')} · {LESSON_COUNT} {t('lp.lessons')} · {COURSE_HOURS} {t('lp.hours')} · {t('lp.noCode')} →
          </a>
        </div>
      </section>

      <div className="lm-band">
        <p className="lm-cap">{t('lp.marquee')}</p>
        <LogoMarquee />
      </div>

      {/* LES TROIS COURS · ce qu'on vient apprendre, avant la carte complète
          du produit. Un centre de formation annonce ses cours ; une plateforme
          annonce ses fonctionnalités. On n'est plus une plateforme. */}
      <section className="lp-sec" id="courses">
        <span className="lp-pill">{COURSE_COUNT} {t('lp.coursesPill')}</span>
        <h2>{t('lp.coursesH2a')} {COURSE_COUNT} {t('lp.coursesH2b')}</h2>
        <p className="lp-lead">{t('lp.coursesLead')}</p>
        <div className="lp-courses">
          {COURSES.map((c, i) => (
            <a className="lp-course" key={c.id} href={c.path}>
              <span className="lp-course-n" aria-hidden>{i + 1}</span>
              <BauhausIcon className="lp-course-g" name={c.glyph} size={24} />
              <b>{inLang(c).nav}</b>
              <span>{inLang(c).blurb}</span>
              <em>{t('lp.open')} →</em>
            </a>
          ))}
        </div>
      </section>

      {/* LES PILIERS · la carte du produit, après les cours. Un visiteur qui
          arrive avec l'ancienne page en tête doit voir en trois secondes que
          la maison a changé de métier. Le compte vient de la liste elle même :
          il annonçait quatre choses alors qu'il y en avait cinq. */}
      <section className="lp-sec alt" id="pillars">
        <span className="lp-pill">{PILLARS.length} {t('lp.pillarsPill')}</span>
        <h2>{t('lp.pillarsH2')}</h2>
        <div className="lp-pillars">
          {PILLARS.map((p) => (
            <a className="lp-pillar" key={p.id} href={p.path}>
              <BauhausIcon className="lp-pillar-g" name={p.glyph} size={24} />
              <b>{inLang(p).title}</b>
              <span>{inLang(p).blurb}</span>
              <em>{inLang(p).nav} →</em>
            </a>
          ))}
        </div>
      </section>

      {/* L'ACADÉMIE · les pistes telles qu'elles existent, avec leur vrai
          nombre de leçons. Les cartes sont celles du produit, c'est le style
          qu'on garde. */}
      <section className="lp-sec" id="academy">
        <Object3D kind="briefcase" color={C.magenta} side="right" parallax={0.16} />
        <span className="lp-pill">{t('lp.acPill')}</span>
        <h2>{t('lp.acH2')}</h2>
        <p className="lp-lead sm">
          Written for someone who has never heard the words agent, token or context window, and taken all the
          way to a working system they understand line by line. One idea per block, a real example every time
          an abstraction appears, and honest numbers throughout.
        </p>
        <div className="lp-tracks">
          {/* la variable s'appelait `t`, comme le traducteur · deux choses
              différentes sous le même nom dans la même portée est la façon la
              plus discrète de casser une page */}
          {TRACKS.map((tr) => (
            <a className="lp-track" key={tr.slug} href={`/academy/${tr.slug}`} style={{ ['--pc' as never]: tr.tint }}>
              <BauhausIcon className="lp-track-g" name={tr.glyph} size={22} />
              <b>{tr.label}</b>
              <span className="lp-track-lvl">{tr.level} · {tr.lessons.length} {t('lp.lessons')}</span>
              <span className="lp-track-blurb">{tr.blurb}</span>
            </a>
          ))}
        </div>
      </section>

      {/* LA SOBRIÉTÉ · le pilier qui nous distingue, donc il ne se cache pas
          en bas de page. Les chiffres précis arrivent avec l'outil ; ici on
          annonce la méthode, pas un résultat qu'on n'a pas encore mesuré. */}
      <section className="lp-sec alt" id="frugality">
        <Object3D kind="gem" color={C.teal} side="left" parallax={0.12} />
        <span className="lp-pill">{t('lp.frPill')}</span>
        <h2>{t('lp.frH2')}</h2>
        <p className="lp-lead">
          A prompt that carries the whole conversation on every turn, an agent that re-reads a file it already
          knows, a loop nobody stopped: none of it shows up until the invoice does. The course measures it in
          two units at once: <b>tokens</b> and <b>euros</b>. Then it gives you the levers, the settings you choose
          before writing a word, and the way the prompt itself is written: each with the saving it actually buys
          rather than the one it is said to buy.
        </p>
        <div className="lp-schema lp-flow">
          <div className="lp-node"><span className="lp-nico">1</span><b>{t('lp.frN1')}</b><span>{t('lp.frN1s')}</span></div>
          <span className="lp-arrow">→</span>
          <div className="lp-node"><span className="lp-nico">2</span><b>{t('lp.frN2')}</b><span>{t('lp.frN2s')}</span></div>
          <span className="lp-arrow">→</span>
          <div className="lp-node"><span className="lp-nico">3</span><b>{t('lp.frN3')}</b><span>{t('lp.frN3s')}</span></div>
        </div>
        <p className="lp-lead sm lp-soon">
          <a href="/frugality">{t('lp.frGo')} →</a>
        </p>
      </section>

      {/* LA BIBLIOTHÈQUE · par métier, parce que c'est comme ça qu'on la
          cherche. La grille des métiers existait déjà et servait à choisir une
          équipe ; elle sert maintenant à filtrer un catalogue. */}
      <section className="lp-sec" id="library">
        <Object3D kind="network" color={C.yellow} side="right" parallax={0.12} />
        <span className="lp-pill">{t('lp.libPill')}</span>
        <h2>{t('lp.libH2')}</h2>
        <p className="lp-lead sm">
          Not a wall of clever one-liners. Each entry says what it is for, why it is written that way, what it
          costs to run, and what to change for your own case. Pick your trade and take what fits.
        </p>
        {/* Les métiers MÈNENT au catalogue, filtré · ils ont été de simples
            pastilles le temps d'un lot, parce qu'un filtre qui ne filtre rien
            est pire qu'un filtre absent. Ceux qui n'ont encore aucun fichier
            restent inertes plutôt que d'ouvrir une page vide. */}
        <div className="lp-trades">
          {PROFESSIONS.map((p) => {
            const n = countByTrade(p.id)
            const style = { ['--pc' as never]: professionColor(p.id) }
            return n > 0
              ? <a className="lp-trade" key={p.id} style={style} href={`/library?trade=${p.id}`}>{p.label} <i>{n}</i></a>
              : <span className="lp-trade lp-trade-soon" key={p.id} style={style}>{p.label}</span>
          })}
        </div>
        <p className="lp-lead sm lp-soon">
          <a href="/library">{t('lp.libGo')} · {ENTRY_COUNT} {t('lp.libFiles')} →</a>
        </p>
      </section>

      {/* LE DOJO · il reste, et il garde ses cartes. Ce qui change est son
          rôle : on n'y fait plus produire une équipe, on y ouvre un coéquipier
          pour lire le prompt qui le rend ce qu'il est. */}
      <section className="lp-sec alt" id="dojo">
        {/* LA SALLE, telle qu'elle est · cette section décrivait encore des
            « coéquipiers » qu'on ouvre un par un. Ce sont douze agents
            endormis, un par forme de problème, et c'est la première chose que
            voit quelqu'un qui entre. La page d'accueil doit décrire la pièce
            qui existe, pas celle d'avant. */}
        <span className="lp-pill">{t('lp.dojoPill')}</span>
        <h2>{t('lp.dojoH2a')} {USE_CASE_COUNT} {t('lp.dojoH2b')}</h2>
        <p className="lp-lead sm">
          They are asleep because none of them exists yet. Pick the shape of problem you actually have and that
          one wakes up, then you build it from a blank page. Below is the same room from the other side: open a
          character, read the brief that makes it what it is, change it and watch what changes.
        </p>
        <p className="lp-lead sm lp-soon">
          <a href="/build">{t('lp.dojoGo')} →</a>
        </p>
        <StudioTeam enter={enter} />
      </section>

      {/* CE QUE NOUS NE FAISONS PLUS · en toutes lettres. Quelqu'un qui arrive
          avec l'ancienne promesse en tête doit l'apprendre ici, pas après
          avoir créé un compte. */}
      <section className="lp-sec" id="not">
        <h2>{t('lp.notH2')}</h2>
        <ul className="lp-nots">
          {pos.notThis.map((line) => <li key={line}>{line}</li>)}
        </ul>
        <p className="lp-lead sm">
          If you came here to have the work done for you, this is the wrong shop, and we would rather you knew
          now. If you came here to learn how it is done, and what it costs, start with lesson one.
        </p>
      </section>

      <section className="lp-sec alt" id="pricing">
        <Object3D kind="gem" color={C.orange} side="left" parallax={0.12} />
        <h2>{t('lp.priceH2')}</h2>
        <Pricing enter={enter} goBilling={goBilling} goAssistant={goAssistant} connectors={APP_LIVE_COUNT} />
      </section>

      <section className="lp-final">
        <Object3D kind="rocket" color={C.orange} side="right" parallax={0.1} />
        <span className="lp-ico" style={{ background: C.orange }}><BauhausIcon name="play" size={22} /></span>
        <h2>{t('lp.finalH2')}</h2>
        <a className="lp-cta big lp-cta-create" href="/build">{t('lp.finalGo')} →</a>
        <p className="lp-foot">{t('lp.finalFoot')}</p>
      </section>

      <SiteFooter />
      <SupportBot />
      {howTo && <TutorialOverlay onClose={() => setHowTo(false)} onStart={() => { setHowTo(false); enter() }} />}
    </div>
  )
}
