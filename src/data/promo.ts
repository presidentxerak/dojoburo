// LE SITE PROMO · ce qu'il dit, et dans quel ordre.
//
// ---------------------------------------------------------------------------
// POURQUOI CE FICHIER N'EST PAS DANS LA PAGE
//
// La page d'accueil était devenue un mélange de mise en page et de prose, dont
// quatre blocs écrits en anglais en dur au milieu d'une page traduite. Un texte
// écrit dans le JSX ne peut pas être traduit, ne peut pas être vérifié par une
// garde, et se recopie à la première section qui lui ressemble. Tout ce qui se
// LIT est donc ici, en deux langues, et la page n'est plus qu'une disposition.
//
// ---------------------------------------------------------------------------
// L'ORDRE DES SECTIONS EST L'ARGUMENT
//
//   pour qui        on se reconnaît, ou on part · c'est un service rendu
//   ce qu'il y a    les trois formules, avec leur prix, tout de suite
//   les cités       le programme en entier, rien de caché derrière l'achat
//   comment         le jeu, parce que c'est ce qui rend la chose faisable
//   les métiers     la suite, pour qui sait déjà pourquoi il vient
//   les avis        vides, et dit en toutes lettres · voir plus bas
//   les questions   celles qu'on pose vraiment avant de payer
//   les tarifs      en dernier, quand tout le reste a été dit
//
// ---------------------------------------------------------------------------
// LES AVIS SONT VIDES, ET C'EST ÉCRIT
//
// Un centre de formation qui commence avec trois témoignages inventés a menti
// avant d'avoir enseigné quoi que ce soit, et c'est le seul mensonge qu'un
// élève ne pardonne pas. La section existe, elle est honnête, et elle se
// remplira quand de vrais élèves auront fini.
import { B, type Bi } from './bilingual'
// LES CHIFFRES DE LA FAQ · lus dans les données, comme ceux de la page. Une
// réponse qui annonce sept leçons quand le week-end en sert six ment au
// visiteur qui hésite encore, c'est à dire au pire moment.
import { DISCOVERY_LEVEL_COUNT, DISCOVERY_MINUTES, PATH_HOURS } from './curriculum'
import { TRADE_COUNT } from './trades'
import { RANKS } from '../game/ranks'
import { XP_PER_LEVEL } from '../game/Gauge'

const HOURS_FR = String(PATH_HOURS).replace('.', ',')
const RANK_COUNT = RANKS.length
const BLACK_FROM = RANKS[RANKS.length - 1].from

/** Une question et sa réponse · les deux langues, comme tout le reste. */
export interface Qa { q: Bi; a: Bi }

/* ------------------------------------------------------------------ */

/** À QUI C'EST DESTINÉ · trois situations, pas trois flatteries. Chacune doit
 *  pouvoir être lue par quelqu'un qui se dit « non, pas moi », et repartir. */
export const FOR_WHOM: { glyph: string; title: Bi; body: Bi }[] = [
  {
    glyph: 'peak',
    title: B('You have never really started', "Vous n'avez jamais vraiment commencé"),
    body: B(
      'You opened a chat window, were impressed for ten minutes, then went back to working as before.',
      "Vous avez ouvert une fenêtre de discussion, vous avez été impressionné dix minutes, puis vous avez repris votre travail comme auparavant.",
    ),
  },
  {
    glyph: 'gear',
    title: B('You use it, badly', "Vous l'utilisez, mais mal"),
    body: B(
      'It works one time in three and you have no idea why, so you cannot trust it with anything that matters.',
      "Cela fonctionne une fois sur trois sans que vous sachiez pourquoi ; vous ne pouvez donc rien lui confier d'important.",
    ),
  },
  {
    glyph: 'target',
    title: B('You want it for your job', 'Vous en avez besoin pour votre métier'),
    body: B(
      'General advice does not survive contact with your week. You want the objects and the mistakes of your trade.',
      "Les conseils généraux résistent mal à la réalité de votre semaine. Vous cherchez les objets et les erreurs propres à votre métier.",
    ),
  },
]

/** COMMENT ÇA SE PASSE · quatre temps, et c'est tout le jeu. */
export const HOW: { glyph: string; title: Bi; body: Bi }[] = [
  {
    glyph: 'grid',
    title: B('A map of cities', 'Une carte de cités'),
    body: B('Each city is a module. You go where you want, in any order.',
      "Chaque cité correspond à un module. Vous les parcourez dans l'ordre de votre choix."),
  },
  {
    glyph: 'house',
    title: B('A master in each dojo', 'Un maître dans chaque dojo'),
    body: B('The essentials, the key concepts, a case solved step by step, the common mistakes, then something to do in your own AI tool.',
      "L'essentiel, les notions clés, un cas résolu pas à pas, les erreurs fréquentes, puis un exercice à réaliser dans votre propre outil d'IA."),
  },
  {
    glyph: 'check',
    title: B('Five questions that close it', 'Cinq questions de validation'),
    body: B('You answer each once, you see why, and you move on.',
      "Vous répondez une fois à chacune, vous découvrez l'explication, puis vous poursuivez."),
  },
  {
    glyph: 'star4',
    title: B('A badge, and it stays', 'Un badge, acquis durablement'),
    body: B('Every dojo gives one. You can redo any of them, any time.',
      "Chaque dojo en délivre un. Vous pouvez refaire chacun d'eux à tout moment."),
  },
]

/** LES QUESTIONS · celles qu'on se pose vraiment avant de payer, et les
 *  réponses telles qu'elles sont. Une FAQ qui n'aborde que ce qui arrange est
 *  une page de vente déguisée, et ça se voit. */
