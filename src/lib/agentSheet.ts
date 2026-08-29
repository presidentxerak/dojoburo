// An agent's brief, as plain fields instead of a Markdown file.
//
// Each agent ships with a Markdown sheet (src/data/contexts/<role>.md). Founders
// should never have to read or write Markdown to change how their agent works,
// so we parse that file into a handful of everyday fields, let them edit those,
// and write the file back out. The stored format stays Markdown, which is what
// the model receives.

export type FieldKind = 'text' | 'list' | 'steps'

export interface SheetField {
  /** the '## Heading' this maps to in the Markdown file */
  heading: string
  /** what the founder actually sees */
  label: string
  hint: string
  kind: FieldKind
  placeholder: string
}

/** The eight parts of a brief, in plain language, in the order they are shown. */
export const SHEET_FIELDS: SheetField[] = [
  {
    heading: 'Identity', label: 'Who they are', kind: 'text',
    hint: 'A sentence or two describing this teammate and what makes them useful.',
    placeholder: 'You are… a careful researcher who replaces guesswork with evidence.',
  },
  {
    heading: 'Mission', label: 'What they are here to do', kind: 'text',
    hint: 'The one thing they are responsible for. Keep it short.',
    placeholder: 'Find out who the customers really are and what already exists.',
  },
  {
    heading: 'Expertise', label: 'What they are good at', kind: 'list',
    hint: 'One skill per line.',
    placeholder: 'Competitor research\nAudience interviews\nMarket sizing',
  },
  {
    heading: 'Operating method', label: 'How they work, step by step', kind: 'steps',
    hint: 'One step per line. They follow these in order, every time.',
    placeholder: 'Write down the question to answer\nGather several independent sources\nSeparate facts from assumptions\nEnd with a recommendation',
  },
  {
    heading: 'Quality bar', label: 'What great work looks like', kind: 'list',
    hint: 'One standard per line. They check their own work against these.',
    placeholder: 'Every claim has a source\nShort enough that the team reads all of it',
  },
  {
    heading: 'Output', label: 'What you get back', kind: 'text',
    hint: 'The things this teammate hands you when the work is done.',
    placeholder: 'A short brief with the findings and a clear recommendation.',
  },
  {
    heading: 'Works with', label: 'Who they work with', kind: 'text',
    hint: 'Who they take work from, and who they pass it to.',
    placeholder: 'Goes first, then hands the brief to the rest of the team.',
  },
  {
    heading: 'Boundaries', label: 'What they must never do', kind: 'list',
    hint: 'One rule per line. These are hard limits they will not cross.',
    placeholder: 'Never invent a statistic or a source\nSay so plainly when the data is missing',
  },
]

export interface AgentSheet {
  /** the '# Title' line, kept as-is */
  title: string
  /** heading -> the text the founder edits */
  values: Record<string, string>
  /** anything we did not recognise, preserved so nothing is lost on save */
  extra: string
}

/** Strip the Markdown decoration a founder should never have to see. */
function clean(line: string): string {
  return line
    .replace(/^\s*[-*]\s+/, '')        // bullet
    .replace(/^\s*\d+\.\s+/, '')       // numbering
    .replace(/\*\*(.+?)\*\*/g, '$1')   // bold
    .replace(/`(.+?)`/g, '$1')         // code ticks
    .trim()
}

const STARTS_ITEM = (l: string) => /^\s*([-*]\s+|\d+\.\s+)/.test(l)

/**
 * Turn the raw lines of one section into what the founder edits.
 * Source Markdown is hard-wrapped, so a bullet can span several lines: those
 * continuations are folded back into their item, otherwise every wrapped line
 * would become a separate bullet the next time it is saved.
 */
function toField(rawLines: string[], kind: FieldKind): string {
  const lines = rawLines.map((l) => l.replace(/\s+$/, ''))
  if (kind === 'text') {
    // join hard-wrapped prose; a blank line still separates paragraphs
    const paras: string[] = []
    let cur: string[] = []
    for (const l of lines) {
      if (!l.trim()) { if (cur.length) { paras.push(cur.join(' ')); cur = [] } continue }
      cur.push(clean(l))
    }
    if (cur.length) paras.push(cur.join(' '))
    return paras.join('\n\n').trim()
  }
  // list / steps · one item per line
  const items: string[] = []
  for (const l of lines) {
    if (!l.trim()) continue
    if (STARTS_ITEM(l) || items.length === 0) items.push(clean(l))
    else items[items.length - 1] += ' ' + clean(l) // wrapped continuation
  }
  return items.filter(Boolean).join('\n')
}

const KIND_BY_HEADING: Record<string, FieldKind> = Object.fromEntries(
  SHEET_FIELDS.map((f) => [f.heading.toLowerCase(), f.kind]),
)

/** Markdown sheet -> editable fields. */
export function parseSheet(md: string): AgentSheet {
  const lines = (md || '').replace(/\r/g, '').split('\n')
  const known = new Set(SHEET_FIELDS.map((f) => f.heading.toLowerCase()))
  let title = ''
  const values: Record<string, string> = {}
  const extraLines: string[] = []

  let current: string | null = null
  let buf: string[] = []
  const flush = () => {
    if (current) values[current] = toField(buf, KIND_BY_HEADING[current.toLowerCase()] ?? 'text')
    buf = []
  }

  for (const raw of lines) {
    const h1 = raw.match(/^#\s+(.*)$/)
    if (h1 && !title) { title = h1[1].trim(); continue }
    const h2 = raw.match(/^##\s+(.*)$/)
    if (h2) {
      flush()
      const name = h2[1].trim()
      current = known.has(name.toLowerCase()) ? name : null
      if (!current) extraLines.push(raw)
      continue
    }
    if (current) buf.push(raw)
    else if (raw.trim()) extraLines.push(raw)
  }
  flush()

  return { title, values, extra: extraLines.join('\n').trim() }
}

/** Editable fields -> Markdown sheet (what the model receives). */
export function serializeSheet(sheet: AgentSheet): string {
  const parts: string[] = []
  if (sheet.title) parts.push(`# ${sheet.title}`)
  for (const f of SHEET_FIELDS) {
    const v = (sheet.values[f.heading] ?? '').trim()
    if (!v) continue
    let body: string
    if (f.kind === 'text') {
      // keep the founder's paragraph breaks, drop stray blank runs
      body = v.split(/\n{2,}/).map((p) => p.split('\n').map((l) => l.trim()).filter(Boolean).join(' ')).filter(Boolean).join('\n\n')
    } else {
      const lines = v.split('\n').map((l) => l.trim()).filter(Boolean)
      body = f.kind === 'list'
        ? lines.map((l) => `- ${l}`).join('\n')
        : lines.map((l, i) => `${i + 1}. ${l}`).join('\n')
    }
    parts.push(`## ${f.heading}\n${body}`)
  }
  if (sheet.extra.trim()) parts.push(sheet.extra.trim())
  return parts.join('\n\n') + '\n'
}
