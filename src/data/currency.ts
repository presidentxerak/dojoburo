// Multi-currency display layer. XRP is the settlement rail (x402); fiat amounts
// are shown for convenience and converted to XRP at checkout. Rates are
// indicative defaults — wire a live FX + on-ramp for production charges.

export type CurrencyCode = 'XRP' | 'USD' | 'EUR' | 'JPY'

export interface CurrencyDef {
  code: CurrencyCode
  symbol: string
  label: string
  /** how many units of this currency ≈ 1 XRP (indicative) */
  perXrp: number
  decimals: number
}

export const CURRENCIES: Record<CurrencyCode, CurrencyDef> = {
  XRP: { code: 'XRP', symbol: 'XRP', label: 'XRP', perXrp: 1, decimals: 2 },
  USD: { code: 'USD', symbol: '$', label: 'US Dollar', perXrp: 2.5, decimals: 2 },
  EUR: { code: 'EUR', symbol: '€', label: 'Euro', perXrp: 2.3, decimals: 2 },
  JPY: { code: 'JPY', symbol: '¥', label: 'Japanese Yen', perXrp: 380, decimals: 0 },
}

export const CURRENCY_LIST = Object.values(CURRENCIES)

/** Format an XRP amount in the target currency. */
export function formatFrom(xrp: number, code: CurrencyCode): string {
  const c = CURRENCIES[code]
  const v = xrp * c.perXrp
  const num = v.toLocaleString(undefined, { minimumFractionDigits: c.decimals, maximumFractionDigits: c.decimals })
  return code === 'XRP' ? `${num} XRP` : `${c.symbol}${num}`
}

/** Convert a fiat amount back to XRP (the settlement amount). */
export function toXrp(amount: number, code: CurrencyCode): number {
  return amount / CURRENCIES[code].perXrp
}
