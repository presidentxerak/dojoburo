// One-time consent gate for OUTBOUND actions (send an email, post to a social
// network, broadcast to a channel, reply to a ticket). The very first time an
// agent is about to act outside your org, we ask you to confirm · after you
// confirm once, DojoBuro remembers it and never asks again. This is a safety net
// against a hijacked run (prompt injection) quietly sending things on your behalf.
import { create } from 'zustand'

const KEY = 'dojoburo.outbound.consent.v1'
const load = (): boolean => { try { return localStorage.getItem(KEY) === '1' } catch { return false } }

interface Pending { app: string; action: string; resolve: (ok: boolean) => void }

interface ConsentState {
  consented: boolean
  pending: Pending | null
  /** Resolve true when the outbound action is allowed to proceed. Asks once. */
  ensure: (app: string, action: string) => Promise<boolean>
  /** Called by the modal · confirm (true) or cancel (false). */
  decide: (ok: boolean) => void
  /** Forget the consent so the confirmation is asked again next time. */
  reset: () => void
}

export const useOutboundConsent = create<ConsentState>((set, get) => ({
  consented: load(),
  pending: null,
  ensure: (app, action) => {
    if (get().consented) return Promise.resolve(true)
    // Only one confirmation can be pending at a time · deny a concurrent second
    // request rather than stack modals (the user re-triggers it after deciding).
    if (get().pending) return Promise.resolve(false)
    return new Promise<boolean>((resolve) => set({ pending: { app, action, resolve } }))
  },
  decide: (ok) => {
    const p = get().pending
    if (!p) return
    if (ok) { try { localStorage.setItem(KEY, '1') } catch { /* ignore */ } }
    set({ consented: ok ? true : get().consented, pending: null })
    p.resolve(ok)
  },
  reset: () => { try { localStorage.removeItem(KEY) } catch { /* ignore */ } set({ consented: false }) },
}))

/** Guard an outbound action · returns false if the user declined the one-time ask. */
export function ensureOutbound(app: string, action: string): Promise<boolean> {
  return useOutboundConsent.getState().ensure(app, action)
}
