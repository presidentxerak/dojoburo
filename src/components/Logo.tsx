/** DojoBuro mark: a minimalist Japanese temple silhouette (ombre chinoise) — one
 *  bold sweeping roof with upturned eaves over a solid hall (no door) on a plain
 *  base, with the ascii face ◕‿◕ on the hall. Solid black in light mode, inverted
 *  to white in dark mode; the face flips the opposite way so it always reads.
 *  Used in the top bar, landing/guide nav, footers, support bot — everywhere the
 *  brand appears. Kept simple so it stays legible at favicon size. */
export function Logo({ size = 34, className = '' }: { size?: number; className?: string; animated?: boolean }) {
  return (
    <span className={`logo-badge ${className}`} style={{ width: size, height: size }} aria-hidden>
      <svg className="lg-temple" viewBox="0 0 32 32" width={size} height={size}>
        {/* finial */}
        <circle cx="16" cy="4.2" r="1" />
        <rect x="15.4" y="4.6" width="1.2" height="2.6" />
        {/* one bold sweeping roof · upturned eaves */}
        <path d="M16 6.6 C 21 8 26.6 11.8 30 16.6 L 25.4 16.6 Q 16 12.4 6.6 16.6 L 2 16.6 C 5.4 11.8 11 8 16 6.6 Z" />
        {/* solid hall · the face sits here (no door) */}
        <rect x="8.6" y="16.6" width="14.8" height="9" rx="0.8" />
        {/* base platform */}
        <rect x="6" y="25.6" width="20" height="2.4" rx="0.8" />
      </svg>
      <span className="lg-face" style={{ fontSize: Math.round(size * 0.3) }}>◕‿◕</span>
    </span>
  )
}
