// Shared content for the investor pitch deck · used by both the on-screen deck
// (PitchDeck.tsx) and the exported PDF (deckPdf.ts) so they never drift.

export const DECK_ACCENTS = {
  magenta: '#ff2d9b', blue: '#2f6bff', teal: '#08c2ac', yellow: '#ffc61a', orange: '#ff7a1a', violet: '#a06bff',
}

export type DeckVisual = 'brand' | 'dojo' | 'team' | 'hero' | 'table'

export interface DeckSlide {
  n: string
  kicker: string
  line: string
  icon: string
  /** full-3D object the character carries (Object3D/Shape kind) */
  obj: string
  accent: string
  visual: DeckVisual
  /** which financial table to render on a 'table' slide */
  table?: 'forecast' | 'plan'
}

const A = DECK_ACCENTS

export const DECK_SLIDES: DeckSlide[] = [
  { n: '', kicker: 'Investor deck', line: 'Your AI team, working while you watch.', icon: 'cast', obj: 'rocket', accent: A.magenta, visual: 'brand' },
  { n: '01', kicker: 'The problem', line: 'Running a business means juggling a dozen apps and never mastering any of them.', icon: 'job', obj: 'briefcase', accent: A.orange, visual: 'hero' },
  { n: '02', kicker: 'The solution', line: 'DojoBuro is a living 3D office where AI agents each own a real function of your work.', icon: 'build', obj: 'network', accent: A.blue, visual: 'dojo' },
  { n: '03', kicker: 'How it adapts', line: 'Pick your trade and the office tailors itself: the right crew, the right apps, wired and ready.', icon: 'stack', obj: 'network', accent: A.teal, visual: 'team' },
  { n: '04', kicker: 'The product', line: 'Agents act for real inside your apps: they open the PR, draft the email, raise the invoice.', icon: 'run', obj: 'gear', accent: A.violet, visual: 'hero' },
  { n: '05', kicker: 'The rail', line: 'Every task settles on the XRP Ledger with x402 micro-payments · real agent-to-agent commerce.', icon: 'pay', obj: 'coins', accent: A.blue, visual: 'hero' },
  { n: '06', kicker: 'The market', line: 'Every solo founder, freelancer and small team drowning in SaaS is a DojoBuro seat.', icon: 'watch', obj: 'eye', accent: A.magenta, visual: 'hero' },
  { n: '07', kicker: 'The model', line: 'You bring the model key, we run the hub · a whole automated team for less than one SaaS seat.', icon: 'price', obj: 'gem', accent: A.yellow, visual: 'hero' },
  { n: '08', kicker: 'The forecast', line: 'Near-zero model cost and sublinear infra turn scale straight into margin.', icon: 'cost', obj: 'coins', accent: A.teal, visual: 'table', table: 'forecast' },
  { n: '09', kicker: 'The business plan', line: 'Cash-flow positive from Year 2, on a path to $3.9M ARR by Year 5.', icon: 'price', obj: 'gem', accent: A.blue, visual: 'table', table: 'plan' },
  { n: '10', kicker: 'Why now', line: 'Agentic payments and MCP just made autonomous, tool-using AI teams finally possible.', icon: 'bolt', obj: 'gear', accent: A.orange, visual: 'dojo' },
  { n: '11', kicker: 'The ask', line: 'Join us in building the office where your AI team works while you watch.', icon: 'run', obj: 'rocket', accent: A.magenta, visual: 'brand' },
]
