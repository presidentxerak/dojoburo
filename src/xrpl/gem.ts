// ---------------------------------------------------------------------------
// GemWallet · a non-custodial XRPL browser-extension wallet. Unlike Xaman there
// is NO OAuth redirect: the page talks to the installed extension directly, so
// it works without any developer key or redirect-URL configuration. The
// @gemwallet/api SDK is imported lazily so it never bloats the main bundle.
// ---------------------------------------------------------------------------
import { toHex } from './hex'


// Memoise the dynamic import so the SDK loads once and the eventual
// sendPayment() call stays inside the click's user-activation window (no network
// import in between). We DON'T cache a rejected promise — otherwise a single
// transient import failure would wedge every later call — so on failure we clear
// the cache and let the next call retry.
let sdkP: Promise<typeof import('@gemwallet/api')> | null = null
function api() {
  if (!sdkP) {
    sdkP = import('@gemwallet/api').catch((e) => {
      sdkP = null
      throw e
    })
  }
  return sdkP
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
  if (!address) throw new Error('GemWallet connection was rejected in the extension.')
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
  const { sendPayment } = await api()
  // GemWallet follows the XRPL convention: a string amount is DROPS (a whole
  // number), not XRP. Sending raw XRP like "0.01" is invalid drops and crashes
  // the extension's signing popup ("Sorry, something went wrong"). Convert to
  // integer drops, same as the Xaman / Crossmark adapters. 1 XRP = 1e6 drops.
  const payment: Record<string, unknown> = {
    amount: String(Math.round(amountXrp * 1_000_000)),
    destination,
  }
  if (memoJson) {
    payment.memos = [{
      memo: {
        memoType: toHex('x402'),
        memoFormat: toHex('application/json'),
        memoData: toHex(JSON.stringify(memoJson)),
      },
    }]
  }

  let r: unknown
  try {
    r = await sendPayment(payment as never)
  } catch (e) {
    // The SDK rejects (rather than resolving) when the extension is absent or
    // locked · turn that into an actionable message.
    const msg = e instanceof Error ? e.message : String(e)
    throw new Error(`GemWallet could not open the signing window: ${msg}. Open and unlock the GemWallet extension, then retry.`)
  }
  const res = r as { type?: string; result?: { hash?: string } }
  const hash = res.result?.hash
  if (!hash) throw new Error('GemWallet payment was rejected or cancelled.')
  return { txid: hash }
}
