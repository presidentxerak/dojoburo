// Campaign engine · 100% local. Generates a full Meta (Facebook + Instagram)
// campaign — objective, audience, personas and ad variants (copy + brand-styled
// visual) — from a product description, reusing the saved Brand Kit. Meta only
// (no Google Ads). Everything is templated in the browser; no server, no cost.
import { idbGet, idbSet } from './idb'
import { type BrandKit, defaultKit } from './brand'

export type Objective = 'acquisition' | 'vente' | 'notoriete' | 'leads'
export type AdFormat = 'feed' | 'story'
export type Angle = 'benefice' | 'urgence' | 'preuve' | 'question' | 'nouveaute'

export interface AdVariant { id: string; angle: Angle; headline: string; primary: string; description: string; cta: string }
export interface Persona { name: string; age: number; role: string; pain: string; desire: string }
export interface Audience { interests: string[]; age: string; geo: string; placements: string[] }
export interface Campaign { product: string; objective: Objective; audience: Audience; personas: Persona[]; ads: AdVariant[]; format: AdFormat; budget?: number; updatedAt: number }

const uid = () => `ad_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`
const esc = (s: unknown) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export const OBJECTIVES: { id: Objective; label: string }[] = [
  { id: 'acquisition', label: 'Acquisition' }, { id: 'vente', label: 'Sales' },
  { id: 'notoriete', label: 'Awareness' }, { id: 'leads', label: 'Leads' },
]
const CTA_BY_OBJ: Record<Objective, string> = { acquisition: 'Learn more', vente: 'Shop now', notoriete: 'Discover', leads: 'Sign up' }
export const ctaForObjective = (o: Objective): string => CTA_BY_OBJ[o]
export const ANGLES: { id: Angle; label: string }[] = [
  { id: 'benefice', label: 'Benefit' }, { id: 'urgence', label: 'Urgency' },
  { id: 'preuve', label: 'Social proof' }, { id: 'question', label: 'Question' }, { id: 'nouveaute', label: 'Novelty' },
]

// ---- local copy templates --------------------------------------------------
function copyFor(angle: Angle, product: string, obj: Objective): { headline: string; primary: string; description: string } {
  const p = product.trim() || 'our solution'
  const cap = p.charAt(0).toUpperCase() + p.slice(1)
  switch (angle) {
    case 'urgence': return {
      headline: `Limited-time offer on ${p}`,
      primary: `⏳ Don't miss out. ${cap} is available for a limited time — grab it before it's gone.`,
      description: 'Limited spots / stock',
    }
    case 'preuve': return {
      headline: `They chose ${p}`,
      primary: `⭐️⭐️⭐️⭐️⭐️ "Ever since ${p}, everything is easier." Join hundreds of happy customers.`,
      description: 'Rated 4.8/5 by our customers',
    }
    case 'question': return {
      headline: `Tired of struggling without ${p}?`,
      primary: `What if ${p} solved your problem in just a few minutes? See how, with no commitment.`,
      description: 'Try it for free',
    }
    case 'nouveaute': return {
      headline: `New: ${cap}`,
      primary: `🚀 We just launched ${p}. The easiest way to get results — finally available.`,
      description: 'Just released',
    }
    case 'benefice':
    default: return {
      headline: `${cap}, effortlessly`,
      primary: `Save time and get results with ${p}. Simple, fast, and built for you. ${obj === 'vente' ? 'Order in 2 clicks.' : 'Try it today.'}`,
      description: 'Simple and effective',
    }
  }
}

function stop(w: string) { return ['pour', 'avec', 'les', 'des', 'une', 'mon', 'ton', 'son', 'aux', 'qui', 'que', 'and', 'the'].includes(w.toLowerCase()) }

