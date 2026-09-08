import { useEffect, useRef, useState } from 'react'
import { TeamTab } from './TeamTab'
import { createPortal } from 'react-dom'
import { useDojo } from '../../store'
import { exportDojoFile, importDojoFile, downloadDojo } from '../../lib/dojoFile'
import { useWorkshop, GRID, MAX_AGENTS, type WAgent, type ExtAgent } from '../../workshop'
import { verifyExternalAgent } from '../../agents/externalAgents'
import { SKINS, SKIN_THEMES, skinById } from '../../data/skins'
import { DOJO_TEMPLATES, templateById } from '../../data/templates'
import { PROFESSIONS, professionColor } from '../../data/professions'
import { CONNECTOR_BY_ID } from '../../data/connectors'
import { FUNCTIONS, FUNCTION_BY_ID } from '../../data/functions'
import { CURRENCY_LIST, formatFrom, type CurrencyCode } from '../../data/currency'
import { PLANS, planPrice } from '../../data/plans'
import { privyConfigured, privyControls } from '../../auth/controls'
import { useWork } from '../../agents/workStore'
import { refParams, refObject } from '../../agents/workApi'
import { apiFetch } from '../../lib/apiFetch'
import { useEngine } from '../../agents/engineStore'
import { SkinAvatar } from './SkinAvatar'
import { TemplateThumb } from './TemplateThumb'
import { Agent3DPreview } from '../three/Agent3DPreview'
import { AGENT_CHAR, charForAgent } from '../landing/TeamCards'
import { canonicalRole } from '../../data/roleAgents'
import { ConnectorsPanel } from '../ConnectorsPanel'
import { AgentContext } from '../agents/AgentContext'
import { ARCHETYPE_BY_ID } from '../../data/archetypes'
import { FullScreen } from '../FullScreen'
import { StepBar } from '../../modules/StepBar'

type Tab = 'studio' | 'account' | 'team' | 'billing'

/** What /api/org?action=me returns, as far as the Billing screen cares. */
interface OrgSnapshot {
  role: 'owner' | 'admin' | 'member' | 'viewer'
  plan: 'free' | 'founder' | 'managed'
  planStatus: 'active' | 'past_due' | 'cancelled'
  allowance?: {
    runs: number; tokens: number; window: 'day' | 'month'
    usedRuns: number; usedTokens: number
    leftRuns: number; leftTokens: number
    /** true when the allowance belongs to the company rather than to you */
    shared: boolean
  }
}

// ---------------------------------------------------------------------------
// Dojo settings · a FULL PAGE (route #studio), not a modal. It wears the same
// shell as every other full-screen surface — the studio bar at the very top of
// the screen and the round ✕ in its right corner — plus the mobile bottom bar,
// so on a phone you can still jump to the dojo, the CEO dashboard or the city.
// The four sections (Dojos & agents / Account / Your company / Billing) are
// reached from the menu, which sets the intent this surface reads.
// ---------------------------------------------------------------------------
const STUDIO_TITLES: Record<Tab, { title: string; sub: string }> = {
  studio: { title: 'Dojo settings', sub: 'Build your teams, place and tune each teammate, connect their apps, and save.' },
  account: { title: 'Account', sub: 'Your profile, sign-in and identity across devices.' },
  team: { title: 'Your company', sub: 'Who you work with, what each of them may do, and whether your work has reached them.' },
  billing: { title: 'Billing · your key and plan', sub: 'Everything about money: your Claude key, what your company is on, and the currency prices show in.' },
}

/** Dojo settings / Account / Billing, wearing the app's ONE full-screen shell.
 *
 *  This used to be its own page. Opening your credit balance from the menu
 *  therefore navigated out of the app, and coming back landed you on the
 *  "Create your company" card — your dojo looked lost. It is a surface over the
 *  app now, so closing it puts you back exactly where you were. */
export function StudioSurface({ onClose }: { onClose: () => void }) {
  // Account & Billing were moved to the menu; the Studio surface is "Dojos &
  // agents". A deep link (menu → Account / Billing) still lands on the
  // account/billing section · the title reflects it, no tab switcher.
  const intent = useWork((s) => s.studioIntent)
  const openConnect = useWork((s) => s.openConnect)
  const tab: Tab = intent && (intent === 'account' || intent === 'billing' || intent === 'team') ? intent : 'studio'
  const head = STUDIO_TITLES[tab]
  return (
    <FullScreen
      title={head.title}
      sub={head.sub}
      tint="#7b5cff"
      bodyClass="studio-fs"
      actions={<button className="modhost-connect" onClick={openConnect}>Connect apps</button>}
      onClose={onClose}
    >
      {tab === 'studio' && <StudioTab />}
      {tab === 'account' && <AccountTab />}
      {tab === 'team' && <TeamTab />}
      {tab === 'billing' && <BillingTab />}
    </FullScreen>
  )
}

/** The #studio route · the same surface, reached as its own URL. */
export function StudioPage() {
  const back = () => { try { sessionStorage.setItem('dojoburo.nav', 'dojo') } catch { /* */ } location.hash = 'app' }
  return <StudioSurface onClose={back} />
}

