// ---------------------------------------------------------------------------
// DojoBuro — Agent roster
// Every agent has a real function inside a startup, a set of skills, a pixel
// palette and a desk position on the office floor. Skills marked `priced` cost
// XRP and are settled on the XRP Ledger (x402-style agentic payments).
// ---------------------------------------------------------------------------

export type SkillKind = 'action' | 'xrpl' | 'analysis'

export interface AgentSkill {
  id: string
  name: string
  description: string
  kind: SkillKind
  /** Price in XRP for an x402-style agentic invocation. 0 = free. */
  price: number
  /** Rough duration of the animated "working" state, in ms. */
  duration: number
}

export interface AgentDef {
  id: string
  name: string
  role: string
  department: 'Direction' | 'Tech' | 'Finance' | 'Growth' | 'Produit' | 'People' | 'Ops'
  emoji: string
  /** Short mission statement shown in the agent panel. */
  mission: string
  /** Pixel-sprite palette. */
  palette: { skin: string; hair: string; shirt: string; accent: string }
  /** Desk coordinates on the office grid (col,row on a 12x8 grid). */
  desk: { x: number; y: number }
  skills: AgentSkill[]
}

// Shared XRPL skills every agent can run (wallet, payments, tracking).
const xrplSkills = (idp: string): AgentSkill[] => [
  {
    id: `${idp}.wallet`,
    name: 'Wallet XRPL',
    description:
      "Génère / consulte le wallet XRPL de l'agent, affiche solde et adresse (r...). Sur Testnet, finance via le faucet.",
    kind: 'xrpl',
    price: 0,
    duration: 2600,
  },
  {
    id: `${idp}.pay`,
    name: 'Paiement agentique (x402)',
    description:
      "Règle une prestation entre agents sur le XRP Ledger. Le paiement porte un mémo x402 (skill, invoice) et est signé + soumis on-ledger.",
    kind: 'xrpl',
    price: 0,
    duration: 3200,
  },
  {
    id: `${idp}.track`,
    name: 'Track behavior',
    description:
      "Publie l'empreinte de l'action de l'agent (hash mémo) sur le ledger pour tracer son comportement de façon auditable.",
    kind: 'xrpl',
    price: 0,
    duration: 2400,
  },
]

