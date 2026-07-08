import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Wordmark } from '../Wordmark'
import { AsciiIcon } from '../AsciiIcon'
import { Agent3DPreview } from '../three/Agent3DPreview'
import { DojoDiorama } from './DojoDiorama'
import { Object3DInline } from './Object3D'
import { SKINS } from '../../data/skins'
import { useInView } from './useInView'

// three widely-spaced, visually distinct skins to dress a slide
function trio(seed: number) {
  const step = Math.floor(SKINS.length / 3)
  return [0, 1, 2].map((k) => SKINS[(seed * 7 + k * step) % SKINS.length])
}
// a skin of a given kind if one exists, else a spread pick
const skinOfKind = (kind: string, fallbackSeed: number) => SKINS.find((s) => s.kind === kind) ?? SKINS[(fallbackSeed * 13) % SKINS.length]

// A 10-slide investor pitch deck in the DojoBuro visual language · ascii-art
// icons, full-3D object icons, the 3D dojo, kawaii characters and the
// magenta/blue accents. One punchy 24px sentence per slide. Printable to PDF.

type Visual = 'brand' | 'dojo' | 'team' | 'icon'
type Slide = {
  n: string
  kicker: string
  line: string
  icon: string
  /** full-3D object kind (Object3DInline) for 'icon' + 'brand' slides */
  obj: string
  accent: string
  visual: Visual
}

const A = { magenta: '#ff2d9b', blue: '#2f6bff', teal: '#08c2ac', yellow: '#ffc61a', orange: '#ff7a1a', violet: '#a06bff' }

const SLIDES: Slide[] = [
  { n: '', kicker: 'Investor deck', line: 'Your AI team, working while you watch.', icon: 'cast', obj: 'rocket', accent: A.magenta, visual: 'brand' },
  { n: '01', kicker: 'The problem', line: 'Running a business means juggling a dozen apps and never mastering any of them.', icon: 'job', obj: 'briefcase', accent: A.orange, visual: 'icon' },
  { n: '02', kicker: 'The solution', line: 'DojoBuro is a living 3D office where AI agents each own a real function of your work.', icon: 'build', obj: 'network', accent: A.blue, visual: 'dojo' },
  { n: '03', kicker: 'How it adapts', line: 'Pick your trade and the office tailors itself: the right crew, the right apps, wired and ready.', icon: 'stack', obj: 'network', accent: A.teal, visual: 'team' },
  { n: '04', kicker: 'The product', line: 'Agents act for real inside your apps: they open the PR, draft the email, raise the invoice.', icon: 'run', obj: 'gear', accent: A.violet, visual: 'team' },
  { n: '05', kicker: 'The rail', line: 'Every task settles on the XRP Ledger with x402 micro-payments · real agent-to-agent commerce.', icon: 'pay', obj: 'coins', accent: A.blue, visual: 'icon' },
  { n: '06', kicker: 'The market', line: 'Every solo founder, freelancer and small team drowning in SaaS is a DojoBuro seat.', icon: 'watch', obj: 'eye', accent: A.magenta, visual: 'icon' },
  { n: '07', kicker: 'The model', line: 'You bring the model key, we run the hub · a whole automated team for less than one SaaS seat.', icon: 'price', obj: 'gem', accent: A.yellow, visual: 'icon' },
  { n: '08', kicker: 'Why now', line: 'Agentic payments and MCP just made autonomous, tool-using AI teams finally possible.', icon: 'bolt', obj: 'gear', accent: A.orange, visual: 'dojo' },
  { n: '09', kicker: 'The ask', line: 'Join us in building the office where your AI team works while you watch.', icon: 'run', obj: 'rocket', accent: A.magenta, visual: 'brand' },
]

function SlideVisual({ slide, idx, active }: { slide: Slide; idx: number; active: boolean }) {
  const [ref, inView] = useInView<HTMLDivElement>('120px')
  const show = active && inView
  if (slide.visual === 'brand') {
    // a hero character (showing off a new skin) beside a big ascii face
    const hero = skinOfKind(idx === 0 ? 'knight' : 'mage', idx)
    return (
      <div className="pd-visual pd-visual-brand" ref={ref}>
        {show && <div className="pd-char pd-char-lg"><Agent3DPreview id={hero.id} character={hero} size={220} /></div>}
        <span className="pd-bigicon" style={{ color: slide.accent }}><AsciiIcon kind={slide.icon} speed={420} /></span>
      </div>
    )
  }
  if (slide.visual === 'icon') {
    return (
      <div className="pd-visual pd-visual-icon" ref={ref}>
        {show ? <Object3DInline kind={slide.obj} color={slide.accent} size={280} /> : null}
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
  const go = (d: number) => setI((n) => Math.min(SLIDES.length - 1, Math.max(0, n + d)))
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
          <button className="pd-btn" onClick={() => window.print()}>Download PDF</button>
          <button className="pd-btn ghost" onClick={onClose} aria-label="Close deck">Close ×</button>
        </div>
      </div>

      <div className="pd-stage">
        <button className="pd-arrow left" onClick={() => go(-1)} disabled={i === 0} aria-label="Previous">‹</button>

        {/* On screen: only the active slide is shown. In print: every slide is a page. */}
        {SLIDES.map((s, k) => (
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
                <span className="pd-foot"><Wordmark /> · automated productivity on the XRP Ledger</span>
              </div>
              <SlideVisual slide={s} idx={k} active={k === i} />
            </div>
          </section>
        ))}

        <button className="pd-arrow right" onClick={() => go(1)} disabled={i === SLIDES.length - 1} aria-label="Next">›</button>
      </div>

      <div className="pd-dots">
        {SLIDES.map((_, k) => (
          <button key={k} className={`pd-dot ${k === i ? 'on' : ''}`} onClick={() => setI(k)} aria-label={`Slide ${k + 1}`} />
        ))}
      </div>
    </div>,
    document.body,
  )
}
