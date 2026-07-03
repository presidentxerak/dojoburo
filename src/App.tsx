import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Office } from './components/Office'
import { AgentPanel } from './components/AgentPanel'
import { TreasuryPanel } from './components/TreasuryPanel'
import { ActivityLog } from './components/ActivityLog'
import { Toasts } from './components/Toasts'
import { XamanPanel } from './components/XamanPanel'
import { Defs } from './components/Defs'
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

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    const unlock = () => {
      audio.setMuted(muted)
      audio.resume()
    }
    window.addEventListener('pointerdown', unlock, { once: true })
    return () => window.removeEventListener('pointerdown', unlock)
  }, [muted])

  useEffect(() => {
    if (hasWallets) void refresh()
  }, [net, hasWallets, refresh])

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
      <Defs />
      {/* fullscreen scene */}
      <div className="scene-bg">
        <Office />
      </div>

      {/* UI overlaid on top */}
      <div className="hud">
        <TopBar />
        <div className="hud-body">
          <aside className="hud-side">
            <AgentPanel />
            <TreasuryPanel />
            <XamanPanel />
            <ActivityLog />
          </aside>
        </div>
        <div className="hud-credit">
          Real XRPL · {NETWORKS[net].label}{NETWORKS[net].faucet ? ' · faucet' : ' · live'}
        </div>
      </div>

      <Toasts />
    </div>
  )
}
