// LE PROFIL DU DISCIPLE · ce qui a été gagné, et où reprendre.
//
// ---------------------------------------------------------------------------
// POURQUOI CETTE PAGE EXISTE, ALORS QUE LA CARTE MONTRE DÉJÀ LA PROGRESSION
//
// La carte répond à « où vais-je ». Cette page répond à « qu'est-ce que j'ai
// obtenu », et ce n'est pas la même question. La première fait avancer, la
// seconde fait revenir : c'est elle qu'on ouvre trois semaines plus tard, et
// c'est d'elle qu'on repart.
//
// LES BADGES SONT MONTRÉS EN ENTIER, gagnés ET pas encore gagnés. Une vitrine
// qui ne montre que les trophées obtenus ne dit pas ce qu'il reste, donc elle
// ne donne aucune raison de continuer. Les autres sont là, en gris, avec le nom
// du dojo qui les donne.
//
// REFAIRE EST UN DROIT, PAS UNE FAVEUR. Chaque dojo fini porte son lien de
// retour, et la question s'y repose. C'est la promesse de la formule payante,
// et elle doit se voir ici, à l'endroit où l'on croit avoir fini.
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { SupportBot } from '../components/SupportBot'
import { BauhausIcon } from '../components/BauhausIcon'
import { Lnk } from '../lib/router'
import { useHeadTags } from '../lib/headTags'
import { useLang, useT } from '../i18n'
import { say, modulePath, levelPath, moduleNumber } from '../data/curriculum'
import { TRADE_BY_ID } from '../data/trades'
import { useGame } from './progress'
import { useAccess } from './access'
import { downloadHandout } from './handout'

export function ProfilePage() {
  const lang = useLang()
  const t = useT()
  const g = useGame()
  const a = useAccess()

  useHeadTags({
    title: `${t('pr.title')} · DojoBuro`,
    description: t('pr.lead'),
    path: '/profil',
  })

  const earned = g.badges.length

  return (
    <div className="landing dg2 ac pr">
      <SiteHeader />

      <section className="lp-sec pr-hero">
        <h1>{t('pr.title')}</h1>
        <p className="lp-lead">{t('pr.lead')}</p>
        <div className="pr-nums">
          <span><b>{earned}</b><i>{t('pr.badges')}</i></span>
          <span><b>{g.pathDone}</b><i>{t('g.dojos')}</i></span>
          <span><b>{g.pathPercent}%</b><i>{t('pr.ofPath')}</i></span>
        </div>
        <Lnk className="lp-cta" href={levelPath(g.nextUp.module.id, g.nextUp.level.id)}>
          {g.started ? t('ac.continue') : t('d.start')} · {say(g.nextUp.level.title, lang)} →
        </Lnk>
        {/* LE MÉTIER TRAVAILLÉ · dit ici, parce que c'est lui qui décide de ce
            que cette page compte. Une vitrine dont la taille change sans qu'on
            sache pourquoi est une vitrine à laquelle on cesse de croire. */}
        <p className="pr-trade">
          {a.pick && TRADE_BY_ID[a.pick]
            ? <>{t('tr.yours')} · <b>{say(TRADE_BY_ID[a.pick].label, lang)}</b> · <Lnk href="/metier">{t('pr.change')}</Lnk></>
            : <>{t('tr.none')} · <Lnk href="/metier">{t('tr.title')}</Lnk></>}
        </p>
      </section>

      {/* LA VITRINE · les badges qui vous concernent, dans l'ordre du parcours.
          Pas les cent du programme entier : cinq formations métier sur six
          appartiennent à quelqu'un d'autre, et une vitrine dont on ne peut
          jamais remplir plus d'un tiers ne donne envie de rien. */}
      <section className="lp-sec">
        <h2>{t('pr.caseH2')} <span className="pr-of">{earned} / {g.badgeTotal}</span></h2>
        <div className="pr-case">
          {g.scopeLevels.map(({ module, level }) => {
            const done = g.isDone(module.id, level.id)
            return (
              <Lnk
                key={`${module.id}/${level.id}`}
                className={`pr-badge${done ? ' on' : ''}`}
                href={levelPath(module.id, level.id)}
                style={{ ['--ac' as string]: module.tint }}
              >
                <span className="pr-badge-g">
                  <BauhausIcon name={done ? 'check' : module.glyph} size={14} />
                </span>
                <b>{say(level.badge, lang)}</b>
                <i>{say(module.title, lang)}</i>
              </Lnk>
            )
          })}
        </div>
      </section>

      {/* LES CITÉS · l'état de chacune, et la fiche à emporter.
          LA FICHE EST ÉCRITE DEPUIS LE COURS au moment du clic · voir
          game/handout. Elle ne peut donc pas se périmer. */}
      <section className="lp-sec alt">
        <h2>{t('pr.citiesH2')}</h2>
        <div className="pr-cities">
          {g.scope.map((m) => {
            const c = g.cityOf(m)
            const n = moduleNumber(m.id)
            return (
              <div className={`appcard pr-city${c.finished ? ' done' : ''}`} key={m.id} style={{ ['--ac' as string]: m.tint }}>
                <span className="pr-city-n">{n || t('g.free')}</span>
                <b>{say(m.title, lang)}</b>
                <span className="pr-city-bar"><i style={{ width: `${c.percent}%` }} /></span>
                <em>{c.done} / {c.total} {t('g.dojos')}</em>
                <span className="pr-city-do">
                  <Lnk href={modulePath(m.id)}>{c.done > 0 ? t('pr.replay') : t('g.enter')} →</Lnk>
                  {/* LA FICHE SUIT LE DROIT D'ENTRER · proposer un
                      téléchargement sur une cité fermée serait vendre deux
                      fois la même porte. */}
                  {a.canOpen(m) && (
                    <button className="pr-dl" onClick={() => downloadHandout(m, lang)}>
                      {t('pr.sheet')}
                    </button>
                  )}
                </span>
              </div>
            )
          })}
        </div>
      </section>

      <SiteFooter />
      <SupportBot />
    </div>
  )
}
