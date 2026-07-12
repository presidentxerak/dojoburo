// ---------------------------------------------------------------------------
// Self-contained brand artwork for the 15 showcase company sites — no external
// assets (the CSP blocks them and stock photos wouldn't match fictional brands),
// so everything here is inline SVG + CSS motion: a bespoke hero illustration per
// company, an animated "product demo" that reads like a screen-recording, a line
// icon set, and a photo/gallery strip. All tinted from the brand palette.
// ---------------------------------------------------------------------------
import { coRevenue, coSales, type MockCo } from '../../data/showcase'

type Pal = { ac: string; ink: string; bg: string; soft: string }
const pal = (c: MockCo): Pal => ({ ac: c.theme.accent, ink: c.theme.ink, bg: c.theme.bg, soft: `color-mix(in srgb, ${c.theme.accent} 22%, ${c.theme.bg})` })

// ---- per-company hero illustration motifs -----------------------------------
// each returns SVG children drawn in a 0..120 box, themed by the palette.
const MOTIF: Record<string, (p: Pal) => JSX.Element> = {
  lumina: (p) => (<g>
    <circle cx="60" cy="52" r="30" fill={p.ac} opacity="0.18" />
    <circle cx="60" cy="48" r="16" fill={p.ac} />
    <path d="M32 92 q28-26 56 0 z" fill={p.ac} opacity="0.85" />
    <rect x="78" y="20" width="22" height="16" rx="3" fill={p.ink} /><circle cx="89" cy="28" r="5" fill={p.bg} /><rect x="94" y="16" width="7" height="4" rx="1" fill={p.ink} />
  </g>),
  cratebox: (p) => (<g>
    <path d="M30 46 h60 v40 h-60 z" fill={p.ac} opacity="0.2" /><path d="M30 46 l30-16 30 16 -30 12 z" fill={p.ac} />
    <rect x="40" y="54" width="14" height="14" rx="2" fill={p.ink} /><rect x="66" y="56" width="14" height="12" rx="2" fill={p.ink} opacity="0.6" />
    <circle cx="47" cy="34" r="6" fill={p.ink} /><circle cx="73" cy="34" r="6" fill={p.ink} opacity="0.6" />
  </g>),
  verdea: (p) => (<g>
    <path d="M46 88 h28 l-4 -22 h-20 z" fill={p.ink} opacity="0.85" />
    <path d="M60 66 q-24-4-24-30 q24 2 24 30" fill={p.ac} /><path d="M60 66 q24-8 22-34 q-22 4-22 34" fill={p.ac} opacity="0.7" />
    <line x1="60" y1="40" x2="60" y2="66" stroke={p.ink} strokeWidth="2" />
  </g>),
  nomadly: (p) => (<g>
    <circle cx="58" cy="54" r="30" fill={p.ac} opacity="0.16" /><circle cx="58" cy="54" r="30" fill="none" stroke={p.ac} strokeWidth="2" />
    <path d="M28 54 h60 M58 24 q18 30 0 60 M58 24 q-18 30 0 60" fill="none" stroke={p.ac} strokeWidth="1.5" opacity="0.7" />
    <path d="M80 30 l6 14 -14 -4 z" fill={p.ink} /><circle cx="58" cy="54" r="5" fill={p.ac} />
  </g>),
  pixelforge: (p) => (<g>
    {[0, 1, 2, 3].map((r) => [0, 1, 2, 3].map((c) => <rect key={`${r}${c}`} x={38 + c * 12} y={30 + r * 12} width="11" height="11" fill={(r + c) % 2 ? p.ac : p.ink} opacity={(r * 4 + c) % 3 ? 1 : 0.4} />))}
  </g>),
  brewly: (p) => (<g>
    <path d="M40 44 h34 v20 a17 17 0 0 1 -34 0 z" fill={p.ac} /><path d="M74 48 h8 a7 7 0 0 1 0 14 h-8" fill="none" stroke={p.ac} strokeWidth="3" />
    <path d="M50 30 q4 6 0 10 M60 28 q4 6 0 10 M70 30 q4 6 0 10" fill="none" stroke={p.ink} strokeWidth="2" opacity="0.6" />
    <rect x="36" y="82" width="42" height="6" rx="3" fill={p.ink} opacity="0.8" />
  </g>),
  sootheer: (p) => (<g>
    <path d="M78 30 a26 26 0 1 0 6 40 a20 20 0 0 1 -6 -40 z" fill={p.ac} />
    <circle cx="40" cy="34" r="2" fill={p.ink} /><circle cx="52" cy="26" r="1.6" fill={p.ink} /><circle cx="34" cy="50" r="1.6" fill={p.ink} />
    <path d="M28 82 q10-8 20 0 t20 0 t20 0" fill="none" stroke={p.ac} strokeWidth="2" opacity="0.6" />
  </g>),
  ledgerly: (p) => (<g>
    <rect x="40" y="26" width="40" height="60" rx="3" fill={p.bg} stroke={p.ac} strokeWidth="2" />
    {[38, 48, 58, 68].map((y) => <line key={y} x1="47" y1={y} x2="73" y2={y} stroke={p.ink} strokeWidth="2" opacity="0.5" />)}
    <circle cx="78" cy="80" r="12" fill={p.ac} /><text x="78" y="85" fontSize="13" fontWeight="800" fill={p.bg} textAnchor="middle">$</text>
  </g>),
  fitloop: (p) => (<g>
    <rect x="30" y="50" width="10" height="20" rx="3" fill={p.ink} /><rect x="80" y="50" width="10" height="20" rx="3" fill={p.ink} />
    <rect x="40" y="56" width="40" height="8" rx="4" fill={p.ac} /><rect x="24" y="54" width="8" height="12" rx="2" fill={p.ac} /><rect x="88" y="54" width="8" height="12" rx="2" fill={p.ac} />
    <path d="M60 20 a14 14 0 1 1 -0.1 0 M60 24 v10" fill="none" stroke={p.ac} strokeWidth="2.5" opacity="0.5" />
  </g>),
  petto: (p) => (<g>
    <path d="M60 84 C40 84 34 66 44 58 C52 52 68 52 76 58 C86 66 80 84 60 84 z" fill={p.ac} />
    <circle cx="44" cy="46" r="7" fill={p.ac} /><circle cx="60" cy="40" r="7" fill={p.ac} /><circle cx="76" cy="46" r="7" fill={p.ac} />
    <path d="M60 70 l-6-6 a4 4 0 0 1 6-4 a4 4 0 0 1 6 4 z" fill={p.bg} />
  </g>),
  draftly: (p) => (<g>
    <rect x="38" y="26" width="44" height="58" rx="3" fill={p.bg} stroke={p.ink} strokeWidth="2" opacity="0.85" />
    {[40, 50, 60].map((y) => <line key={y} x1="46" y1={y} x2="74" y2={y} stroke={p.ink} strokeWidth="2" opacity="0.35" />)}
    <path d="M70 78 l18-18 6 6 -18 18 -8 2 z" fill={p.ac} /><path d="M84 64 l6 6" stroke={p.bg} strokeWidth="1.5" />
  </g>),
  bloombox: (p) => (<g>
    {[[-16, 0], [16, 0], [0, -16], [0, 16]].map(([dx, dy], i) => <ellipse key={i} cx={60 + dx} cy={48 + dy} rx="10" ry="14" fill={p.ac} opacity="0.85" transform={`rotate(${i * 45} 60 48)`} />)}
    <circle cx="60" cy="48" r="8" fill={p.ink} />
    <path d="M60 56 q-8 20 -14 30 M60 56 q8 20 14 30" fill="none" stroke={p.ink} strokeWidth="2" opacity="0.5" />
  </g>),
  trailhead: (p) => (<g>
    <path d="M24 84 l24-40 16 24 8-14 24 30 z" fill={p.ac} /><path d="M48 44 l8 12 -14 6 z" fill={p.bg} opacity="0.7" />
    <circle cx="86" cy="30" r="8" fill={p.ac} opacity="0.7" />
    <path d="M30 84 q30-10 60 0" fill="none" stroke={p.ink} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
  </g>),
  cardexo: (p) => (<g>
    <rect x="34" y="40" width="52" height="34" rx="5" fill={p.ac} /><rect x="40" y="48" width="14" height="10" rx="2" fill={p.bg} opacity="0.8" /><line x1="40" y1="66" x2="80" y2="66" stroke={p.bg} strokeWidth="2" opacity="0.6" />
    <path d="M92 44 q8 8 0 26 M98 40 q12 12 0 34" fill="none" stroke={p.ink} strokeWidth="2" opacity="0.5" />
  </g>),
  munchkit: (p) => (<g>
    <ellipse cx="60" cy="60" rx="30" ry="10" fill={p.ink} opacity="0.15" /><path d="M32 56 a28 12 0 0 0 56 0 z" fill={p.ac} />
    <circle cx="50" cy="52" r="4" fill={p.bg} /><circle cx="64" cy="50" r="5" fill={p.bg} opacity="0.8" /><circle cx="74" cy="54" r="3" fill={p.bg} opacity="0.7" />
    <rect x="58" y="24" width="4" height="20" rx="2" fill={p.ink} opacity="0.6" />
  </g>),
}

