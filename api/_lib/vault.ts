// Encrypted credential vault for tool connectors.
//
// OAuth access/refresh tokens for a user's connected tools (Notion, GitHub, …)
// are stored ONLY server-side and ONLY encrypted at rest with AES-256-GCM. The
// browser never receives a token; it only ever sees a connector's status.
//
// The encryption key is CONNECTOR_ENC_KEY: 32 bytes as base64 or hex, or any
// passphrase (hashed to 32 bytes with SHA-256). Rotating the key invalidates
// existing ciphertexts (users simply reconnect), which is the safe default.
import { createCipheriv, createDecipheriv, randomBytes, createHash } from 'node:crypto'

const ALGO = 'aes-256-gcm'

export function vaultConfigured(): boolean {
  return !!process.env.CONNECTOR_ENC_KEY
}

function key(): Buffer {
  const raw = process.env.CONNECTOR_ENC_KEY
  if (!raw) throw new Error('CONNECTOR_ENC_KEY not set')
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

/** Encrypt a secret → compact "iv.tag.ciphertext" (all base64url). */
export function seal(plaintext: string): string {
  const iv = randomBytes(12)
  const c = createCipheriv(ALGO, key(), iv)
  const ct = Buffer.concat([c.update(plaintext, 'utf8'), c.final()])
  const tag = c.getAuthTag()
  return [b64u(iv), b64u(tag), b64u(ct)].join('.')
}

/** Decrypt a sealed value. Returns null if the key/ciphertext don't match. */
export function open(sealed: string): string | null {
  try {
    const [iv, tag, ct] = sealed.split('.')
    if (!iv || !tag || !ct) return null
    const d = createDecipheriv(ALGO, key(), fromB64u(iv))
    d.setAuthTag(fromB64u(tag))
    return Buffer.concat([d.update(fromB64u(ct)), d.final()]).toString('utf8')
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
