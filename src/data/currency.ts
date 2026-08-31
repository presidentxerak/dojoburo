// Multi-currency display layer.
//
// Amounts are held internally in credits and shown in the user's own currency.
// The unit used to be XRP, because the app settled on a ledger; that rail is
// gone, so `perXrp` is now just the conversion from one internal credit unit —
// kept under its old name until the ledger column is renamed with a migration.

export type CurrencyCode = 'USD' | 'EUR' | 'JPY'

export interface CurrencyDef {
  code: CurrencyCode
  symbol: string
  label: string
  /** how many units of this currency ≈ 1 XRP (indicative) */
  perXrp: number
  decimals: number
}

export const CURRENCIES: Record<CurrencyCode, CurrencyDef> = {
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
  return `${c.symbol}${num}`
}

/** Convert a fiat amount back to XRP (the settlement amount). */
export function toXrp(amount: number, code: CurrencyCode): number {
  return amount / CURRENCIES[code].perXrp
}
