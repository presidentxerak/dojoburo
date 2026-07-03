import type { ReactElement } from 'react'
import type { DeskVariant, FurnitureKind, FurniturePiece } from '../data/layout'

// Small pixel furniture pieces as inline SVG (anti-aliased). Colours are tuned
// to read on both the light and dark floor.

function Desk({ variant }: { variant: DeskVariant }) {
  const wood = '#a9855b'
  const woodT = '#c6a374'
  const leg = '#6f5638'
  const screen = '#63d0ff'
  if (variant === 'l') {
    return (
      <svg width="150" height="52" viewBox="0 0 75 26">
        <rect x="2" y="6" width="71" height="8" fill={wood} />
        <rect x="2" y="6" width="71" height="2" fill={woodT} />
        <rect x="4" y="14" width="4" height="10" fill={leg} />
        <rect x="66" y="14" width="4" height="10" fill={leg} />
        <rect x="34" y="14" width="4" height="10" fill={leg} />
        <rect x="40" y="0" width="16" height="8" fill="#2b2f3d" />
        <rect x="41" y="1" width="14" height="6" fill={screen} />
        <rect x="47" y="8" width="2" height="2" fill="#2b2f3d" />
        <rect x="12" y="8" width="14" height="4" fill="#e7ecf5" />
        <rect x="6" y="5" width="3" height="4" fill="#e2574c" />
      </svg>
    )
  }
  if (variant === 'standing') {
    return (
      <svg width="112" height="66" viewBox="0 0 56 33">
        <rect x="4" y="2" width="18" height="10" fill="#2b2f3d" />
        <rect x="5" y="3" width="16" height="7" fill={screen} />
        <rect x="26" y="4" width="16" height="8" fill="#2b2f3d" />
        <rect x="27" y="5" width="14" height="6" fill="#7bd88f" />
        <rect x="2" y="14" width="52" height="6" fill={wood} />
        <rect x="2" y="14" width="52" height="2" fill={woodT} />
        <rect x="10" y="20" width="4" height="12" fill={leg} />
        <rect x="42" y="20" width="4" height="12" fill={leg} />
        <rect x="8" y="30" width="40" height="2" fill="#4a3b2a" />
      </svg>
    )
  }
  // 'a' and 'b'
  return (
    <svg width="112" height="48" viewBox="0 0 56 24">
      <rect x="2" y="4" width="52" height="8" fill={wood} />
      <rect x="2" y="4" width="52" height="2" fill={woodT} />
      <rect x="4" y="12" width="4" height="11" fill={leg} />
      <rect x="48" y="12" width="4" height="11" fill={leg} />
      {variant === 'b' && <rect x="42" y="12" width="10" height="11" fill="#8a6c47" />}
      {variant === 'b' && <rect x="44" y="15" width="6" height="1" fill="#5c4630" />}
      {variant === 'b' && <rect x="44" y="19" width="6" height="1" fill="#5c4630" />}
      <rect x="30" y="0" width="16" height="9" fill="#2b2f3d" />
      <rect x="31" y="1" width="14" height="6" fill={screen} />
      <rect x="37" y="9" width="2" height="3" fill="#2b2f3d" />
      <rect x="10" y="6" width="12" height="4" fill="#e7ecf5" />
      <rect x="6" y="4" width="3" height="4" fill="#e2574c" />
    </svg>
  )
}

function board(title: ReactElement) {
  return (
    <svg width="72" height="80" viewBox="0 0 36 40">
      <rect x="14" y="30" width="8" height="10" fill="#9aa3b5" />
      <rect x="0" y="0" width="36" height="30" fill="#f6f8fc" stroke="#c3ccdb" />
      {title}
    </svg>
  )
}

