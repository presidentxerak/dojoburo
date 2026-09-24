// LES TEXTES DES VISITES ANIMÉES · des données, sans une ligne de React.
//
// Ils vivaient dans tutorialBeats.tsx, à côté des scènes animées, donc le
// fichier importait TeamCard, TeammateCard et tout ce qu'elles entraînent. Le
// portail, qui lit ces textes hors navigateur pour vérifier qu'ils sont bien
// traduits, chargeait alors react-dom et s'arrêtait sur une erreur.
//
// C'est la même règle que data/academy note pour ses ateliers : un fichier de
// DONNÉES est lu par des scripts, donc il ne dépend de rien qui ait besoin
// d'un navigateur. Les scènes restent dans le .tsx, qui réexporte ceci pour
// que rien d'autre n'ait à changer d'import.
import { LESSON_COUNT, TRACK_COUNT } from '../../data/positioning'

/** Un temps de la visite · le français vit dans le temps lui-même, comme
 *  partout ailleurs, pour que deux listes parallèles ne puissent pas se
 *  décaler d'un temps et raconter deux histoires différentes.
 *
 *  L'IDENTIFIANT NE SE TRADUIT PAS : c'est lui qui choisit la scène animée
 *  montée à côté du texte. */
export interface Beat { id: string; title: string; body: string; fr?: { title: string; body: string } }

export type WalkId = 'overview' | 'company' | 'teams' | 'apps'

export interface Walk { title: string; sub: string; beats: Beat[]; fr?: { title: string; sub: string } }

