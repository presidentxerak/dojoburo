// The autonomous CEO. After the initial prompt (onboarding), or on demand, the
// CEO runs a whole pipeline by itself — strategy → website → offer → ads →
// outreach — producing real deliverables, exactly like nanocorp's CEO kicking
// off after you describe the company. Each step is gated by the Engine (autonomy
// cap + daily credit cap), so it can't run away, and it stops with a clear reason
// if a model isn't configured yet.
import { useWork } from './workStore'
import { useEngine } from './engineStore'
import { useDeliverables } from './deliverables'
import { useWorkshop } from '../workshop'
import { useDojo } from '../store'

const PIPELINE: Array<{ task: string; label: string }> = [
  { task: 'strategy', label: 'Strategy & OKRs' },
  { task: 'website', label: 'Website' },
  { task: 'offer', label: 'Offer & pricing' },
  { task: 'ads', label: 'Ads' },
  { task: 'outreach', label: 'Outreach' },
]

const ERR: Record<string, string> = {
  needs_key: 'Add your Claude key (Studio → Billing) so the CEO can work.',
  quota: 'Daily free quota reached — add your Claude key to continue.',
  not_configured: 'No AI model is configured on this deployment (Claude key or free cascade).',
  network: 'Unable to connect to the server — try again in a moment.',
  unknown_task: 'Task not recognized by the server.',
}

/** Run the CEO's full build pipeline. `brief` is the company description. */
export async function launchCeo(brief: string): Promise<void> {
  const work = useWork.getState()
  if (work.autopilot.running || work.runningTask) return

  const ws = useWorkshop.getState()
  const dojo = ws.dojos.find((d) => d.id === ws.activeDojoId) ?? ws.dojos[0]
  const ceo = dojo?.agents.find((a) => a.fn === 'Leadership') ?? dojo?.agents[0]
  const ceoName = ceo?.name || 'CEO'
  const toast = useDojo.getState().pushToast

  work.setAutopilot({ running: true, step: PIPELINE[0].label })
  toast({ kind: 'event', badge: 'CEO', color: '#7b2ff7', title: ceoName, text: 'Getting started — I’m building your company…' })

  const before = useWorkshop.getState().activeDojoId
    ? useDeliverables.getState().list(useWorkshop.getState().activeDojoId!).length : 0

  for (const step of PIPELINE) {
    // The initial build is an EXPLICIT user action, not background autonomy, so
    // it isn't capped by the daily autonomy limit — only a hard company Pause
    // stops it. We still record it so the counters move.
    if (useEngine.getState().paused) { toast({ kind: 'event', badge: '!', color: '#d9822b', title: 'CEO paused', text: 'Company paused — resume in Settings.' }); break }
    useEngine.getState().record(`${ceoName}:${step.task}`)
    useWork.getState().setAutopilot({ running: true, step: step.label })
    toast({ kind: 'event', badge: '▶', color: '#2f7fd6', title: `CEO · ${step.label}`, text: 'in progress…' })

    await useWork.getState().run({ task: step.task, agentName: ceoName, connectors: [], brief, silent: true })

    const err = useWork.getState().runError
    if (err) { toast({ kind: 'event', badge: '!', color: '#e0483f', title: 'CEO stopped', text: ERR[err.code] || `Failed: ${err.detail || err.code}.` }); break }
  }

  useWork.getState().setAutopilot({ running: false, step: null })
  const list = useDeliverables.getState().list(useWorkshop.getState().activeDojoId || '')
  const produced = list.length - before
  const drafts = list.some((d) => d.model === 'local draft')
  if (list.length && drafts) {
    toast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Drafts ready', text: 'No AI model connected: these are drafts. Add a key in Studio → Billing for real generation.' })
  } else if (produced > 0) {
    toast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'CEO', text: `${produced} deliverable(s) ready — check your panels.` })
  }
}
