// Shows a real deliverable produced by an agent: the Claude Design token preview
// for a design system, or rendered Markdown for the other functions. Includes
// the model used, the tools the agent acted in, and
// download buttons so the output is genuinely usable.
import { useState } from 'react'
import { useWork } from '../../agents/workStore'
import { useWorkshop } from '../../workshop'
import { useSkills, ruleFromFailure } from '../../agents/skills'
import { roleForTask } from '../../data/connectors'
import { Markdown } from './Markdown'
import { Icon } from '../Icon'
import { BauhausIcon } from '../BauhausIcon'

export function DeliverableModal() {
  const d = useWork((s) => s.deliverable)
  const close = useWork((s) => s.closeDeliverable)
  const dojoId = useWorkshop((s) => s.activeDojoId)
  const addSkill = useSkills((s) => s.add)
  // Une règle créée depuis ce livrable · on le dit et on ne le redemande pas.
  const [kept, setKept] = useState<string[]>([])
  if (!d) return null

  const download = (name: string, content: string, type = 'text/markdown') => {
    const blob = new Blob([content], { type })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = name
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="dlv-overlay" onClick={close}>
      <div className="dlv" onClick={(e) => e.stopPropagation()}>
        <header className="dlv-head">
          <div>
            <h2>{d.title}</h2>
            <p className="dlv-sub">
              Delivered by <strong>{d.model}</strong>
              {d.engine === 'byok' && <> · your key</>}
              {d.engine === 'free' && <> · free tier</>}
              {d.tools && d.tools.length > 0 && <> · acted in {d.tools.join(', ')}</>}
            </p>
          </div>
          <button className="icon-btn" onClick={close} aria-label="Close"><Icon name="close" /></button>
        </header>

        {/* Ce que les contrôles ont dit de ce document.
            Sans cette ligne, la vérification ne sert à rien : elle tournerait
            côté serveur et personne ne saurait qu'un livrable a été repris, ou
            qu'il sort d'ici avec une consigne ignorée. On l'affiche avant le
            texte, parce qu'elle change la façon de le lire. */}
        {d.verified && (
          d.verified.ok ? (
            <p className={`dlv-checked ${d.verified.repaired ? 'is-repaired' : 'is-ok'}`}>
              <span className="dlv-tick"><BauhausIcon name="check" size={13} /></span>
              {d.verified.repaired
                ? <>Corrigé puis vérifié · {d.verified.passed.length} contrôles passés</>
                : <>Vérifié · {d.verified.passed.length} contrôles passés</>}
            </p>
          ) : (
            <div className="dlv-checked is-bad">
              <p><span className="dlv-warn">!</span> À relire · ce document ne tient pas tout ce qui lui était demandé :</p>
              <ul>
                {d.verified.failed.map((f) => {
                  // Le geste qui transforme une correction en acquis : plutôt
                  // qu'un formulaire vide, on propose la règle qui aurait évité
                  // cet échec, et elle s'appliquera à chaque lancement suivant.
                  const rule = ruleFromFailure(f.id)
                  const role = roleForTask(d.taskId)
                  const done = kept.includes(f.id)
                  return (
                    <li key={f.id}>
                      {f.why}
                      {rule && role && dojoId && (
                        done
                          ? <em className="dlv-kept">règle ajoutée</em>
                          : (
                            <button
                              className="dlv-rule"
                              title={rule}
                              onClick={() => {
                                if (addSkill(dojoId, role, rule, `échec: ${f.id}`)) setKept((k) => [...k, f.id])
                              }}
                            >
                              en faire une règle
                            </button>
                          )
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        )}

        <div className="dlv-body">
          {d.format === 'design-system' && d.tokens && <TokenPreview tokens={d.tokens} />}
          {d.markdown && <Markdown text={d.markdown} />}
        </div>

        <footer className="dlv-foot">
          <button className="btn tiny" onClick={() => download(`${d.taskId}.md`, d.markdown || '')}>
            <Icon name="download" size={12} /> Markdown
          </button>
          {d.format === 'design-system' && d.tokens && (
            <button className="btn tiny" onClick={() => download('tokens.json', JSON.stringify(d.tokens, null, 2), 'application/json')}>
              <Icon name="download" size={12} /> tokens.json
            </button>
          )}
          <span className="grow" />
          <button className="btn" onClick={close}>Done</button>
        </footer>
      </div>
    </div>
  )
}

function TokenPreview({ tokens }: { tokens: any }) {
  const colors: [string, string][] = tokens?.colors && typeof tokens.colors === 'object'
    ? Object.entries(tokens.colors).flatMap(([k, v]) =>
        typeof v === 'string' ? [[k, v] as [string, string]]
          : typeof v === 'object' && v ? Object.entries(v as any).map(([kk, vv]) => [`${k}-${kk}`, String(vv)] as [string, string]) : [])
    : []
  const scale: number[] = Array.isArray(tokens?.typography?.scale) ? tokens.typography.scale : []
  const radii: number[] = Array.isArray(tokens?.radii) ? tokens.radii : []
  const font = tokens?.typography?.fontFamily || 'system-ui'

  return (
    <div className="tok">
      {tokens?.name && <h3 className="tok-name">{tokens.name}</h3>}
      {colors.length > 0 && (
        <div className="tok-block">
          <h4>Palette</h4>
          <div className="tok-swatches">
            {colors.map(([name, hex]) => (
              <div key={name} className="tok-swatch">
                <span className="tok-chip" style={{ background: isColor(hex) ? hex : '#ccc' }} />
                <span className="tok-swatch-name">{name}</span>
                <span className="tok-swatch-hex">{hex}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {scale.length > 0 && (
        <div className="tok-block">
          <h4>Type scale <span className="muted small">({font})</span></h4>
          <div className="tok-type" style={{ fontFamily: font }}>
            {scale.map((px) => (
              <div key={px} className="tok-type-row" style={{ fontSize: `${Math.min(px, 40)}px` }}>
                Aa <span className="muted small">{px}px</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {radii.length > 0 && (
        <div className="tok-block">
          <h4>Radii</h4>
          <div className="tok-radii">
            {radii.map((r) => (
              <div key={r} className="tok-radius" style={{ borderRadius: `${r}px` }}>{r}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function isColor(v: string): boolean {
  return typeof v === 'string' && /^(#|rgb|hsl)/.test(v.trim())
}
