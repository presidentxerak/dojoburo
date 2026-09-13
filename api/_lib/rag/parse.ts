// Un fichier en entrée, du Markdown en sortie — avec les pages.
//
// C'est le `/parse` du produit : on dépose un contrat, on récupère un texte
// structuré dont chaque morceau sait de quelle page il vient. Sans ce numéro de
// page, une citation n'est pas vérifiable, et une réponse qu'on ne peut pas
// vérifier ne vaut pas mieux qu'une réponse inventée.
//
// Zéro dépendance, et ce n'est pas de l'ascétisme : ce code tourne chez le
// client, parfois sur son infrastructure, et chaque paquet ajouté est une ligne
// de plus dans l'analyse de risque de sa DSI. Node fournit zlib ; un .docx est
// un zip, un flux PDF est du deflate. Tout le reste est du parcours de texte.
//
// La décision qui compte est la dernière du fichier : quand l'extraction PDF
// rend trop peu de texte pour le nombre de pages, on ne renvoie PAS ce qu'on a
// trouvé. On déclare `needsOcr`. Un PDF scanné analysé « avec succès » en trois
// mots produit un index qui répond à côté pour toujours, sans que personne ne
// sache pourquoi — c'est le pire résultat possible, bien pire qu'un refus.
import { inflateRawSync, inflateSync } from 'node:zlib'

export type DocKind = 'text' | 'markdown' | 'html' | 'csv' | 'json' | 'ooxml' | 'pdf' | 'image' | 'unknown'

export interface ParsedPage { page: number; text: string }

export interface ParsedDoc {
  markdown: string
  pages: ParsedPage[]
  pageCount: number
  kind: DocKind
  /** true quand le fichier a besoin d'une reconnaissance optique pour être lu */
  needsOcr: boolean
  /** ce qu'il faut dire à l'utilisateur quand le résultat est partiel */
  warning?: string
}

const dec = (b: Uint8Array, enc: BufferEncoding = 'utf8') => Buffer.from(b).toString(enc)

/** L'extension, en minuscules, sans le point. */
const extOf = (filename: string) => (filename.split('.').pop() || '').toLowerCase()

export function kindOf(filename: string, mime?: string): DocKind {
  const e = extOf(filename)
  const m = (mime || '').toLowerCase()
  if (e === 'pdf' || m.includes('pdf')) return 'pdf'
  if (['docx', 'pptx', 'xlsx'].includes(e) || m.includes('officedocument')) return 'ooxml'
  if (['png', 'jpg', 'jpeg', 'gif', 'webp', 'tif', 'tiff', 'bmp', 'heic'].includes(e) || m.startsWith('image/')) return 'image'
  if (e === 'csv' || e === 'tsv' || m.includes('csv')) return 'csv'
  if (e === 'json' || m.includes('json')) return 'json'
  if (['html', 'htm'].includes(e) || m.includes('html')) return 'html'
  if (['md', 'markdown'].includes(e)) return 'markdown'
  if (['txt', 'log', 'text', ''].includes(e) || m.startsWith('text/')) return 'text'
  return 'unknown'
}

/* ------------------------------------------------------------------ texte -- */

/** Une page par tranche de ~3 000 caractères, coupée sur un saut de paragraphe.
 *
 *  Un .txt n'a pas de pages ; il en faut quand même, parce que « page 4 » est ce
 *  que l'utilisateur peut retrouver dans son propre fichier. On coupe entre les
 *  paragraphes pour qu'une citation ne commence jamais au milieu d'une phrase. */
function paginate(text: string, perPage = 3000): ParsedPage[] {
  const paras = text.split(/\n{2,}/)
  const pages: ParsedPage[] = []
  let buf = ''
  for (const p of paras) {
    if (buf && buf.length + p.length > perPage) {
      pages.push({ page: pages.length + 1, text: buf.trim() })
      buf = ''
    }
    buf += (buf ? '\n\n' : '') + p
  }
  if (buf.trim()) pages.push({ page: pages.length + 1, text: buf.trim() })
  return pages.length ? pages : [{ page: 1, text: '' }]
}

/* ------------------------------------------------------------------- html -- */

/** Le texte d'une page HTML, sans balises, titres conservés comme titres. */
function htmlToMarkdown(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi, (_, l, t) => `\n\n${'#'.repeat(Number(l))} ${strip(t)}\n\n`)
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, t) => `- ${strip(t)}\n`)
    .replace(/<(p|div|section|article|tr)[^>]*>/gi, '\n\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<td[^>]*>([\s\S]*?)<\/td>/gi, (_, t) => `${strip(t)} | `)
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}
const strip = (s: string) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()

/* -------------------------------------------------------------------- csv -- */

/** Un CSV en tableau Markdown · les colonnes restent alignées, ce qui compte
 *  quand un modèle doit répondre « quelle ligne dit X ». */
