// On-ledger XRP settlement. Emits REAL x402-tagged Payments on the configured
// network from a server-held hot wallet (seed never touches the browser).
// Runs in the Node serverless runtime (xrpl.js uses a WebSocket, not on Edge).
//
// Two entry points:
//   settleX402()    — a robust demo/skill settlement. If no destination is given
//                     it SELF-PAYS (Account == Destination), which always
//                     validates and sidesteps the 1-XRP account-reserve rule, so
//                     every priced skill / card payment yields a real Mainnet tx.
//   settleOnLedger()— delivers XRP to a user's own wallet (Mode B on-ramp).
import { Client, Wallet, xrpToDrops, convertStringToHex, type Payment } from 'xrpl'

/** DojoBuro app source tag — stamped on every settlement Payment for on-ledger
 *  attribution/tracking of the app's activity. */
const SOURCE_TAG = 2606230006

const WSS: Record<string, string> = {
  mainnet: 'wss://xrplcluster.com',
  testnet: 'wss://s.altnet.rippletest.net:51233',
  devnet: 'wss://s.devnet.rippletest.net:51233',
}
const EXPLORER: Record<string, string> = {
  mainnet: 'https://livenet.xrpl.org',
  testnet: 'https://testnet.xrpl.org',
  devnet: 'https://devnet.xrpl.org',
}

export function settlementConfigured(): boolean {
  return !!process.env.SETTLEMENT_WALLET_SEED
}

export function settlementNetwork(): string {
  return (process.env.SETTLEMENT_NETWORK || 'testnet').toLowerCase()
}

export function explorerTxUrl(network: string, hash: string): string {
  return `${EXPLORER[network] ?? EXPLORER.testnet}/transactions/${hash}`
}

export interface SettlementResult {
  hash: string
  result: string
  validated: boolean
  network: string
  explorerUrl: string
  from: string
  to: string
  amountXrp: number
}

function x402Memo(obj: unknown) {
  return {
    Memo: {
      MemoType: convertStringToHex('x402'),
      MemoFormat: convertStringToHex('application/json'),
      MemoData: convertStringToHex(JSON.stringify(obj)),
    },
  }
}

async function submit(destination: string | undefined, amountXrp: number, memo: unknown): Promise<SettlementResult> {
  const seed = process.env.SETTLEMENT_WALLET_SEED
  if (!seed) throw new Error('SETTLEMENT_WALLET_SEED not set')
  const network = settlementNetwork()
  const wss = WSS[network]
  if (!wss) throw new Error(`bad SETTLEMENT_NETWORK: ${network}`)

  const client = new Client(wss, { connectionTimeout: 15000 })
  await client.connect()
  try {
    const wallet = Wallet.fromSeed(seed)
    const to = destination || wallet.classicAddress // self-pay when no destination
    const tx: Payment = {
      TransactionType: 'Payment',
      Account: wallet.classicAddress,
      Destination: to,
      Amount: xrpToDrops(Math.max(0.000001, amountXrp).toFixed(6)),
      SourceTag: SOURCE_TAG,
      Memos: [x402Memo(memo)],
    }
    const prepared = await client.autofill(tx)
    const signed = wallet.sign(prepared)
    const res = await client.submitAndWait(signed.tx_blob)
    const meta = res.result.meta
    const result =
      typeof meta === 'object' && meta && 'TransactionResult' in meta
        ? (meta as { TransactionResult: string }).TransactionResult
        : 'unknown'
    return {
      hash: res.result.hash,
      result,
      validated: res.result.validated ?? false,
      network,
      explorerUrl: explorerTxUrl(network, res.result.hash),
      from: wallet.classicAddress,
      to,
      amountXrp,
    }
  } finally {
    try {
      await client.disconnect()
    } catch {
      /* ignore */
    }
  }
}

/** Robust x402 settlement for a priced skill or a card payment. Self-pays by
 *  default so it always validates (no reserve/activation pitfalls). */
export function settleX402(opts: { skill: string; invoice: string; amountXrp: number; note?: string; destination?: string }): Promise<SettlementResult> {
  return submit(opts.destination, opts.amountXrp, {
    protocol: 'x402',
    kind: 'skill-settlement',
    skill: opts.skill,
    invoice: opts.invoice,
    amountXrp: opts.amountXrp,
    note: opts.note,
  })
}

/** Deliver XRP to a user's own wallet (Mode B on-ramp). Throws on failure so the
 *  caller can leave the settlement row pending for retry. */
export function settleOnLedger(destination: string, amountXrp: number, invoice: string): Promise<SettlementResult> {
  return submit(destination, amountXrp, { protocol: 'x402', kind: 'fiat-settlement', invoice, amountXrp })
}
