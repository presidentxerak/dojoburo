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

export function researchProfile(desc: string): BrandProfile {
  const words = desc.toLowerCase().match(/[a-zà-ÿ]{3,}/g) ?? []
  const freq = new Map<string, number>()
  for (const w of words) if (!STOP.has(w)) freq.set(w, (freq.get(w) ?? 0) + 1)
  const keywords = [...freq.entries()].sort((a, b) => b[1] - a[1]).map((e) => e[0]).slice(0, 6)
  const tone = TONE_HINTS.find(([re]) => re.test(desc))?.[1] ?? 'Modern & confident'
  const audience = AUD_HINTS.find(([re]) => re.test(desc))?.[1] ?? 'A broad audience'
  const angle = keywords.length ? `Built around "${keywords.slice(0, 3).join(', ')}"` : 'A clear, memorable identity'
  return { keywords, tone, audience, angle }
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

/** Check real domain availability for a name via the server-side RDAP proxy. */
export async function checkDomains(name: string, tlds?: string[]): Promise<DomainResult[]> {
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

/** Guessed social handles for a name (display only). */
export function socialHandles(name: string): string[] {
  const h = name.toLowerCase().replace(/[^a-z0-9]/g, '')
  return [`@${h}`, `@${h}hq`, `@get${h}`]
}
