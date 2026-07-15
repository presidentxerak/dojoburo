// SEO & growth engine · 100% local, deterministic, zero server. A Semrush-style
// analytics layer for the website the dojo actually built.
//
// The SITE AUDIT and on-page keyword extraction are computed for real from the
// SiteDoc (headings, meta, content, links, images) — so they respond to what
// the founder builds. Traffic / rankings / backlinks / competitor figures are
// SIMULATED, but seeded from the domain so they are stable and internally
// consistent (more content + a healthier audit → stronger numbers). No network.
import type { SiteDoc, Block } from './site'
import type { BrandKit } from './brand'

// ---- seeded RNG (stable per string) ----------------------------------------
function xmur3(str: string): () => number {
  let h = 1779033703 ^ str.length
  for (let i = 0; i < str.length; i++) { h = Math.imul(h ^ str.charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19) }
  return () => { h = Math.imul(h ^ (h >>> 16), 2246822507); h = Math.imul(h ^ (h >>> 13), 3266489909); h ^= h >>> 16; return h >>> 0 }
}
function mulberry32(a: number): () => number {
  return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296 }
}
/** A deterministic 0..1 generator seeded by an arbitrary string. */
function rng(seed: string): () => number { return mulberry32(xmur3(seed)()) }
const pick = <T,>(r: () => number, arr: T[]): T => arr[Math.floor(r() * arr.length) % arr.length]
const between = (r: () => number, lo: number, hi: number) => Math.round(lo + r() * (hi - lo))
/** A gently trending series (0..1 walk scaled), length n. */
function series(r: () => number, n: number, base: number, drift: number, jitter: number): number[] {
  const out: number[] = []
  let v = base
  for (let i = 0; i < n; i++) { v = Math.max(0, v + drift + (r() - 0.5) * jitter); out.push(Math.round(v)) }
  return out
}

export const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
export const slugify = (s: string) => s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '').slice(0, 24) || 'brand'
export const domainFor = (site: SiteDoc | null, brand: BrandKit | null, name: string) =>
  `${slugify(site?.name || brand?.name || name || 'brand')}.com`

// ---- content extraction from the real SiteDoc ------------------------------
const STOP = new Set(['the', 'a', 'an', 'and', 'or', 'for', 'to', 'of', 'in', 'on', 'with', 'that', 'this', 'is', 'are', 'your', 'you', 'our', 'we', 'get', 'us', 'it', 'at', 'by', 'as', 'be', 'from', 'all', 'more', 'ready', 'today', 'here', 'join', 'choose', 'start', 'up'])

