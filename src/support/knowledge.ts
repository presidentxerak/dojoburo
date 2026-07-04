// DojoBuro support knowledge base. This is the Tier-0 layer: deterministic,
// on-brand answers with link buttons that cost nothing and work with no backend.
// The support bot answers from here first and only escalates to the LLM cascade
// (via /api/chat) for questions it can't match.

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
    id: 'start',
    chip: 'Getting started',
    answer:
      'Enter the office, click any agent to open their card, then run a skill. The Chief atom flies over, the agent works, and priced skills settle on the XRP Ledger. On Testnet everything is free, so explore freely.',
    links: [
      { label: 'Enter the office', href: '#app' },
      { label: 'How it works', href: '#how' },
    ],
    follow: ['wallet', 'cost', 'security'],
    keywords: ['start', 'begin', 'how do i', 'get started', 'first', 'use', 'run a skill', 'onboard'],
  },
  {
    id: 'wallet',
    chip: 'Wallet & profile',
    answer:
      'Your profile is your connected wallet plus local preferences (network, theme, sound) saved only in your browser. On Testnet/Devnet DojoBuro generates real XRPL wallets locally and funds them from the faucet; seeds never leave your browser. On Mainnet, connect Xaman for non-custodial signing — you approve each payment on your phone and no seed touches the app.',
    links: [
      { label: 'Profile & wallets', href: '#profile' },
      { label: 'Get a free Xaman key', href: 'https://apps.xaman.dev', external: true },
    ],
    follow: ['xaman', 'security', 'networks'],
    keywords: ['wallet', 'profile', 'account', 'seed', 'address', 'fund', 'faucet', 'balance', 'treasury'],
  },
  {
    id: 'cost',
    chip: 'Cost per task (XRP)',
    answer:
      'Most skills are free (0 XRP). A few carry an x402 price of 0.15–0.50 XRP, but that is an internal transfer between your own wallets — not a net cost. The only real on-chain cost is the network fee, about 0.00001 XRP (~10 drops) per transaction. Tap Lazy the panda for your live totals.',
    links: [
      { label: 'Cost breakdown', href: '#cost' },
      { label: 'XRPL fees explained', href: 'https://xrpl.org/transaction-cost.html', external: true },
    ],
    follow: ['pricing', 'networks'],
    keywords: ['cost', 'price', 'xrp', 'fee', 'how much', 'expensive', 'pay', 'x402', 'per task', 'drops'],
  },
  {
    id: 'pricing',
    chip: 'Plans & pricing',
    answer:
      'DojoBuro runs a cost-optimized model cascade (free tiers first, paid frontier models last) so a task costs about a cent. Plans: Free (Testnet, ~30 tasks/mo), Starter, Pro, Team and Business — each with a monthly task quota and hard spending limits. Bring-your-own model key is also supported.',
    links: [
      { label: 'See the numbers', href: '#cost' },
      { label: 'Production roadmap', href: '#prod' },
    ],
    follow: ['cost', 'tools'],
    keywords: ['plan', 'plans', 'pricing', 'subscription', 'quota', 'credits', 'tier', 'upgrade', 'billing'],
  },
  {
    id: 'security',
    chip: 'Security & privacy',
    answer:
      'DojoBuro is non-custodial: on Mainnet, Xaman signs every payment and no seed is ever exposed. The app ships with a strict Content-Security-Policy, security headers and scraper protection. Support-bot and model API keys live only on the server — never in your browser — behind rate limits and spending caps.',
    links: [
      { label: 'Security details', href: '#prod' },
      { label: 'Xaman (non-custodial)', href: 'https://xaman.app', external: true },
    ],
    follow: ['wallet', 'xaman'],
    keywords: ['security', 'secure', 'safe', 'privacy', 'hack', 'scam', 'phishing', 'seed', 'csp', 'protect', 'data'],
  },
  {
    id: 'tools',
    chip: 'Connect real tools',
    answer:
      'Each skill maps to a tool contract wired to a model call plus MCP servers (GitHub, Slack, Notion, Drive, a browser, a mailer). The x402 payment meters the work, so every real deliverable gets an on-ledger receipt. Secrets stay server-side; the browser never sees them.',
    links: [
      { label: 'Tools & real content', href: '#tools' },
      { label: 'What is MCP', href: 'https://modelcontextprotocol.io', external: true },
    ],
    follow: ['environment', 'pricing'],
    keywords: ['tool', 'tools', 'connect', 'integration', 'mcp', 'github', 'slack', 'notion', 'real content', 'output', 'api'],
  },
  {
    id: 'environment',
    chip: 'Where agents run',
    answer:
      'Today the whole office runs in your browser — a static app that talks straight to public XRPL nodes, with no server to operate. For real work, model and tool execution run in a cloud worker so tasks keep going when the tab is closed and keys stay safe. The browser stays the cockpit.',
    links: [
      { label: 'Runtime & environment', href: '#env' },
      { label: 'Production roadmap', href: '#prod' },
    ],
    follow: ['tools', 'security'],
    keywords: ['run', 'runs', 'where', 'cloud', 'server', 'browser', 'local', 'backend', 'worker', 'environment'],
  },
  {
    id: 'networks',
    chip: 'Testnet vs Mainnet',
    answer:
      'Use the network switch in the top bar. Testnet and Devnet use free, valueless XRP from a faucet — perfect for exploring. Mainnet uses real XRP; connect Xaman first so signing stays non-custodial. Wallets are per-network and stored locally.',
    links: [
      { label: 'Open the app', href: '#app' },
      { label: 'XRPL testnet faucet', href: 'https://xrpl.org/xrp-testnet-faucet.html', external: true },
    ],
    follow: ['wallet', 'xaman'],
    keywords: ['network', 'testnet', 'devnet', 'mainnet', 'faucet', 'switch', 'live'],
  },
  {
    id: 'xaman',
    chip: 'Xaman signing',
    answer:
      'Xaman (formerly XUMM) is a non-custodial XRPL wallet. Paste a free Xaman API key in the app, connect, and approve each transaction on your phone — the app only ever receives a signed result, never your seed. Recommended for Mainnet.',
    links: [
      { label: 'Get a free key', href: 'https://apps.xaman.dev', external: true },
      { label: 'Xaman app', href: 'https://xaman.app', external: true },
    ],
    follow: ['security', 'wallet'],
    keywords: ['xaman', 'xumm', 'sign', 'signing', 'connect wallet', 'non-custodial', 'mainnet'],
  },
  {
    id: 'troubleshoot',
    chip: 'Troubleshooting',
    answer:
      "If a skill won't settle, make sure the treasury wallet is created and funded (use the faucet on Testnet). If balances look stale, switch network and back to refresh. If the 3D office is blank, your browser may be blocking WebGL — try another browser or enable hardware acceleration.",
    links: [
      { label: 'Open the app', href: '#app' },
    ],
    follow: ['wallet', 'networks'],
    keywords: ['bug', 'broken', 'error', 'not working', 'stuck', 'blank', 'fail', 'problem', 'issue', 'help', 'webgl', 'refresh'],
  },
]

export const TOPIC_BY_ID: Record<string, KBTopic> = Object.fromEntries(KB.map((t) => [t.id, t]))

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
  "Hi! I'm the DojoBuro assistant. Ask me anything, or pick a topic below.";
