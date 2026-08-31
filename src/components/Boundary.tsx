import { Component, type ErrorInfo, type ReactNode } from 'react'

/** A crash must never cost you the app.
 *
 *  React unmounts any tree that throws during render. With nothing catching it,
 *  a single bad value — a currency code saved by an older build, say — took the
 *  whole page white, with no header, no menu and no way back. You were stuck,
 *  and reloading landed you in the same state because the bad value was saved.
 *
 *  So every full-screen surface, and the app itself, render inside one of
 *  these. A panel that throws becomes a panel that says so, next to a close
 *  button that still works. The app that throws offers a reload and a way to
 *  fetch fresh files. Either way you keep the product.
 */
interface Props {
  children: ReactNode
  /** what failed, in the founder's words · "Billing", "the dojo" */
  what?: string
  /** shown as the way out when the surface can be closed */
  onClose?: () => void
}
interface State { error: Error | null }

export class Boundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // keep it in the console for a bug report, but never on screen
    console.error('DojoBuro · ' + (this.props.what ?? 'the app') + ' failed to render', error, info.componentStack)
  }

  render() {
    const { error } = this.state
    if (!error) return this.props.children
    const what = this.props.what ?? 'This screen'
    return (
      <div className="crashed" role="alert">
        <h3>{what} could not open</h3>
        <p>
          Something in it broke while drawing. The rest of the app is fine — close this and carry on,
          or fetch a fresh copy if it keeps happening.
        </p>
        <code className="crashed-why">{error.message}</code>
        <div className="crashed-acts">
          {this.props.onClose && (
            <button className="btn tiny" onClick={this.props.onClose}>Close and carry on</button>
          )}
          <button className="btn tiny ghost" onClick={() => this.setState({ error: null })}>Try again</button>
          <button className="btn tiny ghost" onClick={() => location.reload()}>Reload the app</button>
        </div>
      </div>
    )
  }
}
