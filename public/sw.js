// DojoBuro service worker · v3 · network-first everywhere (deploy-safe).
//
// Lesson learned: a cache-first strategy on /assets/ can serve a stale index or
// make a lazy-loaded module chunk 404 after a deploy → blank panels. So this SW
// is network-first for EVERYTHING and only falls back to cache when offline.
// It also wipes every old cache on activate so no stale chunk survives an update.
const CACHE = 'dojoburo-v3'

self.addEventListener('install', (e) => {
  self.skipWaiting()
  e.waitUntil(caches.open(CACHE).then((c) => c.add('/')))
})

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((k) => (k === CACHE ? null : caches.delete(k)))))
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  const req = event.request
  if (req.method !== 'GET') return
  const url = new URL(req.url)
  if (url.origin !== self.location.origin) return
  if (url.pathname.startsWith('/api/')) return

  // network-first: always try the network; cache the fresh copy; fall back to
  // cache only when offline (navigations fall back to the cached shell).
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)) }
        return res
      })
      .catch(() => caches.match(req).then((hit) => hit || (req.mode === 'navigate' ? caches.match('/') : undefined) || Response.error())),
  )
})
