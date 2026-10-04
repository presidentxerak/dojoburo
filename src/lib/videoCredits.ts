import { useEffect, useState } from 'react'

/** LES CRÉDITS · demandé : « crédite bien les auteurs et chaines youtube dans
 *  tous les cours en-dessous des vidéos ». Le nom de la chaîne est lu chez
 *  YouTube par notre serveur (api/video-credits), jamais écrit à la main, et
 *  gardé ici pour la session. Le navigateur ne contacte pas YouTube avant le
 *  clic ; les liens vers la chaîne et la vidéo ne chargent rien d'eux-mêmes. */
export type Credit = { author: string; url: string } | null
const creditCache = new Map<string, Credit>()
export function useVideoCredits(ids: string[]) {
  const key = ids.join(',')
  const [credits, setCredits] = useState<Record<string, Credit>>(() =>
    Object.fromEntries(ids.filter((id) => creditCache.has(id)).map((id) => [id, creditCache.get(id)!])))
  useEffect(() => {
    const missing = ids.filter((id) => !creditCache.has(id))
    if (!missing.length) return
    let live = true
    // le serveur répond par lots de six (api/video-credits, MAX_IDS)
    const chunks: string[][] = []
    for (let k = 0; k < missing.length; k += 6) chunks.push(missing.slice(k, k + 6))
    Promise.all(chunks.map((c) => fetch(`/api/video-credits?ids=${c.map(encodeURIComponent).join(',')}`)
      .then((r) => (r.ok ? r.json() : null))
      .catch(() => null)))
      .then((all: ({ credits?: Record<string, Credit> } | null)[]) => {
        const got = Object.assign({}, ...all.map((d) => d?.credits ?? {})) as Record<string, Credit>
        missing.forEach((id) => { if (got[id] !== undefined) creditCache.set(id, got[id]) })
        if (live) setCredits(Object.fromEntries(ids.filter((id) => creditCache.has(id)).map((id) => [id, creditCache.get(id)!])))
      })
      .catch(() => { /* hors ligne ou sans serveur · le lien vers la vidéo crédite quand même */ })
    return () => { live = false }
  }, [key])
  return credits
}

