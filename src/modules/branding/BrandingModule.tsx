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
import { useWork } from '../../agents/workStore'
import { toolAction } from '../../agents/workApi'
import { useDojo } from '../../store'
import {
  type BrandKit, type LogoLayout, type LogoStyle, type MarkShape, defaultKit, loadBrandKit, saveBrandKit,
  generatePalette, logoSvg, logoLockups, FONT_PAIRS, SHAPES,
} from '../../lib/brand'
import { zipStore } from '../../lib/zip'
import {
  type BrandProfile, type DomainResult, researchProfile, generateKeywords, combineNames,
  checkDomains, checkComBatch, socialProfiles, bestPrice, registrarPrices, registrarUrl, BRAND_TLDS,
} from '../../lib/naming'
import { StepBar } from '../StepBar'
import { StudioNext } from '../StudioNext'
import { BrandTypography, BrandColours } from '../shared/BrandStyle'
import { paletteToKit } from '../../lib/palettes'
import { InfoDot } from '../../components/InfoDot'

type Step = 'concept' | 'research' | 'naming' | 'domain' | 'logo' | 'export'
const STEPS: { id: Step; label: string }[] = [
  { id: 'concept', label: 'Concept' }, { id: 'research', label: 'Research' },
  { id: 'naming', label: 'Naming' }, { id: 'domain', label: 'Availability' },
  { id: 'logo', label: 'Logo' }, { id: 'export', label: 'Export' },
]
const LAYOUTS: LogoLayout[] = ['mark-left', 'mark-top', 'mark-only', 'text-only']
const REGISTRARS_N = 6

