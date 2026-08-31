// Which build is actually running, and how to get a newer one.
//
// A deploy going out and a browser running it are two different events. An old
// service worker, a CDN edge, or a tab left open for a day can all keep serving
// yesterday's bundle long after the new one is live — and from inside the app
// that is indistinguishable from "it was never deployed". So the build stamp is
// shown in the UI (menu footer, Settings, the dashboard chip) and every one of
// those places can force fresh files.
declare const __BUILD_ID__: string

/** Timestamp of the build, plus the commit Vercel built from when known. */
export const BUILD_ID = typeof __BUILD_ID__ !== 'undefined' ? __BUILD_ID__ : 'dev'

/** Unregister every service worker, wipe every cache, then reload from the
 *  network. Best-effort: whatever fails, the reload still happens. */
export async function forceFresh(): Promise<void> {
  try {
    if ('serviceWorker' in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations?.()
      await Promise.all((regs ?? []).map((r) => r.unregister()))
    }
    if ('caches' in window) {
      const keys = await caches.keys()
      await Promise.all(keys.map((k) => caches.delete(k)))
    }
  } catch { /* best effort */ }
  location.reload()
}
