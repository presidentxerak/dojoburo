/** The DojoBuro wordmark, identical on the landing and inside the office:
 *  "Dojo" in Outfit Black + "buro" in Silkscreen regular, magenta. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`wordmark ${className ?? ''}`}>
      <span className="wm-dojo">Dojo</span><span className="wm-buro">buro</span>
    </span>
  )
}