// "Where do you start?" · like Shiverbrand, the founder picks an entry point so
// the pipeline only asks for what they still need.
type StartMode = 'scratch' | 'name-domain' | 'domain-only' | 'name-only'
const START_MODES: { id: StartMode; title: string; desc: string }[] = [
  { id: 'scratch', title: 'Start from scratch', desc: 'Full pipeline · keywords → names → domain → logo.' },
  { id: 'name-domain', title: 'I have a name & a domain', desc: 'Skip naming · go straight to the logo.' },
  { id: 'domain-only', title: 'I have a domain, no name', desc: 'Find a name that fits · then design the logo.' },
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
  const renameDojo = useWorkshop((s) => s.renameDojo)
  const updateAccount = useWorkshop((s) => s.updateAccount)
  const hasAccount = useWorkshop((s) => !!s.account)
  // Adopting a brand name renames the dojo AND the account (company) so the new
  // name shows everywhere: the CEO header, the profile, city HQ and exports.
  const adoptName = (name: string) => {
    const n = name.trim(); if (!n) return
    if (dojoId) renameDojo(dojoId, n)
    if (hasAccount) updateAccount({ name: n })
  }
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
  // batch .com availability for the name candidates (find free .com brand names)
  const [comAvail, setComAvail] = useState<Record<string, 'available' | 'taken' | 'unknown'>>({})
  const [comScan, setComScan] = useState<{ on: boolean; done: number; total: number }>({ on: false, done: 0, total: 0 })
  const [showMore, setShowMore] = useState(false)
  const [shortlist, setShortlist] = useState<Set<string>>(new Set())
  const [saved, setSaved] = useState(false)
  // logo identity sub-tabs + style (Shiverbrand-style logo pack)
  const [logoTab, setLogoTab] = useState<'logos' | 'palette' | 'typo'>('logos')
  const [logoStyle, setLogoStyle] = useState<LogoStyle>('color')
  const toggleShortlist = (d: string) => setShortlist((s) => { const n = new Set(s); n.has(d) ? n.delete(d) : n.add(d); return n })

  useEffect(() => {
    let alive = true
    void loadBrandKit(dojoId).then((k) => {
      if (!alive) return
      // Always open on Concept · the founder starts from keywords every time,
      // even if a brand kit was saved before (they can jump steps from the bar).
      if (k) setKit(k); else setKit(defaultKit(dojoName || 'My brand'))
      setStep('concept')
    })
    return () => { alive = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dojoId])

  const patch = (p: Partial<BrandKit>) => setKit((k) => ({ ...k, ...p }))
  // Persist typography/colour immediately so the choice propagates to the
  // Website & Marketing studios (which read the same Brand Kit) right away.
  const patchSave = (p: Partial<BrandKit>) => setKit((k) => { const next = { ...k, ...p }; void saveBrandKit(dojoId, next); return next })

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
  // Concept → build the research profile, then show the Research step.
  const generateProfile = () => {
    setProfile(researchProfile(descSrc()))
    setStep('research')
  }
  // Research → combine the chosen words into names, then Naming.
  const generateNames = () => {
    setNames(combineNames(selected.size ? [...selected] : generateKeywords(descSrc()).slice(0, 8), nameSeed))
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
  // The words to combine · the founder's chosen keywords, or (if they skipped
  // that step) words derived from their description, so we never fall back to a
  // generic "nova brand" set whose .coms are all long gone.
  const nameWords = () => (selected.size ? [...selected] : generateKeywords(descSrc()).slice(0, 8))
  const reroll = () => { const s = nameSeed + 1; setNameSeed(s); setNames(combineNames(nameWords(), s)) }
  // Auto-scan .com availability for the candidates on the Naming step, so free
  // .com brand names surface immediately (real RDAP via the server proxy).
  const nameList = names.length ? names : combineNames(nameWords(), 0)
  useEffect(() => {
    if (step !== 'naming' || !nameList.length) return
    let cancelled = false
    setComScan({ on: true, done: 0, total: nameList.length })
    void checkComBatch(nameList, (done, total) => { if (!cancelled) setComScan({ on: true, done, total }) })
      .then((map) => { if (!cancelled) { setComAvail((prev) => ({ ...prev, ...map })); setComScan((s) => ({ ...s, on: false })) } })
    return () => { cancelled = true }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, names, nameSeed])
  const chooseName = async (name: string) => {
    patch({ name })
    adoptName(name) // the found name becomes the dojo & company name immediately
    setStep('domain'); setChecking(true); setDomains([])
    setDomains(await checkDomains(name)); setChecking(false)
  }
  const recheck = async () => { setChecking(true); setDomains(await checkDomains(kit.name)); setChecking(false) }
  // Save a brand summary page to the user's Notion (when connected).
  const notionOn = useWork((s) => !!s.tools['notion']?.connected)
  const [notionBusy, setNotionBusy] = useState(false)
  const saveToNotion = async () => {
    if (notionBusy) return
    setNotionBusy(true)
    const body = [
      `Tagline: ${kit.tagline}`,
      `Palette: ${Object.values(kit.palette).join(', ')}`,
      `Heading font: ${kit.headingFont || 'preset'}`,
      `Body font: ${kit.bodyFont || 'preset'}`,
    ].join('\n\n')
    const r = await toolAction('notion', 'create', { title: `Brand · ${kit.name || 'My brand'}`, body })
    setNotionBusy(false)
    if (r.ok) pushToast({ kind: 'event', badge: 'OK', color: '#1fa563', title: 'Saved to Notion', text: 'Your brand summary page was created.' })
    else { const map: Record<string, string> = { not_connected: 'Connect Notion first (Connect apps).', no_backend: 'Notion needs the server vault configured.', no_parent: 'Set NOTION_PARENT_ID on the deployment.', create_failed: 'Notion refused the page · reconnect it.' }; pushToast({ kind: 'event', badge: '!', color: '#e0483f', title: 'Not saved', text: map[r.error || ''] || 'Could not save to Notion.' }) }
  }
  const saveName = async () => {
    await saveBrandKit(dojoId, kit)
    adoptName(kit.name) // keep the dojo/company name in sync with any final edit
    setSaved(true)
    pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'Brand saved', text: `"${kit.name}" is now your brand & company name · reused everywhere.` })
  }
  // Enter the Logo step · auto-seed an on-brand hue from the name (unless the
  // user already tuned one) so the first logo colours feel on-brand.
  const goLogo = () => {
    setKit((k) => (k.hue === defaultKit('x').hue ? { ...k, hue: hueFrom(k.name || 'brand'), palette: generatePalette(hueFrom(k.name || 'brand'), k.scheme) } : k))
    setStep('logo')
  }
  // Save the finished kit (logo + colours) and go to Export.
  const saveAndExport = () => {
    setKit((k) => { void saveBrandKit(dojoId, k); return k })
    setSaved(true)
    setStep('export')
    pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'Brand saved', text: `"${kit.name || 'Your brand'}" is ready · its logo & colours power the Website studio.` })
  }
  // import a custom logo (PNG/SVG) · stored on the kit, reused everywhere
  const importLogo = (file: File) => {
    if (file.size > 500_000) { pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Logo too large', text: 'Please use an image under 500 KB.' }); return }
    const r = new FileReader()
    r.onload = () => { patch({ logoDataUrl: String(r.result) }); pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'Logo imported', text: 'Your logo now replaces the generated mark.' }) }
    r.readAsDataURL(file)
  }
  // ---- logo pack (Shiverbrand-style) ----
  const slugName = () => kit.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'brand'
  const dl = (blob: Blob, filename: string) => { const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = filename; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 4000) }
  const svgToPng = (svg: string, size = 512): Promise<Blob> => new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      const c = document.createElement('canvas'); c.width = size; c.height = size
      const ctx = c.getContext('2d'); if (!ctx) return reject(new Error('no ctx'))
      ctx.drawImage(img, 0, 0, size, size)
      c.toBlob((b) => (b ? resolve(b) : reject(new Error('no blob'))), 'image/png')
    }
    img.onerror = reject
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg)
  })
  const dlLockupSvg = (id: string, svg: string) => dl(new Blob([svg], { type: 'image/svg+xml' }), `${slugName()}-${id}.svg`)
  const dlLockupPng = async (id: string, svg: string) => { try { dl(await svgToPng(svg, 512), `${slugName()}-${id}.png`) } catch { pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'PNG failed', text: 'Could not rasterise · use SVG.' }) } }
  const downloadAllLogos = () => {
    const enc = new TextEncoder()
    const entries = logoLockups(kit, logoStyle).map((l) => ({ name: `${slugName()}-${l.id}.svg`, data: enc.encode(l.svg) }))
    dl(new Blob([zipStore(entries) as unknown as BlobPart], { type: 'application/zip' }), `${slugName()}-logo-pack.zip`)
    pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'Logo pack ready', text: `${entries.length} SVGs downloaded as a .zip.` })
  }
  const SHUFFLE_SHAPES: MarkShape[] = SHAPES.map((s) => s.id)
  const shuffleLogo = () => {
    const shape = SHUFFLE_SHAPES[Math.floor(Math.random() * SHUFFLE_SHAPES.length)]
    const layout = (['mark-left', 'mark-top', 'mark-only'] as LogoLayout[])[Math.floor(Math.random() * 3)]
    const hue = Math.floor(Math.random() * 360)
    patch({ shape, layout, hue, palette: generatePalette(hue, kit.scheme) })
  }
  const regenLogo = () => { const hue = hueFrom(kit.name || 'brand'); patch({ shape: 'monogram', layout: 'mark-left', hue, palette: generatePalette(hue, kit.scheme) }) }

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
      // "I have a name & domain" skips straight to the Logo step.
      if (startMode === 'name-domain') return goLogo()
      if (startMode === 'name-only') return void chooseName(kit.name.trim() || descSrc())
      return generateProfile() // scratch / domain-only → Research
    }
    if (step === 'research') return generateNames()
    if (step === 'naming') { void recheck(); return setStep('domain') }
    if (step === 'domain') return goLogo()
    if (step === 'logo') return saveAndExport()
    if (step === 'export') return void saveName()
  }
  const goBack = () => { if (stepIdx > 0) setStep(STEPS[stepIdx - 1].id) }
  const canNext = step === 'concept' ? (needsName(startMode) ? !!kit.name.trim() : selected.size >= 1)
    : step === 'naming' ? !!kit.name.trim()
    : true
  const nextLabel = step === 'concept'
      ? (startMode === 'name-domain' ? 'Design logo →' : startMode === 'name-only' ? 'Check availability →' : 'Generate research profile →')
    : step === 'research' ? 'Generate brand names →'
    : step === 'domain' ? 'Design logo'
    : step === 'logo' ? 'Save & export'
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
          <h3 className="sq-title">Create your concept
            <InfoDot title="Brand Architect · how it works" label="How branding works">
              <p>Describe your idea in one sentence — we turn it into a palette of on-theme <b>keywords</b>. Tap the ones you like (or <b>Select all</b>) and add your own.</p>
              <p>Then walk the steps: <b>Research</b> (audience &amp; positioning) → <b>Naming</b> (we combine your words into brandable names and check real <b>.com</b> availability) → <b>Availability</b> (all TLDs + registrar prices) → <b>Logo</b> &amp; <b>Export</b>.</p>
              <p>Picking a name sets your colours &amp; fonts (the Brand Kit), which flow into the Website and Marketing studios automatically.</p>
            </InfoDot>
          </h3>
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
            <span className="bw-cloudactions">
              <button className="bw-selectall" onClick={() => setSelected(new Set(keywords))} disabled={keywords.length > 0 && selected.size >= keywords.length}>Select all</button>
              {selected.size > 0 && <button className="bw-clear" onClick={() => setSelected(new Set())}>Clear</button>}
            </span>
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

      {step === 'research' && profile && (
        <section className="sq-panel">
          <h3 className="sq-title">Research profile</h3>
          <p className="sq-lead">A structured read of your idea — audience, market, positioning and personality — derived from your description. Use it to steer the name &amp; brand.</p>
          <div className="br-research">
            <div className="br-block"><span className="br-k">Target audience</span><p>{profile.targetAudience}</p></div>
            <div className="br-block"><span className="br-k">Key features</span><div className="sq-tags">{profile.keyFeatures.map((f) => <span key={f} className="sq-tag">{f}</span>)}</div></div>
            <div className="br-block"><span className="br-k">Market category</span><p className="br-mono">{profile.marketCategory}</p></div>
            <div className="br-block"><span className="br-k">Competitive landscape</span><p>{profile.competitiveLandscape}</p></div>
            <div className="br-block"><span className="br-k">Differentiation</span><p>{profile.differentiation}</p></div>
            <div className="br-block"><span className="br-k">Emotional appeal</span><p>{profile.emotionalAppeal}</p></div>
            <div className="br-block"><span className="br-k">Growth potential</span><p>{profile.growthPotential}</p></div>
            <div className="br-block"><span className="br-k">Tone keywords</span><div className="sq-tags">{(profile.toneKeywords.length ? profile.toneKeywords : profile.keywords).map((k) => <span key={k} className="sq-tag">{k}</span>)}</div></div>
            <div className="br-block"><span className="br-k">Brand personality</span><p>{profile.personality}</p></div>
          </div>
          <div className="sq-cards3">
            <div className="sq-info"><span className="sq-info-k">Tone</span><b>{profile.tone}</b></div>
            <div className="sq-info"><span className="sq-info-k">Audience</span><b>{profile.audience}</b></div>
            <div className="sq-info"><span className="sq-info-k">Angle</span><b>{profile.angle}</b></div>
          </div>
        </section>
      )}

      {step === 'research' && !profile && (
        <section className="sq-panel">
          <h3 className="sq-title">Research profile</h3>
          <div className="br-empty">
            <div className="br-empty-ic" aria-hidden="true">?</div>
            <h4>Nothing to research yet</h4>
            <p>The research profile is built from your idea — audience, market, positioning and personality. It needs a description or a few keywords first.</p>
            <ol className="br-empty-steps">
              <li><b>1 · Describe your idea</b><span>Go to <b>Concept</b> and write one sentence about what you're building (e.g. “an app that plans healthy weekly meals”).</span></li>
              <li><b>2 · Pick keywords</b><span>Tap a few suggested words (or <b>Select all</b>), or add your own — these steer the whole brand.</span></li>
              <li><b>3 · Generate</b><span>Come back here with <b>Generate research profile</b> · you'll get audience, market, differentiation and tone.</span></li>
            </ol>
            <button className="sq-cta" onClick={() => setStep('concept')}>← Go to Concept</button>
          </div>
        </section>
      )}

      {step === 'naming' && (() => {
        const slugOf = (n: string) => n.toLowerCase().replace(/[^a-z0-9]/g, '')
        const bySlug = (n: string) => comAvail[slugOf(n)]
        const byLen = (a: string, b: string) => a.length - b.length
        // Three buckets so a name is only ever called "not available" when we
        // KNOW it's registered. During the scan, unchecked names sit in the
        // green grid as "…" so it isn't empty.
        const available = [...nameList].filter((n) => bySlug(n) === 'available' || (comScan.on && bySlug(n) === undefined)).sort(byLen)
        const toVerify = comScan.on ? [] : [...nameList].filter((n) => bySlug(n) === 'unknown').sort(byLen)
        const taken = comScan.on ? [] : [...nameList].filter((n) => bySlug(n) === 'taken').sort(byLen)
        const sureCount = nameList.filter((n) => bySlug(n) === 'available').length
        const pct = comScan.total ? Math.round((comScan.done / comScan.total) * 100) : 0
        const price = bestPrice('com')
        const moreCount = toVerify.length + taken.length
        return (
        <section className="sq-panel nm-panel">
          {/* clear hero · the number of free .com found is the headline */}
          <div className="nm-hero">
            <div>
              <span className="sq-eyebrow">Available .com</span>
              {comScan.on
                ? <h3 className="nm-hero-h">Checking availability…</h3>
                : <h3 className="nm-hero-h"><b className="nm-hero-num">{sureCount}</b> free <b>.com</b> found{price ? <span className="nm-hero-price"> · from ${price.price.toFixed(2)}/yr</span> : null}</h3>}
              <p className="nm-hero-sub">{comScan.on ? `Verifying ${comScan.done}/${comScan.total} candidates for real…` : `Pick a green name to lock it. ${nameList.length} candidates checked${toVerify.length ? ` · ${toVerify.length} need a manual check` : ''}.`}</p>
            </div>
            <button className="sq-cta ghost nm-reroll" onClick={reroll}>↻ New names</button>
          </div>
          {comScan.on && <div className="nm-progress"><span style={{ width: `${pct}%` }} /></div>}
          <div className="bw-selected bw-selected-recap">
            {[...selected].map((k) => <span key={k} className="bw-chip on static">{k}</span>)}
            <button className="bw-editwords" onClick={() => setStep('concept')}>Edit words</button>
          </div>

          {/* Confirmed-free .com · the clear, prominent grid */}
          <div className="nm-grid">
            {available.map((n) => {
              const s = bySlug(n)
              const free = s === 'available'
              return (
                <button key={n} className={`nm-card${free ? ' free' : ' pending'}${kit.name === n ? ' on' : ''}`} onClick={() => void chooseName(n)}>
                  <span className="nm-card-name">{n}</span>
                  <span className="nm-card-dom">{slugOf(n)}.com</span>
                  {free
                    ? <span className="nm-card-badge free"><span className="nm-check">✓</span> Available{price ? ` · $${price.price.toFixed(2)}` : ''}</span>
                    : <span className="nm-card-badge pend">Checking…</span>}
                </button>
              )
            })}
          </div>
          {!comScan.on && !available.length && (
            <div className="nm-noresult">
              <b>No .com confirmed free in this batch.</b>
              <span>Try <b>↻ New names</b> for a fresh set, or open the “more results” below to check the borderline ones at a registrar.</span>
            </div>
          )}

          {/* Everything else, tucked away so the free names stay the focus */}
          {!comScan.on && moreCount > 0 && (
            <div className="nm-more">
              <button className="nm-more-t" onClick={() => setShowMore((v) => !v)}>{showMore ? '▲ Hide' : `▼ Show ${moreCount} more`} · {toVerify.length} to verify · {taken.length} taken</button>
              {showMore && (
                <>
                  {toVerify.length > 0 && (
                    <div className="nm-subgrid">
                      {toVerify.map((n) => (
                        <button key={n} className={`nm-card verify${kit.name === n ? ' on' : ''}`} onClick={() => void chooseName(n)} title="Couldn't reach the registry · open to check it at the registrars">
                          <span className="nm-card-name">{n}</span>
                          <span className="nm-card-dom">{slugOf(n)}.com</span>
                          <span className="nm-card-badge verify">Verify ↗</span>
                        </button>
                      ))}
                    </div>
                  )}
                  {taken.length > 0 && (
                    <div className="nm-subgrid">
                      {taken.map((n) => (
                        <button key={n} className={`nm-card taken${kit.name === n ? ' on' : ''}`} onClick={() => void chooseName(n)} title="Registered · open to check other TLDs">
                          <span className="nm-card-name">{n}</span>
                          <span className="nm-card-dom">{slugOf(n)}.com</span>
                          <span className="nm-card-badge taken">Taken</span>
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </section>
        )
      })()}

      {step === 'domain' && (() => {
        const slug = kit.name.toLowerCase().replace(/[^a-z0-9]/g, '') || 'brand'
        const main = domains.find((d) => d.tld === 'com')
        const others = domains.filter((d) => d.tld !== 'com')
        const priced = domains.filter((d) => d.status !== 'taken' && bestPrice(d.tld)).sort((a, b) => (bestPrice(a.tld)!.price) - (bestPrice(b.tld)!.price))
        const st = (id: string) => (id === 'available' ? 'Available' : id === 'taken' ? 'Not available' : 'Unverified')
        return (
        <section className="sq-panel">
          <h3 className="sq-title">Availability &amp; pricing</h3>
          <p className="sq-lead">Domain availability across {BRAND_TLDS.length} TLDs, social handles and the best registrar prices · {kit.name || 'your brand'}.</p>

          <div className="bd-search">
            <div className="bd-search-l"><b>Check a domain</b><span>Enter a name or full domain (e.g. my-brand.com) to check availability at the registrars.</span></div>
            <div className="sq-namecheck">
              <input value={kit.name} onChange={(e) => patch({ name: e.target.value })} maxLength={28} placeholder="my-brand.com" />
              <button className="sq-cta" onClick={() => void recheck()} disabled={checking}>{checking ? 'Checking…' : 'Verify'}</button>
            </div>
          </div>

          <div className="bd-namechip">{kit.name || 'Your brand'}</div>

          {/* main domain */}
          <div className={`bd-main ${main?.status || 'unknown'}`}>
            <div><b>{slug}.com</b> <span className={`sq-dot ${main?.status || 'unknown'}`}>{main ? st(main.status) : (checking ? 'Checking…' : '·')}</span></div>
            <span className="bd-main-tag">MAIN DOMAIN</span>
          </div>

          {/* every registrar that sells the .com · cheapest → priciest, each a
              direct buy link (indicative list prices, confirmed on the registrar). */}
          {main?.status !== 'taken' && (
            <>
              <div className="sq-eyebrow" style={{ marginTop: 6 }}>All registrars for {slug}.com · cheapest first</div>
              <div className="bd-regtable">
                {registrarPrices('com').map((q, i) => (
                  <a key={q.registrar} className={`bd-regrow${i === 0 ? ' best' : ''}`} href={registrarUrl(q.registrar, `${slug}.com`)} target="_blank" rel="noreferrer">
                    <span className="bd-regname">{q.registrar}{i === 0 && <em className="bd-regbest">Best price</em>}</span>
                    <span className="bd-regprice"><b>${q.price.toFixed(2)}</b><em>/yr</em></span>
                    <span className="bd-regbuy">Buy →</span>
                  </a>
                ))}
              </div>
            </>
          )}

          {/* other TLDs */}
          <div className="sq-eyebrow">Other TLDs</div>
          <div className="bd-tlds">
            {checking && others.length === 0 && <p className="muted small">Checking domains…</p>}
            {others.map((d) => (
              <div key={d.domain} className={`bd-tld ${d.status}`}>
                <span>.{d.tld}</span>
                <span className="bd-tld-i">{d.status === 'available' ? '✓' : d.status === 'taken' ? '✕' : '·'}</span>
              </div>
            ))}
          </div>

          {/* best registrar price */}
          {priced.length > 0 && (
            <>
              <div className="sq-eyebrow" style={{ marginTop: 4 }}>Best domain price · {REGISTRARS_N} registrars compared</div>
              <div className="bd-prices">
                {priced.map((d) => {
                  const bp = bestPrice(d.tld)!
                  const saved = shortlist.has(d.domain)
                  return (
                    <div key={d.domain} className="bd-price">
                      <div className="bd-price-name"><b>{d.domain}</b><span className={`sq-dot ${d.status}`}>{st(d.status)}</span></div>
                      <div className="bd-price-amt"><b>${bp.price.toFixed(2)}</b><em>/yr</em><span className="bd-reg">{bp.registrar}</span></div>
                      <a className="bd-get" href={registrarUrl(bp.registrar, d.domain)} target="_blank" rel="noreferrer">Get this domain →</a>
                      <button className={`bd-save${saved ? ' on' : ''}`} onClick={() => toggleShortlist(d.domain)}>{saved ? 'Saved ✓' : 'Save for later'}</button>
                    </div>
                  )
                })}
              </div>
            </>
          )}

          {/* social handles */}
          <div className="sq-eyebrow" style={{ marginTop: 4 }}>Social handles</div>
          <div className="bd-socials">
            {socialProfiles(kit.name).map((s) => (
              <a key={s.platform} className="bd-social" href={s.url} target="_blank" rel="noreferrer">
                <b>{s.platform}</b><code>{s.handle}</code><span className="bd-social-free">Probably available</span>
              </a>
            ))}
          </div>

          {/* trademark check */}
          <div className="bd-tm-head"><span className="sq-eyebrow">Trademark check</span><span className="bd-manual">MANUAL CHECK</span></div>
          <p className="sq-lead" style={{ margin: 0 }}>Search the name in the official databases before filing. Links open a pre-filled search at INPI (France), EUIPO (EU), USPTO (US) and the WIPO global database.</p>
          <div className="bd-tms">
            <a className="bd-tm" target="_blank" rel="noreferrer" href={`https://data.inpi.fr/search?type=marques&q=${encodeURIComponent(kit.name)}`}><b>INPI</b><span>FR ↗</span></a>
            <a className="bd-tm" target="_blank" rel="noreferrer" href={`https://www.tmdn.org/tmview/#/tmview/results?page=1&pageSize=30&criteria=C&basicSearch=${encodeURIComponent(kit.name)}`}><b>EUIPO TMview</b><span>EU ↗</span></a>
            <a className="bd-tm" target="_blank" rel="noreferrer" href={`https://tmsearch.uspto.gov/search/search-information?query=${encodeURIComponent(kit.name)}`}><b>USPTO</b><span>US ↗</span></a>
            <a className="bd-tm" target="_blank" rel="noreferrer" href={`https://branddb.wipo.int/en/quicksearch/brand/${encodeURIComponent(kit.name)}`}><b>WIPO Global Brand DB</b><span>WORLD ↗</span></a>
          </div>
        </section>
        )
      })()}

      {step === 'logo' && (
        <section className="sq-panel">
          <h3 className="sq-title">Brand identity</h3>
          <p className="sq-lead">A full logo pack, palette and type scale for <b style={{ color: 'var(--dc)' }}>{kit.name}</b>. Download any lockup, or import your own logo. Colours flow into the Website studio.</p>

          {/* sub-tabs + actions */}
          <div className="lg-bar">
            <div className="lg-tabs">
              {(['logos', 'palette', 'typo'] as const).map((t) => (
                <button key={t} className={`lg-tab${logoTab === t ? ' on' : ''}`} onClick={() => setLogoTab(t)}>{t === 'logos' ? 'Logos' : t === 'palette' ? 'Palette' : 'Typography'}</button>
              ))}
            </div>
            <div className="lg-actions">
              <button className="sq-cta ghost sm" onClick={shuffleLogo}>⟲ Shuffle</button>
              <button className="sq-cta ghost sm" onClick={regenLogo}>↻ Regenerate</button>
            </div>
          </div>

          {logoTab === 'logos' && (
            <>
              <div className="lg-toolbar">
                <div className="lg-seg">
                  {(['color', 'mono', 'inverted'] as LogoStyle[]).map((s) => (
                    <button key={s} className={logoStyle === s ? 'on' : ''} onClick={() => setLogoStyle(s)}>{s === 'color' ? 'Colour' : s === 'mono' ? 'Mono' : 'Inverted'}</button>
                  ))}
                </div>
                <label className="sq-cta ghost sm">
                  {kit.logoDataUrl ? 'Replace logo' : 'Import logo'}
                  <input type="file" accept="image/png,image/svg+xml,image/jpeg" hidden onChange={(e) => { const f = e.target.files?.[0]; if (f) importLogo(f); e.currentTarget.value = '' }} />
                </label>
                <button className="sq-cta sm" onClick={downloadAllLogos}>⬇ Download all</button>
              </div>
              {kit.logoDataUrl ? (
                <div className="bi-logo bd-logo-preview" style={{ background: '#fff' }}>
                  <img src={kit.logoDataUrl} alt={`${kit.name} logo`} style={{ maxWidth: '100%', maxHeight: 200, objectFit: 'contain' }} />
                  <button className="sq-cta ghost sm" style={{ marginTop: 12 }} onClick={() => patch({ logoDataUrl: undefined })}>Use generated logo</button>
                </div>
              ) : (
                <div className="lg-grid">
                  {logoLockups(kit, logoStyle).map((l) => (
                    <div key={l.id} className="lg-card">
                      <div className="lg-card-h"><b>{l.label}</b><span className="lg-dl"><button onClick={() => dlLockupSvg(l.id, l.svg)}>SVG</button> · <button onClick={() => void dlLockupPng(l.id, l.svg)}>PNG</button></span></div>
                      <div className={`lg-preview${l.dark ? ' dark' : ''}`} dangerouslySetInnerHTML={{ __html: l.svg }} />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {logoTab === 'palette' && (
            <>
              <div className="sq-eyebrow">Logo mark</div>
              <div className="bw-cloud">{SHAPES.map((s) => <button key={s.id} className={`bw-chip${kit.shape === s.id ? ' on' : ''}`} onClick={() => patchSave({ shape: s.id })}>{s.label}</button>)}</div>
              <div className="sq-eyebrow" style={{ marginTop: 10 }}>Layout</div>
              <div className="bw-cloud">{LAYOUTS.map((l) => <button key={l} className={`bw-chip${kit.layout === l ? ' on' : ''}`} onClick={() => patchSave({ layout: l })}>{l.replace('-', ' ')}</button>)}</div>
              <div className="sq-eyebrow" style={{ marginTop: 10 }}>Palette · shared with your Website &amp; Marketing</div>
              <BrandColours palette={kit.palette} onApply={(cols) => patchSave({ palette: paletteToKit(cols) })} />
            </>
          )}

          {logoTab === 'typo' && (
            <>
              <p className="sq-lead" style={{ marginTop: 0 }}>Same fonts as your Website — pick a heading &amp; body font here and it flows into the Website and Marketing studios.</p>
              <BrandTypography
                heading={kit.headingFont}
                body={kit.bodyFont}
                sample={kit.name || 'Your brand'}
                onHeading={(name) => patchSave({ headingFont: name })}
                onBody={(name) => patchSave({ bodyFont: name })}
                onPreset={(h, b) => patchSave({ headingFont: h, bodyFont: b })}
              />
              <div className="lg-typescale" style={{ marginTop: 12 }}>
                {[
                  { k: 'HERO', size: 54, w: 800, hint: 'Landing page hero, major headlines' },
                  { k: 'DISPLAY', size: 40, w: 800, hint: 'Section titles, feature highlights' },
                  { k: 'H1', size: 30, w: 700, hint: 'Page titles, primary headers' },
                  { k: 'BODY', size: 17, w: 400, hint: 'Paragraphs and content', body: true },
                ].map((r) => {
                  const preset = FONT_PAIRS.find((x) => x.id === kit.fontId) || FONT_PAIRS[0]
                  const headFam = kit.headingFont ? `"${kit.headingFont}", ${preset.heading}` : preset.heading
                  const bodyFam = kit.bodyFont ? `"${kit.bodyFont}", ${preset.body}` : preset.body
                  return (
                    <div key={r.k} className="lg-ts-row">
                      <div className="lg-ts-k">{r.k}</div>
                      <div className="lg-ts-sample" style={{ fontFamily: r.body ? bodyFam : headFam, fontSize: r.size, fontWeight: r.w }}>{r.body ? 'The quick brown fox builds a brand.' : `Welcome to ${kit.name}`}</div>
                      <div className="lg-ts-hint">{r.hint}</div>
                    </div>
                  )
                })}
              </div>
            </>
          )}

          <label className="sq-field" style={{ marginTop: 6 }}>Tagline
            <input value={kit.tagline} maxLength={48} onChange={(e) => patch({ tagline: e.target.value })} />
          </label>
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
            {notionOn && <button className="sq-cta ghost" disabled={notionBusy} onClick={() => void saveToNotion()}>{notionBusy ? 'Saving…' : 'Save to Notion'}</button>}
          </div>
          {saved && <StudioNext from="brandi" done={`"${kit.name}" saved · your Website studio now uses this brand.`} />}
        </section>
      )}
    </div>
  )
}
