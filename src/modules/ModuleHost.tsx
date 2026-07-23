// Renders the active studio module as a FULLSCREEN overlay: a clean header that
// names the agent by its JOB SPECIALITY with the codename beside it, a "Connect
// apps" button and a close button, then the module itself. When the agent needs
// an external app to act for real (send email, publish, charge) and none is
// connected yet, the "Connect apps" button blinks and an info dot explains why.
// Live modules are bundled (no lazy chunk to 404).
import { useEffect, useMemo, useState } from 'react'
import { MODULE_BY_ID } from './registry'
import { ErrorBoundary } from '../components/ErrorBoundary'
import { StudioConnectors } from '../components/StudioConnectors'
import { ConnectorLogo } from '../components/ConnectorLogo'
import { ROLE_BY_ID, canonicalRole } from '../data/roleAgents'
import { CONNECTORS } from '../data/connectors'
import { useWork } from '../agents/workStore'
import { useAgentApps, effectiveApps } from '../agents/agentApps'

export function ModuleHost({ moduleId, dojoId, onClose }: { moduleId: string; dojoId: string; onClose: () => void }) {
  const def = MODULE_BY_ID[moduleId]
  const tools = useWork((s) => s.tools)
  const backend = useWork((s) => s.backend)
  const loadedOnce = useWork((s) => s.loadedOnce)
  const [showApps, setShowApps] = useState(false)
  const [addOpen, setAddOpen] = useState(false)
  // load connection status once so we know whether to blink the Connect button
  useEffect(() => { if (!loadedOnce) void useWork.getState().loadTools() }, [loadedOnce])

  const role = def ? ROLE_BY_ID[canonicalRole(def.agentRole)] : undefined
  const roleId = role?.id ?? ''
  // curated defaults for this agent (data/roleAgents) · the user can tailor them.
  const defaults = useMemo(() => role?.apps ?? [], [role])
  // per-agent overrides make the connector set fully modular · add any app from
  // the catalog, or remove a default you don't use. Persisted per dojo + agent.
  const ovKey = `${dojoId || 'default'}::${roleId}`
  const ov = useAgentApps((s) => s.byKey[ovKey])
  const setApp = useAgentApps((s) => s.setApp)
  const appIds = useMemo(() => effectiveApps(defaults, ov), [defaults, ov])
  const anyConnected = appIds.some((id) => tools[id]?.connected)
  // blink when the agent genuinely needs an app for full function and none is
  // linked · only when the deployment actually has a connector backend, so we
  // never nag on a build where connecting isn't possible.
  const needsConnect = !!def?.needsApps && backend && appIds.length > 0 && !anyConnected
  const appNames = appIds.slice(0, 4).map((id) => CONNECTORS.find((c) => c.id === id)?.label || id).join(', ')

  if (!def) return null

  return (
    <div className="modhost-fs" style={{ ['--dc' as string]: def.tint }}>
      <header className="modhost-bar">
        <div className="modhost-bar-l">
          <div>
            {/* JOB SPECIALITY · codename · one uniform title style for every agent */}
            <h2 className="modhost-name">{role?.title ?? def.label}{role && <span className="modhost-code">{role.code}</span>}</h2>
            <p className="modhost-blurb">{def.blurb}</p>
          </div>
        </div>
        <div className="modhost-bar-r">
          {/* Connect apps → toggles this agent's OWN apps inline (no page jump) */}
          <div className="modhost-connect-wrap">
            <button
              className={`modhost-connect${needsConnect && !showApps ? ' blink' : ''}${showApps ? ' on' : ''}`}
              onClick={() => setShowApps((v) => !v)}
              aria-expanded={showApps}
            >
              {showApps ? 'Hide apps' : 'Connect apps'}
            </button>
            {needsConnect && !showApps && (
              <span className="modhost-info" tabIndex={0} aria-label="Why connect an app?">
                i
                <span className="modhost-tip" role="tooltip">
                  <b>{role?.title} needs a connected app to act for real.</b> It works locally and
                  produces drafts, but to actually {role?.dept === 'Growth' ? 'send outreach & publish' : 'publish & send'} you
                  need to connect {appNames || 'an app'}. Click <b>Connect apps</b> to link one.
                </span>
              </span>
            )}
          </div>
          <span className="modhost-tag">{def.status === 'live' ? 'Local · serverless' : 'Coming soon'}</span>
          <button className="modhost-close" onClick={onClose} aria-label="Close studio">✕</button>
        </div>
      </header>

      {showApps && (
        <div className="modhost-apps">
          <div className="modhost-apps-head">
            <h3 className="sq-title">{role?.title ?? def.label}'s apps</h3>
            <button className="btn tiny ghost" onClick={() => setAddOpen((v) => !v)}>{addOpen ? 'Done' : '+ Add apps'}</button>
          </div>
          {addOpen ? (
            <>
              <p className="muted small" style={{ marginTop: 0 }}>Pick the tools this agent should work with. Toggle any app on or off · your choice is saved for this company.</p>
              <div className="modhost-catalog">
                {[...CONNECTORS].sort((a, b) => a.label.localeCompare(b.label)).map((c) => {
                  const on = appIds.includes(c.id)
                  return (
                    <button key={c.id} className={`custom-appchip${on ? ' on' : ''}`} title={c.blurb} onClick={() => setApp(dojoId, roleId, c.id, !on, defaults)}>
                      <ConnectorLogo id={c.id} label={c.label} size={18} />{c.label}
                    </button>
                  )
                })}
              </div>
            </>
          ) : appIds.length ? (
            <StudioConnectors appIds={appIds} compact onRemove={roleId ? (id) => setApp(dojoId, roleId, id, false, defaults) : undefined} />
          ) : (
            <p className="muted small" style={{ marginTop: 0 }}>No apps yet for this agent. Click <b>+ Add apps</b> to pick the tools it should use.</p>
          )}
        </div>
      )}

      <div className="modhost-body">
        {def.status === 'live' && def.comp ? (
          <ErrorBoundary label={def.label}>
            {/* keyed so the studio content re-plays its entrance on each open/switch */}
            <div className="modhost-anim" key={moduleId}>
              <def.comp onClose={onClose} dojoId={dojoId} />
            </div>
          </ErrorBoundary>
        ) : (
          <div className="ad-body">
            <p className="muted small" style={{ marginTop: 0 }}>This module is coming in a future iteration. On the roadmap:</p>
            <ul className="mod-planned">
              {(def.planned ?? []).map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
