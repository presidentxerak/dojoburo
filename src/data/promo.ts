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
    body: B('One thing to learn, one thing to do, three or four moves. Seven minutes.',
      "Une notion à apprendre, un exercice à réaliser, trois ou quatre étapes. Sept minutes."),
  },
  {
    glyph: 'check',
    title: B('A question that closes it', 'Une question de validation'),
    body: B('You answer once, you see why, and you move on. No retry loop.',
      "Vous répondez une seule fois, vous découvrez l'explication, puis vous poursuivez. Il n'y a pas de seconde tentative."),
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
      'The free week is seven lessons of about seven minutes. The full path is a little over four hours, and it is built to be taken one dojo at a time.',
      "La semaine gratuite comprend sept leçons d'environ sept minutes. Le parcours complet dure un peu plus de quatre heures et se suit un dojo à la fois.",
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
      'Start with the free week. It is seven real lessons, not a sample, and it is the honest way to find out before paying anything.',
      "Commencez par la semaine gratuite. Elle comprend sept leçons complètes, non un simple échantillon, et constitue le moyen le plus honnête d'en juger avant tout paiement.",
    ),
  },
]
