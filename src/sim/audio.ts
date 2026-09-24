// DOJOBURO · le son du jeu : effets et bande-son générative, tout en Web Audio.
//
// Aucun fichier audio, aucune dépendance. Chaque son est synthétisé à la volée :
// rien à télécharger, et la musique ne se répète jamais à l'identique, ce qui
// compte dans un jeu où l'on reste vingt minutes sur le même écran.
//
// Rien ne touche à window ni à AudioContext à l'import : le module est lu par
// Node (tests, rendu serveur), et un navigateur refuse tout son avant un geste
// de l'utilisateur. Tout se construit donc au premier unlock().

export type Sfx =
  | 'tap' | 'open' | 'close' | 'assign' | 'unassign' | 'launch' | 'coin' | 'success'
  | 'excellent' | 'fail' | 'client' | 'leave' | 'levelup' | 'dayStart' | 'dayEnd'
  | 'tick' | 'warning' | 'buy' | 'error'

/* --- réglages -------------------------------------------------------------- */

const STORE_KEY = 'dojoburo.sound'
// Volumes bas exprès : un jeu de gestion s'écoute longtemps, un son trop
// présent fatigue bien avant d'être remarqué.
const SFX_VOL = 0.35
const MUSIC_VOL = 0.22
const LOOKAHEAD = 0.14 // secondes planifiées d'avance, onglet visible
const LOOKAHEAD_HIDDEN = 1.2 // onglet caché : les minuteurs ne passent plus qu'une fois par seconde

type Timer = ReturnType<typeof setTimeout>

/* --- petits outils --------------------------------------------------------- */

const rnd = Math.random
const chance = (p: number) => rnd() < p
const pick = <T,>(a: readonly T[]): T => a[Math.floor(rnd() * a.length)]
const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x)
const mtof = (m: number) => 440 * Math.pow(2, (m - 69) / 12)
const hasWindow = () => typeof window !== 'undefined'
const tabHidden = () => typeof document !== 'undefined' && document.hidden

/* --- l'état du module ------------------------------------------------------ */

interface Core {
  ctx: AudioContext
  /** la coupure passe ici, pour que le mute soit instantané sur tout */
  master: GainNode
  sfxBus: GainNode
  /** envoi vers un petit écho, réservé aux cloches et aux tintements */
  echo: GainNode
  /** un seul bruit blanc, relu à des positions au hasard par chaque souffle */
  noise: AudioBuffer
}

let core: Core | null = null
let noAudio = false
let mutedPref: boolean | null = null
let resuming = false
let suspendTimer: Timer | null = null
let hooked = false
const listeners = new Set<() => void>()
const lastSfx: Partial<Record<Sfx, number>> = {}

/* --- préférence de son ------------------------------------------------------ */

function readMuted(): boolean {
  if (mutedPref !== null) return mutedPref
  mutedPref = false
  if (!hasWindow()) return mutedPref
  try {
    mutedPref = window.localStorage.getItem(STORE_KEY) === 'off'
  } catch {
    // stockage bloqué (navigation privée) : on garde le son, c'est le défaut
  }
  // Un autre onglet qui coupe le son le coupe ici aussi : deux dojos ouverts
  // qui jouent chacun leur musique, c'est une cacophonie.
  window.addEventListener('storage', (e) => {
    if (e.key !== STORE_KEY) return
    const m = e.newValue === 'off'
    if (m !== mutedPref) {
      mutedPref = m
      applyMute()
      notify()
    }
  })
  return mutedPref
}

function notify() {
  for (const fn of listeners) {
    try {
      fn()
    } catch {
      // un abonné qui plante ne doit pas priver les autres de la nouvelle
    }
  }
}

/* --- le contexte ------------------------------------------------------------ */

function ctor(): typeof AudioContext | null {
  if (!hasWindow()) return null
  const w = window as unknown as { AudioContext?: typeof AudioContext; webkitAudioContext?: typeof AudioContext }
  return w.AudioContext ?? w.webkitAudioContext ?? null
}

function gainNode(ctx: AudioContext, v: number, to?: AudioNode | AudioParam): GainNode {
  const g = ctx.createGain()
  g.gain.value = v
  if (to) g.connect(to as AudioNode)
  return g
}

function filter(ctx: AudioContext, type: BiquadFilterType, f: number, q = 0.7, to?: AudioNode): BiquadFilterNode {
  const b = ctx.createBiquadFilter()
  b.type = type
  b.frequency.value = f
  b.Q.value = q
  if (to) b.connect(to)
  return b
}

function makeNoise(ctx: AudioContext, secs: number): AudioBuffer {
  const len = Math.floor(ctx.sampleRate * secs)
  const buf = ctx.createBuffer(1, len, ctx.sampleRate)
  const d = buf.getChannelData(0)
  for (let i = 0; i < len; i++) d[i] = rnd() * 2 - 1
  return buf
}

function buildCore(C: typeof AudioContext): Core {
  const ctx = new C()
  // Compression douce en bout de chaîne : elle tient les pics quand un effet
  // tombe sur un coup de grosse caisse, sans écraser la musique.
  const comp = ctx.createDynamicsCompressor()
  comp.threshold.value = -16
  comp.knee.value = 14
  comp.ratio.value = 3
  comp.attack.value = 0.006
  comp.release.value = 0.25
  comp.connect(ctx.destination)
  const master = gainNode(ctx, readMuted() ? 0 : 1, comp)
  const sfxBus = gainNode(ctx, SFX_VOL, master)
  // Écho court avec un passe-bas dans la boucle : chaque répétition est plus
  // sourde, comme dans une salle en bois, et ne pique jamais l'oreille.
  const echo = gainNode(ctx, 0.22)
  const dl = ctx.createDelay(1)
  dl.delayTime.value = 0.16
  const lp = filter(ctx, 'lowpass', 2600)
  const fb = gainNode(ctx, 0.25)
  echo.connect(dl)
  dl.connect(lp)
  lp.connect(fb)
  fb.connect(dl)
  lp.connect(sfxBus)
  return { ctx, master, sfxBus, echo, noise: makeNoise(ctx, 1) }
}

function resume(): Promise<void> {
  if (!core || core.ctx.state === 'running') return Promise.resolve()
  resuming = true
  return core.ctx
    .resume()
    .catch(() => {})
    .then(() => {
      resuming = false
    })
}

