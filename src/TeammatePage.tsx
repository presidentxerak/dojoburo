// The public job-title pages · /ai-marketing-manager and sixteen more, plus the
// /teammates hub that lists them by department.
//
// These exist because a codename is unsearchable. Inside the app the agent is
// Marketus; outside it, the thing a business is looking for is an AI Marketing
// Manager, and that is the phrase it types. Every page here is a real address
// with its own title, description and JSON-LD, prerendered at build time by
// scripts/gen-seo.mjs so a crawler reads the same words a person does.
//
// The content is not written twice. It is read from the agent's own context
// file — the one sent with every run — so the page describes the agent that
// actually exists rather than a marketing version of it that drifts.
import { Logo } from './components/Logo'
import { Wordmark } from './components/Wordmark'
import { Agent3DPreview } from './components/three/Agent3DPreview'
import { AGENT_CHAR, charForAgent } from './components/landing/TeamCards'
import { PUBLIC_AGENTS, ROLE_BY_SLUG, ROLE_BY_ID, type RoleAgent } from './data/roleAgents'
import { agentProfile } from './data/agentProfile'
import { CONNECTORS } from './data/connectors'
import { useHeadTags, breadcrumb, SITE } from './lib/headTags'
import { DEPARTMENTS } from './data/agents'
import { USE_CASE_BY_AGENT, USE_CASE_COUNT } from './data/agentUseCases'
import { SiteFooter } from './components/SiteFooter'

const appLabel = (id: string) => CONNECTORS.find((c) => c.id === id)?.label ?? id

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="landing tmp">
      <header className="lp-nav">
        <a className="lp-brand" href="/" style={{ textDecoration: 'none' }}>
          <Logo size={30} /> <Wordmark />
        </a>
        <nav className="lp-nav-links">
          <a href="/teammates">Teammates</a>
          <a href="/academy">Academy</a>
        </nav>
        <a className="lp-cta sm" href="/" style={{ textDecoration: 'none' }}>Back to home</a>
      </header>
      <main className="tmp-body">{children}</main>
      <SiteFooter />
    </div>
  )
}

/* ------------------------------------------------------------------ one role */
export function TeammatePage({ slug }: { slug: string }) {
  const role = ROLE_BY_SLUG[slug]
  const profile = role ? agentProfile(role.id) : null
  // La forme d'agent que ce personnage enseigne, s'il en porte une · douze sur
  // dix-sept en portent, et la page ne doit pas inventer de porte pour les cinq
  // autres.
  const useCase = role ? USE_CASE_BY_AGENT[role.id] ?? null : null

  useHeadTags({
    title: role ? `${role.public} · Dojoburo` : 'Teammate not found · Dojoburo',
    description: role
      ? `${role.public}. ${role.desc} One of the characters in the DojoBuro dojo, where you learn to build the kind of agent it stands for.`
      : 'This teammate does not exist.',
    path: `/${slug}`,
    keywords: role ? [role.public!, role.title, role.code, 'AI agent', 'AI teammate', role.dept] : undefined,
    jsonLd: role && profile
      ? [
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Teammates', path: '/teammates' },
            { name: role.public!, path: `/${slug}` },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: `${role.public} · Dojoburo`,
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            description: profile.mission,
            url: `${SITE}/${slug}`,
            featureList: profile.expertise,
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          },
        ]
      : undefined,
  })

  if (!role || !profile) {
    return (
      <Shell>
        <h1 className="tmp-h1">No such teammate</h1>
        <p className="tmp-lede">That address does not match anyone on the team.</p>
        <p><a className="lp-cta" href="/teammates" style={{ textDecoration: 'none' }}>See the whole team</a></p>
      </Shell>
    )
  }

  const charKey = AGENT_CHAR[role.id] ?? role.id
  const mates = role.apps.map(appLabel)

  return (
    <Shell>
      <nav className="tmp-crumb" aria-label="Breadcrumb">
        <a href="/teammates">Teammates</a> <span aria-hidden="true">›</span> <span>{role.dept}</span>
      </nav>

      <section className="tmp-hero" style={{ ['--ac' as string]: role.tint }}>
        <div className="tmp-hero-t">
          <p className="tmp-kicker">{role.dept}</p>
          <h1 className="tmp-h1">{role.public}</h1>
          {/* CE QU'EST CE PERSONNAGE, aujourd'hui. Cette page disait « un des
              dix-huit coéquipiers que vous pouvez mettre dans une entreprise »
              et proposait d'en construire une, ce qui est exactement ce que le
              produit ne fait plus. Elles sont dix-sept, pas dix-huit, et le
              nombre est compté ici plutôt qu'écrit.
              Douze d'entre eux portent une forme d'agent qu'on apprend à
              construire dans le dojo ; les cinq autres sont dans la pièce mais
              n'ont pas encore de parcours, et la page le dit au lieu de
              promettre une porte qui n'existe pas. */}
          <p className="tmp-code">
            Its name is <b>{role.code}</b>, and it is one of the {PUBLIC_AGENTS.length} characters in the dojo.
          </p>
          <p className="tmp-lede">{profile.mission}</p>
          {useCase ? (
            <>
              <p className="tmp-shape">
                In the dojo it teaches one shape of agent: <b>{useCase.shape}</b>. The hard part is
                {' '}{useCase.hard.charAt(0).toLowerCase()}{useCase.hard.slice(1).split('.')[0]}.
              </p>
              <a className="lp-cta" href={`/build/${useCase.id}`} style={{ textDecoration: 'none' }}>
                Learn to build {useCase.name}
              </a>
            </>
          ) : (
            <>
              <p className="tmp-shape">
                This one sits in the room without a path of its own yet. The {USE_CASE_COUNT} that do have one
                are where the course starts.
              </p>
              <a className="lp-cta" href="/build" style={{ textDecoration: 'none' }}>Enter the dojo</a>
            </>
          )}
        </div>
        <div className="tmp-hero-p">
          <Agent3DPreview id={charKey} character={charForAgent(charKey)} size={220} fit />
        </div>
      </section>

      <section className="tmp-sec">
        <h2>What it knows</h2>
        <ul className="tmp-list">
          {profile.expertise.map((e) => <li key={e}>{e}</li>)}
        </ul>
      </section>

      <section className="tmp-sec">
        <h2>What you get back</h2>
        <p>{profile.output}</p>
      </section>

      {mates.length > 0 && (
        <section className="tmp-sec">
          <h2>Apps it works in</h2>
          <p className="tmp-apps">
            {mates.map((m) => <span className="tmp-app" key={m}>{m}</span>)}
          </p>
          <p className="tmp-note">
            You connect each app once, on the app's own screen. Dojoburo never sees a password, and you
            can disconnect from either side at any time.
          </p>
        </section>
      )}

      <section className="tmp-sec">
        <h2>Who it works with</h2>
        <p>{profile.worksWith}</p>
      </section>

      {profile.boundaries.length > 0 && (
        <section className="tmp-sec tmp-bounds">
          <h2>What it will not do</h2>
          <ul className="tmp-list">
            {profile.boundaries.map((b) => <li key={b}>{b}</li>)}
          </ul>
        </section>
      )}

      <section className="tmp-next">
        <h2>The rest of the team</h2>
        <div className="tmp-grid">
          {PUBLIC_AGENTS.filter((r) => r.id !== role.id).slice(0, 6).map((r) => (
            <a className="tmp-card" key={r.id} href={`/${r.slug}`} style={{ ['--ac' as string]: r.tint }}>
              <strong>{r.public}</strong>
              <span>{r.desc}</span>
            </a>
          ))}
        </div>
        <p><a href="/teammates">See all {PUBLIC_AGENTS.length} characters</a></p>
      </section>
    </Shell>
  )
}

