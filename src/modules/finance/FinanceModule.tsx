// Finance & Compta · import a CSV of transactions (or load a sample), categorise,
// and see every KPI — revenus, dépenses, trésorerie, TVA, prévisions — computed
// 100% locally in the browser. Nothing is uploaded. Data persists in IndexedDB.
import { useEffect, useMemo, useRef, useState } from 'react'
import type { ModuleProps } from '../registry'
import { useDojo } from '../../store'
import {
  type Txn, CATEGORIES, CAT_COLOR, parseCsv, toCsv, totals, byMonth, byCategory, vat, forecast,
  sampleTxns, loadFinance, saveFinance, eur,
} from '../../lib/finance'
import { appTransactions } from '../../lib/ledger'

export default function FinanceModule({ dojoId }: ModuleProps) {
  const pushToast = useDojo((s) => s.pushToast)
  const [txns, setTxns] = useState<Txn[]>([])          // manual + imported (editable)
  const [appTxns, setAppTxns] = useState<Txn[]>([])    // from CRM sales + campaign budget (read-only)
  const [vatRate, setVatRate] = useState(0.2)
  const fileRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    let alive = true
    void Promise.all([loadFinance(dojoId), appTransactions(dojoId)]).then(([p, app]) => {
      if (!alive) return
      if (p) { setTxns(p.txns); setVatRate(p.vatRate) }
      setAppTxns(app)
    })
    return () => { alive = false }
  }, [dojoId])

  // the full picture = real app activity (CRM ventes, budgets pub) + manual/CSV
  const all = useMemo(() => [...appTxns, ...txns], [appTxns, txns])
  const tot = useMemo(() => totals(all), [all])
  const months = useMemo(() => byMonth(all), [all])
  const cats = useMemo(() => byCategory(all), [all])
  const tva = useMemo(() => vat(all, vatRate), [all, vatRate])
  const fc = useMemo(() => forecast(all), [all])
  const maxBar = Math.max(1, ...months.map((m) => Math.max(m.income, m.expense)))
  const hasAny = all.length > 0

  const importCsv = async (file: File) => {
    const text = await file.text()
    const parsed = parseCsv(text)
    if (!parsed.length) { pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'CSV vide', text: 'Aucune transaction reconnue. Colonnes attendues : date, libellé, montant.' }); return }
    setTxns((t) => [...parsed, ...t])
    pushToast({ kind: 'event', badge: 'OK', color: '#1fa563', title: `${parsed.length} transactions importées`, text: 'Analysées 100% en local.' })
  }
  const loadSample = () => { setTxns(sampleTxns()); pushToast({ kind: 'event', badge: 'IA', color: '#1fa563', title: 'Exemple chargé', text: 'Un jeu de démonstration pour explorer les tableaux.' }) }
  const setCat = (id: string, category: string) => setTxns((t) => t.map((x) => (x.id === id ? { ...x, category } : x)))
  const del = (id: string) => setTxns((t) => t.filter((x) => x.id !== id))
  const save = async () => { await saveFinance(dojoId, { txns, vatRate, updatedAt: Date.now() }); pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'Compta enregistrée', text: 'Sauvegardée en local (IndexedDB).' }) }
  const exportCsv = () => { const blob = new Blob([toCsv(txns)], { type: 'text/csv' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'compta.csv'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 4000) }

  return (
    <div className="ad-body fin-mod">
      <div className="site-toolbar">
        <div className="site-tb-actions">
          <button className="btn tiny" onClick={() => fileRef.current?.click()}>Importer CSV</button>
          <button className="btn tiny ghost" onClick={loadSample}>Exemple</button>
          <input ref={fileRef} type="file" accept=".csv,text/csv" hidden onChange={(e) => e.target.files?.[0] && void importCsv(e.target.files[0])} />
        </div>
        <div className="site-tb-actions">
          <button className="btn tiny" onClick={exportCsv} disabled={!all.length}>Exporter CSV</button>
          <button className="btn primary tiny" onClick={() => void save()} disabled={!txns.length}>Enregistrer</button>
        </div>
      </div>

      {appTxns.length > 0 && (
        <p className="fin-appnote">✓ <b>{appTxns.length} ligne(s) issues de l’app</b> — ventes gagnées dans le CRM et budgets de campagnes. Elles alimentent automatiquement ces chiffres.</p>
      )}

      {!hasAny ? (
        <div className="vid-empty" onClick={() => fileRef.current?.click()}>
          <strong>Importe ton relevé (CSV)</strong>
          <span className="muted small">date, libellé, montant · analysé <b>en local</b>, jamais envoyé. Ou <button className="linklike" onClick={(e) => { e.stopPropagation(); loadSample() }}>charge un exemple</button>.</span>
        </div>
      ) : (
        <>
          {/* KPIs */}
          <div className="fin-kpis">
            <div className="fin-kpi"><span style={{ color: '#1fa563' }}>{eur(tot.revenus)}</span><em>Revenus</em></div>
            <div className="fin-kpi"><span style={{ color: '#e0483f' }}>{eur(tot.depenses)}</span><em>Dépenses</em></div>
            <div className="fin-kpi"><span style={{ color: tot.resultat >= 0 ? '#1fa563' : '#e0483f' }}>{eur(tot.resultat)}</span><em>Résultat</em></div>
            <div className="fin-kpi"><span>{eur(tot.tresorerie)}</span><em>Trésorerie</em></div>
          </div>

          {/* monthly chart */}
          <h4 className="brand-h">Revenus / dépenses par mois</h4>
          <div className="fin-chart">
            {months.map((m) => (
              <div key={m.month} className="fin-bar-col" title={`${m.month} · +${eur(m.income)} / -${eur(m.expense)}`}>
                <div className="fin-bars">
                  <span className="fin-bar inc" style={{ height: `${(m.income / maxBar) * 100}%` }} />
                  <span className="fin-bar exp" style={{ height: `${(m.expense / maxBar) * 100}%` }} />
                </div>
                <em>{m.month.slice(5)}</em>
              </div>
            ))}
          </div>
          <div className="fin-legend"><span><i style={{ background: '#1fa563' }} /> Revenus</span><span><i style={{ background: '#e0483f' }} /> Dépenses</span></div>

          {/* categories + VAT + forecast */}
          <div className="fin-cols">
            <div>
              <h4 className="brand-h">Dépenses par catégorie</h4>
              {cats.length ? cats.map((c) => (
                <div key={c.category} className="fin-catrow">
                  <span className="fin-catname"><i style={{ background: CAT_COLOR[c.category] || '#888' }} />{c.category}</span>
                  <span className="fin-catbar"><span style={{ width: `${(c.total / (cats[0].total || 1)) * 100}%`, background: CAT_COLOR[c.category] || '#888' }} /></span>
                  <span className="fin-catval">{eur(c.total)}</span>
                </div>
              )) : <p className="muted small">Aucune dépense.</p>}
            </div>
            <div>
              <h4 className="brand-h">TVA <input className="fin-vat" type="number" min={0} max={30} value={Math.round(vatRate * 100)} onChange={(e) => setVatRate(Math.max(0, Number(e.target.value)) / 100)} />%</h4>
              <div className="fin-tva">
                <div><span>{eur(tva.collectee)}</span><em>TVA collectée</em></div>
                <div><span>{eur(tva.deductible)}</span><em>TVA déductible</em></div>
                <div><span style={{ color: tva.solde >= 0 ? '#e0483f' : '#1fa563' }}>{eur(tva.solde)}</span><em>{tva.solde >= 0 ? 'à payer' : 'crédit'}</em></div>
              </div>
              <h4 className="brand-h">Prévision (3 mois)</h4>
              <div className="fin-forecast">
                {fc.map((f) => <div key={f.month}><span style={{ color: f.net >= 0 ? '#1fa563' : '#e0483f' }}>{eur(f.net)}</span><em>{f.month.slice(5)}</em></div>)}
              </div>
            </div>
          </div>

          {/* transactions */}
          <h4 className="brand-h">Transactions ({all.length})</h4>
          <div className="fin-table">
            {all.slice(0, 200).map((t) => {
              const isApp = t.source === 'app'
              return (
                <div key={t.id} className={`fin-trow${isApp ? ' app' : ''}`}>
                  <span className="fin-date">{t.date.slice(5)}</span>
                  <span className="fin-label" title={t.label}>{isApp && <span className="fin-src">app</span>}{t.label}</span>
                  <span className="fin-amt" style={{ color: t.amount >= 0 ? '#1fa563' : '#e0483f' }}>{eur(t.amount)}</span>
                  {isApp ? (
                    <span className="fin-catchip" style={{ color: CAT_COLOR[t.category] || '#888' }}>{t.category}</span>
                  ) : (
                    <select value={t.category} onChange={(e) => setCat(t.id, e.target.value)}>{CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}</select>
                  )}
                  {isApp ? <span /> : <button className="fin-del" onClick={() => del(t.id)} aria-label="Supprimer">✕</button>}
                </div>
              )
            })}
          </div>
          <p className="muted small">Les lignes <b>app</b> viennent de tes ventes (CRM) et campagnes ; les autres de tes imports CSV. Analyse locale : rentabilité, TVA et prévision. Tout reste dans ton navigateur.</p>
        </>
      )}
    </div>
  )
}
