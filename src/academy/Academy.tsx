// Dojo Academy · free, interactive courses on how agents actually work.
//
// Three surfaces:
//
//   /academy                      the whole curriculum, five tracks
//   /academy/<track>              one track, its lessons in order
//   /academy/<track>/<lesson>     the lesson itself, with its animated stage
//
// They are real URLs on purpose. The Academy is the front door: someone who
// searches "what is an AI agent" should land on lesson one, be able to read the
// whole thing without an account, and leave knowing how to build something.
//
// Everything is free and nothing is gated. Progress is kept in this browser (see
// ./progress), so the course remembers where you were without asking you to
// sign up first.
import { useState } from 'react'
import { SiteHeader } from '../components/SiteHeader'
import { TopBar } from '../components/TopBar'
import { SupportBot } from '../components/SupportBot'
import { Lnk, navigate } from '../lib/router'
import { useHeadTags, breadcrumb, SITE } from '../lib/headTags'
import { AcademyStage } from './AcademyStage'
import { Lab } from './Lab'
import { markDone, clearDone, recordAnswer, useProgress } from './progress'
import { MasterPanel } from '../dojo/MasterPanel'
import { COURSE_COUNT, PILLAR_BY_ID, pillarIn } from '../data/positioning'
import {
  TRACKS, TRACK_BY_SLUG, ALL_LESSONS, LESSON_COUNT, TOTAL_MINUTES,
  findLesson, neighbours, lessonPath, trackPath, academyLessonIn, trackIn,
  type Block, type Lesson, type Track,
} from '../data/academy'
import { useLang, useT, pick } from '../i18n'
import type { Lang } from '../i18n/lang'
import { BauhausIcon } from '../components/BauhausIcon'
import { SiteFooter } from '../components/SiteFooter'

const HOURS = Math.round((TOTAL_MINUTES / 60) * 10) / 10

/** Le nom du pilier « académie » dans la langue lue · c'est le mot sur lequel
 *  on a cliqué dans l'en-tête, et il doit être celui qu'on retrouve ici. */
const pillarNav = (lang: Lang) => pillarIn(PILLAR_BY_ID.academy, lang).nav

function Shell({ children, inApp }: { children: React.ReactNode; inApp?: boolean }) {
  return (
    <div className={`landing dg2 ac${inApp ? ' dg-inapp' : ''}`}>
      {inApp ? <TopBar /> : <SiteHeader />}
      {children}
      <SiteFooter />
      <SupportBot />
    </div>
  )
}

/** The trail back up. Real links, so it is crawlable as well as useful. */
function Crumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav className="ac-crumbs" aria-label="Breadcrumb">
      {items.map((it, i) => (
        <span key={it.path}>
          {i > 0 && <i aria-hidden>›</i>}
          {i === items.length - 1
            ? <b aria-current="page">{it.name}</b>
            : <Lnk href={it.path}>{it.name}</Lnk>}
        </span>
      ))}
    </nav>
  )
}

function Bar({ done, total }: { done: number; total: number }) {
  const pct = total ? Math.round((done / total) * 100) : 0
  return (
    <span className="ac-bar" title={`${done} of ${total} finished`}>
      <span style={{ width: `${pct}%` }} />
    </span>
  )
}

// ---------------------------------------------------------------------------
// /academy
// ---------------------------------------------------------------------------

