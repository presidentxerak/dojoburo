// Unified agent resolver. The office scene, the agent panel and the skill
// engine all read agent identity from here, so a custom (user-created) agent
// works exactly like a built-in one: name, role, skin and skills.
import { AGENT_BY_ID, type AgentSkill } from './data/agents'
import { CHARACTERS, type Character } from './data/looks'
import { skinById } from './data/skins'
import { FUNCTION_BY_ID } from './data/functions'
import { useWorkshop, type WAgent } from './workshop'

export interface AgentView {
  id: string
  name: string
  role: string
  department: string
  mission: string
  character: Character
  skills: AgentSkill[]
  custom: boolean
}

const TASK_DESC: Record<string, string> = {
  wallet: 'Create / inspect the agent XRPL wallet and top it up from the faucet.',
  pay: 'Settle a service on the XRP Ledger with an x402 memo (signed + submitted).',
  track: 'Anchor the agent action fingerprint on-ledger, making its behavior auditable.',
  standup: 'Rally the team · each agent reports its status.',
  okr: 'Generate the quarterly objectives and split them across departments.',
  allocate: 'Send an XRP allocation from the treasury (on-ledger payment).',
  ship: 'Implement then "deploy" a product increment.',
  review: 'Analyze a diff, surface bugs and suggest simplifications.',
  deploy: 'Deploy and keep services healthy.',
  reconcile: 'Reconcile the treasury and report the runway.',
  invoice: 'Issue an x402 invoice and receive a client settlement.',
  report: 'Compile KPIs and highlight trends.',
  close: 'Move an opportunity through the pipeline to signature.',
  getpaid: 'Receive an x402 client settlement on the XRP Ledger.',
  campaign: 'Plan and launch a growth campaign.',
  spec: 'Write a spec with testable acceptance criteria.',
  design: 'Design a screen and its key states.',
  kanban: 'Re-prioritize and groom the backlog.',
  morale: 'Boost the team morale.',
  hire: 'Screen a candidate and onboard them.',
  dashboard: 'Build a live metrics dashboard.',
  analysis: "Aggregate the agents' XRPL transactions to measure internal activity.",
}
const XRPL_TASKS = new Set(['wallet', 'pay', 'track', 'invoice', 'getpaid', 'allocate'])
const ANALYSIS_TASKS = new Set(['okr', 'report', 'analysis', 'reconcile'])

function skillsFor(a: WAgent): AgentSkill[] {
  const f = FUNCTION_BY_ID[a.fn]
  return a.tasks.map((tid) => {
    const t = f?.tasks.find((x) => x.id === tid)
    const kind: AgentSkill['kind'] = XRPL_TASKS.has(tid) ? 'xrpl' : ANALYSIS_TASKS.has(tid) ? 'analysis' : 'action'
    return {
      id: `${a.id}.${tid}`,
      name: t?.name ?? tid,
      description: TASK_DESC[tid] ?? `${t?.name ?? tid}.`,
      kind,
      price: t?.price ?? 0,
      duration: kind === 'xrpl' ? 2800 : 3000,
    }
  })
}

function findWAgent(id: string): WAgent | undefined {
  const s = useWorkshop.getState()
  const d = s.dojos.find((x) => x.id === s.activeDojoId)
  return d?.agents.find((a) => a.id === id)
}

/** Resolve any agent id (built-in or custom) to a renderable view. Built-in
 *  agents keep their real skills but reflect the chosen skin + name. */
export function getAgentView(id: string | null): AgentView | null {
  if (!id) return null
  const def = AGENT_BY_ID[id]
  const wa = findWAgent(id)

  if (wa) {
    return {
      id,
      name: wa.name,
      role: def ? def.role : `${FUNCTION_BY_ID[wa.fn]?.label ?? wa.fn} agent`,
      department: wa.fn,
      mission: def ? def.mission : FUNCTION_BY_ID[wa.fn]?.blurb ?? '',
      character: skinById(wa.skinId),
      skills: def ? def.skills : skillsFor(wa),
      custom: !def,
    }
  }
  if (def) {
    return { id, name: def.name, role: def.role, department: def.department, mission: def.mission, character: CHARACTERS[id], skills: def.skills, custom: false }
  }
  return null
}

export function agentLabel(id: string): string {
  return getAgentView(id)?.name ?? AGENT_BY_ID[id]?.name ?? id
}
