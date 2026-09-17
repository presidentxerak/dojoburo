// LA BIBLIOTHÈQUE · prompts, briefs et skills, rangés par catégorie et métier.
//
// Trois surfaces, trois vraies adresses :
//
//   /library                  le catalogue, filtrable
//   /library/<slug>           une entrée : son raisonnement, puis son fichier
//
// Pourquoi de vraies adresses : chaque entrée répond à une question que
// quelqu'un tape dans un moteur de recherche (« prompt pour résumer avec les
// sources », « brief de relecture de code »). Le raisonnement est public et
// indexable, le fichier ne l'est pas. C'est exactement la bonne coupe : ce qui
// attire est lisible, ce qui fait gagner du temps est payant.
//
// La coquille est celle de l'académie, volontairement. Deux catalogues du même
// produit qui ne se ressemblent pas donnent l'impression de deux produits.
import { useEffect, useMemo, useState } from 'react'
import { SiteHeader } from '../components/SiteHeader'
import { Logo } from '../components/Logo'
import { Wordmark } from '../components/Wordmark'
import { SupportBot } from '../components/SupportBot'
import { navigate } from '../lib/router'
import { useHeadTags } from '../lib/headTags'
import { useWork } from '../agents/workStore'
import {
  ENTRIES, ENTRY_BY_SLUG, ENTRY_COUNT, CATEGORIES, CATEGORY_BY_ID,
  KIND_LABEL, TRADES_WITH_ENTRIES, countByCategory, countByTrade,
  type Entry,
} from '../data/library'
import { fetchBody, download, REFUSAL, type FetchState } from '../lib/libraryApi'

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="landing dg2 ac lib">
      <SiteHeader />
      {children}
      <footer className="lp-footer">
        <div className="lp-brand"><Logo size={26} /> <Wordmark /></div>
        <nav className="lp-foot-links">
          <a href="/">Home</a><a href="/academy">Academy</a><a href="/library">Library</a>
          <a href="/guide">App setup guide</a><a href="/terms">Terms</a><a href="/privacy">Privacy</a>
        </nav>
      </footer>
      <SupportBot />
    </div>
  )
}

/** Le poids d'un fichier, dit comme on le dirait à voix haute. */
const weigh = (n: number) => (n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n))

function Card({ e }: { e: Entry }) {
  const cat = CATEGORY_BY_ID[e.category]
  return (
    <a className="lib-card" href={`/library/${e.slug}`} style={{ ['--pc' as never]: 'var(--violet)' }}>
      <span className="lib-card-top">
        <span className="lib-kind">{KIND_LABEL[e.kind].label}</span>
        {e.free && <span className="lib-freetag">free</span>}
      </span>
      <b>{e.title}</b>
      <span className="lib-sum">{e.summary}</span>
      <span className="lib-card-foot">
        <span className="lib-cat">{cat?.glyph} {cat?.label}</span>
        {/* CE QUE LE FICHIER COÛTE, sur la carte · on ne peut pas vendre un
            cours sur le coût des requêtes et laisser le lecteur deviner le
            poids de ce qu'on lui donne. Le chiffre est calculé depuis le
            fichier réel (scripts/weigh-library.mjs), jamais tapé. */}
        <span className="lib-weight" title="Estimated size of this file when it travels in a prompt">
          ≈ {weigh(e.tokens)} tokens
        </span>
      </span>
    </a>
  )
}

/* ------------------------------------------------------------------ */
/* Le catalogue                                                        */
/* ------------------------------------------------------------------ */

