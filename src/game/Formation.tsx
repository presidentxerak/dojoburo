// LE PARCOURS · la carte, et une cité.
//
// DEUX ÉCRANS, ET C'EST VOULU. La carte montre où aller ; une cité montre ses
// dojos. Un troisième écran entre les deux (une page « module » avec un
// sommaire, puis une page « niveau ») ajouterait un clic qui n'apprend rien.
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { SupportBot } from '../components/SupportBot'
import { BauhausIcon } from '../components/BauhausIcon'
import { Lnk, navigate } from '../lib/router'
import { useHeadTags } from '../lib/headTags'
import { useLang, useT } from '../i18n'
import {
  say, PATH_MODULES, PATH_MODULE_COUNT, PATH_LEVEL_COUNT, PATH_HOURS,
  modulePath, levelPath, moduleNumber, MODULE_BY_ID,
} from '../data/curriculum'
import { USE_CASE_BY_ID, useCaseIn } from '../data/agentUseCases'
import { PATH_EUR, priceTag } from '../data/plans'
import { useGame } from './progress'
import { useAccess } from './access'
import { WorldMap } from './WorldMap'
import { Gate } from './Gate'
import { mapOf, mapKey } from './nav'

/* ------------------------------------------------------------------ */
/* LA CARTE                                                            */
/* ------------------------------------------------------------------ */

