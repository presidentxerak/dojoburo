// Where the work is allowed to happen.
//
// A French company buying an AI tool has one question before any other: where
// does my document go when I press the button. "In the cloud" is not an answer
// they can put in a DPIA, and "we use the best model" means the document left
// the European Union the moment it was interesting.
//
// So this module makes the region a first-class property of every provider, and
// lets the operator say `DATA_RESIDENCY=eu` and have that be TRUE rather than
// aspirational: a provider outside the region is not merely deprioritised, it
// is refused, and the caller is told which one and why.
//
// Three things follow from that, and they are the whole design:
//
//   1. A provider declares its region and its processor identity. Not a flag —
//      the legal entity and the country, because that is what goes in the
//      register of processing activities (RGPD art. 30) and in the sub-processor
//      list a customer's legal team will ask for.
//
//   2. Refusal is the default under `eu`, never a silent fallback. A pipeline
//      that quietly reaches a US model when the EU one is rate-limited is worse
//      than one that stops, because nobody finds out.
//
//   3. Every call records the region it ran in. An assurance nobody can audit
//      is a marketing line; api/_lib/rag/audit records this per query.
//
// Mistral is first by design, not by politeness: it is a French processor with
// EU-hosted inference, which makes it the only one on this list that satisfies
// residency without a transfer mechanism.
export type Region = 'eu' | 'us' | 'unknown'

export interface ProviderOrigin {
  id: string
  /** the legal processor, as it must appear in a sub-processor list */
  processor: string
  /** where the inference physically runs */
  region: Region
  /** the country, for the register of processing activities */
  country: string
  /** true when the provider contractually excludes training on customer data */
  noTrainingByDefault: boolean
  /** what the operator sets to enable it */
  keyEnv: string
}

/**
 * The providers this deployment knows how to reach, with their origin.
 *
 * `noTrainingByDefault` reflects the provider's standard API terms for paid
 * usage at the time of writing. It is recorded because a customer's DPA will
 * ask, NOT because this file can enforce it — the operator confirms it against
 * the contract they actually signed. A free tier very often trains; that is why
 * the free cascade below is marked false.
 */
export const ORIGINS: Record<string, ProviderOrigin> = {
  mistral: {
    id: 'mistral',
    processor: 'Mistral AI SAS',
    region: 'eu',
    country: 'FR',
    noTrainingByDefault: true,
    keyEnv: 'MISTRAL_API_KEY',
  },
  // OVHcloud AI Endpoints · French infrastructure, open-weight models
  ovh: {
    id: 'ovh',
    processor: 'OVH SAS',
    region: 'eu',
    country: 'FR',
    noTrainingByDefault: true,
    keyEnv: 'OVH_AI_API_KEY',
  },
  // Scaleway Generative APIs · French infrastructure
  scaleway: {
    id: 'scaleway',
    processor: 'Scaleway SAS',
    region: 'eu',
    country: 'FR',
    noTrainingByDefault: true,
    keyEnv: 'SCALEWAY_API_KEY',
  },
  anthropic: {
    id: 'anthropic',
    processor: 'Anthropic PBC',
    region: 'us',
    country: 'US',
    noTrainingByDefault: true,
    keyEnv: 'ANTHROPIC_API_KEY',
  },
  gemini: {
    id: 'gemini',
    processor: 'Google Ireland Ltd / Google LLC',
    region: 'us',
    country: 'US',
    noTrainingByDefault: false,
    keyEnv: 'GEMINI_API_KEY',
  },
  groq: {
    id: 'groq',
    processor: 'Groq Inc.',
    region: 'us',
    country: 'US',
    noTrainingByDefault: false,
    keyEnv: 'GROQ_API_KEY',
  },
  cerebras: {
    id: 'cerebras',
    processor: 'Cerebras Systems Inc.',
    region: 'us',
    country: 'US',
    noTrainingByDefault: false,
    keyEnv: 'CEREBRAS_API_KEY',
  },
  openrouter: {
    id: 'openrouter',
    processor: 'OpenRouter Inc. (routes to further processors)',
    region: 'unknown',
    country: 'US',
    noTrainingByDefault: false,
    keyEnv: 'OPENROUTER_API_KEY',
  },
}

