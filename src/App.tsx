import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Office } from './components/Office'
import { AgentPanel } from './components/AgentPanel'
import { TreasuryPanel } from './components/TreasuryPanel'
import { ActivityLog } from './components/ActivityLog'
import { useDojo } from './store'
import { NETWORKS } from './xrpl/network'

export default function App() {
  const refresh = useDojo((s) => s.refreshBalances)
  const net = useDojo((s) => s.net)
  const hasWallets = useDojo((s) => Object.keys(s.wallets).length > 0)

  // Pull real balances from the ledger on load / network change.
  useEffect(() => {
    if (hasWallets) void refresh()
  }, [net, hasWallets, refresh])

  return (
    <div className="app">
      <TopBar />
      <main className="layout">
        <div className="col-office">
          <Office />
          <p className="office-caption">
            🏢 Bureau DojoBuro · {NETWORKS[net].label}
            {NETWORKS[net].faucet ? ' · faucet activé' : ' · valeur réelle'}
          </p>
        </div>
        <div className="col-side">
          <AgentPanel />
          <TreasuryPanel />
          <ActivityLog />
        </div>
      </main>
      <footer className="app-footer">
        <span>
          Transactions réelles sur le XRP Ledger via {NETWORKS[net].wss}. Aucun mock. Seeds stockées dans ce
          navigateur uniquement.
        </span>
      </footer>
    </div>
  )
}
