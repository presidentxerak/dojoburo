import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import { DECK_SLIDES } from '../../data/deckSlides'
import { FORECAST, BUSINESS_PLAN, CONTACT_EMAIL } from '../../data/financials'

// Build and download the investor pitch deck as a real landscape PDF. Vector
// text, tables AND drawn kawaii-character illustrations (one per page) in the
// DojoBuro brand palette · one slide per page.

type RGB = [number, number, number]
const INK: RGB = [20, 20, 26]
const MUTED: RGB = [120, 128, 150]
const PAPER: RGB = [255, 255, 255]
const HEAD: RGB = [214, 221, 230]
const DARK: RGB = [30, 32, 40]
const CHEEK: RGB = [255, 150, 180]
const SHOE: RGB = [244, 244, 246]

function hexRgb(hex: string): RGB {
  const h = hex.replace('#', '')
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]
}
function mix(a: RGB, b: RGB, t: number): RGB {
  return [Math.round(a[0] + (b[0] - a[0]) * t), Math.round(a[1] + (b[1] - a[1]) * t), Math.round(a[2] + (b[2] - a[2]) * t)]
}

// ---- drawn illustrations ---------------------------------------------------

function drawObject(doc: jsPDF, kind: string, x: number, y: number, s: number, c: RGB) {
  doc.setDrawColor(...mix(c, DARK, 0.25))
  doc.setLineWidth(0.4)
  const fill = (col: RGB) => doc.setFillColor(...col)
  switch (kind) {
    case 'briefcase':
      fill(c); doc.roundedRect(x - 2.2 * s, y - 1.2 * s, 4.4 * s, 3.2 * s, 0.5 * s, 0.5 * s, 'F')
      fill(mix(c, DARK, 0.3)); doc.roundedRect(x - 0.9 * s, y - 2.2 * s, 1.8 * s, 1.2 * s, 0.3 * s, 0.3 * s, 'S')
      fill([255, 255, 255]); doc.rect(x - 2.2 * s, y - 0.2 * s, 4.4 * s, 0.5 * s, 'F')
      break
    case 'coins':
      ;[1.4, 0.2, -1].forEach((dy, i) => { fill(mix(c, [255, 210, 60], 0.3)); doc.ellipse(x + (i === 1 ? 0.3 * s : 0), y + dy * s, 2.2 * s, 0.8 * s, 'F') })
      break
    case 'gem':
      fill(c)
      doc.triangle(x - 2 * s, y - 1.2 * s, x + 2 * s, y - 1.2 * s, x, y + 2.4 * s, 'F')
      fill(mix(c, [255, 255, 255], 0.3)); doc.triangle(x - 2 * s, y - 1.2 * s, x, y - 1.2 * s, x - 0.8 * s, y + 0.8 * s, 'F')
      break
    case 'rocket':
      fill(c); doc.roundedRect(x - 1.1 * s, y - 1.6 * s, 2.2 * s, 3 * s, 1 * s, 1 * s, 'F')
      fill(mix(c, DARK, 0.25)); doc.triangle(x - 1.1 * s, y - 1.2 * s, x - 2.1 * s, y + 1.6 * s, x - 1.1 * s, y + 1.6 * s, 'F')
      doc.triangle(x + 1.1 * s, y - 1.2 * s, x + 2.1 * s, y + 1.6 * s, x + 1.1 * s, y + 1.6 * s, 'F')
      fill([255, 198, 26]); doc.triangle(x - 0.8 * s, y + 1.6 * s, x + 0.8 * s, y + 1.6 * s, x, y + 3.2 * s, 'F')
      fill([255, 255, 255]); doc.circle(x, y - 0.3 * s, 0.6 * s, 'F')
      break
    case 'gear':
      fill(c); doc.circle(x, y, 2 * s, 'F')
      for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2; fill(c); doc.rect(x + Math.cos(a) * 2 * s - 0.4 * s, y + Math.sin(a) * 2 * s - 0.4 * s, 0.8 * s, 0.8 * s, 'F') }
      fill([255, 255, 255]); doc.circle(x, y, 0.7 * s, 'F')
      break
    case 'network':
      fill(c); doc.circle(x, y, 1.3 * s, 'F')
      ;[0, 1, 2, 3].forEach((i) => { const a = (i / 4) * Math.PI * 2 + 0.6; const px = x + Math.cos(a) * 2.6 * s, py = y + Math.sin(a) * 2.6 * s; doc.setDrawColor(...c); doc.setLineWidth(0.5); doc.line(x, y, px, py); fill(mix(c, [255, 255, 255], 0.15)); doc.circle(px, py, 0.8 * s, 'F') })
      break
    case 'eye':
      fill([255, 255, 255]); doc.ellipse(x, y, 2.4 * s, 1.6 * s, 'F')
      fill(c); doc.circle(x, y, 1.1 * s, 'F'); fill(DARK); doc.circle(x, y, 0.5 * s, 'F')
      break
    default:
      fill(c); doc.circle(x, y, 2 * s, 'F')
  }
}

