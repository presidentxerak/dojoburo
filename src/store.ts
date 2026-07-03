// ---------------------------------------------------------------------------
// DojoBuro global state — network, wallets, behavior tracker, the hero, the
// reward/event game layer, and the skill orchestrator that drives real XRPL
// transactions + agent animations.
// ---------------------------------------------------------------------------
import { create } from 'zustand'
import { Wallet } from 'xrpl'
import { AGENTS, AGENT_BY_ID, type AgentSkill } from './data/agents'
import { getBanter } from './data/jokes'
import { pickEvent, tierForLevel, xpForLevel } from './data/events'
import { NETWORKS, loadNetworkId, saveNetworkId, type NetworkId } from './xrpl/network'
import { loadSceneId, saveSceneId, type SceneId } from './data/scenes'
import {
  createWallet,
  fundFromFaucet,
  getBalance,
  getStoredWallet,
  loadWallets,
  toWallet,
  forgetWallet,
  type WalletState,
} from './xrpl/wallet'
import { sendPayment, trackAction, fetchHistory, type X402Memo } from './xrpl/payments'
import { audio } from './audio'
import * as xaman from './xrpl/xaman'

export type Mood = 'idle' | 'work' | 'happy' | 'think' | 'talk' | 'love' | 'error'
export type Theme = 'light' | 'dark'

export interface Activity {
  id: string
  ts: number
  agentId: string
  skill: string
  level: 'info' | 'xrpl' | 'success' | 'error'
  message: string
  txHash?: string
}

export interface Toast {
  id: string
  badge: string
  color: string
  title: string
  text: string
  kind: 'event' | 'reward' | 'level'
}

export interface AgentStats {
  xp: number
  level: number
  coins: number
  tasksDone: number
}

interface RuntimeAgent {
  mood: Mood
  busy: boolean
  lastSkill: string | null
  moodUntil: number
}

export interface Banter {
  agentId: string
  who: 'hero' | 'agent'
  text: string
}

interface DojoState {
  net: NetworkId
  theme: Theme
  wallets: Record<string, WalletState>
  runtime: Record<string, RuntimeAgent>
  stats: Record<string, AgentStats>
  activity: Activity[]
  toasts: Toast[]
  selectedAgent: string | null
  balancesLoading: boolean
  heroTargetId: string
  banter: Banter | null
  muted: boolean
  musicOn: boolean
  sceneId: SceneId
  xaman: { account: string | null; busy: boolean; signLink: string | null; signQr: string | null; configured: boolean }

  setNetwork: (net: NetworkId) => void
  setTheme: (t: Theme) => void
  setScene: (id: SceneId) => void
  toggleMute: () => void
  toggleMusic: () => void
  xamanConnect: () => Promise<void>
  xamanDisconnect: () => Promise<void>
  xamanFundTreasury: (amountXrp: number) => Promise<void>
  setXamanKey: (key: string) => void

  selectAgent: (id: string | null) => void
  setMood: (id: string, mood: Mood, ms?: number) => void

  ensureWallet: (ownerId: string) => WalletState
  fund: (ownerId: string) => Promise<void>
  refreshBalances: () => Promise<void>
  forget: (ownerId: string) => void

  runSkill: (agentId: string, skill: AgentSkill) => Promise<void>
  transfer: (fromId: string, toId: string, amountXrp: number, note?: string) => Promise<void>
  auditWallet: (ownerId: string) => Promise<void>

  grantXp: (agentId: string, xp: number, coins: number) => void
  fireEvent: () => void
  pushToast: (t: Omit<Toast, 'id'>) => void
  dismissToast: (id: string) => void

  log: (a: Omit<Activity, 'id' | 'ts'>) => void
}

const now = () => {
  try {
    return Date.now()
  } catch {
    return 0
  }
}
let seq = 0
const uid = () => `${now()}-${seq++}`
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

function seedRuntime(): Record<string, RuntimeAgent> {
  const r: Record<string, RuntimeAgent> = {}
  for (const a of AGENTS) r[a.id] = { mood: 'idle', busy: false, lastSkill: null, moodUntil: 0 }
  return r
}

