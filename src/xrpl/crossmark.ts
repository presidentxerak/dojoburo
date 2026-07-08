// ---------------------------------------------------------------------------
// Crossmark · a non-custodial XRPL browser-extension wallet (like GemWallet, no
// OAuth redirect). Talks to the extension directly and signs + submits in one
// step. The @crossmarkio/sdk is imported lazily so it never bloats the bundle.
// ---------------------------------------------------------------------------
import { toHex } from './hex'

const SOURCE_TAG = 2606230006

// The default export is a ready Sdk instance. Typed loosely · we only touch a
// small, stable slice of its surface.
interface CrossmarkSdk {
  sync: { isInstalled: () => boolean | undefined }
  async: {
    detect: (timeout?: number) => Promise<boolean>
    signInAndWait: () => Promise<{ response?: { data?: { address?: string } } }>
    signAndSubmitAndWait: (tx: Record<string, unknown>) => Promise<{ response?: { data?: { resp?: { result?: { hash?: string } } } } }>
  }
}

async function sdk(): Promise<CrossmarkSdk> {
  const mod = (await import('@crossmarkio/sdk')) as unknown as { default?: CrossmarkSdk }
  const s = mod.default ?? (mod as unknown as CrossmarkSdk)
  if (!s?.async) throw new Error('Crossmark SDK failed to load.')
  return s
}

export async function available(): Promise<boolean> {
  try {
    const s = await sdk()
    if (s.sync.isInstalled()) return true
    return await s.async.detect(1200)
  } catch {
    return false
  }
}

export async function connect(): Promise<string> {
  const s = await sdk()
  const detected = s.sync.isInstalled() || (await s.async.detect(1500))
  if (!detected) throw new Error('Crossmark not detected. Install the Crossmark browser extension from crossmark.io, then retry.')
  const { response } = await s.async.signInAndWait()
  const address = response?.data?.address
  if (!address) throw new Error('Crossmark connection was rejected.')
  return address
}

export async function disconnect(): Promise<void> {
  // no persistent session to tear down
}

export async function signPayment(
  from: string,
  destination: string,
  amountXrp: number,
  memoJson?: unknown,
): Promise<{ txid: string }> {
  const s = await sdk()
  const tx: Record<string, unknown> = {
    TransactionType: 'Payment',
    Account: from,
    Destination: destination,
    Amount: String(Math.round(amountXrp * 1_000_000)),
    SourceTag: SOURCE_TAG,
  }
  if (memoJson) {
    tx.Memos = [{ Memo: { MemoType: toHex('x402'), MemoFormat: toHex('application/json'), MemoData: toHex(JSON.stringify(memoJson)) } }]
  }
  const { response } = await s.async.signAndSubmitAndWait(tx)
  const hash = response?.data?.resp?.result?.hash
  if (!hash) throw new Error('Crossmark payment was rejected.')
  return { txid: hash }
}
