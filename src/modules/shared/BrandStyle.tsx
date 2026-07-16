// Shared brand-style controls · one identical typography + colour UI used by the
// Branding studio AND the Website studio. Both operate on the SAME Brand Kit
// (Google-font families + 5-colour palette), so a choice made in one studio
// propagates to the others (Website, Marketing) the next time they read the kit.
//
// These components are presentation-only: they take a value + change callbacks
// and never touch storage themselves — the host studio persists to the kit.
import { useEffect, useMemo, useState } from 'react'
import type { Palette } from '../../lib/brand'
import { GOOGLE_FONTS, loadGoogleFonts, googleFontsHref, type GFont } from '../../lib/site'
import { PRESET_PALETTES, randomPalette, kitToPalette, textOn } from '../../lib/palettes'

// Real Google-font pairings (both families exist on Google Fonts, so they load
// and export cleanly everywhere). A pairing simply sets heading + body.
export const FONT_PAIRINGS: { label: string; heading: string; body: string }[] = [
  { label: 'Modern', heading: 'Outfit', body: 'Inter' },
  { label: 'Editorial', heading: 'Playfair Display', body: 'Inter' },
  { label: 'Grotesque', heading: 'Space Grotesk', body: 'Inter' },
  { label: 'Classic', heading: 'Lora', body: 'Lora' },
  { label: 'Geometric', heading: 'Poppins', body: 'Poppins' },
  { label: 'Technical', heading: 'Space Mono', body: 'Inter' },
]

/** Inject a <link> that loads the given Google font families into the app doc so
 *  the pickers and previews render them. Idempotent per family set. */
function useGoogleFontLink(families: string[]) {
  const key = families.filter(Boolean).sort().join('|')
  useEffect(() => {
    const fams = key.split('|').filter(Boolean)
    if (!fams.length) return
    const href = googleFontsHref(fams)
    if (!href) return
    const id = 'bs-font-' + btoa(unescape(encodeURIComponent(key))).replace(/[^a-z0-9]/gi, '').slice(0, 24)
    if (document.getElementById(id)) return
    const link = document.createElement('link')
    link.id = id; link.rel = 'stylesheet'; link.href = href
    document.head.appendChild(link)
  }, [key])
}

