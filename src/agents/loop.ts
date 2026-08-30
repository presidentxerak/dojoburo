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
import { useDeliverables } from './deliverables'
import { budgetBlock } from './usageMeter'
import { EFFORT_BY_ID, estimateStep } from '../data/effort'

export type StepState = 'pending' | 'running' | 'done' | 'failed' | 'reused'

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
  /** the step a stopped plan died on · what "Resume" starts from */
  stoppedAt: number | null
  reset: () => void
}

export const useLoop = create<LoopState>(() => ({
  dojoId: null,
  running: false,
  steps: [],
  error: null,
  stoppedAt: null,
  reset: () => useLoop.setState({ dojoId: null, running: false, steps: [], error: null, stoppedAt: null }),
}))

const ERR: Record<string, string> = {
  needs_key: 'Add your Claude key (Studio → Billing) so your team can work.',
  quota: 'You have used today\'s free allowance · add your Claude key to keep going.',
  not_configured: 'No AI is set up here yet · add your Claude key to get going.',
  network: 'Could not reach the server · try again in a moment.',
  unknown_task: 'The server does not know that task.',
  busy: 'Another task was already running · try again once it finishes.',
}

// ---------------------------------------------------------------------------
// Has anything about this step actually changed?
//
// Rerunning a plan after editing ONE brief used to re-pay for every step,
// including the ones whose inputs were byte-for-byte identical. A step's output
// depends on four things: the project goal, that teammate's sheet, the apps
// attached, and the effort mode. Hash those, remember the hash, and a rerun can
// offer to keep the result you already paid for.
//
// It is a change detector, not a security boundary — a cheap string hash is the
// right tool and a real digest would be theatre.
// ---------------------------------------------------------------------------
const SIG_KEY = 'dojoburo.stepsig.v1'

function hash(s: string): string {
  let h = 5381
  for (let i = 0; i < s.length; i++) h = ((h * 33) ^ s.charCodeAt(i)) >>> 0
  return h.toString(36)
}

function readSigs(): Record<string, string> {
  try { return JSON.parse(localStorage.getItem(SIG_KEY) || '{}') as Record<string, string> } catch { return {} }
}
function writeSig(key: string, sig: string) {
  try {
    const all = readSigs()
    all[key] = sig
    localStorage.setItem(SIG_KEY, JSON.stringify(all))
  } catch { /* private mode · caching is simply off */ }
}

const sigKey = (dojoId: string, task: string) => `${dojoId}::${task}`
const signature = (brief: string, context: string, connectors: string[], effort: string) =>
  hash([brief, context, [...connectors].sort().join(','), effort].join('\u0000'))

/** Is this dojo a project with a runnable loop? */
export function loopFor(dojoId: string): LoopStep[] {
  const d = useWorkshop.getState().dojos.find((x) => x.id === dojoId)
  const a = d?.archetype ? ARCHETYPE_BY_ID[d.archetype] : null
  return a?.loop ?? []
}

export interface RunLoopOpts {
  /** start here instead of at step 1 · what "Resume" uses */
  from?: number
  /** run only this one step */
  only?: number
  /** keep the result of any step whose inputs have not changed since last time */
  reuseUnchanged?: boolean
}

/**
 * Run a project's plan.
 *
 * The same function does the whole plan, a resume from step N, and a single
 * step, because they are the same walk with different bounds — and because the
 * three of them have to agree about hand-offs, pausing and error handling.
 */