// A short "here's how the Studio works, A to Z" primer above the grid editor.
// Save / open the whole workspace as a single .dojo file (all dojos + assets).
function ProjectFileIO({ label }: { label: string }) {
  const pushToast = useDojo((s) => s.pushToast)
  const fileRef = useRef<HTMLInputElement>(null)
  const [busy, setBusy] = useState(false)
  const save = async () => {
    setBusy(true)
    try {
      const blob = await exportDojoFile(label, Date.now())
      downloadDojo(blob, label)
      pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'Company saved', text: 'Your .dojo file downloaded · re-open it anytime, anywhere.' })
    } catch { pushToast({ kind: 'event', badge: '!', color: '#e0483f', title: 'Save failed', text: 'Could not build the .dojo file.' }) }
    setBusy(false)
  }
  const open = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]; e.target.value = ''
    if (!f) return
    setBusy(true)
    const r = await importDojoFile(f)
    setBusy(false)
    if (r.ok) { pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'Company loaded', text: 'Restoring your workspace · reloading…' }); setTimeout(() => location.reload(), 900) }
    else pushToast({ kind: 'event', badge: '!', color: '#e0483f', title: 'Could not open', text: r.error || 'Invalid .dojo file.' })
  }
  return (
    <div className="proj-io">
      <div className="sq-eyebrow" style={{ marginTop: 16 }}>Company file (.dojo)</div>
      <p className="sq-lead">Save your entire workspace — every dojo and all your studios' assets (brand, website, videos, images, finished work) — to a single <b>.dojo</b> file on your disk, and re-open it anywhere. 100% local.</p>
      <div className="cc-clip-ops">
        <button onClick={() => void save()} disabled={busy}>{busy ? '…' : '⤓ Save company (.dojo)'}</button>
        <button onClick={() => fileRef.current?.click()} disabled={busy}>⤒ Open a .dojo file</button>
        <input ref={fileRef} type="file" accept=".dojo,application/octet-stream" hidden onChange={(e) => void open(e)} />
      </div>
    </div>
  )
}

// A `WorkshopModal` used to live here: the same four sections, in a dialog with
// its own tab bar. It has had no importer since the Studio became a full-screen
// surface with the sections reached from the menu — so it rendered nowhere, and
// two browser suites were still clicking for its `.ws-tabs` and finding nothing.
// A second, unreachable copy of a screen is where a fix lands and does not
// appear.

