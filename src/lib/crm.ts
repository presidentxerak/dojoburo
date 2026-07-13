// CRM / Outbound engine · 100% local. A pipeline of contacts, outbound email
// sequences (templates + merge), scoring and stats — all in the browser,
// persisted in IndexedDB. Nothing is uploaded.
import { idbGet, idbSet } from './idb'

export type Stage = 'nouveau' | 'contacte' | 'repondu' | 'rdv' | 'gagne' | 'perdu'
export const STAGES: { id: Stage; label: string; color: string; prob: number }[] = [
  { id: 'nouveau', label: 'Nouveau', color: '#5b6472', prob: 0.1 },
  { id: 'contacte', label: 'Contacté', color: '#2f7fd6', prob: 0.25 },
  { id: 'repondu', label: 'A répondu', color: '#d98c17', prob: 0.5 },
  { id: 'rdv', label: 'RDV', color: '#7b5cff', prob: 0.7 },
  { id: 'gagne', label: 'Gagné', color: '#1fa563', prob: 1 },
  { id: 'perdu', label: 'Perdu', color: '#e0483f', prob: 0 },
]
export const stageInfo = (s: Stage) => STAGES.find((x) => x.id === s) ?? STAGES[0]
const STAGE_SCORE: Record<Stage, number> = { nouveau: 10, contacte: 25, repondu: 55, rdv: 78, gagne: 100, perdu: 0 }

export interface Contact { id: string; name: string; company: string; email: string; stage: Stage; value: number; score: number; note: string; wonAt?: number }
export interface CrmProject { contacts: Contact[]; updatedAt: number }

const uid = () => `k_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`
export const scoreFor = (stage: Stage) => STAGE_SCORE[stage]

export function moveStage(c: Contact, dir: -1 | 1): Contact {
  const i = STAGES.findIndex((s) => s.id === c.stage)
  const j = Math.max(0, Math.min(STAGES.length - 1, i + dir))
  const stage = STAGES[j].id
  // stamp when a deal is WON so Finance/Analytics can date the revenue
  const wonAt = stage === 'gagne' ? (c.wonAt ?? Date.now()) : c.wonAt
  return { ...c, stage, score: STAGE_SCORE[stage], wonAt }
}
/** Set a specific stage (from the editor dropdown), stamping wonAt on a win. */
export function setStage(c: Contact, stage: Stage): Contact {
  return { ...c, stage, score: STAGE_SCORE[stage], wonAt: stage === 'gagne' ? (c.wonAt ?? Date.now()) : c.wonAt }
}

// ---- stats -----------------------------------------------------------------
export interface CrmStats { total: number; weighted: number; won: number; conversion: number; byStage: Record<Stage, number> }
export function stats(cs: Contact[]): CrmStats {
  const byStage = Object.fromEntries(STAGES.map((s) => [s.id, 0])) as Record<Stage, number>
  let weighted = 0, won = 0, closed = 0, wonCount = 0
  for (const c of cs) {
    byStage[c.stage]++
    weighted += c.value * stageInfo(c.stage).prob
    if (c.stage === 'gagne') { won += c.value; wonCount++; closed++ }
    if (c.stage === 'perdu') closed++
  }
  return { total: cs.length, weighted, won, conversion: closed ? wonCount / closed : 0, byStage }
}

