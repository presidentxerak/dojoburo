// Mission-first UX · the primary entry. Pick an outcome and the right studio
// opens. One mission per studio, matching the agent that owns it.

export interface Mission {
  id: string
  label: string
  sub: string
  emoji: string
  tint: string
  target: { kind: 'agent'; role: string } | { kind: 'module'; moduleId: string }
}

export const MISSIONS: Mission[] = [
  { id: 'brand', label: 'Create a brand', sub: 'Logo, colors, kit — Brand Kit', emoji: '🎨', tint: '#a855f7', target: { kind: 'module', moduleId: 'branding' } },
  { id: 'site', label: 'Build a website', sub: 'Pro site, generated then editable', emoji: '🌐', tint: '#2f7fd6', target: { kind: 'module', moduleId: 'website' } },
  { id: 'campaign', label: 'Launch a campaign', sub: 'Meta ads: audiences, creatives, copy', emoji: '📣', tint: '#e0459b', target: { kind: 'module', moduleId: 'campaign' } },
  { id: 'video', label: 'Edit a video', sub: 'Local editor, .webm export', emoji: '🎬', tint: '#e0483f', target: { kind: 'module', moduleId: 'video' } },
  { id: 'clients', label: 'Find clients', sub: 'CRM, pipeline & email sequences', emoji: '🤝', tint: '#d98c17', target: { kind: 'module', moduleId: 'crm' } },
  { id: 'finance', label: 'Manage finances', sub: 'Cash, VAT, forecasts', emoji: '📊', tint: '#1fa563', target: { kind: 'module', moduleId: 'finance' } },
  { id: 'analyze', label: 'Analyze my business', sub: 'Sales, ROI, CAC, LTV explained', emoji: '📈', tint: '#0e9b6a', target: { kind: 'module', moduleId: 'analytics' } },
  { id: 'assets', label: 'Optimize images', sub: '100% local compression', emoji: '🗂️', tint: '#14b8a6', target: { kind: 'module', moduleId: 'assets' } },
]
