/** DojoBuro mark: the literal kawaii face ◕‿◕ rendered as text — no background
 *  square. Monochrome: a dark face in light mode, white in dark mode (colour is
 *  driven by CSS on .logo-badge so it flips with the theme). It gives a gentle
 *  blink on a loop. Used in the top bar, the landing / guide nav, the footers,
 *  the support bot and anywhere the brand appears. */
export function Logo({ size = 34, className = '' }: { size?: number; className?: string; animated?: boolean }) {
  return (
    <span className={`logo-badge ${className}`} style={{ fontSize: size }} aria-hidden>
      ◕‿◕
    </span>
  )
}
