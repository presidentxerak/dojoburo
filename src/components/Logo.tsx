/** DojoBuro mark: the assistant's kawaii face · an apple-green rounded square
 *  (4px corners) with two glinting eyes and a smile that blinks and grins on a
 *  loop. Same face as the support bot. Used in the top bar, the landing nav, the
 *  footers and anywhere the brand appears. Set `animated={false}` for a still
 *  copy (e.g. tiny inline uses). */
export function Logo({ size = 34, className = '', animated = true }: { size?: number; className?: string; animated?: boolean }) {
  return (
    <span className={`logo-badge ${className}`} style={{ width: size, height: size }} aria-hidden>
      <svg viewBox="0 0 32 32" width={size} height={size}>
        {/* head · apple green square, 4px rounded corners */}
        <rect x="1" y="1" width="30" height="30" rx="4" fill="#7ed321" />
        {/* eyes */}
        <g fill="#123f14">
          <ellipse cx="11.2" cy="14" rx="2.5" ry="3.1">
            {animated && <animate attributeName="ry" values="3.1;3.1;3.1;0.4;3.1;3.1" keyTimes="0;0.85;0.9;0.93;0.965;1" dur="4.2s" repeatCount="indefinite" />}
          </ellipse>
          <ellipse cx="20.8" cy="14" rx="2.5" ry="3.1">
            {animated && <animate attributeName="ry" values="3.1;3.1;3.1;0.4;3.1;3.1" keyTimes="0;0.85;0.9;0.93;0.965;1" dur="4.2s" repeatCount="indefinite" />}
          </ellipse>
        </g>
        {/* highlights · the ◕ glint */}
        <circle cx="12.2" cy="12.7" r="0.85" fill="#eaffd0" />
        <circle cx="21.8" cy="12.7" r="0.85" fill="#eaffd0" />
        {/* smile · gently grins wider on a loop */}
        <path d="M10.5 20 Q16 24 21.5 20" stroke="#123f14" strokeWidth="2.2" fill="none" strokeLinecap="round">
          {animated && <animate attributeName="d" values="M10.5 20 Q16 24 21.5 20; M10.5 20 Q16 25.6 21.5 20; M10.5 20 Q16 24 21.5 20" dur="5.6s" repeatCount="indefinite" />}
        </path>
      </svg>
    </span>
  )
}