/** Un contexte qui peut jouer maintenant, ou null. */
function live(): Core | null {
  if (!core || readMuted()) return null
  const st = core.ctx.state
  return st === 'running' || resuming ? core : null
}

// Filet pour iOS et Safari : un appel, une alarme, un casque débranché
// « interrompent » le contexte. Le prochain geste le relance sans que le jeu
// ait à y penser. Un seul écouteur passif, quasi gratuit.
function hookGestures() {
  if (hooked || !hasWindow()) return
  hooked = true
  const wake = () => {
    if (readMuted()) return
    if (!core) audio.unlock()
    else if (core.ctx.state !== 'running') void resume()
  }
  for (const ev of ['pointerdown', 'keydown', 'touchend']) window.addEventListener(ev, wake, { passive: true })
}

function applyMute() {
  if (!core) return
  const { ctx, master } = core
  const m = readMuted()
  master.gain.setTargetAtTime(m ? 0 : 1, ctx.currentTime, 0.03)
  if (suspendTimer) clearTimeout(suspendTimer)
  suspendTimer = null
  if (m) {
    stopPump()
    // Le contexte est mis en veille une fois le fondu fini : muet, il ne doit
    // plus rien coûter au processeur.
    suspendTimer = setTimeout(() => {
      suspendTimer = null
      if (readMuted() && core && core.ctx.state === 'running') core.ctx.suspend().catch(() => {})
    }, 300)
  } else {
    void resume().then(() => {
      if (wantMusic && !readMuted()) startMusic()
    })
  }
}

/* --- briques de synthèse ---------------------------------------------------- */

/** Déconnecte un son fini et sa chaîne : sans ça, chaque note laisse des nœuds
 *  accrochés au graphe et la mémoire grimpe tout au long d'une journée. */
function release(src: AudioScheduledSourceNode, ...nodes: AudioNode[]) {
  src.onended = () => {
    src.disconnect()
    for (const n of nodes) n.disconnect()
  }
}

/** Enveloppe percussive : attaque linéaire, chute exponentielle. */
function perc(p: AudioParam, t: number, peak: number, attack: number, decay: number) {
  p.setValueAtTime(0, t)
  p.linearRampToValueAtTime(peak, t + attack)
  p.exponentialRampToValueAtTime(0.0001, t + attack + decay)
}

interface ToneOpts {
  type?: OscillatorType
  gain?: number
  attack?: number
  /** fréquence d'arrivée d'un glissando */
  to?: number
  glide?: number
  lp?: number
  dest?: AudioNode
  /** envoie aussi dans l'écho des effets */
  wet?: boolean
}

function tone(c: Core, f: number, t: number, dur: number, o: ToneOpts = {}) {
  const { ctx } = c
  const osc = ctx.createOscillator()
  osc.type = o.type ?? 'sine'
  osc.frequency.setValueAtTime(f, t)
  if (o.to) osc.frequency.exponentialRampToValueAtTime(o.to, t + (o.glide ?? dur))
  const attack = o.attack ?? 0.005
  const g = ctx.createGain()
  perc(g.gain, t, o.gain ?? 0.2, attack, dur)
  osc.connect(g)
  let last: AudioNode = g
  const chain: AudioNode[] = [g]
  if (o.lp) {
    const lp = filter(ctx, 'lowpass', o.lp)
    g.connect(lp)
    last = lp
    chain.push(lp)
  }
  last.connect(o.dest ?? c.sfxBus)
  if (o.wet) last.connect(c.echo)
  osc.start(t)
  osc.stop(t + attack + dur + 0.05)
  release(osc, ...chain)
}

interface NoiseOpts {
  type?: BiquadFilterType
  f?: number
  to?: number
  q?: number
  gain?: number
  attack?: number
  dest?: AudioNode
}

function noise(c: Core, t: number, dur: number, o: NoiseOpts = {}) {
  const { ctx } = c
  const src = ctx.createBufferSource()
  src.buffer = c.noise
  const bf = filter(ctx, o.type ?? 'bandpass', o.f ?? 1500, o.q ?? 0.8)
  if (o.to) bf.frequency.exponentialRampToValueAtTime(o.to, t + dur)
  const g = ctx.createGain()
  const attack = o.attack ?? 0.002
  perc(g.gain, t, o.gain ?? 0.15, attack, dur)
  src.connect(bf)
  bf.connect(g)
  g.connect(o.dest ?? c.sfxBus)
  // Chaque souffle lit le même tampon à un endroit différent : on ne
  // réentend jamais le même grain, sans rien réallouer.
  const span = Math.max(0, c.noise.duration - attack - dur - 0.1)
  src.start(t, rnd() * span)
  src.stop(t + attack + dur + 0.05)
  release(src, bf, g)
}

/** Cloche : partiels inharmoniques qui s'éteignent chacun à leur rythme, les
 *  aigus d'abord, comme une vraie cloche de temple. */
function bell(c: Core, f: number, t: number, dur: number, gain: number, dest?: AudioNode, wet = true) {
  const parts: [number, number, number][] = [
    [1, 1, 1],
    [2.76, 0.42, 0.55],
    [5.4, 0.2, 0.3],
    [8.93, 0.08, 0.16],
  ]
  for (const [ratio, amp, life] of parts) {
    if (f * ratio > 16000) continue
    tone(c, f * ratio, t, dur * life, { gain: gain * amp, attack: 0.002, dest, wet: wet && ratio === 1 })
  }
}

/** Petit ping brillant : triangle et son octave, très court. */
function ping(c: Core, f: number, t: number, dur: number, gain = 0.14) {
  tone(c, f, t, dur, { type: 'triangle', gain, wet: true })
  tone(c, f * 2, t, dur * 0.5, { gain: gain * 0.3 })
}

/** Bloc de bois : un sinus qui tombe vite, et un grain de bruit pour l'attaque. */
function wood(c: Core, t: number, f: number, gain: number, dest?: AudioNode) {
  tone(c, f, t, 0.06, { gain, to: f * 0.82, glide: 0.05, dest })
  noise(c, t, 0.02, { f: f * 3, q: 3, gain: gain * 0.5, dest })
}

/** Frappe de taiko : un sinus grave qui s'affaisse et un souffle sourd. */
function taiko(c: Core, t: number, gain: number, dest?: AudioNode) {
  tone(c, 96, t, 0.55, { gain, to: 50, glide: 0.4, attack: 0.003, dest })
  noise(c, t, 0.12, { type: 'lowpass', f: 380, gain: gain * 0.6, dest })
}

