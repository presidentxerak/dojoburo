# dojo-city

A **self-contained, portable 3D isometric city** for React (Three.js): buildings,
a player HQ that grows one floor per unit, civic landmarks, parks, pools,
traffic, pedestrians and roaming giants. Everything is driven by props — no
global stores, no router, no external CSS variables.

## Install

```bash
# from the tarball
npm install ./dojo-city-0.1.0.tgz

# or, once published
npm install dojo-city
```

Peer dependencies (provide them in your app):

```bash
npm install react react-dom three @react-three/fiber@^8 @react-three/drei@^9
```

> Built and tested against **React 18 + @react-three/fiber 8 + @react-three/drei 9**.

## Use

```tsx
import { DojoCity, type CityCompany } from 'dojo-city'
import 'dojo-city/styles.css'

const companies: CityCompany[] = [
  { id: 'a', name: 'Nimbus', cat: 'SaaS', accent: '#2f7fd6',
    tagline: 'Cloud ops on autopilot.', revenue: 128400, sales: 342, href: '/nimbus' },
]

export function CityPage() {
  return (
    // the component fills 100% of its parent — give the parent a size
    <div style={{ position: 'fixed', inset: 0 }}>
      <DojoCity
        hqFloors={5}
        hqName="Acme HQ"
        companies={companies}
        onEnterDojo={() => {/* ... */}}
        onExit={() => {/* ... */}}
        onGuide={() => {/* ... */}}
        onSelectCompany={(c) => console.log(c.name)}
      />
    </div>
  )
}
```

## Props

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `hqFloors` | `number` | `1` | Player HQ grows one floor per unit. |
| `hqName` | `string` | `'My HQ'` | Label over the HQ + default header brand. |
| `hqAccent` | `string` | `'#ef7d9d'` | HQ accent colour. |
| `companies` | `CityCompany[]` | `[]` | Placed on the buildings ringing the HQ. |
| `title` / `subtitle` | `string` | demo copy | Built-in title overlay. |
| `onEnterDojo` | `() => void` | — | Click the player HQ. |
| `onExit` | `() => void` | — | Header back button (hidden if omitted). |
| `onGuide` | `() => void` | — | Click the Academy building. |
| `onSelectCompany` | `(c) => void` | — | Also opens the built-in detail card. |
| `header` | `ReactNode` | built-in bar | Replace the top header. |
| `footer` | `ReactNode` | — | Custom bottom bar under the stage. |
| `className` | `string` | — | Extra class on the root. |

```ts
interface CityCompany {
  id: string; name: string
  accent?: string; cat?: string; tagline?: string
  revenue?: number; sales?: number; href?: string
  bg?: string; ink?: string
}
```

## Notes

- **Sized parent required** — wrap it in a full-screen (`position:fixed;inset:0`)
  or fixed-height container, else the canvas has no height.
- **SSR (Next.js)** — Three.js is client-only. Add `'use client'` and load the
  page with `dynamic(() => import('./CityPage'), { ssr: false })`.
- Interactions: 4-level zoom, drag to pan, click a company building for its card,
  click the konbini for a tip.

## Build from source

```bash
npm install
npm run build   # → dist/index.js + dist/index.d.ts + dist/styles.css
```
