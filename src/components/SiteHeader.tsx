import { useState } from 'react'
import { Logo } from './Logo'
import { Wordmark } from './Wordmark'
import { useWorkshop } from '../workshop'
import { skinById } from '../data/skins'
import { SkinAvatar } from './workshop/SkinAvatar'

// The one site header, shared by the landing page, the Dojo Guide and every
// connector page · identical markup so they always match. Section links point at
// /#<id> so they work from any route (on the landing they just scroll). Pass an
// `enter` handler on the landing for a smooth in-page transition; elsewhere the
// CTA navigates to /#app.

// "How it works" is merged into the Dojo Guide · only the Dojo Guide button
// remains for it.
const NAV_LINKS: [string, string][] = [
  ['/#jobs', 'Build'],      // → "Built around your business"
  ['/#stack', 'Connect'],
  ['/#studios', 'Team'],    // → "Meet the office"
  ['/#pricing', 'Pricing'],
]

export function SiteHeader({ enter }: { enter?: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  // When signed in we show the profile button + burger instead of Sign in/up.
  const account = useWorkshop((s) => s.account)
  // "Create your company" → the app's home, where you name it and pick your
  // teams. Nothing to fill in on the landing any more.
  const create = () => {
    setMenuOpen(false)
    if (enter) enter()
    else window.location.href = '/#app'
  }
  // Sign in / Sign up → enter the dojo. Browsing the home is open to everyone;
  // Privy is asked for at the moment a project is saved.
  const goDojo = () => { setMenuOpen(false); if (enter) enter(); else window.location.href = '/#app' }
  return (
    <>
      <header className="lp-nav">
        <a className="lp-brand" href="/" style={{ textDecoration: 'none' }}>
          <Logo size={38} /> <span className="lp-brand-wm"><Wordmark /> <span className="beta-badge">Beta</span></span>
        </a>
        <nav className="lp-nav-links">
          {NAV_LINKS.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          <a href="/guide">Dojo Guide</a>
        </nav>
        <div className="lp-nav-right">
          <button
            className={`lp-burger${menuOpen ? ' on' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
          <button className="lp-cta sm lp-cta-create lp-nav-create" onClick={create}>Create your project</button>
          {account ? (
            <button className="lp-profile-btn lp-auth-btn" onClick={goDojo} title={account.name || 'Enter your dojo'}>
              <SkinAvatar skin={skinById(account.avatarSkinId)} size={26} />
              <span>{account.name || 'My dojo'}</span>
            </button>
          ) : (
            <>
              <button className="lp-cta sm lp-cta-ghost lp-auth-btn" onClick={goDojo}>Sign in</button>
              <button className="lp-cta sm lp-auth-btn" onClick={goDojo}>Sign up</button>
            </>
          )}
        </div>
      </header>

      {menuOpen && (
        <>
          <div className="lp-menu-scrim" onClick={() => setMenuOpen(false)} />
          <nav className="lp-mobile-menu">
            {NAV_LINKS.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <a className="lp-menu-guide" href="/guide" onClick={() => setMenuOpen(false)}>Dojo Guide</a>
            <button className="lp-cta" onClick={() => { setMenuOpen(false); create() }}>Create your project</button>
            <div className="lp-menu-auth">
              {account ? (
                <button className="lp-menu-profile" onClick={goDojo}>
                  <SkinAvatar skin={skinById(account.avatarSkinId)} size={30} />
                  <span>{account.name || 'My dojo'}<em>Enter your dojo →</em></span>
                </button>
              ) : (
                <>
                  <button className="lp-cta lp-cta-ghost" onClick={goDojo}>Sign in</button>
                  <button className="lp-cta" onClick={goDojo}>Sign up</button>
                </>
              )}
            </div>
          </nav>
        </>
      )}
    </>
  )
}
