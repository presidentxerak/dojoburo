// Faire d'un document un enregistrement.
//
// « Sors-moi le montant, la date d'échéance et le préavis de ces 400 contrats »
// est la demande qui justifie à elle seule l'achat d'un outil documentaire. Le
// piège est connu : un modèle à qui on demande un JSON rend TOUJOURS un JSON,
// complet, bien formé, et parfois inventé de bout en bout. Un champ manquant
// deviendra « 30 jours » parce que c'est ce qu'on voit le plus souvent dans un
// contrat, et personne ne le verra passer.
//
// Trois choses rendent cette extraction utilisable :
//
//   · Chaque valeur porte la PAGE d'où elle vient. Un champ sans source n'est
//     pas retenu — pas signalé, pas retenu. C'est la seule règle qui transforme
//     une extraction en pièce vérifiable, parce qu'un relecteur peut ouvrir la
//     page et trancher en dix secondes.
//
//   · Le champ absent est rendu `null` avec sa raison. « Ce contrat ne dit rien
//     du préavis » est une information exploitable ; une valeur inventée à cet
//     endroit est une erreur qui se propage dans le tableur, puis dans la
//     décision.
//
//   · Le schéma est déclaré par l'appelant, en langage ordinaire pour la
//     description de chaque champ — c'est cette description qui sert AUSSI de
//     requête de recherche pour retrouver le bon passage. Le même texte guide
//     la recherche et le modèle, donc ils ne peuvent pas diverger.
import type { Pool } from 'pg'
import { search, type Passage } from './search.js'
import { embedQuery } from './embed.js'
import { answerBackend } from './answer.js'
import { chain } from '../eu.js'

const ENV = process.env as Record<string, string | undefined>

export type FieldType = 'string' | 'number' | 'date' | 'boolean' | 'string[]'

export interface FieldSpec {
  /** la clé dans le résultat */
  name: string
  type: FieldType
  /** en français ordinaire · sert de consigne au modèle ET de requête de recherche */
  description: string
}

export interface FieldValue {
  value: string | number | boolean | string[] | null
  /** les pages d'où vient la valeur · vide ⇒ la valeur est écartée */
  pages: number[]
  /** le passage cité, pour pouvoir relire sans ouvrir le document */
  quote?: string
  /** pourquoi il n'y a pas de valeur */
  missing?: string
}

export interface ExtractResult {
  ok: boolean
  fields: Record<string, FieldValue>
  docId?: string
  filename?: string
  answeredBy: string | null
  answeredRegion: string | null
  note?: string
}

const MAX_FIELDS = 24
const PER_FIELD = 3     // passages retrouvés par champ · au-delà on dilue le contexte

/** Nettoie un schéma venu de l'extérieur avant de le laisser guider quoi que ce soit. */
export function normaliseSchema(raw: unknown): FieldSpec[] {
  const arr = Array.isArray(raw) ? raw : []
  const seen = new Set<string>()
  const out: FieldSpec[] = []
  for (const f of arr) {
    const name = String((f as any)?.name || '').trim().slice(0, 60)
    if (!name || seen.has(name)) continue
    const t = String((f as any)?.type || 'string')
    out.push({
      name,
      type: (['string', 'number', 'date', 'boolean', 'string[]'] as FieldType[]).includes(t as FieldType)
        ? (t as FieldType) : 'string',
      description: String((f as any)?.description || name).trim().slice(0, 300),
    })
    seen.add(name)
    if (out.length >= MAX_FIELDS) break
  }
  return out
}

/**
 * Extrait un enregistrement d'un document.
 *
 * Le document est désigné par son identifiant, et la recherche est bornée à lui
 * seul : extraire « le montant » d'un espace qui contient quarante contrats
 * rendrait le montant d'un autre contrat, avec une citation parfaitement exacte
 * pointant vers le mauvais fichier.
 */
