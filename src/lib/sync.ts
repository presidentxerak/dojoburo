// Company documents, kept in step with the organisation.
//
// The browser's IndexedDB copy stays exactly where it was and stays the thing
// the app reads. That is deliberate: it is what makes the app fast, what makes
// it work on a plane, and what has always made it feel local. All this adds is
// a second copy on the server, so a company survives a cleared cache, a new
// laptop, and a colleague.
//
// Shape of it:
//   · every write to the `projects` store also queues a push
//   · a push carries the version it was based on
//   · the server refuses a stale push and hands back what is really there
//   · a refused push is kept, not dropped — see onConflict
//
// Everything degrades. No database, no network, not signed in, a 403 because
// you are a viewer: the queue simply never drains and the app behaves exactly
// as it did before any of this existed.
import { idbGet, idbSet, idbDel, idbSetQuiet, idbDelQuiet, idbKeys, observeProjects } from './idb'
import { apiFetch } from './apiFetch'
import { refParams } from '../agents/workApi'

/** What the server knows about a document we hold. */
interface Stamp { version: number; pushedAt: number }

const STAMP_KEY = 'sync.stamps'
const CURSOR_KEY = 'sync.cursor'
const QUEUE_KEY = 'sync.queue'

type Stamps = Record<string, Stamp>
type Queue = string[]

let stamps: Stamps | null = null
let queue: Queue | null = null

const loadStamps = async (): Promise<Stamps> => (stamps ??= (await idbGet<Stamps>('kv', STAMP_KEY)) ?? {})
const saveStamps = async () => { await idbSet('kv', STAMP_KEY, stamps ?? {}) }
const loadQueue = async (): Promise<Queue> => (queue ??= (await idbGet<Queue>('kv', QUEUE_KEY)) ?? [])
const saveQueue = async () => { await idbSet('kv', QUEUE_KEY, queue ?? []) }

/* ------------------------------------------------------------------ state */

export type SyncState = 'off' | 'idle' | 'syncing' | 'offline' | 'read-only' | 'conflict'

let state: SyncState = 'off'
const listeners = new Set<(s: SyncState) => void>()

export const syncState = (): SyncState => state
export function onSyncState(fn: (s: SyncState) => void): () => void {
  listeners.add(fn)
  fn(state)
  return () => { listeners.delete(fn) }
}
function setState(s: SyncState) {
  if (s === state) return
  state = s
  for (const fn of listeners) { try { fn(s) } catch { /* a listener must not break the sync */ } }
}

/** Conflicts nobody has resolved yet, newest first. */
export interface Conflict { key: string; mine: unknown; theirs: unknown; theirVersion: number; at: number }
let conflicts: Conflict[] = []
export const pendingConflicts = (): Conflict[] => conflicts

/* ------------------------------------------------------------------ write */

/**
 * Record a local write and queue it for the server.
 *
 * Called by the store helpers after they have written to IndexedDB — never
 * instead of them. A failure here must never cost somebody their work, so the
 * local write happens first and this is best-effort on top.
 */
export async function noteWrite(key: string): Promise<void> {
  const q = await loadQueue()
  if (!q.includes(key)) { q.push(key); await saveQueue() }
  void drain()
}

/* ------------------------------------------------------------------- push */

let draining: Promise<void> | null = null

/**
 * Send everything queued. Safe to call as often as you like.
 *
 * A second call while one is in flight returns the SAME promise rather than
 * nothing, so `await drain()` always means "the queue has been offered" — for
 * anyone waiting on it, and for the tests that assert on what happened.
 */
export function drain(): Promise<void> {
  if (!draining) draining = run().finally(() => { draining = null })
  return draining
}

async function run(): Promise<void> {
  const q = await loadQueue()
  if (!q.length) return
  {
    const st = await loadStamps()
    setState('syncing')
    while (q.length) {
      const key = q[0]
      const body = await idbGet<unknown>('projects', key)
      const deleted = body === undefined
      const baseVersion = st[key]?.version ?? 0

      let r: Response
      try {
        r = await apiFetch(`/api/docs?action=push&${refParams()}`, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ key, body: deleted ? null : body, baseVersion, deleted }),
        })
      } catch {
        setState('offline')          // no network · keep the queue for later
        return
      }

      const j = await r.json().catch(() => ({ ok: false, error: 'bad_response' }))

      if (j.ok) {
        st[key] = { version: j.doc.version, pushedAt: Date.now() }
        q.shift()
        await saveQueue(); await saveStamps()
        continue
      }

      if (j.conflict) {
        // Somebody else changed this while we were away. Their version becomes
        // the local truth so the app is consistent with the company, and ours
        // is handed to the UI rather than thrown away.
        conflicts = [{ key, mine: body, theirs: j.server.body, theirVersion: j.server.version, at: Date.now() },
          ...conflicts.filter((c) => c.key !== key)].slice(0, 20)
        // quiet: this is the server's copy landing, not a local edit. Writing
        // it noisily would queue a push of what we just received and loop.
        if (j.server.deleted) await idbDelQuiet('projects', key)
        else await idbSetQuiet('projects', key, j.server.body)
        st[key] = { version: j.server.version, pushedAt: Date.now() }
        q.shift()
        await saveQueue(); await saveStamps()
        setState('conflict')
        continue
      }

      // read_only / forbidden / no_backend / auth: none of these get better by
      // retrying in a loop. Stop, keep the queue, and say why.
      setState(j.error === 'read_only' || j.error === 'forbidden' ? 'read-only' : 'off')
      return
    }
    setState(conflicts.length ? 'conflict' : 'idle')
  }
}