interface SiteContent {
  h1: string[]; h2: string[]; h3: string[]
  words: number; text: string
  hasForm: boolean; hasCta: boolean; hasPricing: boolean; hasFooter: boolean
  images: number; imagesNoAlt: number
  internalLinks: number; buttons: string[]
  blocks: number
}
function textOf(v: unknown): string { return typeof v === 'string' ? v : '' }
function extract(site: SiteDoc): SiteContent {
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

  // Structure · headings
  if (c.h1.length === 0) add('error', 'Structure', 'no-h1', 'Missing an H1 heading', 'Every page needs exactly one H1. Add a hero section with a clear headline.')
  else if (c.h1.length > 1) add('error', 'Structure', 'multi-h1', 'Multiple H1 headings', `${c.h1.length} H1s found. Keep one primary H1; demote the rest to H2.`, c.h1.length)
  if (c.h2.length === 0) add('warning', 'Structure', 'no-h2', 'No subheadings (H2)', 'Break content into sections with H2 headings for readability and SEO.')

  // Content
  if (c.words < 200) add('error', 'Content', 'thin', 'Thin content', `Only ~${c.words} words. Pages with under 200 words rarely rank. Aim for 300+.`)
  else if (c.words < 400) add('warning', 'Content', 'low-content', 'Low word count', `~${c.words} words. Add depth — 500+ words tends to rank better for competitive terms.`)
  const dupBtn = c.buttons.filter((b, i) => c.buttons.indexOf(b) !== i).length
  if (dupBtn > 0) add('notice', 'Content', 'dup-cta', 'Repeated button labels', 'Several buttons share the same text. Vary CTAs to guide different actions.', dupBtn)

  // Meta (the SiteDoc has no meta description / OG tags yet)
  add('warning', 'Meta', 'no-meta-desc', 'Missing meta description', 'No meta description set. Add a 150–160 char summary to boost click-through from search.')
  const titleLen = (site.name || '').length
  if (titleLen === 0) add('error', 'Meta', 'no-title', 'Missing page title', 'The <title> tag is empty. Set a descriptive, keyword-rich title.')
  else if (titleLen > 60) add('notice', 'Meta', 'long-title', 'Title tag too long', `${titleLen} chars. Titles over 60 chars get truncated in search results.`)
  add('notice', 'Meta', 'no-og', 'No social share tags', 'Add Open Graph / Twitter tags so links look great when shared.')

  // Images
  if (c.imagesNoAlt > 0) add('warning', 'Content', 'img-alt', 'Images without alt text', `${c.imagesNoAlt} image${c.imagesNoAlt > 1 ? 's' : ''} missing alt attributes. Add descriptive alt text for SEO & accessibility.`, c.imagesNoAlt)

  // Links & conversion
  if (c.internalLinks < 3) add('warning', 'Links', 'few-links', 'Few internal links', 'Add navigation links so crawlers and users can move between pages.')
  if (!c.hasForm) add('notice', 'Links', 'no-form', 'No contact form', 'Add a contact or lead-capture form so visitors can reach you.')
  if (!c.hasCta && !c.hasPricing) add('warning', 'Content', 'no-cta', 'No clear call-to-action', 'Add a CTA or pricing section to convert visitors.')
  if (!c.hasFooter) add('notice', 'Structure', 'no-footer', 'No footer', 'Add a footer with links and copyright for trust and navigation.')

  // Performance / mobile — the generated site is light & responsive, so these pass
  add('notice', 'Performance', 'perf-note', 'Enable image compression', 'Serve images as WebP/AVIF and lazy-load below-the-fold media to speed up load.')

  const errors = issues.filter((i) => i.severity === 'error').length
  const warnings = issues.filter((i) => i.severity === 'warning').length
  const notices = issues.filter((i) => i.severity === 'notice').length
  const penalty = errors * 9 + warnings * 4 + notices * 1
  const score = Math.max(12, Math.min(100, 100 - penalty))

  const cats: AuditCategory[] = ['Content', 'Meta', 'Structure', 'Links', 'Performance', 'Mobile']
  const categories = cats.map((name) => {
    const rel = issues.filter((i) => i.category === name)
    const pen = rel.reduce((s, i) => s + (i.severity === 'error' ? 24 : i.severity === 'warning' ? 12 : 4), 0)
    return { name, score: Math.max(20, 100 - pen) }
  })

  const metrics = [
    { label: 'Pages crawled', value: '1', ok: true },
    { label: 'Words', value: String(c.words), ok: c.words >= 400 },
    { label: 'H1 tags', value: String(c.h1.length), ok: c.h1.length === 1 },
    { label: 'H2 tags', value: String(c.h2.length), ok: c.h2.length >= 1 },
    { label: 'Images w/o alt', value: String(c.imagesNoAlt), ok: c.imagesNoAlt === 0 },
    { label: 'Internal links', value: String(c.internalLinks), ok: c.internalLinks >= 3 },
    { label: 'Contact form', value: c.hasForm ? 'Yes' : 'No', ok: c.hasForm },
    { label: 'Sections', value: String(c.blocks), ok: c.blocks >= 4 },
  ]

  return { score, crawled: 1, errors, warnings, notices, issues: sortIssues(issues), categories, metrics }
}
const sevRank: Record<Severity, number> = { error: 0, warning: 1, notice: 2 }
function sortIssues(list: AuditIssue[]): AuditIssue[] { return [...list].sort((a, b) => sevRank[a.severity] - sevRank[b.severity]) }

