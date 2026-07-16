// Live demo of the portable DojoCity kit · rendered at #city-kit.
// Doubles as a copy-paste example of importing the kit into another app.
import { DojoCity, type CityCompany } from './index'
import './styles.css'

const DEMO_COMPANIES: CityCompany[] = [
  { id: 'a', name: 'Nimbus', cat: 'SaaS', accent: '#2f7fd6', tagline: 'Cloud ops on autopilot.', revenue: 128400, sales: 342, href: '#' },
  { id: 'b', name: 'Peppr', cat: 'Studio', accent: '#e0459b', tagline: 'Design systems as a service.', revenue: 74200, sales: 210, href: '#' },
  { id: 'c', name: 'Verdant', cat: 'Climate', accent: '#1fa563', tagline: 'Carbon accounting for teams.', revenue: 96100, sales: 158, href: '#' },
  { id: 'd', name: 'Forge', cat: 'Dev tools', accent: '#d98c17', tagline: 'Ship faster with less glue.', revenue: 210300, sales: 512, href: '#' },
  { id: 'e', name: 'Lumen', cat: 'AI', accent: '#7b5cff', tagline: 'Answers from your own data.', revenue: 305800, sales: 690, href: '#' },
  { id: 'f', name: 'Harbor', cat: 'Fintech', accent: '#00b3a4', tagline: 'Treasury for startups.', revenue: 152900, sales: 271, href: '#' },
]

export function CityKitDemo() {
  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <DojoCity
        hqFloors={5}
        hqName="Acme HQ"
        hqAccent="#ef7d9d"
        companies={DEMO_COMPANIES}
        title="City Kit demo"
        subtitle="A portable 3D metropolis. Buildings, a growing HQ, civic landmarks, parks, pools, traffic, pedestrians and roaming giants — all driven by props."
        onEnterDojo={() => alert('Enter HQ')}
        onExit={() => { location.hash = '' }}
        onGuide={() => alert('Open guide')}
        onSelectCompany={(c) => console.log('selected', c.name)}
      />
    </div>
  )
}
