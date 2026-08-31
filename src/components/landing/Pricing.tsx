import { PLANS, planPrice, type Plan } from '../../data/plans'

// Pricing, from the one place that defines it (data/plans.ts).
//
// This page used to sell credits on a slider — 30 to 2,000 a month at a dollar
// each — while the Billing panel inside the app sold four different metered
// tiers at different rates. Same product, two prices, and both of them priced
// model tokens rather than the software.
//
// Now there are three plans and the middle one is the argument: bring your own
// Claude key and nothing between you and your own work is metered.

export function Pricing({
  enter,
  goBilling,
  goAssistant,
  connectors,
}: {
  enter: () => void
  goBilling: () => void
  goAssistant: () => void
  connectors: number
}) {
  const cta = (p: Plan) => (p.id === 'free' ? enter : goBilling)

  return (
    <>
      <div className="lp-plans plans3">
        {PLANS.map((p) => (
          <div key={p.id} className={`lp-plan${p.featured ? ' feat' : ''}`}>
            {p.featured && <div className="lp-plan-badge">Most popular</div>}
            <div className="lp-plan-name">{p.name}</div>
            <div className="lp-plan-price">
              {planPrice(p)}
              <small>{p.usd === 0 ? ' / forever' : ' / month'}</small>
            </div>
            <div className="lp-plan-sub">{p.tagline}</div>
            <button className={`lp-cta${p.featured ? '' : ' ghostcta'}`} onClick={cta(p)}>
              {p.id === 'free' ? 'Get started' : `Choose ${p.name}`}
            </button>
            <div className="lp-plan-incl">{p.inclHead}</div>
            <ul>
              {p.incl.map((line) => (
                <li key={line}>{line === 'Every app connector' ? `All ${connectors} app connectors` : line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="lp-plan-note">
        A task is one teammate doing one step, so a four-step team is four tasks a run.
        On <b>Founder</b> those tasks run on your own Claude key and Anthropic bills you directly ·
        connecting an app is free on every plan, and your Notion, Slack or Stripe subscriptions are
        always paid to those companies, never to us.
      </p>

      <div className="lp-enterprise">
        <div>
          <strong>Business / Enterprise</strong>
          <span>Self-hosted or local worker, SAML SSO &amp; security review, a dedicated MCP hub with an SLA, budgets &amp; spend controls, custom connectors and dedicated support. Keep everything on your own infrastructure.</span>
        </div>
        <button className="lp-ghost" onClick={goAssistant}>Ask Dojobot</button>
      </div>
    </>
  )
}
