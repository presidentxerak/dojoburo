// Office usage & productivity — formerly "Lazy the panda's dashboard", now part
// of the Billing Manager (Vaultor) studio: compute tokens, XRP spent, tasks,
// XP and a productivity leaderboard. Reads the same live store the panda did.
import { useDojo } from '../store'
import { AGENTS, AGENT_BY_ID } from '../data/agents'

function fmt(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(2) + 'M'
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k'
  return String(Math.round(n))
}

export function OfficeStats() {
  const usage = useDojo((s) => s.usage)
  const stats = useDojo((s) => s.stats)

  const tasks = AGENTS.reduce((n, a) => n + (stats[a.id]?.tasksDone ?? 0), 0)
  const xp = AGENTS.reduce((n, a) => n + (stats[a.id]?.xp ?? 0), 0)
  const perTask = usage.tx > 0 ? usage.xrp / usage.tx : 0
  const board = AGENTS.map((a) => ({ id: a.id, name: a.name, done: stats[a.id]?.tasksDone ?? 0 }))
    .sort((x, y) => y.done - x.done)
  const top = board[0]?.done || 1

  return (
    <div className="office-stats">
      <div className="sq-eyebrow">Office usage &amp; productivity</div>
      <p className="sq-lead">Live compute, settlement and team output across every studio.</p>
      <div className="biz-overview stats-5">
        <div className="biz-tile"><span>{fmt(usage.tokens)}</span><em>compute tokens</em></div>
        <div className="biz-tile"><span>{usage.xrp.toFixed(3)}</span><em>XRP spent</em></div>
        <div className="biz-tile"><span>{tasks}</span><em>tasks done</em></div>
        <div className="biz-tile"><span>{perTask.toFixed(3)}</span><em>XRP / task</em></div>
        <div className="biz-tile"><span>{fmt(xp)}</span><em>total XP</em></div>
      </div>

      <div className="sq-eyebrow" style={{ marginTop: 14 }}>Productivity leaderboard</div>
      <ul className="stats-board">
        {board.slice(0, 6).map((b, i) => (
          <li key={b.id}>
            <span className="board-rank">{i + 1}</span>
            <span className="board-name">{b.name} <em>{AGENT_BY_ID[b.id].role.split('-')[0].trim()}</em></span>
            <span className="board-bar"><span style={{ width: `${Math.max(6, (b.done / top) * 100)}%` }} /></span>
            <span className="board-done">{b.done}</span>
          </li>
        ))}
      </ul>
      <p className="muted small">Each priced skill settles its x402 invoice (0.15–0.5 XRP) plus the ~0.00001 XRP network fee; free skills only pay the fee. Tokens estimate the compute an agent uses once wired to a real model.</p>
    </div>
  )
}
