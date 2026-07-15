// Local brand naming + research · no AI needed. Derives a research profile from
// a one-line product description, then generates candidate names with a few
// naming strategies (suffix, prefix, portmanteau, invented, compound). Domain
// availability is checked for real via /api/domain (server-side RDAP).

const STOP = new Set(['the', 'a', 'an', 'and', 'or', 'for', 'to', 'of', 'in', 'on', 'with', 'that', 'this', 'is', 'are', 'app', 'platform', 'tool', 'service', 'company', 'business', 'startup', 'my', 'our', 'your', 'we', 'help', 'helps', 'make', 'makes', 'build', 'builds', 'people', 'users', 'customers', 'their', 'them'])

const SUFFIXES = ['ly', 'ify', 'io', 'hq', 'labs', 'flow', 'kit', 'hub', 'wave', 'base', 'stack', 'loop', 'yard', 'works', 'grid']
const PREFIXES = ['get', 'try', 'go', 'up', 'meta', 'neo', 'well', 'ever']
const VOWELS = 'aeiou'
const CONS = 'bcdfghjklmnprstvwz'

export interface BrandProfile {
  keywords: string[]
  tone: string
  audience: string
  angle: string
  // Shiverbrand-style enriched research analysis (derived from the description)
  targetAudience: string
  keyFeatures: string[]
  marketCategory: string
  competitiveLandscape: string
  differentiation: string
  emotionalAppeal: string
  growthPotential: string
  toneKeywords: string[]
  personality: string
}

const TONE_HINTS: [RegExp, string][] = [
  [/lux|premium|elegant|couture|boutique|fine/i, 'Elegant & premium'],
  [/fun|play|kids|game|social|community/i, 'Playful & friendly'],
  [/ai|data|dev|tech|cloud|api|engineer/i, 'Technical & precise'],
  [/eco|green|nature|organic|sustain|plant/i, 'Natural & calm'],
  [/finance|bank|invest|legal|insur|secur/i, 'Trustworthy & solid'],
  [/health|care|wellness|fit|medical/i, 'Caring & reassuring'],
]
const AUD_HINTS: [RegExp, string][] = [
  [/b2b|enterprise|team|agenc|business|saas/i, 'Businesses & teams'],
  [/freelanc|solo|creator|indie|maker/i, 'Creators & freelancers'],
  [/shop|ecommerce|store|retail|buyer|customer/i, 'Shoppers & buyers'],
  [/student|learn|course|teacher|school/i, 'Learners & educators'],
  [/develop|engineer|api|technical/i, 'Developers'],
]

// market category detection · maps a theme to "parent > child"
const CATEGORY_HINTS: [RegExp, string][] = [
  [/coffee|tea|drink|beverage|roast|brew|cafe|food|kitchen|recipe|meal|restaurant|cook|chef/i, 'consumer > food & beverage'],
  [/\bai\b|data|dev|tech|cloud|api|software|app|saas|code|digital|platform|automat/i, 'software > productivity & tools'],
  [/eco|green|nature|organic|sustain|plant|garden|climate|energy/i, 'sustainability > green living'],
  [/finance|bank|invest|money|pay|fintech|budget|wealth|credit|account/i, 'finance > money management'],
  [/health|care|wellness|fit|medical|therapy|mind|clinic/i, 'health > wellness & care'],
  [/shop|ecommerce|store|retail|fashion|market|boutique|brand/i, 'commerce > retail & shopping'],
  [/travel|trip|flight|hotel|tour|journey|adventure|explore/i, 'travel > trips & experiences'],
  [/learn|course|edu|school|study|teach|skill|knowledge/i, 'education > learning & skills'],
  [/home|house|room|space|cleaning|chore|household|domestic|logistics|manage/i, 'logistics > home management'],
  [/game|play|fun|social|community|creator|media|content/i, 'media > community & content'],
]
const FEATURE_BANKS: [RegExp, string[]][] = [
  [/home|house|space|cleaning|chore|household|domestic|manage/i, ['Task & chore management', 'Personalised living space', 'Reminders & alerts', 'Household expense tracking', 'Eco-friendly home tips']],
  [/\bai\b|data|dev|tech|cloud|software|app|saas|automat/i, ['One-click automation', 'Real-time sync', 'Team collaboration', 'Analytics dashboard', 'Integrations & API']],
  [/coffee|food|kitchen|recipe|meal|restaurant/i, ['Curated selection', 'Subscription delivery', 'Personalised recommendations', 'Order & budget management', 'Freshness guarantee']],
  [/finance|bank|invest|money|budget/i, ['Budgeting & tracking', 'Smart insights', 'Secure payments', 'Goal planning', 'Reports & forecasts']],
  [/health|wellness|fit|care/i, ['Personalised plans', 'Progress tracking', 'Reminders & habits', 'Expert guidance', 'Community support']],
  [/shop|store|retail|fashion/i, ['Product discovery', 'Personalised store', 'Secure checkout', 'Loyalty & offers', 'Fast delivery']],
]
const GENERIC_FEATURES = ['Simple, intuitive interface', 'Personalised experience', 'Fast setup', 'Works everywhere', 'Secure by design']

