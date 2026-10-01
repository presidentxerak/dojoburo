// LE PORTRAIT DU GRADE · le personnage de l'élève, en kimono, ceinture à la
// couleur du grade. Il remplace l'avatar 3D du grade de l'ancien jeu : le
// grade se lit toujours à la ceinture, et c'est désormais le personnage choisi
// par l'élève qui la porte (voir pixel/AvatarPicker, game/ranks).
import { memo } from 'react'
import { ChibiSprite } from './ChibiSprite'
import { useAvatar } from './avatar'
import type { Rank } from '../game/ranks'

export const GradeChibi = memo(function GradeChibi({ rank, size = 64, locked = false, className }: {
  rank: Rank; size?: number; locked?: boolean; className?: string
}) {
  const { spec } = useAvatar()
  const belted = { ...spec, outfit: 'kimono' as const, accent: rank.tint }
  return (
    <span className={`gchibi${locked ? ' locked' : ''}${className ? ` ${className}` : ''}`}
      style={{ width: size, height: size, ['--rk' as string]: rank.tint }}>
      <ChibiSprite spec={belted} scale={Math.max(1, Math.round((size * 0.9) / 33))} />
    </span>
  )
})
