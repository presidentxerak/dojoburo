// Répondre, et pouvoir prouver la réponse.
//
// C'est ici que le produit gagne ou perd sa crédibilité en entreprise. Une
// réponse fausse coûte cher ; une réponse fausse qui a l'air sourcée coûte
// beaucoup plus, parce qu'elle traverse la relecture. Le travail de ce fichier
// est donc moins de faire parler un modèle que de refuser ce qu'il dit quand
// rien ne l'appuie.
//
// Quatre garde-fous, dans l'ordre où ils s'appliquent :
//
//   1. Aucun passage retrouvé ⇒ aucun appel au modèle. On répond « les documents
//      ne permettent pas de répondre » sans avoir rien dépensé ni rien envoyé.
//      C'est le cas le plus fréquent d'hallucination et le moins cher à éviter.
//
//   2. Le modèle ne voit QUE les extraits. Pas l'historique, pas de connaissance
//      générale sollicitée, pas de question précédente.
//
//   3. Les citations sont VÉRIFIÉES après coup. Un « [4] » quand il y a trois
//      extraits est retiré, et une réponse affirmative sans aucune citation est
//      marquée `grounded: false`. Une consigne de citer n'est pas une garantie
//      de citation ; seule la vérification en est une.
//
//   4. Le fournisseur est européen ou il n'y en a pas. La question ET les
//      extraits partent chez lui : c'est un transfert de contenu documentaire,
//      pas une simple requête.
import { chain, type ProviderOrigin } from '../eu.js'
import { groundingBlock, GROUNDED_SYSTEM, type Passage } from './search.js'

const ENV = process.env as Record<string, string | undefined>

interface ChatProvider { id: string; base: string; baseEnv: string; model: string; modelEnv: string }

/**
 * Les modèles de réponse, européens, surchargeables.
 *
 * Un modèle moyen sur de bons extraits bat un grand modèle sur de mauvais
 * extraits : la qualité d'une réponse sourcée se joue au découpage et à la
 * recherche, pas à la taille du modèle. C'est ce qui rend ce choix soutenable.
 */
const PROVIDERS: Record<string, ChatProvider> = {
  mistral: {
    id: 'mistral',
    base: 'https://api.mistral.ai/v1',
    baseEnv: 'MISTRAL_BASE',
    model: 'mistral-small-latest',
    modelEnv: 'MISTRAL_MODEL',
  },
  ovh: {
    id: 'ovh',
    base: 'https://oai.endpoints.kepler.ai.cloud.ovh.net/v1',
    baseEnv: 'OVH_AI_BASE',
    model: 'Mistral-Small-3.2-24B-Instruct-2506',
    modelEnv: 'OVH_MODEL',
  },
  scaleway: {
    id: 'scaleway',
    base: 'https://api.scaleway.ai/v1',
    baseEnv: 'SCALEWAY_BASE',
    model: 'mistral-small-3.2-24b-instruct-2506',
    modelEnv: 'SCALEWAY_MODEL',
  },
}

export interface AnswerBackend { origin: ProviderOrigin; provider: ChatProvider; model: string }

/** Le premier fournisseur de réponse joignable · null quand il n'y en a pas. */
export function answerBackend(): AnswerBackend | null {
  for (const origin of chain()) {
    const p = PROVIDERS[origin.id]
    if (!p) continue
    return { origin, provider: p, model: ENV[p.modelEnv] || p.model }
  }
  return null
}

export interface Citation { n: number; docId: string; filename: string; page: number }

export interface Answer {
  text: string
  /** les extraits réellement cités, dans l'ordre où ils apparaissent */
  citations: Citation[]
  /** false quand la réponse affirme quelque chose sans citer un seul extrait */
  grounded: boolean
  /** null quand rien n'a été envoyé nulle part */
  answeredBy: string | null
  answeredRegion: string | null
  /** ce qu'on n'a pas pu faire, dit franchement */
  note?: string
}

const TIMEOUT_MS = Number(ENV.RAG_ANSWER_TIMEOUT_MS || 60000)

const NO_ANSWER = 'Les documents fournis ne permettent pas de répondre.'

/**
 * Une réponse appuyée sur des extraits, ou un refus assumé.
 *
 * Ne lève jamais : une panne de fournisseur rend les extraits avec une note, ce
 * qui reste utile — l'utilisateur lit les passages lui-même. Une recherche
 * documentaire qui tombe en panne parce qu'un modèle est indisponible serait un
 * mauvais échange.
 */
