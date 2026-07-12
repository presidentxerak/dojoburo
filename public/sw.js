// KILL SWITCH · self-destroying service worker.
//
// The previous caching SW served stale bundles after deploys, leaving module
// panels blank. This version does the opposite of caching: on activation it
// wipes ALL caches, UNREGISTERS itself, and reloads every open tab so the app
// is served fresh from the network. Once it has run, no service worker remains.
self.addEventListener('install', () => { self.skipWaiting() })

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    try {
      const keys = await caches.keys()
      await Promise.all(keys.map((k) => caches.delete(k)))
      await self.registration.unregister()
      const clients = await self.clients.matchAll({ type: 'window' })
      for (const c of clients) { try { c.navigate(c.url) } catch { /* */ } }
    } catch { /* best-effort cleanup */ }
  })())
})

// Never intercept fetches — everything goes straight to the network.