function loadStats(): Record<string, AgentStats> {
  let saved: Record<string, Partial<AgentStats>> = {}
  try {
    const raw = localStorage.getItem('dojoburo.stats')
    if (raw) saved = JSON.parse(raw)
  } catch {
    /* ignore */
  }
  const out: Record<string, AgentStats> = {}
  for (const a of AGENTS) {
    const s = saved[a.id] ?? {}
    out[a.id] = { xp: s.xp ?? 0, level: s.level ?? 1, coins: s.coins ?? 0, tasksDone: s.tasksDone ?? 0 }
  }
  return out
}
function saveStats(stats: Record<string, AgentStats>) {
  try {
    localStorage.setItem('dojoburo.stats', JSON.stringify(stats))
  } catch {
    /* ignore */
  }
}

function loadTheme(): Theme {
  return localStorage.getItem('dojoburo.theme') === 'dark' ? 'dark' : 'light'
}

function loadWalletStates(net: NetworkId): Record<string, WalletState> {
  const stored = loadWallets(net)
  const out: Record<string, WalletState> = {}
  for (const [id, w] of Object.entries(stored)) out[id] = { ...w, balanceXrp: null, funded: false }
  return out
}

async function sha256Hex(input: string): Promise<string> {
  try {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(input))
    return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('')
  } catch {
    return input.slice(0, 32)
  }
}

