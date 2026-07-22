// Command palette · a keyboard-first launcher (Cmd/Ctrl+K). Search every agent
// (presets + custom), jump to key pages (Finance / Analytics / Leads), or fire a
// quick action (launch Chief, open the dojo, connect apps). Everything the app
// can do, one shortcut away. Pure client · no network.
import { useEffect, useMemo, useRef, useState } from 'react'
import { useWorkshop } from '../workshop'
import { useDojo } from '../store'
import { useWork } from '../agents/workStore'
import { launchCeo } from '../agents/autopilot'
import { ROLE_BY_ID, canonicalRole } from '../data/roleAgents'

interface Cmd {
  id: string
  label: string
  hint: string
  group: 'Agents' | 'Pages' | 'Actions'
  keywords: string
  run: () => void
}

export function CommandPalette({ openDojo, showDashboard }: { openDojo: () => void; showDashboard: () => void }) {
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const dojo = useWorkshop((s) => s.dojos.find((d) => d.id === s.activeDojoId))
  const selectAgent = useDojo((s) => s.selectAgent)

  // global shortcut · Cmd/Ctrl+K toggles the palette
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault(); setOpen((v) => !v)
      } else if (e.key === 'Escape' && open) { setOpen(false) }
    }
    const onOpen = () => setOpen(true)
    window.addEventListener('keydown', onKey)
    window.addEventListener('open-cmdk', onOpen)
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('open-cmdk', onOpen) }
  }, [open])

  useEffect(() => { if (open) { setQ(''); setActive(0); setTimeout(() => inputRef.current?.focus(), 20) } }, [open])

  const openAgent = (id: string) => { selectAgent(id); showDashboard(); setOpen(false) }
  const openPage = (roleId: string, tab: string) => {
    const a = dojo?.agents.find((x) => x.role === roleId)
    if (!a) return
    useWork.getState().setModuleTab(tab); selectAgent(a.id); showDashboard(); setOpen(false)
  }

  const cmds = useMemo<Cmd[]>(() => {
    const list: Cmd[] = []
    // agents · presets + custom, in dojo order, skip hidden
    for (const a of dojo?.agents ?? []) {
      if (a.hidden) continue
      const title = a.custom?.title || ROLE_BY_ID[canonicalRole(a.role)]?.title || a.fn
      list.push({ id: `agent-${a.id}`, label: `Open ${a.name}`, hint: title, group: 'Agents', keywords: `${a.name} ${title} ${a.fn}`.toLowerCase(), run: () => openAgent(a.id) })
    }
    // key pages
    list.push({ id: 'page-finance', label: 'Finance', hint: 'Revenue, VAT, cash, forecast', group: 'Pages', keywords: 'finance money revenue vat cash', run: () => openPage('busino', 'finance') })
    list.push({ id: 'page-analytics', label: 'Analytics', hint: 'CAC, LTV, ROI, conversion', group: 'Pages', keywords: 'analytics kpi cac ltv roi', run: () => openPage('busino', 'analytics') })
    list.push({ id: 'page-leads', label: 'Leads', hint: 'CRM pipeline & outreach', group: 'Pages', keywords: 'leads crm pipeline outreach contacts', run: () => openPage('pumpi', 'leads') })
    // actions
    list.push({ id: 'act-dojo', label: 'Open the dojo', hint: 'Fullscreen 3D office', group: 'Actions', keywords: 'dojo office 3d fullscreen', run: () => { selectAgent(null); openDojo(); setOpen(false) } })
    list.push({ id: 'act-ceo', label: 'CEO dashboard', hint: 'Company overview & roster', group: 'Actions', keywords: 'ceo dashboard company roster team', run: () => { selectAgent(null); showDashboard(); setOpen(false) } })
    list.push({ id: 'act-chief', label: 'Launch Chief', hint: 'Build everything automatically', group: 'Actions', keywords: 'chief launch autopilot build everything', run: () => { void launchCeo(dojo?.name || 'my company'); setOpen(false) } })
    list.push({ id: 'act-connect', label: 'Connect apps', hint: 'Integrations gallery', group: 'Actions', keywords: 'connect apps integrations connectors', run: () => { location.hash = 'connect'; setOpen(false) } })
    list.push({ id: 'act-studio', label: 'Open Studio', hint: 'Manage the dojo & agents', group: 'Actions', keywords: 'studio manage settings', run: () => { useWork.getState().openStudio('studio'); setOpen(false) } })
    return list
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dojo])

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (!s) return cmds
    return cmds.filter((c) => c.label.toLowerCase().includes(s) || c.keywords.includes(s))
  }, [q, cmds])

  useEffect(() => { if (active >= filtered.length) setActive(0) }, [filtered.length, active])

  if (!open) return null

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive((i) => Math.min(i + 1, filtered.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((i) => Math.max(i - 1, 0)) }
    else if (e.key === 'Enter') { e.preventDefault(); filtered[active]?.run() }
  }

  // group headers in order
  const groups: Cmd['group'][] = ['Agents', 'Pages', 'Actions']
  let idx = -1

  return (
    <div className="cmdk-overlay" onMouseDown={() => setOpen(false)}>
      <div className="cmdk" onMouseDown={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          className="cmdk-input"
          value={q}
          placeholder="Search agents, pages and actions…"
          onChange={(e) => { setQ(e.target.value); setActive(0) }}
          onKeyDown={onKeyDown}
          aria-label="Command palette"
        />
        <div className="cmdk-list">
          {filtered.length === 0 && <p className="cmdk-empty">No matches for “{q}”.</p>}
          {groups.map((g) => {
            const items = filtered.filter((c) => c.group === g)
            if (!items.length) return null
            return (
              <div key={g} className="cmdk-group">
                <div className="cmdk-grouphead">{g}</div>
                {items.map((c) => {
                  idx += 1; const i = idx
                  return (
                    <button
                      key={c.id}
                      className={`cmdk-item${i === active ? ' on' : ''}`}
                      onMouseEnter={() => setActive(i)}
                      onClick={() => c.run()}
                    >
                      <span className="cmdk-label">{c.label}</span>
                      <span className="cmdk-hint">{c.hint}</span>
                    </button>
                  )
                })}
              </div>
            )
          })}
        </div>
        <div className="cmdk-foot"><kbd>↑</kbd><kbd>↓</kbd> navigate · <kbd>Enter</kbd> open · <kbd>Esc</kbd> close</div>
      </div>
    </div>
  )
}
