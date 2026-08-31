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
import { FullScreen } from './components/FullScreen'
import { StudioSurface } from './components/workshop/WorkshopModal'
import { ConnectorsSurface } from './components/ConnectorsPage'

export default function App() {
  const fireEvent = useDojo((s) => s.fireEvent)
  const theme = useDojo((s) => s.theme)
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
  // so the bottom navigation (Dojo, Studio, Connect) is not shown: none
  // of it means anything before a company exists.
  const [homeStep, setHomeStep] = useState<'create' | 'choose' | 'companies' | 'company'>('create')
  // the dojo fills the window on arrival (centered), then reveals the agent's
  // dashboard when you pick an agent.
  const [dojoFull, setDojoFull] = useState(true)
  // arrange-the-team overlay · reachable straight from the dojo on desktop AND
  // mobile (tap an agent, tap a cell). The 3D scene reseats in grid order.
  const [arrangeOpen, setArrangeOpen] = useState(false)
  // graph mode · the whole team and their apps as cards, full screen
  const [graphOpen, setGraphOpen] = useState(false)
  // Where the home opens when we send someone back to it. Asking for "my
  // project" must show the project — the naming card is step one of creating
  // something new, and landing on it after you already have a project reads as
  // having lost your work.
  //
  // A reload used to drop you on the naming card even with companies saved:
  // "home" opened at step one, so the app read as having lost your work. If a
  // company exists, the app opens on your companies instead.
  const [homeStart, setHomeStart] = useState<'create' | 'companies'>(
    () => (useWorkshop.getState().companies.length ? 'companies' : 'create'),
  )
  // Dojo settings / Account / Billing and Connect apps, as surfaces over the
  // app rather than routes you have to come back from.
  const studioOpen = useWork((s) => s.studioOpen)
  const connectOpen = useWork((s) => s.connectOpen)

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

  // navigation intent handed over from a full-page surface (dojo settings,
  // connect apps): it sets this then routes to #app, and we act on it once App
  // mounts · "CEO" opens the dashboard, "Studio" opens the studio.
  useEffect(() => {
    let intent: string | null = null
    try { intent = sessionStorage.getItem('dojoburo.nav'); if (intent) sessionStorage.removeItem('dojoburo.nav') } catch { /* ignore */ }
    // Coming back from a full-page surface (dojo settings, connect apps, the
    // city…) must land back INSIDE the dojo, not on the create card, which is
    // what the home shows by default.
    if (intent === 'dashboard') { useDojo.getState().selectAgent(null); setView('dojo'); setDojoFull(false) }
    else if (intent === 'dojo') { useDojo.getState().selectAgent(null); setView('dojo'); setDojoFull(true) }
    else if (intent === 'studio') useWork.getState().openStudio('studio')
    else if (intent === 'projects') { useDojo.getState().selectAgent(null); setHomeStart('companies'); setView('home') }
  }, [])

  // "My companies" from the menu · the company cards, never the naming card
  useEffect(() => {
    const go = () => { useDojo.getState().selectAgent(null); setHomeStart('companies'); setView('home') }
    window.addEventListener('open-projects', go)
    return () => window.removeEventListener('open-projects', go)
  }, [])

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
          <PipelineHome key={homeStart} initialView={homeStart} onOpenProject={() => { setView('dojo'); setDojoFull(true) }} onView={setHomeStep} />
        </div>
        <OutboundConsentModal />
        {/* Dojo settings · Account · Billing · Connect apps — the same shell as
            every other full-screen surface, over the app instead of away from it */}
        {studioOpen && <StudioSurface onClose={() => useWork.getState().closeStudio()} />}
        {connectOpen && <ConnectorsSurface onClose={() => useWork.getState().closeConnect()} />}
        <CommandPalette openDojo={() => { setView('dojo'); setDojoFull(true) }} showDashboard={() => { setView('dojo'); setDojoFull(false) }} />
        <Toasts />
        <SettingsModal />
        <DojosManager />
        <SupportBot />
        {(homeStep === 'companies' || homeStep === 'company') && (
        <nav className="mbar mbar-3" aria-label="Navigation">
          <button className="on"><span className="mbar-ic">▦</span>Company</button>
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
  //
  // There is no "Project" button here: it walked you out of the dojo and back
  // to the start of the create flow. Leaving the dojo is a navigation, so it
  // lives with the other navigations — the menu ("My companies") and the bottom
  // bar on a phone — and both open the project itself.
  const dojoControls = (
    <nav className="dojo-ctl" aria-label="Dojo">
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
        {/* the dojo stays mounted underneath · Graph mode is a full-screen
            surface over it, like every other panel of its weight */}
        <div className={`dash-stage${dojoFull ? ' full' : ''}`}>
          <div className="scene-bg"><Scene3D /></div>
        </div>
        {graphOpen && activeDojoId && (
          <DojoGraph
            dojoId={activeDojoId}
            onClose={() => setGraphOpen(false)}
            onOpenAgent={(id) => { setGraphOpen(false); selectAgent(id); setDojoFull(false) }}
          />
        )}

        {!dojoFull && (
          <div className="dash-side">
            <Dashboard onOpenDojo={() => setDojoFull(true)} />
          </div>
        )}

      </div>

      {arrangeOpen && (
        <FullScreen
          title="Manage team"
          sub="Drag a teammate to move them around the dojo floor. Everyone keeps their desk."
          bodyClass="arrange-fs"
          onClose={() => setArrangeOpen(false)}
        >
          <ArrangeGrid />
        </FullScreen>
      )}

      <OutboundConsentModal />
      {/* Dojo settings · Account · Billing · Connect apps — the same shell as
          every other full-screen surface, over the app instead of away from it */}
      {studioOpen && <StudioSurface onClose={() => useWork.getState().closeStudio()} />}
      {connectOpen && <ConnectorsSurface onClose={() => useWork.getState().closeConnect()} />}
      <CommandPalette openDojo={() => setDojoFull(true)} showDashboard={() => setDojoFull(false)} />
      <Toasts />
      <SnapshotFactory />
      <Workshop />
      <DeliverableModal />
      <SettingsModal />
      <DojosManager />
      <SupportBot />

      {/* mobile bottom bar · the same four things the header carries on desktop.
          Connect apps and the Dojo Guide live in the menu now. */}
      <nav className="mbar mbar-4" aria-label="Navigation">
        <button onClick={() => { selectAgent(null); setHomeStart('companies'); setView('home') }}>
          <span className="mbar-ic">▦</span>Company
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
