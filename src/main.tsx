import { StrictMode, Suspense, lazy, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Landing } from './Landing'
import { AuthProvider } from './auth/AuthProvider'

// The product, behind the beta door.
//
// These four were eager, so every visitor to the marketing site — and every
// crawler reading a job-title page — downloaded the whole dojo before any text
// appeared, to reach a screen the door would not have let them through anyway.
// They are the only routes below the gate, which makes them exactly the right
// seam to split on.
const App = lazy(() => import('./App'))
const WidgetApp = lazy(() => import('./WidgetApp').then((m) => ({ default: m.WidgetApp })))
const StudioPage = lazy(() => import('./components/workshop/WorkshopModal').then((m) => ({ default: m.StudioPage })))
const ConnectorsPage = lazy(() => import('./components/ConnectorsPage').then((m) => ({ default: m.ConnectorsPage })))
import { Terms, Privacy } from './LegalPage'
import { GuidePage, ConnectorGuidePage } from './DojoGuide'
import { AcademyHome, TrackPage, LessonPage } from './academy/Academy'
import { TeammatePage, TeammatesPage, isTeammateSlug } from './TeammatePage'
import { usePath } from './lib/router'
import { Boundary } from './components/Boundary'
import { AccessGate, betaUnlocked } from './components/AccessGate'
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
  // The private beta gate. It closes the PRODUCT, not the website.
  //
  // It used to sit above every route, which quietly cost us the thing the
  // Academy and the teammate pages exist for: a crawler that runs JavaScript —
  // Googlebot does — saw a password prompt where the prerendered HTML had a
  // page, so twenty-six lessons and seventeen job titles were published and
  // unindexable at the same time. Worse, the two versions disagreed, which is
  // the shape of cloaking whether or not you meant it.
  //
  // "Private beta" means nobody can USE it yet. It never meant nobody can read
  // what it is. So the marketing surface below — landing, teammates, Academy,
  // guide, terms, privacy — is open, and the door is in front of the app.
  const [open, setOpen] = useState(() => betaUnlocked())
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

  // ---- public · no gate ----------------------------------------------------
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
  // the job-title pages · /ai-marketing-manager and the rest, plus their hub
  if (path === '/teammates') return <TeammatesPage />
  const slug = path.replace(/^\//, '').toLowerCase()
  if (isTeammateSlug(slug)) return <TeammatePage slug={slug} />
  // The landing is a marketing page and is read without the code. Its call to
  // action sets #app, which is where the door actually is — you can read what
  // Dojoburo does, and you need the code to use it.
  if (!route) return <Landing enter={() => { location.hash = 'app' }} />

  // ---- the product · gated -------------------------------------------------
  if (!open) return <AccessGate onOpen={() => setOpen(true)} />
  // Everything past the door is a lazy chunk, so each of these is wrapped once
  // here rather than four times below. The fallback is deliberately plain: the
  // dojo takes a moment to arrive and a spinner that looks like the app would
  // be a worse lie than a line of text.
  const gated = (node: React.ReactNode) => (
    <Suspense fallback={<div className="boot-wait">Opening your dojo…</div>}>{node}</Suspense>
  )
  // standalone always-on-top widget window (Tauri desktop) · no auth chrome
  if (route === 'widget') return gated(<WidgetApp />)
  // An invitation link is `#join=<token>`, and it arrives cold — the person
  // clicking it has never opened this app. It has to land in the app, because
  // that is where the token is redeemed; falling through to the landing page
  // would drop the invitation on the floor and tell them nothing.
  if (route === 'app' || route.startsWith('join=')) return gated(<App />)
  // Dojo Academy · opened from inside the app · stays in the dojo environment
  // (dojo header + Back-to-dojo) instead of the landing page.
  if (route === 'academy') return <AcademyHome inApp />
  // Dojo Guide · the per-app setup pages, opened from inside the dojo.
  if (route === 'guide') return <GuidePage inApp />
  // Dojo Studio · full page (build dojos, tune agents, account & billing).
  if (route === 'studio') return gated(<StudioPage />)
  // Connect apps · full page, every connector grouped by functionality category.
  if (route === 'connect') return gated(<ConnectorsPage />)
  return <Landing enter={() => { location.hash = 'app' }} />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Boundary what="DojoBuro">
      <AuthProvider>
        <Root />
      </AuthProvider>
    </Boundary>
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

