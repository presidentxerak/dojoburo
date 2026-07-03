import { PixelAvatar, AVATAR_RATIO } from './PixelAvatar'
import { AsciiFace } from './AsciiFace'
import type { Character as Char } from '../data/looks'
import type { Mood } from '../store'

/** A full-body character with the animated ASCII expression drawn on its head.
 *  `size` is the character WIDTH; height follows the avatar ratio. */
export function Character({
  character,
  mood,
  size = 48,
  className,
}: {
  character: Char
  mood: Mood
  size?: number
  className?: string
}) {
  const dark = isDark(character.face)
  const height = size * AVATAR_RATIO
  return (
    <div className={`character kind-${character.kind} ${className ?? ''}`} style={{ width: size, height, fontSize: size }}>
      <span className="char-inner">
        <PixelAvatar character={character} width={size} />
        <div className="face-on-head" style={{ color: dark ? '#f4f4f4' : '#181818' }}>
          <AsciiFace mood={mood} />
        </div>
      </span>
    </div>
  )
}

function isDark(hex: string): boolean {
  const n = hex.replace('#', '')
  const v = n.length === 3 ? n.split('').map((c) => c + c).join('') : n
  const num = parseInt(v, 16)
  return 0.299 * ((num >> 16) & 255) + 0.587 * ((num >> 8) & 255) + 0.114 * (num & 255) < 110
}
