// Vaultor · Billing Manager · what the plan is, what has been used, what Stripe
// took, and the books.
//
// This tab used to be a SECOND shop: buy 30–2000 credits at a pound each, on
// its own ladder, with its own checkout. That was the pricing the product moved
// away from — the app sells the software now (Free, Founder at $29 with your own
// key, Managed at $49) and src/data/plans.ts is the single place that says so.
// Leaving a credit store here meant the same app quoted two different prices for
// the same thing, which is exactly the failure plans.ts was written to end.
//
// So there is one shop, on the Billing surface, and this reads from plans.ts and
// points at it.
import { useEffect, useState } from 'react'
import type { ModuleProps } from '../registry'
import { useWork } from '../../agents/workStore'
import { toolData } from '../../agents/workApi'
import { useEngine } from '../../agents/engineStore'
import { OfficeStats } from '../../components/OfficeStats'
import { Accounting } from './Accounting'
import { InfoDot } from '../../components/InfoDot'
import { PLANS, TASK_USD } from '../../data/plans'

const TABS = [
  { id: 'billing', label: 'Plan & usage', sub: 'Your plan, what it has used, and payments' },
  { id: 'accounting', label: 'Accounting', sub: 'Sales, costs, profit, VAT · .xlsx export' },
] as const

export default function VaultorModule({ dojoId }: ModuleProps) {
  const [tab, setTab] = useState<'billing' | 'accounting'>('billing')
  const tools = useWork((s) => s.tools)
  const engine = useEngine()
  // live Stripe data (balance + recent payments) · only returns to an admin
  // account when STRIPE_SECRET_KEY is set; degrades to nothing otherwise.
  const [stripe, setStripe] = useState<{ available?: { amount: number; currency: string }[]; pending?: { amount: number; currency: string }[]; payments?: { amount: number; currency: string; created: number; status: string; label: string }[] } | null>(null)
  useEffect(() => {
    let live = true
    void toolData('stripe').then((r) => { if (live && r.connected && r.data) setStripe(r.data as typeof stripe) })
    return () => { live = false }
  }, [])

  const connectedCount = Object.values(tools).filter((t) => (t as { connected?: boolean }).connected).length

  return (
    <div className="vaultor-mod sq">
      <div className="sq-steps studio-switch">
        {TABS.map((t) => (
          <button key={t.id} className={`sq-step${tab === t.id ? ' on' : ''}`} onClick={() => setTab(t.id)} title={t.sub}>{t.label}</button>
        ))}
        <InfoDot title="Billing" label="How billing works">
          <p>What your company is on, what it has used, and what Stripe has taken. Changing the plan happens on the Billing surface · there is only one of those.</p>
          <p>Connect <b>Stripe</b> (operator) to show your live balance and charges here. Sentinel caps how much the team may spend in a day.</p>
        </InfoDot>
      </div>

      {tab === 'accounting' && <Accounting dojoId={dojoId} />}

      {tab === 'billing' && (<>
      <div className="sq-eyebrow">Your plan</div>
      <p className="sq-lead">
        Dojoburo sells the software, not the tokens. There is one place to change this — the
        Billing surface — so a price can never be two things at once.
      </p>
      <div className="biz-overview">
        {PLANS.map((pl) => (
          <div key={pl.id} className={`biz-tile${pl.featured ? ' on' : ''}`}>
            <span>{pl.usd ? `$${pl.usd}` : 'Free'}</span>
            <em>{pl.name}{pl.byok ? ' · your key' : pl.tasks ? ` · ${pl.tasks.toLocaleString('en-US')} tasks` : ''}</em>
          </div>
        ))}
      </div>
      <p className="muted small">
        On Managed a task is worth about ${TASK_USD.toFixed(3)} of the monthly allowance. On Founder
        you bring your own Claude key and there is no meter between you and your own work.
      </p>
      <button className="btn primary tiny" style={{ marginTop: 10 }} onClick={() => useWork.getState().openStudio('billing')}>
        Open Billing
      </button>

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
      <p className="muted small">Set how much your team does on its own, and a daily spending limit, in <b>Sentinel</b>.</p>

      {/* the office usage dashboard (moved here from the panda) */}
      <div style={{ marginTop: 18 }}><OfficeStats /></div>
      </>)}
    </div>
  )
}
