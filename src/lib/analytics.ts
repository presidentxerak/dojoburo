// Analytics engine · 100% local. Reads the Finance + CRM projects already in
// IndexedDB and computes business metrics (CAC, LTV, LTV:CAC, ROI, croissance,
// conversion), then EXPLAINS them in plain language with recommendations — not
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

/** The "AI explains the data" layer — reads the metrics and writes guidance. */
export function insights(m: Metrics): Insight[] {
  const out: Insight[] = []

  if (m.ltvCac > 0 || m.cac > 0) {
    if (m.ltvCac >= 3) out.push({ tone: 'good', title: 'Acquisition très rentable', text: `Chaque client coûte ${eur(m.cac)} (CAC) et en rapporte ~${eur(m.ltv)} (LTV) : un ratio LTV:CAC de ${m.ltvCac.toFixed(1)}×. Au-dessus de 3×, tu peux accélérer sereinement les dépenses marketing.` })
    else if (m.ltvCac >= 1) out.push({ tone: 'warn', title: 'Acquisition à surveiller', text: `Ton ratio LTV:CAC est de ${m.ltvCac.toFixed(1)}× (CAC ${eur(m.cac)}, LTV ${eur(m.ltv)}). C'est rentable mais fragile — vise 3× en augmentant la valeur client (upsell, rétention) ou en baissant le coût d'acquisition.` })
    else out.push({ tone: 'bad', title: 'Tu perds de l’argent par client', text: `Ton CAC (${eur(m.cac)}) dépasse la LTV (${eur(m.ltv)}) : ratio ${m.ltvCac.toFixed(1)}×. Réduis les dépenses pub inefficaces et augmente le panier moyen (actuellement ${eur(m.avgDeal)}) avant de scaler.` })
  }

  if (m.marketing > 0) {
    if (m.roi >= 1) out.push({ tone: 'good', title: 'ROI marketing positif', text: `Tes ${eur(m.marketing)} de pub ont généré ${eur(m.roi * m.marketing + m.marketing)} de contrats gagnés — un ROI de ${pct(m.roi)}. Remets plus de budget sur les canaux qui performent.` })
    else out.push({ tone: 'warn', title: 'ROI marketing faible', text: `Pour ${eur(m.marketing)} dépensés, le retour est de ${pct(m.roi)}. Teste de nouvelles audiences/créas (Campaign Studio) et coupe ce qui ne convertit pas.` })
  }

  if (m.months.length >= 2) {
    if (m.growth > 0.05) out.push({ tone: 'good', title: 'Croissance en hausse', text: `Ton chiffre d'affaires progresse de ${pct(m.growth)} sur le dernier mois. Maintiens le rythme d'acquisition et sécurise la trésorerie.` })
    else if (m.growth < -0.05) out.push({ tone: 'bad', title: 'Chiffre d’affaires en baisse', text: `Le CA recule de ${pct(Math.abs(m.growth))} vs le mois précédent. Relance ton pipeline (CRM) et réactive les clients existants avant d'aller chercher du nouveau.` })
    else out.push({ tone: 'info', title: 'Croissance stable', text: `Ton CA est stable (${pct(m.growth)}). Un petit coup d'accélérateur marketing ou une hausse de prix pourrait débloquer la croissance.` })
  }

  if (m.conversion > 0 || m.newCustomers > 0) {
    if (m.conversion >= 0.3) out.push({ tone: 'good', title: 'Bon taux de conversion', text: `Tu convertis ${pct(m.conversion)} des affaires closes. Ton discours commercial fonctionne — documente-le et réplique-le.` })
    else out.push({ tone: 'warn', title: 'Conversion à améliorer', text: `Seulement ${pct(m.conversion)} des affaires closes sont gagnées. Travaille les relances (séquences outbound) et qualifie mieux en amont.` })
  }

  if (m.result < 0) out.push({ tone: 'bad', title: 'Résultat négatif', text: `Tu dépenses plus que tu ne gagnes (${eur(m.result)}). Priorité : réduire les coûts non essentiels et accélérer l'encaissement.` })

  if (!out.length) out.push({ tone: 'info', title: 'Pas encore assez de données', text: 'Ajoute tes transactions (Finance) et tes prospects (CRM) pour que j’analyse ta rentabilité et ta croissance.' })
  return out
}

/** Load the company's real data (app activity + manual), or samples for a demo. */
export async function loadData(dojoId: string, demo = false): Promise<{ txns: Txn[]; contacts: Contact[] }> {
  if (demo) return { txns: sampleTxns(), contacts: sampleContacts() }
  const [txns, c] = await Promise.all([allTransactions(dojoId), loadCrm(dojoId)])
  return { txns, contacts: c?.contacts ?? [] }
}