export async function runLoop(dojoId: string, opts: RunLoopOpts = {}): Promise<void> {
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

  const first = opts.only ?? Math.max(0, Math.min(opts.from ?? 0, steps.length - 1))
  const last = opts.only !== undefined ? opts.only : steps.length - 1
  // Steps before the starting point already ran · show them as done rather than
  // pending, so a resumed plan does not look like it lost its first half.
  for (let i = 0; i < first; i++) steps[i].state = 'done'

  useLoop.setState({ dojoId, running: true, steps, error: null, stoppedAt: null })

  const brief = (dojo.goal || '').trim() || dojo.name
  const effort = useWork.getState().effort
  const sigs = readSigs()
  const setStep = (i: number, state: StepState) =>
    useLoop.setState((s) => ({ steps: s.steps.map((x, j) => (j === i ? { ...x, state } : x)) }))

  if (opts.only === undefined) {
    toast({
      kind: 'event', badge: '▶', color: arch.tint, title: dojo.name,
      text: first > 0
        ? `Resuming at step ${first + 1} of ${steps.length}.`
        : `${steps.length} steps · your team is starting.`,
    })
  }

  let ran = 0
  let reused = 0

  for (let i = first; i <= last; i++) {
    if (useEngine.getState().paused) {
      useLoop.setState({ error: 'Everything is paused · resume it in Settings.', stoppedAt: i })
      toast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Loop paused', text: 'The company is paused.' })
      break
    }
    const step = steps[i]

    // hand the agent its OWN connected apps so it can act inside them for real,
    // plus its context sheet so it works like that specialist
    const role = ROLE_BY_ID[step.agent]
    const ov = useAgentApps.getState().byKey[`${dojoId}::${step.agent}`]
    const connectors = effectiveApps(role?.apps ?? [], ov)
    const context = await loadContext(dojoId, step.agent)
    const key = sigKey(dojoId, step.task)
    const sig = signature(brief, context, connectors, effort)

    // Nothing about this step has changed and we still have what it produced ·
    // there is no reason to pay for the same answer twice.
    if (opts.reuseUnchanged && sigs[key] === sig && useDeliverables.getState().latest(dojoId, step.task)) {
      setStep(i, 'reused')
      reused++
      continue
    }

    // Your own daily ceiling, checked before the step rather than after · the
    // point of a limit is to stop the run you did not mean to start.
    const stop = budgetBlock(estimateStep(EFFORT_BY_ID[effort], connectors.length))
    if (stop) {
      setStep(i, 'failed')
      useLoop.setState({ error: stop, stoppedAt: i })
      toast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Daily limit', text: stop })
      break
    }

    setStep(i, 'running')
    useEngine.getState().record(`${step.agentName}:${step.task}`)

    await useWork.getState().run({ task: step.task, agentName: step.agentName, connectors, brief, context, silent: true, dojoId })

    const err = useWork.getState().runError
    if (err) {
      setStep(i, 'failed')
      const msg = ERR[err.code] || `Failed: ${err.detail || err.code}.`
      useLoop.setState({ error: msg, stoppedAt: i })
      toast({ kind: 'event', badge: '!', color: '#e0483f', title: 'Loop stopped', text: msg })
      break
    }
    writeSig(key, sig)
    setStep(i, 'done')
    ran++
  }

  useLoop.setState({ running: false })
  const finished = useLoop.getState().steps.filter((s) => s.state === 'done' || s.state === 'reused').length
  if (!useLoop.getState().error && finished === steps.length) {
    toast({
      kind: 'event', badge: 'OK', color: '#2fae6a', title: `${dojo.name} · done`,
      text: reused
        ? `${ran} step${ran === 1 ? '' : 's'} run, ${reused} kept unchanged — you paid for ${ran}.`
        : `${finished} results ready in this project.`,
    })
  }
}

/** Run exactly one step of a plan · the "rerun this one" button. */
export const runStep = (dojoId: string, index: number): Promise<void> => runLoop(dojoId, { only: index })

/** Pick up a stopped plan where it died, instead of paying for it from the top. */
export function resumeLoop(dojoId: string): Promise<void> {
  const at = useLoop.getState().stoppedAt
  return runLoop(dojoId, { from: at ?? 0 })
}

/** Which step of this dojo's plan produces a given task, or -1. */
export function stepIndexFor(dojoId: string, task: string): number {
  return loopFor(dojoId).findIndex((s) => s.task === task)
}

/** Has this step's input changed since the last time it ran? */
export function stepIsStale(dojoId: string, task: string, brief: string, context: string, connectors: string[], effort: string): boolean {
  return readSigs()[sigKey(dojoId, task)] !== signature(brief, context, connectors, effort)
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
