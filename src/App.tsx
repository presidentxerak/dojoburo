import { useEffect, useState } from 'react'
import { TopBar } from './components/TopBar'
import { Scene3D } from './components/Scene3D'
import { Dashboard } from './components/dashboard/Dashboard'
import { Onboarding } from './components/Onboarding'
import { AgentPanel } from './components/AgentPanel'
import { TreasuryPanel } from './components/TreasuryPanel'
import { ActivityLog } from './components/ActivityLog'
import { Toasts } from './components/Toasts'
import { WalletPanel } from './components/WalletPanel'
import { StatsPanel } from './components/StatsPanel'
import { SupportBot } from './components/SupportBot'
import { Workshop } from './components/workshop/Workshop'
import { DeliverableModal } from './components/agents/DeliverableModal'
import { Defs } from './components/Defs'
import { useDojo } from './store'
import { useWork } from './agents/workStore'
import { useWorkshop } from './workshop'
import { privyConfigured } from './auth/controls'
import { AuthGate } from './auth/AuthGate'
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
  const account = useWorkshop((s) => s.account)
  const needsAuth = !account && privyConfigured()

  // the dojo can expand to fill the window (nanocorp "Desktop View" equivalent)
  const [dojoFull, setDojoFull] = useState(false)
  // first-run onboarding · "what company do you want to create?"
  const [onboarded, setOnboarded] = useState(() => {
    try { return localStorage.getItem('dojoburo.onboarded.v1') === '1' } catch { return true }
  })
  const finishOnboarding = () => {
    try { localStorage.setItem('dojoburo.onboarded.v1', '1') } catch { /* ignore */ }
    setOnboarded(true)
  }

  useEffect(() => { document.documentElement.dataset.theme = theme }, [theme])

  // OAuth return from a tool connect: surface a toast + refresh connections
  useEffect(() => {
    const h = window.location.hash
    const okm = h.match(/#connected=([\w-]+)/)
    const errm = h.match(/#connect_error=([^&]+)/)
    if (okm) {
      useDojo.getState().pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'App connectée', text: `${okm[1]} est relié à tes agents.` })
      void useWork.getState().loadTools()
      history.replaceState(null, '', window.location.pathname + window.location.search)
    } else if (errm) {
      useDojo.getState().pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Connexion échouée', text: decodeURIComponent(errm[1]) })
      history.replaceState(null, '', window.location.pathname + window.location.search)
    }
  }, [])

  useEffect(() => {
    const unlock = () => { audio.setMuted(muted); audio.resume() }
    window.addEventListener('pointerdown', unlock, { once: true })
    return () => window.removeEventListener('pointerdown', unlock)
  }, [muted])

  useEffect(() => { if (hasWallets) void refresh() }, [net, hasWallets, refresh])

  useEffect(() => {
    let cancelled = false
    const schedule = () => setTimeout(() => {
      if (cancelled) return
      fireEvent()
      timer = schedule()
    }, 16000 + Math.random() * 14000)
    let timer = schedule()
    return () => { cancelled = true; clearTimeout(timer) }
  }, [fireEvent])

  return (
    <div className={`app dash-layout${dojoFull ? ' dojo-full' : ''}`}>
      <Defs />
      <TopBar />

      <div className="dash-main">
        {/* dojo on the LEFT, dashboard on the RIGHT */}
        <div className={`dash-stage${dojoFull ? ' full' : ''}`}>
          <div className="scene-bg"><Scene3D /></div>

          <button className="dojo-full-toggle" onClick={() => setDojoFull((v) => !v)} title={dojoFull ? 'Réduire le dojo' : 'Dojo en plein écran'}>
            {dojoFull ? '⤡ Réduire' : '⤢ Plein écran'}
          </button>

          {/* selected-agent card floats over the dojo pane */}
          {selected && (
            <div className="dojo-agent-overlay">
              <button className="dojo-agent-close" onClick={() => selectAgent(null)} aria-label="Fermer">✕</button>
              <AgentPanel />
            </div>
          )}

          {/* fullscreen dojo also exposes treasury / wallet / activity */}
          {dojoFull && (
            <div className="dojo-hud">
              <TreasuryPanel />
              <WalletPanel />
              <ActivityLog />
            </div>
          )}
        </div>

        {!dojoFull && (
          <div className="dash-side">
            <Dashboard onOpenDojo={() => setDojoFull(true)} />
          </div>
        )}
      </div>

      <StatsPanel />
      <Toasts />
      <Workshop />
      <DeliverableModal />
      <SupportBot />
      {needsAuth && <AuthGate />}
      {!needsAuth && !onboarded && <Onboarding onDone={finishOnboarding} />}
    </div>
  )
}