// ---------------------------------------------------------------------------
function StudioTab() {
  const dojos = useWorkshop((s) => s.dojos)
  const activeId = useWorkshop((s) => s.activeDojoId)
  const setActive = useWorkshop((s) => s.setActiveDojo)
  const createDojo = useWorkshop((s) => s.createDojo)
  const createDojoForProfession = useWorkshop((s) => s.createDojoForProfession)
  const renameDojo = useWorkshop((s) => s.renameDojo)
  const deleteDojo = useWorkshop((s) => s.deleteDojo)
  const addAgent = useWorkshop((s) => s.addAgent)
  const moveAgent = useWorkshop((s) => s.moveAgent)
  const currency = useWorkshop((s) => s.account?.currency ?? 'USD')
  const dirty = useWorkshop((s) => s.dirty)
  const save = useWorkshop((s) => s.save)

  const setDojoTemplate = useWorkshop((s) => s.setDojoTemplate)
  const dojo = dojos.find((d) => d.id === activeId) ?? dojos[0]
  const [sel, setSel] = useState<string | null>(null)
  const [picking, setPicking] = useState(false)
  // 'create' opens the picker to spin up a new dojo; 'change' re-themes this one
  const [tplPick, setTplPick] = useState<null | 'create' | 'change'>(null)
  // Squarespace-style stepped flow, matching the Website / Branding studios
  const [wizStep, setWizStep] = useState<'dojo' | 'agents' | 'save'>('dojo')

  // deep-link: clicking an agent's avatar opens the Studio focused on it
  const studioAgentId = useWork((s) => s.studioAgentId)
  useEffect(() => {
    if (!studioAgentId) return
    // '*' means "open the seating step", with nobody in particular selected ·
    // it is how the dojo's own "Place & tune" button gets here
    if (studioAgentId === '*') { setWizStep('agents'); return }
    const d = dojos.find((dj) => dj.agents.some((a) => a.id === studioAgentId))
    if (d) { setActive(d.id); setSel(studioAgentId); setWizStep('agents') }
  }, [studioAgentId]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!dojo) return null
  const agent = dojo.agents.find((a) => a.id === sel) ?? null
  const cellAt = (x: number, y: number) => dojo?.agents.find((a) => a.gx === x && a.gy === y)
  const tpl = templateById(dojo.template)

  const WSTEPS = [{ id: 'dojo', label: 'Dojo' }, { id: 'agents', label: 'Agents' }, { id: 'save', label: 'Review' }]
  const wIdx = WSTEPS.findIndex((s) => s.id === wizStep)
  const advance = () => {
    if (wizStep === 'dojo') return setWizStep('agents')
    if (wizStep === 'agents') return setWizStep('save')
    void save()
  }

  return (
    <div className="ws-studio sq">
      <StepBar
        steps={WSTEPS} current={wizStep} onJump={(id) => setWizStep(id as typeof wizStep)}
        onBack={() => { if (wIdx > 0) setWizStep(WSTEPS[wIdx - 1].id as typeof wizStep) }} backDisabled={wIdx === 0}
        onNext={advance} canNext={wizStep === 'save' ? dirty : true}
        nextLabel={wizStep === 'save' ? 'Validate & save dojo' : 'Next'}
      />

      {wizStep === 'dojo' && (
        <section className="sq-panel">
          <h3 className="sq-title">Your dojo</h3>
          <p className="sq-lead">A dojo is one team's workspace, with its own 3D world and its own crew. Pick one, re-theme it, rename it, or start another.</p>
          <div className="ws-dojobar">
            <select value={dojo?.id} onChange={(e) => { setActive(e.target.value); setSel(null) }}>
              {dojos.map((d) => (
                <option key={d.id} value={d.id}>{d.name} · {d.agents.length}/{MAX_AGENTS}</option>
              ))}
            </select>
            <button className="ws-btn" title="Change environment" onClick={() => setTplPick('change')}>{tpl.label}</button>
            <button className="ws-btn" onClick={() => renameDojo(dojo.id, prompt('Rename dojo', dojo.name) || dojo.name)}>Rename</button>
            <button className="ws-btn primary" onClick={() => setTplPick('create')}>+ New dojo</button>
            <button className="ws-btn danger" onClick={() => confirm(`Delete "${dojo.name}"?`) && deleteDojo(dojo.id)}>Delete</button>
          </div>
          {/* all your dojos as a centered grid, 3 per row */}
          <div className="ws-dojogrid">
            {dojos.map((d) => {
              const dt = templateById(d.template)
              const active = d.id === dojo?.id
              return (
                <button key={d.id} className={`ws-dojocard${active ? ' on' : ''}`} onClick={() => { setActive(d.id); setSel(null) }} style={{ ['--tpl-accent' as any]: dt.palette.accent }}>
                  {active && <span className="ws-dojocard-badge">Active</span>}
                  <span className="ws-dojocard-thumb"><TemplateThumb t={dt} /></span>
                  <strong className="ws-dojocard-name">{d.name}</strong>
                  <span className="ws-dojocard-meta">{dt.label} · {d.agents.length}/{MAX_AGENTS} agents</span>
                </button>
              )
            })}
            <button className="ws-dojocard ws-dojocard-new" onClick={() => setTplPick('create')}>
              <span className="ws-dojocard-plus">＋</span>
              <strong className="ws-dojocard-name">New dojo</strong>
              <span className="ws-dojocard-meta">Start another team</span>
            </button>
          </div>
        </section>
      )}

      {wizStep === 'agents' && (
        <section className="sq-panel">
          <h3 className="sq-title">Place &amp; tune your teammates</h3>
          <p className="sq-lead">
            Tap a teammate to select them, then tap any cell to seat them there · the 3D dojo reseats
            to match. With one selected, the panel on the right is where you change their look, their
            job, the work they take on and what they may spend.
          </p>
          <div className="ws-cols">
            <div className="ws-gridwrap">
              <div className="ws-grid" style={{ gridTemplateColumns: `repeat(${GRID.cols}, minmax(0, 1fr))` }}>
                {Array.from({ length: GRID.rows * GRID.cols }).map((_, i) => {
                  const x = i % GRID.cols
                  const y = Math.floor(i / GRID.cols)
                  const a = cellAt(x, y)
                  return (
                    <button
                      key={i}
                      className={`ws-cell ${a ? 'filled' : ''} ${a && a.id === sel ? 'sel' : ''}`}
                      onClick={() => {
                        if (a) setSel(a.id)
                        else if (sel) { moveAgent(sel, x, y) }
                      }}
                    >
                      {a && (
                        <>
                          {/* the teammate as they look in the dojo · the same
                              animated 3D portrait as the roster and Manage
                              team, not a flat badge in a box */}
                          <span className="ws-cellface">
                            <Agent3DPreview
                              id={AGENT_CHAR[canonicalRole(a.role) ?? ''] ?? a.role ?? 'preview'}
                              character={charForAgent(AGENT_CHAR[canonicalRole(a.role) ?? ''] ?? a.role ?? '')}
                              size={64}
                              fit
                              phase={i * 0.4}
                            />
                          </span>
                          <span className="ws-cellname">{a.name}</span>
                        </>
                      )}
                    </button>
                  )
                })}
              </div>
              <button
                className="ws-btn primary"
                disabled={(dojo?.agents.length ?? 0) >= MAX_AGENTS}
                onClick={() => { const id = addAgent(); if (id) setSel(id) }}
              >
                + Add agent {dojo ? `(${dojo.agents.length}/${MAX_AGENTS})` : ''}
              </button>
            </div>
            <div className="ws-editor">
              {!agent && <p className="ws-empty">Pick a teammate to change their look, their job, what they work on and how they work.</p>}
              {agent && <AgentEditor agent={agent} dojoId={dojo?.id ?? ''} currency={currency} onPickSkin={() => setPicking(true)} onDeleted={() => setSel(null)} />}
            </div>
          </div>
        </section>
      )}

      {wizStep === 'save' && (
        <section className="sq-panel">
          <h3 className="sq-title">Review &amp; save</h3>
          <p className="sq-lead">Your changes are drafts until you validate them.</p>
          <div className="sq-cards3">
            <div className="sq-info"><span className="sq-info-k">Dojo</span><b>{dojo.name}</b></div>
            <div className="sq-info"><span className="sq-info-k">Environment</span><b>{tpl.label}</b></div>
            <div className="sq-info"><span className="sq-info-k">Agents</span><b>{dojo.agents.length}/{MAX_AGENTS}</b></div>
          </div>
          <div className="ws-savebar">
            <span className={`ws-saveflag ${dirty ? 'on' : ''}`}>{dirty ? '● Unsaved changes' : '✓ All changes saved'}</span>
            <button className="ws-btn primary" disabled={!dirty} onClick={save}>Validate &amp; save dojo</button>
          </div>
          <ProjectFileIO label={dojo.name} />
        </section>
      )}

      {picking && agent && (
        <SkinPicker
          current={agent.skinId}
          onPick={(id) => { useWorkshop.getState().updateAgent(agent.id, { skinId: id }); setPicking(false) }}
          onClose={() => setPicking(false)}
        />
      )}

      {tplPick && (
        <TemplatePicker
          current={dojo.template}
          mode={tplPick}
          onPick={(id) => {
            if (tplPick === 'create') createDojo(undefined, id)
            else setDojoTemplate(dojo.id, id)
            setTplPick(null)
          }}
          onPickProfession={(id) => { createDojoForProfession(id); setTplPick(null) }}
          onClose={() => setTplPick(null)}
        />
      )}
    </div>
  )
}

