/** DojoBuro mark: a Japanese pagoda-temple silhouette (ombre chinoise) with the
 *  ascii face ◕‿◕ on its main hall. The temple is a solid black silhouette in
 *  light mode and inverts to white in dark mode; the face flips the opposite way
 *  so it always reads. Used in the top bar, the landing / guide nav, the footers,
 *  the support bot and anywhere the brand appears. */
export function Logo({ size = 34, className = '' }: { size?: number; className?: string; animated?: boolean }) {
  return (
    <span className={`logo-badge ${className}`} style={{ width: size, height: size }} aria-hidden>
      <svg className="lg-temple" viewBox="0 0 32 32" width={size} height={size}>
        {/* finial */}
        <rect x="15.4" y="2.6" width="1.2" height="2.9" />
        <circle cx="16" cy="2.4" r="0.85" />
        {/* top tier */}
        <path d="M12.4 6.4 L19.6 6.4 L21.6 8.8 Q16 9.7 10.4 8.8 Z" />
        <rect x="14" y="8.4" width="4" height="2.4" />
        {/* middle tier */}
        <path d="M10 10.6 L22 10.6 L24.4 13.4 Q16 14.5 7.6 13.4 Z" />
        <rect x="12.5" y="13" width="7" height="2.6" />
        {/* lower roof · widest, upturned eaves */}
        <path d="M7.5 15.4 L24.5 15.4 L27.6 18.7 Q16 20.1 4.4 18.7 Z" />
        {/* main hall (the face sits here) + base + steps */}
        <rect x="7" y="18.2" width="18" height="8.4" rx="0.8" />
        <rect x="4.5" y="26" width="23" height="2.8" rx="0.6" />
        <rect x="9.5" y="28.4" width="13" height="1.4" />
      </svg>
      <span className="lg-face" style={{ fontSize: Math.round(size * 0.3) }}>◕‿◕</span>
    </span>
  )
}
