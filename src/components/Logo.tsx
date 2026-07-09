/** DojoBuro mark: a red Japanese temple gate (torii), like the one standing in
 *  the Forest Lake dojo, with the kawaii ascii face ◕‿◕ between its two pillars.
 *  Used in the top bar, the landing / guide nav, the footers, the support bot
 *  and anywhere the brand appears. */
export function Logo({ size = 34, className = '' }: { size?: number; className?: string; animated?: boolean }) {
  return (
    <span className={`logo-badge ${className}`} style={{ width: size, height: size }} aria-hidden>
      <svg viewBox="0 0 32 32" width={size} height={size}>
        {/* shimaki · thin top ridge, slightly the widest */}
        <rect x="2" y="4.4" width="28" height="1.9" rx="0.9" fill="#8f2418" />
        {/* kasagi · main top beam */}
        <rect x="3.2" y="6.1" width="25.6" height="2.5" rx="0.9" fill="#a02a1c" />
        {/* hashira · the two pillars */}
        <rect x="8" y="8.2" width="2.9" height="21.8" rx="0.3" fill="#c0392b" />
        <rect x="21.1" y="8.2" width="2.9" height="21.8" rx="0.3" fill="#c0392b" />
        {/* gakuzuka · short central strut */}
        <rect x="15" y="8.4" width="2" height="4.2" fill="#a02a1c" />
        {/* nuki · the tie beam across the pillars */}
        <rect x="6.4" y="12.2" width="19.2" height="2.3" rx="0.3" fill="#b5352a" />
        {/* the ascii face, sitting in the opening between the pillars */}
        <text x="16" y="23.6" textAnchor="middle" textLength="9.6" lengthAdjust="spacingAndGlyphs"
          fontFamily="'Silkscreen','Courier New',monospace" fontSize="7" fill="#3a140d">◕‿◕</text>
      </svg>
    </span>
  )
}