// ---- keyword research (content-seeded + simulated metrics) -----------------
export type Intent = 'Informational' | 'Commercial' | 'Transactional' | 'Navigational'
export interface KeywordRow {
  keyword: string; volume: number; kd: number; cpc: number; intent: Intent; position: number; trend: number[]; serp: string[]
}
const MODIFIERS = ['', 'best', 'top', 'free', 'online', 'app', 'software', 'tool', 'pricing', 'review', 'alternative', 'for small business', 'near me', 'vs', 'how to use']
const SERP_FEATURES = ['Featured snippet', 'People also ask', 'Local pack', 'Image pack', 'Video', 'Sitelinks', 'Reviews', 'Top ads']
const intentFromMod = (m: string): Intent => /pricing|buy|free|app|software|tool/.test(m) ? 'Transactional' : /best|top|review|vs|alternative/.test(m) ? 'Commercial' : /how|near me/.test(m) ? 'Informational' : m === '' ? 'Navigational' : 'Informational'

/** The keyword universe for this site: real content seeds × modifiers, each
 *  with simulated but stable volume / difficulty / CPC / position. */
export function keywordUniverse(site: SiteDoc, domain: string, limit = 40): KeywordRow[] {
  const c = extract(site)
  const raw = (c.h1.join(' ') + ' ' + c.h2.join(' ') + ' ' + c.h3.join(' ') + ' ' + (site.name || '')).toLowerCase()
  const freq = new Map<string, number>()
  for (const w of raw.match(/[a-z][a-z0-9]{2,}/g) || []) if (!STOP.has(w)) freq.set(w, (freq.get(w) ?? 0) + 1)
  let seeds = [...freq.entries()].sort((a, b) => b[1] - a[1]).map((e) => e[0]).slice(0, 8)
  if (seeds.length < 3) seeds = [...seeds, slugify(site.name || 'brand'), 'software', 'app', 'platform'].slice(0, 5)

  const rows: KeywordRow[] = []
  const seen = new Set<string>()
  for (const seed of seeds) {
    for (const mod of MODIFIERS) {
      const kw = (mod ? (mod.startsWith('for') || mod === 'near me' || mod === 'vs' ? `${seed} ${mod}` : `${mod} ${seed}`) : seed).trim()
      if (seen.has(kw) || kw.length < 3) continue
      seen.add(kw)
      const r = rng(domain + '|' + kw)
      const short = kw.split(' ').length <= 1
      const volume = short ? between(r, 800, 22000) : between(r, 40, 3200)
      const kd = between(r, short ? 45 : 8, short ? 92 : 55)
      const cpc = Math.round((0.3 + r() * 11) * 100) / 100
      const ranks = r()
      const position = ranks < 0.35 ? 0 : between(r, 1, 78) // ~35% not ranking yet
      const trend = series(r, 12, volume, volume * 0.01 * (r() - 0.4), volume * 0.14)
      const serp = SERP_FEATURES.filter(() => r() > 0.68).slice(0, 3)
      rows.push({ keyword: kw, volume, kd, cpc, intent: intentFromMod(mod), position, trend, serp })
      if (rows.length >= limit) return rows.sort((a, b) => b.volume - a.volume)
    }
  }
  return rows.sort((a, b) => b.volume - a.volume)
}