// LA FOIRE AUX QUESTIONS · bilingue dans la même entrée, comme le reste.
// Elle est aussi lue par les moteurs de recherche (voir le JSON-LD plus bas),
// donc une question et sa réponse doivent rester appariées : deux tableaux
// parallèles se seraient décalés au premier ajout.
//
// LA DERNIÈRE RÉPONSE VENDAIT DES CRÉDITS · « Only running work costs credits,
// roughly one credit a step » a survécu à la refonte des prix, en page
// d'accueil de l'académie et dans les données structurées envoyées à Google.
// C'est la même faute que le questionnaire de la leçon sur les prix, au même
// endroit du produit, trouvée le même jour.
type Faq = { q: { en: string; fr: string }; a: { en: string; fr: string } }
const FAQ: Faq[] = [
  {
    q: { en: 'Is the Dojo Academy free?', fr: "L'académie du dojo est-elle gratuite ?" },
    a: {
      en: 'Yes: every lesson, in full, with no account required. Progress is saved in your browser so you can pick up where you left off.',
      fr: "Oui : chaque leçon est accessible en intégralité, sans compte. Votre progression est enregistrée dans votre navigateur afin que vous puissiez reprendre là où vous vous étiez arrêté.",
    },
  },
  {
    q: { en: 'Do I need to know how to code?', fr: 'Faut-il savoir coder ?' },
    a: {
      en: 'No. Nothing in the Academy or the app involves code, a terminal or an IDE. If those words mean nothing to you, lesson six explains them and then you can forget them.',
      fr: "Non. Ni l'académie ni l'application ne demandent de code, de terminal ou d'éditeur de code. Si ces termes vous sont inconnus, la leçon six les explique ; vous pourrez ensuite les laisser de côté.",
    },
  },
  {
    q: { en: 'What is an AI agent?', fr: "Qu'est-ce qu'un agent IA ?" },
    a: {
      en: 'An AI given a job it is responsible for, a method it follows every time, and tools it can actually use, as opposed to a chat window that only answers questions.',
      fr: "Une IA à laquelle on confie un métier dont elle a la responsabilité, une méthode qu'elle applique systématiquement et des outils qu'elle peut réellement manipuler, par opposition à une fenêtre de discussion qui se contente de répondre.",
    },
  },
  {
    q: { en: 'How long does the whole course take?', fr: 'Quelle est la durée totale du cours ?' },
    a: {
      en: `About ${HOURS} hours across ${LESSON_COUNT} lessons, and it is built to be read a lesson at a time rather than in one sitting.`,
      fr: `Environ ${HOURS} heures réparties sur ${LESSON_COUNT} leçons. Il est conçu pour être suivi une leçon à la fois plutôt que d'une seule traite.`,
    },
  },
  {
    q: { en: 'Do I need to pay to use what I learn?', fr: "Faut-il payer pour appliquer ce que j'apprends ?" },
    a: {
      en: 'No. Nothing in the dojo is metered, because nothing in it calls a paid model: reading the course, building a project and connecting apps are all free. The day you take an agent out and run it for real, your own provider bills you, and the dojo has already shown you what that run would cost.',
      fr: "Non. Rien n'est facturé dans le dojo, car rien n'y appelle un modèle payant : lire le cours, construire un projet et connecter des applications sont gratuits. Lorsque vous sortez un agent pour l'exécuter en conditions réelles, votre propre provider vous facture, et le dojo vous a déjà indiqué le coût de cette exécution.",
    },
  },
]

