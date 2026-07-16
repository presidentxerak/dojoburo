// Website engine · 100% local. A site is an ordered list of section blocks,
// each rendered to semantic HTML that references the Brand Kit's CSS variables.
// The same blockHtml() feeds both the live iframe preview and the exported
// standalone .html file · so what you see is exactly what you export. No server.
import { idbGet, idbSet } from './idb'
import { type BrandKit, defaultKit, kitCss } from './brand'

export type BlockType = 'hero' | 'features' | 'pricing' | 'cta' | 'form' | 'text' | 'gallery' | 'image' | 'video' | 'store' | 'footer'
export interface Block { id: string; type: BlockType; props: Record<string, unknown> }
export type SiteFont = 'sans' | 'serif' | 'mono' | 'grotesk' | 'editorial' | 'rounded'
export type SiteLayout = 'centered' | 'left' | 'editorial' | 'bold'
/** A shop product · used by the Store block + the built-in cart. */
export interface Product { id: string; name: string; price: number; img?: string; desc?: string }
/** A page of the site · its own title, URL slug, nav visibility and sections. */
export interface SitePage { id: string; title: string; slug: string; nav: boolean; home?: boolean; blocks: Block[] }
export interface SiteDoc {
  name: string; updatedAt: number; templateId?: string
  /** multi-page sites · each page has its own sections. `blocks` is the legacy
   *  single-page field, migrated into a Home page by normalizeSite(). */
  pages?: SitePage[]; blocks?: Block[]
  font?: SiteFont; layout?: SiteLayout
  /** optional Google Fonts (override the preset pairing) + type controls */
  headingFont?: string; bodyFont?: string; headingWeight?: number; baseSize?: number
  /** shop settings · currency symbol + where checkout orders go */
  currency?: string; checkoutEmail?: string
}

const pageUid = () => `pg_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 5)}`
export function slugify(s: string): string {
  return (s || 'page').toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 40) || 'page'
}
export function makePage(title: string, blocks: Block[] = [], opts: Partial<SitePage> = {}): SitePage {
  return { id: pageUid(), title, slug: slugify(title), nav: true, blocks, ...opts }
}
/** Ensure the site is in multi-page form (migrating a legacy single-page doc). */
export function normalizeSite(site: SiteDoc): SiteDoc {
  if (site.pages && site.pages.length) return site
  const blocks = site.blocks ?? []
  return { ...site, pages: [{ id: pageUid(), title: 'Home', slug: 'home', nav: true, home: true, blocks }], blocks: undefined }
}
export const sitePages = (site: SiteDoc): SitePage[] => site.pages && site.pages.length ? site.pages : normalizeSite(site).pages!
export const homePage = (site: SiteDoc): SitePage => { const ps = sitePages(site); return ps.find((p) => p.home) ?? ps[0] }
/** Currency options for the shop (symbol used by the cart + product prices). */
export const SITE_CURRENCIES: { code: string; symbol: string; label: string }[] = [
  { code: 'USD', symbol: '$', label: 'US Dollar ($)' },
  { code: 'EUR', symbol: '€', label: 'Euro (€)' },
  { code: 'GBP', symbol: '£', label: 'British Pound (£)' },
  { code: 'JPY', symbol: '¥', label: 'Japanese Yen (¥)' },
  { code: 'CAD', symbol: 'C$', label: 'Canadian Dollar (C$)' },
  { code: 'CHF', symbol: 'CHF ', label: 'Swiss Franc (CHF)' },
]
export const currencySymbol = (code?: string) => SITE_CURRENCIES.find((c) => c.code === code)?.symbol ?? '$'

// A broad catalogue of Google Fonts (searchable in the Typography step). Loaded
// on demand via fonts.googleapis.com (allowed by the site CSP). Grouped so the
// picker can section them.
export interface GFont { name: string; cat: 'Sans' | 'Serif' | 'Display' | 'Mono' | 'Handwriting' }
export const GOOGLE_FONTS: GFont[] = [
  ...['Inter', 'Roboto', 'Open Sans', 'Lato', 'Montserrat', 'Poppins', 'Raleway', 'Nunito', 'Nunito Sans', 'Work Sans', 'Source Sans 3', 'Rubik', 'Manrope', 'DM Sans', 'Outfit', 'Sora', 'Plus Jakarta Sans', 'Figtree', 'Lexend', 'Karla', 'Mulish', 'Barlow', 'Cabin', 'Quicksand', 'PT Sans', 'Josefin Sans', 'Archivo', 'Libre Franklin', 'Kanit', 'Prompt', 'Chivo', 'Red Hat Display', 'Epilogue', 'Urbanist', 'Albert Sans', 'Hanken Grotesk', 'Titillium Web', 'Ubuntu', 'IBM Plex Sans', 'Space Grotesk', 'Onest', 'Schibsted Grotesk', 'Instrument Sans'].map((name) => ({ name, cat: 'Sans' as const })),
  ...['Playfair Display', 'Merriweather', 'Lora', 'PT Serif', 'Cormorant Garamond', 'EB Garamond', 'Crimson Text', 'Bitter', 'Domine', 'Zilla Slab', 'Roboto Slab', 'Arvo', 'Spectral', 'Frank Ruhl Libre', 'Noto Serif', 'Source Serif 4', 'Libre Baskerville', 'Cardo', 'Cormorant', 'IBM Plex Serif'].map((name) => ({ name, cat: 'Serif' as const })),
  ...['Bebas Neue', 'Anton', 'Righteous', 'Fredoka', 'Comfortaa', 'Abril Fatface', 'Bricolage Grotesque', 'Alfa Slab One', 'Passion One', 'Staatliches', 'Bungee', 'Rowdies', 'Unbounded'].map((name) => ({ name, cat: 'Display' as const })),
  ...['Roboto Mono', 'Space Mono', 'JetBrains Mono', 'Fira Code', 'IBM Plex Mono', 'Inconsolata', 'Ubuntu Mono', 'Source Code Pro'].map((name) => ({ name, cat: 'Mono' as const })),
  ...['Pacifico', 'Lobster', 'Dancing Script', 'Caveat', 'Satisfy', 'Shadows Into Light', 'Permanent Marker', 'Kalam', 'Gochi Hand', 'Sacramento'].map((name) => ({ name, cat: 'Handwriting' as const })),
]
// The live catalogue, fetched once from the /api/fonts proxy (which pulls the
// full Google Fonts library behind the operator key). Falls back to the curated
// GOOGLE_FONTS list when no key is configured or the request fails. Cached in
// module scope + sessionStorage so the picker loads instantly on re-open.
let FONT_CATALOGUE: GFont[] | null = null
let fontFetch: Promise<GFont[]> | null = null
const FONT_CACHE_KEY = 'dojoburo.gfonts.v1'

