// Encrypted credential vault for tool connectors + company secrets.
//
// OAuth access/refresh tokens and company env vars are stored ONLY server-side
// and ONLY encrypted at rest with AES-256-GCM. The browser never receives a
// plaintext; it only ever sees a connector's status / a secret's name.
//
// KMS-style key management (no cloud dependency):
//   * CONNECTOR_ENC_KEY          — the ACTIVE master key (new writes)
//   * CONNECTOR_ENC_KEY_PREVIOUS — comma-separated OLD keys still accepted for
//     reads, so rotation never invalidates data
// Each key is 32 bytes as base64 or hex, or any passphrase (hashed to 32 bytes
// with SHA-256). Ciphertexts are tagged with a short key id (first 8 hex of
// SHA-256 of the key bytes) so open() picks the right key instantly.
//
// ZERO-DOWNTIME ROTATION:
//   1. move the current CONNECTOR_ENC_KEY value into CONNECTOR_ENC_KEY_PREVIOUS
//   2. set a fresh CONNECTOR_ENC_KEY · redeploy
//   3. new writes seal with the new key; old ciphertexts keep opening with the
//      previous key(s). Re-saving a secret (or a token refresh) re-seals it
//      with the active key. Drop the old key once nothing references it.
//
// Sealed formats:
//   v2:  "k<kid>.iv.tag.ct"  (all base64url · kid = 8 hex chars)
//   v1:  "iv.tag.ct"         (legacy · opened by trying every known key)
import { createCipheriv, createDecipheriv, randomBytes, createHash } from 'node:crypto'

const ALGO = 'aes-256-gcm'

export function vaultConfigured(): boolean {
  return !!process.env.CONNECTOR_ENC_KEY
}

function toKey(raw: string): Buffer {
  // accept a 32-byte base64 or hex key, otherwise derive one from the passphrase
  for (const enc of ['base64', 'hex'] as const) {
    try {
      const b = Buffer.from(raw, enc)
      if (b.length === 32) return b
    } catch {
      /* try next */
    }
  }
  return createHash('sha256').update(raw, 'utf8').digest()
}

function keyId(key: Buffer): string {
  return createHash('sha256').update(key).digest('hex').slice(0, 8)
}

interface VaultKey { kid: string; key: Buffer }

/** All known keys, active first. Cached per process (env never changes live). */
let cachedKeys: VaultKey[] | null = null
function keys(): VaultKey[] {
  if (cachedKeys) return cachedKeys
  const active = process.env.CONNECTOR_ENC_KEY
  if (!active) throw new Error('CONNECTOR_ENC_KEY not set')
  const list: VaultKey[] = []
  const seen = new Set<string>()
  for (const raw of [active, ...(process.env.CONNECTOR_ENC_KEY_PREVIOUS || '').split(',')]) {
    const trimmed = raw.trim()
    if (!trimmed) continue
    const key = toKey(trimmed)
    const kid = keyId(key)
    if (seen.has(kid)) continue
    seen.add(kid)
    list.push({ kid, key })
  }
  cachedKeys = list
  return list
}

/** Encrypt a secret with the ACTIVE key → "k<kid>.iv.tag.ciphertext". */
export function seal(plaintext: string): string {
  const { kid, key } = keys()[0]
  const iv = randomBytes(12)
  const c = createCipheriv(ALGO, key, iv)
  const ct = Buffer.concat([c.update(plaintext, 'utf8'), c.final()])
  const tag = c.getAuthTag()
  return [`k${kid}`, b64u(iv), b64u(tag), b64u(ct)].join('.')
}

function tryOpen(key: Buffer, iv: string, tag: string, ct: string): string | null {
  try {
    const d = createDecipheriv(ALGO, key, fromB64u(iv))
    d.setAuthTag(fromB64u(tag))
    return Buffer.concat([d.update(fromB64u(ct)), d.final()]).toString('utf8')
  } catch {
    return null
  }
}

/** Decrypt a sealed value (v2 or legacy v1). Returns null if no key matches. */
export function open(sealed: string): string | null {
  try {
    const parts = sealed.split('.')
    if (parts.length === 4 && parts[0].startsWith('k')) {
      // v2 · pick the tagged key first, then fall back to every known key
      const kid = parts[0].slice(1)
      const all = keys()
      const tagged = all.find((k) => k.kid === kid)
      for (const k of tagged ? [tagged, ...all.filter((x) => x !== tagged)] : all) {
        const v = tryOpen(k.key, parts[1], parts[2], parts[3])
        if (v != null) return v
      }
      return null
    }
    if (parts.length === 3) {
      // legacy v1 · no key id, try active then previous keys
      for (const k of keys()) {
        const v = tryOpen(k.key, parts[0], parts[1], parts[2])
        if (v != null) return v
      }
      return null
    }
    return null
  } catch {
    return null
  }
}

function b64u(b: Buffer): string {
  return b.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}
function fromB64u(s: string): Buffer {
  return Buffer.from(s.replace(/-/g, '+').replace(/_/g, '/'), 'base64')
}
