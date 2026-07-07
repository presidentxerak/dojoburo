// Drains pending on-ledger settlements that the webhook couldn't complete
// (e.g. XRPL briefly unreachable, hot wallet momentarily unfunded). Idempotent:
// each settlement is keyed by session_id and only retried while `pending`.
//
// Wire as a Vercel Cron (see vercel.json). Protected by CRON_SECRET: Vercel
// sends `Authorization: Bearer $CRON_SECRET` on scheduled invocations.
import type { IncomingMessage, ServerResponse } from 'node:http'
import { getPool, dbConfigured } from './_lib/db'
import { settlementConfigured, settleX402 } from './_lib/settle'

export const config = { maxDuration: 60 }

const MAX_PER_RUN = 10

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  const secret = process.env.CRON_SECRET
  if (secret) {
    const auth = req.headers['authorization']
    if (auth !== `Bearer ${secret}`) return send(res, 401, { ok: false, error: 'unauthorized' })
  }
  if (!dbConfigured() || !settlementConfigured()) return send(res, 200, { ok: true, skipped: 'not_configured' })

  const pool = getPool()
  const pending = await pool.query(
    `select session_id, account_id, xrp_amount, destination
     from settlements where status = 'pending' order by created_at asc limit $1`,
    [MAX_PER_RUN],
  )

  let settled = 0
  let failed = 0
  for (const row of pending.rows) {
    try {
      // 'self-anchor' rows have no real user destination → self-pay
      const delivered = row.destination && row.destination !== 'self-anchor'
      const r = await settleX402({ skill: 'fiat-topup', invoice: row.session_id, amountXrp: Number(row.xrp_amount), destination: delivered ? row.destination : undefined })
      const ok = r.result === 'tesSUCCESS' && r.validated
      await pool.query(`update settlements set tx_hash = $2, tx_result = $3, destination = $4, status = $5 where session_id = $1`, [
        row.session_id,
        r.hash,
        r.result,
        r.to,
        ok ? 'validated' : 'failed',
      ])
      if (ok) {
        // only net the credit when XRP was delivered to the user's own wallet
        if (delivered) {
          await pool.query(`insert into credit_ledger (account_id, delta_xrp, reason, ref) values ($1, $2, 'settle:onledger', $3)`, [
            row.account_id,
            -Number(row.xrp_amount),
            r.hash,
          ])
        }
        await pool.query(`update checkout_sessions set status = 'settled' where id = $1`, [row.session_id])
        settled++
      } else {
        failed++
      }
    } catch {
      failed++ // stays pending, retried next run
    }
  }

  return send(res, 200, { ok: true, processed: pending.rowCount, settled, failed })
}

function send(res: ServerResponse, status: number, body: unknown): void {
  res.statusCode = status
  res.setHeader('content-type', 'application/json')
  res.setHeader('cache-control', 'no-store')
  res.end(JSON.stringify(body))
}
