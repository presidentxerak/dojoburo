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
import { Workshop } from './components/workshop/Workshop'
import { DeliverableModal } from './components/agents/DeliverableModal'
import { Defs } from './components/Defs'
import { useDojo } from './store'
import { useWork } from './agents/workStore'
import { NETWORKS } from './xrpl/network'
import { audio } from './audio'

export default function App() {
  const refresh = useDojo((s) => s.refreshBalances)
  const fireEvent = useDojo((s) => s.fireEvent)
  const theme = useDojo((s) => s.theme)
  const net = useDojo((s) => s.net)
  const hasWallets = useDojo((s) => Object.keys(s.wallets).length > 0)
  const muted = useDojo((s) => s.muted)
  const selected = useDojo((s) => s.selectedAgent)
  const selectAgent = useDojo((s) => s.selectAgent)
  // start collapsed on phones so the dojo is fully visible; open on desktop
  const [hudOpen, setHudOpen] = useState(() => (typeof window !== 'undefined' ? window.innerWidth > 720 : true))
  const closeSheet = () => { setHudOpen(false); selectAgent(null) }

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  // OAuth return from a tool connect: surface a toast + refresh connections
  useEffect(() => {
    const h = window.location.hash
    const okm = h.match(/#connected=([\w-]+)/)
    const errm = h.match(/#connect_error=([^&]+)/)
    if (okm) {
      useDojo.getState().pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'Tool connected', text: `${okm[1]} is now linked to your agents.` })
      void useWork.getState().loadTools()
      history.replaceState(null, '', window.location.pathname + window.location.search)
    } else if (errm) {
      useDojo.getState().pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Connection failed', text: decodeURIComponent(errm[1]) })
      history.replaceState(null, '', window.location.pathname + window.location.search)
    }
  }, [])

  // on mobile, tapping an agent reveals the panel (its card); deselect hides it
  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth > 720) return
    setHudOpen(selected != null)
  }, [selected])

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
    <div className={`app${hudOpen ? ' sheet-open' : ''}`}>
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
            {/* mobile: sheet header — grab handle + explicit close button */}
            <div className="hud-sheet-head">
              <button className="hud-grip" onClick={closeSheet} aria-label="Collapse panel"><span /></button>
              <button className="hud-close" onClick={closeSheet} aria-label="Close panel">✕</button>
            </div>
            <AgentPanel />
            <TreasuryPanel />
            <XamanPanel />
            <ActivityLog />
          </aside>
        </div>
        {/* mobile: floating handle to open the panel sheet when collapsed */}
        <button className="hud-open-fab" onClick={() => setHudOpen(true)} aria-label="Open dojo panel">▴ Panel</button>
        <div className="hud-credit">
          Real XRPL · {NETWORKS[net].label}{NETWORKS[net].faucet ? ' · faucet' : ' · live'}
          {' · '}
          <a href="#" onClick={(e) => { e.preventDefault(); location.hash = '' }}>About</a>
        </div>
      </div>

      <StatsPanel />
      <Toasts />
      <Workshop />
      <DeliverableModal />
      <SupportBot />
    </div>
  )
}
