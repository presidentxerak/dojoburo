// Server-side definitions for the real Claude-powered deliverables. Mirrors the
// task ids in src/data/connectors.ts (WORK_TASKS) and adds the prompts. Keeping
// prompts server-side keeps them out of the client bundle and lets us tune them
// without shipping a new frontend.

export interface ServerWorkTask {
  id: string
  title: string
  format: 'design-system' | 'markdown'
  priceXrp: number
  /** connector ids that, if connected, are exposed to the agent as MCP tools */
  usesConnectors: string[]
  /** how the agent should behave */
  system: string
  /** builds the task instruction from the user's brief */
  user: (ctx: { agentName: string; brief: string; startup: string }) => string
}

const startupLine = (s: string) => (s ? `The startup: ${s}.` : 'The startup is an early-stage product company.')

const DESIGN_SYSTEM: ServerWorkTask = {
  id: 'design-system',
  title: 'Design system',
  format: 'design-system',
  priceXrp: 0.4,
  usesConnectors: ['figma'],
  system:
    'You are Claude Design, a senior product designer. You produce real, usable design systems. ' +
    'Return TWO things: (1) a single fenced ```json code block named tokens with keys ' +
    '{ "name", "colors" (object of role→hex, incl. primary, secondary, accent, bg, surface, text, muted, success, warning, danger, plus a 50–900 neutral scale), ' +
    '"typography" { "fontFamily", "scale": [px sizes], "weights" }, "spacing": [px], "radii": [px], "shadows": [css] }, ' +
    'then (2) Markdown documentation: palette rationale, type scale, spacing/grid, core components (button, input, card, nav) with states, and accessibility rules (contrast, focus, motion). ' +
    'Be concrete and buildable. Do not include prose before the json block.',
  user: ({ agentName, brief, startup }) =>
    `${startupLine(startup)} As ${agentName}, design a cohesive, modern, accessible design system. ${brief ? `Brief: ${brief}` : 'Aim for a friendly, trustworthy, kawaii-but-professional product feel.'} ` +
    'If a Figma tool is connected, also create a file/frames with the token styles and tell me what you created.',
}

