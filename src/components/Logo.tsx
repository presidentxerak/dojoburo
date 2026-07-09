/** DojoBuro mark: a friendly sky-blue circle with the kawaii ◕‿◕ face. Same
 *  face as the support bot. Used in the top bar, the landing / guide nav, the
 *  footers and anywhere the brand appears. */
export function Logo({ size = 34, className = '' }: { size?: number; className?: string; animated?: boolean }) {
  return (
    <span className={`logo-badge ${className}`} style={{ width: size, height: size }} aria-hidden>
      <svg viewBox="0 0 32 32" width={size} height={size}>
        {/* head · sky-blue circle */}
        <circle cx="16" cy="16" r="15" fill="#57c1f5" />
        {/* eyes */}
        <g fill="#0e3a54">
          <ellipse cx="11.2" cy="14.5" rx="2.5" ry="3.1" />
          <ellipse cx="20.8" cy="14.5" rx="2.5" ry="3.1" />
        </g>
        {/* highlights · the ◕ glint */}
        <circle cx="12.2" cy="13.2" r="0.85" fill="#eafaff" />
        <circle cx="21.8" cy="13.2" r="0.85" fill="#eafaff" />
        {/* smile */}
        <path d="M10.5 20.5 Q16 24.5 21.5 20.5" stroke="#0e3a54" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      </svg>
    </span>
  )
}
