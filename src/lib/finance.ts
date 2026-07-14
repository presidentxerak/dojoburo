// Finance engine · 100% local. Parse a CSV of transactions in the browser,
// categorise them, and compute every KPI (revenue, expenses, cash, VAT,
// forecast) · no server, nothing uploaded. Data persists in IndexedDB.
import { idbGet, idbSet } from './idb'

export interface Txn { id: string; date: string; label: string; amount: number; category: string; source?: 'app' | 'csv' | 'manual' }
export interface FinanceProject { txns: Txn[]; vatRate: number; updatedAt: number }

export const CATEGORIES = ['Sales', 'Software', 'Marketing', 'Payroll', 'Rent', 'Bank fees', 'Taxes & VAT', 'Purchases', 'Other'] as const
export const CAT_COLOR: Record<string, string> = {
  Sales: '#1fa563', Software: '#2f7fd6', Marketing: '#e0459b', Payroll: '#7b5cff',
  Rent: '#d98c17', 'Bank fees': '#0e9bb5', 'Taxes & VAT': '#e0483f', Purchases: '#e07a2a', Other: '#5b6472',
}

const uid = () => `t_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`

// keyword → category rules (expenses); positive amounts default to Sales
const RULES: [RegExp, string][] = [
  [/stripe|paypal|vente|invoice|facture|client|sales/i, 'Sales'],
  [/aws|google|figma|notion|slack|saas|software|logiciel|abonnement|subscription|adobe|vercel|openai|anthropic/i, 'Software'],
  [/meta|facebook|instagram|google ads|ads|pub|campaign|marketing/i, 'Marketing'],
  [/salaire|payroll|paie|wage|urssaf|freelance/i, 'Payroll'],
  [/loyer|rent|bureau|office/i, 'Rent'],
  [/frais|bank|banque|commission|agios|fee/i, 'Bank fees'],
  [/tva|impot|impôt|tax|vat/i, 'Taxes & VAT'],
  [/amazon|fourniture|achat|supplier|material/i, 'Purchases'],
]
export function categorize(label: string, amount: number): string {
  if (amount > 0) return 'Sales'
  for (const [re, cat] of RULES) if (re.test(label)) return cat
  return 'Other'
}