function csvToMarkdown(text: string, sep = ','): string {
  const rows = text.trim().split(/\r?\n/).slice(0, 5000).map((l) => splitCsv(l, sep))
  if (!rows.length) return ''
  const head = rows[0]
  const out = [`| ${head.join(' | ')} |`, `| ${head.map(() => '---').join(' | ')} |`]
  for (const r of rows.slice(1)) out.push(`| ${r.join(' | ')} |`)
  return out.join('\n')
}
function splitCsv(line: string, sep: string): string[] {
  const out: string[] = []
  let cur = '', q = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (q) {
      if (c === '"' && line[i + 1] === '"') { cur += '"'; i++ }
      else if (c === '"') q = false
      else cur += c
    } else if (c === '"') q = true
    else if (c === sep) { out.push(cur.trim()); cur = '' }
    else cur += c
  }
  out.push(cur.trim())
  return out
}

/* ------------------------------------------------------------------ ooxml -- */

/** Les entrées d'un zip, deflate compris.
 *
 *  src/lib/zip.ts ne lit que la méthode 0 parce qu'il n'écrit que celle-là ;
 *  un .docx produit par Word est toujours compressé. zlib est dans Node. */
function unzipEntries(buf: Uint8Array): Map<string, Uint8Array> {
  const out = new Map<string, Uint8Array>()
  const dv = new DataView(buf.buffer, buf.byteOffset, buf.byteLength)
  let eocd = -1
  for (let i = buf.length - 22; i >= 0; i--) { if (dv.getUint32(i, true) === 0x06054b50) { eocd = i; break } }
  if (eocd < 0) return out
  const count = dv.getUint16(eocd + 10, true)
  let p = dv.getUint32(eocd + 16, true)
  const td = new TextDecoder()
  for (let i = 0; i < count; i++) {
    if (p + 46 > buf.length || dv.getUint32(p, true) !== 0x02014b50) break
    const method = dv.getUint16(p + 10, true)
    const compSize = dv.getUint32(p + 20, true)
    const nameLen = dv.getUint16(p + 28, true)
    const extraLen = dv.getUint16(p + 30, true)
    const commentLen = dv.getUint16(p + 32, true)
    const lho = dv.getUint32(p + 42, true)
    const name = td.decode(buf.subarray(p + 46, p + 46 + nameLen))
    const lNameLen = dv.getUint16(lho + 26, true)
    const lExtraLen = dv.getUint16(lho + 28, true)
    const start = lho + 30 + lNameLen + lExtraLen
    const raw = buf.subarray(start, start + compSize)
    try {
      out.set(name, method === 8 ? new Uint8Array(inflateRawSync(Buffer.from(raw))) : raw)
    } catch { /* une entrée illisible ne doit pas perdre le reste du document */ }
    p += 46 + nameLen + extraLen + commentLen
  }
  return out
}

/** Le texte d'un document OOXML, une « page » par saut de page ou par diapositive. */
function ooxmlToPages(entries: Map<string, Uint8Array>): { pages: ParsedPage[]; kind: string } {
  // PowerPoint · une diapositive est une page, ce qui est la seule pagination
  // qu'un lecteur reconnaîtra
  const slides = [...entries.keys()].filter((n) => /^ppt\/slides\/slide\d+\.xml$/.test(n))
    .sort((a, b) => Number(a.match(/(\d+)/)![1]) - Number(b.match(/(\d+)/)![1]))
  if (slides.length) {
    return {
      kind: 'pptx',
      pages: slides.map((n, i) => ({ page: i + 1, text: xmlText(dec(entries.get(n)!)) })),
    }
  }
  // Word · on coupe sur les sauts de page explicites
  const docXml = entries.get('word/document.xml')
  if (docXml) {
    const xml = dec(docXml)
    const parts = xml.split(/<w:br[^>]*w:type="page"[^>]*\/>/)
    const pages = parts.map((p, i) => ({ page: i + 1, text: wordText(p) })).filter((p) => p.text.trim())
    return { kind: 'docx', pages: pages.length ? pages : [{ page: 1, text: wordText(xml) }] }
  }
  // Excel · une feuille par page
  const sheets = [...entries.keys()].filter((n) => /^xl\/worksheets\/sheet\d+\.xml$/.test(n)).sort()
  if (sheets.length) {
    const shared = entries.get('xl/sharedStrings.xml')
    const strings = shared ? [...dec(shared).matchAll(/<si>([\s\S]*?)<\/si>/g)].map((m) => xmlText(m[1])) : []
    return {
      kind: 'xlsx',
      pages: sheets.map((n, i) => ({ page: i + 1, text: sheetText(dec(entries.get(n)!), strings) })),
    }
  }
  return { kind: 'ooxml', pages: [{ page: 1, text: '' }] }
}

