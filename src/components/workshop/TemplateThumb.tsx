// Dojo template preview. Prefers a REAL 3D render of the environment
// (public/thumbs/<id>.jpg, captured from the actual scene) and falls back to a
// flat SVG cross-section drawn from the template's palette if the image is missing.
import { useState } from 'react'
import type { DojoTemplate } from '../../data/templates'

export function TemplateThumb({ t }: { t: DojoTemplate }) {
  const [failed, setFailed] = useState(false)
  if (!failed) {
    return <img className="ws-thumb-img" src={`/thumbs/${t.id}.jpg`} alt={`${t.label} preview`} loading="lazy" decoding="async" onError={() => setFailed(true)} />
  }
  return <ThumbSVG t={t} />
}

function ThumbSVG({ t }: { t: DojoTemplate }) {
  const p = t.palette
  return (
    <svg className="ws-thumb" viewBox="0 0 120 74" width="100%" preserveAspectRatio="xMidYMid slice" aria-hidden>
      {/* sky / room background */}
      <rect x="0" y="0" width="120" height="74" fill={p.bg} />
      {/* back wall band */}
      <rect x="0" y="0" width="120" height="48" fill={p.wallBack} />
      {/* floor */}
      <rect x="0" y="48" width="120" height="26" fill={p.ground} />
      <line x1="0" y1="48" x2="120" y2="48" stroke={p.grid} strokeWidth="1.5" />
      <Motif id={t.id} p={p} />
    </svg>
  )
}

function Motif({ id, p }: { id: string; p: DojoTemplate['palette'] }) {
  const a = p.accent
  const tr = p.trim
  switch (id) {
    case 'startup': // whiteboard + desk
      return (
        <g>
          <rect x="40" y="12" width="40" height="24" rx="2" fill="#ffffff" stroke={tr} strokeWidth="2" />
          <rect x="45" y="17" width="8" height="6" rx="1" fill={a} />
          <rect x="57" y="19" width="8" height="6" rx="1" fill="#ffcf3b" />
          <rect x="67" y="16" width="8" height="6" rx="1" fill="#4fc3f7" />
          <rect x="34" y="52" width="52" height="5" rx="1.5" fill={a} />
          <rect x="38" y="57" width="4" height="10" fill={tr} />
          <rect x="78" y="57" width="4" height="10" fill={tr} />
        </g>
      )
    case 'dojo': // torii gate + cherry blob
      return (
        <g>
          <circle cx="26" cy="26" r="11" fill={a} opacity="0.9" />
          <rect x="46" y="18" width="4" height="30" fill={tr} />
          <rect x="70" y="18" width="4" height="30" fill={tr} />
          <rect x="40" y="16" width="40" height="5" rx="1" fill={tr} />
          <rect x="43" y="23" width="34" height="3.5" fill={tr} />
        </g>
      )
    case 'space': // planet + stars
      return (
        <g>
          <circle cx="60" cy="26" r="14" fill={a} />
          <ellipse cx="60" cy="26" rx="20" ry="5" fill="none" stroke={tr} strokeWidth="2" opacity="0.8" />
          {[[18, 12], [34, 20], [92, 14], [104, 30], [80, 8], [24, 34]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i % 2 ? 1.6 : 1} fill="#eaf6ff" />
          ))}
        </g>
      )
    case 'lab': // flask with liquid
      return (
        <g>
          <path d="M52 14 L52 26 L42 44 L78 44 L68 26 L68 14 Z" fill="#eef7fa" stroke={tr} strokeWidth="2" />
          <path d="M47 36 L73 36 L78 44 L42 44 Z" fill={a} />
          <rect x="50" y="11" width="20" height="4" rx="1.5" fill={tr} />
          <circle cx="56" cy="31" r="1.6" fill="#ffffff" />
          <circle cx="64" cy="34" r="1.3" fill="#ffffff" />
        </g>
      )
    case 'villa': // sun + palm + pool
      return (
        <g>
          <circle cx="60" cy="24" r="12" fill="#ff9a52" />
          <rect x="20" y="52" width="80" height="16" rx="3" fill={a} opacity="0.85" />
          <rect x="94" y="24" width="3" height="26" fill="#b98a58" />
          {[-1, -0.4, 0.4, 1].map((d, i) => (
            <ellipse key={i} cx={95.5 + d * 8} cy={24 + Math.abs(d) * 3} rx="8" ry="2.4" fill="#4f9e52" transform={`rotate(${d * 30} ${95.5} 24)`} />
          ))}
        </g>
      )
    case 'castle': // tower + banner
      return (
        <g>
          <rect x="44" y="16" width="32" height="32" fill={p.wallSide} stroke={tr} strokeWidth="1.5" />
          {[44, 52, 60, 68].map((x) => <rect key={x} x={x} y="12" width="6" height="6" fill={p.wallSide} stroke={tr} strokeWidth="1" />)}
          <rect x="56" y="22" width="8" height="14" rx="4" fill={p.bg} />
          <rect x="30" y="18" width="8" height="22" fill={a} />
          <path d="M30 40 L34 44 L38 40 Z" fill={a} />
        </g>
      )
    case 'garden': // flower + arch
      return (
        <g>
          <path d="M34 46 Q60 14 86 46" fill="none" stroke={tr} strokeWidth="3" />
          {[36, 48, 60, 72, 84].map((x, i) => <circle key={x} cx={x} cy={46 - Math.round(Math.sin((i / 4) * Math.PI) * 22)} r="4" fill={a} />)}
          <g transform="translate(24,34)">
            {[0, 72, 144, 216, 288].map((deg) => <circle key={deg} cx={Math.cos((deg * Math.PI) / 180) * 5} cy={Math.sin((deg * Math.PI) / 180) * 5} r="3.4" fill={a} />)}
            <circle cx="0" cy="0" r="2.6" fill="#ffcf3b" />
          </g>
        </g>
      )
    case 'factory': // gear + smokestack
      return (
        <g>
          <g transform="translate(58,26)" fill={a}>
            {Array.from({ length: 8 }).map((_, i) => {
              const ang = (i / 8) * Math.PI * 2
              return <rect key={i} x={-2.5} y={-16} width="5" height="6" transform={`rotate(${(ang * 180) / Math.PI})`} />
            })}
            <circle r="11" />
            <circle r="4" fill={p.wallBack} />
          </g>
          <rect x="86" y="20" width="9" height="28" fill={tr} />
          <rect x="84" y="17" width="13" height="4" fill={tr} />
        </g>
      )
    default:
      return <circle cx="60" cy="28" r="12" fill={a} />
  }
}