/** A framed, brand-tinted hero illustration. Frame shape varies for variety. */
export function HeroArt({ c, frame = 'rounded' }: { c: MockCo; frame?: 'rounded' | 'circle' | 'blob' }) {
  const p = pal(c)
  const motif = MOTIF[c.id] || MOTIF.lumina
  const clip = frame === 'circle' ? 'cs-art--circle' : frame === 'blob' ? 'cs-art--blob' : 'cs-art--rounded'
  return (
    <div className={`cs-art ${clip}`} style={{ background: `radial-gradient(120% 120% at 30% 20%, ${p.soft}, ${p.bg})` }}>
      <svg viewBox="0 0 120 120" width="100%" height="100%" aria-hidden>
        <g opacity="0.5">{[20, 96].map((x) => <circle key={x} cx={x} cy={26} r="3" fill={p.ac} />)}</g>
        {motif(p)}
      </svg>
    </div>
  )
}

// ---- animated "product demo" · reads like a screen recording -----------------
export function DemoReel({ c }: { c: MockCo }) {
  const ac = c.theme.accent
  const bars = [46, 68, 34, 82, 58, 92, 64, 76]
  return (
    <div className="cs-reel">
      <div className="cs-reel-chrome"><span /><span /><span /><em>{c.handle.replace('@', '')}.co/app</em><span className="cs-reel-live">● REC</span></div>
      <div className="cs-reel-screen">
        <div className="cs-reel-side">
          <span className="cs-reel-logo" style={{ background: ac }} />
          {[0, 1, 2, 3].map((i) => <span key={i} className={`cs-reel-nav${i === 0 ? ' on' : ''}`} style={i === 0 ? { background: `color-mix(in srgb, ${ac} 18%, #fff)` } : undefined} />)}
        </div>
        <div className="cs-reel-main">
          <div className="cs-reel-tiles">
            {[coSales(c).toLocaleString('en-US'), '$' + coRevenue(c).toLocaleString('en-US'), '4.9★'].map((v, i) => (
              <div className="cs-reel-tile" key={i} style={{ animationDelay: `${i * 0.15}s` }}><b style={i === 1 ? { color: ac } : undefined}>{v}</b></div>
            ))}
          </div>
          <div className="cs-reel-chart">
            {bars.map((h, i) => <span key={i} style={{ ['--h' as any]: h + '%', background: i === 5 ? ac : `color-mix(in srgb, ${ac} 34%, #e3e7ee)`, animationDelay: `${i * 0.1}s` }} />)}
          </div>
          <span className="cs-reel-cursor" style={{ background: ac }} />
        </div>
      </div>
      <div className="cs-reel-bar"><span className="cs-reel-play" style={{ borderLeftColor: ac }} /><span className="cs-reel-track"><i style={{ background: ac }} /></span><em>0:14 / 0:30</em></div>
    </div>
  )
}

