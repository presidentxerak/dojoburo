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
import { Logo } from '../components/Logo'
import { Wordmark } from '../components/Wordmark'
import { SupportBot } from '../components/SupportBot'
import { Lnk, navigate } from '../lib/router'
import { useHeadTags, breadcrumb, SITE } from '../lib/headTags'
import { AcademyStage } from './AcademyStage'
import { markDone, clearDone, recordAnswer, useProgress } from './progress'
import {
  TRACKS, TRACK_BY_SLUG, ALL_LESSONS, LESSON_COUNT, TOTAL_MINUTES,
  findLesson, neighbours, lessonPath, trackPath,
  type Block, type Lesson, type Track,
} from '../data/academy'

const HOURS = Math.round((TOTAL_MINUTES / 60) * 10) / 10

function Shell({ children, inApp }: { children: React.ReactNode; inApp?: boolean }) {
  return (
    <div className={`landing dg2 ac${inApp ? ' dg-inapp' : ''}`}>
      {inApp ? <TopBar /> : <SiteHeader />}
      {children}
      <footer className="lp-footer">
        <div className="lp-brand"><Logo size={26} /> <Wordmark /></div>
        <nav className="lp-foot-links">
          {inApp
            ? <button className="dg-foot-link" onClick={() => { try { sessionStorage.setItem('dojoburo.nav', 'dojo') } catch { /* ignore */ } location.hash = 'app' }}>Back to dojo</button>
            : <><a href="/">Home</a><a href="/academy">Academy</a><a href="/guide">App setup guide</a><a href="/#pricing">Pricing</a><a href="/terms">Terms</a><a href="/privacy">Privacy</a></>}
        </nav>
      </footer>
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

const FAQ: [string, string][] = [
  ['Is the Dojo Academy free?', 'Yes — every lesson, in full, with no account required. Progress is saved in your browser so you can pick up where you left off.'],
  ['Do I need to know how to code?', 'No. Nothing in the Academy or the app involves code, a terminal or an IDE. If those words mean nothing to you, lesson six explains them and then you can forget them.'],
  ['What is an AI agent?', 'An AI given a job it is responsible for, a method it follows every time, and tools it can actually use — as opposed to a chat window that only answers questions.'],
  ['How long does the whole course take?', `About ${HOURS} hours across ${LESSON_COUNT} lessons, and it is built to be read a lesson at a time rather than in one sitting.`],
  ['Do I need to pay to use what I learn?', 'No. Building a project, reading every team card and connecting apps are all free. Only running work costs credits — roughly one credit a step — and it costs nothing at all if you bring your own Claude key.'],
]

export function AcademyHome({ inApp }: { inApp?: boolean } = {}) {
  const p = useProgress()
  const started = p.doneCount > 0
  const first = ALL_LESSONS[0]
  const go = started ? p.nextUp : first

  useHeadTags({
    title: `Dojo Academy · learn AI agents from zero · ${LESSON_COUNT} free lessons`,
    description: `Free, interactive courses on how AI agents actually work: what an agent is, how to edit one, and how to build a whole system in a loop. ${LESSON_COUNT} lessons, about ${HOURS} hours, no code and no account needed.`,
    path: '/academy',
    keywords: ['ai agent course', 'learn ai agents', 'free ai automation course', 'ai agents for beginners', 'what is an ai agent'],
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'Dojo Academy',
        description: `A free, interactive course that takes a complete beginner from "what is an AI agent" to running a working system of AI teammates.`,
        url: SITE + '/academy',
        provider: { '@type': 'Organization', name: 'DojoBuro', url: SITE },
        isAccessibleForFree: true,
        inLanguage: 'en',
        educationalLevel: 'Beginner',
        teaches: TRACKS.map((t) => t.blurb),
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'online',
          courseWorkload: `PT${TOTAL_MINUTES}M`,
        },
        syllabusSections: TRACKS.map((t, i) => ({
          '@type': 'Syllabus',
          name: t.label,
          description: t.blurb,
          position: i + 1,
        })),
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQ.map(([q, a]) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
      breadcrumb([{ name: 'DojoBuro', path: '/' }, { name: 'Dojo Academy', path: '/academy' }]),
    ],
  })

  return (
    <Shell inApp={inApp}>
      <section className="lp-hero ac-hero">
        <span className="ac-kicker">Dojo Academy</span>
        <h1>Learn how AI agents <span className="hl-acid">actually work</span> — from zero.</h1>
        <p className="lp-sub">
          Not documentation. A course. It starts at <b>“what is an agent”</b>, ends at <b>a system of teams
          running your work</b>, and assumes you have never heard of vibe coding, an IDE or a coding agent.
          Every lesson is free, interactive, and about five minutes long.
        </p>
        <div className="ac-hero-go">
          <button className="lp-cta" onClick={() => navigate(lessonPath(go.track.slug, go.lesson.slug))}>
            {started ? `Continue · ${go.lesson.title}` : 'Start lesson 1 →'}
          </button>
          {started && <span className="ac-hero-prog"><Bar done={p.doneCount} total={p.total} />{p.doneCount} of {p.total} finished</span>}
        </div>
        <div className="lp-badges">
          <span>{LESSON_COUNT} lessons</span><span>~{HOURS} hours</span><span>Free, no account</span><span>No code, ever</span>
        </div>
      </section>

      <section className="lp-sec" id="tracks">
        <h2>The curriculum</h2>
        <p className="lp-lead">
          Five tracks, in order. Each one stands on its own, so you can jump to what you need —
          but if you are new, start at the top and work down.
        </p>
        <div className="ac-tracks">
          {TRACKS.map((t, i) => {
            const done = p.doneInTrack(t.slug)
            const mins = t.lessons.reduce((n, l) => n + l.minutes, 0)
            return (
              <article key={t.slug} className="appcard ac-track" style={{ ['--ac' as string]: t.tint }}>
                <header className="ac-track-h">
                  <span className="ac-track-g" style={{ background: t.tint }}>{t.glyph}</span>
                  <span className="ac-track-n">Track {i + 1}</span>
                  <span className="ac-level">{t.level}</span>
                </header>
                <h3>{t.label}</h3>
                <p className="ac-track-blurb">{t.blurb}</p>
                <p className="ac-who"><b>For you if:</b> {t.who}</p>
                <ol className="ac-track-lessons">
                  {t.lessons.map((l) => (
                    <li key={l.slug} className={p.isDone(t.slug, l.slug) ? 'done' : ''}>
                      <Lnk href={lessonPath(t.slug, l.slug)}>
                        <span className="ac-tick" aria-hidden>{p.isDone(t.slug, l.slug) ? '✓' : ''}</span>
                        {l.title}
                        <em>{l.minutes} min</em>
                      </Lnk>
                    </li>
                  ))}
                </ol>
                <footer className="ac-track-f">
                  <Bar done={done} total={t.lessons.length} />
                  <span>{done ? `${done}/${t.lessons.length} done` : `${t.lessons.length} lessons · ${mins} min`}</span>
                </footer>
                <Lnk className="ac-track-go" href={trackPath(t.slug)}>Open track →</Lnk>
              </article>
            )
          })}
        </div>
      </section>

      <section className="lp-sec alt" id="outcomes">
        <h2>What you will be able to do</h2>
        <div className="lp-steps3">
          <div className="lp-step3"><span className="lp-step3-n dg2-n1">1</span><div><b>Explain it to someone else</b><span>What an agent is, why a team beats one assistant, and where every tool people keep naming at you actually fits.</span></div></div>
          <div className="lp-step3"><span className="lp-step3-n dg2-n2">2</span><div><b>Fix a teammate in one edit</b><span>Read the symptom, know which of the eight fields to change, and make every future run better instead of rerolling.</span></div></div>
          <div className="lp-step3"><span className="lp-step3-n dg2-n3">3</span><div><b>Design your own system</b><span>Turn a goal into an ordered plan with one owner per step, chain teams together, and find the step that broke.</span></div></div>
        </div>
      </section>

      <section className="lp-sec" id="faq">
        <h2>Questions people ask first</h2>
        <div className="ac-faq">
          {FAQ.map(([q, a]) => (
            <details key={q} className="ac-faq-item">
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
        <p className="lp-note" style={{ marginTop: 18 }}>
          Looking for the step-by-step setup pages for a specific app — Gmail, Notion, Stripe? Those live in the{' '}
          <a className="linklike" href="/guide">app setup guide</a>.
        </p>
      </section>
    </Shell>
  )
}

// ---------------------------------------------------------------------------
// /academy/<track>
// ---------------------------------------------------------------------------

export function TrackPage({ slug, inApp }: { slug: string; inApp?: boolean }) {
  const track = TRACK_BY_SLUG[slug]
  const p = useProgress()

  useHeadTags({
    title: track ? `${track.label} · Dojo Academy` : 'Track not found · Dojo Academy',
    description: track ? `${track.blurb} ${track.lessons.length} free interactive lessons.` : 'That track does not exist.',
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
          <h2>Track not found</h2>
          <p className="lp-lead">There is no track called “{slug}”.</p>
          <p><Lnk className="lp-ghost" href="/academy">← Back to the Academy</Lnk></p>
        </section>
      </Shell>
    )
  }

  const mins = track.lessons.reduce((n, l) => n + l.minutes, 0)
  const done = p.doneInTrack(track.slug)
  const i = TRACKS.indexOf(track)

  return (
    <Shell inApp={inApp}>
      <section className="lp-sec ac-track-hero" style={{ ['--ac' as string]: track.tint }}>
        <Crumbs items={[{ name: 'Academy', path: '/academy' }, { name: track.label, path: trackPath(track.slug) }]} />
        <div className="ac-track-head">
          <span className="ac-track-g big" style={{ background: track.tint }}>{track.glyph}</span>
          <div>
            <h1>{track.label}</h1>
            <p className="lp-lead">{track.blurb}</p>
            <p className="ac-who"><b>For you if:</b> {track.who}</p>
          </div>
        </div>
        <div className="lp-badges">
          <span>Track {i + 1} of {TRACKS.length}</span><span>{track.level}</span>
          <span>{track.lessons.length} lessons · {mins} min</span>
          {done > 0 && <span>{done} finished</span>}
        </div>
      </section>

      <section className="lp-sec">
        <ol className="ac-lessons">
          {track.lessons.map((l, n) => (
            <li key={l.slug} className={`appcard ac-lesson${p.isDone(track.slug, l.slug) ? ' done' : ''}`} style={{ ['--ac' as string]: track.tint }}>
              <Lnk href={lessonPath(track.slug, l.slug)}>
                <span className="ac-lesson-n">{p.isDone(track.slug, l.slug) ? '✓' : n + 1}</span>
                <span className="ac-lesson-txt">
                  <strong>{l.title}</strong>
                  <em>{l.summary}</em>
                </span>
                <span className="ac-lesson-min">{l.minutes} min</span>
              </Lnk>
            </li>
          ))}
        </ol>

        <div className="ac-trackfoot">
          {i > 0 && <Lnk className="lp-ghost" href={trackPath(TRACKS[i - 1].slug)}>← {TRACKS[i - 1].label}</Lnk>}
          {i < TRACKS.length - 1 && <Lnk className="lp-cta sm" href={trackPath(TRACKS[i + 1].slug)}>{TRACKS[i + 1].label} →</Lnk>}
        </div>
      </section>
    </Shell>
  )
}

// ---------------------------------------------------------------------------
// /academy/<track>/<lesson>
// ---------------------------------------------------------------------------

const KIND_LABEL: Record<Block['kind'], string> = {
  idea: 'The idea', example: 'Example', do: 'Do this', warn: 'Watch out', compare: 'Compare',
}

function BlockView({ b }: { b: Block }) {
  return (
    <section className={`ac-block ac-${b.kind}`}>
      <span className="ac-block-kind">{KIND_LABEL[b.kind]}</span>
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
  const saved = p.answerFor(track.slug, lesson.slug)
  const [pick, setPick] = useState<number | undefined>(saved)
  const answered = pick !== undefined
  const right = pick === lesson.quiz.answer

  return (
    <section className="ac-quiz">
      <span className="ac-block-kind">Check yourself</span>
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
              <span className="ac-option-k" aria-hidden>{answered && i === lesson.quiz.answer ? '✓' : answered && i === pick ? '✕' : String.fromCharCode(65 + i)}</span>
              {o}
            </button>
          )
        })}
      </div>
      {answered && (
        <p className={`ac-why${right ? ' right' : ''}`}>
          <b>{right ? 'That’s it.' : 'Not quite.'}</b> {lesson.quiz.why}
        </p>
      )}
    </section>
  )
}

export function LessonPage({ trackSlug, lessonSlug, inApp }: { trackSlug: string; lessonSlug: string; inApp?: boolean }) {
  const found = findLesson(trackSlug, lessonSlug)
  const p = useProgress()
  const { prev, next, index } = neighbours(trackSlug, lessonSlug)

  useHeadTags({
    title: found ? `${found.lesson.title} · Dojo Academy` : 'Lesson not found · Dojo Academy',
    description: found?.lesson.summary ?? 'That lesson does not exist.',
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
        inLanguage: 'en',
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
          <h2>Lesson not found</h2>
          <p className="lp-lead">There is no lesson at that address.</p>
          <p><Lnk className="lp-ghost" href="/academy">← Back to the Academy</Lnk></p>
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
          <span className="ac-lesson-tag" style={{ background: track.tint }}>{track.glyph} {track.label}</span>
          <h1>{lesson.title}</h1>
          <p className="lp-sub">{lesson.summary}</p>
          <div className="lp-badges">
            <span>Lesson {index + 1} of {LESSON_COUNT}</span><span>{lesson.minutes} min</span><span>{track.level}</span><span>Free</span>
          </div>
        </header>

        <div className="ac-lesson-body">
          <div className="ac-lesson-stage">
            <AcademyStage id={lesson.stage} />
            <span className="ac-stage-cap">Watch it happen · this loops on its own</span>
          </div>

          <div className="ac-lesson-text">
            {lesson.blocks.map((b) => <BlockView key={b.title} b={b} />)}

            <QuizView key={`${track.slug}/${lesson.slug}`} track={track} lesson={lesson} />

            <section className="ac-takeaway">
              <span className="ac-block-kind">Remember this</span>
              <p>{lesson.takeaway}</p>
              {lesson.next && <p className="ac-next-do"><b>Now go and do it:</b> {lesson.next}</p>}
            </section>

            <div className="ac-lesson-acts">
              <button
                className={`ac-done${isDone ? ' on' : ''}`}
                onClick={() => (isDone ? clearDone(track.slug, lesson.slug) : markDone(track.slug, lesson.slug))}
              >
                {isDone ? '✓ Finished' : 'Mark as finished'}
              </button>
              <button className="lp-ghost" onClick={() => { location.hash = 'app' }}>Open the app →</button>
            </div>
          </div>
        </div>

        <nav className="ac-lesson-nav" aria-label="Lessons">
          {prev
            ? <Lnk className="ac-nav-card prev" href={lessonPath(prev.track.slug, prev.lesson.slug)}>
                <em>← Previous</em><strong>{prev.lesson.title}</strong>
              </Lnk>
            : <span />}
          {next
            ? <Lnk className="ac-nav-card next" href={lessonPath(next.track.slug, next.lesson.slug)}
                onClick={() => markDone(track.slug, lesson.slug)}>
                <em>Next →</em><strong>{next.lesson.title}</strong>
              </Lnk>
            : <Lnk className="ac-nav-card next" href="/academy"><em>Done →</em><strong>Back to the Academy</strong></Lnk>}
        </nav>
      </article>
    </Shell>
  )
}
