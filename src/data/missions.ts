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
  { id: 'brand', label: 'Create a brand', sub: 'Names, domains & .com availability', emoji: '🎨', tint: '#a855f7', target: { kind: 'module', moduleId: 'branding' } },
  { id: 'site', label: 'Build a website', sub: 'Pro site, generated then editable', emoji: '🌐', tint: '#2f7fd6', target: { kind: 'module', moduleId: 'website' } },
  { id: 'marketing', label: 'Market my product', sub: 'Meta ads, video & image content', emoji: '📣', tint: '#e0459b', target: { kind: 'module', moduleId: 'marketing' } },
  { id: 'clients', label: 'Find clients', sub: 'Leads, pipeline & email sequences', emoji: '🤝', tint: '#d98c17', target: { kind: 'module', moduleId: 'crm' } },
  { id: 'business', label: 'Run the numbers', sub: 'Finance + analytics in one dashboard', emoji: '📊', tint: '#1fa563', target: { kind: 'module', moduleId: 'business' } },
]
