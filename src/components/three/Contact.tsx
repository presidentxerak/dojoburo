// L'ombre de contact · un disque sombre et flou, plaqué au sol sous une
// figurine.
//
// La carte d'ombre du soleil donne une ombre PORTÉE, projetée au loin ; elle
// ne dit pas où le corps TOUCHE le sol. Sans cette tache, une figurine a
// l'air posée un centimètre au-dessus du plancher — c'est le défaut qui
// faisait flotter toute l'équipe. Un quadrilatère et un dégradé : aucune
// passe de rendu supplémentaire, contrairement à une vraie occlusion.
import * as THREE from 'three'

const CONTACT = (() => {
  let tex: THREE.Texture | null = null
  return () => {
    if (tex) return tex
    const c = document.createElement('canvas')
    c.width = c.height = 128
    const g = c.getContext('2d')
    if (g) {
      const rad = g.createRadialGradient(64, 64, 2, 64, 64, 62)
      rad.addColorStop(0, 'rgba(0,0,0,0.5)')
      rad.addColorStop(0.55, 'rgba(0,0,0,0.22)')
      rad.addColorStop(1, 'rgba(0,0,0,0)')
      g.fillStyle = rad
      g.fillRect(0, 0, 128, 128)
    }
    tex = new THREE.CanvasTexture(c)
    return tex
  }
})()

export function Contact({ r = 0.85, y = 0.03 }: { r?: number; y?: number }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, y, 0]} renderOrder={-1}>
      <planeGeometry args={[r * 2, r * 2]} />
      <meshBasicMaterial map={CONTACT()} transparent depthWrite={false} opacity={0.9} />
    </mesh>
  )
}
