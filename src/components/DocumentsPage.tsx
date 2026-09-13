// Les documents de l'entreprise · l'écran.
//
// Ce qui est montré en permanence, et ce n'est pas un ornement : d'où part le
// document et où part la question. Une personne qui dépose un contrat a le
// droit de savoir cela sans ouvrir de documentation, et c'est la seule chose
// qu'aucun concurrent généraliste ne peut afficher.
//
// Le reste est délibérément court. Déposer, chercher, demander, effacer. Chaque
// résultat porte son fichier et sa page, parce qu'une réponse qu'on ne peut pas
// ouvrir ne vaut pas la peine d'être lue.
import { useEffect, useRef, useState } from 'react'
import { FullScreen } from './FullScreen'
import {
  listSpaces, listDocuments, ingestFile, searchDocs, askDocs, eraseDoc,
  type RagDoc, type RagPassage, type RagAnswer, type RagSpace, type EmbedStatus,
} from '../lib/ragApi'

const kb = (n: number): string =>
  n >= 1_048_576 ? `${(n / 1_048_576).toFixed(1)} Mo` : `${Math.max(1, Math.round(n / 1024))} ko`

/** L'état d'un document, dit en clair · « failed » ne veut rien dire à personne. */
const STATUS: Record<RagDoc['status'], string> = {
  indexed: 'indexé',
  parsed: 'lu, sans passage',
  pending: 'en attente',
  failed: 'non exploitable',
}

