// Accounting · the site's books, auto-built from real activity (CRM sales +
// campaign spend flow in via the ledger; manual/CSV entries add on top). Sales,
// costs, profit, cash balance, monthly P&L, category split and VAT — with a
// one-click .xlsx export. 100% local. No mock: empty until there's activity.
import { useEffect, useMemo, useState } from 'react'
import { useDojo } from '../../store'
import { type Txn, totals, byMonth, byCategory, vat, loadFinance, eur } from '../../lib/finance'
import { appTransactions } from '../../lib/ledger'
import { downloadXlsx } from '../../lib/xlsx'

export function Accounting({ dojoId }: { dojoId: string }) {
  const pushToast = useDojo((s) => s.pushToast)
  const [txns, setTxns] = useState<Txn[]>([])
  const [appTxns, setAppTxns] = useState<Txn[]>([])
  const [vatRate] = useState(0.2)

  useEffect(() => {
    let alive = true
    void Promise.all([loadFinance(dojoId), appTransactions(dojoId)]).then(([p, app]) => {
      if (!alive) return
      if (p) setTxns(p.txns)
      setAppTxns(app)
    })
    return () => { alive = false }
  }, [dojoId])

  const all = useMemo(() => [...appTxns, ...txns], [appTxns, txns])
  const tot = useMemo(() => totals(all), [all])
  const months = useMemo(() => byMonth(all), [all])
  const cats = useMemo(() => byCategory(all), [all])
  const tva = useMemo(() => vat(all, vatRate), [all, vatRate])
  const hasAny = all.length > 0
  const margin = tot.revenus > 0 ? Math.round((tot.resultat / tot.revenus) * 100) : 0

  const exportXlsx = () => {
    const summary: (string | number)[][] = [
      ['Accounting summary'], [],
      ['Metric', 'Amount (€)'],
      ['Sales (revenue)', Math.round(tot.revenus)],
      ['Costs (expenses)', Math.round(tot.depenses)],
      ['Profit (net)', Math.round(tot.resultat)],
      ['Net margin (%)', margin],
      ['Cash balance', Math.round(tot.tresorerie)],
      [], ['VAT'],
      ['VAT collected', Math.round(tva.collectee)],
      ['VAT deductible', Math.round(tva.deductible)],
      ['VAT balance (to pay)', Math.round(tva.solde)],
    ]
    const monthly: (string | number)[][] = [['Month', 'Income (€)', 'Expenses (€)', 'Net (€)'],
      ...months.map((m) => [m.month, Math.round(m.income), Math.round(m.expense), Math.round(m.income - m.expense)])]
    const categories: (string | number)[][] = [['Category', 'Total (€)'], ...cats.map((c) => [c.category, Math.round(c.total)])]
    const transactions: (string | number)[][] = [['Date', 'Label', 'Category', 'Amount (€)', 'Source'],
      ...all.map((t) => [t.date, t.label, t.category, Math.round(t.amount), t.source || 'manual'])]
    downloadXlsx([
      { name: 'Summary', rows: summary },
      { name: 'Monthly P&L', rows: monthly },
      { name: 'Categories', rows: categories },
      { name: 'Transactions', rows: transactions },
    ], `accounting-${(dojoId || 'dojo').slice(0, 12)}.xlsx`)
    pushToast({ kind: 'event', badge: 'OK', color: '#0e9bb5', title: 'Exported .xlsx', text: 'Your books downloaded as an Excel workbook.' })
  }

  return (
    <div className="acct">
      <div className="acct-head">
        <div>
          <h3 className="sq-title">Accounting</h3>
          <p className="sq-lead">Your books, built automatically from your dojo's activity — CRM sales and campaign spend flow in on their own. Add manual entries in <b>Business → Finance</b>.</p>
        </div>
        <button className="btn tiny" onClick={exportXlsx} disabled={!hasAny}>⬇ Export .xlsx</button>
      </div>

      {!hasAny ? (
        <div className="acct-empty">
          <b>0 · awaiting data</b>
          <p>No accounting activity yet. Win a deal in <b>Growth → Leads</b> or launch a campaign in <b>Marketing</b> and your sales &amp; costs appear here automatically.</p>
        </div>
      ) : (
        <>
          <div className="acct-kpis">
            <div className="acct-kpi pos"><span>Sales</span><b>{eur(tot.revenus)}</b></div>
            <div className="acct-kpi neg"><span>Costs</span><b>{eur(tot.depenses)}</b></div>
            <div className={`acct-kpi ${tot.resultat >= 0 ? 'pos' : 'neg'}`}><span>Profit</span><b>{eur(tot.resultat)}</b><em>{margin}% margin</em></div>
            <div className="acct-kpi"><span>Cash balance</span><b>{eur(tot.tresorerie)}</b></div>
          </div>

          <div className="acct-grid">
            <section className="acct-card">
              <h4>Monthly P&amp;L</h4>
              <div className="acct-tablewrap">
                <table className="acct-table">
                  <thead><tr><th>Month</th><th className="r">Income</th><th className="r">Expenses</th><th className="r">Net</th></tr></thead>
                  <tbody>
                    {months.map((m) => (
                      <tr key={m.month}><td>{m.month}</td><td className="r">{eur(m.income)}</td><td className="r">{eur(m.expense)}</td>
                        <td className={`r ${m.income - m.expense >= 0 ? 'up' : 'down'}`}>{eur(m.income - m.expense)}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="acct-card">
              <h4>By category</h4>
              <div className="acct-tablewrap">
                <table className="acct-table">
                  <thead><tr><th>Category</th><th className="r">Total</th></tr></thead>
                  <tbody>
                    {cats.map((c) => <tr key={c.category}><td>{c.category}</td><td className={`r ${c.total >= 0 ? 'up' : 'down'}`}>{eur(c.total)}</td></tr>)}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <section className="acct-card">
            <h4>VAT (balance sheet)</h4>
            <div className="acct-kpis">
              <div className="acct-kpi"><span>VAT collected</span><b>{eur(tva.collectee)}</b></div>
              <div className="acct-kpi"><span>VAT deductible</span><b>{eur(tva.deductible)}</b></div>
              <div className={`acct-kpi ${tva.solde >= 0 ? 'neg' : 'pos'}`}><span>VAT balance</span><b>{eur(tva.solde)}</b><em>{tva.solde >= 0 ? 'to pay' : 'credit'}</em></div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
