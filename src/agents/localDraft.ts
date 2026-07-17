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
    case 'prd':
      return `# PRD · ${co}\n\n**Problem.** Users working on “${about}” lack a simple way to get the result.\n\n**Goals.** 1. Ship the smallest useful version. 2. Learn what users actually do. **Non-goals:** advanced settings, integrations.\n\n### User stories\n- As a user, I can sign up and reach the core action in under 2 minutes.\n- As a user, I can see my result and share it.\n\n### Scope\n- **MVP:** core flow, one happy path, basic errors.\n- **Later:** teams, exports, notifications.\n\n### Acceptance criteria\n- [ ] The core flow completes without help.\n- [ ] Errors are readable and recoverable.\n\n**Success metric:** weekly completed core actions.`
    case 'tech-spec':
      return `# Technical design · ${co}\n\n**Context.** Build the first version of “${about}”.\n\n### Architecture\nClient (web) → API (stateless) → database. Background jobs for slow work.\n\n### Data model\n- \`users\` (id, email, created_at)\n- \`projects\` (id, user_id, name, status)\n\n### API surface\n- \`POST /projects\` · create\n- \`GET /projects/:id\` · read\n\n### Trade-offs\nStart with one service + one database · split only when a real bottleneck shows.\n\n### Rollout\nFeature-flag, deploy behind auth, invite 10 users, then open up.\n\n### Testing\nUnit-test the core logic; one end-to-end test on the happy path.`
    case 'code-review':
      return `# Code review checklist · ${co}\n\nFor the change: “${about}”.\n\n### Correctness\n- [ ] Inputs validated · empty / long / malformed values handled.\n- [ ] Errors surfaced to the user, not swallowed.\n\n### Security\n- [ ] No secrets in code or logs.\n- [ ] User input never reaches queries/HTML unescaped.\n\n### Performance\n- [ ] No N+1 queries · no work in loops that can be batched.\n\n### Simplify\n- [ ] Dead code removed · duplicated logic factored.\n\n**Priority:** fix correctness first, then security, then the rest.`
    case 'support-reply':
      return `# Support reply · ${co}\n\n**Customer message.** “${about}”\n\n### Reply (ready to send)\nHi,\n\nThanks for reaching out — happy to help.\n\nHere is what I suggest:\n1. …\n2. …\n\nIf that doesn't solve it, reply here and I'll dig deeper.\n\nBest,\n${co} support\n\n### Shorter version\nThanks for flagging this! Try …, and tell me if it persists — I'm on it.\n\n### Internal note\nLikely cause: …. Check the account's recent activity before escalating.\n\n**Suggested status:** open · normal priority.`
    case 'faq':
      return `# Help-center FAQ · ${co}\n\n### Getting started\n- **What is ${co}?** ${about}.\n- **How do I start?** Sign up, then follow the 2-step setup.\n\n### Billing\n- **How does pricing work?** Simple monthly tiers · cancel anytime.\n- **Can I get a refund?** Yes, within 14 days.\n\n### Troubleshooting\n- **Something looks broken.** Refresh first; if it persists, contact us with a screenshot.\n\n### Macros\n1. “Thanks — could you share a screenshot and the account email?”\n2. “This is fixed — could you confirm on your side?”\n3. “I've escalated this to the team · you'll hear back within 24h.”`
    case 'announcement':
      return `# Announcement pack · ${co}\n\n**Update.** ${about}.\n\n### Slack (team)\n:tada: **Update:** ${about}. Questions in the thread!\n\n### Discord (community)\nHey everyone — ${about}. Tell us what you think!\n\n### WhatsApp / SMS\n${co}: ${about}. More soon.\n\n### Email\n**Subject:** ${co} · quick update\n\nHi,\n\n${about}.\n\nThanks for being with us,\nThe ${co} team`
    case 'contract':
      return `# Contract draft · ${co}\n\n> Draft only · have a qualified lawyer review before signature.\n\n**Agreement.** ${about}.\n\n1. **Parties.** ${co} and the counterparty named below.\n2. **Purpose.** What the parties agree to do.\n3. **Term.** Start date, duration, renewal.\n4. **Obligations.** What each party delivers.\n5. **Confidentiality.** Each party protects the other's non-public information.\n6. **Liability.** Capped at the amounts paid under this agreement.\n7. **Termination.** Written notice · 30 days.\n8. **Governing law.** To be completed.\n\n**Signatures**\n\n_____________________        _____________________\n${co}                                 Counterparty\n\n### Pre-signature checklist\n- [ ] Names + legal entities correct\n- [ ] Term and notice period agreed\n- [ ] Lawyer review done`
    case 'policy':
      return `# Legal pages draft · ${co}\n\n> Draft only · have a qualified lawyer review before publication.\n\n## Privacy policy\n- **What we collect:** account email, usage data needed to run the service.\n- **Why:** to provide and improve ${co}.\n- **Retention:** as long as the account is active.\n- **Cookies:** essential + analytics.\n- **Your rights:** access, correction, deletion · contact us anytime.\n\n## Terms of service\n- **The service:** ${about}.\n- **Accounts:** you are responsible for your credentials.\n- **Payments:** billed per the chosen plan · cancel anytime.\n- **Acceptable use:** no abuse, no illegal content.\n- **Liability:** service provided “as is”, liability capped at fees paid.\n- **Termination:** either side may close the account.`
    default:
      return `# ${taskId} · ${co}\n\nStarter draft for “${about}”. Edit it, then connect a model for the AI-written version.`
  }
}

const TITLES: Record<string, string> = {
  strategy: 'Strategy & OKRs', website: 'Website', offer: 'Offer & pricing',
  ads: 'Meta creatives', outreach: 'Outreach',
  prd: 'PRD', 'tech-spec': 'Technical design', 'code-review': 'Code review',
  'support-reply': 'Support reply', faq: 'Help-center FAQ', announcement: 'Announcement pack',
  contract: 'Contract draft', policy: 'Privacy policy & terms',
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
