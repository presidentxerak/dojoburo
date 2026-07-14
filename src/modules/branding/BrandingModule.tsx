// Branding Studio · a Shiverbrand-style pipeline that runs 100% locally:
//   Concept → Research → Naming → Availability → Identity → Export
// Naming + research are generated locally; domain availability is checked for
// real (server-side RDAP, no key). The Identity step is the full brand editor
// (logo + palette + typography) saved as a central Brand Kit in IndexedDB.
import { useEffect, useState } from 'react'
import type { ModuleProps } from '../registry'
import { useWorkshop } from '../../workshop'
import { useDojo } from '../../store'
import {
  type BrandKit, type LogoLayout, generatePalette, logoSvg, defaultKit, loadBrandKit, saveBrandKit,
  kitCss, fontPair, FONT_PAIRS, SCHEMES, SHAPES,
} from '../../lib/brand'
import {
  type BrandProfile, type DomainResult, researchProfile, generateNames, checkDomains, socialHandles,
} from '../../lib/naming'

const LAYOUTS: { id: LogoLayout; label: string }[] = [
  { id: 'mark-left', label: 'Logo + text' }, { id: 'mark-top', label: 'Stacked' },
  { id: 'mark-only', label: 'Icon only' }, { id: 'text-only', label: 'Text only' },
]

type Step = 'concept' | 'research' | 'naming' | 'domain' | 'identity' | 'export'
const STEPS: { id: Step; label: string }[] = [
  { id: 'concept', label: 'Concept' }, { id: 'research', label: 'Research' }, { id: 'naming', label: 'Naming' },
  { id: 'domain', label: 'Availability' }, { id: 'identity', label: 'Identity' }, { id: 'export', label: 'Export' },
]
const START_MODES = [
  { id: 'scratch', title: 'Start from scratch', sub: 'Full pipeline: research, naming, availability, identity, export.' },
  { id: 'have-name', title: 'I have a name, no domain', sub: 'We check the domain & handles for your name right away.' },
  { id: 'have-domain', title: 'I have a domain, no name', sub: 'The name is derived from the domain, then availability.' },
  { id: 'have-both', title: 'I already have a name & domain', sub: 'Straight to brand-identity generation.' },
] as const

function Svg({ markup, className }: { markup: string; className?: string }) {
  return <span className={className} dangerouslySetInnerHTML={{ __html: markup }} />
}