export const useDojo = create<DojoState>((set, get) => ({
  net: loadNetworkId(),
  theme: loadTheme(),
  wallets: loadWalletStates(loadNetworkId()),
  runtime: seedRuntime(),
  stats: loadStats(),
  activity: [],
  toasts: [],
  selectedAgent: null,
  balancesLoading: false,
  heroTargetId: 'home',
  banter: null,
  muted: localStorage.getItem('dojoburo.muted') === '1',
  musicOn: false,
  sceneId: loadSceneId(),
  xaman: { account: null, busy: false, signLink: null, signQr: null, configured: xaman.isConfigured() },

  setScene: (id) => {
    saveSceneId(id)
    audio.sfx('click')
    set({ sceneId: id })
  },

  log: (a) => set((s) => ({ activity: [{ ...a, id: uid(), ts: now() }, ...s.activity].slice(0, 200) })),

  pushToast: (t) => {
    const toast = { ...t, id: uid() }
    set((s) => ({ toasts: [...s.toasts, toast].slice(-4) }))
    setTimeout(() => get().dismissToast(toast.id), 4200)
  },
  dismissToast: (id) => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),

  setTheme: (t) => {
    localStorage.setItem('dojoburo.theme', t)
    document.documentElement.dataset.theme = t
    set({ theme: t })
  },

  toggleMute: () => {
    const muted = !get().muted
    localStorage.setItem('dojoburo.muted', muted ? '1' : '0')
    audio.setMuted(muted)
    set({ muted })
  },
  toggleMusic: () => {
    const on = !get().musicOn
    if (on) audio.startMusic()
    else audio.stopMusic()
    set({ musicOn: on })
  },

  setXamanKey: (key) => {
    xaman.setApiKey(key)
    set((s) => ({ xaman: { ...s.xaman, configured: xaman.isConfigured() } }))
  },

  xamanConnect: async () => {
    set((s) => ({ xaman: { ...s.xaman, busy: true } }))
    try {
      const session = await xaman.connect()
      set((s) => ({ xaman: { ...s.xaman, account: session.account, busy: false } }))
      audio.sfx('success')
      get().log({ agentId: 'lex', skill: 'xaman', level: 'success', message: `Xaman connected: ${session.account.slice(0, 12)}… (Mainnet).` })
    } catch (e) {
      set((s) => ({ xaman: { ...s.xaman, busy: false } }))
      audio.sfx('error')
      get().log({ agentId: 'lex', skill: 'xaman', level: 'error', message: `Xaman: ${errMsg(e)}` })
    }
  },

  xamanDisconnect: async () => {
    await xaman.disconnect()
    set((s) => ({ xaman: { ...s.xaman, account: null, signLink: null, signQr: null } }))
  },

  xamanFundTreasury: async (amountXrp) => {
    const s = get()
    const from = s.xaman.account
    if (!from) {
      audio.sfx('error')
      s.log({ agentId: 'fin', skill: 'xaman', level: 'error', message: 'Connect Xaman before funding the treasury.' })
      return
    }
    const treasury = s.ensureWallet('treasury')
    set((st) => ({ xaman: { ...st.xaman, busy: true, signLink: null, signQr: null } }))
    audio.sfx('start')
    try {
      const memo = { protocol: 'x402', skill: 'treasury.fund', from: 'user', to: 'treasury', note: 'Xaman top-up' }
      const res = await xaman.signPayment(from, treasury.address, amountXrp, memo, (link, qr) => {
        set((st) => ({ xaman: { ...st.xaman, signLink: link, signQr: qr } }))
      })
      set((st) => ({ xaman: { ...st.xaman, busy: false, signLink: null, signQr: null } }))
      audio.sfx('coin')
      s.log({ agentId: 'fin', skill: 'xaman', level: 'xrpl', message: `Treasury funded via Xaman: ${amountXrp} XRP (signed).`, txHash: res.txid })
      await s.refreshBalances()
    } catch (e) {
      set((st) => ({ xaman: { ...st.xaman, busy: false, signLink: null, signQr: null } }))
      audio.sfx('error')
      s.log({ agentId: 'fin', skill: 'xaman', level: 'error', message: `Xaman funding failed: ${errMsg(e)}` })
    }
  },

  setNetwork: (net) => {
    saveNetworkId(net)
    set({ net, wallets: loadWalletStates(net) })
    get().log({
      agentId: 'ava',
      skill: 'system',
      level: 'info',
      message: `Network switched to ${NETWORKS[net].label}${NETWORKS[net].live ? ' — real value' : ''}.`,
    })
    void get().refreshBalances()
  },

  selectAgent: (id) => set({ selectedAgent: id }),

  setMood: (id, mood, ms = 2200) =>
    set((s) => ({ runtime: { ...s.runtime, [id]: { ...s.runtime[id], mood, moodUntil: now() + ms } } })),

  ensureWallet: (ownerId) => {
    const { net, wallets } = get()
    if (wallets[ownerId]) return wallets[ownerId]
    const existing = getStoredWallet(net, ownerId)
    const stored = existing ?? createWallet(net, ownerId)
    const ws: WalletState = { ...stored, balanceXrp: null, funded: false }
    set((s) => ({ wallets: { ...s.wallets, [ownerId]: ws } }))
    return ws
  },

  fund: async (ownerId) => {
    const { net } = get()
    const cfg = NETWORKS[net]
    const ws = get().ensureWallet(ownerId)
    const who = ownerId === 'treasury' ? 'fin' : ownerId
    if (!cfg.faucet) {
      get().log({ agentId: who, skill: 'wallet', level: 'error', message: `No faucet on ${cfg.label}. Fund ${ws.address} yourself.` })
      return
    }
    try {
      const bal = await fundFromFaucet(net, ws)
      set((s) => ({ wallets: { ...s.wallets, [ownerId]: { ...s.wallets[ownerId], balanceXrp: bal, funded: true } } }))
      get().log({ agentId: who, skill: 'wallet', level: 'success', message: `Faucet: ${ws.address.slice(0, 10)}… funded → ${bal.toFixed(2)} XRP.` })
    } catch (e) {
      get().log({ agentId: who, skill: 'wallet', level: 'error', message: `Faucet failed: ${errMsg(e)}` })
    }
  },

  refreshBalances: async () => {
    const { net, wallets } = get()
    const ids = Object.keys(wallets)
    if (ids.length === 0) return
    set({ balancesLoading: true })
    await Promise.all(
      ids.map(async (id) => {
        try {
          const bal = await getBalance(net, wallets[id].address)
          set((s) => ({ wallets: { ...s.wallets, [id]: { ...s.wallets[id], balanceXrp: bal, funded: bal !== null } } }))
        } catch {
          /* leave as-is */
        }
      }),
    )
    set({ balancesLoading: false })
  },

  forget: (ownerId) => {
    forgetWallet(get().net, ownerId)
    set((s) => {
      const w = { ...s.wallets }
      delete w[ownerId]
      return { wallets: w }
    })
  },

  transfer: async (fromId, toId, amountXrp, note) => {
    const { net } = get()
    const from = get().ensureWallet(fromId)
    const to = get().ensureWallet(toId)
    const who = fromId === 'treasury' ? 'fin' : fromId
    get().setMood(who, 'work', 4000)
    try {
      const memo: X402Memo = { protocol: 'x402', skill: 'transfer', invoice: `INV-${now().toString(36)}`, from: fromId, to: toId, note }
      const res = await sendPayment(net, toWallet(from), to.address, amountXrp, memo)
      audio.sfx('coin')
      get().log({ agentId: who, skill: 'x402.pay', level: 'xrpl', message: `Paid ${amountXrp} XRP → ${labelOf(toId)} (${res.engineResult})`, txHash: res.hash })
      get().setMood(who, 'love', 1800)
      await get().refreshBalances()
    } catch (e) {
      get().setMood(who, 'error', 2000)
      audio.sfx('error')
      get().log({ agentId: who, skill: 'x402.pay', level: 'error', message: `Payment failed: ${errMsg(e)}` })
    }
  },

  auditWallet: async (ownerId) => {
    const { net } = get()
    const ws = get().wallets[ownerId] ?? get().ensureWallet(ownerId)
    try {
      const history = await fetchHistory(net, ws.address, 25)
      const income = history.filter((h) => h.direction === 'in').reduce((a, h) => a + (h.amountXrp ?? 0), 0)
      const outgo = history.filter((h) => h.direction === 'out').reduce((a, h) => a + (h.amountXrp ?? 0), 0)
      get().log({ agentId: 'ada', skill: 'audit', level: 'xrpl', message: `Audit ${labelOf(ownerId)}: ${history.length} tx, +${income.toFixed(2)} / −${outgo.toFixed(2)} XRP.` })
    } catch (e) {
      get().log({ agentId: 'ada', skill: 'audit', level: 'error', message: `Audit failed: ${errMsg(e)}` })
    }
  },

  grantXp: (agentId, xp, coins) => {
    const s = get()
    const cur = s.stats[agentId] ?? { xp: 0, level: 1, coins: 0, tasksDone: 0 }
    let newXp = cur.xp + xp
    let level = cur.level
    let leveled = false
    while (newXp >= xpForLevel(level)) {
      newXp -= xpForLevel(level)
      level += 1
      leveled = true
    }
    const next = { ...cur, xp: newXp, level, coins: cur.coins + coins }
    const stats = { ...s.stats, [agentId]: next }
    set({ stats })
    saveStats(stats)
    if (leveled) {
      s.setMood(agentId, 'love', 2600)
      audio.sfx('level')
      s.pushToast({ kind: 'level', badge: 'LVL', color: '#7c5cdf', title: `${AGENT_BY_ID[agentId]?.name} reached level ${level}`, text: `New tier unlocked: ${tierForLevel(level)}.` })
    } else if (coins > 0) {
      audio.sfx('coin')
    }
  },

  fireEvent: () => {
    const s = get()
    const ev = pickEvent()
    const targets = ev.target === 'all' ? AGENTS.map((a) => a.id) : [AGENTS[Math.floor(Math.random() * AGENTS.length)].id]
    const whoName = ev.target === 'all' ? 'The team' : AGENT_BY_ID[targets[0]]?.name ?? ''
    for (const id of targets) {
      s.setMood(id, ev.mood, 2400)
      s.grantXp(id, ev.xp, ev.coins)
    }
    audio.sfx('event')
    s.pushToast({ kind: 'event', badge: ev.tag, color: ev.color, title: ev.title, text: ev.message(whoName) })
    s.log({ agentId: targets[0], skill: 'event', level: ev.good ? 'success' : 'info', message: `${ev.title}: ${ev.message(whoName)} (+${ev.xp} XP, +${ev.coins} coins)` })
  },

  runSkill: async (agentId, skill) => {
    const rt = get().runtime[agentId]
    if (rt?.busy) return
    const agent = AGENT_BY_ID[agentId]

    set((s) => ({ runtime: { ...s.runtime, [agentId]: { ...s.runtime[agentId], busy: true, lastSkill: skill.id } } }))
    get().setMood(agentId, skill.kind === 'analysis' ? 'think' : 'work', skill.duration + 400)

    audio.sfx('start')
    audio.sfx('whoosh')
    set({ heroTargetId: agentId })
    startBanter(get, set, agentId, skill.duration)

    get().log({ agentId, skill: skill.id, level: 'info', message: `${agent.name} runs "${skill.name}"…` })

    try {
      if (skill.price > 0) await settlePricedSkill(get, agentId, skill)
      await executeSkill(get, agentId, skill)
      get().setMood(agentId, skill.id.endsWith('morale') ? 'love' : 'happy', 1800)
    } catch (e) {
      get().setMood(agentId, 'error', 2000)
      get().log({ agentId, skill: skill.id, level: 'error', message: errMsg(e) })
    } finally {
      await sleep(Math.min(skill.duration, 4200))
      set((s) => ({ runtime: { ...s.runtime, [agentId]: { ...s.runtime[agentId], busy: false } } }))
      const reward = skill.kind === 'xrpl' ? 18 : skill.kind === 'analysis' ? 14 : 12
      const cur = get().stats[agentId]
      set((sst) => ({ stats: { ...sst.stats, [agentId]: { ...cur, tasksDone: (cur?.tasksDone ?? 0) + 1 } } }))
      get().grantXp(agentId, reward, Math.round(reward / 3))
      set({ heroTargetId: 'home', banter: null })
    }
  },
}))

