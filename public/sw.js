// DojoBuro service worker · conservative, offline-capable, deploy-safe.
//
// Strategy:
//   * navigations (HTML)      → network-first, fall back to cached shell offline
//   * hashed static assets    → cache-first (Vite emits immutable /assets/*-<hash>)
//   * /api/* and everything else → network only (never cached)
// skipWaiting + clients.claim so a new deploy takes over immediately (no stale UI).
const CACHE = 'dojoburo-v1'

self.addEventListener('install', (e) => {
  self.skipWaiting()
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(['/'])))
})

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  const req = event.request
  if (req.method !== 'GET') return
  const url = new URL(req.url)
  if (url.origin !== self.location.origin) return          // third-party: let it through
  if (url.pathname.startsWith('/api/')) return               // never cache API

  // navigations → network-first with offline shell fallback
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).catch(() => caches.match('/').then((r) => r || Response.error())),
    )
    return
  }

  // immutable hashed build assets → cache-first
  if (url.pathname.startsWith('/assets/')) {
    event.respondWith(
      caches.match(req).then((hit) =>
        hit || fetch(req).then((res) => {
          const copy = res.clone()
          caches.open(CACHE).then((c) => c.put(req, copy))
          return res
        }),
      ),
    )
  }
})