export function FormationPage() {
  const lang = useLang()
  const t = useT()
  const g = useGame()

  useHeadTags({
    title: `${t('g.mapTitle')} · DojoBuro`,
    description: t('g.mapLead'),
    path: '/formation',
  })

  return (
    <div className="landing dg2 ac fm">
      <SiteHeader />

      {/* LA CARTE PREND L'ÉCRAN · elle est le produit, pas une illustration
          posée au-dessus d'une liste. C'est la leçon de la salle de classe de
          /build : un lieu qui occupe un bandeau se lit comme une vignette. */}
      <div className="fm-full">
        <WorldMap onOpen={(id) => navigate(modulePath(id))} />
        <div className="fm-hud">
          <h1>{t('g.mapTitle')}</h1>
          <p>{PATH_MODULE_COUNT} {t('g.cities')} · {PATH_LEVEL_COUNT} {t('g.dojos')} · {PATH_HOURS} {t('lp.hours')}</p>
          <span className="fm-bar"><i style={{ width: `${g.pathPercent}%` }} /></span>
          <em>{g.pathDone} / {g.pathTotal} {t('g.dojos')}</em>
        </div>
      </div>

      {/* LA LISTE, SOUS LA CARTE · elle n'est pas un doublon.
          Une carte en trois dimensions ne se parcourt pas au clavier, ne se lit
          pas par un lecteur d'écran, et tient mal sur un téléphone tenu d'une
          main. La liste dit exactement la même chose dans une forme qui
          supporte tout ça. Les deux lisent la même source, donc elles ne
          peuvent pas se contredire. */}
      <section className="lp-sec fm-list">
        <h2>{t('g.allCities')}</h2>
        <div className="fm-cities">
          {PATH_MODULES.map((m) => {
            const c = g.cityOf(m)
            return (
              <Lnk
                className={`fm-city${c.finished ? ' done' : ''}`}
                key={m.id}
                href={modulePath(m.id)}
                style={{ ['--ac' as string]: m.tint }}
              >
                <span className="fm-city-n">{moduleNumber(m.id)}</span>
                <BauhausIcon className="fm-city-g" name={m.glyph} size={18} />
                <b>{say(m.title, lang)}</b>
                <span className="fm-city-b">{say(m.blurb, lang)}</span>
                <em>{c.done} / {c.total} {t('g.dojos')}</em>
                <span className="fm-city-bar"><i style={{ width: `${c.percent}%` }} /></span>
              </Lnk>
            )
          })}
        </div>
      </section>

      <SiteFooter />
      <SupportBot />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* UNE CITÉ                                                            */
/* ------------------------------------------------------------------ */

export function CityPage({ moduleId }: { moduleId: string }) {
  const lang = useLang()
  const t = useT()
  const g = useGame()
  const a = useAccess()
  const module = MODULE_BY_ID[moduleId]

  useHeadTags({
    title: module ? `${say(module.title, lang)} · DojoBuro` : `${t('g.noCity')} · DojoBuro`,
    description: module ? say(module.blurb, lang) : t('g.noCityBody'),
    path: modulePath(moduleId),
  })

  if (!module) {
    return (
      <div className="landing dg2 ac">
        <SiteHeader />
        <section className="lp-sec">
          <h2>{t('g.noCity')}</h2>
          <p className="lp-lead">{t('g.noCityBody')}</p>
          <p><Lnk className="lp-ghost" href="/formation">← {t('g.backMap')}</Lnk></p>
        </section>
        <SiteFooter />
      </div>
    )
  }

  const c = g.cityOf(module)
  const n = moduleNumber(module.id)

  return (
    <div className="landing dg2 ac cy" style={{ ['--ac' as string]: module.tint }}>
      <SiteHeader />

      <section className="lp-sec cy-hero">
        <nav className="lv-crumbs">
          {/* LE LIEN DU HAUT MÈNE À LA CARTE DE CETTE CITÉ · pas à la carte du
              parcours généraliste. Écrit en dur ici, il aurait renvoyé
              quelqu'un qui suit une formation métier vers une carte où sa cité
              n'apparaît pas. Voir game/nav. */}
          <Lnk href={mapOf(module)}>{t(mapKey(module))}</Lnk>
          <i aria-hidden>›</i>
          <b>{say(module.title, lang)}</b>
        </nav>
        <div className="cy-head">
          <span className="cy-g" style={{ background: module.tint }}>
            <BauhausIcon name={module.glyph} size={24} />
          </span>
          <div>
            <span className="cy-n">{n ? `${t('g.city')} ${n}` : t('g.free')}</span>
            <h1>{say(module.title, lang)}</h1>
            <p className="lp-lead">{say(module.blurb, lang)}</p>
          </div>
        </div>
        <div className="lp-badges">
          <span>{module.levels.length} {t('g.dojos')}</span>
          <span>{module.levels.reduce((k, l) => k + l.minutes, 0)} {t('ac.min')}</span>
          <span>{c.done} {t('ac.finished')}</span>
        </div>
        {c.next && (
          <Lnk className="lp-cta" href={levelPath(module.id, c.next.id)}>
            {c.done > 0 ? t('ac.continue') : t('g.enter')} · {say(c.next.title, lang)} →
          </Lnk>
        )}
      </section>

      <section className="lp-sec">
        <ol className="cy-levels">
          {module.levels.map((l, i) => {
            const done = g.isDone(module.id, l.id)
            const open = a.canOpenLevel(module, l.id)
            const master = USE_CASE_BY_ID[l.master]
            return (
              <li key={l.id} className={`appcard cy-level${done ? ' done' : ''}${open ? '' : ' shut'}`}>
                <Lnk href={levelPath(module.id, l.id)}>
                  <span className="cy-level-n">
                    {done ? <BauhausIcon name="check" size={13} /> : i + 1}
                  </span>
                  <span className="cy-level-txt">
                    <strong>{say(l.title, lang)}</strong>
                    <em>{say(l.learn, lang)}</em>
                    <i className="cy-level-master">
                      {t('g.master')} {master ? useCaseIn(master, lang).name : l.master}
                    </i>
                  </span>
                  <span className="cy-level-min">
                    {open ? `${l.minutes} ${t('ac.min')}` : t('g.shut')}
                  </span>
                  {/* LE BADGE EST MONTRÉ AVANT D'ÊTRE GAGNÉ · savoir ce qu'on
                      va obtenir est ce qui fait entrer dans un niveau. Il est
                      grisé tant qu'il n'est pas acquis, jamais caché. */}
                  <span className={`cy-badge${done ? ' on' : ''}`}>{say(l.badge, lang)}</span>
                </Lnk>
              </li>
            )
          })}
        </ol>

        {/* CE QUI SE PASSE QUAND LA CITÉ EST FINIE · on le dit, plutôt que de
            laisser quelqu'un terminer et se demander s'il a raté une étape. */}
        {c.finished && (
          <p className="cy-done">
            <BauhausIcon name="check" size={14} /> {t('g.cityDoneBody')}
          </p>
        )}
      </section>

      {/* CE QUE L'ACHAT OUVRE · rappelé en bas d'une cité, parce que c'est
          l'endroit où quelqu'un qui découvre se demande ce qu'il y a derrière.
          Le prix vient de data/plans et n'est écrit nulle part ailleurs.
          Quand la cité est déjà ouverte, ce bloc n'a rien à dire et disparaît :
          vendre à quelqu'un ce qu'il a déjà payé est la faute qui fait douter
          de tout le reste de la page. */}
      {!a.canOpen(module) && (
        <section className="lp-sec alt cy-buy">
          <h2>{t('g.buyH2')}</h2>
          <Gate module={module} />
        </section>
      )}
      {a.canOpen(module) && module.track === 'path' && (
        <section className="lp-sec alt cy-buy">
          <h2>{t('g.buyH2')}</h2>
          <p className="lp-lead">
            {PATH_MODULE_COUNT} {t('g.cities')} · {PATH_LEVEL_COUNT} {t('g.dojos')} · {priceTag(PATH_EUR)} {t('price.once')}
          </p>
          <Lnk className="lp-cta" href="/#pricing">{t('g.seePrices')} →</Lnk>
        </section>
      )}

      <SiteFooter />
      <SupportBot />
    </div>
  )
}
