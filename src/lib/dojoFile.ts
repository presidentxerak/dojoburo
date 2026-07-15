// .dojo project files — save the WHOLE workspace (every dojo, every studio's
// assets: brand kits, websites, video projects + clips, images, deliverables,
// settings) to a single downloadable file, and re-upload it to restore it all.
// It's a standard zip under the hood (see lib/zip). Everything is local; nothing
// is uploaded to a server.
import { idbGet, idbSet, idbKeys, type StoreName } from './idb'
import { zipStore, unzip, type ZipEntry } from './zip'

const STORES: StoreName[] = ['kv', 'projects', 'assets']

interface Record { path: string; store: StoreName; key: string; kind: 'json' | 'blob'; type?: string }
interface Manifest {
  app: 'dojoburo'; kind: 'dojo-project'; version: number; exportedAt: number; name: string
  records: Record[]; localStorage: { [k: string]: string }
}

const enc = new TextEncoder()
const dec = new TextDecoder()

/** Bundle the whole workspace into a .dojo Blob. */
export async function exportDojoFile(name: string, stampMs: number): Promise<Blob> {
  const entries: ZipEntry[] = []
  const records: Record[] = []
  let i = 0
  for (const store of STORES) {
    const keys = await idbKeys(store)
    for (const key of keys) {
      const val = await idbGet(store, key)
      if (val === undefined || val === null) continue
      const path = `d/${i++}`
      if (val instanceof Blob) {
        entries.push({ name: path, data: new Uint8Array(await val.arrayBuffer()) })
        records.push({ path, store, key, kind: 'blob', type: val.type })
      } else if (val instanceof ArrayBuffer) {
        entries.push({ name: path, data: new Uint8Array(val) })
        records.push({ path, store, key, kind: 'blob', type: 'application/octet-stream' })
      } else {
        entries.push({ name: path, data: enc.encode(JSON.stringify(val)) })
        records.push({ path, store, key, kind: 'json' })
      }
    }
  }
  const ls: { [k: string]: string } = {}
  try {
    for (let n = 0; n < localStorage.length; n++) {
      const k = localStorage.key(n)!
      if (/^dojoburo\./.test(k)) ls[k] = localStorage.getItem(k) ?? ''
    }
  } catch { /* ignore */ }

  const manifest: Manifest = { app: 'dojoburo', kind: 'dojo-project', version: 1, exportedAt: stampMs, name, records, localStorage: ls }
  entries.unshift({ name: 'manifest.json', data: enc.encode(JSON.stringify(manifest)) })
  return new Blob([zipStore(entries) as unknown as BlobPart], { type: 'application/octet-stream' })
}

/** Restore a .dojo file into IndexedDB + localStorage. Caller should reload. */
export async function importDojoFile(file: File): Promise<{ ok: boolean; error?: string; name?: string }> {
  let items: ZipEntry[]
  try { items = unzip(new Uint8Array(await file.arrayBuffer())) } catch { return { ok: false, error: 'This is not a valid .dojo file.' } }
  const mEntry = items.find((e) => e.name === 'manifest.json')
  if (!mEntry) return { ok: false, error: 'Missing manifest — not a .dojo project.' }
  let man: Manifest
  try { man = JSON.parse(dec.decode(mEntry.data)) } catch { return { ok: false, error: 'Corrupt manifest.' } }
  if (man.app !== 'dojoburo') return { ok: false, error: 'Not a DojoBuro project file.' }

  const byPath = new Map(items.map((e) => [e.name, e.data]))
  for (const r of man.records) {
    const data = byPath.get(r.path)
    if (!data) continue
    try {
      if (r.kind === 'blob') await idbSet(r.store, r.key, new Blob([data as unknown as BlobPart], { type: r.type || 'application/octet-stream' }))
      else await idbSet(r.store, r.key, JSON.parse(dec.decode(data)))
    } catch { /* skip a bad record, keep going */ }
  }
  try { for (const [k, v] of Object.entries(man.localStorage || {})) localStorage.setItem(k, v) } catch { /* ignore */ }
  return { ok: true, name: man.name }
}

/** Trigger a browser download of a Blob as `<name>.dojo`. */
export function downloadDojo(blob: Blob, name: string): void {
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = `${name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'dojo'}.dojo`
  a.click()
  setTimeout(() => URL.revokeObjectURL(a.href), 5000)
}
