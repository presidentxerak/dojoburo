/** DojoBuro mark: the ascii face ◕‿◕ set inside a black rounded rectangle — a
 *  little terminal badge. The rectangle stays black and the face white in both
 *  light and dark mode; the face blinks gently on a loop. Used in the top bar,
 *  the landing / guide nav, the footers, the support bot and anywhere the brand
 *  appears. */
export function Logo({ size = 34, className = '' }: { size?: number; className?: string; animated?: boolean }) {
  return (
    <span className={`logo-badge ${className}`} style={{ fontSize: Math.round(size * 0.58) }} aria-hidden>
      <span className="lg-face">◕‿◕</span>
    </span>
  )
}