function TemplatePicker({ current, mode, onPick, onPickProfession, onClose }: { current: string; mode: 'create' | 'change'; onPick: (id: string) => void; onPickProfession?: (id: string) => void; onClose: () => void }) {
  return createPortal(
    <div className="ws-overlay ws-over-top" onClick={onClose}>
      <div className="ws-picker" onClick={(e) => e.stopPropagation()}>
        <header className="ws-head">
          <strong>{mode === 'create' ? 'New dojo' : 'Change environment'}</strong>
          <button className="ws-x" onClick={onClose} aria-label="Close">×</button>
        </header>
        {mode === 'create' && onPickProfession && (
          <div className="ws-profwrap">
            <div className="ws-prof-h">Start from your profession · seeds a tailored crew, world &amp; apps</div>
            <div className="ws-profgrid">
              {PROFESSIONS.map((p) => (
                <button key={p.id} className="ws-profcard" onClick={() => onPickProfession(p.id)} title={p.blurb} style={{ ['--pc' as any]: professionColor(p.id) }}>
                  <span className="ws-prof-cat">{p.category}</span>
                  <strong>{p.label}</strong>
                  <span className="ws-prof-tools">{p.connectors.slice(0, 3).map((id) => CONNECTOR_BY_ID[id]?.label ?? id).join(' · ')}</span>
                </button>
              ))}
            </div>
            <div className="ws-prof-or">or pick a world directly</div>
          </div>
        )}
        <div className="ws-tplgrid">
          {DOJO_TEMPLATES.map((t) => (
            <button
              key={t.id}
              className={`ws-tplcard ${t.id === current && mode === 'change' ? 'sel' : ''}`}
              onClick={() => onPick(t.id)}
              style={{ ['--tpl-accent' as any]: t.palette.accent }}
            >
              <span className="ws-tplthumb"><TemplateThumb t={t} /></span>
              <strong>{t.label}</strong>
              <span className="ws-blurb">{t.blurb}</span>
              <span className="ws-tpltheme">{mode === 'create' ? `Seeds a ${t.skinTheme} crew` : t.skinTheme}</span>
            </button>
          ))}
        </div>
        {mode === 'change' && <p className="ws-blurb ws-tplnote">Re-theming keeps your agents; it only swaps the environment.</p>}
      </div>
    </div>,
    document.body,
  )
}

function AgentEditor({ agent, dojoId, currency, onPickSkin, onDeleted }: { agent: WAgent; dojoId: string; currency: string; onPickSkin: () => void; onDeleted: () => void }) {
  const update = useWorkshop((s) => s.updateAgent)
  const remove = useWorkshop((s) => s.deleteAgent)
  const fn = FUNCTION_BY_ID[agent.fn]
  const skin = skinById(agent.skinId)
  const [customTask, setCustomTask] = useState('')
  const addCustom = () => {
    const v = customTask.trim()
    if (!v || agent.tasks.includes(v)) { setCustomTask(''); return }
    update(agent.id, { tasks: [...agent.tasks, v] })
    setCustomTask('')
  }
  const taskName = (tid: string) => fn?.tasks.find((x) => x.id === tid)?.name ?? tid

  return (
    <div className="ws-form">
      <div className="ws-skinrow">
        <div className="ws-preview3d"><Agent3DPreview id={skin.id} character={skin} size={104} /></div>
        <div>
          <div className="ws-skinname">{skin.name}</div>
          <button className="ws-btn" onClick={onPickSkin}>Change skin ({SKINS.length})</button>
        </div>
      </div>

      <label className="ws-field">
        <span>Name</span>
        <input value={agent.name} maxLength={24} onChange={(e) => update(agent.id, { name: e.target.value })} />
      </label>

      <label className="ws-field">
        <span>Their job</span>
        <select
          value={agent.fn}
          onChange={(e) => update(agent.id, { fn: e.target.value as WAgent['fn'], tasks: (FUNCTION_BY_ID[e.target.value]?.tasks ?? []).slice(0, 4).map((t) => t.id) })}
        >
          {FUNCTIONS.map((f) => <option key={f.id} value={f.id}>{f.label}</option>)}
        </select>
      </label>
      <p className="ws-blurb">{fn?.blurb}</p>

      <div className="ws-field">
        <span>What they work on</span>
        {/* the agent's current tasks · each removable */}
        <div className="ws-tasks">
          {agent.tasks.map((tid) => (
            <span key={tid} className="ws-task on">
              {taskName(tid)}
              <button className="ws-task-x" onClick={() => update(agent.id, { tasks: agent.tasks.filter((x) => x !== tid) })} aria-label={`Remove ${taskName(tid)}`}>×</button>
            </span>
          ))}
          {agent.tasks.length === 0 && <span className="ws-blurb">No tasks yet · add some below.</span>}
        </div>
        {/* tasks available for this function, not yet added */}
        {(fn?.tasks ?? []).some((t) => !agent.tasks.includes(t.id)) && (
          <div className="ws-task-add">
            {(fn?.tasks ?? []).filter((t) => !agent.tasks.includes(t.id)).map((t) => (
              <button key={t.id} className="ws-task add" onClick={() => update(agent.id, { tasks: [...agent.tasks, t.id] })}>
                + {t.name}
              </button>
            ))}
          </div>
        )}
        {/* a fully custom task */}
        <div className="ws-task-custom">
          <input
            value={customTask}
            placeholder="Add something else…"
            maxLength={40}
            onChange={(e) => setCustomTask(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addCustom() } }}
          />
          <button className="ws-btn" onClick={addCustom} disabled={!customTask.trim()}>Add</button>
        </div>
      </div>

      <label className="ws-field">
        <span>Budget per run</span>
        <input
          type="number" min={0} step={0.5} value={agent.budget}
          onChange={(e) => update(agent.id, { budget: Math.max(0, Number(e.target.value) || 0) })}
        />
        <em className="ws-conv">≈ {formatFrom(agent.budget, currency as any)}</em>
      </label>

      {/* the plain-language brief · how this teammate works, editable as a form */}
      {agent.role && <AgentContext dojoId={dojoId} roleId={agent.role} agentName={agent.name} />}

      {/* apps this agent's tasks can act inside · connect them right here */}
      <div className="ws-conn"><ConnectorsPanel dept={agent.fn} /></div>

      {/* external agents · link the user's own Notion/Slack/MCP/A2A agents */}
      <ExternalAgentsPanel agent={agent} onChange={(list) => update(agent.id, { externalAgents: list })} />

      <button className="ws-btn danger" onClick={() => { remove(agent.id); onDeleted() }}>Remove from the team</button>
    </div>
  )
}

