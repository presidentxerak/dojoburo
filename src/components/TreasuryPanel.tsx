import { useState } from 'react'
import { useDojo } from '../store'
import { AGENTS } from '../data/agents'
import { NETWORKS } from '../xrpl/network'
import { audio } from '../audio'
import { Icon } from './Icon'

/** Company-wide XRPL orchestration: treasury, boot, payroll, transfers. */
export function TreasuryPanel() {
  const net = useDojo((s) => s.net)
  const cfg = NETWORKS[net]
  const treasury = useDojo((s) => s.wallets['treasury'])
  const ensureWallet = useDojo((s) => s.ensureWallet)
  const fund = useDojo((s) => s.fund)
  const transfer = useDojo((s) => s.transfer)
  const refresh = useDojo((s) => s.refreshBalances)
  const log = useDojo((s) => s.log)

  const [from, setFrom] = useState('treasury')
  const [to, setTo] = useState('rex')
  const [amount, setAmount] = useState('0.5')
  const [booting, setBooting] = useState(false)

  const owners = [{ id: 'treasury', name: 'Treasury' }, ...AGENTS.map((a) => ({ id: a.id, name: a.name }))]

  const boot = async () => {
    setBooting(true)
    audio.sfx('start')
    log({ agentId: 'fin', skill: 'boot', level: 'info', message: 'Booting the startup: creating wallets…' })
    ensureWallet('treasury')
    for (const a of AGENTS) ensureWallet(a.id)
    if (cfg.faucet) {
      await fund('treasury')
      for (const a of AGENTS) await fund(a.id)
    } else {
      log({ agentId: 'fin', skill: 'boot', level: 'error', message: `No faucet on ${cfg.label}: fund the wallets yourself.` })
    }
    await refresh()
    setBooting(false)
  }

  const doTransfer = () => {
    const amt = Number(amount)
    if (!Number.isFinite(amt) || amt <= 0) return
    audio.sfx('click')
    void transfer(from, to, amt, 'Manual transfer')
  }

  return (
    <section className="panel treasury">
      <header className="activity-head">
        <h3>Treasury &amp; orchestration</h3>
      </header>

      <div className="treasury-summary">
        <div>
          <span className="muted small">Treasury wallet</span>
          <div className="mono small">
            {treasury ? (
              <a href={cfg.explorerAccount(treasury.address)} target="_blank" rel="noreferrer">
                {treasury.address.slice(0, 16)}…
              </a>
            ) : (
              'not created'
            )}
          </div>
        </div>
        <div className="treasury-bal">{treasury?.balanceXrp != null ? `${treasury.balanceXrp.toFixed(2)} XRP` : '-'}</div>
      </div>

      <div className="treasury-actions">
        <button className="btn primary" onClick={() => void boot()} disabled={booting}>
          <Icon name="rocket" /> {booting ? 'Booting…' : 'Boot the startup'}
        </button>
        {cfg.faucet && (
          <button className="btn" onClick={() => void fund('treasury')}>Top up treasury (faucet)</button>
        )}
      </div>

      <div className="transfer-composer">
        <h4>Agentic payment (x402)</h4>
        <div className="composer-row">
          <label>
            From
            <select value={from} onChange={(e) => setFrom(e.target.value)}>
              {owners.map((o) => (
                <option key={o.id} value={o.id}>{o.name}</option>
              ))}
            </select>
          </label>
          <label>
            To
            <select value={to} onChange={(e) => setTo(e.target.value)}>
              {owners.map((o) => (
                <option key={o.id} value={o.id}>{o.name}</option>
              ))}
            </select>
          </label>
          <label className="amount-field">
            XRP
            <input type="number" min="0.000001" step="0.1" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </label>
          <button className="btn primary" onClick={doTransfer} disabled={from === to}>
            Send
          </button>
        </div>
        <p className="muted small">
          Real signed Payment submitted on {cfg.label}, with an x402 memo (skill + invoice).
        </p>
      </div>
    </section>
  )
}
