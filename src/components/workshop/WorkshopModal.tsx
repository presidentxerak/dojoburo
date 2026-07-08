import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useWorkshop, GRID, MAX_AGENTS, type WAgent } from '../../workshop'
import { SKINS, SKIN_THEMES, skinById } from '../../data/skins'
import { DOJO_TEMPLATES, templateById } from '../../data/templates'
import { PROFESSIONS, professionColor } from '../../data/professions'
import { CONNECTOR_BY_ID } from '../../data/connectors'
import { FUNCTIONS, FUNCTION_BY_ID } from '../../data/functions'
import { CURRENCY_LIST, formatFrom, toXrp, type CurrencyCode } from '../../data/currency'
import { privyConfigured, privyControls } from '../../auth/controls'
import { getStoredWallet } from '../../xrpl/wallet'
import { loadNetworkId } from '../../xrpl/network'
import { useWork } from '../../agents/workStore'
import { SkinAvatar } from './SkinAvatar'
import { TemplateThumb } from './TemplateThumb'
import { Agent3DPreview } from '../three/Agent3DPreview'

type Tab = 'studio' | 'account' | 'billing'

export function WorkshopModal({ onClose }: { onClose: () => void }) {
  const intent = useWork((s) => s.studioIntent)
  const [tab, setTab] = useState<Tab>(intent ?? 'studio')
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
  const createDojoForProfession = useWorkshop((s) => s.createDojoForProfession)
  const renameDojo = useWorkshop((s) => s.renameDojo)
  const deleteDojo = useWorkshop((s) => s.deleteDojo)
  const addAgent = useWorkshop((s) => s.addAgent)
  const moveAgent = useWorkshop((s) => s.moveAgent)
  const currency = useWorkshop((s) => s.account?.currency ?? 'XRP')
  const dirty = useWorkshop((s) => s.dirty)
  const save = useWorkshop((s) => s.save)

  const setDojoTemplate = useWorkshop((s) => s.setDojoTemplate)
  const dojo = dojos.find((d) => d.id === activeId) ?? dojos[0]
  const [sel, setSel] = useState<string | null>(null)
  const [picking, setPicking] = useState(false)
  // 'create' opens the picker to spin up a new dojo; 'change' re-themes this one
  const [tplPick, setTplPick] = useState<null | 'create' | 'change'>(null)
  useEffect(() => setSel(null), [activeId])

  if (!dojo) return null
  const agent = dojo.agents.find((a) => a.id === sel) ?? null
  const cellAt = (x: number, y: number) => dojo?.agents.find((a) => a.gx === x && a.gy === y)
  const tpl = templateById(dojo.template)

  return (
    <div className="ws-studio">
      {/* dojo switcher */}
      <div className="ws-dojobar">
        <select value={dojo?.id} onChange={(e) => setActive(e.target.value)}>
          {dojos.map((d) => (
            <option key={d.id} value={d.id}>{d.name} · {d.agents.length}/{MAX_AGENTS}</option>
          ))}
        </select>
        <button className="ws-btn" title="Change environment" onClick={() => setTplPick('change')}>{tpl.label}</button>
        <button className="ws-btn" onClick={() => renameDojo(dojo.id, prompt('Rename dojo', dojo.name) || dojo.name)}>Rename</button>
        <button className="ws-btn primary" onClick={() => setTplPick('create')}>+ New dojo</button>
        <button className="ws-btn danger" onClick={() => confirm(`Delete "${dojo.name}"?`) && deleteDojo(dojo.id)}>Delete</button>
      </div>

      <div className="ws-cols">
        {/* grid editor */}
        <div className="ws-gridwrap">
          <p className="ws-hint">Tap an agent, then tap a cell to move it. Tap a name to edit.</p>
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

      {/* save bar · dojo & agent edits are drafts until validated */}
      <div className="ws-savebar">
        <span className={`ws-saveflag ${dirty ? 'on' : ''}`}>{dirty ? '● Unsaved changes' : '✓ All changes saved'}</span>
        <button className="ws-btn primary" disabled={!dirty} onClick={save}>Validate &amp; save dojo</button>
      </div>

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
          <button className="ws-btn" onClick={onPickSkin}>Change skin ({SKINS.length})</button>
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
        <div className="ws-preview3d"><Agent3DPreview character={skinById(account.avatarSkinId)} size={96} /></div>
        <div><div className="ws-skinname">{account.name || 'Founder'}</div><span className="ws-blurb">{isPrivy ? 'Privy account · synced' : 'Local guest account'}</span></div>
      </div>
      <label className="ws-field"><span>Name</span><input value={account.name} onChange={(e) => update({ name: e.target.value })} /></label>
      <label className="ws-field"><span>Handle</span><input value={account.handle} placeholder="@founder" onChange={(e) => update({ handle: e.target.value })} /></label>
      <label className="ws-field"><span>Email</span><input value={account.email} type="email" placeholder="you@dojo.app" onChange={(e) => update({ email: e.target.value })} /></label>
      {isPrivy && privyControls.ready && (
        <p className="ws-blurb">Signed in with Privy. Manage linked wallets & socials from the Privy dialog.</p>
      )}
      <button
        className="ws-btn danger"
        onClick={() => { if (isPrivy && privyControls.logout) privyControls.logout(); else signOut() }}
      >
        Sign out
      </button>
    </div>
  )
}

