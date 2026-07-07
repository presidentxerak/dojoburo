// ---------------------------------------------------------------------------
// Xaman (formerly XUMM) integration — secure, non-custodial signing for Mainnet.
// Instead of exposing a seed, the user connects their Xaman wallet (OAuth2 PKCE,
// frontend-only, API key without secret) and approves each transaction in the
// Xaman app. Used here as a secure on-ramp: fund the DojoBuro treasury from the
// user's real wallet with a Payment they sign on their phone.
//
// Requires a free Xaman API key (https://apps.xaman.dev) provided at runtime
// (VITE_XUMM_API_KEY at build time, or entered in the UI and stored locally).
// The `xumm` SDK is dynamically imported so it never bloats the main bundle and
// only loads when Xaman is actually used.
// ---------------------------------------------------------------------------

export interface XamanSession {
  account: string
  network: string
}

export interface XamanSignResult {
  txid: string
  signed: boolean
}

const KEY_STORE = 'dojoburo.xummApiKey'

export function getApiKey(): string | null {
  const env = (import.meta.env.VITE_XUMM_API_KEY as string | undefined)?.trim()
  if (env) return env
  const local = localStorage.getItem(KEY_STORE)
  return local && local.trim() ? local.trim() : null
}

export function setApiKey(key: string) {
  localStorage.setItem(KEY_STORE, key.trim())
}

export function isConfigured(): boolean {
  return !!getApiKey()
}

// Minimal shape of the parts of the xumm SDK we use, so we avoid `any`.
interface XummLike {
  authorize: () => Promise<unknown>
  logout: () => Promise<void>
  user: { account: Promise<string | undefined> }
  environment: { jwt?: Promise<unknown> }
  payload: {
    createAndSubscribe: (
      txjson: Record<string, unknown>,
      cb: (evt: { data: Record<string, unknown> }) => unknown,
    ) => Promise<{ created: { next: { always: string }; refs: { qr_png: string } } }>
  }
}

let instance: XummLike | null = null
let instanceKey: string | null = null

async function getXumm(): Promise<XummLike> {
  const apiKey = getApiKey()
  if (!apiKey) throw new Error("Aucune clé API Xaman configurée. Renseignez-la dans le panneau Xaman (gratuite sur apps.xaman.dev).")
  if (instance && instanceKey === apiKey) return instance
  const mod = await import('xumm')
  const Xumm = (mod as unknown as { Xumm: new (k: string) => XummLike }).Xumm
  instance = new Xumm(apiKey)
  instanceKey = apiKey
  return instance
}

export async function connect(): Promise<XamanSession> {
  const xumm = await getXumm()
  await xumm.authorize()
  const account = await xumm.user.account
  if (!account) throw new Error('Connexion Xaman annulée ou échouée.')
  return { account, network: 'MAINNET' }
}

export async function disconnect(): Promise<void> {
  if (!instance) return
  try {
    await instance.logout()
  } catch {
    /* ignore */
  }
  instance = null
  instanceKey = null
}

export async function currentAccount(): Promise<string | null> {
  if (!isConfigured()) return null
  try {
    const xumm = await getXumm()
    return (await xumm.user.account) ?? null
  } catch {
    return null
  }
}

/**
 * Create a Payment payload and wait for the user to sign (or reject) it in the
 * Xaman app. Returns the on-ledger txid when signed.
 * `onOpen` receives a deeplink + QR so the UI can show them.
 */
export async function signPayment(
  from: string,
  destination: string,
  amountXrp: number,
  memoJson?: unknown,
  onOpen?: (link: string, qrPng: string) => void,
): Promise<XamanSignResult> {
  const xumm = await getXumm()
  const txjson: Record<string, unknown> = {
    TransactionType: 'Payment',
    Account: from,
    Destination: destination,
    Amount: String(Math.round(amountXrp * 1_000_000)),
    SourceTag: 2606230006, // DojoBuro app source tag for on-ledger activity tracking
  }
  if (memoJson) {
    const hex = toHex(JSON.stringify(memoJson))
    txjson.Memos = [{ Memo: { MemoType: toHex('x402'), MemoFormat: toHex('application/json'), MemoData: hex } }]
  }

  return new Promise<XamanSignResult>((resolve, reject) => {
    xumm.payload
      .createAndSubscribe(txjson, (evt) => {
        const d = evt.data as { signed?: boolean; txid?: string }
        if (typeof d.signed === 'boolean') {
          if (d.signed && d.txid) resolve({ txid: d.txid, signed: true })
          else reject(new Error('Transaction refusée dans Xaman.'))
          return true // unsubscribe
        }
      })
      .then((payload) => {
        onOpen?.(payload.created.next.always, payload.created.refs.qr_png)
      })
      .catch(reject)
  })
}

function toHex(s: string): string {
  return Array.from(new TextEncoder().encode(s))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase()
}
