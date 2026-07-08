// ---------------------------------------------------------------------------
// Procedural audio: a chill lo-fi ambient loop + chiptune SFX, synthesised with
// the Web Audio API. No asset files · works fully offline, no CSP issues.
// All output is gated behind a user gesture (browser autoplay policy).
// ---------------------------------------------------------------------------

type SfxName = 'click' | 'start' | 'success' | 'error' | 'coin' | 'level' | 'event' | 'whoosh'

class AudioEngine {
  private ctx: AudioContext | null = null
  private master: GainNode | null = null
  private musicGain: GainNode | null = null
  private sfxGain: GainNode | null = null
  private musicTimer: number | null = null
  private step = 0
  private nextTime = 0
  muted = false
  musicOn = false

  private ensure() {
    if (this.ctx) return this.ctx
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    const ctx = new Ctx()
    this.master = ctx.createGain()
    this.master.gain.value = 0.9
    this.master.connect(ctx.destination)
    this.musicGain = ctx.createGain()
    this.musicGain.gain.value = 0.0
    this.musicGain.connect(this.master)
    this.sfxGain = ctx.createGain()
    this.sfxGain.gain.value = 0.5
    this.sfxGain.connect(this.master)
    this.ctx = ctx
    return ctx
  }

  /** Call on the first user gesture to unlock audio. */
  resume() {
    const ctx = this.ensure()
    if (ctx.state === 'suspended') void ctx.resume()
  }

  setMuted(m: boolean) {
    this.muted = m
    if (this.master && this.ctx) {
      this.master.gain.setTargetAtTime(m ? 0 : 0.9, this.ctx.currentTime, 0.05)
    }
  }

  // ---- music -------------------------------------------------------------
  startMusic() {
    const ctx = this.ensure()
    if (ctx.state === 'suspended') void ctx.resume()
    this.musicOn = true
    if (this.musicGain) this.musicGain.gain.setTargetAtTime(0.16, ctx.currentTime, 0.8)
    if (this.musicTimer != null) return
    this.step = 0
    this.nextTime = ctx.currentTime + 0.1
    this.musicTimer = window.setInterval(() => this.scheduler(), 40)
  }

