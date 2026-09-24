// LE BATTEMENT D'UNE SCÈNE · voir three/cardClock.
//
// À poser dans un <Canvas frameloop="demand">. Tant que `live` est vrai,
// l'horloge partagée demande des images à la scène, à cadence plafonnée et
// jamais en même temps que les autres ; sinon la scène garde sa dernière image.
import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { addCard } from './cardClock'

export function Heartbeat({ live }: { live: boolean }) {
  const invalidate = useThree((s) => s.invalidate)
  useEffect(() => (live ? addCard(invalidate) : undefined), [live, invalidate])
  return null
}
