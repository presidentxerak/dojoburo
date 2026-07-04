// Standalone always-on-top widget page. Served at #widget and loaded into a
// small, decoration-less Tauri window so you can keep an eye on the dojo while
// working in other apps. In a browser it renders the same compact monitor,
// which is how we verify it without the desktop shell.
import { ActivityWidget } from './components/workshop/ActivityWidget'

// Closing the widget: in Tauri, close the OS window; in a browser, go home.
function close() {
  const tauri = (window as any).__TAURI__
  if (tauri?.window?.getCurrent) {
    try {
      tauri.window.getCurrent().close()
      return
    } catch {
      /* fall through */
    }
  }
  location.hash = 'app'
}

export function WidgetApp() {
  return (
    <div className="widget-page" data-tauri-drag-region>
      <ActivityWidget onClose={close} />
    </div>
  )
}