const PERSONALITY_HINTS: [RegExp, string][] = [
  [/lux|premium|elegant|fine/i, 'refined and aspirational, like a trusted advisor with impeccable taste'],
  [/fun|play|game|social|community/i, 'warm and welcoming, playful yet dependable — a friend who makes things easier'],
  [/eco|green|nature|organic|sustain/i, 'calm, honest and grounded, with quiet confidence and care for the world'],
  [/finance|bank|secur|invest/i, 'solid and reassuring, precise and transparent — a partner you can rely on'],
  [/home|house|space|care|wellness|health/i, 'warm and welcoming, offering a sense of safety and confidence, while being innovative and attentive to people’s needs'],
]

export function researchProfile(desc: string): BrandProfile {
  const src = (desc || '').trim()
  const words = src.toLowerCase().match(/[a-zà-ÿ]{3,}/g) ?? []
  const freq = new Map<string, number>()
  for (const w of words) if (!STOP.has(w)) freq.set(w, (freq.get(w) ?? 0) + 1)
  const keywords = [...freq.entries()].sort((a, b) => b[1] - a[1]).map((e) => e[0]).slice(0, 6)
  const tone = TONE_HINTS.find(([re]) => re.test(src))?.[1] ?? 'Modern & confident'
  const audience = AUD_HINTS.find(([re]) => re.test(src))?.[1] ?? 'A broad audience'
  const angle = keywords.length ? `Built around "${keywords.slice(0, 3).join(', ')}"` : 'A clear, memorable identity'
  const topic = keywords[0] || 'this space'
  const marketCategory = CATEGORY_HINTS.find(([re]) => re.test(src))?.[1] ?? 'general > products & services'
  const feats = FEATURE_BANKS.find(([re]) => re.test(src))?.[1] ?? GENERIC_FEATURES
  const keyFeatures = feats.slice(0, 5)
  const targetAudience = `People looking to improve their ${topic} — especially ${audience.toLowerCase()} who value a simpler, more personalised experience.`
  const competitiveLandscape = `The ${topic} market keeps evolving, with new apps and services appearing regularly, but few offer the holistic, customisable approach this product proposes.`
  const differentiation = `It stands out by adapting to each user’s specific needs, delivering a unique and efficient experience around ${keywords.slice(0, 2).join(' and ') || topic}.`
  const emotionalAppeal = `It answers the desire for comfort, simplicity and control people want over their ${topic}, helping them feel more secure and at ease.`
  const growthPotential = `Growth potential is strong: more and more people are seeking solutions to improve their quality of life and manage their time — a tailwind for ${topic}.`
  const personality = `The brand personality is ${PERSONALITY_HINTS.find(([re]) => re.test(src))?.[1] ?? 'confident and modern — approachable, clear and genuinely useful'}.`
  return {
    keywords, tone, audience, angle,
    targetAudience, keyFeatures, marketCategory, competitiveLandscape,
    differentiation, emotionalAppeal, growthPotential, toneKeywords: keywords.slice(0, 5), personality,
  }
}

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
const clip = (s: string, n = 5) => s.replace(/[^a-z]/g, '').slice(0, n)

