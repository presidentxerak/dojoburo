// Local-first persistence · a tiny, dependency-free IndexedDB wrapper.
//
// Why: localStorage is ~5 MB, synchronous and string-only · useless for the
// pro modules (brand kits, website projects, video timelines, image/video
// assets). IndexedDB holds hundreds of MB and stores Blobs directly, so heavy
// work stays on the user's machine and never touches the server.
//
// Design: one database, a few object stores, a minimal async KV-style API
// (get/set/del/keys/values/each). No external dep · keeps the bundle light.

const DB_NAME = 'dojoburo'
const DB_VERSION = 1

// Object stores. Add new ones here (bump DB_VERSION) as modules need them.
export type StoreName =
  | 'kv'        // small JSON blobs (settings, last mission, drafts index…)
  | 'projects'  // module documents (brand kit, website, campaign, video…)
  | 'assets'    // binary assets (images, audio, video) as Blobs

const STORES: StoreName[] = ['kv', 'projects', 'assets']

let dbp: Promise<IDBDatabase> | null = null

/** True when IndexedDB is usable (it is, in every modern browser; guards SSR/old). */
export function idbAvailable(): boolean {
  try { return typeof indexedDB !== 'undefined' } catch { return false }
}

function openDb(): Promise<IDBDatabase> {
  if (dbp) return dbp
  dbp = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION)
    req.onupgradeneeded = () => {
      const db = req.result
      for (const s of STORES) if (!db.objectStoreNames.contains(s)) db.createObjectStore(s)
    }
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
  return dbp
}

function tx<T>(store: StoreName, mode: IDBTransactionMode, run: (s: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  return openDb().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const t = db.transaction(store, mode)
        const req = run(t.objectStore(store))
        req.onsuccess = () => resolve(req.result as T)
        req.onerror = () => reject(req.error)
      }),
  )
}

/** Read one value (or undefined). Works for JSON, Blobs, ArrayBuffers, etc. */
export async function idbGet<T = unknown>(store: StoreName, key: string): Promise<T | undefined> {
  if (!idbAvailable()) return undefined
  try { return await tx<T>(store, 'readonly', (s) => s.get(key) as IDBRequest<T>) } catch { return undefined }
}

/** Write one value under a key (overwrites). */
export async function idbSet(store: StoreName, key: string, value: unknown): Promise<boolean> {
  if (!idbAvailable()) return false
  try { await tx(store, 'readwrite', (s) => s.put(value as any, key)); return true } catch { return false }
}

/** Delete one value. */
export async function idbDel(store: StoreName, key: string): Promise<void> {
  if (!idbAvailable()) return
  try { await tx(store, 'readwrite', (s) => s.delete(key) as unknown as IDBRequest<void>) } catch { /* ignore */ }
}

/** All keys in a store (newest-first is the caller's job · keys sort ascending). */
export async function idbKeys(store: StoreName): Promise<string[]> {
  if (!idbAvailable()) return []
  try { return (await tx<IDBValidKey[]>(store, 'readonly', (s) => s.getAllKeys() as IDBRequest<IDBValidKey[]>)).map(String) } catch { return [] }
}

/** All values in a store. */
export async function idbValues<T = unknown>(store: StoreName): Promise<T[]> {
  if (!idbAvailable()) return []
  try { return await tx<T[]>(store, 'readonly', (s) => s.getAll() as IDBRequest<T[]>) } catch { return [] }
}

/** Rough storage usage (bytes used / quota), when the browser exposes it. */
export async function idbEstimate(): Promise<{ usage: number; quota: number } | null> {
  try {
    if (navigator.storage?.estimate) {
      const e = await navigator.storage.estimate()
      return { usage: e.usage ?? 0, quota: e.quota ?? 0 }
    }
  } catch { /* ignore */ }
  return null
}
