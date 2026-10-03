// LES TEMPLES · la page d'accueil du jeu (onglet Dojoburo).
//
// Demandé : « On commence le jeu avec une page d'accueil avec les cards des
// cours [...] Dans la bottom bar on a dojoburo avec la page des temples avec
// le nom du cours au-dessus en mode Zelda pixel art 2D, quand on clique sur
// les temples on voit le temple de face ».
//
// LA PAGE · la carte du monde vue de dessus, chaque bâtiment surmonté du nom
// de sa formation. La liste des formations, avec leurs maîtres et leurs prix,
// vit sur sa propre page (game/Formations) ; le personnage se crée au profil.
import { SEO } from '../data/seo'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Lnk } from '../lib/router'
import { useHeadTags } from '../lib/headTags'
import { useLang } from '../i18n'
import { say, type Bi } from '../data/bilingual'
import { PACKS, packPath, eurOf, type Pack } from '../data/packs'
import { useAccess } from '../game/access'
import { Shell } from '../game/Shell'
import { SupportBot } from '../components/SupportBot'
import { gridToUrl } from '../pixel/raster'
import { drawWorld, drawTempleIcon, worldRoutes, worldDecor } from './art/world'
import { WorldLife } from './WorldLife'
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
  const box = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(360)

  useHeadTags({ title: s(SEO.home.title), description: s(SEO.home.description), path: '/' })
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
  const decor = useMemo(() => worldDecor(L.w, L.h, L.spots, 7), [L])
  const scale = width / L.w
  // LE CADENAS SUIT L'ACHAT · pas le passe-droit d'essai, qui ouvre tout mais
  // ne doit pas faire croire que tout est gratuit (voir game/access)
  const lockedOf = (p: Pack) => eurOf(p) > 0 && !a.ownsPack(p)

  return (
    <Shell wide>
      {/* L'EN-TÊTE · demandé : « en titre Apprenez l'IA avec Dojoburo, masque
          la card Choisissez votre personnage [...] A la place écris :
          Choisissez votre formation IA sur la carte ». Le personnage se crée
          maintenant dans le profil, et la phrase d'accès d'essai est retirée. */}
      <section className="gm-sec tw-head">
        <div className="tw-head-row">
          <h1 className="tw-title">{s(TT.worldTitle)}</h1>
          <SoundToggle />
        </div>
        <p className="gm-lead tw-pick">{s(TT.worldLead)}</p>
      </section>

      {/* LA CARTE DU MONDE · un temple par formation, le nom au-dessus. */}
      <section className="gm-sec">
        <div className="tw-world" ref={box} style={{ height: L.h * scale }}>
          {worldUrl && <img className="tw-world-bg" src={worldUrl} alt="" aria-hidden="true" width={L.w * scale} height={L.h * scale} />}
          <WorldLife decor={decor} scale={scale} />
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

      {/* LES CARTES DES FORMATIONS · déplacées sur la page Formations. */}
      <section className="gm-sec tw-more">
        <Lnk className="cc-btn cc-slate" href="/formations">{s(TT.allCourses)} →</Lnk>
      </section>
      <SupportBot />
    </Shell>
  )
}
