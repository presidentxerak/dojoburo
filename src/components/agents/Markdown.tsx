// Minimal, safe Markdown renderer for agent deliverables. Escapes first, then
// applies a small, well-known subset (headings, bold/italic/code, lists, hr,
// simple tables). No raw HTML passes through — LLM output is treated as text.
import { Fragment } from 'react'

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function inline(s: string): string {
  let t = esc(s)
  t = t.replace(/`([^`]+)`/g, '<code>$1</code>')
  t = t.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  t = t.replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>')
  t = t.replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
  return t
}

export function Markdown({ text }: { text: string }) {
  const lines = text.replace(/\r/g, '').split('\n')
  const blocks: React.ReactNode[] = []
  let i = 0
  let key = 0

  while (i < lines.length) {
    const line = lines[i]

    // fenced code
    if (/^```/.test(line)) {
      const buf: string[] = []
      i++
      while (i < lines.length && !/^```/.test(lines[i])) buf.push(lines[i++])
      i++
      blocks.push(<pre key={key++} className="md-pre"><code>{buf.join('\n')}</code></pre>)
      continue
    }
    // heading
    const h = line.match(/^(#{1,4})\s+(.*)$/)
    if (h) {
      const lvl = h[1].length
      const Tag = (`h${Math.min(lvl + 1, 6)}`) as any
      blocks.push(<Tag key={key++} className="md-h" dangerouslySetInnerHTML={{ __html: inline(h[2]) }} />)
      i++
      continue
    }
    // hr
    if (/^\s*(-{3,}|\*{3,})\s*$/.test(line)) {
      blocks.push(<hr key={key++} className="md-hr" />)
      i++
      continue
    }
    // table (| a | b | with a separator row)
    if (/^\s*\|.*\|\s*$/.test(line) && i + 1 < lines.length && /^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1])) {
      const head = splitRow(line)
      i += 2
      const rows: string[][] = []
      while (i < lines.length && /^\s*\|.*\|\s*$/.test(lines[i])) rows.push(splitRow(lines[i++]))
      blocks.push(
        <div key={key++} className="md-table-wrap">
          <table className="md-table">
            <thead><tr>{head.map((c, j) => <th key={j} dangerouslySetInnerHTML={{ __html: inline(c) }} />)}</tr></thead>
            <tbody>{rows.map((r, ri) => <tr key={ri}>{r.map((c, j) => <td key={j} dangerouslySetInnerHTML={{ __html: inline(c) }} />)}</tr>)}</tbody>
          </table>
        </div>,
      )
      continue
    }
    // list
    if (/^\s*([-*]|\d+\.)\s+/.test(line)) {
      const items: string[] = []
      const ordered = /^\s*\d+\./.test(line)
      while (i < lines.length && /^\s*([-*]|\d+\.)\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*([-*]|\d+\.)\s+/, ''))
        i++
      }
      const List = ordered ? 'ol' : 'ul'
      blocks.push(<List key={key++} className="md-list">{items.map((it, j) => <li key={j} dangerouslySetInnerHTML={{ __html: inline(it) }} />)}</List>)
      continue
    }
    // blank
    if (!line.trim()) {
      i++
      continue
    }
    // paragraph (gather until blank)
    const para: string[] = []
    while (i < lines.length && lines[i].trim() && !/^(#{1,4}\s|```|\s*\||\s*([-*]|\d+\.)\s)/.test(lines[i])) para.push(lines[i++])
    blocks.push(<p key={key++} className="md-p" dangerouslySetInnerHTML={{ __html: inline(para.join(' ')) }} />)
  }

  return <div className="md">{blocks.map((b, j) => <Fragment key={j}>{b}</Fragment>)}</div>
}

function splitRow(line: string): string[] {
  return line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim())
}
