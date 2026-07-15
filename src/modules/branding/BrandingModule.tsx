// Brand Studio (Brandi · Brand Architect) · a Shiverbrand-style pipeline that
// runs 100% locally:
//   Concept   → describe your product
//   Keywords  → ~50 on-theme keywords to pick from + add your own words
//   Naming    → combine the chosen words into brandable names
//   Domain    → real .com (+ more) availability via server-side RDAP, no key
// Choosing a name saves it to the central Brand Kit (IndexedDB), so the Website
// and Marketing studios reuse it automatically.
import { useEffect, useState } from 'react'
import type { ModuleProps } from '../registry'
import { useWorkshop } from '../../workshop'
import { useDojo } from '../../store'
import {
  type BrandKit, defaultKit, loadBrandKit, saveBrandKit,
  generatePalette, logoSvg, FONT_PAIRS,
} from '../../lib/brand'
import {
  type BrandProfile, type DomainResult, researchProfile, generateKeywords, combineNames,
  checkDomains, socialHandles,
} from '../../lib/naming'
import { StepBar } from '../StepBar'
import { StudioNext } from '../StudioNext'

type Step = 'concept' | 'naming' | 'domain' | 'export'
const STEPS: { id: Step; label: string }[] = [
  { id: 'concept', label: 'Concept' },
  { id: 'naming', label: 'Naming' }, { id: 'domain', label: 'Availability' },
  { id: 'export', label: 'Export' },
]

// "Where do you start?" · like Shiverbrand, the founder picks an entry point so
// the pipeline only asks for what they still need.
type StartMode = 'scratch' | 'name-domain' | 'domain-only' | 'name-only'
const START_MODES: { id: StartMode; title: string; desc: string }[] = [
  { id: 'scratch', title: 'Start from scratch', desc: 'Full pipeline · keywords → names → domain → identity.' },
  { id: 'name-domain', title: 'I have a name & a domain', desc: 'Skip naming · go straight to the visual identity.' },
  { id: 'domain-only', title: 'I have a domain, no name', desc: 'Find a name that fits · then design the identity.' },
  { id: 'name-only', title: 'I have a name, no domain', desc: 'Check domains & handles for your name.' },
]
const needsName = (m: StartMode) => m === 'name-domain' || m === 'name-only'
// keyword-generation language (display only · the local banks are English, but
// we surface the choice to match the Shiverbrand flow).
const KW_LANGS: { id: string; label: string }[] = [
  { id: 'en', label: 'English' }, { id: 'fr', label: 'French' }, { id: 'es', label: 'Spanish' },
  { id: 'de', label: 'German' }, { id: 'it', label: 'Italian' }, { id: 'pt', label: 'Portuguese' },
  { id: 'nl', label: 'Dutch' },
]
const APP_TYPES: { id: string; label: string; sub: string }[] = [
  { id: 'web', label: 'Web app', sub: 'Desktop + mobile' },
  { id: 'ios', label: 'iOS app', sub: 'iPhone + iPad' },
  { id: 'android', label: 'Android app', sub: 'Phones + tablets' },
]
function hueFrom(s: string): number { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 360; return h }

