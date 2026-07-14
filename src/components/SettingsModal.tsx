import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useDojo } from '../store'
import { useWorkshop } from '../workshop'
import { useWork } from '../agents/workStore'
import { useEngine } from '../agents/engineStore'
import { CURRENCY_LIST, type CurrencyCode } from '../data/currency'
import { templateById } from '../data/templates'

// Squarespace-style settings: a sidebar of sections + a content pane. Adapts to
// the active company/site (name, region, appearance, billing, apps, autonomy).
type Section = 'general' | 'region' | 'appearance' | 'billing' | 'apps' | 'automation' | 'about'
const SECTIONS: { id: Section; label: string }[] = [
  { id: 'general', label: 'General' },
  { id: 'region', label: 'Language & region' },
  { id: 'appearance', label: 'Appearance' },
  { id: 'billing', label: 'Billing & credits' },
  { id: 'apps', label: 'Connected apps' },
  { id: 'automation', label: 'Automation & safety' },
  { id: 'about', label: 'About' },
]

declare const __BUILD_ID__: string
const BUILD_ID = typeof __BUILD_ID__ !== 'undefined' ? __BUILD_ID__ : 'dev'

export function SettingsModal() {
  const open = useDojo((s) => s.settingsOpen)
  const close = () => useDojo.getState().setSettingsOpen(false)
  const theme = useDojo((s) => s.theme)
  const setTheme = useDojo((s) => s.setTheme)
  const muted = useDojo((s) => s.muted)
  const toggleSound = useDojo((s) => s.toggleSound)
  const account = useWorkshop((s) => s.account)
  const setCurrency = useWorkshop((s) => s.setCurrency)
  const updateAccount = useWorkshop((s) => s.updateAccount)
  const dojo = useWorkshop((s) => s.dojos.find((d) => d.id === s.activeDojoId))
  const renameDojo = useWorkshop((s) => s.renameDojo)
  const openStudio = useWork((s) => s.openStudio)
  const engine = useEngine()
  const [section, setSection] = useState<Section>('general')

  if (!open) return null
  const tpl = templateById(dojo?.template)
  const go = (t: 'billing' | 'studio') => { close(); openStudio(t) }

  return createPortal(
    <div className="set-overlay" onClick={close}>
      <div className="set-modal" onClick={(e) => e.stopPropagation()}>
        <aside className="set-nav">
          <div className="set-nav-head">Settings</div>
          {SECTIONS.map((s) => (
            <button key={s.id} className={`set-nav-item${section === s.id ? ' on' : ''}`} onClick={() => setSection(s.id)}>{s.label}</button>
          ))}
        </aside>
        <div className="set-body">
          <button className="set-close" onClick={close} aria-label="Close settings">✕</button>

          {section === 'general' && (
            <section className="set-sec">
              <h3>General</h3>
              <p className="set-lead">Your company and how it appears across the app and generated sites.</p>
              <label className="set-field"><span>Company / site name</span>
                <input value={dojo?.name ?? ''} onChange={(e) => dojo && renameDojo(dojo.id, e.target.value)} maxLength={48} />
              </label>
              <label className="set-field"><span>Your name</span>
                <input value={account?.name ?? ''} onChange={(e) => updateAccount({ name: e.target.value })} maxLength={40} placeholder="Founder" />
              </label>
              <div className="set-field"><span>Workspace type</span><b className="set-static">{tpl.label ?? 'Dojo'}</b></div>
            </section>
          )}

          {section === 'region' && (
            <section className="set-sec">
              <h3>Language &amp; region</h3>
              <p className="set-lead">The app is English. Pick the currency used for credits and pricing.</p>
              <label className="set-field"><span>Currency</span>
                <select value={account?.currency ?? 'USD'} onChange={(e) => setCurrency(e.target.value as CurrencyCode)}>
                  {CURRENCY_LIST.filter((c) => c.code !== 'XRP').map((c) => <option key={c.code} value={c.code}>{c.label} ({c.symbol})</option>)}
                </select>
              </label>
            </section>
          )}

          {section === 'appearance' && (
            <section className="set-sec">
              <h3>Appearance</h3>
              <p className="set-lead">How the app looks and sounds.</p>
              <div className="set-field"><span>Display mode</span>
                <div className="set-seg">
                  <button className={theme === 'light' ? 'on' : ''} onClick={() => setTheme('light')}>Light</button>
                  <button className={theme === 'dark' ? 'on' : ''} onClick={() => setTheme('dark')}>Dark</button>
                </div>
              </div>
              <div className="set-field"><span>Sound effects</span>
                <button className={`set-toggle${!muted ? ' on' : ''}`} onClick={() => toggleSound()}>{!muted ? 'On' : 'Off'}</button>
              </div>
            </section>
          )}

          {section === 'billing' && (
            <section className="set-sec">
              <h3>Billing &amp; credits</h3>
              <p className="set-lead">Credits power hosted tasks (about one per task). Buy in your own currency — no crypto.</p>
              <div className="set-stats">
                <div><b>{engine.creditsToday}</b><em>credits used today</em></div>
                <div><b>{engine.dailyCreditCap}</b><em>daily cap</em></div>
              </div>
              <button className="set-cta" onClick={() => go('billing')}>Top up credits →</button>
            </section>
          )}

          {section === 'apps' && (
            <section className="set-sec">
              <h3>Connected apps</h3>
              <p className="set-lead">Link the external tools your agents use (Meta, Gmail, Stripe, Notion…). Tokens are sealed server-side.</p>
              <button className="set-cta" onClick={() => go('studio')}>Manage connected apps →</button>
              <a className="set-link" href="/guide" onClick={close}>How to connect each app (Dojo Guide) →</a>
            </section>
          )}

          {section === 'automation' && (
            <section className="set-sec">
              <h3>Automation &amp; safety</h3>
              <p className="set-lead">How autonomous your agents are, and the safety switches. Managed by Sentinel (Cyber Guardian).</p>
              <div className="set-field"><span>Daily credit cap</span>
                <input type="number" min={1} value={engine.dailyCreditCap} onChange={(e) => engine.setDailyCap(Number(e.target.value))} />
              </div>
              <div className="set-field"><span>Pause the company</span>
                <button className={`set-toggle${engine.paused ? ' on danger' : ''}`} onClick={() => engine.setPaused(!engine.paused)}>{engine.paused ? 'Paused' : 'Running'}</button>
              </div>
              <div className="set-field"><span>Pause outbound email</span>
                <button className={`set-toggle${engine.pauseOutbound ? ' on' : ''}`} onClick={() => engine.setPauseOutbound(!engine.pauseOutbound)}>{engine.pauseOutbound ? 'Paused' : 'Active'}</button>
              </div>
            </section>
          )}

          {section === 'about' && (
            <section className="set-sec">
              <h3>About</h3>
              <p className="set-lead">DojoBuro — found and run a company with a team of AI agents. Local-first; your data stays in your browser.</p>
              <div className="set-field"><span>Build</span><b className="set-static">v{BUILD_ID}</b></div>
              <a className="set-link" href="/guide" onClick={close}>Open the Dojo Guide →</a>
              <a className="set-link" href="/terms" onClick={close}>Terms</a>
              <a className="set-link" href="/privacy" onClick={close}>Privacy</a>
            </section>
          )}
        </div>
      </div>
    </div>,
    document.body,
  )
}
