import type { ReactElement } from 'react'
import type { DeskVariant, FurnitureKind, FurniturePiece } from '../data/layout'

// Small pixel furniture pieces as inline SVG (anti-aliased). Colours are tuned
// to read on both the light and dark floor.

// desks are drawn BEHIND the character, so the interesting props live near the
// left & right edges where they stay visible.
function Desk({ variant }: { variant: DeskVariant }) {
  const wood = '#a9855b'
  const woodT = '#c6a374'
  const legc = '#6f5638'
  const screen = '#63d0ff'

  const monitor = (x: number, tint = screen) => (
    <g>
      <rect x={x} y={0} width="13" height="8" fill="#2b2f3d" />
      <rect x={x + 1} y={1} width="11" height="6" fill={tint} />
      <rect x={x + 5} y={8} width="3" height="2" fill="#2b2f3d" />
    </g>
  )
  const mug = (x: number, c = '#e2574c') => <rect x={x} y={5} width="3" height="4" fill={c} />
  const papers = (x: number) => <g><rect x={x} y={6} width="9" height="3" fill="#e7ecf5" /><rect x={x + 1} y={7} width="6" height="1" fill="#a7b0c0" /></g>
  const lamp = (x: number) => <g><rect x={x} y={2} width="1.5" height="7" fill="#8b93a1" /><path d={`M${x - 2} 2 L${x + 4} 2 L${x + 2} 5 L${x} 5 Z`} fill="#ffcf3b" /></g>
  const potted = (x: number) => <g><rect x={x} y={2} width="5" height="4" fill="#2fae5f" /><rect x={x + 1} y={6} width="3" height="3" fill="#c96f3a" /></g>
  const phone = (x: number) => <g><rect x={x} y={4} width="3" height="5" fill="#2b3145" /><rect x={x + 0.6} y={5} width="1.8" height="2.5" fill="#7bd88f" /></g>

  if (variant === 'l') {
    return (
      <svg width="150" height="54" viewBox="0 0 75 27">
        <rect x="2" y="9" width="71" height="8" fill={wood} />
        <rect x="2" y="9" width="71" height="2" fill={woodT} />
        <rect x="4" y="17" width="4" height="10" fill={legc} />
        <rect x="35" y="17" width="4" height="10" fill={legc} />
        <rect x="67" y="17" width="4" height="10" fill={legc} />
        {monitor(6)}
        {monitor(56, '#7bd88f')}
        {papers(24)}
        {potted(44)}
        {mug(38, '#3f7fe0')}
      </svg>
    )
  }
  if (variant === 'standing') {
    return (
      <svg width="112" height="70" viewBox="0 0 56 35">
        {monitor(6)}
        {monitor(37, '#7bd88f')}
        <rect x="2" y="14" width="52" height="6" fill={wood} />
        <rect x="2" y="14" width="52" height="2" fill={woodT} />
        <rect x="10" y="20" width="4" height="13" fill={legc} />
        <rect x="42" y="20" width="4" height="13" fill={legc} />
        <rect x="8" y="33" width="40" height="2" fill="#4a3b2a" />
        <g transform="translate(24,6)">{potted(0)}</g>
      </svg>
    )
  }
  if (variant === 'b') {
    return (
      <svg width="112" height="50" viewBox="0 0 56 25">
        <rect x="2" y="6" width="52" height="8" fill={wood} />
        <rect x="2" y="6" width="52" height="2" fill={woodT} />
        <rect x="4" y="14" width="4" height="11" fill={legc} />
        <rect x="42" y="14" width="12" height="11" fill="#8a6c47" />
        <rect x="44" y="17" width="8" height="1" fill="#5c4630" />
        <rect x="44" y="21" width="8" height="1" fill="#5c4630" />
        {lamp(7)}
        {monitor(38)}
        {papers(20)}
        {phone(14)}
      </svg>
    )
  }
  // 'a' — classic
  return (
    <svg width="112" height="50" viewBox="0 0 56 25">
      <rect x="2" y="6" width="52" height="8" fill={wood} />
      <rect x="2" y="6" width="52" height="2" fill={woodT} />
      <rect x="4" y="14" width="4" height="11" fill={legc} />
      <rect x="48" y="14" width="4" height="11" fill={legc} />
      {monitor(5)}
      {papers(21)}
      {mug(46)}
      {potted(38)}
      <rect x="20" y="10" width="14" height="3" fill="#e7ecf5" />
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
    // ---- space station ----
    case 'porthole':
      return (
        <svg width="66" height="66" viewBox="0 0 33 33">
          <circle cx="16.5" cy="16.5" r="15" fill="#3a4256" />
          <circle cx="16.5" cy="16.5" r="12" fill="#0a1024" />
          {[[8, 9], [22, 7], [12, 20], [24, 22], [17, 14]].map(([sx, sy], i) => (
            <rect key={i} x={sx} y={sy} width="1.4" height="1.4" fill="#cfe8ff" />
          ))}
          <circle cx="21" cy="12" r="3" fill="#63d0ff" />
          {[0, 1, 2, 3].map((i) => <rect key={i} x={16} y={1.5} width="1" height="3" fill="#8b93a1" transform={`rotate(${i * 90} 16.5 16.5)`} />)}
        </svg>
      )
    case 'console':
      return (
        <svg width={w ?? 120} height="50" viewBox={`0 0 ${(w ?? 120) / 2} 25`}>
          <rect x="0" y="6" width={(w ?? 120) / 2} height="15" fill="#2b3145" />
          <rect x="2" y="8" width="18" height="8" fill="#63d0ff" />
          <rect x="22" y="8" width="14" height="8" fill="#7bd88f" />
          {[2, 6, 10, 14, 18].map((bx) => <rect key={bx} x={bx} y={18} width="2" height="2" fill="#e2574c" />)}
          {[26, 30, 34, 38].map((bx) => <rect key={bx} x={bx} y={18} width="2" height="2" fill="#ffcf3b" />)}
        </svg>
      )
    case 'satellite':
      return (
        <svg width="52" height="60" viewBox="0 0 26 30">
          <ellipse cx="10" cy="10" rx="9" ry="6" fill="#c9d2e2" />
          <ellipse cx="10" cy="10" rx="5" ry="3" fill="#8b93a1" />
          <rect x="10" y="10" width="1.5" height="10" fill="#8b93a1" />
          <rect x="4" y="20" width="14" height="8" fill="#2b3145" />
          <rect x="5" y="21" width="6" height="6" fill="#63d0ff" />
          <rect x="12" y="21" width="5" height="6" fill="#63d0ff" />
        </svg>
      )
    case 'hologram':
      return (
        <svg width="60" height="70" viewBox="0 0 30 35">
          <ellipse cx="15" cy="31" rx="12" ry="3" fill="#1a5fa0" opacity="0.5" />
          <path d="M15 6 L26 28 L4 28 Z" fill="#63d0ff" opacity="0.35" />
          <path d="M15 6 L26 28 L4 28 Z" fill="none" stroke="#63d0ff" strokeWidth="1" />
          <circle cx="15" cy="16" r="4" fill="none" stroke="#8ef6ff" strokeWidth="1" />
        </svg>
      )
    // ---- lab ----
    case 'labpanel':
      return (
        <svg width={w ?? 200} height="60" viewBox={`0 0 ${(w ?? 200) / 2} 30`}>
          <rect x="0" y="0" width={(w ?? 200) / 2} height="26" fill="#e7f0f4" stroke="#b7cdd4" />
          <rect x="6" y="5" width="24" height="6" fill="#7bd88f" />
          <rect x="6" y="14" width={(w ?? 200) / 2 - 20} height="2" fill="#a7c3cc" />
          <rect x="6" y="19" width={(w ?? 200) / 2 - 30} height="2" fill="#a7c3cc" />
          <circle cx={(w ?? 200) / 2 - 10} cy="8" r="3" fill="#63d0ff" />
        </svg>
      )
    case 'microscope':
      return (
        <svg width="44" height="60" viewBox="0 0 22 30">
          <rect x="6" y="26" width="12" height="3" fill="#2b3145" />
          <rect x="9" y="10" width="3" height="16" fill="#565d78" />
          <path d="M11 6 q6 0 6 8" fill="none" stroke="#565d78" strokeWidth="2.5" />
          <rect x="9" y="4" width="4" height="5" fill="#3a3f52" />
          <rect x="7" y="20" width="10" height="2" fill="#8b93a1" />
        </svg>
      )
    case 'beakers':
      return (
        <svg width="46" height="52" viewBox="0 0 23 26">
          <path d="M6 6 L6 12 L3 22 L11 22 L8 12 L8 6 Z" fill="#dff2f6" stroke="#a7c3cc" />
          <path d="M4.5 18 L9.5 18 L11 22 L3 22 Z" fill="#7bd88f" />
          <rect x="14" y="8" width="6" height="14" fill="#dff2f6" stroke="#a7c3cc" />
          <rect x="14" y="16" width="6" height="6" fill="#f2617a" />
          <rect x="5" y="5" width="4" height="1" fill="#8b93a1" />
        </svg>
      )
    case 'dnahelix':
      return (
        <svg width="40" height="64" viewBox="0 0 20 32">
          {[0, 4, 8, 12, 16, 20, 24, 28].map((yy, i) => (
            <g key={yy}>
              <circle cx={i % 2 ? 14 : 6} cy={yy + 2} r="2" fill="#63d0ff" />
              <circle cx={i % 2 ? 6 : 14} cy={yy + 2} r="2" fill="#f2617a" />
              <rect x="6" y={yy + 1.4} width="8" height="1.2" fill="#8b93a1" />
            </g>
          ))}
        </svg>
      )
    // ---- castle ----
    case 'stonewindow':
      return (
        <svg width="60" height="80" viewBox="0 0 30 40">
          <path d="M4 40 L4 12 A11 11 0 0 1 26 12 L26 40 Z" fill="#8a8078" stroke="#6a6058" strokeWidth="2" />
          <path d="M8 40 L8 13 A7 7 0 0 1 22 13 L22 40 Z" fill="#3a5a7a" />
          <rect x="14" y="8" width="2" height="32" fill="#6a6058" />
        </svg>
      )
    case 'torch':
      return (
        <svg width="26" height="60" viewBox="0 0 13 30">
          <rect x="5" y="10" width="3" height="18" fill="#6f5638" />
          <path d="M6.5 0 C3 5 9 6 6.5 12 C4 8 4 5 6.5 0Z" fill="#ff8a1f" />
          <path d="M6.5 3 C5 6 8 7 6.5 11 C5.5 8 5.5 6 6.5 3Z" fill="#ffd23b" />
        </svg>
      )
    case 'banner':
      return (
        <svg width="44" height="76" viewBox="0 0 22 38">
          <rect x="2" y="0" width="18" height="3" fill="#6f5638" />
          <path d="M4 2 L18 2 L18 32 L11 36 L4 32 Z" fill="#8a1420" />
          <path d="M4 2 L18 2 L18 32 L11 36 L4 32 Z" fill="none" stroke="#c9a94a" strokeWidth="1" />
          <path d="M11 10 L14 15 L11 20 L8 15 Z" fill="#ffcf3b" />
        </svg>
      )
    case 'armor':
      return (
        <svg width="40" height="76" viewBox="0 0 20 38">
          <rect x="7" y="1" width="6" height="6" fill="#b7c0cc" />
          <rect x="8" y="3" width="4" height="2" fill="#2b3145" />
          <rect x="5" y="8" width="10" height="12" fill="#c9d2e2" />
          <rect x="3" y="9" width="2" height="8" fill="#8b93a1" />
          <rect x="15" y="9" width="2" height="8" fill="#8b93a1" />
          <rect x="6" y="20" width="3" height="12" fill="#b7c0cc" />
          <rect x="11" y="20" width="3" height="12" fill="#b7c0cc" />
          <rect x="4" y="32" width="12" height="2" fill="#8b93a1" />
        </svg>
      )
    // ---- airport ----
    case 'glasswall':
      return (
        <div style={{ width: w ?? 260, height: 66, background: 'linear-gradient(180deg,#cfe6f7,#9dc4e0)', border: '4px solid #cdd6e2', display: 'flex' }}>
          {[0, 1, 2, 3].map((i) => <div key={i} style={{ flex: 1, borderRight: i < 3 ? '3px solid #cdd6e2' : 'none' }} />)}
        </div>
      )
    case 'departboard':
      return (
        <svg width="90" height="60" viewBox="0 0 45 30">
          <rect x="0" y="0" width="45" height="28" fill="#141a24" />
          {[3, 9, 15, 21].map((yy) => (
            <g key={yy}>
              <rect x="3" y={yy} width="16" height="3" fill="#ffcf3b" />
              <rect x="22" y={yy} width="10" height="3" fill="#7bd88f" />
              <rect x="35" y={yy} width="7" height="3" fill="#63d0ff" />
            </g>
          ))}
        </svg>
      )
    case 'luggage':
      return (
        <svg width="46" height="44" viewBox="0 0 23 22">
          <rect x="3" y="8" width="12" height="12" rx="1.5" fill="#e2574c" />
          <rect x="6" y="5" width="6" height="3" fill="#8a2a22" />
          <rect x="3" y="12" width="12" height="1.5" fill="#8a2a22" />
          <rect x="12" y="4" width="9" height="9" rx="1" fill="#3f7fe0" />
          <rect x="14" y="2" width="5" height="2" fill="#274a86" />
        </svg>
      )
    // ---- shopping center ----
    case 'storefront':
      return (
        <svg width={w ?? 200} height="66" viewBox={`0 0 ${(w ?? 200) / 2} 33`}>
          <rect x="0" y="10" width={(w ?? 200) / 2} height="22" fill="#f6eef6" stroke="#d9c4d6" />
          <rect x="4" y="14" width={(w ?? 200) / 2 - 8} height="14" fill="#bfe0ff" />
          {Array.from({ length: Math.ceil((w ?? 200) / 20) }).map((_, i) => (
            <rect key={i} x={i * 10} y="4" width="10" height="6" fill={i % 2 ? '#f2617a' : '#ffe08a'} />
          ))}
        </svg>
      )
    case 'saletag':
      return (
        <svg width="44" height="52" viewBox="0 0 22 26">
          <path d="M2 2 L13 2 L20 9 L11 18 L2 9 Z" fill="#f2617a" />
          <circle cx="6" cy="6" r="1.6" fill="#fff" />
          <text x="8" y="14" fontSize="6" fill="#fff" fontFamily="monospace">%</text>
        </svg>
      )
    case 'fountain':
      return (
        <svg width="90" height="60" viewBox="0 0 45 30">
          <ellipse cx="22" cy="24" rx="21" ry="5" fill="#8fd3ff" />
          <ellipse cx="22" cy="24" rx="21" ry="5" fill="none" stroke="#5aa2d6" />
          <rect x="20" y="8" width="4" height="14" fill="#b9c2d2" />
          <ellipse cx="22" cy="8" rx="6" ry="2" fill="#cfe8ff" />
          <path d="M22 8 C 18 12 18 16 20 20 M22 8 C 26 12 26 16 24 20" fill="none" stroke="#8fd3ff" />
        </svg>
      )
    // ---- hospital ----
    case 'hospwindow':
      return (
        <div style={{ width: w ?? 200, height: 62, background: 'linear-gradient(180deg,#e9f7ff,#c8e8f5)', border: '5px solid #eef4f2', boxShadow: 'inset 0 0 0 3px #d3e6e0', display: 'flex' }}>
          <div style={{ width: '50%', borderRight: '5px solid #eef4f2' }} />
        </div>
      )
    case 'hospbed':
      return (
        <svg width="90" height="52" viewBox="0 0 45 26">
          <rect x="2" y="8" width="41" height="10" fill="#dfeef0" stroke="#b7cdd4" />
          <rect x="2" y="6" width="12" height="12" fill="#eef7f8" />
          <rect x="2" y="4" width="3" height="18" fill="#9aa8ac" />
          <rect x="40" y="4" width="3" height="18" fill="#9aa8ac" />
          <rect x="2" y="18" width="41" height="2" fill="#c8dadd" />
        </svg>
      )
    case 'ivstand':
      return (
        <svg width="30" height="66" viewBox="0 0 15 33">
          <rect x="7" y="2" width="1.5" height="28" fill="#b7c0cc" />
          <rect x="8" y="4" width="5" height="7" rx="1" fill="#c6f0c0" />
          <rect x="8.5" y="11" width="0.6" height="8" fill="#b7c0cc" />
          <rect x="3" y="30" width="9" height="2" fill="#8b93a1" />
        </svg>
      )
    case 'redcross':
      return (
        <svg width="40" height="40" viewBox="0 0 20 20">
          <rect x="1" y="1" width="18" height="18" rx="3" fill="#f6f8fc" stroke="#d33" />
          <rect x="8" y="4" width="4" height="12" fill="#e2574c" />
          <rect x="4" y="8" width="12" height="4" fill="#e2574c" />
        </svg>
      )
    case 'door':
      return (
        <svg width="60" height="92" viewBox="0 0 30 46">
          <rect x="1" y="0" width="28" height="46" fill="#8a6c47" />
          <rect x="3" y="2" width="24" height="44" fill="#6f5638" />
          <rect x="5" y="4" width="20" height="15" fill="#5c4630" />
          <rect x="5" y="22" width="20" height="20" fill="#5c4630" />
          <rect x="9" y="7" width="12" height="9" fill="#3f7fbf" opacity="0.5" />
          <circle cx="22" cy="30" r="1.6" fill="#ffcf3b" />
          <rect x="1" y="0" width="28" height="2" fill="#9c7c52" />
        </svg>
      )
    case 'poster':
      return (
        <svg width="58" height="48" viewBox="0 0 29 24">
          <rect x="0" y="0" width="29" height="24" fill="#f6f8fc" stroke="#c3ccdb" strokeWidth="1.5" />
          <rect x="3" y="3" width="23" height="18" fill="#bfe0ff" />
          <path d="M3 21 L11 12 L16 17 L21 10 L26 21 Z" fill="#7bd88f" />
          <circle cx="21" cy="8" r="2.5" fill="#ffcf3b" />
        </svg>
      )
    case 'watercooler':
      return (
        <svg width="34" height="62" viewBox="0 0 17 31">
          <path d="M5 0 L12 0 L13 9 L4 9 Z" fill="#8fd3ff" />
          <rect x="4" y="9" width="9" height="2" fill="#cfe8ff" />
          <rect x="3" y="11" width="11" height="16" fill="#eef2f6" stroke="#c3ccdb" />
          <rect x="6" y="15" width="5" height="3" fill="#63b6e6" />
          <rect x="6" y="20" width="2" height="3" fill="#c3ccdb" />
          <rect x="3" y="27" width="11" height="4" fill="#b9c2d2" />
        </svg>
      )
    case 'deskplant':
      return (
        <svg width="22" height="26" viewBox="0 0 11 13">
          <rect x="2" y="1" width="7" height="6" fill="#2fae5f" />
          <rect x="4" y="0" width="2" height="4" fill="#3ed071" />
          <rect x="3" y="7" width="5" height="5" fill="#c96f3a" />
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
  'door', 'poster', 'watercooler', 'deskplant',
  'porthole', 'console', 'satellite', 'hologram',
  'labpanel', 'microscope', 'beakers', 'dnahelix',
  'stonewindow', 'torch', 'banner', 'armor',
  'glasswall', 'departboard', 'luggage',
  'storefront', 'saletag', 'fountain',
  'hospwindow', 'hospbed', 'ivstand', 'redcross',
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
