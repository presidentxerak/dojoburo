// Shared mobile bottom navigation bar for the STANDALONE pages (City, Studio,
// Connect apps) · the ones that live on their own hash route rather than inside
// <App/>. Each button routes back to #app with a session "nav intent" that App
// reads on mount (CEO → dashboard, Dojo → the 3D office), or straight to the
// #studio / #city / #connect routes. App itself keeps its own inline bar because
// it flips local state instead of navigating.
type Tab = 'dojo' | 'ceo' | 'studio' | 'city' | 'connect'

function toApp(intent: 'dashboard' | 'dojo') {
  try { sessionStorage.setItem('dojoburo.nav', intent) } catch { /* ignore */ }
  location.hash = 'app'
}

export function PageBar({ current }: { current: Tab }) {
  return (
    <nav className="mbar mbar-5" aria-label="Navigation">
      <button className={current === 'dojo' ? 'on' : ''} onClick={() => toApp('dojo')}>
        <span className="mbar-ic">◳</span>Dojo
      </button>
      <button className={current === 'ceo' ? 'on' : ''} onClick={() => toApp('dashboard')}>
        <span className="mbar-ic">▤</span>CEO
      </button>
      <button className={current === 'studio' ? 'on' : ''} onClick={() => { location.hash = 'studio' }}>
        <span className="mbar-ic">✎</span>Studio
      </button>
      <button className={current === 'connect' ? 'on' : ''} onClick={() => { location.hash = 'connect' }}>
        <span className="mbar-ic">⊞</span>Connect
      </button>
      <button className={current === 'city' ? 'on' : ''} onClick={() => { location.hash = 'city' }}>
        <span className="mbar-ic">⌂</span>City
      </button>
    </nav>
  )
}
