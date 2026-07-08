// ---------------------------------------------------------------------------
// Unified external-wallet registry. One interface over Xaman, GemWallet,
// Crossmark and Joey (WalletConnect) so the UI + store can connect / sign
// through any of them. Wallets are ordered by how well they fit the current
// device: mobile apps (Xaman, Joey) lead on phones, browser extensions
// (GemWallet, Crossmark) lead on desktop.
// ---------------------------------------------------------------------------
import * as xamanP from './xaman'
import * as gemP from './gem'
import * as crossmarkP from './crossmark'
import * as joeyP from './joey'

export type WalletId = 'xaman' | 'gem' | 'crossmark' | 'joey'
export type DeviceKind = 'mobile' | 'desktop'

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
  available?: () => Promise<boolean>
  needsConfig?: () => boolean
  configHint?: string
}

export interface WalletMeta {
  id: WalletId
  label: string
  blurb: string
  mono: string
  color: string
  /** fit score per device · 3 = ideal, 0 = does not work here */
  fit: Record<DeviceKind, number>
  /** where to get the wallet / its developer console */
  docsUrl: string
  /** step-by-step: how to integrate this wallet with DojoBuro */
  setup: string[]
}

const META: WalletMeta[] = [
  {
    id: 'xaman', label: 'Xaman', blurb: 'XUMM · scan a QR, approve on your phone', mono: 'XA', color: '#2f6bff',
    fit: { mobile: 3, desktop: 2 }, docsUrl: 'https://apps.xaman.dev',
    setup: [
      'Create a free API key at apps.xaman.dev · pick a frontend (OAuth2 / PKCE) app, no secret.',
      'In that app, add your site to the OAuth2 Redirect URLs (e.g. https://dojoburo.com and http://localhost:5173). If your URL is missing you get "access_denied · invalid client/redirect URL".',
      'Paste the API key here (or set VITE_XUMM_API_KEY), click Connect, then approve on your phone.',
    ],
  },
  {
    id: 'joey', label: 'Joey', blurb: 'Mobile · connect via WalletConnect', mono: 'JO', color: '#a06bff',
    fit: { mobile: 3, desktop: 2 }, docsUrl: 'https://cloud.reown.com',
    setup: [
      'Get a free WalletConnect project id at cloud.reown.com.',
      'Set VITE_WALLETCONNECT_PROJECT_ID in the app env, then rebuild / redeploy.',
      'Install Joey on your phone, click Connect, scan the QR (or tap the deeplink) and approve.',
    ],
  },
  {
    id: 'gem', label: 'GemWallet', blurb: 'Browser extension · one-click approve', mono: 'GE', color: '#08c2ac',
    fit: { mobile: 0, desktop: 3 }, docsUrl: 'https://gemwallet.app',
    setup: [
      'On desktop, install the GemWallet extension from gemwallet.app (Chrome / Brave / Edge / Firefox).',
      'Create or import a wallet in the extension and unlock it.',
      'Click Connect and approve · no key or config needed (talks to the extension directly, no OAuth redirect).',
    ],
  },
  {
    id: 'crossmark', label: 'Crossmark', blurb: 'Browser extension · sign & submit', mono: 'CM', color: '#ff7a1a',
    fit: { mobile: 0, desktop: 3 }, docsUrl: 'https://crossmark.io',
    setup: [
      'On desktop, install the Crossmark extension from crossmark.io.',
      'Create or import a wallet and unlock it.',
      'Click Connect to sign in; payments are signed AND submitted in one approval · no config needed.',
    ],
  },
]

/** True on phones / touch browsers (no desktop extensions available). */
export function deviceKind(): DeviceKind {
  if (typeof navigator === 'undefined') return 'desktop'
  const ua = navigator.userAgent || ''
  const mobileUa = /Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|BlackBerry|Opera Mini/i.test(ua)
  const coarse = typeof window !== 'undefined' && window.matchMedia?.('(pointer: coarse)').matches
  return mobileUa || coarse ? 'mobile' : 'desktop'
}

/** Wallet metadata ordered best-fit-first for the given device. */
export function walletsForDevice(device: DeviceKind = deviceKind()): WalletMeta[] {
  return [...META].sort((a, b) => b.fit[device] - a.fit[device])
}

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
  crossmark: {
    connect: crossmarkP.connect,
    disconnect: crossmarkP.disconnect,
    signPayment: (f, d, a, m) => crossmarkP.signPayment(f, d, a, m),
    available: crossmarkP.available,
  },
  joey: {
    connect: joeyP.connect,
    disconnect: joeyP.disconnect,
    signPayment: (f, d, a, m) => joeyP.signPayment(f, d, a, m),
    needsConfig: joeyP.needsConfig,
    configHint: joeyP.configHint,
  },
}
