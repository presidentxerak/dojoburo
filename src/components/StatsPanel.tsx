import { useDojo } from '../store'
import { AGENTS, AGENT_BY_ID } from '../data/agents'

function fmt(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(2) + 'M'
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k'
  return String(Math.round(n))
}

/** Lazy the panda's clipboard: the one thing he does is watch the numbers -
 *  compute tokens, XRP spent and how productive the team has been. */
export function StatsPanel() {
  const show = useDojo((s) => s.showStats)
  const close = useDojo((s) => s.closeStats)
  const usage = useDojo((s) => s.usage)
  const stats = useDojo((s) => s.stats)
  if (!show) return null

  const tasks = AGENTS.reduce((n, a) => n + (stats[a.id]?.tasksDone ?? 0), 0)
  const xp = AGENTS.reduce((n, a) => n + (stats[a.id]?.xp ?? 0), 0)
  const perTask = usage.tx > 0 ? usage.xrp / usage.tx : 0
  const board = AGENTS.map((a) => ({ id: a.id, name: a.name, dept: a.department, done: stats[a.id]?.tasksDone ?? 0, lvl: stats[a.id]?.level ?? 1 }))
    .sort((x, y) => y.done - x.done)
  const top = board[0]?.done || 1

  return (
    <div className="stats-overlay" onClick={close}>
      <div className="stats-card" onClick={(e) => e.stopPropagation()}>
        <button className="icon-btn stats-close" onClick={close} aria-label="Close">×</button>
        <header className="stats-head">
          <div className="stats-panda" aria-hidden>◕ᴥ◕</div>
          <div>
            <h2>Lazy's dashboard</h2>
            <p>The panda naps all day but never stops counting. Live office usage &amp; productivity.</p>
          </div>
        </header>

        <div className="stats-grid">
          <div className="stat-tile">
            <span className="stat-k">Compute tokens</span>
            <span className="stat-v">{fmt(usage.tokens)}</span>
            <span className="stat-s">estimated across all skill runs</span>
          </div>
          <div className="stat-tile">
            <span className="stat-k">XRP spent</span>
            <span className="stat-v">{usage.xrp.toFixed(3)}</span>
            <span className="stat-s">x402 settlements on-ledger</span>
          </div>
          <div className="stat-tile">
            <span className="stat-k">Tasks done</span>
            <span className="stat-v">{tasks}</span>
            <span className="stat-s">{usage.tx} ledger transactions</span>
          </div>
          <div className="stat-tile">
            <span className="stat-k">XRP / task</span>
            <span className="stat-v">{perTask.toFixed(3)}</span>
            <span className="stat-s">avg incl. free skills</span>
          </div>
          <div className="stat-tile">
            <span className="stat-k">Total XP</span>
            <span className="stat-v">{fmt(xp)}</span>
            <span className="stat-s">team experience earned</span>
          </div>
          <div className="stat-tile lazy-tile">
            <span className="stat-k">Lazy's effort</span>
            <span className="stat-v">0</span>
            <span className="stat-s">still sleeping. zzz…</span>
          </div>
        </div>

        <h3 className="stats-sub">Productivity leaderboard</h3>
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

        <p className="stats-note">
          Costs are real on Testnet/Devnet: each priced skill settles its x402 invoice (0.15–0.5 XRP) plus the
          ~0.00001 XRP network fee; free skills only pay the fee. Tokens are an estimate of the compute an agent
          would use once wired to a real model.
        </p>
      </div>
    </div>
  )
}