const xmlText = (xml: string) =>
  xml.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'")
    .replace(/[ \t]+/g, ' ').replace(/\s*\n\s*/g, '\n').trim()

/** Word · les paragraphes deviennent des paragraphes, et les titres des titres. */
function wordText(xml: string): string {
  const out: string[] = []
  for (const m of xml.matchAll(/<w:p\b[^>]*>([\s\S]*?)<\/w:p>/g)) {
    const body = m[1]
    const runs = [...body.matchAll(/<w:t(?:\s[^>]*)?>([\s\S]*?)<\/w:t>/g)].map((t) => t[1]).join('')
    const text = xmlText(runs)
    if (!text) continue
    const style = /<w:pStyle[^>]*w:val="(Heading|Titre)(\d)"/.exec(body)
    out.push(style ? `${'#'.repeat(Math.min(6, Number(style[2])))} ${text}` : text)
  }
  return out.join('\n\n')
}

/** Excel · les valeurs d'une feuille, ligne par ligne. */
function sheetText(xml: string, shared: string[]): string {
  const rows: string[] = []
  for (const r of xml.matchAll(/<row\b[^>]*>([\s\S]*?)<\/row>/g)) {
    const cells: string[] = []
    for (const c of r[1].matchAll(/<c\b([^>]*)>([\s\S]*?)<\/c>/g)) {
      const isShared = /t="s"/.test(c[1])
      const v = /<v>([\s\S]*?)<\/v>/.exec(c[2])?.[1] ?? ''
      cells.push(isShared ? (shared[Number(v)] ?? '') : xmlText(v))
    }
    if (cells.some((x) => x)) rows.push(`| ${cells.join(' | ')} |`)
  }
  return rows.join('\n')
}

/* -------------------------------------------------------------------- pdf -- */

/**
 * Le texte d'un PDF qui en contient.
 *
 * On inflate les flux de contenu et on lit les opérateurs d'affichage de texte.
 * Ce qui est délibérément hors périmètre : les polices CID en Identity-H avec
 * une CMap embarquée, où les octets ne sont pas des caractères mais des index
 * de glyphes. Sur ces documents l'extraction rend du charabia — d'où le contrôle
 * de plausibilité en fin de fonction, qui préfère avouer que deviner.
 */
function pdfToPages(buf: Uint8Array): { pages: ParsedPage[]; needsOcr: boolean; warning?: string } {
  const raw = Buffer.from(buf)
  const latin = raw.toString('latin1')

  // Combien de pages · /Count du catalogue, sinon on compte les objets Page
  let pageCount = 0
  const count = /\/Type\s*\/Pages[\s\S]{0,400}?\/Count\s+(\d+)/.exec(latin)
  if (count) pageCount = Number(count[1])
  if (!pageCount) pageCount = (latin.match(/\/Type\s*\/Page[^s]/g) || []).length
  if (!pageCount) pageCount = 1

  // Chaque flux, dans l'ordre du fichier · c'est l'ordre des pages dans
  // l'écrasante majorité des PDF produits par un traitement de texte
  const chunks: string[] = []
  const re = /stream\r?\n?/g
  let m: RegExpExecArray | null
  while ((m = re.exec(latin))) {
    const start = m.index + m[0].length
    const end = latin.indexOf('endstream', start)
    if (end < 0) continue
    const header = latin.slice(Math.max(0, m.index - 500), m.index)
    const bytes = raw.subarray(start, end)
    let text: string | null = null
    if (/\/FlateDecode/.test(header)) {
      try { text = inflateSync(bytes).toString('latin1') }
      catch { try { text = inflateRawSync(bytes).toString('latin1') } catch { text = null } }
    } else if (!/\/DCTDecode|\/JPXDecode|\/CCITTFaxDecode|\/Image/.test(header)) {
      text = bytes.toString('latin1')
    }
    if (text && /\bTj\b|\bTJ\b/.test(text)) chunks.push(text)
    re.lastIndex = end
  }

  const rendered = chunks.map(showText).filter((t) => t.trim())
  const pages: ParsedPage[] = rendered.length
    ? rendered.map((t, i) => ({ page: i + 1, text: t }))
    : [{ page: 1, text: '' }]

  // Le contrôle de plausibilité. Un PDF de texte tient au moins quelques
  // dizaines de caractères par page ; en dessous, c'est un scan, ou des polices
  // que cette fonction ne sait pas décoder. Dans les deux cas la bonne réponse
  // est « il faut une OCR », pas trois mots faux indexés pour toujours.
  const total = pages.reduce((n, p) => n + p.text.replace(/\s/g, '').length, 0)
  const perPage = total / Math.max(1, pageCount)
  if (perPage < 40) {
    return {
      pages: [{ page: 1, text: '' }],
      needsOcr: true,
      warning: `Aucune couche de texte exploitable (${Math.round(perPage)} caractères par page sur ${pageCount}). `
        + `Ce document est probablement un scan : il faut une reconnaissance optique.`,
    }
  }
  return { pages, needsOcr: false }
}