// --- helpers ---------------------------------------------------------------

type Get = typeof useDojo.getState
type Set = (partial: Partial<DojoState> | ((s: DojoState) => Partial<DojoState>)) => void

function startBanter(get: Get, set: Set, agentId: string, durationMs: number) {
  const lines = getBanter(agentId)
  let i = 0
  const step = () => {
    if (get().heroTargetId !== agentId) return
    if (i >= lines.length) return
    const l = lines[i++]
    set({ banter: { agentId, who: l.who, text: l.text } })
    setTimeout(step, 1600)
  }
  setTimeout(step, 650)
  setTimeout(() => {
    if (get().heroTargetId === agentId) set({ banter: null })
  }, Math.max(durationMs, 2000))
}

async function settlePricedSkill(get: Get, agentId: string, skill: AgentSkill) {
  const s = get()
  const treasury = s.ensureWallet('treasury')
  const agentWallet = s.ensureWallet(agentId)
  const memo: X402Memo = { protocol: 'x402', skill: skill.id, invoice: `SKL-${now().toString(36)}`, from: 'treasury', to: agentId, note: skill.name }
  try {
    const res = await sendPayment(s.net, toWallet(treasury), agentWallet.address, skill.price, memo)
    s.log({ agentId, skill: skill.id, level: 'xrpl', message: `x402 settled: ${skill.price} XRP paid to ${labelOf(agentId)} for "${skill.name}" (${res.engineResult}).`, txHash: res.hash })
    await s.refreshBalances()
  } catch (e) {
    s.log({ agentId, skill: skill.id, level: 'error', message: `x402 not settled (skill still ran): ${errMsg(e)}. Fund the treasury.` })
  }
}