function invented(seed: string, i: number): string {
  const base = clip(seed || 'brand', 3) || 'nova'
  const c = CONS[(seed.length + i * 3) % CONS.length]
  const v = VOWELS[(i * 2) % VOWELS.length]
  return cap(base + c + v)
}

/** Generate ~12 unique candidate names from the description + a variation seed. */
export function generateNames(desc: string, seed = 0): string[] {
  const { keywords } = researchProfile(desc)
  const k = keywords.length ? keywords : ['nova', 'flux', 'atlas', 'orbit']
  const out = new Set<string>()
  const pick = <T,>(arr: T[], i: number) => arr[(i + seed) % arr.length]

  for (let i = 0; i < k.length; i++) {
    const w = clip(k[i], 6)
    if (!w) continue
    out.add(cap(w))
    out.add(cap(w) + pick(SUFFIXES, i))
    out.add(cap(pick(PREFIXES, i) + w))
  }
  // portmanteaus of two keywords
  for (let i = 0; i < k.length - 1; i++) {
    const a = clip(k[i], 4), b = clip(k[i + 1], 4)
    if (a && b) out.add(cap(a + b.slice(1)))
  }
  // invented fallbacks so the list is always full
  for (let i = 0; out.size < 12; i++) out.add(invented(k[i % k.length] ?? 'nova', i))

  return [...out].filter((n) => n.length >= 3 && n.length <= 16).slice(0, 12)
}

// ---------------------------------------------------------------------------
// Shiverbrand-style keyword workshop: from a product description we generate a
// broad palette of on-theme keywords (~50). The user picks the ones that fit
// and adds their own, then we COMBINE the chosen words into brandable names and
// check each .com for real. This is the heart of the naming flow.
// ---------------------------------------------------------------------------

// themed vocabularies · evocative words per industry, matched against the desc
const THEME_BANKS: [RegExp, string[]][] = [
  [/coffee|tea|drink|beverage|roast|brew|cafe|espresso/i, ['brew', 'roast', 'bean', 'crema', 'grind', 'barista', 'aroma', 'blend', 'pour', 'kettle', 'steam', 'mocha', 'ritual', 'daily']],
  [/\bai\b|data|dev|tech|cloud|api|software|app|saas|code|digital|platform/i, ['pixel', 'byte', 'logic', 'neural', 'cloud', 'stack', 'vector', 'quantum', 'cipher', 'node', 'matrix', 'signal', 'core', 'forge', 'sync', 'proto', 'kernel', 'circuit']],
  [/eco|green|nature|organic|sustain|plant|garden|climate/i, ['leaf', 'fern', 'bloom', 'root', 'grove', 'terra', 'sprout', 'meadow', 'pure', 'earth', 'verde', 'wild', 'flora', 'canopy', 'season']],
  [/finance|bank|invest|money|pay|fintech|budget|wealth|credit/i, ['mint', 'vault', 'ledger', 'coin', 'capital', 'fund', 'asset', 'wealth', 'yield', 'abacus', 'tally', 'sterling', 'reserve', 'penny']],
  [/health|care|wellness|fit|medical|therapy|mind|clinic/i, ['vital', 'pulse', 'zen', 'calm', 'thrive', 'care', 'remedy', 'sana', 'vigor', 'balance', 'glow', 'restore', 'bloom', 'ease']],
  [/shop|ecommerce|store|retail|fashion|market|brand|boutique/i, ['cart', 'shelf', 'bazaar', 'market', 'vogue', 'trend', 'luxe', 'boutique', 'style', 'emporium', 'atelier', 'label', 'curate']],
  [/food|kitchen|recipe|meal|restaurant|cook|dining|chef/i, ['fork', 'spice', 'harvest', 'feast', 'savory', 'table', 'plate', 'crave', 'umami', 'pantry', 'graze', 'zest', 'morsel']],
  [/travel|trip|flight|hotel|tour|journey|adventure|explore/i, ['nomad', 'voyage', 'atlas', 'compass', 'wander', 'trek', 'horizon', 'journey', 'roam', 'summit', 'passage', 'venture']],
  [/game|play|fun|social|community|creator|media/i, ['play', 'quest', 'arcade', 'squad', 'spark', 'vibe', 'loop', 'rally', 'joy', 'buzz', 'pixel', 'stage']],
  [/learn|course|edu|school|study|teach|skill|knowledge/i, ['scholar', 'mentor', 'spark', 'lumen', 'sage', 'quill', 'campus', 'tutor', 'lexicon', 'insight', 'clarity', 'curio']],
]
// always-available brandable words so the palette is rich even for niche ideas
const UNIVERSAL = ['nova', 'flux', 'atlas', 'orbit', 'vertex', 'lumen', 'echo', 'zen', 'pulse', 'aura', 'spark', 'forge', 'haven', 'summit', 'crest', 'drift', 'ember', 'flow', 'halo', 'ion', 'loft', 'nook', 'oasis', 'peak', 'sage', 'tide', 'vibe', 'wave', 'zephyr', 'arc', 'beam', 'cove', 'dawn', 'fable', 'glide', 'north', 'prism', 'quartz', 'ridge', 'true']

