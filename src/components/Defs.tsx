// Shared SVG defs: a 1-bit dither pattern (classic Mac 50% gray) and a
// monochrome/posterize filter used to force existing decor art to black & white.
export function Defs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden focusable="false">
      <defs>
        <pattern id="dith" width="0.7" height="0.7" patternUnits="userSpaceOnUse">
          <rect width="0.7" height="0.7" fill="#fff" />
          <rect width="0.35" height="0.35" fill="#000" />
          <rect x="0.35" y="0.35" width="0.35" height="0.35" fill="#000" />
        </pattern>
        <pattern id="dithPx" width="4" height="4" patternUnits="userSpaceOnUse">
          <rect width="4" height="4" fill="#fff" />
          <rect width="2" height="2" fill="#000" />
          <rect x="2" y="2" width="2" height="2" fill="#000" />
        </pattern>
        {/* grayscale + 3-level posterize → black / gray / white */}
        <filter id="macmono" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="0.33 0.5 0.16 0 0  0.33 0.5 0.16 0 0  0.33 0.5 0.16 0 0  0 0 0 1 0" />
          <feComponentTransfer>
            <feFuncR type="discrete" tableValues="0 0.62 1" />
            <feFuncG type="discrete" tableValues="0 0.62 1" />
            <feFuncB type="discrete" tableValues="0 0.62 1" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  )
}