export function AcademyHome({ inApp }: { inApp?: boolean } = {}) {
  const p = useProgress()
  const lang = useLang()
  const t = useT()
  const started = p.doneCount > 0
  const first = ALL_LESSONS[0]
  const go = started ? p.nextUp : first
  const goLesson = academyLessonIn(go.lesson, lang)
  const tracks = TRACKS.map((x) => trackIn(x, lang))

  useHeadTags({
    title: `Dojo Academy · learn AI agents from zero · ${LESSON_COUNT} free lessons`,
    description: `The prompt engineering course at DojoBuro: what a token is, how an instruction is read, and how to write a brief a model actually follows. ${LESSON_COUNT} lessons, about ${HOURS} hours, no code and no account needed.`,
    path: '/academy',
    keywords: ['ai agent course', 'learn ai agents', 'free ai automation course', 'ai agents for beginners', 'what is an ai agent'],
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'Dojo Academy',
        description: `A free, interactive course that takes a complete beginner from "what is a token" to writing the instruction an agent actually follows.`,
        url: SITE + '/academy',
        provider: { '@type': 'Organization', name: 'DojoBuro', url: SITE },
        isAccessibleForFree: true,
        // LA LANGUE DÉCLARÉE SUIT CELLE QU'ON LIT · elle était écrite 'en' en
        // dur, ce qui annonçait à un moteur de recherche que la page est en
        // anglais pendant qu'elle affiche du français.
        inLanguage: lang,
        educationalLevel: 'Beginner',
        teaches: tracks.map((x) => x.blurb),
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'online',
          courseWorkload: `PT${TOTAL_MINUTES}M`,
        },
        syllabusSections: tracks.map((x, i) => ({
          '@type': 'Syllabus',
          name: x.label,
          description: x.blurb,
          position: i + 1,
        })),
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQ.map((f) => ({
          '@type': 'Question',
          name: pick(f.q, lang),
          acceptedAnswer: { '@type': 'Answer', text: pick(f.a, lang) },
        })),
      },
      breadcrumb([{ name: 'DojoBuro', path: '/' }, { name: 'Dojo Academy', path: '/academy' }]),
    ],
  })

  return (
    <Shell inApp={inApp}>
      <section className="lp-hero ac-hero">
        {/* LE DEUXIÈME DES TROIS COURS · il se présentait comme « l'académie »
            tout court, et promettait « un système d'équipes qui fait votre
            travail », ce qui est exactement l'ancien produit. Un visiteur qui
            arrive ici depuis l'en-tête a cliqué sur « Prompt engineering » et
            doit retrouver ce nom. */}
        <span className="ac-kicker">{t('ac.course')} 2 {t('ac.of')} {COURSE_COUNT} · {pillarNav(lang)}</span>
        <h1>{t('ac.heroA')} <span className="hl-acid">{t('ac.heroB')}</span>.</h1>
        <p className="lp-sub">{t('ac.sub')}</p>
        <p className="ac-sub-order">
          {t('ac.order').split(t('ac.orderLink'))[0]}
          <a href="/build">{t('ac.orderLink')}</a>
          {t('ac.order').split(t('ac.orderLink'))[1]}
        </p>
        <div className="ac-hero-go">
          <button className="lp-cta" onClick={() => navigate(lessonPath(go.track.slug, go.lesson.slug))}>
            {started ? `${t('ac.continue')} · ${goLesson.title}` : `${t('ac.start')} →`}
          </button>
          {started && <span className="ac-hero-prog"><Bar done={p.doneCount} total={p.total} />{p.doneCount} {t('ac.of')} {p.total} {t('ac.finished')}</span>}
        </div>
        <div className="lp-badges">
          <span>{LESSON_COUNT} {t('lp.lessons')}</span><span>~{HOURS} {t('lp.hours')}</span><span>{t('ac.freeNoAccount')}</span><span>{t('lp.noCode')}</span>
        </div>
      </section>

      <section className="lp-sec" id="tracks">
        <h2>{t('ac.curriculum')}</h2>
        <p className="lp-lead">{t('ac.curriculumLead')}</p>
        <div className="ac-tracks">
          {tracks.map((tr, i) => {
            const done = p.doneInTrack(tr.slug)
            const mins = tr.lessons.reduce((n, l) => n + l.minutes, 0)
            return (
              <article key={tr.slug} className="appcard ac-track" style={{ ['--ac' as string]: tr.tint }}>
                <header className="ac-track-h">
                  <span className="ac-track-g" style={{ background: tr.tint }}><BauhausIcon name={tr.glyph} size={18} /></span>
                  <span className="ac-track-n">{t('ac.track')} {i + 1}</span>
                  <span className="ac-level">{tr.level}</span>
                </header>
                <h3>{tr.label}</h3>
                <p className="ac-track-blurb">{tr.blurb}</p>
                <p className="ac-who"><b>{t('ac.forYouIf')}</b> {tr.who}</p>
                <ol className="ac-track-lessons">
                  {tr.lessons.map((l0) => {
                    const l = academyLessonIn(l0, lang)
                    return (
                      <li key={l.slug} className={p.isDone(tr.slug, l.slug) ? 'done' : ''}>
                        <Lnk href={lessonPath(tr.slug, l.slug)}>
                          <span className="ac-tick" aria-hidden>{p.isDone(tr.slug, l.slug) ? <BauhausIcon name="check" size={12} /> : null}</span>
                          {l.title}
                          <em>{l.minutes} {t('ac.min')}</em>
                        </Lnk>
                      </li>
                    )
                  })}
                </ol>
                <footer className="ac-track-f">
                  <Bar done={done} total={tr.lessons.length} />
                  <span>{done ? `${done}/${tr.lessons.length} ${t('ac.done')}` : `${tr.lessons.length} ${t('ac.lessonsWord')} · ${mins} ${t('ac.min')}`}</span>
                </footer>
                <Lnk className="ac-track-go" href={trackPath(tr.slug)}>{t('ac.openTrack')} →</Lnk>
              </article>
            )
          })}
        </div>
      </section>

      <section className="lp-sec alt" id="outcomes">
        <h2>{t('ac.outcomesH2')}</h2>
        <div className="lp-steps3">
          <div className="lp-step3"><span className="lp-step3-n dg2-n1">1</span><div><b>{t('ac.out1')}</b><span>{t('ac.out1s')}</span></div></div>
          <div className="lp-step3"><span className="lp-step3-n dg2-n2">2</span><div><b>{t('ac.out2')}</b><span>{t('ac.out2s')}</span></div></div>
          <div className="lp-step3"><span className="lp-step3-n dg2-n3">3</span><div><b>{t('ac.out3')}</b><span>{t('ac.out3s')}</span></div></div>
        </div>
      </section>

      <MasterPanel here="academy" />

      <section className="lp-sec" id="faq">
        <h2>{t('ac.faqH2')}</h2>
        <div className="ac-faq">
          {FAQ.map((f) => (
            <details key={f.q.en} className="ac-faq-item">
              <summary>{pick(f.q, lang)}</summary>
              <p>{pick(f.a, lang)}</p>
            </details>
          ))}
        </div>
        <p className="lp-note" style={{ marginTop: 18 }}>
          {t('ac.guideNote')}{' '}
          <a className="linklike" href="/guide">{t('ac.guideLink')}</a>.
        </p>
      </section>
    </Shell>
  )
}

