// ---------------------------------------------------------------------------
// Random office events. The engine fires one every ~18-30s. Each grants XP and
// coins (in-game rewards) to a target agent (or everyone) and nudges moods.
// ---------------------------------------------------------------------------
import type { Mood } from '../store'

export interface GameEvent {
  id: string
  emoji: string
  title: string
  /** message builder; `who` is the target agent name (or "l'équipe"). */
  message: (who: string) => string
  xp: number
  coins: number
  weight: number
  target: 'random' | 'all'
  mood: Mood
  good: boolean
}

export const EVENTS: GameEvent[] = [
  {
    id: 'vip',
    emoji: '🌟',
    title: 'Client VIP',
    message: (w) => `${w} décroche un client VIP ! +réputation.`,
    xp: 40,
    coins: 15,
    weight: 8,
    target: 'random',
    mood: 'happy',
    good: true,
  },
  {
    id: 'ph',
    emoji: '🚀',
    title: 'Product Hunt',
    message: () => `Lancement Product Hunt : #1 du jour ! Toute l'équipe exulte.`,
    xp: 25,
    coins: 10,
    weight: 5,
    target: 'all',
    mood: 'love',
    good: true,
  },
  {
    id: 'raise',
    emoji: '💸',
    title: 'Levée de fonds',
    message: () => `Seed round bouclé ! La trésorerie respire.`,
    xp: 30,
    coins: 20,
    weight: 4,
    target: 'all',
    mood: 'love',
    good: true,
  },
  {
    id: 'bug',
    emoji: '🐛',
    title: 'Bug en prod',
    message: (w) => `${w} éteint un incendie en prod. Sang-froid légendaire.`,
    xp: 35,
    coins: 8,
    weight: 7,
    target: 'random',
    mood: 'work',
    good: false,
  },
  {
    id: 'coffee',
    emoji: '☕',
    title: 'Pause café',
    message: () => `Pause café collective. Recharge des batteries.`,
    xp: 10,
    coins: 3,
    weight: 9,
    target: 'all',
    mood: 'happy',
    good: true,
  },
  {
    id: 'kudos',
    emoji: '🏅',
    title: 'Kudos',
    message: (w) => `${w} reçoit un kudos de toute l'équipe. Bravo !`,
    xp: 20,
    coins: 6,
    weight: 8,
    target: 'random',
    mood: 'love',
    good: true,
  },
  {
    id: 'demo',
    emoji: '🎤',
    title: 'Démo réussie',
    message: (w) => `${w} bluffe le board en démo. Standing ovation.`,
    xp: 28,
    coins: 9,
    weight: 6,
    target: 'random',
    mood: 'talk',
    good: true,
  },
  {
    id: 'churn',
    emoji: '📉',
    title: 'Churn',
    message: (w) => `Un client part… ${w} lance une action de rétention.`,
    xp: 22,
    coins: 5,
    weight: 5,
    target: 'random',
    mood: 'think',
    good: false,
  },
  {
    id: 'ship',
    emoji: '📦',
    title: 'Feature shippée',
    message: (w) => `${w} livre une feature en avance. La roadmap sourit.`,
    xp: 26,
    coins: 8,
    weight: 7,
    target: 'random',
    mood: 'happy',
    good: true,
  },
  {
    id: 'viral',
    emoji: '🔥',
    title: 'Post viral',
    message: (w) => `${w} fait un carton viral. +10k impressions.`,
    xp: 24,
    coins: 7,
    weight: 5,
    target: 'random',
    mood: 'love',
    good: true,
  },
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

// Medal thresholds by level.
export const MEDALS = ['🥉', '🥈', '🥇', '💎', '👑', '🛸']
export function medalForLevel(level: number): string {
  return MEDALS[Math.min(level - 1, MEDALS.length - 1)] ?? '🥉'
}

export function xpForLevel(level: number): number {
  return 80 + (level - 1) * 60 // xp needed to reach next level
}
