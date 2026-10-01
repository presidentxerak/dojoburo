// LE SON DES TEMPLES · une musique d'ambiance zen, générée, et des bruitages.
//
// Demandé : « Ajoute une musique générative d'ambiance japonaise zen et des
// sound fx ». Aucun fichier audio, aucune dépendance : tout est synthétisé en
// Web Audio, au moment de jouer.
//
// LA MUSIQUE · sur la gamme In (miyako-bushi : ré, mi bémol, sol, la, si
// bémol), la gamme des airs de koto. Quatre voix qui se répondent :
//   · un bourdon grave, très doux, qui respire (un shō lointain) ;
//   · le koto, des cordes pincées par l'algorithme de Karplus-Strong, calculées
//     une fois par note puis rejouées ;
//   · le shakuhachi, une flûte de bambou : un son soufflé qui glisse vers sa
//     note et dont le vibrato s'élargit ;
//   · une cloche de temple, de loin en loin, faite de partiels inharmoniques.
// Et beaucoup de silence entre les phrases : le « ma », qui fait le zen bien
// plus que les notes. Un léger vent sous le tout, une réverbération de salle.
// La musique ne se répète jamais à l'identique.
//
// LES RÈGLES DU NAVIGATEUR · aucun son avant un geste de l'utilisateur, donc
// rien ne se construit à l'import : le contexte naît au premier toucher ou à
// la première touche. Onglet caché, tout se suspend. Les réglages (Profil,
// Paramètres) coupent la musique et les bruitages séparément.
import { useEffect } from 'react'
import { getSettings, useSettings } from './settings'

export type Sfx = 'door' | 'doorClose' | 'step' | 'tap' | 'open' | 'locked' | 'send' | 'arrive' | 'chime'

/* --- la gamme ------------------------------------------------------------ */

const ROOT = 146.83 // ré 3
const IN_SCALE = [0, 1, 5, 7, 8]
/** la fréquence d'un degré de la gamme · 0 = ré 3, 5 = ré 4, etc. */
function degree(d: number): number {
  const o = Math.floor(d / IN_SCALE.length)
  const i = ((d % IN_SCALE.length) + IN_SCALE.length) % IN_SCALE.length
  return ROOT * 2 ** (o + IN_SCALE[i] / 12)
}

/* --- l'état ---------------------------------------------------------------- */

let ctx: AudioContext | null = null
let master: GainNode
let musicBus: GainNode
let sfxBus: GainNode
let reverb: ConvolverNode
let noiseBuf: AudioBuffer
const plucks = new Map<number, AudioBuffer>()

let wanted = 0
let playing = false
let timer: ReturnType<typeof setInterval> | null = null
let stopTimer: ReturnType<typeof setTimeout> | null = null
let nextPhrase = 0
let nextBell = 0
let drone: { stop: (t: number) => void } | null = null
let listening = false
const rnd = Math.random
const pick = <T,>(a: readonly T[]): T => a[Math.floor(rnd() * a.length)]

/* --- la construction, au premier geste ------------------------------------- */

function build(): boolean {
  if (ctx) return true
  const AC = typeof window !== 'undefined' ? (window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext) : undefined
  if (!AC) return false
  try { ctx = new AC() } catch { return false }
  const c = ctx
  const comp = c.createDynamicsCompressor()
  comp.threshold.value = -18; comp.ratio.value = 3
  master = c.createGain(); master.gain.value = 0.9
  master.connect(comp).connect(c.destination)
  // la salle · une réponse impulsionnelle de bruit qui décroît, en stéréo
  reverb = c.createConvolver()
  const len = Math.floor(c.sampleRate * 3.2)
  const ir = c.createBuffer(2, len, c.sampleRate)
  for (let ch = 0; ch < 2; ch++) {
    const d = ir.getChannelData(ch)
    for (let i = 0; i < len; i++) d[i] = (rnd() * 2 - 1) * (1 - i / len) ** 2.6
  }
  reverb.buffer = ir
  const wet = c.createGain(); wet.gain.value = 0.42
  reverb.connect(wet).connect(master)
  musicBus = c.createGain(); musicBus.gain.value = 0
  musicBus.connect(master); musicBus.connect(reverb)
  sfxBus = c.createGain(); sfxBus.gain.value = 0.55
  sfxBus.connect(master)
  const sfxWet = c.createGain(); sfxWet.gain.value = 0.25
  sfxBus.connect(sfxWet).connect(reverb)
  // un bruit blanc partagé, pour le souffle, le vent et les portes
  noiseBuf = c.createBuffer(1, c.sampleRate * 2, c.sampleRate)
  const n = noiseBuf.getChannelData(0)
  for (let i = 0; i < n.length; i++) n[i] = rnd() * 2 - 1
  document.addEventListener('visibilitychange', () => {
    if (!ctx) return
    if (document.visibilityState === 'hidden') void ctx.suspend()
    else void ctx.resume()
  })
  return true
}