export const FAQ: Qa[] = [
  {
    q: B('Do I need to know how to code?', 'Faut-il savoir programmer ?'),
    a: B(
      'No. Nothing in the path asks you to write a line of code. The one module about building things uses tools that do not require it.',
      "Non. Aucune étape du parcours ne vous demande d'écrire une ligne de code. Le module consacré à la construction utilise des outils qui n'en exigent pas.",
    ),
  },
  {
    q: B('How long does it take?', 'Combien de temps cela demande-t-il ?'),
    a: B(
      `The free AI weekend is ${DISCOVERY_LEVEL_COUNT} lessons, about ${DISCOVERY_MINUTES} minutes in total. The full training is about ${PATH_HOURS} hours, and it is built to be taken one dojo at a time. Each of the ${TRADE_COUNT} trade trainings comes on top of it.`,
      `Le week-end de l'IA gratuit comprend ${DISCOVERY_LEVEL_COUNT} leçons, soit environ ${DISCOVERY_MINUTES} minutes au total. La formation complète dure environ ${HOURS_FR} heures et se suit un dojo à la fois. Chacune des ${TRADE_COUNT} formations métier s'y ajoute.`,
    ),
  },
  {
    q: B('What is in a lesson?', 'Que contient une leçon ?'),
    a: B(
      'Each dojo, in AI Training, runs in the same order: the essentials, what you do, key concepts, why it works, the steps, a worked example solved step by step, a prompt before and after, common mistakes and how to fix them, the trap, an exercise to do in your own AI tool, a recap and a step to go further. It ends with a five question quiz, then a badge and some XP.',
      "Chaque dojo, dans IA Training, suit le même ordre : l'essentiel, ce que vous faites, les notions clés, pourquoi cela fonctionne, les étapes, un exemple résolu pas à pas, un prompt avant et après, les erreurs fréquentes et leur correction, le piège, un exercice à réaliser dans votre propre outil d'IA, un récapitulatif et une étape pour aller plus loin. Il se conclut par un quiz de cinq questions, puis par un badge et de l'XP.",
    ),
  },
  {
    q: B('Is it a subscription?', 'Est-ce un abonnement ?'),
    a: B(
      'No. You pay once and it is yours, including what is added later. There is no trial that turns into a charge.',
      "Non. Vous payez une seule fois et le contenu vous est acquis, y compris ce qui sera ajouté ensuite. Aucun essai ne se transforme en prélèvement.",
    ),
  },
  {
    q: B('Will it still be true in six months?', 'Sera-ce encore vrai dans six mois ?'),
    a: B(
      'The lessons teach what corresponds to what, never menu paths or buttons. That is a deliberate choice: the products change every quarter and a course made of clicks is wrong before it is read.',
      "Les leçons enseignent des principes et leurs correspondances, jamais des chemins de menu ni des boutons. C'est un choix délibéré : les produits changent chaque trimestre, et un cours fondé sur des clics est déjà obsolète avant d'être lu.",
    ),
  },
  {
    q: B('Which tools do I need?', 'De quels outils avez-vous besoin ?'),
    a: B(
      'The free versions of the main assistants are enough for the whole path. Where a paid feature changes the answer, the lesson says so and says what it costs.',
      "Les versions gratuites des principaux assistants suffisent pour l'ensemble du parcours. Lorsqu'une fonction payante modifie la réponse, la leçon le signale et en indique le prix.",
    ),
  },
  {
    q: B('What if it is not for me?', "Et si cela ne me convient pas ?"),
    a: B(
      `Start with the free AI weekend. It is ${DISCOVERY_LEVEL_COUNT} real lessons, not a sample, and it is the honest way to find out before paying anything.`,
      `Commencez par le week-end de l'IA gratuit. Il comprend ${DISCOVERY_LEVEL_COUNT} leçons complètes, non un simple échantillon, et constitue le moyen le plus honnête d'en juger avant tout paiement.`,
    ),
  },
  {
    q: B('What are the belts?', 'À quoi correspondent les ceintures ?'),
    a: B(
      `Your grade is a belt, from white to black, among ${RANK_COUNT}. It follows your level, and your level follows the XP of the dojos you actually finished: one level every ${XP_PER_LEVEL} XP. Nothing can be bought. Each belt has its own 3D character, which becomes your profile icon. The black belt starts at level ${BLACK_FROM}, which roughly means the AI weekend, the full training and one trade training.`,
      `Votre grade est une ceinture, de la blanche à la noire, parmi ${RANK_COUNT}. Il suit votre niveau, lequel suit l'XP des dojos que vous avez effectivement terminés : un niveau tous les ${XP_PER_LEVEL} XP. Rien ne s'achète. Chaque ceinture possède son propre personnage en trois dimensions, qui devient votre icône de profil. La ceinture noire commence au niveau ${BLACK_FROM}, ce qui correspond à peu près au week-end de l'IA, à la formation complète et à une formation métier.`,
    ),
  },
  {
    q: B('Can I turn off the animations?', 'Peut-on désactiver les animations ?'),
    a: B(
      'Yes. Buttons bounce and throw small particles when you press them. In your profile, the Settings tab switches off the visual effects, reduces the animations, turns the vibrations and the game sound on or off, and changes the language. The effects also switch off by themselves when your system asks for reduced motion.',
      "Oui. Les boutons rebondissent et projettent de petites particules lorsque vous appuyez dessus. Dans votre profil, l'onglet Paramètres permet de désactiver les effets visuels, de réduire les animations, d'activer ou de couper les vibrations et le son du jeu, et de changer de langue. Les effets se désactivent également d'eux-mêmes lorsque votre système demande de réduire les animations.",
    ),
  },
]