/* --- effets sonores --------------------------------------------------------- */

const ARP = [523.25, 659.25, 783.99, 1046.5, 1318.5] // do majeur, pour les réussites

function playSfx(c: Core, name: Sfx) {
  const t = c.ctx.currentTime + 0.01
  switch (name) {
    case 'tap':
      tone(c, 700, t, 0.05, { to: 1000, glide: 0.03, gain: 0.14 })
      break
    case 'open':
      tone(c, 480, t, 0.14, { type: 'triangle', to: 760, glide: 0.1, gain: 0.16, lp: 3000 })
      tone(c, 720, t + 0.03, 0.12, { to: 1140, glide: 0.1, gain: 0.06 })
      break
    case 'close':
      tone(c, 760, t, 0.14, { type: 'triangle', to: 480, glide: 0.1, gain: 0.14, lp: 3000 })
      tone(c, 1140, t + 0.02, 0.1, { to: 720, glide: 0.08, gain: 0.05 })
      break
    case 'assign':
      wood(c, t, 900, 0.2)
      tone(c, 1320, t + 0.04, 0.22, { type: 'triangle', gain: 0.13, wet: true })
      break
    case 'unassign':
      tone(c, 660, t, 0.09, { type: 'triangle', gain: 0.12 })
      tone(c, 440, t + 0.07, 0.14, { type: 'triangle', gain: 0.12 })
      break
    case 'launch':
      noise(c, t, 0.4, { f: 500, to: 3500, q: 1.2, gain: 0.14, attack: 0.08 })
      tone(c, 330, t, 0.35, { type: 'triangle', to: 990, glide: 0.3, gain: 0.1, lp: 2500 })
      ping(c, 1318.5, t + 0.3, 0.3, 0.09)
      break
    case 'coin':
      ping(c, 987.77, t, 0.08, 0.13)
      ping(c, 1318.5, t + 0.07, 0.35, 0.13)
      break
    case 'success':
      ARP.slice(0, 4).forEach((f, i) => ping(c, f, t + i * 0.075, i === 3 ? 0.5 : 0.16, 0.12))
      break
    case 'excellent':
      ARP.forEach((f, i) => ping(c, f, t + i * 0.06, i === 4 ? 0.6 : 0.14, 0.12))
      // l'étincelle : des tintements aigus au hasard, jamais deux fois pareils
      for (let i = 0; i < 7; i++) {
        tone(c, 2000 + rnd() * 2600, t + 0.26 + i * 0.05 + rnd() * 0.03, 0.12, { gain: 0.03 + rnd() * 0.03, wet: true })
      }
      break
    case 'fail':
      // mineur descendant, doux : un échec se signale sans punir
      ;[392, 311.13, 261.63].forEach((f, i) =>
        tone(c, f, t + i * 0.13, i === 2 ? 0.45 : 0.15, {
          type: 'triangle', gain: 0.13, lp: 1400, to: i === 2 ? f * 0.94 : undefined, glide: 0.4,
        }),
      )
      break
    case 'client':
      // le carillon de la porte, ding puis dong
      bell(c, 659.25, t, 1.3, 0.13)
      bell(c, 523.25, t + 0.32, 1.6, 0.12)
      break
    case 'leave':
      tone(c, 493.88, t, 0.15, { type: 'triangle', gain: 0.1, lp: 1800 })
      tone(c, 369.99, t + 0.12, 0.3, { type: 'triangle', gain: 0.1, lp: 1500, to: 350 })
      noise(c, t + 0.05, 0.3, { type: 'lowpass', f: 900, to: 300, gain: 0.04, attack: 0.06 })
      break
    case 'levelup':
      ;[523.25, 587.33, 659.25, 783.99, 880, 1046.5].forEach((f, i) =>
        tone(c, f, t + i * 0.055, 0.1, { type: 'square', gain: 0.05, lp: 2800 }),
      )
      ;[523.25, 659.25, 783.99, 1046.5].forEach((f) =>
        tone(c, f, t + 0.36, 0.7, { type: 'triangle', gain: 0.07, attack: 0.01, wet: true }),
      )
      for (let i = 0; i < 5; i++) tone(c, 2400 + rnd() * 2000, t + 0.4 + i * 0.07, 0.1, { gain: 0.03, wet: true })
      break
    case 'dayStart':
      taiko(c, t, 0.3)
      bell(c, 880, t + 0.08, 1.2, 0.09)
      bell(c, 1318.5, t + 0.28, 1.4, 0.07)
      break
    case 'dayEnd':
      bell(c, 1318.5, t, 1.4, 0.08)
      bell(c, 1046.5, t + 0.22, 1.5, 0.08)
      bell(c, 880, t + 0.44, 1.8, 0.09)
      bell(c, 440, t + 0.44, 2, 0.05)
      break
    case 'tick':
      noise(c, t, 0.02, { f: 2400, q: 4, gain: 0.08 })
      tone(c, 1900, t, 0.015, { gain: 0.025 })
      break
    case 'warning':
      tone(c, 220, t, 0.08, { type: 'square', gain: 0.08, lp: 900 })
      tone(c, 220, t + 0.15, 0.08, { type: 'square', gain: 0.08, lp: 900 })
      break
    case 'buy':
      noise(c, t, 0.05, { type: 'highpass', f: 5000, gain: 0.06 })
      ping(c, 1174.7, t + 0.02, 0.1, 0.12)
      ping(c, 1568, t + 0.09, 0.4, 0.12)
      break
    case 'error':
      // deux dents de scie presque à l'unisson : le battement dit « non »
      tone(c, 150, t, 0.18, { type: 'sawtooth', gain: 0.07, lp: 700 })
      tone(c, 157, t, 0.18, { type: 'sawtooth', gain: 0.07, lp: 700 })
      break
  }
}

/* --- la musique : le graphe ------------------------------------------------- */

interface MusicGraph {
  /** volume de la musique, porte les fondus d'entrée et de sortie */
  out: GainNode
  pauseLp: BiquadFilterNode
  pauseGain: GainNode
  /** somme des couches, avant la bande (wow) et la pause */
  dry: GainNode
  delay: DelayNode
  pad: BiquadFilterNode
  koto: BiquadFilterNode
  bass: BiquadFilterNode
  drums: GainNode
  /** cloches et taiko d'ambiance, avec beaucoup de réverbération */
  air: GainNode
  vinyl: GainNode
  hiss: AudioBuffer
  crackle: AudioBuffer
  kotoCache: Map<number, { buf: AudioBuffer; f0: number }>
}

