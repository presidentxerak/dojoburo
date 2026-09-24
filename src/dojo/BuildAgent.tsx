// COMMENT CRÉER UN AGENT · on arrive dans le dojo, et le maître accueille.
//
// La page ne commence pas par un formulaire ni par un sommaire. Elle commence
// par une salle où douze agents dorment, et par une question posée par le
// maître : lequel voulez vous apprendre à construire ?
//
// C'est une décision d'interface, pas une mise en scène. Un catalogue de
// douze cartes demande de comparer douze choses avant d'avoir compris une
// seule ; une salle endormie demande de choisir UNE forme de problème, ce qui
// est la première chose à savoir faire. Et l'agent choisi se réveille, ce qui
// dit sans un mot ce que vaut le fait d'avoir choisi.
//
// Ce qu'on emporte à la fin n'est pas un score : c'est un fichier. Voir
// lib/agentExport, qui rend cinq formats dont aucun n'appartient à un
// fournisseur.
import { useState } from 'react'
import { SiteHeader } from '../components/SiteHeader'
import { SupportBot } from '../components/SupportBot'
import { useHeadTags } from '../lib/headTags'
import { ClassScene } from './ClassScene'
import { USE_CASES, USE_CASE_BY_ID, USE_CASE_COUNT, useCaseIn, type UseCase } from '../data/agentUseCases'
import { useLang, useT } from '../i18n'
import { useProgress } from '../academy/progress'
import { AgentCard } from './AgentCard'
import { CertPath } from './CertPath'
import { MasterPanel } from './MasterPanel'
import { AGENT_TRACK } from './masterProgress'
import { SiteFooter } from '../components/SiteFooter'

/* ------------------------------------------------------------------ */
/* Ce que dit le maître                                                */
/* ------------------------------------------------------------------ */

/** Le maître parle peu et dit une chose à la fois. Une bulle qui contient
 *  deux idées n'en transmet aucune, surtout au dessus d'une salle en trois
 *  dimensions où l'oeil a déjà de quoi faire. */
function masterSays(chosen: UseCase | null, done: number, total: number, lang: 'en' | 'fr'): string {
  const fr = lang === 'fr'
  // Le nombre vient des données, jamais de la phrase. Écrit « twelve » à la
  // main, il survivrait au treizième cas d'usage et le maître mentirait dans
  // sa première phrase.
  // LA QUESTION EST ÉCRITE EN HAUT DE L'ÉCRAN, en grand. Le maître la posait
  // aussi, mot pour mot : deux exemplaires de la même phrase à trente
  // centimètres l'un de l'autre, dont l'un dans une bulle qui sert justement à
  // dire ce que le titre ne dit pas. Il porte donc l'autre moitié, celle que
  // le panneau supprimé emportait avec lui.
  if (!chosen) {
    return fr
      ? `${USE_CASE_COUNT} agents, tous endormis, parce qu'aucun n'existe encore. Clique sur l'un d'eux et il se réveille !`
      : `${USE_CASE_COUNT} agents, all asleep, because none of them exists yet. Click one and it wakes up.`
  }
  const c = useCaseIn(chosen, lang)
  if (done === 0) {
    return fr
      ? `${c.name} est réveillé. Attaque par le plus dur : ${c.hard.split('.')[0]}.`
      : `${c.name} is awake. Start where it is hardest: ${c.hard.split('.')[0]}.`
  }
  if (done < total) {
    return fr
      ? `Étape ${done} sur ${total}. Garde pour la fin celle que tu ne sais pas expliquer.`
      : `Step ${done} of ${total}. Keep the one you cannot explain for last.`
  }
  return fr
    ? 'Terminé ! Emporte le fichier et fais-le enfin tourner pour de vrai.'
    : 'Finished. Take the file with you and run it somewhere real.'
}

/* ------------------------------------------------------------------ */
/* Le brouillon d'agent                                                */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */

