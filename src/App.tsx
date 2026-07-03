import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Office } from './components/Office'
import { AgentPanel } from './components/AgentPanel'
import { TreasuryPanel } from './components/TreasuryPanel'
import { ActivityLog } from './components/ActivityLog'
import { Toasts } from './components/Toasts'
import { XamanPanel } from './components/XamanPanel'
import { useDojo } from './store'
import { NETWORKS } from './xrpl/network'
import { audio } from './audio'

export default function App() {
  const refresh = useDojo((s) => s.refreshBalances)
  const fireEvent = useDojo((s) => s.fireEvent)
  const theme = useDojo((s) => s.theme)
  const net = useDojo((s) => s.net)
  const hasWallets = useDojo((s) => Object.keys(s.wallets).length > 0)

  const muted = useDojo((s) => s.muted)

  // Apply the saved theme to <html> (light by default).
  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  // Unlock the audio context on the first user gesture (autoplay policy).
  useEffect(() => {
    const unlock = () => {
      audio.setMuted(muted)
      audio.resume()
    }
    window.addEventListener('pointerdown', unlock, { once: true })
    return () => window.removeEventListener('pointerdown', unlock)
  }, [muted])

  // Pull real balances from the ledger on load / network change.
  useEffect(() => {
    if (hasWallets) void refresh()
  }, [net, hasWallets, refresh])

  // Random office events fire on a loose cadence.
  useEffect(() => {
    let cancelled = false
    const schedule = () => {
      const delay = 16000 + Math.random() * 14000
      return setTimeout(() => {
        if (cancelled) return
        fireEvent()
        timer = schedule()
      }, delay)
    }
    let timer = schedule()
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [fireEvent])

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
          <XamanPanel />
          <ActivityLog />
        </div>
      </main>
      <footer className="app-footer">
        <span>
          Transactions réelles sur le XRP Ledger via {NETWORKS[net].wss}. Aucun mock. Seeds stockées dans ce
          navigateur uniquement.
        </span>
      </footer>
      <Toasts />
    </div>
  )
}