/** A broad palette (~50) of on-theme keywords for the user to pick from. Seed
 *  words from the description come first, then matched industry vocab, then a
 *  universal brandable set · deduped, clipped and capped. */
export function generateKeywords(desc: string, limit = 50): string[] {
  const seed = researchProfile(desc).keywords
  const banks = THEME_BANKS.filter(([re]) => re.test(desc)).flatMap(([, w]) => w)
  const out: string[] = []
  const seen = new Set<string>()
  const add = (w: string) => {
    const k = w.toLowerCase().replace(/[^a-z]/g, '')
    if (k.length < 3 || k.length > 10 || seen.has(k)) return
    seen.add(k); out.push(k)
  }
  seed.forEach(add); banks.forEach(add); UNIVERSAL.forEach(add)
  return out.slice(0, limit)
}

/** Combine the chosen keywords into brandable name candidates: the word itself,
 *  affixed forms, and two-word blends/compounds. `seed` rerolls the batch. */
export function combineNames(words: string[], seed = 0): string[] {
  const base = words.map((w) => clip(w, 8)).filter((w) => w.length >= 3)
  if (base.length === 0) return generateNames('nova brand', seed)
  const out = new Set<string>()
  const pick = <T,>(arr: T[], i: number) => arr[(i + seed) % arr.length]

  base.forEach((w, i) => {
    out.add(cap(w))
    out.add(cap(w) + pick(SUFFIXES, i))
    out.add(cap(pick(PREFIXES, i + seed) + w))
  })
  // blends + compounds of every ordered pair of chosen words
  for (let i = 0; i < base.length; i++) {
    for (let j = 0; j < base.length; j++) {
      if (i === j) continue
      const a = clip(base[i], 4), b = clip(base[j], 4)
      if (!a || !b) continue
      out.add(cap(a + b))            // compound · CoffeeFlow
      out.add(cap(a + b.slice(1)))  // blend · Cofflow
      if (out.size > 60) break
    }
    if (out.size > 60) break
  }
  return [...out].filter((n) => n.length >= 3 && n.length <= 16).slice(0, 24)
}

export interface DomainResult { domain: string; tld: string; status: 'available' | 'taken' | 'unknown' }

/** The TLDs we check + price, in priority order (.com first). */
export const BRAND_TLDS = ['com', 'io', 'co', 'dev', 'app', 'org', 'net', 'ai', 'so', 'me', 'to']

/** Check real domain availability for a name via the server-side RDAP proxy. */
export async function checkDomains(name: string, tlds: string[] = BRAND_TLDS): Promise<DomainResult[]> {
  const q = new URLSearchParams({ name })
  if (tlds?.length) q.set('tlds', tlds.join(','))
  try {
    const res = await fetch(`/api/domain?${q.toString()}`, { headers: { accept: 'application/json' } })
    const j = await res.json()
    return Array.isArray(j?.results) ? j.results : []
  } catch {
    return []
  }
}

