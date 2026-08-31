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

/** The definition for a code, whatever the code turns out to be.
 *
 *  These lookups used to be `CURRENCIES[code]` straight into a `.perXrp`, and
 *  the code comes off an account saved in this browser — possibly saved by an
 *  older build, possibly with the field missing. Any value outside the three
 *  here returned undefined, `.perXrp` threw, and because React unmounts a tree
 *  that throws during render, the whole app went white with no way back. A
 *  price label is not worth an app. Unknown codes read as dollars. */
export function currencyDef(code: unknown): CurrencyDef {
  return (typeof code === 'string' && CURRENCIES[code as CurrencyCode]) || CURRENCIES.USD
}

/** Format a credit amount in the target currency. */
export function formatFrom(xrp: number, code: CurrencyCode): string {
  const c = currencyDef(code)
  const v = (Number.isFinite(xrp) ? xrp : 0) * c.perXrp
  const num = v.toLocaleString(undefined, { minimumFractionDigits: c.decimals, maximumFractionDigits: c.decimals })
  return `${c.symbol}${num}`
}

/** Convert a fiat amount back to credits. */
export function toXrp(amount: number, code: CurrencyCode): number {
  return (Number.isFinite(amount) ? amount : 0) / currencyDef(code).perXrp
}
