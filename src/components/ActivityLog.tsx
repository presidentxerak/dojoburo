import { useDojo } from '../store'
import { AGENT_BY_ID } from '../data/agents'
import { NETWORKS } from '../xrpl/network'

/** The behavior tracker feed: every agent action + on-ledger transaction. */
export function ActivityLog() {
  const activity = useDojo((s) => s.activity)
  const net = useDojo((s) => s.net)
  const cfg = NETWORKS[net]

  return (
    <section className="panel activity">
      <header className="activity-head">
        <h3>📡 Track — comportement des agents</h3>
        <span className="muted small">{activity.length} événements</span>
      </header>
      <ul className="activity-list">
        {activity.length === 0 && <li className="muted pad">Aucune activité pour l'instant. Lance un skill !</li>}
        {activity.map((a) => {
          const agent = AGENT_BY_ID[a.agentId]
          return (
            <li key={a.id} className={`act-item lvl-${a.level}`}>
              <span className="act-emoji">{agent?.emoji ?? '•'}</span>
              <div className="act-body">
                <span className="act-msg">{a.message}</span>
                <span className="act-meta mono">
                  {clock(a.ts)} · {agent?.name ?? a.agentId}
                  {a.txHash && (
                    <>
                      {' · '}
                      <a href={cfg.explorerTx(a.txHash)} target="_blank" rel="noreferrer">
                        tx {a.txHash.slice(0, 8)}↗
                      </a>
                    </>
                  )}
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

function clock(ts: number): string {
  try {
    const d = new Date(ts)
    return d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  } catch {
    return ''
  }
}