// ---- outbound templates ----------------------------------------------------
export interface Template { id: string; label: string; subject: string; body: string }
export const TEMPLATES: Template[] = [
  { id: 'intro', label: 'Prise de contact', subject: 'Une idée pour {{entreprise}}', body: `Bonjour {{prenom}},\n\nJe me permets de vous écrire car j'aide des structures comme {{entreprise}} à gagner du temps et des clients.\n\nSeriez-vous ouvert(e) à un échange rapide de 15 min cette semaine ?\n\nBien à vous,` },
  { id: 'relance1', label: 'Relance 1', subject: 'Re: une idée pour {{entreprise}}', body: `Bonjour {{prenom}},\n\nJe reviens vers vous suite à mon précédent message — je sais que les journées sont chargées.\n\nEst-ce qu'un court échange aurait du sens de votre côté ?\n\nBelle journée,` },
  { id: 'rdv', label: 'Proposition de RDV', subject: 'Un créneau cette semaine ?', body: `Bonjour {{prenom}},\n\nRavi de votre intérêt ! Je vous propose un échange de 20 min.\n\nÊtes-vous disponible jeudi 11h ou vendredi 14h ? Je m'adapte sinon.\n\nÀ très vite,` },
  { id: 'value', label: 'Apport de valeur', subject: 'Un exemple concret pour {{entreprise}}', body: `Bonjour {{prenom}},\n\nJ'ai préparé une idée concrète applicable à {{entreprise}} — je vous la partage sans engagement.\n\nDites-moi si vous voulez que je vous l'envoie.\n\nCordialement,` },
]
const firstName = (name: string) => (name.trim().split(/\s+/)[0] || 'là')
export function merge(tpl: Template, c: Contact): { subject: string; body: string } {
  const sub = (s: string) => s.replace(/\{\{prenom\}\}/g, firstName(c.name)).replace(/\{\{entreprise\}\}/g, c.company || 'votre entreprise')
  return { subject: sub(tpl.subject), body: sub(tpl.body) }
}
export function mailto(c: Contact, subject: string, body: string): string {
  return `mailto:${encodeURIComponent(c.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

// ---- CSV import/export -----------------------------------------------------
function splitLine(line: string, d: string): string[] {
  const out: string[] = []; let cur = '', q = false
  for (let i = 0; i < line.length; i++) { const c = line[i]; if (c === '"') { if (q && line[i + 1] === '"') { cur += '"'; i++ } else q = !q } else if (c === d && !q) { out.push(cur); cur = '' } else cur += c }
  out.push(cur); return out
}
export function importCsv(text: string): Contact[] {
  const lines = text.split(/\r?\n/).filter((l) => l.trim()); if (!lines.length) return []
  const d = (lines[0].match(/;/g)?.length || 0) > (lines[0].match(/,/g)?.length || 0) ? ';' : ','
  const h = splitLine(lines[0], d).map((x) => x.toLowerCase().trim())
  const col = (keys: string[]) => h.findIndex((x) => keys.some((k) => x.includes(k)))
  const iName = col(['nom', 'name', 'contact', 'prenom']), iCo = col(['entreprise', 'company', 'société', 'societe']), iMail = col(['email', 'mail', 'e-mail']), iVal = col(['valeur', 'value', 'montant', 'deal'])
  const hasHeader = iName >= 0 || iMail >= 0
  const rows = hasHeader ? lines.slice(1) : lines
  const out: Contact[] = []
  for (const line of rows) {
    const f = splitLine(line, d)
    const name = (f[iName >= 0 ? iName : 0] || '').trim(); const email = (f[iMail >= 0 ? iMail : 2] || '').trim()
    if (!name && !email) continue
    out.push({ id: uid(), name: name || email, company: (f[iCo >= 0 ? iCo : 1] || '').trim(), email, stage: 'nouveau', value: Number((f[iVal] || '').replace(/[^\d.]/g, '')) || 0, score: STAGE_SCORE.nouveau, note: '' })
  }
  return out
}
export function exportCsv(cs: Contact[]): string {
  const esc = (s: string) => (/[";,\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s)
  return ['nom;entreprise;email;etape;valeur;score', ...cs.map((c) => [esc(c.name), esc(c.company), c.email, c.stage, c.value, c.score].join(';'))].join('\n')
}

export function newContact(): Contact { return { id: uid(), name: 'Nouveau contact', company: '', email: '', stage: 'nouveau', value: 0, score: STAGE_SCORE.nouveau, note: '' } }
export function sampleContacts(): Contact[] {
  const raw: [string, string, string, Stage, number][] = [
    ['Camille Roy', 'Studio Miko', 'camille@miko.fr', 'contacte', 2400],
    ['Yanis Blanc', 'Freelance', 'yanis@mail.com', 'nouveau', 900],
    ['Sophie Le Gall', 'Boutique Aria', 'sophie@aria.fr', 'repondu', 3200],
    ['Marc Dubois', 'Dubois & Co', 'marc@dubois.co', 'rdv', 5000],
    ['Lina Haddad', 'NovaTech', 'lina@novatech.io', 'gagne', 4200],
    ['Tom Perez', 'Perez Sport', 'tom@perezsport.fr', 'contacte', 1500],
    ['Inès Marchand', 'Café Lumen', 'ines@lumen.fr', 'nouveau', 800],
    ['Karim Ziani', 'Ziani Design', 'karim@ziani.design', 'perdu', 2000],
  ]
  return raw.map(([name, company, email, stage, value]) => ({ id: uid(), name, company, email, stage, value, score: STAGE_SCORE[stage], note: '', wonAt: stage === 'gagne' ? Date.now() : undefined }))
}

// ---- persistence -----------------------------------------------------------
const key = (d: string) => `crm.${d || 'default'}`
export async function loadCrm(dojoId: string): Promise<CrmProject | null> { return (await idbGet<CrmProject>('projects', key(dojoId))) ?? null }
export async function saveCrm(dojoId: string, p: CrmProject): Promise<void> { await idbSet('projects', key(dojoId), { ...p, updatedAt: Date.now() }) }
export const eur = (n: number) => `${Math.round(n).toLocaleString('fr-FR')} €`