/* ------------------------------------------------------------------- pull */

/**
 * Bring down everything that changed since the last look.
 *
 * A document we have never seen, or one whose server version is ahead of the
 * stamp we hold, replaces the local copy. A document we have a QUEUED write for
 * is left alone — that write has not been offered to the server yet, and losing
 * it here would be losing work that the person can still see on their screen.
 */
export async function pullChanges(): Promise<number> {
  const st = await loadStamps()
  const q = await loadQueue()
  const cursor = await idbGet<string>('kv', CURSOR_KEY)

  let r: Response
  try {
    r = await apiFetch(`/api/docs?action=pull&${refParams()}${cursor ? `&since=${encodeURIComponent(cursor)}` : ''}`)
  } catch {
    setState('offline')
    return 0
  }
  const j = await r.json().catch(() => ({ ok: false }))
  if (!j.ok) { setState('off'); return 0 }

  let applied = 0
  let newest = cursor || ''
  for (const doc of j.docs as { key: string; body: unknown; version: number; updatedAt: string; deleted: boolean }[]) {
    if (doc.updatedAt > newest) newest = doc.updatedAt
    if (q.includes(doc.key)) continue                  // we have unsent work here
    if ((st[doc.key]?.version ?? 0) >= doc.version) continue
    if (doc.deleted) await idbDelQuiet('projects', doc.key)
    else await idbSetQuiet('projects', doc.key, doc.body)
    st[doc.key] = { version: doc.version, pushedAt: Date.now() }
    applied++
  }
  if (newest) await idbSet('kv', CURSOR_KEY, newest)
  await saveStamps()
  setState(conflicts.length ? 'conflict' : 'idle')
  return applied
}

/* ------------------------------------------------------------------ adopt */

/**
 * Offer everything already in this browser to the company.
 *
 * Without this the sync only ever carries writes made AFTER it started, and a
 * founder who has been using the app for months would watch their existing
 * companies never arrive anywhere — the brand kits, the sites, the finance
 * models, all still one cleared cache away from gone. They are the work most
 * worth protecting and they are exactly the work a pull-only sync ignores.
 *
 * Runs once. A document that already carries a stamp has been offered before
 * and is left alone.
 */
async function adoptLocal(): Promise<number> {
  const st = await loadStamps()
  const q = await loadQueue()
  let found = 0
  for (const key of await idbKeys('projects')) {
    if (st[key] || q.includes(key)) continue
    q.push(key)
    found++
  }
  if (found) await saveQueue()
  return found
}

/* ------------------------------------------------------------------ start */

let timer: ReturnType<typeof setInterval> | null = null

/**
 * Begin syncing. Idempotent.
 *
 * The interval is deliberately unhurried. This is a company's documents, not a
 * chat: a colleague's change arriving within half a minute is fine, and polling
 * harder would cost every user a request every few seconds for a change that
 * almost never comes.
 */
export function startSync(everyMs = 30_000): void {
  if (timer) return
  // From here on, every write to a company document is offered to the server.
  observeProjects((key) => { void noteWrite(key) })
  // Pull first, so anything the company already has wins over a stale local
  // copy; then offer whatever this browser holds that the company has not seen.
  void pullChanges().then(adoptLocal).then(() => drain())
  timer = setInterval(() => { void pullChanges().then(() => drain()) }, everyMs)
  // a tab coming back to the foreground is the moment a stale view is most
  // likely to be looked at
  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) void pullChanges().then(() => drain())
    })
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('online', () => { void drain() })
  }
}

export function stopSync(): void {
  if (timer) { clearInterval(timer); timer = null }
  observeProjects(null)
  setState('off')
}

/** Forget everything this browser knows about the server's state. */
export async function resetSync(): Promise<void> {
  stamps = {}; queue = []
  conflicts = []
  await idbDel('kv', STAMP_KEY)
  await idbDel('kv', QUEUE_KEY)
  await idbDel('kv', CURSOR_KEY)
}
