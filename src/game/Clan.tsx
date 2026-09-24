// LE CLAN · ce qui existe aujourd'hui, dit sans détour.
//
// ---------------------------------------------------------------------------
// POURQUOI CETTE PAGE NE MONTRE PAS UN FIL DE DISCUSSION
//
// Les maquettes en montrent un : un champ de saisie, un bouton « Publier », et
// des messages de disciples avec leurs pseudonymes, leurs niveaux et leurs
// réactions. C'est la bonne idée, et il n'y a rien derrière : aucun serveur ne
// reçoit ces messages, aucune base ne les garde, personne ne les lit.
//
// On pouvait donc faire deux choses. Écrire trois messages inventés, avec trois
// pseudonymes inventés et trois nombres de réactions inventés, pour que l'écran
// ait l'air vivant. Ou dire ce qui est. La première met un mensonge à l'endroit
// exact où l'on demande de la confiance à des gens qui apprennent, et le
// premier qui poste s'aperçoit que son message ne part nulle part.
//
// Alors cette page dit où en est le clan, et elle offre la seule chose qui
// marche vraiment sans serveur : emporter sa progression, et la partager.
//
// LE JOUR OÙ UN SERVEUR EXISTE, cette page devient le fil. Rien de ce qui est
// écrit ici ne sera à défaire : il n'y a pas de faux fil à démonter.
import { SupportBot } from '../components/SupportBot'
import { Lnk } from '../lib/router'
import { useHeadTags } from '../lib/headTags'
import { useT } from '../i18n'
import { BADGE_COUNT } from '../data/curriculum'
import { useGame } from './progress'
import { Shell } from './Shell'
import { levelOf } from './Gauge'

export function ClanPage() {
  const t = useT()
  const g = useGame()

  useHeadTags({
    title: `${t('cl.title')} · DojoBuro`,
    description: t('cl.lead'),
    path: '/clan',
  })

  return (
    <Shell>
      <section className="gm-sec">
        <h1 className="gm-h1">{t('cl.title')}</h1>
        <p className="gm-lead">{t('cl.lead')}</p>
      </section>

      {/* CE QUI EXISTE · dit en toutes lettres, avec ce qui manque. */}
      <section className="gm-sec">
        <div className="cl-note">
          <b>{t('cl.soonTitle')}</b>
          <p>{t('cl.soonBody')}</p>
        </div>
      </section>

      {/* CE QUI MARCHE DÉJÀ · votre progression, et de quoi la montrer. */}
      <section className="gm-sec">
        <div className="cl-me">
          {/* LE NIVEAU EN JETON · dérivé de l'expérience, voir Gauge. */}
          <span className="cl-me-g" aria-label={`${t('gm.lv')} ${levelOf(g.xp).level}`}>{levelOf(g.xp).level}</span>
          <div>
            <b>{g.xp} XP</b>
            <em>{g.badges.length} / {BADGE_COUNT} {t('pr.badges')}</em>
          </div>
        </div>
        <Lnk className="gm-cta" href="/profil">{t('cl.seeProfile')} →</Lnk>
      </section>

      <SupportBot />
    </Shell>
  )
}
