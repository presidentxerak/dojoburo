// ---------------------------------------------------------------------------
// Joey Wallet (and any WalletConnect-compatible XRPL wallet) via WalletConnect
// v2. The user scans a QR / taps a deeplink and approves in the Joey mobile
// app · no seed leaves the phone. Needs a free WalletConnect project id
// (VITE_WALLETCONNECT_PROJECT_ID, from cloud.reown.com). SDKs are lazy-imported.
// ---------------------------------------------------------------------------
import { toHex } from './hex'

const SOURCE_TAG = 2606230006
const XRPL_MAINNET = 'xrpl:0'

export const configHint = 'Joey uses WalletConnect. Set VITE_WALLETCONNECT_PROJECT_ID (free at cloud.reown.com) to enable it.'

function projectId(): string | null {
  const v = (import.meta.env.VITE_WALLETCONNECT_PROJECT_ID as string | undefined)?.trim()
  return v || null
}
export function needsConfig(): boolean {
  return !projectId()
}

// minimal shapes of the WalletConnect SDK surface we use
interface WCSession { topic: string; namespaces?: { xrpl?: { accounts?: string[] } } }
interface WCClient {
  connect: (o: unknown) => Promise<{ uri?: string; approval: () => Promise<WCSession> }>
  request: (o: unknown) => Promise<unknown>
  disconnect: (o: unknown) => Promise<void>
}

let client: WCClient | null = null
let session: WCSession | null = null

async function getClient(): Promise<WCClient> {
  const pid = projectId()
  if (!pid) throw new Error(configHint)
  if (client) return client
  const mod = (await import('@walletconnect/sign-client')) as unknown as { default?: { init: (o: unknown) => Promise<WCClient> }; SignClient?: { init: (o: unknown) => Promise<WCClient> } }
  const SignClient = mod.default ?? mod.SignClient
  if (!SignClient) throw new Error('WalletConnect SDK failed to load.')
  client = await SignClient.init({
    projectId: pid,
    metadata: {
      name: 'DojoBuro',
      description: 'Automated productivity hub on the XRP Ledger',
      url: window.location.origin,
      icons: [window.location.origin + '/favicon.svg'],
    },
  })
  return client
}

export async function connect(): Promise<string> {
  const pid = projectId()
  if (!pid) throw new Error(configHint)
  const c = await getClient()
  const { uri, approval } = await c.connect({
    requiredNamespaces: { xrpl: { chains: [XRPL_MAINNET], methods: ['xrpl_signTransaction'], events: [] } },
  })
  const modalMod = (await import('@walletconnect/modal')) as unknown as { WalletConnectModal: new (o: unknown) => { openModal: (o: unknown) => void; closeModal: () => void } }
  const modal = new modalMod.WalletConnectModal({ projectId: pid, chains: [XRPL_MAINNET] })
  if (uri) modal.openModal({ uri })
  try {
    session = await approval()
  } finally {
    modal.closeModal()
  }
  const acct = session?.namespaces?.xrpl?.accounts?.[0]
  if (!acct) throw new Error('Joey / WalletConnect connection was rejected.')
  return acct.split(':')[2] // 'xrpl:0:rXXXX' → 'rXXXX'
}

export async function disconnect(): Promise<void> {
  try {
    if (client && session) await client.disconnect({ topic: session.topic, reason: { code: 6000, message: 'User disconnected' } })
  } catch {
    /* ignore */
  }
  session = null
}

export async function signPayment(
  from: string,
  destination: string,
  amountXrp: number,
  memoJson?: unknown,
): Promise<{ txid: string }> {
  if (!client || !session) throw new Error('Connect Joey first.')
  const tx_json: Record<string, unknown> = {
    TransactionType: 'Payment',
    Account: from,
    Destination: destination,
    Amount: String(Math.round(amountXrp * 1_000_000)),
    SourceTag: SOURCE_TAG,
  }
  if (memoJson) {
    tx_json.Memos = [{ Memo: { MemoType: toHex('x402'), MemoFormat: toHex('application/json'), MemoData: toHex(JSON.stringify(memoJson)) } }]
  }
  const res = (await client.request({
    topic: session.topic,
    chainId: XRPL_MAINNET,
    request: { method: 'xrpl_signTransaction', params: { tx_json, autofill: true, submit: true } },
  })) as { hash?: string; tx_blob?: string; signedTransaction?: string; result?: { hash?: string; tx_blob?: string } }

  // Some wallets submit and return a hash; others return a signed blob to submit.
  const hash = res?.hash ?? res?.result?.hash
  if (hash) return { txid: hash }
  const blob = res?.tx_blob ?? res?.signedTransaction ?? res?.result?.tx_blob
  if (blob) {
    const { getClient: getXrpl } = await import('./network')
    const xrpl = await getXrpl('mainnet')
    const r = await xrpl.submitAndWait(blob)
    return { txid: (r.result as { hash: string }).hash }
  }
  throw new Error('Joey signing returned no transaction.')
}
