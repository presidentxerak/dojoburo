/** DojoBuro mark: a rounded-square kawaii face with glinting ◕‿◕ eyes and a
 *  smile. Monochrome — dark on light, inverted to white in dark mode (colours
 *  driven by CSS on .lg-shape / .lg-face / .lg-smile so it flips with the theme).
 *  Its eyes blink and the smile grins on a loop. Used in the top bar, the landing
 *  / guide nav, the footers, the support bot and anywhere the brand appears. */
export function Logo({ size = 34, className = '' }: { size?: number; className?: string; animated?: boolean }) {
  const blink = <animate attributeName="ry" values="3.1;3.1;3.1;0.4;3.1;3.1" keyTimes="0;0.82;0.88;0.92;0.96;1" dur="4.2s" repeatCount="indefinite" />
  const glintBlink = <animate attributeName="opacity" values="1;1;1;0;1;1" keyTimes="0;0.82;0.88;0.92;0.96;1" dur="4.2s" repeatCount="indefinite" />
  return (
    <span className={`logo-badge ${className}`} style={{ width: size, height: size }} aria-hidden>
      <svg viewBox="0 0 32 32" width={size} height={size}>
        {/* head · rounded square (colour set in CSS, inverts in dark mode) */}
        <rect className="lg-shape" x="1.5" y="2" width="29" height="28" rx="4" />
        {/* eyes */}
        <ellipse className="lg-face" cx="11.2" cy="15" rx="2.7" ry="3.1">{blink}</ellipse>
        <ellipse className="lg-face" cx="20.8" cy="15" rx="2.7" ry="3.1">{blink}</ellipse>
        {/* glints · same colour as the head so they read as cut-outs and invert too */}
        <circle className="lg-shape" cx="12.3" cy="13.9" r="1">{glintBlink}</circle>
        <circle className="lg-shape" cx="21.9" cy="13.9" r="1">{glintBlink}</circle>
        {/* smile */}
        <path className="lg-smile" d="M10.6 20.6 Q16 24.8 21.4 20.6" fill="none" strokeWidth="2.1" strokeLinecap="round">
          <animate attributeName="d" values="M10.6 20.6 Q16 24.8 21.4 20.6; M10.6 20.6 Q16 26 21.4 20.6; M10.6 20.6 Q16 24.8 21.4 20.6" dur="5.6s" repeatCount="indefinite" />
        </path>
      </svg>
    </span>
  )
}
