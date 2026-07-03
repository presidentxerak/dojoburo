// ---------------------------------------------------------------------------
// XRPL wallet management — the "xrpl-agent-wallet-skill".
// Each agent (and the company treasury) owns a real XRPL wallet. Seeds are
// stored client-side, namespaced per network. On Testnet/Devnet wallets are
// funded from the faucet; on Mainnet you fund them yourself.
//
// SECURITY: seeds live in this browser's localStorage only. This is fine for
// Testnet play money. On Mainnet, treat these as hot wallets — fund small.
// ---------------------------------------------------------------------------
import { Wallet, dropsToXrp } from 'xrpl'
import { getClient, type NetworkId } from './network'

export interface StoredWallet {
  ownerId: string // agent id, or 'treasury'
  address: string
  seed: string
  createdAt: number
}

export interface WalletState extends StoredWallet {
  balanceXrp: number | null
  funded: boolean // account exists on ledger
}

const key = (net: NetworkId) => `dojoburo.wallets.${net}`

export function loadWallets(net: NetworkId): Record<string, StoredWallet> {
  try {
    const raw = localStorage.getItem(key(net))
    return raw ? (JSON.parse(raw) as Record<string, StoredWallet>) : {}
  } catch {
    return {}
  }
}

export function saveWallets(net: NetworkId, wallets: Record<string, StoredWallet>) {
  localStorage.setItem(key(net), JSON.stringify(wallets))
}

/** Create a brand-new wallet (offline keypair) for an owner and persist it. */
export function createWallet(net: NetworkId, ownerId: string): StoredWallet {
  const w = Wallet.generate()
  const stored: StoredWallet = {
    ownerId,
    address: w.classicAddress,
    seed: w.seed!,
    createdAt: nowSeed(),
  }
  const all = loadWallets(net)
  all[ownerId] = stored
  saveWallets(net, all)
  return stored
}

export function getStoredWallet(net: NetworkId, ownerId: string): StoredWallet | null {
  return loadWallets(net)[ownerId] ?? null
}

export function toWallet(stored: StoredWallet): Wallet {
  return Wallet.fromSeed(stored.seed)
}

/** Delete a wallet from local storage (does not touch the ledger). */
export function forgetWallet(net: NetworkId, ownerId: string) {
  const all = loadWallets(net)
  delete all[ownerId]
  saveWallets(net, all)
}

/** Fund a wallet from the Testnet/Devnet faucet. Returns new balance in XRP. */
export async function fundFromFaucet(net: NetworkId, stored: StoredWallet): Promise<number> {
  const client = await getClient(net)
  const wallet = toWallet(stored)
  const res = await client.fundWallet(wallet)
  return Number(res.balance)
}

/** Read the on-ledger balance (in XRP). Returns null if the account is unfunded. */
export async function getBalance(net: NetworkId, address: string): Promise<number | null> {
  const client = await getClient(net)
  try {
    const info = await client.request({
      command: 'account_info',
      account: address,
      ledger_index: 'validated',
    })
    return Number(dropsToXrp(info.result.account_data.Balance))
  } catch (e: unknown) {
    // actNotFound => account not yet funded
    if (isActNotFound(e)) return null
    throw e
  }
}

export function isActNotFound(e: unknown): boolean {
  const err = e as { data?: { error?: string }; message?: string }
  return err?.data?.error === 'actNotFound' || /actNotFound|Account not found/i.test(err?.message ?? '')
}

// localStorage-safe timestamp. (Date.now is unavailable in some sandboxes but
// fine in the browser runtime; guard anyway.)
function nowSeed(): number {
  try {
    return Date.now()
  } catch {
    return 0
  }
}
