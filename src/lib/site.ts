// Website engine · 100% local. A site is an ordered list of section blocks,
// each rendered to semantic HTML that references the Brand Kit's CSS variables.
// The same blockHtml() feeds both the live iframe preview and the exported
// standalone .html file · so what you see is exactly what you export. No server.
import { idbGet, idbSet } from './idb'
import { type BrandKit, defaultKit, kitCss } from './brand'

export type BlockType = 'hero' | 'features' | 'pricing' | 'cta' | 'form' | 'text' | 'gallery' | 'image' | 'video' | 'footer'
export interface Block { id: string; type: BlockType; props: Record<string, unknown> }
export type SiteFont = 'sans' | 'serif' | 'mono' | 'grotesk' | 'editorial' | 'rounded'
export type SiteLayout = 'centered' | 'left' | 'editorial' | 'bold'
export interface SiteDoc {
  name: string; blocks: Block[]; updatedAt: number; templateId?: string
  font?: SiteFont; layout?: SiteLayout
  /** optional Google Fonts (override the preset pairing) + type controls */
  headingFont?: string; bodyFont?: string; headingWeight?: number; baseSize?: number
}

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
  form: 'Form', text: 'Text', gallery: 'Gallery', image: 'Image', video: 'Video', footer: 'Footer',
}
export const BLOCK_ORDER: BlockType[] = ['hero', 'features', 'pricing', 'cta', 'form', 'text', 'gallery', 'image', 'video', 'footer']

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
    footer: { text: `© ${name}`, links: ['Home', 'Pricing', 'Contact'] },
  }
  return { id: uid(), type, props: P[type] }
}

/** The AI first version (generated locally, instantly) from the company name. */
export function generateSite(name: string): SiteDoc {
  const order: BlockType[] = ['hero', 'features', 'pricing', 'cta', 'footer']
  return { name, blocks: order.map((t) => makeBlock(t, name)), font: 'sans', layout: 'centered', updatedAt: Date.now() }
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
  { id: 'lumen', name: 'Lumen', category: 'Business', blurb: 'Clean SaaS landing · features, pricing, sign-up.', accent: '#2f6bff', bg: '#ffffff', ink: '#0e1220', vibe: 'sans', font: 'sans', layout: 'centered', blocks: ['hero', 'features', 'pricing', 'cta', 'form', 'footer'] },
  { id: 'ledger', name: 'Ledger', category: 'Business', blurb: 'Trusted, editorial look for consulting & finance.', accent: '#1f3a8a', bg: '#f6f5f1', ink: '#161a22', vibe: 'serif', font: 'editorial', layout: 'editorial', blocks: ['hero', 'features', 'pricing', 'cta', 'footer'] },
  { id: 'mercato', name: 'Mercato', category: 'Store', blurb: 'Warm online store · products, offers, checkout CTA.', accent: '#e0622e', bg: '#fff8f2', ink: '#2a1a12', vibe: 'sans', font: 'grotesk', layout: 'left', blocks: ['hero', 'gallery', 'features', 'pricing', 'cta', 'footer'] },
  { id: 'bloom', name: 'Bloom', category: 'Store', blurb: 'Boutique shop with a soft, floral feel.', accent: '#c65b86', bg: '#fdf3f6', ink: '#2c1622', vibe: 'serif', font: 'serif', layout: 'centered', blocks: ['hero', 'features', 'gallery', 'form', 'footer'] },
  { id: 'aperture', name: 'Aperture', category: 'Portfolio', blurb: 'Dark, image-forward portfolio for creatives.', accent: '#c9a24b', bg: '#0f1012', ink: '#f4f2ec', vibe: 'serif', font: 'editorial', layout: 'bold', blocks: ['hero', 'gallery', 'text', 'footer'] },
  { id: 'grid', name: 'Grid', category: 'Portfolio', blurb: 'Minimal black-and-white photography grid.', accent: '#111111', bg: '#ffffff', ink: '#111111', vibe: 'mono', font: 'mono', layout: 'left', blocks: ['hero', 'gallery', 'text', 'footer'] },
  { id: 'saveur', name: 'Saveur', category: 'Restaurant', blurb: 'Cream & serif · menu, gallery, reservations.', accent: '#7a5b2e', bg: '#faf5ea', ink: '#2b2114', vibe: 'serif', font: 'serif', layout: 'editorial', blocks: ['hero', 'features', 'gallery', 'form', 'footer'] },
  { id: 'nord', name: 'Studio Nord', category: 'Agency', blurb: 'Bold, minimal agency with a mono accent.', accent: '#16a085', bg: '#101314', ink: '#eef2f1', vibe: 'mono', font: 'grotesk', layout: 'bold', blocks: ['hero', 'features', 'text', 'cta', 'footer'] },
  { id: 'persona', name: 'Persona', category: 'Personal', blurb: 'Friendly personal site or link-in-bio.', accent: '#7b5cff', bg: '#f7f5ff', ink: '#241b3c', vibe: 'sans', font: 'rounded', layout: 'centered', blocks: ['hero', 'text', 'gallery', 'footer'] },
  { id: 'dispatch', name: 'Dispatch', category: 'Blog', blurb: 'Editorial blog / newsletter, serif headlines.', accent: '#b0322b', bg: '#fbfaf7', ink: '#1a1712', vibe: 'serif', font: 'serif', layout: 'editorial', blocks: ['hero', 'text', 'gallery', 'footer'] },
  { id: 'assembly', name: 'Assembly', category: 'Events', blurb: 'High-contrast event page · schedule + RSVP.', accent: '#ffd23b', bg: '#0c0c0f', ink: '#f6f6f4', vibe: 'sans', font: 'grotesk', layout: 'bold', blocks: ['hero', 'features', 'cta', 'form', 'footer'] },
  { id: 'fresh', name: 'Fresh', category: 'Business', blurb: 'Energetic wellness / fitness landing.', accent: '#1fa563', bg: '#f2fbf5', ink: '#12271c', vibe: 'sans', font: 'rounded', layout: 'left', blocks: ['hero', 'features', 'cta', 'form', 'footer'] },
]

