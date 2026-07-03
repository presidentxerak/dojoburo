// ---------------------------------------------------------------------------
// Random office events. The engine fires one every ~18-30s. Each grants XP and
// coins (in-game rewards) to a target agent (or everyone) and nudges moods.
// ---------------------------------------------------------------------------
import type { Mood } from '../store'

export interface GameEvent {
  id: string
  tag: string // short badge label (no emoji)
  color: string // badge colour
  title: string
  /** message builder; `who` is the target agent name (or "The team"). */
  message: (who: string) => string
  xp: number
  coins: number
  weight: number
  target: 'random' | 'all'
  mood: Mood
  good: boolean
}

export const EVENTS: GameEvent[] = [
  { id: 'vip', tag: 'VIP', color: '#d98a1f', title: 'VIP client', message: (w) => `${w} lands a VIP client. Reputation up.`, xp: 40, coins: 15, weight: 8, target: 'random', mood: 'happy', good: true },
  { id: 'ph', tag: 'LAUNCH', color: '#2f80ed', title: 'Product Hunt', message: () => `Product Hunt launch: #1 of the day! The whole team cheers.`, xp: 25, coins: 10, weight: 5, target: 'all', mood: 'love', good: true },
  { id: 'raise', tag: 'RAISE', color: '#7c5cdf', title: 'Fundraise', message: () => `Seed round closed! The treasury breathes.`, xp: 30, coins: 20, weight: 4, target: 'all', mood: 'love', good: true },
  { id: 'bug', tag: 'INCIDENT', color: '#e2574c', title: 'Prod bug', message: (w) => `${w} puts out a prod fire. Legendary composure.`, xp: 35, coins: 8, weight: 7, target: 'random', mood: 'work', good: false },
  { id: 'coffee', tag: 'BREAK', color: '#8a6c47', title: 'Coffee break', message: () => `Team coffee break. Batteries recharged.`, xp: 10, coins: 3, weight: 9, target: 'all', mood: 'happy', good: true },
  { id: 'kudos', tag: 'KUDOS', color: '#22a35a', title: 'Kudos', message: (w) => `${w} gets kudos from the whole team. Nice!`, xp: 20, coins: 6, weight: 8, target: 'random', mood: 'love', good: true },
  { id: 'demo', tag: 'DEMO', color: '#12a396', title: 'Great demo', message: (w) => `${w} wows the board in a demo. Standing ovation.`, xp: 28, coins: 9, weight: 6, target: 'random', mood: 'talk', good: true },
  { id: 'churn', tag: 'CHURN', color: '#e0507a', title: 'Churn', message: (w) => `A client leaves… ${w} kicks off a retention play.`, xp: 22, coins: 5, weight: 5, target: 'random', mood: 'think', good: false },
  { id: 'ship', tag: 'SHIP', color: '#3f7fe0', title: 'Feature shipped', message: (w) => `${w} ships a feature ahead of schedule. The roadmap smiles.`, xp: 26, coins: 8, weight: 7, target: 'random', mood: 'happy', good: true },
  { id: 'viral', tag: 'VIRAL', color: '#f2843b', title: 'Viral post', message: (w) => `${w} goes viral. +10k impressions.`, xp: 24, coins: 7, weight: 5, target: 'random', mood: 'love', good: true },
  { id: 'partner', tag: 'DEAL', color: '#12a396', title: 'Partnership', message: (w) => `${w} signs a strategic partnership. Doors open.`, xp: 30, coins: 12, weight: 5, target: 'random', mood: 'talk', good: true },
  { id: 'press', tag: 'PRESS', color: '#7c5cdf', title: 'Press pickup', message: (w) => `${w} gets featured in the press. Credibility up.`, xp: 22, coins: 7, weight: 5, target: 'random', mood: 'happy', good: true },
  { id: 'outage', tag: 'OUTAGE', color: '#e2574c', title: 'Node outage', message: (w) => `An XRPL node blips — ${w} fails over gracefully.`, xp: 30, coins: 6, weight: 4, target: 'random', mood: 'work', good: false },
  { id: 'audit', tag: 'AUDIT', color: '#d98a1f', title: 'Security audit', message: (w) => `${w} passes a security audit. No findings.`, xp: 34, coins: 10, weight: 4, target: 'random', mood: 'think', good: true },
  { id: 'milestone', tag: 'GOAL', color: '#22a35a', title: 'Milestone hit', message: () => `Quarterly milestone reached! Confetti everywhere.`, xp: 28, coins: 14, weight: 3, target: 'all', mood: 'love', good: true },
  { id: 'pizza', tag: 'PARTY', color: '#f2843b', title: 'Pizza party', message: () => `Pizza party in the office. Morale +1.`, xp: 12, coins: 4, weight: 7, target: 'all', mood: 'happy', good: true },
  { id: 'hack', tag: 'DEFEND', color: '#e0507a', title: 'Attack blocked', message: (w) => `${w} blocks a phishing attempt. Vigilance pays off.`, xp: 32, coins: 9, weight: 4, target: 'random', mood: 'work', good: false },
  { id: 'award', tag: 'AWARD', color: '#d98a1f', title: 'Award won', message: (w) => `${w} wins "Startup of the week". Trophy incoming.`, xp: 30, coins: 11, weight: 3, target: 'random', mood: 'love', good: true },
  { id: 'idea', tag: 'IDEA', color: '#3f7fe0', title: 'Big idea', message: (w) => `${w} has a breakthrough idea at the water cooler.`, xp: 18, coins: 5, weight: 7, target: 'random', mood: 'think', good: true },
]

export function pickEvent(): GameEvent {
  const total = EVENTS.reduce((a, e) => a + e.weight, 0)
  let n = Math.random() * total
  for (const e of EVENTS) {
    n -= e.weight
    if (n <= 0) return e
  }
  return EVENTS[0]
}

/** Named tiers unlocked as an agent levels up (no emoji). */
export const TIERS = ['Rookie', 'Builder', 'Senior', 'Staff', 'Principal', 'Legend']
export function tierForLevel(level: number): string {
  return TIERS[Math.min(level - 1, TIERS.length - 1)] ?? 'Rookie'
}

export function xpForLevel(level: number): number {
  return 80 + (level - 1) * 60 // xp needed to reach next level
}