let music: MusicGraph | null = null
let vinylSrcs: AudioBufferSourceNode[] = []

/** Réverbération fabriquée sur place : du bruit qui s'éteint, et qui
 *  s'assombrit en s'éteignant, comme une salle aux murs de bois et de papier. */
function makeIR(ctx: AudioContext, secs: number): AudioBuffer {
  const sr = ctx.sampleRate
  const len = Math.floor(sr * secs)
  const buf = ctx.createBuffer(2, len, sr)
  const pre = Math.floor(sr * 0.012)
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch)
    let y = 0
    for (let i = 0; i < len; i++) {
      const x = i / len
      y += (rnd() * 2 - 1 - y) * (0.9 - 0.78 * x)
      d[i] = i < pre ? 0 : y * Math.pow(1 - x, 2.8)
    }
  }
  return buf
}

/** Souffle de vinyle : un bruit filtré en bande, bouclé. */
function makeHiss(ctx: AudioContext): AudioBuffer {
  const sr = ctx.sampleRate
  const len = Math.floor(sr * 2.3)
  const buf = ctx.createBuffer(1, len, sr)
  const d = buf.getChannelData(0)
  let a = 0
  let b = 0
  for (let i = 0; i < len; i++) {
    const w = rnd() * 2 - 1
    a += (w - a) * 0.35
    b += (w - b) * 0.02
    d[i] = (a - b) * 0.6
  }
  return buf
}

/** Craquements : des clics épars et inégaux. La boucle dure 3,7 s pour ne
 *  jamais retomber sur la mesure, sinon l'oreille repère le motif. */
function makeCrackle(ctx: AudioContext): AudioBuffer {
  const sr = ctx.sampleRate
  const len = Math.floor(sr * 3.7)
  const buf = ctx.createBuffer(1, len, sr)
  const d = buf.getChannelData(0)
  for (let i = 0; i < len - 32; i++) {
    if (rnd() > 11 / sr) continue
    const a = (rnd() * 2 - 1) * (0.25 + 0.75 * Math.pow(rnd(), 3))
    for (let k = 0; k < 24; k++) d[i + k] += a * Math.exp(-k / 3) * (k % 2 ? -0.6 : 1)
  }
  return buf
}

function buildMusic(c: Core): MusicGraph {
  const { ctx } = c
  const out = gainNode(ctx, 0, c.master)
  const pauseGain = gainNode(ctx, paused ? 0.5 : 1, out)
  const pauseLp = filter(ctx, 'lowpass', paused ? 650 : 18000, 0.5, pauseGain)
  // La bande : un retard très court dont la durée ondule. Tout le mix flotte
  // de quelques cents, ce « wow » qui fait le grain lo-fi, pour un seul nœud.
  const tape = ctx.createDelay(0.1)
  tape.delayTime.value = 0.012
  tape.connect(pauseLp)
  const wow = ctx.createOscillator()
  wow.frequency.value = 0.45
  const wowDepth = gainNode(ctx, 0.0007)
  wowDepth.connect(tape.delayTime)
  wow.connect(wowDepth)
  wow.start()
  const dry = gainNode(ctx, 1, tape)

  const reverb = ctx.createConvolver()
  reverb.buffer = makeIR(ctx, 2.2)
  reverb.connect(dry)

  // Écho calé sur la croche pointée, avec un passe-bas dans la boucle.
  const delay = ctx.createDelay(2)
  delay.delayTime.value = 0.5
  const dlLp = filter(ctx, 'lowpass', 2200)
  const dlFb = gainNode(ctx, 0.3)
  delay.connect(dlLp)
  dlLp.connect(dlFb)
  dlFb.connect(delay)
  dlLp.connect(dry)

  const pad = filter(ctx, 'lowpass', 1000, 0.9, dry)
  pad.connect(gainNode(ctx, 0.55, reverb))
  // La nappe respire : son filtre s'ouvre et se ferme sur une vingtaine de
  // secondes, assez lent pour qu'on le sente sans l'entendre.
  const padLfo = ctx.createOscillator()
  padLfo.frequency.value = 0.05
  const padDepth = gainNode(ctx, 280, pad.frequency)
  padLfo.connect(padDepth)
  padLfo.start()

  const koto = filter(ctx, 'lowpass', 4200, 0.7, dry)
  koto.connect(gainNode(ctx, 0.3, reverb))
  koto.connect(gainNode(ctx, 0.26, delay))

  const bass = filter(ctx, 'lowpass', 420, 0.7, dry)

  const drumLp = filter(ctx, 'lowpass', 7500, 0.7, dry)
  drumLp.connect(gainNode(ctx, 0.07, reverb))
  const drums = gainNode(ctx, 0, drumLp)

  const air = gainNode(ctx, 1, dry)
  air.connect(gainNode(ctx, 0.7, reverb))

  const vinyl = gainNode(ctx, 1, dry)

  return {
    out, pauseLp, pauseGain, dry, delay, pad, koto, bass, drums, air, vinyl,
    hiss: makeHiss(ctx), crackle: makeCrackle(ctx), kotoCache: new Map(),
  }
}

function startVinyl(c: Core, m: MusicGraph) {
  if (vinylSrcs.length) return
  const t = c.ctx.currentTime
  for (const [buf, level] of [[m.hiss, 0.03], [m.crackle, 0.12]] as const) {
    const src = c.ctx.createBufferSource()
    src.buffer = buf
    src.loop = true
    const g = gainNode(c.ctx, level, m.vinyl)
    src.connect(g)
    src.start(t, rnd() * buf.duration)
    release(src, g)
    vinylSrcs.push(src)
  }
}

function stopVinyl() {
  for (const s of vinylSrcs) {
    try {
      s.stop()
    } catch {
      // déjà arrêtée
    }
  }
  vinylSrcs = []
}

/* --- la musique : les instruments ------------------------------------------ */

/** Le koto : une corde pincée en Karplus-Strong, calculée une fois par zone
 *  de hauteur puis rejouée plus ou moins vite. Un tampon toutes les quatre
 *  demi-tons suffit : décalé d'un ton au plus, le timbre ne bouge pas, et le
 *  cache reste sous 3 Mo. */