const MARKDOWN_TASKS: Omit<ServerWorkTask, 'format'>[] = [
  {
    id: 'prd',
    title: 'Product requirements doc',
    priceXrp: 0.25,
    usesConnectors: ['notion', 'linear'],
    system: 'You are a sharp product manager. Produce a crisp, skimmable PRD in Markdown.',
    user: ({ agentName, brief, startup }) =>
      `${startupLine(startup)} As ${agentName}, write a PRD for: ${brief || 'the next priority feature'}. ` +
      'Sections: Problem, Goals & non-goals, Users, User stories, Scope (MVP vs later), Acceptance criteria, Risks, Success metrics. ' +
      'If Notion is connected, create the PRD as a page and report the link. If Linear is connected, create the top issues.',
  },
  {
    id: 'tech-spec',
    title: 'Technical design doc',
    priceXrp: 0.3,
    usesConnectors: ['github', 'linear'],
    system: 'You are a pragmatic staff engineer. Produce a clear technical design in Markdown.',
    user: ({ agentName, brief, startup }) =>
      `${startupLine(startup)} As ${agentName}, write a technical design doc for: ${brief || 'the system described'}. ` +
      'Sections: Context, Goals, Proposed architecture (with a simple diagram in text), Data model, API surface, Trade-offs, Rollout plan, Testing. ' +
      'If GitHub is connected, you may open a tracking issue or draft PR and report it.',
  },
  {
    id: 'code-review',
    title: 'Code review',
    priceXrp: 0.2,
    usesConnectors: ['github'],
    system: 'You are a rigorous code reviewer. Be specific and actionable.',
    user: ({ agentName, brief, startup }) =>
      `${startupLine(startup)} As ${agentName}, review: ${brief || 'the described change'}. ` +
      'Return: Summary, Correctness risks, Security, Performance, Simplifications, and a prioritized checklist. ' +
      'If GitHub is connected, fetch the actual diff/PR referenced and review it.',
  },
  {
    id: 'campaign',
    title: 'Go-to-market campaign',
    priceXrp: 0.25,
    usesConnectors: ['gmail'],
    system: 'You are a growth marketer. Produce a launch-ready campaign in Markdown.',
    user: ({ agentName, brief, startup }) =>
      `${startupLine(startup)} As ${agentName}, build a GTM campaign for: ${brief || 'the launch'}. ` +
      'Include: Positioning & message, Target segments, Channel plan, 2-week content calendar, and 2 ready-to-send emails (subject + body). ' +
      'If Gmail is connected, create the emails as drafts and report it.',
  },
  {
    id: 'website',
    title: 'Website plan & copy',
    priceXrp: 0.25,
    usesConnectors: ['figma'],
    system: 'You are a conversion-focused web designer + copywriter. Produce a ready-to-build landing page in Markdown.',
    user: ({ agentName, brief, startup }) =>
      `${startupLine(startup)} As ${agentName}, design the company landing page for: ${brief || 'the product'}. ` +
      'Return, section by section (Hero, Social proof, Features/benefits, How it works, Pricing, FAQ, Final CTA, Footer): the exact copy (headline, subhead, body, button labels), plus notes on layout and imagery. ' +
      'End with SEO title + meta description and a suggested domain slug.',
  },
  {
    id: 'ads',
    title: 'Meta ad creatives',
    priceXrp: 0.2,
    usesConnectors: ['meta'],
    system: 'You are a Meta (Facebook/Instagram) paid-social performance marketer. We only run Meta ads — never Google/YouTube/other networks. Produce ready-to-run Meta ad creatives in Markdown.',
    user: ({ agentName, brief, startup }) =>
      `${startupLine(startup)} As ${agentName}, create a set of Meta (Facebook + Instagram) ad creatives for: ${brief || 'customer acquisition'}. Meta only — do not mention Google, YouTube or other ad networks. ` +
      'Return 5 ad variations, each with: primary text, headline, description, placement (Feed / Reels / Stories), a visual concept (what the image or short video shows), and the target audience (interests + lookalikes). ' +
      'Add a testing plan (what to test first) and a suggested starting daily budget split across the variations. ' +
      'If a Meta Ads tool is connected, create the campaign/ad set/ads as PAUSED drafts in the ad account and report what you created.',
  },
  {
    id: 'outreach',
    title: 'Prospect list & outreach',
    priceXrp: 0.2,
    usesConnectors: ['gmail'],
    system: 'You are a B2B SDR + researcher. Produce a concrete outreach plan in Markdown.',
    user: ({ agentName, brief, startup }) =>
      `${startupLine(startup)} As ${agentName}, build an outbound plan for: ${brief || 'ideal customers'}. ` +
      'Return: the ICP (who to target: industry, role, company size, region), where to find them, 15 example target profiles (role + company type, no fabricated personal data), and a 3-step email sequence (subject + body each) with a follow-up cadence. ' +
      'If Gmail is connected, create the first email as a draft and report it.',
  },
  {
    id: 'offer',
    title: 'Offer & pricing',
    priceXrp: 0.2,
    usesConnectors: ['stripe'],
    system: 'You are a monetization strategist. Produce a concrete offer + pricing in Markdown.',
    user: ({ agentName, brief, startup }) =>
      `${startupLine(startup)} As ${agentName}, design what to sell and how to price it for: ${brief || 'this business'}. ` +
      'Return: the core offer (what the customer gets), 3 pricing tiers (name, price, what is included), the recommended primary tier, checkout page copy (headline + bullets + guarantee), and 3 upsell/cross-sell ideas. ' +
      'If Stripe is connected, create the products/prices and share a payment link.',
  },
  {
    id: 'model',
    title: 'Financial model',
    priceXrp: 0.25,
    usesConnectors: ['stripe'],
    system: 'You are a startup CFO. Produce a simple, honest financial model in Markdown with tables.',
    user: ({ agentName, brief, startup }) =>
      `${startupLine(startup)} As ${agentName}, build a lightweight financial model: ${brief || 'first 12 months'}. ` +
      'Include: Assumptions, Revenue build, Cost build, Monthly cash & runway table, Key metrics (CAC, LTV, burn, runway), and 3 levers to extend runway. ' +
      'If Stripe is connected, read real revenue to ground the assumptions.',
  },
  {
    id: 'strategy',
    title: 'Strategy & OKRs',
    priceXrp: 0.3,
    usesConnectors: ['notion'],
    system: 'You are a seasoned founder/operator. Produce a focused strategy doc in Markdown.',
    user: ({ agentName, brief, startup }) =>
      `${startupLine(startup)} As ${agentName}, write the strategy: ${brief || 'this quarter'}. ` +
      'Include: One-line vision, 3 strategic bets, Quarterly OKRs (3 objectives × 3 key results), a prioritized roadmap, and the single most important metric. ' +
      'If Notion is connected, publish it as a page.',
  },
  {
    id: 'jd',
    title: 'Job description & scorecard',
    priceXrp: 0.15,
    usesConnectors: ['slack'],
    system: 'You are a thoughtful head of people. Produce hiring docs in Markdown.',
    user: ({ agentName, brief, startup }) =>
      `${startupLine(startup)} As ${agentName}, create hiring docs for: ${brief || 'a key early hire'}. ` +
      'Include: Job description, Interview scorecard (competencies × signals), a 30/60/90 onboarding plan. ' +
      'If Slack is connected, post the JD to the hiring channel.',
  },
  {
    id: 'runbook',
    title: 'Ops runbook',
    priceXrp: 0.2,
    usesConnectors: ['slack', 'gdrive'],
    system: 'You are an SRE. Produce a practical ops runbook in Markdown.',
    user: ({ agentName, brief, startup }) =>
      `${startupLine(startup)} As ${agentName}, write an ops runbook for: ${brief || 'the production service'}. ` +
      'Include: Monitoring & SLOs, On-call rotation, Alert→action table, Incident steps, and a postmortem template. ' +
      'If Google Drive is connected, save it as a doc.',
  },
]

const TASKS: Record<string, ServerWorkTask> = {
  [DESIGN_SYSTEM.id]: DESIGN_SYSTEM,
}
for (const t of MARKDOWN_TASKS) TASKS[t.id] = { ...t, format: 'markdown' }

export function serverWorkTask(id: string): ServerWorkTask | null {
  return TASKS[id] ?? null
}
