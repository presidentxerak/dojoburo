// CRM & Outbound · a local pipeline + outreach tool. Track prospects across
// stages, import a CSV, generate personalised email sequences (template merge),
// and see pipeline stats — 100% in the browser, persisted in IndexedDB.
import { useEffect, useMemo, useRef, useState } from 'react'
import type { ModuleProps } from '../registry'
import { useDojo } from '../../store'
import {
  type Contact, type Stage, STAGES, TEMPLATES, stats, moveStage, setStage, merge, mailto,
  importCsv, exportCsv, newContact, sampleContacts, loadCrm, saveCrm, eur,
} from '../../lib/crm'

export default function CRMModule({ dojoId }: ModuleProps) {
  const pushToast = useDojo((s) => s.pushToast)
  const [contacts, setContacts] = useState<Contact[]>([])
  const [sel, setSel] = useState<string | null>(null)
  const [tplId, setTplId] = useState(TEMPLATES[0].id)
  const fileRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    let alive = true
    void loadCrm(dojoId).then((p) => { if (alive && p) { setContacts(p.contacts); setSel(p.contacts[0]?.id ?? null) } })
    return () => { alive = false }
  }, [dojoId])

  const st = useMemo(() => stats(contacts), [contacts])
  const selc = contacts.find((c) => c.id === sel) || null
  const tpl = TEMPLATES.find((t) => t.id === tplId) || TEMPLATES[0]
  const msg = useMemo(() => (selc ? merge(tpl, selc) : null), [selc, tpl])

  const update = (id: string, p: Partial<Contact>) => setContacts((cs) => cs.map((c) => (c.id === id ? { ...c, ...p } : c)))
  const move = (id: string, dir: -1 | 1) => setContacts((cs) => cs.map((c) => (c.id === id ? moveStage(c, dir) : c)))
  const del = (id: string) => { setContacts((cs) => cs.filter((c) => c.id !== id)); if (sel === id) setSel(null) }
  const add = () => { const c = newContact(); setContacts((cs) => [c, ...cs]); setSel(c.id) }
  const loadSample = () => { const s = sampleContacts(); setContacts(s); setSel(s[0].id); pushToast({ kind: 'event', badge: 'IA', color: '#d98c17', title: 'Exemple chargé', text: 'Un pipeline de démonstration.' }) }
  const doImport = async (f: File) => { const cs = importCsv(await f.text()); if (!cs.length) { pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'CSV vide', text: 'Colonnes : nom, entreprise, email.' }); return } setContacts((x) => [...cs, ...x]); pushToast({ kind: 'event', badge: 'OK', color: '#1fa563', title: `${cs.length} contacts importés`, text: 'En local.' }) }
  const save = async () => { await saveCrm(dojoId, { contacts, updatedAt: Date.now() }); pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'CRM enregistré', text: 'Sauvegardé en local (IndexedDB).' }) }
  const exportCsvFile = () => { const blob = new Blob([exportCsv(contacts)], { type: 'text/csv' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'crm.csv'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 4000) }
  const copyMsg = () => { if (msg) { void navigator.clipboard?.writeText(`${msg.subject}\n\n${msg.body}`); pushToast({ kind: 'event', badge: 'OK', color: '#d98c17', title: 'Message copié', text: 'Personnalisé et prêt à envoyer.' }) } }

  return (
    <div className="ad-body crm-mod">
      <div className="site-toolbar">
        <div className="site-tb-actions">
          <button className="btn tiny" onClick={() => fileRef.current?.click()}>Importer CSV</button>
          <button className="btn tiny ghost" onClick={loadSample}>Exemple</button>
          <button className="btn tiny" onClick={add}>＋ Contact</button>
          <input ref={fileRef} type="file" accept=".csv,text/csv" hidden onChange={(e) => e.target.files?.[0] && void doImport(e.target.files[0])} />
        </div>
        <div className="site-tb-actions">
          <button className="btn tiny" onClick={exportCsvFile} disabled={!contacts.length}>Exporter</button>
          <button className="btn primary tiny" onClick={() => void save()} disabled={!contacts.length}>Enregistrer</button>
        </div>
      </div>

      {contacts.length === 0 ? (
        <div className="vid-empty" onClick={() => fileRef.current?.click()}>
          <strong>Importe tes prospects (CSV)</strong>
          <span className="muted small">nom, entreprise, email · <button className="linklike" onClick={(e) => { e.stopPropagation(); loadSample() }}>ou charge un exemple</button>.</span>
        </div>
      ) : (
        <>
          <div className="crm-stats">
            <div className="fin-kpi"><span>{st.total}</span><em>prospects</em></div>
            <div className="fin-kpi"><span style={{ color: '#7b5cff' }}>{eur(st.weighted)}</span><em>pipeline pondéré</em></div>
            <div className="fin-kpi"><span style={{ color: '#1fa563' }}>{eur(st.won)}</span><em>gagné</em></div>
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
                    <em>{c.company || '—'}</em>
                    <div className="crm-card-foot"><span>{eur(c.value)}</span><span className="crm-move"><button onClick={(e) => { e.stopPropagation(); move(c.id, -1) }} aria-label="Reculer">‹</button><button onClick={(e) => { e.stopPropagation(); move(c.id, 1) }} aria-label="Avancer">›</button></span></div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* contact editor */}
          {selc && (
            <div className="site-inspector">
              <h4 className="brand-h">Fiche · score {selc.score}</h4>
              <div className="crm-edit">
                <label className="site-field"><span>Nom</span><input value={selc.name} onChange={(e) => update(selc.id, { name: e.target.value })} /></label>
                <label className="site-field"><span>Entreprise</span><input value={selc.company} onChange={(e) => update(selc.id, { company: e.target.value })} /></label>
                <label className="site-field"><span>Email</span><input value={selc.email} onChange={(e) => update(selc.id, { email: e.target.value })} /></label>
                <label className="site-field"><span>Valeur (€)</span><input type="number" value={selc.value} onChange={(e) => update(selc.id, { value: Number(e.target.value) || 0 })} /></label>
                <label className="site-field"><span>Étape</span><select value={selc.stage} onChange={(e) => { const nc = setStage(selc, e.target.value as Stage); update(selc.id, { stage: nc.stage, score: nc.score, wonAt: nc.wonAt }) }}>{STAGES.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}</select></label>
                <button className="btn tiny ghost crm-del" onClick={() => del(selc.id)}>Supprimer</button>
              </div>
              <label className="site-field"><span>Notes</span><textarea rows={2} value={selc.note} onChange={(e) => update(selc.id, { note: e.target.value })} /></label>

              {/* outbound composer */}
              <h4 className="brand-h">Séquence outbound</h4>
              <div className="crm-seq">
                {TEMPLATES.map((t) => <button key={t.id} className={`camp-vchip${tplId === t.id ? ' on' : ''}`} onClick={() => setTplId(t.id)}>{t.label}</button>)}
              </div>
              {msg && (
                <div className="crm-mail">
                  <div className="crm-mail-sub"><b>Objet :</b> {msg.subject}</div>
                  <pre className="crm-mail-body">{msg.body}</pre>
                  <div className="crm-mail-actions">
                    <button className="btn tiny" onClick={copyMsg}>Copier</button>
                    <a className="btn tiny ghost" href={mailto(selc, msg.subject, msg.body)}>Ouvrir dans l’email</a>
                  </div>
                </div>
              )}
            </div>
          )}
          <p className="muted small">Pipeline + prospection 100% local. Personnalise via {'{{prenom}}'} / {'{{entreprise}}'}. Connecte Gmail (Studio) pour l’envoi automatisé.</p>
        </>
      )}
    </div>
  )
}