export default function BrandingModule({ dojoId }: ModuleProps) {
  const dojoName = useWorkshop((s) => s.dojos.find((d) => d.id === dojoId)?.name)
  const pushToast = useDojo((s) => s.pushToast)
  const [kit, setKit] = useState<BrandKit>(() => defaultKit(dojoName || 'My brand'))
  const [loaded, setLoaded] = useState(false)

  // pipeline state
  const [step, setStep] = useState<Step>('concept')
  const [startMode, setStartMode] = useState<(typeof START_MODES)[number]['id']>('scratch')
  const [desc, setDesc] = useState('')
  const [profile, setProfile] = useState<BrandProfile | null>(null)
  const [names, setNames] = useState<string[]>([])
  const [nameSeed, setNameSeed] = useState(0)
  const [domains, setDomains] = useState<DomainResult[]>([])
  const [checking, setChecking] = useState(false)

  useEffect(() => {
    let alive = true
    void loadBrandKit(dojoId).then((k) => {
      if (!alive) return
      if (k) { setKit(k); setStep('identity') } else setKit(defaultKit(dojoName || 'My brand'))
      setLoaded(true)
    })
    return () => { alive = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dojoId])

  const patch = (p: Partial<BrandKit>) => setKit((k) => ({ ...k, ...p }))
  const setHue = (hue: number) => setKit((k) => ({ ...k, hue, palette: generatePalette(hue, k.scheme) }))
  const setScheme = (scheme: BrandKit['scheme']) => setKit((k) => ({ ...k, scheme, palette: generatePalette(k.hue, scheme) }))
  const regenerate = () => {
    const hue = Math.floor(Math.random() * 360)
    const scheme = SCHEMES[Math.floor(Math.random() * SCHEMES.length)].id
    const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)].id
    const fontId = FONT_PAIRS[Math.floor(Math.random() * FONT_PAIRS.length)].id
    setKit((k) => ({ ...k, hue, scheme, shape, fontId, palette: generatePalette(hue, scheme) }))
  }
  const copy = (text: string, label: string) => {
    void navigator.clipboard?.writeText(text)
    pushToast({ kind: 'event', badge: 'OK', color: '#2f6bff', title: 'Copied', text: label })
  }
  const save = async () => {
    await saveBrandKit(dojoId, kit)
    pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'Brand Kit saved', text: 'Reused across your websites, ads and videos.' })
  }
  const downloadSvg = () => {
    const blob = new Blob([logoSvg(kit, kit.layout, 640)], { type: 'image/svg+xml' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob); a.download = `${(kit.name || 'logo').toLowerCase().replace(/\s+/g, '-')}.svg`; a.click()
    setTimeout(() => URL.revokeObjectURL(a.href), 4000)
  }

  // ---- pipeline actions ----
  const runResearch = () => {
    setProfile(researchProfile(desc || dojoName || 'a modern product'))
    setStep('research')
  }
  const runNaming = () => {
    setNames(generateNames(desc || dojoName || 'nova brand', nameSeed))
    setStep('naming')
  }
  const reroll = () => { const s = nameSeed + 1; setNameSeed(s); setNames(generateNames(desc || dojoName || 'nova brand', s)) }
  const chooseName = async (name: string) => {
    patch({ name })
    setStep('domain'); setChecking(true); setDomains([])
    setDomains(await checkDomains(name)); setChecking(false)
  }
  const recheck = async () => { setChecking(true); setDomains(await checkDomains(kit.name)); setChecking(false) }

  const f = fontPair(kit.fontId)
  const swatches: [string, string][] = [
    ['Primary', kit.palette.primary], ['Secondary', kit.palette.secondary], ['Accent', kit.palette.accent],
    ['Ink', kit.palette.ink], ['Background', kit.palette.bg],
  ]
  const stepIdx = STEPS.findIndex((s) => s.id === step)

  return (
    <div className="brand-mod sq">
      {/* step progress */}
      <div className="sq-steps">
        {STEPS.map((s, i) => (
          <button key={s.id} className={`sq-step${step === s.id ? ' on' : ''}${i < stepIdx ? ' done' : ''}`} onClick={() => setStep(s.id)}>
            <span className="sq-step-n">{i + 1}</span>{s.label}
          </button>
        ))}
      </div>

      {step === 'concept' && (
        <section className="sq-panel">
          <h3 className="sq-title">Describe your product</h3>
          <p className="sq-lead">No account needed. One or two sentences: what it does and who it's for — the tone and audience are inferred.</p>
          <div className="sq-eyebrow">Where do you start?</div>
          <div className="sq-optgrid">
            {START_MODES.map((m) => (
              <button key={m.id} className={`sq-opt${startMode === m.id ? ' on' : ''}`} onClick={() => setStartMode(m.id)}>
                <span className="sq-opt-radio" />
                <span className="sq-opt-txt"><b>{m.title}</b><em>{m.sub}</em></span>
              </button>
            ))}
          </div>
          <label className="sq-field">Describe your product
            <textarea rows={4} value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="e.g. A coffee subscription for offices — freshly roasted beans delivered weekly, with a simple dashboard to manage the team's orders and budget." />
          </label>
          <div className="sq-cta-row">
            <button className="sq-cta" disabled={!desc.trim() && !dojoName} onClick={runResearch}>Generate the research profile →</button>
          </div>
        </section>
      )}

      {step === 'research' && profile && (
        <section className="sq-panel">
          <h3 className="sq-title">Research profile</h3>
          <p className="sq-lead">Derived locally from your description. This shapes the names and the identity.</p>
          <div className="sq-cards3">
            <div className="sq-info"><span className="sq-info-k">Tone</span><b>{profile.tone}</b></div>
            <div className="sq-info"><span className="sq-info-k">Audience</span><b>{profile.audience}</b></div>
            <div className="sq-info"><span className="sq-info-k">Angle</span><b>{profile.angle}</b></div>
          </div>
          <div className="sq-eyebrow">Key themes</div>
          <div className="sq-tags">{(profile.keywords.length ? profile.keywords : ['brand', 'modern', 'simple']).map((k) => <span key={k} className="sq-tag">{k}</span>)}</div>
          <div className="sq-cta-row">
            <button className="sq-cta ghost" onClick={() => setStep('concept')}>← Back</button>
            <button className="sq-cta" onClick={runNaming}>Find names →</button>
          </div>
        </section>
      )}

      {step === 'naming' && (
        <section className="sq-panel">
          <h3 className="sq-title">Name candidates</h3>
          <p className="sq-lead">Pick one to check its domain &amp; handles. Not feeling it? Reroll for a fresh batch.</p>
          <div className="sq-namegrid">
            {(names.length ? names : generateNames(desc || dojoName || 'nova', 0)).map((n) => (
              <button key={n} className={`sq-name${kit.name === n ? ' on' : ''}`} onClick={() => void chooseName(n)}>
                <b>{n}</b><span>{n.toLowerCase().replace(/[^a-z0-9]/g, '')}.com →</span>
              </button>
            ))}
          </div>
          <div className="sq-cta-row">
            <button className="sq-cta ghost" onClick={() => setStep('research')}>← Back</button>
            <button className="sq-cta ghost" onClick={reroll}>↻ Reroll names</button>
          </div>
        </section>
      )}

      {step === 'domain' && (
        <section className="sq-panel">
          <h3 className="sq-title">Availability · <span style={{ color: 'var(--dc)' }}>{kit.name}</span></h3>
          <p className="sq-lead">Live domain check (RDAP). Green = available to register.</p>
          <div className="sq-namecheck">
            <input value={kit.name} onChange={(e) => patch({ name: e.target.value })} maxLength={28} />
            <button className="sq-cta" onClick={() => void recheck()} disabled={checking}>{checking ? 'Checking…' : 'Re-check'}</button>
          </div>
          <div className="sq-domains">
            {checking && domains.length === 0 && <p className="muted">Checking domains…</p>}
            {domains.map((d) => (
              <div key={d.domain} className={`sq-domain ${d.status}`}>
                <b>{d.domain}</b>
                <span className={`sq-dot ${d.status}`}>{d.status === 'available' ? 'Available' : d.status === 'taken' ? 'Taken' : '—'}</span>
              </div>
            ))}
          </div>
          <div className="sq-eyebrow">Suggested handles</div>
          <div className="sq-tags">{socialHandles(kit.name).map((h) => <span key={h} className="sq-tag">{h}</span>)}</div>
          <div className="sq-cta-row">
            <button className="sq-cta ghost" onClick={() => setStep('naming')}>← Names</button>
            <button className="sq-cta" onClick={() => setStep('identity')}>Use "{kit.name}" → Identity</button>
          </div>
        </section>
      )}

      {step === 'identity' && (
        <section className="sq-panel">
          <div className="brand-idrow">
            <label>Brand name<input value={kit.name} maxLength={28} onChange={(e) => patch({ name: e.target.value })} /></label>
            <label>Tagline<input value={kit.tagline} maxLength={48} onChange={(e) => patch({ tagline: e.target.value })} /></label>
            <button className="btn tiny" onClick={regenerate} title="New random suggestion">Regenerate</button>
          </div>

          <div className="brand-hero" style={{ background: kit.palette.bg }}>
            <Svg className="brand-logo" markup={logoSvg(kit, kit.layout, 340)} />
          </div>

          <div className="brand-variants">
            {LAYOUTS.map((l) => (
              <button key={l.id} className={`brand-variant${kit.layout === l.id ? ' on' : ''}`} onClick={() => patch({ layout: l.id })} title={l.label}>
                <span style={{ background: kit.palette.bg }}><Svg markup={logoSvg({ ...kit, layout: l.id }, l.id, 120)} /></span>
                <em>{l.label}</em>
              </button>
            ))}
          </div>

          <h4 className="brand-h">Palette</h4>
          <div className="brand-controls">
            <div className="brand-seg">
              {SCHEMES.map((s) => <button key={s.id} className={kit.scheme === s.id ? 'on' : ''} onClick={() => setScheme(s.id)}>{s.label}</button>)}
            </div>
            <label className="brand-hue">Hue<input type="range" min={0} max={359} value={kit.hue} onChange={(e) => setHue(Number(e.target.value))} /></label>
          </div>
          <div className="brand-palette">
            {swatches.map(([label, hex]) => (
              <button key={label} className="brand-swatch" style={{ background: hex }} onClick={() => copy(hex, `${label} ${hex}`)} title={`Copy ${hex}`}>
                <span style={{ color: label === 'Background' ? kit.palette.ink : '#fff' }}>{label}<em>{hex}</em></span>
              </button>
            ))}
          </div>

          <h4 className="brand-h">Icon</h4>
          <div className="brand-seg wrap">
            {SHAPES.map((s) => <button key={s.id} className={kit.shape === s.id ? 'on' : ''} onClick={() => patch({ shape: s.id })}>{s.label}</button>)}
          </div>

          <h4 className="brand-h">Typography</h4>
          <div className="brand-seg wrap">
            {FONT_PAIRS.map((fp) => <button key={fp.id} className={kit.fontId === fp.id ? 'on' : ''} onClick={() => patch({ fontId: fp.id })}>{fp.label}</button>)}
          </div>
          <div className="brand-type" style={{ background: kit.palette.bg, color: kit.palette.ink }}>
            <div style={{ fontFamily: f.heading, fontWeight: 800, fontSize: 26 }}>{kit.name || 'Aa'} — Heading</div>
            <div style={{ fontFamily: f.body, fontSize: 14, opacity: 0.85 }}>Body text: {f.body.split(',')[0].replace(/"/g, '')}. The quick brown fox jumps over the lazy dog.</div>
          </div>

          <div className="sq-cta-row">
            <button className="sq-cta ghost" onClick={() => void save()}>Save Brand Kit</button>
            <button className="sq-cta" onClick={() => setStep('export')}>Continue to Export →</button>
          </div>
        </section>
      )}

      {step === 'export' && (
        <section className="sq-panel">
          <h3 className="sq-title">Export your Brand Kit</h3>
          <div className="brand-hero" style={{ background: kit.palette.bg }}>
            <Svg className="brand-logo" markup={logoSvg(kit, kit.layout, 300)} />
          </div>
          <div className="sq-cards3">
            <div className="sq-info"><span className="sq-info-k">Name</span><b>{kit.name}</b></div>
            <div className="sq-info"><span className="sq-info-k">Fonts</span><b>{f.label}</b></div>
            <div className="sq-info"><span className="sq-info-k">Palette</span><b>{kit.palette.primary}</b></div>
          </div>
          <div className="brand-actions">
            <button className="sq-cta" onClick={() => void save()}>Save Brand Kit</button>
            <button className="btn tiny" onClick={downloadSvg}>Download logo (SVG)</button>
            <button className="btn tiny ghost" onClick={() => copy(kitCss(kit), 'Brand Kit CSS')}>Copy CSS tokens</button>
          </div>
          {loaded && <p className="muted small">The Brand Kit is stored locally (IndexedDB) and injected automatically into the Website Builder and the Campaign Studio.</p>}
        </section>
      )}
    </div>
  )
}
