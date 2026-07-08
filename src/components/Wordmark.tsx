/** The DojoBuro wordmark: "dojoburo" in lowercase Outfit Black, solid black.
 *  Identical on the landing and inside the office. Size is set by context. */
export function Wordmark({ className }: { className?: string }) {
  return <span className={`wordmark ${className ?? ''}`}>dojoburo</span>
}
