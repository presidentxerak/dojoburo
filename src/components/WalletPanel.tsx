import { useState } from 'react'
import { useDojo } from '../store'
import { audio } from '../audio'
import { WALLET_META, WALLETS, type WalletId } from '../xrpl/wallets'

/** Connect an external XRPL wallet for non-custodial signing · Xaman, GemWallet
 *  or Joey (WalletConnect). Most useful on Mainnet, where it funds the treasury
 *  from the user's real wallet without ever exposing a seed. */
export function WalletPanel() {
  const net = useDojo((s) => s.net)
  const w = useDojo((s) => s.wallet)
  const connect = useDojo((s) => s.walletConnect)
  const disconnect = useDojo((s) => s.walletDisconnect)
  const fund = useDojo((s) => s.walletFund)
  const setKey = useDojo((s) => s.setXamanKey)

  const [keyInput, setKeyInput] = useState('')
  const [showKey, setShowKey] = useState(false)
  const [amount, setAmount] = useState('10')
  const [openKey, setOpenKey] = useState(false)

  const live = net === 'mainnet'

  const tryConnect = (id: WalletId) => {
    if (id === 'xaman' && !w.xamanConfigured) { setOpenKey(true); return }
    audio.sfx('click'); void connect(id)
  }

  return (
    <section className="panel xaman">
      <header className="activity-head">
        <h3>Connect a wallet · secure signing</h3>
        {live ? <span className="chip dept-Leadership">Mainnet</span> : <span className="muted small">recommended on Mainnet</span>}
      </header>

      {!w.account ? (
        <div className="wal-connect">
          <p className="muted small">Non-custodial: connect a wallet and approve each transaction yourself · no seed is ever exposed.</p>
          <div className="wal-grid">
            {WALLET_META.map((m) => {
              const needsCfg = WALLETS[m.id].needsConfig?.() && !(m.id === 'xaman' && w.xamanConfigured)
              return (
                <button
                  key={m.id}
                  className="wal-card"
                  style={{ ['--wc' as string]: m.color }}
                  disabled={w.busy}
                  onClick={() => tryConnect(m.id)}
                >
                  <span className="wal-mono">{m.mono}</span>
                  <span className="wal-meta">
                    <span className="wal-name">{m.label}</span>
                    <span className="wal-blurb">{m.blurb}</span>
                  </span>
                  <span className="wal-go">{w.busy && w.provider === m.id ? '…' : needsCfg ? 'Set up' : 'Connect'}</span>
                </button>
              )
            })}
          </div>

          {openKey && !w.xamanConfigured && (
            <div className="xaman-key">
              <p className="muted small">
                Xaman needs a free API key (<a href="https://apps.xaman.dev" target="_blank" rel="noreferrer">apps.xaman.dev</a>). Also add <code>{location.origin}</code> to the app's OAuth <b>redirect URLs</b>, or you get <em>access_denied · invalid redirect</em>.
              </p>
              <div className="composer-row">
                <input
                  type={showKey ? 'text' : 'password'}
                  placeholder="Xaman API key (xxxxxxxx-xxxx-…)"
                  value={keyInput}
                  onChange={(e) => setKeyInput(e.target.value)}
                  style={{ flex: 1, minWidth: 160 }}
                />
                <button className="btn tiny" onClick={() => setShowKey((v) => !v)}>{showKey ? 'Hide' : 'Show'}</button>
                <button className="btn primary tiny" disabled={!keyInput.trim()} onClick={() => { audio.sfx('click'); setKey(keyInput); setOpenKey(false) }}>Save</button>
              </div>
            </div>
          )}

          {w.error && <p className="wal-err">{w.error}</p>}
        </div>
      ) : (
        <div className="xaman-account">
          <div className="agent-wallet-row">
            <div>
              <span className="muted small">Connected via {w.provider}</span>
              <div className="mono small">
                <a href={`https://livenet.xrpl.org/accounts/${w.account}`} target="_blank" rel="noreferrer">{w.account.slice(0, 16)}…</a>
              </div>
            </div>
            <button className="btn tiny ghost" onClick={() => void disconnect()}>Disconnect</button>
          </div>

          <div className="composer-row" style={{ marginTop: 4 }}>
            <label className="amount-field">
              XRP → treasury
              <input type="number" min="1" step="1" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </label>
            <button
              className="btn primary"
              disabled={w.busy || !(Number(amount) > 0)}
              onClick={() => { audio.sfx('click'); void fund(Number(amount)) }}
            >
              {w.busy ? 'Awaiting signature…' : `Fund via ${w.provider}`}
            </button>
          </div>

          {w.signLink && (
            <div className="xaman-sign">
              <p className="muted small">Approve in your wallet:</p>
              {w.signQr && <img className="xaman-qr" src={w.signQr} alt="Sign QR" width={140} height={140} />}
              <a className="btn tiny" href={w.signLink} target="_blank" rel="noreferrer">Open wallet</a>
            </div>
          )}
          {w.error && <p className="wal-err">{w.error}</p>}
        </div>
      )}
    </section>
  )
}