function kotoBuffer(c: Core, m: MusicGraph, midi: number) {
  const zone = Math.round(midi / 4) * 4
  const hit = m.kotoCache.get(zone)
  if (hit) return hit
  const sr = c.ctx.sampleRate
  const N = Math.max(2, Math.round(sr / mtof(zone) - 0.5))
  // la moyenne de deux échantillons ajoute un demi-échantillon de retard
  const f0 = sr / (N + 0.5)
  const len = Math.floor(sr * 1.4)
  const buf = c.ctx.createBuffer(1, len, sr)
  const d = buf.getChannelData(0)
  // Excitation : un bruit adouci (le plectre d'ivoire n'est pas un fouet)...
  let lp = 0
  for (let i = 0; i < N; i++) {
    lp += (rnd() * 2 - 1 - lp) * 0.55
    d[i] = lp
  }
  // ...pincé près du chevalet : retirer une copie décalée creuse certains
  // harmoniques, et c'est ce creux qui donne la couleur nasale du koto.
  const off = Math.max(1, Math.floor(N * 0.14))
  for (let i = N - 1; i >= off; i--) d[i] -= d[i - off] * 0.8
  // Environ 48 dB perdus en 2 s par la boucle seule, quelle que soit la
  // hauteur ; le filtre moyenneur éteint les aigus bien avant.
  const r = Math.pow(10, -2.4 / (f0 * 2))
  for (let i = N; i < len; i++) d[i] = r * 0.5 * (d[i - N] + (i > N ? d[i - N - 1] : 0))
  let peak = 0
  for (let i = 0; i < N * 4 && i < len; i++) peak = Math.max(peak, Math.abs(d[i]))
  const norm = peak > 0 ? 0.8 / peak : 1
  const fade = Math.floor(len * 0.1)
  for (let i = 0; i < len; i++) d[i] *= norm * (i > len - fade ? (len - i) / fade : 1)
  const v = { buf, f0 }
  m.kotoCache.set(zone, v)
  return v
}

function kotoNote(c: Core, m: MusicGraph, t: number, midi: number, vel: number, bend: boolean) {
  const { buf, f0 } = kotoBuffer(c, m, midi)
  const src = c.ctx.createBufferSource()
  src.buffer = buf
  const rate = mtof(midi) / f0
  if (bend) {
    // Oshide : la corde pressée derrière le chevalet monte d'un demi-ton
    // après l'attaque. C'est le geste le plus reconnaissable du koto.
    src.playbackRate.setValueAtTime(rate / Math.pow(2, 1 / 12), t)
    src.playbackRate.linearRampToValueAtTime(rate, t + 0.09)
  } else {
    src.playbackRate.value = rate
  }
  const g = gainNode(c.ctx, vel * 0.5, m.koto)
  src.connect(g)
  src.start(Math.max(t, c.ctx.currentTime))
  release(src, g)
}

function padChord(c: Core, m: MusicGraph, t: number, dur: number, rootPc: number, q: readonly number[]) {
  const { ctx } = c
  const rm = 50 + ((rootPc - 2 + 12) % 12)
  // Voicing sans fondamentale : la basse la joue déjà, et l'accord respire mieux.
  const ivs = q.length >= 4 ? q.slice(1, 5) : q
  const hold = Math.max(0, dur - 1.2)
  for (const iv of ivs) {
    let midi = rm + iv
    if (midi > 74) midi -= 12
    const g = ctx.createGain()
    g.gain.setValueAtTime(0, t)
    g.gain.linearRampToValueAtTime(0.028, t + 1.2)
    g.gain.setValueAtTime(0.028, t + 1.2 + hold)
    g.gain.setTargetAtTime(0, t + 1.2 + hold, 0.45)
    g.connect(m.pad)
    const oscs = [-6, 6].map((det) => {
      const o = ctx.createOscillator()
      o.type = 'sawtooth'
      o.frequency.value = mtof(midi)
      o.detune.value = det + (rnd() * 4 - 2)
      o.connect(g)
      o.start(t)
      o.stop(t + dur + 1.8)
      return o
    })
    release(oscs[0])
    release(oscs[1], g)
  }
}

/** Piano électrique très doux : sinus et octave, quelques accords plaqués
 *  quand la journée s'anime. */
function keysChord(c: Core, m: MusicGraph, t: number, rootPc: number, q: readonly number[], vel: number) {
  const rm = 55 + ((rootPc - 7 + 12) % 12)
  for (const iv of q.slice(1, 5)) {
    const f = mtof(rm + iv > 79 ? rm + iv - 12 : rm + iv)
    tone(c, f, t, 1.1, { gain: 0.035 * vel, attack: 0.004, dest: m.pad })
    tone(c, f * 2, t, 0.25, { gain: 0.01 * vel, dest: m.pad })
  }
}

function bassNote(c: Core, m: MusicGraph, t: number, midi: number, dur: number, vel: number) {
  const { ctx } = c
  const g = ctx.createGain()
  g.gain.setValueAtTime(0, t)
  g.gain.linearRampToValueAtTime(0.5 * vel, t + 0.015)
  g.gain.setTargetAtTime(0.32 * vel, t + 0.03, 0.15)
  g.gain.setTargetAtTime(0, t + dur, 0.06)
  g.connect(m.bass)
  const f = mtof(midi)
  // Le sinus pour le poids, un triangle discret pour que la basse existe
  // encore sur des haut-parleurs de portable qui ne descendent pas si bas.
  const a = ctx.createOscillator()
  a.frequency.value = f
  const b = ctx.createOscillator()
  b.type = 'triangle'
  b.frequency.value = f
  const bg = gainNode(ctx, 0.25, g)
  a.connect(g)
  b.connect(bg)
  for (const o of [a, b]) {
    o.start(t)
    o.stop(t + dur + 0.4)
  }
  release(a)
  release(b, bg, g)
}

function kick(c: Core, m: MusicGraph, t: number, v: number) {
  tone(c, 120, t, 0.36, { to: 44, glide: 0.14, gain: 0.75 * v, attack: 0.004, dest: m.drums })
}
function snare(c: Core, m: MusicGraph, t: number, v: number) {
  noise(c, t, 0.17, { f: 1800, q: 0.7, gain: 0.3 * v, dest: m.drums })
  tone(c, 185, t, 0.09, { type: 'triangle', to: 150, gain: 0.16 * v, dest: m.drums })
}
function hat(c: Core, m: MusicGraph, t: number, v: number, open = false) {
  noise(c, t, open ? 0.22 : 0.035, { type: 'highpass', f: 7000, gain: 0.1 * v, dest: m.drums })
}

