import type { FurnitureKind, FurniturePiece } from '../data/layout'

// Small pixel furniture pieces as inline SVG. Colours use currentColor-free
// literals tuned to read on both the light and dark floor.
function Piece({ kind, w, h }: { kind: FurnitureKind; w?: number; h?: number }) {
  switch (kind) {
    case 'desk':
      return (
        <svg width="112" height="46" viewBox="0 0 56 23" shapeRendering="crispEdges">
          <rect x="2" y="4" width="52" height="8" fill="#a9855b" />
          <rect x="2" y="4" width="52" height="2" fill="#c6a374" />
          <rect x="4" y="12" width="4" height="10" fill="#6f5638" />
          <rect x="48" y="12" width="4" height="10" fill="#6f5638" />
          {/* monitor */}
          <rect x="30" y="0" width="16" height="9" fill="#2b2f3d" />
          <rect x="31" y="1" width="14" height="6" fill="#63d0ff" />
          <rect x="37" y="9" width="2" height="3" fill="#2b2f3d" />
          {/* keyboard + mug */}
          <rect x="10" y="6" width="12" height="4" fill="#e7ecf5" />
          <rect x="6" y="4" width="3" height="4" fill="#e2574c" />
        </svg>
      )
    case 'plant':
      return (
        <svg width="40" height="52" viewBox="0 0 20 26" shapeRendering="crispEdges">
          <rect x="4" y="2" width="12" height="10" fill="#2fae5f" />
          <rect x="2" y="6" width="4" height="6" fill="#26934f" />
          <rect x="14" y="6" width="4" height="6" fill="#26934f" />
          <rect x="9" y="0" width="2" height="8" fill="#3ed071" />
          <rect x="6" y="12" width="8" height="10" fill="#c96f3a" />
          <rect x="6" y="12" width="8" height="2" fill="#e0894f" />
        </svg>
      )
    case 'plantTall':
      return (
        <svg width="40" height="76" viewBox="0 0 20 38" shapeRendering="crispEdges">
          <rect x="7" y="0" width="6" height="20" fill="#2c9a52" />
          <rect x="2" y="6" width="6" height="4" fill="#37b563" />
          <rect x="12" y="10" width="6" height="4" fill="#37b563" />
          <rect x="3" y="16" width="6" height="4" fill="#37b563" />
          <rect x="6" y="22" width="8" height="12" fill="#7b5233" />
          <rect x="6" y="22" width="8" height="2" fill="#95663f" />
        </svg>
      )
    case 'whiteboard':
      return (
        <svg width="150" height="84" viewBox="0 0 75 42" shapeRendering="crispEdges">
          <rect x="0" y="0" width="75" height="38" fill="#f6f8fc" stroke="#c3ccdb" />
          <rect x="6" y="6" width="30" height="3" fill="#e2574c" />
          <rect x="6" y="13" width="46" height="2" fill="#8b93a7" />
          <rect x="6" y="18" width="40" height="2" fill="#8b93a7" />
          <rect x="50" y="22" width="18" height="10" fill="#63d0ff" />
          <rect x="30" y="38" width="15" height="4" fill="#9aa3b5" />
        </svg>
      )
    case 'couch':
      return (
        <svg width="128" height="56" viewBox="0 0 64 28" shapeRendering="crispEdges">
          <rect x="2" y="8" width="60" height="16" fill="#4f6bd8" />
          <rect x="2" y="6" width="60" height="4" fill="#6f86e6" />
          <rect x="0" y="6" width="8" height="18" fill="#3d55b5" />
          <rect x="56" y="6" width="8" height="18" fill="#3d55b5" />
          <rect x="14" y="10" width="16" height="8" fill="#6f86e6" />
          <rect x="34" y="10" width="16" height="8" fill="#6f86e6" />
        </svg>
      )
    case 'coffee':
      return (
        <svg width="40" height="64" viewBox="0 0 20 32" shapeRendering="crispEdges">
          <rect x="3" y="2" width="14" height="24" fill="#3a3f52" />
          <rect x="3" y="2" width="14" height="4" fill="#565d78" />
          <rect x="6" y="8" width="8" height="4" fill="#63d0ff" />
          <rect x="7" y="16" width="6" height="4" fill="#e7ecf5" />
          <rect x="8" y="14" width="1" height="2" fill="#c9d2e2" />
          <rect x="11" y="14" width="1" height="2" fill="#c9d2e2" />
          <rect x="2" y="26" width="16" height="4" fill="#2a2e3d" />
        </svg>
      )
    case 'cooler':
      return (
        <svg width="34" height="60" viewBox="0 0 17 30" shapeRendering="crispEdges">
          <rect x="4" y="0" width="9" height="10" fill="#8fd3ff" />
          <rect x="4" y="0" width="9" height="10" fill="#8fd3ff" opacity="0.7" />
          <rect x="3" y="10" width="11" height="16" fill="#e7ecf5" />
          <rect x="6" y="14" width="5" height="3" fill="#63b6e6" />
          <rect x="4" y="26" width="9" height="4" fill="#b9c2d2" />
        </svg>
      )
    case 'server':
      return (
        <svg width="40" height="70" viewBox="0 0 20 35" shapeRendering="crispEdges">
          <rect x="2" y="0" width="16" height="33" fill="#2a2e3d" />
          {[2, 8, 14, 20, 26].map((yy) => (
            <g key={yy}>
              <rect x="4" y={yy} width="12" height="4" fill="#3a3f52" />
              <rect x="5" y={yy + 1} width="2" height="2" fill="#37d67a" />
              <rect x="8" y={yy + 1} width="2" height="2" fill="#ffcf3b" />
            </g>
          ))}
        </svg>
      )
    case 'bookshelf':
      return (
        <svg width="80" height="70" viewBox="0 0 40 35" shapeRendering="crispEdges">
          <rect x="0" y="0" width="40" height="35" fill="#7b5233" />
          <rect x="2" y="2" width="36" height="9" fill="#5f3f27" />
          <rect x="2" y="13" width="36" height="9" fill="#5f3f27" />
          <rect x="2" y="24" width="36" height="9" fill="#5f3f27" />
          {[3, 8, 13, 18, 23, 28, 33].map((xx, i) => (
            <rect key={i} x={xx} y={2 + (i % 3) * 11} width="3" height="9" fill={['#e2574c', '#63d0ff', '#ffcf3b', '#7bd88f', '#b06cf0'][i % 5]} />
          ))}
        </svg>
      )
    case 'printer':
      return (
        <svg width="44" height="40" viewBox="0 0 22 20" shapeRendering="crispEdges">
          <rect x="2" y="4" width="18" height="12" fill="#c9d2e2" />
          <rect x="2" y="4" width="18" height="3" fill="#e7ecf5" />
          <rect x="6" y="0" width="10" height="5" fill="#f6f8fc" />
          <rect x="6" y="12" width="10" height="4" fill="#f6f8fc" />
          <rect x="15" y="7" width="2" height="2" fill="#37d67a" />
        </svg>
      )
    case 'rug':
      return (
        <div
          style={{
            width: w ?? 200,
            height: h ?? 130,
            background: 'repeating-linear-gradient(45deg, var(--rug-a) 0 12px, var(--rug-b) 12px 24px)',
            border: '4px solid var(--rug-border)',
            borderRadius: 4,
          }}
        />
      )
    case 'window':
      return (
        <div
          style={{
            width: w ?? 200,
            height: 60,
            background: 'linear-gradient(180deg, var(--win-a), var(--win-b))',
            border: '5px solid var(--win-frame)',
            boxShadow: 'inset 0 0 0 3px var(--win-inner)',
          }}
        >
          <div style={{ width: '50%', height: '100%', borderRight: '5px solid var(--win-frame)' }} />
        </div>
      )
  }
}

export function Furniture({ piece }: { piece: FurniturePiece }) {
  return (
    <div
      className={`furn furn-${piece.kind}`}
      style={{ left: piece.x, top: piece.y, zIndex: piece.z ?? 1 }}
    >
      <Piece kind={piece.kind} w={piece.w} h={piece.h} />
    </div>
  )
}
