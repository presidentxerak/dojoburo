/** DojoBuro mark: a friendly yellow circle with the kawaii ◕‿◕ face. Same face
 *  as the support bot. Used in the top bar, the landing / guide nav, the footers
 *  and anywhere the brand appears. */
export function Logo({ size = 34, className = '' }: { size?: number; className?: string; animated?: boolean }) {
  return (
    <span className={`logo-badge ${className}`} style={{ width: size, height: size }} aria-hidden>
      <svg viewBox="0 0 32 32" width={size} height={size}>
        {/* head · yellow circle */}
        <circle cx="16" cy="16" r="15" fill="#ffc61a" />
        {/* eyes */}
        <g fill="#4a3600">
          <ellipse cx="11.2" cy="14.5" rx="2.5" ry="3.1" />
          <ellipse cx="20.8" cy="14.5" rx="2.5" ry="3.1" />
        </g>
        {/* highlights · the ◕ glint */}
        <circle cx="12.2" cy="13.2" r="0.85" fill="#fff6cf" />
        <circle cx="21.8" cy="13.2" r="0.85" fill="#fff6cf" />
        {/* smile */}
        <path d="M10.5 20.5 Q16 24.5 21.5 20.5" stroke="#4a3600" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      </svg>
    </span>
  )
}
