// L'éclairage d'environnement, monté dans une scène R3F.
//
// À poser une fois par <Canvas>. Il remplit `scene.environment`, ce qui
// donne à CHAQUE matériau standard de la scène un reflet doux venu de tous
// les côtés — la différence entre une boule colorée et une figurine.
import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { makeStudioEnv } from './toy'

export function StudioLight({ intensity = 1 }: { intensity?: number }) {
  const gl = useThree((s) => s.gl)
  const scene = useThree((s) => s.scene)
  useEffect(() => {
    const env = makeStudioEnv(gl)
    scene.environment = env.texture
    // `environmentIntensity` n'existe que depuis three 0.163 · on le pose
    // sans l'exiger, et à défaut chaque matériau garde son envMapIntensity.
    const s = scene as unknown as { environmentIntensity?: number }
    if ('environmentIntensity' in scene) s.environmentIntensity = intensity
    return () => {
      scene.environment = null
      env.dispose()
    }
  }, [gl, scene, intensity])
  return null
}