function readSessionFonts(): GFont[] | null {
  try {
    const raw = sessionStorage.getItem(FONT_CACHE_KEY)
    if (!raw) return null
    const arr = JSON.parse(raw)
    return Array.isArray(arr) && arr.length ? (arr as GFont[]) : null
  } catch { return null }
}

/** The best font list available right now (live catalogue if loaded, else curated). */
export function currentGoogleFonts(): GFont[] {
  return FONT_CATALOGUE ?? readSessionFonts() ?? GOOGLE_FONTS
}

/** Load the full Google Fonts catalogue via the server proxy (once). Resolves to
 *  the live list on success, or the curated fallback otherwise — never rejects. */
export function loadGoogleFonts(): Promise<GFont[]> {
  if (FONT_CATALOGUE) return Promise.resolve(FONT_CATALOGUE)
  const cached = readSessionFonts()
  if (cached) { FONT_CATALOGUE = cached; return Promise.resolve(cached) }
  if (fontFetch) return fontFetch
  fontFetch = (async () => {
    try {
      const res = await fetch('/api/fonts', { headers: { accept: 'application/json' } })
      const data = (await res.json()) as { ok?: boolean; fonts?: GFont[] }
      if (data?.ok && Array.isArray(data.fonts) && data.fonts.length > 20) {
        FONT_CATALOGUE = data.fonts
        try { sessionStorage.setItem(FONT_CACHE_KEY, JSON.stringify(data.fonts)) } catch { /* ignore */ }
        return data.fonts
      }
    } catch { /* fall through to curated */ }
    FONT_CATALOGUE = GOOGLE_FONTS
    return GOOGLE_FONTS
  })()
  return fontFetch
}

/** A Google Fonts css2 stylesheet URL for the given families (with common weights). */
export function googleFontsHref(families: string[]): string {
  const uniq = [...new Set(families.filter(Boolean))]
  if (!uniq.length) return ''
  const q = uniq.map((f) => `family=${encodeURIComponent(f).replace(/%20/g, '+')}:wght@400;500;600;700;800`).join('&')
  return `https://fonts.googleapis.com/css2?${q}&display=swap`
}

// Typography sets · distinct heading/body pairings, CSP-safe (system stacks).
export const SITE_FONTS: { id: SiteFont; label: string; heading: string; body: string }[] = [
  { id: 'sans', label: 'Modern sans', heading: '"Outfit", system-ui, sans-serif', body: '"Outfit", system-ui, sans-serif' },
  { id: 'grotesk', label: 'Bold grotesque', heading: '"Helvetica Neue", Arial, sans-serif', body: '"Helvetica Neue", Arial, sans-serif' },
  { id: 'serif', label: 'Classic serif', heading: 'Georgia, "Times New Roman", serif', body: 'Georgia, serif' },
  { id: 'editorial', label: 'Editorial (serif + sans)', heading: '"Palatino Linotype", Georgia, serif', body: '"Outfit", system-ui, sans-serif' },
  { id: 'mono', label: 'Technical mono', heading: '"Courier New", ui-monospace, monospace', body: 'ui-monospace, "Courier New", monospace' },
  { id: 'rounded', label: 'Friendly rounded', heading: '"Trebuchet MS", "Segoe UI", sans-serif', body: '"Trebuchet MS", "Segoe UI", sans-serif' },
]
export const fontSet = (id?: SiteFont) => SITE_FONTS.find((f) => f.id === id) ?? SITE_FONTS[0]
export const SITE_LAYOUTS: { id: SiteLayout; label: string; hint: string }[] = [
  { id: 'centered', label: 'Centered', hint: 'Everything centred · classic SaaS' },
  { id: 'left', label: 'Left-aligned', hint: 'Left text · editorial, roomy' },
  { id: 'editorial', label: 'Editorial', hint: 'Narrow column · big serif headlines' },
  { id: 'bold', label: 'Bold', hint: 'Oversized headings · high contrast' },
]

const uid = () => `b_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`
const esc = (s: unknown) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// ---- block catalog (defaults + label) --------------------------------------
export const BLOCK_LABELS: Record<BlockType, string> = {
  hero: 'Hero', features: 'Highlights', pricing: 'Pricing', cta: 'Call to action',
  form: 'Form', text: 'Text', gallery: 'Gallery', image: 'Image', video: 'Video', store: 'Store', footer: 'Footer',
}
export const BLOCK_ORDER: BlockType[] = ['hero', 'features', 'store', 'pricing', 'cta', 'form', 'text', 'gallery', 'image', 'video', 'footer']

const uidP = () => `p_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 5)}`
/** A fresh product with sensible defaults (for the shop manager). */
export function makeProduct(name = 'New product', price = 20): Product {
  return { id: uidP(), name, price, img: '', desc: '' }
}

export function makeBlock(type: BlockType, name = 'My brand'): Block {
  const P: Record<BlockType, Record<string, unknown>> = {
    hero: { title: name, subtitle: 'The solution that changes everything for your customers.', cta: 'Get started' },
    features: { title: 'Why choose us', items: [
      { title: 'Fast', desc: 'Up and running in minutes.' },
      { title: 'Reliable', desc: 'Consistent quality, every time.' },
      { title: 'Tailored', desc: 'Built around your business.' },
    ] },
    pricing: { title: 'Our plans', tiers: [
      { name: 'Starter', price: '$0', features: ['The essentials', 'Email support'] },
      { name: 'Pro', price: '$29', features: ['Everything in Starter', 'Advanced features', 'Priority support'] },
      { name: 'Business', price: '$99', features: ['Everything in Pro', 'Dedicated support'] },
    ] },
    cta: { title: 'Ready to get started?', subtitle: 'Join us today.', cta: 'Create an account' },
    form: { title: 'Contact us', subtitle: 'We reply within 24 hours.', button: 'Send' },
    text: { heading: 'About', body: 'Describe your business, your story, and what makes you unique here.' },
    gallery: { title: 'Gallery', count: 6 },
    image: { src: '', caption: '', alt: `${name} image` },
    video: { src: '', caption: '' },
    store: { title: 'Shop', subtitle: 'Browse our products', products: [
      makeProduct('Starter', 19),
      makeProduct('Pro', 49),
      makeProduct('Premium', 99),
    ] },
    footer: { text: `© ${name}`, links: ['Home', 'Pricing', 'Contact'] },
  }
  return { id: uid(), type, props: P[type] }
}

