// Website creation wizard · the Squarespace-style guided flow:
//   Subject → Goals → Site info → Pages → Colors → Fonts → (build + edit)
// Navigated with the shared bottom StepBar. It writes the chosen colours +
// fonts into the Brand Kit and assembles the site's sections from the picked
// pages, then hands the finished SiteDoc back to the editor.
import { useMemo, useState } from 'react'
import { StepBar, type Step as BarStep } from '../StepBar'
import {
  type BrandKit, type PaletteScheme, defaultKit, generatePalette, saveBrandKit, FONT_PAIRS, fontPair,
} from '../../lib/brand'
import { type SiteDoc, type BlockType, makeBlock, BLOCK_ORDER, fullDoc, saveSite } from '../../lib/site'

const PERSONALITIES = ['Professional', 'Playful', 'Refined', 'Warm', 'Bold', 'Eccentric']

type Step = 'subject' | 'goals' | 'info' | 'pages' | 'colors' | 'fonts'
const STEPS: BarStep[] = [
  { id: 'subject', label: 'Subject' }, { id: 'goals', label: 'Goals' }, { id: 'info', label: 'Site info' },
  { id: 'pages', label: 'Pages' }, { id: 'colors', label: 'Colors' }, { id: 'fonts', label: 'Fonts' },
]

const CATEGORIES = ['Business', 'Store', 'Portfolio', 'Restaurant', 'Agency', 'Personal', 'Blog', 'Events']

const GOALS: { id: string; label: string; sub: string; pages: BlockType[] }[] = [
  { id: 'sell', label: 'Sell products', sub: 'Show a catalogue and prices', pages: ['pricing', 'cta'] },
  { id: 'book', label: 'Take bookings', sub: 'Let visitors request a slot', pages: ['form', 'cta'] },
  { id: 'leads', label: 'Generate leads', sub: 'Capture enquiries', pages: ['form', 'cta'] },
  { id: 'inform', label: 'Share information', sub: 'Explain what you do', pages: ['text', 'features'] },
  { id: 'audience', label: 'Grow an audience', sub: 'Build a following', pages: ['gallery', 'cta'] },
  { id: 'showcase', label: 'Showcase work', sub: 'A portfolio / gallery', pages: ['gallery', 'text'] },
]

const PAGES: { block: BlockType; label: string; locked?: boolean }[] = [
  { block: 'hero', label: 'Home / Hero', locked: true },
  { block: 'features', label: 'Services' },
  { block: 'text', label: 'About' },
  { block: 'pricing', label: 'Pricing' },
  { block: 'gallery', label: 'Gallery' },
  { block: 'form', label: 'Contact' },
  { block: 'cta', label: 'Call to action' },
  { block: 'footer', label: 'Footer', locked: true },
]

const PALETTES: { id: string; label: string; hue: number; scheme: PaletteScheme }[] = [
  { id: 'ink', label: 'Ink', hue: 222, scheme: 'mono' },
  { id: 'ocean', label: 'Ocean', hue: 205, scheme: 'analogous' },
  { id: 'forest', label: 'Forest', hue: 150, scheme: 'analogous' },
  { id: 'sunset', label: 'Sunset', hue: 22, scheme: 'complementary' },
  { id: 'berry', label: 'Berry', hue: 330, scheme: 'triadic' },
  { id: 'slate', label: 'Slate', hue: 250, scheme: 'complementary' },
]