// derive extra long-tail suggestions for the Keyword Magic tool from a query
export function expandKeyword(query: string, domain: string, limit = 24): KeywordRow[] {
  const q = query.trim().toLowerCase().replace(/[^a-z0-9 ]/g, '') || 'brand'
  const base = q.split(' ')[0]
  const rows: KeywordRow[] = []
  const seen = new Set<string>()
  for (const mod of [...MODIFIERS, 'guide', 'examples', 'templates', 'benefits', 'cost', 'demo', 'trial', 'download', 'login', 'features']) {
    const kw = (mod ? (['for', 'near me', 'vs', 'guide', 'examples', 'templates', 'benefits', 'cost', 'demo', 'trial', 'download', 'login', 'features'].some((s) => mod.startsWith(s)) ? `${q} ${mod}` : `${mod} ${q}`) : q).trim()
    if (seen.has(kw)) continue
    seen.add(kw)
    const r = rng(domain + '#' + kw)
    const short = kw.split(' ').length <= 1
    rows.push({
      keyword: kw, volume: short ? between(r, 500, 18000) : between(r, 30, 2600),
      kd: between(r, short ? 40 : 6, short ? 88 : 48), cpc: Math.round((0.3 + r() * 9) * 100) / 100,
      intent: intentFromMod(mod), position: r() < 0.4 ? 0 : between(r, 1, 80),
      trend: series(r, 12, 100, (r() - 0.4) * 3, 22), serp: SERP_FEATURES.filter(() => r() > 0.7).slice(0, 2),
    })
    if (rows.length >= limit) break
  }
  void base
  return rows.sort((a, b) => b.volume - a.volume)
}

// ---- position tracking ------------------------------------------------------
export interface TrackedKeyword extends KeywordRow { change: number; best: number; history: number[] }
export function trackedKeywords(universe: KeywordRow[], domain: string, count = 12): TrackedKeyword[] {
  return universe.filter((k) => k.position > 0).slice(0, count).map((k) => {
    const r = rng(domain + '~' + k.keyword)
    const history: number[] = []
    let pos = between(r, k.position, Math.min(100, k.position + 20))
    for (let i = 0; i < 12; i++) { pos = Math.max(1, Math.min(100, pos + Math.round((r() - 0.62) * 6))); history.push(pos) }
    history[history.length - 1] = k.position
    const change = history[history.length - 2] - k.position // + = improved
    return { ...k, change, best: Math.min(...history), history }
  })
}
/** Visibility index 0..100 from tracked positions (weighted by volume). */
export function visibilityIndex(tracked: TrackedKeyword[]): number {
  if (!tracked.length) return 0
  const ctr = (p: number) => (p <= 0 ? 0 : p <= 3 ? 0.3 : p <= 10 ? 0.12 : p <= 20 ? 0.04 : p <= 50 ? 0.01 : 0.002)
  const totVol = tracked.reduce((s, k) => s + k.volume, 0) || 1
  const got = tracked.reduce((s, k) => s + k.volume * ctr(k.position), 0)
  const max = tracked.reduce((s, k) => s + k.volume * 0.3, 0) || 1
  void totVol
  return Math.round((got / max) * 100)
}

