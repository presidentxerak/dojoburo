// The organisation endpoint · who you are working with, and who may do what.
//
//   GET  ?action=me                          → { org, role, plan, members, invites }
//   POST ?action=rename   {name}             → admin
//   POST ?action=invite   {role, email?}     → admin · returns the token ONCE
//   POST ?action=revoke   {id}               → admin
//   POST ?action=role     {accountId, role}  → admin
//   POST ?action=remove   {accountId}        → admin
//   POST ?action=accept   {token}            → anyone holding a valid invitation
//
// Every role check happens in api/_lib/orgs.ts and is repeated here for the
// specific action. The UI hides what you cannot do; this is what makes it true.
//
// Like every other endpoint in this app, a missing database degrades to
// { ok:false, error:'no_backend' } rather than a 500 — a deployment without
// Postgres stays a working single-player app.
import type { IncomingMessage, ServerResponse } from 'node:http'
import { getPool, dbConfigured } from './_lib/db.js'
import { resolveAccountId } from './_lib/accounts.js'
import { callerRef } from './_lib/authz.js'
import {
  ensureOrg, membersOf, invitesOf, createInvite, revokeInvite, acceptInvite,
  removeMember, setRole, renameOrg, can, type Role,
} from './_lib/orgs.js'
import { standingOf, remaining } from './_lib/entitlements.js'
import { canVerifyEmail, verifiedEmailOf } from './_lib/privyUser.js'

export const config = { maxDuration: 15 }