function unlock() {
  if (!build() || !ctx) return
  if (ctx.state === 'suspended') void ctx.resume()
  sync()
}

function listen() {
  if (listening || typeof window === 'undefined') return
  listening = true
  const go = () => unlock()
  window.addEventListener('pointerdown', go, { capture: true })
  window.addEventListener('keydown', go, { capture: true })
}

/* --- les instruments --------------------------------------------------------- */

/** une corde de koto · Karplus-Strong, calculé une fois par note */
function pluckBuffer(freq: number): AudioBuffer {
  const key = Math.round(freq * 10)
  const hit = plucks.get(key)
  if (hit) return hit
  const c = ctx!
  const sr = c.sampleRate
  const n = Math.floor(sr * 3)
  const buf = c.createBuffer(1, n, sr)
  const d = buf.getChannelData(0)
  const period = Math.max(2, Math.round(sr / freq))
  const ring = new Float32Array(period)
  for (let i = 0; i < period; i++) ring[i] = (rnd() + rnd() - 1) * 0.9
  const damp = 0.9985 - Math.min(0.004, freq / 400000)
  let idx = 0
  for (let i = 0; i < n; i++) {
    const cur = ring[idx]
    const nxt = ring[(idx + 1) % period]
    ring[idx] = (cur * 0.55 + nxt * 0.45) * damp
    d[i] = cur
    idx = (idx + 1) % period
  }
  const fade = Math.floor(sr * 0.08)
  for (let i = 0; i < fade; i++) d[n - 1 - i] *= i / fade
  plucks.set(key, buf)
  return buf
}

function koto(freq: number, t: number, vel = 0.5, bus: AudioNode = musicBus) {
  const c = ctx!
  const src = c.createBufferSource()
  src.buffer = pluckBuffer(freq)
  const g = c.createGain(); g.gain.value = vel
  const tone = c.createBiquadFilter(); tone.type = 'lowpass'; tone.frequency.value = 3200
  const pan = c.createStereoPanner(); pan.pan.value = (rnd() - 0.5) * 0.6
  src.connect(tone).connect(g).connect(pan).connect(bus)
  src.start(t)
  src.stop(t + 3)
}

function shakuhachi(freq: number, t: number, dur: number) {
  const c = ctx!
  const osc = c.createOscillator(); osc.type = 'sine'
  const over = c.createOscillator(); over.type = 'triangle'
  // la glissade d'attaque (meri) puis la note
  osc.frequency.setValueAtTime(freq * 0.94, t)
  osc.frequency.exponentialRampToValueAtTime(freq, t + 0.28)
  over.frequency.setValueAtTime(freq * 2 * 0.94, t)
  over.frequency.exponentialRampToValueAtTime(freq * 2, t + 0.28)
  // le vibrato qui s'élargit
  const lfo = c.createOscillator(); lfo.frequency.value = 4.6
  const depth = c.createGain()
  depth.gain.setValueAtTime(0, t)
  depth.gain.linearRampToValueAtTime(freq * 0.006, t + dur)
  lfo.connect(depth); depth.connect(osc.frequency)
  const env = c.createGain()
  env.gain.setValueAtTime(0, t)
  env.gain.linearRampToValueAtTime(0.11, t + 0.45)
  env.gain.setValueAtTime(0.1, t + Math.max(0.5, dur - 0.7))
  env.gain.linearRampToValueAtTime(0, t + dur + 0.6)
  const overG = c.createGain(); overG.gain.value = 0.12
  // le souffle
  const breath = c.createBufferSource(); breath.buffer = noiseBuf; breath.loop = true
  const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = freq * 2; bp.Q.value = 1.2
  const bg = c.createGain(); bg.gain.value = 0.35
  const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2400
  osc.connect(lp); over.connect(overG).connect(lp)
  breath.connect(bp).connect(bg).connect(lp)
  lp.connect(env).connect(musicBus)
  const end = t + dur + 0.7
  for (const s of [osc, over, lfo, breath]) { s.start(t); s.stop(end) }
}

