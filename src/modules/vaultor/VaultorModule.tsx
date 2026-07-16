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
// same selection ladder as the landing pricing, so the in-app top-up matches it
const CREDIT_OPTIONS = [30, 60, 120, 240, 480, 960, 1200, 1600, 2000]

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
  const [sel, setSel] = useState(120)

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

      {/* landing-style selection + payment · pick an amount, see the price, pay by card */}
      <div className="cred-buy">
        <div className="cred-buy-card">
          <div className="cred-buy-head">
            <span className="cred-buy-name">Credits</span>
            <span className="cred-buy-price">{CREDIT_SYM[fiatCur]}{sel * (CREDIT_UNIT[fiatCur] ?? 1)}<small> one-off</small></span>
          </div>
          <div className="cred-buy-amt">
            <span>{sel} credits</span>
            <select className="lp-credit-select" value={sel} onChange={(e) => setSel(Number(e.target.value))} aria-label="Credits to buy">
              {CREDIT_OPTIONS.map((c) => <option key={c} value={c}>{c} credits</option>)}
            </select>
          </div>
          <input className="cred-buy-range" type="range" min={0} max={CREDIT_OPTIONS.length - 1} value={CREDIT_OPTIONS.indexOf(sel) < 0 ? 2 : CREDIT_OPTIONS.indexOf(sel)} onChange={(e) => setSel(CREDIT_OPTIONS[Number(e.target.value)])} />
          <button className="cred-buy-cta" disabled={buying} onClick={() => void buyCredits(sel)}>{buying ? 'Starting payment…' : `Buy ${sel} credits · ${CREDIT_SYM[fiatCur]}${sel * (CREDIT_UNIT[fiatCur] ?? 1)}`}</button>
          <span className="cred-buy-note">Secure card payment · powered by Stripe</span>
        </div>
        <div className="cred-buy-quick">
          <span className="cred-buy-quick-h">Quick packs</span>
          {CREDIT_PACKS.map((c) => (
            <button key={c} className="cred-pack" disabled={buying} onClick={() => { setSel(c); void buyCredits(c) }}>
              <span>{c} credits</span>
              <em>{CREDIT_SYM[fiatCur]}{c * (CREDIT_UNIT[fiatCur] ?? 1)}</em>
            </button>
          ))}
        </div>
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
