// LA CARTE DE LA VALLÉE · en plein écran, et seulement quand on la demande.
//
// ---------------------------------------------------------------------------
// ELLE A CHANGÉ DE RÔLE, ET C'EST TOUT CE QUI COMPTE
//
// Elle était le passage obligé : pour atteindre sept minutes de cours il
// fallait traverser une scène en trois dimensions, viser un toit du bout du
// doigt, entrer dans une cité, puis dans un dojo. Sur un téléphone, viser un
// bâtiment de deux unités dans une perspective ne marche tout simplement pas.
//
// Elle s'ouvre maintenant depuis le profil, on la regarde, on en sort. Ce
// qu'elle fait bien · montrer d'un coup ce qui est fini et ce qui reste · elle
// le fait toujours ; ce qu'elle faisait mal · servir de navigation · ne lui est
// plus demandé.
//
// ---------------------------------------------------------------------------
// ON PEUT Y ENTRER, ET C'EST LÀ QU'ELLE GAGNE SA PLACE
//
// Cliquer une cité ouvre son panneau : ses dojos, leurs maîtres, et le lien
// vers la formation qui la contient. C'est la seule chose qu'une liste ne sait
// pas faire · dire où une cité se trouve par rapport aux autres.
import { useState, useEffect } from 'react'
import { BauhausIcon } from '../components/BauhausIcon'
import { Lnk, navigate } from '../lib/router'
import { useHeadTags } from '../lib/headTags'
import { useLang, useT } from '../i18n'
import { say } from '../data/bilingual'
import { MODULE_BY_ID, type Module } from '../data/curriculum'
import { PACK_OF_MODULE, PACK_BY_ID, lessonPath } from '../data/packs'
import { USE_CASE_BY_ID, useCaseIn } from '../data/agentUseCases'
import { useGame } from './progress'
import { useAccess } from './access'
import { WorldMap } from './WorldMap'

export function CartePage() {
  const lang = useLang()
  const t = useT()
  const g = useGame()
  const a = useAccess()
  const [openId, setOpenId] = useState<string | null>(null)

  // CET ÉCRAN EST LE SEUL QUI SE FIGE · le document défile partout ailleurs
  // depuis qu'on a retiré le « overflow: hidden » global (voir index.css). Une
  // carte plein écran, elle, ne défile pas : elle se déplace au doigt, et une
  // barre de défilement à côté d'une scène qu'on fait glisser est un piège.
  // Le drapeau est POSÉ ET REPRIS par le même effet · une classe laissée sur
  // <html> en quittant figerait tout le produit depuis un écran qu'on a fermé,
  // et c'est la forme de panne qu'on ne retrouve jamais.
  useEffect(() => {
    document.documentElement.classList.add('is-fixed')
    return () => document.documentElement.classList.remove('is-fixed')
  }, [])

  useHeadTags({
    title: `${t('cm.title')} · DojoBuro`,
    description: t('cm.lead'),
    path: '/carte',
  })

  const module: Module | undefined = openId ? MODULE_BY_ID[openId] : undefined
  const packId = module ? PACK_OF_MODULE[module.id] : undefined
  const pack = packId ? PACK_BY_ID[packId] : undefined

  return (
    <div className="cm">
      {/* LA CARTE PREND TOUT · pas de coquille, pas de barre du bas. C'est un
          plein écran qu'on quitte par une croix, comme on quitte une carte
          dans un jeu. Garder la navigation ici aurait rogné la seule chose
          qu'on est venu voir. */}
      <WorldMap onOpen={(id) => setOpenId(id)} />

      <Lnk className="cm-close" href="/profil" aria-label={t('cm.close')}>
        <BauhausIcon name="cross" size={16} />
      </Lnk>

      <div className="cm-hud">
        <b>{t('cm.title')}</b>
        <em>{g.pathDone} / {g.pathTotal} {t('g.dojos')}</em>
      </div>

      {/* LE PANNEAU D'UNE CITÉ · il monte par le bas, comme une fiche. */}
      {module && (
        <>
          <div className="cm-scrim" onClick={() => setOpenId(null)} />
          <aside className="cm-sheet" style={{ ['--ac' as string]: module.tint }}>
            <header className="cm-sheet-top">
              <span className="cm-sheet-g"><BauhausIcon name={module.glyph} size={18} /></span>
              <div>
                <b>{say(module.title, lang)}</b>
                <em>{pack ? say(pack.title, lang) : ''}</em>
              </div>
              <button className="cm-sheet-x" onClick={() => setOpenId(null)} aria-label={t('cm.close')}>
                <BauhausIcon name="cross" size={13} />
              </button>
            </header>

            <p className="cm-sheet-blurb">{say(module.blurb, lang)}</p>

            {/* LES SPÉCIALITÉS · un dojo, un maître. C'est ce qu'on vient
                chercher en entrant dans une cité : savoir qui enseigne quoi. */}
            <ol className="cm-sheet-list">
              {module.levels.map((l) => {
                const done = g.isDone(module.id, l.id)
                const master = USE_CASE_BY_ID[l.master]
                return (
                  <li key={l.id} className={done ? 'done' : ''}>
                    <span className="cm-mark">
                      {done ? <BauhausIcon name="check" size={11} /> : <i />}
                    </span>
                    <span>
                      <strong>{say(l.title, lang)}</strong>
                      <em>{master ? useCaseIn(master, lang).name : l.master}</em>
                    </span>
                  </li>
                )
              })}
            </ol>

            {pack && (
              <button
                className="gm-cta"
                onClick={() => navigate(
                  a.opensPack(pack)
                    ? lessonPath(pack.id, module.levels[0].id)
                    : `/dojo/${pack.id}`,
                )}
              >
                {a.opensPack(pack) ? t('g.enter') : t('gm.see')} →
              </button>
            )}
          </aside>
        </>
      )}
    </div>
  )
}
