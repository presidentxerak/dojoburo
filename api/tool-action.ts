// Connector ACTIONS (writes) · the "do something in a connected app" side.
//
//   POST /api/tool-action  { connector, action, ...payload, privy, client }
//     → { ok:true, ... }  |  { ok:false, error }   (never 500)
//
// First action wired: Gmail send — sends a real email from the user's OWN
// connected Gmail (their sealed OAuth token), used by the CRM outreach composer.
// Degrades to { ok:false, error:'not_connected' } when Gmail/DB aren't set up.
import type { IncomingMessage, ServerResponse } from 'node:http'
import { getPool, dbConfigured } from './_lib/db'
import { vaultConfigured } from './_lib/vault'
import { findAccountId } from './_lib/accounts'
import { connectionToken } from './_lib/connections'

export const config = { maxDuration: 15 }

const ENV = process.env as Record<string, string | undefined>

// light per-account send throttle (in-memory · best-effort, per lambda instance)
const HITS = new Map<string, number[]>()
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 20
function allow(key: string): boolean {
  const now = Date.now()
  const arr = (HITS.get(key) || []).filter((t) => now - t < WINDOW_MS)
  if (arr.length >= MAX_PER_WINDOW) { HITS.set(key, arr); return false }
  arr.push(now); HITS.set(key, arr); return true
}

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  try {
    if (req.method !== 'POST') return json(res, 405, { ok: false, error: 'method' })
    let body: Record<string, unknown>
    try { body = JSON.parse(await readBody(req)) } catch { return json(res, 400, { ok: false, error: 'bad_json' }) }
    const connector = String(body.connector || '')
    const action = String(body.action || '')
    if (connector === 'gmail' && action === 'send') return await gmailSend(res, body)
    if (connector === 'slack' && action === 'post') return await slackPost(res, body)
    if (connector === 'twitter' && action === 'post') return await twitterPost(res, body)
    if (connector === 'buffer' && action === 'post') return await bufferPost(res, body)
    if (connector === 'linkedin' && action === 'post') return await linkedinPost(res, body)
    if (connector === 'notion' && action === 'create') return await notionCreate(res, body)
    return json(res, 200, { ok: false, error: 'unknown_action' })
  } catch (e) {
    return json(res, 200, { ok: false, error: 'server', detail: String((e as Error)?.message || e).slice(0, 100) })
  }
}