// Link EXTERNAL AI agents (a Notion/Slack agent, or any MCP / A2A host) to this
// DojoBuro agent. MCP agents plug in as tools during a run; A2A / webhook agents
// receive delegated tasks. Verify checks reachability + identity via the server
// proxy (tokens stay off the browser wire).
const PROTO_TAG: Record<ExtAgent['protocol'], string> = {
  mcp: 'Tools', a2a: 'Delegate', webhook: 'Web',
}

const PROTO_HELP: Record<ExtAgent['protocol'], string> = {
  mcp: 'Lends its tools · your teammate can use them while it works. (MCP)',
  a2a: 'Takes over a whole task · your teammate hands the job across and waits for the answer. (A2A)',
  webhook: 'A plain web address · we send it the task and read the reply. (Webhook)',
}

function ExternalAgentsPanel({ agent, onChange }: { agent: WAgent; onChange: (list: ExtAgent[]) => void }) {
  const list = agent.externalAgents ?? []
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [protocol, setProtocol] = useState<ExtAgent['protocol']>('mcp')
  const [url, setUrl] = useState('')
  const [token, setToken] = useState('')
  const [status, setStatus] = useState<Record<string, { busy?: boolean; ok?: boolean; msg?: string }>>({})

  const add = () => {
    const u = url.trim()
    if (!u || !/^https:\/\//i.test(u)) return
    const ext: ExtAgent = {
      id: 'ext_' + u.replace(/[^a-z0-9]/gi, '').slice(-8) + '_' + list.length,
      name: name.trim() || 'Outside helper',
      protocol, url: u, authToken: token.trim() || undefined,
    }
    onChange([...list, ext])
    setName(''); setUrl(''); setToken(''); setOpen(false)
  }

  const verify = async (ext: ExtAgent) => {
    setStatus((s) => ({ ...s, [ext.id]: { busy: true } }))
    const r = await verifyExternalAgent(ext)
    setStatus((s) => ({
      ...s,
      [ext.id]: r.ok
        ? { ok: true, msg: `${r.name || 'linked'}${r.capabilities?.length ? ' · ' + r.capabilities.slice(0, 4).join(', ') : ''}` }
        : { ok: false, msg: r.error || 'Could not verify.' },
    }))
  }

  return (
    <div className="ws-extagents">
      <div className="ws-ext-h">
        <span>Outside helpers <span className="ws-ext-count">{list.length}</span></span>
        <button className="ws-btn" onClick={() => setOpen((v) => !v)}>{open ? 'Cancel' : '+ Add a helper'}</button>
      </div>
      <p className="ws-blurb">Already have an AI agent somewhere else (Notion, Slack, your own)? Bring it in to help this teammate. It can either lend its tools, or take a whole task off their hands.</p>

      {list.length > 0 && (
        <ul className="ws-extlist">
          {list.map((ext) => {
            const st = status[ext.id]
            return (
              <li key={ext.id} className="ws-extrow">
                <div className="ws-extmain">
                  <strong>{ext.name}</strong>
                  <span className={`ws-extproto p-${ext.protocol}`}>{PROTO_TAG[ext.protocol]}</span>
                  <span className="ws-exturl">{ext.url}</span>
                  {st?.msg && <span className={`ws-extstatus ${st.ok ? 'ok' : 'err'}`}>{st.busy ? 'Checking…' : st.msg}</span>}
                </div>
                <div className="ws-extbtns">
                  <button className="ws-btn" disabled={st?.busy} onClick={() => void verify(ext)}>{st?.busy ? '…' : 'Verify'}</button>
                  <button className="ws-btn danger" onClick={() => onChange(list.filter((x) => x.id !== ext.id))} aria-label="Remove">×</button>
                </div>
              </li>
            )
          })}
        </ul>
      )}

      {open && (
        <div className="ws-extform">
          <div className="ws-extgrid">
            <label className="ws-field"><span>Name</span><input value={name} maxLength={30} placeholder="My Notion agent" onChange={(e) => setName(e.target.value)} /></label>
            <label className="ws-field">
              <span>How it helps</span>
              <select value={protocol} onChange={(e) => setProtocol(e.target.value as ExtAgent['protocol'])}>
                <option value="mcp">Lends its tools</option>
                <option value="a2a">Takes a whole task</option>
                <option value="webhook">Plain web address</option>
              </select>
            </label>
          </div>
          <label className="ws-field"><span>Web address (https)</span><input value={url} placeholder="https://…" onChange={(e) => setUrl(e.target.value)} /></label>
          <label className="ws-field"><span>Access key (optional)</span><input type="password" value={token} autoComplete="off" placeholder="Leave empty if it needs none" onChange={(e) => setToken(e.target.value)} /></label>
          <p className="ws-blurb">{PROTO_HELP[protocol]}</p>
          <button className="ws-btn primary" disabled={!/^https:\/\//i.test(url.trim())} onClick={add}>Add helper</button>
        </div>
      )}
    </div>
  )
}

export function SkinPicker({ current, onPick, onClose }: { current: string; onPick: (id: string) => void; onClose: () => void }) {
  const [theme, setTheme] = useState<string>('all')
  const [focus, setFocus] = useState<string>(current)
  const list = theme === 'all' ? SKINS : SKINS.filter((s) => s.theme === theme)
  const focusSkin = skinById(focus)
  return createPortal(
    <div className="ws-overlay ws-over-top" onClick={onClose}>
      <div className="ws-picker" onClick={(e) => e.stopPropagation()}>
        <header className="ws-head">
          <strong>Choose a skin · {SKINS.length}</strong>
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="all">All themes</option>
            {SKIN_THEMES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          <button className="ws-x" onClick={onClose} aria-label="Close">×</button>
        </header>
        <div className="ws-pickbody">
          <aside className="ws-pick-preview">
            <Agent3DPreview id={focusSkin.id} character={focusSkin} size={168} />
            <div className="ws-skinname">{focusSkin.name}</div>
            <span className="ws-blurb">{focusSkin.theme} theme</span>
            <button className="ws-btn primary" onClick={() => onPick(focusSkin.id)}>Use this skin</button>
          </aside>
          <div className="ws-skingrid">
            {list.map((s) => (
              <button
                key={s.id}
                className={`ws-skincell ${s.id === focus ? 'sel' : ''}`}
                onMouseEnter={() => setFocus(s.id)}
                onFocus={() => setFocus(s.id)}
                onClick={() => onPick(s.id)}
                title={s.name}
              >
                <SkinAvatar skin={s} size={46} />
                <span>{s.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}

// ---------------------------------------------------------------------------
function AccountTab() {
  const account = useWorkshop((s) => s.account)
  const signIn = useWorkshop((s) => s.signInGuest)
  const signOut = useWorkshop((s) => s.signOut)
  const update = useWorkshop((s) => s.updateAccount)
  const [name, setName] = useState('')

  const privyOn = privyConfigured()

  if (!account) {
    return (
      <div className="ws-account">
        <h3>Sign in</h3>
        <p className="ws-blurb">
          {privyOn
            ? 'Connect with Privy (email, wallet or social) for a portable account across devices · or continue locally as a guest.'
            : 'Create a local account now. Connect Privy (email, wallet, social) in production for a portable account across devices.'}
        </p>
        <label className="ws-field"><span>Your name</span><input value={name} onChange={(e) => setName(e.target.value)} placeholder="Founder" /></label>
        <div className="ws-row">
          {privyOn ? (
            <button className="ws-btn primary" onClick={() => privyControls.login?.()}>Connect with Privy</button>
          ) : (
            <button className="ws-btn" disabled title="Set VITE_PRIVY_APP_ID to enable">Connect Privy (soon)</button>
          )}
          <button className="ws-btn" onClick={() => signIn(name)}>Continue as guest</button>
        </div>
      </div>
    )
  }

  const isPrivy = account.provider === 'privy'
  return (
    <div className="ws-account">
      <div className="ws-skinrow">
        <div className="ws-preview3d"><Agent3DPreview id={account.avatarSkinId} character={skinById(account.avatarSkinId)} size={96} /></div>
        <div><div className="ws-skinname">{account.name || 'Founder'}</div><span className="ws-blurb">{isPrivy ? 'Privy account · synced' : 'Local guest account'}</span></div>
      </div>

      <CompanyPanel />
      <label className="ws-field"><span>Name</span><input value={account.name} onChange={(e) => update({ name: e.target.value })} /></label>
      <label className="ws-field"><span>Handle</span><input value={account.handle} placeholder="@founder" onChange={(e) => update({ handle: e.target.value })} /></label>
      <label className="ws-field"><span>Email</span><input value={account.email} type="email" placeholder="you@dojo.app" onChange={(e) => update({ email: e.target.value })} /></label>
      {isPrivy && privyControls.ready && (
        <p className="ws-blurb">Signed in with Privy. Manage linked wallets & socials from the Privy dialog.</p>
      )}
      <button
        className="ws-btn danger"
        onClick={() => { location.hash = ''; if (isPrivy && privyControls.logout) privyControls.logout(); else signOut() }}
      >
        Sign out
      </button>
    </div>
  )
}

// The founder's company, as it looks from their profile: its name, and every
// dojo team in it. Renaming the company here renames it everywhere; each team
// can be renamed or removed without leaving the profile.
function CompanyPanel() {
  const projectName = useWorkshop((s) => s.projectName)
  const setProjectName = useWorkshop((s) => s.setProjectName)
  const dojos = useWorkshop((s) => s.dojos)
  const renameDojo = useWorkshop((s) => s.renameDojo)
  const deleteDojo = useWorkshop((s) => s.deleteDojo)

  return (
    <div className="ws-company">
      <h3>Your company</h3>
      <label className="ws-field">
        <span>Company name</span>
        <input
          value={projectName}
          maxLength={40}
          placeholder="Name your company"
          onChange={(e) => setProjectName(e.target.value)}
        />
      </label>

      <span className="ws-field-lab">Dojo teams <b>{dojos.length}</b></span>
      {dojos.length === 0 ? (
        <p className="ws-blurb">No teams yet · add some from the home page.</p>
      ) : (
        <ul className="ws-colist">
          {dojos.map((d) => {
            const a = d.archetype ? ARCHETYPE_BY_ID[d.archetype] : null
            const crew = d.agents.filter((x) => !x.hidden).length
            return (
              <li key={d.id} className="ws-corow" style={{ ['--ac' as string]: a?.tint ?? '#7b5cff' }}>
                <span className="ws-coglyph">{a?.glyph ?? '◆'}</span>
                <span className="ws-cotxt">
                  <input
                    className="ws-coname"
                    value={d.name}
                    maxLength={40}
                    aria-label={`Rename ${d.name}`}
                    onChange={(e) => renameDojo(d.id, e.target.value)}
                  />
                  <em>{a ? a.label : 'Full company'} · {crew} teammates</em>
                </span>
                <button
                  className="ws-btn danger"
                  aria-label={`Remove ${d.name}`}
                  onClick={() => { if (confirm(`Remove "${d.name}"? Its team and everything they made are removed.`)) deleteDojo(d.id) }}
                >
                  Remove
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

function BillingTab() {
  const currency = useWorkshop((s) => s.account?.currency ?? 'USD') as CurrencyCode
  const setCurrency = useWorkshop((s) => s.setCurrency)
  const hasAccount = useWorkshop((s) => !!s.account)
  const brake = useEngine((s) => s.dailyCreditCap)
  const [org, setOrg] = useState<OrgSnapshot | null>(null)

  // One request for the whole screen: the plan the company is on, and what its
  // allowance has left. PlanCards is handed the same answer rather than asking
  // for it again.
  useEffect(() => {
    let live = true
    void (async () => {
      try {
        const r = await apiFetch(`/api/org?action=me&${refParams()}`)
        const j = await r.json()
        if (live && j?.ok) setOrg(j as OrgSnapshot)
      } catch { /* offline · the screen still reads, it just cannot say which plan */ }
    })()
    return () => { live = false }
  }, [hasAccount])

  const a = org?.allowance
  const period = a?.window === 'month' ? 'this month' : 'today'

  return (
    <div className="ws-billing">
      {/* The key comes FIRST. It is the product's actual proposition — your
          key, your bill, no meter — and it used to sit under a currency picker
          as though it were a setting. */}
      <ClaudeKeyPanel hasAccount={hasAccount} />

      <h3 style={{ marginTop: 18, textTransform: 'capitalize' }}>{period}</h3>
      {/* These two numbers used to be the founder's OWN spending brake shown
          under the label "free daily allowance". It is not that: the allowance
          comes from the plan and is decided by the server. The brake is still
          below, named as what it is. */}
      <div className="set-stats">
        <div><b>{a ? a.usedRuns : '—'}</b><em>tasks run {period}</em></div>
        <div><b>{a ? a.leftRuns : '—'}</b><em>left on your plan</em></div>
      </div>
      <p className="ws-blurb">
        {a
          ? <>Your plan allows <b>{a.runs.toLocaleString('en-US')}</b> tasks {period}
            {a.shared ? ' across everyone in your company' : ''}. This counter only moves when a run is
            served on <em>our</em> side — with your own key above, nothing is metered at all.</>
          : <>This counter only moves when a run is served on <em>our</em> side. With your own key above,
            nothing here is metered at all.</>}
      </p>
      <p className="ws-blurb">
        Separately, you have asked us to stop after <b>{brake}</b> tasks a day as your own brake.
        Change it in Settings — it never raises what your plan allows, only lowers it.
      </p>

      <h3>Currency</h3>
      <p className="ws-blurb">Prices show in your currency · you are charged by card, in that currency.</p>
      <div className="ws-currencies">
        {CURRENCY_LIST.map((c) => (
          <button key={c.code} className={`ws-cur ${currency === c.code ? 'on' : ''}`} disabled={!hasAccount} onClick={() => setCurrency(c.code)}>
            <strong>{c.symbol}</strong> {c.code}
          </button>
        ))}
      </div>
      {!hasAccount && <p className="ws-blurb">Sign in (Account tab) to set a currency.</p>}


      <h3 style={{ marginTop: 18 }}>Plans</h3>
      <PlanCards hasAccount={hasAccount} org={org} />
      <p className="ws-blurb">
        A task is one teammate doing one step. On <b>Founder</b> your tasks run on your own Claude key
        and Anthropic bills you directly — that plan costs Dojoburo nothing to serve.
      </p>
      {/* The credit top-up that used to sit above these cards is gone. It took a
          card and wrote to a ledger nothing reads: a run is authorised by the
          free daily quota in work_usage, never by a balance. */}
    </div>
  )
}

/**
 * The plan cards, and the one button on this screen that takes a card.
 *
 * A plan belongs to the COMPANY, not to whoever is looking at it: one
 * subscription covers everyone in the organisation, which is why the current
 * plan is read from /api/org rather than from anything in this browser.
 *
 * Every way this can fail says something different, because they need different
 * things from the person reading. "Sign in first" is fixable by them; "this
 * deployment has no Stripe price for that plan" is not, and telling them to
 * check their card would waste their afternoon.
 */
function PlanCards({ hasAccount, org }: { hasAccount: boolean; org: OrgSnapshot | null }) {
  const email = useWorkshop((s) => s.account?.email || '')
  const [busy, setBusy] = useState<string | null>(null)
  const [msg, setMsg] = useState('')

  const current = org ? { plan: org.plan || 'free', status: org.planStatus || 'active', role: org.role } : null
  // Only the owner is billed, so only the owner is offered the card.
  const mayBuy = !current || current.role === 'owner'

  async function buy(plan: string) {
    setBusy(plan); setMsg('')
    try {
      const r = await apiFetch('/api/checkout', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ plan, email, ...refObject() }),
      })
      const j = await r.json()
      if (j?.ok && j.url) { window.location.href = j.url; return }
      setMsg(
        j?.error === 'plan_not_configured'
          ? 'This deployment has no price set for that plan yet. Nothing was charged.'
          : j?.error === 'not_configured'
            ? 'Payments are not switched on in this deployment. Nothing was charged.'
            : j?.error === 'rate'
              ? 'Too many attempts just now. Give it a minute.'
              : 'Could not start checkout. Nothing was charged.',
      )
    } catch {
      setMsg('Could not reach the checkout. Nothing was charged.')
    } finally {
      setBusy(null)
    }
  }

  return (
    <>
      <div className="ws-plans">
        {PLANS.map((pl) => {
          const mine = current?.plan === pl.id || (!current && pl.id === 'free')
          return (
            <div key={pl.id} className={`ws-plan${pl.featured ? ' on' : ''}${mine ? ' mine' : ''}`}>
              <strong>{pl.name}</strong>
              <span className="ws-price">{planPrice(pl)}<i>{pl.usd === 0 ? '' : '/mo'}</i></span>
              <span className="ws-blurb">{pl.tagline}</span>
              {mine ? (
                <span className="ws-plan-now">
                  {current?.status === 'past_due' ? '◦ your plan · payment failed' : '✓ your plan'}
                </span>
              ) : pl.usd === 0 ? (
                <span className="ws-plan-now">◦ where everyone starts</span>
              ) : (
                <button
                  className="ws-btn"
                  disabled={!hasAccount || !mayBuy || busy !== null}
                  onClick={() => void buy(pl.id)}
                >
                  {busy === pl.id ? 'Opening…' : `Choose ${pl.name}`}
                </button>
              )}
            </div>
          )
        })}
      </div>
      {current?.status === 'past_due' && (
        <p className="ws-blurb ws-paynote">
          <b>A payment did not go through.</b> Your plan is still running — Stripe will try the card
          again. Nothing stops until it gives up.
        </p>
      )}
      {!hasAccount && <p className="ws-blurb">Sign in (Account tab) to choose a plan.</p>}
      {hasAccount && !mayBuy && (
        <p className="ws-blurb">The company owner holds the plan. Ask them to change it.</p>
      )}
      {msg && <p className="ws-blurb ws-paynote">{msg}</p>}
    </>
  )
}

// Bring-your-own Claude key. The key is sealed server-side (AES-256-GCM) and used
// only to run THIS user's deliverables · so their real work is billed to their
// own Anthropic account, not the operator's. Text tasks work without a key on a
// capped free tier; the design system and tool-acting need a key.
function ClaudeKeyPanel({ hasAccount }: { hasAccount: boolean }) {
  const byok = useWork((s) => s.byok)
  const backend = useWork((s) => s.backend)
  const loadedOnce = useWork((s) => s.loadedOnce)
  const loadTools = useWork((s) => s.loadTools)
  const saveKey = useWork((s) => s.saveKey)
  const clearKey = useWork((s) => s.clearKey)
  const [key, setKey] = useState('')
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState('')

  useEffect(() => { if (!loadedOnce) void loadTools() }, [loadedOnce, loadTools])

  async function save() {
    setBusy(true); setMsg('')
    const r = await saveKey(key.trim())
    setBusy(false)
    if (r.ok) { setKey(''); setMsg('') }
    else setMsg(r.error === 'bad_key' ? 'That doesn’t look like a Claude key (starts with sk-ant-…).' : r.error === 'no_backend' ? 'Connections backend not configured on this deployment.' : 'Could not save the key.')
  }

  return (
    <div className="ws-keypanel">
      <h3>Your Claude key <span className="ws-tag-byok">nothing here is metered</span></h3>
      <p className="ws-blurb">
        This is how DojoBuro is meant to be used. Add <strong>your own</strong> Anthropic key and your
        teammates run on it: <strong>unlimited runs</strong>, any model you like, and Anthropic bills
        you directly for exactly what you used. We never put a meter between you and your own work —
        you are paying us for the teams, the plans and the connectors, not for tokens.
      </p>
      <p className="ws-blurb">
        The key is sealed server-side with AES-256-GCM and never shown again. Without one, written
        work still runs on a capped free allowance; a design system and acting inside your apps
        (Notion, GitHub…) need either your key or the Managed plan.
      </p>

      {byok.connected ? (
        <div className="ws-keyrow on">
          <span className="ws-keyhint">{byok.hint || 'Key saved'} · billed to your Anthropic account</span>
          <button className="ws-btn danger" onClick={() => void clearKey()}>Remove</button>
        </div>
      ) : (
        <>
          <div className="ws-keyrow">
            <input
              type="password" value={key} placeholder="sk-ant-…" autoComplete="off" spellCheck={false}
              disabled={!hasAccount || !backend} onChange={(e) => setKey(e.target.value)}
            />
            <button className="ws-btn primary" disabled={!hasAccount || !backend || busy || key.trim().length < 20} onClick={save}>
              {busy ? 'Saving…' : 'Save key'}
            </button>
          </div>
          <p className="ws-blurb ws-keynote">
            Get a key at <a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noreferrer">console.anthropic.com</a>.
            It’s stored encrypted server-side and never shown again. {!hasAccount && 'Sign in (Account tab) first.'}
            {hasAccount && !backend && ' Connections aren’t enabled on this deployment yet.'}
          </p>
          {msg && <p className="ws-blurb ws-paynote">{msg}</p>}
        </>
      )}
    </div>
  )
}

