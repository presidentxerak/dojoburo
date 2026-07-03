// Tiny inline-SVG icon set (currentColor). Replaces all emoji in the UI.
type Name =
  | 'music'
  | 'sound'
  | 'mute'
  | 'sun'
  | 'moon'
  | 'refresh'
  | 'coin'
  | 'star'
  | 'star-o'
  | 'check'
  | 'close'
  | 'link'
  | 'bolt'
  | 'rocket'
  | 'building'

export function Icon({ name, size = 14, className }: { name: Name; size?: number; className?: string }) {
  const p = { width: size, height: size, viewBox: '0 0 16 16', fill: 'currentColor', className, 'aria-hidden': true } as const
  switch (name) {
    case 'music':
      return <svg {...p}><path d="M6 2h7v2H8v7a2.5 2.5 0 1 1-2-2.45V2Zm-1 8.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z" /></svg>
    case 'sound':
      return <svg {...p}><path d="M3 6h2l3-3v10L5 10H3V6Zm8.5-1.5 1 1A5 5 0 0 1 12.5 11l-1 1A4 4 0 0 0 11.5 4.5Z" /></svg>
    case 'mute':
      return <svg {...p}><path d="M3 6h2l3-3v10L5 10H3V6Zm8 .3 1.2 1.2L13.4 6.3l.9.9-1.2 1.2 1.2 1.2-.9.9-1.2-1.2L11 10.5l-.9-.9L11.3 8.4 10.1 7.2Z" /></svg>
    case 'sun':
      return <svg {...p}><circle cx="8" cy="8" r="3" /><path d="M8 0v2M8 14v2M0 8h2M14 8h2M2 2l1.5 1.5M12.5 12.5 14 14M14 2l-1.5 1.5M3.5 12.5 2 14" stroke="currentColor" strokeWidth="1.2" /></svg>
    case 'moon':
      return <svg {...p}><path d="M11 2a6 6 0 1 0 3 11A7 7 0 0 1 11 2Z" /></svg>
    case 'refresh':
      return <svg {...p}><path d="M8 3a5 5 0 1 0 4.5 2.8l-1.3.7A3.5 3.5 0 1 1 8 4.5V6l3-2-3-2v1Z" /></svg>
    case 'coin':
      return <svg {...p}><circle cx="8" cy="8" r="6.5" fill="currentColor" /><circle cx="8" cy="8" r="4.5" fill="none" stroke="#1b1b1b" strokeWidth="0.8" opacity="0.35" /><path d="M7 5h2v1h-2v1h2v1H7v2H6V5h1Z" fill="#1b1b1b" opacity="0.5" /></svg>
    case 'star':
      return <svg {...p}><path d="M8 1.5 9.9 5.5l4.1.5-3 2.9.8 4.1L8 11.9 4.2 13l.8-4.1-3-2.9 4.1-.5Z" /></svg>
    case 'star-o':
      return <svg {...p}><path d="M8 1.5 9.9 5.5l4.1.5-3 2.9.8 4.1L8 11.9 4.2 13l.8-4.1-3-2.9 4.1-.5Z" fill="none" stroke="currentColor" strokeWidth="1" /></svg>
    case 'check':
      return <svg {...p}><path d="M6.5 11 3 7.5l1.2-1.2L6.5 8.6l5.3-5.3L13 4.5 6.5 11Z" /></svg>
    case 'close':
      return <svg {...p}><path d="M4 3 8 7l4-4 1 1-4 4 4 4-1 1-4-4-4 4-1-1 4-4-4-4 1-1Z" /></svg>
    case 'link':
      return <svg {...p}><path d="M6.5 9.5 9.5 6.5M4.5 8 3 9.5a2.1 2.1 0 0 0 3 3L7.5 11M8.5 5 10 3.5a2.1 2.1 0 0 1 3 3L11.5 8" fill="none" stroke="currentColor" strokeWidth="1.3" /></svg>
    case 'bolt':
      return <svg {...p}><path d="M9 1 3 9h4l-1 6 6-8H8l1-6Z" /></svg>
    case 'rocket':
      return <svg {...p}><path d="M8 1c3 1.5 4 4.5 4 7l-2 2H6L4 8c0-2.5 1-5.5 4-7Zm0 4a1.3 1.3 0 1 0 0 2.6A1.3 1.3 0 0 0 8 5ZM5 11l-1 3 3-1M11 11l1 3-3-1" /></svg>
    case 'building':
      return <svg {...p}><path d="M2 14V4l5-2v12H2Zm6 0V6l6 2v6H8Zm-4-8h1v1H4V6Zm0 3h1v1H4V9Zm6 0h1v1h-1V9Zm2 0h1v1h-1V9Zm-2 3h1v1h-1v-1Zm2 0h1v1h-1v-1Z" /></svg>
  }
}