/** The AI first version (generated locally, instantly) from the company name. */
export function generateSite(name: string): SiteDoc {
  const order: BlockType[] = ['hero', 'features', 'pricing', 'cta', 'footer']
  const home = makePage('Home', order.map((t) => makeBlock(t, name)), { slug: 'home', home: true })
  const contact = makePage('Contact', [makeBlock('form', name), makeBlock('footer', name)])
  return { name, pages: [home, contact], font: 'sans', layout: 'centered', updatedAt: Date.now() }
}

// ---- template gallery -------------------------------------------------------
export type TemplateCategory = 'Business' | 'Store' | 'Portfolio' | 'Restaurant' | 'Agency' | 'Personal' | 'Blog' | 'Events'
export interface SiteTemplate {
  id: string
  name: string
  category: TemplateCategory
  blurb: string
  /** preview accent / ground / ink + display face vibe (illustrative card art) */
  accent: string
  bg: string
  ink: string
  vibe: 'serif' | 'sans' | 'mono'
  /** typography set + layout variant · what makes each template look distinct */
  font: SiteFont
  layout: SiteLayout
  /** the section layout this template starts from */
  blocks: BlockType[]
}

export const SITE_TEMPLATES: SiteTemplate[] = [
  { id: 'lumen', name: 'Lumen', category: 'Business', blurb: 'Clean SaaS landing · features, pricing and sign-up.', accent: '#2f6bff', bg: '#ffffff', ink: '#0e1220', vibe: 'sans', font: 'sans', layout: 'centered', blocks: ['hero', 'features', 'text', 'pricing', 'cta', 'form', 'footer'] },
  { id: 'ledger', name: 'Ledger', category: 'Business', blurb: 'Trusted, editorial look for consulting & finance.', accent: '#1f3a8a', bg: '#f6f5f1', ink: '#161a22', vibe: 'serif', font: 'editorial', layout: 'editorial', blocks: ['hero', 'features', 'text', 'pricing', 'cta', 'form', 'footer'] },
  { id: 'mercato', name: 'Mercato', category: 'Store', blurb: 'Warm online store · shop grid, story and checkout.', accent: '#e0622e', bg: '#fff8f2', ink: '#2a1a12', vibe: 'sans', font: 'grotesk', layout: 'left', blocks: ['hero', 'store', 'features', 'text', 'cta', 'footer'] },
  { id: 'bloom', name: 'Bloom', category: 'Store', blurb: 'Boutique shop with a soft, floral feel.', accent: '#c65b86', bg: '#fdf3f6', ink: '#2c1622', vibe: 'serif', font: 'serif', layout: 'centered', blocks: ['hero', 'store', 'gallery', 'text', 'form', 'footer'] },
  { id: 'atelier', name: 'Atelier', category: 'Store', blurb: 'Product-forward shop for makers & studios.', accent: '#111111', bg: '#faf9f7', ink: '#141414', vibe: 'mono', font: 'grotesk', layout: 'bold', blocks: ['hero', 'store', 'text', 'gallery', 'cta', 'footer'] },
  { id: 'aperture', name: 'Aperture', category: 'Portfolio', blurb: 'Dark, image-forward portfolio for creatives.', accent: '#c9a24b', bg: '#0f1012', ink: '#f4f2ec', vibe: 'serif', font: 'editorial', layout: 'bold', blocks: ['hero', 'gallery', 'text', 'features', 'cta', 'footer'] },
  { id: 'grid', name: 'Grid', category: 'Portfolio', blurb: 'Minimal black-and-white photography grid.', accent: '#111111', bg: '#ffffff', ink: '#111111', vibe: 'mono', font: 'mono', layout: 'left', blocks: ['hero', 'gallery', 'text', 'form', 'footer'] },
  { id: 'saveur', name: 'Saveur', category: 'Restaurant', blurb: 'Cream & serif · menu, gallery and reservations.', accent: '#7a5b2e', bg: '#faf5ea', ink: '#2b2114', vibe: 'serif', font: 'serif', layout: 'editorial', blocks: ['hero', 'features', 'gallery', 'text', 'form', 'footer'] },
  { id: 'nord', name: 'Studio Nord', category: 'Agency', blurb: 'Bold, minimal agency with a mono accent.', accent: '#16a085', bg: '#101314', ink: '#eef2f1', vibe: 'mono', font: 'grotesk', layout: 'bold', blocks: ['hero', 'features', 'text', 'gallery', 'cta', 'footer'] },
  { id: 'loft', name: 'Loft', category: 'Agency', blurb: 'Warm studio with services, work and pricing.', accent: '#d97706', bg: '#fbf7f0', ink: '#1c1710', vibe: 'sans', font: 'sans', layout: 'left', blocks: ['hero', 'features', 'gallery', 'pricing', 'cta', 'footer'] },
  { id: 'persona', name: 'Persona', category: 'Personal', blurb: 'Friendly personal site or link-in-bio.', accent: '#7b5cff', bg: '#f7f5ff', ink: '#241b3c', vibe: 'sans', font: 'rounded', layout: 'centered', blocks: ['hero', 'text', 'gallery', 'features', 'cta', 'footer'] },
  { id: 'dispatch', name: 'Dispatch', category: 'Blog', blurb: 'Editorial blog / newsletter, serif headlines.', accent: '#b0322b', bg: '#fbfaf7', ink: '#1a1712', vibe: 'serif', font: 'serif', layout: 'editorial', blocks: ['hero', 'text', 'gallery', 'form', 'footer'] },
  { id: 'assembly', name: 'Assembly', category: 'Events', blurb: 'High-contrast event page · schedule and RSVP.', accent: '#ffd23b', bg: '#0c0c0f', ink: '#f6f6f4', vibe: 'sans', font: 'grotesk', layout: 'bold', blocks: ['hero', 'features', 'text', 'cta', 'form', 'footer'] },
  { id: 'fresh', name: 'Fresh', category: 'Business', blurb: 'Energetic wellness / fitness landing.', accent: '#1fa563', bg: '#f2fbf5', ink: '#12271c', vibe: 'sans', font: 'rounded', layout: 'left', blocks: ['hero', 'features', 'gallery', 'cta', 'form', 'footer'] },
]

