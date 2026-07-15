// Tiny dependency-free SVG charts for the SEO / growth studios.
// All pure presentational · they take numbers and render inline SVG.

export function Spark({ data, color = 'var(--dc)', w = 120, h = 34, fill = false }: { data: number[]; color?: string; w?: number; h?: number; fill?: boolean }) {
  if (!data.length) return null
  const max = Math.max(...data, 1), min = Math.min(...data, 0)
  const rng = max - min || 1
  const pts = data.map((v, i) => [(i / (data.length - 1)) * w, h - ((v - min) / rng) * (h - 4) - 2])
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ')
  return (
    <svg className="se-spark" viewBox={`0 0 ${w} ${h}`} width={w} height={h} preserveAspectRatio="none">
      {fill && <path d={`${d} L${w} ${h} L0 ${h} Z`} fill={color} opacity={0.12} />}
      <path d={d} fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function AreaChart({ data, labels, color = 'var(--dc)', height = 160 }: { data: number[]; labels?: string[]; color?: string; height?: number }) {
  const w = 640, h = height, pad = 6
  if (!data.length) return null
  const max = Math.max(...data, 1), min = Math.min(...data, 0)
  const rng = max - min || 1
  const x = (i: number) => (i / (data.length - 1)) * (w - pad * 2) + pad
  const y = (v: number) => h - 20 - ((v - min) / rng) * (h - 30)
  const line = data.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ')
  return (
    <svg className="se-area" viewBox={`0 0 ${w} ${h}`} width="100%" height={h} preserveAspectRatio="none">
      {[0.25, 0.5, 0.75].map((g) => <line key={g} x1={pad} x2={w - pad} y1={20 + g * (h - 40)} y2={20 + g * (h - 40)} stroke="var(--border)" strokeWidth={1} />)}
      <path d={`${line} L${x(data.length - 1)} ${h - 20} L${x(0)} ${h - 20} Z`} fill={color} opacity={0.12} />
      <path d={line} fill="none" stroke={color} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
      {data.map((v, i) => <circle key={i} cx={x(i)} cy={y(v)} r={2.4} fill={color} />)}
      {labels && labels.map((l, i) => (i % Math.ceil(labels.length / 6) === 0 || i === labels.length - 1)
        ? <text key={i} x={x(i)} y={h - 5} fontSize={11} fill="var(--muted)" textAnchor="middle">{l}</text> : null)}
    </svg>
  )
}

export function Bars({ items, height = 150, format }: { items: { label: string; value: number; color?: string }[]; height?: number; format?: (n: number) => string }) {
  const max = Math.max(...items.map((i) => i.value), 1)
  const w = 640, bw = (w - 20) / items.length
  return (
    <svg className="se-bars" viewBox={`0 0 ${w} ${height}`} width="100%" height={height} preserveAspectRatio="none">
      {items.map((it, i) => {
        const bh = (it.value / max) * (height - 34)
        return (
          <g key={i}>
            <rect x={i * bw + 12 + bw * 0.15} y={height - 24 - bh} width={bw * 0.7} height={Math.max(0, bh)} rx={2} fill={it.color || 'var(--dc)'} />
            <text x={i * bw + 12 + bw * 0.5} y={height - 24 - bh - 4} fontSize={11} fill="var(--muted)" textAnchor="middle">{format ? format(it.value) : it.value}</text>
            <text x={i * bw + 12 + bw * 0.5} y={height - 8} fontSize={11} fill="var(--muted)" textAnchor="middle">{it.label}</text>
          </g>
        )
      })}
    </svg>
  )
}

export function Donut({ segments, size = 150, thickness = 22, center }: { segments: { label: string; value: number; color: string }[]; size?: number; thickness?: number; center?: React.ReactNode }) {
  const total = segments.reduce((s, x) => s + x.value, 0) || 1
  const r = (size - thickness) / 2, cx = size / 2, cy = size / 2, circ = 2 * Math.PI * r
  let acc = 0
  return (
    <div className="se-donut-wrap" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--border)" strokeWidth={thickness} />
        {segments.map((s, i) => {
          const frac = s.value / total, dash = frac * circ
          const el = <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={s.color} strokeWidth={thickness}
            strokeDasharray={`${dash} ${circ - dash}`} strokeDashoffset={-acc * circ} transform={`rotate(-90 ${cx} ${cy})`} />
          acc += frac
          return el
        })}
      </svg>
      {center && <div className="se-donut-c">{center}</div>}
    </div>
  )
}

/** Circular score ring 0..100 with a colour derived from the value. */
export function ScoreRing({ value, size = 120, label }: { value: number; size?: number; label?: string }) {
  const thickness = size * 0.1, r = (size - thickness) / 2, cx = size / 2, circ = 2 * Math.PI * r
  const color = value >= 80 ? '#1fa563' : value >= 60 ? '#d9a017' : value >= 40 ? '#e0722e' : '#c0392b'
  const dash = (value / 100) * circ
  return (
    <div className="se-ring" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
        <circle cx={cx} cy={cx} r={r} fill="none" stroke="var(--border)" strokeWidth={thickness} />
        <circle cx={cx} cy={cx} r={r} fill="none" stroke={color} strokeWidth={thickness} strokeLinecap="round"
          strokeDasharray={`${dash} ${circ - dash}`} transform={`rotate(-90 ${cx} ${cx})`} />
      </svg>
      <div className="se-ring-c"><b style={{ color }}>{value}</b>{label && <span>{label}</span>}</div>
    </div>
  )
}
