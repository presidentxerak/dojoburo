// Fiat → XRP conversion for settlement. Uses a live price when XRP_PRICE_URL is
// set (CoinGecko-style shape: { "ripple": { "usd": 2.5, "eur": 2.3, "jpy": 380 } }
// where the value is the fiat price of 1 XRP), and falls back to indicative
// defaults so the webhook still settles if the oracle is briefly unreachable.
//
// NOTE: these fallbacks mirror src/data/currency.ts and are display-grade only —
// set XRP_PRICE_URL in production for real rates.

const FALLBACK_PER_XRP: Record<string, number> = { USD: 2.5, EUR: 2.3, JPY: 380 }

/** Fiat price of 1 XRP for the given currency (e.g. USD 2.5). */
export async function pricePerXrp(currency: string, timeoutMs = 6000): Promise<number> {
  const code = currency.toUpperCase()
  const url = process.env.XRP_PRICE_URL
  if (url) {
    const ctrl = new AbortController()
    const t = setTimeout(() => ctrl.abort(), timeoutMs)
    try {
      const res = await fetch(url, { signal: ctrl.signal })
      if (res.ok) {
        const j: any = await res.json()
        const v = j?.ripple?.[code.toLowerCase()]
        if (typeof v === 'number' && v > 0) return v
      }
    } catch {
      /* fall through to fallback */
    } finally {
      clearTimeout(t)
    }
  }
  const fb = FALLBACK_PER_XRP[code]
  if (!fb) throw new Error(`no rate for ${code}`)
  return fb
}

/** Convert a fiat major amount to XRP, rounded to 6 dp (drops precision). */
export async function fiatToXrp(amount: number, currency: string): Promise<number> {
  const per = await pricePerXrp(currency)
  return Math.round((amount / per) * 1e6) / 1e6
}
