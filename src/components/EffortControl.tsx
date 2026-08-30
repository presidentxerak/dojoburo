// The token dial · pick how hard your team works, and watch what it costs.
//
// Two pieces:
//
//   EffortPill   the chip in the dojo header. Shows the mode you are in and how
//                many tokens you have spent today, so consumption is never a
//                surprise you discover on a bill.
//   EffortPanel  the full picker: what each mode actually changes, what this
//                team's next full run is likely to cost in each one, and the
//                real numbers from the runs you have already done.
//
// The estimates come from data/effort. The measurements come from the model's
// own reported usage (agents/usageMeter) — so the panel shows our guess and the
// truth side by side, and you can tell when we are wrong.
import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { useWork } from '../agents/workStore'
import { useUsage, readMeter, dailyBudget, setDailyBudget } from '../agents/usageMeter'
import { useWorkshop } from '../workshop'
import { useAgentApps, effectiveApps } from '../agents/agentApps'
import { ARCHETYPE_BY_ID } from '../data/archetypes'
import { ROLE_BY_ID } from '../data/roleAgents'
import {
  EFFORT_MODES, EFFORT_BY_ID, estimateRun, tokLabel, usdFor, usdLabel,
  type EffortId,
} from '../data/effort'

/** How many apps this dojo's crew actually has connected, at most, per step. */
function useAppsPerStep(dojoId: string | null): number {
  const tools = useWork((s) => s.tools)
  const byKey = useAgentApps((s) => s.byKey)
  const dojo = useWorkshop((s) => s.dojos.find((d) => d.id === dojoId))
  return useMemo(() => {
    if (!dojo) return 0
    let peak = 0
    for (const a of dojo.agents) {
      if (a.hidden || !a.role) continue
      const defaults = a.custom?.apps ?? ROLE_BY_ID[a.role]?.apps ?? []
      const apps = effectiveApps(defaults, byKey[`${dojo.id}::${a.role}`])
      peak = Math.max(peak, apps.filter((id) => tools[id]?.connected).length)
    }
    return peak
  }, [dojo, byKey, tools])
}

export function EffortPill({ onOpen }: { onOpen: () => void }) {
  const effort = useWork((s) => s.effort)
  const runs = useUsage((s) => s.runs)
  const m = EFFORT_BY_ID[effort]
  const meter = readMeter(runs)
  return (
    <button
      className="eff-pill"
      style={{ ['--ac' as string]: m.tint }}
      onClick={onOpen}
      title={`${m.label} · ${m.tagline}\nSpent today: ${tokLabel(meter.today.total)} tokens across ${meter.today.runs} run${meter.today.runs === 1 ? '' : 's'}`}
    >
      <span className="eff-pill-g">{m.glyph}</span>
      <span className="eff-pill-l">{m.label}</span>
      <span className="eff-pill-n">{meter.today.total ? tokLabel(meter.today.total) : '—'}</span>
    </button>
  )
}

