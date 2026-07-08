// Shared SVG defs: a 1-bit dither pattern (classic Mac 50% gray) and a
// monochrome filter that (a) forces art to black/white and (b) wraps every
// piece in a 1px black outline · the Macintosh icon look.
export function Defs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden focusable="false">
      <defs>
        <pattern id="dith" width="0.7" height="0.7" patternUnits="userSpaceOnUse">
          <rect width="0.7" height="0.7" fill="#fff" />
          <rect width="0.35" height="0.35" fill="#000" />
          <rect x="0.35" y="0.35" width="0.35" height="0.35" fill="#000" />
        </pattern>

        {/* grayscale + posterize, then add a black outline around the silhouette */}
        <filter id="macmono" x="-15%" y="-15%" width="130%" height="130%" colorInterpolationFilters="sRGB">
          {/* black outline from a dilated alpha · every furniture SVG is drawn at
             exactly 2px per user unit, so radius 1 = a uniform 2px outline */}
          <feMorphology in="SourceAlpha" operator="dilate" radius="1" result="dilated" />
          <feFlood floodColor="#000" result="blk" />
          <feComposite in="blk" in2="dilated" operator="in" result="outline" />
          {/* monochrome fill */}
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="0.33 0.5 0.16 0 0  0.33 0.5 0.16 0 0  0.33 0.5 0.16 0 0  0 0 0 1 0"
            result="gray"
          />
          <feComponentTransfer in="gray" result="mono">
            <feFuncR type="discrete" tableValues="0 0.66 1" />
            <feFuncG type="discrete" tableValues="0 0.66 1" />
            <feFuncB type="discrete" tableValues="0 0.66 1" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="outline" />
            <feMergeNode in="mono" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  )
}
