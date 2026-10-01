// LE PERSONNAGE DE L'ÉLÈVE · choisi une fois, gardé dans ce navigateur, et
// envoyé avec sa présence dans les temples (voir api/community, action
// presence) quand il est connecté.
//
// Demandé : « le user étudiant peut choisir son personnage en pixel art
// généré ». Tant qu'il n'a pas choisi, un personnage tiré au sort lui est
// proposé ; il peut le garder, le modifier ou en tirer un autre.
import { useSyncExternalStore } from 'react'
import { randomChibi, sanitizeChibi, type ChibiSpec } from './chibi'

const KEY = 'dojoburo.avatar'
const SEED_KEY = 'dojoburo.avatar.seed'
const listeners = new Set<() => void>()

function seed(): number {
  try {
    const s = Number(localStorage.getItem(SEED_KEY))
    if (Number.isInteger(s) && s > 0) return s
    const n = Math.floor(Math.random() * 1e9) + 1
    localStorage.setItem(SEED_KEY, String(n))
    return n
  } catch {
    return 7
  }
}

function read(): { spec: ChibiSpec; chosen: boolean } {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return { spec: sanitizeChibi(JSON.parse(raw), seed()), chosen: true }
  } catch { /* stockage refusé */ }
  return { spec: randomChibi(seed(), 'human'), chosen: false }
}

let current = typeof window === 'undefined' ? { spec: randomChibi(7, 'human'), chosen: false } : read()

export function getAvatar() { return current }

export function saveAvatar(spec: ChibiSpec) {
  current = { spec, chosen: true }
  try { localStorage.setItem(KEY, JSON.stringify(spec)) } catch { /* stockage refusé */ }
  listeners.forEach((fn) => fn())
}

export function useAvatar() {
  return useSyncExternalStore(
    (fn) => { listeners.add(fn); return () => { listeners.delete(fn) } },
    getAvatar,
    getAvatar,
  )
}