/** Generate a first campaign locally from a product description + objective. */
export function generateCampaign(product: string, objective: Objective): Campaign {
  const cta = CTA_BY_OBJ[objective]
  const ads: AdVariant[] = ANGLES.map((a) => {
    const c = copyFor(a.id, product, objective)
    return { id: uid(), angle: a.id, headline: c.headline, primary: c.primary, description: c.description, cta }
  })
  const words = product.toLowerCase().replace(/[^\p{L}\p{N} ]/gu, '').split(/\s+/).filter((w) => w.length > 3 && !stop(w)).slice(0, 4)
  const audience: Audience = {
    interests: [...new Set([...words, 'entrepreneurship', 'small business', 'productivity'])].slice(0, 8),
    age: '25–45',
    geo: 'France',
    placements: ['Facebook Feed', 'Instagram Feed', 'Stories', 'Reels'],
  }
  const personas: Persona[] = [
    { name: 'Camille', age: 32, role: 'Small business founder', pain: 'Not enough time to manage everything', desire: 'Simple tools that save time' },
    { name: 'Yanis', age: 27, role: 'Freelancer', pain: 'Hard to find clients', desire: 'More visibility without blowing the budget' },
    { name: 'Sophie', age: 41, role: 'Shop owner', pain: 'Online competition', desire: 'Build loyalty and sell more' },
  ]
  return { product, objective, audience, personas, ads, format: 'feed', updatedAt: Date.now() }
}

// ---- brand-styled ad visual (SVG) -----------------------------------------
function wrap(text: string, max: number): string[] {
  const words = text.split(/\s+/); const lines: string[] = []; let cur = ''
  for (const w of words) { if ((cur + ' ' + w).trim().length > max) { if (cur) lines.push(cur); cur = w } else cur = (cur + ' ' + w).trim() }
  if (cur) lines.push(cur)
  return lines.slice(0, 4)
}

export function adSvg(kit: BrandKit, ad: AdVariant, format: AdFormat): string {
  const [w, h] = format === 'story' ? [1080, 1920] : [1080, 1080]
  const p = kit.palette
  const heading = kit.name || 'Brand'
  const lines = wrap(ad.headline, format === 'story' ? 16 : 18)
  const fs = format === 'story' ? 92 : 84
  const startY = h / 2 - ((lines.length - 1) * fs) / 2
  const tspans = lines.map((l, i) => `<tspan x="${w / 2}" y="${startY + i * fs * 1.06}">${esc(l)}</tspan>`).join('')
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="100%" height="100%">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${p.primary}"/><stop offset="1" stop-color="${p.accent}"/></linearGradient></defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <text x="64" y="96" font-family="${kit.name ? 'Outfit, sans-serif' : 'sans-serif'}" font-weight="800" font-size="42" fill="#fff" opacity="0.95">${esc(heading)}</text>
  <text text-anchor="middle" font-family="Outfit, sans-serif" font-weight="800" font-size="${fs}" fill="#fff">${tspans}</text>
  <g transform="translate(${w / 2} ${h - 150})"><rect x="-190" y="-46" width="380" height="92" rx="46" fill="#fff"/><text text-anchor="middle" y="12" font-family="Outfit, sans-serif" font-weight="800" font-size="40" fill="${p.ink}">${esc(ad.cta)}</text></g>
</svg>`
}

/** All ad copy as a plain-text pack (for pasting into Meta Ads Manager). */
export function copyPack(c: Campaign): string {
  return c.ads.map((a, i) => `— Ad ${i + 1} (${a.angle}) —\nHeadline: ${a.headline}\nPrimary text: ${a.primary}\nDescription: ${a.description}\nCTA: ${a.cta}`).join('\n\n')
    + `\n\nAudience: ${c.audience.interests.join(', ')} · ${c.audience.age} · ${c.audience.geo}\nPlacements: ${c.audience.placements.join(', ')}`
}

// ---- persistence -----------------------------------------------------------
const key = (dojoId: string) => `campaign.${dojoId || 'default'}`
export async function loadCampaign(dojoId: string): Promise<Campaign | null> { return (await idbGet<Campaign>('projects', key(dojoId))) ?? null }
export async function saveCampaign(dojoId: string, c: Campaign): Promise<void> { await idbSet('projects', key(dojoId), { ...c, updatedAt: Date.now() }) }
export async function campaignBrand(dojoId: string, name: string): Promise<BrandKit> {
  return (await idbGet<BrandKit>('projects', `brand.${dojoId || 'default'}`)) ?? defaultKit(name)
}
