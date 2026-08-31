import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useDojo } from '../store'
import { useWorkshop } from '../workshop'
import { useWork } from '../agents/workStore'
import { privyConfigured, privyControls } from '../auth/controls'
import { skinById } from '../data/skins'
import { EFFORT_BY_ID } from '../data/effort'
import { EffortPanel } from './EffortControl'
import { Logo } from './Logo'
import { SkinAvatar } from './workshop/SkinAvatar'
import { NotificationBell } from './NotificationBell'
import { useOverlay } from '../lib/overlay'

/** The app's header.
 *
 *  The brand (logo + wordmark + Beta) belongs to the landing page and is not
 *  repeated here: inside the app the header's job is the surface you are on,
 *  not the product's name.
 *
 *  ONE menu, opened by your own face. There used to be two triggers (an avatar
 *  and a burger) opening the same panel, a Credits button next to a menu that
 *  already carried Credits, an "Account" row above a profile row that also
 *  opened Account, and a "Settings" row above two settings rows. The menu is
 *  now grouped by what you are doing — your work, what it costs, learning how,
 *  your account — with each thing in exactly one place.
 */
export function TopBar({ center }: { center?: React.ReactNode } = {}) {
  const account = useWorkshop((s) => s.account)
  const signInGuest = useWorkshop((s) => s.signInGuest)
  const signOut = useWorkshop((s) => s.signOut)
  const effort = useWork((s) => s.effort)

  const [menuOpen, setMenuOpen] = useState(false)
  const [effortOpen, setEffortOpen] = useState(false)
  const mode = EFFORT_BY_ID[effort]

  // The menu is a column down the right edge · exactly where the toasts stack.
  // Flagging it on the document lets them step aside rather than pile up over
  // the thing the founder just opened.
  useEffect(() => {
    const el = document.documentElement
    if (!menuOpen) { delete el.dataset.menu; return }
    el.dataset.menu = 'open'
    // the dojo keeps drawing behind the menu otherwise, and opening it took
    // seconds because React was competing with a 60fps render loop
    useOverlay.getState().push()
    return () => { delete el.dataset.menu; useOverlay.getState().pop() }
  }, [menuOpen])

  // The brand (logo + name) links back to the landing page.
  const goHome = () => { setMenuOpen(false); location.hash = '' }
  const openStudio = () => { setMenuOpen(false); useWork.getState().openStudio('studio') }
  const openAccount = () => { setMenuOpen(false); useWork.getState().openStudio('account') }
  const openConnect = () => { setMenuOpen(false); useWork.getState().openConnect() }
  // Your companies · the work you have built, not the card that creates one.
  // From another route we have to come back to #app first, and leave the
  // intent behind so App knows where to land.
  const openProjects = () => {
    setMenuOpen(false)
    if (location.hash.replace(/^#/, '') !== 'app') {
      try { sessionStorage.setItem('dojoburo.nav', 'projects') } catch { /* ignore */ }
      location.hash = 'app'
      return
    }
    window.dispatchEvent(new Event('open-projects'))
  }
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

  return (
    <header className="topbar topbar-app">
      {/* left · a small way home, no brand lockup */}
      <button className="tb-home" onClick={goHome} aria-label="DojoBuro — landing page" title="Landing page">
        <Logo size={26} />
      </button>

      {/* centre · whatever the current surface needs */}
      <div className="topbar-mid">{center}</div>

      <div className="topbar-right">
        <NotificationBell />
        {!account && (
          <>
            <button className="btn tiny ghost tb-desktop" onClick={doLogin}>Sign in</button>
            <button className="btn tiny tb-desktop" onClick={doLogin}>Sign up</button>
          </>
        )}
        {/* ONE trigger, always the profile button · signed in it is your own
            face, signed out it is an empty seat. Never a second burger. */}
        <button
          className={`tb-profile tb-menu-btn ${menuOpen ? 'on' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          title={account ? account.name || 'Founder' : 'Menu'}
        >
          {account
            ? <SkinAvatar skin={skinById(account.avatarSkinId)} size={26} />
            : <span className="tb-noface" aria-hidden />}
        </button>
      </div>

      {menuOpen && createPortal(
        <>
          <div className="tb-menu-scrim" onClick={() => setMenuOpen(false)} />
          <div className="tb-menu" role="menu">
            {/* who you are · the only Account entry there is */}
            {account ? (
              <button className="tb-menu-profile" onClick={openAccount}>
                <SkinAvatar skin={skinById(account.avatarSkinId)} size={30} />
                <span className="tb-menu-name">{account.name || 'Founder'}<em>{account.provider === 'privy' ? 'Account · synced' : 'Account'}</em></span>
              </button>
            ) : (
              <div className="tb-menu-auth">
                <button className="btn tiny ghost" onClick={doLogin}>Sign in</button>
                <button className="btn tiny" onClick={doLogin}>Sign up</button>
              </div>
            )}

            {/* your work */}
            <div className="tb-menu-rule" />
            <button className="tb-menu-item tb-menu-link" onClick={openProjects}>My companies</button>
            <button className="tb-menu-item" onClick={openStudio}>Dojo settings</button>
            <button className="tb-menu-item tb-menu-link" onClick={openConnect}>Connect apps</button>

            {/* what it costs */}
            <div className="tb-menu-rule" />
            <button className="tb-menu-item" onClick={openCredits}>My Credits · Billing</button>
            <button className="tb-menu-item" onClick={() => { setMenuOpen(false); setEffortOpen(true) }}>
              How hard your team works
              <span className="tb-menu-val" style={{ ['--ac' as string]: mode?.tint }}>{mode?.glyph} {mode?.label}</span>
            </button>

            {/* how any of it works */}
            <div className="tb-menu-rule" />
            <button className="tb-menu-item tb-menu-link" onClick={() => { setMenuOpen(false); location.hash = 'academy' }}>Dojo Academy</button>
            <button className="tb-menu-item tb-menu-link" onClick={() => { setMenuOpen(false); location.hash = 'guide' }}>App setup guide</button>
            <button className="tb-menu-item" onClick={() => { setMenuOpen(false); window.dispatchEvent(new Event('open-cmdk')) }}>Quick search <kbd className="tb-kbd">⌘K</kbd></button>

            {/* the app itself */}
            <div className="tb-menu-rule" />
            {/* Display mode and the build stamp are settings, and they are in
                Settings · Appearance and Settings · About. The menu is for
                going places, not for holding a copy of what is one row down. */}
            <button className="tb-menu-item" onClick={() => { setMenuOpen(false); useDojo.getState().setSettingsOpen(true) }}>Settings</button>

            {account && <button className="tb-menu-item tb-signout" onClick={doSignOut}>Sign out</button>}
          </div>
        </>,
        document.body,
      )}

      {effortOpen && <EffortPanel onClose={() => setEffortOpen(false)} />}
    </header>
  )
}
