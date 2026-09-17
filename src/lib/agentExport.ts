// EMPORTER SON AGENT AILLEURS.
//
// Un centre de formation dont le travail reste à l'intérieur n'apprend rien
// d'utilisable. Ce qu'on fabrique ici doit partir : dans un vrai framework,
// dans une console de fournisseur, dans un dépôt de code. Sinon on a passé
// une heure à remplir des champs dans une maquette.
//
// CE QU'ON EXPORTE, ET CE QU'ON N'EXPORTE PAS. On exporte des FORMATS, pas du
// code d'appel. Un extrait Python qui instancie un client change au rythme des
// bibliothèques, et un exemple périmé dans un cours est pire qu'une absence
// d'exemple : quelqu'un le copie, ça casse, et il croit avoir mal compris.
// Le prompt système, le schéma des outils et le manifeste, eux, sont stables
// et se collent partout.
//
// Cinq formats, choisis parce qu'ils couvrent les cinq endroits où les gens
// mettent réellement un agent :
//
//   · system.txt   la consigne brute, à coller dans n'importe quelle console
//   · brief.md     le même, en document lisible, pour un chat ou un dépôt
//   · tools.json   les définitions d'outils, en JSON Schema
//   · SKILL.md     le dossier de compétence, avec son en-tête
//   · agent.json   un manifeste neutre, pour un framework qui lit du JSON
//
// Aucun de ces cinq n'appartient à un fournisseur, et c'est le but.

export interface ToolSpec {
  name: string
  description: string
  /** les paramètres, en JSON Schema · un objet, comme partout */
  parameters: { type: 'object'; properties: Record<string, unknown>; required?: string[] }
}

export interface BuiltAgent {
  /** l'identifiant technique, en minuscules et tirets */
  slug: string
  /** le nom qu'on lui donne */
  name: string
  /** la forme de problème qu'il traite */
  shape: string
  /** la consigne système, telle qu'elle partira */
  system: string
  /** ce qu'il a le droit d'appeler */
  tools: ToolSpec[]
  /** les notes de l'élève · elles voyagent dans le .md, jamais dans la consigne */
  notes?: string
}

export type ExportFormat = 'system' | 'brief' | 'tools' | 'skill' | 'manifest'

export const FORMATS: Array<{ id: ExportFormat; label: string; file: (slug: string) => string; what: string }> = [
  { id: 'system', label: 'System prompt', file: (s) => `${s}.system.txt`, what: 'The raw instruction. Paste it into any console or SDK call.' },
  { id: 'brief', label: 'Markdown brief', file: (s) => `${s}.md`, what: 'The same thing as a readable document, for a chat or a repository.' },
  { id: 'tools', label: 'Tool schemas', file: (s) => `${s}.tools.json`, what: 'JSON Schema definitions, the shape every provider expects.' },
  { id: 'skill', label: 'Skill folder', file: () => 'SKILL.md', what: 'An agent skill with its front matter, loaded on demand.' },
  { id: 'manifest', label: 'Agent manifest', file: (s) => `${s}.agent.json`, what: 'A neutral description a framework can read without knowing us.' },
]

const stamp = () => new Date().toISOString().slice(0, 10)

/* ------------------------------------------------------------------ */

function asBrief(a: BuiltAgent): string {
  const tools = a.tools.length
    ? a.tools.map((t) => `- \`${t.name}\` : ${t.description}`).join('\n')
    : '_No tools. This agent reads and writes text, nothing else._'
  return [
    `# ${a.name}`,
    '',
    `**Shape.** ${a.shape}`,
    '',
    '## System prompt',
    '',
    '```',
    a.system.trim(),
    '```',
    '',
    '## Tools it may call',
    '',
    tools,
    '',
    a.notes ? `## Notes\n\n${a.notes.trim()}\n` : '',
    '---',
    '',
    `Built at the Dojo, ${stamp()}. Take it anywhere: the prompt and the schemas below belong to no provider.`,
  ].filter((l) => l !== '').join('\n')
}

function asSkill(a: BuiltAgent): string {
  // L'en-tête d'une compétence est du YAML minimal · nom, description, et
  // rien d'autre. Y ajouter des champs propriétaires rendrait le fichier
  // inutilisable ailleurs, ce qui est exactement ce qu'on cherche à éviter.
  return [
    '---',
    `name: ${a.slug}`,
    `description: ${a.shape.replace(/\n/g, ' ')}`,
    '---',
    '',
    `# ${a.name}`,
    '',
    a.system.trim(),
    '',
    a.tools.length ? `## Tools\n\n${a.tools.map((t) => `- \`${t.name}\`: ${t.description}`).join('\n')}` : '',
  ].filter((l) => l !== '').join('\n')
}

function asManifest(a: BuiltAgent): string {
  return JSON.stringify({
    name: a.slug,
    label: a.name,
    shape: a.shape,
    system: a.system.trim(),
    tools: a.tools,
    // Volontairement ABSENT : le modèle. Écrire un identifiant de modèle ici
    // le rendrait faux à la prochaine version, et le choix du modèle est une
    // décision de celui qui déploie, pas de celui qui enseigne.
    createdAt: stamp(),
    source: 'dojoburo',
  }, null, 2)
}

export function render(a: BuiltAgent, f: ExportFormat): string {
  switch (f) {
    case 'system': return a.system.trim() + '\n'
    case 'brief': return asBrief(a)
    case 'tools': return JSON.stringify(a.tools, null, 2)
    case 'skill': return asSkill(a)
    case 'manifest': return asManifest(a)
  }
}

export const fileNameFor = (a: BuiltAgent, f: ExportFormat): string =>
  (FORMATS.find((x) => x.id === f) ?? FORMATS[0]).file(a.slug)

/** Le type MIME du fichier · un .json servi en text/plain s'ouvre dans le
 *  navigateur au lieu de se télécharger sur certains systèmes. */
const mimeFor = (f: ExportFormat) =>
  f === 'tools' || f === 'manifest' ? 'application/json;charset=utf-8' : 'text/markdown;charset=utf-8'

export function downloadAgent(a: BuiltAgent, f: ExportFormat): void {
  const blob = new Blob([render(a, f)], { type: mimeFor(f) })
  const url = URL.createObjectURL(blob)
  const el = document.createElement('a')
  el.href = url
  el.download = fileNameFor(a, f)
  document.body.appendChild(el)
  el.click()
  el.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

export async function copyAgent(a: BuiltAgent, f: ExportFormat): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(render(a, f))
    return true
  } catch {
    return false
  }
}