function bell(freq: number, t: number, vol = 0.18, bus: AudioNode = musicBus) {
  const c = ctx!
  const parts: [number, number, number][] = [[1, 1, 7], [2.0, 0.5, 5], [2.76, 0.38, 4], [4.07, 0.22, 2.6], [5.4, 0.13, 1.8]]
  for (const [ratio, amp, decay] of parts) {
    for (const det of [-0.35, 0.35]) {
      const o = c.createOscillator(); o.type = 'sine'
      o.frequency.value = freq * ratio + det
      const g = c.createGain()
      g.gain.setValueAtTime(0, t)
      g.gain.linearRampToValueAtTime(vol * amp * 0.5, t + 0.01)
      g.gain.exponentialRampToValueAtTime(0.0001, t + decay)
      o.connect(g).connect(bus)
      o.start(t); o.stop(t + decay + 0.05)
    }
  }
}

function startDrone(t: number) {
  const c = ctx!
  const out = c.createGain()
  out.gain.setValueAtTime(0, t)
  out.gain.linearRampToValueAtTime(1, t + 4)
  const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 520
  const breathe = c.createOscillator(); breathe.frequency.value = 0.06
  const bd = c.createGain(); bd.gain.value = 180
  breathe.connect(bd).connect(lp.frequency)
  const voices = [ROOT / 2, (ROOT / 2) * 1.4983, ROOT].map((f, i) => {
    const o = c.createOscillator(); o.type = i === 2 ? 'triangle' : 'sine'
    o.frequency.value = f
    const g = c.createGain(); g.gain.value = i === 2 ? 0.012 : 0.03
    o.connect(g).connect(lp)
    return o
  })
  // le vent · un bruit très bas, qui monte et descend
  const wind = c.createBufferSource(); wind.buffer = noiseBuf; wind.loop = true
  const wlp = c.createBiquadFilter(); wlp.type = 'lowpass'; wlp.frequency.value = 420
  const wg = c.createGain(); wg.gain.value = 0.012
  const gust = c.createOscillator(); gust.frequency.value = 0.045
  const gd = c.createGain(); gd.gain.value = 0.009
  gust.connect(gd).connect(wg.gain)
  wind.connect(wlp).connect(wg).connect(out)
  lp.connect(out).connect(musicBus)
  const all = [...voices, breathe, wind, gust]
  all.forEach((s) => s.start(t))
  return {
    stop(at: number) {
      out.gain.cancelScheduledValues(at)
      out.gain.setValueAtTime(out.gain.value, at)
      out.gain.linearRampToValueAtTime(0, at + 1.5)
      all.forEach((s) => s.stop(at + 1.6))
    },
  }
}

/* --- le compositeur ---------------------------------------------------------- */

const DURS = [0.5, 0.75, 1, 1, 1.5, 2]

/** une phrase · une marche sur la gamme, qui se pose sur le ré ou le la */
function phrase(t: number): number {
  const flute = rnd() < 0.3
  let d = flute ? pick([5, 6, 7, 8]) : pick([4, 5, 6, 7, 8, 9])
  const count = flute ? 2 + Math.floor(rnd() * 3) : 3 + Math.floor(rnd() * 5)
  const beat = 0.85 + rnd() * 0.3
  let at = t
  for (let i = 0; i < count; i++) {
    const last = i === count - 1
    if (last) d = pick([5, 8, 10]) // ré, la, ré aigu : la phrase se pose
    const dur = (flute ? pick([2, 2.5, 3]) : pick(DURS)) * beat
    if (flute) shakuhachi(degree(d), at, dur)
    else {
      koto(degree(d), at, 0.32 + rnd() * 0.25)
      // de temps en temps, l'octave ou la quinte en dessous, comme au koto
      if (rnd() < 0.18) koto(degree(d - 5), at + 0.02, 0.18)
      if (rnd() < 0.12) koto(degree(d + 1), at + dur * 0.5, 0.16)
    }
    at += dur
    d += pick([-2, -1, -1, 1, 1, 2, 0])
    d = Math.max(3, Math.min(12, d))
  }
  return at
}

function tick() {
  if (!ctx || !playing) return
  const now = ctx.currentTime
  if (now + 0.6 >= nextPhrase) {
    const end = phrase(Math.max(now + 0.1, nextPhrase))
    nextPhrase = end + 2.5 + rnd() * 5 // le « ma »
  }
  if (now + 0.6 >= nextBell) {
    bell(pick([ROOT, ROOT * 1.335, ROOT / 2]), Math.max(now + 0.1, nextBell), 0.14)
    nextBell = nextBell + 28 + rnd() * 30
  }
}

function start() {
  if (!ctx || playing) return
  playing = true
  const t = ctx.currentTime
  musicBus.gain.cancelScheduledValues(t)
  musicBus.gain.setValueAtTime(musicBus.gain.value, t)
  musicBus.gain.linearRampToValueAtTime(0.75, t + 2.5)
  drone = startDrone(t)
  nextPhrase = t + 1.8
  nextBell = t + 0.6
  timer = setInterval(tick, 250)
  tick()
}