export const WALKS: Record<WalkId, Walk> = {
  overview: {
    title: 'How it works',
    sub: 'Six steps, start to finish.',
    fr: { title: "Fonctionnement", sub: "Six étapes, du début à la fin." },
    beats: [
      { id: 'name', title: '1 · Start the course', body: `${LESSON_COUNT} lessons across ${TRACK_COUNT} tracks, free and read in the browser. It starts at "what is a token" and assumes you have never heard the word agent. No account, nothing to install.`, fr: { title: "1 · Commencez le cours", body: `${LESSON_COUNT} leçons réparties sur ${TRACK_COUNT} pistes, gratuites et consultables dans le navigateur. Le cours part de la définition d'un token et ne suppose aucune connaissance préalable du terme agent. Aucun compte ni aucune installation ne sont requis.` } },
      { id: 'pick', title: '2 · Watch it, do not just read it', body: 'Every lesson has an animation beside the text that shows the idea moving, a question that marks itself, one line to remember and one thing to go and do.', fr: { title: "2 · Observez, ne vous contentez pas de lire", body: "Chaque leçon comporte, à côté du texte, une animation qui illustre la notion, une question corrigée automatiquement, une phrase à retenir et un exercice à réaliser." } },
      { id: 'crew', title: '3 · Take apart a worked example', body: 'The dojo is a sandbox. Open any teammate and you get the brief that makes it a specialist, the tools it would reach for, and what that way of writing costs.', fr: { title: "3 · Analysez un exemple commenté", body: "Le dojo est un bac à sable. Ouvrez un coéquipier et vous obtenez le brief qui en fait un spécialiste, les outils qu'il mobiliserait, et le coût de cette façon d'écrire." } },
      { id: 'apps', title: '4 · Learn what a tool really costs', body: 'Every app switched on ships its tool definitions with every step. Seeing that number is how you learn to turn tools off, and it is the single easiest saving there is.', fr: { title: "4 · Mesurez le coût réel d'un outil", body: "Chaque application activée transmet ses définitions d'outils à chaque étape. Observer ce chiffre vous apprend à désactiver des outils, ce qui constitue l'économie la plus simple à obtenir." } },
      { id: 'loop', title: '5 · Measure before you cut', body: 'Tokens and euros for the way you actually work, and where they go. Then the levers, each with the saving it really buys rather than the one it is said to buy.', fr: { title: "5 · Mesurez avant de réduire", body: "Les tokens et les euros correspondant à votre façon réelle de travailler, et leur répartition. Ensuite, les leviers, chacun avec l'économie qu'il procure réellement, et non celle qu'on lui attribue." } },
      { id: 'ship', title: '6 · Take the files with you', body: 'Prompts, .md briefs and agent skills, filed by trade. Copy one, adapt it, run it on your own stack. Nothing here runs it for you, that is the point.', fr: { title: "6 · Emportez les fichiers", body: "Des prompts, des briefs .md et des skills d'agent, classés par métier. Copiez-en un, adaptez-le, puis exécutez-le sur votre propre infrastructure. Rien ici ne l'exécute à votre place : c'est précisément l'objectif." } },
    ],
  },

  company: {
    title: 'The practice dojo',
    sub: 'A room to take examples apart in.',
    fr: { title: "Le dojo d'entraînement", sub: "Une salle pour analyser des exemples." },
    beats: [
      { id: 'name', title: '1 · It is a sandbox', body: 'Nothing in the dojo calls a paid model or writes to your real accounts. You can change anything in it without consequence, which is exactly what makes it worth changing.', fr: { title: "1 · Un bac à sable", body: "Rien dans le dojo n'appelle un modèle payant ni n'écrit dans vos comptes réels. Vous pouvez tout y modifier sans conséquence, et c'est précisément ce qui rend l'expérimentation utile." } },
      { id: 'create', title: '2 · Open a teammate', body: 'Each one is a worked example: a brief, a tool list and a budget, put together for a real trade. The brief is the interesting part, read it before you touch it.', fr: { title: "2 · Ouvrez un coéquipier", body: "Chacun constitue un exemple commenté : un brief, une liste d'outils et un budget, conçus pour un métier réel. Le brief en est la partie la plus instructive : lisez-le avant de le modifier." } },
      { id: 'pick', title: '3 · Read the catalogue as examples', body: 'Every ready-made team shows a different shape of problem, a campaign, an app, a book, a shop. Compare two and you learn more than from either alone.', fr: { title: "3 · Lisez le catalogue comme un recueil d'exemples", body: "Chaque équipe prête à l'emploi illustre un type de problème différent : une campagne, une application, un livre, une boutique. En comparer deux vous apprend davantage que les étudier séparément." } },
      { id: 'crew', title: '4 · Change one thing', body: 'Drop a tool. Shorten the brief. Tighten the budget. Change one thing at a time and you can see what it did; change five and you have learnt nothing.', fr: { title: "4 · Modifiez un seul paramètre", body: "Retirez un outil. Raccourcissez le brief. Réduisez le budget. En modifiant un paramètre à la fois, vous en observez l'effet ; en modifiant cinq, vous n'apprenez rien." } },
      { id: 'brief', title: '5 · Write the brief yourself', body: 'One line, the outcome you actually want. Writing a brief badly is the most common reason an agent disappoints, and it is the cheapest mistake to fix.', fr: { title: "5 · Rédigez vous-même le brief", body: "Une ligne : le résultat que vous attendez réellement. Un brief mal rédigé est la cause la plus fréquente de la déception envers un agent, et c'est aussi l'erreur la moins coûteuse à corriger." } },
      { id: 'loop', title: '6 · Watch the cost move', body: 'The token dial in the header shows what each choice costs. Saver, Balanced and Max change three things: the length cap, whether the model thinks first, and how many tools travel with each step.', fr: { title: "6 · Observez l'évolution du coût", body: "Le sélecteur de tokens dans l'en-tête indique le coût de chaque choix. Économe, Équilibré et Maximum modifient trois paramètres : la longueur maximale, la réflexion préalable du modèle, et le nombre d'outils transmis à chaque étape." } },
      { id: 'ship', title: '7 · Rebuild it for real, elsewhere', body: 'When the example makes sense, take the file and wire it on your own stack. The per-app pages in the guide are the step-by-step for that part.', fr: { title: "7 · Reconstruisez-le en conditions réelles", body: "Une fois l'exemple compris, prenez le fichier et intégrez-le à votre propre infrastructure. Les pages du guide consacrées à chaque application détaillent cette étape." } },
    ],
  },

  teams: {
    title: 'How dojo teams work',
    sub: 'What is inside a card, and how to choose.',
    fr: { title: "Fonctionnement des équipes", sub: "Le contenu d'une carte, et comment choisir." },
    beats: [
      { id: 'pick', title: '1 · A card is a whole team', body: 'Not a template and not a prompt: a card is a team with a crew attached. Social campaign, mobile app, book, online shop, start-up, pick the one that matches your goal.', fr: { title: "1 · Une carte représente une équipe entière", body: "Ni un gabarit ni un prompt : une carte est une équipe accompagnée de ses coéquipiers. Campagne sociale, application mobile, livre, boutique en ligne, start-up : choisissez celle qui correspond à votre objectif." } },
      { id: 'crew', title: '2 · The crew is listed up front', body: 'Every card names its teammates and what each one does before you pick it, a researcher, a maker, an analyst, a team lead. No surprises after the fact.', fr: { title: "2 · L'équipe est présentée d'avance", body: "Avant votre choix, chaque carte présente ses coéquipiers et le rôle de chacun : un chercheur, un fabricant, un analyste, un responsable. Aucune surprise a posteriori." } },
      { id: 'apps', title: '3 · Their apps come with them', body: 'The apps that job needs are already attached to the right teammate. Connecting one is a click; the card shows you which ones before you choose.', fr: { title: "3 · Les applications sont incluses", body: "Les applications nécessaires à ce métier sont déjà rattachées au coéquipier concerné. En connecter une ne demande qu'un clic ; la carte vous indique lesquelles avant votre choix." } },
      { id: 'budget', title: '4 · You see the budget first', body: 'Each card shows what one full run would cost on a real provider key, so you know the figure before you tick it. Light, Medium or Heavy tells you at a glance how much work it is.', fr: { title: "4 · Le budget est affiché d'abord", body: "Chaque carte indique le coût d'une exécution complète sur une véritable clé de provider, afin que vous connaissiez le chiffre avant de valider. Léger, Moyen ou Lourd indique d'un coup d'oeil la quantité de travail." } },
      { id: 'loop', title: '5 · The plan runs in order', body: 'Every card has a fixed plan of steps. Hit Run every step and the team lead walks it top to bottom, handing each step to the teammate who owns it.', fr: { title: "5 · Le plan se déroule dans l'ordre", body: "Chaque carte comporte un plan d'étapes fixe. Lorsque vous appuyez sur Lancer toutes les étapes, le responsable le parcourt de haut en bas et confie chaque étape au coéquipier qui en a la charge." } },
      { id: 'edit', title: '6 · Nothing is locked', body: 'Rename teammates, add or remove them, change the apps they reach, rewrite how any one of them works. The card is a starting point, not a cage.', fr: { title: "6 · Rien n'est verrouillé", body: "Renommez des coéquipiers, ajoutez-en ou retirez-en, modifiez les applications auxquelles ils accèdent, réécrivez la méthode de travail de chacun. La carte est un point de départ, non un cadre figé." } },
    ],
  },

  apps: {
    title: 'Connecting your apps',
    sub: 'How it works, and what it costs on top of your plan.',
    fr: { title: "Connecter vos applications", sub: "Fonctionnement, et coût ajouté à votre formule." },
    beats: [
      { id: 'why', title: '1 · Why connect anything', body: 'Without apps your team writes drafts. Connected, they do the real thing: create the Notion page, draft the Gmail, open the GitHub issue, raise the Stripe invoice.', fr: { title: "1 · Pourquoi connecter des applications", body: "Sans applications, votre équipe rédige des brouillons. Une fois connectée, elle agit réellement : créer la page Notion, préparer le courriel dans Gmail, ouvrir le ticket GitHub, émettre la facture Stripe." } },
      { id: 'connect', title: '2 · Connecting is one click', body: 'Open a teammate, find the app under their tasks, hit Connect and approve once on the app\'s own screen. You never hand over a password, and you can disconnect any time.', fr: { title: "2 · Un seul clic suffit", body: "Ouvrez un coéquipier, repérez l'application sous ses tâches, appuyez sur Brancher et donnez votre accord une fois sur l'écran de l'application. Vous ne communiquez jamais de mot de passe et pouvez vous déconnecter à tout moment." } },
      { id: 'apps', title: '3 · Access is sealed away', body: 'What comes back is stored on the server, encrypted, and unlocked only while your team is working. This browser never holds it.', fr: { title: "3 · L'accès est protégé", body: "L'autorisation obtenue est conservée sur le serveur, chiffrée, et n'est déverrouillée que pendant le travail de votre équipe. Ce navigateur ne la détient jamais." } },
      { id: 'free', title: '4 · Connecting costs nothing', body: 'There is no charge to connect an app, and no charge to keep it connected. What an extra app really costs is attention: its tool definitions travel with every step that teammate runs.', fr: { title: "4 · La connexion est gratuite", body: "Connecter une application ou la maintenir connectée est gratuit. Le coût réel d'une application supplémentaire est l'attention du modèle : ses définitions d'outils accompagnent chaque étape exécutée par ce coéquipier." } },
      { id: 'cost', title: '5 · What you pay on top', body: 'One purchase, paid once by card in your own currency. Nothing else is added, no per-app fee, no per-teammate fee, no setup fee. And nothing here is metered, because nothing in the dojo calls a paid model.', fr: { title: "5 · Ce que vous payez en plus", body: "Un achat unique, réglé une seule fois par carte, dans votre propre devise. Rien d'autre ne s'ajoute : aucun frais par application, par coéquipier ni de mise en service. Aucune consommation n'est facturée, car rien dans le dojo n'appelle un modèle payant." } },
      { id: 'sub', title: '6 · Your own apps stay yours', body: 'We never bill you for Notion, Slack, Stripe or anything else you connect. If a plan is needed there, you pay it to them, exactly as you do today.', fr: { title: "6 · Vos applications restent les vôtres", body: "Nous ne vous facturons jamais Notion, Slack, Stripe ni aucun service que vous connectez. Si un abonnement y est nécessaire, vous le réglez directement auprès d'eux, comme aujourd'hui." } },
      { id: 'byok', title: '7 · Or bring your own key', body: 'The day you take an agent out of the dojo, it runs on your own provider key. Your provider bills you directly, we take nothing per run, and we never sit between you and that bill.', fr: { title: "7 · Ou utilisez votre propre clé", body: "Lorsque vous sortez un agent du dojo, il s'exécute avec votre propre clé de provider. Votre provider vous facture directement ; nous ne prélevons rien par exécution et ne nous interposons jamais entre vous et cette facture." } },
    ],
  },
}

/** La visite dans la langue demandée · un seul chemin, comme partout ailleurs.
 *
 *  L'IDENTIFIANT D'UN TEMPS NE CHANGE PAS : c'est lui qui choisit la scène
 *  animée montée à côté du texte, donc le traduire montrerait la mauvaise
 *  scène, ou aucune. */
export function walkIn(w: Walk, lang: 'en' | 'fr'): Walk {
  if (lang !== 'fr') return w
  return {
    ...w,
    title: w.fr?.title ?? w.title,
    sub: w.fr?.sub ?? w.sub,
    beats: w.beats.map((b) => (b.fr ? { ...b, title: b.fr.title, body: b.fr.body } : b)),
  }
}