function BillingTab() {
  const currency = useWorkshop((s) => s.account?.currency ?? 'XRP') as CurrencyCode
  const setCurrency = useWorkshop((s) => s.setCurrency)
  const hasAccount = useWorkshop((s) => !!s.account)
  const email = useWorkshop((s) => s.account?.email ?? '')
  const privyDid = useWorkshop((s) => s.account?.privyDid ?? '')

  return (
    <div className="ws-billing">
      <ClaudeKeyPanel hasAccount={hasAccount} />

      <h3>Currency</h3>
      <p className="ws-blurb">Prices show in your currency. XRP is the settlement rail via x402 · fiat is converted to XRP at checkout.</p>
      <div className="ws-currencies">
        {CURRENCY_LIST.map((c) => (
          <button key={c.code} className={`ws-cur ${currency === c.code ? 'on' : ''}`} disabled={!hasAccount} onClick={() => setCurrency(c.code)}>
            <strong>{c.symbol}</strong> {c.code}
          </button>
        ))}
      </div>
      {!hasAccount && <p className="ws-blurb">Sign in (Account tab) to set a currency.</p>}

      <TopUp currency={currency} email={email} privyDid={privyDid} disabled={!hasAccount} />

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
      <p className="ws-blurb">Pay with XRP, USD, EUR or JPY · fiat routes through a processor and settles in XRP via x402.</p>
    </div>
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
      <h3>Your Claude key <span className="ws-tag-byok">you pay only for what you use</span></h3>
      <p className="ws-blurb">
        Agents produce real deliverables with Claude. Add <strong>your own</strong> Anthropic key and every run is billed to
        <strong> your</strong> account · you pay only for your choices and connected tools. Without a key, text deliverables still
        run on a free tier; the <strong>Design system</strong> and acting inside your tools (Notion, GitHub…) need a key.
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

// Fiat top-up: pick an amount in the chosen currency, "Pay with card" posts to
// the /api/checkout Edge processor and redirects to the hosted checkout. The
// charge settles in XRP via x402 (webhook) · see api/checkout.ts. When the
// processor isn't configured the button explains the activation step instead
// of failing silently.
const PRESETS: Record<CurrencyCode, number[]> = {
  XRP: [10, 25, 50, 100],
  USD: [10, 25, 50, 100],
  EUR: [10, 25, 50, 100],
  JPY: [1500, 3500, 7000, 14000],
}

function TopUp({ currency, email, privyDid, disabled }: { currency: CurrencyCode; email: string; privyDid: string; disabled: boolean }) {
  const presets = PRESETS[currency] ?? PRESETS.XRP
  const [amount, setAmount] = useState<number>(presets[1])
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState<string>('')
  const xrp = toXrp(amount, currency)

  async function pay() {
    setBusy(true)
    setMsg('')
    try {
      // deliver the settled XRP to the user's own treasury wallet when they have one
      const treasury = getStoredWallet(loadNetworkId(), 'treasury')
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ amount, currency, email, kind: 'credits', privyDid, xrplAddress: treasury?.address }),
      })
      const j = await res.json().catch(() => ({}))
      if (j?.ok && j.url) {
        window.location.href = j.url as string // hosted checkout
        return
      }
      if (j?.error === 'not_configured') {
        setMsg('Card payments aren’t live yet on this deployment. Set STRIPE_SECRET_KEY to enable · you can still fund agents directly in XRP.')
      } else {
        setMsg('Could not start checkout. Please try again in a moment.')
      }
    } catch {
      setMsg('Network error starting checkout.')
    } finally {
      setBusy(false)
    }
  }

  // XRP is the settlement rail itself · a card processor can't charge in XRP, so
  // for an XRP display currency we point users at direct on-ledger funding.
  const isXrp = currency === 'XRP'

  return (
    <div className="ws-topup">
      <h3 style={{ marginTop: 18 }}>Add credits</h3>
      {isXrp ? (
        <p className="ws-blurb">You're in XRP · fund agents directly from their card in the office. Switch to USD, EUR or JPY above to top up by card (it settles back into XRP via x402).</p>
      ) : (
        <>
          <p className="ws-blurb">Top up your balance with a card. The charge settles in XRP via x402.</p>
          <div className="ws-amounts">
            {presets.map((v) => (
              <button key={v} className={`ws-cur ${amount === v ? 'on' : ''}`} disabled={disabled} onClick={() => setAmount(v)}>
                {formatFrom(toXrp(v, currency), currency)}
              </button>
            ))}
          </div>
          <div className="ws-payrow">
            <span className="ws-blurb">≈ {xrp.toFixed(2)} XRP settled</span>
            <button className="ws-btn primary" disabled={disabled || busy} onClick={pay}>
              {busy ? 'Starting…' : `Pay ${formatFrom(xrp, currency)} with card`}
            </button>
          </div>
          {disabled && <p className="ws-blurb">Sign in (Account tab) to add credits.</p>}
          {msg && <p className="ws-blurb ws-paynote">{msg}</p>}
        </>
      )}
    </div>
  )
}
