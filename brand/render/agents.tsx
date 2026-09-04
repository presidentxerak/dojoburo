// The capture sheet the brand guidelines are photographed from.
//
// Every block below mounts the app's OWN component — TeammateCard, the same one
// the landing, the roster and the walkthrough use, and Object3DInline, the same
// shapes the landing sections carry. Nothing is redrawn to look like the
// product, so a card that changes in the app changes here on the next capture.
//
// Each block carries data-shot="<name>"; brand/render-3d.mjs finds them,
// screenshots each one at 3x and writes <name>.png beside this file.
import { createRoot } from 'react-dom/client'
import { TeammateCard } from '../../src/components/TeammateCard'
import { Object3DInline } from '../../src/components/landing/Object3D'
import { ROLE_BY_ID } from '../../src/data/roleAgents'
import '../../src/index.css'

// four of the eight, chosen for four different silhouettes and four tints
const CREW = ['chief', 'brandi', 'busino', 'vaultor']

// The landing's own shapes, with the section accent each one is used at.
//
// Captured at rest (speed 0), which is the pose each shape was modelled for —
// the detail sits on the +z face, so head-on is the intended view. 'coins' is
// the exception and is deliberately not here: its three discs are stacked
// face-on to the camera, so standing still they overlap into a single blob and
// only separate once the object turns. A still of it would misrepresent it.
const ICONS: [string, string][] = [
  ['briefcase', '#ffc61a'],
  ['network', '#2f6bff'],
  ['gear', '#08c2ac'],
  ['rocket', '#ff7a1a'],
  ['gem', '#a78bfa'],
  ['card', '#45c46a'],
]

// Each object floats in a square canvas sized for its widest spin, so at rest
// it leaves a deep empty band above and below. The band is real but it is not
// the subject, so the capture clips to the middle of the frame.
const CROP = 104

function Sheet() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'flex-start' }}>
      {/* one card on its own · the anatomy shot */}
      <div className="shot" data-shot="teammate-single">
        <div style={{ width: 240 }}>
          <TeammateCard role={ROLE_BY_ID.chief} size={150} phase={0.4} />
        </div>
      </div>

      {/* the set · four teammates as they sit in a roster */}
      <div className="shot" data-shot="teammate-row">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 200px)', gap: 16 }}>
          {CREW.map((id, i) => (
            <TeammateCard key={id} role={ROLE_BY_ID[id]} size={132} phase={i * 1.7} />
          ))}
        </div>
      </div>

      {/* the 3D icons, at the size the landing uses them */}
      <div className="shot" data-shot="icons-3d">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 150px)', gap: 4 }}>
          {ICONS.map(([kind, color]) => (
            <div key={kind} style={{ height: CROP, overflow: 'hidden' }}>
              <div style={{ marginTop: (CROP - 150) / 2 }}>
                <Object3DInline kind={kind} color={color} size={150} speed={0} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<Sheet />)