// ---------------------------------------------------------------------------
// /academy/<track>
// ---------------------------------------------------------------------------

export function TrackPage({ slug, inApp }: { slug: string; inApp?: boolean }) {
  const p = useProgress()
  const lang = useLang()
  const t = useT()
  const track0 = TRACK_BY_SLUG[slug]
  const track = track0 ? trackIn(track0, lang) : undefined

  useHeadTags({
    title: track ? `${track.label} · Dojo Academy` : `${t('ac.noTrack')} · Dojo Academy`,
    description: track
      ? `${track.blurb} ${track.lessons.length} ${t('ac.lessonsWord')}.`
      : t('ac.noLessonBody'),
    path: trackPath(slug),
    keywords: track?.lessons.flatMap((l) => l.keywords).slice(0, 12),
    jsonLd: track ? [breadcrumb([
      { name: 'DojoBuro', path: '/' },
      { name: 'Dojo Academy', path: '/academy' },
      { name: track.label, path: trackPath(track.slug) },
    ])] : undefined,
  })

  if (!track) {
    return (
      <Shell inApp={inApp}>
        <section className="lp-sec">
          <h2>{t('ac.noTrack')}</h2>
          <p className="lp-lead">{t('ac.noTrackBody')} “{slug}”.</p>
          <p><Lnk className="lp-ghost" href="/academy">← {t('ac.back')}</Lnk></p>
        </section>
      </Shell>
    )
  }

  const mins = track.lessons.reduce((n, l) => n + l.minutes, 0)
  const done = p.doneInTrack(track.slug)
  // L'INDICE VIENT DE LA LISTE D'ORIGINE · `track` est une COPIE traduite, donc
  // indexOf n'y trouve rien et rendait -1, ce qui affichait « Piste 0 sur 5 »
  // et cachait les deux liens de bas de page.
  const i = TRACKS.findIndex((x) => x.slug === track.slug)
  const around = (n: number) => trackIn(TRACKS[n], lang)

  return (
    <Shell inApp={inApp}>
      <section className="lp-sec ac-track-hero" style={{ ['--ac' as string]: track.tint }}>
        <Crumbs items={[{ name: 'Academy', path: '/academy' }, { name: track.label, path: trackPath(track.slug) }]} />
        <div className="ac-track-head">
          <span className="ac-track-g big" style={{ background: track.tint }}><BauhausIcon name={track.glyph} size={26} /></span>
          <div>
            <h1>{track.label}</h1>
            <p className="lp-lead">{track.blurb}</p>
            <p className="ac-who"><b>{t('ac.forYouIf')}</b> {track.who}</p>
          </div>
        </div>
        <div className="lp-badges">
          <span>{t('ac.track')} {i + 1} {t('ac.of')} {TRACKS.length}</span><span>{track.level}</span>
          <span>{track.lessons.length} {t('ac.lessonsWord')} · {mins} {t('ac.min')}</span>
          {done > 0 && <span>{done} {t('ac.finished')}</span>}
        </div>
      </section>

      <section className="lp-sec">
        <ol className="ac-lessons">
          {track.lessons.map((l0, n) => {
            const l = academyLessonIn(l0, lang)
            return (
              <li key={l.slug} className={`appcard ac-lesson${p.isDone(track.slug, l.slug) ? ' done' : ''}`} style={{ ['--ac' as string]: track.tint }}>
                <Lnk href={lessonPath(track.slug, l.slug)}>
                  <span className="ac-lesson-n">{p.isDone(track.slug, l.slug) ? <BauhausIcon name="check" size={13} /> : n + 1}</span>
                  <span className="ac-lesson-txt">
                    <strong>{l.title}</strong>
                    <em>{l.summary}</em>
                  </span>
                  <span className="ac-lesson-min">{l.minutes} {t('ac.min')}</span>
                </Lnk>
              </li>
            )
          })}
        </ol>

        <div className="ac-trackfoot">
          {i > 0 && <Lnk className="lp-ghost" href={trackPath(TRACKS[i - 1].slug)}>← {around(i - 1).label}</Lnk>}
          {i < TRACKS.length - 1 && <Lnk className="lp-cta sm" href={trackPath(TRACKS[i + 1].slug)}>{around(i + 1).label} →</Lnk>}
        </div>
      </section>
    </Shell>
  )
}