// ---- domain overview --------------------------------------------------------
export interface Overview {
  authority: number; authTrend: number[]
  organicTraffic: number; trafficTrend: number[]
  organicKeywords: number; keywordTrend: number[]
  paidTraffic: number; backlinks: number; referringDomains: number
  topKeywords: KeywordRow[]; distribution: { label: string; pct: number }[]
}
const ctrByPos = (p: number) => (p <= 0 ? 0 : p <= 1 ? 0.28 : p <= 3 ? 0.15 : p <= 10 ? 0.06 : p <= 20 ? 0.02 : 0.005)
export function overview(universe: KeywordRow[], domain: string, auditScore: number): Overview {
  const r = rng(domain + ':overview')
  const ranking = universe.filter((k) => k.position > 0)
  const organicTraffic = Math.round(ranking.reduce((s, k) => s + k.volume * ctrByPos(k.position), 0))
  // authority scales with content health + ranking breadth
  const authority = Math.max(4, Math.min(74, Math.round(auditScore * 0.35 + ranking.length * 1.1 + r() * 8)))
  const backlinks = between(r, authority * 12, authority * 55)
  const referringDomains = Math.max(3, Math.round(backlinks / between(r, 6, 18)))
  const trafficTrend = series(r, 12, organicTraffic * 0.55, organicTraffic * 0.04, organicTraffic * 0.16)
  trafficTrend[11] = organicTraffic
  const keywordTrend = series(r, 12, ranking.length * 0.6, ranking.length * 0.05, ranking.length * 0.4)
  keywordTrend[11] = ranking.length
  const authTrend = series(r, 12, authority * 0.8, authority * 0.02, 3).map((v) => Math.min(90, v))
  authTrend[11] = authority
  // position distribution buckets
  const buckets = [
    { label: 'Top 3', pct: ranking.filter((k) => k.position <= 3).length },
    { label: '4–10', pct: ranking.filter((k) => k.position > 3 && k.position <= 10).length },
    { label: '11–20', pct: ranking.filter((k) => k.position > 10 && k.position <= 20).length },
    { label: '21–50', pct: ranking.filter((k) => k.position > 20 && k.position <= 50).length },
    { label: '51–100', pct: ranking.filter((k) => k.position > 50).length },
  ]
  const totB = buckets.reduce((s, b) => s + b.pct, 0) || 1
  const distribution = buckets.map((b) => ({ label: b.label, pct: Math.round((b.pct / totB) * 100) }))
  return {
    authority, authTrend, organicTraffic, trafficTrend,
    organicKeywords: ranking.length, keywordTrend,
    paidTraffic: between(r, 0, Math.round(organicTraffic * 0.2)),
    backlinks, referringDomains,
    topKeywords: ranking.slice(0, 8), distribution,
  }
}

// ---- backlinks --------------------------------------------------------------
export interface RefDomain { domain: string; authority: number; links: number; follow: boolean; first: string }
export interface BacklinkData {
  total: number; referringDomains: number; authorityTrend: number[]
  newLost: { month: string; gained: number; lost: number }[]
  topDomains: RefDomain[]; anchors: { text: string; pct: number }[]; follow: number; nofollow: number
}
const TLDS = ['com', 'io', 'co', 'net', 'org', 'dev', 'blog', 'news']
const DOMAIN_WORDS = ['tech', 'daily', 'hub', 'review', 'insider', 'trends', 'digital', 'market', 'startup', 'wire', 'post', 'labs', 'guide', 'zone', 'today', 'press', 'media', 'weekly', 'forge', 'signal']
export function backlinkData(ov: Overview, domain: string): BacklinkData {
  const r = rng(domain + ':links')
  const topDomains: RefDomain[] = Array.from({ length: 12 }).map((_, i) => {
    const rr = rng(domain + ':rd' + i)
    return {
      domain: `${pick(rr, DOMAIN_WORDS)}${pick(rr, DOMAIN_WORDS)}.${pick(rr, TLDS)}`,
      authority: between(rr, 18, 88), links: between(rr, 1, 60), follow: rr() > 0.3,
      first: `${pick(rr, MONTHS)} ${2024 + between(rr, 0, 2)}`,
    }
  }).sort((a, b) => b.authority - a.authority)
  const authorityTrend = series(r, 12, ov.authority * 0.75, ov.authority * 0.02, 2).map((v) => Math.min(90, v))
  authorityTrend[11] = ov.authority
  const newLost = MONTHS.slice(-6).map((m) => ({ month: m, gained: between(rng(domain + m + 'g'), 2, 40), lost: between(rng(domain + m + 'l'), 0, 14) }))
  const anchorsRaw = [
    { text: domain.replace('.com', ''), pct: between(r, 22, 40) },
    { text: 'click here', pct: between(r, 6, 14) },
    { text: 'website', pct: between(r, 6, 12) },
    { text: 'read more', pct: between(r, 4, 10) },
    { text: 'homepage', pct: between(r, 3, 9) },
  ]
  const at = anchorsRaw.reduce((s, a) => s + a.pct, 0)
  const anchors = [...anchorsRaw, { text: 'other', pct: Math.max(4, 100 - at) }]
  const nofollow = between(r, 15, 42)
  return { total: ov.backlinks, referringDomains: ov.referringDomains, authorityTrend, newLost, topDomains, anchors, follow: 100 - nofollow, nofollow }
}