export async function extract(
  pool: Pool, orgId: string, docId: string, schema: FieldSpec[],
): Promise<ExtractResult> {
  const fields = normaliseSchema(schema)
  const empty = (note: string): ExtractResult => ({
    ok: false, fields: {}, answeredBy: null, answeredRegion: null, note,
  })
  if (!fields.length) return empty('schéma vide · déclarez au moins un champ')

  const doc = await pool.query(
    `select d.id, d.filename, d.space_id, d.status
       from rag_documents d join rag_spaces s on s.id = d.space_id
      where d.id = $1 and s.org_id = $2 and d.deleted_at is null`,
    [docId, orgId],
  )
  if (!doc.rows[0]) return empty('document introuvable')
  if (doc.rows[0].status !== 'indexed') {
    return empty(`document non indexé (${doc.rows[0].status}) · rien à extraire`)
  }

  // Un passage par champ, retrouvé avec la description du champ comme question.
  // Les résultats sont mis en commun et numérotés UNE fois : deux champs qui
  // tombent sur le même passage doivent porter le même numéro de source, sinon
  // le modèle cite deux fois le même extrait sous deux noms.
  const byId = new Map<number, Passage>()
  const perField = new Map<string, number[]>()
  for (const f of fields) {
    const q = await embedQuery(f.description).catch(() => null)
    const hits = await search(pool, orgId, f.description, {
      spaceId: doc.rows[0].space_id,
      topK: PER_FIELD,
      queryVector: q?.vector ?? null,
      embedModel: q?.tag ?? null,
    })
    const mine: number[] = []
    for (const h of hits) {
      if (h.docId !== docId) continue
      if (!byId.has(h.chunkId)) byId.set(h.chunkId, h)
      mine.push(h.chunkId)
    }
    perField.set(f.name, mine)
  }

  const ordered = [...byId.values()]
  if (!ordered.length) {
    return {
      ok: true, docId, filename: doc.rows[0].filename, answeredBy: null, answeredRegion: null,
      fields: Object.fromEntries(fields.map((f) => [f.name, {
        value: null, pages: [], missing: 'aucun passage de ce document ne parle de ce champ',
      } as FieldValue])),
    }
  }

  const b = answerBackend()
  if (!b || !ENV[b.origin.keyEnv]) {
    // Sans modèle on ne devine pas de valeurs — mais on rend quand même les
    // passages retrouvés par champ. Un opérateur remplit alors son tableau à la
    // main en dix fois moins de temps qu'en ouvrant le document.
    return {
      ok: true, docId, filename: doc.rows[0].filename, answeredBy: null, answeredRegion: null,
      note: chain().length
        ? "aucun modèle européen n'est configuré · seuls les passages candidats sont rendus"
        : 'aucun fournisseur configuré · seuls les passages candidats sont rendus',
      fields: Object.fromEntries(fields.map((f) => {
        const ids = perField.get(f.name) ?? []
        const first = ids.length ? byId.get(ids[0]) : undefined
        return [f.name, {
          value: null,
          pages: ids.map((i) => byId.get(i)!.page).filter((v, k, a) => a.indexOf(v) === k),
          quote: first ? first.text.slice(0, 400) : undefined,
          missing: 'extraction automatique indisponible · passage candidat fourni',
        } as FieldValue]
      })),
    }
  }

  const numbered = ordered
    .map((p, i) => `[${i + 1}] page ${p.page}\n${p.text}`)
    .join('\n\n---\n\n')
  const wanted = fields
    .map((f) => `- ${f.name} (${f.type}) : ${f.description}`)
    .join('\n')

  const system = [
    "Tu extrais des champs d'un document, à partir des seuls extraits fournis.",
    'Rends UNIQUEMENT un objet JSON, sans texte autour, de la forme :',
    '{"champ": {"value": ..., "source": 2, "quote": "la phrase exacte de l\'extrait"}}',
    '"source" est le numéro entre crochets de l\'extrait qui porte la valeur.',
    'Si un champ ne figure pas dans les extraits, rends {"value": null, "missing": "raison courte"}.',
    "N'invente jamais une valeur plausible : un champ absent doit rester null.",
    'Ne reformule pas "quote" : ce doit être un fragment exact de l\'extrait cité.',
  ].join(' ')

  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), Number(ENV.RAG_ANSWER_TIMEOUT_MS || 60000))
  try {
    const base = (ENV[b.provider.baseEnv] || b.provider.base).replace(/\/$/, '')
    const res = await fetch(`${base}/chat/completions`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${ENV[b.origin.keyEnv]}` },
      body: JSON.stringify({
        model: b.model,
        temperature: 0,
        response_format: { type: 'json_object' },
        max_tokens: Number(ENV.RAG_EXTRACT_MAX_TOKENS || 1500),
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: `Extraits :\n\n${numbered}\n\n---\n\nChamps à extraire :\n${wanted}` },
        ],
      }),
      signal: ctrl.signal,
    })
    if (!res.ok) return empty(`le modèle a refusé la demande (${res.status})`)
    const data = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> }
    const parsed = safeJson(String(data?.choices?.[0]?.message?.content || ''))
    if (!parsed) return empty("le modèle n'a pas rendu de JSON exploitable")

    return {
      ok: true,
      docId,
      filename: doc.rows[0].filename,
      answeredBy: `${b.origin.id}:${b.model}`,
      answeredRegion: b.origin.region,
      fields: Object.fromEntries(fields.map((f) => [f.name, check(parsed[f.name], f, ordered)])),
    }
  } catch {
    return empty('le modèle n’a pas répondu à temps')
  } finally {
    clearTimeout(timer)
  }
}

/**
 * Retient une valeur, ou la refuse.
 *
 * Une valeur sans source utilisable est écartée. C'est délibérément sévère : le
 * coût d'un champ manquant est qu'on le remplit à la main, le coût d'un champ
 * inventé est qu'on ne le remplit jamais parce qu'on croit l'avoir.
 */
export function check(raw: unknown, f: FieldSpec, passages: Passage[]): FieldValue {
  const o = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>
  const value = o.value
  if (value === null || value === undefined || value === '') {
    return { value: null, pages: [], missing: String(o.missing || 'absent des extraits').slice(0, 200) }
  }

  const n = Number(o.source)
  const p = Number.isFinite(n) && n >= 1 && n <= passages.length ? passages[n - 1] : null
  if (!p) {
    return { value: null, pages: [], missing: 'valeur proposée sans extrait à l’appui · écartée' }
  }

  // La citation doit exister dans le passage. Un modèle qui reformule sa
  // « citation exacte » est en train de fabriquer, même quand la valeur est
  // juste — et on ne peut pas savoir laquelle des deux fois il fabrique.
  const quote = typeof o.quote === 'string' ? o.quote.trim() : ''
  const inPassage = quote.length >= 8 && normalise(p.text).includes(normalise(quote))

  const coerced = coerce(value, f.type)
  if (coerced === null) {
    return { value: null, pages: [], missing: `valeur non conforme au type ${f.type} · écartée` }
  }

  return {
    value: coerced,
    pages: [p.page],
    quote: inPassage ? quote.slice(0, 400) : p.text.slice(0, 400),
  }
}

const normalise = (s: string): string => s.toLowerCase().replace(/\s+/g, ' ').trim()

/** Ramène la valeur au type déclaré, ou rend null plutôt que de forcer. */
function coerce(v: unknown, t: FieldType): string | number | boolean | string[] | null {
  if (t === 'number') {
    if (typeof v === 'number') return Number.isFinite(v) ? v : null
    const s = String(v)
    // Sans un seul chiffre il n'y a pas de nombre. Le dire ici plutôt que de
    // laisser faire : en retirant tout ce qui n'est pas un chiffre, « beaucoup »
    // devient la chaîne vide, et Number('') vaut zéro. Un montant de 0 € inventé
    // sur un contrat est bien pire qu'un champ vide.
    if (!/\d/.test(s)) return null
    // « 12 500,50 € » · le point séparateur de milliers tombe, la virgule décide
    const n = Number(s.replace(/[^\d,.-]/g, '').replace(/\.(?=\d{3}\b)/g, '').replace(',', '.'))
    return Number.isFinite(n) ? n : null
  }
  if (t === 'boolean') {
    if (typeof v === 'boolean') return v
    const s = String(v).toLowerCase()
    if (/^(true|oui|yes|1)$/.test(s)) return true
    if (/^(false|non|no|0)$/.test(s)) return false
    return null
  }
  if (t === 'string[]') {
    if (Array.isArray(v)) return v.map((x) => String(x)).filter(Boolean).slice(0, 50)
    return String(v).split(/[;\n]|,\s(?=[A-ZÀ-Ý])/).map((s) => s.trim()).filter(Boolean).slice(0, 50)
  }
  if (t === 'date') {
    const s = String(v).trim()
    // On garde ce que le document dit, en normalisant seulement la forme
    // française non ambiguë. Réécrire une date qu'on n'a pas comprise est le
    // moyen le plus discret de changer un délai contractuel.
    const fr = /^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/.exec(s)
    if (fr) return `${fr[3]}-${fr[2].padStart(2, '0')}-${fr[1].padStart(2, '0')}`
    return s.slice(0, 100)
  }
  return String(v).slice(0, 2000)
}

/** Un modèle entoure parfois son JSON de texte ou d'une clôture Markdown. */
function safeJson(s: string): Record<string, any> | null {
  const trimmed = s.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '')
  try {
    const o = JSON.parse(trimmed)
    return o && typeof o === 'object' ? o : null
  } catch { /* on tente la première accolade équilibrée */ }
  const a = trimmed.indexOf('{')
  const b = trimmed.lastIndexOf('}')
  if (a < 0 || b <= a) return null
  try {
    const o = JSON.parse(trimmed.slice(a, b + 1))
    return o && typeof o === 'object' ? o : null
  } catch { return null }
}
