import { PixelAvatar } from './PixelAvatar'
import { AsciiFace } from './AsciiFace'
import type { Character as Char } from '../data/looks'
import type { Mood } from '../store'

/** A character = kind-based pixel avatar with the animated ASCII expression
 *  drawn directly on its head. */
export function Character({
  character,
  mood,
  size = 72,
  className,
}: {
  character: Char
  mood: Mood
  size?: number
  className?: string
}) {
  // Lighter faces read best with a dark expression; dark faces with a light one.
  const dark = isDark(character.face)
  return (
    <div className={`character ${className ?? ''}`} style={{ width: size, height: size, fontSize: size }}>
      <PixelAvatar character={character} size={size} />
      <div className="face-on-head" style={{ color: dark ? '#f4f4f4' : '#181818' }}>
        <AsciiFace mood={mood} />
      </div>
    </div>
  )
}

function isDark(hex: string): boolean {
  const n = hex.replace('#', '')
  const v = n.length === 3 ? n.split('').map((c) => c + c).join('') : n
  const num = parseInt(v, 16)
  const r = (num >> 16) & 255
  const g = (num >> 8) & 255
  const b = num & 255
  return 0.299 * r + 0.587 * g + 0.114 * b < 110
}
