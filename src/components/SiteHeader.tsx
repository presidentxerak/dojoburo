import { useState } from 'react'
import { Logo } from './Logo'
import { Wordmark } from './Wordmark'

// The one site header, shared by the landing page, the Dojo Guide and every
// connector page · identical markup so they always match. Section links point at
// /#<id> so they work from any route (on the landing they just scroll). Pass an
// `enter` handler on the landing for a smooth in-page transition; elsewhere the
// CTA navigates to /#app.

const NAV_LINKS: [string, string][] = [
  ['/#studio', 'Build'],
  ['/#stack', 'Connect'],
  ['/#cast', 'Team'],
  ['/#how', 'How it works'],
  ['/#pricing', 'Pricing'],
]

export function SiteHeader({ enter }: { enter?: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const go = enter ?? (() => { window.location.href = '/#app' })
  return (
    <>
      <header className="lp-nav">
        <a className="lp-brand" href="/" style={{ textDecoration: 'none' }}>
          <Logo size={30} /> <Wordmark />
        </a>
        <nav className="lp-nav-links">
          {NAV_LINKS.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          <a className="lp-navguide" href="/guide">Dojo Guide</a>
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
          <button className="lp-cta sm" onClick={go}>Enter the office →</button>
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
            <button className="lp-cta" onClick={() => { setMenuOpen(false); go() }}>Enter the office →</button>
          </nav>
        </>
      )}
    </>
  )
}
