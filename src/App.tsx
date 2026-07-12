import { useEffect, useState } from 'react'
import { TopBar } from './components/TopBar'
import { Scene3D } from './components/Scene3D'
import { Dashboard } from './components/dashboard/Dashboard'
import { Onboarding } from './components/Onboarding'
import { Toasts } from './components/Toasts'
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
  const account = useWorkshop((s) => s.account)
  const needsAuth = !account && privyConfigured()
  const createIntent = useWork((s) => s.createIntent)

  // the dojo can expand to fill the window (nanocorp "Desktop View" equivalent)
  const [dojoFull, setDojoFull] = useState(false)
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
  useEffect(() => { if (selected && dojoFull) setDojoFull(false) }, [selected, dojoFull])

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

      {/* mobile bottom navigation bar */}
      <nav className="mbar" aria-label="Navigation">
        <button onClick={() => { setDojoFull(false); document.querySelector('.dash-side')?.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <span className="mbar-ic">▤</span>Tableau
        </button>
        <button onClick={() => setDojoFull((v) => !v)}>
          <span className="mbar-ic">◳</span>Dojo
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