export const AGENTS: AgentDef[] = [
  {
    id: 'ava',
    name: 'Ava',
    role: 'CEO — Orchestratrice',
    department: 'Direction',
    emoji: '👑',
    mission:
      "Fixe la vision, priorise la roadmap et orchestre les autres agents. Déclenche les rituels d'équipe et arbitre le budget.",
    palette: { skin: '#f2c8a0', hair: '#3a2d28', shirt: '#f5b301', accent: '#ffffff' },
    desk: { x: 6, y: 1 },
    skills: [
      {
        id: 'ava.standup',
        name: 'Daily standup',
        description: "Fait tourner l'équipe : chaque agent joue une micro-tâche et rapporte son statut.",
        kind: 'action',
        price: 0,
        duration: 3800,
      },
      {
        id: 'ava.okr',
        name: 'Définir les OKR',
        description: "Génère les objectifs trimestriels et les répartit par département.",
        kind: 'analysis',
        price: 0,
        duration: 3000,
      },
      {
        id: 'ava.fund',
        name: 'Allouer le budget',
        description: "Verse une allocation XRP depuis la trésorerie vers un département (paiement on-ledger).",
        kind: 'xrpl',
        price: 0.5,
        duration: 3400,
      },
      ...xrplSkills('ava'),
    ],
  },
  {
    id: 'rex',
    name: 'Rex',
    role: 'CTO — Ingénierie',
    department: 'Tech',
    emoji: '🛠️',
    mission: "Conçoit l'architecture, écrit et review le code, garde la dette technique sous contrôle.",
    palette: { skin: '#e8b98a', hair: '#1f1a17', shirt: '#38bdf8', accent: '#0f172a' },
    desk: { x: 2, y: 2 },
    skills: [
      {
        id: 'rex.ship',
        name: 'Ship une feature',
        description: "Implémente puis 'déploie' un incrément produit. Émet un artefact de build.",
        kind: 'action',
        price: 0,
        duration: 4200,
      },
      {
        id: 'rex.review',
        name: 'Code review',
        description: "Analyse un diff, relève les bugs et suggère des simplifications.",
        kind: 'analysis',
        price: 0.2,
        duration: 3200,
      },
      ...xrplSkills('rex'),
    ],
  },
  {
    id: 'otto',
    name: 'Otto',
    role: 'DevOps — Infrastructure',
    department: 'Ops',
    emoji: '⚙️',
    mission: "Automatise le déploiement, surveille l'uptime, tient les pipelines CI/CD au vert.",
    palette: { skin: '#d8a978', hair: '#4a3b2a', shirt: '#22c55e', accent: '#052e16' },
    desk: { x: 1, y: 4 },
    skills: [
      {
        id: 'otto.deploy',
        name: 'Déployer en prod',
        description: "Lance un déploiement, joue les health-checks et rollback si besoin.",
        kind: 'action',
        price: 0,
        duration: 3800,
      },
      {
        id: 'otto.scale',
        name: 'Scaler la charge',
        description: "Ajuste les ressources en fonction du trafic simulé.",
        kind: 'action',
        price: 0,
        duration: 3000,
      },
      ...xrplSkills('otto'),
    ],
  },
  {
    id: 'fin',
    name: 'Fin',
    role: 'CFO — Trésorerie',
    department: 'Finance',
    emoji: '💰',
    mission:
      "Gère la trésorerie XRPL, suit le burn-rate, exécute et réconcilie les paiements agentiques.",
    palette: { skin: '#f0c9a4', hair: '#2b2b2b', shirt: '#a78bfa', accent: '#1e1b4b' },
    desk: { x: 10, y: 2 },
    skills: [
      {
        id: 'fin.treasury',
        name: 'Ouvrir la trésorerie',
        description: "Crée / recharge le wallet de trésorerie de la startup et affiche le solde consolidé.",
        kind: 'xrpl',
        price: 0,
        duration: 3000,
      },
      {
        id: 'fin.payroll',
        name: 'Payer les agents',
        description: "Distribue une paie XRP à chaque agent depuis la trésorerie, en un batch on-ledger.",
        kind: 'xrpl',
        price: 0,
        duration: 4600,
      },
      {
        id: 'fin.audit',
        name: 'Audit on-ledger',
        description: "Récupère l'historique account_tx d'un wallet et calcule les flux entrants/sortants.",
        kind: 'analysis',
        price: 0,
        duration: 3200,
      },
      ...xrplSkills('fin'),
    ],
  },
  {
    id: 'mia',
    name: 'Mia',
    role: 'CMO — Marketing',
    department: 'Growth',
    emoji: '📣',
    mission: "Construit la marque, lance les campagnes et alimente le haut du funnel.",
    palette: { skin: '#f4d0b0', hair: '#7c2d12', shirt: '#fb7185', accent: '#4c0519' },
    desk: { x: 4, y: 5 },
    skills: [
      {
        id: 'mia.campaign',
        name: 'Lancer une campagne',
        description: "Rédige un angle, une accroche et un plan de diffusion multicanal.",
        kind: 'action',
        price: 0,
        duration: 3600,
      },
      {
        id: 'mia.brand',
        name: 'Audit de marque',
        description: "Évalue la cohérence de marque et propose des ajustements.",
        kind: 'analysis',
        price: 0.15,
        duration: 3000,
      },
      ...xrplSkills('mia'),
    ],
  },
  {
    id: 'sol',
    name: 'Sol',
    role: 'Head of Sales — Revenus',
    department: 'Growth',
    emoji: '🤝',
    mission: "Qualifie les leads, mène les démos et signe les contrats. Encaisse en XRP.",
    palette: { skin: '#e6b087', hair: '#111827', shirt: '#f97316', accent: '#431407' },
    desk: { x: 8, y: 5 },
    skills: [
      {
        id: 'sol.close',
        name: 'Closer un deal',
        description: "Fait avancer une opportunité dans le pipeline jusqu'à la signature.",
        kind: 'action',
        price: 0,
        duration: 3600,
      },
      {
        id: 'sol.invoice',
        name: 'Encaisser (x402)',
        description: "Émet une facture x402 et reçoit le règlement d'un client sur le XRP Ledger.",
        kind: 'xrpl',
        price: 0,
        duration: 3400,
      },
      ...xrplSkills('sol'),
    ],
  },
  {
    id: 'pia',
    name: 'Pia',
    role: 'Product Manager',
    department: 'Produit',
    emoji: '🧭',
    mission: "Traduit les besoins en specs, priorise le backlog et mesure l'impact.",
    palette: { skin: '#f1c7a2', hair: '#374151', shirt: '#2dd4bf', accent: '#042f2e' },
    desk: { x: 6, y: 3 },
    skills: [
      {
        id: 'pia.spec',
        name: 'Écrire une spec',
        description: "Transforme une idée en spec produit avec critères d'acceptation.",
        kind: 'action',
        price: 0,
        duration: 3400,
      },
      {
        id: 'pia.prioritize',
        name: 'Prioriser le backlog',
        description: "Classe les items via un scoring impact/effort.",
        kind: 'analysis',
        price: 0,
        duration: 2800,
      },
      ...xrplSkills('pia'),
    ],
  },
  {
    id: 'dex',
    name: 'Dex',
    role: 'Lead Designer — UX/UI',
    department: 'Produit',
    emoji: '🎨',
    mission: "Dessine les parcours, les maquettes et le design system pixel-perfect.",
    palette: { skin: '#eabf98', hair: '#6d28d9', shirt: '#c084fc', accent: '#2e1065' },
    desk: { x: 3, y: 3 },
    skills: [
      {
        id: 'dex.mockup',
        name: 'Produire une maquette',
        description: "Génère un écran clé et ses variantes d'états.",
        kind: 'action',
        price: 0,
        duration: 3400,
      },
      {
        id: 'dex.system',
        name: 'Design system',
        description: "Formalise tokens, composants et règles d'accessibilité.",
        kind: 'analysis',
        price: 0.15,
        duration: 3000,
      },
      ...xrplSkills('dex'),
    ],
  },
  {
    id: 'ada',
    name: 'Ada',
    role: 'Data Analyst',
    department: 'Tech',
    emoji: '📊',
    mission: "Instrumente les métriques, construit les dashboards et détecte les signaux.",
    palette: { skin: '#e9bd93', hair: '#0f766e', shirt: '#0ea5e9', accent: '#082f49' },
    desk: { x: 10, y: 4 },
    skills: [
      {
        id: 'ada.report',
        name: 'Rapport hebdo',
        description: "Compile KPIs (activation, rétention, MRR) et met en évidence les tendances.",
        kind: 'analysis',
        price: 0,
        duration: 3400,
      },
      {
        id: 'ada.ledger',
        name: 'Analyse on-ledger',
        description: "Agrège les transactions XRPL des agents pour mesurer l'activité économique interne.",
        kind: 'xrpl',
        price: 0,
        duration: 3200,
      },
      ...xrplSkills('ada'),
    ],
  },
  {
    id: 'hana',
    name: 'Hana',
    role: 'People Ops — RH',
    department: 'People',
    emoji: '🌱',
    mission: "Recrute, onboarde et prend soin du moral de l'équipe d'agents.",
    palette: { skin: '#f3cdaa', hair: '#9d174d', shirt: '#34d399', accent: '#064e3b' },
    desk: { x: 2, y: 6 },
    skills: [
      {
        id: 'hana.hire',
        name: 'Recruter un agent',
        description: "Ouvre un poste, évalue des profils et fait une offre.",
        kind: 'action',
        price: 0,
        duration: 3600,
      },
      {
        id: 'hana.morale',
        name: 'Boost de moral',
        description: "Remonte l'humeur de toute l'équipe (les visages sourient !).",
        kind: 'action',
        price: 0,
        duration: 3000,
      },
      ...xrplSkills('hana'),
    ],
  },
  {
    id: 'sam',
    name: 'Sam',
    role: 'Customer Support',
    department: 'Ops',
    emoji: '🎧',
    mission: "Répond aux tickets, résout les incidents et remonte les irritants produit.",
    palette: { skin: '#e4ad82', hair: '#1e3a8a', shirt: '#60a5fa', accent: '#172554' },
    desk: { x: 9, y: 6 },
    skills: [
      {
        id: 'sam.ticket',
        name: 'Traiter un ticket',
        description: "Prend un ticket, diagnostique et répond au client.",
        kind: 'action',
        price: 0,
        duration: 3000,
      },
      {
        id: 'sam.csat',
        name: 'Mesurer le CSAT',
        description: "Calcule la satisfaction et propose des améliorations.",
        kind: 'analysis',
        price: 0,
        duration: 2600,
      },
      ...xrplSkills('sam'),
    ],
  },
  {
    id: 'lex',
    name: 'Lex',
    role: 'Legal & Compliance',
    department: 'Direction',
    emoji: '⚖️',
    mission: "Rédige les contrats, vérifie la conformité et sécurise les paiements on-chain.",
    palette: { skin: '#edc39c', hair: '#292524', shirt: '#94a3b8', accent: '#0f172a' },
    desk: { x: 7, y: 6 },
    skills: [
      {
        id: 'lex.contract',
        name: 'Rédiger un contrat',
        description: "Produit un contrat type et ses clauses clés.",
        kind: 'action',
        price: 0,
        duration: 3400,
      },
      {
        id: 'lex.compliance',
        name: 'Check conformité',
        description: "Vérifie qu'une action (dont un paiement XRPL) respecte les règles internes.",
        kind: 'analysis',
        price: 0,
        duration: 3000,
      },
      ...xrplSkills('lex'),
    ],
  },
]

export const AGENT_BY_ID = Object.fromEntries(AGENTS.map((a) => [a.id, a])) as Record<string, AgentDef>

export const DEPARTMENTS = [
  'Direction',
  'Tech',
  'Finance',
  'Growth',
  'Produit',
  'People',
  'Ops',
] as const
