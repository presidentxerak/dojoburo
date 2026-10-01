// LE PERSONNAGE À L'ÉCRAN · la fiche dessinée, en SVG net.
import { memo, useMemo } from 'react'
import { PixelSvg } from './grid'
import { drawChibi, type ChibiSpec } from './chibi'

export const ChibiSprite = memo(function ChibiSprite({ spec, scale = 4, className = '', title, flip = false }: {
  spec: ChibiSpec
  scale?: number
  className?: string
  title?: string
  /** tourné vers la gauche */
  flip?: boolean
}) {
  const grid = useMemo(() => drawChibi(spec), [spec])
  return <PixelSvg grid={grid} scale={scale} title={title} className={`chibi${flip ? ' flip' : ''} ${className}`} />
})
