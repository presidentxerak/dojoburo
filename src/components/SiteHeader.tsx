import { useState } from 'react'
import { Logo } from './Logo'
import { Wordmark } from './Wordmark'

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

export function SiteHeader(_props: { enter?: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  // "Create your company" → the creation form lives in the landing hero. On the
  // landing, focus it; from any other page, go to the landing so it's shown.
  const create = () => {
    const input = document.querySelector<HTMLInputElement>('#create-hero .hc-input')
    if (input) { input.scrollIntoView({ behavior: 'smooth', block: 'center' }); setTimeout(() => input.focus(), 300) }
    else window.location.href = '/#create-hero'
  }
  return (
    <>
      <header className="lp-nav">
        <a className="lp-brand" href="/" style={{ textDecoration: 'none' }}>
          <Logo size={38} /> <Wordmark />
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
          <button className="lp-cta sm" onClick={create}>Create your company</button>
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
            <button className="lp-cta" onClick={() => { setMenuOpen(false); create() }}>Create your company</button>
          </nav>
        </>
      )}
    </>
  )
}