/** A kawaii character (round head, ^_^ eyes, cheeks, body, legs) + a floating object. */
function drawHero(doc: jsPDF, cx: number, cy: number, s: number, body: RGB, objKind: string) {
  const legC = mix(body, DARK, 0.35)
  // legs + shoes
  ;[-1.7, 0.5].forEach((lx) => {
    doc.setFillColor(...legC); doc.roundedRect(cx + lx * s, cy + 6.5 * s, 1.2 * s, 3.2 * s, 0.4 * s, 0.4 * s, 'F')
    doc.setFillColor(...SHOE); doc.ellipse(cx + (lx + 0.6) * s, cy + 9.7 * s, 1.2 * s, 0.7 * s, 'F')
  })
  // body
  doc.setFillColor(...body); doc.roundedRect(cx - 5.5 * s, cy - 1 * s, 11 * s, 8 * s, 2.6 * s, 2.6 * s, 'F')
  // arms
  doc.setFillColor(...body); doc.circle(cx - 6 * s, cy + 1.6 * s, 1.7 * s, 'F'); doc.circle(cx + 6 * s, cy + 1.6 * s, 1.7 * s, 'F')
  // head
  doc.setFillColor(...HEAD); doc.circle(cx, cy - 8 * s, 7 * s, 'F')
  // cheeks
  doc.setFillColor(...CHEEK); doc.circle(cx - 4.4 * s, cy - 6.4 * s, 1.4 * s, 'F'); doc.circle(cx + 4.4 * s, cy - 6.4 * s, 1.4 * s, 'F')
  // ^_^ eyes
  doc.setDrawColor(...DARK); doc.setLineWidth(0.5 * s); doc.setLineCap('round')
  ;[-2.6, 2.6].forEach((ex) => {
    doc.line(cx + (ex - 1.1) * s, cy - 8 * s, cx + ex * s, cy - 9 * s)
    doc.line(cx + ex * s, cy - 9 * s, cx + (ex + 1.1) * s, cy - 8 * s)
  })
  // small smile
  doc.setFillColor(...DARK); doc.ellipse(cx, cy - 6 * s, 1 * s, 0.7 * s, 'F')
  // the object it carries, floating to the side
  drawObject(doc, objKind, cx + 9 * s, cy + 2 * s, s * 0.9, body)
}

// ---- deck ------------------------------------------------------------------

export function downloadDeckPdf() {
  const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' })
  const W = doc.internal.pageSize.getWidth()
  const H = doc.internal.pageSize.getHeight()
  const M = 22

  DECK_SLIDES.forEach((s, i) => {
    if (i > 0) doc.addPage()
    const accent = hexRgb(s.accent)

    doc.setFillColor(...PAPER); doc.rect(0, 0, W, H, 'F')
    doc.setFillColor(...accent); doc.rect(0, 0, W, 4, 'F')

    // kicker
    doc.setFont('helvetica', 'bold'); doc.setFontSize(11); doc.setTextColor(...accent)
    doc.text((s.n ? `${s.n} · ` : '') + s.kicker.toUpperCase(), M, 42)

    if (s.visual === 'brand' && i === 0) {
      doc.setFont('helvetica', 'bold'); doc.setFontSize(52); doc.setTextColor(...INK)
      doc.text('dojoburo', M, 78)
    }

    // headline (Outfit-black feel via Helvetica bold)
    doc.setFont('helvetica', 'bold'); doc.setFontSize(24); doc.setTextColor(...INK)
    const lineY = s.visual === 'brand' && i === 0 ? 100 : 62
    const wrapped = doc.splitTextToSize(s.line, (s.visual === 'table' ? W - M * 2 : 150) - 6)
    doc.text(wrapped, M, lineY)

    if (s.visual === 'table') {
      // a small character up top-right, table below
      drawHero(doc, W - 42, 34, 1.5, accent, s.obj)
      const data = s.table === 'forecast' ? FORECAST : BUSINESS_PLAN
      autoTable(doc, {
        head: [data.head], body: data.rows,
        startY: lineY + wrapped.length * 9 + 6,
        margin: { left: M, right: M }, theme: 'grid',
        styles: { font: 'helvetica', fontSize: 12, cellPadding: 3.4, textColor: INK, lineColor: [228, 230, 236], lineWidth: 0.2 },
        headStyles: { fillColor: accent, textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 12 },
        alternateRowStyles: { fillColor: [248, 249, 251] },
        columnStyles: { 0: { fontStyle: 'bold' } },
      })
      const endY = (doc as unknown as { lastAutoTable?: { finalY: number } }).lastAutoTable?.finalY ?? H - 40
      doc.setFont('helvetica', 'normal'); doc.setFontSize(9.5); doc.setTextColor(...MUTED)
      doc.text(doc.splitTextToSize(data.note, W - M * 2), M, endY + 8)
    } else {
      // a big character illustration on the right half
      drawHero(doc, 224, 120, i === 0 ? 3.6 : 3.3, accent, s.obj)
    }

    // footer
    doc.setFont('helvetica', 'bold'); doc.setFontSize(10); doc.setTextColor(...INK)
    doc.text('dojoburo', M, H - 16)
    doc.setFont('helvetica', 'normal'); doc.setTextColor(...MUTED)
    doc.text('· automated productivity on the XRP Ledger', M + 22, H - 16)

    const showContact = i === 0 || i === DECK_SLIDES.length - 1 || s.visual === 'table'
    if (showContact) {
      doc.setFont('helvetica', 'bold'); doc.setTextColor(...accent)
      doc.text(CONTACT_EMAIL, W - M, H - 16, { align: 'right' })
    }
    doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(...MUTED)
    doc.text(`${i + 1} / ${DECK_SLIDES.length}`, W - M, H - 8, { align: 'right' })
  })

  doc.save('dojoburo-investor-pitch-deck.pdf')
}
