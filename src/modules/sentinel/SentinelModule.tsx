// Sentinel · Operations Guardian · autonomy tuning, budget/anti-loop limits,
// encrypted environment variables (with team roles + audit trail), and the
// company safety switches. All local or server-vault; keeps the AI efficient,
// secure and under control.
import { useEffect, useState } from 'react'
import type { ModuleProps } from '../registry'
import { useDojo } from '../../store'
import { useWorkshop } from '../../workshop'
import { useEngine, AUTONOMY_CAP, AUTONOMY_LABEL, type Autonomy } from '../../agents/engineStore'
import { useSecrets } from '../../agents/secretsStore'
import {
  listSecrets, saveSecret as apiSaveSecret, removeSecret as apiRemoveSecret,
  listSecretAudit, listTeam, addTeamMember, removeTeamMember,
  type ServerSecret, type VaultRole, type TeamMember, type AuditEvent,
} from '../../agents/workApi'

export default function SentinelModule({ dojoId }: ModuleProps) {
  const pushToast = useDojo((s) => s.pushToast)
  const engine = useEngine()
  const dojoName = useWorkshop((s) => s.dojos.find((d) => d.id === dojoId)?.name || 'Dojo')

  const localSecrets = useSecrets((s) => s.byDojo[dojoId] ?? [])
  const addLocalSecret = useSecrets((s) => s.add)
  const removeLocalSecret = useSecrets((s) => s.remove)
  const [secMode, setSecMode] = useState<'loading' | 'server' | 'local'>('loading')
  const [serverSecrets, setServerSecrets] = useState<ServerSecret[]>([])
  const [vaultRole, setVaultRole] = useState<VaultRole>('owner')
  const [secKey, setSecKey] = useState('')
  const [secVal, setSecVal] = useState('')
  const [secDesc, setSecDesc] = useState('')
  const [secBusy, setSecBusy] = useState(false)

  // team roles + audit trail (server vault only)
  const [team, setTeam] = useState<TeamMember[]>([])
  const [claimReady, setClaimReady] = useState(false)
  const [audit, setAudit] = useState<AuditEvent[]>([])
  const [memberInput, setMemberInput] = useState('')
  const [memberRole, setMemberRole] = useState<'admin' | 'viewer'>('viewer')
  const [teamBusy, setTeamBusy] = useState(false)

  useEffect(() => {
    let cancelled = false
    if (!dojoId) { setSecMode('local'); return }
    setSecMode('loading')
    void listSecrets(dojoId).then((r) => {
      if (cancelled) return
      setSecMode(r.backend ? 'server' : 'local')
      setServerSecrets(r.secrets)
      setVaultRole(r.role)
      if (r.backend) {
        void listTeam(dojoId).then((t) => { if (!cancelled) { setTeam(t.members); setClaimReady(t.claimReady) } })
        void listSecretAudit(dojoId).then((ev) => { if (!cancelled) setAudit(ev) })
      }
    })
    return () => { cancelled = true }
  }, [dojoId])

  const onServer = secMode === 'server'
  // Mirror the server's POSIX env-var name rule so the user sees exactly what
  // will be stored (Vercel does the same: KEYS are upper-snake-cased).
  const normName = (s: string) => s.trim().toUpperCase().replace(/[^A-Z0-9_]/g, '_').replace(/^([0-9])/, '_$1').slice(0, 48)
  const relTime = (iso?: string) => {
    if (!iso) return ''
    const t = new Date(iso).getTime(); if (Number.isNaN(t)) return ''
    const s = Math.max(0, Math.floor((Date.now() - t) / 1000))
    if (s < 60) return 'just now'
    if (s < 3600) return `${Math.floor(s / 60)}m ago`
    if (s < 86400) return `${Math.floor(s / 3600)}h ago`
    return `${Math.floor(s / 86400)}d ago`
  }
  // write-only display (Vercel-style): a saved value is never shown again,
  // not even its last characters · one uniform mask everywhere.
  const SECRET_MASK = '••••••••'
  const secretList = onServer
    ? serverSecrets.map((s) => ({ id: s.id, key: s.name, mask: SECRET_MASK, desc: s.description, when: relTime(s.updatedAt) }))
    : localSecrets.map((s) => ({ id: s.id, key: s.key, mask: SECRET_MASK, desc: s.desc, when: '' }))
  const nameHint = secKey.trim() && normName(secKey) !== secKey.trim().toUpperCase() ? normName(secKey) : ''
  const exists = secretList.some((s) => s.key === normName(secKey))

  const canEdit = !onServer || vaultRole !== 'viewer'

  const refreshVault = async () => {
    const l = await listSecrets(dojoId)
    setServerSecrets(l.secrets); setVaultRole(l.role)
    setAudit(await listSecretAudit(dojoId))
  }

  const saveSecret = async () => {
    if (!secKey.trim() || !secVal.trim() || !dojoId || secBusy) return
    setSecBusy(true)
    try {
      if (onServer) {
        const r = await apiSaveSecret(dojoId, secKey, secVal, secDesc)
        if (r.ok) { await refreshVault(); pushToast({ kind: 'event', badge: 'OK', color: '#0e9bb5', title: 'Secret encrypted', text: 'Sealed server-side (AES-256-GCM).' }) }
        else pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Failed', text: r.error === 'forbidden' ? 'Viewer access · only the owner or an admin can change secrets.' : 'Could not save the secret.' })
      } else {
        addLocalSecret(dojoId, secKey, secVal, secDesc)
        pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Secret saved (local)', text: 'Stored in your browser · no production key here.' })
      }
      setSecKey(''); setSecVal(''); setSecDesc('')
    } finally { setSecBusy(false) }
  }
  const deleteSecret = async (id: string) => {
    if (onServer) { const ok = await apiRemoveSecret(dojoId, id); if (ok) await refreshVault() }
    else removeLocalSecret(dojoId, id)
  }

  // ---- team roles ----------------------------------------------------------
  const addMember = async () => {
    const m = memberInput.trim()
    if (!m || teamBusy) return
    setTeamBusy(true)
    try {
      const r = await addTeamMember(dojoId, m, memberRole)
      if (r.ok) {
        const t = await listTeam(dojoId); setTeam(t.members); setClaimReady(t.claimReady)
        setMemberInput('')
        pushToast({ kind: 'event', badge: 'OK', color: '#5b6472', title: 'Teammate added', text: r.claimReady === false ? 'Seat saved · email claiming needs PRIVY_APP_SECRET configured.' : 'Send them the invite link · they sign in with Privy to claim the seat.' })
      } else {
        const map: Record<string, string> = {
          auth: 'Sign in again, then retry.', forbidden: 'Only the vault owner can manage the team.',
          bad_input: 'Enter a valid email (or a did:privy:… id).', too_many: 'Team is full for this dojo (20 seats).',
          no_backend: 'Team roles need the server (DATABASE_URL) configured.',
        }
        pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Not added', text: map[r.error || ''] || 'Could not add this teammate.' })
      }
    } finally { setTeamBusy(false) }
  }
  const dropMember = async (id: string) => {
    const ok = await removeTeamMember(dojoId, id)
    if (ok) { const t = await listTeam(dojoId); setTeam(t.members); setClaimReady(t.claimReady) }
  }
  const copyInvite = async () => {
    const name = btoa(unescape(encodeURIComponent(dojoName))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
    const link = `${location.origin}/#team=${dojoId}.${name}`
    try { await navigator.clipboard?.writeText(link) } catch { /* clipboard blocked */ }
    pushToast({ kind: 'event', badge: 'OK', color: '#5b6472', title: 'Invite link copied', text: 'Your teammate opens it, signs in with Privy, and their seat activates.' })
  }
  const actorLabel = (a: string) => a.startsWith('did:privy:') ? `privy:…${a.slice(-6)}` : a
  const relIso = (iso: string) => {
    const t = new Date(iso).getTime(); if (Number.isNaN(t)) return ''
    const s = Math.max(0, Math.floor((Date.now() - t) / 1000))
    if (s < 60) return 'just now'
    if (s < 3600) return `${Math.floor(s / 60)}m ago`
    if (s < 86400) return `${Math.floor(s / 3600)}h ago`
    return `${Math.floor(s / 86400)}d ago`
  }

  return (
    <div className="sentinel-mod sq">
      <div className="sq-eyebrow">Autonomy &amp; limits</div>
      <div className="tb-netseg eng-seg">
        {(['auto', 'low', 'medium', 'hard', 'ultra'] as Autonomy[]).map((a) => (
          <button key={a} className={engine.autonomy === a ? 'on' : ''} onClick={() => engine.setAutonomy(a)}>{AUTONOMY_LABEL[a]}</button>
        ))}
      </div>
      <div className="eng-row">
        <label>Daily credit cap
          <input type="number" min="1" value={engine.dailyCreditCap} onChange={(e) => engine.setDailyCap(Number(e.target.value))} />
        </label>
        <div className="eng-stat"><span>{engine.tasksToday}{AUTONOMY_CAP[engine.autonomy] === Infinity ? '' : ` / ${AUTONOMY_CAP[engine.autonomy]}`}</span><em>tasks today</em></div>
        <div className="eng-stat"><span>{engine.creditsToday} / {engine.dailyCreditCap}</span><em>credits today</em></div>
      </div>

      <div className="sq-eyebrow" style={{ marginTop: 14 }}>
        Environment variables · encrypted vault
        {onServer && vaultRole !== 'owner' && <span className="sec-roletag">{vaultRole === 'admin' ? 'Admin access' : 'Viewer access'}</span>}
      </div>
      {secMode === 'server' && (
        <p className="sec-ok">🔒 <b>Encrypted vault active.</b> Just like Vercel: values are sealed server-side with <b>AES-256-GCM</b>, decrypted only at run time for your agents, and <b>never shown again</b> after you save them. Re-save the same name to rotate a value.</p>
      )}
      {secMode === 'local' && (
        <p className="sec-warn">⚠️ <b>Server vault not configured</b> in this deployment (needs <code>DATABASE_URL</code> + <code>CONNECTOR_ENC_KEY</code>). Secrets stay <b>in your browser only</b> — safe for testing, but don't paste a real production key here.</p>
      )}
      {canEdit ? (
        <div className="sec-add">
          <div className="sec-keywrap">
            <input className="sec-key" placeholder="SERVICE_API_KEY" value={secKey} onChange={(e) => setSecKey(e.target.value.toUpperCase())} maxLength={48} />
            {nameHint && <span className="sec-keyhint">Stored as <code>{nameHint}</code></span>}
            {exists && !nameHint && <span className="sec-keyhint">Updates the existing <code>{normName(secKey)}</code></span>}
          </div>
          <input className="sec-val" type="password" autoComplete="off" placeholder="Secret value (write-only)" value={secVal} onChange={(e) => setSecVal(e.target.value)} />
          <input className="sec-desc" placeholder="Description (optional)" value={secDesc} onChange={(e) => setSecDesc(e.target.value)} maxLength={80} />
          <button className="btn tiny primary" disabled={!secKey.trim() || !secVal.trim() || secBusy} onClick={() => void saveSecret()}>{secBusy ? 'Encrypting…' : exists ? 'Update secret' : 'Add secret'}</button>
        </div>
      ) : (
        <p className="muted small">You have <b>viewer</b> access: you can see which variables exist and the audit trail, but only the owner or an admin can change them.</p>
      )}
      {secretList.length > 0 ? (
        <ul className="sec-list">
          {secretList.map((s) => (
            <li key={s.id}>
              <div className="sec-row-main">
                <code>{s.key}</code>
                <span className="sec-mask" title="Value is encrypted · never displayed">{s.mask}</span>
                {onServer && <span className="sec-tag">Encrypted</span>}
                {s.when && <span className="sec-when">· {s.when}</span>}
              </div>
              {s.desc && <span className="sec-note">{s.desc}</span>}
              {canEdit && <button className="sec-del" onClick={() => void deleteSecret(s.id)} aria-label={`Delete ${s.key}`}>Delete</button>}
            </li>
          ))}
        </ul>
      ) : (
        <p className="muted small">{secMode === 'loading' ? 'Loading…' : 'No environment variables yet. Add one — your agents read it at run time, exactly like a Vercel env var.'}</p>
      )}

      {/* ---- team roles · share this dojo's vault --------------------------- */}
      {onServer && (
        <>
          <div className="sq-eyebrow" style={{ marginTop: 14 }}>Team access</div>
          {vaultRole === 'owner' ? (
            <>
              <p className="muted small">
                Grant teammates access to this dojo's vault. <b>Admin</b> manages secrets · <b>Viewer</b> sees names and the audit trail.
                Seats are claimed by signing in with Privy — the invited email is verified against Privy, never trusted from the browser.
              </p>
              <div className="team-add-row">
                <input className="sec-key team-member-input" placeholder="teammate@company.com" value={memberInput} onChange={(e) => setMemberInput(e.target.value)} maxLength={200} />
                <select className="team-role-sel" value={memberRole} onChange={(e) => setMemberRole(e.target.value === 'admin' ? 'admin' : 'viewer')} aria-label="Role">
                  <option value="viewer">Viewer</option>
                  <option value="admin">Admin</option>
                </select>
                <button className="btn tiny primary" disabled={!memberInput.trim() || teamBusy} onClick={() => void addMember()}>{teamBusy ? 'Adding…' : 'Add teammate'}</button>
                <button className="btn tiny ghost" onClick={() => void copyInvite()} title="Copy the join link for this dojo">Copy invite link</button>
              </div>
              {!claimReady && team.some((m) => !m.claimed && !m.email.startsWith('did:privy:')) && (
                <p className="sec-warn">⚠️ Email seats can't be claimed yet: set <code>PRIVY_APP_SECRET</code> server-side so ownership of the invited email is verified via the Privy API.</p>
              )}
            </>
          ) : (
            <p className="muted small">Shared with you by the vault owner · your role: <b>{vaultRole}</b>.</p>
          )}
          {team.length > 0 && (
            <ul className="sec-list team-list">
              {team.map((m) => (
                <li key={m.id}>
                  <div className="sec-row-main">
                    <code>{m.email}</code>
                    <span className={`sec-tag team-role-${m.role}`}>{m.role}</span>
                    <span className="sec-when">· {m.claimed ? 'active' : 'invited · not claimed yet'}</span>
                  </div>
                  {vaultRole === 'owner' && <button className="sec-del" onClick={() => void dropMember(m.id)} aria-label={`Remove ${m.email}`}>Remove</button>}
                </li>
              ))}
            </ul>
          )}

          {/* ---- audit trail · who touched which secret ---------------------- */}
          {audit.length > 0 && (
            <>
              <div className="sq-eyebrow" style={{ marginTop: 14 }}>Vault activity</div>
              <ul className="sec-list audit-list">
                {audit.map((e, i) => (
                  <li key={i}>
                    <div className="sec-row-main">
                      <span className={`sec-tag audit-${e.action}`}>{e.action === 'save' ? 'saved' : e.action === 'remove' ? 'removed' : e.action}</span>
                      <code>{e.name}</code>
                      <span className="sec-when">· by {actorLabel(e.actor)} · {relIso(e.at)}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      )}

      <div className="sq-eyebrow" style={{ marginTop: 14 }}>Safety switches</div>
      <div className="sec-toggles">
        <label className="sec-toggle">
          <span><b>Pause outbound email</b><em>When paused, the company sends no email.</em></span>
          <button role="switch" aria-checked={engine.pauseOutbound} className={`tgl${engine.pauseOutbound ? ' on' : ''}`} onClick={() => engine.setPauseOutbound(!engine.pauseOutbound)}><span /></button>
        </label>
        <label className="sec-toggle">
          <span><b>Pause the company</b><em>No task runs while paused.</em></span>
          <button role="switch" aria-checked={engine.paused} className={`tgl danger${engine.paused ? ' on' : ''}`} onClick={() => engine.setPaused(!engine.paused)}><span /></button>
        </label>
      </div>
      {engine.paused && <p className="sec-paused">⏸ Company paused · tasks are blocked.</p>}
    </div>
  )
}
