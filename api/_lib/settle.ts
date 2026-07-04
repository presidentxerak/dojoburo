// On-ledger XRP settlement. When SETTLEMENT_WALLET_SEED is set and the account
// has an xrpl_address on file, we deliver the purchased XRP to the user's wallet
// with an x402 memo — the on-ledger receipt for the fiat charge. Runs in the
// Node serverless runtime (xrpl.js uses a WebSocket, unavailable on Edge).
import { Client, Wallet, xrpToDrops, convertStringToHex, type Payment } from 'xrpl'

const WSS: Record<string, string> = {
  mainnet: 'wss://xrplcluster.com',
  testnet: 'wss://s.altnet.rippletest.net:51233',
  devnet: 'wss://s.devnet.rippletest.net:51233',
}

export function settlementConfigured(): boolean {
  return !!process.env.SETTLEMENT_WALLET_SEED
}

export interface SettlementResult {
  hash: string
  result: string
  validated: boolean
}

/**
 * Send `amountXrp` from the settlement hot wallet to `destination`, tagging the
 * payment with an x402 memo carrying the invoice reference. Throws on failure so
 * the caller can leave the settlement row `pending` for retry.
 */
export async function settleOnLedger(
  destination: string,
  amountXrp: number,
  invoice: string,
): Promise<SettlementResult> {
  const seed = process.env.SETTLEMENT_WALLET_SEED
  if (!seed) throw new Error('SETTLEMENT_WALLET_SEED not set')
  const net = (process.env.SETTLEMENT_NETWORK || 'testnet').toLowerCase()
  const wss = WSS[net]
  if (!wss) throw new Error(`bad SETTLEMENT_NETWORK: ${net}`)

  const client = new Client(wss, { connectionTimeout: 15000 })
  await client.connect()
  try {
    const wallet = Wallet.fromSeed(seed)
    const memo = {
      protocol: 'x402',
      kind: 'fiat-settlement',
      invoice,
      amountXrp,
    }
    const tx: Payment = {
      TransactionType: 'Payment',
      Account: wallet.classicAddress,
      Destination: destination,
      Amount: xrpToDrops(amountXrp.toFixed(6)),
      Memos: [
        {
          Memo: {
            MemoType: convertStringToHex('x402'),
            MemoFormat: convertStringToHex('application/json'),
            MemoData: convertStringToHex(JSON.stringify(memo)),
          },
        },
      ],
    }
    const prepared = await client.autofill(tx)
    const signed = wallet.sign(prepared)
    const res = await client.submitAndWait(signed.tx_blob)
    const meta = res.result.meta
    const result =
      typeof meta === 'object' && meta && 'TransactionResult' in meta
        ? (meta as { TransactionResult: string }).TransactionResult
        : 'unknown'
    return { hash: res.result.hash, result, validated: res.result.validated ?? false }
  } finally {
    try {
      await client.disconnect()
    } catch {
      /* ignore */
    }
  }
}
