// ---------------------------------------------------------------------------
// GemWallet · a non-custodial XRPL browser-extension wallet. Unlike Xaman there
// is NO OAuth redirect: the page talks to the installed extension directly, so
// it works without any developer key or redirect-URL configuration. The
// @gemwallet/api SDK is imported lazily so it never bloats the main bundle.
// ---------------------------------------------------------------------------
import { toHex } from './hex'

const SOURCE_TAG = 2606230006

// Memoise the dynamic import so the SDK is loaded exactly once. connect() warms
// it, so by the time the user funds, signPayment() no longer awaits a network
// import between the click and sendPayment() — that async gap was letting the
// browser's transient user-activation lapse, which suppresses the extension's
// signing popup ("nothing happens" on click).
let sdkP: Promise<typeof import('@gemwallet/api')> | null = null
function api() {
  return (sdkP ??= import('@gemwallet/api'))
}

/** True when the GemWallet extension is installed in this browser. */
export async function available(): Promise<boolean> {
  try {
    const { isInstalled } = await api()
    const r = await isInstalled()
    return !!r.result?.isInstalled
  } catch {
    return false
  }
}

export async function connect(): Promise<string> {
  const { isInstalled, getAddress } = await api()
  const inst = await isInstalled()
  if (!inst.result?.isInstalled) {
    throw new Error('GemWallet not detected. Install the GemWallet browser extension from gemwallet.app, then retry.')
  }
  const r = await getAddress()
  const address = r.result?.address
  if (!address) throw new Error('GemWallet connection was rejected.')
  return address
}

export async function disconnect(): Promise<void> {
  // GemWallet has no session to tear down · disconnecting is a UI-only concept.
}

export async function signPayment(
  _from: string,
  destination: string,
  amountXrp: number,
  memoJson?: unknown,
): Promise<{ txid: string }> {
  const { sendPayment, isInstalled } = await api()
  // Pre-flight: if the extension isn't present/unlocked the signing popup never
  // appears — surface an actionable error rather than a silent no-op.
  const inst = await isInstalled()
  if (!inst.result?.isInstalled) {
    throw new Error('GemWallet not detected. Open and unlock the GemWallet extension, then retry.')
  }
  const payment: Record<string, unknown> = {
    // GemWallet follows the XRPL convention: a string amount is DROPS, not XRP,
    // and must be a whole number. Sending "0.01" (raw XRP) is invalid drops and
    // makes the extension's signing UI bail out with a generic error, so convert
    // XRP → integer drops here (1 XRP = 1,000,000 drops), same as Xaman/Crossmark.
    amount: String(Math.round(amountXrp * 1_000_000)),
    destination,
    sourceTag: SOURCE_TAG,
  }
  if (memoJson) {
    payment.memos = [{ memo: { memoType: toHex('x402'), memoFormat: toHex('application/json'), memoData: toHex(JSON.stringify(memoJson)) } }]
  }
  const r = await sendPayment(payment as never)
  const hash = (r as { result?: { hash?: string } }).result?.hash
  if (!hash) throw new Error('GemWallet payment was rejected.')
  return { txid: hash }
}
