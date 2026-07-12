// Mission-first UX · the new primary entry. Instead of a wall of connectors,
// the user picks an outcome ("Créer une marque", "Lancer une campagne"…) and
// the right tool opens — either a role agent's dashboard or a studio module.
// Connectors become a secondary layer inside those tools.

export interface Mission {
  id: string
  label: string
  sub: string
  emoji: string
  tint: string
  /** where the mission leads: a role agent dashboard, or a studio module */
  target: { kind: 'agent'; role: string } | { kind: 'module'; moduleId: string }
}

export const MISSIONS: Mission[] = [
  { id: 'brand', label: 'Créer une marque', sub: 'Logo, couleurs, charte — Brand Kit', emoji: '🎨', tint: '#7b5cff', target: { kind: 'module', moduleId: 'branding' } },
  { id: 'site', label: 'Créer un site', sub: 'Site pro généré puis éditable', emoji: '🌐', tint: '#2f7fd6', target: { kind: 'module', moduleId: 'website' } },
  { id: 'campaign', label: 'Lancer une campagne', sub: 'Pubs Meta : audiences, créas, copies', emoji: '📣', tint: '#e0459b', target: { kind: 'module', moduleId: 'campaign' } },
  { id: 'video', label: 'Monter une vidéo', sub: 'Éditeur local façon CapCut, export .webm', emoji: '🎬', tint: '#e0483f', target: { kind: 'module', moduleId: 'video' } },
  { id: 'clients', label: 'Trouver des clients', sub: 'CRM, pipeline & séquences email', emoji: '🤝', tint: '#d98c17', target: { kind: 'module', moduleId: 'crm' } },
  { id: 'finance', label: 'Gérer mes finances', sub: 'Trésorerie, TVA, prévisions', emoji: '📊', tint: '#1fa563', target: { kind: 'module', moduleId: 'finance' } },
  { id: 'analyze', label: 'Analyser mon business', sub: 'Ventes, ROI, CAC, LTV expliqués', emoji: '📈', tint: '#0e9b6a', target: { kind: 'module', moduleId: 'analytics' } },
  { id: 'assets', label: 'Optimiser mes images', sub: 'Compression 100% locale', emoji: '🗂️', tint: '#0e9bb5', target: { kind: 'module', moduleId: 'assets' } },
]