// ---------------------------------------------------------------------------
// Registrar price comparison · indicative public list prices (USD / yr, 2024).
// We surface the best price across 6 registrars and deep-link to their search.
// These are reference prices, not a live feed · the "Get" link opens the real
// registrar so the user confirms the current price there.
// ---------------------------------------------------------------------------
export const REGISTRARS = ['Dynadot', 'Porkbun', 'Cloudflare', 'Spaceship', 'Namecheap', 'Gandi'] as const
export type Registrar = typeof REGISTRARS[number]

// [Dynadot, Porkbun, Cloudflare, Spaceship, Namecheap, Gandi]
const TLD_PRICE_ROWS: Record<string, number[]> = {
  com: [8.99, 9.13, 9.15, 9.06, 9.98, 14.50],
  io: [32.00, 29.88, 36.00, 31.00, 32.98, 40.00],
  co: [10.99, 11.24, 11.40, 11.10, 12.98, 13.50],
  dev: [12.00, 10.88, 10.18, 11.00, 12.98, 15.00],
  app: [13.00, 12.28, 11.18, 12.00, 14.00, 16.00],
  org: [10.99, 9.75, 10.00, 9.48, 11.98, 15.00],
  net: [11.99, 11.06, 11.00, 10.48, 12.98, 17.00],
  ai: [65.00, 54.88, 62.00, 60.00, 68.00, 75.00],
  so: [27.00, 24.00, 26.00, 25.00, 28.00, 30.00],
  me: [9.50, 8.50, 9.50, 9.00, 10.00, 12.00],
  to: [30.00, 28.00, 30.00, 29.00, 32.00, 35.00],
}

export interface PriceQuote { registrar: Registrar; price: number }
export function registrarPrices(tld: string): PriceQuote[] {
  const row = TLD_PRICE_ROWS[tld]
  if (!row) return []
  return REGISTRARS.map((registrar, i) => ({ registrar, price: row[i] })).sort((a, b) => a.price - b.price)
}
export function bestPrice(tld: string): PriceQuote | null {
  const p = registrarPrices(tld)
  return p.length ? p[0] : null
}
/** Deep link to a registrar's search/checkout for a specific domain. */
export function registrarUrl(registrar: Registrar, domain: string): string {
  const d = encodeURIComponent(domain)
  switch (registrar) {
    case 'Dynadot': return `https://www.dynadot.com/domain/search?domain=${d}`
    case 'Porkbun': return `https://porkbun.com/checkout/search?q=${d}`
    case 'Cloudflare': return `https://www.cloudflare.com/products/registrar/`
    case 'Spaceship': return `https://www.spaceship.com/domain-search/?query=${d}`
    case 'Namecheap': return `https://www.namecheap.com/domains/registration/results/?domain=${d}`
    case 'Gandi': return `https://shop.gandi.net/en/domain/suggest?search=${d}`
    default: return `https://www.google.com/search?q=register+${d}`
  }
}

export interface SocialProfile { platform: string; handle: string; url: string }
/** Suggested social profiles for a name (display + deep link · not live-checked). */
export function socialProfiles(name: string): SocialProfile[] {
  const h = name.toLowerCase().replace(/[^a-z0-9]/g, '')
  return [
    { platform: 'X (Twitter)', handle: `@${h}`, url: `https://x.com/${h}` },
    { platform: 'Instagram', handle: `@${h}`, url: `https://instagram.com/${h}` },
    { platform: 'TikTok', handle: `@${h}`, url: `https://tiktok.com/@${h}` },
    { platform: 'Facebook', handle: `/${h}`, url: `https://facebook.com/${h}` },
  ]
}
/** Guessed social handles for a name (compact display). */
export function socialHandles(name: string): string[] {
  const h = name.toLowerCase().replace(/[^a-z0-9]/g, '')
  return [`@${h}`, `@${h}hq`, `@get${h}`]
}