/** Les opérateurs d'affichage d'un flux de contenu, en texte lisible. */
function showText(stream: string): string {
  const out: string[] = []
  let line = ''
  // (texte) Tj · [(a) -250 (b)] TJ · (texte) ' · (texte) "
  const op = /\((?:\\.|[^\\()])*\)\s*(Tj|')|\[((?:[^\][]|\\.)*)\]\s*TJ|\bT\*|\bTd\b|\bTD\b|\bET\b/g
  let m: RegExpExecArray | null
  while ((m = op.exec(stream))) {
    if (m[1]) {
      line += pdfString(m[0].slice(0, m[0].lastIndexOf(')') + 1))
      if (m[1] === "'") { out.push(line); line = '' }
    } else if (m[2] !== undefined) {
      for (const s of m[2].matchAll(/\((?:\\.|[^\\()])*\)|(-?\d+(?:\.\d+)?)/g)) {
        if (s[1] !== undefined) {
          // un déplacement très négatif est une espace dans la plupart des PDF
          if (Number(s[1]) < -120) line += ' '
        } else line += pdfString(s[0])
      }
    } else {
      // Td / TD / T* / ET terminent une ligne
      if (line.trim()) { out.push(line); line = '' }
    }
  }
  if (line.trim()) out.push(line)
  return out.join('\n').replace(/[ \t]{2,}/g, ' ').replace(/\n{3,}/g, '\n\n').trim()
}

/** Une chaîne PDF littérale, échappements et octal compris. */
function pdfString(lit: string): string {
  const body = lit.slice(1, -1)
  let out = ''
  for (let i = 0; i < body.length; i++) {
    const c = body[i]
    if (c !== '\\') { out += c; continue }
    const n = body[++i]
    if (n === 'n') out += '\n'
    else if (n === 'r') out += ''
    else if (n === 't') out += '\t'
    else if (n >= '0' && n <= '7') {
      let oct = n
      while (oct.length < 3 && body[i + 1] >= '0' && body[i + 1] <= '7') oct += body[++i]
      out += String.fromCharCode(parseInt(oct, 8))
    } else out += n
  }
  // Les PDF occidentaux encodent en WinAnsi, très proche de latin1 · on repasse
  // les octets bruts en UTF-8 pour que « é » reste « é » et non « Ã© ».
  return Buffer.from(out, 'latin1').toString('utf8')
}

/* ------------------------------------------------------------------ entrée -- */

/**
 * Analyse un fichier. Ne lève jamais : un document illisible est un document
 * dont on dit qu'il est illisible, pas une requête en erreur 500.
 */
export function parseDocument(bytes: Uint8Array, filename: string, mime?: string): ParsedDoc {
  const kind = kindOf(filename, mime)
  try {
    if (kind === 'image') {
      return {
        markdown: '', pages: [{ page: 1, text: '' }], pageCount: 1, kind, needsOcr: true,
        warning: 'Une image demande une reconnaissance optique pour être indexée.',
      }
    }
    if (kind === 'pdf') {
      const r = pdfToPages(bytes)
      const md = r.pages.map((p) => p.text).join('\n\n')
      return { markdown: md, pages: r.pages, pageCount: r.pages.length, kind, needsOcr: r.needsOcr, warning: r.warning }
    }
    if (kind === 'ooxml') {
      const entries = unzipEntries(bytes)
      if (!entries.size) {
        return { markdown: '', pages: [{ page: 1, text: '' }], pageCount: 1, kind, needsOcr: false,
          warning: 'Fichier Office illisible ou protégé par mot de passe.' }
      }
      const r = ooxmlToPages(entries)
      const md = r.pages.map((p) => p.text).join('\n\n')
      return { markdown: md, pages: r.pages, pageCount: r.pages.length, kind, needsOcr: false }
    }

    const text = dec(bytes)
    let md = text
    if (kind === 'html') md = htmlToMarkdown(text)
    else if (kind === 'csv') md = csvToMarkdown(text, filename.toLowerCase().endsWith('.tsv') ? '\t' : ',')
    else if (kind === 'json') {
      try { md = '```json\n' + JSON.stringify(JSON.parse(text), null, 2) + '\n```' } catch { md = text }
    }
    const pages = paginate(md)
    return { markdown: md, pages, pageCount: pages.length, kind, needsOcr: false }
  } catch (e) {
    return {
      markdown: '', pages: [{ page: 1, text: '' }], pageCount: 1, kind, needsOcr: false,
      warning: `Analyse impossible : ${String((e as Error)?.message || e).slice(0, 120)}`,
    }
  }
}
