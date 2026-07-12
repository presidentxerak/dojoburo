// DojoBuro support knowledge base. This is the Tier-0 layer: deterministic,
// on-brand answers with link buttons that cost nothing and work with no backend.
// The support bot answers from here first and only escalates to the LLM cascade
// (via /api/chat) for questions it can't match.
import { CONNECTORS, type Connector } from '../data/connectors'

export interface KBLink {
  label: string
  href: string
  external?: boolean
}

export interface KBTopic {
  id: string
  chip: string
  answer: string
  links?: KBLink[]
  follow?: string[]
  keywords: string[]
}

export const KB: KBTopic[] = [
  {
    id: 'studios',
    chip: 'Les studios',
    answer:
      'Chaque agent de ton bureau est un vrai studio pro, qui s’ouvre quand tu cliques dessus : Branding (logo, palette, typo, Brand Kit), Website Builder (site par blocs, export HTML), Campaign Studio (pubs Meta : audiences, personas, créas), Video Creator (montage + export .webm), Finance & Compta (import CSV, TVA, prévisions), CRM & Outbound (pipeline + séquences email) et Analytics (CAC, LTV, ROI expliqués). Tout tourne 100% dans ton navigateur — le montage vidéo, la compression d’images et les exports restent sur ta machine, rien n’est envoyé au serveur. L’IA crée une première version, tu gardes le contrôle total.',
    links: [
      { label: 'Voir les studios', href: '#studios' },
      { label: 'Ouvrir mon bureau', href: '#app' },
    ],
    follow: ['start', 'tools', 'cost'],
    keywords: ['studio', 'studios', 'branding', 'marque', 'logo', 'site', 'website', 'campagne', 'campaign', 'pub', 'ads', 'video', 'vidéo', 'montage', 'finance', 'compta', 'crm', 'outbound', 'analytics', 'local', 'module'],
  },
  {
    id: 'start',
    chip: 'Getting started',
    answer:
      'Describe your company in one sentence and your CEO agent assembles a crew that builds and runs it · website, offers, growth (B2B outreach, email, Meta ads, SEO) and analytics. You steer by chatting with your CEO and get a daily report by email. Each task costs about one credit, settled behind the scenes · no crypto. Exploring is free, so dive in.',
    links: [
      { label: 'Open your cockpit', href: '#app' },
      { label: 'How it works', href: '#how' },
    ],
    follow: ['jobs', 'tools', 'cost'],
    keywords: ['start', 'begin', 'how do i', 'get started', 'first', 'use', 'run a skill', 'onboard'],
  },
  {
    id: 'jobs',
    chip: 'Adapts to your job',
    answer:
      'DojoBuro is a productivity hub that reshapes itself to your profession. 23 ready profiles · startup founder, CEO, entrepreneur, product manager, engineer, app & game maker, researcher, growth hacker, community manager, marketer, sales, seller/vendor, designer, lawyer, accountant, real-estate agent, wealth advisor (CGP), HR, manager, secretary, support/call-centre, student and teacher · each seeds a matching crew, a fitting 3D world, and the exact apps that job needs (a teacher gets Google Classroom + Drive + Calendar; a realtor gets a CRM + DocuSign + WhatsApp; a CGP gets Salesforce + DocuSign). Everything stays editable, so you can mix any crew, world and tools.',
    links: [
      { label: 'Built for your job', href: '#jobs' },
      { label: 'How to connect an app', href: '#stack' },
    ],
    follow: ['setup', 'tools', 'cost'],
    keywords: ['job', 'profession', 'metier', 'role', 'trade', 'growth hacker', 'community', 'freelance', 'lawyer', 'accountant', 'hr', 'designer', 'researcher', 'manager', 'secretary', 'sales', 'seller', 'vendor', 'marketer', 'founder', 'realtor', 'real estate', 'wealth', 'cgp', 'advisor', 'student', 'teacher', 'educator', 'school', 'my work'],
  },
  {
    id: 'wallet',
    chip: 'Credits & profile',
    answer:
      'There is no wallet and no crypto to manage. Your profile is your account plus a simple credits balance in your own currency (USD, EUR, JPY…) and your preferences (theme, sound, notifications). You top up by card, spend about one credit per task, and everything settles on a fast rail behind the scenes · you never see a wallet, a seed or any coin.',
    links: [
      { label: 'Profile & credits', href: '#profile' },
      { label: 'Plans & pricing', href: '#pricing' },
    ],
    follow: ['onramp', 'security', 'pricing'],
    keywords: ['wallet', 'profile', 'account', 'seed', 'address', 'fund', 'faucet', 'balance', 'treasury', 'credits', 'no crypto'],
  },
  {
    id: 'cost',
    chip: 'Cost per task (credits)',
    answer:
      'Most tasks are free or about one credit; only heavier jobs (like a full campaign) cost a couple more. You buy credits in your own currency and they settle on a fast rail behind the scenes · no crypto, no network fees to think about. Tap Lazy the panda for your live totals, and set a daily credit cap so nothing overspends.',
    links: [
      { label: 'Cost breakdown', href: '#cost' },
      { label: 'Plans & pricing', href: '#pricing' },
    ],
    follow: ['onramp', 'pricing', 'wallet'],
    keywords: ['cost', 'price', 'xrp', 'fee', 'how much', 'expensive', 'pay', 'per task', 'credit', 'credits'],
  },
  {
    id: 'pricing',
    chip: 'Plans & pricing',
    answer:
      'You bring your own model key (or use the free-model cascade), so intelligence is basically free; you pay only for the hub: connected apps, an always-on worker and team features. Plans: Free ($0, explore + build your first company, 2 apps, ~50 tasks/mo), Solo ($12/mo, 6 apps, 300 credits), Pro ($29/mo, all 28 connectors, 1,500 credits, cloud worker), Team ($22/seat/mo, shared dojos, SSO, audit) and Business (custom, self-hosted, SLA). BYOK and free-cascade tasks are unlimited and never use a credit; managed credits (1 credit ≈ 1 hosted task) cover hosted-model runs, are bought in your own currency (USD, EUR, JPY…) and top up anytime · no crypto. Annual billing saves about two months.',
    links: [
      { label: 'See the plans', href: '#pricing' },
      { label: 'Cost per task', href: '#cost' },
    ],
    follow: ['cost', 'tools', 'onramp'],
    keywords: ['plan', 'plans', 'pricing', 'price', 'cost', 'subscription', 'quota', 'credits', 'credit', 'tier', 'upgrade', 'billing', 'free', 'solo', 'pro', 'team', 'business', 'byok', 'how much'],
  },
  {
    id: 'onramp',
    chip: 'Buy credits with a card',
    answer:
      'Top up with a card (€/$/¥) and you get credits in your own currency · a simple, transparent balance. Stripe takes the payment and your balance updates instantly; each task then spends about one credit, settled on a fast rail behind the scenes. No wallet, no coins, no crypto to manage. Just exploring? The free tier lets you build and run without spending anything.',
    links: [
      { label: 'See the full flow', href: '#onramp' },
      { label: 'Cost per task', href: '#cost' },
    ],
    follow: ['wallet', 'pricing', 'security'],
    keywords: ['buy credits', 'card', 'credit card', 'top up', 'topup', 'add credits', 'fiat', 'euro', 'dollar', 'stripe', 'on-ramp', 'onramp', 'deposit', 'purchase', 'currency'],
  },
  {
    id: 'x402',
    chip: 'How payments work',
    answer:
      'Simple: you buy credits in your own currency and each task spends about one credit. Behind the scenes those credits settle on a fast payment rail, but you never touch it · no wallet, no coins, no crypto. Every task leaves a receipt in your dashboard, so you always see exactly what ran and what it cost.',
    links: [
      { label: 'From card to credits', href: '#onramp' },
      { label: 'How it works', href: '#how' },
    ],
    follow: ['onramp', 'cost', 'tools'],
    keywords: ['x402', '402', 'agentic', 'protocol', 'payment', 'payments', 'settlement', 'receipt', 'rail', 'behind the scenes', 'how do payments'],
  },
  {
    id: 'security',
    chip: 'Security & privacy',
    answer:
      'There is no crypto for you to secure · no wallet, no seed, no coins. You just hold a credits balance, and payments settle on a fast rail behind the scenes. The app ships with a strict Content-Security-Policy, security headers and scraper protection. App-key, connector tokens and model API keys live only on the server · never in your browser · behind rate limits and spending caps.',
    links: [
      { label: 'Security details', href: '#prod' },
      { label: 'Credits & profile', href: '#profile' },
    ],
    follow: ['wallet', 'pricing'],
    keywords: ['security', 'secure', 'safe', 'privacy', 'hack', 'scam', 'phishing', 'seed', 'csp', 'protect', 'data'],
  },
  {
    id: 'tools',
    chip: 'Connect real tools',
    answer:
      'Connect 30+ apps · Notion, GitHub, Gmail, Google Drive, Calendar & Classroom, Slack, Discord, Zoom, WhatsApp, Linear, Jira, Trello, Asana, Airtable, Stripe, QuickBooks, Xero, Shopify, HubSpot, Salesforce, Calendly, Mailchimp, X, LinkedIn, Buffer, Figma, Canva, DocuSign, Zendesk, Intercom. One-click OAuth (with PKCE); tokens are sealed with AES-256-GCM server-side and auto-refreshed. At run time each app is exposed to Claude as a remote MCP server, so the agent does real work in your account · and each task is metered as about one credit, with a receipt in your dashboard.',
    links: [
      { label: 'Set up each app · step by step', href: '/guide', external: true },
      { label: 'Connect your stack', href: '#stack' },
    ],
    follow: ['setup', 'linkagents', 'environment'],
    keywords: ['tool', 'tools', 'connect', 'integration', 'mcp', 'oauth', 'github', 'slack', 'notion', 'gmail', 'stripe', 'jira', 'hubspot', 'figma', 'real content', 'output', 'api', 'apps'],
  },
  {
    id: 'linkagents',
    chip: 'Link your own agents',
    answer:
      'Already run agents at Notion, Slack, or anywhere else? Plug them straight into a DojoBuro agent. Open the agent editor in the Dojo Studio, scroll to "External agents", click "+ Link an agent", then pick a protocol: MCP (its tools join every deliverable this agent runs, exactly like a connector), A2A (you delegate a whole task and get the reply back · the standard Agent2Agent card at /.well-known/agent-card.json + message/send), or Webhook (a simple https endpoint that receives { task } and returns text). Paste the https endpoint and an optional auth token, then Verify to check it is reachable and read its name + capabilities. The token never touches the browser wire · a server proxy (/api/agent-proxy) holds it, just like the connector vault. Delegate to A2A / webhook agents from the agent card in the office; MCP agents ride along automatically when you run a deliverable (needs a Claude key, since Claude drives the tools).',
    links: [
      { label: 'Open the Dojo Studio', href: '#studio' },
      { label: 'What is A2A', href: 'https://a2a-protocol.org', external: true },
      { label: 'What is MCP', href: 'https://modelcontextprotocol.io', external: true },
    ],
    follow: ['tools', 'setup', 'security'],
    keywords: ['external agent', 'external agents', 'link agent', 'connect agent', 'my agent', 'own agent', 'a2a', 'agent2agent', 'agent to agent', 'delegate', 'mcp agent', 'webhook', 'notion agent', 'slack agent', 'other agents', 'third party agent'],
  },
  {
    id: 'setup',
    chip: 'How to connect an app',
    answer:
      'Every agent card AND the Dojo Studio editor show a "Connect tools" panel, filtered to the apps that agent\'s tasks actually use, with a 3-step guide: 1 create the OAuth app · 2 add the keys to env · 3 point an MCP endpoint. As a USER it is one click: open the agent, find the tool under its tasks, click Connect, approve the OAuth screen once · the token is sealed server-side (AES-256-GCM) and the agent can act inside the app. As the OPERATOR (one-time, per app): 1) create an OAuth app in the provider console (Notion integrations, GitHub OAuth apps, Google Cloud credentials…) and set the redirect URI to https://YOUR-SITE/api/connect; 2) copy the client id + secret into env as <APP>_CLIENT_ID and <APP>_CLIENT_SECRET (Google apps share GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET); 3) apps WITH a first-party MCP server (Notion, GitHub, Linear, Stripe) work right away; apps WITHOUT one (Gmail, Drive, Calendar, Slack…) also need <APP>_MCP_URL pointed at a hosted MCP hub (Composio, Zapier, Pipedream). PKCE apps (Airtable, X, Canva) are automatic. Once the env is set the tool shows a Connect button instead of a "set up" link. Every app also has its own step-by-step page in the Dojo Guide (scopes, exact env vars, gotchas) · just name the app and I will link it.',
    links: [
      { label: 'Step-by-step setup for every app', href: '/guide', external: true },
      { label: 'MCP hub (Composio)', href: 'https://composio.dev', external: true },
      { label: 'What is MCP', href: 'https://modelcontextprotocol.io', external: true },
    ],
    follow: ['tools', 'linkagents', 'environment'],
    keywords: ['setup', 'set up', 'client id', 'client secret', 'oauth app', 'redirect', 'env', 'configure', 'composio', 'zapier', 'pipedream', 'mcp url', 'mcp_url', 'hub', 'how to connect', 'create app', 'pkce', 'credentials', 'connect panel', 'studio'],
  },
  {
    id: 'guide',
    chip: 'Dojo Guide',
    answer:
      'The Dojo Guide is the full walkthrough of connectors: how to connect an app, how to configure the OAuth account, how to use it and see the result of the work, how to stay safe (avoid getting hacked), and how to keep your budget under control. Open it from the "Dojo Guide" button in the header (app or landing).',
    links: [
      { label: 'Open the Dojo Guide', href: '/guide', external: true },
      { label: 'How to connect an app', href: '#stack' },
    ],
    follow: ['setup', 'tools', 'cost'],
    keywords: ['guide', 'dojo guide', 'help', 'how to', 'walkthrough', 'tutorial', 'get started guide', 'security', 'safe', 'hack', 'budget', 'configure'],
  },
  {
    id: 'skins',
    chip: 'Skins & customization',
    answer:
      'Every agent is fully customizable in the Dojo Studio: 180+ skins across 30 themes and many characters · robots, ninjas, aliens, cats, dragons, ghosts, pandas, a bibendum, a jellyfish, plus Zelda-style knights, mages and mad-scientist professors · each with a vivid face, legs and its own shoes, and sometimes a hat (bowler, top hat, beret, party or flower crown). Click an agent\'s avatar to open its editor, then change the skin, rename it, swap its function and tasks, set a credit budget, or move it on the grid. You can run several dojos (companies) in different worlds side by side.',
    links: [
      { label: 'Build your own team', href: '#studio' },
      { label: 'Meet the office', href: '#cast' },
    ],
    follow: ['jobs', 'tools'],
    keywords: ['skin', 'skins', 'avatar', 'character', 'customize', 'customise', 'knight', 'zelda', 'mage', 'wizard', 'scientist', 'hat', 'edit agent', 'appearance', 'look', 'theme', 'world'],
  },
  {
    id: 'environment',
    chip: 'Cloud or local',
    answer:
      'Run it two ways. Cloud: a managed worker runs the model + tool calls and keeps agents going when the tab is closed, with every key in a server-side vault. Local / self-hosted: run your own worker and point connectors at your own MCP endpoints · your keys, your machine, the same office. Either way the browser is just the cockpit: it shows the 3D office and Dojo City, triggers tasks and tracks your credits; the worker does the authenticated work.',
    links: [
      { label: 'Cloud or local', href: '#stack' },
      { label: 'Runtime & environment', href: '#env' },
    ],
    follow: ['tools', 'security'],
    keywords: ['run', 'runs', 'where', 'cloud', 'server', 'browser', 'local', 'self-host', 'self hosted', 'backend', 'worker', 'environment', 'on premise'],
  },
  {
    id: 'networks',
    chip: 'Explore free vs go live',
    answer:
      'Start on the free tier · build your company, meet the crew and run tasks that don\'t need credits, at no cost. When you\'re ready to go live, add credits in your own currency and the crew runs the priced work for real. Same office, same agents · you just switch from exploring to running. No crypto at any point.',
    links: [
      { label: 'Open the app', href: '#app' },
      { label: 'Plans & pricing', href: '#pricing' },
    ],
    follow: ['wallet', 'pricing'],
    keywords: ['network', 'testnet', 'devnet', 'mainnet', 'faucet', 'switch', 'live', 'free tier', 'go live', 'explore'],
  },
  {
    id: 'xaman',
    chip: 'Do I need a wallet?',
    answer:
      'No · there is no wallet, no seed and no coins to connect anywhere. You pay in your own currency (USD, EUR, JPY…) with a card, hold a simple credits balance, and each task spends about one credit. Payments settle on a fast rail behind the scenes, so there is nothing crypto for you to set up or secure.',
    links: [
      { label: 'Buy credits with a card', href: '#onramp' },
      { label: 'Credits & profile', href: '#profile' },
    ],
    follow: ['security', 'wallet'],
    keywords: ['xaman', 'xumm', 'gem', 'gemwallet', 'crossmark', 'sign', 'signing', 'connect wallet', 'wallet', 'crypto', 'coin', 'metamask'],
  },
  {
    id: 'troubleshoot',
    chip: 'Troubleshooting',
    answer:
      "If a task won't run, check your credits balance isn't empty or capped by your daily limit, and that the app it needs is connected. If totals look stale, reload to refresh. If the 3D office is blank, your browser may be blocking WebGL · try another browser or enable hardware acceleration.",
    links: [
      { label: 'Open the app', href: '#app' },
    ],
    follow: ['wallet', 'networks'],
    keywords: ['bug', 'broken', 'error', 'not working', 'stuck', 'blank', 'fail', 'problem', 'issue', 'help', 'webgl', 'refresh'],
  },
]

