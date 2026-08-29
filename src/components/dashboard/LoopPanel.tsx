// The project LOOP panel · the orchestrator's run sheet.
//
// Shows the archetype's ordered steps (who does what, in which order) with live
// state while the loop runs, and one button to run the whole thing. Only appears
// on a project dojo created from an archetype.
import { useWorkshop } from '../../workshop'
import { useLoop, runLoop } from '../../agents/loop'
import { ARCHETYPE_BY_ID } from '../../data/archetypes'
import { ROLE_BY_ID } from '../../data/roleAgents'
import { InfoDot } from '../InfoDot'

export function LoopPanel({ dojoId }: { dojoId: string }) {
  const dojo = useWorkshop((s) => s.dojos.find((d) => d.id === dojoId))
  const setGoal = useWorkshop((s) => s.setDojoGoal)
  const loop = useLoop()

  const arch = dojo?.archetype ? ARCHETYPE_BY_ID[dojo.archetype] : null
  if (!dojo || !arch?.loop.length) return null

  const live = loop.dojoId === dojoId ? loop.steps : []
  const stateOf = (i: number) => live[i]?.state ?? 'pending'
  const done = live.filter((s) => s.state === 'done').length
  const running = loop.running && loop.dojoId === dojoId

  return (
    <section className="lp-panel" style={{ ['--ac' as string]: arch.tint }}>
      <header className="lp-panel-h">
        <h3>The loop
          <InfoDot title="The loop" label="How the loop works">
            <p>The loop is your crew working <b>in order</b>. Each step is handed to the agent that owns it, with your project goal as the brief and that agent's own connected apps.</p>
            <p>Every step produces a real deliverable you can open. You can also run any agent on its own — the loop is just the fast path.</p>
          </InfoDot>
        </h3>
        <span className="lp-count">{done}/{arch.loop.length}</span>
      </header>

      <input
        className="lp-goal"
        value={dojo.goal ?? ''}
        placeholder="The goal of this project · e.g. grow our Instagram to 10k with weekly posts"
        maxLength={240}
        onChange={(e) => setGoal(dojo.id, e.target.value)}
      />

      <ol className="lp-steps">
        {arch.loop.map((s, i) => {
          const r = ROLE_BY_ID[s.agent]
          const seat = dojo.agents.find((a) => a.role === s.agent)
          const st = stateOf(i)
          return (
            <li key={i} className={`lp-step s-${st}`}>
              <span className="lp-step-i" style={{ background: r?.tint ?? '#8892a6' }}>
                {st === 'done' ? '✓' : st === 'failed' ? '!' : i + 1}
              </span>
              <div className="lp-step-b">
                <strong>{s.label}</strong>
                <em>{seat?.name || r?.code || 'Agent'} · {s.detail}</em>
              </div>
              {st === 'running' && <span className="ceo-spin" />}
            </li>
          )
        })}
      </ol>

      {loop.error && loop.dojoId === dojoId && <p className="lp-err">{loop.error}</p>}

      <button className="btn primary tiny lp-run" disabled={running} onClick={() => void runLoop(dojoId)}>
        {running ? 'Running…' : done === arch.loop.length && done > 0 ? 'Run again' : 'Run the loop'}
      </button>
    </section>
  )
}