// ---- traffic analytics ------------------------------------------------------
export interface TrafficData {
  visits: number; users: number; bounce: number; duration: number; pagesPerVisit: number
  sources: { name: string; value: number; color: string }[]
  sessionsTrend: number[]; devices: { name: string; pct: number }[]
  geo: { country: string; code: string; pct: number }[]
  topPages: { path: string; views: number; share: number }[]
}
const COUNTRIES: [string, string][] = [['United States', 'US'], ['United Kingdom', 'GB'], ['Germany', 'DE'], ['France', 'FR'], ['Canada', 'CA'], ['Australia', 'AU'], ['India', 'IN'], ['Spain', 'ES']]
export function trafficData(ov: Overview, site: SiteDoc, domain: string): TrafficData {
  const r = rng(domain + ':traffic')
  const organic = ov.organicTraffic
  const visits = Math.round(organic / 0.42) + between(r, 50, 400) // organic ≈ 42% of total
  const users = Math.round(visits * (0.7 + r() * 0.15))
  const srcRaw = [
    { name: 'Organic search', value: 42, color: '#1fa563' },
    { name: 'Direct', value: between(r, 16, 26), color: '#2f7fd6' },
    { name: 'Referral', value: between(r, 8, 18), color: '#a855f7' },
    { name: 'Social', value: between(r, 6, 16), color: '#e0459b' },
    { name: 'Paid search', value: between(r, 2, 10), color: '#d98c17' },
  ]
  const st = srcRaw.reduce((s, x) => s + x.value, 0)
  const sources = srcRaw.map((s) => ({ ...s, value: Math.round((s.value / st) * 100) }))
  const sessionsTrend = series(r, 30, visits / 30 * 0.8, visits / 30 * 0.01, visits / 30 * 0.5)
  const dv = between(r, 52, 66)
  const devices = [{ name: 'Mobile', pct: dv }, { name: 'Desktop', pct: 100 - dv - 4 }, { name: 'Tablet', pct: 4 }]
  const geoRaw = COUNTRIES.map(([country, code]) => ({ country, code, w: rng(domain + code)() }))
  const gt = geoRaw.reduce((s, g) => s + g.w, 0)
  const geo = geoRaw.map((g) => ({ country: g.country, code: g.code, pct: Math.round((g.w / gt) * 100) })).sort((a, b) => b.pct - a.pct).slice(0, 6)
  // top pages from the real site blocks
  const paths = ['/', ...site.blocks.filter((b) => ['pricing', 'features', 'form', 'gallery'].includes(b.type)).map((b) => `/${b.type === 'form' ? 'contact' : b.type}`)]
  const uniq = [...new Set(paths)].slice(0, 6)
  const pageW = uniq.map((p) => ({ path: p, w: p === '/' ? 1 : rng(domain + p)() * 0.5 }))
  const pt = pageW.reduce((s, p) => s + p.w, 0)
  const topPages = pageW.map((p) => ({ path: p.path, views: Math.round(visits * (p.w / pt)), share: Math.round((p.w / pt) * 100) }))
  return { visits, users, bounce: dv > 60 ? between(r, 44, 58) : between(r, 34, 48), duration: between(r, 62, 190), pagesPerVisit: Math.round((1.6 + r() * 2.4) * 10) / 10, sources, sessionsTrend, devices, geo, topPages }
}

