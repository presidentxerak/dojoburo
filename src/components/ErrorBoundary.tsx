import { Component, type ErrorInfo, type ReactNode } from 'react'

/** Catches render/lazy-load failures in a subtree so a broken module (e.g. a
 *  stale chunk after a deploy) shows a recoverable message instead of a blank
 *  panel. The reload clears the cache path and fetches fresh chunks. */
export class ErrorBoundary extends Component<{ children: ReactNode; label?: string }, { err: Error | null }> {
  state = { err: null as Error | null }
  static getDerivedStateFromError(err: Error) { return { err } }
  componentDidCatch(err: Error, info: ErrorInfo) { console.error('Module error:', err, info) }

  render() {
    if (this.state.err) {
      const chunk = /chunk|dynamically imported|Failed to fetch/i.test(this.state.err.message)
      return (
        <div className="ad-body" style={{ textAlign: 'center', padding: '24px 16px' }}>
          <p style={{ fontWeight: 700, marginTop: 0 }}>⚠️ {this.props.label || 'Ce module'} n’a pas pu s’afficher</p>
          <p className="muted small">{chunk ? 'Une nouvelle version est disponible — recharge pour récupérer les derniers fichiers.' : 'Une erreur est survenue. Recharge la page pour réessayer.'}</p>
          <button className="btn tiny" onClick={() => { try { location.reload() } catch { /* */ } }}>Recharger</button>
        </div>
      )
    }
    return this.props.children
  }
}
