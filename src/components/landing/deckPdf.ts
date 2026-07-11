import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import { DECK_SLIDES } from '../../data/deckSlides'
import { FORECAST, BUSINESS_PLAN, CONTACT_EMAIL } from '../../data/financials'

// Build and download the investor pitch deck as a real landscape PDF · one slide
// per page, matching the on-screen deck: centred text, a big monospace title
// (echoing the Silkscreen brand face), an Outfit-style lead, and the same cards /
// stat tiles / financial tables. No 2D character illustrations · clean and
// typographic, the way an investor deck reads.

type RGB = [number, number, number]
const INK: RGB = [20, 20, 26]
const MUTED: RGB = [120, 128, 150]
const PAPER: RGB = [255, 255, 255]
const CARD_LINE: RGB = [228, 230, 236]

function hexRgb(hex: string): RGB {
  const h = hex.replace('#', '')
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]
}
function tint(c: RGB, t: number): RGB {
  return [Math.round(c[0] + (255 - c[0]) * t), Math.round(c[1] + (255 - c[1]) * t), Math.round(c[2] + (255 - c[2]) * t)]
}
function shade(c: RGB, t: number): RGB { // mix toward black
  return [Math.round(c[0] * (1 - t)), Math.round(c[1] * (1 - t)), Math.round(c[2] * (1 - t))]
}

export function downloadDeckPdf() {
  const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' })
  const W = doc.internal.pageSize.getWidth()
  const H = doc.internal.pageSize.getHeight()
  const CX = W / 2

  DECK_SLIDES.forEach((s, i) => {
    if (i > 0) doc.addPage()
    const accent = hexRgb(s.accent)

    // clean paper · no coloured top strip
    doc.setFillColor(...PAPER); doc.rect(0, 0, W, H, 'F')

    const isTable = s.layout === 'table'
    const titleH = isTable ? 12 : 15
    const titleLines = (() => { doc.setFont('courier', 'bold'); doc.setFontSize(isTable ? 28 : 38); return doc.splitTextToSize(s.title, W - 60) })()
    const leadLines = (() => { doc.setFont('helvetica', 'normal'); doc.setFontSize(14); return doc.splitTextToSize(s.line, Math.min(W - 90, 210)) })()
    const extraH = s.layout === 'cards' ? 36 : s.layout === 'stats' ? 40 : (s.points && !isTable) ? 20 : 0
    // measure the whole block so it can be centred vertically (tables stay high)
    const blockH = 8 + titleLines.length * titleH + 6 + leadLines.length * 7 + (extraH ? 12 + extraH : 0)
    let y = isTable ? 30 : Math.max(40, (40 + (H - 26)) / 2 - blockH / 2)

    // eyebrow (centred, accent)
    doc.setFont('helvetica', 'bold'); doc.setFontSize(11); doc.setTextColor(...accent)
    doc.text((s.n ? `${s.n} · ` : '') + s.eyebrow.toUpperCase(), CX, y, { align: 'center' })
    y += 15

    // big title · Courier bold echoes the Silkscreen monospace face
    doc.setFont('courier', 'bold'); doc.setTextColor(...INK); doc.setFontSize(isTable ? 28 : 38)
    doc.text(titleLines, CX, y, { align: 'center' })
    y += titleLines.length * titleH

    // lead (centred, Helvetica)
    doc.setFont('helvetica', 'normal'); doc.setFontSize(14); doc.setTextColor(...MUTED)
    doc.text(leadLines, CX, y + 4, { align: 'center' })
    y += 4 + leadLines.length * 7 + 12

    // illustration area · cards, stat tiles, key-point pills or the financial table
    if (s.layout === 'cards' && s.cards) {
      drawCards(doc, s.cards.map((c) => [c.label, c.sub]), CX, y)
    } else if (s.layout === 'stats' && s.stats) {
      drawStats(doc, s.stats.map((c) => [c.big, c.label]), CX, y, accent)
    } else if (s.points && !isTable) {
      drawPills(doc, s.points, CX, y, accent)
    } else if (s.layout === 'table' && s.table) {
      const data = s.table === 'forecast' ? FORECAST : BUSINESS_PLAN
      autoTable(doc, {
        head: [data.head], body: data.rows, startY: Math.max(y, 74),
        margin: { left: 22, right: 22 }, theme: 'grid',
        styles: { font: 'helvetica', fontSize: 12, cellPadding: 3.2, textColor: INK, lineColor: CARD_LINE, lineWidth: 0.2, halign: 'right' },
        headStyles: { fillColor: accent, textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 12, halign: 'right' },
        alternateRowStyles: { fillColor: [248, 249, 251] },
        columnStyles: { 0: { fontStyle: 'bold', halign: 'left' } },
      })
      const endY = (doc as unknown as { lastAutoTable?: { finalY: number } }).lastAutoTable?.finalY ?? H - 40
      doc.setFont('helvetica', 'normal'); doc.setFontSize(9.5); doc.setTextColor(...MUTED)
      doc.text(doc.splitTextToSize(data.note, W - 44), CX, endY + 8, { align: 'center' })
    }

    // footer
    doc.setFont('helvetica', 'bold'); doc.setFontSize(10); doc.setTextColor(...INK)
    doc.text('dojoburo', 22, H - 12)
    doc.setFont('helvetica', 'normal'); doc.setTextColor(...MUTED)
    doc.text('· a company in one sentence, run by AI agents', 44, H - 12)

    const showContact = i === 0 || i === DECK_SLIDES.length - 1 || s.layout === 'table'
    if (showContact) {
      doc.setFont('helvetica', 'bold'); doc.setTextColor(...accent)
      doc.text(CONTACT_EMAIL, CX, H - 12, { align: 'center' })
    }
    doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(...MUTED)
    doc.text(`${i + 1} / ${DECK_SLIDES.length}`, W - 22, H - 12, { align: 'right' })
  })

  doc.save('dojoburo-investor-pitch-deck.pdf')
}

