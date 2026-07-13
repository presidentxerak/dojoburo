import { useState } from 'react'

// Credit-first pricing (nanocorp-style): a free tier + a Founder tier whose
// price scales with a monthly-credit selector. 1 credit ≈ 1 agentic task.
const CREDIT_OPTIONS = [30, 60, 120, 240, 480, 960, 1200, 1400, 1600, 1800, 2000]
const PRICE_PER_CREDIT = 1 // $ / credit / month

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
  const [credits, setCredits] = useState(30)
  const price = credits * PRICE_PER_CREDIT

  return (
    <>
      <div className="lp-plans credits">
        <div className="lp-plan">
          <div className="lp-plan-name">Free</div>
          <div className="lp-plan-price">$0<small> / forever</small></div>
          <div className="lp-plan-sub">Start free. Explore the whole office and build your first company.</div>
          <button className="lp-cta ghostcta" onClick={enter}>Get started</button>
          <div className="lp-plan-incl">Includes</div>
          <ul>
            <li>3 lifetime credits</li>
            <li>a dojoburo.app domain</li>
            <li>1 active company</li>
            <li>All worlds &amp; agent skins</li>
            <li>Earn credits through referrals</li>
            <li>"Built with dojoburo" badge</li>
          </ul>
        </div>

        <div className="lp-plan feat">
          <div className="lp-plan-badge">Most popular</div>
          <div className="lp-plan-name">Founder</div>
          <div className="lp-plan-price">${price}<small> / month</small></div>
          <div className="lp-plan-sub">{credits} credits / month</div>
          <button className="lp-cta" onClick={goBilling}>Get started</button>
          <select
            className="lp-credit-select"
            value={credits}
            onChange={(e) => setCredits(Number(e.target.value))}
            aria-label="Monthly credits"
          >
            {CREDIT_OPTIONS.map((c) => <option key={c} value={c}>{c} credits / month</option>)}
          </select>
          <div className="lp-plan-incl">Everything in Free, plus</div>
          <ul>
            <li>{credits} monthly credits</li>
            <li>Monthly credits that roll over</li>
            <li>Unlimited companies</li>
            <li>Custom domains</li>
            <li>All {connectors} app connectors</li>
            <li>Always-on cloud worker</li>
            <li>Remove the dojoburo badge</li>
          </ul>
        </div>
      </div>

      <div className="lp-enterprise">
        <div>
          <strong>Business / Enterprise</strong>
          <span>Self-hosted or local worker, SAML SSO &amp; security review, a dedicated MCP hub with an SLA, budgets &amp; spend controls, custom connectors and dedicated support. Keep everything on your own infrastructure.</span>
        </div>
        <button className="lp-ghost" onClick={goAssistant}>Talk to us</button>
      </div>
    </>
  )
}
