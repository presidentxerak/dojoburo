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
  type SiteDoc, type Block, type BlockType, type TemplateCategory, type SiteLayout,
  BLOCK_LABELS, BLOCK_ORDER, makeBlock, generateSite,
  generateFromTemplate, SITE_TEMPLATES, SITE_LAYOUTS, fullDoc, fieldsFor, getPath, setPath, loadSite, saveSite, siteBrand,
  type Product, makeProduct, SITE_CURRENCIES, currencySymbol,
  type SitePage, sitePages, homePage, makePage, slugify, normalizeSite,
  PAGE_PRESETS, pagePresetBlocks, SECTION_ANIMS,
} from '../../lib/site'
import { PRESET_PALETTES, paletteToKit } from '../../lib/palettes'
import { BrandTypography, BrandColours, FONT_PAIRINGS } from '../shared/BrandStyle'
import { StepBar } from '../StepBar'
import { InfoDot } from '../../components/InfoDot'
import { StudioNext } from '../StudioNext'

const CATS: (TemplateCategory | 'All')[] = ['All', 'Business', 'Store', 'Portfolio', 'Restaurant', 'Agency', 'Personal', 'Blog', 'Events']
const VIBE_LABEL: Record<string, string> = { serif: 'Serif', sans: 'Sans', mono: 'Mono' }
type Step = 'template' | 'design' | 'typography' | 'colours' | 'export'
// Typography & Colours are no longer in the step bar — they live in the left
// "Styles" panel (with "More typography / More colours" opening their full pages).
const STEPS: { id: Step; label: string }[] = [
  { id: 'template', label: 'Template' }, { id: 'design', label: 'Design' }, { id: 'export', label: 'Export' },
]