// Per-template starting copy · so each template opens looking bespoke (distinct
// hero + section wording), not the same placeholder everywhere.
const TEMPLATE_COPY: Record<string, { hero: { title: string; subtitle: string; cta: string }; features?: string; cta?: { title: string; subtitle: string; cta: string } }> = {
  lumen: { hero: { title: 'Ship faster with {n}', subtitle: 'The all-in-one platform your team will actually enjoy using.', cta: 'Start free' }, features: 'Everything you need', cta: { title: 'Ready to get started?', subtitle: 'Set up in minutes — no credit card required.', cta: 'Create your account' } },
  ledger: { hero: { title: '{n} — clarity for your finances', subtitle: 'Trusted advisory for founders, teams and growing companies.', cta: 'Book a consultation' }, features: 'How we help' },
  mercato: { hero: { title: '{n}', subtitle: 'Thoughtfully made goods, delivered to your door.', cta: 'Shop the collection' }, features: 'Why you’ll love it' },
  bloom: { hero: { title: '{n}', subtitle: 'A little boutique of beautiful, handpicked things.', cta: 'Browse the shop' } },
  atelier: { hero: { title: '{n}', subtitle: 'Objects made by hand, in small batches.', cta: 'View products' } },
  aperture: { hero: { title: '{n}', subtitle: 'Selected work — photography, direction and design.', cta: 'See the work' } },
  grid: { hero: { title: '{n}', subtitle: 'A minimal archive of images.', cta: 'View gallery' } },
  saveur: { hero: { title: '{n}', subtitle: 'Seasonal plates, natural wine and a warm room.', cta: 'Reserve a table' }, features: 'The experience' },
  nord: { hero: { title: 'We build brands that move — {n}', subtitle: 'A design & technology studio for ambitious teams.', cta: 'Start a project' }, features: 'What we do' },
  loft: { hero: { title: '{n} studio', subtitle: 'Design, build and grow — under one roof.', cta: 'Work with us' }, features: 'Our services' },
  persona: { hero: { title: 'Hi, I’m {n}', subtitle: 'Maker, writer and occasional traveller. Welcome to my corner of the web.', cta: 'Say hello' } },
  dispatch: { hero: { title: '{n}', subtitle: 'Essays and notes, delivered occasionally.', cta: 'Subscribe' } },
  assembly: { hero: { title: '{n}', subtitle: 'One day. Great talks. Limited seats.', cta: 'Get your ticket' }, features: 'The line-up' },
  fresh: { hero: { title: 'Feel your best with {n}', subtitle: 'Coaching, classes and habits that actually stick.', cta: 'Start today' }, features: 'What’s included' },
}

export function generateFromTemplate(name: string, templateId: string): SiteDoc {
  const tpl = SITE_TEMPLATES.find((t) => t.id === templateId) ?? SITE_TEMPLATES[0]
  const copy = TEMPLATE_COPY[tpl.id]
  const fill = (s: string) => s.replace(/\{n\}/g, name)
  const blocks = tpl.blocks.map((t) => {
    const b = makeBlock(t, name)
    if (copy) {
      if (t === 'hero') b.props = { ...b.props, title: fill(copy.hero.title), subtitle: copy.hero.subtitle, cta: copy.hero.cta }
      if (t === 'features' && copy.features) b.props = { ...b.props, title: copy.features }
      if (t === 'cta' && copy.cta) b.props = { ...b.props, title: copy.cta.title, subtitle: copy.cta.subtitle, cta: copy.cta.cta }
    }
    return b
  })
  // Home + a couple of starter pages (Squarespace-style multi-page site)
  const home = makePage('Home', blocks, { slug: 'home', home: true })
  const about = makePage('About', [makeBlock('text', name), makeBlock('gallery', name), makeBlock('footer', name)])
  const contact = makePage('Contact', [makeBlock('form', name), makeBlock('footer', name)])
  const pages = tpl.blocks.includes('store')
    ? [home, makePage('Shop', [makeBlock('store', name), makeBlock('footer', name)]), about, contact]
    : [home, about, contact]
  return { name, templateId: tpl.id, pages, font: tpl.font, layout: tpl.layout, updatedAt: Date.now() }
}

// ---- immutable path get/set (supports 'items.0.title', 'tiers.1.name') ------
export function getPath(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((o, k) => (o == null ? o : (o as Record<string, unknown>)[k]), obj)
}
export function setPath<T>(obj: T, path: string, value: unknown): T {
  const keys = path.split('.')
  const clone = Array.isArray(obj) ? [...(obj as unknown[])] : { ...(obj as Record<string, unknown>) }
  let cur: any = clone
  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i]
    cur[k] = Array.isArray(cur[k]) ? [...cur[k]] : { ...cur[k] }
    cur = cur[k]
  }
  cur[keys[keys.length - 1]] = value
  return clone as T
}

// The same block HTML, but tagged with data-b (block id) + data-lbl so the
// live editor can make each section clickable in the preview iframe.
export function blockHtmlTagged(b: Block): string {
  return blockHtml(b).replace(/^(\s*<(?:section|footer)\b)/, `$1 data-b="${b.id}" data-lbl="${esc(BLOCK_LABELS[b.type])}"`)
}

// Injected only into the EDITING preview (never the export): a hover/selection
// outline and a click→postMessage bridge so clicking a section selects it in the
// builder, plus a listener the builder uses to highlight the current section.
const EDIT_CSS = `
[data-b]{position:relative;cursor:pointer}
[data-b]:hover{outline:2px dashed color-mix(in srgb,var(--brand-accent,#2f6bff) 55%,transparent);outline-offset:-2px}
[data-b].__sel{outline:2px solid var(--brand-accent,#2f6bff);outline-offset:-2px}
[data-b].__sel::after{content:attr(data-lbl);position:absolute;top:0;left:0;background:var(--brand-accent,#2f6bff);color:#fff;font:700 11px/1.5 system-ui,sans-serif;padding:2px 9px;border-bottom-right-radius:7px;z-index:99;pointer-events:none}
`
const EDIT_JS = `<script>(function(){
var selId=null;
function rectOf(id){var el=document.querySelector('[data-b="'+id+'"]');if(!el)return null;var r=el.getBoundingClientRect();return{top:r.top,left:r.left,width:r.width,height:r.height}}
function post(kind,id){try{parent.postMessage({__ds:kind,id:id,rect:rectOf(id)},'*')}catch(e){}}
document.addEventListener('click',function(e){var t=e.target;var nv=t&&t.closest?t.closest('[data-nav]'):null;if(nv){e.preventDefault();e.stopPropagation();try{parent.postMessage({__ds:'page',slug:nv.getAttribute('data-nav')},'*')}catch(er){}return}var el=t&&t.closest?t.closest('[data-b]'):null;if(!el)return;e.preventDefault();e.stopPropagation();selId=el.getAttribute('data-b');post('select',selId)},true);
var raf=0;function onScroll(){if(!selId)return;if(raf)return;raf=requestAnimationFrame(function(){raf=0;post('rect',selId)})}
window.addEventListener('scroll',onScroll,true);window.addEventListener('resize',onScroll);
window.addEventListener('message',function(e){var d=e.data||{};if(d.__ds!=='sel')return;selId=d.id;var prev=document.querySelector('[data-b].__sel');if(prev)prev.classList.remove('__sel');if(!d.id)return;var el=document.querySelector('[data-b="'+d.id+'"]');if(!el)return;el.classList.add('__sel');if(d.scroll)el.scrollIntoView({behavior:'smooth',block:'center'});setTimeout(function(){post('rect',d.id)},d.scroll?360:0)});
})();</scr`+`ipt>`