export const TOPIC_BY_ID: Record<string, KBTopic> = Object.fromEntries(KB.map((t) => [t.id, t]))

// Aliases the way people actually name apps in chat, mapped to a connector id.
const CONNECTOR_ALIASES: Record<string, string> = {
  'google drive': 'gdrive', drive: 'gdrive', 'google calendar': 'gcal', calendar: 'gcal',
  'google classroom': 'gclassroom', classroom: 'gclassroom', gsheet: 'gdrive', sheets: 'gdrive',
  twitter: 'twitter', x: 'twitter', 'whatsapp business': 'whatsapp', qb: 'quickbooks',
}

/** If the user names a specific app, return its connector so the bot can deep-link
 *  to that connector's dedicated /guide/<id> setup page. */
export function matchConnector(text: string): Connector | null {
  const q = text.toLowerCase()
  // longest alias first so "google drive" beats a bare "google"
  const aliases = Object.keys(CONNECTOR_ALIASES).sort((a, b) => b.length - a.length)
  for (const a of aliases) if (q.includes(a)) return CONNECTORS.find((c) => c.id === CONNECTOR_ALIASES[a]) ?? null
  let best: Connector | null = null
  for (const c of CONNECTORS) {
    const label = c.label.toLowerCase()
    if (q.includes(label) || q.includes(c.id.toLowerCase())) {
      if (!best || label.length > best.label.length) best = c
    }
  }
  return best
}

