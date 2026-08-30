import { useEffect, useState } from 'react'
import { TopBar } from './components/TopBar'
import { Scene3D } from './components/Scene3D'
import { Dashboard } from './components/dashboard/Dashboard'
import { Toasts } from './components/Toasts'
import { SupportBot } from './components/SupportBot'
import { Workshop } from './components/workshop/Workshop'
import { SnapshotFactory } from './components/three/snapshotFactory'
import { DeliverableModal } from './components/agents/DeliverableModal'
import { SettingsModal } from './components/SettingsModal'
import { DojosManager } from './components/DojosManager'
import { CommandPalette } from './components/CommandPalette'
import { OutboundConsentModal } from './components/OutboundConsentModal'
import { ArrangeGrid } from './components/dashboard/ArrangeGrid'
import { DojoGraph } from './components/dashboard/DojoGraph'
import { DojoTabs } from './components/dashboard/DojoTabs'
import { PipelineHome } from './components/home/PipelineHome'
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
  const activeDojoId = useWorkshop((s) => s.activeDojoId)
  const needsAuth = !account && privyConfigured()

  // 'home' = name your company and pick your teams (the landing surface);
  // 'dojo' = working inside one project's 3D office. The home is open to
  // everyone — browsing costs nothing — and signing in is asked for at the
  // moment a project is actually saved (see components/home/SaveGate).
  const [view, setView] = useState<'home' | 'dojo'>('home')
  // Which surface the home is showing. The first two — "Create your company"
  // and "Choose your dojo teams" — are meant to be the only thing on screen,
  // so the bottom navigation (Dojo, Studio, Connect, City) is not shown: none
  // of it means anything before a company exists.
  const [homeStep, setHomeStep] = useState<'create' | 'choose' | 'project'>('create')
  // the dojo fills the window on arrival (centered), then reveals the agent's
  // dashboard when you pick an agent.
  const [dojoFull, setDojoFull] = useState(true)
  // arrange-the-team overlay · reachable straight from the dojo on desktop AND
  // mobile (tap an agent, tap a cell). The 3D scene reseats in grid order.
  const [arrangeOpen, setArrangeOpen] = useState(false)
  // graph mode · the whole team and their apps as cards, full screen
  const [graphOpen, setGraphOpen] = useState(false)

  useEffect(() => { document.documentElement.dataset.theme = theme }, [theme])

  // clicking an agent (in the 3D dojo or its roster card) opens its dashboard on
  // the right panel · if the dojo is fullscreen, reveal the panel so it shows.
  // Selecting an agent reveals its dashboard; deselecting (closing a module)
  // returns the dojo to fullscreen so the company panel never lingers over it ·
  // the company overview now lives inside Chief's dashboard.
  useEffect(() => {
    // Selecting an agent reveals its studio fullscreen. Deselecting does NOT
    // force anything here — the closer decides where to land (always the centered
    // dojo when a feature UI closes; the CEO button opens the dashboard).
    if (selected) setDojoFull(false)
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
  // once App mounts · "CEO" opens the dashboard, "Studio" opens the studio.
  useEffect(() => {
    let intent: string | null = null
    try { intent = sessionStorage.getItem('dojoburo.nav'); if (intent) sessionStorage.removeItem('dojoburo.nav') } catch { /* ignore */ }
    // Coming back from a full-page surface (dojo settings, connect apps, the
    // city…) must land back INSIDE the dojo, not on the create card, which is
    // what the home shows by default.
    if (intent === 'dashboard') { useDojo.getState().selectAgent(null); setView('dojo'); setDojoFull(false) }
    else if (intent === 'dojo') { useDojo.getState().selectAgent(null); setView('dojo'); setDojoFull(true) }
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

  // The HOME is the pipeline of projects. Opening a project drops you into its
  // 3D office; "Home" in the bottom bar comes back here.
  if (view === 'home') {
    return (
      <div className={`app home-layout home-${homeStep}`}>
        <Defs />
        <TopBar />
        <div className="home-main">
          <PipelineHome onOpenProject={() => { setView('dojo'); setDojoFull(true) }} onView={setHomeStep} />
        </div>
        <OutboundConsentModal />
        <CommandPalette openDojo={() => { setView('dojo'); setDojoFull(true) }} showDashboard={() => { setView('dojo'); setDojoFull(false) }} />
        <Toasts />
        <SettingsModal />
        <DojosManager />
        <SupportBot />
        {homeStep === 'project' && (
        <nav className="mbar mbar-3" aria-label="Navigation">
          <button className="on"><span className="mbar-ic">▦</span>Project</button>
          <button onClick={() => { setView('dojo'); setDojoFull(true) }}><span className="mbar-ic">◳</span>Dojo</button>
          <button onClick={() => useWork.getState().openStudio('studio')}><span className="mbar-ic">✎</span>Settings</button>
        </nav>
        )}
      </div>
    )
  }

  // The dojo's controls, centred on the transparent header. Graph mode is a
  // MODE, not an action, so it is only highlighted while the graph is actually
  // open — the default is the dojo itself.
  const dojoControls = (
    <nav className="dojo-ctl" aria-label="Dojo">
      <button onClick={() => { selectAgent(null); setView('home') }} title="Back to your project">Project</button>
      <button onClick={() => setArrangeOpen(true)} title="Rearrange your team on the dojo grid">Manage team</button>
      <button onClick={() => useWork.getState().openStudio('studio')} title="Dojo settings">Dojo settings</button>
      <button
        className={`dojo-ctl-graph${graphOpen ? ' on' : ''}`}
        aria-pressed={graphOpen}
        onClick={() => setGraphOpen((v) => !v)}
        title="See the team and their apps as a graph"
      >
        Graph mode
      </button>
    </nav>
  )

  return (
    <div className={`app dash-layout${dojoFull ? ' dojo-full' : ''}`}>
      <Defs />
      <TopBar center={dojoControls} />

      {/* every other team in this project, one tap away */}
      <DojoTabs onOpen={() => { selectAgent(null); setDojoFull(true) }} />

      <div className="dash-main">
        {graphOpen && activeDojoId ? (
          <DojoGraph
            dojoId={activeDojoId}
            onClose={() => setGraphOpen(false)}
            onOpenAgent={(id) => { setGraphOpen(false); selectAgent(id); setDojoFull(false) }}
          />
        ) : (
          <div className={`dash-stage${dojoFull ? ' full' : ''}`}>
            <div className="scene-bg"><Scene3D /></div>
          </div>
        )}

        {!dojoFull && (
          <div className="dash-side">
            <Dashboard onOpenDojo={() => setDojoFull(true)} />
          </div>
        )}

      </div>

      {arrangeOpen && (
        <div className="arrange-overlay" onMouseDown={() => setArrangeOpen(false)}>
          <div className="arrange-modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="arrange-modal-h">
              <h3>Arrange your team</h3>
              <button className="btn tiny ghost" onClick={() => setArrangeOpen(false)}>Done</button>
            </div>
            <ArrangeGrid />
          </div>
        </div>
      )}

      <OutboundConsentModal />
      <CommandPalette openDojo={() => setDojoFull(true)} showDashboard={() => setDojoFull(false)} />
      <Toasts />
      <SnapshotFactory />
      <Workshop />
      <DeliverableModal />
      <SettingsModal />
      <DojosManager />
      <SupportBot />

      {/* mobile bottom bar · the same four things the header carries on desktop.
          Connect apps, the Dojo Guide and the City live in the menu now. */}
      <nav className="mbar mbar-4" aria-label="Navigation">
        <button onClick={() => { selectAgent(null); setView('home') }}>
          <span className="mbar-ic">▦</span>Project
        </button>
        <button className={dojoFull ? 'on' : ''} onClick={() => { selectAgent(null); setDojoFull(true) }}>
          <span className="mbar-ic">◳</span>Dojo
        </button>
        <button className={!dojoFull && !selected ? 'on' : ''} onClick={() => { selectAgent(null); setDojoFull(false); document.querySelector('.dash-side')?.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <span className="mbar-ic">▤</span>Team
        </button>
        <button onClick={() => setGraphOpen(true)}>
          <span className="mbar-ic">◈</span>Graph
        </button>
      </nav>

      {needsAuth && <AuthGate />}
    </div>
  )
}
