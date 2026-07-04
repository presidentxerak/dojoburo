import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Landing } from './Landing'
import { AuthProvider } from './auth/AuthProvider'
import { WidgetApp } from './WidgetApp'
import './index.css'

function Root() {
  const [route, setRoute] = useState(() => location.hash.replace(/^#\/?/, ''))
  useEffect(() => {
    const on = () => setRoute(location.hash.replace(/^#\/?/, ''))
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  // standalone always-on-top widget window (Tauri desktop) — no auth chrome
  if (route === 'widget') return <WidgetApp />
  if (route === 'app') return <App />
  return <Landing enter={() => { location.hash = 'app' }} />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Root />
    </AuthProvider>
  </StrictMode>,
)