async function executeSkill(get: Get, agentId: string, skill: AgentSkill) {
  const s = get()
  const [, verb] = skill.id.split('.')

  if (verb === 'wallet') {
    const ws = s.ensureWallet(agentId)
    if (s.net !== 'mainnet' && ws.balanceXrp === null) await s.fund(agentId)
    else {
      const bal = await getBalance(s.net, ws.address)
      patchBalance(agentId, bal)
      s.log({ agentId, skill: skill.id, level: 'xrpl', message: `Wallet ${ws.address} — ${bal === null ? 'unfunded' : bal.toFixed(2) + ' XRP'}.` })
    }
    return
  }
  if (verb === 'pay') {
    await s.transfer(agentId, 'treasury', 0.1, `Contribution from ${labelOf(agentId)}`)
    return
  }
  if (verb === 'track') {
    const ws = s.ensureWallet(agentId)
    const hash = await sha256Hex(`${agentId}:${skill.id}:${now()}`)
    try {
      const res = await trackAction(s.net, toWallet(ws), { agent: agentId, skill: skill.id, hash, ts: now() })
      s.log({ agentId, skill: skill.id, level: 'xrpl', message: `Behavior anchored on-ledger (memo ${hash.slice(0, 10)}…, ${res.engineResult}).`, txHash: res.hash })
    } catch (e) {
      s.log({ agentId, skill: skill.id, level: 'error', message: `Track failed: ${errMsg(e)}` })
    }
    return
  }

  switch (skill.id) {
    case 'fin.treasury': {
      s.ensureWallet('treasury')
      if (s.net !== 'mainnet') await s.fund('treasury')
      s.log({ agentId: 'fin', skill: skill.id, level: 'xrpl', message: 'Treasury opened and consolidated.' })
      return
    }
    case 'fin.payroll': {
      const receivers = AGENTS.map((a) => a.id)
      s.log({ agentId: 'fin', skill: skill.id, level: 'info', message: `Paying ${receivers.length} agents…` })
      for (const rid of receivers) await s.transfer('treasury', rid, 0.2, 'Payroll')
      return
    }
    case 'fin.audit':
      await s.auditWallet('treasury')
      return
    case 'ada.ledger':
      await s.auditWallet('treasury')
      return
    case 'ava.fund':
      await s.transfer('treasury', 'rex', 0.5, 'Engineering budget')
      return
    case 'sol.invoice': {
      if (s.net === 'mainnet') {
        s.log({ agentId: 'sol', skill: skill.id, level: 'info', message: 'x402 invoice issued — awaiting client settlement.' })
        return
      }
      const sol = s.ensureWallet('sol')
      try {
        const client = Wallet.generate()
        await fundFromFaucet(s.net, { ownerId: 'client', address: client.classicAddress, seed: client.seed!, createdAt: now() })
        const memo: X402Memo = { protocol: 'x402', skill: 'sol.invoice', invoice: `CLI-${now().toString(36)}`, from: 'client', to: 'sol', note: 'Contract settlement' }
        const res = await sendPayment(s.net, client, sol.address, 1, memo)
        audio.sfx('coin')
        s.log({ agentId: 'sol', skill: skill.id, level: 'success', message: `Client settled 1 XRP (x402) → Sol (${res.engineResult}).`, txHash: res.hash })
        await s.refreshBalances()
      } catch (e) {
        s.log({ agentId: 'sol', skill: skill.id, level: 'error', message: `Collection failed: ${errMsg(e)}` })
      }
      return
    }
  }

  await sleep(Math.min(skill.duration, 2600))
  s.log({ agentId, skill: skill.id, level: 'success', message: skillOutput(agentId, skill) })

  if (skill.id === 'hana.morale') for (const a of AGENTS) get().setMood(a.id, 'love', 2600)
  if (skill.id === 'ava.standup') for (const a of AGENTS) get().setMood(a.id, 'talk', 2400)
}

