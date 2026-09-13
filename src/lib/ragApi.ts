// Le client des documents d'entreprise.
//
// Une seule règle ici : ne jamais transformer une panne en apparence de
// résultat. Chaque fonction rend soit ce que le serveur a dit, soit un objet
// dont l'interface peut afficher la raison. Un catch qui rend un tableau vide
// ferait lire « aucun document » à quelqu'un dont la base est simplement
// injoignable, et il en conclurait que son dépôt a échoué.
import { apiFetch } from './apiFetch'
import { refParams, refObject } from '../agents/workApi'

export interface RagSpace { id: string; name: string; retentionDays: number | null; documents: number }
export interface RagDoc {
  id: string; filename: string; pages: number; bytes: number
  status: 'pending' | 'parsed' | 'indexed' | 'failed'
  chunks: number; error: string | null; createdAt: string; sha256: string
}
export interface RagPassage {
  chunkId: number; docId: string; filename: string; page: number
  text: string; rank: number; via: 'lexical' | 'semantic' | 'both'; score: number
}
export interface RagCitation { n: number; docId: string; filename: string; page: number }
export interface RagAnswer {
  text: string; citations: RagCitation[]; grounded: boolean
  answeredBy: string | null; answeredRegion: string | null; note?: string
}
export interface EmbedStatus {
  available: boolean; tag?: string; processor?: string; country?: string
  why?: string; setAnyOf?: string[]
  /** pgvector est installé et le schéma appliqué · l'autre moitié de la condition */
  vectorColumn?: boolean
  dim?: number
}

async function get(qs: string): Promise<any> {
  try {
    const res = await apiFetch(`/api/rag?${qs}&${refParams()}`, { headers: { accept: 'application/json' } })
    return await res.json()
  } catch {
    return { ok: false, error: 'offline' }
  }
}

async function post(action: string, body: Record<string, unknown>): Promise<any> {
  try {
    const res = await apiFetch(`/api/rag?action=${action}&${refParams()}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ ...body, ...refObject() }),
    })
    return await res.json()
  } catch {
    return { ok: false, error: 'offline' }
  }
}

export interface SpacesResult {
  ok: boolean; error?: string
  spaces: RagSpace[]
  residency: 'eu' | 'open'
  embeddings: EmbedStatus
  semantic: boolean
}

export async function listSpaces(): Promise<SpacesResult> {
  const j = await get('action=spaces')
  return {
    ok: !!j?.ok, error: j?.error,
    spaces: j?.spaces ?? [],
    residency: j?.residency ?? 'open',
    embeddings: j?.embeddings ?? { available: false },
    semantic: !!j?.semantic,
  }
}

export const createSpace = (name: string, retentionDays?: number | null) =>
  post('space', { name, retentionDays: retentionDays ?? null }) as Promise<{ ok: boolean; id?: string; error?: string }>

export async function listDocuments(spaceId?: string | null): Promise<{ ok: boolean; documents: RagDoc[]; error?: string }> {
  const j = await get(`action=documents${spaceId ? `&space=${encodeURIComponent(spaceId)}` : ''}`)
  return { ok: !!j?.ok, documents: j?.documents ?? [], error: j?.error }
}

export interface IngestResult {
  ok: boolean; docId?: string; filename: string; pages: number; chunks: number
  kind: string; needsOcr: boolean; duplicate?: boolean; embedded?: number
  warning?: string; error?: string
}

/**
 * Dépose un fichier.
 *
 * Le fichier est encodé en base64 par paquets : `String.fromCharCode(...bytes)`
 * sur un tableau de plusieurs mégaoctets dépasse la pile d'arguments et lève,
 * ce qui n'arrive qu'au moment précis où quelqu'un dépose un vrai document.
 */
export async function ingestFile(file: File, spaceId?: string | null): Promise<IngestResult> {
  const bytes = new Uint8Array(await file.arrayBuffer())
  let bin = ''
  for (let i = 0; i < bytes.length; i += 0x8000) {
    bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000))
  }
  const j = await post('ingest', {
    space: spaceId ?? null, filename: file.name, mime: file.type || undefined,
    contentBase64: btoa(bin),
  })
  return {
    ok: !!j?.ok, docId: j?.docId, filename: j?.filename ?? file.name,
    pages: j?.pages ?? 0, chunks: j?.chunks ?? 0, kind: j?.kind ?? '',
    needsOcr: !!j?.needsOcr, duplicate: j?.duplicate, embedded: j?.embedded,
    warning: j?.warning, error: j?.error,
  }
}

export async function searchDocs(q: string, spaceId?: string | null): Promise<{
  ok: boolean; passages: RagPassage[]; mode?: string; error?: string
}> {
  const j = await get(`action=search&q=${encodeURIComponent(q)}${spaceId ? `&space=${spaceId}` : ''}`)
  return { ok: !!j?.ok, passages: j?.passages ?? [], mode: j?.mode, error: j?.error }
}

export async function askDocs(q: string, spaceId?: string | null): Promise<{
  ok: boolean; answer?: RagAnswer; passages: RagPassage[]; error?: string; reason?: string
}> {
  const j = await get(`action=ask&q=${encodeURIComponent(q)}${spaceId ? `&space=${spaceId}` : ''}`)
  return { ok: !!j?.ok, answer: j?.answer, passages: j?.passages ?? [], error: j?.error, reason: j?.reason }
}

export const eraseDoc = (docId: string) =>
  post('erase', { docId }) as Promise<{ ok: boolean; error?: string }>

export const embedPending = (spaceId?: string | null) =>
  post('embed', { space: spaceId ?? null }) as Promise<{
    ok: boolean; embedded: number; total: number; tag: string | null; status: EmbedStatus
  }>

export interface Holdings {
  spaces: number; documents: number; pages: number; bytes: number; chunks: number; queries: number
}

export async function holdings(): Promise<{ ok: boolean; holdings?: Holdings; residency?: string }> {
  const j = await get('action=holdings')
  return { ok: !!j?.ok, holdings: j?.holdings, residency: j?.residency }
}

export interface ProcessingRecord {
  residency: 'eu' | 'open'
  compliant: boolean
  processors: Array<{
    processor: string; country: string; region: string; purpose: string; noTrainingByDefault: boolean
  }>
}

export async function processingRecord(): Promise<{ ok: boolean; record?: ProcessingRecord }> {
  const j = await get('action=processing')
  return { ok: !!j?.ok, record: j?.record }
}
