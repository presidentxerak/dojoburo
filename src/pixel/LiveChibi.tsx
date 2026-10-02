// UN PERSONNAGE QUI VIT · demandé : « Anime les maîtres dans leur carte ».
//
// Le même dessin, deux fois : les yeux ouverts, et par-dessus les yeux fermés,
// qui n'apparaissent qu'un instant (index.css, .live-chibi). Le personnage
// respire en se balançant en pas francs, comme un sprite, cligne des yeux à
// son propre rythme (un décalage tiré de sa graine, pour que deux maîtres
// voisins ne clignent pas ensemble) et saute quand on le survole.
import { memo } from 'react'
import { ChibiSprite } from './ChibiSprite'
import type { ChibiSpec } from './chibi'
import { hashString } from './grid'

export const LiveChibi = memo(function LiveChibi({ spec, scale = 3, seed = '' }: { spec: ChibiSpec; scale?: number; seed?: string }) {
  const h = hashString(seed || JSON.stringify(spec))
  const blink = { ...spec, eyes: 'sleepy' as const }
  // les robots et les fantômes n'ont pas de paupières dessinées · ils respirent seulement
  const canBlink = spec.species !== 'robot'
  return (
    <span className="live-chibi" style={{ ['--blink-delay' as string]: `${-(h % 4000) / 1000}s`, ['--bob-delay' as string]: `${-(h % 1600) / 1000}s` }}>
      <ChibiSprite spec={spec} scale={scale} />
      {canBlink && <span className="live-chibi-blink" aria-hidden="true"><ChibiSprite spec={blink} scale={scale} /></span>}
    </span>
  )
})