  stopMusic() {
    this.musicOn = false
    if (this.musicGain && this.ctx) this.musicGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.5)
    if (this.musicTimer != null) {
      clearInterval(this.musicTimer)
      this.musicTimer = null
    }
  }

  // Lo-fi progression in A minor: Am - F - C - G, gentle bass + pad + arp.
  private static BPM = 84
  private static CHORDS = [
    [220.0, 261.63, 329.63], // Am
    [174.61, 220.0, 261.63], // F
    [261.63, 329.63, 392.0], // C
    [196.0, 246.94, 293.66], // G
  ]
  private static ARP = [0, 2, 1, 2]

  private scheduler() {
    const ctx = this.ctx!
    const stepDur = 60 / AudioEngine.BPM / 2 // eighth notes
    while (this.nextTime < ctx.currentTime + 0.2) {
      const bar = Math.floor(this.step / 8) % 4
      const chord = AudioEngine.CHORDS[bar]
      const inBar = this.step % 8

      // bass on beats
      if (inBar % 4 === 0) this.tone(chord[0] / 2, this.nextTime, stepDur * 3.5, 'triangle', 0.22, 900)
      // soft pad at bar start
      if (inBar === 0) {
        for (const f of chord) this.tone(f, this.nextTime, stepDur * 7.5, 'sine', 0.05, 1600)
      }
      // arp
      const note = chord[AudioEngine.ARP[inBar % AudioEngine.ARP.length] % chord.length] * 2
      this.tone(note, this.nextTime, stepDur * 0.9, 'square', 0.045, 2400)
      // hushed hat every off-eighth
      if (inBar % 2 === 1) this.noise(this.nextTime, 0.03, 0.03)

      this.nextTime += stepDur
      this.step++
    }
  }

  private tone(freq: number, t: number, dur: number, type: OscillatorType, gain: number, lp = 4000) {
    const ctx = this.ctx!
    const osc = ctx.createOscillator()
    const g = ctx.createGain()
    const lpf = ctx.createBiquadFilter()
    lpf.type = 'lowpass'
    lpf.frequency.value = lp
    osc.type = type
    osc.frequency.value = freq
    osc.detune.value = -6
    g.gain.setValueAtTime(0, t)
    g.gain.linearRampToValueAtTime(gain, t + 0.02)
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    osc.connect(lpf).connect(g).connect(this.musicGain!)
    osc.start(t)
    osc.stop(t + dur + 0.05)
  }

  private noise(t: number, dur: number, gain: number) {
    const ctx = this.ctx!
    const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * dur), ctx.sampleRate)
    const data = buf.getChannelData(0)
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length)
    const src = ctx.createBufferSource()
    src.buffer = buf
    const g = ctx.createGain()
    g.gain.value = gain
    const hpf = ctx.createBiquadFilter()
    hpf.type = 'highpass'
    hpf.frequency.value = 6000
    src.connect(hpf).connect(g).connect(this.musicGain!)
    src.start(t)
  }

  // ---- sfx ---------------------------------------------------------------
  sfx(name: SfxName) {
    if (this.muted) return
    const ctx = this.ensure()
    if (ctx.state === 'suspended') return
    const t = ctx.currentTime
    switch (name) {
      case 'click':
        this.blip(660, t, 0.06, 'square', 0.18)
        break
      case 'start':
        this.blip(523.25, t, 0.08, 'square', 0.16)
        this.blip(783.99, t + 0.08, 0.1, 'square', 0.16)
        break
      case 'success':
        this.arp([523.25, 659.25, 783.99], t, 0.09, 0.18)
        break
      case 'coin':
        this.blip(987.77, t, 0.06, 'square', 0.16)
        this.blip(1318.51, t + 0.06, 0.12, 'square', 0.16)
        break
      case 'level':
        this.arp([523.25, 659.25, 783.99, 1046.5], t, 0.1, 0.2)
        break
      case 'event':
        this.blip(880, t, 0.4, 'sine', 0.2, 5000)
        this.blip(1174.66, t + 0.02, 0.4, 'sine', 0.12, 5000)
        break
      case 'error':
        this.blip(200, t, 0.25, 'sawtooth', 0.18, 1200)
        this.blip(150, t + 0.08, 0.25, 'sawtooth', 0.16, 1000)
        break
      case 'whoosh':
        this.sweep(t)
        break
    }
  }

  private blip(freq: number, t: number, dur: number, type: OscillatorType, gain: number, lp = 6000) {
    const ctx = this.ctx!
    const osc = ctx.createOscillator()
    const g = ctx.createGain()
    const lpf = ctx.createBiquadFilter()
    lpf.type = 'lowpass'
    lpf.frequency.value = lp
    osc.type = type
    osc.frequency.value = freq
    g.gain.setValueAtTime(0.0001, t)
    g.gain.linearRampToValueAtTime(gain, t + 0.01)
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    osc.connect(lpf).connect(g).connect(this.sfxGain!)
    osc.start(t)
    osc.stop(t + dur + 0.03)
  }

  private arp(freqs: number[], t: number, step: number, gain: number) {
    freqs.forEach((f, i) => this.blip(f, t + i * step, step * 1.6, 'square', gain))
  }

  private sweep(t: number) {
    const ctx = this.ctx!
    const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.25), ctx.sampleRate)
    const data = buf.getChannelData(0)
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length)
    const src = ctx.createBufferSource()
    src.buffer = buf
    const g = ctx.createGain()
    g.gain.value = 0.14
    const bpf = ctx.createBiquadFilter()
    bpf.type = 'bandpass'
    bpf.frequency.setValueAtTime(400, t)
    bpf.frequency.exponentialRampToValueAtTime(3000, t + 0.25)
    src.connect(bpf).connect(g).connect(this.sfxGain!)
    src.start(t)
  }
}

export const audio = new AudioEngine()
