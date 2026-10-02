// LE RÉFÉRENCEMENT · demandé : « Trouve une stratégie pour améliorer le SEO
// dans l'app : change et améliore les titres et contenus en fonction ».
//
// LA STRATÉGIE, en quatre points :
//   1. VISER LES RECHERCHES RÉELLES · les gens ne cherchent pas « Dojoburo »,
//      ils cherchent « formation IA », « apprendre l'IA », « formation Claude
//      Code », « créer une app avec Lovable », « IA pour les commerciaux ». Chaque
//      page porte donc UNE intention de recherche dans son titre, le mot-clé en
//      tête et la marque en fin, sous 60 caractères, et une description qui dit
//      le bénéfice, le prix et le gratuit, sous 160 caractères ;
//   2. UNE PAGE PAR FORMATION, LISIBLE SANS JAVASCRIPT · scripts/gen-seo écrit
//      pour chaque formation une page HTML avec son titre, sa description, la
//      liste de ses leçons et ses données structurées (Course, Offer), pour que
//      les moteurs et les moteurs de réponse IA la lisent et la citent ;
//   3. LES DONNÉES STRUCTURÉES · Organization et WebSite sur tout le site,
//      Course avec son prix sur chaque formation, FAQPage sur la page de
//      présentation, ItemList des formations sur l'accueil ;
//   4. LES PAGES PRIVÉES HORS INDEX · profil, retour de paiement, messages
//      (robots.txt et X-Robots-Tag), pour que l'indexation se concentre sur ce
//      qui répond à une recherche.
//
// Ces textes sont la seule source : les écrans (useHeadTags) et les pages
// prérendues (scripts/gen-seo) lisent les mêmes.
import { B, say, type Bi } from './bilingual'
import { TEMPLE_EUR, PASS_EUR, priceTag } from './plans'
import { PACKS, type Pack } from './packs'

const N = PACKS.length

const T = priceTag(TEMPLE_EUR)
const P = priceTag(PASS_EUR)

export const SEO = {
  home: {
    title: B('AI training online, as a game · Dojoburo', 'Formation IA en ligne, façon jeu vidéo · Dojoburo'),
    description: B(
      `Learn to use AI (ChatGPT, Claude, prompts, agents) by playing: ${N} pixel-art trainings, a free AI weekend, ${T} a course or ${P} for every course, for life.`,
      `Apprenez l'IA (ChatGPT, Claude, prompts, agents) en jouant : ${N} formations en pixel art, un Week-end IA gratuit, ${T} le cours ou ${P} le Pass à vie.`,
    ),
  },
  prices: {
    title: B(`AI training prices: ${T} a course, ${P} for life · Dojoburo`, `Prix des formations IA : ${T} le cours, ${P} à vie · Dojoburo`),
    description: B(
      `Three choices, paid once: free AI weekend, one course at ${T}, or the Dojoburo Pass at ${P} for every training, present and future. No subscription.`,
      `Trois choix, un seul paiement : le Week-end IA gratuit, un cours à ${T}, ou le Pass Dojoburo à ${P} pour toutes les formations, à vie. Sans abonnement.`,
    ),
  },
  community: {
    title: B('AI community: prompts, resources, mutual help · Dojoburo', 'Communauté IA : prompts, ressources, entraide · Dojoburo'),
    description: B(
      'A free community to learn AI together: 300 ready-to-use prompts, verified resources, a daily challenge and masters who answer in each temple.',
      "Une communauté gratuite pour apprendre l'IA ensemble : 300 prompts prêts à l'emploi, des ressources vérifiées et un défi du jour.",
    ),
  },
  promo: {
    title: B('Learn AI for free in a weekend · Dojoburo', "Apprendre l'IA gratuitement en un week-end · Dojoburo"),
    description: B(
      'Seven short lessons, free, to understand AI and use it at work: prompts, models, assistants, limits and cost. Then go further, one temple at a time.',
      "Sept leçons courtes et gratuites pour comprendre l'IA et l'utiliser au travail : prompts, modèles, assistants, limites et coût.",
    ),
  },
}

/** L'INTENTION DE RECHERCHE DE CHAQUE FORMATION · la requête que la page vise,
 *  placée en tête du titre. Les métiers suivent un modèle commun. */
const PACK_QUERY: Record<string, Bi> = {
  weekend: B('Free AI course: 7 lessons to get started', "Cours d'IA gratuit : 7 leçons pour débuter"),
  generaliste: B('Complete generative AI training', "Formation complète à l'IA générative"),
  'coder-une-app': B('Claude Code training: build an app', 'Formation Claude Code : coder une app'),
  'coder-avec-lovable': B('Lovable training: build an app without code', 'Formation Lovable : créer une app sans coder'),
}

/** Le titre d'une page de formation · la requête visée, puis la marque. */
export function packTitle(p: Pack, lang: 'en' | 'fr'): string {
  const q = PACK_QUERY[p.id]
  if (q) return `${say(q, lang)} · Dojoburo`
  return lang === 'fr' ? `IA pour ${say(p.title, lang).toLowerCase()} : formation pratique · Dojoburo` : `AI for ${say(p.title, lang).toLowerCase()}: hands-on training · Dojoburo`
}

/** La description d'une page de formation · le contenu, le gratuit, le prix. */
export function packDescription(p: Pack, lang: 'en' | 'fr', lessons: number, eur: number): string {
  const blurb = say(p.blurb, lang)
  if (eur === 0) return lang === 'fr' ? `${blurb} ${lessons} leçons gratuites.` : `${blurb} ${lessons} free lessons.`
  return lang === 'fr'
    ? `${blurb} ${lessons} leçons, les 3 premières offertes, ${priceTag(eur)} ou inclus dans le Pass à ${P}.`
    : `${blurb} ${lessons} lessons, the first 3 free, ${priceTag(eur)} or included in the ${P} Pass.`
}
