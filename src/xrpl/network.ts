// ---------------------------------------------------------------------------
// XRPL network configuration + shared client.
// The app talks DIRECTLY to public XRPL nodes over WebSocket · no backend,
// no mock. Default network is Testnet (real ledger, faucet-funded wallets).
// Flip to Mainnet from the UI once you are ready to move real value.
// ---------------------------------------------------------------------------
import { Client } from 'xrpl'

export type NetworkId = 'testnet' | 'mainnet' | 'devnet'

export interface NetworkConfig {
  id: NetworkId
  label: string
  wss: string
  explorerTx: (hash: string) => string
  explorerAccount: (addr: string) => string
  /** Faucet available (Testnet/Devnet fund real-but-worthless XRP). */
  faucet: boolean
  live: boolean
}

export const NETWORKS: Record<NetworkId, NetworkConfig> = {
  testnet: {
    id: 'testnet',
    label: 'Testnet',
    wss: 'wss://s.altnet.rippletest.net:51233',
    explorerTx: (h) => `https://testnet.xrpl.org/transactions/${h}`,
    explorerAccount: (a) => `https://testnet.xrpl.org/accounts/${a}`,
    faucet: true,
    live: false,
  },
  devnet: {
    id: 'devnet',
    label: 'Devnet',
    wss: 'wss://s.devnet.rippletest.net:51233',
    explorerTx: (h) => `https://devnet.xrpl.org/transactions/${h}`,
    explorerAccount: (a) => `https://devnet.xrpl.org/accounts/${a}`,
    faucet: true,
    live: false,
  },
  mainnet: {
    id: 'mainnet',
    label: 'Mainnet',
    wss: 'wss://xrplcluster.com',
    explorerTx: (h) => `https://livenet.xrpl.org/transactions/${h}`,
    explorerAccount: (a) => `https://livenet.xrpl.org/accounts/${a}`,
    faucet: false,
    live: true,
  },
}

const STORE_KEY = 'dojoburo.network'

export function loadNetworkId(): NetworkId {
  const raw = localStorage.getItem(STORE_KEY)
  if (raw === 'mainnet' || raw === 'devnet' || raw === 'testnet') return raw
  return 'testnet'
}

export function saveNetworkId(id: NetworkId) {
  localStorage.setItem(STORE_KEY, id)
}

// A single reused client per network. Reconnects lazily.
let client: Client | null = null
let clientNet: NetworkId | null = null
let connecting: Promise<Client> | null = null

export async function getClient(net: NetworkId): Promise<Client> {
  if (client && clientNet === net && client.isConnected()) return client
  if (connecting && clientNet === net) return connecting

  // Tear down a client pointing at another network.
  if (client && clientNet !== net) {
    try {
      await client.disconnect()
    } catch {
      /* ignore */
    }
    client = null
  }

  clientNet = net
  const cfg = NETWORKS[net]
  const c = new Client(cfg.wss, { connectionTimeout: 15000 })
  connecting = c
    .connect()
    .then(() => {
      client = c
      connecting = null
      return c
    })
    .catch((e) => {
      connecting = null
      throw e
    })
  return connecting
}

export async function disconnectClient() {
  if (client) {
    try {
      await client.disconnect()
    } catch {
      /* ignore */
    }
    client = null
    clientNet = null
  }
}