/* ------------------------------------------------------------------- the hub */
export function TeammatesPage() {
  useHeadTags({
    title: 'The characters of the dojo · Dojoburo',
    description:
      `The ${PUBLIC_AGENTS.length} characters in the DojoBuro dojo. ${USE_CASE_COUNT} of them carry a shape of ` +
      'agent you learn to build end to end, from a blank page to a file you can run in a real framework.',
    path: '/teammates',
    keywords: ['AI teammates', 'AI co-workers', 'AI agents for business', 'AI workforce'],
    jsonLd: [
      breadcrumb([{ name: 'Home', path: '/' }, { name: 'Teammates', path: '/teammates' }]),
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'The characters of the DojoBuro dojo',
        numberOfItems: PUBLIC_AGENTS.length,
        itemListElement: PUBLIC_AGENTS.map((r, i) => ({
          '@type': 'ListItem', position: i + 1, name: r.public, url: `${SITE}/${r.slug}`,
        })),
      },
    ],
  })

  // group by department, in the department order the app already uses
  const order = DEPARTMENTS.filter((d) => PUBLIC_AGENTS.some((r) => r.dept === d))

  return (
    <Shell>
      <section className="tmp-hubhead">
        {/* CE QUE CETTE PAGE VEND, désormais. Elle vendait des recrues :
            « dix-sept spécialistes que vous engagez dans une entreprise ».
            C'est l'ancien produit, sur une page indexée, avec un nombre écrit
            à la main qui ne collait déjà plus. */}
        <h1 className="tmp-h1">The characters of the dojo</h1>
        <p className="tmp-lede">
          {PUBLIC_AGENTS.length} of them live in the room. {USE_CASE_COUNT} carry a shape of agent you learn to
          build end to end, and each one fails in its own way, which is why they are taught one at a time.
        </p>
        <a className="lp-cta" href="/build" style={{ textDecoration: 'none' }}>Enter the dojo</a>
      </section>

      {order.map((dept) => (
        <section className="tmp-sec" key={dept}>
          <h2>{dept}</h2>
          <div className="tmp-grid">
            {PUBLIC_AGENTS.filter((r) => r.dept === dept).map((r) => (
              <a className="tmp-card" key={r.id} href={`/${r.slug}`} style={{ ['--ac' as string]: r.tint }}>
                <strong>{r.public}</strong>
                <em>{r.code}</em>
                <span>{r.desc}</span>
              </a>
            ))}
          </div>
        </section>
      ))}

      <section className="tmp-next">
        <h2>Where they are taught</h2>
        <p className="tmp-lede">
          Walk into the dojo and they are asleep, one per shape of problem. The one you pick wakes up, and you
          take it from a blank page to a file that runs in a real framework.
        </p>
        <a className="lp-cta" href="/build" style={{ textDecoration: 'none' }}>Pick your agent</a>
      </section>
    </Shell>
  )
}

/** Used by the router and by the prerenderer to resolve a public address. */
export const isTeammateSlug = (s: string): boolean => !!ROLE_BY_SLUG[s]
export const teammateRole = (s: string): RoleAgent | undefined => ROLE_BY_SLUG[s]
export { ROLE_BY_ID }
