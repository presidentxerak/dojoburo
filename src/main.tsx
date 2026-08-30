import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Landing } from './Landing'
import { DojoCity } from './components/city/DojoCity'
import { StudioPage } from './components/workshop/WorkshopModal'
import { ConnectorsPage } from './components/ConnectorsPage'
import { AuthProvider } from './auth/AuthProvider'
import { WidgetApp } from './WidgetApp'
import { Terms, Privacy } from './LegalPage'
import { GuidePage, ConnectorGuidePage } from './DojoGuide'
import { AcademyHome, TrackPage, LessonPage } from './academy/Academy'
import { usePath } from './lib/router'
import { CityKitDemo } from './city-kit/demo'
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
  // path-based pages (served via the SPA fallback in vercel.json). These are
  // real URLs because they are meant to be found, linked and shared — the
  // Academy in particular is the front door for anyone searching how agents
  // work, so every lesson has to be its own address.
  const path = usePath()
  if (path === '/terms') return <Terms />
  if (path === '/privacy') return <Privacy />
  if (path === '/academy') return <AcademyHome />
  const am = path.match(/^\/academy\/([a-z0-9-]+)(?:\/([a-z0-9-]+))?$/i)
  if (am) return am[2]
    ? <LessonPage trackSlug={am[1].toLowerCase()} lessonSlug={am[2].toLowerCase()} />
    : <TrackPage slug={am[1].toLowerCase()} />
  if (path === '/guide') return <GuidePage />
  const gm = path.match(/^\/guide\/([a-z0-9-]+)$/i)
  if (gm) return <ConnectorGuidePage id={gm[1].toLowerCase()} />
  // per-company showcase sites · https://dojoburo.com/<company-id> (demo-only)
  const cm = path.match(/^\/([a-z0-9-]+)$/i)
  if (SHOW_MOCK_COMPANIES && cm && companyById(cm[1].toLowerCase())) return <CompanySite id={cm[1].toLowerCase()} />
  // standalone always-on-top widget window (Tauri desktop) · no auth chrome
  if (route === 'widget') return <WidgetApp />
  if (route === 'app') return <App />
  // Dojo Academy · opened from inside the app · stays in the dojo environment
  // (dojo header + Back-to-dojo) instead of the landing page.
  if (route === 'academy') return <AcademyHome inApp />
  // Dojo Guide · the per-app setup pages, opened from inside the dojo.
  if (route === 'guide') return <GuidePage inApp />
  // Dojo Studio · full page (build dojos, tune agents, account & billing).
  if (route === 'studio') return <StudioPage />
  // Connect apps · full page, every connector grouped by functionality category.
  if (route === 'connect') return <ConnectorsPage />
  // Dojo City · the isometric map you visit from the dashboard (header · City).
  // Your building grows with the number of Dojos you run; click it to go back in.
  if (route === 'city') {
    // both doors out of the City land back INSIDE the dojo
    const toDojo = () => { try { sessionStorage.setItem('dojoburo.nav', 'dojo') } catch { /* ignore */ } location.hash = 'app' }
    return <DojoCity enterDojo={toDojo} exit={toDojo} />
  }
  // Standalone demo of the portable city-kit (self-contained, no app stores).
  if (route === 'city-kit') return <CityKitDemo />
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
// Build stamp · so we can confirm which version is actually running.
declare const __BUILD_ID__: string
try {
  const build = __BUILD_ID__
  ;(window as unknown as { __DOJOBURO_BUILD__: string }).__DOJOBURO_BUILD__ = build
  console.log('%cDojoBuro · build ' + build + ' · modules bundled', 'font-weight:bold;color:#7b5cff')
  document.documentElement.setAttribute('data-build', build)
} catch { /* ignore */ }

if ('serviceWorker' in navigator) {
  // Kill any previously-registered service worker AND wipe its caches. Older
  // builds shipped a caching SW that served stale bundles after a deploy,
  // leaving panels blank. We unregister every SW and delete every Cache Storage
  // entry so the app is always served fresh from the network.
  navigator.serviceWorker.getRegistrations?.().then(async (regs) => {
    let hadSW = false
    for (const r of regs) { hadSW = true; try { await r.unregister() } catch { /* */ } }
    try {
      if ('caches' in self) {
        const keys = await caches.keys()
        await Promise.all(keys.map((k) => caches.delete(k)))
      }
    } catch { /* */ }
    // If we just removed a controlling SW, reload once so this page is served
    // straight from the network instead of the SW's stale cache.
    if (hadSW && navigator.serviceWorker.controller) {
      try {
        if (sessionStorage.getItem('dj_sw_reload') !== '1') {
          sessionStorage.setItem('dj_sw_reload', '1')
          location.reload()
        }
      } catch { /* */ }
    }
  }).catch(() => { /* */ })
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

