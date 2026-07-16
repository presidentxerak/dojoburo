# DojoCity kit

A **self-contained, portable 3D isometric city** for React — the whole DojoBuro
metropolis (buildings, a player HQ that grows one floor per unit, civic
landmarks, parks, pools, traffic, pedestrians and roaming giants), packaged so
you can drop it into any other app.

Zero coupling to DojoBuro: every piece of data and every callback comes in
through props. No global stores, no app CSS variables, no router.

## Install

Copy the whole `city-kit/` folder into your project. It needs these peer
dependencies (you almost certainly already have the first two):

```bash
npm install react three @react-three/fiber @react-three/drei
```

## Use

```tsx
import { DojoCity, type CityCompany } from './city-kit'
import './city-kit/styles.css'

const companies: CityCompany[] = [
  { id: 'a', name: 'Nimbus', cat: 'SaaS', accent: '#2f7fd6',
    tagline: 'Cloud ops on autopilot.', revenue: 128400, sales: 342, href: '/nimbus' },
  // …
]

export function CityPage() {
  return (
    // give the kit a sized parent — it fills 100% of it
    <div style={{ position: 'fixed', inset: 0 }}>
      <DojoCity
        hqFloors={5}
        hqName="Acme HQ"
        hqAccent="#ef7d9d"
        companies={companies}
        onEnterDojo={() => navigate('/hq')}
        onExit={() => navigate(-1)}
        onGuide={() => navigate('/guide')}
        onSelectCompany={(c) => console.log(c.name)}
      />
    </div>
  )
}
```

A ready-to-run example lives in `demo.tsx`.

## Props

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `hqFloors` | `number` | `1` | The player HQ grows one floor per unit. |
| `hqName` | `string` | `'My HQ'` | Label over the HQ + built-in header brand. |
| `hqAccent` | `string` | `'#ef7d9d'` | HQ accent colour. |
| `companies` | `CityCompany[]` | `[]` | Placed on the buildings ringing the HQ. |
| `title` / `subtitle` | `string` | demo copy | Text of the built-in title overlay. |
| `onEnterDojo` | `() => void` | — | Click the player HQ. |
| `onExit` | `() => void` | — | Header back button (hidden if omitted). |
| `onGuide` | `() => void` | — | Click the Academy building. |
| `onSelectCompany` | `(c: CityCompany) => void` | — | Also opens the built-in detail card. |
| `header` | `ReactNode` | built-in bar | Replace the top header entirely. |
| `footer` | `ReactNode` | — | Render your own bottom bar below the stage. |
| `className` | `string` | — | Extra class on the root. |

`CityCompany` (all optional except `id` + `name`):

```ts
interface CityCompany {
  id: string
  name: string
  accent?: string    // building + card accent
  cat?: string       // category label
  tagline?: string   // one-line description
  revenue?: number   // headline stat on the card
  sales?: number     // secondary stat
  href?: string      // "Open site" link
  bg?: string; ink?: string  // optional card theming
}
```

## Interactions (built in)

- **Zoom** — 4 levels (control bottom-right); labels & detail fade in as you zoom.
- **Pan** — drag to move around the metropolis.
- **Company card** — click a company building to open a detail card.
- **Tips** — click the konbini for a rotating tip.

## What differs from the in-app version

To stay dependency-free the kit swaps two DojoBuro-specific pieces:

- **Pedestrians** use a small bundled low-poly walker instead of the app's
  character/skin system.
- **Companies** use the lean `CityCompany` type (props) instead of the app's
  internal showcase data model.

Everything else — buildings, HQ, civic landmarks, parks/pools, traffic and the
roaming giants — is the same geometry as the shipped app.

## Files

```
city-kit/
  index.ts        public exports
  DojoCity.tsx    the component (scene + built-in chrome)
  cityLayout.ts   pure procedural layout (no deps)
  types.ts        CityCompany, DojoCityProps
  styles.css      self-contained styles (no external vars)
  demo.tsx        runnable example
  README.md       this file
```
