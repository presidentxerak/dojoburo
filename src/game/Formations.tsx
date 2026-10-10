// LA PAGE DES FORMATIONS · demandé : « Créé une page Formations avec les cards
// de formations et leur maîtres avec leur pricing (déplace les card formation
// sur la page carte dans cette page) ».
//
// La carte reste la porte d'entrée visuelle ; cette page est la liste, pour
// qui veut comparer : chaque formation, son maître, son nombre de cours, sa
// progression et son prix. Les montants viennent de data/plans (jamais écrits
// ici, voir scripts/test-game).
import { SEO } from '../data/seo'
import { Lnk } from '../lib/router'
import { BauhausIcon } from '../components/BauhausIcon'
import { useHeadTags } from '../lib/headTags'
import { useLang } from '../i18n'
import { B, say, type Bi } from '../data/bilingual'
import { PACKS, packPath, levelsOf, eurOf, type Pack } from '../data/packs'
import { priceTag, PASS_EUR } from '../data/plans'
import { useAccess, FREE_LESSONS } from './access'
import { useGame } from './progress'
import { Shell } from './Shell'
import { SupportBot } from '../components/SupportBot'
import { gridToUrl } from '../pixel/raster'
import { LiveChibi } from '../pixel/LiveChibi'
import { masterOf } from '../pixel/masters'
import { drawTempleIcon } from '../temple/art/world'
import { drawCardScene } from '../temple/art/cardScene'
import { zen } from '../lib/zen'
import { TT } from '../temple/templeText'
import { TrainingTabs } from '../school/SchoolPages'

export const FT = {
  title: B('The AI courses', 'Les formations IA'),
  lead: B('Each course is a series of short lessons, taught by its own master. Start with the free one, then pick the course that matches your work.',
    'Chaque formation est une suite de cours courts, donnés par son maître. Commencez par la formation gratuite, puis choisissez celle qui correspond à votre métier.'),
  passH: B('Every course with the Dojoburo Pass', 'Toutes les formations avec le Pass Dojoburo'),
  passBody: B('One payment, every course open, the courses to come included.', 'Un seul paiement, toutes les formations ouvertes, celles à venir comprises.'),
  seePrices: B('See the detailed prices', 'Voir les tarifs détaillés'),
  orPass: B('or included in the Pass', 'ou inclus dans le Pass'),
  taughtBy: B('Taught by', 'Donnée par'),
  progress: B('lessons done', 'cours suivis'),
  start: B('Start the course', 'Commencer la formation'),
  resume: B('Resume', 'Reprendre'),
  owned: B('Unlocked', 'Débloquée'),
}

/** La carte d'une formation · le décor pixel, le maître, le prix. */
function CourseCard({ p, k }: { p: Pack; k: number }) {
  const lang = useLang()
  const s = (b: Bi) => say(b, lang)
  const a = useAccess()
  const g = useGame()
  const eur = eurOf(p)
  const locked = eur > 0 && !a.ownsPack(p)
  const levels = levelsOf(p)
  const done = levels.filter(({ module, level }) => g.isDone(module.id, level.id)).length
  const m = masterOf(p.id)
  return (
    <Lnk className={`tw-card gm-rise${locked ? ' is-locked' : ''}`} href={packPath(p.id)} onClick={() => zen.sfx(locked ? 'locked' : 'tap')}
      onMouseEnter={() => zen.sfx('step')} style={{ ['--ac' as string]: p.tint, ['--i' as string]: k }}>
      <span className="tw-card-scene" style={{ backgroundImage: `url(${gridToUrl(`cs:${p.id}:${locked}`, () => drawCardScene(p.tint, k + 1, locked))})` }}>
        <img className="tw-card-temple" src={gridToUrl(`ti:${p.id}:${locked}`, () => drawTempleIcon(p.tint, k, locked))} alt="" width={80} height={88} />
        <span className="tw-card-master"><LiveChibi spec={m.spec} scale={2} seed={p.id} /></span>
        {locked && <span className="tw-card-lock" aria-hidden="true"><BauhausIcon name="lock" size={14} /></span>}
        <i className="tw-card-shine" aria-hidden="true" />
      </span>
      <b className="tw-card-sign">{s(p.title)}</b>
      <span className="tw-card-t">
        <span className="fm-blurb">{s(p.blurb)}</span>
        <em>{s(FT.taughtBy)} {s(TT.master).toLowerCase()} {m.name} · {levels.length} {s(TT.floors)}</em>
        <span className="tw-card-bar" role="progressbar" aria-valuemin={0} aria-valuemax={levels.length} aria-valuenow={done}
          aria-label={`${done} / ${levels.length}`}><i style={{ width: `${levels.length ? (done / levels.length) * 100 : 0}%` }} /></span>
        <span className="tw-card-foot">
          <small className="tw-card-n">{done} / {levels.length} {s(FT.progress)}</small>
          <span className={`tw-tag${locked ? ' locked' : eur === 0 ? ' free' : ' open'}`}>
            {locked && <BauhausIcon name="lock" size={10} />}
            {eur === 0 ? s(TT.free) : locked ? `${FREE_LESSONS} ${s(TT.freeLessons)}` : s(FT.owned)}
          </span>
        </span>
        {/* LE PRIX · celui de la formation seule, et le rappel du Pass */}
        <span className="fm-price">
          {eur === 0 ? <b>{priceTag(0)}</b> : <><b>{priceTag(eur)}</b> <small>{s(FT.orPass)}</small></>}
        </span>
        <span className="tw-card-go">{done > 0 ? s(FT.resume) : s(FT.start)} <BauhausIcon name="play" size={10} /></span>
      </span>
    </Lnk>
  )
}

export function FormationsPage() {
  const lang = useLang()
  const s = (b: Bi) => say(b, lang)
  const a = useAccess()
  useHeadTags({ title: `${s(FT.title)} · Dojoburo`, description: s(SEO.home.description), path: '/formations' })

  return (
    <Shell wide>
      <TrainingTabs on="ai" />
      <section className="gm-sec">
        <h1 className="gm-h1">{s(FT.title)}</h1>
        <p className="gm-lead">{s(FT.lead)}</p>
      </section>

      {!a.hasPass && (
        <section className="gm-sec">
          <div className="cy-card fm-pass">
            <div>
              <b>{s(FT.passH)} · {priceTag(PASS_EUR)}</b>
              <p className="cy-sub">{s(FT.passBody)}</p>
            </div>
            <Lnk className="gm-cta" href="/tarifs">{s(FT.seePrices)} →</Lnk>
          </div>
        </section>
      )}

      <section className="gm-sec">
        <div className="tw-cards">
          {PACKS.map((p, k) => <CourseCard key={p.id} p={p} k={k} />)}
        </div>
      </section>
      <SupportBot />
    </Shell>
  )
}