// A centred row of cards (label + sub), landing-style rounded rectangles.
function drawCards(doc: jsPDF, cards: [string, string][], cx: number, y: number) {
  const cw = 74, ch = 30, gap = 10
  const total = cards.length * cw + (cards.length - 1) * gap
  let x = cx - total / 2
  cards.forEach(([label, sub]) => {
    doc.setFillColor(...PAPER); doc.setDrawColor(...CARD_LINE); doc.setLineWidth(0.3)
    doc.roundedRect(x, y, cw, ch, 1.4, 1.4, 'FD')
    doc.setFont('helvetica', 'bold'); doc.setFontSize(13); doc.setTextColor(...INK)
    doc.text(label, x + cw / 2, y + 13, { align: 'center', maxWidth: cw - 8 })
    doc.setFont('helvetica', 'normal'); doc.setFontSize(10); doc.setTextColor(...MUTED)
    doc.text(sub, x + cw / 2, y + 22, { align: 'center', maxWidth: cw - 8 })
    x += cw + gap
  })
}

// A centred row of key-point pills · fills text-only slides.
function drawPills(doc: jsPDF, points: string[], cx: number, y: number, accent: RGB) {
  const ph = 12, gap = 8, padX = 7
  doc.setFont('helvetica', 'bold'); doc.setFontSize(11)
  const widths = points.map((p) => doc.getTextWidth(p) + padX * 2)
  const total = widths.reduce((a, w) => a + w, 0) + (points.length - 1) * gap
  let x = cx - total / 2
  points.forEach((p, i) => {
    const w = widths[i]
    doc.setFillColor(...tint(accent, 0.88)); doc.setDrawColor(...tint(accent, 0.55)); doc.setLineWidth(0.3)
    doc.roundedRect(x, y, w, ph, 1.4, 1.4, 'FD')
    doc.setTextColor(...shade(accent, 0.5))
    doc.text(p, x + w / 2, y + 7.8, { align: 'center' })
    x += w + gap
  })
}

// A centred row of stat tiles (big number + label).
function drawStats(doc: jsPDF, stats: [string, string][], cx: number, y: number, accent: RGB) {
  const cw = 66, ch = 34, gap = 12
  const total = stats.length * cw + (stats.length - 1) * gap
  let x = cx - total / 2
  stats.forEach(([big, label]) => {
    doc.setFillColor(...tint(accent, 0.9)); doc.setDrawColor(...tint(accent, 0.6)); doc.setLineWidth(0.3)
    doc.roundedRect(x, y, cw, ch, 1.4, 1.4, 'FD')
    doc.setFont('courier', 'bold'); doc.setFontSize(18); doc.setTextColor(...accent)
    doc.text(big, x + cw / 2, y + 15, { align: 'center', maxWidth: cw - 6 })
    doc.setFont('helvetica', 'normal'); doc.setFontSize(9.5); doc.setTextColor(...MUTED)
    doc.text(label, x + cw / 2, y + 26, { align: 'center', maxWidth: cw - 6 })
    x += cw + gap
  })
}
