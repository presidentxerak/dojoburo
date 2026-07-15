// Website Builder · a local block-based website builder. The AI gives a first
// version instantly (from the company name); the user edits every block, reorders
// them, previews responsive, and exports a standalone .html · all in the browser.
// The website automatically uses the saved Brand Kit (colours + fonts). No server.
import { useEffect, useMemo, useRef, useState } from 'react'
import type { ModuleProps } from '../registry'
import { useWorkshop } from '../../workshop'
import { useDojo } from '../../store'
import { type BrandKit, saveBrandKit } from '../../lib/brand'
import {
  type SiteDoc, type Block, type BlockType, type TemplateCategory, type SiteFont, type SiteLayout,
  BLOCK_LABELS, BLOCK_ORDER, makeBlock, generateSite,
  generateFromTemplate, SITE_TEMPLATES, SITE_FONTS, SITE_LAYOUTS, GOOGLE_FONTS, loadGoogleFonts, googleFontsHref, fontSet, fullDoc, fieldsFor, getPath, setPath, loadSite, saveSite, siteBrand, type GFont,
} from '../../lib/site'
import { PRESET_PALETTES, randomPalette, paletteToKit, kitToPalette, textOn } from '../../lib/palettes'
import { StepBar } from '../StepBar'
import { StudioNext } from '../StudioNext'

const CATS: (TemplateCategory | 'All')[] = ['All', 'Business', 'Store', 'Portfolio', 'Restaurant', 'Agency', 'Personal', 'Blog', 'Events']
const VIBE_LABEL: Record<string, string> = { serif: 'Serif', sans: 'Sans', mono: 'Mono' }
type Step = 'template' | 'design' | 'typography' | 'colours' | 'export'
const STEPS: { id: Step; label: string }[] = [
  { id: 'template', label: 'Template' }, { id: 'design', label: 'Design' },
  { id: 'typography', label: 'Typography' }, { id: 'colours', label: 'Colours' }, { id: 'export', label: 'Export' },
]

