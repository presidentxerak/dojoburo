/** DojoBuro mark: a black square base with the kawaii face (eyes + smile).
 *  Used in the top bar, the landing nav and anywhere the brand appears. */
export function Logo({ size = 34, className = '' }: { size?: number; className?: string }) {
  return (
    <span className={`logo-badge ${className}`} style={{ width: size, height: size }} aria-hidden>
      <svg viewBox="0 0 32 32" width={size * 0.72} height={size * 0.72}>
        <circle cx="11" cy="13" r="2.6" fill="currentColor" />
        <circle cx="21" cy="13" r="2.6" fill="currentColor" />
        <path d="M9.5 18.5 Q16 24 22.5 18.5" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      </svg>
    </span>
  )
}
