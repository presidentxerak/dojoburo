import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useWorkshop, GRID, MAX_AGENTS, type WAgent } from '../../workshop'
import { SKINS, SKIN_THEMES, skinById } from '../../data/skins'
import { FUNCTIONS, FUNCTION_BY_ID } from '../../data/functions'
import { CURRENCY_LIST, formatFrom } from '../../data/currency'
import { SkinAvatar } from './SkinAvatar'
import { Agent3DPreview } from '../three/Agent3DPreview'

type Tab = 'studio' | 'account' | 'billing'

export function WorkshopModal({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState<Tab>('studio')
  return (
    <div className="ws-overlay" onClick={onClose}>
      <div className="ws-modal" onClick={(e) => e.stopPropagation()}>
        <header className="ws-head">
          <strong>Dojo Studio</strong>
          <nav className="ws-tabs">
            <button className={tab === 'studio' ? 'on' : ''} onClick={() => setTab('studio')}>Dojos & agents</button>
            <button className={tab === 'account' ? 'on' : ''} onClick={() => setTab('account')}>Account</button>
            <button className={tab === 'billing' ? 'on' : ''} onClick={() => setTab('billing')}>Billing</button>
          </nav>
          <button className="ws-x" onClick={onClose} aria-label="Close">×</button>
        </header>
        <div className="ws-body">
          {tab === 'studio' && <StudioTab />}
          {tab === 'account' && <AccountTab />}
          {tab === 'billing' && <BillingTab />}
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
function StudioTab() {
  const dojos = useWorkshop((s) => s.dojos)
  const activeId = useWorkshop((s) => s.activeDojoId)
  const setActive = useWorkshop((s) => s.setActiveDojo)
  const createDojo = useWorkshop((s) => s.createDojo)
  const renameDojo = useWorkshop((s) => s.renameDojo)
  const deleteDojo = useWorkshop((s) => s.deleteDojo)
  const addAgent = useWorkshop((s) => s.addAgent)
  const moveAgent = useWorkshop((s) => s.moveAgent)
  const currency = useWorkshop((s) => s.account?.currency ?? 'XRP')

  const dojo = dojos.find((d) => d.id === activeId) ?? dojos[0]
  const [sel, setSel] = useState<string | null>(null)
  const [picking, setPicking] = useState(false)
  useEffect(() => setSel(null), [activeId])

  if (!dojo) return null
  const agent = dojo.agents.find((a) => a.id === sel) ?? null
  const cellAt = (x: number, y: number) => dojo?.agents.find((a) => a.gx === x && a.gy === y)

  return (
    <div className="ws-studio">
      {/* dojo switcher */}
      <div className="ws-dojobar">
        <select value={dojo?.id} onChange={(e) => setActive(e.target.value)}>
          {dojos.map((d) => (
            <option key={d.id} value={d.id}>{d.name} · {d.agents.length}/{MAX_AGENTS}</option>
          ))}
        </select>
        <button className="ws-btn" onClick={() => renameDojo(dojo.id, prompt('Rename dojo', dojo.name) || dojo.name)}>Rename</button>
        <button className="ws-btn" onClick={() => createDojo()}>+ New dojo</button>
        <button className="ws-btn danger" onClick={() => confirm(`Delete "${dojo.name}"?`) && deleteDojo(dojo.id)}>Delete</button>
      </div>

      <div className="ws-cols">
        {/* grid editor */}
        <div className="ws-gridwrap">
          <p className="ws-hint">Tap an agent, then tap a cell to move it. Tap a name to edit.</p>
          <div className="ws-grid" style={{ gridTemplateColumns: `repeat(${GRID.cols}, 1fr)` }}>
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
                      <SkinAvatar skin={skinById(a.skinId)} size={34} />
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

        {/* agent editor */}
        <div className="ws-editor">
          {!agent && <p className="ws-empty">Select or add an agent to edit its skin, function, tasks and budget.</p>}
          {agent && <AgentEditor agent={agent} currency={currency} onPickSkin={() => setPicking(true)} onDeleted={() => setSel(null)} />}
        </div>
      </div>

      {picking && agent && (
        <SkinPicker
          current={agent.skinId}
          onPick={(id) => { useWorkshop.getState().updateAgent(agent.id, { skinId: id }); setPicking(false) }}
          onClose={() => setPicking(false)}
        />
      )}
    </div>
  )
}

function AgentEditor({ agent, currency, onPickSkin, onDeleted }: { agent: WAgent; currency: string; onPickSkin: () => void; onDeleted: () => void }) {
  const update = useWorkshop((s) => s.updateAgent)
  const remove = useWorkshop((s) => s.deleteAgent)
  const fn = FUNCTION_BY_ID[agent.fn]
  const skin = skinById(agent.skinId)

  return (
    <div className="ws-form">
      <div className="ws-skinrow">
        <div className="ws-preview3d"><Agent3DPreview character={skin} size={104} /></div>
        <div>
          <div className="ws-skinname">{skin.name}</div>
          <button className="ws-btn" onClick={onPickSkin}>Change skin (100)</button>
        </div>
      </div>

      <label className="ws-field">
        <span>Name</span>
        <input value={agent.name} maxLength={24} onChange={(e) => update(agent.id, { name: e.target.value })} />
      </label>

      <label className="ws-field">
        <span>Function</span>
        <select
          value={agent.fn}
          onChange={(e) => update(agent.id, { fn: e.target.value as WAgent['fn'], tasks: (FUNCTION_BY_ID[e.target.value]?.tasks ?? []).slice(0, 4).map((t) => t.id) })}
        >
          {FUNCTIONS.map((f) => <option key={f.id} value={f.id}>{f.label}</option>)}
        </select>
      </label>
      <p className="ws-blurb">{fn?.blurb}</p>

      <div className="ws-field">
        <span>Tasks</span>
        <div className="ws-tasks">
          {(fn?.tasks ?? []).map((t) => {
            const on = agent.tasks.includes(t.id)
            return (
              <button
                key={t.id}
                className={`ws-task ${on ? 'on' : ''}`}
                onClick={() => update(agent.id, { tasks: on ? agent.tasks.filter((x) => x !== t.id) : [...agent.tasks, t.id] })}
              >
                {t.name}{t.price > 0 ? ` · ${t.price} XRP` : ''}
              </button>
            )
          })}
        </div>
      </div>

      <label className="ws-field">
        <span>Budget (XRP)</span>
        <input
          type="number" min={0} step={0.5} value={agent.budgetXrp}
          onChange={(e) => update(agent.id, { budgetXrp: Math.max(0, Number(e.target.value) || 0) })}
        />
        <em className="ws-conv">≈ {formatFrom(agent.budgetXrp, currency as any)}</em>
      </label>

      <button className="ws-btn danger" onClick={() => { remove(agent.id); onDeleted() }}>Delete agent</button>
    </div>
  )
}

function SkinPicker({ current, onPick, onClose }: { current: string; onPick: (id: string) => void; onClose: () => void }) {
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
            <Agent3DPreview character={focusSkin} size={168} />
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

  if (!account) {
    return (
      <div className="ws-account">
        <h3>Sign in</h3>
        <p className="ws-blurb">Create a local account now. Connect Privy (email, wallet, social) in production for a portable account across devices.</p>
        <label className="ws-field"><span>Your name</span><input value={name} onChange={(e) => setName(e.target.value)} placeholder="Founder" /></label>
        <div className="ws-row">
          <button className="ws-btn primary" onClick={() => signIn(name)}>Continue as guest</button>
          <button className="ws-btn" disabled title="Set VITE_PRIVY_APP_ID to enable">Connect Privy (soon)</button>
        </div>
      </div>
    )
  }

  return (
    <div className="ws-account">
      <div className="ws-skinrow">
        <div className="ws-preview3d"><Agent3DPreview character={skinById(account.avatarSkinId)} size={96} /></div>
        <div><div className="ws-skinname">{account.name || 'Founder'}</div><span className="ws-blurb">{account.provider === 'privy' ? 'Privy account' : 'Local guest account'}</span></div>
      </div>
      <label className="ws-field"><span>Name</span><input value={account.name} onChange={(e) => update({ name: e.target.value })} /></label>
      <label className="ws-field"><span>Handle</span><input value={account.handle} placeholder="@founder" onChange={(e) => update({ handle: e.target.value })} /></label>
      <label className="ws-field"><span>Email</span><input value={account.email} type="email" placeholder="you@dojo.app" onChange={(e) => update({ email: e.target.value })} /></label>
      <button className="ws-btn danger" onClick={signOut}>Sign out</button>
    </div>
  )
}

function BillingTab() {
  const currency = useWorkshop((s) => s.account?.currency ?? 'XRP')
  const setCurrency = useWorkshop((s) => s.setCurrency)
  const hasAccount = useWorkshop((s) => !!s.account)

  return (
    <div className="ws-billing">
      <h3>Currency</h3>
      <p className="ws-blurb">Prices show in your currency. XRP is the settlement rail via x402 — fiat is converted to XRP at checkout.</p>
      <div className="ws-currencies">
        {CURRENCY_LIST.map((c) => (
          <button key={c.code} className={`ws-cur ${currency === c.code ? 'on' : ''}`} disabled={!hasAccount} onClick={() => setCurrency(c.code)}>
            <strong>{c.symbol}</strong> {c.code}
          </button>
        ))}
      </div>
      {!hasAccount && <p className="ws-blurb">Sign in (Account tab) to set a currency.</p>}

      <h3 style={{ marginTop: 18 }}>Plans</h3>
      <div className="ws-plans">
        {[
          { n: 'Free', p: '0', d: '30 tasks/mo · Testnet · free/open models' },
          { n: 'Starter', p: formatFrom(5, currency as any), d: '300 tasks · Haiku fallback · Mainnet' },
          { n: 'Pro', p: formatFrom(16, currency as any), d: '1,500 tasks · auto-escalation' },
          { n: 'Team', p: formatFrom(60, currency as any), d: '8,000 tasks · Opus on hard tasks' },
        ].map((pl) => (
          <div key={pl.n} className="ws-plan"><strong>{pl.n}</strong><span className="ws-price">{pl.p}<i>/mo</i></span><span className="ws-blurb">{pl.d}</span></div>
        ))}
      </div>
      <p className="ws-blurb">Pay with XRP, USD, EUR or JPY — fiat routes through a processor and settles in XRP via x402. Bring-your-own model key is supported.</p>
    </div>
  )
}
