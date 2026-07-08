import type { Skin } from '../../data/skins'

/** Lightweight 2D avatar for a skin · head + eyes + a kind-specific topper,
 *  coloured from the skin palette. Cheap enough to render a 100-skin grid. */
export function SkinAvatar({ skin, size = 44 }: { skin: Skin; size?: number }) {
  const s = size
  return (
    <div className="skin-av" style={{ width: s, height: s }} title={skin.name}>
      <span className="sa-body" style={{ background: skin.outfit }} />
      <span className={`sa-top sa-${skin.kind}`} style={{ background: skin.extra, borderColor: skin.extra, color: skin.extra }} />
      <span className="sa-head" style={{ background: skin.face }}>
        <span className="sa-eyes" style={{ color: contrast(skin.face) }}>
          <i /><i />
        </span>
      </span>
    </div>
  )
}

function contrast(hex: string): string {
  const n = hex.replace('#', '')
  const v = n.length === 3 ? n.split('').map((c) => c + c).join('') : n
  const num = parseInt(v, 16)
  const lum = 0.299 * ((num >> 16) & 255) + 0.587 * ((num >> 8) & 255) + 0.114 * (num & 255)
  return lum < 130 ? '#f4f4f4' : '#20242f'
}
