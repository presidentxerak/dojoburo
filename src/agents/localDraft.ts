// Local, no-model fallback for deliverables. When the server can't run (no model
// configured yet, or unreachable), the CEO still produces a useful STARTER DRAFT
// from the company description · clearly labelled as a local template, so the app
// is never "dead" while the operator wires a real model (free cascade / Claude).
import type { Deliverable } from './workApi'

const NOTE = '> ⚠️ **Local draft** · generated without an AI model (no key configured on this deployment). Connect a Claude key (Studio → Billing) or enable the free cascade for the AI-written version.\n'

const clean = (s: string) => (s || '').trim().replace(/\.$/, '')
const nameFrom = (brief: string) => {
  const w = clean(brief).split(/\s+/).slice(0, 3).join(' ')
  return w || 'your company'
}

function body(taskId: string, brief: string): string {
  const co = nameFrom(brief)
  const about = clean(brief) || 'an early-stage company'
  switch (taskId) {
    case 'strategy':
      return `# Strategy & OKRs · ${co}\n\n**Vision (1 sentence).** Become the go-to for “${about}”.\n\n### 3 strategic bets\n1. **Acquisition** · one primary channel (Meta ads) that brings in customers at a controlled cost.\n2. **Activation** · a clear offer and a page that converts.\n3. **Retention** · a reason to come back every week.\n\n### Quarterly OKRs\n- **O1 · Find product-market fit.** KR1: 50 paying customers · KR2: 40% retention at 4 weeks · KR3: NPS > 40.\n- **O2 · Make acquisition profitable.** KR1: CAC < $20 · KR2: 3 winning Meta creatives · KR3: page conversion rate > 3%.\n- **O3 · Lay the foundations.** KR1: website live · KR2: payments connected · KR3: 1 email sequence.\n\n**Metric #1 to track:** active paying customers per week.`
    case 'website':
      return `# Website · ${co}\n\n### Hero\n- **Headline:** ${co}, ${about} · made simple.\n- **Subheadline:** The fastest way to get a result, no hassle.\n- **Button:** Get started\n\n### Benefits (3)\n1. **Fast** · ready in minutes.\n2. **Simple** · no learning curve.\n3. **Secure** · your data stays protected.\n\n### How it works\n1. You sign up. 2. You set up in 2 clicks. 3. You get the result.\n\n### Pricing (overview)\nStarter · Pro · Team · see the “Offer & payments” card.\n\n### FAQ\n- *Is there a free trial?* Yes.\n- *Can I cancel?* Anytime.\n\n### Final CTA\n**Ready? Get started now.**\n\n**SEO** · Title: “${co} · ${about}”. Meta: “${co}, ${about}. Try it for free.”`
    case 'offer':
      return `# Offer & pricing · ${co}\n\n**Main offer.** The essence of “${about}” in a simple, effective product.\n\n| Tier | Price /month | Included |\n|---|---|---|\n| **Starter** | $9 | Core features, email support |\n| **Pro** ⭐ | $29 | Everything in Starter + advanced features + priority |\n| **Team** | $79 | Everything in Pro + roles, SSO, hands-on support |\n\n**Recommended:** Pro (the best value for money).\n\n**Checkout page (copy).** “Join hundreds of customers. No-commitment trial, one-click cancellation, 14-day guarantee.”\n\n**Upsells:** premium onboarding · credit pack · advanced module.`
    case 'ads':
      return `# Meta creatives (Facebook & Instagram) · ${co}\n\n${[1, 2, 3, 4, 5].map((i) => `### Variant ${i}\n- **Copy:** Discover ${co} · ${about}. ${['Try it for free.', 'Join us today.', 'Results guaranteed.', 'Simple and fast.', 'Launch offer.'][i - 1]}\n- **Hook:** ${['Finally simple', 'Save time', 'Made for you', 'Try it free', 'Limited offer'][i - 1]}\n- **Placement:** ${['Feed', 'Reels', 'Stories', 'Feed', 'Reels'][i - 1]}\n- **Visual:** ${['product photo', 'short demo video', 'customer testimonial', 'before/after', 'offer on screen'][i - 1]}\n- **Audience:** interests related to “${about}” + 1% lookalike of your customers.`).join('\n\n')}\n\n**Test plan:** launch all 5 at $5/day each, keep the top 2 after 3 days.`
    case 'outreach':
      return `# Outreach · ${co}\n\n**ICP.** Decision-makers (founder, growth, marketing) at companies relevant to “${about}”, 1–50 people.\n\n**Where to find them:** LinkedIn, industry communities, online events.\n\n**15 target profiles (types):** startup founder, growth lead, solo marketer, e-commerce seller, coach, agency, freelancer, consultant, SMB owner, product manager, community manager, early-stage SaaS, content creator, trainer, indie hacker.\n\n### Email sequence (3 steps)\n1. **Day 0 ·** *Subject: an idea for ${about}* · “Hi, I saw you're working on X. We help with … in 2 lines. Does that resonate?”\n2. **Day 3 ·** *Gentle follow-up* · “Quick bump: here's a concrete example of a result.”\n3. **Day 7 ·** *Final touch* · “Closing the loop · if the timing isn't right, let me know when to circle back.”`
    default:
      return `# ${taskId} · ${co}\n\nStarter draft for “${about}”. Edit it, then connect a model for the AI-written version.`
  }
}

const TITLES: Record<string, string> = {
  strategy: 'Strategy & OKRs', website: 'Website', offer: 'Offer & pricing',
  ads: 'Meta creatives', outreach: 'Outreach',
}

export function localDraft(taskId: string, brief: string): Deliverable {
  return {
    taskId,
    title: `${TITLES[taskId] || taskId} (local draft)`,
    format: 'markdown',
    markdown: NOTE + '\n' + body(taskId, brief),
    model: 'local draft',
  }
}