export function LibraryHome() {
  const [cat, setCat] = useState<string>('')
  const [trade, setTrade] = useState<string>('')
  const [kind, setKind] = useState<string>('')

  // Le métier arrive par l'adresse · la page d'accueil y envoie depuis sa
  // grille des métiers, et un lien partagé doit rouvrir le même filtre.
  useEffect(() => {
    const t = new URLSearchParams(location.search).get('trade') || ''
    if (t) setTrade(t)
  }, [])

  useHeadTags({
    title: `Prompt, brief and skill library · ${ENTRY_COUNT} files for real jobs`,
    description:
      'A catalogue of prompts, .md briefs and agent skills, filed by category and by trade. ' +
      'Every entry says when to use it, why it is written that way, what to change, and what it costs to run.',
    path: '/library',
    keywords: ['prompt library', 'agent brief', 'md template', 'ai skills', 'prompt engineering'],
  })

  const shown = useMemo(
    () => ENTRIES.filter((e) =>
      (!cat || e.category === cat) &&
      (!trade || e.trades.includes(trade)) &&
      (!kind || e.kind === kind)),
    [cat, trade, kind],
  )

  const clear = () => { setCat(''); setTrade(''); setKind('') }
  const filtered = !!(cat || trade || kind)

  return (
    <Shell>
      <section className="lp-sec ac-hero">
        <span className="lp-pill">{ENTRY_COUNT} files · prompts, briefs and skills</span>
        <h1>Filed by the job you actually do</h1>
        <p className="lp-lead">
          Not a wall of clever one-liners. Each entry says when to use it, why it is written that way, what to
          change for your own case, and the mistake it exists to avoid. The reasoning is free to read; the
          files are what the paid plan buys.
        </p>
      </section>

      {/* LES TROIS FILTRES · la forme, le verbe, le métier. Trois coupes
          différentes des mêmes fichiers, parce que trois personnes cherchent
          de trois manières : « je veux un .md », « je dois rédiger », « je
          suis comptable ». */}
      <section className="lp-sec lib-filters">
        <div className="lib-row">
          <span className="lib-row-lab">Form</span>
          {(['prompt', 'brief', 'skill'] as const).map((k) => (
            <button key={k} className={kind === k ? 'on' : ''} onClick={() => setKind(kind === k ? '' : k)}
              title={KIND_LABEL[k].one}>
              {KIND_LABEL[k].label}
            </button>
          ))}
        </div>
        <div className="lib-row">
          <span className="lib-row-lab">What you are doing</span>
          {CATEGORIES.map((c) => (
            <button key={c.id} className={cat === c.id ? 'on' : ''} onClick={() => setCat(cat === c.id ? '' : c.id)}
              title={c.blurb}>
              {c.glyph} {c.label} <i>{countByCategory(c.id)}</i>
            </button>
          ))}
        </div>
        <div className="lib-row">
          <span className="lib-row-lab">Your trade</span>
          {TRADES_WITH_ENTRIES.map((p) => (
            <button key={p.id} className={trade === p.id ? 'on' : ''} onClick={() => setTrade(trade === p.id ? '' : p.id)}>
              {p.label} <i>{countByTrade(p.id)}</i>
            </button>
          ))}
        </div>
        {filtered && (
          <button className="lib-clear" onClick={clear}>
            {shown.length} of {ENTRY_COUNT} · clear filters ✕
          </button>
        )}
      </section>

      <section className="lp-sec">
        {shown.length === 0 ? (
          // Un catalogue vide doit dire quoi faire, pas s'excuser.
          <p className="lp-lead sm">
            Nothing matches all three filters at once. Drop one — the trade filter is usually the one to
            loosen, because a good brief for a lawyer is often a good brief for an accountant.
          </p>
        ) : (
          <div className="lib-grid">{shown.map((e) => <Card key={e.slug} e={e} />)}</div>
        )}
      </section>
    </Shell>
  )
}

/* ------------------------------------------------------------------ */
/* Une entrée                                                          */
/* ------------------------------------------------------------------ */

