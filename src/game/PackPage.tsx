// UNE FORMATION · ses modules, et les dojos dedans.
//
// ---------------------------------------------------------------------------
// LA FORME VIENT DES MAQUETTES, ET ELLE EST JUSTE
//
// Un module est une carte : une vignette à gauche, le titre et une ligne à
// droite, puis SES DOJOS LISTÉS DEDANS, chacun avec sa durée, son expérience
// et son état. Tout ce qu'il y a à savoir sur un module tient dans sa carte,
// et on n'a plus à ouvrir une page pour découvrir ce qu'elle contient.
//
// C'est ce que l'ancienne navigation faisait mal : carte de la vallée → cité →
// dojo, trois écrans pour atteindre sept minutes de cours. Il en reste un.
//
// ---------------------------------------------------------------------------
// CE QUI EST FERMÉ RESTE VISIBLE
//
// Les dojos d'une formation qu'on n'a pas se lisent quand même : titre, durée,
// ce qu'on y apprend. Seul le contenu est retenu. Cacher la liste derrière le
// paiement est ce que fait quelqu'un qui n'est pas fier de son sommaire, et ça
// se voit.
import { SupportBot } from '../components/SupportBot'
import { BauhausIcon } from '../components/BauhausIcon'
import { BauhausBand } from '../components/BauhausBand'
import { Lnk } from '../lib/router'
import { useHeadTags } from '../lib/headTags'
import { useLang, useT } from '../i18n'
import { say } from '../data/bilingual'
import {
  PACK_BY_ID, packPath, lessonPath, modulesOf, levelsOf, minutesOf,
  xpOf, xpOfModule, eurOf,
} from '../data/packs'
import { priceTag } from '../data/plans'
import { USE_CASE_BY_ID, useCaseIn } from '../data/agentUseCases'
import type { Module } from '../data/curriculum'
import { useState } from 'react'
import { useGame } from './progress'
import { useAccess, giveEmail } from './access'
import { PackArt } from './PackArt'
import { Shell } from './Shell'
import { plural } from './plural'

export function PackPage({ packId }: { packId: string }) {
  const lang = useLang()
  const t = useT()
  const g = useGame()
  const a = useAccess()
  const pack = PACK_BY_ID[packId]

  useHeadTags({
    title: pack ? `${say(pack.title, lang)} · DojoBuro` : `${t('gm.noPack')} · DojoBuro`,
    description: pack ? say(pack.blurb, lang) : t('gm.noPackBody'),
    path: packPath(packId),
  })

  if (!pack) {
    return (
      <Shell>
        <section className="gm-sec">
          <h1 className="gm-h1">{t('gm.noPack')}</h1>
          <p className="gm-lead">{t('gm.noPackBody')}</p>
          <Lnk className="gm-cta" href="/">{t('gm.backDojos')}</Lnk>
        </section>
      </Shell>
    )
  }

  const open = a.opensPack(pack)
  const modules = modulesOf(pack)
  const levels = levelsOf(pack)
  const done = levels.filter(({ module, level }) => g.isDone(module.id, level.id)).length
  const percent = levels.length ? Math.round((done / levels.length) * 100) : 0
  const next = levels.find(({ module, level }) => !g.isDone(module.id, level.id))

  return (
    <Shell>
      {/* L'EN-TÊTE DE LA FORMATION · court. Le nom, une ligne, l'état, et le
          bouton qui reprend là où on s'est arrêté. Rien d'autre : ce qu'il y a
          dedans est juste en dessous, et le répéter en prose ferait lire deux
          fois la même chose. */}
      <section className="gm-sec pkh" style={{ ['--ac' as string]: pack.tint }}>
        <Lnk className="gm-back" href="/">← {t('gm.backDojos')}</Lnk>
        <div className="pkh-top">
          <div className="pkh-art">
            <PackArt kit={pack.kit} tint={pack.tint} master={levels[0]?.level.master} locked={!open} />
          </div>
          <div className="pkh-txt">
            <BauhausBand seed={`pack-${pack.id}`} n={9} height={12} />
            <h1 className="gm-h1">{say(pack.title, lang)}</h1>
            <p className="gm-lead">{say(pack.blurb, lang)}</p>
            <div className="pkh-meta">
              <span>{plural(modules.length, t('gm.module1'), t('gm.modules'))}</span>
              <span>{plural(levels.length, t('gm.dojo1'), t('g.dojos'))}</span>
              <span>{minutesOf(pack)} {t('ac.min')}</span>
            </div>
          </div>
        </div>

        <span className="pk-bar big"><i style={{ width: `${percent}%` }} /></span>
        <p className="pkh-count">{done} / {levels.length} {t('g.dojos')}</p>

        {open && next && (
          /* ELLE RESPIRE · c'est la seule chose qui bouge en permanence sur
             cet écran, et c'est voulu : elle dit où reprendre. Deux éléments
             qui pulsent sur la même page ne désignent plus rien. */
          <Lnk className="gm-cta gm-pump" href={lessonPath(pack.id, next.level.id)}>
            {done > 0 ? t('ac.continue') : t('gm.start')} · {say(next.level.title, lang)} →
          </Lnk>
        )}
        {!open && (eurOf(pack) === 0 ? <AskEmail /> : <PackLock eur={eurOf(pack)} />)}
      </section>

      {modules.map((m, i) => (
        <ModuleCard key={m.id} module={m} n={i + 1} packId={pack.id} open={open} />
      ))}

      <SupportBot />
    </Shell>
  )
}

