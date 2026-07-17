// Vaultor · Billing Manager · credits, top-ups, subscription and payment. You
// buy credits in your own currency (no crypto), each task spends about one.
import { useEffect, useState } from 'react'
import type { ModuleProps } from '../registry'
import { useWorkshop } from '../../workshop'
import { useWork } from '../../agents/workStore'
import { toolData } from '../../agents/workApi'
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
  // live Stripe data (balance + recent payments) · only returns to an admin
  // account when STRIPE_SECRET_KEY is set; degrades to nothing otherwise.
  const [stripe, setStripe] = useState<{ available?: { amount: number; currency: string }[]; pending?: { amount: number; currency: string }[]; payments?: { amount: number; currency: string; created: number; status: string; label: string }[] } | null>(null)
  useEffect(() => {
    let live = true
    void toolData('stripe').then((r) => { if (live && r.connected && r.data) setStripe(r.data as typeof stripe) })
    return () => { live = false }
  }, [])

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

      {/* live Stripe data · appears only for an admin account with Stripe configured */}
      {stripe && (
        <>
          <div className="sq-eyebrow" style={{ marginTop: 14 }}>Stripe · live <span className="cred-live-dot" /></div>
          <div className="biz-overview">
            {(stripe.available ?? []).slice(0, 1).map((b, i) => (
              <div key={`a${i}`} className="biz-tile"><span>{b.currency} {b.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span><em>available</em></div>
            ))}
            {(stripe.pending ?? []).slice(0, 1).map((b, i) => (
              <div key={`p${i}`} className="biz-tile"><span>{b.currency} {b.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span><em>pending</em></div>
            ))}
            <div className="biz-tile"><span>{stripe.payments?.length ?? 0}</span><em>recent payments</em></div>
          </div>
          {!!stripe.payments?.length && (
            <ul className="cred-pays">
              {stripe.payments.map((p, i) => (
                <li key={i}>
                  <span className="cred-pay-amt">{p.currency} {p.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                  <span className="cred-pay-label">{p.label}</span>
                  <span className={`cred-pay-status s-${p.status}`}>{p.status}</span>
                </li>
              ))}
            </ul>
          )}
        </>
      )}

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
