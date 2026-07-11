// ---------------------------------------------------------------------------
// Showcase · 15 fictional companies "founded" in DojoBuro, each with its own
// clean, modern visual identity (colours + typography), a one-line site, an ad,
// a testimonial, and daily-drifting revenue/sales. These power the landing's
// showcase gallery, the testimonials, and the live performance board. All mock —
// the numbers are deterministic per calendar day, so the board "updates" daily
// without any backend.
// ---------------------------------------------------------------------------

export interface MockCo {
  id: string
  name: string
  handle: string
  cat: string
  mission: string
  theme: { bg: string; ink: string; sub: string; accent: string; font: string; radius: number; upper?: boolean }
  site: { headline: string; sub: string; cta: string }
  ad: { headline: string; body: string }
  baseRevenue: number
  baseSales: number
  testimonial: { quote: string; author: string }
}

// distinct font stacks (all web-safe, no extra loading) for visual variety
const F = {
  serif: "Georgia, 'Times New Roman', serif",
  grotesk: "'Helvetica Neue', Arial, sans-serif",
  mono: "'Courier New', ui-monospace, monospace",
  rounded: "'Trebuchet MS', 'Segoe UI', sans-serif",
  editorial: "Palatino, 'Palatino Linotype', 'Book Antiqua', serif",
  condensed: "'Arial Narrow', 'Roboto Condensed', system-ui, sans-serif",
  system: "system-ui, -apple-system, sans-serif",
  slab: "Rockwell, 'Courier New', serif",
}