export async function ask(question: string, passages: Passage[]): Promise<Answer> {
  if (!passages.length) {
    return {
      text: NO_ANSWER, citations: [], grounded: true,
      answeredBy: null, answeredRegion: null,
      note: 'aucun passage ne correspond à cette question dans les documents déposés',
    }
  }

  const b = answerBackend()
  if (!b) {
    return {
      text: '', citations: [], grounded: false, answeredBy: null, answeredRegion: null,
      note: "aucun modèle européen n'est configuré · les passages sont rendus tels quels, à lire directement",
    }
  }

  const key = ENV[b.origin.keyEnv]
  if (!key) {
    return {
      text: '', citations: [], grounded: false, answeredBy: null, answeredRegion: null,
      note: `${b.origin.keyEnv} manque`,
    }
  }

  const base = (ENV[b.provider.baseEnv] || b.provider.base).replace(/\/$/, '')
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(`${base}/chat/completions`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${key}` },
      body: JSON.stringify({
        model: b.model,
        // Une température nulle · sur une question de contrat, la créativité est
        // exactement le défaut qu'on cherche à ne pas avoir.
        temperature: 0,
        max_tokens: Number(ENV.RAG_ANSWER_MAX_TOKENS || 900),
        messages: [
          { role: 'system', content: GROUNDED_SYSTEM },
          { role: 'user', content: `${groundingBlock(passages)}\n\n---\n\nQuestion : ${question}` },
        ],
      }),
      signal: ctrl.signal,
    })
    if (!res.ok) {
      return {
        text: '', citations: [], grounded: false, answeredBy: null, answeredRegion: null,
        note: `le modèle a refusé la demande (${res.status}) · les passages restent lisibles`,
      }
    }
    const data = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> }
    const raw = String(data?.choices?.[0]?.message?.content || '').trim()
    if (!raw) {
      return {
        text: '', citations: [], grounded: false, answeredBy: null, answeredRegion: null,
        note: 'le modèle a rendu une réponse vide',
      }
    }
    const checked = verify(raw, passages)
    return {
      ...checked,
      answeredBy: `${b.origin.id}:${b.model}`,
      answeredRegion: b.origin.region,
    }
  } catch {
    return {
      text: '', citations: [], grounded: false, answeredBy: null, answeredRegion: null,
      note: 'le modèle n’a pas répondu à temps · les passages restent lisibles',
    }
  } finally {
    clearTimeout(timer)
  }
}

/**
 * Vérifie les citations d'une réponse.
 *
 * Un modèle cite parfois un extrait qui n'existe pas — « [5] » alors qu'on lui
 * en a donné trois. Ce numéro est retiré du texte : laissé en place il donne à
 * une affirmation non appuyée l'apparence exacte d'une affirmation appuyée, ce
 * qui est pire que pas de citation du tout.
 *
 * `grounded` est faux quand une réponse affirme sans citer. Le refus explicite
 * ne compte pas comme une affirmation : « les documents ne permettent pas de
 * répondre » est la bonne réponse, et elle n'a rien à citer.
 */
export function verify(text: string, passages: Passage[]): Omit<Answer, 'answeredBy' | 'answeredRegion'> {
  const used: number[] = []
  const cleaned = text.replace(/\[(\d{1,2})\]/g, (m, d) => {
    const n = Number(d)
    if (n >= 1 && n <= passages.length) {
      if (!used.includes(n)) used.push(n)
      return m
    }
    return ''   // une source inexistante n'en est pas une
  }).replace(/[ \t]{2,}/g, ' ').replace(/ +([.,;:])/g, '$1').trim()

  const refuses = /ne permettent pas de répondre|ne permet pas de répondre|do not allow|cannot answer/i.test(cleaned)
  const citations: Citation[] = used.map((n) => {
    const p = passages[n - 1]
    return { n, docId: p.docId, filename: p.filename, page: p.page }
  })

  return {
    text: cleaned || NO_ANSWER,
    citations,
    grounded: refuses || citations.length > 0,
    note: !refuses && !citations.length
      ? 'réponse sans source vérifiable · à traiter comme une piste, pas comme un extrait du document'
      : undefined,
  }
}
