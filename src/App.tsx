import { useEffect, useState } from 'react'
import { TopBar } from './components/TopBar'
import { Scene3D } from './components/Scene3D'
import { Dashboard } from './components/dashboard/Dashboard'
import { Onboarding } from './components/Onboarding'
import { Toasts } from './components/Toasts'
import { StatsPanel } from './components/StatsPanel'
import { SupportBot } from './components/SupportBot'
import { Workshop } from './components/workshop/Workshop'
import { SnapshotFactory } from './components/three/snapshotFactory'
import { DeliverableModal } from './components/agents/DeliverableModal'
import { SettingsModal } from './components/SettingsModal'
import { DojosManager } from './components/DojosManager'
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
  const account = useWorkshop((s) => s.account)
  const needsAuth = !account && privyConfigured()
  const createIntent = useWork((s) => s.createIntent)

  // the dojo fills the window on arrival (centered), then reveals the agent's
  // dashboard when you pick an agent.
  const [dojoFull, setDojoFull] = useState(true)
  // first-run onboarding · "what company do you want to create?"
  const [onboarded, setOnboarded] = useState(() => {
    try { return localStorage.getItem('dojoburo.onboarded.v1') === '1' } catch { return true }
  })
  const finishOnboarding = () => {
    try { localStorage.setItem('dojoburo.onboarded.v1', '1') } catch { /* ignore */ }
    setOnboarded(true)
    useWork.getState().clearCreate()
  }

  useEffect(() => { document.documentElement.dataset.theme = theme }, [theme])

  // clicking an agent (in the 3D dojo or its roster card) opens its dashboard on
  // the right panel · if the dojo is fullscreen, reveal the panel so it shows.
  // Selecting an agent reveals its dashboard; deselecting (closing a module)
  // returns the dojo to fullscreen so the company panel never lingers over it —
  // the company overview now lives inside Chief's dashboard.
  useEffect(() => {
    if (selected && dojoFull) setDojoFull(false)
    if (!selected) setDojoFull(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected])

  // OAuth return from a tool connect: surface a toast + refresh connections
  useEffect(() => {
    const h = window.location.hash
    const okm = h.match(/#connected=([\w-]+)/)
    const errm = h.match(/#connect_error=([^&]+)/)
    if (okm) {
      useDojo.getState().pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'App connected', text: `${okm[1]} is linked to your agents.` })
      void useWork.getState().loadTools()
      history.replaceState(null, '', window.location.pathname + window.location.search)
    } else if (errm) {
      useDojo.getState().pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Connection failed', text: decodeURIComponent(errm[1]) })
      history.replaceState(null, '', window.location.pathname + window.location.search)
    }
  }, [])

  // navigation intent handed over from the City page (which lives on its own
  // route): the City bottom-bar sets this then routes to #app, and we act on it
  // once App mounts — "CEO" opens the dashboard, "Studio" opens the studio.
  useEffect(() => {
    let intent: string | null = null
    try { intent = sessionStorage.getItem('dojoburo.nav'); if (intent) sessionStorage.removeItem('dojoburo.nav') } catch { /* ignore */ }
    if (intent === 'dashboard') setDojoFull(false)
    else if (intent === 'studio') useWork.getState().openStudio('studio')
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
        <div className={`dash-stage${dojoFull ? ' full' : ''}`}>
          <div className="scene-bg"><Scene3D /></div>
        </div>

        {!dojoFull && (
          <div className="dash-side">
            <Dashboard onOpenDojo={() => setDojoFull(true)} />
          </div>
        )}
      </div>

      <StatsPanel />
      <Toasts />
      <SnapshotFactory />
      <Workshop />
      <DeliverableModal />
      <SettingsModal />
      <DojosManager />
      <SupportBot />

      {/* mobile bottom navigation bar · Dojo (the 3D office) then CEO (dashboard) */}
      <nav className="mbar" aria-label="Navigation">
        <button className={dojoFull ? 'on' : ''} onClick={() => setDojoFull(true)}>
          <span className="mbar-ic">◳</span>Dojo
        </button>
        <button className={!dojoFull ? 'on' : ''} onClick={() => { setDojoFull(false); document.querySelector('.dash-side')?.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <span className="mbar-ic">▤</span>CEO
        </button>
        <button onClick={() => useWork.getState().openStudio('studio')}>
          <span className="mbar-ic">✎</span>Studio
        </button>
        <button onClick={() => { location.hash = 'city' }}>
          <span className="mbar-ic">⌂</span>City
        </button>
      </nav>

      {needsAuth && <AuthGate />}
      {!needsAuth && (!onboarded || createIntent) && <Onboarding onDone={finishOnboarding} />}
    </div>
  )
}