/** Carillon à vent (fūrin) : trois à cinq tintements aigus pris dans la gamme. */
function windChime(c: Core, m: MusicGraph, t: number, notes: readonly number[]) {
  const top = notes.slice(-5)
  let at = t
  const n = 3 + Math.floor(rnd() * 3)
  for (let i = 0; i < n; i++) {
    bell(c, mtof(pick(top) + 12), at, 1.4, 0.018 + rnd() * 0.012, m.air, false)
    at += 0.07 + rnd() * 0.16
  }
}

/* --- la musique : l'harmonie ------------------------------------------------ */

// Accords en demi-tons depuis leur fondamentale.
const QUAL = {
  m7: [0, 3, 7, 10],
  m9: [0, 3, 7, 10, 14],
  m11: [0, 3, 7, 10, 14, 17],
  maj7: [0, 4, 7, 11],
  maj9: [0, 4, 7, 11, 14],
  d9: [0, 4, 7, 10, 14],
} as const
type Qual = keyof typeof QUAL
type Chord = readonly [number, Qual]

// Grilles en dorien, fondamentales en demi-tons depuis la tonique. Toutes
// restent dans le mode : la mélodie pentatonique ne heurte jamais la nappe.
const PROGS: readonly (readonly Chord[])[] = [
  [[0, 'm9'], [5, 'd9'], [3, 'maj7'], [10, 'maj9']], // i IV bIII bVII
  [[3, 'maj9'], [2, 'm7'], [0, 'm9'], [10, 'maj7']], // la descente lo-fi
  [[0, 'm11'], [7, 'm7'], [3, 'maj9'], [5, 'd9']], // i v bIII IV
  [[0, 'm9'], [5, 'd9'], [0, 'm11'], [7, 'm7']], // la vamp dorienne
  [[10, 'maj9'], [0, 'm9'], [3, 'maj7'], [5, 'd9']],
]

// Gammes de la mélodie. La pentatonique mineure compte double ; yo et kumoi
// sont deux pentatoniques japonaises, contenues elles aussi dans le dorien.
const SCALES: readonly (readonly number[])[] = [
  [0, 3, 5, 7, 10],
  [0, 3, 5, 7, 10],
  [0, 2, 5, 7, 9], // yo
  [0, 2, 3, 7, 9], // kumoi
]
const KEYS = [2, 9, 4, 7, 0, 5]
// Pas de la marche aléatoire, en degrés de gamme : surtout des voisins,
// parfois un saut, jamais l'immobilité trop longtemps.
const WALK = [-2, -1, -1, -1, 0, 1, 1, 1, 2, 3, -3]

type Ev = (t: number) => void
type Motif = { st: number; d: number; v: number }[]

interface Song {
  key: number
  prog: number
  scale: readonly number[]
  /** hauteurs MIDI jouables par le koto, dans la gamme courante */
  notes: number[]
  bar: number
  step: number
  /** heure du prochain double-croche, en temps du contexte */
  next: number
  /** intensité lissée, qui rejoint doucement la cible */
  level: number
  pos: number
  rest: number
  phrase: number
  motifs: Motif[]
  plan: Ev[][]
}

let song: Song | null = null
let wantMusic = false
let paused = false
let target = 0
let pumpTimer: Timer | null = null
let stopTimer: Timer | null = null

function scaleNotes(key: number, scale: readonly number[]): number[] {
  const out: number[] = []
  for (let m = 57; m <= 88; m++) if (scale.includes((m - key + 120) % 12)) out.push(m)
  return out
}

function nearestIdx(notes: number[], midi: number): number {
  let best = 0
  for (let i = 1; i < notes.length; i++) if (Math.abs(notes[i] - midi) < Math.abs(notes[best] - midi)) best = i
  return best
}

function newSong(t: number): Song {
  const key = pick(KEYS)
  const scale = pick(SCALES)
  const notes = scaleNotes(key, scale)
  return {
    key, prog: Math.floor(rnd() * PROGS.length), scale, notes,
    bar: 0, step: 0, next: t, level: target,
    pos: notes.length >> 1,
    // on laisse la nappe poser l'ambiance une mesure avant la première note
    rest: 1, phrase: 0, motifs: [], plan: [],
  }
}

function otherProg(cur: number): number {
  const n = (cur + 1 + Math.floor(rnd() * (PROGS.length - 1))) % PROGS.length
  return n
}

/** Toutes les 32 mesures : souvent un changement de tonalité vers un ton
 *  voisin, toujours une autre grille. C'est ce qui empêche la boucle de se
 *  faire entendre sur une longue partie. */
function modulate(s: Song) {
  const prev = s.notes[s.pos]
  if (chance(0.7)) s.key = (s.key + pick([5, 7, 2, 10, 3, 9])) % 12
  s.prog = otherProg(s.prog)
  s.scale = pick(SCALES)
  s.notes = scaleNotes(s.key, s.scale)
  s.pos = nearestIdx(s.notes, prev)
}

const stepDur = (s: Song) => 60 / (84 + 16 * s.level) / 4
// Le swing lo-fi est plus lourd quand c'est calme, plus droit quand ça s'active.
const swing = (s: Song) => 0.2 - 0.07 * s.level

/** Prépare toute une mesure d'un coup : chaque pas n'a plus qu'à jouer ce
 *  qui l'attend. Le tempo, lui, reste lu pas à pas. */