// ---- line-icon set for features ---------------------------------------------
const P = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
export const ICONS: Record<string, JSX.Element> = {
  spark: <svg viewBox="0 0 24 24" {...P}><path d="M12 3v6M12 15v6M3 12h6M15 12h6" /><circle cx="12" cy="12" r="2.5" /></svg>,
  shield: <svg viewBox="0 0 24 24" {...P}><path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z" /><path d="M9 12l2 2 4-4" /></svg>,
  bolt: <svg viewBox="0 0 24 24" {...P}><path d="M13 3L5 13h6l-1 8 8-11h-6z" /></svg>,
  heart: <svg viewBox="0 0 24 24" {...P}><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" /></svg>,
  chart: <svg viewBox="0 0 24 24" {...P}><path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-7" /></svg>,
  clock: <svg viewBox="0 0 24 24" {...P}><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></svg>,
  globe: <svg viewBox="0 0 24 24" {...P}><circle cx="12" cy="12" r="8" /><path d="M4 12h16M12 4c3 3 3 13 0 16M12 4c-3 3-3 13 0 16" /></svg>,
  sparkles: <svg viewBox="0 0 24 24" {...P}><path d="M12 4l1.5 4.5L18 10l-4.5 1.5L12 16l-1.5-4.5L6 10l4.5-1.5z" /><path d="M18 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" /></svg>,
}
const FEATURE_ICONS: Record<string, [string, string, string]> = {
  lumina: ['sparkles', 'bolt', 'shield'], cratebox: ['heart', 'spark', 'clock'], verdea: ['spark', 'clock', 'heart'],
  nomadly: ['globe', 'shield', 'bolt'], pixelforge: ['bolt', 'spark', 'shield'], brewly: ['heart', 'globe', 'clock'],
  sootheer: ['heart', 'clock', 'sparkles'], ledgerly: ['bolt', 'shield', 'chart'], fitloop: ['bolt', 'clock', 'chart'],
  petto: ['heart', 'clock', 'shield'], draftly: ['sparkles', 'bolt', 'spark'], bloombox: ['heart', 'clock', 'spark'],
  trailhead: ['globe', 'chart', 'bolt'], cardexo: ['bolt', 'chart', 'shield'], munchkit: ['clock', 'heart', 'spark'],
}
export const featureIcons = (id: string) => FEATURE_ICONS[id] || (['spark', 'bolt', 'shield'] as [string, string, string])

// ---- gallery / photo strip · SVG "photos" so the page feels image-rich -------
export function PhotoStrip({ c }: { c: MockCo }) {
  const p = pal(c)
  const motif = MOTIF[c.id] || MOTIF.lumina
  const tints = [0.9, 0.55, 0.3, 0.7]
  return (
    <div className="cs-gallery">
      {tints.map((o, i) => (
        <div className="cs-shot" key={i} style={{ background: `linear-gradient(150deg, color-mix(in srgb, ${p.ac} ${Math.round(o * 60)}%, ${p.bg}), ${p.bg})` }}>
          <svg viewBox="0 0 120 120" width="70%" height="70%" style={{ opacity: 0.9 }} aria-hidden><g transform="translate(6 6) scale(0.9)">{motif(p)}</g></svg>
        </div>
      ))}
    </div>
  )
}