function Prop({ kind }: { kind: FurnitureKind }) {
  switch (kind) {
    case 'flag':
      return (
        <svg width="44" height="72" viewBox="0 0 22 36">
          <rect x="4" y="0" width="2" height="34" fill="#6f5638" />
          <rect x="6" y="2" width="14" height="9" fill="#f4b400" />
          <rect x="6" y="2" width="14" height="9" fill="#f4b400" />
          <path d="M20 2 L20 11 L15 6 Z" fill="#e7ecf5" />
          <rect x="10" y="5" width="3" height="3" fill="#b3141d" />
          <rect x="2" y="34" width="6" height="2" fill="#4a3b2a" />
        </svg>
      )
    case 'codeboard':
      return board(
        <g>
          <rect x="4" y="5" width="16" height="2" fill="#7bd88f" />
          <rect x="4" y="10" width="24" height="2" fill="#63d0ff" />
          <rect x="8" y="15" width="20" height="2" fill="#8b93a7" />
          <rect x="8" y="20" width="14" height="2" fill="#ffcf3b" />
          <rect x="4" y="25" width="10" height="2" fill="#7bd88f" />
        </g>,
      )
    case 'server':
      return (
        <svg width="42" height="74" viewBox="0 0 21 37">
          <rect x="2" y="0" width="17" height="34" fill="#2a2e3d" />
          {[3, 9, 15, 21, 27].map((yy) => (
            <g key={yy}>
              <rect x="4" y={yy} width="13" height="4" fill="#3a3f52" />
              <rect x="5" y={yy + 1} width="2" height="2" fill="#37d67a" />
              <rect x="8" y={yy + 1} width="2" height="2" fill="#ffcf3b" />
            </g>
          ))}
        </svg>
      )
    case 'safe':
      return (
        <svg width="46" height="52" viewBox="0 0 23 26">
          <rect x="2" y="2" width="19" height="20" fill="#3a3f52" />
          <rect x="2" y="2" width="19" height="3" fill="#565d78" />
          <rect x="5" y="7" width="13" height="12" fill="#2a2e3d" />
          <circle cx="11.5" cy="13" r="3.5" fill="#c9d2e2" />
          <rect x="11" y="10" width="1" height="6" fill="#3a3f52" />
          <rect x="9" y="12" width="6" height="1" fill="#3a3f52" />
          <rect x="14" y="20" width="4" height="4" fill="#ffcf3b" />
        </svg>
      )
    case 'megaphone':
      return (
        <svg width="52" height="44" viewBox="0 0 26 22">
          <path d="M2 8 L10 8 L18 3 L18 19 L10 14 L2 14 Z" fill="#f2617a" />
          <rect x="0" y="8" width="3" height="6" fill="#7a1730" />
          <rect x="20" y="6" width="2" height="2" fill="#f2617a" />
          <rect x="22" y="10" width="2" height="2" fill="#f2617a" />
          <rect x="20" y="14" width="2" height="2" fill="#f2617a" />
        </svg>
      )
    case 'salesboard':
      return board(
        <g>
          <rect x="4" y="4" width="1" height="22" fill="#8b93a7" />
          <rect x="4" y="25" width="26" height="1" fill="#8b93a7" />
          <polyline points="5,22 12,16 18,18 28,6" fill="none" stroke="#22a35a" strokeWidth="2" />
          <path d="M28 6 L24 6 L28 2 Z" fill="#22a35a" />
        </g>,
      )
    case 'kanban':
      return board(
        <g>
          {[4, 14, 24].map((cx) => (
            <g key={cx}>
              <rect x={cx} y={4} width="8" height="6" fill="#ffe08a" />
              <rect x={cx} y={12} width="8" height="6" fill="#a7d8ff" />
              <rect x={cx} y={20} width="8" height="6" fill="#c6f0c0" />
            </g>
          ))}
        </g>,
      )
    case 'easel':
      return (
        <svg width="52" height="76" viewBox="0 0 26 38">
          <rect x="4" y="2" width="18" height="20" fill="#f6f8fc" stroke="#c3ccdb" />
          <rect x="7" y="6" width="8" height="8" fill="#b06cf0" />
          <rect x="12" y="12" width="8" height="6" fill="#63d0ff" />
          <rect x="3" y="22" width="2" height="14" fill="#8a6c47" />
          <rect x="21" y="22" width="2" height="14" fill="#8a6c47" />
          <rect x="12" y="22" width="2" height="12" fill="#8a6c47" />
        </svg>
      )
    case 'chartboard':
      return board(
        <g>
          <rect x="6" y="18" width="4" height="8" fill="#63d0ff" />
          <rect x="12" y="12" width="4" height="14" fill="#7bd88f" />
          <rect x="18" y="8" width="4" height="18" fill="#ffcf3b" />
          <rect x="24" y="15" width="4" height="11" fill="#f2617a" />
        </g>,
      )
    case 'hiringboard':
      return board(
        <g>
          <circle cx="14" cy="10" r="4" fill="#8b93a7" />
          <rect x="9" y="15" width="10" height="8" fill="#8b93a7" />
          <rect x="24" y="4" width="2" height="8" fill="#22a35a" />
          <rect x="21" y="7" width="8" height="2" fill="#22a35a" />
        </g>,
      )
    case 'tickets':
      return (
        <svg width="46" height="44" viewBox="0 0 23 22">
          <rect x="2" y="10" width="16" height="10" fill="#e7ecf5" stroke="#c3ccdb" />
          <rect x="4" y="6" width="16" height="10" fill="#fff6d6" stroke="#e0c98a" />
          <rect x="6" y="9" width="10" height="1" fill="#8b93a7" />
          <rect x="6" y="12" width="8" height="1" fill="#8b93a7" />
          <rect x="16" y="2" width="6" height="3" fill="#5aa2f5" />
        </svg>
      )
    case 'scales':
      return (
        <svg width="48" height="52" viewBox="0 0 24 26">
          <rect x="11" y="3" width="2" height="18" fill="#c9a94a" />
          <rect x="4" y="4" width="16" height="1" fill="#c9a94a" />
          <path d="M2 5 L8 5 L5 10 Z" fill="#e7d18a" />
          <path d="M16 5 L22 5 L19 10 Z" fill="#e7d18a" />
          <rect x="7" y="21" width="10" height="2" fill="#8a6c47" />
          <rect x="5" y="23" width="14" height="2" fill="#6f5638" />
        </svg>
      )
    default:
      return null
  }
}