// ---- CSV parsing -----------------------------------------------------------
function parseAmount(raw: string): number {
  let s = raw.replace(/[^\d.,\-]/g, '').trim()
  if (!s) return 0
  const lastComma = s.lastIndexOf(','), lastDot = s.lastIndexOf('.')
  if (lastComma > lastDot) s = s.replace(/\./g, '').replace(',', '.')   // FR: 1.234,56
  else s = s.replace(/,/g, '')                                          // US: 1,234.56
  const n = parseFloat(s)
  return Number.isFinite(n) ? n : 0
}
function parseDate(raw: string): string {
  const s = raw.trim()
  let m = s.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})/)
  if (m) return `${m[1]}-${m[2].padStart(2, '0')}-${m[3].padStart(2, '0')}`
  m = s.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{2,4})/)
  if (m) { const y = m[3].length === 2 ? '20' + m[3] : m[3]; return `${y}-${m[2].padStart(2, '0')}-${m[1].padStart(2, '0')}` }
  return s.slice(0, 10)
}
function splitLine(line: string, delim: string): string[] {
  const out: string[] = []; let cur = '', q = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (c === '"') { if (q && line[i + 1] === '"') { cur += '"'; i++ } else q = !q }
    else if (c === delim && !q) { out.push(cur); cur = '' }
    else cur += c
  }
  out.push(cur); return out
}
/** Parse a CSV string into transactions. Detects delimiter + common columns. */
export function parseCsv(text: string): Txn[] {
  const lines = text.split(/\r?\n/).filter((l) => l.trim())
  if (!lines.length) return []
  const delim = (lines[0].match(/;/g)?.length || 0) > (lines[0].match(/,/g)?.length || 0) ? ';' : ','
  const header = splitLine(lines[0], delim).map((h) => h.toLowerCase().trim())
  const looksHeader = header.some((h) => /date|libell|label|desc|montant|amount|débit|debit|crédit|credit/.test(h))
  const col = (keys: string[]) => header.findIndex((h) => keys.some((k) => h.includes(k)))
  const iDate = col(['date']), iLabel = col(['libell', 'label', 'desc', 'nature', 'objet'])
  const iAmt = col(['montant', 'amount']), iDeb = col(['débit', 'debit']), iCred = col(['crédit', 'credit'])
  const rows = looksHeader ? lines.slice(1) : lines
  const txns: Txn[] = []
  for (const line of rows) {
    const f = splitLine(line, delim)
    if (f.length < 2) continue
    const date = parseDate(f[iDate >= 0 ? iDate : 0] || '')
    const label = (f[iLabel >= 0 ? iLabel : 1] || '').trim() || 'Transaction'
    let amount: number
    if (iAmt >= 0) amount = parseAmount(f[iAmt] || '0')
    else if (iDeb >= 0 || iCred >= 0) { const d = parseAmount(f[iDeb] || '0'); const c = parseAmount(f[iCred] || '0'); amount = c - Math.abs(d) }
    else amount = parseAmount(f[2] || '0')
    if (!amount && !label) continue
    txns.push({ id: uid(), date, label, amount, category: categorize(label, amount) })
  }
  return txns
}
export function toCsv(txns: Txn[]): string {
  const esc = (s: string) => (/[";,\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s)
  return ['date;label;amount;category', ...txns.map((t) => [t.date, esc(t.label), t.amount.toFixed(2), t.category].join(';'))].join('\n')
}

// ---- aggregations ----------------------------------------------------------
export interface Totals { revenus: number; depenses: number; resultat: number; tresorerie: number }
export function totals(txns: Txn[]): Totals {
  let revenus = 0, depenses = 0
  for (const t of txns) t.amount >= 0 ? (revenus += t.amount) : (depenses += -t.amount)
  return { revenus, depenses, resultat: revenus - depenses, tresorerie: revenus - depenses }
}
export interface MonthAgg { month: string; income: number; expense: number }
export function byMonth(txns: Txn[]): MonthAgg[] {
  const m = new Map<string, MonthAgg>()
  for (const t of txns) {
    const key = t.date.slice(0, 7) || '·'
    const a = m.get(key) ?? { month: key, income: 0, expense: 0 }
    t.amount >= 0 ? (a.income += t.amount) : (a.expense += -t.amount)
    m.set(key, a)
  }
  return [...m.values()].sort((a, b) => a.month.localeCompare(b.month))
}
export function byCategory(txns: Txn[]): { category: string; total: number }[] {
  const m = new Map<string, number>()
  for (const t of txns) if (t.amount < 0) m.set(t.category, (m.get(t.category) ?? 0) + -t.amount)
  return [...m.entries()].map(([category, total]) => ({ category, total })).sort((a, b) => b.total - a.total)
}
export interface Vat { collectee: number; deductible: number; solde: number }
export function vat(txns: Txn[], rate: number): Vat {
  const f = rate / (1 + rate)
  let collectee = 0, deductible = 0
  for (const t of txns) t.amount >= 0 ? (collectee += t.amount * f) : (deductible += -t.amount * f)
  return { collectee, deductible, solde: collectee - deductible }
}
/** Next-3-months net forecast from the average of the last 3 months. */
export function forecast(txns: Txn[]): { month: string; net: number }[] {
  const months = byMonth(txns)
  if (!months.length) return []
  const last3 = months.slice(-3)
  const avg = last3.reduce((n, m) => n + (m.income - m.expense), 0) / last3.length
  const [y, mo] = (months[months.length - 1].month.split('-').map(Number))
  const out: { month: string; net: number }[] = []
  for (let i = 1; i <= 3; i++) {
    const d = mo + i, yy = y + Math.floor((d - 1) / 12), mm = ((d - 1) % 12) + 1
    out.push({ month: `${yy}-${String(mm).padStart(2, '0')}`, net: avg })
  }
  return out
}

// ---- sample data (demo / no-CSV) ------------------------------------------
export function sampleTxns(): Txn[] {
  const base = 2026, rows: [string, string, number][] = []
  const months = [3, 4, 5, 6]
  for (const mo of months) {
    rows.push([`${base}-${String(mo).padStart(2, '0')}-05`, 'Stripe · subscription sales', 3200 + mo * 180])
    rows.push([`${base}-${String(mo).padStart(2, '0')}-12`, 'Client · services', 1500])
    rows.push([`${base}-${String(mo).padStart(2, '0')}-03`, 'AWS + Vercel (software)', -220])
    rows.push([`${base}-${String(mo).padStart(2, '0')}-08`, 'Meta Ads · campaign', -450])
    rows.push([`${base}-${String(mo).padStart(2, '0')}-01`, 'Office rent', -900])
    rows.push([`${base}-${String(mo).padStart(2, '0')}-28`, 'Bank fees', -35])
  }
  return rows.map(([date, label, amount]) => ({ id: uid(), date, label, amount, category: categorize(label, amount) }))
}

// ---- persistence -----------------------------------------------------------
const key = (d: string) => `finance.${d || 'default'}`
export async function loadFinance(dojoId: string): Promise<FinanceProject | null> { return (await idbGet<FinanceProject>('projects', key(dojoId))) ?? null }
export async function saveFinance(dojoId: string, p: FinanceProject): Promise<void> { await idbSet('projects', key(dojoId), { ...p, updatedAt: Date.now() }) }
export const eur = (n: number) => `${n < 0 ? '-' : ''}${Math.abs(Math.round(n)).toLocaleString('fr-FR')} €`