// ---------------------------------------------------------------------------
// /academy/<track>/<lesson>
// ---------------------------------------------------------------------------

// LE GENRE D'UN BLOC · une clé de dictionnaire, pas une phrase écrite ici.
// `kind` reste un identifiant : c'est la façon dont le bloc se dessine, et il
// ne se traduit pas. Ce qui se traduit est le mot qu'on lit au-dessus.
const KIND_KEY: Record<Block['kind'], 'ac.kindIdea' | 'ac.kindExample' | 'ac.kindDo' | 'ac.kindWarn' | 'ac.kindCompare'> = {
  idea: 'ac.kindIdea', example: 'ac.kindExample', do: 'ac.kindDo', warn: 'ac.kindWarn', compare: 'ac.kindCompare',
}

function BlockView({ b }: { b: Block }) {
  const t = useT()
  return (
    <section className={`ac-block ac-${b.kind}`}>
      <span className="ac-block-kind">{t(KIND_KEY[b.kind])}</span>
      <h3>{b.title}</h3>
      <p>{b.body}</p>
      {b.points && (
        <ul className="ac-points">
          {b.points.map((x) => <li key={x}>{x}</li>)}
        </ul>
      )}
      {b.compare && (
        <div className="ac-table-wrap">
          <table className="ac-table">
            <thead><tr><th>{b.compare.a}</th><th>{b.compare.b}</th></tr></thead>
            <tbody>
              {b.compare.rows.map(([l, r]) => <tr key={l}><td>{l}</td><td>{r}</td></tr>)}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

function QuizView({ track, lesson }: { track: Track; lesson: Lesson }) {
  const p = useProgress()
  const t = useT()
  const saved = p.answerFor(track.slug, lesson.slug)
  const [pick, setPick] = useState<number | undefined>(saved)
  const answered = pick !== undefined
  const right = pick === lesson.quiz.answer

  return (
    <section className="ac-quiz">
      <span className="ac-block-kind">{t('ac.check')}</span>
      <h3>{lesson.quiz.q}</h3>
      <div className="ac-options">
        {lesson.quiz.options.map((o, i) => {
          const state = !answered ? '' : i === lesson.quiz.answer ? ' right' : i === pick ? ' wrong' : ' dim'
          return (
            <button
              key={o}
              className={`ac-option${state}`}
              disabled={answered}
              onClick={() => { setPick(i); recordAnswer(track.slug, lesson.slug, i) }}
            >
              <span className="ac-option-k" aria-hidden>{answered && i === lesson.quiz.answer ? <BauhausIcon name="check" size={12} /> : answered && i === pick ? <BauhausIcon name="cross" size={12} /> : String.fromCharCode(65 + i)}</span>
              {o}
            </button>
          )
        })}
      </div>
      {answered && (
        <p className={`ac-why${right ? ' right' : ''}`}>
          <b>{right ? t('ac.right') : t('ac.wrong')}</b> {lesson.quiz.why}
        </p>
      )}
    </section>
  )
}

export function LessonPage({ trackSlug, lessonSlug, inApp }: { trackSlug: string; lessonSlug: string; inApp?: boolean }) {
  const p = useProgress()
  const lang = useLang()
  const t = useT()
  const raw = findLesson(trackSlug, lessonSlug)
  // LA LEÇON DANS LA LANGUE LUE, une fois, en haut · tout ce qui suit lit
  // `found`, donc aucun écran ne peut en afficher une moitié dans l'autre
  // langue.
  const found = raw ? { track: trackIn(raw.track, lang), lesson: academyLessonIn(raw.lesson, lang) } : null
  const n0 = neighbours(trackSlug, lessonSlug)
  const { index } = n0
  const prev = n0.prev ? { track: n0.prev.track, lesson: academyLessonIn(n0.prev.lesson, lang) } : null
  const next = n0.next ? { track: n0.next.track, lesson: academyLessonIn(n0.next.lesson, lang) } : null

  useHeadTags({
    title: found ? `${found.lesson.title} · Dojo Academy` : `${t('ac.noLesson')} · Dojo Academy`,
    description: found?.lesson.summary ?? t('ac.noLessonBody'),
    path: lessonPath(trackSlug, lessonSlug),
    type: 'article',
    keywords: found?.lesson.keywords,
    jsonLd: found ? [
      {
        '@context': 'https://schema.org',
        '@type': 'LearningResource',
        name: found.lesson.title,
        description: found.lesson.summary,
        url: SITE + lessonPath(trackSlug, lessonSlug),
        learningResourceType: 'Lesson',
        educationalLevel: found.track.level,
        timeRequired: `PT${found.lesson.minutes}M`,
        isAccessibleForFree: true,
        inLanguage: lang,
        teaches: found.lesson.takeaway,
        isPartOf: { '@type': 'Course', name: 'Dojo Academy', url: SITE + '/academy' },
        provider: { '@type': 'Organization', name: 'DojoBuro', url: SITE },
      },
      breadcrumb([
        { name: 'DojoBuro', path: '/' },
        { name: 'Dojo Academy', path: '/academy' },
        { name: found.track.label, path: trackPath(trackSlug) },
        { name: found.lesson.title, path: lessonPath(trackSlug, lessonSlug) },
      ]),
    ] : undefined,
  })

  if (!found) {
    return (
      <Shell inApp={inApp}>
        <section className="lp-sec">
          <h2>{t('ac.noLesson')}</h2>
          <p className="lp-lead">{t('ac.noLessonBody')}</p>
          <p><Lnk className="lp-ghost" href="/academy">← {t('ac.back')}</Lnk></p>
        </section>
      </Shell>
    )
  }

  const { track, lesson } = found
  const isDone = p.isDone(track.slug, lesson.slug)

  return (
    <Shell inApp={inApp}>
      <article className="ac-lessonpage" style={{ ['--ac' as string]: track.tint }}>
        <header className="ac-lesson-hero">
          <Crumbs items={[
            { name: 'Academy', path: '/academy' },
            { name: track.label, path: trackPath(track.slug) },
            { name: lesson.title, path: lessonPath(track.slug, lesson.slug) },
          ]} />
          <span className="ac-lesson-tag" style={{ background: track.tint }}><BauhausIcon name={track.glyph} size={13} /> {track.label}</span>
          <h1>{lesson.title}</h1>
          <p className="lp-sub">{lesson.summary}</p>
          <div className="lp-badges">
            <span>{t('ac.lesson')} {index + 1} {t('ac.of')} {LESSON_COUNT}</span><span>{lesson.minutes} {t('ac.min')}</span><span>{track.level}</span><span>{t('ac.free')}</span>
          </div>
        </header>

        <div className="ac-lesson-body">
          <div className="ac-lesson-stage">
            <AcademyStage id={lesson.stage} />
            <span className="ac-stage-cap">{t('ac.watch')}</span>
          </div>

          <div className="ac-lesson-text">
            {lesson.blocks.map((b) => <BlockView key={b.title} b={b} />)}

            {/* L'ATELIER, avant la question · on manipule, puis on répond.
                L'ordre inverse aurait demandé de répondre sur ce qu'on n'a pas
                encore essayé, ce qui est exactement la façon dont on apprend à
                réciter sans comprendre. */}
            {lesson.lab && <Lab id={lesson.lab} />}

            <QuizView key={`${track.slug}/${lesson.slug}`} track={track} lesson={lesson} />

            <section className="ac-takeaway">
              <span className="ac-block-kind">{t('ac.remember')}</span>
              <p>{lesson.takeaway}</p>
              {lesson.next && <p className="ac-next-do"><b>{t('ac.nowDo')}</b> {lesson.next}</p>}
            </section>

            <div className="ac-lesson-acts">
              <button
                className={`ac-done${isDone ? ' on' : ''}`}
                onClick={() => (isDone ? clearDone(track.slug, lesson.slug) : markDone(track.slug, lesson.slug))}
              >
                {isDone ? <><BauhausIcon name="check" size={13} /> {t('ac.isDone')}</> : t('ac.markDone')}
              </button>
              <button className="lp-ghost" onClick={() => { location.hash = 'app' }}>{t('ac.openApp')} →</button>
            </div>
          </div>
        </div>

        <nav className="ac-lesson-nav" aria-label="Lessons">
          {prev
            ? <Lnk className="ac-nav-card prev" href={lessonPath(prev.track.slug, prev.lesson.slug)}>
                <em>← {t('ac.prev')}</em><strong>{prev.lesson.title}</strong>
              </Lnk>
            : <span />}
          {next
            ? <Lnk className="ac-nav-card next" href={lessonPath(next.track.slug, next.lesson.slug)}
                onClick={() => markDone(track.slug, lesson.slug)}>
                <em>{t('ac.next')} →</em><strong>{next.lesson.title}</strong>
              </Lnk>
            : <Lnk className="ac-nav-card next" href="/academy"><em>{t('ac.doneNav')} →</em><strong>{t('ac.back')}</strong></Lnk>}
        </nav>
      </article>
    </Shell>
  )
}