export function EntryPage({ slug }: { slug: string }) {
  const e = ENTRY_BY_SLUG[slug]
  const [got, setGot] = useState<FetchState | null>(null)
  const [busy, setBusy] = useState(false)
  const [copied, setCopied] = useState(false)

  useHeadTags({
    title: e ? `${e.title} · ${KIND_LABEL[e.kind].label}` : 'Not found',
    description: e ? e.summary : 'No such file in the library.',
    path: `/library/${slug}`,
    type: 'article',
    keywords: e ? e.keywords : undefined,
  })

  if (!e) {
    return (
      <Shell>
        <section className="lp-sec ac-hero">
          <h1>No such file</h1>
          <p className="lp-lead">That address does not match anything in the catalogue. <a href="/library">Back to the library</a>.</p>
        </section>
      </Shell>
    )
  }

  const cat = CATEGORY_BY_ID[e.category]
  const kind = KIND_LABEL[e.kind]

  const open = async () => {
    setBusy(true)
    setGot(await fetchBody(e.slug))
    setBusy(false)
  }

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch { /* le presse-papiers peut être refusé · le texte reste sélectionnable */ }
  }

  return (
    <Shell>
      <nav className="ac-crumbs" aria-label="Breadcrumb">
        <a href="/library">Library</a>
        <i aria-hidden>›</i>
        <b aria-current="page">{e.title}</b>
      </nav>

      <section className="lp-sec ac-hero">
        <span className="lp-pill">{kind.label} · {cat?.label}</span>
        <h1>{e.title}</h1>
        <p className="lp-lead">{e.summary}</p>
        <p className="lib-kindline">{kind.one}</p>
      </section>

      {/* TOUT CE QUI SUIT EST GRATUIT, et c'est le cœur de l'affaire. On
          explique le raisonnement en entier ; quelqu'un d'attentif peut
          réécrire le fichier à partir de là — tant mieux, c'est une académie.
          On vend le temps gagné, pas le secret. */}
      <section className="lp-sec alt lib-body">
        <h2>When to reach for it</h2>
        <p className="lib-usecase">{e.useCase}</p>

        <h2>Why it is written this way</h2>
        <ul className="lib-list">{e.why.map((w) => <li key={w}>{w}</li>)}</ul>

        <h2>What to change for your case</h2>
        <ul className="lib-list">{e.adapt.map((a) => <li key={a}>{a}</li>)}</ul>

        <p className="lib-trap"><b>The mistake it exists to avoid.</b> {e.trap}</p>
      </section>

      <section className="lp-sec lib-file">
        <h2>The file</h2>
        <p className="lp-lead sm">
          {kind.label} · <b>≈ {weigh(e.tokens)} tokens</b> when it travels in a prompt
          {e.free ? ' · free to take' : ' · part of the paid library'}.
        </p>

        {/* L'APERÇU · les vraies premières lignes du fichier, pas une
            paraphrase. Une vitrine qui montre autre chose que la marchandise
            est un mensonge poli. */}
        <pre className="lib-pre lib-preview"><code>{e.preview}</code></pre>

        {!got && (
          <div className="lib-acts">
            <button className="lp-cta" onClick={() => void open()} disabled={busy}>
              {busy ? 'Opening…' : e.free ? 'Open the whole file' : 'Open the whole file'}
            </button>
            {!e.free && <span className="lib-note">Included with any paid plan.</span>}
          </div>
        )}

        {got?.state === 'ok' && (
          <>
            <pre className="lib-pre"><code>{got.body}</code></pre>
            <div className="lib-acts">
              <button className="lp-cta" onClick={() => void copy(got.body)}>{copied ? 'Copied' : 'Copy'}</button>
              <button className="lp-cta lp-cta-ghost" onClick={() => download(e.slug, kind.ext, got.body)}>
                Download {e.slug}{kind.ext}
              </button>
            </div>
          </>
        )}

        {got && got.state !== 'ok' && (
          <div className="lib-refuse">
            <b>{REFUSAL[got.state].title}</b>
            <span>{REFUSAL[got.state].line}</span>
            {REFUSAL[got.state].cta && (
              <button
                className="lp-cta"
                onClick={() => {
                  // La facturation vit dans l'app · on y va, sur l'écran des
                  // plans, plutôt que de renvoyer vers une page de prix qui
                  // demanderait de recommencer la navigation.
                  useWork.getState().openStudio('billing')
                  navigate('/#app')
                }}
              >
                {REFUSAL[got.state].cta}
              </button>
            )}
          </div>
        )}
      </section>

      <section className="lp-sec alt">
        <h2>Files that sit next to this one</h2>
        <div className="lib-grid">
          {ENTRIES.filter((o) => o.slug !== e.slug && (o.category === e.category || o.trades.some((t) => e.trades.includes(t))))
            .slice(0, 3)
            .map((o) => <Card key={o.slug} e={o} />)}
        </div>
      </section>
    </Shell>
  )
}
