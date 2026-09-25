// LES MÉDIAS INTÉGRÉS · une vidéo ou une image publiée ailleurs, affichée dans
// la communauté. Demandé : « Pour les images et vidéos on les intègre d'un
// service comme Youtube ou Instagram ».
//
// LISTE BLANCHE, ET ADRESSE RECONSTRUITE · on ne met jamais dans un <iframe>
// l'adresse écrite par un membre. On en extrait un identifiant, vérifié par
// une expression stricte, et l'on reconstruit nous-mêmes l'adresse du lecteur
// officiel. Un lien qui ne correspond à aucun service reste du texte.
//
// RIEN NE PART AVANT LE CLIC · le lecteur ne se charge que lorsque le membre
// le demande (voir la façade dans game/Community). YouTube passe par son
// domaine sans cookie. Ces domaines sont les seuls ajoutés à frame-src dans
// vercel.json.

export type EmbedKind = 'youtube' | 'vimeo' | 'loom' | 'instagram' | 'tiktok'

export interface Embed {
  kind: EmbedKind
  /** l'identifiant extrait, vérifié */
  id: string
  /** l'adresse du lecteur, reconstruite */
  src: string
  /** une vignette quand le service en fournit une sans script */
  thumb: string | null
  /** vertical (Instagram, TikTok, YouTube Shorts) ou 16/9 */
  tall: boolean
}

export const EMBED_LABEL: Record<EmbedKind, string> = {
  youtube: 'YouTube',
  vimeo: 'Vimeo',
  loom: 'Loom',
  instagram: 'Instagram',
  tiktok: 'TikTok',
}

/** Les domaines des lecteurs · recopiés dans la CSP (voir l'épreuve). */
export const EMBED_ORIGINS = [
  'https://www.youtube-nocookie.com',
  'https://player.vimeo.com',
  'https://www.loom.com',
  'https://www.instagram.com',
  'https://www.tiktok.com',
] as const

const URL_RE = /https:\/\/[^\s<>"')]+/gi

/** Le média d'une adresse, ou null. */
export function parseEmbed(raw: string): Embed | null {
  let u: URL
  try { u = new URL(raw) } catch { return null }
  if (u.protocol !== 'https:') return null
  const host = u.hostname.replace(/^www\.|^m\./, '')
  const path = u.pathname

  if (host === 'youtube.com' || host === 'youtu.be' || host === 'youtube-nocookie.com') {
    let id: string | null = null
    let tall = false
    if (host === 'youtu.be') id = path.slice(1)
    else if (path === '/watch') id = u.searchParams.get('v')
    else {
      const m = path.match(/^\/(?:shorts|embed|live)\/([^/]+)/)
      if (m) { id = m[1]; tall = path.startsWith('/shorts/') }
    }
    if (!id || !/^[A-Za-z0-9_-]{11}$/.test(id)) return null
    return { kind: 'youtube', id, src: `https://www.youtube-nocookie.com/embed/${id}?rel=0`, thumb: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`, tall }
  }
  if (host === 'vimeo.com' || host === 'player.vimeo.com') {
    const m = path.match(/(?:^|\/video)\/(\d{6,12})(?:\/|$)/)
    if (!m) return null
    return { kind: 'vimeo', id: m[1], src: `https://player.vimeo.com/video/${m[1]}`, thumb: null, tall: false }
  }
  if (host === 'loom.com') {
    const m = path.match(/^\/(?:share|embed)\/([a-f0-9]{32})/)
    if (!m) return null
    return { kind: 'loom', id: m[1], src: `https://www.loom.com/embed/${m[1]}`, thumb: null, tall: false }
  }
  if (host === 'instagram.com') {
    const m = path.match(/^\/(p|reel|tv)\/([A-Za-z0-9_-]{5,40})/)
    if (!m) return null
    return { kind: 'instagram', id: m[2], src: `https://www.instagram.com/${m[1]}/${m[2]}/embed`, thumb: null, tall: true }
  }
  if (host === 'tiktok.com') {
    const m = path.match(/^\/@[A-Za-z0-9._-]{1,40}\/video\/(\d{8,25})/)
    if (!m) return null
    return { kind: 'tiktok', id: m[1], src: `https://www.tiktok.com/embed/v2/${m[1]}`, thumb: null, tall: true }
  }
  return null
}

/** Les médias d'un texte · trois au plus, sans doublon. */
export function embedsIn(text: string): Embed[] {
  const out: Embed[] = []
  for (const m of text.match(URL_RE) || []) {
    const e = parseEmbed(m.replace(/[.,;:!?]+$/, ''))
    if (e && !out.some((x) => x.src === e.src)) out.push(e)
    if (out.length === 3) break
  }
  return out
}
