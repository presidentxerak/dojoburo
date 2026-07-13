import { useEffect, useState } from 'react'
import type { Skin } from '../../data/skins'
import { SkinAvatar } from '../workshop/SkinAvatar'
import { useInView } from '../landing/useInView'
import { requestSnapshot, cachedSnapshot } from './snapshotFactory'

// Shows an agent's 3D skin as a cached image (rendered once by the shared
// SnapshotFactory). Costs zero live WebGL contexts. Until the image is ready
// it shows the cheap 2D SkinAvatar, so a card is never blank.
export function Character3DImage({
  skin,
  size = 72,
  className = '',
}: {
  skin: Skin
  size?: number
  className?: string
}) {
  const [ref, inView] = useInView<HTMLDivElement>('300px')
  const [url, setUrl] = useState<string | null>(() => cachedSnapshot(skin))

  useEffect(() => {
    if (url || !inView) return
    let alive = true
    requestSnapshot(skin).then((u) => { if (alive && u) setUrl(u) })
    return () => { alive = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, url, skin.id])

  return (
    <div ref={ref} className={`c3d-img ${className}`} style={{ width: size, height: size }}>
      {url
        ? <img src={url} width={size} height={size} alt="" aria-hidden draggable={false} style={{ width: size, height: size, display: 'block' }} />
        : <SkinAvatar skin={skin} size={size} />}
    </div>
  )
}
