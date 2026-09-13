// Découper un document en passages, sans perdre d'où ils viennent.
//
// Le découpage décide de la qualité des réponses bien plus que le modèle. Trois
// règles, chacune apprise d'un mode d'échec précis :
//
//   · On coupe sur les frontières que l'auteur a écrites — titres, paragraphes,
//     lignes de tableau — et jamais au milieu d'une phrase. Un passage qui
//     commence par « ...moyennant un préavis de trois mois » ne se comprend pas,
//     et le modèle le complète alors en inventant.
//
//   · Chaque passage garde sa page ET le titre sous lequel il se trouve. « Page 4 »
//     permet de vérifier ; « Article 4 - Résiliation » permet de comprendre la
//     citation sans ouvrir le document.
//
//   · Les passages se recouvrent. Une phrase à cheval sur deux découpes serait
//     absente des deux sans ce recouvrement, et c'est toujours celle qu'on
//     cherchait.
import type { ParsedPage } from './parse.js'

export interface Chunk {
  ordinal: number
  page: number
  text: string
  /** le dernier titre rencontré au-dessus · sert d'étiquette à la citation */
  heading?: string
}

export interface ChunkOptions {
  /** taille visée, en caractères · ~250 mots, ce qu'un modèle lit sans se diluer */
  size?: number
  /** ce qu'on répète du passage précédent */
  overlap?: number
}

/** Les frontières où couper, de la plus franche à la plus faible. */
const HEADING = /^(#{1,6})\s+(.+)$/
const HARD_BREAK = /\n{2,}/

/**
 * Coupe un document paginé en passages.
 *
 * Ne rend jamais de passage vide, et ne rend jamais un passage plus long que
 * `size` × 2 : un tableau de 400 lignes sans saut de paragraphe existe, et sans
 * cette limite il devient un seul passage que rien ne peut retrouver.
 */
export function chunkPages(pages: ParsedPage[], opts: ChunkOptions = {}): Chunk[] {
  const size = opts.size ?? 1200
  const overlap = opts.overlap ?? 160
  const out: Chunk[] = []
  let heading: string | undefined

  for (const p of pages) {
    if (!p.text.trim()) continue
    // Les blocs que l'auteur a séparés. On les recompose jusqu'à `size`.
    const blocks = p.text.split(HARD_BREAK).map((b) => b.trim()).filter(Boolean)
    let buf = ''

    const flush = () => {
      const text = buf.trim()
      if (!text) return
      out.push({ ordinal: out.length, page: p.page, text, heading })
      // le recouvrement reprend la fin du passage, coupée sur un mot
      buf = overlap > 0 && text.length > overlap
        ? text.slice(-overlap).replace(/^\S*\s/, '')
        : ''
    }

    for (const block of blocks) {
      const h = HEADING.exec(block)
      if (h) {
        // Un titre ferme ce qui précède : le paragraphe suivant appartient à une
        // autre section, et les mélanger produit des citations qui attribuent
        // une clause au mauvais article.
        flush()
        buf = ''
        heading = h[2].trim()
        continue
      }
      if (buf && buf.length + block.length + 2 > size) flush()
      // un bloc seul plus long que deux fois la cible est coupé sur ses phrases
      if (block.length > size * 2) {
        for (const piece of splitSentences(block, size)) {
          if (buf && buf.length + piece.length + 1 > size) flush()
          buf += (buf ? ' ' : '') + piece
        }
      } else {
        buf += (buf ? '\n\n' : '') + block
      }
    }
    flush()
    buf = ''
  }

  // Renumérote proprement · `ordinal` est ce qui ordonne une citation multiple
  return out.map((c, i) => ({ ...c, ordinal: i }))
}

/** Coupe un bloc trop long sur ses fins de phrase, jamais au milieu d'un mot. */
function splitSentences(block: string, size: number): string[] {
  const parts = block.split(/(?<=[.!?…])\s+(?=[A-ZÀ-ÝŒ«"])/)
  const out: string[] = []
  let buf = ''
  for (const s of parts) {
    if (buf && buf.length + s.length > size) { out.push(buf); buf = '' }
    // une « phrase » plus longue que la cible (un tableau, une énumération)
    // est coupée sur des espaces plutôt que tronquée
    if (s.length > size) {
      const words = s.split(/\s+/)
      for (const w of words) {
        if (buf.length + w.length + 1 > size) { out.push(buf); buf = '' }
        buf += (buf ? ' ' : '') + w
      }
    } else {
      buf += (buf ? ' ' : '') + s
    }
  }
  if (buf.trim()) out.push(buf)
  return out
}

/** Le libellé d'une citation : « contrat.pdf · p. 2 · Article 4 - Résiliation ». */
export const citationLabel = (filename: string, c: { page: number; heading?: string }): string =>
  [filename, `p. ${c.page}`, c.heading].filter(Boolean).join(' · ')
