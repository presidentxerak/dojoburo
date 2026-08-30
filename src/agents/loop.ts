// The project LOOP · the orchestrator running its crew, in order.
//
// A project dojo comes from an archetype (data/archetypes) that declares an
// ordered set of steps: which agent acts, and what it produces. Running the loop
// walks those steps, hands each one to its agent with the project's goal as the
// brief and that agent's own connected apps, and produces a real deliverable per
// step. Progress is exposed as state so the UI can show a live checklist.
//
// Every step is gated the same way a manual run is: a hard company Pause stops
// the loop, and a missing model key stops it with a clear reason instead of
// faking a result.
import { create } from 'zustand'
import { useWork } from './workStore'
import { useEngine } from './engineStore'
import { useWorkshop } from '../workshop'
import { useDojo } from '../store'
import { useAgentApps, effectiveApps } from './agentApps'
import { ARCHETYPE_BY_ID, type LoopStep } from '../data/archetypes'
import { ROLE_BY_ID } from '../data/roleAgents'
import { loadContext } from '../data/agentContext'

export type StepState = 'pending' | 'running' | 'done' | 'failed'

export interface RunStep extends LoopStep {
  state: StepState
  /** the agent's display name in this dojo (it may have been renamed) */
  agentName: string
}

interface LoopState {
  dojoId: string | null
  running: boolean
  steps: RunStep[]
  /** why the loop stopped early, if it did */
  error: string | null
  reset: () => void
}

export const useLoop = create<LoopState>(() => ({
  dojoId: null,
  running: false,
  steps: [],
  error: null,
  reset: () => useLoop.setState({ dojoId: null, running: false, steps: [], error: null }),
}))

const ERR: Record<string, string> = {
  needs_key: 'Add your Claude key (Studio → Billing) so your team can work.',
  quota: 'You have used today\'s free allowance · add your Claude key to keep going.',
  not_configured: 'No AI is set up here yet · add your Claude key to get going.',
  network: 'Could not reach the server · try again in a moment.',
  unknown_task: 'The server does not know that task.',
}

/** Is this dojo a project with a runnable loop? */
export function loopFor(dojoId: string): LoopStep[] {
  const d = useWorkshop.getState().dojos.find((x) => x.id === dojoId)
  const a = d?.archetype ? ARCHETYPE_BY_ID[d.archetype] : null
  return a?.loop ?? []
}

/** Run the whole project loop, step by step. */
export async function runLoop(dojoId: string): Promise<void> {
  if (useLoop.getState().running || useWork.getState().runningTask) return
  const ws = useWorkshop.getState()
  const dojo = ws.dojos.find((d) => d.id === dojoId)
  if (!dojo?.archetype) return
  const arch = ARCHETYPE_BY_ID[dojo.archetype]
  if (!arch?.loop.length) return

  const toast = useDojo.getState().pushToast
  // resolve each step's agent to its (possibly renamed) teammate in this dojo
  const steps: RunStep[] = arch.loop.map((s) => {
    const seat = dojo.agents.find((a) => a.role === s.agent)
    return { ...s, state: 'pending' as StepState, agentName: seat?.name || ROLE_BY_ID[s.agent]?.name || 'Agent' }
  })
  useLoop.setState({ dojoId, running: true, steps, error: null })

  const brief = (dojo.goal || '').trim() || dojo.name
  const setStep = (i: number, state: StepState) =>
    useLoop.setState((s) => ({ steps: s.steps.map((x, j) => (j === i ? { ...x, state } : x)) }))

  toast({ kind: 'event', badge: '▶', color: arch.tint, title: dojo.name, text: `${steps.length} steps · your team is starting.` })

  for (let i = 0; i < steps.length; i++) {
    if (useEngine.getState().paused) {
      useLoop.setState({ error: 'Everything is paused · resume it in Settings.' })
      toast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Loop paused', text: 'The company is paused.' })
      break
    }
    const step = steps[i]
    setStep(i, 'running')
    useEngine.getState().record(`${step.agentName}:${step.task}`)

    // hand the agent its OWN connected apps so it can act inside them for real,
    // plus its context sheet so it works like that specialist
    const role = ROLE_BY_ID[step.agent]
    const ov = useAgentApps.getState().byKey[`${dojoId}::${step.agent}`]
    const connectors = effectiveApps(role?.apps ?? [], ov)
    const context = await loadContext(dojoId, step.agent)

    await useWork.getState().run({ task: step.task, agentName: step.agentName, connectors, brief, context, silent: true })

    const err = useWork.getState().runError
    if (err) {
      setStep(i, 'failed')
      const msg = ERR[err.code] || `Failed: ${err.detail || err.code}.`
      useLoop.setState({ error: msg })
      toast({ kind: 'event', badge: '!', color: '#e0483f', title: 'Loop stopped', text: msg })
      break
    }
    setStep(i, 'done')
  }

  useLoop.setState({ running: false })
  const done = useLoop.getState().steps.filter((s) => s.state === 'done').length
  if (done === steps.length) {
    toast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: `${dojo.name} · done`, text: `${done} results ready in this project.` })
  }
}

/** Pilot · the PIPELINE orchestrator. Runs every project's loop, in pipeline
 *  order, stopping at the first project that can't complete. */
export async function runPipeline(): Promise<void> {
  const ws = useWorkshop.getState()
  const projects = ws.dojos.filter((d) => d.archetype && ARCHETYPE_BY_ID[d.archetype]?.loop.length)
  if (!projects.length || useLoop.getState().running) return
  const toast = useDojo.getState().pushToast
  toast({ kind: 'event', badge: 'PILOT', color: '#6366f1', title: 'Your company is working', text: `${projects.length} team${projects.length > 1 ? 's' : ''} lined up, in order.` })

  for (const p of projects) {
    await runLoop(p.id)
    if (useLoop.getState().error) {
      toast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Stopped', text: `Stopped at "${p.name}".` })
      return
    }
  }
  toast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'All done', text: 'Every team ran start to finish.' })
}