export function DocumentsSurface({ onClose }: { onClose: () => void }) {
  const [spaces, setSpaces] = useState<RagSpace[]>([])
  const [spaceId, setSpaceId] = useState<string | null>(null)
  const [docs, setDocs] = useState<RagDoc[]>([])
  const [residency, setResidency] = useState<'eu' | 'open'>('open')
  const [embeddings, setEmbeddings] = useState<EmbedStatus>({ available: false })
  const [backend, setBackend] = useState<boolean | null>(null)

  const [q, setQ] = useState('')
  const [busy, setBusy] = useState<'' | 'search' | 'ask' | 'upload'>('')
  const [passages, setPassages] = useState<RagPassage[] | null>(null)
  const [answer, setAnswer] = useState<RagAnswer | null>(null)
  const [notice, setNotice] = useState('')
  const file = useRef<HTMLInputElement>(null)

  useEffect(() => { void refresh() }, [])

  async function refresh(space?: string | null) {
    const s = await listSpaces()
    setBackend(s.ok)
    if (!s.ok) return
    setSpaces(s.spaces)
    setResidency(s.residency)
    setEmbeddings(s.embeddings)
    const pick = space !== undefined ? space : (spaceId ?? s.spaces[0]?.id ?? null)
    setSpaceId(pick)
    const d = await listDocuments(pick)
    setDocs(d.documents)
  }

  async function onFiles(list: FileList | null) {
    if (!list?.length) return
    setBusy('upload')
    setNotice('')
    const said: string[] = []
    for (const f of Array.from(list)) {
      const r = await ingestFile(f, spaceId)
      if (r.duplicate) said.push(`${r.filename} · déjà déposé, non réanalysé`)
      else if (r.needsOcr) said.push(`${r.filename} · ${r.warning || 'non exploitable'}`)
      else if (!r.ok) said.push(`${r.filename} · ${r.error || 'échec'}`)
      else said.push(`${r.filename} · ${r.pages} page(s), ${r.chunks} passage(s)`)
    }
    setNotice(said.join('\n'))
    setBusy('')
    if (file.current) file.current.value = ''
    await refresh(spaceId)
  }

  async function run(kind: 'search' | 'ask') {
    const question = q.trim()
    if (!question) return
    setBusy(kind)
    setAnswer(null)
    setPassages(null)
    if (kind === 'search') {
      const r = await searchDocs(question, spaceId)
      setPassages(r.passages)
      if (!r.ok) setNotice(r.error === 'offline' ? 'serveur injoignable' : (r.error ?? ''))
    } else {
      const r = await askDocs(question, spaceId)
      setPassages(r.passages)
      setAnswer(r.answer ?? null)
      if (!r.ok) {
        setNotice(r.error === 'quota'
          ? `allocation épuisée (${r.reason ?? ''}) · la recherche reste disponible`
          : r.error === 'offline' ? 'serveur injoignable' : (r.error ?? ''))
      }
    }
    setBusy('')
  }

  async function onErase(d: RagDoc) {
    // Un effacement est définitif par construction · c'est ce qu'on lui demande
    // d'être, donc il se confirme.
    if (!window.confirm(`Effacer « ${d.filename} » ? Le texte est supprimé de la base, sans retour possible.`)) return
    const r = await eraseDoc(d.id)
    setNotice(r.ok ? `${d.filename} · effacé` : `${d.filename} · ${r.error === 'forbidden' ? 'réservé aux administrateurs' : 'introuvable'}`)
    await refresh(spaceId)
  }

  const indexed = docs.filter((d) => d.status === 'indexed').length
  const pages = docs.reduce((n, d) => n + (d.pages || 0), 0)

  return (
    <FullScreen
      title="Documents"
      sub={backend === false
        ? 'aucune base configurée · cet écran a besoin de Postgres'
        : `${indexed}/${docs.length} indexé(s) · ${pages} page(s) interrogeables`}
      bodyClass="docs-fs"
      onClose={onClose}
    >
      <div className="docs-body">
        {/* Où va quoi. En haut, toujours visible, jamais dans une aide. */}
        <div className="docs-origin">
          <span className={`docs-tag ${residency === 'eu' ? 'is-eu' : ''}`}>
            {residency === 'eu' ? 'Résidence UE' : 'Résidence non contrainte'}
          </span>
          <span className="docs-tag is-local">Analyse sur le serveur · le document ne sort pas</span>
          <span className="docs-tag">
            {embeddings.available
              ? `Recherche hybride · ${embeddings.processor} (${embeddings.country})`
              : 'Recherche lexicale · aucun appel sortant'}
          </span>
        </div>

        {backend === false ? (
          <p className="docs-empty">
            Cet écran lit et écrit dans Postgres. Appliquez <code>db/rag.sql</code> et posez
            <code>DATABASE_URL</code> ; voir <code>docs/DOCUMENTS.md</code>.
          </p>
        ) : (
          <>
            <div className="docs-bar">
              {spaces.length > 1 && (
                <select
                  className="docs-select"
                  value={spaceId ?? ''}
                  onChange={(e) => { setSpaceId(e.target.value); void refresh(e.target.value) }}
                  aria-label="Espace documentaire"
                >
                  {spaces.map((s) => <option key={s.id} value={s.id}>{s.name} ({s.documents})</option>)}
                </select>
              )}
              <input
                ref={file}
                type="file"
                multiple
                className="docs-file"
                onChange={(e) => void onFiles(e.target.files)}
                aria-label="Déposer des documents"
              />
              <button className="docs-btn" onClick={() => file.current?.click()} disabled={busy === 'upload'}>
                {busy === 'upload' ? 'dépôt…' : '+ Déposer'}
              </button>
            </div>

            <div className="docs-ask">
              <input
                className="docs-q"
                value={q}
                placeholder="Quel est le préavis de résiliation ?"
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') void run(e.shiftKey ? 'search' : 'ask') }}
                aria-label="Question"
              />
              <button className="docs-btn" onClick={() => void run('search')} disabled={!!busy}>
                {busy === 'search' ? '…' : 'Chercher'}
              </button>
              <button className="docs-btn is-primary" onClick={() => void run('ask')} disabled={!!busy}>
                {busy === 'ask' ? '…' : 'Demander'}
              </button>
            </div>

            {notice && <pre className="docs-notice">{notice}</pre>}

            {answer && (
              <div className={`docs-answer ${answer.grounded ? '' : 'is-unsourced'}`}>
                {answer.text && <p className="docs-answer-t">{answer.text}</p>}
                {answer.note && <p className="docs-answer-n">{answer.note}</p>}
                {answer.citations.length > 0 && (
                  <ul className="docs-cites">
                    {answer.citations.map((c) => (
                      <li key={c.n}>[{c.n}] {c.filename} · page {c.page}</li>
                    ))}
                  </ul>
                )}
                {answer.answeredRegion && (
                  <p className="docs-answer-by">
                    répondu par {answer.answeredBy} · {answer.answeredRegion === 'eu' ? 'UE' : answer.answeredRegion.toUpperCase()}
                  </p>
                )}
              </div>
            )}

            {passages && (
              passages.length === 0
                ? (
                  // Un résultat vide est le moment où quelqu'un décide que
                  // l'outil ne marche pas. En recherche lexicale seule, « rompre
                  // le contrat » ne trouve pas « résiliation » — c'est une
                  // limite connue, et la taire ferait conclure à un mauvais
                  // produit là où il manque une clé.
                  <div className="docs-empty">
                    <p>Aucun passage des documents déposés ne correspond.</p>
                    {!embeddings.available && (
                      <p className="docs-hint">
                        La recherche est lexicale : elle trouve les mots du document, pas
                        leurs synonymes. « rompre le contrat » ne retrouve pas « résiliation ».
                        {' '}{embeddings.why}
                        {embeddings.setAnyOf?.length ? (
                          <>
                            {' · '}
                            {embeddings.setAnyOf.map((k, i) => (
                              <span key={k}>{i > 0 ? ', ' : ''}<code>{k}</code></span>
                            ))}
                          </>
                        ) : null}
                      </p>
                    )}
                  </div>
                )
                : (
                  <ol className="docs-hits">
                    {passages.map((p, i) => (
                      <li key={p.chunkId} className="docs-hit">
                        <p className="docs-hit-src">
                          [{i + 1}] {p.filename} · page {p.page}
                          <span className="docs-via">{p.via === 'both' ? 'lexical + sémantique' : p.via === 'semantic' ? 'sémantique' : 'lexical'}</span>
                        </p>
                        <p className="docs-hit-t">{p.text}</p>
                      </li>
                    ))}
                  </ol>
                )
            )}

            <ul className="docs-list">
              {docs.map((d) => (
                <li key={d.id} className={`docs-doc ${d.status === 'failed' ? 'is-bad' : ''}`}>
                  <div>
                    <p className="docs-doc-n">{d.filename}</p>
                    <p className="docs-doc-m">
                      {STATUS[d.status]} · {d.pages} page(s) · {d.chunks} passage(s) · {kb(d.bytes)}
                      {d.error ? ` · ${d.error}` : ''}
                    </p>
                  </div>
                  <button className="docs-erase" onClick={() => void onErase(d)} aria-label={`Effacer ${d.filename}`}>
                    Effacer
                  </button>
                </li>
              ))}
              {docs.length === 0 && (
                <li className="docs-empty">
                  Aucun document. Déposez un PDF, un .docx, un .csv : il est analysé ici même,
                  puis interrogeable par sa page.
                </li>
              )}
            </ul>
          </>
        )}
      </div>
    </FullScreen>
  )
}

/** La route #documents · la même surface, atteinte par son propre lien. */
export function DocumentsPage() {
  const back = () => {
    try { sessionStorage.setItem('dojoburo.nav', 'dojo') } catch { /* ignore */ }
    location.hash = 'app'
  }
  return <DocumentsSurface onClose={back} />
}
