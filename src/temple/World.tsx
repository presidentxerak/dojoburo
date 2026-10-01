// LES TEMPLES · la page d'accueil du jeu (onglet Dojoburo).
//
// Demandé : « On commence le jeu avec une page d'accueil avec les cards des
// cours [...] Dans la bottom bar on a dojoburo avec la page des temples avec
// le nom du cours au-dessus en mode Zelda pixel art 2D, quand on clique sur
// les temples on voit le temple de face ».
//
// LA PAGE · d'abord la carte du monde vue de dessus, chaque temple surmonté
// du nom de son cours ; ensuite les cartes des cours, pour qui préfère une
// liste. Les deux mènent au même temple. Un premier passage propose de créer
// son personnage.
import { useEffect, useMemo, useRef, useState } from 'react'
import { Lnk } from '../lib/router'
import { useHeadTags } from '../lib/headTags'
import { useLang } from '../i18n'
import { say, type Bi } from '../data/bilingual'
import { PACKS, packPath, levelsOf, eurOf, type Pack } from '../data/packs'
import { priceTag } from '../data/plans'
import { useAccess } from '../game/access'
import { useGame } from '../game/progress'
import { Shell } from '../game/Shell'
import { SupportBot } from '../components/SupportBot'
import { gridToUrl } from '../pixel/raster'
import { ChibiSprite } from '../pixel/ChibiSprite'
import { useAvatar, saveAvatar } from '../pixel/avatar'
import { AvatarPicker } from '../pixel/AvatarPicker'
import { masterOf } from '../pixel/masters'
import { drawWorld, drawTempleIcon, worldRoutes } from './art/world'
import { Walkers } from './Walkers'
import { SoundToggle } from './SoundToggle'
import { zen, useZenAmbience } from '../lib/zen'
import { TT } from './templeText'

/** La disposition de la carte · quatre temples par rangée sur grand écran,
 *  deux sur téléphone, en lacet pour que le chemin serpente. */
function layout(n: number, wide: boolean) {
  const cols = wide ? 4 : 2
  const w = wide ? 640 : 320
  const stepX = w / cols
  const stepY = wide ? 118 : 112
  const spots = Array.from({ length: n }, (_, i) => {
    const row = Math.floor(i / cols)
    const c = i % cols
    const col = row % 2 === 0 ? c : cols - 1 - c
    return { x: Math.round(stepX / 2 + col * stepX), y: Math.round(78 + row * stepY) }
  })
  const h = Math.round(78 + (Math.ceil(n / cols) - 1) * stepY + 70)
  return { w, h, spots }
}

export function WorldPage() {
  const lang = useLang()
  const s = (b: Bi) => say(b, lang)
  const a = useAccess()
  const g = useGame()
  const avatar = useAvatar()
  const [picking, setPicking] = useState(false)
  const box = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(360)

  useHeadTags({ title: `${s(TT.worldTitle)} · DojoBuro`, description: s(TT.worldLead), path: '/' })
  useZenAmbience()

  useEffect(() => {
    const el = box.current
    if (!el) return
    const ro = new ResizeObserver(() => setWidth(el.clientWidth))
    ro.observe(el)
    setWidth(el.clientWidth)
    return () => ro.disconnect()
  }, [])

  const wide = width >= 700
  const L = useMemo(() => layout(PACKS.length, wide), [wide])
  const worldUrl = useMemo(() => gridToUrl(`world:${L.w}x${L.h}`, () => drawWorld(L.w, L.h, L.spots, 7)), [L])
  const routes = useMemo(() => worldRoutes(L.w, L.h, L.spots, 7), [L])
  const scale = width / L.w
  const lockedOf = (p: Pack) => eurOf(p) > 0 && !a.opensPack(p)

  return (
    <Shell wide>
      <section className="gm-sec tw-head">
        <div className="tw-head-row">
          <h1 className="tw-title">{s(TT.worldTitle)}</h1>
          <SoundToggle />
        </div>
        <p className="gm-lead">{s(TT.worldLead)}</p>
      </section>

      {/* LE PERSONNAGE · proposé au premier passage, modifiable ensuite. */}
      {(!avatar.chosen || picking) && (
        <section className="gm-sec">
          {picking
            ? (
              <div className="cy-card">
                <AvatarPicker initial={avatar.spec} onCancel={() => setPicking(false)} onSave={(sp) => { saveAvatar(sp); setPicking(false) }} />
              </div>
            )
            : (
              <div className="cy-card tw-choose">
                <ChibiSprite spec={avatar.spec} scale={4} />
                <div>
                  <b>{s(TT.chooseTitle)}</b>
                  <p className="cy-sub">{s(TT.chooseLead)}</p>
                </div>
                <button className="gm-cta" onClick={() => setPicking(true)}>{s(TT.choose)}</button>
              </div>
            )}
        </section>
      )}

      {/* LA CARTE DU MONDE · un temple par formation, le nom au-dessus. */}
      <section className="gm-sec">
        <div className="tw-world" ref={box} style={{ height: L.h * scale }}>
          {worldUrl && <img className="tw-world-bg" src={worldUrl} alt="" aria-hidden="true" width={L.w * scale} height={L.h * scale} />}
          <Walkers routes={routes} scale={scale} count={wide ? 12 : 7} seed={7} />
          {PACKS.map((p, i) => {
            const spot = L.spots[i]
            const locked = lockedOf(p)
            const icon = gridToUrl(`ti:${p.id}:${locked}`, () => drawTempleIcon(p.tint, i, locked))
            return (
              <Lnk key={p.id} className={`tw-temple${locked ? ' locked' : ''}`} href={packPath(p.id)} onClick={() => zen.sfx(locked ? 'locked' : 'door')}
                style={{ left: (spot.x - 20) * scale, top: (spot.y - 26) * scale, width: 40 * scale }}
                aria-label={`${say(p.title, lang)}${locked ? ` · ${s(TT.locked)}` : ''}`}>
                <span className="tw-label" style={{ ['--ac' as string]: p.tint }}>{say(p.title, lang)}</span>
                {icon && <img src={icon} alt="" width={40 * scale} height={44 * scale} />}
              </Lnk>
            )
          })}
        </div>
      </section>

      {/* LES CARTES DES COURS · la même chose, en liste. */}
      <section className="gm-sec">
        <h2 className="pf-h2">{s(TT.coursesH2)}</h2>
        <div className="tw-cards">
          {PACKS.map((p, k) => {
            const locked = lockedOf(p)
            const levels = levelsOf(p)
            const done = levels.filter(({ module, level }) => g.isDone(module.id, level.id)).length
            const m = masterOf(p.id)
            return (
              <Lnk key={p.id} className="tw-card gm-rise" href={packPath(p.id)} onClick={() => zen.sfx('tap')} style={{ ['--ac' as string]: p.tint, ['--i' as string]: k }}>
                <span className="tw-card-art"><ChibiSprite spec={m.spec} scale={3} /></span>
                <span className="tw-card-t">
                  <b>{say(p.title, lang)}</b>
                  <em>{s(TT.master)} {m.name} · {levels.length} {s(TT.floors)}{done ? ` · ${done}/${levels.length}` : ''}</em>
                  <span className={`tw-tag${locked ? ' locked' : eurOf(p) === 0 ? ' free' : ' open'}`}>
                    {eurOf(p) === 0 ? s(TT.free) : locked ? `${s(TT.locked)} · ${priceTag(eurOf(p))}` : s(TT.open)}
                  </span>
                </span>
              </Lnk>
            )
          })}
        </div>
      </section>
      <SupportBot />
    </Shell>
  )
}
