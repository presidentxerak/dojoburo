import { useEffect, useState } from 'react'

// Small animated ASCII-art expression badges for section headers. Pure ASCII so
// they read on any background and stay on-brand with the agents' faces.
const SETS: Record<string, string[]> = {
  job: ['[o_o]', '[o_~]', '[^_^]', '[o_o]'], // adapts / winks
  stack: ['<->', '<=>', '<+>', '<=>'], // connect
  cost: ['(o)', '($)', '(o)', '(*)'], // pennies
  pay: ['>--', '>==', '==>', '--<'], // flow
  build: ['{o}', '{*}', '{+}', '{*}'], // assemble
  cast: ['(o o)', '(^ ^)', '(- -)', '(o o)'], // team
  price: ['[$ ]', '[$$]', '[$$$]', '[$$]'], // plans
  watch: ['( o )', '( O )', '( o )', '( - )'], // monitor
  run: ['[> ]', '[>>]', '[>>>]', '[>>]'], // running
  prod: ['[ v]', '[vv]', '[OK]', '[vv]'], // ship
  zen: ['-_-', '~_~', '^_^', '-_-'], // calm
  bolt: ['/z/', '/Z/', '/z/', '/./'], // energy
}

/** An animated ASCII expression icon, cycling its frames. */
export function AsciiIcon({ kind, speed = 520, className }: { kind: string; speed?: number; className?: string }) {
  const frames = SETS[kind] ?? SETS.job
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % frames.length), speed)
    return () => clearInterval(id)
  }, [frames.length, speed])
  return <span className={`ascii-icon ${className ?? ''}`} aria-hidden>{frames[i]}</span>
}
