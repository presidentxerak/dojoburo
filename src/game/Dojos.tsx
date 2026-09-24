// L'ÉCRAN D'ACCUEIL · les huit formations, et rien d'autre.
//
// ---------------------------------------------------------------------------
// CE QU'IL REMPLACE
//
// On arrivait sur une page de vente de neuf sections : pour qui, ce qu'il y a
// dedans, les treize cités, comment ça se passe, les métiers, les avis, les
// questions, les tarifs, ce qu'on ne fait pas. Il fallait la traverser en
// entier pour atteindre un cours. C'était une brochure devant une porte.
//
// On arrive maintenant DANS le jeu. La brochure existe toujours, sur
// /decouvrir, pour qui veut lire avant d'essayer · mais elle n'est plus le
// péage.
//
// ---------------------------------------------------------------------------
// UNE CARTE PAR FORMATION, ET CE QU'ELLE DIT
//
// Les maquettes ont trouvé la bonne forme : une vignette, un titre, une ligne,
// un état d'avancement, un bouton. On la reprend telle quelle, avec deux
// différences qui viennent de chez nous :
//
//   LA VIGNETTE EST UNE SCÈNE, pas un aplat · voir game/PackArt. On reconnaît
//   sa formation à sa silhouette avant d'avoir lu son nom.
//
//   LE CADENAS DIT SON PRIX. Une carte fermée qui affiche seulement un cadenas
//   laisse partir quelqu'un qui aurait payé ; celle-ci affiche ce qu'il faut.
import { SupportBot } from '../components/SupportBot'
import { BauhausIcon } from '../components/BauhausIcon'
import { Lnk } from '../lib/router'
import { useHeadTags } from '../lib/headTags'
import { useLang, useT } from '../i18n'
import { say } from '../data/bilingual'
import {
  PACKS, packPath, modulesOf, levelsOf, minutesOf, xpOfPack, eurOf, type Pack,
} from '../data/packs'
import { priceTag } from '../data/plans'
import { useGame } from './progress'
import { useAccess } from './access'
import { PackArt } from './PackArt'
import { Gauge } from './Gauge'
import { Shell } from './Shell'
import { plural } from './plural'

export function DojosPage() {
  const t = useT()

  useHeadTags({
    title: `${t('gm.dojosTitle')} · DojoBuro`,
    description: t('gm.dojosLead'),
    path: '/',
  })

  return (
    <Shell>
      <section className="gm-sec">
        <h1 className="gm-h1">{t('gm.dojosTitle')}</h1>
        <p className="gm-lead">{t('gm.dojosLead')}</p>
      </section>

      <section className="gm-sec">
        {/* LES CARTES ARRIVENT EN CASCADE · quarante-cinq millisecondes de
            décalage d'une voisine à l'autre, porté par --i. L'indice est posé
            ici plutôt que par un « nth-child » parce qu'il compte la POSITION
            dans la liste rendue, qui est ce qu'on veut, et non la position
            dans le DOM, qui cesserait d'être la même au premier filtre. */}
        <div className="pk-grid">
          {PACKS.map((p, i) => <PackCard key={p.id} pack={p} i={i} />)}
        </div>
      </section>

      <SupportBot />
    </Shell>
  )
}

/* ------------------------------------------------------------------ */

function PackCard({ pack, i }: { pack: Pack; i: number }) {
  const lang = useLang()
  const t = useT()
  const g = useGame()
  const a = useAccess()

  const open = a.opensPack(pack)
  const levels = levelsOf(pack)
  const done = levels.filter(({ module, level }) => g.isDone(module.id, level.id)).length
  const eur = eurOf(pack)

  return (
    <Lnk className={`pk gm-rise${open ? '' : ' shut'}${done && done === levels.length ? ' done' : ''}`}
      href={packPath(pack.id)}
      style={{ ['--ac' as string]: pack.tint, ['--i' as string]: i }}>
      {/* LA SALLE DE LA FORMATION · une classe pour les parcours, un
          spécialiste à son geste pour les métiers. Voir PackArt et data/cast. */}
      <PackArt kit={pack.kit} tint={pack.tint} locked={!open} />

      <div className="pk-body">
        <div className="pk-tags">
          <span className="pk-price">{eur === 0 ? t('gm.free') : priceTag(eur)}</span>
          {/* UNE FORMATION GRATUITE NE DIT PAS « FERMÉ » · elle demande une
              adresse, ce qui n'est pas la même chose et ne se paie pas. Le mot
              qui décourage doit être réservé à ce qui coûte. */}
          {!open && (
            <span className="pk-lock">
              <BauhausIcon name="lock" size={12} /> {eur === 0 ? t('gm.needEmail') : t('gm.locked')}
            </span>
          )}
          {open && done === levels.length && levels.length > 0 && (
            <span className="pk-ok"><BauhausIcon name="check" size={11} /> {t('gm.finished')}</span>
          )}
        </div>

        <b className="pk-title">{say(pack.title, lang)}</b>
        <p className="pk-blurb">{say(pack.blurb, lang)}</p>

        <div className="pk-meta">
          <span>{plural(modulesOf(pack).length, t('gm.module1'), t('gm.modules'))}</span>
          <span>{plural(levels.length, t('gm.dojo1'), t('g.dojos'))}</span>
          <span>{minutesOf(pack)} {t('ac.min')}</span>
          <span>{xpOfPack(pack)} XP</span>
        </div>

        {/* LA JAUGE N'APPARAÎT QU'UNE FOIS COMMENCÉ · une barre à zéro sur
            huit cartes fait huit rappels de ce qu'on n'a pas fait. */}
        {done > 0 && (
          <Gauge value={done} total={levels.length} label={t('g.dojos')} />
        )}

        <span className="pk-go">
          {done > 0 ? t('ac.continue') : open ? t('gm.start') : t('gm.see')} →
        </span>
      </div>
    </Lnk>
  )
}