async function gmailSend(res: ServerResponse, body: Record<string, unknown>): Promise<void> {
  if (!dbConfigured() || !vaultConfigured()) return json(res, 200, { ok: false, error: 'no_backend' })
  const to = String(body.to || '').trim()
  const subject = String(body.subject || '').slice(0, 300)
  const text = String(body.body || '').slice(0, 12_000)
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(to)) return json(res, 200, { ok: false, error: 'bad_to' })
  if (!text.trim()) return json(res, 200, { ok: false, error: 'empty' })

  const pool = getPool()
  const accountId = await findAccountId(pool, { privyDid: (body.privy as string) || null, clientRef: (body.client as string) || null })
  if (!accountId) return json(res, 200, { ok: false, error: 'no_account' })
  if (!allow(accountId)) return json(res, 200, { ok: false, error: 'rate' })

  const conn = await connectionToken(pool, accountId, 'gmail')
  if (!conn) return json(res, 200, { ok: false, error: 'not_connected' })

  // RFC 822 message · encode a non-ASCII subject per RFC 2047.
  const subjHeader = /[^\x00-\x7F]/.test(subject) ? `=?UTF-8?B?${Buffer.from(subject, 'utf8').toString('base64')}?=` : subject
  const mime = [
    `To: ${to}`,
    `Subject: ${subjHeader}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    '',
    text,
  ].join('\r\n')
  const raw = Buffer.from(mime, 'utf8').toString('base64url')

  try {
    const r = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: { authorization: `Bearer ${conn.token}`, 'content-type': 'application/json' },
      body: JSON.stringify({ raw }),
    })
    if (!r.ok) return json(res, 200, { ok: false, error: 'send_failed' })
    const j = await r.json().catch(() => ({}))
    return json(res, 200, { ok: true, id: (j as { id?: string })?.id || null, from: conn.external })
  } catch {
    return json(res, 200, { ok: false, error: 'send_failed' })
  }
}

// ---- Slack · post a message to the team channel (chat:write) --------------
async function slackPost(res: ServerResponse, body: Record<string, unknown>): Promise<void> {
  if (!dbConfigured() || !vaultConfigured()) return json(res, 200, { ok: false, error: 'no_backend' })
  const text = String(body.text || '').slice(0, 3000)
  if (!text.trim()) return json(res, 200, { ok: false, error: 'empty' })

  const pool = getPool()
  const accountId = await findAccountId(pool, { privyDid: (body.privy as string) || null, clientRef: (body.client as string) || null })
  if (!accountId) return json(res, 200, { ok: false, error: 'no_account' })
  if (!allow(accountId)) return json(res, 200, { ok: false, error: 'rate' })

  const conn = await connectionToken(pool, accountId, 'slack')
  if (!conn) return json(res, 200, { ok: false, error: 'not_connected' })
  const channel = String(body.channel || '').trim() || ENV.SLACK_CHANNEL || '#general'

  try {
    const r = await fetch('https://slack.com/api/chat.postMessage', {
      method: 'POST',
      headers: { authorization: `Bearer ${conn.token}`, 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ channel, text }),
    })
    const j = await r.json().catch(() => ({})) as { ok?: boolean; ts?: string; channel?: string; error?: string }
    if (!j?.ok) return json(res, 200, { ok: false, error: j?.error || 'post_failed' })
    return json(res, 200, { ok: true, ts: j.ts, channel: j.channel })
  } catch {
    return json(res, 200, { ok: false, error: 'post_failed' })
  }
}

// ---- shared action prelude · resolve account + read the connector token ----
async function actionToken(body: Record<string, unknown>, connectorId: string): Promise<{ error: string } | { token: string; accountId: string }> {
  if (!dbConfigured() || !vaultConfigured()) return { error: 'no_backend' }
  const pool = getPool()
  const accountId = await findAccountId(pool, { privyDid: (body.privy as string) || null, clientRef: (body.client as string) || null })
  if (!accountId) return { error: 'no_account' }
  if (!allow(accountId)) return { error: 'rate' }
  const conn = await connectionToken(pool, accountId, connectorId)
  if (!conn) return { error: 'not_connected' }
  return { token: conn.token, accountId }
}

// ---- X / Twitter · post a tweet (tweet.write) -----------------------------
async function twitterPost(res: ServerResponse, body: Record<string, unknown>): Promise<void> {
  const text = String(body.text || '').slice(0, 280)
  if (!text.trim()) return json(res, 200, { ok: false, error: 'empty' })
  const t = await actionToken(body, 'twitter')
  if ('error' in t) return json(res, 200, { ok: false, error: t.error })
  try {
    const r = await fetch('https://api.twitter.com/2/tweets', {
      method: 'POST', headers: { authorization: `Bearer ${t.token}`, 'content-type': 'application/json' },
      body: JSON.stringify({ text }),
    })
    const j = await r.json().catch(() => ({})) as { data?: { id?: string }; detail?: string }
    if (!r.ok || !j?.data?.id) return json(res, 200, { ok: false, error: 'post_failed' })
    return json(res, 200, { ok: true, id: j.data.id })
  } catch { return json(res, 200, { ok: false, error: 'post_failed' }) }
}

// ---- Buffer · queue a post to every connected profile ---------------------
async function bufferPost(res: ServerResponse, body: Record<string, unknown>): Promise<void> {
  const text = String(body.text || '').slice(0, 2000)
  if (!text.trim()) return json(res, 200, { ok: false, error: 'empty' })
  const t = await actionToken(body, 'buffer')
  if ('error' in t) return json(res, 200, { ok: false, error: t.error })
  try {
    const pr = await fetch(`https://api.bufferapp.com/1/profiles.json?access_token=${encodeURIComponent(t.token)}`)
    const profiles = await pr.json().catch(() => []) as { id?: string }[]
    const ids = Array.isArray(profiles) ? profiles.map((p) => p.id).filter(Boolean) as string[] : []
    if (!ids.length) return json(res, 200, { ok: false, error: 'no_profiles' })
    const form = new URLSearchParams()
    form.set('access_token', t.token)
    form.set('text', text)
    ids.forEach((id) => form.append('profile_ids[]', id))
    const r = await fetch('https://api.bufferapp.com/1/updates/create.json', {
      method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: form.toString(),
    })
    const j = await r.json().catch(() => ({})) as { success?: boolean }
    if (!r.ok || !j?.success) return json(res, 200, { ok: false, error: 'post_failed' })
    return json(res, 200, { ok: true, profiles: ids.length })
  } catch { return json(res, 200, { ok: false, error: 'post_failed' }) }
}