// ---- render one block to HTML ---------------------------------------------
export function blockHtml(b: Block): string {
  const p = b.props
  switch (b.type) {
    case 'hero':
      return `<section class="b b-hero"><h1>${esc(p.title)}</h1><p>${esc(p.subtitle)}</p><a class="btn" href="#">${esc(p.cta)}</a></section>`
    case 'features': {
      const items = (p.items as { title: string; desc: string }[]) || []
      return `<section class="b b-features"><h2>${esc(p.title)}</h2><div class="grid">${items.map((it) => `<div class="card"><h3>${esc(it.title)}</h3><p>${esc(it.desc)}</p></div>`).join('')}</div></section>`
    }
    case 'pricing': {
      const tiers = (p.tiers as { name: string; price: string; features: string[] }[]) || []
      return `<section class="b b-pricing"><h2>${esc(p.title)}</h2><div class="grid">${tiers.map((t, i) => `<div class="tier${i === 1 ? ' feat' : ''}"><h3>${esc(t.name)}</h3><div class="price">${esc(t.price)}</div><ul>${(t.features || []).map((f) => `<li>${esc(f)}</li>`).join('')}</ul><a class="btn" href="#">Choose</a></div>`).join('')}</div></section>`
    }
    case 'cta':
      return `<section class="b b-cta"><h2>${esc(p.title)}</h2><p>${esc(p.subtitle)}</p><a class="btn" href="#">${esc(p.cta)}</a></section>`
    case 'form':
      return `<section class="b b-form"><h2>${esc(p.title)}</h2><p>${esc(p.subtitle)}</p><div class="formx"><input placeholder="Your name"/><input placeholder="Your email" type="email"/><textarea placeholder="Your message"></textarea><button class="btn" type="button">${esc(p.button)}</button></div></section>`
    case 'text':
      return `<section class="b b-text"><h2>${esc(p.heading)}</h2><p>${esc(p.body)}</p></section>`
    case 'gallery': {
      const n = Math.max(1, Math.min(12, Number(p.count) || 6))
      return `<section class="b b-gallery"><h2>${esc(p.title)}</h2><div class="grid">${Array.from({ length: n }).map((_, i) => `<div class="ph" style="--i:${i}"></div>`).join('')}</div></section>`
    }
    case 'image': {
      const src = String(p.src || '')
      const inner = src
        ? `<img src="${src}" alt="${esc(p.alt)}"/>`
        : `<div class="ph ph-big"></div>`
      return `<section class="b b-image">${inner}${p.caption ? `<p class="cap">${esc(p.caption)}</p>` : ''}</section>`
    }
    case 'video': {
      const src = String(p.src || '')
      const inner = src
        ? `<video src="${src}" controls playsinline preload="metadata"></video>`
        : `<div class="ph ph-big ph-video">▶</div>`
      return `<section class="b b-video">${inner}${p.caption ? `<p class="cap">${esc(p.caption)}</p>` : ''}</section>`
    }
    case 'store': {
      const products = (p.products as Product[]) || []
      const cur = String(p.cur || '$')
      const cards = products.map((pr) => {
        const price = Number(pr.price) || 0
        const media = pr.img ? `<img src="${pr.img}" alt="${esc(pr.name)}"/>` : `<div class="ph"></div>`
        return `<div class="prod">${media}<div class="prod-b"><h3>${esc(pr.name)}</h3>${pr.desc ? `<p>${esc(pr.desc)}</p>` : ''}<div class="prod-f"><span class="prod-price">${esc(cur)}${price.toFixed(2)}</span><button class="btn prod-add" type="button" data-add="${esc(pr.id)}" data-name="${esc(pr.name)}" data-price="${price}">Add to cart</button></div></div></div>`
      }).join('')
      return `<section class="b b-store"><h2>${esc(p.title)}</h2>${p.subtitle ? `<p class="store-sub">${esc(p.subtitle)}</p>` : ''}<div class="prod-grid">${cards || '<p class="store-empty">No products yet.</p>'}</div></section>`
    }
    case 'footer': {
      const links = (p.links as string[]) || []
      return `<footer class="b b-footer"><nav>${links.map((l) => `<a href="#">${esc(l)}</a>`).join('')}</nav><span>${esc(p.text)}</span></footer>`
    }
    default:
      return ''
  }
}

/** Does this site include a shop? (drives the cart runtime injection) */
export function hasStore(site: SiteDoc): boolean {
  return sitePages(site).some((p) => p.blocks.some((b) => b.type === 'store'))
}