function patchBalance(agentId: string, bal: number | null) {
  useDojo.setState((st) => ({
    wallets: st.wallets[agentId]
      ? { ...st.wallets, [agentId]: { ...st.wallets[agentId], balanceXrp: bal, funded: bal !== null } }
      : st.wallets,
  }))
}

function skillOutput(agentId: string, skill: AgentSkill): string {
  const a = AGENT_BY_ID[agentId]
  const lines: Record<string, string> = {
    'ava.okr': 'Q3 OKRs set: +30% activation, MRR x2, NPS > 50.',
    'rex.ship': 'Feature shipped — build #' + (Math.abs(hashStr(skill.id + now())) % 9000),
    'rex.review': 'Review done: 2 bugs fixed, 3 simplifications proposed.',
    'otto.deploy': 'Prod deploy OK — health-checks green.',
    'otto.scale': 'Autoscaling: +2 instances, p95 latency stable.',
    'mia.campaign': '"Build in public" campaign planned across 3 channels.',
    'mia.brand': 'Brand audit: 82% consistency, palette tightened.',
    'sol.close': 'Deal signed — estimated ACV up.',
    'pia.spec': 'Spec written with testable acceptance criteria.',
    'pia.prioritize': 'Backlog re-prioritized: 5 items to the top of the sprint.',
    'dex.mockup': 'Mockup produced: main screen + 3 states.',
    'dex.system': 'Design system: tokens + 12 documented components.',
    'ada.report': 'Weekly report: activation up, churn down, MRR stable.',
    'hana.hire': 'New agent sourced and onboarded.',
    'hana.morale': 'Team morale maxed out — everyone is smiling.',
    'sam.ticket': 'Ticket resolved, customer happy.',
    'sam.csat': 'CSAT at 94% — 2 pain points sent to product.',
    'lex.contract': 'Contract drafted, key clauses validated.',
    'lex.compliance': 'Compliance OK — action authorized.',
  }
  return lines[skill.id] ?? `${a.name} finished "${skill.name}".`
}

function labelOf(ownerId: string): string {
  if (ownerId === 'treasury') return 'Treasury'
  return AGENT_BY_ID[ownerId]?.name ?? ownerId
}
function errMsg(e: unknown): string {
  return e instanceof Error ? e.message : String(e)
}
function hashStr(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i)
  return h
}
