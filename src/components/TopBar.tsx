import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useDojo } from '../store'
import { useWorkshop } from '../workshop'
import { useWork } from '../agents/workStore'
import { NETWORKS, type NetworkId } from '../xrpl/network'
import { WALLETS, walletsForDevice } from '../xrpl/wallets'
import { privyConfigured, privyControls } from '../auth/controls'
import { skinById } from '../data/skins'
import { Logo } from './Logo'
import { Wordmark } from './Wordmark'
import { Icon } from './Icon'
import { InfoDot } from './InfoDot'
import { SkinAvatar } from './workshop/SkinAvatar'

const NETS: NetworkId[] = ['testnet', 'devnet', 'mainnet']

export function TopBar() {
  const net = useDojo((s) => s.net)
  const setNetwork = useDojo((s) => s.setNetwork)
  const theme = useDojo((s) => s.theme)
  const setTheme = useDojo((s) => s.setTheme)
  const muted = useDojo((s) => s.muted)
  const toggleSound = useDojo((s) => s.toggleSound)
  const wallet = useDojo((s) => s.wallet)
  const walletConnect = useDojo((s) => s.walletConnect)
  const account = useWorkshop((s) => s.account)
  const signInGuest = useWorkshop((s) => s.signInGuest)
  const signOut = useWorkshop((s) => s.signOut)

  const [menuOpen, setMenuOpen] = useState(false)
  const [confirmMainnet, setConfirmMainnet] = useState(false)

  const soundOn = !muted

  const pickNet = (id: NetworkId) => {
    if (id === 'mainnet' && net !== 'mainnet') { setConfirmMainnet(true); return }
    setNetwork(id)
  }
  const openStudio = () => { setMenuOpen(false); useWork.getState().openStudio('studio') }
  const openAccount = () => { setMenuOpen(false); useWork.getState().openStudio('account') }
  const doLogin = () => { setMenuOpen(false); if (privyConfigured()) privyControls.login?.(); else signInGuest() }
  const doSignOut = () => { setMenuOpen(false); if (account?.provider === 'privy' && privyControls.logout) privyControls.logout(); else signOut() }
  const focusWalletPanel = () => document.querySelector('.panel.xaman')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  const onConnectWallet = () => {
    setMenuOpen(false)
    if (wallet.account) { focusWalletPanel(); return }
    const top = walletsForDevice()[0]
    if (WALLETS[top.id].needsConfig?.()) { focusWalletPanel(); return }
    void walletConnect(top.id)
  }

  // shared settings + wallet rows (used in the desktop dropdown and mobile sheet)
  const Settings = (
    <>
      <div className="tb-row">
        <span>Sound</span>
        <button className={`tb-toggle ${soundOn ? 'on' : ''}`} onClick={() => toggleSound()} aria-pressed={soundOn}>
          <Icon name={soundOn ? 'sound' : 'mute'} /> {soundOn ? 'On' : 'Off'}
        </button>
      </div>
      <div className="tb-row">
        <span>Display mode</span>
        <button className="tb-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          <Icon name={theme === 'light' ? 'moon' : 'sun'} /> {theme === 'light' ? 'Light' : 'Dark'}
        </button>
      </div>
      <div className="tb-row tb-row-net">
        <span>Network <InfoDot title="Networks · Testnet, Devnet, Mainnet">
          <p><b>Testnet</b> and <b>Devnet</b> are practice networks: the XRP is free (from a faucet) and has no value · perfect to explore everything safely.</p>
          <p><b>Mainnet</b> is the real XRP Ledger: transactions move real value and are irreversible. There is no faucet · you fund wallets yourself (card top-up or Connect wallet).</p>
        </InfoDot></span>
        <div className="tb-netseg">
          {NETS.map((id) => (
            <button key={id} className={`${net === id ? 'on' : ''} ${id === 'mainnet' ? 'live' : ''}`} onClick={() => pickNet(id)}>
              {NETWORKS[id].label}
            </button>
          ))}
        </div>
      </div>
      <button className={`tb-menu-item tb-wallet-item ${wallet.account ? 'on' : ''}`} onClick={onConnectWallet}>
        <span>Connect wallet</span>
        <span className="tb-wallet-state">{wallet.busy ? 'Connecting…' : wallet.account ? `✓ ${wallet.account.slice(0, 6)}…` : 'Connect'}</span>
      </button>
    </>
  )

  return (
    <header className="topbar">
      <div className="brand brand-link" onClick={() => { location.hash = 'city' }} title="Retour à Dojo City" role="link">
        <Logo size={38} />
        <div>
          <h1><Wordmark /> <span className="beta-badge">Beta</span></h1>
          <p className="tagline">Pixel startup, orchestrated on XRPL</p>
        </div>
      </div>

      {/* centered middle group · section nav + Dojo Guide + Studio */}
      <div className="topbar-mid tb-desktop">
        {/* landing-style section nav (links back to the landing sections) */}
        <nav className="tb-nav">
          <a href="/#studio">Build</a>
          <a href="/#stack">Connect</a>
          <a href="/#cast">Team</a>
          <a href="/#how">How it works</a>
          <a href="/#pricing">Pricing</a>
        </nav>
        <a className="btn tiny tb-guide" href="/guide">Dojo Guide</a>
        <button className="btn tiny tb-studio" onClick={openStudio}>Studio</button>
      </div>

      <div className="topbar-right">
        {account ? (
          <button className="tb-profile tb-desktop" onClick={() => setMenuOpen((v) => !v)} aria-label="Profile & settings" title={account.name || 'Founder'}>
            <SkinAvatar skin={skinById(account.avatarSkinId)} size={26} />
          </button>
        ) : (
          <>
            <button className="btn tiny ghost tb-desktop" onClick={doLogin}>Sign in</button>
            <button className="btn tiny tb-desktop" onClick={doLogin}>Sign up</button>
          </>
        )}

        {/* mobile burger */}
        <button className={`tb-burger ${menuOpen ? 'on' : ''}`} onClick={() => setMenuOpen((v) => !v)} aria-label="Menu" aria-expanded={menuOpen}>
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && createPortal(
        <>
          <div className="tb-menu-scrim" onClick={() => setMenuOpen(false)} />
          <div className="tb-menu" role="menu">
            {/* mobile-only entries · on desktop the dropdown only opens for a signed-in profile */}
            <a className="tb-menu-item tb-only-mobile tb-menu-link" href="/guide" onClick={() => setMenuOpen(false)}>Dojo Guide</a>
            <button className="tb-menu-item tb-only-mobile" onClick={openStudio}>Studio</button>

            {account ? (
              <button className="tb-menu-profile" onClick={openAccount}>
                <SkinAvatar skin={skinById(account.avatarSkinId)} size={30} />
                <span className="tb-menu-name">{account.name || 'Founder'}<em>{account.provider === 'privy' ? 'Account · synced' : 'Account'}</em></span>
              </button>
            ) : (
              <div className="tb-menu-auth tb-only-mobile">
                <button className="btn tiny ghost" onClick={doLogin}>Sign in</button>
                <button className="btn tiny" onClick={doLogin}>Sign up</button>
              </div>
            )}

            <div className="tb-menu-sec">{Settings}</div>

            {account && <button className="tb-menu-item tb-signout" onClick={doSignOut}>Sign out</button>}
          </div>
        </>,
        document.body,
      )}

      {confirmMainnet && (
        <div className="modal-backdrop" onClick={() => setConfirmMainnet(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Switch to Mainnet?</h3>
            <p>
              Mainnet moves <strong>real value</strong>. There is no faucet: you fund the wallets yourself.
              Payments between agents will be real and irreversible.
            </p>
            <p className="muted small">
              Tip: keep small amounts on these hot wallets stored in this browser, or connect a wallet (Xaman, GemWallet, Crossmark) for signing.
            </p>
            <div className="modal-actions">
              <button className="btn ghost" onClick={() => setConfirmMainnet(false)}>Cancel</button>
              <button className="btn danger" onClick={() => { setNetwork('mainnet'); setConfirmMainnet(false) }}>
                I understand, switch to Mainnet
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
