import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Wordmark } from '../Wordmark'
import { Object3DInline } from './Object3D'
import { DojoDiorama } from './DojoDiorama'
import { DECK_SLIDES, type DeckSlide } from '../../data/deckSlides'
import { FORECAST, BUSINESS_PLAN, CONTACT_EMAIL } from '../../data/financials'
import { downloadDeckPdf } from './deckPdf'
import { useInView } from './useInView'

// The investor pitch deck in the DojoBuro visual language · centred text, the
// landing's typography (Silkscreen title + Outfit Black), full-3D spinning
// objects and landing-style cards. The layout varies slide to slide (a big
// object, the 3D dojo, a card row, stat tiles or a financial table). One clean
// idea per slide. Presented full-screen; exported to a real PDF via jsPDF.

function FinTable({ which }: { which: 'forecast' | 'plan' }) {
  const t = which === 'forecast' ? FORECAST : BUSINESS_PLAN
  return (
    <div className="pd-table-wrap">
      <table className="pd-table">
        <thead><tr>{t.head.map((h, i) => <th key={h} className={i === 0 ? 'lbl' : ''}>{h}</th>)}</tr></thead>
        <tbody>
          {t.rows.map((r) => (
            <tr key={r[0]} className={/net|result/i.test(r[0]) ? 'net' : ''}>
              {r.map((c, i) => <td key={i} className={i === 0 ? 'lbl' : ''}>{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="pd-table-note">{t.note}</p>
    </div>
  )
}

// The full-3D illustration for a slide · lazily mounted when the slide is active
// and in view (the deck can hold a dozen canvases otherwise).
function Illustration({ slide, active, size = 240 }: { slide: DeckSlide; active: boolean; size?: number }) {
  const [ref, inView] = useInView<HTMLDivElement>('120px')
  const show = active && inView
  if (slide.layout === 'dojo') {
    return <div className="pd-3d pd-3d-dojo" ref={ref}>{show ? <DojoDiorama /> : null}</div>
  }
  return (
    <div className="pd-3d" ref={ref}>
      {show ? <Object3DInline kind={slide.obj} color={slide.accent} size={size} speed={0.6} /> : null}
    </div>
  )
}

function Cards({ cards, accent }: { cards: NonNullable<DeckSlide['cards']>; accent: string }) {
  return (
    <div className="pd-cards">
      {cards.map((c) => (
        <div className="pd-card" key={c.label} style={{ ['--pa' as any]: accent }}>
          <strong>{c.label}</strong>
          <span>{c.sub}</span>
        </div>
      ))}
    </div>
  )
}

function Stats({ stats }: { stats: NonNullable<DeckSlide['stats']> }) {
  return (
    <div className="pd-stats">
      {stats.map((s) => (
        <div className="pd-stat" key={s.label}>
          <b>{s.big}</b>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  )
}

function Points({ points }: { points: string[] }) {
  return (
    <div className="pd-points">
      {points.map((p) => <span className="pd-point" key={p}>{p}</span>)}
    </div>
  )
}

function Slide({ slide, idx, active }: { slide: DeckSlide; idx: number; active: boolean }) {
  const showContact = idx === 0 || idx === DECK_SLIDES.length - 1 || slide.layout === 'table'
  const copy = (
    <div className="pd-copy">
      <span className="pd-eyebrow">{slide.n ? `${slide.n} · ` : ''}{slide.eyebrow}</span>
      {idx === 0 ? <div className="pd-brandmark"><Wordmark /></div> : null}
      <h2 className="pd-title">{slide.title}</h2>
      <p className="pd-line">{slide.line}</p>
    </div>
  )

  return (
    <div className={`pd-inner pd-l-${slide.layout}`}>
      {slide.layout === 'table' ? (
        <>
          {copy}
          <FinTable which={slide.table!} />
        </>
      ) : slide.layout === 'cards' ? (
        <>
          {copy}
          <Cards cards={slide.cards!} accent={slide.accent} />
          <Illustration slide={slide} active={active} size={150} />
        </>
      ) : slide.layout === 'stats' ? (
        <>
          {copy}
          <Stats stats={slide.stats!} />
          <Illustration slide={slide} active={active} size={150} />
        </>
      ) : slide.layout === 'dojo' ? (
        <>
          {copy}
          {slide.points ? <Points points={slide.points} /> : null}
          <Illustration slide={slide} active={active} />
        </>
      ) : slide.layout === 'brand' ? (
        <>
          {copy}
          {slide.points ? <Points points={slide.points} /> : null}
          <Illustration slide={slide} active={active} size={280} />
        </>
      ) : idx % 2 === 1 ? (
        // vary the layout: on odd 'object' slides the 3D sits above the text
        <>
          <Illustration slide={slide} active={active} size={230} />
          {copy}
          {slide.points ? <Points points={slide.points} /> : null}
        </>
      ) : (
        <>
          {copy}
          {slide.points ? <Points points={slide.points} /> : null}
          <Illustration slide={slide} active={active} size={230} />
        </>
      )}
      <span className="pd-foot">
        <Wordmark /> · a company in one sentence, run by AI agents
        {showContact ? <em className="pd-contact"> · {CONTACT_EMAIL}</em> : null}
      </span>
    </div>
  )
}

export function PitchDeck({ onClose }: { onClose: () => void }) {
  const [i, setI] = useState(0)
  const go = (d: number) => setI((n) => Math.min(DECK_SLIDES.length - 1, Math.max(0, n + d)))
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight' || e.key === ' ') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return createPortal(
    <div className="pd-overlay">
      <div className="pd-bar">
        <div className="pd-bar-brand"><Wordmark /> <span className="pd-bar-tag">investor deck</span></div>
        <div className="pd-bar-actions">
          <button className="pd-btn" onClick={() => downloadDeckPdf()}>Download Investors Pitch Deck</button>
          <button className="pd-btn ghost" onClick={onClose} aria-label="Close deck">Close ×</button>
        </div>
      </div>

      <div className="pd-stage">
        <button className="pd-arrow left" onClick={() => go(-1)} disabled={i === 0} aria-label="Previous">‹</button>

        {DECK_SLIDES.map((s, k) => (
          <section key={k} className={`pd-slide ${k === i ? 'on' : ''}`} style={{ ['--pa' as any]: s.accent }}>
            <Slide slide={s} idx={k} active={k === i} />
          </section>
        ))}

        <button className="pd-arrow right" onClick={() => go(1)} disabled={i === DECK_SLIDES.length - 1} aria-label="Next">›</button>
      </div>

      <div className="pd-dots">
        {DECK_SLIDES.map((_, k) => (
          <button key={k} className={`pd-dot ${k === i ? 'on' : ''}`} onClick={() => setI(k)} aria-label={`Slide ${k + 1}`} />
        ))}
      </div>
    </div>,
    document.body,
  )
}