/** A ready-made chat answer that points to a connector's dedicated setup page. */
export function connectorReply(c: Connector): { text: string; links: KBLink[] } {
  return {
    text: `${c.label}: ${c.blurb} Connecting is a one-click OAuth once the operator has wired it. Here is the full step-by-step setup page for ${c.label} · scopes, exact env vars and gotchas.`,
    links: [
      { label: `Set up ${c.label} · step by step`, href: `/guide/${c.id}`, external: true },
      { label: `Open the ${c.provider} console`, href: c.docsUrl, external: true },
      { label: 'All connectors (Dojo Guide)', href: '/guide', external: true },
    ],
  }
}

/** Cheap keyword scorer so the bot can answer offline before spending anything. */
export function matchTopic(text: string): KBTopic | null {
  const q = text.toLowerCase()
  let best: KBTopic | null = null
  let bestScore = 0
  for (const t of KB) {
    let score = 0
    for (const k of t.keywords) if (q.includes(k)) score += k.length >= 5 ? 2 : 1
    if (q.includes(t.chip.toLowerCase())) score += 3
    if (score > bestScore) {
      bestScore = score
      best = t
    }
  }
  return bestScore >= 2 ? best : null
}

export const GREETING =
  "Salut ! Je suis l'assistant DojoBuro. Chaque agent est un studio pro (branding, site, campagnes, vidéo, finance, CRM, analytics) qui tourne 100% en local. Demande-moi comment créer ta marque, ton site ou une campagne · ou choisis un sujet ci-dessous.";
