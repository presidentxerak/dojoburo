// ---------------------------------------------------------------------------
// DojoBuro · Role agents — one agent per functionality / studio.
//
// A company is run by twelve functional agents. Eight of them own a dedicated
// studio (Branding, Website, Campaign, Video, CRM, Finance, Analytics, Assets);
// the other four are the CEO plus the Engine, Credits and Config utilities.
// These are the characters you see in the dojo; clicking one opens that agent's
// dashboard / studio. The `dept` mapping reuses the existing 3D characters.
// ---------------------------------------------------------------------------
import type { Department } from './agents'

export interface RoleAgent {
  id: string
  name: string
  role: string
  cat: string
  blurb: string
  tint: string
  dept: Department
}

export const ROLE_AGENTS: RoleAgent[] = [
  {
    id: 'ceo', name: 'Ava', role: 'CEO · Orchestrator', cat: 'Direction',
    blurb: 'Coordinates every agent: you talk to it, it breaks the work down and delegates.',
    tint: '#7b5cff', dept: 'Leadership',
  },
  {
    id: 'brand', name: 'Bo', role: 'Brand Agent · Branding Studio', cat: 'Brand',
    blurb: 'Opens the Branding Studio: logo, palette, typography and a central Brand Kit.',
    tint: '#a855f7', dept: 'Product',
  },
  {
    id: 'web', name: 'Wren', role: 'Web Agent · Website Builder', cat: 'Web',
    blurb: 'Opens the Website Builder: blocks, live editing, responsive, brand theme, HTML export.',
    tint: '#2f7fd6', dept: 'Product',
  },
  {
    id: 'acq', name: 'Mia', role: 'Acquisition Agent · Campaign Studio', cat: 'Growth',
    blurb: 'Opens the Campaign Studio: full Meta campaigns — objective, audiences, creatives, copy.',
    tint: '#e0459b', dept: 'Growth',
  },
  {
    id: 'video', name: 'Vic', role: 'Video Agent · Video Creator', cat: 'Video',
    blurb: 'Opens the Video Creator: import, trim, brand captions, social formats, .webm export.',
    tint: '#e0483f', dept: 'Growth',
  },
  {
    id: 'outbound', name: 'Sol', role: 'Sales Agent · CRM & Outbound', cat: 'Sales',
    blurb: 'Opens the CRM: pipeline, prospects and personalised email sequences.',
    tint: '#d98c17', dept: 'Growth',
  },
  {
    id: 'revenue', name: 'Fin', role: 'Revenue Agent · Finance', cat: 'Revenue',
    blurb: 'Opens Finance & Accounting: revenue, expenses, cash, VAT, forecasts.',
    tint: '#1fa563', dept: 'Finance',
  },
  {
    id: 'measure', name: 'Ada', role: 'Data Agent · Analytics', cat: 'Data',
    blurb: 'Opens Analytics: sales, CAC, LTV, ROI and growth — explained by AI.',
    tint: '#0e9b6a', dept: 'Engineering',
  },
  {
    id: 'work', name: 'Wade', role: 'Ops Agent · Asset Library', cat: 'Assets',
    blurb: 'Opens the Asset Library: optimise your images locally and keep them offline.',
    tint: '#14b8a6', dept: 'Engineering',
  },
  {
    id: 'engine', name: 'Otto', role: 'Engine Agent · Autonomy', cat: 'Engine',
    blurb: 'Tunes how autonomous the CEO is and keeps it from overspending or looping.',
    tint: '#e07a2a', dept: 'Ops',
  },
  {
    id: 'credit', name: 'Cleo', role: 'Billing Agent · Credits', cat: 'Credits',
    blurb: 'Manages your credits: top up in your currency, no crypto in sight.',
    tint: '#0e9bb5', dept: 'Finance',
  },
  {
    id: 'config', name: 'Cody', role: 'Config Agent · Secrets', cat: 'Config',
    blurb: 'Keeps your environment variables encrypted plus the safety switches.',
    tint: '#5b6472', dept: 'Ops',
  },
]

export const ROLE_BY_ID: Record<string, RoleAgent> = Object.fromEntries(ROLE_AGENTS.map((r) => [r.id, r]))
export const ROLE_IDS: string[] = ROLE_AGENTS.map((r) => r.id)
