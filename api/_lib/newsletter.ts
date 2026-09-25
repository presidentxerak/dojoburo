// LA NEWSLETTER · les règles pures, sans base (éprouvées par
// scripts/test-newsletter.mjs).
//
// Deux faits distincts : l'adresse donnée pour ouvrir la formation gratuite,
// et le consentement à la newsletter, donné à part (une case non cochée). Le
// RGPD interdit de conditionner l'accès gratuit à ce consentement, donc le
// serveur ne l'infère jamais : il ne vaut que s'il est explicitement `true`.
import { createHmac, timingSafeEqual } from 'node:crypto'

export const SOURCES = ['weekend', 'landing', 'profile'] as const
export type Source = (typeof SOURCES)[number]

export interface Signup {
  email: string
  lang: 'fr' | 'en'
  source: Source
  newsletter: boolean
}

const EMAIL = /^[^\s@]{1,64}@[^\s@]{1,190}\.[a-z]{2,24}$/i

/** Une inscription lisible, ou la raison du refus. */
export function parseSignup(body: unknown): Signup | { error: string } {
  if (!body || typeof body !== 'object') return { error: 'bad_json' }
  const b = body as Record<string, unknown>
  const email = typeof b.email === 'string' ? b.email.trim().toLowerCase() : ''
  if (!EMAIL.test(email) || email.length > 200) return { error: 'email' }
  const lang = b.lang === 'en' ? 'en' : 'fr'
  const source = (SOURCES as readonly string[]).includes(String(b.source)) ? (b.source as Source) : 'weekend'
  // LE CONSENTEMENT N'EST JAMAIS DÉDUIT · seul un `true` explicite compte.
  const newsletter = b.newsletter === true
  return { email, lang, source, newsletter }
}

/** Le jeton de désinscription · signé, pour qu'un lien ne désinscrive que
 *  l'adresse à laquelle il a été envoyé. */
export function unsubscribeToken(email: string, secret: string): string {
  return createHmac('sha256', `newsletter:${secret}`).update(email.toLowerCase()).digest('base64url')
}

export function tokenMatches(email: string, token: string, secret: string): boolean {
  const want = Buffer.from(unsubscribeToken(email, secret))
  const got = Buffer.from(String(token || ''))
  return want.length === got.length && timingSafeEqual(want, got)
}