// ---- competitors ------------------------------------------------------------
export interface Competitor { domain: string; authority: number; traffic: number; keywords: number; overlap: number; common: number }
export function competitors(ov: Overview, site: SiteDoc, domain: string): Competitor[] {
  const r = rng(domain + ':comp')
  const base = slugify(site.name || 'brand')
  const rivals = ['get' + base, base + 'hq', base + 'app', 'the' + base, base + 'io', base + 'pro']
  return rivals.slice(0, 5).map((name, i) => {
    const rr = rng(domain + ':c' + i)
    const authority = Math.max(6, Math.min(85, ov.authority + between(rr, -12, 28)))
    return {
      domain: `${name}.${pick(rr, TLDS)}`, authority,
      traffic: Math.round(ov.organicTraffic * (0.5 + rr() * 2.4)),
      keywords: Math.round(ov.organicKeywords * (0.6 + rr() * 2.2)),
      overlap: between(rr, 12, 68), common: between(rr, 3, Math.max(4, ov.organicKeywords)),
    }
  }).sort((a, b) => b.traffic - a.traffic)
  void r
}

// ---- AI visibility ----------------------------------------------------------
export interface AiVisibility {
  score: number; mentionRate: number; sentiment: number
  platforms: { name: string; mentions: number; share: number }[]
  prompts: { prompt: string; mentioned: boolean; position: number }[]
}
export function aiVisibility(ov: Overview, brandName: string, domain: string): AiVisibility {
  const r = rng(domain + ':ai')
  const strength = Math.min(1, ov.authority / 60)
  const platformsRaw = [
    { name: 'ChatGPT', w: 0.4 }, { name: 'Google AI Overviews', w: 0.28 },
    { name: 'Perplexity', w: 0.18 }, { name: 'Gemini', w: 0.14 },
  ]
  const platforms = platformsRaw.map((p, i) => ({ name: p.name, mentions: Math.round(strength * between(rng(domain + 'ai' + i), 4, 60)), share: Math.round(p.w * 100) }))
  const brand = brandName || 'your brand'
  const prompts = [
    `Best tools for ${brand.toLowerCase()}'s market`,
    `Alternatives to ${brand}`,
    `Top ${brand.toLowerCase()} competitors`,
    `Is ${brand} worth it?`,
    `Recommend software like ${brand}`,
    `${brand} pricing and reviews`,
  ].map((prompt, i) => { const rr = rng(domain + 'p' + i); const mentioned = rr() < 0.3 + strength * 0.5; return { prompt, mentioned, position: mentioned ? between(rr, 1, 6) : 0 } })
  const mentionRate = Math.round((prompts.filter((p) => p.mentioned).length / prompts.length) * 100)
  return { score: Math.round(strength * 100), mentionRate, sentiment: between(r, 20, 78), platforms, prompts }
}

// ---- top-level bundle -------------------------------------------------------
export interface SeoData {
  domain: string; audit: AuditReport; universe: KeywordRow[]; tracked: TrackedKeyword[]
  visibility: number; overview: Overview; backlinks: BacklinkData; traffic: TrafficData
  competitors: Competitor[]; ai: AiVisibility
}
export function buildSeoData(site: SiteDoc, brand: BrandKit | null, name: string): SeoData {
  const domain = domainFor(site, brand, name)
  const audit = siteAudit(site)
  const universe = keywordUniverse(site, domain)
  const tracked = trackedKeywords(universe, domain)
  const visibility = visibilityIndex(tracked)
  const ov = overview(universe, domain, audit.score)
  const bl = backlinkData(ov, domain)
  const traffic = trafficData(ov, site, domain)
  const comp = competitors(ov, site, domain)
  const ai = aiVisibility(ov, brand?.name || site.name || name, domain)
  return { domain, audit, universe, tracked, visibility, overview: ov, backlinks: bl, traffic, competitors: comp, ai }
}

// ---- formatting helpers -----------------------------------------------------
export const fmt = (n: number): string => n >= 1_000_000 ? `${(n / 1_000_000).toFixed(1)}M` : n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}K` : String(Math.round(n))
export const kdBand = (kd: number): { label: string; color: string } =>
  kd < 15 ? { label: 'Very easy', color: '#1fa563' } : kd < 30 ? { label: 'Easy', color: '#5cb85c' } :
  kd < 50 ? { label: 'Possible', color: '#d9a017' } : kd < 70 ? { label: 'Hard', color: '#e0722e' } : { label: 'Very hard', color: '#c0392b' }
