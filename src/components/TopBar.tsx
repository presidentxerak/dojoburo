import { useState } from 'react'
import { useDojo } from '../store'
import { NETWORKS, type NetworkId } from '../xrpl/network'
import { Logo } from './Logo'
import { Wordmark } from './Wordmark'
import { Icon } from './Icon'

export function TopBar() {
  const net = useDojo((s) => s.net)
  const setNetwork = useDojo((s) => s.setNetwork)
  const refresh = useDojo((s) => s.refreshBalances)
  const loading = useDojo((s) => s.balancesLoading)
  const theme = useDojo((s) => s.theme)
  const setTheme = useDojo((s) => s.setTheme)
  const muted = useDojo((s) => s.muted)
  const musicOn = useDojo((s) => s.musicOn)
  const toggleMute = useDojo((s) => s.toggleMute)
  const toggleMusic = useDojo((s) => s.toggleMusic)
  const [confirmMainnet, setConfirmMainnet] = useState(false)

  const pick = (id: NetworkId) => {
    if (id === 'mainnet' && net !== 'mainnet') {
      setConfirmMainnet(true)
      return
    }
    setNetwork(id)
  }

  return (
    <header className="topbar">
      <div className="brand">
        <Logo size={34} />
        <div>
          <h1><Wordmark /></h1>
          <p className="tagline">Pixel startup, orchestrated on XRPL</p>
        </div>
      </div>

      <div className="topbar-right">
        <div className="net-switch" role="tablist" aria-label="XRPL network">
          {(['testnet', 'devnet', 'mainnet'] as NetworkId[]).map((id) => (
            <button
              key={id}
              role="tab"
              aria-selected={net === id}
              className={`net-tab ${net === id ? 'active' : ''} ${id === 'mainnet' ? 'is-live' : ''}`}
              onClick={() => pick(id)}
            >
              {NETWORKS[id].label}
            </button>
          ))}
        </div>
        <button className="btn tiny" onClick={() => void refresh()} disabled={loading} title="Refresh balances">
          <Icon name="refresh" /> {loading ? '…' : 'Balances'}
        </button>
        <button className={`btn tiny icon-only tb-audio ${musicOn ? 'on' : ''}`} onClick={() => toggleMusic()} aria-label="Ambient music" title="Ambient music">
          <Icon name="music" />
        </button>
        <button className="btn tiny icon-only tb-audio" onClick={() => toggleMute()} aria-label="Sound" title="Sound">
          <Icon name={muted ? 'mute' : 'sound'} />
        </button>
        <button className="btn tiny icon-only" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label="Toggle theme" title="Theme">
          <Icon name={theme === 'light' ? 'moon' : 'sun'} />
        </button>
      </div>

      {confirmMainnet && (
        <div className="modal-backdrop" onClick={() => setConfirmMainnet(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Switch to Mainnet?</h3>
            <p>
              Mainnet moves <strong>real value</strong>. There is no faucet: you fund the wallets yourself.
              Payments between agents will be real and irreversible.
            </p>
            <p className="muted small">
              Tip: keep small amounts on these hot wallets stored in this browser, or use Xaman signing.
            </p>
            <div className="modal-actions">
              <button className="btn ghost" onClick={() => setConfirmMainnet(false)}>Cancel</button>
              <button
                className="btn danger"
                onClick={() => {
                  setNetwork('mainnet')
                  setConfirmMainnet(false)
                }}
              >
                I understand, switch to Mainnet
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