export function BuildAgentPage({ slug }: { slug?: string }) {
  const [chosenId, setChosenId] = useState<string | null>(slug ?? null)
  const lang = useLang()
  const t = useT()
  const chosen = chosenId ? USE_CASE_BY_ID[chosenId] ?? null : null
  const progress = useProgress()
  // La liste en repli · fermée par défaut, voir le commentaire à son rendu.
  const [listOpen, setListOpen] = useState(false)

  // La progression passe par le MÊME magasin que l'académie · un second
  // magasin pour « les étapes d'agent » aurait donné deux barres de
  // progression qui ne parlent pas de la même chose, et un maître qui en lit
  // une seule.
  // Le nom de la piste vient de masterProgress · il était écrit 'agent' en dur
  // à trois endroits ici, et c'est la chaîne sur laquelle le décompte des
  // trois cours repose entièrement.
  const stepDone = (u: UseCase, i: number) => progress.isDone(AGENT_TRACK, `${u.id}/${i}`)
  const doneSteps = chosen ? chosen.steps.filter((_, i) => stepDone(chosen, i)).length : 0

  useHeadTags({
    title: chosen
      ? `Build ${chosen.name} · ${chosen.shape}`
      : `Build an agent · ${USE_CASE_COUNT} shapes, taught one at a time`,
    description: chosen
      ? `${chosen.does} What is hard about it: ${chosen.hard}`
      : 'Walk into the dojo, pick the shape of agent you actually need, and build it from a blank page to a file you can run in a real framework.',
    path: chosen ? `/build/${chosen.id}` : '/build',
    keywords: chosen ? chosen.keywords : ['build an ai agent', 'agent tutorial', 'agent use cases'],
  })

  const says = masterSays(chosen, doneSteps, chosen?.steps.length ?? 0, lang)

  return (
    <div className="landing dg2 ac cls">
      <SiteHeader />

      {/* LA SALLE, PLEIN ÉCRAN. Elle occupait un bandeau de 56 % de la hauteur
          avec du texte en dessous, donc on voyait une vignette de dojo et un
          article. On entre dans un LIEU : il prend l'écran, et tout le reste
          arrive par-dessus quand on a choisi quelqu'un. */}
      <div className="cls-full">
        <ClassScene chosen={chosenId} onChoose={setChosenId} says={says} />
        {/* LA QUESTION, EN HAUT ET AU CENTRE.
            C'était un panneau posé en bas à gauche : un titre, une pastille,
            trois lignes de prose et un bouton, sur fond flouté. Il cachait deux
            agents et l'étiquette d'un troisième, dans une salle dont le seul
            propos est de montrer douze agents. Un texte qui explique une scène
            en la recouvrant se trompe de métier.
            Il ne reste que la question, sur une bande où il n'y a que le mur.
            Ce que le panneau disait n'est pas perdu : la phrase qui compte,
            celle qui explique pourquoi ils dorment, est passée dans la bouche
            du maître, et celle qui explique pourquoi ils sont douze ouvre la
            liste. Chacune est allée là où elle est à sa place. */}
        {!chosen && (
          <div className="cls-ask">
            <h1>{t('bd.which')}</h1>
            <button className="cls-hint-go" onClick={() => setListOpen((v) => !v)}>
              {listOpen ? t('bd.hideList') : t('bd.showList')}
            </button>
          </div>
        )}
      </div>

      {/* LA LISTE · un repli pour qui préfère lire douze lignes plutôt que de
          survoler douze silhouettes. Elle est FERMÉE par défaut : ouverte, elle
          redevient le catalogue que la salle remplace. */}
      {!chosen && listOpen && (
        <section className="lp-sec">
          {/* POURQUOI ILS SONT DOUZE · cette phrase ouvrait le panneau posé sur
              la salle. Elle répond à la question qu'on se pose en découvrant
              une liste de douze, donc elle a sa place en tête de la liste, pas
              par dessus la pièce. */}
          <p className="lp-lead cls-why">{USE_CASE_COUNT} {t('bd.why')}</p>
          <div className="cls-grid">
            {USE_CASES.map((u0) => {
              const u = useCaseIn(u0, lang)
              const finished = u0.steps.every((_, i) => stepDone(u0, i))
              return (
                <button className={`cls-card${finished ? ' done' : ''}`} key={u.id} onClick={() => setChosenId(u.id)}>
                  <span className="cls-card-top">
                    <b>{u.name}</b>
                    {finished ? <i className="cls-tag">{t('bd.built')}</i> : <i className="cls-tag sleep">{t('bd.asleep')}</i>}
                  </span>
                  <span className="cls-shape">{u.shape}</span>
                  <span className="cls-hard"><b>{t('bd.hard')}</b> {u.hard.split('.')[0]}.</span>
                </button>
              )
            })}
          </div>
        </section>
      )}

      {/* LA FICHE · plein écran par-dessus la salle, et rien d'autre à
          l'écran. On y lit un cours, pas un encart. */}
      {chosen && <AgentCard u={chosen} onClose={() => setChosenId(null)} />}

      {/* LE PARCOURS DE CERTIFICATION · expliqué AVANT le tableau qui le
          décompte. On voyait une grille de badges grisés sans avoir jamais lu
          ce qu'ils demandent, et un système de progression que personne ne
          comprend est un système de progression qui n'existe pas. */}
      {!chosen && <CertPath />}

      {!chosen && <MasterPanel here="build" />}

      <SiteFooter />
      <SupportBot />
    </div>
  )
}