export default function WebsiteModule({ dojoId }: ModuleProps) {
  const dojoName = useWorkshop((s) => s.dojos.find((d) => d.id === dojoId)?.name) || 'My brand'
  const pushToast = useDojo((s) => s.pushToast)
  const [site, setSite] = useState<SiteDoc>(() => generateSite(dojoName))
  const [brand, setBrand] = useState<BrandKit | null>(null)
  const [sel, setSel] = useState<string | null>(null)
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop')
  const [addOpen, setAddOpen] = useState(false)
  const [step, setStep] = useState<Step>('template')
  const [cat, setCat] = useState<(TemplateCategory | 'All')>('All')
  const [saved, setSaved] = useState(false)
  // colours · Coolors-style generator + preset palettes
  const [gen, setGen] = useState<string[]>([])
  const [locks, setLocks] = useState<boolean[]>([false, false, false, false, false])
  // content · import/generate images, videos & text + connect apps
  const [contentOpen, setContentOpen] = useState(false)
  const [imgPrompt, setImgPrompt] = useState('')

  useEffect(() => {
    let alive = true
    void Promise.all([loadSite(dojoId), siteBrand(dojoId, dojoName)]).then(([s, b]) => {
      if (!alive) return
      setBrand(b)
      if (s) { setSite(s); setSel(s.blocks[0]?.id ?? null); setStep('design') }
    })
    return () => { alive = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dojoId])

  const useTemplate = (id: string) => {
    const s = generateFromTemplate(dojoName, id)
    setSite(s); setSel(s.blocks[0]?.id ?? null); setStep('design')
    pushToast({ kind: 'event', badge: 'OK', color: '#2f6bff', title: 'Template applied', text: 'Edit each block, then export. It uses your Brand Kit.' })
  }
  const startBlank = () => { const s = generateSite(dojoName); setSite(s); setSel(s.blocks[0]?.id ?? null); setStep('design') }
  const templates = SITE_TEMPLATES.filter((t) => cat === 'All' || t.category === cat)

  // The export/clean doc (no editor chrome) and the editable preview doc
  // (each section clickable) · the design step renders the editable one.
  const doc = useMemo(() => (brand ? fullDoc(site, brand) : ''), [site, brand])
  const editDoc = useMemo(() => (brand ? fullDoc(site, brand, { editable: true }) : ''), [site, brand])
  const selected = site.blocks.find((b) => b.id === sel) || null

  // Click-to-select: the preview iframe posts the clicked section's id; we select
  // it here. A ref mirrors `sel` so the iframe onLoad handler always re-highlights
  // the current section after the srcDoc reloads (which happens on every edit).
  const frameRef = useRef<HTMLIFrameElement>(null)
  const selRef = useRef<string | null>(sel)
  useEffect(() => { selRef.current = sel }, [sel])
  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      const d = e.data as { __ds?: string; id?: string }
      if (d && d.__ds === 'select' && d.id) setSel(d.id)
    }
    window.addEventListener('message', onMsg)
    return () => window.removeEventListener('message', onMsg)
  }, [])
  // push the selection outline to the iframe (no scroll — avoids jumping while typing)
  const postSel = (id: string | null, scroll: boolean) => {
    frameRef.current?.contentWindow?.postMessage({ __ds: 'sel', id, scroll }, '*')
  }
  useEffect(() => { postSel(sel, false); /* re-outline after edits */ }, [sel, editDoc])
  // selecting from the block list should scroll the preview to that section
  const selectBlock = (id: string) => { setSel(id); postSel(id, true) }

  const mutate = (blocks: Block[]) => setSite((s) => ({ ...s, blocks }))
  const add = (type: BlockType) => { const b = makeBlock(type, site.name); mutate([...site.blocks, b]); setSel(b.id); setAddOpen(false) }
  const del = (id: string) => { mutate(site.blocks.filter((b) => b.id !== id)); if (sel === id) setSel(null) }
  const dup = (id: string) => { const i = site.blocks.findIndex((b) => b.id === id); if (i < 0) return; const c = { ...site.blocks[i], id: `b_${Date.now().toString(36)}` }; const arr = [...site.blocks]; arr.splice(i + 1, 0, c); mutate(arr); setSel(c.id) }
  const move = (id: string, dir: -1 | 1) => {
    const i = site.blocks.findIndex((b) => b.id === id); const j = i + dir
    if (i < 0 || j < 0 || j >= site.blocks.length) return
    const arr = [...site.blocks];[arr[i], arr[j]] = [arr[j], arr[i]]; mutate(arr)
  }
  const edit = (path: string, raw: string, kind: string) => {
    if (!selected) return
    const value: unknown = kind === 'lines' ? raw.split('\n').filter((x) => x.trim()) : kind === 'text' && path === 'count' ? Number(raw) || 0 : raw
    const props = setPath(selected.props, path, value)
    mutate(site.blocks.map((b) => (b.id === selected.id ? { ...b, props } : b)))
  }
  // Replace the media / props of the CURRENTLY SELECTED section in place
  // (Squarespace-style · edit the section you clicked, not a new one).
  const patchSelected = (patch: Record<string, unknown>) => {
    if (!selected) return
    mutate(site.blocks.map((b) => (b.id === selected.id ? { ...b, props: { ...b.props, ...patch } } : b)))
  }
  const replaceMedia = (file: File, kind: 'image' | 'video') => {
    const cap = kind === 'image' ? 4_000_000 : 12_000_000
    if (file.size > cap) { pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'File too large', text: `Keep ${kind}s under ${cap / 1_000_000} MB.` }); return }
    const r = new FileReader()
    r.onload = () => { patchSelected({ src: String(r.result) }); pushToast({ kind: 'event', badge: 'OK', color: '#1fa563', title: `${kind === 'image' ? 'Image' : 'Video'} updated`, text: 'This section now uses your file.' }) }
    r.readAsDataURL(file)
  }
  const aiImageOnSelected = () => {
    const prompt = imgPrompt.trim() || `${site.name}, modern, professional, clean, high quality`
    const seed = Math.floor(Math.random() * 1e6)
    patchSelected({ src: `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1200&height=675&nologo=true&seed=${seed}`, alt: prompt })
    pushToast({ kind: 'event', badge: 'AI', color: '#2f7fd6', title: 'AI image set', text: 'Generated free (Pollinations) · a few seconds to render.' })
  }

  const regenerate = () => { const s = generateSite(dojoName); setSite(s); setSel(s.blocks[0]?.id ?? null); pushToast({ kind: 'event', badge: 'AI', color: '#2f7fd6', title: 'First version generated', text: 'Edit each block, then export.' }) }
  const save = async () => { await saveSite(dojoId, site); setSaved(true); pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'Website saved', text: 'Saved locally (IndexedDB).' }) }
  const exportHtml = () => {
    const blob = new Blob([doc], { type: 'text/html' })
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `${site.name.toLowerCase().replace(/\s+/g, '-')}.html`; a.click()
    setTimeout(() => URL.revokeObjectURL(a.href), 4000)
  }

  // ---- colours: presets + Coolors-style generator (lives in the Colours step) ----
  // seed the swatches from the current brand palette when we enter the step
  useEffect(() => {
    if (step === 'colours' && brand && gen.length === 0) setGen(kitToPalette(brand.palette))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, brand])
  const shuffle = () => setGen((cur) => randomPalette(locks.map((l, i) => (l ? (cur[i] || null) : null))))
  const toggleLock = (i: number) => setLocks((ls) => ls.map((l, j) => (j === i ? !l : l)))
  const setSwatch = (i: number, hex: string) => setGen((cur) => cur.map((c, j) => (j === i ? hex : c)))
  const applyPalette = (colors: string[]) => {
    if (!brand) return
    const next = { ...brand, palette: paletteToKit(colors) }
    setBrand(next)
    void saveBrandKit(dojoId, next)
    pushToast({ kind: 'event', badge: 'OK', color: '#2f6bff', title: 'Colours applied', text: 'Your site & Brand Kit now use this palette.' })
  }
  // ---- content: import / generate images, videos, text ----
  const addBlock = (b: Block, afterSel = true) => {
    const arr = [...site.blocks]
    const i = afterSel && sel ? arr.findIndex((x) => x.id === sel) : arr.length - 1
    arr.splice((i < 0 ? arr.length : i) + 1, 0, b)
    mutate(arr); setSel(b.id)
  }
  const importMedia = (file: File, kind: 'image' | 'video') => {
    const cap = kind === 'image' ? 4_000_000 : 12_000_000
    if (file.size > cap) { pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'File too large', text: `Keep ${kind}s under ${cap / 1_000_000} MB.` }); return }
    const r = new FileReader()
    r.onload = () => {
      const src = String(r.result)
      const b = makeBlock(kind, site.name)
      b.props = kind === 'image' ? { src, alt: `${site.name} image`, caption: '' } : { src, caption: '' }
      addBlock(b)
      pushToast({ kind: 'event', badge: 'OK', color: '#1fa563', title: `${kind === 'image' ? 'Image' : 'Video'} added`, text: 'Inserted into your site. Edit its caption in the inspector.' })
    }
    r.readAsDataURL(file)
  }
  // Free AI image · Pollinations.ai (no key, no signup). The URL renders a fresh
  // generated image; CSP allows https images so it loads in preview & export.
  const generateAiImage = () => {
    const prompt = imgPrompt.trim() || `${site.name}, hero banner, modern, professional, clean, high quality`
    const seed = Math.floor(Math.random() * 1e6)
    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1200&height=675&nologo=true&seed=${seed}`
    const b = makeBlock('image', site.name); b.props = { src: url, alt: prompt, caption: '' }
    addBlock(b)
    pushToast({ kind: 'event', badge: 'AI', color: '#2f7fd6', title: 'AI image added', text: 'Generated free (Pollinations) · give it a few seconds to render.' })
  }
  // a branded gradient banner (local canvas · always instant, no network)
  const generateBanner = () => {
    const c = document.createElement('canvas'); c.width = 1200; c.height = 675
    const ctx = c.getContext('2d'); if (!ctx) return
    const p = brand?.palette
    const g = ctx.createLinearGradient(0, 0, 1200, 675)
    g.addColorStop(0, p?.primary || '#5b6cff'); g.addColorStop(1, p?.accent || '#39c0ff')
    ctx.fillStyle = g; ctx.fillRect(0, 0, 1200, 675)
    ctx.fillStyle = 'rgba(255,255,255,0.92)'; ctx.font = 'bold 84px Outfit, system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
    ctx.fillText(site.name, 600, 337)
    const b = makeBlock('image', site.name); b.props = { src: c.toDataURL('image/png'), alt: `${site.name} banner`, caption: '' }
    addBlock(b)
    pushToast({ kind: 'event', badge: 'OK', color: '#2f7fd6', title: 'Banner added', text: 'A branded gradient banner was added.' })
  }
  const generateText = () => {
    const b = makeBlock('text', site.name)
    const lines = [
      `${site.name} helps you do more with less effort.`,
      `We build simple, reliable tools that adapt to how you work — so you can focus on what matters.`,
      `Thousands of people trust ${site.name} to save time every day. Join them and see the difference.`,
    ]
    b.props = { heading: `Why ${site.name}`, body: lines.join(' ') }
    addBlock(b)
    pushToast({ kind: 'event', badge: 'AI', color: '#2f7fd6', title: 'Text generated', text: 'A copy block was added. Edit it in the inspector.' })
  }
  const openConnect = () => { location.hash = 'connect' }

  // spacebar to generate, like Coolors (only on the Colours step)
  useEffect(() => {
    if (step !== 'colours') return
    const onKey = (e: KeyboardEvent) => {
      if (e.code !== 'Space') return
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return
      e.preventDefault(); shuffle()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, locks])

  // The colours generator + trending palettes · rendered in the Colours step.
  const colorsBody = (
    <div className="cw-panel">
      <div className="cw-head">
        <div><h4>Colour palette</h4><p>Generate a scheme (or press <kbd>space</kbd>), lock the ones you love, or pick a trending palette. Applies to your whole site.</p></div>
      </div>
      <div className="cw-gen">
        {gen.map((c, i) => (
          <div key={i} className="cw-swatch" style={{ background: c, color: textOn(c) }}>
            <button className={`cw-lock${locks[i] ? ' on' : ''}`} onClick={() => toggleLock(i)} title={locks[i] ? 'Unlock' : 'Lock'}>{locks[i] ? '🔒' : '🔓'}</button>
            <input className="cw-hex" value={c.toUpperCase()} style={{ color: textOn(c) }} onChange={(e) => { const v = e.target.value; if (/^#?[0-9a-fA-F]{0,6}$/.test(v)) setSwatch(i, v.startsWith('#') ? v : '#' + v) }} />
          </div>
        ))}
      </div>
      <div className="cw-actions">
        <button className="btn tiny" onClick={shuffle}>⟳ Generate</button>
        <button className="btn primary tiny" onClick={() => applyPalette(gen)}>Apply palette</button>
      </div>
      <div className="cw-presets-h">Trending palettes</div>
      <div className="cw-presets">
        {PRESET_PALETTES.map((p) => (
          <button key={p.name} className="cw-preset" title={p.name} onClick={() => { setGen(p.colors); applyPalette(p.colors) }}>
            <span className="cw-preset-strip">{p.colors.map((c, i) => <span key={i} style={{ background: c }} />)}</span>
            <span className="cw-preset-n">{p.name}</span>
          </button>
        ))}
      </div>
    </div>
  )

  const setFont = (font: SiteFont) => setSite((s) => ({ ...s, font, headingFont: undefined, bodyFont: undefined }))
  const setLayout = (layout: SiteLayout) => setSite((s) => ({ ...s, layout }))
  const setHeadingFont = (headingFont?: string) => setSite((s) => ({ ...s, headingFont }))
  const setBodyFont = (bodyFont?: string) => setSite((s) => ({ ...s, bodyFont }))
  const setHeadingWeight = (headingWeight: number) => setSite((s) => ({ ...s, headingWeight }))
  const setBaseSize = (baseSize: number) => setSite((s) => ({ ...s, baseSize }))
  const [fontQuery, setFontQuery] = useState('')
  const [fontTarget, setFontTarget] = useState<'heading' | 'body'>('heading')
  // The full Google Fonts catalogue (via the server proxy) once it loads; the
  // curated list until then, so the picker is always populated.
  const [fontCatalogue, setFontCatalogue] = useState<GFont[]>(GOOGLE_FONTS)
  useEffect(() => { let live = true; void loadGoogleFonts().then((f) => { if (live) setFontCatalogue(f) }); return () => { live = false } }, [])
  const fontMatches = fontCatalogue.filter((f) => f.name.toLowerCase().includes(fontQuery.trim().toLowerCase()))
  // cap what we render (the catalogue can be ~1500 fonts) · search narrows it
  const fontList = fontMatches.slice(0, 120)
  // load the selected + previewed Google fonts into the app doc so the picker renders them
  useEffect(() => {
    const fams = [site.headingFont, site.bodyFont, ...fontList.slice(0, 40).map((f) => f.name)].filter(Boolean) as string[]
    const href = googleFontsHref(fams)
    if (!href) return
    const id = 'gf-' + href.length
    if (document.getElementById(id)) return
    const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = href; link.id = id
    document.head.appendChild(link)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [site.headingFont, site.bodyFont, fontQuery, step])

  const stepIdx = STEPS.findIndex((s) => s.id === step)
  const advance = () => {
    if (step === 'template') { startBlank(); return }
    if (step === 'design') return setStep('typography')
    if (step === 'typography') return setStep('colours')
    if (step === 'colours') return setStep('export')
    if (step === 'export') return void save()
  }
  const goBack = () => { if (stepIdx > 0) setStep(STEPS[stepIdx - 1].id) }
  const nextLabel = step === 'template' ? 'Start blank →' : step === 'design' ? 'Typography →' : step === 'typography' ? 'Colours →' : step === 'colours' ? 'Export →' : 'Save site'

  return (
    <div className="site-mod sq">
      <StepBar
        steps={STEPS} current={step} onJump={(id) => setStep(id as Step)}
        onBack={goBack} backDisabled={stepIdx === 0}
        onNext={advance} nextLabel={nextLabel}
      />

      {step === 'template' && (
        <section className="sq-panel">
          <h3 className="sq-title">Pick a template</h3>
          <p className="sq-lead">Start from a high-end layout (or blank), then edit every block. Colours are tuned in the next steps — never a dead end.</p>
          <div className="sq-tags sq-filter">
            {CATS.map((c) => <button key={c} className={`sq-chip${cat === c ? ' on' : ''}`} onClick={() => setCat(c)}>{c}</button>)}
          </div>
          <div className="tpl-grid">
            <button className="tpl-card tpl-blank" onClick={startBlank}>
              <span className="tpl-thumb" style={{ background: 'var(--panel-2)', color: 'var(--ink)' }}>
                <b>Blank</b>
                <span className="tpl-thumb-line" style={{ background: 'var(--border)', opacity: 0.9 }} />
                <span className="tpl-thumb-line short" style={{ background: 'var(--border)', opacity: 0.6 }} />
              </span>
              <span className="tpl-meta"><strong>Start blank</strong><span className="tpl-cat">No template</span><span className="tpl-blurb">A clean hero + sections to build from.</span><span className="tpl-use">Start blank →</span></span>
            </button>
            {templates.map((t) => (
              <button key={t.id} className="tpl-card" onClick={() => useTemplate(t.id)}>
                <span className="tpl-thumb" style={{ background: t.bg, color: t.ink }}>
                  <span className="tpl-thumb-bar" style={{ background: t.accent }} />
                  <b>{t.name}</b>
                  <span className="tpl-thumb-line" style={{ background: t.ink, opacity: 0.28 }} />
                  <span className="tpl-thumb-line short" style={{ background: t.ink, opacity: 0.18 }} />
                  <span className="tpl-thumb-btn" style={{ background: t.accent }} />
                </span>
                <span className="tpl-meta">
                  <strong>{t.name}</strong>
                  <span className="tpl-cat">{t.category} · {VIBE_LABEL[t.vibe]}</span>
                  <span className="tpl-blurb">{t.blurb}</span>
                  <span className="tpl-use">Use this template →</span>
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      {step === 'design' && (
        <section className="sq-panel">
          <div className="site-toolbar">
            <div className="site-seg">
              <button className={device === 'desktop' ? 'on' : ''} onClick={() => setDevice('desktop')} title="Desktop">Desktop</button>
              <button className={device === 'mobile' ? 'on' : ''} onClick={() => setDevice('mobile')} title="Mobile">Mobile</button>
            </div>
            <div className="site-tb-actions">
              <button className={`btn tiny ghost${contentOpen ? ' on' : ''}`} onClick={() => setContentOpen((v) => !v)} title="Import or generate content">＋ Content</button>
              <button className="btn tiny ghost" onClick={regenerate} title="Regenerate a first version">↺ 1st version</button>
            </div>
          </div>

      {/* content: import / generate images, videos, text + connect apps */}
      {contentOpen && (
        <div className="cw-panel ct-panel">
          <div className="cw-head">
            <div><h4>Content &amp; media</h4><p>Import or generate your images, videos and text — or connect Claude Code &amp; your apps to bring in your own code.</p></div>
            <button className="cw-close" onClick={() => setContentOpen(false)} aria-label="Close">✕</button>
          </div>
          <div className="ct-grid">
            <div className="ct-card">
              <b>Images</b>
              <p>Import a photo, or generate one with a free AI (Pollinations · no key).</p>
              <input className="ct-input" value={imgPrompt} placeholder="Describe an image, e.g. cozy coffee shop interior" onChange={(e) => setImgPrompt(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') generateAiImage() }} />
              <div className="ct-actions">
                <button className="btn tiny" onClick={generateAiImage}>✨ AI image</button>
                <label className="btn tiny ghost">Import<input type="file" accept="image/*" hidden onChange={(e) => { const f = e.target.files?.[0]; if (f) importMedia(f, 'image'); e.currentTarget.value = '' }} /></label>
                <button className="btn tiny ghost" onClick={generateBanner}>Banner</button>
              </div>
            </div>
            <div className="ct-card">
              <b>Video</b>
              <p>Import an MP4/WebM clip into a video section.</p>
              <div className="ct-actions">
                <label className="btn tiny">Import video<input type="file" accept="video/*" hidden onChange={(e) => { const f = e.target.files?.[0]; if (f) importMedia(f, 'video'); e.currentTarget.value = '' }} /></label>
              </div>
            </div>
            <div className="ct-card">
              <b>Text</b>
              <p>Generate a copy block, then edit it inline.</p>
              <div className="ct-actions">
                <button className="btn tiny ghost" onClick={generateText}>✨ Generate copy</button>
              </div>
            </div>
            <div className="ct-card ct-connect">
              <b>Connect Claude Code &amp; apps</b>
              <p>Bring your own code: connect the Claude Code CLI and external apps (GitHub, Figma, Drive…) to import content and build freely.</p>
              <div className="ct-actions">
                <button className="btn tiny" onClick={openConnect}>Open connectors →</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* responsive preview · click any section to edit it (WYSIWYG === export) */}
      <div className={`site-preview ${device}`}>
        <iframe
          ref={frameRef}
          title="Website preview"
          className="site-frame"
          srcDoc={editDoc}
          onLoad={() => postSel(selRef.current, false)}
        />
      </div>
      <p className="muted small" style={{ margin: '6px 2px 0' }}>Click a section in the preview to edit its text, images and video.</p>

      {/* blocks */}
      <div className="site-blocks-head">
        <h4 className="brand-h" style={{ margin: 0 }}>Sections</h4>
        <button className="btn tiny" onClick={() => setAddOpen((v) => !v)}>＋ Add</button>
      </div>
      {addOpen && (
        <div className="site-palette">
          {BLOCK_ORDER.map((t) => <button key={t} onClick={() => add(t)}>{BLOCK_LABELS[t]}</button>)}
        </div>
      )}
      <ul className="site-blocklist">
        {site.blocks.map((b, i) => (
          <li key={b.id} className={b.id === sel ? 'on' : ''}>
            <button className="site-bl-name" onClick={() => selectBlock(b.id)}>{BLOCK_LABELS[b.type]}</button>
            <div className="site-bl-ops">
              <button onClick={() => move(b.id, -1)} disabled={i === 0} aria-label="Move up">↑</button>
              <button onClick={() => move(b.id, 1)} disabled={i === site.blocks.length - 1} aria-label="Move down">↓</button>
              <button onClick={() => dup(b.id)} aria-label="Duplicate">⎘</button>
              <button onClick={() => del(b.id)} aria-label="Delete">✕</button>
            </div>
          </li>
        ))}
      </ul>

      {/* inspector */}
      {selected ? (
        <div className="site-inspector">
          <h4 className="brand-h">Edit · {BLOCK_LABELS[selected.type]}</h4>

          {/* media controls · replace the image/video of THIS section in place */}
          {(selected.type === 'image' || selected.type === 'video') && (
            <div className="site-media">
              {selected.type === 'image' && String(selected.props.src || '') && (
                <img className="site-media-thumb" src={String(selected.props.src)} alt="" />
              )}
              <div className="site-media-ops">
                {selected.type === 'image' ? (
                  <>
                    <label className="btn tiny">Upload image<input type="file" accept="image/*" hidden onChange={(e) => { const f = e.target.files?.[0]; if (f) replaceMedia(f, 'image'); e.currentTarget.value = '' }} /></label>
                    <button className="btn tiny ghost" onClick={aiImageOnSelected}>✨ AI image</button>
                    {String(selected.props.src || '') && <button className="btn tiny ghost" onClick={() => patchSelected({ src: '' })}>Remove</button>}
                  </>
                ) : (
                  <>
                    <label className="btn tiny">Upload video<input type="file" accept="video/*" hidden onChange={(e) => { const f = e.target.files?.[0]; if (f) replaceMedia(f, 'video'); e.currentTarget.value = '' }} /></label>
                    {String(selected.props.src || '') && <button className="btn tiny ghost" onClick={() => patchSelected({ src: '' })}>Remove</button>}
                  </>
                )}
              </div>
              {selected.type === 'image' && (
                <input className="site-media-prompt" value={imgPrompt} placeholder="Describe an AI image, then ✨" onChange={(e) => setImgPrompt(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') aiImageOnSelected() }} />
              )}
            </div>
          )}

          {fieldsFor(selected).map((f) => {
            const cur = getPath(selected.props, f.path)
            const value = f.kind === 'lines' ? (Array.isArray(cur) ? (cur as string[]).join('\n') : '') : String(cur ?? '')
            return (
              <label key={f.path} className="site-field">
                <span>{f.label}</span>
                {f.kind === 'text'
                  ? <input value={value} onChange={(e) => edit(f.path, e.target.value, f.kind)} />
                  : <textarea rows={f.kind === 'lines' ? 3 : 2} value={value} onChange={(e) => edit(f.path, e.target.value, f.kind)} />}
              </label>
            )
          })}
        </div>
      ) : (
        <p className="muted small">Select a block to edit it.</p>
      )}
          <p className="muted small">Your <b>Brand Kit</b> colours &amp; fonts apply automatically — tune them in the <b>Colours</b> step. Preview = export.</p>
        </section>
      )}

      {step === 'typography' && (
        <section className="sq-panel">
          <h3 className="sq-title">Typography &amp; layout</h3>
          <p className="sq-lead">Choose from every popular Google Font for your headings and body — or start from a quick pairing. Tune weight, size and layout.</p>

          <div className="sq-eyebrow">Quick pairings</div>
          <div className="ty-fonts">
            {SITE_FONTS.map((f) => (
              <button key={f.id} className={`ty-font${(!site.headingFont && (site.font || 'sans') === f.id) ? ' on' : ''}`} onClick={() => setFont(f.id)}>
                <span className="ty-font-h" style={{ fontFamily: f.heading }}>{site.name}</span>
                <span className="ty-font-b" style={{ fontFamily: f.body }}>{f.label}</span>
              </button>
            ))}
          </div>

          <div className="sq-eyebrow" style={{ marginTop: 12 }}>Google Fonts</div>
          <div className="ty-current">
            <button className={`ty-slot${fontTarget === 'heading' ? ' on' : ''}`} onClick={() => setFontTarget('heading')}>
              <em>Headings</em><b style={{ fontFamily: `"${site.headingFont || fontSet(site.font).heading}"` }}>{site.headingFont || 'Preset'}</b>
            </button>
            <button className={`ty-slot${fontTarget === 'body' ? ' on' : ''}`} onClick={() => setFontTarget('body')}>
              <em>Body</em><b style={{ fontFamily: `"${site.bodyFont || fontSet(site.font).body}"` }}>{site.bodyFont || 'Preset'}</b>
            </button>
          </div>
          <input className="ty-search" value={fontQuery} placeholder={`Search all ${fontCatalogue.length} Google Fonts for ${fontTarget}…`} onChange={(e) => setFontQuery(e.target.value)} />
          <div className="ty-fontlist">
            {fontList.map((f) => {
              const active = (fontTarget === 'heading' ? site.headingFont : site.bodyFont) === f.name
              return (
                <button key={f.name} className={`ty-fontitem${active ? ' on' : ''}`} onClick={() => (fontTarget === 'heading' ? setHeadingFont(f.name) : setBodyFont(f.name))}>
                  <span style={{ fontFamily: `"${f.name}"` }}>{f.name}</span><em>{f.cat}</em>
                </button>
              )
            })}
            {!fontList.length && <p className="muted small">No font matches “{fontQuery}”.</p>}
            {fontMatches.length > fontList.length && <p className="muted small">Showing {fontList.length} of {fontMatches.length} matches · keep typing to narrow down.</p>}
          </div>

          <div className="bw-2col" style={{ marginTop: 4 }}>
            <div className="sq-field">Heading weight
              <div className="bw-cloud">
                {[600, 700, 800, 900].map((w) => <button key={w} className={`bw-chip${(site.headingWeight || 800) === w ? ' on' : ''}`} onClick={() => setHeadingWeight(w)}>{w}</button>)}
              </div>
            </div>
            <label className="sq-field">Base size · {site.baseSize || 16}px
              <input type="range" min={14} max={20} value={site.baseSize || 16} onChange={(e) => setBaseSize(Number(e.target.value))} />
            </label>
          </div>

          <div className="sq-eyebrow" style={{ marginTop: 8 }}>Layout</div>
          <div className="bw-cloud">
            {SITE_LAYOUTS.map((l) => (
              <button key={l.id} className={`bw-chip${(site.layout || 'centered') === l.id ? ' on' : ''}`} onClick={() => setLayout(l.id)} title={l.hint}>{l.label}</button>
            ))}
          </div>

          <div className={`site-preview ${device}`}>
            <iframe title="Website preview" className="site-frame" srcDoc={doc} />
          </div>
        </section>
      )}

      {step === 'colours' && (
        <section className="sq-panel">
          <h3 className="sq-title">Colours</h3>
          <p className="sq-lead">Pick a trending palette or generate your own (press <kbd>space</kbd>) — it re-themes your whole site instantly.</p>
          {colorsBody}
          <div className={`site-preview ${device}`}>
            <iframe title="Website preview" className="site-frame" srcDoc={doc} />
          </div>
        </section>
      )}

      {step === 'export' && (
        <section className="sq-panel">
          <h3 className="sq-title">Export your website</h3>
          <p className="sq-lead">Download a standalone <code>.html</code> you can host anywhere, or save it to your dojo. It bakes in your Brand Kit colours &amp; fonts.</p>
          <div className={`site-preview ${device}`}>
            <iframe title="Website preview" className="site-frame" srcDoc={doc} />
          </div>
          <div className="sq-cta-row" style={{ marginTop: 12 }}>
            <button className="btn tiny" onClick={exportHtml}>Export HTML</button>
            <button className="btn primary tiny" onClick={() => void save()}>Save site</button>
            <button className="btn tiny ghost" onClick={openConnect}>Connect apps →</button>
          </div>
          {saved && <StudioNext from="weblos" done="Website saved." />}
        </section>
      )}
    </div>
  )
}