export function EffortPanel({ onClose }: { onClose: () => void }) {
  const effort = useWork((s) => s.effort)
  const setEffort = useWork((s) => s.setEffort)
  const byok = useWork((s) => s.byok)
  const runs = useUsage((s) => s.runs)
  const clearUsage = useUsage((s) => s.clear)
  const activeDojoId = useWorkshop((s) => s.activeDojoId)
  const dojo = useWorkshop((s) => s.dojos.find((d) => d.id === activeDojoId))
  const appsPerStep = useAppsPerStep(activeDojoId)

  const steps = dojo?.archetype ? (ARCHETYPE_BY_ID[dojo.archetype]?.loop.length ?? 4) : 4
  const meter = readMeter(runs)
  const peak = Math.max(1, ...meter.days.map((d) => d.total))
  const [budget, setBudget] = useState(() => dailyBudget())
  const overBudget = budget > 0 && meter.today.total >= budget

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return createPortal(
    <div className="eff-scrim" onMouseDown={onClose}>
      <div className="eff-modal" onMouseDown={(e) => e.stopPropagation()} role="dialog" aria-label="How hard your team works">
        <header className="eff-head">
          <div>
            <strong>How hard your team works</strong>
            <span>Three modes. Each one changes exactly three things, and you can see what they cost.</span>
          </div>
          <button className="eff-x" onClick={onClose} aria-label="Close">×</button>
        </header>

        <div className="eff-body">
          {/* ---- the three modes ---- */}
          <div className="eff-modes">
            {EFFORT_MODES.map((m) => {
              const est = estimateRun(m, steps, appsPerStep)
              const on = m.id === effort
              return (
                <button
                  key={m.id}
                  className={`eff-mode appcard${on ? ' on' : ''}`}
                  style={{ ['--ac' as string]: m.tint }}
                  aria-pressed={on}
                  onClick={() => setEffort(m.id as EffortId)}
                >
                  <header className="eff-mode-h">
                    <span className="eff-mode-g" style={{ background: m.tint }}>{m.glyph}</span>
                    <strong>{m.label}</strong>
                    {on && <span className="eff-on">In use</span>}
                  </header>
                  <p className="eff-tag">{m.tagline}</p>
                  <ul className="eff-points">
                    {m.points.map((x) => <li key={x}>{x}</li>)}
                  </ul>
                  <div className="eff-est">
                    <b>{tokLabel(est)}</b>
                    <em>tokens for a full {steps}-step run{appsPerStep ? `, ${Math.min(appsPerStep, m.maxApps)} app${Math.min(appsPerStep, m.maxApps) === 1 ? '' : 's'} attached` : ''}</em>
                    <span>≈ {usdLabel(usdFor(m, est))} on your own Claude key</span>
                  </div>
                  <p className="eff-best"><b>Best for:</b> {m.bestFor}</p>
                  <p className="eff-trade"><b>You give up:</b> {m.tradeoff}</p>
                </button>
              )
            })}
          </div>

          <p className="eff-note">
            Estimates, not promises — measured against this app's own prompts. The numbers below are the
            real ones, reported by the model itself.
            {!byok.connected && ' Right now your runs are metered in credits; add your own Claude key and the tokens are billed to you directly by Anthropic instead.'}
          </p>

          {/* ---- what you have really spent ---- */}
          <section className="eff-meter">
            <header>
              <strong>What you have actually spent</strong>
              {runs.length > 0 && (
                <button className="eff-clear" onClick={clearUsage}>Reset the counter</button>
              )}
            </header>

            {runs.length === 0 ? (
              <p className="eff-empty">Nothing run yet. The moment a teammate finishes a step, its real token count appears here.</p>
            ) : (
              <>
                <div className="eff-stats">
                  <span className="eff-stat"><b>{tokLabel(meter.today.total)}</b><em>today</em></span>
                  <span className="eff-stat"><b>{meter.today.runs}</b><em>run{meter.today.runs === 1 ? '' : 's'} today</em></span>
                  <span className="eff-stat"><b>{tokLabel(meter.all.total)}</b><em>all time</em></span>
                  <span className="eff-stat"><b>{tokLabel(meter.all.inTokens)}<i>/</i>{tokLabel(meter.all.outTokens)}</b><em>in / out</em></span>
                </div>

                <div className="eff-spark" aria-hidden>
                  {meter.days.map((d) => (
                    <span key={d.day} title={`${d.day} · ${tokLabel(d.total)}`}>
                      <i style={{ height: `${Math.max(2, (d.total / peak) * 100)}%` }} />
                    </span>
                  ))}
                </div>
                <p className="eff-sparkcap">the last seven days</p>

                {/* the ledger · where the tokens actually went */}
                <ul className="eff-ledger">
                  {runs.slice(0, 8).map((r) => (
                    <li key={r.at + r.task}>
                      <span className="eff-led-when">{new Date(r.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      <span className="eff-led-who"><b>{r.agent}</b><em>{r.task}</em></span>
                      <span className="eff-led-mode">{EFFORT_BY_ID[r.mode]?.label ?? r.mode}</span>
                      <span className="eff-led-apps">{r.apps ? `${r.apps} app${r.apps === 1 ? '' : 's'}` : 'no apps'}</span>
                      <span className="eff-led-n">{tokLabel(r.inTokens + r.outTokens)}</span>
                    </li>
                  ))}
                </ul>
                {runs.length > 8 && <p className="eff-sparkcap">showing the last 8 of {runs.length} runs</p>}
              </>
            )}
          </section>

          {/* your own ceiling · the meter observes, this one stops */}
          <section className={`eff-budget${overBudget ? ' over' : ''}`}>
            <div>
              <strong>Stop me at</strong>
              <span>
                A daily token ceiling you set for yourself. A run that would cross it is refused
                before it starts, with the reason. Leave it empty for no limit.
              </span>
            </div>
            <div className="eff-budget-set">
              <input
                type="number" min={0} step={10000} inputMode="numeric"
                value={budget || ''}
                placeholder="no limit"
                aria-label="Daily token limit"
                onChange={(e) => { const n = Number(e.target.value) || 0; setBudget(n); setDailyBudget(n) }}
              />
              <span>tokens / day</span>
            </div>
            {budget > 0 && (
              <div className="eff-budget-bar" aria-hidden>
                <span style={{ width: `${Math.min(100, (meter.today.total / budget) * 100)}%` }} />
              </div>
            )}
            {budget > 0 && (
              <p className="eff-budget-cap">
                {overBudget
                  ? `Reached · ${tokLabel(meter.today.total)} of ${tokLabel(budget)} used today. Runs are refused until tomorrow.`
                  : `${tokLabel(meter.today.total)} of ${tokLabel(budget)} used today.`}
              </p>
            )}
          </section>

          <p className="eff-note last">
            Turning an app on for a teammate sends that app's tool definitions with <b>every</b> step
            they run — which is why Saver sends none and Max sends up to eight. Connecting an app is
            still free; it is the running that costs.
          </p>
        </div>
      </div>
    </div>,
    document.body,
  )
}

/** The pill plus its panel · drop this anywhere the dial should be reachable. */
export function EffortControl() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <EffortPill onOpen={() => setOpen(true)} />
      {open && <EffortPanel onClose={() => setOpen(false)} />}
    </>
  )
}
