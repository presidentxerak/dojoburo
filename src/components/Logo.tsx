/** DojoBuro mark: a black computer terminal (4px rounded corners) with a glowing
 *  green face whose expressions animate — blinking eyes, a blinking prompt cursor
 *  and a gently grinning smile. Used in the top bar, the landing / guide nav, the
 *  footers, the support bot and anywhere the brand appears. */
export function Logo({ size = 34, className = '' }: { size?: number; className?: string; animated?: boolean }) {
  return (
    <span className={`logo-badge ${className}`} style={{ width: size, height: size }} aria-hidden>
      <svg viewBox="0 0 32 32" width={size} height={size}>
        {/* terminal · black screen, 4px rounded corners */}
        <rect x="1.5" y="3" width="29" height="26" rx="4" fill="#11151d" />
        <rect x="3" y="4.4" width="26" height="23.2" rx="2.6" fill="#0a0e14" />
        {/* prompt · >_ with a blinking cursor */}
        <path d="M5.6 8 l1.8 1.4 -1.8 1.4" stroke="#2f9d63" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="8.6" y="9.1" width="4" height="1.1" rx="0.55" fill="#2f9d63">
          <animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;0.45;0.5;0.95;1" dur="1.4s" repeatCount="indefinite" />
        </rect>
        {/* eyes · blink on a loop */}
        <g fill="#46e08a">
          <ellipse cx="11.5" cy="16.4" rx="2.5" ry="3.1">
            <animate attributeName="ry" values="3.1;3.1;3.1;0.4;3.1;3.1" keyTimes="0;0.82;0.88;0.92;0.96;1" dur="4.2s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="20.5" cy="16.4" rx="2.5" ry="3.1">
            <animate attributeName="ry" values="3.1;3.1;3.1;0.4;3.1;3.1" keyTimes="0;0.82;0.88;0.92;0.96;1" dur="4.2s" repeatCount="indefinite" />
          </ellipse>
        </g>
        <circle cx="12.4" cy="15.3" r="0.8" fill="#bafbd8" />
        <circle cx="21.4" cy="15.3" r="0.8" fill="#bafbd8" />
        {/* smile · grins a touch wider on a loop */}
        <path d="M10.8 21.6 Q16 24.8 21.2 21.6" stroke="#46e08a" strokeWidth="2.1" fill="none" strokeLinecap="round">
          <animate attributeName="d" values="M10.8 21.6 Q16 24.8 21.2 21.6; M10.8 21.6 Q16 26.4 21.2 21.6; M10.8 21.6 Q16 24.8 21.2 21.6" dur="5.6s" repeatCount="indefinite" />
        </path>
      </svg>
    </span>
  )
}