// ---------------------------------------------------------------------------
// Typography · quick pairings + Google-font search for heading & body
// ---------------------------------------------------------------------------
export function BrandTypography({
  heading, body, sample, onHeading, onBody, onPreset,
}: {
  heading?: string
  body?: string
  sample: string
  onHeading: (name: string) => void
  onBody: (name: string) => void
  onPreset: (heading: string, body: string) => void
}) {
  const [catalogue, setCatalogue] = useState<GFont[]>(GOOGLE_FONTS)
  const [query, setQuery] = useState('')
  const [target, setTarget] = useState<'heading' | 'body'>('heading')
  useEffect(() => { let live = true; void loadGoogleFonts().then((f) => { if (live) setCatalogue(f) }); return () => { live = false } }, [])

  const matches = useMemo(
    () => catalogue.filter((f) => f.name.toLowerCase().includes(query.trim().toLowerCase())),
    [catalogue, query],
  )
  const list = matches.slice(0, 120)
  // load the two chosen fonts + the visible slice so previews render live
  useGoogleFontLink([heading || '', body || '', ...list.slice(0, 40).map((f) => f.name)])

  const headFam = heading ? `"${heading}"` : 'inherit'
  const bodyFam = body ? `"${body}"` : 'inherit'

  return (
    <div className="bs-type">
      <div className="sq-eyebrow">Quick pairings</div>
      <div className="ty-fonts">
        {FONT_PAIRINGS.map((p) => {
          const on = heading === p.heading && body === p.body
          return (
            <button key={p.label} className={`ty-font${on ? ' on' : ''}`} onClick={() => onPreset(p.heading, p.body)}>
              <span className="ty-font-h" style={{ fontFamily: `"${p.heading}"` }}>{sample || 'Your brand'}</span>
              <span className="ty-font-b" style={{ fontFamily: `"${p.body}"` }}>{p.label}</span>
            </button>
          )
        })}
      </div>

      <div className="sq-eyebrow" style={{ marginTop: 12 }}>Google Fonts</div>
      <div className="ty-current">
        <button className={`ty-slot${target === 'heading' ? ' on' : ''}`} onClick={() => setTarget('heading')}>
          <em>Headings</em><b style={{ fontFamily: headFam }}>{heading || 'Preset'}</b>
        </button>
        <button className={`ty-slot${target === 'body' ? ' on' : ''}`} onClick={() => setTarget('body')}>
          <em>Body</em><b style={{ fontFamily: bodyFam }}>{body || 'Preset'}</b>
        </button>
      </div>
      <input className="ty-search" value={query} placeholder={`Search all ${catalogue.length} Google Fonts for ${target}…`} onChange={(e) => setQuery(e.target.value)} />
      <div className="ty-fontlist">
        {list.map((f) => {
          const active = (target === 'heading' ? heading : body) === f.name
          return (
            <button key={f.name} className={`ty-fontitem${active ? ' on' : ''}`} onClick={() => (target === 'heading' ? onHeading(f.name) : onBody(f.name))}>
              <span style={{ fontFamily: `"${f.name}"` }}>{f.name}</span><em>{f.cat}</em>
            </button>
          )
        })}
        {!list.length && <p className="muted small">No font matches “{query}”.</p>}
        {matches.length > list.length && <p className="muted small">Showing {list.length} of {matches.length} matches · keep typing to narrow down.</p>}
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Colours · Coolors-style generator (lock + hex edit) + trending presets
// ---------------------------------------------------------------------------
export function BrandColours({ palette, onApply }: { palette: Palette; onApply: (p: string[]) => void }) {
  const [gen, setGen] = useState<string[]>(() => kitToPalette(palette))
  const [locks, setLocks] = useState<boolean[]>([false, false, false, false, false])
  // re-seed the swatches whenever the kit palette changes from outside
  const seed = kitToPalette(palette).join(',')
  useEffect(() => { setGen(kitToPalette(palette)) /* eslint-disable-next-line */ }, [seed])

  const toggleLock = (i: number) => setLocks((l) => l.map((v, j) => (j === i ? !v : v)))
  const setSwatch = (i: number, v: string) => setGen((cur) => cur.map((c, j) => (j === i ? v : c)))
  const shuffle = () => setGen((cur) => randomPalette(locks.map((l, i) => (l ? cur[i] || null : null))))

  // spacebar = generate (Coolors-style), while not typing in a field
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement
      if (e.code === 'Space' && !/input|textarea/i.test(t?.tagName || '')) { e.preventDefault(); shuffle() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locks])

  return (
    <div className="cw-panel">
      <div className="cw-head">
        <div><h4>Colour palette</h4><p>Generate a scheme (or press <kbd>space</kbd>), lock the ones you love, or pick a trending palette. It re-themes your brand, site &amp; marketing.</p></div>
      </div>
      <div className="cw-gen">
        {gen.map((c, i) => (
          <div key={i} className="cw-swatch" style={{ background: c, color: textOn(c) }}>
            <button className={`cw-lock${locks[i] ? ' on' : ''}`} onClick={() => toggleLock(i)} title={locks[i] ? 'Unlock' : 'Lock'}>{locks[i] ? '🔒' : '🔓'}</button>
            <input className="cw-hex" value={c.toUpperCase()} onChange={(e) => { const v = e.target.value; if (/^#?[0-9a-fA-F]{0,6}$/.test(v)) setSwatch(i, v.startsWith('#') ? v : '#' + v) }} />
          </div>
        ))}
      </div>
      <div className="cw-actions">
        <button className="btn tiny" onClick={shuffle}>⟳ Generate</button>
        <button className="btn primary tiny" onClick={() => onApply(gen)}>Apply palette</button>
      </div>
      <div className="cw-presets-h">Trending palettes</div>
      <div className="cw-presets">
        {PRESET_PALETTES.map((p) => (
          <button key={p.name} className="cw-preset" title={p.name} onClick={() => { setGen(p.colors); onApply(p.colors) }}>
            <span className="cw-preset-strip">{p.colors.map((c, i) => <span key={i} style={{ background: c }} />)}</span>
            <span className="cw-preset-n">{p.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
