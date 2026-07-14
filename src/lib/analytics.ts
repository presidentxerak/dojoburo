// Analytics engine · 100% local. Reads the Finance + CRM projects already in
// IndexedDB and computes business metrics (CAC, LTV, LTV:CAC, ROI, growth,
// conversion), then EXPLAINS them in plain language with recommendations · not
// just charts. No server; templated insight rules run in the browser.
import { type Txn, totals, byMonth, byCategory, sampleTxns } from './finance'
import { type Contact, stats as crmStats, sampleContacts } from './crm'
import { loadCrm } from './crm'
import { allTransactions } from './ledger'

export interface Assumptions { lifetime: number; margin: number } // repeat factor, gross margin 0..1
export const DEFAULT_ASSUMPTIONS: Assumptions = { lifetime: 3, margin: 0.7 }

export interface Metrics {
  revenue: number; result: number; marketing: number
  newCustomers: number; avgDeal: number
  cac: number; ltv: number; ltvCac: number; roi: number
  growth: number; conversion: number
  months: { month: string; income: number }[]
  hasData: boolean
}

export function compute(txns: Txn[], contacts: Contact[], a: Assumptions): Metrics {
  const t = totals(txns)
  const months = byMonth(txns).map((m) => ({ month: m.month, income: m.income }))
  const marketing = byCategory(txns).find((c) => c.category === 'Marketing')?.total ?? 0
  const cs = crmStats(contacts)
  const won = contacts.filter((c) => c.stage === 'gagne')
  const newCustomers = won.length
  const wonValue = won.reduce((n, c) => n + c.value, 0)
  const avgDeal = newCustomers ? wonValue / newCustomers : 0
  const cac = newCustomers ? marketing / newCustomers : 0
  const ltv = avgDeal * a.lifetime * a.margin
  const ltvCac = cac ? ltv / cac : 0
  const roi = marketing ? (wonValue - marketing) / marketing : 0
  const n = months.length
  const growth = n >= 2 && months[n - 2].income ? (months[n - 1].income - months[n - 2].income) / months[n - 2].income : 0
  return {
    revenue: t.revenus, result: t.resultat, marketing,
    newCustomers, avgDeal, cac, ltv, ltvCac, roi,
    growth, conversion: cs.conversion, months,
    hasData: txns.length > 0 || contacts.length > 0,
  }
}

export type Tone = 'good' | 'warn' | 'bad' | 'info'
export interface Insight { tone: Tone; title: string; text: string }

const eur = (n: number) => `${Math.round(n).toLocaleString('fr-FR')} €`
const pct = (n: number) => `${Math.round(n * 100)}%`

/** The "AI explains the data" layer · reads the metrics and writes guidance. */
export function insights(m: Metrics): Insight[] {
  const out: Insight[] = []

  if (m.ltvCac > 0 || m.cac > 0) {
    if (m.ltvCac >= 3) out.push({ tone: 'good', title: 'Highly profitable acquisition', text: `Each customer costs ${eur(m.cac)} (CAC) and returns ~${eur(m.ltv)} (LTV): an LTV:CAC ratio of ${m.ltvCac.toFixed(1)}×. Above 3×, you can confidently scale up your marketing spend.` })
    else if (m.ltvCac >= 1) out.push({ tone: 'warn', title: 'Acquisition to watch', text: `Your LTV:CAC ratio is ${m.ltvCac.toFixed(1)}× (CAC ${eur(m.cac)}, LTV ${eur(m.ltv)}). It's profitable but fragile · aim for 3× by increasing customer value (upsell, retention) or lowering the acquisition cost.` })
    else out.push({ tone: 'bad', title: 'You are losing money per customer', text: `Your CAC (${eur(m.cac)}) exceeds LTV (${eur(m.ltv)}): a ratio of ${m.ltvCac.toFixed(1)}×. Cut inefficient ad spend and raise the average order value (currently ${eur(m.avgDeal)}) before scaling.` })
  }

  if (m.marketing > 0) {
    if (m.roi >= 1) out.push({ tone: 'good', title: 'Positive marketing ROI', text: `Your ${eur(m.marketing)} in ads generated ${eur(m.roi * m.marketing + m.marketing)} in deals won · an ROI of ${pct(m.roi)}. Put more budget into the channels that are performing.` })
    else out.push({ tone: 'warn', title: 'Low marketing ROI', text: `For ${eur(m.marketing)} spent, the return is ${pct(m.roi)}. Test new audiences/creatives (Campaign Studio) and cut what isn't converting.` })
  }

  if (m.months.length >= 2) {
    if (m.growth > 0.05) out.push({ tone: 'good', title: 'Growth trending up', text: `Your revenue is up ${pct(m.growth)} over the last month. Keep the acquisition pace steady and secure your cash flow.` })
    else if (m.growth < -0.05) out.push({ tone: 'bad', title: 'Revenue declining', text: `Revenue is down ${pct(Math.abs(m.growth))} vs the previous month. Revive your pipeline (CRM) and re-engage existing customers before chasing new ones.` })
    else out.push({ tone: 'info', title: 'Stable growth', text: `Your revenue is stable (${pct(m.growth)}). A small marketing push or a price increase could unlock growth.` })
  }

  if (m.conversion > 0 || m.newCustomers > 0) {
    if (m.conversion >= 0.3) out.push({ tone: 'good', title: 'Strong conversion rate', text: `You convert ${pct(m.conversion)} of closed deals. Your sales pitch works · document it and replicate it.` })
    else out.push({ tone: 'warn', title: 'Conversion needs improvement', text: `Only ${pct(m.conversion)} of closed deals are won. Work on your follow-ups (outbound sequences) and qualify better upfront.` })
  }

  if (m.result < 0) out.push({ tone: 'bad', title: 'Negative net result', text: `You're spending more than you earn (${eur(m.result)}). Priority: cut non-essential costs and speed up collections.` })

  if (!out.length) out.push({ tone: 'info', title: 'Not enough data yet', text: 'Add your transactions (Finance) and leads (CRM) so I can analyze your profitability and growth.' })
  return out
}

/** Load the company's real data (app activity + manual), or samples for a demo. */
export async function loadData(dojoId: string, demo = false): Promise<{ txns: Txn[]; contacts: Contact[] }> {
  if (demo) return { txns: sampleTxns(), contacts: sampleContacts() }
  const [txns, c] = await Promise.all([allTransactions(dojoId), loadCrm(dojoId)])
  return { txns, contacts: c?.contacts ?? [] }
}
