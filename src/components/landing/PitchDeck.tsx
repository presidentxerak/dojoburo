import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Wordmark } from '../Wordmark'
import { AsciiIcon } from '../AsciiIcon'
import { Agent3DPreview } from '../three/Agent3DPreview'
import { DojoDiorama } from './DojoDiorama'
import { DeckHero } from './DeckHero'
import { SKINS } from '../../data/skins'
import { DECK_SLIDES, type DeckSlide } from '../../data/deckSlides'
import { FORECAST, BUSINESS_PLAN, CONTACT_EMAIL } from '../../data/financials'
import { downloadDeckPdf } from './deckPdf'
import { useInView } from './useInView'

// The investor pitch deck in the DojoBuro visual language · kawaii characters
// carrying a relevant 3D object (three-quarter, hopping), the 3D dojo, ascii-art
// icons, financial tables and the brand magenta/blue. One 24px Outfit-black line
// per slide. Presented full-screen; exported to a real PDF via jsPDF.

// three widely-spaced, visually distinct skins to dress a slide
function trio(seed: number) {
  const step = Math.floor(SKINS.length / 3)
  return [0, 1, 2].map((k) => SKINS[(seed * 7 + k * step) % SKINS.length])
}
// a skin of a given kind if one exists, else a spread pick
const skinOfKind = (kind: string, fallbackSeed: number) => SKINS.find((s) => s.kind === kind) ?? SKINS[(fallbackSeed * 13) % SKINS.length]
// a distinct hero skin per hero slide so the roster shows off
const heroFor = (seed: number) => SKINS[(seed * 17 + 3) % SKINS.length]

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

function SlideVisual({ slide, idx, active }: { slide: DeckSlide; idx: number; active: boolean }) {
  const [ref, inView] = useInView<HTMLDivElement>('120px')
  const show = active && inView
  if (slide.visual === 'brand') {
    const hero = skinOfKind(idx === 0 ? 'knight' : 'mage', idx)
    return (
      <div className="pd-visual pd-visual-hero" ref={ref}>
        {show && <DeckHero id={hero.id} character={hero} obj={slide.obj} color={slide.accent} size={320} />}
        <span className="pd-ascii-chip" style={{ color: slide.accent }}><AsciiIcon kind={slide.icon} /></span>
      </div>
    )
  }
  if (slide.visual === 'hero') {
    const hero = heroFor(idx)
    return (
      <div className="pd-visual pd-visual-hero" ref={ref}>
        {show ? <DeckHero id={hero.id} character={hero} obj={slide.obj} color={slide.accent} size={340} /> : null}
        <span className="pd-ascii-chip" style={{ color: slide.accent }}><AsciiIcon kind={slide.icon} /></span>
      </div>
    )
  }
  if (slide.visual === 'dojo') {
    return <div className="pd-visual pd-visual-dojo" ref={ref}>{show ? <DojoDiorama /> : <span className="pd-bigicon" style={{ color: slide.accent }}><AsciiIcon kind={slide.icon} /></span>}</div>
  }
  // team
  const skins = trio(idx)
  return (
    <div className="pd-visual pd-visual-team" ref={ref}>
      {skins.map((s, k) => (
        <div className="pd-char" key={s.id}>{show ? <Agent3DPreview id={s.id} character={s} size={150} phase={k * 0.8} /> : null}</div>
      ))}
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

        {DECK_SLIDES.map((s, k) => {
          const showContact = s.visual === 'brand' || s.visual === 'table'
          return (
            <section
              key={k}
              className={`pd-slide ${k === i ? 'on' : ''} pd-v-${s.visual}`}
              style={{ ['--pa' as any]: s.accent }}
            >
              <div className="pd-slide-inner">
                <div className="pd-copy">
                  <span className="pd-kicker">{s.n ? `${s.n} · ` : ''}{s.kicker}</span>
                  {s.visual === 'brand' ? <div className="pd-brandmark"><Wordmark /></div> : null}
                  <p className="pd-line">{s.line}</p>
                  {s.visual === 'table' && s.table ? <FinTable which={s.table} /> : null}
                  <span className="pd-foot">
                    <Wordmark /> · automated productivity on the XRP Ledger
                    {showContact ? <em className="pd-contact"> · {CONTACT_EMAIL}</em> : null}
                  </span>
                </div>
                {s.visual !== 'table' ? <SlideVisual slide={s} idx={k} active={k === i} /> : null}
              </div>
            </section>
          )
        })}

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
