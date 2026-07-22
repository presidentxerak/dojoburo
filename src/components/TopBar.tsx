import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useDojo } from '../store'
import { useWorkshop } from '../workshop'
import { useWork } from '../agents/workStore'
import { privyConfigured, privyControls } from '../auth/controls'
import { skinById } from '../data/skins'
import { Logo } from './Logo'
import { Wordmark } from './Wordmark'
import { Icon } from './Icon'
import { SkinAvatar } from './workshop/SkinAvatar'
import { NotificationBell } from './NotificationBell'

export function TopBar() {
  const theme = useDojo((s) => s.theme)
  const setTheme = useDojo((s) => s.setTheme)
  const muted = useDojo((s) => s.muted)
  const toggleSound = useDojo((s) => s.toggleSound)
  const account = useWorkshop((s) => s.account)
  const signInGuest = useWorkshop((s) => s.signInGuest)
  const signOut = useWorkshop((s) => s.signOut)

  const [menuOpen, setMenuOpen] = useState(false)

  const soundOn = !muted

  // The brand (logo + name) links back to the landing page.
  const goHome = () => { setMenuOpen(false); location.hash = '' }
  const openStudio = () => { setMenuOpen(false); useWork.getState().openStudio('studio') }
  const openAccount = () => { setMenuOpen(false); useWork.getState().openStudio('account') }
  const openConnect = () => { setMenuOpen(false); location.hash = 'connect' }
  const openCredits = () => { setMenuOpen(false); useWork.getState().openStudio('billing') }
  const doLogin = () => { setMenuOpen(false); if (privyConfigured()) privyControls.login?.(); else signInGuest() }
  // Sign out → go back to the landing FIRST so the auth gate (which re-opens the
  // Privy modal) never remounts and traps the user on the Privy screen.
  const doSignOut = () => {
    setMenuOpen(false)
    location.hash = ''
    if (account?.provider === 'privy' && privyControls.logout) privyControls.logout()
    else signOut()
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
    </>
  )

  return (
    <header className="topbar">
      <div className="brand">
        {/* The logo + wordmark link back to the landing page. */}
        <button className="brand-home" aria-label="DojoBuro — landing page" onClick={goHome}><Logo size={38} /></button>
        <div>
          <h1><button className="brand-name" onClick={goHome} aria-label="DojoBuro — landing page"><Wordmark /></button> <span className="beta-badge">Beta</span></h1>
        </div>
      </div>

      {/* centered middle group */}
      <div className="topbar-mid tb-desktop">
        <nav className="tb-nav">
          <button className="tb-navlink" onClick={openConnect}>Connect Apps</button>
        </nav>
        <button className="btn tiny tb-search" onClick={() => window.dispatchEvent(new Event('open-cmdk'))} title="Quick search (Cmd/Ctrl + K)">Search <kbd className="tb-kbd">⌘K</kbd></button>
        <button className="btn tiny tb-guide" onClick={() => { location.hash = 'guide' }}>Dojo Guide</button>
        <button className="btn tiny tb-studio" onClick={openStudio}>Manage Studio</button>
        <button className="btn tiny tb-studio tb-city" onClick={() => { location.hash = 'city' }}>City</button>
      </div>

      <div className="topbar-right">
        <NotificationBell />
        <button className="btn tiny tb-create tb-desktop" onClick={openCredits}>Credits</button>
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
            <button className="tb-menu-item tb-only-mobile tb-menu-link" onClick={() => { setMenuOpen(false); location.hash = 'guide' }}>Dojo Guide</button>
            <button className="tb-menu-item" onClick={() => { setMenuOpen(false); window.dispatchEvent(new Event('open-cmdk')) }}>Quick search</button>
            <button className="tb-menu-item" onClick={() => { setMenuOpen(false); useDojo.getState().setDojosOpen(true) }}>Dojos</button>
            <button className="tb-menu-item" onClick={openAccount}>Account</button>
            <button className="tb-menu-item" onClick={openCredits}>My Credits · Billing</button>
            <button className="tb-menu-item" onClick={() => { setMenuOpen(false); useDojo.getState().setSettingsOpen(true) }}>Settings</button>
            <button className="tb-menu-item tb-only-mobile" onClick={openStudio}>Manage Studio</button>

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
    </header>
  )
}