function stop() {
  if (!ctx || !playing) return
  playing = false
  const t = ctx.currentTime
  musicBus.gain.cancelScheduledValues(t)
  musicBus.gain.setValueAtTime(musicBus.gain.value, t)
  musicBus.gain.linearRampToValueAtTime(0, t + 1.4)
  drone?.stop(t)
  drone = null
  if (timer) clearInterval(timer)
  timer = null
}

/** l'état voulu → l'état joué */
function sync() {
  if (!ctx) return
  if (wanted > 0 && getSettings().music) start()
  else stop()
}

/* --- les bruitages ------------------------------------------------------------ */

function noiseBurst(t: number, dur: number, type: BiquadFilterType, f0: number, f1: number, vol: number, q = 1) {
  const c = ctx!
  const src = c.createBufferSource(); src.buffer = noiseBuf
  const f = c.createBiquadFilter(); f.type = type; f.Q.value = q
  f.frequency.setValueAtTime(f0, t)
  f.frequency.exponentialRampToValueAtTime(f1, t + dur)
  const g = c.createGain()
  g.gain.setValueAtTime(0, t)
  g.gain.linearRampToValueAtTime(vol, t + dur * 0.15)
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
  src.connect(f).connect(g).connect(sfxBus)
  src.start(t, rnd() * 1.5); src.stop(t + dur + 0.05)
}

function wood(t: number, freq: number, vol: number) {
  const c = ctx!
  const o = c.createOscillator(); o.type = 'sine'
  o.frequency.setValueAtTime(freq * 1.6, t)
  o.frequency.exponentialRampToValueAtTime(freq, t + 0.03)
  const g = c.createGain()
  g.gain.setValueAtTime(vol, t)
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.12)
  o.connect(g).connect(sfxBus)
  o.start(t); o.stop(t + 0.15)
}

const SFX: Record<Sfx, (t: number) => void> = {
  // le shoji qui glisse dans son rail, puis le bois qui bute
  door: (t) => { noiseBurst(t, 0.5, 'bandpass', 700, 1900, 0.32, 2.2); wood(t + 0.48, 210, 0.3) },
  doorClose: (t) => { noiseBurst(t, 0.42, 'bandpass', 1800, 650, 0.28, 2.2); wood(t + 0.4, 180, 0.38) },
  step: (t) => { noiseBurst(t, 0.07, 'lowpass', 900, 300, 0.22); },
  tap: (t) => { wood(t, 780, 0.22) },
  // le maître · trois cordes de koto qui montent
  open: (t) => { [5, 7, 10].forEach((d, i) => koto(degree(d), t + i * 0.09, 0.4, sfxBus)) },
  locked: (t) => { wood(t, 120, 0.45); wood(t + 0.09, 95, 0.3) },
  send: (t) => { bell(ROOT * 4, t, 0.09, sfxBus) },
  // l'arrivée à un étage · un petit gong
  arrive: (t) => { bell(ROOT, t, 0.16, sfxBus); koto(degree(10), t + 0.05, 0.25, sfxBus) },
  chime: (t) => { [5, 7, 8, 10, 12].forEach((d, i) => koto(degree(d), t + i * 0.07, 0.35, sfxBus)); bell(ROOT * 2, t + 0.4, 0.1, sfxBus) },
}

/* --- l'interface ---------------------------------------------------------------- */

export const zen = {
  /** un écran du jeu veut l'ambiance · rendre la fonction rendue au démontage */
  want(): () => void {
    listen()
    wanted++
    if (stopTimer) { clearTimeout(stopTimer); stopTimer = null }
    sync()
    return () => {
      wanted = Math.max(0, wanted - 1)
      // un changement d'écran démonte puis remonte · on laisse au suivant le
      // temps d'arriver avant de couper
      if (stopTimer) clearTimeout(stopTimer)
      stopTimer = setTimeout(() => { stopTimer = null; sync() }, 500)
    }
  },
  /** à appeler quand le réglage « musique » change */
  sync,
  /** un bruitage, si les bruitages sont permis et le son déjà débloqué */
  sfx(name: Sfx, delay = 0) {
    if (!getSettings().sfx) return
    if (!ctx) unlock()
    if (!ctx || ctx.state !== 'running') return
    SFX[name](ctx.currentTime + 0.01 + delay)
  },
  isPlaying: () => playing,
}

/** L'AMBIANCE D'UN ÉCRAN DU JEU · la carte des temples, un temple, une leçon.
 *  La musique suit le réglage, et elle s'arrête quand on quitte le jeu. */
export function useZenAmbience() {
  const st = useSettings()
  useEffect(() => zen.want(), [])
  useEffect(() => { zen.sync() }, [st.music])
}
