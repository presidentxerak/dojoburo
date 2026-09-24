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
    fr: { title: "Comment ça marche", sub: "Six étapes, du début à la fin." },
    beats: [
      { id: 'name', title: '1 · Start the course', body: `${LESSON_COUNT} lessons across ${TRACK_COUNT} tracks, free and read in the browser. It starts at "what is a token" and assumes you have never heard the word agent. No account, nothing to install.`, fr: { title: "1 · Commence le cours", body: `${LESSON_COUNT} leçons réparties sur ${TRACK_COUNT} pistes, gratuites et à lire dans le navigateur. On démarre à « qu'est-ce qu'un token » et on part du principe que tu n'as jamais entendu le mot agent. Aucun compte, rien à installer.` } },
      { id: 'pick', title: '2 · Watch it, do not just read it', body: 'Every lesson has an animation beside the text that shows the idea moving, a question that marks itself, one line to remember and one thing to go and do.', fr: { title: "2 · Regarde, ne te contente pas de lire", body: "Chaque leçon a une animation à côté du texte qui montre l'idée en mouvement, une question qui se corrige toute seule, une ligne à retenir et une chose à aller faire." } },
      { id: 'crew', title: '3 · Take apart a worked example', body: 'The dojo is a sandbox. Open any teammate and you get the brief that makes it a specialist, the tools it would reach for, and what that way of writing costs.', fr: { title: "3 · Démonte un exemple travaillé", body: "Le dojo est un bac à sable. Ouvre n'importe quel coéquipier et tu obtiens la fiche qui en fait un spécialiste, les outils vers lesquels il irait, et ce que cette façon d'écrire coûte." } },
      { id: 'apps', title: '4 · Learn what a tool really costs', body: 'Every app switched on ships its tool definitions with every step. Seeing that number is how you learn to turn tools off, and it is the single easiest saving there is.', fr: { title: "4 · Apprends ce qu'un outil coûte vraiment", body: "Chaque application allumée fait voyager ses définitions d'outils à chaque étape. Voir ce chiffre, c'est ce qui t'apprend à éteindre des outils, et c'est l'économie la plus facile qui soit." } },
      { id: 'loop', title: '5 · Measure before you cut', body: 'Tokens and euros for the way you actually work, and where they go. Then the levers, each with the saving it really buys rather than the one it is said to buy.', fr: { title: "5 · Mesure avant de couper", body: "Les tokens et les euros de ta vraie façon de travailler, et où ils partent. Puis les leviers, chacun avec l'économie qu'il te fait vraiment gagner, pas celle qu'on lui prête." } },
      { id: 'ship', title: '6 · Take the files with you', body: 'Prompts, .md briefs and agent skills, filed by trade. Copy one, adapt it, run it on your own stack. Nothing here runs it for you, that is the point.', fr: { title: "6 · Emporte les fichiers", body: "Des prompts, des dossiers .md et des skills d'agent, classés par métier. Copies-en un, adapte-le, fais-le tourner sur ta propre pile. Rien ici ne le fait tourner à ta place, et c'est tout l'intérêt." } },
    ],
  },

  company: {
    title: 'The practice dojo',
    sub: 'A room to take examples apart in.',
    fr: { title: "Le dojo d'entraînement", sub: "Une salle pour démonter des exemples." },
    beats: [
      { id: 'name', title: '1 · It is a sandbox', body: 'Nothing in the dojo calls a paid model or writes to your real accounts. You can change anything in it without consequence, which is exactly what makes it worth changing.', fr: { title: "1 · C'est un bac à sable", body: "Rien dans le dojo n'appelle un modèle payant ni n'écrit dans tes vrais comptes. Tu peux tout y changer sans conséquence, et c'est exactement pour ça que ça vaut la peine de changer des choses." } },
      { id: 'create', title: '2 · Open a teammate', body: 'Each one is a worked example: a brief, a tool list and a budget, put together for a real trade. The brief is the interesting part, read it before you touch it.', fr: { title: "2 · Ouvre un coéquipier", body: "Chacun est un exemple travaillé : une fiche, une liste d'outils et un budget, assemblés pour un vrai métier. La fiche est la partie intéressante : lis-la avant d'y toucher." } },
      { id: 'pick', title: '3 · Read the catalogue as examples', body: 'Every ready-made team shows a different shape of problem, a campaign, an app, a book, a shop. Compare two and you learn more than from either alone.', fr: { title: "3 · Lis le catalogue comme des exemples", body: "Chaque équipe toute faite montre une forme de problème différente : une campagne, une application, un livre, une boutique. Compares-en deux et tu apprends plus qu'avec chacune seule." } },
      { id: 'crew', title: '4 · Change one thing', body: 'Drop a tool. Shorten the brief. Tighten the budget. Change one thing at a time and you can see what it did; change five and you have learnt nothing.', fr: { title: "4 · Change une seule chose", body: "Retire un outil. Raccourcis la fiche. Serre le budget. Change une chose à la fois et tu vois ce qu'elle a fait ; changes-en cinq et tu n'as rien appris." } },
      { id: 'brief', title: '5 · Write the brief yourself', body: 'One line, the outcome you actually want. Writing a brief badly is the most common reason an agent disappoints, and it is the cheapest mistake to fix.', fr: { title: "5 · Écris la commande toi-même", body: "Une ligne : le résultat que tu veux vraiment. Une commande mal écrite, c'est la raison la plus fréquente pour laquelle un agent déçoit, et c'est l'erreur la moins chère à corriger." } },
      { id: 'loop', title: '6 · Watch the cost move', body: 'The token dial in the header shows what each choice costs. Saver, Balanced and Max change three things: the length cap, whether the model thinks first, and how many tools travel with each step.', fr: { title: "6 · Regarde le coût bouger", body: "Le bouton des tokens dans l'en-tête te montre ce que chaque choix coûte. Économe, Équilibré et Maximum changent trois choses : le plafond de longueur, le fait que le modèle réfléchisse d'abord, et le nombre d'outils qui voyagent avec chaque étape." } },
      { id: 'ship', title: '7 · Rebuild it for real, elsewhere', body: 'When the example makes sense, take the file and wire it on your own stack. The per-app pages in the guide are the step-by-step for that part.', fr: { title: "7 · Refais-le pour de vrai, ailleurs", body: "Quand l'exemple est compris, prends le fichier et câble-le sur ta propre pile. Les pages par application du guide te donnent le pas à pas de cette partie." } },
    ],
  },

  teams: {
    title: 'How dojo teams work',
    sub: 'What is inside a card, and how to choose.',
    fr: { title: "Comment marchent les équipes", sub: "Ce qu'il y a dans une carte, et comment choisir." },
    beats: [
      { id: 'pick', title: '1 · A card is a whole team', body: 'Not a template and not a prompt: a card is a team with a crew attached. Social campaign, mobile app, book, online shop, start-up, pick the one that matches your goal.', fr: { title: "1 · Une carte est une équipe entière", body: "Ni un gabarit ni un prompt : une carte est une équipe avec ses coéquipiers attachés. Campagne sociale, application mobile, livre, boutique en ligne, start-up : prends celle qui correspond à ton objectif." } },
      { id: 'crew', title: '2 · The crew is listed up front', body: 'Every card names its teammates and what each one does before you pick it, a researcher, a maker, an analyst, a team lead. No surprises after the fact.', fr: { title: "2 · L'équipe est annoncée d'avance", body: "Chaque carte nomme ses coéquipiers et ce que fait chacun avant que tu la choisisses : un chercheur, un fabricant, un analyste, un responsable. Aucune surprise après coup." } },
      { id: 'apps', title: '3 · Their apps come with them', body: 'The apps that job needs are already attached to the right teammate. Connecting one is a click; the card shows you which ones before you choose.', fr: { title: "3 · Leurs applications viennent avec", body: "Les applications dont ce métier a besoin sont déjà rattachées au bon coéquipier. En brancher une tient en un clic ; la carte te montre lesquelles avant que tu choisisses." } },
      { id: 'budget', title: '4 · You see the budget first', body: 'Each card shows what one full run would cost on a real provider key, so you know the figure before you tick it. Light, Medium or Heavy tells you at a glance how much work it is.', fr: { title: "4 · Tu vois le budget en premier", body: "Chaque carte montre ce qu'un passage complet coûterait sur une vraie clé de provider, pour que tu connaisses le chiffre avant de cocher. Léger, Moyen ou Lourd te dit d'un coup d'oeil la quantité de travail." } },
      { id: 'loop', title: '5 · The plan runs in order', body: 'Every card has a fixed plan of steps. Hit Run every step and the team lead walks it top to bottom, handing each step to the teammate who owns it.', fr: { title: "5 · Le plan se déroule dans l'ordre", body: "Chaque carte a un plan d'étapes fixe. Appuie sur Lancer toutes les étapes et le responsable le parcourt de haut en bas, en confiant chaque étape au coéquipier qui la porte." } },
      { id: 'edit', title: '6 · Nothing is locked', body: 'Rename teammates, add or remove them, change the apps they reach, rewrite how any one of them works. The card is a starting point, not a cage.', fr: { title: "6 · Rien n'est verrouillé", body: "Renomme des coéquipiers, ajoutes-en ou retires-en, change les applications qu'ils atteignent, réécris la façon de travailler de n'importe lequel. La carte est un point de départ, pas une cage." } },
    ],
  },

  apps: {
    title: 'Connecting your apps',
    sub: 'How it works, and what it costs on top of your plan.',
    fr: { title: "Brancher tes applications", sub: "Comment ça marche, et ce que ça ajoute à ta formule." },
    beats: [
      { id: 'why', title: '1 · Why connect anything', body: 'Without apps your team writes drafts. Connected, they do the real thing: create the Notion page, draft the Gmail, open the GitHub issue, raise the Stripe invoice.', fr: { title: "1 · Pourquoi brancher quoi que ce soit", body: "Sans applications, ton équipe écrit des brouillons. Branchée, elle fait la chose pour de vrai : créer la page Notion, préparer le mail dans Gmail, ouvrir le ticket GitHub, émettre la facture Stripe." } },
      { id: 'connect', title: '2 · Connecting is one click', body: 'Open a teammate, find the app under their tasks, hit Connect and approve once on the app\'s own screen. You never hand over a password, and you can disconnect any time.', fr: { title: "2 · Brancher tient en un clic", body: "Ouvre un coéquipier, trouve l'application sous ses tâches, appuie sur Brancher et donne ton accord une fois sur l'écran de l'application. Tu ne donnes jamais de mot de passe, et tu peux débrancher à tout moment." } },
      { id: 'apps', title: '3 · Access is sealed away', body: 'What comes back is stored on the server, encrypted, and unlocked only while your team is working. This browser never holds it.', fr: { title: "3 · L'accès est scellé", body: "Ce qui revient est conservé sur le serveur, chiffré, et déverrouillé seulement pendant que ton équipe travaille. Ce navigateur ne le détient jamais." } },
      { id: 'free', title: '4 · Connecting costs nothing', body: 'There is no charge to connect an app, and no charge to keep it connected. What an extra app really costs is attention: its tool definitions travel with every step that teammate runs.', fr: { title: "4 · Brancher ne coûte rien", body: "Il n'y a rien à payer pour brancher une application, ni pour la garder branchée. Ce qu'une application de plus coûte vraiment, c'est de l'attention : ses définitions d'outils voyagent avec chaque étape que ce coéquipier exécute." } },
      { id: 'cost', title: '5 · What you pay on top', body: 'One purchase, paid once by card in your own currency. Nothing else is added, no per-app fee, no per-teammate fee, no setup fee. And nothing here is metered, because nothing in the dojo calls a paid model.', fr: { title: "5 · Ce que tu paies en plus", body: "Un seul achat, payé une fois par carte, dans ta propre monnaie. Rien d'autre ne s'ajoute : aucun frais par application, aucun frais par coéquipier, aucun frais de mise en service. Et rien ici n'est compté, parce que rien dans le dojo n'appelle un modèle payant." } },
      { id: 'sub', title: '6 · Your own apps stay yours', body: 'We never bill you for Notion, Slack, Stripe or anything else you connect. If a plan is needed there, you pay it to them, exactly as you do today.', fr: { title: "6 · Tes propres applications restent les tiennes", body: "On ne te facture jamais Notion, Slack, Stripe ni rien de ce que tu branches. Si une formule y est nécessaire, tu la paies chez eux, exactement comme aujourd'hui." } },
      { id: 'byok', title: '7 · Or bring your own key', body: 'The day you take an agent out of the dojo, it runs on your own provider key. Your provider bills you directly, we take nothing per run, and we never sit between you and that bill.', fr: { title: "7 · Ou apporte ta propre clé", body: "Le jour où tu sors un agent du dojo, il tourne sur ta propre clé de provider. Ton provider te facture directement, on ne prend rien par passage, et on ne se met jamais entre toi et cette facture." } },
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

