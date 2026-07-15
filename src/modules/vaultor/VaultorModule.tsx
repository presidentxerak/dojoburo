// Vaultor · Billing Manager · credits, top-ups, subscription and payment. You
// buy credits in your own currency (no crypto), each task spends about one.
import { useState } from 'react'
import type { ModuleProps } from '../registry'
import { useWorkshop } from '../../workshop'
import { useWork } from '../../agents/workStore'
import { useEngine } from '../../agents/engineStore'
import { OfficeStats } from '../../components/OfficeStats'
import { Accounting } from './Accounting'

const CREDIT_UNIT: Record<string, number> = { USD: 1, EUR: 1, JPY: 150 }
const CREDIT_SYM: Record<string, string> = { USD: '$', EUR: '€', JPY: '¥' }
const CREDIT_PACKS = [30, 100, 500]

const TABS = [
  { id: 'billing', label: 'Billing', sub: 'Credits, top-ups & payments' },
  { id: 'accounting', label: 'Accounting', sub: 'Sales, costs, profit, VAT · .xlsx export' },
] as const

export default function VaultorModule({ dojoId }: ModuleProps) {
  const [tab, setTab] = useState<'billing' | 'accounting'>('billing')
  const account = useWorkshop((s) => s.account)
  const tools = useWork((s) => s.tools)
  const engine = useEngine()
  const [buying, setBuying] = useState(false)
  const [payMsg, setPayMsg] = useState('')

  const fiatCur = account?.currency && account.currency !== 'XRP' ? account.currency : 'USD'
  const connectedCount = Object.values(tools).filter((t) => (t as { connected?: boolean }).connected).length

  const buyCredits = async (credits: number) => {
    setBuying(true); setPayMsg('')
    try {
      const amount = credits * (CREDIT_UNIT[fiatCur] ?? 1)
      const res = await fetch('/api/checkout', {
        method: 'POST', headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ amount, currency: fiatCur, email: '', kind: 'credits', privyDid: account?.privyDid || '' }),
      })
      const j = await res.json().catch(() => ({}))
      if (j?.ok && j.url) { window.open(j.url as string, '_blank', 'noopener,noreferrer'); return }
      setPayMsg(j?.error === 'not_configured' ? 'Card payments are not enabled yet on this deployment.' : 'Could not start the payment. Please try again in a moment.')
    } catch { setPayMsg('Network error while starting the payment.') }
    finally { setBuying(false) }
  }

  return (
    <div className="vaultor-mod sq">
      <div className="sq-steps studio-switch">
        {TABS.map((t) => (
          <button key={t.id} className={`sq-step${tab === t.id ? ' on' : ''}`} onClick={() => setTab(t.id)} title={t.sub}>{t.label}</button>
        ))}
      </div>

      {tab === 'accounting' && <Accounting dojoId={dojoId} />}

      {tab === 'billing' && (<>
      <div className="sq-eyebrow">Top up credits</div>
      <p className="sq-lead">Buy credits in {fiatCur}. Each task spends about one credit; settlement happens behind the scenes · no crypto.</p>
      <div className="cred-packs">
        {CREDIT_PACKS.map((c) => (
          <button key={c} className="cred-pack" disabled={buying} onClick={() => void buyCredits(c)}>
            <span>{c} credits</span>
            <em>{CREDIT_SYM[fiatCur]}{c * (CREDIT_UNIT[fiatCur] ?? 1)}</em>
          </button>
        ))}
      </div>
      {payMsg && <p className="muted small">{payMsg}</p>}

      <div className="sq-eyebrow" style={{ marginTop: 14 }}>Usage</div>
      <div className="biz-overview">
        <div className="biz-tile"><span>{engine.creditsToday}</span><em>credits (today)</em></div>
        <div className="biz-tile"><span>{engine.dailyCreditCap}</span><em>daily cap</em></div>
        <div className="biz-tile"><span>{connectedCount}</span><em>connected apps</em></div>
      </div>
      <p className="muted small">Set your autonomy level and daily cap in <b>Sentinel</b> to keep spend under control.</p>

      {/* the office usage dashboard (moved here from the panda) */}
      <div style={{ marginTop: 18 }}><OfficeStats /></div>
      </>)}
    </div>
  )
}