// The standalone shopping-cart runtime · injected into EVERY generated site that
// has a Store block (preview AND export), so the cart works on the real exported
// page with no server. Add-to-cart, quantities, live total, and a checkout that
// composes an email order (honest: no fake payment processing).
function cartRuntime(site: SiteDoc): string {
  const cur = currencySymbol(site.currency)
  const email = site.checkoutEmail || ''
  return `
<button id="__cartbtn" class="cartbtn" type="button" aria-label="Cart">🛒<span id="__cartn">0</span></button>
<div id="__cartov" class="cartov" hidden><div class="cartdrawer"><div class="cartdrawer-h"><strong>Your cart</strong><button id="__cartx" class="cartx" type="button" aria-label="Close">×</button></div><div id="__cartlist" class="cartlist"></div><div class="cartfoot"><div class="cartsum"><span>Total</span><b id="__carttot">${cur}0.00</b></div><button id="__cartco" class="btn cartco" type="button">Checkout</button></div></div></div>
<style>.cartbtn{position:fixed;right:18px;bottom:18px;z-index:1000;border:none;background:var(--brand-accent,#2f6bff);color:#fff;border-radius:999px;padding:12px 16px;font:700 15px system-ui,sans-serif;cursor:pointer;box-shadow:0 8px 24px #0003}.cartbtn span{margin-left:6px;background:#fff3;border-radius:999px;padding:1px 7px}.cartov{position:fixed;inset:0;z-index:1001;background:#0006;display:flex;justify-content:flex-end}.cartdrawer{width:min(380px,100%);background:#fff;color:#111;display:flex;flex-direction:column;height:100%;box-shadow:-8px 0 30px #0003}.cartdrawer-h{display:flex;justify-content:space-between;align-items:center;padding:16px 18px;border-bottom:1px solid #0001;font-size:18px}.cartx{border:none;background:none;font-size:24px;cursor:pointer;line-height:1}.cartlist{flex:1;overflow:auto;padding:8px 18px}.citem{display:flex;gap:10px;align-items:center;padding:10px 0;border-bottom:1px solid #0001}.citem .cn{flex:1;font-weight:600}.citem .cq{display:flex;align-items:center;gap:6px}.citem .cq button{width:26px;height:26px;border:1px solid #0002;background:#f6f6f6;border-radius:6px;cursor:pointer;font-size:15px}.cempty{color:#0007;text-align:center;padding:40px 0}.cartfoot{padding:16px 18px;border-top:1px solid #0001}.cartsum{display:flex;justify-content:space-between;font-size:18px;margin-bottom:12px}.cartco{width:100%;text-align:center}</style>
<script>(function(){var CUR=${JSON.stringify(cur)},MAIL=${JSON.stringify(email)},cart={};
function money(n){return CUR+(Math.round(n*100)/100).toFixed(2)}
function total(){var t=0;for(var k in cart)t+=cart[k].price*cart[k].qty;return t}
function count(){var c=0;for(var k in cart)c+=cart[k].qty;return c}
function render(){var l=document.getElementById('__cartlist');var keys=Object.keys(cart);if(!keys.length){l.innerHTML='<p class="cempty">Your cart is empty.</p>'}else{l.innerHTML=keys.map(function(k){var it=cart[k];return '<div class="citem"><span class="cn">'+it.name+'</span><span class="cq"><button data-dec="'+k+'">−</button><span>'+it.qty+'</span><button data-inc="'+k+'">+</button></span><span>'+money(it.price*it.qty)+'</span></div>'}).join('')}
document.getElementById('__carttot').textContent=money(total());document.getElementById('__cartn').textContent=count()}
function open(){document.getElementById('__cartov').hidden=false}function close(){document.getElementById('__cartov').hidden=true}
document.addEventListener('click',function(e){var t=e.target;
var add=t.closest?t.closest('[data-add]'):null;if(add){var id=add.getAttribute('data-add');if(!cart[id])cart[id]={name:add.getAttribute('data-name'),price:+add.getAttribute('data-price'),qty:0};cart[id].qty++;render();open();return}
if(t.closest&&t.closest('#__cartbtn')){render();open();return}
if(t.id==='__cartx'||t.id==='__cartov'){close();return}
var inc=t.getAttribute&&t.getAttribute('data-inc');if(inc){cart[inc].qty++;render();return}
var dec=t.getAttribute&&t.getAttribute('data-dec');if(dec){cart[dec].qty--;if(cart[dec].qty<=0)delete cart[dec];render();return}
if(t.id==='__cartco'){if(!count())return;var lines=Object.keys(cart).map(function(k){return cart[k].qty+' x '+cart[k].name+' ('+money(cart[k].price*cart[k].qty)+')'}).join('%0D%0A');var body='Order:%0D%0A'+lines+'%0D%0A%0D%0ATotal: '+money(total());if(MAIL){location.href='mailto:'+MAIL+'?subject=New order&body='+body}else{alert('Order summary:\\n\\n'+decodeURIComponent(lines.replace(/%0D%0A/g,'\\n'))+'\\n\\nTotal: '+money(total())+'\\n\\nSet a checkout email in the shop settings to receive orders.')}return}
});render();})();</script>`
}