export const MOCK_COMPANIES: MockCo[] = [
  { id: 'lumina', name: 'Lumina', handle: '@lumina', cat: 'AI photo', mission: 'Studio-grade headshots from a selfie.',
    theme: { bg: '#0f1220', ink: '#f5f5f7', sub: '#a6accd', accent: '#8b7bff', font: F.grotesk, radius: 18 },
    site: { headline: 'Look hired.', sub: 'AI headshots that pass for a real studio — in five minutes.', cta: 'Get my photos' },
    ad: { headline: 'Your next profile photo, minus the studio', body: 'Upload 6 selfies, get 100 polished headshots.' },
    baseRevenue: 2100, baseSales: 640, testimonial: { quote: 'I shipped a full landing page and a Stripe checkout before lunch. I’m not technical at all.', author: 'Founder of Lumina' } },

  { id: 'cratebox', name: 'Cratebox', handle: '@cratebox', cat: 'Subscription', mission: 'A monthly box of indie snacks.',
    theme: { bg: '#fff7ec', ink: '#2a1c12', sub: '#7a6653', accent: '#e2622f', font: F.rounded, radius: 22 },
    site: { headline: 'Snacks with a story.', sub: 'Small-batch treats from makers you’ve never heard of, at your door monthly.', cta: 'Start the box' },
    ad: { headline: 'The snack box that’s actually good', body: '12 indie treats a month. Cancel anytime.' },
    baseRevenue: 1780, baseSales: 410, testimonial: { quote: 'My CEO runs the ads, emails customers and sends me a report every morning. I just approve.', author: 'Founder of Cratebox' } },

  { id: 'verdea', name: 'Verdea', handle: '@verdea', cat: 'App', mission: 'Never kill a plant again.',
    theme: { bg: '#f2f7f0', ink: '#1c2a1e', sub: '#5c6f5e', accent: '#2f9e5c', font: F.system, radius: 16 },
    site: { headline: 'Keep it alive.', sub: 'Watering reminders and light checks for every plant on your shelf.', cta: 'Add my plants' },
    ad: { headline: 'Your plants are thirsty', body: 'Smart reminders so nothing dries out again.' },
    baseRevenue: 940, baseSales: 1200, testimonial: { quote: 'Twenty minutes in I had a working app, a domain and my first paying user. Wild.', author: 'Founder of Verdea' } },

  { id: 'nomadly', name: 'Nomadly', handle: '@nomadly', cat: 'Travel', mission: 'Find the visa that lets you stay.',
    theme: { bg: '#0d1b2a', ink: '#eaf2fb', sub: '#9fb3c8', accent: '#39c0d6', font: F.grotesk, radius: 12 },
    site: { headline: 'Work from anywhere. Legally.', sub: 'Match your passport to the remote-work visas that actually accept you.', cta: 'Find my visa' },
    ad: { headline: 'The digital-nomad visa finder', body: 'Answer 3 questions, get your shortlist.' },
    baseRevenue: 1520, baseSales: 380, testimonial: { quote: 'I’m talking to a CEO, not a chatbot. It has a memory, a plan and it actually follows up.', author: 'Founder of Nomadly' } },

  { id: 'pixelforge', name: 'PixelForge', handle: '@pixelforge', cat: 'Assets', mission: 'Drop-in pixel art for game devs.',
    theme: { bg: '#14131a', ink: '#e8ffe0', sub: '#8fa88a', accent: '#63e06a', font: F.mono, radius: 6, upper: true },
    site: { headline: 'Ship the sprite.', sub: 'Curated pixel packs — tiles, characters, FX — royalty-free for your game.', cta: 'Grab a pack' },
    ad: { headline: 'Stop drawing tiles at 2am', body: 'Plug-and-play pixel packs for your engine.' },
    baseRevenue: 1310, baseSales: 520, testimonial: { quote: 'It set up the Stripe products and pricing tiers on its own. I’d have spent a weekend on that.', author: 'Founder of PixelForge' } },

  { id: 'brewly', name: 'Brewly', handle: '@brewly', cat: 'Coffee', mission: 'Single-origin coffee, guided tastings.',
    theme: { bg: '#f6efe6', ink: '#2b1a10', sub: '#7c6450', accent: '#a8542a', font: F.editorial, radius: 10 },
    site: { headline: 'Taste the map.', sub: 'A new single-origin every month, with notes that teach your palate.', cta: 'Brew with us' },
    ad: { headline: 'Coffee that tells you where it’s from', body: 'Fresh single-origin, monthly. First bag half off.' },
    baseRevenue: 1660, baseSales: 300, testimonial: { quote: 'I set the mission and approve the big calls. The company handles the rest, nights and weekends.', author: 'Founder of Brewly' } },

  { id: 'sootheer', name: 'Sootheer', handle: '@sootheer', cat: 'Wellness', mission: 'Sleep sounds that actually work.',
    theme: { bg: '#101426', ink: '#eef1ff', sub: '#a3a9cc', accent: '#c084fc', font: F.rounded, radius: 24 },
    site: { headline: 'Drift off.', sub: 'Layered soundscapes and wind-downs tuned for deeper sleep.', cta: 'Sleep tonight' },
    ad: { headline: 'Fall asleep in 8 minutes', body: 'Soundscapes engineered for your brain. Free week.' },
    baseRevenue: 1240, baseSales: 900, testimonial: { quote: 'The daily briefings are mind-blowing. I open my laptop and the work is already done.', author: 'Founder of Sootheer' } },

  { id: 'ledgerly', name: 'Ledgerly', handle: '@ledgerly', cat: 'Fintech', mission: 'Invoicing for freelancers who hate invoicing.',
    theme: { bg: '#ffffff', ink: '#0e1726', sub: '#5b6b82', accent: '#2f6bff', font: F.grotesk, radius: 14 },
    site: { headline: 'Get paid, finally.', sub: 'Send invoices in seconds and chase them automatically.', cta: 'Send an invoice' },
    ad: { headline: 'Invoicing that chases for you', body: 'Late-payment reminders on autopilot.' },
    baseRevenue: 2450, baseSales: 480, testimonial: { quote: 'It found prospects, verified their emails and started outreach — all before I finished my coffee.', author: 'Founder of Ledgerly' } },

  { id: 'fitloop', name: 'Fitloop', handle: '@fitloop', cat: 'Fitness', mission: '15-minute workouts, no gym.',
    theme: { bg: '#111111', ink: '#ffffff', sub: '#9a9a9a', accent: '#ff3b3b', font: F.condensed, radius: 4, upper: true },
    site: { headline: 'No gym. No excuses.', sub: 'Follow-along 15-minute sessions you can do in a hallway.', cta: 'Start day 1' },
    ad: { headline: '15 minutes. Zero equipment.', body: 'A stronger you, before your coffee’s cold.' },
    baseRevenue: 1390, baseSales: 760, testimonial: { quote: 'This is the first product that hooked me. Ten minutes after go, I had the page, the ads, everything.', author: 'Founder of Fitloop' } },

  { id: 'petto', name: 'Petto', handle: '@petto', cat: 'Health', mission: 'Vet advice for pets, on demand.',
    theme: { bg: '#fdf2f6', ink: '#3a1526', sub: '#8a5c70', accent: '#ec4e8a', font: F.rounded, radius: 26 },
    site: { headline: 'A vet in your pocket.', sub: 'Chat with real vets about your pet, day or night.', cta: 'Ask a vet' },
    ad: { headline: 'Is your dog okay? Ask now', body: 'Licensed vets, 24/7, no waiting room.' },
    baseRevenue: 1120, baseSales: 540, testimonial: { quote: 'I feel what I felt when I started my first web agency in 1994 — except this time I have a whole team.', author: 'Founder of Petto' } },

  { id: 'draftly', name: 'Draftly', handle: '@draftly', cat: 'AI writing', mission: 'Cover letters that sound like you.',
    theme: { bg: '#faf7f0', ink: '#20242b', sub: '#6b7280', accent: '#111111', font: F.serif, radius: 8 },
    site: { headline: 'Write the letter, not the dread.', sub: 'Tailored cover letters from your CV and the job post.', cta: 'Draft mine' },
    ad: { headline: 'The cover letter, handled', body: 'Paste the job, get a letter that sounds like you.' },
    baseRevenue: 980, baseSales: 1100, testimonial: { quote: 'You’re working with a system, not a prompt box. It plans, ships, and reports back.', author: 'Founder of Draftly' } },

  { id: 'bloombox', name: 'Bloombox', handle: '@bloombox', cat: 'Retail', mission: 'Same-day flowers, tastefully done.',
    theme: { bg: '#fbf4f7', ink: '#2c1420', sub: '#8a5f72', accent: '#c94f7c', font: F.editorial, radius: 16 },
    site: { headline: 'Say it with flowers.', sub: 'Florist-arranged bouquets, delivered the same day.', cta: 'Send a bouquet' },
    ad: { headline: 'Forgot the anniversary? We didn’t', body: 'Same-day bouquets, arranged by real florists.' },
    baseRevenue: 1930, baseSales: 350, testimonial: { quote: 'Set the budget once and the ads generate, launch and optimize themselves. Sales just show up.', author: 'Founder of Bloombox' } },

  { id: 'trailhead', name: 'Trailhead', handle: '@trailhead', cat: 'Outdoors', mission: 'Plan the perfect hike.',
    theme: { bg: '#f0f4ec', ink: '#1e2a17', sub: '#5e6f52', accent: '#5a8a2c', font: F.slab, radius: 10 },
    site: { headline: 'Find your trail.', sub: 'Routes matched to your fitness, time and the weather that day.', cta: 'Plan a hike' },
    ad: { headline: 'The right trail for today', body: 'Difficulty, distance and weather — sorted.' },
    baseRevenue: 860, baseSales: 640, testimonial: { quote: 'One prompt and I had an app deployed on my own custom domain in a couple of minutes.', author: 'Founder of Trailhead' } },

  { id: 'cardexo', name: 'Cardexo', handle: '@cardexo', cat: 'SaaS', mission: 'Digital business cards that convert.',
    theme: { bg: '#0b0b0f', ink: '#eef0f5', sub: '#9096a6', accent: '#00d4a0', font: F.mono, radius: 8, upper: true },
    site: { headline: 'Tap. Connect. Done.', sub: 'A smart card that shares your links and captures theirs.', cta: 'Make my card' },
    ad: { headline: 'Ditch the paper card', body: 'One tap shares everything. Track who scanned.' },
    baseRevenue: 2020, baseSales: 470, testimonial: { quote: 'It’s a company, not a chatbot. There’s a CEO who reports to me and actually gets things done.', author: 'Founder of Cardexo' } },

  { id: 'munchkit', name: 'Munchkit', handle: '@munchkit', cat: 'Food', mission: 'Meal-prep kits for busy weeks.',
    theme: { bg: '#fff9f0', ink: '#2a2013', sub: '#7c6a4f', accent: '#f2a413', font: F.rounded, radius: 20 },
    site: { headline: 'Dinner, sorted.', sub: 'Pre-portioned kits that cook in 20 minutes, no thinking required.', cta: 'Pick my meals' },
    ad: { headline: 'Stop deciding what’s for dinner', body: 'Fresh 20-minute kits, delivered weekly.' },
    baseRevenue: 1610, baseSales: 420, testimonial: { quote: 'Nights, weekends, holidays — the company just keeps running. No babysitting.', author: 'Founder of Munchkit' } },
]

