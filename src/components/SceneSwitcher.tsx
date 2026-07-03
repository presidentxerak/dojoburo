import { useDojo } from '../store'
import { SCENE_LIST } from '../data/scenes'

/** Buttons below the scene to switch decor templates. */
export function SceneSwitcher() {
  const sceneId = useDojo((s) => s.sceneId)
  const setScene = useDojo((s) => s.setScene)

  // Only one template is exposed for now — hide the switcher entirely.
  if (SCENE_LIST.length <= 1) return null

  return (
    <div className="scene-switch" role="tablist" aria-label="Scene template">
      {SCENE_LIST.map((s) => (
        <button
          key={s.id}
          role="tab"
          aria-selected={sceneId === s.id}
          className={`scene-btn ${sceneId === s.id ? 'active' : ''}`}
          onClick={() => setScene(s.id)}
        >
          {s.label}
        </button>
      ))}
    </div>
  )
}
