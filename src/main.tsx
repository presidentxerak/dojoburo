import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Landing } from './Landing'
import { DojoCity } from './components/city/DojoCity'
import { AuthProvider } from './auth/AuthProvider'
import { WidgetApp } from './WidgetApp'
import { Terms, Privacy } from './LegalPage'
import { GuidePage, ConnectorGuidePage } from './DojoGuide'
import { CompanySite } from './CompanySite'
import { companyById } from './data/showcase'
import { SHOW_MOCK_COMPANIES } from './config/flags'
import './index.css'

// Route ephemeral Vercel preview URLs (which change every deploy and aren't in
// Privy's allowed-origins) to the canonical production domain, so auth and
// everything else always run on the origin where they're configured. No-op on
// the real domain and on localhost.
const CANONICAL_HOST = 'www.dojoburo.com'
if (location.hostname.endsWith('.vercel.app')) {
  location.replace(`https://${CANONICAL_HOST}${location.pathname}${location.search}${location.hash}`)
}

function Root() {
  const [route, setRoute] = useState(() => location.hash.replace(/^#\/?/, ''))
  useEffect(() => {
    const on = () => setRoute(location.hash.replace(/^#\/?/, ''))
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  // path-based legal pages (served via SPA fallback)
  const path = location.pathname.replace(/\/+$/, '')
  if (path === '/terms') return <Terms />
  if (path === '/privacy') return <Privacy />
  if (path === '/guide') return <GuidePage />
  const gm = path.match(/^\/guide\/([a-z0-9-]+)$/i)
  if (gm) return <ConnectorGuidePage id={gm[1].toLowerCase()} />
  // per-company showcase sites · https://dojoburo.com/<company-id> (demo-only)
  const cm = path.match(/^\/([a-z0-9-]+)$/i)
  if (SHOW_MOCK_COMPANIES && cm && companyById(cm[1].toLowerCase())) return <CompanySite id={cm[1].toLowerCase()} />
  // standalone always-on-top widget window (Tauri desktop) · no auth chrome
  if (route === 'widget') return <WidgetApp />
  if (route === 'app') return <App />
  // Dojo City · the isometric map you visit from the dashboard (header · City).
  // Your building grows with the number of Dojos you run; click it to go back in.
  if (route === 'city') return <DojoCity enterDojo={() => { location.hash = 'app' }} exit={() => { location.hash = 'app' }} />
  return <Landing enter={() => { location.hash = 'app' }} />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Root />
    </AuthProvider>
  </StrictMode>,
)

// Self-healing after deploys. The old caching service worker could serve stale
// module chunks, blanking panels. We (a) let the kill-switch sw.js remove any
// existing service worker + wipe caches, (b) reload once when the controller
// changes, and (c) reload once if a lazy chunk fails to load (stale cache) so
// the user always ends up on fresh files. All guards prevent reload loops.
if ('serviceWorker' in navigator) {
  // remove any previously-registered service worker (kill the stale cache)
  navigator.serviceWorker.getRegistrations?.().then((regs) => {
    for (const r of regs) { void r.update?.() }
  }).catch(() => { /* */ })

  let swReloaded = false
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (swReloaded) return
    swReloaded = true
    location.reload()
  })
}

// If a dynamically-imported module chunk fails (usually a stale cache after a
// deploy), reload once to fetch the current chunks.
window.addEventListener('vite:preloadError', () => {
  try {
    if (sessionStorage.getItem('dj_chunk_reload') === '1') return
    sessionStorage.setItem('dj_chunk_reload', '1')
    location.reload()
  } catch { location.reload() }
})

