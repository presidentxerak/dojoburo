// LE MÉMO D'UN COURS, EN PDF · généré, jamais stocké.
//
// Voir l'en-tête de data/resources pour la décision. En deux phrases : un PDF
// téléversé quelque part garde l'ancienne version d'une leçon corrigée, et
// l'élève travaille sur un document faux que nous lui avons donné. Un document
// construit au moment où on le demande ne peut pas diverger de la page.
//
// CE FICHIER NE CONNAÎT AUCUN COURS. Il reçoit des blocs neutres (un titre, un
// paragraphe, une paire, une puce) et les met en page. La conversion depuis les
// cinq formes de données vit dans data/resources, et c'est ce qui permet
// d'ajouter un sixième cours sans toucher ici.
//
// LA MISE EN PAGE SUIT LA CHARTE, et pas celle d'un PDF générique : papier
// blanc, filets d'un pixel, aucune ombre, aucun arrondi, les titres en gras
// lourd. Un mémo qui ne ressemble pas au site donne l'impression d'un document
// pris ailleurs, ce qui est exactement ce qu'il ne faut pas pour un support de
// cours qu'on garde.
import { jsPDF } from 'jspdf'
import type { ResBlock, ResourceDoc } from '../data/resources'
import { resourceTitle } from '../data/resources'
import type { Lang } from '../i18n/lang'

type RGB = [number, number, number]
const INK: RGB = [20, 20, 26]
const MUTED: RGB = [120, 128, 150]
const LINE: RGB = [228, 230, 236]

/** Les marges · généreuses à gauche et à droite, parce qu'un mémo se relit et
 *  qu'une ligne de quinze centimètres ne se relit pas. */
const M = 22
const TOP = 26

export function downloadCoursePdf(doc0: ResourceDoc, lang: Lang, subtitle?: string) {
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const W = pdf.internal.pageSize.getWidth()
  const H = pdf.internal.pageSize.getHeight()
  const CW = W - M * 2
  let y = TOP

  /** Passe à la page suivante quand il ne reste plus la place d'écrire.
   *  Sans cette vérification, jsPDF écrit tranquillement dans la marge basse
   *  puis hors de la page, et le texte disparaît sans erreur. */
  const room = (need: number) => {
    if (y + need > H - 20) { pdf.addPage(); y = TOP }
  }

  // ---- l'en-tête du document ---------------------------------------------
  pdf.setFont('helvetica', 'bold'); pdf.setFontSize(24); pdf.setTextColor(...INK)
  const title = resourceTitle(doc0, lang)
  for (const line of pdf.splitTextToSize(title, CW)) { pdf.text(line, M, y); y += 10 }

  pdf.setFont('helvetica', 'normal'); pdf.setFontSize(10.5); pdf.setTextColor(...MUTED)
  const about = lang === 'fr' ? doc0.about.fr : doc0.about.en
  for (const line of pdf.splitTextToSize(about, CW)) { pdf.text(line, M, y); y += 5 }
  y += 2
  pdf.setDrawColor(...LINE); pdf.setLineWidth(0.2); pdf.line(M, y, W - M, y)
  y += 9

  // ---- le corps ------------------------------------------------------------
  const blocks: ResBlock[] = doc0.build(lang)
  for (const b of blocks) {
    if (b.kind === 'h') {
      room(18)
      y += 4
      pdf.setFont('helvetica', 'bold'); pdf.setFontSize(14); pdf.setTextColor(...INK)
      for (const line of pdf.splitTextToSize(b.text, CW)) { room(8); pdf.text(line, M, y); y += 6.5 }
      y += 1.5
    } else if (b.kind === 'p') {
      pdf.setFont('helvetica', 'normal'); pdf.setFontSize(10.5); pdf.setTextColor(...INK)
      for (const line of pdf.splitTextToSize(b.text, CW)) { room(7); pdf.text(line, M, y); y += 5 }
      y += 2.5
    } else if (b.kind === 'kv') {
      // LA PAIRE · l'intitulé en gras sur sa ligne, la valeur en dessous. Sur
      // la même ligne, un intitulé long décale tout et la colonne se perd dès
      // la deuxième paire.
      room(12)
      pdf.setFont('helvetica', 'bold'); pdf.setFontSize(10); pdf.setTextColor(...INK)
      pdf.text(b.k, M, y); y += 4.6
      pdf.setFont('helvetica', 'normal'); pdf.setFontSize(10.5); pdf.setTextColor(...INK)
      for (const line of pdf.splitTextToSize(b.v, CW)) { room(7); pdf.text(line, M, y); y += 5 }
      y += 2.5
    } else {
      pdf.setFont('helvetica', 'normal'); pdf.setFontSize(10.5); pdf.setTextColor(...INK)
      const lines = pdf.splitTextToSize(b.text, CW - 6)
      lines.forEach((line: string, i: number) => {
        room(7)
        if (i === 0) { pdf.setTextColor(...MUTED); pdf.text('.', M, y); pdf.setTextColor(...INK) }
        pdf.text(line, M + 6, y); y += 5
      })
      y += 1.5
    }
  }

  // ---- le pied de chaque page ---------------------------------------------
  // LA DATE EST CELLE DE LA GÉNÉRATION, et c'est le point : elle dit au
  // lecteur de quand date ce qu'il tient. Un mémo sans date est un mémo qu'on
  // croit à jour pour toujours, ce qui est exactement le défaut que ce
  // dispositif entier existe pour éviter.
  const stamp = new Date().toISOString().slice(0, 10)
  const pages = pdf.getNumberOfPages()
  for (let i = 1; i <= pages; i++) {
    pdf.setPage(i)
    pdf.setFont('helvetica', 'normal'); pdf.setFontSize(8.5); pdf.setTextColor(...MUTED)
    pdf.text(`DojoBuro · ${subtitle ?? title} · ${stamp}`, M, H - 12)
    pdf.text(`${i} / ${pages}`, W - M, H - 12, { align: 'right' })
  }

  pdf.save(`${doc0.file}-${lang}.pdf`)
}
