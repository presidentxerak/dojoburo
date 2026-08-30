// What the reader has done, kept in this browser.
//
// A course needs to remember where you were, otherwise nobody finishes it. This
// is deliberately small: a set of finished lesson ids and the quiz answers, in
// localStorage. No account needed — the Academy is free and open, and reading it
// should never require signing in.
import { useSyncExternalStore } from 'react'
import { ALL_LESSONS, LESSON_COUNT } from '../data/academy'

const KEY = 'dojoburo.academy.v1'

interface State {
  /** "track/lesson" for every lesson marked done */
  done: string[]
  /** "track/lesson" -> the option index the reader picked */
  answers: Record<string, number>
}

const EMPTY: State = { done: [], answers: {} }

let state: State = read()
const listeners = new Set<() => void>()

function read(): State {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return EMPTY
    const p = JSON.parse(raw) as Partial<State>
    return { done: Array.isArray(p.done) ? p.done : [], answers: p.answers && typeof p.answers === 'object' ? p.answers : {} }
  } catch { return EMPTY }
}

function write(next: State) {
  state = next
  try { localStorage.setItem(KEY, JSON.stringify(next)) } catch { /* private mode · progress just does not persist */ }
  for (const l of listeners) l()
}

export const key = (track: string, lesson: string) => `${track}/${lesson}`

export function markDone(track: string, lesson: string) {
  const k = key(track, lesson)
  if (state.done.includes(k)) return
  write({ ...state, done: [...state.done, k] })
}

export function clearDone(track: string, lesson: string) {
  const k = key(track, lesson)
  if (!state.done.includes(k)) return
  write({ ...state, done: state.done.filter((x) => x !== k) })
}

export function recordAnswer(track: string, lesson: string, pick: number) {
  write({ ...state, answers: { ...state.answers, [key(track, lesson)]: pick } })
}

export function resetAll() { write(EMPTY) }

function subscribe(l: () => void) { listeners.add(l); return () => { listeners.delete(l) } }

/** Read the progress state · re-renders when it changes. */
export function useProgress() {
  const s = useSyncExternalStore(subscribe, () => state, () => EMPTY)
  const doneSet = new Set(s.done)
  return {
    isDone: (t: string, l: string) => doneSet.has(key(t, l)),
    answerFor: (t: string, l: string) => s.answers[key(t, l)],
    doneCount: s.done.length,
    total: LESSON_COUNT,
    percent: Math.round((s.done.length / LESSON_COUNT) * 100),
    doneInTrack: (t: string) => s.done.filter((x) => x.startsWith(`${t}/`)).length,
    /** the first lesson not yet finished · where "Continue" goes */
    nextUp: ALL_LESSONS.find((x) => !doneSet.has(key(x.track.slug, x.lesson.slug))) ?? ALL_LESSONS[0],
  }
}
