/** DojoBuro mark: a black computer terminal (4px rounded corners) with a glowing
 *  green face. The eyes are two terminal arrows with a dash (>- and its mirror
 *  -<); the dashes blink like cursors and the mouth grins on a loop. Used in the
 *  top bar, the landing / guide nav, the footers, the support bot and anywhere
 *  the brand appears. */
export function Logo({ size = 34, className = '' }: { size?: number; className?: string; animated?: boolean }) {
  return (
    <span className={`logo-badge ${className}`} style={{ width: size, height: size }} aria-hidden>
      <svg viewBox="0 0 32 32" width={size} height={size}>
        {/* terminal · black screen, 4px rounded corners */}
        <rect x="1.5" y="3" width="29" height="26" rx="4" fill="#11151d" />
        <rect x="3" y="4.4" width="26" height="23.2" rx="2.6" fill="#0a0e14" />
        {/* eyes · two terminal arrows with a dash ( >-   -< ) */}
        <g stroke="#46e08a" strokeWidth="1.9" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.8 13.8 L12 16 L9.8 18.2" />
          <path d="M12.7 16 L14.4 16">
            <animate attributeName="opacity" values="1;1;0;1" keyTimes="0;0.62;0.76;1" dur="2.2s" repeatCount="indefinite" />
          </path>
          <path d="M22.2 13.8 L20 16 L22.2 18.2" />
          <path d="M19.3 16 L17.6 16">
            <animate attributeName="opacity" values="1;1;0;1" keyTimes="0;0.62;0.76;1" dur="2.2s" repeatCount="indefinite" />
          </path>
        </g>
        {/* smile · grins a touch wider on a loop */}
        <path d="M10.8 21.6 Q16 24.8 21.2 21.6" stroke="#46e08a" strokeWidth="2.1" fill="none" strokeLinecap="round">
          <animate attributeName="d" values="M10.8 21.6 Q16 24.8 21.2 21.6; M10.8 21.6 Q16 26.4 21.2 21.6; M10.8 21.6 Q16 24.8 21.2 21.6" dur="5.6s" repeatCount="indefinite" />
        </path>
      </svg>
    </span>
  )
}