// ---- base site CSS (uses Brand Kit variables) ------------------------------
const BASE_SITE_CSS = `
*{box-sizing:border-box}html{-webkit-text-size-adjust:100%}img,video{max-width:100%;height:auto;display:block}
body{margin:0;font-family:var(--brand-body,system-ui);color:var(--brand-ink,#111);background:var(--brand-bg,#fff);line-height:1.55;overflow-x:hidden}
.b{padding:clamp(40px,7vw,64px) clamp(16px,4vw,24px);width:100%;max-width:1080px;margin:0 auto}
h1,h2,h3{font-family:var(--brand-heading,inherit);margin:0 0 12px;overflow-wrap:break-word}
h1{font-size:clamp(30px,5.4vw,44px);line-height:1.08}h2{font-size:clamp(24px,3.6vw,30px);text-align:center}
.btn{display:inline-block;background:var(--brand-accent,#3355ff);color:#fff;text-decoration:none;padding:12px 22px;border-radius:10px;font-weight:700;border:none;cursor:pointer;max-width:100%}
.b-hero{text-align:center;padding:clamp(64px,11vw,96px) clamp(16px,4vw,24px);background:linear-gradient(135deg,var(--brand-primary,#5b6)15%,var(--brand-accent,#39c));color:#fff;max-width:none}
.b-hero h1{color:#fff}.b-hero p{font-size:clamp(16px,2.2vw,19px);opacity:.92;max-width:620px;margin:0 auto 24px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:clamp(12px,2vw,18px);margin-top:24px}
.card{background:#fff;border:1px solid #0001;border-radius:14px;padding:clamp(16px,2.5vw,22px);box-shadow:0 6px 18px #0000000d;min-width:0}
.card h3{color:var(--brand-primary,#333)}
.tier{background:#fff;border:1px solid #0001;border-radius:14px;padding:clamp(18px,2.5vw,24px);text-align:center;box-shadow:0 6px 18px #0000000d;min-width:0}
.tier.feat{border:2px solid var(--brand-accent,#39c);transform:scale(1.03)}
.tier .price{font-size:clamp(28px,4vw,34px);font-weight:800;color:var(--brand-primary,#333);margin:6px 0 12px}
.tier ul{list-style:none;padding:0;margin:0 0 18px;text-align:left}.tier li{padding:6px 0;border-bottom:1px solid #0000000d}
.b-cta{text-align:center;background:var(--brand-primary,#222);color:#fff;border-radius:0;max-width:none}
.b-cta h2,.b-cta p{color:#fff}
.b-form .formx{display:flex;flex-direction:column;gap:10px;max-width:460px;margin:18px auto 0}
.b-form input,.b-form textarea{padding:12px;border:1px solid #0002;border-radius:10px;font:inherit;width:100%}
.b-text{max-width:720px;text-align:center}
.b-gallery .ph{aspect-ratio:1;border-radius:12px;background:linear-gradient(135deg,var(--brand-primary,#889),var(--brand-accent,#39c));opacity:calc(.55 + var(--i)*.06)}
.b-image,.b-video{text-align:center}
.b-image img,.b-video video{width:100%;max-width:100%;border-radius:14px;box-shadow:0 8px 30px #0000001a}
.b-image .ph,.b-video .ph{aspect-ratio:16/9;border-radius:14px;background:linear-gradient(135deg,var(--brand-primary,#889),var(--brand-accent,#39c));display:flex;align-items:center;justify-content:center;color:#fff;font-size:34px}
.b-image .cap,.b-video .cap{margin-top:10px;color:#0009;font-size:15px}
.b-footer{display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap;border-top:1px solid #0001;color:#0009}
.b-footer nav{display:flex;gap:16px;flex-wrap:wrap}.b-footer a{color:inherit;text-decoration:none}
.b-store .store-sub{text-align:center;color:#0008;margin:-4px auto 8px;max-width:560px}
.prod-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:clamp(12px,2vw,20px);margin-top:24px}
.prod{background:#fff;border:1px solid #0001;border-radius:14px;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 6px 18px #0000000d;min-width:0}
.prod img,.prod .ph{width:100%;aspect-ratio:1;object-fit:cover;background:linear-gradient(135deg,var(--brand-primary,#889),var(--brand-accent,#39c))}
.prod-b{padding:14px 16px 16px;display:flex;flex-direction:column;gap:6px;flex:1}
.prod-b h3{margin:0;font-size:18px}.prod-b p{margin:0;color:#0008;font-size:14px;flex:1}
.prod-f{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:6px}
.prod-price{font-weight:800;font-size:19px;color:var(--brand-primary,#222)}
.prod-add{padding:9px 14px;font-size:14px;border-radius:9px}
.store-empty{grid-column:1/-1;text-align:center;color:#0007;padding:30px 0}
/* multi-page nav header + page wrappers */
.site-nav{position:sticky;top:0;z-index:50;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px clamp(16px,4vw,32px);background:color-mix(in srgb,var(--brand-bg,#fff) 88%,transparent);backdrop-filter:blur(8px);border-bottom:1px solid #0000000f;flex-wrap:wrap}
.nav-brand{font-family:var(--brand-heading,inherit);font-weight:800;font-size:20px;color:var(--brand-ink,#111);text-decoration:none}
.nav-links{display:flex;gap:clamp(12px,2vw,24px);flex-wrap:wrap}
.nav-links a{color:var(--brand-ink,#111);text-decoration:none;font-weight:600;font-size:15px;opacity:.82}
.nav-links a:hover,.nav-links a.on{opacity:1;color:var(--brand-accent,#2f6bff)}
.pg{display:block}
/* section design + colour themes (Design / Couleur tabs) */
.b.b-pad-sm{padding-top:32px;padding-bottom:32px}.b.b-pad-lg{padding-top:104px;padding-bottom:104px}
.b.b-al-left{text-align:left}.b.b-al-left h2{text-align:left}.b.b-al-center{text-align:center}.b.b-al-center h2{text-align:center}
.b.b-full{max-width:none}
.b.b-th-light{background:color-mix(in srgb,var(--brand-ink,#111) 4%,#fff)}
.b.b-th-dark{background:var(--brand-ink,#141414);color:#fff}.b-th-dark h1,.b-th-dark h2,.b-th-dark h3{color:#fff}.b-th-dark .card,.b-th-dark .tier,.b-th-dark .prod{background:#ffffff12;border-color:#ffffff22;color:#fff}
.b.b-th-accent{background:var(--brand-accent,#2f6bff);color:#fff}.b-th-accent h1,.b-th-accent h2,.b-th-accent h3{color:#fff}.b-th-accent .btn{background:#fff;color:var(--brand-ink,#111)}
@media(max-width:560px){.tier.feat{transform:none}.b-footer{justify-content:center;text-align:center}.nav-links{gap:12px;font-size:14px}}
`

// per-layout overrides · what makes each template's sections & type feel unique
const LAYOUT_CSS: Record<SiteLayout, string> = {
  centered: '',
  left: `.b-hero{text-align:left;padding-left:clamp(16px,4vw,24px)}.b-hero p{margin-left:0;margin-right:0}h2{text-align:left}.b{max-width:1120px}.grid{grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))}.tier{text-align:left}`,
  editorial: `.b{max-width:840px}h1{font-size:clamp(34px,6vw,54px);letter-spacing:-.02em;line-height:1.05}h2{font-size:clamp(26px,4vw,34px);text-align:left}.b-hero{background:none;color:var(--brand-ink);text-align:left;padding:clamp(56px,10vw,88px) clamp(16px,4vw,24px) 44px;border-bottom:1px solid #0001}.b-hero h1{color:var(--brand-ink)}.b-hero p{margin:0;max-width:62ch;opacity:.8}.b-hero .btn{margin-top:8px}.grid{grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))}.card,.tier{box-shadow:none;border:1px solid #0002}`,
  bold: `h1{font-size:clamp(42px,9vw,76px);font-weight:900;letter-spacing:-.03em;line-height:.96}h2{font-size:clamp(32px,6vw,46px)}.b-hero{padding:clamp(72px,15vw,128px) clamp(16px,4vw,24px)}.b-hero p{font-size:clamp(17px,2.6vw,22px)}.btn{border-radius:0;padding:16px 30px;text-transform:uppercase;letter-spacing:.06em;font-weight:800}.card,.tier{border-radius:0}.b-cta h2{font-size:clamp(34px,7vw,52px)}`,
}

/** The resolved heading/body font-family strings for a site (Google override → preset). */
export function siteFontFamilies(site: SiteDoc): { heading: string; body: string } {
  const f = fontSet(site.font)
  const heading = site.headingFont ? `"${site.headingFont}", ${f.heading}` : f.heading
  const body = site.bodyFont ? `"${site.bodyFont}", ${f.body}` : f.body
  return { heading, body }
}

/** Site CSS (no @import — the Google <link>/@import is emitted first in fullDoc). */
function siteVarsCss(site: SiteDoc): string {
  const fam = siteFontFamilies(site)
  const hw = site.headingWeight ? `h1,h2,h3{font-weight:${site.headingWeight}}` : ''
  const bs = site.baseSize ? `body{font-size:${site.baseSize}px}` : ''
  return `:root{--brand-heading:${fam.heading};--brand-body:${fam.body}}\n${BASE_SITE_CSS}\n${LAYOUT_CSS[site.layout ?? 'centered']}\n${hw}${bs}`
}

