import { useState } from 'react'
import { useDojo } from '../store'
import { NETWORKS, type NetworkId } from '../xrpl/network'
import { WALLETS, walletsForDevice } from '../xrpl/wallets'
import { Logo } from './Logo'
import { Wordmark } from './Wordmark'
import { Icon } from './Icon'

export function TopBar() {
  const net = useDojo((s) => s.net)
  const setNetwork = useDojo((s) => s.setNetwork)
  const theme = useDojo((s) => s.theme)
  const setTheme = useDojo((s) => s.setTheme)
  const muted = useDojo((s) => s.muted)
  const musicOn = useDojo((s) => s.musicOn)
  const toggleMute = useDojo((s) => s.toggleMute)
  const toggleMusic = useDojo((s) => s.toggleMusic)
  const wallet = useDojo((s) => s.wallet)
  const walletConnect = useDojo((s) => s.walletConnect)
  const [confirmMainnet, setConfirmMainnet] = useState(false)

  const pick = (id: NetworkId) => {
    if (id === 'mainnet' && net !== 'mainnet') {
      setConfirmMainnet(true)
      return
    }
    setNetwork(id)
  }

  const focusWalletPanel = () => document.querySelector('.panel.xaman')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  const onConnectWallet = () => {
    if (wallet.account) { focusWalletPanel(); return }
    const top = walletsForDevice()[0]
    // wallets that need a key / setup can't connect in one click · reveal the panel
    if (WALLETS[top.id].needsConfig?.()) { focusWalletPanel(); return }
    void walletConnect(top.id)
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
        <button className={`btn tiny tb-wallet ${wallet.account ? 'on' : ''}`} onClick={onConnectWallet} disabled={wallet.busy} title={wallet.account ? `Connected via ${wallet.provider}` : 'Connect a wallet'}>
          {wallet.busy ? 'Connecting…' : wallet.account ? `✓ ${wallet.account.slice(0, 6)}…` : 'Connect wallet'}
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
