import { useEffect, useState } from 'react'
import { TopBar } from './components/TopBar'
import { Scene3D } from './components/Scene3D'
import { AgentPanel } from './components/AgentPanel'
import { TreasuryPanel } from './components/TreasuryPanel'
import { ActivityLog } from './components/ActivityLog'
import { Toasts } from './components/Toasts'
import { XamanPanel } from './components/XamanPanel'
import { StatsPanel } from './components/StatsPanel'
import { SupportBot } from './components/SupportBot'
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
  const [hudOpen, setHudOpen] = useState(true)

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
      {/* real-3D fullscreen scene */}
      <div className="scene-bg">
        <Scene3D />
      </div>

      {/* UI overlaid on top */}
      <div className={`hud ${hudOpen ? '' : 'collapsed'}`}>
        <TopBar />
        <button
          className="hud-toggle"
          onClick={() => setHudOpen((v) => !v)}
          aria-label={hudOpen ? 'Hide panel' : 'Show panel'}
          title={hudOpen ? 'Hide panel' : 'Show panel'}
        >
          {hudOpen ? '▸' : '◂'}
        </button>
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
          {' · '}
          <a href="#" onClick={(e) => { e.preventDefault(); location.hash = '' }}>About</a>
        </div>
      </div>

      <StatsPanel />
      <Toasts />
      <SupportBot />
    </div>
  )
}
