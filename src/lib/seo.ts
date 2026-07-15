// SEO & growth engine · 100% local, no fabricated metrics.
//
// Everything here is REAL: the site audit and the on-page analysis are computed
// directly from the website the dojo built (SiteDoc). We do NOT invent traffic,
// rankings, backlinks or competitor numbers — those need a connected data source
// (Google Search Console / Analytics), so the UI shows honest empty states until
// one is connected. The keyword tools and watchlists are real local tools whose
// data the founder owns. No network.
import type { SiteDoc, Block } from './site'
import { idbGet, idbSet } from './idb'

export const slugify = (s: string) => s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '').slice(0, 24) || 'brand'
export const domainFor = (name: string) => `${slugify(name)}.com`
export const fmt = (n: number): string => n >= 1_000_000 ? `${(n / 1_000_000).toFixed(1)}M` : n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}K` : String(Math.round(n))

// ---- content extraction from the real SiteDoc ------------------------------
const STOP = new Set(['the', 'a', 'an', 'and', 'or', 'for', 'to', 'of', 'in', 'on', 'with', 'that', 'this', 'is', 'are', 'your', 'you', 'our', 'we', 'get', 'us', 'it', 'at', 'by', 'as', 'be', 'from', 'all', 'more', 'ready', 'today', 'here', 'join', 'choose', 'start', 'up', 'every', 'their', 'them', 'can', 'will', 'has', 'have', 'about', 'what', 'who', 'how'])

export interface SiteContent {
  h1: string[]; h2: string[]; h3: string[]
  words: number; text: string
  hasForm: boolean; hasCta: boolean; hasPricing: boolean; hasFooter: boolean
  images: number; imagesNoAlt: number
  internalLinks: number; buttons: string[]
  blocks: number
}
const textOf = (v: unknown): string => (typeof v === 'string' ? v : '')
export function extract(site: SiteDoc): SiteContent {
  const c: SiteContent = { h1: [], h2: [], h3: [], words: 0, text: '', hasForm: false, hasCta: false, hasPricing: false, hasFooter: false, images: 0, imagesNoAlt: 0, internalLinks: 0, buttons: [], blocks: site.blocks.length }
  const push = (s: string) => { if (s) c.text += ' ' + s }
  for (const b of site.blocks as Block[]) {
    const p = b.props
    switch (b.type) {
      case 'hero': c.h1.push(textOf(p.title)); push(textOf(p.title)); push(textOf(p.subtitle)); if (p.cta) c.buttons.push(textOf(p.cta)); break
      case 'features': {
        c.h2.push(textOf(p.title)); push(textOf(p.title))
        for (const it of (p.items as { title: string; desc: string }[]) || []) { c.h3.push(textOf(it.title)); push(textOf(it.title)); push(textOf(it.desc)) }
        break
      }
      case 'pricing': {
        c.hasPricing = true; c.h2.push(textOf(p.title)); push(textOf(p.title))
        for (const t of (p.tiers as { name: string; features: string[] }[]) || []) { c.h3.push(textOf(t.name)); push(textOf(t.name)); (t.features || []).forEach(push) }
        break
      }
      case 'cta': c.hasCta = true; c.h2.push(textOf(p.title)); push(textOf(p.title)); push(textOf(p.subtitle)); if (p.cta) c.buttons.push(textOf(p.cta)); break
      case 'form': c.hasForm = true; c.h2.push(textOf(p.title)); push(textOf(p.title)); push(textOf(p.subtitle)); if (p.button) c.buttons.push(textOf(p.button)); break
      case 'text': c.h2.push(textOf(p.heading)); push(textOf(p.heading)); push(textOf(p.body)); break
      case 'gallery': { c.h2.push(textOf(p.title)); push(textOf(p.title)); const n = Math.max(1, Math.min(12, Number(p.count) || 6)); c.images += n; c.imagesNoAlt += n; break }
      case 'footer': { c.hasFooter = true; const links = (p.links as string[]) || []; c.internalLinks += links.length; push(textOf(p.text)); break }
    }
  }
  c.h1 = c.h1.filter(Boolean); c.h2 = c.h2.filter(Boolean); c.h3 = c.h3.filter(Boolean)
  c.words = (c.text.trim().match(/\S+/g) || []).length
  return c
}

// ---- site audit (genuinely computed) ---------------------------------------
export type Severity = 'error' | 'warning' | 'notice'
export type AuditCategory = 'Content' | 'Meta' | 'Structure' | 'Links' | 'Performance' | 'Mobile'
export interface AuditIssue { id: string; severity: Severity; title: string; detail: string; count: number; category: AuditCategory }
export interface AuditReport {
  score: number; crawled: number; errors: number; warnings: number; notices: number
  issues: AuditIssue[]
  categories: { name: AuditCategory; score: number }[]
  metrics: { label: string; value: string; ok: boolean }[]
}

export function siteAudit(site: SiteDoc): AuditReport {
  const c = extract(site)
  const issues: AuditIssue[] = []
  const add = (severity: Severity, category: AuditCategory, id: string, title: string, detail: string, count = 1) => issues.push({ id, severity, category, title, detail, count })

  if (c.h1.length === 0) add('error', 'Structure', 'no-h1', 'Missing an H1 heading', 'Every page needs exactly one H1. Add a hero section with a clear headline.')
  else if (c.h1.length > 1) add('error', 'Structure', 'multi-h1', 'Multiple H1 headings', `${c.h1.length} H1s found. Keep one primary H1; demote the rest to H2.`, c.h1.length)
  if (c.h2.length === 0) add('warning', 'Structure', 'no-h2', 'No subheadings (H2)', 'Break content into sections with H2 headings for readability and SEO.')

  if (c.words < 200) add('error', 'Content', 'thin', 'Thin content', `Only ~${c.words} words. Pages under 200 words rarely rank. Aim for 300+.`)
  else if (c.words < 400) add('warning', 'Content', 'low-content', 'Low word count', `~${c.words} words. Add depth — 500+ words tends to rank better for competitive terms.`)
  const dupBtn = c.buttons.filter((b, i) => c.buttons.indexOf(b) !== i).length
  if (dupBtn > 0) add('notice', 'Content', 'dup-cta', 'Repeated button labels', 'Several buttons share the same text. Vary CTAs to guide different actions.', dupBtn)

  add('warning', 'Meta', 'no-meta-desc', 'Missing meta description', 'No meta description set. Add a 150–160 char summary to boost click-through from search.')
  const titleLen = (site.name || '').length
  if (titleLen === 0) add('error', 'Meta', 'no-title', 'Missing page title', 'The <title> tag is empty. Set a descriptive, keyword-rich title.')
  else if (titleLen > 60) add('notice', 'Meta', 'long-title', 'Title tag too long', `${titleLen} chars. Titles over 60 chars get truncated in search results.`)
  add('notice', 'Meta', 'no-og', 'No social share tags', 'Add Open Graph / Twitter tags so links look great when shared.')

  if (c.imagesNoAlt > 0) add('warning', 'Content', 'img-alt', 'Images without alt text', `${c.imagesNoAlt} image${c.imagesNoAlt > 1 ? 's' : ''} missing alt attributes. Add descriptive alt text for SEO & accessibility.`, c.imagesNoAlt)

  if (c.internalLinks < 3) add('warning', 'Links', 'few-links', 'Few internal links', 'Add navigation links so crawlers and users can move between pages.')
  if (!c.hasForm) add('notice', 'Links', 'no-form', 'No contact form', 'Add a contact or lead-capture form so visitors can reach you.')
  if (!c.hasCta && !c.hasPricing) add('warning', 'Content', 'no-cta', 'No clear call-to-action', 'Add a CTA or pricing section to convert visitors.')
  if (!c.hasFooter) add('notice', 'Structure', 'no-footer', 'No footer', 'Add a footer with links and copyright for trust and navigation.')
  add('notice', 'Performance', 'perf-note', 'Enable image compression', 'Serve images as WebP/AVIF and lazy-load below-the-fold media to speed up load.')

  const errors = issues.filter((i) => i.severity === 'error').length
  const warnings = issues.filter((i) => i.severity === 'warning').length
  const notices = issues.filter((i) => i.severity === 'notice').length
  const score = Math.max(12, Math.min(100, 100 - (errors * 9 + warnings * 4 + notices * 1)))

  const cats: AuditCategory[] = ['Content', 'Meta', 'Structure', 'Links', 'Performance', 'Mobile']
  const categories = cats.map((name) => {
    const rel = issues.filter((i) => i.category === name)
    const pen = rel.reduce((s, i) => s + (i.severity === 'error' ? 24 : i.severity === 'warning' ? 12 : 4), 0)
    return { name, score: Math.max(20, 100 - pen) }
  })
  const metrics = [
    { label: 'Pages', value: '1', ok: true },
    { label: 'Words', value: String(c.words), ok: c.words >= 400 },
    { label: 'H1 tags', value: String(c.h1.length), ok: c.h1.length === 1 },
    { label: 'H2 tags', value: String(c.h2.length), ok: c.h2.length >= 1 },
    { label: 'Images w/o alt', value: String(c.imagesNoAlt), ok: c.imagesNoAlt === 0 },
    { label: 'Internal links', value: String(c.internalLinks), ok: c.internalLinks >= 3 },
    { label: 'Contact form', value: c.hasForm ? 'Yes' : 'No', ok: c.hasForm },
    { label: 'Sections', value: String(c.blocks), ok: c.blocks >= 4 },
  ]
  const sevRank: Record<Severity, number> = { error: 0, warning: 1, notice: 2 }
  return { score, crawled: 1, errors, warnings, notices, issues: [...issues].sort((a, b) => sevRank[a.severity] - sevRank[b.severity]), categories, metrics }
}

// ---- on-page analysis (real) -----------------------------------------------
export interface DensityWord { word: string; count: number; pct: number }
export interface OnPage {
  health: number; words: number; sections: number
  h1: number; h2: number; h3: number
  images: number; imagesNoAlt: number; links: number
  hasForm: boolean; hasCta: boolean
  density: DensityWord[]
  headings: { level: string; text: string }[]
}
export function onPageReport(site: SiteDoc, health: number): OnPage {
  const c = extract(site)
  const words = (c.text.toLowerCase().match(/[a-z][a-z0-9]{2,}/g) || []).filter((w) => !STOP.has(w))
  const freq = new Map<string, number>()
  for (const w of words) freq.set(w, (freq.get(w) ?? 0) + 1)
  const total = words.length || 1
  const density = [...freq.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12)
    .map(([word, count]) => ({ word, count, pct: Math.round((count / total) * 1000) / 10 }))
  const headings = [
    ...c.h1.map((text) => ({ level: 'H1', text })),
    ...c.h2.map((text) => ({ level: 'H2', text })),
    ...c.h3.slice(0, 8).map((text) => ({ level: 'H3', text })),
  ]
  return {
    health, words: c.words, sections: c.blocks, h1: c.h1.length, h2: c.h2.length, h3: c.h3.length,
    images: c.images, imagesNoAlt: c.imagesNoAlt, links: c.internalLinks, hasForm: c.hasForm, hasCta: c.hasCta,
    density, headings,
  }
}

// ---- keyword ideas (real text combinations from the site + a seed) ---------
const MODIFIERS = ['', 'best', 'top', 'free', 'online', 'app', 'software', 'tool', 'pricing', 'review', 'alternative', 'for small business', 'near me', 'how to', 'guide', 'examples', 'vs', 'benefits', 'services', 'company']
export interface KeywordIdea { keyword: string; onPage: boolean; words: number }
/** Generate real keyword phrase ideas from a seed (or the site's own words).
 *  No fabricated search volumes · we mark whether each idea already appears on
 *  the page so the founder can spot content gaps. */
export function keywordIdeas(seed: string, site: SiteDoc, limit = 30): KeywordIdea[] {
  const c = extract(site)
  const pageText = c.text.toLowerCase()
  const base = (seed.trim() || slugify(site.name || 'brand')).toLowerCase().replace(/[^a-z0-9 ]/g, '')
  const out: KeywordIdea[] = []
  const seen = new Set<string>()
  const addKw = (kw: string) => {
    kw = kw.trim().replace(/\s+/g, ' ')
    if (!kw || seen.has(kw)) return
    seen.add(kw)
    out.push({ keyword: kw, onPage: pageText.includes(kw), words: kw.split(' ').length })
  }
  for (const m of MODIFIERS) {
    const kw = m === '' ? base : ['for', 'near me', 'vs'].some((x) => m.startsWith(x)) ? `${base} ${m}` : `${m} ${base}`
    addKw(kw)
    if (out.length >= limit) break
  }
  return out
}

// ---- local watchlist + competitors (persisted, user-owned) -----------------
export interface Watched { keyword: string; addedAt: number }
const watchKey = (id: string) => `seo.watch.${id || 'default'}`
export async function loadWatch(dojoId: string): Promise<Watched[]> { return (await idbGet<Watched[]>('projects', watchKey(dojoId))) ?? [] }
export async function saveWatch(dojoId: string, list: Watched[]): Promise<void> { await idbSet('projects', watchKey(dojoId), list) }

export interface CompetitorEntry { domain: string; note: string; addedAt: number }
const compKey = (id: string) => `seo.comp.${id || 'default'}`
export async function loadCompetitors(dojoId: string): Promise<CompetitorEntry[]> { return (await idbGet<CompetitorEntry[]>('projects', compKey(dojoId))) ?? [] }
export async function saveCompetitors(dojoId: string, list: CompetitorEntry[]): Promise<void> { await idbSet('projects', compKey(dojoId), list) }