export default function WebsiteModule({ dojoId }: ModuleProps) {
  const dojoName = useWorkshop((s) => s.dojos.find((d) => d.id === dojoId)?.name) || 'My brand'
  const pushToast = useDojo((s) => s.pushToast)
  const [site, setSite] = useState<SiteDoc>(() => generateSite(dojoName))
  const [brand, setBrand] = useState<BrandKit | null>(null)
  const [sel, setSel] = useState<string | null>(null)
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop')
  const [mode, setMode] = useState<'edit' | 'preview'>('edit')
  // multi-page · which page is being edited, and the section-editor tab
  const [activePageId, setActivePageId] = useState<string | null>(null)
  const [inspTab, setInspTab] = useState<'content' | 'design' | 'colour'>('content')
  // left sidebar tab · Pages (sections) or Styles (fonts + colours), Squarespace-style
  const [leftTab, setLeftTab] = useState<'pages' | 'styles'>('pages')
  // "Add page" / "Change page template" picker (choose a page type)
  const [pagePicker, setPagePicker] = useState<null | 'add' | 'change'>(null)
  // floating contextual toolbar anchored to the selected section in the preview
  const [ctx, setCtx] = useState<{ id: string; rect: { top: number; left: number; width: number; height: number } } | null>(null)
  const [addOpen, setAddOpen] = useState(false)
  const [step, setStep] = useState<Step>('template')
  const [cat, setCat] = useState<(TemplateCategory | 'All')>('All')
  const [saved, setSaved] = useState(false)
  // content · import/generate images, videos & text + connect apps
  const [contentOpen, setContentOpen] = useState(false)
  const [imgPrompt, setImgPrompt] = useState('')

  // The Brand Kit is the source of truth for typography · overlay its fonts onto
  // the site so a font chosen in the Branding studio shows up here immediately.
  const seedFonts = (s: SiteDoc, k: BrandKit | null): SiteDoc =>
    k ? { ...s, headingFont: s.headingFont ?? k.headingFont, bodyFont: s.bodyFont ?? k.bodyFont } : s
  // brandRef holds the latest kit so adopt() can seed fonts on EVERY path
  // (load, template, blank, regenerate), not just the initial saved-site load.
  const brandRef = useRef<BrandKit | null>(null)
  // adopt a freshly created / loaded site: normalise to multi-page, open its home
  const adopt = (s: SiteDoc) => {
    const ns = normalizeSite(seedFonts(s, brandRef.current))
    const hp = homePage(ns)
    setSite(ns); setActivePageId(hp.id); setSel(hp.blocks[0]?.id ?? null); setStep('design')
  }
  useEffect(() => {
    let alive = true
    void Promise.all([loadSite(dojoId), siteBrand(dojoId, dojoName)]).then(([s, b]) => {
      if (!alive) return
      brandRef.current = b; setBrand(b)
      if (s) adopt(s)
    })
    return () => { alive = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dojoId])

  const useTemplate = (id: string) => {
    adopt(generateFromTemplate(dojoName, id))
    pushToast({ kind: 'event', badge: 'OK', color: '#2f6bff', title: 'Template applied', text: 'Edit each block, then export. It uses your Brand Kit.' })
  }
  const startBlank = () => adopt(generateSite(dojoName))
  const templates = SITE_TEMPLATES.filter((t) => cat === 'All' || t.category === cat)

  // multi-page · the page currently being edited (its sections drive the canvas)
  const pages = sitePages(site)
  const page = pages.find((p) => p.id === activePageId) ?? homePage(site)
  const blocks = page.blocks
  // Two studio docs (no inline scripts — the app CSP blocks inline JS inside the
  // srcdoc iframe, so we drive everything from here on the same-origin document).
  const doc = useMemo(() => (brand ? fullDoc(site, brand, { activeSlug: page.slug, studio: true }) : ''), [site, brand, page.slug])
  const editDoc = useMemo(() => (brand ? fullDoc(site, brand, { editable: true, activeSlug: page.slug, studio: true }) : ''), [site, brand, page.slug])
  const selected = blocks.find((b) => b.id === sel) || null

  const frameRef = useRef<HTMLIFrameElement>(null)
  const selRef = useRef<string | null>(sel)
  useEffect(() => { selRef.current = sel }, [sel])
  const siteRef = useRef(site)
  useEffect(() => { siteRef.current = site }, [site])
  useEffect(() => { brandRef.current = brand }, [brand])

  const frameDoc = () => frameRef.current?.contentDocument || null
  // outline + measure the selected section directly on the iframe document
  const highlight = (id: string | null, scroll: boolean) => {
    const d = frameDoc(); if (!d) return
    d.querySelectorAll('[data-b].__sel').forEach((e) => e.classList.remove('__sel'))
    if (!id) { setCtx(null); return }
    const el = d.querySelector(`[data-b="${(window.CSS && CSS.escape) ? CSS.escape(id) : id}"]`) as HTMLElement | null
    if (!el) { setCtx(null); return }
    el.classList.add('__sel')
    if (scroll) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    const r = el.getBoundingClientRect()
    setCtx({ id, rect: { top: r.top, left: r.left, width: r.width, height: r.height } })
  }
  useEffect(() => { if (!sel) setCtx(null) }, [sel])
  useEffect(() => { if (mode === 'edit') highlight(sel, false) /* re-outline on select (no reload) */ }, [sel]) // eslint-disable-line react-hooks/exhaustive-deps
  const selectBlock = (id: string) => { setSel(id); highlight(id, true) }

  // Wire the iframe from the parent (CSP-safe · same-origin srcdoc). Edit mode:
  // click a section → select it + show its editor; click a nav link → open that
  // page. Preview mode: real page router + working cart.
  const onFrameLoad = () => {
    const d = frameDoc(); if (!d) return
    if (mode === 'edit') {
      d.addEventListener('click', (e) => {
        const t = e.target as HTMLElement
        const navEl = t.closest?.('[data-nav]') as HTMLElement | null
        if (navEl) { e.preventDefault(); const slug = navEl.getAttribute('data-nav'); const p = sitePages(siteRef.current).find((x) => x.slug === slug); if (p) { setActivePageId(p.id); setSel(p.blocks[0]?.id ?? null) } return }
        const el = t.closest?.('[data-b]') as HTMLElement | null
        if (!el) return
        e.preventDefault(); e.stopPropagation()
        const id = el.getAttribute('data-b')
        if (id) {
          setSel(id); highlight(id, false)
          // clicking directly on an image → jump to the media editor so you can
          // swap/generate/remove it right away.
          if (t.tagName === 'IMG' || t.closest?.('img')) { setInspTab('content'); setTimeout(() => document.getElementById('site-inspector')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60) }
        }
      }, true)
      d.addEventListener('scroll', () => { const id = selRef.current; if (id) highlight(id, false) }, true)
      setTimeout(() => highlight(selRef.current, false), 0)
    } else {
      wirePreview(d)
    }
  }
  // parent-driven page router + cart for the in-app Preview (no inline scripts)
  const wirePreview = (d: Document) => {
    const site0 = siteRef.current
    const pgs = [...d.querySelectorAll('.pg')] as HTMLElement[]
    const showPage = (slug: string) => {
      let any = false
      pgs.forEach((p) => { const m = p.getAttribute('data-pg') === slug; p.style.display = m ? '' : 'none'; if (m) any = true })
      if (!any && pgs[0]) pgs[0].style.display = ''
      d.querySelectorAll('[data-nav]').forEach((a) => a.classList.toggle('on', a.getAttribute('data-nav') === slug))
    }
    showPage(homePage(site0).slug)
    const cart: Record<string, { name: string; price: number; qty: number }> = {}
    const cur = currencySymbol(site0.currency)
    const email = site0.checkoutEmail || ''
    const money = (n: number) => cur + (Math.round(n * 100) / 100).toFixed(2)
    const totals = () => { let t = 0, c = 0; for (const k in cart) { t += cart[k].price * cart[k].qty; c += cart[k].qty } return { t, c } }
    const renderCart = () => {
      const list = d.getElementById('__cartlist'); if (!list) return
      const keys = Object.keys(cart)
      list.innerHTML = keys.length ? keys.map((k) => { const it = cart[k]; return `<div class="citem"><span class="cn">${it.name}</span><span class="cq"><button data-dec="${k}">−</button><span>${it.qty}</span><button data-inc="${k}">+</button></span><span>${money(it.price * it.qty)}</span></div>` }).join('') : '<p class="cempty">Your cart is empty.</p>'
      const { t, c } = totals()
      const tot = d.getElementById('__carttot'); if (tot) tot.textContent = money(t)
      const n = d.getElementById('__cartn'); if (n) n.textContent = String(c)
    }
    const setOv = (v: boolean) => { const o = d.getElementById('__cartov') as HTMLElement | null; if (o) o.hidden = !v }
    d.addEventListener('click', (e) => {
      const t = e.target as HTMLElement
      const navEl = t.closest?.('[data-nav]') as HTMLElement | null
      if (navEl) { e.preventDefault(); showPage(navEl.getAttribute('data-nav') || ''); (d.defaultView || window).scrollTo?.(0, 0); return }
      const add = t.closest?.('[data-add]') as HTMLElement | null
      if (add) { const id = add.getAttribute('data-add') || ''; if (!cart[id]) cart[id] = { name: add.getAttribute('data-name') || '', price: +(add.getAttribute('data-price') || 0), qty: 0 }; cart[id].qty++; renderCart(); setOv(true); return }
      if (t.closest?.('#__cartbtn')) { renderCart(); setOv(true); return }
      if (t.id === '__cartx' || t.id === '__cartov') { setOv(false); return }
      const inc = t.getAttribute?.('data-inc'); if (inc && cart[inc]) { cart[inc].qty++; renderCart(); return }
      const dec = t.getAttribute?.('data-dec'); if (dec && cart[dec]) { cart[dec].qty--; if (cart[dec].qty <= 0) delete cart[dec]; renderCart(); return }
      if (t.id === '__cartco') { const { t: tt, c } = totals(); if (!c) return; const lines = Object.keys(cart).map((k) => `${cart[k].qty} x ${cart[k].name} (${money(cart[k].price * cart[k].qty)})`).join('\n'); if (email) { (d.defaultView as Window).location.href = `mailto:${email}?subject=New order&body=${encodeURIComponent('Order:\n' + lines + '\n\nTotal: ' + money(tt))}` } else { (d.defaultView as Window).alert(`Order summary:\n\n${lines}\n\nTotal: ${money(tt)}\n\nSet a checkout email in the shop settings to receive orders.`) } return }
    }, false)
  }

  // mutate the ACTIVE page's sections (all block ops go through here)
  const mutate = (next: Block[]) => setSite((s) => ({ ...s, pages: sitePages(s).map((p) => (p.id === page.id ? { ...p, blocks: next } : p)) }))
  const add = (type: BlockType) => { const b = makeBlock(type, site.name); mutate([...blocks, b]); setSel(b.id); setAddOpen(false) }
  const del = (id: string) => { mutate(blocks.filter((b) => b.id !== id)); if (sel === id) setSel(null) }
  const dup = (id: string) => { const i = blocks.findIndex((b) => b.id === id); if (i < 0) return; const c = { ...blocks[i], id: `b_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 5)}` }; const arr = [...blocks]; arr.splice(i + 1, 0, c); mutate(arr); setSel(c.id) }
  const move = (id: string, dir: -1 | 1) => {
    const i = blocks.findIndex((b) => b.id === id); const j = i + dir
    if (i < 0 || j < 0 || j >= blocks.length) return
    const arr = [...blocks];[arr[i], arr[j]] = [arr[j], arr[i]]; mutate(arr)
  }
  // ---- pages management (Squarespace-style) ----
  const setPages = (next: SitePage[]) => setSite((s) => ({ ...s, pages: next }))
  // create a page from a chosen type/template preset
  const addPageFromPreset = (presetId: string) => {
    const preset = PAGE_PRESETS.find((p) => p.id === presetId) ?? PAGE_PRESETS[0]
    const existing = pages.filter((p) => p.title.startsWith(preset.label)).length
    const title = existing ? `${preset.label} ${existing + 1}` : preset.label
    const p = makePage(title, pagePresetBlocks(presetId, site.name))
    setPages([...pages, p]); setActivePageId(p.id); setSel(p.blocks[0]?.id ?? null); setLeftTab('pages'); setPagePicker(null)
  }
  // change the current page's sections to a chosen template (keeps its title/slug)
  const changePageTemplate = (presetId: string) => {
    const next = pagePresetBlocks(presetId, site.name)
    setPages(pages.map((p) => (p.id === page.id ? { ...p, blocks: next } : p)))
    setSel(next[0]?.id ?? null); setPagePicker(null)
  }
  const openPageEdit = (id: string) => { const p = pages.find((x) => x.id === id); if (!p) return; setActivePageId(id); setSel(p.blocks[0]?.id ?? null) }
  const renamePage = (id: string, title: string) => setPages(pages.map((p) => (p.id === id ? { ...p, title, slug: slugify(title) } : p)))
  const togglePageNav = (id: string) => setPages(pages.map((p) => (p.id === id ? { ...p, nav: !p.nav } : p)))
  const movePage = (id: string, dir: -1 | 1) => {
    const i = pages.findIndex((p) => p.id === id); const j = i + dir
    if (i < 0 || j < 0 || j >= pages.length) return
    const arr = [...pages];[arr[i], arr[j]] = [arr[j], arr[i]]; setPages(arr)
  }
  const deletePage = (id: string) => {
    if (pages.length <= 1) { pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Keep one page', text: 'A site needs at least one page.' }); return }
    if (pages.find((p) => p.id === id)?.home) { pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Home stays', text: 'The Home page cannot be deleted.' }); return }
    const next = pages.filter((p) => p.id !== id); setPages(next)
    if (activePageId === id) { const hp = next.find((p) => p.home) ?? next[0]; setActivePageId(hp.id); setSel(hp.blocks[0]?.id ?? null) }
  }
  // set a design/colour prop (underscore-prefixed) on the selected section
  const setDesign = (key: string, value: unknown) => patchSelected({ [key]: value })
  const edit = (path: string, raw: string, kind: string) => {
    if (!selected) return
    const value: unknown = kind === 'lines' ? raw.split('\n').filter((x) => x.trim()) : kind === 'text' && path === 'count' ? Number(raw) || 0 : raw
    const props = setPath(selected.props, path, value)
    mutate(blocks.map((b) => (b.id === selected.id ? { ...b, props } : b)))
  }
  // Replace the media / props of the CURRENTLY SELECTED section in place
  // (Squarespace-style · edit the section you clicked, not a new one).
  const patchSelected = (patch: Record<string, unknown>) => {
    if (!selected) return
    mutate(blocks.map((b) => (b.id === selected.id ? { ...b, props: { ...b.props, ...patch } } : b)))
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
  // ---- shop: products manager (on the selected Store block) + shop settings ----
  const storeProducts = (selected?.type === 'store' ? (selected.props.products as Product[]) : []) || []
  const setProducts = (products: Product[]) => patchSelected({ products })
  const addProduct = () => setProducts([...storeProducts, makeProduct()])
  const updateProduct = (id: string, patch: Partial<Product>) => setProducts(storeProducts.map((p) => (p.id === id ? { ...p, ...patch } : p)))
  const removeProduct = (id: string) => setProducts(storeProducts.filter((p) => p.id !== id))
  const productImage = (id: string, file: File) => {
    if (file.size > 4_000_000) { pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Image too large', text: 'Keep product images under 4 MB.' }); return }
    const r = new FileReader(); r.onload = () => updateProduct(id, { img: String(r.result) }); r.readAsDataURL(file)
  }
  const setCurrency = (currency: string) => setSite((s) => ({ ...s, currency }))
  const setCheckoutEmail = (checkoutEmail: string) => setSite((s) => ({ ...s, checkoutEmail }))
  // global component style · corner radius + border width + colour (site-wide)
  const setRadius = (radius: number) => setSite((s) => ({ ...s, radius }))
  const setBorderWidth = (borderWidth: number) => setSite((s) => ({ ...s, borderWidth }))
  const setBorderColor = (borderColor: string) => setSite((s) => ({ ...s, borderColor: borderColor || undefined }))
  // the <input type=color> needs a #rrggbb value; fall back to a neutral grey
  const borderColorHex = (c?: string) => (c && /^#[0-9a-fA-F]{6}$/.test(c) ? c : '#cbd2dc')

  const regenerate = () => { adopt(generateSite(dojoName)); pushToast({ kind: 'event', badge: 'AI', color: '#2f7fd6', title: 'First version generated', text: 'Edit each block, then export.' }) }
  const save = async () => { await saveSite(dojoId, site); setSaved(true); pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'Website saved', text: 'Saved locally (IndexedDB).' }) }
  const exportHtml = () => {
    // the exported file is standalone · ship the inline scripts (cart + router)
    const out = brand ? fullDoc(site, brand) : doc
    const blob = new Blob([out], { type: 'text/html' })
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `${site.name.toLowerCase().replace(/\s+/g, '-')}.html`; a.click()
    setTimeout(() => URL.revokeObjectURL(a.href), 4000)
  }

  // ---- colours: the shared Coolors-style generator applies to the Brand Kit ----
  const applyPalette = (colors: string[]) => {
    if (!brand) return
    const next = { ...brand, palette: paletteToKit(colors) }
    setBrand(next)
    void saveBrandKit(dojoId, next)
    pushToast({ kind: 'event', badge: 'OK', color: '#2f6bff', title: 'Colours applied', text: 'Your site & Brand Kit now use this palette.' })
  }
  // ---- content: import / generate images, videos, text ----
  const addBlock = (b: Block, afterSel = true) => {
    const arr = [...blocks]
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

  // Content & media tools · rendered inside each section's editor (right panel).
  const contentPanel = (
    <div className="ct-inline">
      <div className="ct-card">
        <b>Image</b>
        <input className="ct-input" value={imgPrompt} placeholder="Describe an image to generate…" onChange={(e) => setImgPrompt(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') generateAiImage() }} />
        <div className="ct-actions">
          <button className="btn tiny" onClick={generateAiImage}>✨ AI image</button>
          <label className="btn tiny ghost">Import<input type="file" accept="image/*" hidden onChange={(e) => { const f = e.target.files?.[0]; if (f) importMedia(f, 'image'); e.currentTarget.value = '' }} /></label>
          <button className="btn tiny ghost" onClick={generateBanner}>Banner</button>
        </div>
      </div>
      <div className="ct-card">
        <b>Video &amp; text</b>
        <div className="ct-actions">
          <label className="btn tiny">Import video<input type="file" accept="video/*" hidden onChange={(e) => { const f = e.target.files?.[0]; if (f) importMedia(f, 'video'); e.currentTarget.value = '' }} /></label>
          <button className="btn tiny ghost" onClick={generateText}>✨ Copy block</button>
        </div>
      </div>
      <div className="ct-card">
        <b>Connect Claude Code &amp; apps</b>
        <div className="ct-actions"><button className="btn tiny" onClick={openConnect}>Open connectors →</button></div>
      </div>
    </div>
  )

  const setLayout = (layout: SiteLayout) => setSite((s) => ({ ...s, layout }))
  // Font changes flow back into the Brand Kit so the Branding & Marketing studios
  // pick them up (bidirectional propagation via the shared kit).
  const saveKitFonts = (p: { headingFont?: string; bodyFont?: string }) => {
    if (!brand) return
    const next = { ...brand, ...p }
    setBrand(next); void saveBrandKit(dojoId, next)
  }
  const setHeadingFont = (headingFont: string) => { setSite((s) => ({ ...s, headingFont })); saveKitFonts({ headingFont }) }
  const setBodyFont = (bodyFont: string) => { setSite((s) => ({ ...s, bodyFont })); saveKitFonts({ bodyFont }) }
  const setFontPair = (headingFont: string, bodyFont: string) => { setSite((s) => ({ ...s, headingFont, bodyFont })); saveKitFonts({ headingFont, bodyFont }) }
  const setHeadingWeight = (headingWeight: number) => setSite((s) => ({ ...s, headingWeight }))
  const setBaseSize = (baseSize: number) => setSite((s) => ({ ...s, baseSize }))

  // typography & colours are off the main flow (opened from the left Styles panel)
  const barStep: Step = step === 'typography' || step === 'colours' ? 'design' : step
  const stepIdx = STEPS.findIndex((s) => s.id === barStep)
  const advance = () => {
    if (step === 'template') { startBlank(); return }
    if (step === 'design') return setStep('export')
    if (step === 'typography' || step === 'colours') return setStep('design')
    if (step === 'export') return void save()
  }
  const goBack = () => {
    if (step === 'typography' || step === 'colours') { setStep('design'); return }
    if (stepIdx > 0) setStep(STEPS[stepIdx - 1].id)
  }
  const nextLabel = step === 'template' ? 'Start blank →' : step === 'design' ? 'Export →' : (step === 'typography' || step === 'colours') ? '← Back to design' : 'Save site'

  return (
    <div className="site-mod sq">
      {/* Add-page / change-template picker · choose a page type */}
      {pagePicker && (
        <div className="pgpick-ov" onClick={() => setPagePicker(null)}>
          <div className="pgpick" onClick={(e) => e.stopPropagation()}>
            <header className="pgpick-h">
              <strong>{pagePicker === 'add' ? 'Add a page' : `Change template · ${page.title}`}</strong>
              <button className="cw-close" onClick={() => setPagePicker(null)} aria-label="Close">✕</button>
            </header>
            <p className="muted small" style={{ margin: '0 0 12px' }}>{pagePicker === 'add' ? 'Choose the type of page to add.' : 'Replace this page’s sections with a new layout.'}</p>
            <div className="pgpick-grid">
              {PAGE_PRESETS.map((p) => (
                <button key={p.id} className="pgpick-card" onClick={() => (pagePicker === 'add' ? addPageFromPreset(p.id) : changePageTemplate(p.id))}>
                  <span className="pgpick-thumb">{p.blocks.slice(0, 4).map((b, i) => <span key={i} className={`pgpick-row pgpick-${b}`} />)}</span>
                  <strong>{p.label}</strong>
                  <span className="pgpick-desc">{p.desc}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      <StepBar
        steps={STEPS} current={barStep} onJump={(id) => setStep(id as Step)}
        onBack={goBack} backDisabled={barStep === 'template'}
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
              <button className={mode === 'edit' ? 'on' : ''} onClick={() => setMode('edit')} title="Edit the site">✎ Edit</button>
              <button className={mode === 'preview' ? 'on' : ''} onClick={() => { setSel(null); setMode('preview') }} title="Preview the live site (cart & links work)">▷ Preview</button>
            </div>
            <div className="site-seg">
              <button className={device === 'desktop' ? 'on' : ''} onClick={() => setDevice('desktop')} title="Desktop">Desktop</button>
              <button className={device === 'mobile' ? 'on' : ''} onClick={() => setDevice('mobile')} title="Mobile">Mobile</button>
            </div>
            <div className="site-tb-actions">
              <button className="btn tiny ghost" onClick={regenerate} title="Regenerate a first version">↺ 1st version</button>
            </div>
          </div>

      {/* Squarespace-style editor · left Pages/Styles · center canvas · right editor.
          In Preview mode the side panels hide and the real site runs full-width. */}
      <div className={`site-editor-body ${mode}`}>
        {/* LEFT · pages (sections) + styles */}
        <aside className="site-left">
          <div className="site-left-tabs">
            <button className={leftTab === 'pages' ? 'on' : ''} onClick={() => setLeftTab('pages')}>Pages</button>
            <button className={leftTab === 'styles' ? 'on' : ''} onClick={() => setLeftTab('styles')}>Styles</button>
          </div>
          {leftTab === 'pages' ? (
            <div className="site-left-body">
              {/* PAGES · the site's pages (Squarespace-style) */}
              <div className="site-blocks-head">
                <h4 className="brand-h" style={{ margin: 0 }}>Pages
                  <InfoDot title="Pages &amp; sections" label="How editing works">
                    <p>Your site has <b>pages</b> (top list) and <b>sections</b> inside each page (below). Click a page to edit it; toggle the <b>☰</b> to show/hide it in the nav.</p>
                    <p>Click any <b>section in the canvas</b> to edit it on the right (Éléments / Design / Couleur). Click an <b>image</b> to jump straight to its media editor. Reorder, duplicate or delete with the row buttons.</p>
                    <p><b>Styles</b> (tab above) sets fonts, colours and component radius/borders for the whole site. Switch to <b>Preview</b> to try the live site; <b>Export</b> downloads a standalone .html.</p>
                  </InfoDot>
                </h4>
                <button className="btn tiny" onClick={() => setPagePicker('add')}>＋ Add page</button>
              </div>
              <ul className="site-pagelist">
                {pages.map((p, i) => (
                  <li key={p.id} className={p.id === page.id ? 'on' : ''}>
                    <button className="site-pg-name" onClick={() => openPageEdit(p.id)} title={`/${p.slug}`}>{p.home ? '⌂ ' : ''}{p.title}</button>
                    <div className="site-bl-ops">
                      <button onClick={() => togglePageNav(p.id)} className={p.nav ? 'on' : ''} title={p.nav ? 'Shown in nav' : 'Hidden from nav'}>{p.nav ? '☰' : '⊘'}</button>
                      <button onClick={() => movePage(p.id, -1)} disabled={i === 0} aria-label="Move up">↑</button>
                      <button onClick={() => movePage(p.id, 1)} disabled={i === pages.length - 1} aria-label="Move down">↓</button>
                      <button onClick={() => { const t = prompt('Rename page', p.title); if (t) renamePage(p.id, t) }} aria-label="Rename">✎</button>
                      <button onClick={() => deletePage(p.id)} disabled={!!p.home} aria-label="Delete">✕</button>
                    </div>
                  </li>
                ))}
              </ul>

              {/* SECTIONS · the sections of the page you're editing */}
              <div className="site-blocks-head" style={{ marginTop: 16 }}>
                <h4 className="brand-h" style={{ margin: 0 }}>{page.title} · sections</h4>
                <button className="btn tiny" onClick={() => setAddOpen((v) => !v)}>＋ Add</button>
              </div>
              <button className="btn tiny ghost" style={{ width: '100%', marginBottom: 8 }} onClick={() => setPagePicker('change')}>⟳ Change page template</button>
              {addOpen && (
                <div className="site-palette">
                  {BLOCK_ORDER.map((t) => <button key={t} onClick={() => add(t)}>{BLOCK_LABELS[t]}</button>)}
                </div>
              )}
              <ul className="site-blocklist">
                {blocks.map((b, i) => (
                  <li key={b.id} className={b.id === sel ? 'on' : ''}>
                    <button className="site-bl-name" onClick={() => selectBlock(b.id)}>{BLOCK_LABELS[b.type]}</button>
                    <div className="site-bl-ops">
                      <button onClick={() => move(b.id, -1)} disabled={i === 0} aria-label="Move up">↑</button>
                      <button onClick={() => move(b.id, 1)} disabled={i === blocks.length - 1} aria-label="Move down">↓</button>
                      <button onClick={() => dup(b.id)} aria-label="Duplicate">⎘</button>
                      <button onClick={() => del(b.id)} aria-label="Delete">✕</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="site-left-body">
              <div className="sq-eyebrow">Font pairing</div>
              <div className="ty-fonts ty-fonts-mini">
                {FONT_PAIRINGS.map((f) => {
                  const on = site.headingFont === f.heading && site.bodyFont === f.body
                  return (
                    <button key={f.label} className={`ty-font${on ? ' on' : ''}`} onClick={() => setFontPair(f.heading, f.body)}>
                      <span className="ty-font-h" style={{ fontFamily: `"${f.heading}"` }}>{site.name}</span>
                      <span className="ty-font-b" style={{ fontFamily: `"${f.body}"` }}>{f.label}</span>
                    </button>
                  )
                })}
              </div>
              <button className="btn tiny ghost" style={{ marginTop: 8 }} onClick={() => setStep('typography')}>More typography →</button>
              <div className="sq-eyebrow" style={{ marginTop: 14 }}>Colour palette</div>
              <div className="cw-presets cw-presets-mini">
                {PRESET_PALETTES.slice(0, 12).map((p) => (
                  <button key={p.name} className="cw-preset" title={p.name} onClick={() => applyPalette(p.colors)}>
                    <span className="cw-preset-strip">{p.colors.map((c, k) => <span key={k} style={{ background: c }} />)}</span>
                    <span className="cw-preset-n">{p.name}</span>
                  </button>
                ))}
              </div>
              <button className="btn tiny ghost" style={{ marginTop: 8 }} onClick={() => setStep('colours')}>More colours →</button>

              {/* Components · global corner radius + border width + colour */}
              <div className="sq-eyebrow" style={{ marginTop: 16 }}>Components
                <InfoDot title="Component style" label="How corners & borders work">
                  <p>These controls style every component of your site at once — buttons, cards, pricing tiers, images, product cards and form fields.</p>
                  <p><b>Corner radius</b>: 0 = sharp edges, higher = rounder. <b>Border width</b>: how thick the outline is. <b>Border colour</b>: pick a visible colour to make borders stand out (they're very subtle by default). Everything previews live and is included in the export.</p>
                </InfoDot>
              </div>
              <label className="site-field"><span>Corner radius · {site.radius ?? 12}px</span>
                <input type="range" min={0} max={40} step={1} value={site.radius ?? 12} onChange={(e) => setRadius(Number(e.target.value))} />
              </label>
              <label className="site-field"><span>Border width · {site.borderWidth ?? 1}px</span>
                <input type="range" min={0} max={6} step={1} value={site.borderWidth ?? 1} onChange={(e) => setBorderWidth(Number(e.target.value))} />
              </label>
              <div className="site-field"><span>Border colour</span>
                <div className="site-bordercolor">
                  <input type="color" value={borderColorHex(site.borderColor)} onChange={(e) => setBorderColor(e.target.value)} aria-label="Border colour" />
                  <input className="site-bc-hex" value={site.borderColor ?? ''} placeholder="subtle (default)" onChange={(e) => setBorderColor(e.target.value)} />
                  {site.borderColor && <button className="btn tiny ghost" onClick={() => setBorderColor('')}>Reset</button>}
                  <span className="site-bc-swatches">
                    {['#111827', '#334155', '#0e9c63', '#2f6bff', '#e0459b', '#d97706'].map((c) => (
                      <button key={c} className="site-bc-sw" style={{ background: c }} title={c} aria-label={`Border ${c}`} onClick={() => setBorderColor(c)} />
                    ))}
                  </span>
                </div>
              </div>
            </div>
          )}
        </aside>

        {/* CENTER · the live canvas */}
        <div className="site-center">
          <div className={`site-preview ${device} ${mode}`}>
            <iframe
              ref={frameRef}
              title="Website preview"
              className="site-frame"
              srcDoc={mode === 'edit' ? editDoc : doc}
              onLoad={onFrameLoad}
            />
            {mode === 'edit' && ctx && selected && (
              <div
                className="site-ctx"
                style={{
                  top: (frameRef.current?.offsetTop || 0) + Math.max(2, Math.min(ctx.rect.top, (frameRef.current?.clientHeight || 460) - 44)),
                  left: (frameRef.current?.offsetLeft || 0) + Math.max(0, ctx.rect.left) + Math.max(0, ctx.rect.width),
                }}
              >
                <span className="site-ctx-lbl">{BLOCK_LABELS[selected.type]}</span>
                <button title="Edit section" onClick={() => document.querySelector('.site-right')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>✎</button>
                <button title="Duplicate" onClick={() => dup(selected.id)}>⎘</button>
                <button title="Move up" onClick={() => move(selected.id, -1)}>↑</button>
                <button title="Move down" onClick={() => move(selected.id, 1)}>↓</button>
                <button className="site-ctx-del" title="Delete" onClick={() => del(selected.id)}>🗑</button>
              </div>
            )}
          </div>
          <p className="muted small" style={{ margin: '6px 2px 0' }}>{mode === 'preview' ? 'Preview mode · the cart, buttons and links work like the live site. Switch to ✎ Edit to change content.' : 'Click a section in the canvas to edit it on the right · manage sections & styles on the left.'}</p>
        </div>

        {/* RIGHT · the section editor (shows on select) */}
        <aside className="site-right">
      {selected ? (
        <div className="site-inspector" id="site-inspector">
          <h4 className="brand-h">Edit · {BLOCK_LABELS[selected.type]}</h4>
          <div className="insp-tabs">
            <button className={inspTab === 'content' ? 'on' : ''} onClick={() => setInspTab('content')}>Éléments</button>
            <button className={inspTab === 'design' ? 'on' : ''} onClick={() => setInspTab('design')}>Design</button>
            <button className={inspTab === 'colour' ? 'on' : ''} onClick={() => setInspTab('colour')}>Couleur</button>
          </div>

          {/* DESIGN tab · section layout controls */}
          {inspTab === 'design' && (
            <div className="insp-panel">
              <div className="site-field"><span>Spacing</span>
                <div className="insp-seg">
                  {(['sm', 'md', 'lg'] as const).map((v) => <button key={v} className={((selected.props._pad as string) || 'md') === v ? 'on' : ''} onClick={() => setDesign('_pad', v)}>{v === 'sm' ? 'Compact' : v === 'md' ? 'Normal' : 'Spacious'}</button>)}
                </div>
              </div>
              <div className="site-field"><span>Text alignment</span>
                <div className="insp-seg">
                  {(['left', 'center'] as const).map((v) => <button key={v} className={((selected.props._align as string) || 'center') === v ? 'on' : ''} onClick={() => setDesign('_align', v)}>{v === 'left' ? 'Left' : 'Center'}</button>)}
                </div>
              </div>
              <label className="insp-toggle"><span>Full-width section</span>
                <button role="switch" aria-checked={!!selected.props._full} className={`tgl${selected.props._full ? ' on' : ''}`} onClick={() => setDesign('_full', !selected.props._full)}><span /></button>
              </label>
              <div className="site-field"><span>Animation on scroll</span>
                <div className="insp-anims">
                  {SECTION_ANIMS.map((a) => <button key={a.id} className={((selected.props._anim as string) || 'none') === a.id ? 'on' : ''} onClick={() => setDesign('_anim', a.id)}>{a.label}</button>)}
                </div>
              </div>
            </div>
          )}

          {/* COULEUR tab · section colour theme */}
          {inspTab === 'colour' && (
            <div className="insp-panel">
              <p className="muted small" style={{ marginTop: 0 }}>Pick a colour theme for this section. Themes use your Brand Kit — tune them in the Colours step.</p>
              <div className="insp-themes">
                {([['default', 'Default'], ['light', 'Light'], ['dark', 'Dark'], ['accent', 'Accent']] as const).map(([v, label]) => (
                  <button key={v} className={`insp-theme insp-th-${v}${((selected.props._theme as string) || 'default') === v ? ' on' : ''}`} onClick={() => setDesign('_theme', v)}>
                    <span className="insp-th-aa">Aa</span><span className="insp-th-lbl">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {inspTab === 'content' && (<>
          {/* add content · generate/import media & text into this page */}
          <div className="insp-addcontent">
            <button className={`btn tiny ghost insp-addbtn${contentOpen ? ' on' : ''}`} onClick={() => setContentOpen((v) => !v)}>＋ Add content (media · text · apps)</button>
            {contentOpen && contentPanel}
          </div>
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

          {/* Shop: manage products + shop settings on a Store section */}
          {selected.type === 'store' && (
            <div className="shop-mgr">
              <div className="shop-settings">
                <label className="site-field"><span>Currency</span>
                  <select value={site.currency || 'USD'} onChange={(e) => setCurrency(e.target.value)}>
                    {SITE_CURRENCIES.map((c) => <option key={c.code} value={c.code}>{c.label}</option>)}
                  </select>
                </label>
                <label className="site-field"><span>Orders email (checkout sends here)</span>
                  <input type="email" value={site.checkoutEmail || ''} placeholder="orders@yourbrand.com" onChange={(e) => setCheckoutEmail(e.target.value)} />
                </label>
              </div>
              <div className="shop-head"><b>Products</b><button className="btn tiny" onClick={addProduct}>＋ Add product</button></div>
              {storeProducts.length === 0 && <p className="muted small">No products yet. Add one to build your catalogue.</p>}
              {storeProducts.map((p) => (
                <div key={p.id} className="shop-prod">
                  {p.img ? <img className="shop-prod-thumb" src={p.img} alt="" /> : <div className="shop-prod-thumb ph" />}
                  <div className="shop-prod-fields">
                    <input className="shop-pname" value={p.name} placeholder="Product name" onChange={(e) => updateProduct(p.id, { name: e.target.value })} />
                    <div className="shop-prow">
                      <span className="shop-cur">{currencySymbol(site.currency)}</span>
                      <input className="shop-pprice" type="number" min="0" step="0.01" value={p.price} onChange={(e) => updateProduct(p.id, { price: Number(e.target.value) || 0 })} />
                      <label className="btn tiny ghost">Image<input type="file" accept="image/*" hidden onChange={(e) => { const f = e.target.files?.[0]; if (f) productImage(p.id, f); e.currentTarget.value = '' }} /></label>
                      <button className="btn tiny ghost shop-del" onClick={() => removeProduct(p.id)}>Remove</button>
                    </div>
                    <input className="shop-pdesc" value={p.desc || ''} placeholder="Short description" onChange={(e) => updateProduct(p.id, { desc: e.target.value })} />
                  </div>
                </div>
              ))}
            </div>
          )}
          </>)}
        </div>
      ) : (
        <p className="site-right-empty">Click a section in the canvas (or a page on the left) to edit its text, images, video and products here.</p>
      )}
        </aside>
      </div>
        </section>
      )}

      {step === 'typography' && (
        <section className="sq-panel">
          <h3 className="sq-title">Typography &amp; layout</h3>
          <p className="sq-lead">Choose from every popular Google Font for your headings and body — or start from a quick pairing. Your choice flows into the Branding &amp; Marketing studios too. Tune weight, size and layout.</p>

          <BrandTypography
            heading={site.headingFont}
            body={site.bodyFont}
            sample={site.name}
            onHeading={setHeadingFont}
            onBody={setBodyFont}
            onPreset={setFontPair}
          />

          <div className="bw-2col" style={{ marginTop: 12 }}>
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
          <p className="sq-lead">Pick a trending palette or generate your own (press <kbd>space</kbd>) — it re-themes your whole site, Branding &amp; Marketing instantly.</p>
          {brand && <BrandColours palette={brand.palette} onApply={applyPalette} />}
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
