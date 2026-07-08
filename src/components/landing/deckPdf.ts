import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import { DECK_SLIDES } from '../../data/deckSlides'
import { FORECAST, BUSINESS_PLAN, CONTACT_EMAIL } from '../../data/financials'

// Build and download the investor pitch deck as a real landscape PDF. Vector
// text + tables in the DojoBuro brand palette · one slide per page.

const INK: [number, number, number] = [20, 20, 26]
const MUTED: [number, number, number] = [120, 128, 150]
const PAPER: [number, number, number] = [255, 255, 255]

function hexRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '')
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]
}

export function downloadDeckPdf() {
  const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' })
  const W = doc.internal.pageSize.getWidth() // 297
  const H = doc.internal.pageSize.getHeight() // 210
  const M = 22 // left margin

  DECK_SLIDES.forEach((s, i) => {
    if (i > 0) doc.addPage()
    const accent = hexRgb(s.accent)

    // paper
    doc.setFillColor(...PAPER)
    doc.rect(0, 0, W, H, 'F')
    // accent top bar
    doc.setFillColor(...accent)
    doc.rect(0, 0, W, 4, 'F')

    // kicker
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(11)
    doc.setTextColor(...accent)
    const kicker = (s.n ? `${s.n} · ` : '') + s.kicker.toUpperCase()
    doc.text(kicker, M, 42)

    if (s.visual === 'brand' && i === 0) {
      // cover: big wordmark + line
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(52)
      doc.setTextColor(...INK)
      doc.text('dojoburo', M, 78)
    }

    // headline
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(24)
    doc.setTextColor(...INK)
    const lineY = s.visual === 'brand' && i === 0 ? 100 : 62
    const wrapped = doc.splitTextToSize(s.line, W - M * 2 - 6)
    doc.text(wrapped, M, lineY)

    // tables
    if (s.visual === 'table') {
      const data = s.table === 'forecast' ? FORECAST : BUSINESS_PLAN
      autoTable(doc, {
        head: [data.head],
        body: data.rows,
        startY: lineY + wrapped.length * 9 + 6,
        margin: { left: M, right: M },
        theme: 'grid',
        styles: { font: 'helvetica', fontSize: 12, cellPadding: 3.4, textColor: INK, lineColor: [228, 230, 236], lineWidth: 0.2 },
        headStyles: { fillColor: accent, textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 12 },
        alternateRowStyles: { fillColor: [248, 249, 251] },
        columnStyles: { 0: { fontStyle: 'bold' } },
      })
      const endY = (doc as unknown as { lastAutoTable?: { finalY: number } }).lastAutoTable?.finalY ?? H - 40
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(9.5)
      doc.setTextColor(...MUTED)
      doc.text(doc.splitTextToSize(data.note, W - M * 2), M, endY + 8)
    }

    // footer: wordmark + tagline (+ contact email on cover, ask and table pages)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(10)
    doc.setTextColor(...INK)
    doc.text('dojoburo', M, H - 16)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(...MUTED)
    doc.text('· automated productivity on the XRP Ledger', M + 22, H - 16)

    const showContact = i === 0 || i === DECK_SLIDES.length - 1 || s.visual === 'table'
    if (showContact) {
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(...accent)
      doc.text(CONTACT_EMAIL, W - M, H - 16, { align: 'right' })
    }
    // page number
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    doc.setTextColor(...MUTED)
    doc.text(`${i + 1} / ${DECK_SLIDES.length}`, W - M, H - 8, { align: 'right' })
  })

  doc.save('dojoburo-investor-pitch-deck.pdf')
}
