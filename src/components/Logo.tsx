/** DojoBuro mark: a Japanese temple silhouette (ombre chinoise) — a broad
 *  sweeping roof with upturned eaves over a hall standing on two columns — with
 *  the ascii face ◕‿◕ on the hall. Solid black in light mode, inverted to white
 *  in dark mode; the face flips the opposite way so it always reads. Used in the
 *  top bar, the landing / guide nav, footers, the support bot and everywhere the
 *  brand appears. */
export function Logo({ size = 34, className = '' }: { size?: number; className?: string; animated?: boolean }) {
  return (
    <span className={`logo-badge ${className}`} style={{ width: size, height: size }} aria-hidden>
      <svg className="lg-temple" viewBox="0 0 32 32" width={size} height={size}>
        {/* finial */}
        <circle cx="16" cy="3.4" r="0.9" />
        <rect x="15.5" y="3.6" width="1" height="1.8" />
        {/* upper ridge roof */}
        <path d="M10.6 8.4 Q11.8 5.6 16 5.9 Q20.2 5.6 21.4 8.4 Q16 7.5 10.6 8.4 Z" />
        <rect x="10.2" y="8.2" width="11.6" height="1.4" />
        {/* main sweeping roof · upturned eaves */}
        <path d="M2 14.6 Q3.6 12.4 6.2 12.9 L7.4 10.8 L24.6 10.8 L25.8 12.9 Q28.4 12.4 30 14.6 L27.4 14 Q16 12.4 4.6 14 Z" />
        {/* hall (the face sits here) */}
        <rect x="8" y="14" width="16" height="8" rx="0.6" />
        {/* two columns with a doorway gap */}
        <rect x="8.4" y="22" width="4" height="6" />
        <rect x="19.6" y="22" width="4" height="6" />
        {/* base + steps */}
        <rect x="6" y="27.6" width="20" height="2" rx="0.5" />
        <rect x="8.5" y="29.4" width="15" height="1.1" />
      </svg>
      <span className="lg-face" style={{ fontSize: Math.round(size * 0.28) }}>◕‿◕</span>
    </span>
  )
}
