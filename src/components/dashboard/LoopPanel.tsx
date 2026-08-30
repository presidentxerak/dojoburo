// The project LOOP panel · the orchestrator's run sheet.
//
// Shows the archetype's ordered steps (who does what, in which order) with live
// state while the loop runs. Three things it now does that it did not:
//
//   · the Run button says what the run will cost, in the mode you are in, so
//     spending is a decision rather than something you discover afterwards,
//   · any single step can be rerun on its own — which is what the Academy
//     teaches you to do, and what the app previously gave you no way to do,
//   · a plan that stopped can be picked up where it died instead of paying for
//     the steps that already succeeded.
import { useWorkshop } from '../../workshop'
import { useLoop, runLoop, runStep, resumeLoop } from '../../agents/loop'
import { useWork } from '../../agents/workStore'
import { useAgentApps, effectiveApps } from '../../agents/agentApps'
import { ARCHETYPE_BY_ID } from '../../data/archetypes'
import { ROLE_BY_ID } from '../../data/roleAgents'
import { EFFORT_BY_ID, estimateRun, estimateStep, tokLabel } from '../../data/effort'
import { InfoDot } from '../InfoDot'

export function LoopPanel({ dojoId }: { dojoId: string }) {
  const dojo = useWorkshop((s) => s.dojos.find((d) => d.id === dojoId))
  const setGoal = useWorkshop((s) => s.setDojoGoal)
  const loop = useLoop()
  const effort = useWork((s) => s.effort)
  const tools = useWork((s) => s.tools)
  const byKey = useAgentApps((s) => s.byKey)

  const arch = dojo?.archetype ? ARCHETYPE_BY_ID[dojo.archetype] : null
  if (!dojo || !arch?.loop.length) return null

  const live = loop.dojoId === dojoId ? loop.steps : []
  const stateOf = (i: number) => live[i]?.state ?? 'pending'
  const done = live.filter((s) => s.state === 'done' || s.state === 'reused').length
  const running = loop.running && loop.dojoId === dojoId
  const mode = EFFORT_BY_ID[effort]
  const stopped = loop.dojoId === dojoId && !running && loop.stoppedAt !== null

  /** how many of this step's apps are actually connected · what it really sends */
  const appsFor = (agent: string) => {
    const defaults = ROLE_BY_ID[agent]?.apps ?? []
    return effectiveApps(defaults, byKey[`${dojoId}::${agent}`]).filter((id) => tools[id]?.connected).length
  }
  const peakApps = Math.max(0, ...arch.loop.map((s) => appsFor(s.agent)))
  const runEstimate = estimateRun(mode, arch.loop.length, peakApps)

  return (
    <section className="lp-panel" style={{ ['--ac' as string]: arch.tint }}>
      <header className="lp-panel-h">
        <h3>The plan
          <InfoDot title="The plan" label="How this gets done">
            <p>Your team works through these steps <b>in order</b>. Each step goes to the teammate who owns it, with your goal as the brief and the apps they can reach.</p>
            <p>Every step produces something real you can open. Rerun any single step on its own with the <b>↻</b> button — that is how you check whether a change to a teammate's brief actually helped, without paying for the whole plan again.</p>
          </InfoDot>
        </h3>
        <span className="lp-count">{done}/{arch.loop.length}</span>
      </header>

      <input
        className="lp-goal"
        value={dojo.goal ?? ''}
        placeholder="What do you want out of this? e.g. grow our Instagram to 10k with weekly posts"
        maxLength={240}
        onChange={(e) => setGoal(dojo.id, e.target.value)}
      />

      <ol className="lp-steps">
        {arch.loop.map((s, i) => {
          const r = ROLE_BY_ID[s.agent]
          const seat = dojo.agents.find((a) => a.role === s.agent)
          const st = stateOf(i)
          const one = estimateStep(mode, appsFor(s.agent))
          return (
            <li key={i} className={`lp-step s-${st}`}>
              <span className="lp-step-i" style={{ background: r?.tint ?? '#8892a6' }}>
                {st === 'done' ? '✓' : st === 'reused' ? '=' : st === 'failed' ? '!' : i + 1}
              </span>
              <div className="lp-step-b">
                <strong>{s.label}</strong>
                <em>
                  {seat?.name || r?.code || 'Agent'} · {s.detail}
                  {st === 'reused' && <b className="lp-kept"> · kept, nothing changed</b>}
                </em>
              </div>
              {st === 'running'
                ? <span className="ceo-spin" />
                : (
                  <button
                    className="lp-rerun"
                    disabled={running}
                    title={`Run just this step · about ${tokLabel(one)} tokens in ${mode.label}`}
                    aria-label={`Rerun ${s.label}`}
                    onClick={() => void runStep(dojoId, i)}
                  >↻</button>
                )}
            </li>
          )
        })}
      </ol>

      {loop.error && loop.dojoId === dojoId && <p className="lp-err">{loop.error}</p>}

      <div className="lp-acts">
        {stopped && (
          <button className="btn tiny lp-resume" onClick={() => void resumeLoop(dojoId)}>
            Resume at step {(loop.stoppedAt ?? 0) + 1}
          </button>
        )}
        <button
          className="btn primary tiny lp-run"
          disabled={running}
          onClick={() => void runLoop(dojoId, { reuseUnchanged: done > 0 })}
        >
          {running
            ? 'Working…'
            : done === arch.loop.length && done > 0
              ? `Run it again · ≈${tokLabel(runEstimate)}`
              : `Run every step · ≈${tokLabel(runEstimate)}`}
        </button>
      </div>
      <p className="lp-est">
        {arch.loop.length} steps in <b>{mode.label}</b>
        {peakApps ? `, up to ${Math.min(peakApps, mode.maxApps)} app${Math.min(peakApps, mode.maxApps) === 1 ? '' : 's'} attached` : ', no apps attached'}
        {done > 0 && ' · steps whose brief has not changed are kept, not re-paid for'}
      </p>
    </section>
  )
}
