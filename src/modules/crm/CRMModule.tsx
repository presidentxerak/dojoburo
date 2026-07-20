// CRM & Outbound · a local pipeline + outreach tool. Track leads across
// stages, import a CSV, generate personalised email sequences (template merge),
// and see pipeline stats · 100% in the browser, persisted in IndexedDB.
import { useEffect, useMemo, useRef, useState } from 'react'
import type { ModuleProps } from '../registry'
import { useDojo } from '../../store'
import { useWork } from '../../agents/workStore'
import { sendGmail, toolData } from '../../agents/workApi'
import {
  type Contact, type Stage, STAGES, TEMPLATES, stats, moveStage, setStage, merge, mailto,
  importCsv, exportCsv, newContact, sampleContacts, loadCrm, saveCrm, eur,
} from '../../lib/crm'
import { StudioNext } from '../StudioNext'
import { InfoDot } from '../../components/InfoDot'

export default function CRMModule({ dojoId }: ModuleProps) {
  const pushToast = useDojo((s) => s.pushToast)
  const [contacts, setContacts] = useState<Contact[]>([])
  const [sel, setSel] = useState<string | null>(null)
  const [tplId, setTplId] = useState(TEMPLATES[0].id)
  const [saved, setSaved] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    let alive = true
    void loadCrm(dojoId).then((p) => { if (alive && p) { setContacts(p.contacts); setSel(p.contacts[0]?.id ?? null) } })
    return () => { alive = false }
  }, [dojoId])

  // live HubSpot CRM (the user's own · read-only) · null until connected
  const [hs, setHs] = useState<{ contactsTotal: number; contacts: { name: string; email: string; company: string; stage: string }[]; deals: { count: number; pipeline: number } } | null>(null)
  useEffect(() => { let live = true; void toolData('hubspot').then((r) => { if (live && r.connected && r.data) setHs(r.data as typeof hs) }); return () => { live = false } }, [])

  const st = useMemo(() => stats(contacts), [contacts])
  const selc = contacts.find((c) => c.id === sel) || null
  const tpl = TEMPLATES.find((t) => t.id === tplId) || TEMPLATES[0]
  const msg = useMemo(() => (selc ? merge(tpl, selc) : null), [selc, tpl])

  const update = (id: string, p: Partial<Contact>) => setContacts((cs) => cs.map((c) => (c.id === id ? { ...c, ...p } : c)))
  const move = (id: string, dir: -1 | 1) => setContacts((cs) => cs.map((c) => (c.id === id ? moveStage(c, dir) : c)))
  const del = (id: string) => { setContacts((cs) => cs.filter((c) => c.id !== id)); if (sel === id) setSel(null) }
  const add = () => { const c = newContact(); setContacts((cs) => [c, ...cs]); setSel(c.id) }
  const loadSample = () => { const s = sampleContacts(); setContacts(s); setSel(s[0].id); pushToast({ kind: 'event', badge: 'AI', color: '#d98c17', title: 'Sample loaded', text: 'A demo pipeline.' }) }
  const doImport = async (f: File) => { const cs = importCsv(await f.text()); if (!cs.length) { pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Empty CSV', text: 'Columns: name, company, email.' }); return } setContacts((x) => [...cs, ...x]); pushToast({ kind: 'event', badge: 'OK', color: '#1fa563', title: `${cs.length} contacts imported`, text: 'Stored locally.' }) }
  const save = async () => { await saveCrm(dojoId, { contacts, updatedAt: Date.now() }); setSaved(true); pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'CRM saved', text: 'Saved locally (IndexedDB).' }) }
  const exportCsvFile = () => { const blob = new Blob([exportCsv(contacts)], { type: 'text/csv' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'crm.csv'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 4000) }
  const copyMsg = () => { if (msg) { void navigator.clipboard?.writeText(`${msg.subject}\n\n${msg.body}`); pushToast({ kind: 'event', badge: 'OK', color: '#d98c17', title: 'Message copied', text: 'Personalized and ready to send.' }) } }
  // Real Gmail send · appears when Gmail is connected. Uses the user's own inbox.
  const gmailOn = useWork((s) => !!s.tools['gmail']?.connected)
  const [sending, setSending] = useState(false)
  const doSendGmail = async () => {
    if (!selc || !msg || sending) return
    if (!selc.email) { pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'No email', text: 'Add this contact’s email first.' }); return }
    setSending(true)
    const r = await sendGmail(selc.email, msg.subject, msg.body)
    setSending(false)
    if (r.ok) {
      pushToast({ kind: 'event', badge: 'OK', color: '#1fa563', title: 'Email sent', text: `Sent to ${selc.email} from your Gmail.` })
      if (selc.stage === 'nouveau') update(selc.id, { stage: 'contacte' as Stage })
    } else {
      const map: Record<string, string> = { not_connected: 'Connect Gmail first (Connect apps).', no_backend: 'Email sending needs the server vault configured.', rate: 'Too many sends · wait a minute.', bad_to: 'Invalid recipient email.', send_failed: 'Gmail refused the send · reconnect Gmail.' }
      pushToast({ kind: 'event', badge: '!', color: '#e0483f', title: 'Not sent', text: map[r.error || ''] || 'Could not send the email.' })
    }
  }

  return (
    <div className="ad-body crm-mod">
      <header className="mod-intro">
        <h3 className="sq-title">CRM &amp; outbound
          <InfoDot title="CRM &amp; outbound" label="How the CRM works">
            <p>Track every lead across stages (new → contacted → won). Add leads manually or <b>import a CSV</b>; drag a lead through the pipeline as it progresses.</p>
            <p>Open a lead to generate <b>personalised outreach</b> that merges its name/company. Connect <b>Gmail</b> to send for real, or <b>HubSpot</b> to pull your live contacts and pipeline.</p>
            <p>Pipeline value, conversion rate and won revenue are computed live and flow into Finance &amp; Analytics.</p>
          </InfoDot>
        </h3>
        <p className="sq-lead">Track leads across stages, import a CSV, and generate personalised outreach that merges each contact's details. Pipeline value, conversion and won revenue · all local.</p>
      </header>

      {/* live HubSpot CRM · appears when HubSpot is connected */}
      {hs && (
        <div className="crm-hs">
          <div className="crm-hs-head"><b>HubSpot · live</b> <span className="cred-live-dot" /></div>
          <div className="biz-overview">
            <div className="biz-tile"><span>{hs.contactsTotal.toLocaleString('en-US')}</span><em>contacts</em></div>
            <div className="biz-tile"><span>{hs.deals.count}</span><em>open deals</em></div>
            <div className="biz-tile"><span>{eur(hs.deals.pipeline)}</span><em>pipeline value</em></div>
          </div>
          {!!hs.contacts.length && (
            <ul className="crm-hs-list">
              {hs.contacts.slice(0, 5).map((c, i) => (
                <li key={i}><b>{c.name}</b>{c.company && <span className="crm-hs-co">{c.company}</span>}{c.stage && <span className="crm-hs-stage">{c.stage}</span>}</li>
              ))}
            </ul>
          )}
        </div>
      )}
      <div className="site-toolbar">
        <div className="site-tb-actions">
          <button className="btn tiny" onClick={() => fileRef.current?.click()}>Import CSV</button>
          <button className="btn tiny ghost" onClick={loadSample}>Sample</button>
          <button className="btn tiny" onClick={add}>＋ Contact</button>
          <input ref={fileRef} type="file" accept=".csv,text/csv" hidden onChange={(e) => e.target.files?.[0] && void doImport(e.target.files[0])} />
        </div>
        <div className="site-tb-actions">
          <button className="btn tiny" onClick={exportCsvFile} disabled={!contacts.length}>Export</button>
          <button className="btn primary tiny" onClick={() => void save()} disabled={!contacts.length}>Save</button>
        </div>
      </div>

      {contacts.length === 0 ? (
        <div className="vid-empty" onClick={() => fileRef.current?.click()}>
          <strong>Import your leads (CSV)</strong>
          <span className="muted small">name, company, email · <button className="linklike" onClick={(e) => { e.stopPropagation(); loadSample() }}>or load a sample</button>.</span>
        </div>
      ) : (
        <>
          <div className="crm-stats">
            <div className="fin-kpi"><span>{st.total}</span><em>leads</em></div>
            <div className="fin-kpi"><span style={{ color: '#7b5cff' }}>{eur(st.weighted)}</span><em>weighted pipeline</em></div>
            <div className="fin-kpi"><span style={{ color: '#1fa563' }}>{eur(st.won)}</span><em>won</em></div>
            <div className="fin-kpi"><span>{Math.round(st.conversion * 100)}%</span><em>conversion</em></div>
          </div>

          {/* pipeline board */}
          <div className="crm-board">
            {STAGES.map((s) => (
              <div key={s.id} className="crm-col">
                <div className="crm-col-head" style={{ color: s.color }}>{s.label} <span>{st.byStage[s.id]}</span></div>
                {contacts.filter((c) => c.stage === s.id).map((c) => (
                  <div key={c.id} className={`crm-card${c.id === sel ? ' on' : ''}`} onClick={() => setSel(c.id)} style={{ ['--sc' as string]: s.color }}>
                    <b>{c.name}</b>
                    <em>{c.company || '·'}</em>
                    <div className="crm-card-foot"><span>{eur(c.value)}</span><span className="crm-move"><button onClick={(e) => { e.stopPropagation(); move(c.id, -1) }} aria-label="Move back">‹</button><button onClick={(e) => { e.stopPropagation(); move(c.id, 1) }} aria-label="Move forward">›</button></span></div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* contact editor */}
          {selc && (
            <div className="site-inspector">
              <h4 className="brand-h">Details · score {selc.score}</h4>
              <div className="crm-edit">
                <label className="site-field"><span>Name</span><input value={selc.name} onChange={(e) => update(selc.id, { name: e.target.value })} /></label>
                <label className="site-field"><span>Company</span><input value={selc.company} onChange={(e) => update(selc.id, { company: e.target.value })} /></label>
                <label className="site-field"><span>Email</span><input value={selc.email} onChange={(e) => update(selc.id, { email: e.target.value })} /></label>
                <label className="site-field"><span>Value (€)</span><input type="number" value={selc.value} onChange={(e) => update(selc.id, { value: Number(e.target.value) || 0 })} /></label>
                <label className="site-field"><span>Stage</span><select value={selc.stage} onChange={(e) => { const nc = setStage(selc, e.target.value as Stage); update(selc.id, { stage: nc.stage, score: nc.score, wonAt: nc.wonAt }) }}>{STAGES.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}</select></label>
                <button className="btn tiny ghost crm-del" onClick={() => del(selc.id)}>Delete</button>
              </div>
              <label className="site-field"><span>Notes</span><textarea rows={2} value={selc.note} onChange={(e) => update(selc.id, { note: e.target.value })} /></label>

              {/* outbound composer */}
              <h4 className="brand-h">Outbound sequence</h4>
              <div className="crm-seq">
                {TEMPLATES.map((t) => <button key={t.id} className={`camp-vchip${tplId === t.id ? ' on' : ''}`} onClick={() => setTplId(t.id)}>{t.label}</button>)}
              </div>
              {msg && (
                <div className="crm-mail">
                  <div className="crm-mail-sub"><b>Subject:</b> {msg.subject}</div>
                  <pre className="crm-mail-body">{msg.body}</pre>
                  <div className="crm-mail-actions">
                    {gmailOn
                      ? <button className="btn tiny primary" disabled={sending || !selc.email} onClick={() => void doSendGmail()}>{sending ? 'Sending…' : 'Send via Gmail'}</button>
                      : <button className="btn tiny" onClick={() => { location.hash = 'connect' }} title="Connect Gmail to send from the app">Connect Gmail to send</button>}
                    <button className="btn tiny ghost" onClick={copyMsg}>Copy</button>
                    <a className="btn tiny ghost" href={mailto(selc, msg.subject, msg.body)}>Open in email</a>
                  </div>
                </div>
              )}
            </div>
          )}
          <p className="muted small">Pipeline + outreach, 100% local. Personalize with {'{{prenom}}'} / {'{{entreprise}}'}. Connect Gmail (Connect apps) for automated sending.</p>
          {saved && <StudioNext from="pumpi" done="Pipeline saved." />}
        </>
      )}
    </div>
  )
}