/* ------------------------------------------------------------------ */

/** LE PANNEAU DE CE QUI EST FERMÉ · il dit le prix, et il dit ce qu'il n'est
 *  pas. Les cours voyagent dans le fichier que le navigateur télécharge ; ce
 *  panneau marque où s'arrête ce qui est offert, il ne protège rien. Une
 *  serrure qui n'en est pas une est le mensonge le plus coûteux qu'un produit
 *  puisse s'écrire à lui même. */
function PackLock({ eur }: { eur: number }) {
  const t = useT()
  return (
    <div className="pkl">
      <b><BauhausIcon name="box" size={13} /> {t('gm.lockTitle')}</b>
      <p>{t('gm.lockBody')}</p>
      <Lnk className="gm-cta" href="/decouvrir#pricing">{priceTag(eur)} · {t('g.seePrices')} →</Lnk>
    </div>
  )
}

/* ------------------------------------------------------------------ */

/** OUVRIR LE WEEK-END · un champ, un bouton, et ce qu'on fait de l'adresse
 *  écrit juste en dessous plutôt que dans une politique qu'on n'ouvrira pas.
 *
 *  ELLE NE PROMET PAS DE COURRIER. Rien dans ce produit n'en envoie
 *  aujourd'hui, et écrire « vous recevrez la leçon chaque matin » serait une
 *  promesse que le code ne tient pas. */
function AskEmail() {
  const t = useT()
  const [v, setV] = useState('')
  const ok = /.+@.+\..+/.test(v.trim())
  return (
    <form className="ae" onSubmit={(e) => { e.preventDefault(); if (ok) giveEmail(v) }}>
      <label className="ae-lab" htmlFor="ae-mail">{t('d.ask')}</label>
      <div className="ae-row">
        <input
          id="ae-mail" type="email" className="ae-inp" value={v}
          placeholder={t('d.place')} autoComplete="email"
          onChange={(e) => setV(e.target.value)}
        />
        <button className="gm-cta" type="submit" disabled={!ok}>{t('d.open')}</button>
      </div>
      <p className="ae-fine">{t('d.fine')}</p>
    </form>
  )
}

/* ------------------------------------------------------------------ */

function ModuleCard({ module, n, packId, open }: {
  module: Module
  n: number
  packId: string
  open: boolean
}) {
  const lang = useLang()
  const t = useT()
  const g = useGame()
  const c = g.cityOf(module)

  return (
    <section className="gm-sec">
      <article className="md" style={{ ['--ac' as string]: module.tint }}>
        <header className="md-head">
          <span className="md-n">{t('gm.module')} {n}</span>
          <span className="md-count">{c.done} / {c.total}</span>
        </header>
        <div className="md-top">
          <span className="md-glyph"><BauhausIcon name={module.glyph} size={22} /></span>
          <div>
            <h2 className="md-title">{say(module.title, lang)}</h2>
            <p className="md-blurb">{say(module.blurb, lang)}</p>
          </div>
        </div>

        <ol className="md-list">
          {module.levels.map((l, i) => {
            const isDone = g.isDone(module.id, l.id)
            // LE PREMIER DOJO EST OFFERT · voir game/access. On ne peut pas
            // juger un cours qu'on n'a pas vu, et personne ne paie sur la foi
            // d'un titre.
            const free = i === 0
            const canEnter = open || free
            const master = USE_CASE_BY_ID[l.master]
            return (
              <li key={l.id} className={`ls${isDone ? ' done' : ''}${canEnter ? '' : ' shut'}`}>
                <Lnk href={lessonPath(packId, l.id)}>
                  <span className="ls-mark">
                    {isDone
                      ? <BauhausIcon name="check" size={13} />
                      : canEnter ? <i /> : <BauhausIcon name="box" size={12} />}
                  </span>
                  <span className="ls-txt">
                    <strong>{say(l.title, lang)}</strong>
                    <em>{l.minutes} {t('ac.min')} · {xpOf(l)} XP · {master ? useCaseIn(master, lang).name : l.master}</em>
                  </span>
                  <span className="ls-go">
                    {isDone ? t('gm.finished') : canEnter ? t('gm.start') : (free ? '' : t('gm.locked'))}
                  </span>
                </Lnk>
              </li>
            )
          })}
        </ol>
        <p className="md-xp">{xpOfModule(module)} XP</p>
      </article>
    </section>
  )
}