// ---- LinkedIn · share a text post to the member's feed (w_member_social) --
async function linkedinPost(res: ServerResponse, body: Record<string, unknown>): Promise<void> {
  const text = String(body.text || '').slice(0, 3000)
  if (!text.trim()) return json(res, 200, { ok: false, error: 'empty' })
  const t = await actionToken(body, 'linkedin')
  if ('error' in t) return json(res, 200, { ok: false, error: t.error })
  try {
    // resolve the member URN from the OpenID userinfo endpoint (`sub`).
    const ur = await fetch('https://api.linkedin.com/v2/userinfo', {
      headers: { authorization: `Bearer ${t.token}` },
    })
    const ui = await ur.json().catch(() => ({})) as { sub?: string }
    if (!ur.ok || !ui?.sub) return json(res, 200, { ok: false, error: 'no_member' })
    const author = `urn:li:person:${ui.sub}`
    const r = await fetch('https://api.linkedin.com/v2/ugcPosts', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${t.token}`,
        'content-type': 'application/json',
        'X-Restli-Protocol-Version': '2.0.0',
      },
      body: JSON.stringify({
        author,
        lifecycleState: 'PUBLISHED',
        specificContent: {
          'com.linkedin.ugc.ShareContent': {
            shareCommentary: { text },
            shareMediaCategory: 'NONE',
          },
        },
        visibility: { 'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC' },
      }),
    })
    const j = await r.json().catch(() => ({})) as { id?: string }
    const hdrId = r.headers.get('x-restli-id') || undefined
    if (!r.ok || !(j?.id || hdrId)) return json(res, 200, { ok: false, error: 'post_failed' })
    return json(res, 200, { ok: true, id: j.id || hdrId })
  } catch { return json(res, 200, { ok: false, error: 'post_failed' }) }
}

// ---- Notion · create a page under NOTION_PARENT_ID ------------------------
async function notionCreate(res: ServerResponse, body: Record<string, unknown>): Promise<void> {
  const title = String(body.title || '').slice(0, 200)
  const content = String(body.body || '').slice(0, 12_000)
  if (!title.trim()) return json(res, 200, { ok: false, error: 'empty' })
  const parent = ENV.NOTION_PARENT_ID
  if (!parent) return json(res, 200, { ok: false, error: 'no_parent' })
  const t = await actionToken(body, 'notion')
  if ('error' in t) return json(res, 200, { ok: false, error: t.error })
  try {
    const paras = content.split(/\n{2,}/).filter(Boolean).slice(0, 40).map((p) => ({
      object: 'block', type: 'paragraph',
      paragraph: { rich_text: [{ type: 'text', text: { content: p.slice(0, 1800) } }] },
    }))
    const r = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: { authorization: `Bearer ${t.token}`, 'content-type': 'application/json', 'Notion-Version': '2022-06-28' },
      body: JSON.stringify({
        parent: { page_id: parent },
        properties: { title: { title: [{ text: { content: title } }] } },
        children: paras,
      }),
    })
    const j = await r.json().catch(() => ({})) as { id?: string; url?: string }
    if (!r.ok || !j?.id) return json(res, 200, { ok: false, error: 'create_failed' })
    return json(res, 200, { ok: true, id: j.id, url: j.url })
  } catch { return json(res, 200, { ok: false, error: 'create_failed' }) }
}

function readBody(req: IncomingMessage): Promise<string> {
  const attached = (req as unknown as { rawBody?: string }).rawBody
  if (typeof attached === 'string') return Promise.resolve(attached)
  return new Promise((resolve, reject) => {
    let d = ''
    req.on('data', (c: Buffer) => { d += c.toString('utf8'); if (d.length > 32_000) { reject(new Error('too_large')); req.destroy() } })
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
