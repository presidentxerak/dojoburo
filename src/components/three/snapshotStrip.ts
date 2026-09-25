// LES BANDES D'IMAGES · une scène animée dessinée à FRAMES instants, collée
// en une seule image, pour que la page la fasse défiler par à-coups (CSS
// steps) sans aucun canvas vivant. Utilisé par les icônes 3D du profil et
// l'avatar du grade (game/Icon3D). La bande est gardée pour la session.
import type { ReactNode } from 'react'
import { requestNodeSnapshot } from './snapshotFactory'

export const FRAMES = 12
const strips = new Map<string, string>()
const pendingStrips = new Map<string, Promise<string>>()

function readStored(key: string): string | null {
  try { return sessionStorage.getItem(key) } catch { return null }
}

/** La bande d'images d'une scène animée · `render(t)` rend l'instant t. */
export function requestStrip(key: string, render: (t: number) => ReactNode): Promise<string> {
  const hit = strips.get(key) ?? readStored(key)
  if (hit) { strips.set(key, hit); return Promise.resolve(hit) }
  const pending = pendingStrips.get(key)
  if (pending) return pending
  const job = (async () => {
    const urls = await Promise.all(
      Array.from({ length: FRAMES }, (_, i) => requestNodeSnapshot(`${key}#${i}`, render(i / FRAMES))),
    )
    if (urls.some((u) => !u)) return ''
    const imgs = await Promise.all(urls.map((u) => new Promise<HTMLImageElement>((ok, ko) => {
      const im = new Image()
      im.onload = () => ok(im)
      im.onerror = ko
      im.src = u
    })))
    const w = imgs[0].naturalWidth
    const h = imgs[0].naturalHeight
    const c = document.createElement('canvas')
    c.width = w * FRAMES
    c.height = h
    const g = c.getContext('2d')
    if (!g) return ''
    imgs.forEach((im, i) => g.drawImage(im, i * w, 0, w, h))
    const strip = c.toDataURL('image/png')
    strips.set(key, strip)
    try { sessionStorage.setItem(key, strip) } catch { /* plein ou refusé */ }
    return strip
  })().catch(() => '')
  pendingStrips.set(key, job)
  job.finally(() => pendingStrips.delete(key))
  return job
}

export function cachedStrip(key: string): string | null {
  return strips.get(key) ?? readStored(key)
}