export function generateFromTemplate(name: string, templateId: string): SiteDoc {
  const tpl = SITE_TEMPLATES.find((t) => t.id === templateId) ?? SITE_TEMPLATES[0]
  return { name, templateId: tpl.id, blocks: tpl.blocks.map((t) => makeBlock(t, name)), font: tpl.font, layout: tpl.layout, updatedAt: Date.now() }
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
function send(id){try{parent.postMessage({__ds:'select',id:id},'*')}catch(e){}}
document.addEventListener('click',function(e){var t=e.target;var el=t&&t.closest?t.closest('[data-b]'):null;if(!el)return;e.preventDefault();e.stopPropagation();send(el.getAttribute('data-b'))},true);
window.addEventListener('message',function(e){var d=e.data||{};if(d.__ds!=='sel')return;var prev=document.querySelector('[data-b].__sel');if(prev)prev.classList.remove('__sel');if(!d.id)return;var el=document.querySelector('[data-b="'+d.id+'"]');if(!el)return;el.classList.add('__sel');if(d.scroll)el.scrollIntoView({behavior:'smooth',block:'center'})});
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
    case 'footer': {
      const links = (p.links as string[]) || []
      return `<footer class="b b-footer"><nav>${links.map((l) => `<a href="#">${esc(l)}</a>`).join('')}</nav><span>${esc(p.text)}</span></footer>`
    }
    default:
      return ''
  }
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
@media(max-width:560px){.tier.feat{transform:none}.b-footer{justify-content:center;text-align:center}}
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
export function fullDoc(site: SiteDoc, kit: BrandKit, opts?: { editable?: boolean }): string {
  const editable = !!opts?.editable
  const body = site.blocks.map(editable ? blockHtmlTagged : blockHtml).join('\n')
  const href = googleFontsHref([site.headingFont ?? '', site.bodyFont ?? ''])
  const gimport = href ? `@import url('${href}');\n` : ''
  const editStyle = editable ? EDIT_CSS : ''
  const editScript = editable ? EDIT_JS : ''
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>${esc(site.name)}</title><style>${gimport}${kitCss(kit)}\n${siteVarsCss(site)}${editStyle}</style></head><body>${body}${editScript}</body></html>`
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