function planBar(c: Core, m: MusicGraph, s: Song) {
  const plan: Ev[][] = Array.from({ length: 16 }, () => [])
  const at = (st: number, fn: Ev) => plan[st].push(fn)
  s.plan = plan
  const { bar } = s
  if (bar > 0 && bar % 32 === 0) modulate(s)
  else if (bar > 0 && bar % 16 === 0 && chance(0.3)) s.prog = otherProg(s.prog)

  const L = s.level
  const sd = stepDur(s)
  const beat = sd * 4
  const prog = PROGS[s.prog]
  const change = bar % 2 === 0
  const [ro, qn] = prog[(bar >> 1) % 4]
  const q = QUAL[qn]
  const rootPc = (s.key + ro) % 12
  const chordPcs = q.map((i) => (rootPc + i) % 12)
  const now = c.ctx.currentTime

  // Les réglages qui suivent l'intensité glissent sur une mesure ou deux.
  m.pad.frequency.setTargetAtTime(800 + 700 * L, now, 2)
  m.delay.delayTime.setTargetAtTime(sd * 3, now, 0.5)
  m.drums.gain.setTargetAtTime(clamp01((L - 0.28) / 0.25), now, 0.8)

  // nappe : un accord toutes les deux mesures
  if (change) at(0, (tt) => padChord(c, m, tt, beat * 8 + 0.05, rootPc, q))

  // piano : quelques accords plaqués quand la journée s'anime
  if (L > 0.4 && chance(0.55 * L)) {
    const st = change ? pick([6, 10]) : pick([0, 3, 6, 10])
    at(st, (tt) => keysChord(c, m, tt, rootPc, q, 0.7 + rnd() * 0.3))
  }

  // basse sur les fondamentales, plus bavarde avec l'intensité
  const bm = 33 + ((rootPc - 9 + 12) % 12)
  if (change) {
    at(0, (tt) => bassNote(c, m, tt, bm, beat * 1.6, 0.9))
    if (chance(0.35 + 0.5 * L)) at(10, (tt) => bassNote(c, m, tt, bm, beat * 0.9, 0.7))
    if (L > 0.5 && chance(0.35)) {
      const n = bm + pick([7, 12, 10])
      at(14, (tt) => bassNote(c, m, tt, n, beat * 0.4, 0.55))
    }
  } else {
    if (L > 0.15 || chance(0.5)) at(chance(0.7) ? 0 : 2, (tt) => bassNote(c, m, tt, bm, beat * 1.2, 0.75))
    if (chance(0.2 + 0.6 * L)) {
      const n = bm + (chance(0.5) ? 7 : 0)
      at(8, (tt) => bassNote(c, m, tt, n, beat * 0.8, 0.65))
    }
    if (L > 0.55 && chance(0.4)) {
      // note d'approche vers l'accord suivant
      const next = 33 + ((((s.key + prog[((bar >> 1) + 1) % 4][0]) % 12) - 9 + 12) % 12)
      const n = next + pick([-1, 2])
      at(14, (tt) => bassNote(c, m, tt, n, beat * 0.45, 0.6))
    }
  }

  // batterie : absente au calme, elle entre au-delà de 0,3
  if (L > 0.28) {
    const d = clamp01((L - 0.3) / 0.7)
    // sous 0,55 un bloc de bois (mokugyo) plutôt qu'une caisse claire
    const back = L > 0.55 ? (tt: number, v: number) => snare(c, m, tt, v) : (tt: number, v: number) => wood(c, tt, 780, 0.22 * v, m.drums)
    at(0, (tt) => kick(c, m, tt, 1))
    if (chance(0.85)) at(10, (tt) => kick(c, m, tt, 0.85))
    if (chance(0.3 * d)) at(7, (tt) => kick(c, m, tt, 0.6))
    if (chance(0.2 * d)) at(3, (tt) => kick(c, m, tt, 0.5))
    at(4, (tt) => back(tt, 1))
    at(12, (tt) => back(tt, 1))
    if (chance(0.3 * d)) at(pick([6, 9, 15]), (tt) => back(tt, 0.3))
    if (bar % 8 === 7 && d > 0.3 && chance(0.5)) for (const st of [13, 14, 15]) at(st, (tt) => back(tt, 0.35 + rnd() * 0.3))
    for (let st = 0; st < 16; st++) {
      if (st % 2 === 0) {
        if (chance(0.92)) {
          const v = st % 4 === 0 ? 0.9 : 0.6
          at(st, (tt) => hat(c, m, tt, v * (0.85 + rnd() * 0.3)))
        }
      } else if (chance(0.12 + 0.5 * d)) at(st, (tt) => hat(c, m, tt, 0.35))
    }
    if (chance(0.2 * d)) at(14, (tt) => hat(c, m, tt, 0.6, true))
    if (bar % 8 === 0 && L > 0.65 && chance(0.5)) at(0, (tt) => taiko(c, tt, 0.25, m.air))
  }

  // ambiance : un carillon à vent de temps en temps, quand c'est calme
  if (L < 0.55 && bar % 4 === 2 && chance(0.35)) {
    const ns = s.notes
    at(pick([4, 8, 12]), (tt) => windChime(c, m, tt, ns))
  }

  planMelody(c, m, s, at, chordPcs, change)
}

/** Mélodie de koto : phrases de deux à quatre mesures séparées de silences,
 *  marche aléatoire dans la gamme, et de temps en temps un motif déjà joué
 *  qui revient, parfois transposé. C'est ce retour qui donne l'impression
 *  d'une intention et pas d'un tirage au sort. */
function planMelody(c: Core, m: MusicGraph, s: Song, at: (st: number, fn: Ev) => void, chordPcs: number[], change: boolean) {
  const L = s.level
  if (s.rest > 0) {
    s.rest--
    return
  }
  if (s.phrase <= 0) s.phrase = 2 + Math.floor(rnd() * 3)
  const ns = s.notes
  const hi = ns.length - 1
  // la phrase s'ancre sur une note de l'accord, pour ne jamais sonner « à côté »
  let base = s.pos
  for (const k of [0, 1, -1, 2, -2, 3, -3]) {
    const i = base + k
    if (i >= 0 && i <= hi && chordPcs.includes(ns[i] % 12)) {
      base = i
      break
    }
  }

  let motif: Motif
  if (s.motifs.length && chance(0.3)) {
    const shift = chance(0.5) ? 0 : pick([-2, -1, 1, 2])
    motif = pick(s.motifs).map((n) => ({ ...n, d: n.d + shift }))
  } else {
    motif = []
    let p = 0
    const density = 0.22 + 0.3 * L
    for (let st = 0; st < 16; st++) {
      let prob = st % 2 === 0 ? density * (st % 4 === 0 ? 1.15 : 0.8) : density * 0.22 * L
      if (st === 0 && change) prob = Math.max(prob, 0.7)
      if (!chance(prob)) continue
      if (motif.length) {
        let w = pick(WALK)
        // on rebrousse chemin près des bords plutôt que de s'y coller
        if ((base + p > hi - 3 && w > 0) || (base + p < 3 && w < 0)) w = -w
        p += w
      }
      motif.push({ st, d: p, v: st % 4 === 0 ? 0.85 : 0.62 + rnd() * 0.18 })
    }
    if (motif.length >= 2) {
      s.motifs.push(motif)
      if (s.motifs.length > 4) s.motifs.shift()
    }
  }

  let last = base
  for (const n of motif) {
    let i = base + n.d
    if (i < 0) i = -i
    if (i > hi) i = 2 * hi - i
    i = Math.max(0, Math.min(hi, i))
    const midi = ns[i]
    const bend = chance(0.18)
    const grace = !bend && i > 0 && chance(0.1) ? ns[i - 1] : 0
    at(n.st, (tt) => {
      // appoggiature : la note voisine effleurée juste avant
      if (grace) kotoNote(c, m, tt - 0.05, grace, n.v * 0.4, false)
      kotoNote(c, m, tt, midi, n.v, bend)
    })
    last = i
  }
  s.pos = last
  s.phrase--
  if (s.phrase === 0) s.rest = chance(0.65 - 0.35 * L) ? (chance(0.3) ? 2 : 1) : 0
}

