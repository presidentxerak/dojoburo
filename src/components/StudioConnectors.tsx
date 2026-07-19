// StudioConnectors · the in-studio "connect this agent's apps" grid. Every agent
// (the eight core plus the four group agents) gets its OWN curated app list here,
// connectable in place · no jumping to the full connectors page. Degrades to the
// Set-up guide link when the operator hasn't configured a connector yet.
import { useEffect } from 'react'
import { CONNECTOR_BY_ID } from '../data/connectors'
import { useWork } from '../agents/workStore'
import { startConnect } from '../agents/workApi'
import { ConnectorLogo } from './ConnectorLogo'

export function StudioConnectors({ appIds, compact }: { appIds: string[]; compact?: boolean }) {
  const tools = useWork((s) => s.tools)
  const backend = useWork((s) => s.backend)
  const loadedOnce = useWork((s) => s.loadedOnce)
  const loadTools = useWork((s) => s.loadTools)
  const disconnect = useWork((s) => s.disconnect)

  useEffect(() => { if (!loadedOnce) void loadTools() }, [loadedOnce, loadTools])

  const apps = appIds.map((id) => CONNECTOR_BY_ID[id]).filter(Boolean)
  if (apps.length === 0) return null
  const connectedCount = apps.filter((c) => tools[c.id]?.connected).length

  return (
    <div className="studio-apps">
      {!compact && (
        <div className="mission-head">
          <h3 className="sq-title">This agent's apps <span className="team-count">{connectedCount}/{apps.length}</span></h3>
          <span className="muted small">Connect one and this agent works inside it for real · draft the mail, open the PR, launch the campaign.</span>
        </div>
      )}
      <ul className="team-app-list">
        {apps.map((c) => {
          const st = tools[c.id]
          const connected = !!st?.connected
          const available = !!st?.available
          return (
            <li key={c.id} className={`team-app${connected ? ' on' : ''}`}>
              <ConnectorLogo id={c.id} label={c.label} size={30} />
              <span className="team-app-meta">
                <span className="team-app-name">{c.label}<em className="team-app-cat">{c.category}</em></span>
                <span className="team-app-blurb">{connected && st?.account ? `Connected · ${st.account}` : c.blurb}</span>
              </span>
              <span className="team-app-act">
                {connected ? (
                  <button className="btn tiny ghost" onClick={() => void disconnect(c.id)}>Disconnect</button>
                ) : available ? (
                  <button className="btn tiny" onClick={() => startConnect(c.id)}>Connect</button>
                ) : (
                  <a className="cx-setup" href={`/guide/${c.id}`} target="_blank" rel="noreferrer" title="See how to set this app up">Set up</a>
                )}
              </span>
            </li>
          )
        })}
      </ul>
      {loadedOnce && !backend && (
        <p className="muted small">Live OAuth needs the worker configured (<code>DATABASE_URL</code>, <code>CONNECTOR_ENC_KEY</code> and each app's keys). The Set-up link opens the provider console.</p>
      )}
    </div>
  )
}
