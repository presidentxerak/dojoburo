// ---------------------------------------------------------------------------
// Unified external-wallet registry. One interface over Xaman, GemWallet and
// Joey (WalletConnect) so the UI + store can connect / sign through any of them.
// ---------------------------------------------------------------------------
import * as xamanP from './xaman'
import * as gemP from './gem'
import * as joeyP from './joey'

export type WalletId = 'xaman' | 'gem' | 'joey'

export interface WalletApi {
  connect: () => Promise<string> // returns the classic r-address
  disconnect: () => Promise<void>
  signPayment: (
    from: string,
    destination: string,
    amountXrp: number,
    memo?: unknown,
    onOpen?: (link: string, qrPng: string) => void,
  ) => Promise<{ txid: string }>
  /** true when the wallet can be attempted right now (extension present, etc.) */
  available?: () => Promise<boolean>
  /** true when required config is missing (a key / project id) */
  needsConfig?: () => boolean
  configHint?: string
}

export interface WalletMeta {
  id: WalletId
  label: string
  blurb: string
  /** short monogram for the button badge */
  mono: string
  color: string
}

export const WALLET_META: WalletMeta[] = [
  { id: 'xaman', label: 'Xaman', blurb: 'XUMM · scan a QR, approve on your phone', mono: 'XA', color: '#2f6bff' },
  { id: 'gem', label: 'GemWallet', blurb: 'Browser extension · one-click approve', mono: 'GE', color: '#08c2ac' },
  { id: 'joey', label: 'Joey', blurb: 'Mobile · connect via WalletConnect', mono: 'JO', color: '#a06bff' },
]

export const WALLETS: Record<WalletId, WalletApi> = {
  xaman: {
    connect: async () => (await xamanP.connect()).account,
    disconnect: xamanP.disconnect,
    signPayment: (f, d, a, m, o) => xamanP.signPayment(f, d, a, m, o),
    needsConfig: () => !xamanP.isConfigured(),
    configHint: 'Paste a free Xaman API key from apps.xaman.dev, and add this site to its OAuth redirect URLs.',
  },
  gem: {
    connect: gemP.connect,
    disconnect: gemP.disconnect,
    signPayment: (f, d, a, m) => gemP.signPayment(f, d, a, m),
    available: gemP.available,
  },
  joey: {
    connect: joeyP.connect,
    disconnect: joeyP.disconnect,
    signPayment: (f, d, a, m) => joeyP.signPayment(f, d, a, m),
    needsConfig: joeyP.needsConfig,
    configHint: joeyP.configHint,
  },
}
