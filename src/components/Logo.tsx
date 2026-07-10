/** DojoBuro mark: a rounded-square kawaii face. Monochrome — dark on light,
 *  inverted to white in dark mode (colours driven by CSS on .lg-shape / .lg-face
 *  so it flips with the theme). Its eyes blink on a loop. Used in the top bar,
 *  the landing / guide nav, the footers, the support bot and anywhere the brand
 *  appears. */
export function Logo({ size = 34, className = '' }: { size?: number; className?: string; animated?: boolean }) {
  return (
    <span className={`logo-badge ${className}`} style={{ width: size, height: size }} aria-hidden>
      <svg viewBox="0 0 32 32" width={size} height={size}>
        {/* head · rounded square (colour set in CSS, inverts in dark mode) */}
        <rect className="lg-shape" x="1.5" y="2" width="29" height="28" rx="4" />
        {/* face · eyes + smile (colour set in CSS) */}
        <g className="lg-face">
          <ellipse cx="11.5" cy="15" rx="2.5" ry="2.9">
            <animate attributeName="ry" values="2.9;2.9;2.9;0.4;2.9;2.9" keyTimes="0;0.82;0.88;0.92;0.96;1" dur="4.2s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="20.5" cy="15" rx="2.5" ry="2.9">
            <animate attributeName="ry" values="2.9;2.9;2.9;0.4;2.9;2.9" keyTimes="0;0.82;0.88;0.92;0.96;1" dur="4.2s" repeatCount="indefinite" />
          </ellipse>
          <path className="lg-smile" d="M10.8 20.4 Q16 24.4 21.2 20.4" fill="none" strokeWidth="2.1" strokeLinecap="round">
            <animate attributeName="d" values="M10.8 20.4 Q16 24.4 21.2 20.4; M10.8 20.4 Q16 25.6 21.2 20.4; M10.8 20.4 Q16 24.4 21.2 20.4" dur="5.6s" repeatCount="indefinite" />
          </path>
        </g>
      </svg>
    </span>
  )
}
