// Client helper for the server-side live settlement (/api/settle). On Mainnet a
// priced skill settles a REAL x402 payment from the server-held hot wallet and
// we get back a tx hash + explorer URL to surface. Returns null on any failure
// (endpoint absent, hot wallet not configured, network error) so the caller can
// fall back gracefully · no seed ever touches the browser.

export interface SettleReply {
  ok: boolean
  hash?: string
  result?: string
  network?: string
  explorerUrl?: string
  from?: string
  to?: string
  amountXrp?: number
  error?: string
}

export async function settleServer(input: {
  skill: string
  invoice: string
  amountXrp: number
  note?: string
  destination?: string
}): Promise<SettleReply | null> {
  try {
    const res = await fetch('/api/settle', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(input),
    })
    if (!res.ok) return null
    const j = (await res.json()) as SettleReply
    return j
  } catch {
    return null
  }
}
