// Sentinel · Operations Guardian — autonomy tuning, budget/anti-loop limits,
// encrypted environment variables, and the company safety switches. All local
// or server-vault; keeps the AI efficient, secure and under control.
import { useEffect, useState } from 'react'
import type { ModuleProps } from '../registry'
import { useDojo } from '../../store'
import { useEngine, AUTONOMY_CAP, AUTONOMY_LABEL, type Autonomy } from '../../agents/engineStore'
import { useSecrets } from '../../agents/secretsStore'
import { listSecrets, saveSecret as apiSaveSecret, removeSecret as apiRemoveSecret, type ServerSecret } from '../../agents/workApi'

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
  const secretList = onServer
    ? serverSecrets.map((s) => ({ id: s.id, key: s.name, mask: s.preview, desc: s.description }))
    : localSecrets.map((s) => ({ id: s.id, key: s.key, mask: '••••' + s.value.slice(-4), desc: s.desc }))

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
        pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Secret saved (local)', text: 'Stored in your browser — no production key here.' })
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

      <div className="sq-eyebrow" style={{ marginTop: 14 }}>Encrypted environment variables</div>
      {secMode === 'server' && <p className="sec-ok">🔒 <b>Encrypted vault:</b> secrets are sealed server-side (AES-256-GCM).</p>}
      {secMode === 'local' && <p className="sec-warn">⚠️ <b>Server vault not configured</b> here: secrets stay <b>in your browser</b>. Don't paste a real production key.</p>}
      <div className="sec-add">
        <input className="sec-key" placeholder="SERVICE_API_KEY" value={secKey} onChange={(e) => setSecKey(e.target.value.toUpperCase())} maxLength={48} />
        <input className="sec-val" type="password" placeholder="Secret value" value={secVal} onChange={(e) => setSecVal(e.target.value)} />
        <input className="sec-desc" placeholder="Description (optional)" value={secDesc} onChange={(e) => setSecDesc(e.target.value)} maxLength={80} />
        <button className="btn tiny" disabled={!secKey.trim() || !secVal.trim() || secBusy} onClick={() => void saveSecret()}>{secBusy ? 'Saving…' : 'Save secret'}</button>
      </div>
      {secretList.length > 0 ? (
        <ul className="sec-list">
          {secretList.map((s) => (
            <li key={s.id}>
              <div className="sec-row-main"><code>{s.key}</code><span className="sec-mask">{s.mask}</span></div>
              {s.desc && <span className="sec-note">{s.desc}</span>}
              <button className="sec-del" onClick={() => void deleteSecret(s.id)} aria-label={`Delete ${s.key}`}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="muted small">{secMode === 'loading' ? 'Loading…' : 'No secrets yet. Add one to expose it to your agents as an environment variable.'}</p>
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
      {engine.paused && <p className="sec-paused">⏸ Company paused — tasks are blocked.</p>}
    </div>
  )
}