/* --- la musique : l'ordonnanceur -------------------------------------------- */

// Le minuteur JavaScript est imprécis, l'horloge audio ne l'est pas. On
// réveille donc la boucle souvent, et elle place chaque note sur l'horloge
// audio un peu en avance : le rythme reste exact même si le fil principal
// est occupé par le rendu du dojo.
function pump() {
  pumpTimer = null
  const c = core
  const m = music
  const s = song
  if (!c || !m || !s || !wantMusic || readMuted()) return
  const now = c.ctx.currentTime
  // Retard (onglet gelé, contexte en veille) : on repart d'ici plutôt que de
  // rattraper d'un coup une rafale de notes.
  if (s.next < now - 0.05) s.next = now + 0.06
  const ahead = tabHidden() ? LOOKAHEAD_HIDDEN : LOOKAHEAD
  while (s.next < now + ahead) {
    const t = s.next
    if (s.step === 0) planBar(c, m, s)
    const tt = s.step % 2 ? t + stepDur(s) * swing(s) : t
    for (const fn of s.plan[s.step] ?? []) fn(tt)
    s.next += stepDur(s)
    // Lissage : une constante de temps de quelques secondes, pour que le
    // passage du menu à la journée se fasse en douceur.
    s.level += (target - s.level) * 0.02
    s.step = (s.step + 1) % 16
    if (s.step === 0) s.bar++
  }
  pumpTimer = setTimeout(pump, tabHidden() ? 250 : 25)
}

function stopPump() {
  if (pumpTimer) clearTimeout(pumpTimer)
  pumpTimer = null
}

function startMusic() {
  const c = core
  if (!c || readMuted()) return
  const m = (music ??= buildMusic(c))
  if (stopTimer) clearTimeout(stopTimer)
  stopTimer = null
  const now = c.ctx.currentTime
  m.out.gain.setTargetAtTime(MUSIC_VOL, now, 0.8)
  song ??= newSong(now + 0.1)
  startVinyl(c, m)
  if (!pumpTimer) pump()
}

/* --- l'API ------------------------------------------------------------------ */

export const audio = {
  /** create/resume the AudioContext; call from a user gesture (browsers block audio before one) */
  unlock(): void {
    if (noAudio || !hasWindow()) return
    hookGestures()
    if (!core) {
      const C = ctor()
      if (!C) {
        noAudio = true
        return
      }
      try {
        core = buildCore(C)
      } catch {
        noAudio = true
        return
      }
      // iOS ne déverrouille vraiment qu'après avoir joué quelque chose pendant
      // le geste : un échantillon muet suffit.
      const b = core.ctx.createBufferSource()
      b.buffer = core.ctx.createBuffer(1, 1, core.ctx.sampleRate)
      b.connect(core.ctx.destination)
      b.start(0)
      release(b)
    }
    if (readMuted()) {
      applyMute()
      return
    }
    void resume()
    if (wantMusic) startMusic()
  },

  isMuted(): boolean {
    return readMuted()
  },

  setMuted(m: boolean): void {
    if (m === readMuted()) return
    mutedPref = m
    if (hasWindow()) {
      try {
        window.localStorage.setItem(STORE_KEY, m ? 'off' : 'on')
      } catch {
        // stockage bloqué : le réglage vaut pour cette session seulement
      }
    }
    // Remettre le son est un clic : on en profite pour déverrouiller.
    if (!m && !core) audio.unlock()
    applyMute()
    notify()
  },

  sfx(name: Sfx): void {
    const c = live()
    if (!c) return
    // Deux fois le même effet en moins de 40 ms ne s'entend pas comme deux
    // sons, seulement comme un son plus fort : on l'ignore.
    const now = c.ctx.currentTime
    const prev = lastSfx[name]
    if (prev !== undefined && now - prev < 0.04 && now >= prev) return
    lastSfx[name] = now
    try {
      playSfx(c, name)
    } catch {
      // un navigateur exotique qui refuse un paramètre ne doit pas casser le jeu
    }
  },

  music: {
    /** starts the generative soundtrack (idempotent) */
    start(): void {
      if (!hasWindow()) return
      wantMusic = true
      // Appelé avant tout geste, la musique attend le premier clic.
      hookGestures()
      if (core) startMusic()
    },

    /** fades out and stops */
    stop(): void {
      wantMusic = false
      stopPump()
      const c = core
      const m = music
      if (!c || !m) return
      m.out.gain.setTargetAtTime(0, c.ctx.currentTime, 0.4)
      if (stopTimer) clearTimeout(stopTimer)
      stopTimer = setTimeout(() => {
        stopTimer = null
        if (wantMusic) return
        stopVinyl()
        song = null
      }, 2200)
    },

    /** 0..1: calm menu to busy day; affects density, tempo and drums, smoothly */
    setIntensity(x: number): void {
      target = Number.isFinite(x) ? clamp01(x) : 0
    },

    /** lowpass and volume dip while the game is paused */
    setPaused(p: boolean): void {
      paused = p
      if (!core || !music) return
      const now = core.ctx.currentTime
      music.pauseLp.frequency.setTargetAtTime(p ? 650 : 18000, now, 0.2)
      music.pauseGain.gain.setTargetAtTime(p ? 0.5 : 1, now, 0.2)
    },
  },

  /** notify on mute changes (for a React toggle) */
  subscribe(fn: () => void): () => void {
    listeners.add(fn)
    return () => {
      listeners.delete(fn)
    }
  },
}
