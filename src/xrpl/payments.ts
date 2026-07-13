// ---------------------------------------------------------------------------
// Agentic payments on the XRP Ledger.
//  - sendPayment: a real signed Payment tx between two agent wallets.
//  - x402 memos:  each agentic payment carries a structured memo describing the
//                 skill invoked and an invoice id · the on-ledger equivalent of
//                 an HTTP 402 "Payment Required" settlement.
//  - trackAction: a 0-amount self-payment carrying a hashed memo, used to
//                 anchor an agent's behavior on-ledger (track-agent-behavior).
//  - fetchHistory: real account_tx read for auditing.
// ---------------------------------------------------------------------------
import { xrpToDrops, convertStringToHex, type Payment, type Wallet } from 'xrpl'
import { getClient, type NetworkId } from './network'


export interface X402Memo {
  protocol: 'x402'
  skill: string
  invoice: string
  from: string // owner id
  to: string // owner id
  note?: string
}

export interface PaymentResult {
  hash: string
  validated: boolean
  ledgerIndex?: number
  feeXrp: number
  engineResult: string
}

function memoField(memo: {
  data?: string
  type?: string
  format?: string
}): { Memo: { MemoData?: string; MemoType?: string; MemoFormat?: string } } {
  const Memo: { MemoData?: string; MemoType?: string; MemoFormat?: string } = {}
  if (memo.type) Memo.MemoType = convertStringToHex(memo.type)
  if (memo.format) Memo.MemoFormat = convertStringToHex(memo.format)
  if (memo.data) Memo.MemoData = convertStringToHex(memo.data)
  return { Memo }
}

/**
 * Send an on-ledger XRP payment from `wallet` to `destination`.
 * Attaches an x402 memo when provided. Fully signed + submitted + validated.
 */
export async function sendPayment(
  net: NetworkId,
  wallet: Wallet,
  destination: string,
  amountXrp: number,
  x402?: X402Memo,
): Promise<PaymentResult> {
  const client = await getClient(net)

  const tx: Payment = {
    TransactionType: 'Payment',
    Account: wallet.classicAddress,
    Destination: destination,
    Amount: xrpToDrops(amountXrp.toFixed(6)),
  }

  if (x402) {
    tx.Memos = [
      memoField({ type: 'x402', format: 'application/json', data: JSON.stringify(x402) }),
    ]
  }

  const prepared = await client.autofill(tx)
  const signed = wallet.sign(prepared)
  const res = await client.submitAndWait(signed.tx_blob)

  const meta = res.result.meta
  const engineResult =
    typeof meta === 'object' && meta && 'TransactionResult' in meta
      ? (meta as { TransactionResult: string }).TransactionResult
      : 'unknown'

  return {
    hash: res.result.hash,
    validated: res.result.validated ?? false,
    ledgerIndex: res.result.ledger_index,
    feeXrp: Number(prepared.Fee ?? '0') / 1_000_000,
    engineResult,
  }
}

/**
 * Anchor a behavior fingerprint on-ledger: a 1-drop self-payment whose memo
 * carries a hash of the action. Cheap, auditable, and queryable via account_tx.
 */
export async function trackAction(
  net: NetworkId,
  wallet: Wallet,
  action: { agent: string; skill: string; hash: string; ts: number },
): Promise<PaymentResult> {
  const client = await getClient(net)
  const tx: Payment = {
    TransactionType: 'Payment',
    Account: wallet.classicAddress,
    Destination: wallet.classicAddress, // self-payment: pure memo anchor
    Amount: '1',
    Memos: [
      memoField({
        type: 'dojoburo/track',
        format: 'application/json',
        data: JSON.stringify(action),
      }),
    ],
  }
  const prepared = await client.autofill(tx)
  const signed = wallet.sign(prepared)
  const res = await client.submitAndWait(signed.tx_blob)
  const meta = res.result.meta
  const engineResult =
    typeof meta === 'object' && meta && 'TransactionResult' in meta
      ? (meta as { TransactionResult: string }).TransactionResult
      : 'unknown'
  return {
    hash: res.result.hash,
    validated: res.result.validated ?? false,
    ledgerIndex: res.result.ledger_index,
    feeXrp: Number(prepared.Fee ?? '0') / 1_000_000,
    engineResult,
  }
}

export interface LedgerTx {
  hash: string
  type: string
  amountXrp: number | null
  direction: 'in' | 'out' | 'self' | 'other'
  counterparty: string | null
  memo: string | null
  date: number | null
  result: string | null
}

/** Real account_tx read · the basis of the "audit on-ledger" skill. */
export async function fetchHistory(
  net: NetworkId,
  address: string,
  limit = 20,
): Promise<LedgerTx[]> {
  const client = await getClient(net)
  const res = await client.request({
    command: 'account_tx',
    account: address,
    limit,
    ledger_index_max: -1,
    ledger_index_min: -1,
  })

  const out: LedgerTx[] = []
  for (const entry of res.result.transactions) {
    const tx = entry.tx_json ?? (entry as unknown as { tx?: Record<string, unknown> }).tx
    if (!tx) continue
    const t = tx as Record<string, unknown>
    const type = String(t.TransactionType ?? 'Unknown')
    let amountXrp: number | null = null
    if (typeof t.Amount === 'string') amountXrp = Number(t.Amount) / 1_000_000

    const account = String(t.Account ?? '')
    const destination = t.Destination ? String(t.Destination) : null
    let direction: LedgerTx['direction'] = 'other'
    let counterparty: string | null = null
    if (destination) {
      if (account === address && destination === address) direction = 'self'
      else if (account === address) {
        direction = 'out'
        counterparty = destination
      } else if (destination === address) {
        direction = 'in'
        counterparty = account
      }
    }

    out.push({
      hash: String(t.hash ?? entry.hash ?? ''),
      type,
      amountXrp,
      direction,
      counterparty,
      memo: decodeFirstMemo(t.Memos as unknown),
      date: rippleTimeToUnix((entry as { close_time_iso?: string }).close_time_iso, t.date as number | undefined),
      result:
        typeof entry.meta === 'object' && entry.meta && 'TransactionResult' in entry.meta
          ? String((entry.meta as { TransactionResult: string }).TransactionResult)
          : null,
    })
  }
  return out
}

function decodeFirstMemo(memos: unknown): string | null {
  if (!Array.isArray(memos) || memos.length === 0) return null
  const m = memos[0] as { Memo?: { MemoData?: string } }
  const data = m?.Memo?.MemoData
  if (!data) return null
  try {
    return hexToString(data)
  } catch {
    return null
  }
}

function hexToString(hex: string): string {
  const bytes = hex.match(/.{1,2}/g) ?? []
  return decodeURIComponent(bytes.map((b) => '%' + b).join(''))
}

const RIPPLE_EPOCH = 946684800
function rippleTimeToUnix(iso?: string, rippleTime?: number): number | null {
  if (iso) {
    const p = Date.parse(iso)
    if (!Number.isNaN(p)) return Math.floor(p / 1000)
  }
  if (typeof rippleTime === 'number') return rippleTime + RIPPLE_EPOCH
  return null
}
