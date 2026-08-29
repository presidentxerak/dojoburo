// Sentinel · Operations Guardian · autonomy tuning, budget/anti-loop limits,
// encrypted environment variables, and the company safety switches. All local
// or server-vault; keeps the AI efficient, secure and under control.
import { useEffect, useState } from 'react'
import type { ModuleProps } from '../registry'
import { useDojo } from '../../store'
import { useEngine, AUTONOMY_CAP, AUTONOMY_LABEL, type Autonomy } from '../../agents/engineStore'
import { useSecrets } from '../../agents/secretsStore'
import { listSecrets, saveSecret as apiSaveSecret, removeSecret as apiRemoveSecret, type ServerSecret } from '../../agents/workApi'
import { InfoDot } from '../../components/InfoDot'

export default function SentinelModule({ dojoId }: ModuleProps) {
  const pushToast = useDojo((s) => s.pushToast)
  const engine = useEngine()

  const localSecrets = useSecrets((s) => s.byDojo[dojoId] ?? [])
  const addLocalSecret = useSecrets((s) => s.add)
  const removeLocalSecret = useSecrets((s) => s.remove)
  const [secMode, setSecMode] = useState<'loading' | 'server' | 'local'>('loading')
  const [serverSecrets, setServerSecrets] = useState<ServerSecret[]>([])
  const [secKey, setSecKey] = useState('')
  const [secVal, setSecVal] = useState('')
  const [secDesc, setSecDesc] = useState('')
  const [secBusy, setSecBusy] = useState(false)

  useEffect(() => {
    let cancelled = false
    if (!dojoId) { setSecMode('local'); return }
    setSecMode('loading')
    void listSecrets(dojoId).then((r) => { if (cancelled) return; setSecMode(r.backend ? 'server' : 'local'); setServerSecrets(r.secrets) })
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
  const secretList = onServer
    ? serverSecrets.map((s) => ({ id: s.id, key: s.name, mask: s.preview, desc: s.description, when: relTime(s.updatedAt) }))
    : localSecrets.map((s) => ({ id: s.id, key: s.key, mask: '••••' + s.value.slice(-4), desc: s.desc, when: '' }))
  const nameHint = secKey.trim() && normName(secKey) !== secKey.trim().toUpperCase() ? normName(secKey) : ''
  const exists = secretList.some((s) => s.key === normName(secKey))

  const saveSecret = async () => {
    if (!secKey.trim() || !secVal.trim() || !dojoId || secBusy) return
    setSecBusy(true)
    try {
      if (onServer) {
        const r = await apiSaveSecret(dojoId, secKey, secVal, secDesc)
        if (r.ok) { const l = await listSecrets(dojoId); setServerSecrets(l.secrets); pushToast({ kind: 'event', badge: 'OK', color: '#0e9bb5', title: 'Secret encrypted', text: 'Sealed server-side (AES-256-GCM).' }) }
        else pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Failed', text: 'Could not save the secret.' })
      } else {
        addLocalSecret(dojoId, secKey, secVal, secDesc)
        pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Secret saved (local)', text: 'Stored in your browser · no production key here.' })
      }
      setSecKey(''); setSecVal(''); setSecDesc('')
    } finally { setSecBusy(false) }
  }
  const deleteSecret = async (id: string) => {
    if (onServer) { const ok = await apiRemoveSecret(dojoId, id); if (ok) { const l = await listSecrets(dojoId); setServerSecrets(l.secrets) } }
    else removeLocalSecret(dojoId, id)
  }

  return (
    <div className="sentinel-mod sq">
      <div className="sq-eyebrow">How much they do on their own
        <InfoDot title="Safety" label="Freedom &amp; spending">
          <p>This sets how much work your team can do <b>without asking you</b> each day. Pick a lighter setting while you get comfortable · your own manual launches are never limited.</p>
          <p>The <b>daily spending limit</b> caps what they can spend, and a built-in guard stops a teammate repeating the same thing over and over.</p>
          <p>Below, your <b>saved keys</b> are locked away on the server · the browser never sees them again. Use the switches to stop everything instantly.</p>
        </InfoDot>
      </div>
      <div className="tb-netseg eng-seg">
        {(['auto', 'low', 'medium', 'hard', 'ultra'] as Autonomy[]).map((a) => (
          <button key={a} className={engine.autonomy === a ? 'on' : ''} onClick={() => engine.setAutonomy(a)}>{AUTONOMY_LABEL[a]}</button>
        ))}
      </div>
      <div className="eng-row">
        <label>Daily spending limit
          <input type="number" min="1" value={engine.dailyCreditCap} onChange={(e) => engine.setDailyCap(Number(e.target.value))} />
        </label>
        <div className="eng-stat"><span>{engine.tasksToday}{AUTONOMY_CAP[engine.autonomy] === Infinity ? '' : ` / ${AUTONOMY_CAP[engine.autonomy]}`}</span><em>done today</em></div>
        <div className="eng-stat"><span>{engine.creditsToday} / {engine.dailyCreditCap}</span><em>credits used today</em></div>
      </div>

      <div className="sq-eyebrow" style={{ marginTop: 14 }}>Your saved keys</div>
      {secMode === 'server' && (
        <p className="sec-ok"><b>Locked away safely.</b> Values are sealed on the server, unlocked only while your team is working, and <b>never shown again</b> after you save them. Save the same name again to replace a value.</p>
      )}
      {secMode === 'local' && (
        <p className="sec-warn"><b>Secure storage is not set up here yet.</b> Keys stay <b>in this browser only</b> — fine for trying things out, but don't paste a real production key.</p>
      )}
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
              <button className="sec-del" onClick={() => void deleteSecret(s.id)} aria-label={`Delete ${s.key}`}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="muted small">{secMode === 'loading' ? 'Loading…' : 'No environment variables yet. Add one — your agents read it at run time, exactly like a Vercel env var.'}</p>
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