const ASSIGNABLE: Role[] = ['admin', 'member', 'viewer']

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  try {
    const url = new URL(req.url || '/', `https://${req.headers.host || 'localhost'}`)
    const action = url.searchParams.get('action') || 'me'
    if (!dbConfigured()) return json(res, 200, { ok: false, error: 'no_backend' })

    const pool = getPool()
    const body = req.method === 'POST' ? await readJson(req) : {}
    if (body === BAD) return json(res, 400, { ok: false, error: 'bad_json' })

    const who = await callerRef(req, {
      privy: url.searchParams.get('privy') || body?.privy,
      client: url.searchParams.get('client') || body?.client,
    })
    if (!who) return json(res, 401, { ok: false, error: 'auth' })

    const accountId = await resolveAccountId(pool, {
      privyDid: who.privyDid, clientRef: who.clientRef, email: body?.email,
    })
    if (!accountId) return json(res, 401, { ok: false, error: 'auth' })

    // Accepting an invitation is the one action taken BEFORE you have a place —
    // it decides where you end up, so it must not create an organisation first.
    if (action === 'accept') {
      if (req.method !== 'POST') return json(res, 405, { ok: false, error: 'method' })
      // For a BOUND invitation the redeemer's address has to be one Privy will
      // vouch for. It is looked up from the DID we already verified — never
      // taken from the request, which is the whole point.
      const proven = who.privyDid ? await verifiedEmailOf(who.privyDid) : null
      const r = await acceptInvite(pool, accountId, String(body?.token || ''), proven)
      if (!r.ok) return json(res, 200, { ok: false, error: r.reason })
      return json(res, 200, { ok: true, org: r.membership })
    }

    const me = await ensureOrg(pool, accountId)
    const need = (what: Parameters<typeof can>[1]) => can(me.role, what)

    if (action === 'me') {
      // What the plan grants and what is left of it. Billing used to show the
      // founder's OWN spending brake under the label "free daily allowance",
      // which is not what that number is — the allowance is decided by the
      // server, from the plan, and this is where it comes from.
      const s = await standingOf(pool, accountId)
      const left = remaining(s)
      return json(res, 200, {
        ok: true,
        org: { id: me.orgId, name: me.name, plan: me.plan, planStatus: me.planStatus },
        role: me.role,
        // repeated at the top level so a caller that only wants the plan does
        // not have to know it lives on the organisation
        plan: me.plan,
        planStatus: me.planStatus,
        allowance: {
          runs: s.grant.runs, tokens: s.grant.tokens, window: s.grant.window,
          usedRuns: s.usedRuns, usedTokens: s.usedTokens,
          leftRuns: left.runs, leftTokens: left.tokens,
          // whose counters these are · a company shares one allowance
          shared: s.grant.scope === 'org',
        },
        members: await membersOf(pool, me.orgId, accountId),
        invites: need('invite') ? await invitesOf(pool, me.orgId) : [],
        // so the roster can say whether typing an address restricts the link
        canBindEmail: canVerifyEmail(),
      })
    }

    if (req.method !== 'POST') return json(res, 405, { ok: false, error: 'method' })

    if (action === 'rename') {
      if (!need('rename')) return json(res, 403, { ok: false, error: 'forbidden' })
      return json(res, 200, { ok: true, name: await renameOrg(pool, me.orgId, String(body?.name || '')) })
    }

    if (action === 'invite') {
      if (!need('invite')) return json(res, 403, { ok: false, error: 'forbidden' })
      const role = ASSIGNABLE.includes(body?.role) ? (body.role as Exclude<Role, 'owner'>) : 'member'
      // An address the admin typed becomes a RULE only where it can be checked.
      // Everywhere else it stays what it always was: a label on the roster.
      const inv = await createInvite(
        pool, me.orgId, accountId, role, body?.inviteEmail, canVerifyEmail(),
      )
      // The token is returned exactly once. It is not stored in a readable form
      // and there is no endpoint that can produce it again.
      return json(res, 200, { ok: true, id: inv.id, token: inv.token, role, bound: inv.bound })
    }

    if (action === 'revoke') {
      if (!need('invite')) return json(res, 403, { ok: false, error: 'forbidden' })
      return json(res, 200, { ok: await revokeInvite(pool, me.orgId, String(body?.id || '')) })
    }

    if (action === 'role') {
      if (!need('removeMember')) return json(res, 403, { ok: false, error: 'forbidden' })
      if (!ASSIGNABLE.includes(body?.role)) return json(res, 400, { ok: false, error: 'bad_role' })
      const done = await setRole(pool, me.orgId, String(body?.accountId || ''), body.role)
      return json(res, 200, { ok: done, error: done ? undefined : 'owner_or_missing' })
    }

    if (action === 'remove') {
      if (!need('removeMember')) return json(res, 403, { ok: false, error: 'forbidden' })
      const target = String(body?.accountId || '')
      // Leaving is not removing. Someone who removes themselves would be left
      // with no organisation at all and the next request would silently make
      // them a new one — losing sight of everything they were working on.
      if (target === accountId) return json(res, 400, { ok: false, error: 'cannot_remove_self' })
      const done = await removeMember(pool, me.orgId, target)
      return json(res, 200, { ok: done, error: done ? undefined : 'owner_or_missing' })
    }

    return json(res, 200, { ok: false, error: 'bad_action' })
  } catch (e) {
    return json(res, 200, { ok: false, error: 'server', detail: String((e as Error)?.message || e).slice(0, 120) })
  }
}

const BAD = Symbol('bad_json')

async function readJson(req: IncomingMessage): Promise<any> {
  try {
    const raw = await readBody(req)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return BAD
  }
}

function readBody(req: IncomingMessage): Promise<string> {
  const attached = (req as unknown as { rawBody?: string }).rawBody
  if (typeof attached === 'string') return Promise.resolve(attached)
  return new Promise((resolve, reject) => {
    let d = ''
    req.on('data', (c: Buffer) => {
      d += c.toString('utf8')
      if (d.length > 16000) { reject(new Error('too_large')); req.destroy() }
    })
    req.on('end', () => resolve(d))
    req.on('error', reject)
  })
}

function json(res: ServerResponse, status: number, body: unknown): void {
  res.statusCode = status
  res.setHeader('content-type', 'application/json')
  res.setHeader('cache-control', 'no-store')
  res.end(JSON.stringify(body))
}
