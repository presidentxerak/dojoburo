import { useState } from 'react'
import { useDojo } from '../store'
import { audio } from '../audio'

/** Secure non-custodial signing via Xaman (XUMM). Most useful on Mainnet where
 *  it lets the user fund the treasury from their real wallet without exposing a
 *  seed. */
export function XamanPanel() {
  const net = useDojo((s) => s.net)
  const xa = useDojo((s) => s.xaman)
  const connect = useDojo((s) => s.xamanConnect)
  const disconnect = useDojo((s) => s.xamanDisconnect)
  const fund = useDojo((s) => s.xamanFundTreasury)
  const setKey = useDojo((s) => s.setXamanKey)

  const [keyInput, setKeyInput] = useState('')
  const [amount, setAmount] = useState('10')
  const [showKey, setShowKey] = useState(false)

  const live = net === 'mainnet'

  return (
    <section className="panel xaman">
      <header className="activity-head">
        <h3>Xaman · secure signing</h3>
        {live ? <span className="chip dept-Leadership">Mainnet</span> : <span className="muted small">recommended on Mainnet</span>}
      </header>

      {!xa.configured ? (
        <div className="xaman-key">
          <p className="muted small">
            Non-custodial signing: connect your Xaman wallet and approve each transaction on your phone · no seed
            exposed. Paste a free Xaman API key (<a href="https://apps.xaman.dev" target="_blank" rel="noreferrer">apps.xaman.dev</a>).
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
            <button className="btn primary tiny" disabled={!keyInput.trim()} onClick={() => { audio.sfx('click'); setKey(keyInput) }}>
              Save
            </button>
          </div>
        </div>
      ) : !xa.account ? (
        <div className="xaman-connect">
          <button className="btn primary" disabled={xa.busy} onClick={() => { audio.sfx('click'); void connect() }}>
            {xa.busy ? 'Connecting…' : 'Connect Xaman'}
          </button>
          <button className="btn tiny ghost" onClick={() => useDojo.getState().setXamanKey('')}>Change key</button>
        </div>
      ) : (
        <div className="xaman-account">
          <div className="agent-wallet-row">
            <div>
              <span className="muted small">Connected wallet</span>
              <div className="mono small">
                <a href={`https://livenet.xrpl.org/accounts/${xa.account}`} target="_blank" rel="noreferrer">{xa.account.slice(0, 16)}…</a>
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
              disabled={xa.busy || !(Number(amount) > 0)}
              onClick={() => { audio.sfx('click'); void fund(Number(amount)) }}
            >
              {xa.busy ? 'Awaiting signature…' : 'Fund via Xaman'}
            </button>
          </div>

          {xa.signLink && (
            <div className="xaman-sign">
              <p className="muted small">Approve in Xaman:</p>
              {xa.signQr && <img className="xaman-qr" src={xa.signQr} alt="Xaman QR" width={140} height={140} />}
              <a className="btn tiny" href={xa.signLink} target="_blank" rel="noreferrer">Open in Xaman</a>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