export default function BrandingModule({ dojoId }: ModuleProps) {
  const dojoName = useWorkshop((s) => s.dojos.find((d) => d.id === dojoId)?.name)
  const pushToast = useDojo((s) => s.pushToast)
  const [kit, setKit] = useState<BrandKit>(() => defaultKit(dojoName || 'My brand'))

  // pipeline state
  const [step, setStep] = useState<Step>('concept')
  const [startMode, setStartMode] = useState<StartMode>('scratch')
  const [desc, setDesc] = useState('')
  const [profile, setProfile] = useState<BrandProfile | null>(null)
  // Shiverbrand keyword workshop
  const [keywords, setKeywords] = useState<string[]>([])
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [customWord, setCustomWord] = useState('')
  const [kwLang, setKwLang] = useState('en')
  const [appType, setAppType] = useState('web')
  // naming + availability
  const [names, setNames] = useState<string[]>([])
  const [nameSeed, setNameSeed] = useState(0)
  const [domains, setDomains] = useState<DomainResult[]>([])
  const [checking, setChecking] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    let alive = true
    void loadBrandKit(dojoId).then((k) => {
      if (!alive) return
      if (k) { setKit(k); setStep('domain') } else setKit(defaultKit(dojoName || 'My brand'))
    })
    return () => { alive = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dojoId])

  const patch = (p: Partial<BrandKit>) => setKit((k) => ({ ...k, ...p }))

  // ---- pipeline actions ----
  const descSrc = () => desc || dojoName || 'a modern product'
  // (Re)generate the ~50 on-theme keyword suggestions from the description.
  const genSuggestions = () => {
    setProfile(researchProfile(descSrc()))
    setKeywords(generateKeywords(descSrc()))
  }
  // Auto-populate the suggestion cloud the first time we land on Concept so the
  // founder always has words to click, even before generating.
  useEffect(() => {
    if (step === 'concept' && keywords.length === 0) setKeywords(generateKeywords(descSrc()))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step])
  // Concept → build the research profile + first name batch, then Naming.
  const generateProfile = () => {
    setProfile(researchProfile(descSrc()))
    setNames(combineNames([...selected], nameSeed))
    setStep('naming')
  }
  const toggleKw = (k: string) => setSelected((s) => {
    const next = new Set(s)
    next.has(k) ? next.delete(k) : next.add(k)
    return next
  })
  const addCustom = () => {
    const w = customWord.trim().toLowerCase().replace(/[^a-z0-9]/g, '')
    if (!w || w.length < 2) { setCustomWord(''); return }
    setKeywords((ks) => (ks.includes(w) ? ks : [w, ...ks]))
    setSelected((s) => new Set(s).add(w))
    setCustomWord('')
  }
  const reroll = () => { const s = nameSeed + 1; setNameSeed(s); setNames(combineNames([...selected], s)) }
  const chooseName = async (name: string) => {
    patch({ name })
    setStep('domain'); setChecking(true); setDomains([])
    setDomains(await checkDomains(name)); setChecking(false)
  }
  const recheck = async () => { setChecking(true); setDomains(await checkDomains(kit.name)); setChecking(false) }
  const saveName = async () => {
    await saveBrandKit(dojoId, kit)
    setSaved(true)
    pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'Brand saved', text: `"${kit.name}" is now your brand · reused by the Website and Marketing studios.` })
  }
  // Finish · auto-seed an on-brand palette + logo from the name (colours &
  // styling are refined in the Website studio; the logo can be re-imported
  // there too), save the kit, and go to Export.
  const finishBrand = () => {
    setKit((k) => {
      const next = k.hue === defaultKit('x').hue
        ? { ...k, hue: hueFrom(k.name || 'brand'), palette: generatePalette(hueFrom(k.name || 'brand'), k.scheme) }
        : k
      void saveBrandKit(dojoId, next)
      return next
    })
    setSaved(true)
    setStep('export')
    pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'Brand saved', text: `"${kit.name || 'Your brand'}" is ready · its colours power the Website studio.` })
  }
  // import a custom logo (PNG/SVG) · stored on the kit, reused everywhere
  const importLogo = (file: File) => {
    if (file.size > 500_000) { pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Logo too large', text: 'Please use an image under 500 KB.' }); return }
    const r = new FileReader()
    r.onload = () => { patch({ logoDataUrl: String(r.result) }); pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'Logo imported', text: 'Your logo now replaces the generated mark.' }) }
    r.readAsDataURL(file)
  }
  // downloads
  const downloadLogo = () => {
    const blob = new Blob([logoSvg(kit, kit.layout, 512)], { type: 'image/svg+xml' })
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `${kit.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'logo'}-logo.svg`; a.click()
    setTimeout(() => URL.revokeObjectURL(a.href), 4000)
  }
  const downloadGuidelines = () => {
    const p = kit.palette
    const html = `<!doctype html><meta charset="utf-8"><title>${kit.name} · brand guidelines</title><style>body{font-family:Outfit,system-ui,sans-serif;max-width:760px;margin:40px auto;padding:0 20px;color:#14161f}h1{font-size:34px}.sw{display:flex;gap:10px;flex-wrap:wrap;margin:12px 0}.sw div{width:120px}.sw span{display:block;height:64px;border-radius:8px;border:1px solid #0001}.sw code{font-size:12px}</style>`
      + `<div>${logoSvg(kit, 'mark-left', 360)}</div><h1>${kit.name}</h1><p><b>${kit.tagline}</b></p>`
      + `<h2>Palette</h2><div class="sw">${Object.entries(p).map(([k, c]) => `<div><span style="background:${c}"></span><code>${k} ${c}</code></div>`).join('')}</div>`
      + `<h2>Typography</h2><p>Heading: <b>${FONT_PAIRS.find((f) => f.id === kit.fontId)?.label}</b></p>`
    const blob = new Blob([html], { type: 'text/html' })
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `${kit.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'brand'}-guidelines.html`; a.click()
    setTimeout(() => URL.revokeObjectURL(a.href), 4000)
  }

  const stepIdx = STEPS.findIndex((s) => s.id === step)
  const advance = () => {
    if (step === 'concept') {
      setProfile(researchProfile(descSrc()))
      // "I have a name & domain" skips straight to Export (finish + save).
      if (startMode === 'name-domain') return finishBrand()
      if (startMode === 'name-only') return void chooseName(kit.name.trim() || descSrc())
      return generateProfile() // scratch / domain-only → Naming
    }
    if (step === 'naming') { void recheck(); return setStep('domain') }
    if (step === 'domain') return finishBrand()
    if (step === 'export') return void saveName()
  }
  const goBack = () => { if (stepIdx > 0) setStep(STEPS[stepIdx - 1].id) }
  const canNext = step === 'concept' ? (needsName(startMode) ? !!kit.name.trim() : selected.size >= 1)
    : step === 'naming' ? !!kit.name.trim()
    : true
  const nextLabel = step === 'concept'
      ? (startMode === 'name-domain' ? 'Finish brand →' : startMode === 'name-only' ? 'Check availability →' : 'Generate research profile →')
    : step === 'domain' ? 'Finish & export'
    : step === 'export' ? 'Save brand' : 'Next'

  return (
    <div className="brand-mod sq">
      <StepBar
        steps={STEPS} current={step} onJump={(id) => setStep(id as Step)}
        onBack={goBack} backDisabled={stepIdx === 0}
        onNext={advance} canNext={canNext} nextLabel={nextLabel}
      />

      {step === 'concept' && (
        <section className="sq-panel">
          <h3 className="sq-title">Create your concept</h3>
          <p className="sq-lead">Tell us what you're building. We turn it into a palette of on-theme keywords, then combine your favourites into brandable names · all on your device.</p>

          {/* Where do you start? */}
          <div className="sq-eyebrow">Where do you start?</div>
          <div className="sq-optgrid">
            {START_MODES.map((m) => (
              <button key={m.id} className={`sq-opt${startMode === m.id ? ' on' : ''}`} onClick={() => setStartMode(m.id)}>
                <span className="sq-opt-radio" />
                <span className="sq-opt-txt"><b>{m.title}</b><em>{m.desc}</em></span>
              </button>
            ))}
          </div>

          {/* Brand name · only when the founder already has one */}
          {needsName(startMode) && (
            <label className="sq-field">Your brand name
              <input value={kit.name} maxLength={28} placeholder="e.g. Brewline" onChange={(e) => patch({ name: e.target.value })} />
            </label>
          )}

          {/* Describe your product */}
          <label className="sq-field">Describe your product
            <textarea rows={4} value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="e.g. A coffee subscription for offices · freshly roasted beans delivered weekly, with a simple dashboard to manage the team's orders and budget." />
          </label>
          <p className="sq-hint">One or two sentences: what it does and who it's for. The more specific, the sharper the keywords.</p>

          {/* Favourite keywords · required for the name-finding branches */}
          <div className="sq-eyebrow">Favourite keywords{needsName(startMode) ? '' : ' *'}</div>
          <div className="bw-howto">
            <b>How to add your keywords</b>
            <ol>
              <li>Generate suggestions from your description, or type your own word.</li>
              <li>Click a suggestion · or type a word and press <b>Add</b> · to put it on your list.</li>
              <li>Keep the words that best capture your brand. We combine them into names.</li>
            </ol>
          </div>

          <div className="bw-selected">
            {selected.size === 0 && <span className="muted small">No keywords yet · add a few below.</span>}
            {[...selected].map((k) => (
              <button key={k} className="bw-chip on" onClick={() => toggleKw(k)}>{k}<span className="bw-x">×</span></button>
            ))}
          </div>
          <div className="bw-add">
            <input
              value={customWord} maxLength={16} placeholder="Add another keyword…"
              onChange={(e) => setCustomWord(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addCustom() } }}
            />
            <button className="sq-cta ghost" onClick={genSuggestions}>Generate 50 words</button>
            <button className="sq-cta" onClick={addCustom} disabled={!customWord.trim()}>+ Add</button>
          </div>

          <div className="bw-cloudhead">
            <span className="sq-eyebrow">{keywords.length} suggestions · click to add</span>
            {selected.size > 0 && <button className="bw-clear" onClick={() => setSelected(new Set())}>Clear</button>}
          </div>
          <div className="bw-cloud">
            {keywords.map((k) => (
              <button key={k} className={`bw-chip${selected.has(k) ? ' on' : ''}`} onClick={() => toggleKw(k)}>{k}</button>
            ))}
          </div>

          {/* Language + app type */}
          <div className="bw-2col">
            <label className="sq-field">Keyword language
              <select value={kwLang} onChange={(e) => setKwLang(e.target.value)}>
                {KW_LANGS.map((l) => <option key={l.id} value={l.id}>{l.label}</option>)}
              </select>
            </label>
            <div className="sq-field">Type of app
              <div className="bw-seg">
                {APP_TYPES.map((a) => (
                  <button key={a.id} className={`bw-seg-b${appType === a.id ? ' on' : ''}`} onClick={() => setAppType(a.id)} title={a.sub}>
                    <b>{a.label}</b><em>{a.sub}</em>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {step === 'naming' && (
        <section className="sq-panel">
          <h3 className="sq-title">Name candidates</h3>
          <p className="sq-lead">Combinations of your {selected.size} chosen word{selected.size === 1 ? '' : 's'}. Pick one to check its .com &amp; handles, or reroll for a fresh batch.</p>
          {profile && (
            <div className="sq-cards3">
              <div className="sq-info"><span className="sq-info-k">Tone</span><b>{profile.tone}</b></div>
              <div className="sq-info"><span className="sq-info-k">Audience</span><b>{profile.audience}</b></div>
              <div className="sq-info"><span className="sq-info-k">Angle</span><b>{profile.angle}</b></div>
            </div>
          )}
          <div className="bw-selected bw-selected-recap">
            {[...selected].map((k) => <span key={k} className="bw-chip on static">{k}</span>)}
            <button className="bw-editwords" onClick={() => setStep('concept')}>Edit words</button>
          </div>
          <div className="sq-namegrid">
            {(names.length ? names : combineNames([...selected], 0)).map((n) => (
              <button key={n} className={`sq-name${kit.name === n ? ' on' : ''}`} onClick={() => void chooseName(n)}>
                <b>{n}</b><span>{n.toLowerCase().replace(/[^a-z0-9]/g, '')}.com →</span>
              </button>
            ))}
          </div>
          <div className="sq-cta-row">
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
                <span className={`sq-dot ${d.status}`}>{d.status === 'available' ? 'Available' : d.status === 'taken' ? 'Taken' : '·'}</span>
              </div>
            ))}
          </div>
          <div className="sq-eyebrow">Suggested handles</div>
          <div className="sq-tags">{socialHandles(kit.name).map((h) => <span key={h} className="sq-tag">{h}</span>)}</div>
          <div className="sq-eyebrow" style={{ marginTop: 12 }}>Check trademarks before you register</div>
          <div className="sq-tags">
            <a className="sq-tag" target="_blank" rel="noreferrer" href={`https://data.inpi.fr/search?type=marques&q=${encodeURIComponent(kit.name)}`}>INPI · FR →</a>
            <a className="sq-tag" target="_blank" rel="noreferrer" href={`https://www.tmdn.org/tmview/#/tmview/results?page=1&pageSize=30&criteria=C&basicSearch=${encodeURIComponent(kit.name)}`}>EUIPO · EU →</a>
            <a className="sq-tag" target="_blank" rel="noreferrer" href={`https://tmsearch.uspto.gov/search/search-information?query=${encodeURIComponent(kit.name)}`}>USPTO · US →</a>
            <a className="sq-tag" target="_blank" rel="noreferrer" href={`https://branddb.wipo.int/en/quicksearch/brand/${encodeURIComponent(kit.name)}`}>WIPO · World →</a>
          </div>
        </section>
      )}

      {step === 'export' && (
        <section className="sq-panel">
          <h3 className="sq-title">Your brand is ready</h3>
          <p className="sq-lead">Saved as <b style={{ color: 'var(--dc)' }}>{kit.name || 'your brand'}</b>. Its colours already power your <b>Website</b> &amp; <b>Marketing</b> studios — you fine-tune styles there. Use the auto-generated logo, or import your own. Save the whole project (all studios &amp; assets) as a <b>.dojo</b> file in Dojo Studio → Review.</p>
          <div className="bi-logo">
            {kit.logoDataUrl
              ? <img src={kit.logoDataUrl} alt={`${kit.name} logo`} style={{ maxWidth: '100%', maxHeight: 200, objectFit: 'contain' }} />
              : <span dangerouslySetInnerHTML={{ __html: logoSvg(kit, kit.layout, 320) }} />}
          </div>
          <div className="bi-swatches">{Object.entries(kit.palette).map(([k, c]) => <span key={k} className="bi-sw" style={{ background: c }} title={`${k} · ${c}`} />)}</div>
          <label className="sq-field" style={{ marginTop: 6 }}>Tagline
            <input value={kit.tagline} maxLength={48} onChange={(e) => patch({ tagline: e.target.value })} />
          </label>
          <div className="sq-cta-row" style={{ marginTop: 6 }}>
            <label className="sq-cta">
              {kit.logoDataUrl ? 'Replace my logo' : 'Import my logo (PNG/SVG)'}
              <input type="file" accept="image/png,image/svg+xml,image/jpeg" hidden onChange={(e) => { const f = e.target.files?.[0]; if (f) importLogo(f); e.currentTarget.value = '' }} />
            </label>
            {kit.logoDataUrl && <button className="sq-cta ghost" onClick={() => patch({ logoDataUrl: undefined })}>Use generated logo</button>}
          </div>
          <div className="sq-cta-row">
            <button className="sq-cta ghost" onClick={downloadLogo}>Download logo (SVG)</button>
            <button className="sq-cta ghost" onClick={downloadGuidelines}>Brand guidelines (HTML)</button>
          </div>
          {saved && <StudioNext from="brandi" done={`"${kit.name}" saved · your Website studio now uses this brand.`} />}
        </section>
      )}
    </div>
  )
}