function Decor({ kind, w, h }: { kind: FurnitureKind; w?: number; h?: number }) {
  switch (kind) {
    case 'plant':
      return (
        <svg width="40" height="52" viewBox="0 0 20 26">
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
        <svg width="40" height="76" viewBox="0 0 20 38">
          <rect x="7" y="0" width="6" height="20" fill="#2c9a52" />
          <rect x="2" y="6" width="6" height="4" fill="#37b563" />
          <rect x="12" y="10" width="6" height="4" fill="#37b563" />
          <rect x="3" y="16" width="6" height="4" fill="#37b563" />
          <rect x="6" y="22" width="8" height="12" fill="#7b5233" />
          <rect x="6" y="22" width="8" height="2" fill="#95663f" />
        </svg>
      )
    case 'couch':
      return (
        <svg width="128" height="56" viewBox="0 0 64 28">
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
        <svg width="40" height="64" viewBox="0 0 20 32">
          <rect x="3" y="2" width="14" height="24" fill="#3a3f52" />
          <rect x="3" y="2" width="14" height="4" fill="#565d78" />
          <rect x="6" y="8" width="8" height="4" fill="#63d0ff" />
          <rect x="7" y="16" width="6" height="4" fill="#e7ecf5" />
          <rect x="2" y="26" width="16" height="4" fill="#2a2e3d" />
        </svg>
      )
    case 'cooler':
      return (
        <svg width="34" height="60" viewBox="0 0 17 30">
          <rect x="4" y="0" width="9" height="10" fill="#8fd3ff" />
          <rect x="3" y="10" width="11" height="16" fill="#e7ecf5" />
          <rect x="6" y="14" width="5" height="3" fill="#63b6e6" />
          <rect x="4" y="26" width="9" height="4" fill="#b9c2d2" />
        </svg>
      )
    case 'bookshelf':
      return (
        <svg width="80" height="70" viewBox="0 0 40 35">
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
        <svg width="44" height="40" viewBox="0 0 22 20">
          <rect x="2" y="4" width="18" height="12" fill="#c9d2e2" />
          <rect x="2" y="4" width="18" height="3" fill="#e7ecf5" />
          <rect x="6" y="0" width="10" height="5" fill="#f6f8fc" />
          <rect x="6" y="12" width="10" height="4" fill="#f6f8fc" />
          <rect x="15" y="7" width="2" height="2" fill="#37d67a" />
        </svg>
      )
    case 'clock':
      return (
        <svg width="40" height="40" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="9" fill="#f6f8fc" stroke="#8b93a7" strokeWidth="1.5" />
          <rect x="9.2" y="4" width="1.6" height="6" fill="#2b2f3d" />
          <rect x="10" y="9.2" width="5" height="1.6" fill="#2b2f3d" />
        </svg>
      )
    case 'lamp':
      return (
        <svg width="30" height="80" viewBox="0 0 15 40">
          <path d="M3 2 L12 2 L14 8 L1 8 Z" fill="#ffe08a" />
          <rect x="6" y="8" width="3" height="28" fill="#8b93a7" />
          <rect x="3" y="36" width="9" height="3" fill="#5b6470" />
        </svg>
      )
    case 'boxes':
      return (
        <svg width="56" height="52" viewBox="0 0 28 26">
          <rect x="2" y="12" width="14" height="13" fill="#c9975a" />
          <rect x="2" y="12" width="14" height="3" fill="#d8ac6e" />
          <rect x="8" y="12" width="2" height="13" fill="#a97b3f" />
          <rect x="14" y="4" width="12" height="11" fill="#c9975a" />
          <rect x="14" y="4" width="12" height="3" fill="#d8ac6e" />
          <rect x="19" y="4" width="2" height="11" fill="#a97b3f" />
        </svg>
      )
    case 'arcade':
      return (
        <svg width="48" height="76" viewBox="0 0 24 38">
          <rect x="2" y="2" width="20" height="34" fill="#2b2f3d" />
          <rect x="4" y="5" width="16" height="10" fill="#63d0ff" />
          <rect x="6" y="7" width="4" height="3" fill="#e2574c" />
          <rect x="12" y="9" width="4" height="3" fill="#7bd88f" />
          <rect x="4" y="18" width="16" height="6" fill="#3a3f52" />
          <rect x="7" y="20" width="3" height="3" fill="#ffcf3b" />
          <rect x="14" y="20" width="2" height="2" fill="#e2574c" />
          <rect x="2" y="34" width="20" height="4" fill="#1c1f2b" />
        </svg>
      )
    case 'rug':
      return (
        <div
          style={{
            width: w ?? 200,
            height: h ?? 140,
            background: 'repeating-linear-gradient(45deg, var(--rug-a) 0 14px, var(--rug-b) 14px 28px)',
            border: '4px solid var(--rug-border)',
            borderRadius: 8,
          }}
        />
      )
    case 'window':
      return (
        <div
          style={{
            width: w ?? 190,
            height: 62,
            background: 'linear-gradient(180deg, var(--win-a), var(--win-b))',
            border: '5px solid var(--win-frame)',
            boxShadow: 'inset 0 0 0 3px var(--win-inner)',
            display: 'flex',
          }}
        >
          <div style={{ width: '50%', height: '100%', borderRight: '5px solid var(--win-frame)' }} />
        </div>
      )
    default:
      return null
  }
}

const DECOR = new Set([
  'window', 'rug', 'plant', 'plantTall', 'couch', 'coffee', 'cooler',
  'bookshelf', 'printer', 'clock', 'lamp', 'boxes', 'arcade',
])

export function Furniture({ piece }: { piece: FurniturePiece }) {
  let content: ReactElement | null
  if (piece.kind === 'desk') content = <Desk variant={piece.variant ?? 'a'} />
  else if (DECOR.has(piece.kind)) content = <Decor kind={piece.kind} w={piece.w} h={piece.h} />
  else content = <Prop kind={piece.kind} />

  return (
    <div className={`furn furn-${piece.kind}`} style={{ left: piece.x, top: piece.y, zIndex: piece.z ?? 1 }}>
      {content}
    </div>
  )
}