// ---- daily-drifting mock metrics (deterministic per calendar day) -----------
const DAY = Math.floor(Date.now() / 86400000)
function hashStr(s: string) { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return Math.abs(h) }
function rng(seed: number) {
  let a = seed >>> 0
  return () => { a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296 }
}
export function coRevenue(c: MockCo): number { const r = rng(DAY * 13 + hashStr(c.id)); return Math.round(c.baseRevenue * (0.7 + r() * 1.0)) }
export function coSales(c: MockCo): number { const r = rng(DAY * 17 + hashStr(c.id) + 7); return Math.round(c.baseSales * (0.65 + r() * 1.15)) }

/** Top earners for today, sorted by revenue (desc). */
export function topEarners(): Array<{ co: MockCo; revenue: number; sales: number }> {
  return MOCK_COMPANIES
    .map((co) => ({ co, revenue: coRevenue(co), sales: coSales(co) }))
    .sort((a, b) => b.revenue - a.revenue)
}

/** Fleet-wide headline numbers, drifting a little every day. */
export function fleetStats() {
  const r = rng(DAY * 7 + 3)
  const revenue30d = MOCK_COMPANIES.reduce((s, c) => s + coRevenue(c) * 8, 0)
  return {
    revenue30d,
    companies: 28900 + Math.floor(r() * 2400),
    sites: 27600 + Math.floor(r() * 2100),
    tasksToday: 6200 + Math.floor(r() * 4200),
    emails: 1_540_000 + Math.floor(r() * 120_000),
    foundedToday: 120 + Math.floor(r() * 95),
  }
}