const ENV = process.env as Record<string, string | undefined>

/**
 * The residency the operator has committed to.
 *
 * `eu`   — nothing leaves the European Union. Non-EU providers are refused.
 * `open` — no restriction; the default, because an install that has not thought
 *          about this should not silently claim to have.
 *
 * A deployment selling to French companies sets `eu` and can then say so in
 * writing. One that does not set it must not print a sovereignty claim
 * anywhere, and scripts/check-content.mjs enforces that.
 */
export const residency = (): 'eu' | 'open' =>
  (ENV.DATA_RESIDENCY || '').toLowerCase() === 'eu' ? 'eu' : 'open'

/** Is this provider configured on this deployment? */
export const configured = (id: string): boolean => {
  const o = ORIGINS[id]
  return !!o && !!ENV[o.keyEnv]
}

export interface Refusal { allowed: false; reason: 'residency' | 'unknown_provider' | 'not_configured'; detail: string }
export interface Allowed { allowed: true; origin: ProviderOrigin }

/**
 * May this deployment send a document to this provider?
 *
 * Returns a REASON rather than a boolean, because every caller has to be able
 * to tell the user which of the three very different problems they have: the
 * provider is not set up, the provider does not exist, or the provider would
 * take their data out of the EU and the operator has forbidden that.
 */
export function mayUse(id: string): Allowed | Refusal {
  const o = ORIGINS[id]
  if (!o) return { allowed: false, reason: 'unknown_provider', detail: id }
  if (!ENV[o.keyEnv]) return { allowed: false, reason: 'not_configured', detail: o.keyEnv }
  if (residency() === 'eu' && o.region !== 'eu') {
    return {
      allowed: false,
      reason: 'residency',
      detail: `${o.processor} processes in ${o.country}; this deployment is pinned to the EU`,
    }
  }
  return { allowed: true, origin: o }
}

/**
 * The providers to try, best first, for a given job.
 *
 * EU providers lead whatever the residency setting is. Under `open` the others
 * follow as a fallback; under `eu` they are not in the list at all, so there is
 * no code path that can reach them by accident — the refusal is structural
 * rather than a check somebody might forget.
 */
export function chain(prefer: string[] = []): ProviderOrigin[] {
  const eu = ENV.EU_PROVIDER_ORDER?.split(',').map((s) => s.trim()).filter(Boolean)
    ?? ['mistral', 'ovh', 'scaleway']
  const rest = ['anthropic', 'gemini', 'groq', 'cerebras', 'openrouter']
  const order = [...prefer, ...eu, ...rest].filter((v, i, a) => a.indexOf(v) === i)
  return order
    .map((id) => mayUse(id))
    .filter((r): r is Allowed => r.allowed)
    .map((r) => r.origin)
}

/** True when at least one usable provider runs in the EU. */
export const hasEuProvider = (): boolean => chain().some((o) => o.region === 'eu')

/**
 * What this deployment would have to tell a customer's legal team.
 *
 * Generated from the same table the routing uses, so the document and the
 * behaviour cannot disagree — which is the failure mode of every
 * sub-processor list maintained by hand in a slide deck.
 */
export function processingRecord(): {
  residency: 'eu' | 'open'
  compliant: boolean
  processors: Array<{ processor: string; country: string; region: Region; purpose: string; noTrainingByDefault: boolean }>
} {
  const active = chain()
  return {
    residency: residency(),
    // "compliant" here means only: nothing configured would move data out of
    // the EU. It is a necessary condition, never the whole of a GDPR posture.
    compliant: residency() === 'eu' ? active.every((o) => o.region === 'eu') : false,
    processors: active.map((o) => ({
      processor: o.processor,
      country: o.country,
      region: o.region,
      purpose: 'Document parsing, embedding and grounded answering on customer documents',
      noTrainingByDefault: o.noTrainingByDefault,
    })),
  }
}