/** A complete standalone HTML document · used for the iframe AND the export.
 *  With { editable: true } each section becomes clickable (click-to-select in the
 *  builder); that mode is never used for the exported file. */
// Section-level design + colour classes (Design / Couleur tabs), stored under
// underscore-prefixed props so they never collide with content fields.
function designClasses(b: Block): string {
  const p = b.props as Record<string, unknown>
  const cls: string[] = []
  if (p._theme && p._theme !== 'default') cls.push(`b-th-${p._theme}`)
  if (p._pad && p._pad !== 'md') cls.push(`b-pad-${p._pad}`)
  if (p._align) cls.push(`b-al-${p._align}`)
  if (p._full) cls.push('b-full')
  return cls.join(' ')
}

/** A complete standalone HTML document · used for the iframe AND the export.
 *  Multi-page: renders a nav header + every page (only the active one visible) +
 *  a hash router so links work in preview and the exported file. With
 *  { editable } only the active page's sections are clickable (click-to-select). */
export function fullDoc(site: SiteDoc, kit: BrandKit, opts?: { editable?: boolean; activeSlug?: string }): string {
  const editable = !!opts?.editable
  const cur = currencySymbol(site.currency)
  const pages = sitePages(site)
  const home = homePage(site)
  const active = pages.find((p) => p.slug === opts?.activeSlug) ?? home
  // one section → HTML (currency into Store, design classes, data-b when editable)
  const render = (b: Block) => {
    const bb = b.type === 'store' ? { ...b, props: { ...b.props, cur } } : b
    const raw = editable ? blockHtmlTagged(bb) : blockHtml(bb)
    const dc = designClasses(bb)
    return dc ? raw.replace(/class="b /, `class="b ${dc} `) : raw
  }
  const navLinks = pages.filter((p) => p.nav).map((p) => `<a href="#/${p.slug}" data-nav="${p.slug}"${p.slug === active.slug ? ' class="on"' : ''}>${esc(p.title)}</a>`).join('')
  const nav = `<header class="site-nav"><a class="nav-brand" href="#/${home.slug}" data-nav="${home.slug}">${esc(site.name)}</a><nav class="nav-links">${navLinks}</nav></header>`
  const pageHtml = (p: SitePage, visible: boolean) => `<main class="pg" data-pg="${p.slug}"${visible ? '' : ' style="display:none"'}>${p.blocks.map(render).join('\n')}</main>`
  // edit mode renders only the active page (clickable); preview/export renders
  // every page + a router so navigation actually works.
  const body = editable
    ? pageHtml(active, true)
    : pages.map((p) => pageHtml(p, p.slug === active.slug)).join('\n')
  const router = editable ? '' : `<script>(function(){var P=[].slice.call(document.querySelectorAll('.pg'));function cur(){return location.hash.replace(/^#\\/?/,'')||${JSON.stringify(home.slug)}}function show(s){var any=false;P.forEach(function(p){var m=p.getAttribute('data-pg')===s;p.style.display=m?'':'none';if(m)any=true});if(!any&&P[0])P[0].style.display='';document.querySelectorAll('[data-nav]').forEach(function(a){a.classList.toggle('on',a.getAttribute('data-nav')===s)});window.scrollTo(0,0)}window.addEventListener('hashchange',function(){show(cur())});show(cur());})();</scr`+`ipt>`
  const href = googleFontsHref([site.headingFont ?? '', site.bodyFont ?? ''])
  const gimport = href ? `@import url('${href}');\n` : ''
  const editStyle = editable ? EDIT_CSS : ''
  const editScript = editable ? EDIT_JS : ''
  // the cart runtime ships in preview + export (not edit mode, where clicks select)
  const cart = !editable && hasStore(site) ? cartRuntime(site) : ''
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>${esc(site.name)}</title><style>${gimport}${kitCss(kit)}\n${siteVarsCss(site)}${editStyle}</style></head><body>${nav}${body}${router}${cart}${editScript}</body></html>`
}

// ---- inspector fields per block --------------------------------------------
export interface Field { path: string; label: string; kind: 'text' | 'area' | 'lines' }
export function fieldsFor(b: Block): Field[] {
  const t = (path: string, label: string, kind: Field['kind'] = 'text'): Field => ({ path, label, kind })
  switch (b.type) {
    case 'hero': case 'cta': return [t('title', 'Title'), t('subtitle', 'Subtitle', 'area'), t('cta', 'Button')]
    case 'text': return [t('heading', 'Title'), t('body', 'Text', 'area')]
    case 'form': return [t('title', 'Title'), t('subtitle', 'Subtitle', 'area'), t('button', 'Button')]
    case 'gallery': return [t('title', 'Title'), t('count', 'Number of images')]
    case 'store': return [t('title', 'Title'), t('subtitle', 'Subtitle', 'area')]
    case 'image': return [t('src', 'Image URL or data'), t('alt', 'Alt text'), t('caption', 'Caption')]
    case 'video': return [t('src', 'Video URL or data'), t('caption', 'Caption')]
    case 'footer': return [t('text', 'Text'), ...(((b.props.links as string[]) || []).map((_, i) => t(`links.${i}`, `Link ${i + 1}`)))]
    case 'features': return [t('title', 'Title'), ...(((b.props.items as unknown[]) || []).flatMap((_, i) => [t(`items.${i}.title`, `Highlight ${i + 1} · title`), t(`items.${i}.desc`, `Highlight ${i + 1} · text`, 'area')]))]
    case 'pricing': return [t('title', 'Title'), ...(((b.props.tiers as unknown[]) || []).flatMap((_, i) => [t(`tiers.${i}.name`, `Plan ${i + 1} · name`), t(`tiers.${i}.price`, `Plan ${i + 1} · price`), t(`tiers.${i}.features`, `Plan ${i + 1} · lines`, 'lines')]))]
    default: return []
  }
}

// ---- persistence -----------------------------------------------------------
const siteKey = (dojoId: string) => `site.${dojoId || 'default'}`
export async function loadSite(dojoId: string): Promise<SiteDoc | null> {
  return (await idbGet<SiteDoc>('projects', siteKey(dojoId))) ?? null
}
export async function saveSite(dojoId: string, site: SiteDoc): Promise<void> {
  await idbSet('projects', siteKey(dojoId), { ...site, updatedAt: Date.now() })
}

/** Brand Kit for a company, or a sensible default when none saved yet. */
export async function siteBrand(dojoId: string, name: string): Promise<BrandKit> {
  const k = await idbGet<BrandKit>('projects', `brand.${dojoId || 'default'}`)
  return k ?? defaultKit(name)
}
