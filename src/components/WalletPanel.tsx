import { useState } from 'react'
import { useDojo } from '../store'
import { audio } from '../audio'
import { WALLETS, walletsForDevice, deviceKind, type WalletId } from '../xrpl/wallets'

/** Connect an external XRPL wallet for non-custodial signing · Xaman, GemWallet
 *  or Crossmark. Most useful on Mainnet, where it funds the treasury from the
 *  user's real wallet without ever exposing a seed. */
export function WalletPanel() {
  const net = useDojo((s) => s.net)
  const w = useDojo((s) => s.wallet)
  const connect = useDojo((s) => s.walletConnect)
  const disconnect = useDojo((s) => s.walletDisconnect)
  const fund = useDojo((s) => s.walletFund)
  const setKey = useDojo((s) => s.setXamanKey)
  const resetXaman = useDojo((s) => s.resetXaman)

  const [keyInput, setKeyInput] = useState('')
  const [showKey, setShowKey] = useState(false)
  const [amount, setAmount] = useState('10')
  const [openKey, setOpenKey] = useState(false)
  const [showGuide, setShowGuide] = useState(false)

  const live = net === 'mainnet'
  const device = deviceKind()
  const otherDevice = device === 'mobile' ? 'desktop' : 'mobile'
  const list = walletsForDevice(device)

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

      {!w.account && (
        <div className="wal-guidebar">
          <button className="cx-how-t" onClick={() => setShowGuide((v) => !v)}>{showGuide ? 'Hide setup guide' : 'How to integrate each wallet'}</button>
        </div>
      )}
      {!w.account && showGuide && (
        <div className="wal-guide">
          {list.map((m) => (
            <div className="wal-guide-item" key={m.id} style={{ ['--wc' as string]: m.color }}>
              <div className="wal-guide-h">
                <span className="wal-mono">{m.mono}</span>
                <strong>{m.label}</strong>
                <em className={`wal-fit ${m.fit[device] === 3 ? 'best' : m.fit[device] === 0 ? 'off' : ''}`}>
                  {m.fit[device] === 3 ? `Best on ${device}` : m.fit[device] === 0 ? `${otherDevice} only` : `OK on ${device}`}
                </em>
                <a className="wal-guide-link" href={m.docsUrl} target="_blank" rel="noreferrer">Get it ↗</a>
              </div>
              <ol className="wal-guide-steps">
                {m.setup.map((s, i) => <li key={i}><b>{i + 1}</b><span>{s}</span></li>)}
              </ol>
            </div>
          ))}
        </div>
      )}

      {!w.account ? (
        <div className="wal-connect">
          <p className="muted small">Non-custodial: connect a wallet and approve each transaction yourself · no seed is ever exposed. Ordered for your device ({device}).</p>
          <div className="wal-grid">
            {list.map((m) => {
              const fit = m.fit[device]
              const worksHere = fit > 0
              const needsCfg = WALLETS[m.id].needsConfig?.() && !(m.id === 'xaman' && w.xamanConfigured)
              return (
                <button
                  key={m.id}
                  className={`wal-card${!worksHere ? ' off' : ''}`}
                  style={{ ['--wc' as string]: m.color }}
                  disabled={w.busy || !worksHere}
                  onClick={() => tryConnect(m.id)}
                  title={worksHere ? undefined : `Best used on ${otherDevice}`}
                >
                  <span className="wal-mono">{m.mono}</span>
                  <span className="wal-meta">
                    <span className="wal-name">
                      {m.label}
                      {fit === 3 && <em className="wal-fit best">Best on {device}</em>}
                      {!worksHere && <em className="wal-fit off">{otherDevice} only</em>}
                    </span>
                    <span className="wal-blurb">{m.blurb}</span>
                  </span>
                  <span className="wal-go">{w.busy && w.provider === m.id ? '…' : !worksHere ? '·' : needsCfg ? 'Set up' : 'Connect'}</span>
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

          <div className="wal-reset">
            <span className="muted small">Changed your Xaman app / API key?</span>
            <button className="btn tiny ghost" onClick={() => { audio.sfx('click'); void resetXaman() }} title="Log out, clear the stored key and purge the old Xaman session">
              Reset Xaman
            </button>
          </div>
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