export function WebsiteWizard({ dojoId, dojoName, onCancel, onCreate }: {
  dojoId: string
  dojoName: string
  onCancel: () => void
  onCreate: (site: SiteDoc) => void
}) {
  const [step, setStep] = useState<Step>('subject')
  const [subject, setSubject] = useState('')
  const [category, setCategory] = useState('Business')
  const [goals, setGoals] = useState<string[]>(['inform'])
  const [name, setName] = useState(dojoName)
  const [tagline, setTagline] = useState('')
  const [pages, setPages] = useState<BlockType[]>(['hero', 'features', 'text', 'cta', 'footer'])
  const [paletteId, setPaletteId] = useState('ink')
  const [fontId, setFontId] = useState(FONT_PAIRS[0].id)
  const [personality, setPersonality] = useState('Professional')

  const idx = STEPS.findIndex((s) => s.id === step)
  const toggle = <T,>(arr: T[], v: T) => (arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v])

  // picking goals suggests pages
  const pickGoal = (id: string) => {
    setGoals((g) => {
      const next = toggle(g, id)
      const suggested = GOALS.filter((x) => next.includes(x.id)).flatMap((x) => x.pages)
      setPages((p) => Array.from(new Set([...p, ...suggested])))
      return next
    })
  }
  const togglePage = (b: BlockType) => {
    if (PAGES.find((x) => x.block === b)?.locked) return
    setPages((p) => toggle(p, b))
  }

  const chosenPalette = PALETTES.find((x) => x.id === paletteId) ?? PALETTES[0]
  const preview = useMemo(() => generatePalette(chosenPalette.hue, chosenPalette.scheme), [chosenPalette])

  const finish = async () => {
    // 1) brand kit from the chosen colours + fonts
    const base = defaultKit(name || dojoName || 'My brand')
    const kit: BrandKit = {
      ...base, name: name || base.name, tagline: tagline || base.tagline,
      hue: chosenPalette.hue, scheme: chosenPalette.scheme,
      palette: generatePalette(chosenPalette.hue, chosenPalette.scheme), fontId,
    }
    await saveBrandKit(dojoId, kit)
    // 2) assemble the site from the picked pages, in canonical block order
    const ordered = BLOCK_ORDER.filter((t) => pages.includes(t))
    const blocks = (ordered.length ? ordered : (['hero', 'features', 'cta', 'footer'] as BlockType[]))
      .map((t) => makeBlock(t, name || dojoName))
    const site: SiteDoc = { name: name || dojoName || 'My site', blocks, updatedAt: Date.now() }
    await saveSite(dojoId, site)
    onCreate(site)
  }

  const advance = () => { if (idx < STEPS.length - 1) setStep(STEPS[idx + 1].id as Step); else void finish() }
  const back = () => { if (idx > 0) setStep(STEPS[idx - 1].id as Step); else onCancel() }
  const canNext = step === 'info' ? !!name.trim() : step === 'goals' ? goals.length > 0 : true
  const nextLabel = step === 'fonts' ? 'Create site' : 'Next'

  const f = fontPair(fontId)

  // live preview · the big image on the left updates as choices are made
  const previewKit = useMemo<BrandKit>(() => ({
    ...defaultKit(name || dojoName || 'My brand'), name: name || dojoName || 'My brand', tagline,
    hue: chosenPalette.hue, scheme: chosenPalette.scheme,
    palette: generatePalette(chosenPalette.hue, chosenPalette.scheme), fontId,
  }), [name, dojoName, tagline, chosenPalette, fontId])
  const previewDoc = useMemo(() => {
    const ordered = BLOCK_ORDER.filter((t) => pages.includes(t))
    const blocks = (ordered.length ? ordered : (['hero', 'features', 'cta', 'footer'] as BlockType[])).map((t) => makeBlock(t, name || dojoName))
    return fullDoc({ name: name || dojoName || 'My site', blocks, updatedAt: 0 }, previewKit)
  }, [pages, name, dojoName, previewKit])

  return (
    <div className="site-mod sq wiz">
      <StepBar steps={STEPS} current={step} onJump={(id) => setStep(id as Step)}
        onBack={back} backLabel={idx === 0 ? 'Templates' : 'Back'}
        onNext={advance} canNext={canNext} nextLabel={nextLabel} />

      <div className="wiz-split">
        <div className="wiz-preview-pane">
          <iframe title="Site preview" className="wiz-frame" srcDoc={previewDoc} />
        </div>
        <div className="wiz-settings">
      {step === 'subject' && (
        <section className="sq-panel">
          <h3 className="sq-title">What's your website about?</h3>
          <p className="sq-lead">A word or a sentence. Pick the closest type · it seeds the layout and copy.</p>
          <label className="sq-field">Subject
            <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="e.g. a neighbourhood coffee roaster" maxLength={80} />
          </label>
          <div className="sq-eyebrow">Type of site</div>
          <div className="sq-optgrid">
            {CATEGORIES.map((c) => (
              <button key={c} className={`sq-opt${category === c ? ' on' : ''}`} onClick={() => setCategory(c)}>
                <span className="sq-opt-radio" /><span className="sq-opt-txt"><b>{c}</b></span>
              </button>
            ))}
          </div>
        </section>
      )}

      {step === 'goals' && (
        <section className="sq-panel">
          <h3 className="sq-title">What do you want it to do?</h3>
          <p className="sq-lead">Pick one or more. We add the matching sections automatically.</p>
          <div className="sq-optgrid">
            {GOALS.map((g) => (
              <button key={g.id} className={`sq-opt${goals.includes(g.id) ? ' on' : ''}`} onClick={() => pickGoal(g.id)}>
                <span className="sq-opt-radio" /><span className="sq-opt-txt"><b>{g.label}</b><em>{g.sub}</em></span>
              </button>
            ))}
          </div>
        </section>
      )}

      {step === 'info' && (
        <section className="sq-panel">
          <h3 className="sq-title">Site info</h3>
          <p className="sq-lead">The name and tagline shown across your site.</p>
          <label className="sq-field">Site name
            <input value={name} onChange={(e) => setName(e.target.value)} maxLength={48} placeholder="My brand" />
          </label>
          <label className="sq-field">Tagline
            <input value={tagline} onChange={(e) => setTagline(e.target.value)} maxLength={72} placeholder="A short line about what you do" />
          </label>
          <div className="sq-eyebrow">Brand personality</div>
          <p className="sq-lead" style={{ marginTop: -6 }}>Each personality maps to a distinct tone for AI-generated content.</p>
          <div className="wiz-persona">
            {PERSONALITIES.map((pp) => (
              <button key={pp} className={`wiz-persona-opt${personality === pp ? ' on' : ''}`} onClick={() => setPersonality(pp)}>{pp}</button>
            ))}
          </div>
        </section>
      )}

      {step === 'pages' && (
        <section className="sq-panel">
          <h3 className="sq-title">Pages &amp; sections</h3>
          <p className="sq-lead">Toggle the sections your site should include. You can add or remove more in the editor.</p>
          <div className="sq-optgrid">
            {PAGES.map((pg) => (
              <button key={pg.block} className={`sq-opt${pages.includes(pg.block) ? ' on' : ''}${pg.locked ? ' locked' : ''}`} onClick={() => togglePage(pg.block)}>
                <span className="sq-opt-radio" /><span className="sq-opt-txt"><b>{pg.label}</b>{pg.locked && <em>Always included</em>}</span>
              </button>
            ))}
          </div>
        </section>
      )}

      {step === 'colors' && (
        <section className="sq-panel">
          <h3 className="sq-title">Colors</h3>
          <p className="sq-lead">Pick a palette. It's saved to your Brand Kit and applied everywhere.</p>
          <div className="wiz-palettes">
            {PALETTES.map((pl) => {
              const pv = generatePalette(pl.hue, pl.scheme)
              return (
                <button key={pl.id} className={`wiz-palette${paletteId === pl.id ? ' on' : ''}`} onClick={() => setPaletteId(pl.id)}>
                  <span className="wiz-swatches">
                    {[pv.primary, pv.secondary, pv.accent, pv.ink].map((c, i) => <i key={i} style={{ background: c }} />)}
                  </span>
                  <b>{pl.label}</b>
                </button>
              )
            })}
          </div>
          <div className="wiz-preview" style={{ background: preview.bg, color: preview.ink }}>
            <span style={{ background: preview.primary }} /> <span style={{ background: preview.secondary }} /> <span style={{ background: preview.accent }} />
            <b>{name || dojoName}</b>
          </div>
        </section>
      )}

      {step === 'fonts' && (
        <section className="sq-panel">
          <h3 className="sq-title">Fonts</h3>
          <p className="sq-lead">Choose a pairing for headings and body text.</p>
          <div className="sq-optgrid">
            {FONT_PAIRS.map((fp) => (
              <button key={fp.id} className={`sq-opt${fontId === fp.id ? ' on' : ''}`} onClick={() => setFontId(fp.id)}>
                <span className="sq-opt-radio" /><span className="sq-opt-txt"><b>{fp.label}</b></span>
              </button>
            ))}
          </div>
          <div className="wiz-fontpreview">
            <div style={{ fontFamily: f.heading, fontWeight: 800, fontSize: 26 }}>{name || dojoName} · Heading</div>
            <div style={{ fontFamily: f.body, fontSize: 15 }}>Body text: the quick brown fox jumps over the lazy dog.</div>
          </div>
        </section>
      )}
        </div>
      </div>
    </div>
  )
}
