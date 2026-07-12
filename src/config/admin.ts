// Admin / operator allowlist. An admin account tests every creation tool for
// free and without the daily caps — the server (api/agent-run.ts) grants the
// same accounts unlimited free-cascade runs and lets them use the operator's
// Claude key. Keep this list in sync with the server's ADMIN_EMAILS env var.
//
// Admin only unlocks the OPERATOR's own configured keys / free tiers, so the
// blast radius is the operator's own quota. It still requires a real login
// (a Privy account whose verified email is in this list).
import type { Account } from '../workshop'

// Baked default admins. The server default (ADMIN_EMAILS) mirrors this.
const BUILTIN_ADMINS = ['presidentxerak@gmail.com']

// Optional build-time extension: VITE_ADMIN_EMAILS="a@b.com,c@d.com"
const EXTRA = (import.meta.env.VITE_ADMIN_EMAILS as string | undefined)?.split(',').map((s) => s.trim().toLowerCase()).filter(Boolean) ?? []

export const ADMIN_EMAILS: string[] = [...new Set([...BUILTIN_ADMINS, ...EXTRA])]

export function isAdminEmail(email?: string | null): boolean {
  const e = (email || '').trim().toLowerCase()
  return !!e && ADMIN_EMAILS.includes(e)
}

/** True when this account is an operator/admin (unlimited free testing). */
export function isAdmin(account: Account | null): boolean {
  return !!account && isAdminEmail(account.email)
}
