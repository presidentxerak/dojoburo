import { useState } from 'react'
import { useDojo } from '../store'
import { useWorkshop } from '../workshop'
import { FullScreen } from './FullScreen'
import { useWork } from '../agents/workStore'
import { useEngine } from '../agents/engineStore'
import { useOutboundConsent } from '../agents/outboundConsent'
import { templateById } from '../data/templates'
import { BUILD_ID, forceFresh } from '../lib/build'

// Squarespace-style settings: a sidebar of sections + a content pane. Adapts to
// the active company/site (name, appearance, apps, autonomy).
//
// Billing and currency are NOT here. They were: a "Billing & credits" section
// whose only real control was a button that opened the actual billing surface,
// and a "Language & region" section whose only field was the currency those
// prices are shown in. Two doors to one room, and a founder looking for their
// credits had to guess which. Everything about money is in My Credits · Billing.
type Section = 'general' | 'appearance' | 'apps' | 'automation' | 'about'
const SECTIONS: { id: Section; label: string }[] = [
  { id: 'general', label: 'General' },
  { id: 'appearance', label: 'Appearance' },
  { id: 'apps', label: 'Connected apps' },
  { id: 'automation', label: 'Automation & safety' },
  { id: 'about', label: 'About' },
]


export function SettingsModal() {
  const open = useDojo((s) => s.settingsOpen)
  const close = () => useDojo.getState().setSettingsOpen(false)
  const theme = useDojo((s) => s.theme)
  const setTheme = useDojo((s) => s.setTheme)
  const account = useWorkshop((s) => s.account)
  const updateAccount = useWorkshop((s) => s.updateAccount)
  const dojo = useWorkshop((s) => s.dojos.find((d) => d.id === s.activeDojoId))
  const renameDojo = useWorkshop((s) => s.renameDojo)
  const openStudio = useWork((s) => s.openStudio)
  const engine = useEngine()
  const outboundConsented = useOutboundConsent((s) => s.consented)
  const resetOutboundConsent = useOutboundConsent((s) => s.reset)
  const [section, setSection] = useState<Section>('general')

  if (!open) return null
  const tpl = templateById(dojo?.template)
  const go = (t: 'billing' | 'studio') => { close(); openStudio(t) }

  return (
    <FullScreen title="Settings" sub="How the app behaves, looks and bills you." bodyClass="set-fs" onClose={close}>
      <div className="set-modal">
        <aside className="set-nav">
          {SECTIONS.map((s) => (
            <button key={s.id} className={`set-nav-item${section === s.id ? ' on' : ''}`} onClick={() => setSection(s.id)}>{s.label}</button>
          ))}
        </aside>
        <div className="set-body">

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

          {section === 'appearance' && (
            <section className="set-sec">
              <h3>Appearance</h3>
              <p className="set-lead">How the app looks.</p>
              <div className="set-field"><span>Display mode</span>
                <div className="set-seg">
                  <button className={theme === 'light' ? 'on' : ''} onClick={() => setTheme('light')}>Light</button>
                  <button className={theme === 'dark' ? 'on' : ''} onClick={() => setTheme('dark')}>Dark</button>
                </div>
              </div>
            </section>
          )}

          {section === 'apps' && (
            <section className="set-sec">
              <h3>Connected apps</h3>
              <p className="set-lead">Link the external tools your agents use (Meta, Gmail, Stripe, Notion…). Tokens are sealed server-side.</p>
              <button className="set-cta" onClick={() => go('studio')}>Manage connected apps →</button>
              <a className="set-link" href="#guide" onClick={close}>How to connect each app (Dojo Guide) →</a>
            </section>
          )}

          {section === 'automation' && (
            <section className="set-sec">
              <h3>Automation &amp; safety</h3>
              <p className="set-lead">How much your team does on its own, and the safety switches. Managed by Sentinel (Cyber Guardian).</p>
              <div className="set-field"><span>Daily spending limit</span>
                <input type="number" min={1} value={engine.dailyCreditCap} onChange={(e) => engine.setDailyCap(Number(e.target.value))} />
              </div>
              <div className="set-field"><span>Pause the company</span>
                <button className={`set-toggle${engine.paused ? ' on danger' : ''}`} onClick={() => engine.setPaused(!engine.paused)}>{engine.paused ? 'Paused' : 'Running'}</button>
              </div>
              <div className="set-field"><span>Pause outbound email</span>
                <button className={`set-toggle${engine.pauseOutbound ? ' on' : ''}`} onClick={() => engine.setPauseOutbound(!engine.pauseOutbound)}>{engine.pauseOutbound ? 'Paused' : 'Active'}</button>
              </div>
              <div className="set-field"><span>Confirm before outbound actions<em className="set-hint">Ask once before any send/post/broadcast. {outboundConsented ? 'Already confirmed for this browser.' : 'You will be asked on the first outbound action.'}</em></span>
                {outboundConsented
                  ? <button className="set-toggle on" onClick={() => resetOutboundConsent()}>Re-enable the prompt</button>
                  : <button className="set-toggle" disabled>Will ask once</button>}
              </div>
            </section>
          )}

          {section === 'about' && (
            <section className="set-sec">
              <h3>About</h3>
              <p className="set-lead">DojoBuro · found and run a company with a team of AI agents. Local-first; your data stays in your browser.</p>
              <div className="set-field"><span>Build</span><b className="set-static">{BUILD_ID}</b></div>
              {/* the escape hatch from a browser or CDN holding an old bundle ·
                  it moved here with the stamp when both left the menu */}
              <button className="set-cta" onClick={() => void forceFresh()}>↻ Get the latest version</button>
              <a className="set-link" href="#guide" onClick={close}>Open the Dojo Guide →</a>
              <a className="set-link" href="/terms" onClick={close}>Terms</a>
              <a className="set-link" href="/privacy" onClick={close}>Privacy</a>
            </section>
          )}
        </div>
      </div>
    </FullScreen>
  )
}
