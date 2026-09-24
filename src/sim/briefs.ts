// DOJOBURO · la bibliothèque des briefs clients.
//
// 48 briefs : 18 de niveau 1 (dès le jour 1), 18 de niveau 2 (dès le jour 2),
// 12 de niveau 3 (dès le jour 4). Chaque brief demande les spécialistes qui
// correspondent vraiment au travail, et `tip` dit pourquoi, en une phrase.
// Les douze compétences y apparaissent chacune au moins cinq fois ; le chef
// d'orchestre vit surtout au niveau 3, là où le travail a plusieurs morceaux.
import { B } from '../data/bilingual'
import type { Brief } from './types'

export const BRIEFS: Brief[] = [
  /* --- niveau 1 · un spécialiste, parfois deux ---------------------------- */
  {
    id: 'b-galette-posts',
    client: { name: 'Léa', trade: B('Bakery owner', "Gérante de boulangerie") },
    title: B('Five posts for the galette', "Cinq posts pour la galette"),
    ask: B(
      "January is coming. I need five short posts for our galette des rois, warm but not cheesy, like we actually talk at the counter.",
      "Janvier arrive. Il me faut cinq petits posts pour notre galette des rois, chaleureux mais pas niais, comme on parle vraiment au comptoir.",
    ),
    needs: { writing: 1 },
    tokens: 5000, reward: 95, work: 20, tier: 1,
    tip: B(
      "A voice is a writer's job: give it the tone and a few bans, and the posts sound like the bakery, not like a generic assistant.",
      "Une voix, c'est le travail du rédacteur : donne-lui le ton et quelques interdits, et les posts sonnent comme la boulangerie, pas comme un assistant générique.",
    ),
  },
  {
    id: 'b-avis-resto',
    client: { name: 'Karim', trade: B('Restaurant owner', "Restaurateur") },
    title: B('Sort 80 reviews', "Trier 80 avis"),
    ask: B(
      "I have 80 reviews I never read properly. Can you sort them into praise, complaints and questions so I know where to start?",
      "J'ai 80 avis que je n'ai jamais vraiment lus. Vous pouvez les ranger en compliments, plaintes et questions, que je sache par où commencer ?",
    ),
    needs: { triage: 1 },
    tokens: 6000, reward: 110, work: 22, tier: 1,
    tip: B(
      "Putting things in boxes is the sorter's job. Write each category as a test, and add a \"none of these\" so it stops forcing a fit.",
      "Ranger dans des cases, c'est le travail du trieur. Écris chaque catégorie comme un test, et ajoute un « aucune » pour qu'il arrête de forcer.",
    ),
  },
  {
    id: 'b-factures-40',
    client: { name: 'Nathalie', trade: B('Accountant', "Expert-comptable") },
    title: B('Amounts from 40 invoices', "Les montants de 40 factures"),
    ask: B(
      "Here are 40 supplier invoices in PDF. I need the date, the supplier, the amount before tax and the VAT in a table, nothing else.",
      "Voici 40 factures fournisseurs en PDF. Il me faut la date, le fournisseur, le montant HT et la TVA dans un tableau, rien d'autre.",
    ),
    needs: { extraction: 1 },
    tokens: 8000, reward: 130, work: 24, tier: 1,
    tip: B(
      "Fields out of documents is the extractor's job. Write the schema first and ask for an empty cell rather than a plausible guess.",
      "Sortir des champs d'un document, c'est l'extracteur. Écris le schéma d'abord, et exige une case vide plutôt qu'une valeur devinée.",
    ),
  },
  {
    id: 'b-fusion-fichiers',
    client: { name: 'Hugo', trade: B('Online shop owner', "Gérant d'e-commerce") },
    title: B('Merge two customer files', "Fusionner deux fichiers clients"),
    ask: B(
      "I have two customer files, one from the shop and one from the website, with duplicates everywhere. I need a small script that merges them.",
      "J'ai deux fichiers clients, un de la boutique et un du site, avec des doublons partout. Il me faut un petit script qui les fusionne.",
    ),
    needs: { coding: 1 },
    tokens: 6000, reward: 110, work: 22, tier: 1,
    tip: B(
      "A script is the engineer's job. Ask it to show the duplicates it merged, so you can check the rule before running it on everything.",
      "Un script, c'est le travail du codeur. Demande-lui de montrer les doublons qu'il a fusionnés, pour vérifier la règle avant de tout lancer.",
    ),
  },
  {
    id: 'b-pharma-faq',
    client: { name: 'Sophie', trade: B('Pharmacist', "Pharmacienne") },
    title: B('Answer the opening-hours calls', "Répondre aux questions d'horaires"),
    ask: B(
      "Half our messages ask about opening hours and night duty. I want something that answers those politely and passes anything medical to us.",
      "La moitié de nos messages portent sur les horaires et les gardes. Je veux quelque chose qui réponde poliment et qui nous passe tout ce qui est médical.",
    ),
    needs: { support: 1 },
    tokens: 5000, reward: 95, work: 20, tier: 1,
    tip: B(
      "Answering people is the responder's job, and its key rule here is the handover: anything medical goes to a human, never a guess.",
      "Répondre aux gens, c'est le répondant, et sa règle clé ici est le transfert : tout ce qui est médical part vers un humain, jamais une supposition.",
    ),
  },
  {
    id: 'b-prix-caviste',
    client: { name: 'Thomas', trade: B('Wine merchant', "Caviste") },
    title: B('Watch three rivals\' prices', "Surveiller les prix de trois rivaux"),
    ask: B(
      "Three shops in town sell the same wines as me. Every Monday I'd like to know which prices moved, and only that.",
      "Trois boutiques en ville vendent les mêmes vins que moi. Chaque lundi, j'aimerais savoir quels prix ont bougé, et seulement ça.",
    ),
    needs: { watch: 1 },
    tokens: 5000, reward: 100, work: 20, tier: 1,
    tip: B(
      "Noticing change on a rhythm is the watcher's job. It reports what differs from last week, not an opinion on the market.",
      "Remarquer ce qui change, à rythme fixe, c'est la vigie. Elle rapporte ce qui diffère de la semaine passée, pas un avis sur le marché.",
    ),
  },
  {
    id: 'b-salon-mariage',
    client: { name: 'Camille', trade: B('Wedding planner', "Organisatrice de mariages") },
    title: B('Countdown to the wedding fair', "Le rétroplanning du salon"),
    ask: B(
      "The wedding fair is in six weeks and I haven't started. I need a week-by-week plan: stand, flyers, samples, who does what.",
      "Le salon du mariage est dans six semaines et je n'ai rien commencé. Il me faut un plan semaine par semaine : stand, flyers, échantillons, qui fait quoi.",
    ),
    needs: { planning: 1 },
    tokens: 6000, reward: 110, work: 22, tier: 1,
    tip: B(
      "Turning a wish into steps is the planner's job. Each step needs an owner and a result you can see, or the plan stays a wish.",
      "Transformer un souhait en étapes, c'est le planificateur. Chaque étape doit avoir un responsable et un résultat visible, sinon ça reste un souhait.",
    ),
  },
  {
    id: 'b-coach-agenda',
    client: { name: 'Mehdi', trade: B('Personal trainer', "Coach sportif") },
    title: B('Bookings straight into the calendar', "Les réservations dans l'agenda"),
    ask: B(
      "People book sessions through my website form, then I copy everything into my calendar by hand. Can the booking land there by itself?",
      "Les gens réservent via le formulaire de mon site, puis je recopie tout à la main dans mon agenda. La réservation peut arriver toute seule ?",
    ),
    needs: { tools: 1 },
    tokens: 7000, reward: 120, work: 24, tier: 1,
    tip: B(
      "Acting in a real system is the operator's job. Limit what it may touch, here one calendar, and keep a step where you say yes.",
      "Agir dans un vrai système, c'est l'outilleur. Limite ce qu'il peut toucher, ici un seul agenda, et garde une étape où tu dis oui.",
    ),
  },
  {
    id: 'b-objet-newsletter',
    client: { name: 'Julie', trade: B('Jewellery maker', "Créatrice de bijoux") },
    title: B('Test two email subject lines', "Tester deux objets d'email"),
    ask: B(
      "My newsletter goes out Friday. I'd like a few subject lines to test on part of the list, and then to know which one really worked.",
      "Ma newsletter part vendredi. J'aimerais quelques objets à tester sur une partie de la liste, puis savoir lequel a vraiment marché.",
    ),
    needs: { growth: 1 },
    tokens: 5000, reward: 95, work: 20, tier: 1,
    tip: B(
      "Variants plus a verdict is the campaigner's job. Decide what counts as winning before sending, or any result will look like a win.",
      "Des variantes et un verdict, c'est l'expérimentateur. Décide ce qui compte comme gagner avant l'envoi, sinon n'importe quel résultat aura l'air d'une victoire.",
    ),
  },
  {
    id: 'b-marges-carte',
    client: { name: 'Antoine', trade: B('Food truck owner', "Gérant de food truck") },
    title: B('Which dishes really pay', "Les plats qui rapportent vraiment"),
    ask: B(
      "Here are my ingredient costs and my sales for the month. I want to know which dishes earn me money and which ones I should drop.",
      "Voici mes coûts d'ingrédients et mes ventes du mois. Je veux savoir quels plats me rapportent et lesquels je devrais retirer.",
    ),
    needs: { analysis: 1 },
    tokens: 6000, reward: 115, work: 22, tier: 1,
    tip: B(
      "Numbers into a decision is the analyst's job. It checks the arithmetic first, then recommends, and says what would make it wrong.",
      "Des chiffres vers une décision, c'est l'analyste. Il vérifie le calcul d'abord, puis recommande, et dit ce qui le ferait se tromper.",
    ),
  },
  {
    id: 'b-sacs-epicerie',
    client: { name: 'Élodie', trade: B('Organic grocer', "Gérante d'épicerie bio") },
    title: B('What the rules say on bags', "Ce que dit la loi sur les sacs"),
    ask: B(
      "A supplier says my paper bags will soon be banned. Can you find what the official texts actually say, with the links?",
      "Un fournisseur me dit que mes sacs en papier seront bientôt interdits. Vous pouvez trouver ce que disent vraiment les textes officiels, avec les liens ?",
    ),
    needs: { research: 1 },
    tokens: 6000, reward: 110, work: 22, tier: 1,
    tip: B(
      "A sourced answer is the researcher's job. Every claim must quote its text, and what the sources don't cover must be said out loud.",
      "Une réponse sourcée, c'est le chercheur. Chaque affirmation cite son texte, et ce que les sources ne couvrent pas doit être dit clairement.",
    ),
  },
  {
    id: 'b-mails-plombier',
    client: { name: 'Pierre', trade: B('Plumber', "Artisan plombier") },
    title: B('Urgent, quote or junk', "Urgence, devis ou pub"),
    ask: B(
      "My inbox is a mess. I just want the leaks on top, the quote requests next, and the ads out of my sight.",
      "Ma boîte mail est un chantier. Je veux juste les fuites en haut, les demandes de devis ensuite, et les pubs hors de ma vue.",
    ),
    needs: { triage: 1 },
    tokens: 4000, reward: 80, work: 18, tier: 1,
    tip: B(
      "Three clear queues is a sorter's job, small and cheap. No need to spend tokens on a writer when nothing has to be written.",
      "Trois files claires, c'est un travail de trieur, petit et peu coûteux. Inutile de payer des tokens au rédacteur quand rien n'est à écrire.",
    ),
  },
  {
    id: 'b-cv-interim',
    client: { name: 'Inès', trade: B('Recruitment agency manager', "Gérante d'agence d'intérim") },
    title: B('60 CVs into one table', "60 CV dans un seul tableau"),
    ask: B(
      "I got 60 CVs in every possible format. I need name, phone, town and driving licence yes or no, in one table.",
      "J'ai reçu 60 CV dans tous les formats possibles. Il me faut nom, téléphone, ville et permis oui ou non, dans un seul tableau.",
    ),
    needs: { extraction: 1 },
    tokens: 7000, reward: 120, work: 22, tier: 1,
    tip: B(
      "Same fields from messy documents: the extractor. If a licence isn't mentioned, the cell stays empty; a guessed \"yes\" costs a job.",
      "Les mêmes champs dans des documents en vrac : l'extracteur. Si le permis n'est pas mentionné, la case reste vide ; un « oui » deviné coûte une mission.",
    ),
  },
  {
    id: 'b-fiches-chaussures',
    client: { name: 'Bruno', trade: B('Clothing shop owner', "Gérant de boutique de vêtements") },
    title: B('Twenty product descriptions', "Vingt fiches produits"),
    ask: B(
      "I'm putting twenty items online. I need short product descriptions, the same style for all, no \"must-have\" or \"timeless\".",
      "Je mets vingt articles en ligne. Il me faut des fiches produits courtes, le même style pour toutes, sans « incontournable » ni « intemporel ».",
    ),
    needs: { writing: 1 },
    tokens: 7000, reward: 120, work: 24, tier: 1,
    tip: B(
      "Twenty texts in one voice is the writer's job. The client's own bans are the best brief: write them down once, reuse them twenty times.",
      "Vingt textes d'une seule voix, c'est le rédacteur. Les interdits du client sont le meilleur brief : écris-les une fois, sers-t'en vingt fois.",
    ),
  },
  {
    id: 'b-avis-gite',
    client: { name: 'Nicolas', trade: B('Guesthouse owner', "Propriétaire de gîte") },
    title: B('Reply to the guest reviews', "Répondre aux avis des voyageurs"),
    ask: B(
      "I have a dozen reviews to answer, two of them angry. I want replies that sound like me and never promise a refund.",
      "J'ai une douzaine d'avis à qui répondre, dont deux fâchés. Je veux des réponses qui me ressemblent et qui ne promettent jamais de remboursement.",
    ),
    needs: { support: 1, writing: 1 },
    tokens: 9000, reward: 150, work: 28, tier: 1,
    tip: B(
      "Two jobs here: the responder knows what must never be promised, the writer knows the owner's voice. One alone gets half of it right.",
      "Deux métiers ici : le répondant sait ce qu'il ne faut jamais promettre, le rédacteur connaît la voix du gérant. Un seul n'en réussit que la moitié.",
    ),
  },
  {
    id: 'b-formulaire-danse',
    client: { name: 'Sarah', trade: B('Dance school owner', "Directrice d'école de danse") },
    title: B('The sign-up form is broken', "Le formulaire d'inscription plante"),
    ask: B(
      "Since last week the sign-up form on our site shows an error when parents click send. Registrations open Monday.",
      "Depuis la semaine dernière, le formulaire d'inscription de notre site affiche une erreur quand les parents cliquent sur envoyer. Les inscriptions ouvrent lundi.",
    ),
    needs: { coding: 1 },
    tokens: 8000, reward: 140, work: 26, tier: 1,
    tip: B(
      "A bug is the engineer's job. Ask for the defect it can show, with the input that breaks it, not a list of things it would rewrite.",
      "Un bug, c'est le codeur. Demande-lui le défaut qu'il peut démontrer, avec l'entrée qui casse, pas une liste de ce qu'il aimerait réécrire.",
    ),
  },
  {
    id: 'b-subventions-club',
    client: { name: 'Olivier', trade: B('Sports club treasurer', "Trésorier d'association sportive") },
    title: B('Grants the club could get', "Les subventions possibles du club"),
    ask: B(
      "Our football club needs new goals. Which public grants could we apply for, and where is it written? I don't want rumours.",
      "Notre club de foot a besoin de nouvelles cages. À quelles aides publiques pourrait-on prétendre, et où c'est écrit ? Je ne veux pas de rumeurs.",
    ),
    needs: { research: 1 },
    tokens: 7000, reward: 125, work: 24, tier: 1,
    tip: B(
      "\"Where is it written\" calls for the researcher. Without sources you would hand the club a list of grants that may not exist.",
      "« Où c'est écrit » appelle le chercheur. Sans sources, tu donnerais au club une liste d'aides qui n'existent peut-être pas.",
    ),
  },
  {
    id: 'b-appels-offres',
    client: { name: 'Claire', trade: B('Architect', "Architecte") },
    title: B('Tenders worth answering', "Les appels d'offres qui valent le coup"),
    ask: B(
      "New public tenders come out every week. I want to see only the ones near here, for buildings under a certain size, every Monday.",
      "Des appels d'offres publics sortent chaque semaine. Je veux voir seulement ceux du coin, pour des bâtiments sous une certaine taille, chaque lundi.",
    ),
    needs: { watch: 1, triage: 1 },
    tokens: 10000, reward: 160, work: 30, tier: 1,
    tip: B(
      "The watcher spots what's new each week, the sorter keeps only what fits. Without the sorter, Claire gets fifty tenders and reads none.",
      "La vigie repère ce qui est nouveau chaque semaine, le trieur garde ce qui correspond. Sans le trieur, Claire reçoit cinquante appels et n'en lit aucun.",
    ),
  },

  /* --- niveau 2 · deux spécialistes --------------------------------------- */
  {
    id: 'b-avis-hotel',
    client: { name: 'Aurélie', trade: B('Hotel manager', "Directrice d'hôtel") },
    title: B('What 300 reviews are telling us', "Ce que disent 300 avis"),
    ask: B(
      "We have 300 reviews from the past year. I want to know what really bothers guests, in order, so I know what to fix first.",
      "On a 300 avis sur l'année passée. Je veux savoir ce qui gêne vraiment les clients, dans l'ordre, pour savoir quoi réparer en premier.",
    ),
    needs: { triage: 1, analysis: 2 },
    tokens: 12000, reward: 210, work: 32, tier: 2,
    tip: B(
      "Sort first, analyse second. Without the sorter, the analyst counts complaints mixed with praise and its ranking means nothing.",
      "Trier d'abord, analyser ensuite. Sans le trieur, l'analyste compte des plaintes mélangées aux compliments, et son classement ne veut rien dire.",
    ),
  },
  {
    id: 'b-relance-devis',
    client: { name: 'Julien', trade: B('Carpenter', "Menuisier") },
    title: B('Automatic quote follow-ups', "La relance automatique des devis"),
    ask: B(
      "I send quotes and never follow up. I'd like a polite reminder to go out on its own after ten days if the client hasn't answered.",
      "J'envoie des devis et je ne relance jamais. J'aimerais qu'un rappel poli parte tout seul au bout de dix jours si le client n'a pas répondu.",
    ),
    needs: { tools: 2, writing: 1 },
    tokens: 11000, reward: 200, work: 30, tier: 2,
    tip: B(
      "The operator sends at the right time, the writer makes the reminder sound human. A tool alone sends robotic mail; a writer alone sends nothing.",
      "L'outilleur envoie au bon moment, le rédacteur rend la relance humaine. L'outil seul envoie un mail de robot ; le rédacteur seul n'envoie rien.",
    ),
  },
  {
    id: 'b-veille-saas',
    client: { name: 'Chloé', trade: B('SaaS startup founder', "Fondatrice de startup SaaS") },
    title: B('Weekly competitor watch', "La veille concurrentielle de la semaine"),
    ask: B(
      "Four competitors ship new features all the time. Every Friday I want what changed on their sites and changelogs, with the links.",
      "Quatre concurrents sortent des fonctionnalités sans arrêt. Chaque vendredi, je veux ce qui a changé sur leurs sites et leurs notes de version, avec les liens.",
    ),
    needs: { watch: 2, research: 1 },
    tokens: 12000, reward: 210, work: 32, tier: 2,
    tip: B(
      "The watcher sees the change, the researcher backs it with a source. A watch without links is gossip nobody can check.",
      "La vigie voit le changement, le chercheur l'appuie sur une source. Une veille sans liens, c'est une rumeur que personne ne peut vérifier.",
    ),
  },
  {
    id: 'b-abonnement-cafe',
    client: { name: 'Maxime', trade: B('Coffee roaster', "Torréfacteur") },
    title: B('Launch plan for a coffee box', "Le plan de lancement d'une box café"),
    ask: B(
      "I want to launch a monthly coffee subscription in the spring. I need a launch plan, and a few offers to test before I pick one.",
      "Je veux lancer un abonnement café mensuel au printemps. Il me faut un plan de lancement, et quelques offres à tester avant d'en choisir une.",
    ),
    needs: { planning: 2, growth: 1 },
    tokens: 13000, reward: 230, work: 34, tier: 2,
    tip: B(
      "The planner orders the launch, the campaigner tests the offers. A plan without tests launches a guess; tests without a plan launch nothing.",
      "Le planificateur ordonne le lancement, l'expérimentateur teste les offres. Un plan sans test lance une supposition ; des tests sans plan ne lancent rien.",
    ),
  },
  {
    id: 'b-chatbot-sav',
    client: { name: 'Laura', trade: B('Cosmetics online shop owner', "Gérante d'e-shop de cosmétiques") },
    title: B('A support chatbot that checks orders', "Un chatbot SAV qui voit les commandes"),
    ask: B(
      "Most messages are \"where is my parcel?\". I want a chatbot that looks up the tracking itself and answers, and sends the rest to me.",
      "La plupart des messages, c'est « où est mon colis ? ». Je veux un chatbot qui regarde le suivi lui-même et répond, et qui m'envoie le reste.",
    ),
    needs: { support: 2, tools: 1 },
    tokens: 14000, reward: 240, work: 34, tier: 2,
    tip: B(
      "The responder talks to customers, the operator reads the tracking. Without the tool, the bot can only guess where the parcel is.",
      "Le répondant parle aux clients, l'outilleur lit le suivi. Sans l'outil, le bot ne peut que deviner où est le colis.",
    ),
  },
  {
    id: 'b-clients-rentables',
    client: { name: 'François', trade: B('Manager of a small manufacturer', "Dirigeant de PME industrielle") },
    title: B('Our most profitable customers', "Nos clients les plus rentables"),
    ask: B(
      "I have two years of purchase orders as scanned PDFs. I'd like to know which customers really make us money once discounts are counted.",
      "J'ai deux ans de bons de commande en PDF scannés. J'aimerais savoir quels clients nous font vraiment gagner de l'argent, remises comprises.",
    ),
    needs: { extraction: 1, analysis: 2 },
    tokens: 13000, reward: 230, work: 32, tier: 2,
    tip: B(
      "The extractor turns scans into rows, the analyst turns rows into a verdict. Skip extraction and the analyst works from numbers it made up.",
      "L'extracteur change les scans en lignes, l'analyste change les lignes en verdict. Sans extraction, l'analyste travaille sur des chiffres inventés.",
    ),
  },
  {
    id: 'b-clauses-baux',
    client: { name: 'Valérie', trade: B('Lawyer', "Avocate") },
    title: B('Clauses from 25 leases', "Les clauses de 25 baux"),
    ask: B(
      "I have 25 commercial leases. I need the rent review clause of each one pulled out, and to know which ones don't match the current law.",
      "J'ai 25 baux commerciaux. Il me faut la clause de révision du loyer de chacun, et savoir lesquels ne collent pas avec la loi actuelle.",
    ),
    needs: { extraction: 2, research: 1 },
    tokens: 14000, reward: 250, work: 34, tier: 2,
    tip: B(
      "The extractor pulls the exact clause, the researcher checks it against the source text. A summarised clause is worthless to a lawyer.",
      "L'extracteur sort la clause exacte, le chercheur la confronte au texte de loi. Une clause résumée ne vaut rien pour une avocate.",
    ),
  },
  {
    id: 'b-messages-velo',
    client: { name: 'Romain', trade: B('Bike repair shop owner', "Réparateur de vélos") },
    title: B('Sort and answer the messages', "Trier et répondre aux messages"),
    ask: B(
      "I get repair requests, price questions and complaints all mixed up. I'd like each one routed, and the simple ones answered.",
      "Je reçois des demandes de réparation, des questions de prix et des réclamations, tout mélangé. J'aimerais que chacune soit rangée, et les simples répondues.",
    ),
    needs: { triage: 1, support: 1 },
    tokens: 9000, reward: 170, work: 28, tier: 2,
    tip: B(
      "The sorter decides who handles what, the responder answers the simple ones. Skip the sorter and a complaint gets a price list back.",
      "Le trieur décide qui s'occupe de quoi, le répondant traite les cas simples. Sans le trieur, une réclamation reçoit une grille de tarifs.",
    ),
  },
  {
    id: 'b-annonces-immo',
    client: { name: 'Céline', trade: B('Estate agent', "Agente immobilière") },
    title: B('Three versions of a listing', "Trois versions d'une annonce"),
    ask: B(
      "This flat has been online for two months with no visits. Write me three different listings and tell me which one pulls the most calls.",
      "Cet appartement est en ligne depuis deux mois sans visite. Écrivez-moi trois annonces différentes et dites-moi laquelle fait le plus appeler.",
    ),
    needs: { growth: 2, writing: 1 },
    tokens: 10000, reward: 180, work: 28, tier: 2,
    tip: B(
      "The writer makes three real options, the campaigner reads which one won. Three near-identical texts would teach nothing.",
      "Le rédacteur fait trois vraies options, l'expérimentateur lit laquelle a gagné. Trois textes presque identiques n'apprendraient rien.",
    ),
  },
  {
    id: 'b-ruptures-stock',
    client: { name: 'Hélène', trade: B('Pharmacist', "Pharmacienne") },
    title: B('Spot stock-outs in advance', "Voir venir les ruptures de stock"),
    ask: B(
      "Our software exports sales every night. I'd like a script that reads it and tells me which products will run out next week.",
      "Notre logiciel exporte les ventes chaque nuit. J'aimerais un script qui le lise et me dise quels produits vont manquer la semaine prochaine.",
    ),
    needs: { coding: 2, analysis: 1 },
    tokens: 12000, reward: 220, work: 32, tier: 2,
    tip: B(
      "The engineer writes the script, the analyst checks the forecast holds up. Code that runs is not the same as a forecast that's right.",
      "Le codeur écrit le script, l'analyste vérifie que la prévision tient. Un code qui tourne n'est pas une prévision juste.",
    ),
  },
  {
    id: 'b-planning-salle',
    client: { name: 'David', trade: B('Restaurant owner', "Restaurateur") },
    title: B('Staff rota in the shared calendar', "Le planning d'équipe dans l'agenda"),
    ask: B(
      "Every week I juggle eight people's availability on paper. I want a fair rota for the month, and everyone gets it in their calendar.",
      "Chaque semaine, je jongle avec les dispos de huit personnes sur papier. Je veux un planning juste pour le mois, et que chacun le reçoive dans son agenda.",
    ),
    needs: { planning: 2, tools: 1 },
    tokens: 11000, reward: 200, work: 30, tier: 2,
    tip: B(
      "The planner builds the rota, the operator puts it in the calendars. A perfect plan that stays in a document changes nothing for the team.",
      "Le planificateur construit le planning, l'outilleur le pose dans les agendas. Un plan parfait resté dans un document ne change rien pour l'équipe.",
    ),
  },
  {
    id: 'b-rapport-asso',
    client: { name: 'Marion', trade: B('Homework charity coordinator', "Coordinatrice d'association d'aide aux devoirs") },
    title: B('Annual report for funders', "Le rapport annuel pour les financeurs"),
    ask: B(
      "Our funders want an annual report. I have the attendance sheets and the accounts. It has to be honest, readable, and not too long.",
      "Nos financeurs veulent un rapport annuel. J'ai les feuilles de présence et les comptes. Il faut que ce soit honnête, lisible, et pas trop long.",
    ),
    needs: { writing: 2, analysis: 1 },
    tokens: 12000, reward: 210, work: 32, tier: 2,
    tip: B(
      "The analyst checks what the figures really show, the writer makes them readable. Nice prose over wrong numbers loses a funder.",
      "L'analyste vérifie ce que les chiffres montrent vraiment, le rédacteur les rend lisibles. Une belle plume sur des chiffres faux fait perdre un financeur.",
    ),
  },
  {
    id: 'b-inscriptions-langues',
    client: { name: 'Yanis', trade: B('Language school director', "Directeur d'école de langues") },
    title: B('Each student in the right group', "Chaque élève dans le bon groupe"),
    ask: B(
      "Sign-ups arrive with a short placement test. I want each student put in the right level and added to that group's class list.",
      "Les inscriptions arrivent avec un petit test de niveau. Je veux que chaque élève soit placé au bon niveau et ajouté à la liste du groupe.",
    ),
    needs: { triage: 2, tools: 1 },
    tokens: 10000, reward: 190, work: 30, tier: 2,
    tip: B(
      "The sorter picks the level, the operator writes it into the class list. Sorting without acting leaves the secretary to copy it all by hand.",
      "Le trieur choisit le niveau, l'outilleur l'inscrit dans la liste. Trier sans agir laisse la secrétaire tout recopier à la main.",
    ),
  },
  {
    id: 'b-note-fiscale',
    client: { name: 'Paul', trade: B('Accountant', "Comptable") },
    title: B('Monthly tax news for clients', "La note fiscale du mois"),
    ask: B(
      "My clients keep asking what changed in tax rules. I'd like the month's changes spotted, then a one-page note they can understand.",
      "Mes clients me demandent sans cesse ce qui a changé côté fiscal. J'aimerais qu'on repère les nouveautés du mois, puis une note d'une page qu'ils comprennent.",
    ),
    needs: { watch: 2, writing: 1 },
    tokens: 12000, reward: 210, work: 32, tier: 2,
    tip: B(
      "The watcher finds what changed this month, the writer makes it plain. A writer alone would rewrite last year's rules in a nice tone.",
      "La vigie trouve ce qui a changé ce mois-ci, le rédacteur le rend clair. Le rédacteur seul réécrirait les règles de l'an dernier, avec un joli ton.",
    ),
  },
  {
    id: 'b-galerie-photo',
    client: { name: 'Alexandre', trade: B('Freelance photographer', "Photographe indépendant") },
    title: B('Move the gallery to the new site', "Migrer la galerie vers le nouveau site"),
    ask: B(
      "I'm moving 2,000 photos to my new site. I need a script that renames them properly and sends them through the site's upload API.",
      "Je déménage 2 000 photos vers mon nouveau site. Il me faut un script qui les renomme proprement et les envoie par l'API d'upload du site.",
    ),
    needs: { coding: 2, tools: 1 },
    tokens: 14000, reward: 250, work: 34, tier: 2,
    tip: B(
      "The engineer writes the script, the operator calls the API with limits. Without a test on ten photos first, you upload 2,000 mistakes.",
      "Le codeur écrit le script, l'outilleur appelle l'API avec des limites. Sans un essai sur dix photos d'abord, tu envoies 2 000 erreurs.",
    ),
  },
  {
    id: 'b-pubs-soldes',
    client: { name: 'Sandrine', trade: B('Shoe shop owner', "Gérante de magasin de chaussures") },
    title: B('Which sale ads to keep', "Quelles pubs de soldes garder"),
    ask: B(
      "I ran six ads for the sales. I have the results but I can't read them. Tell me which ones to keep for next time and why.",
      "J'ai lancé six pubs pour les soldes. J'ai les résultats mais je ne sais pas les lire. Dites-moi lesquelles garder pour la prochaine fois, et pourquoi.",
    ),
    needs: { growth: 2, analysis: 1 },
    tokens: 11000, reward: 200, work: 30, tier: 2,
    tip: B(
      "The campaigner knows how to read a test, the analyst checks the numbers are comparable. Six ads with different budgets can't be ranked as is.",
      "L'expérimentateur sait lire un test, l'analyste vérifie que les chiffres se comparent. Six pubs aux budgets différents ne se classent pas telles quelles.",
    ),
  },
  {
    id: 'b-biere-export',
    client: { name: 'Thibault', trade: B('Craft brewer', "Brasseur artisanal") },
    title: B('Selling our beer in Belgium', "Vendre notre bière en Belgique"),
    ask: B(
      "A Belgian bar wants our beer. What do we need to know before selling there, rules, taxes, labels, and in what order do we do it?",
      "Un bar belge veut notre bière. Qu'est-ce qu'il faut savoir avant de vendre là-bas, règles, taxes, étiquettes, et dans quel ordre on s'y prend ?",
    ),
    needs: { research: 2, planning: 1 },
    tokens: 13000, reward: 230, work: 34, tier: 2,
    tip: B(
      "The researcher finds the real rules with sources, the planner turns them into ordered steps. A plan built on unchecked rules sends the beer to customs.",
      "Le chercheur trouve les vraies règles, sources à l'appui, le planificateur en fait des étapes. Un plan bâti sur des règles non vérifiées envoie la bière en douane.",
    ),
  },
  {
    id: 'b-notes-frais',
    client: { name: 'Isabelle', trade: B('Travel agency manager', "Gérante d'agence de voyages") },
    title: B('200 expense receipts', "200 notes de frais"),
    ask: B(
      "The team sent me 200 receipt photos. I need them sorted by type, meals, transport, hotel, with the date and the amount of each.",
      "L'équipe m'a envoyé 200 photos de tickets. Il me faut les classer par type, repas, transport, hôtel, avec la date et le montant de chacun.",
    ),
    needs: { extraction: 2, triage: 1 },
    tokens: 12000, reward: 210, work: 30, tier: 2,
    tip: B(
      "The extractor reads date and amount, the sorter picks the category. Asking one specialist to do both halves makes both halves worse.",
      "L'extracteur lit la date et le montant, le trieur choisit la catégorie. Demander les deux moitiés à un seul spécialiste abîme les deux.",
    ),
  },

  /* --- niveau 3 · deux ou trois spécialistes, souvent un chef d'orchestre -- */
  {
    id: 'b-sav-meubles',
    client: { name: 'Christophe', trade: B('Furniture online shop owner', "Gérant d'e-commerce de meubles") },
    title: B('Rebuild the whole customer service', "Refaire tout le service client"),
    ask: B(
      "We get 150 messages a day: delivery dates, damaged items, returns. I want them sorted, the easy ones answered, and the delicate ones sent to us.",
      "On reçoit 150 messages par jour : dates de livraison, meubles abîmés, retours. Je veux qu'ils soient triés, les simples répondus, et les délicats envoyés à nous.",
    ),
    needs: { support: 3, triage: 2, orchestration: 1 },
    tokens: 22000, reward: 380, work: 42, tier: 3,
    tip: B(
      "The sorter routes, the responder answers, the conductor hands work between them. Without it, a damaged sofa slips into the easy pile.",
      "Le trieur aiguille, le répondant répond, le chef d'orchestre fait passer le travail de l'un à l'autre. Sans lui, un canapé abîmé glisse dans la pile facile.",
    ),
  },
  {
    id: 'b-lancement-app',
    client: { name: 'Margaux', trade: B('SaaS startup founder', "Fondatrice de startup SaaS") },
    title: B('Launch the app in three months', "Lancer l'appli en trois mois"),
    ask: B(
      "We launch our booking app for hairdressers in three months. I need the full plan, the campaigns to test, and someone keeping it all in step.",
      "On lance notre appli de réservation pour coiffeurs dans trois mois. Il me faut le plan complet, les campagnes à tester, et quelqu'un qui garde tout ça synchronisé.",
    ),
    needs: { planning: 3, growth: 2, orchestration: 2 },
    tokens: 24000, reward: 420, work: 45, tier: 3,
    tip: B(
      "A launch is a plan, tests and handovers. The conductor makes the test results reach the plan; without it, the plan ignores what the tests learned.",
      "Un lancement, c'est un plan, des tests et des passages de relais. Le chef d'orchestre fait remonter les tests dans le plan ; sans lui, le plan ignore ce qu'ils ont appris.",
    ),
  },
  {
    id: 'b-releves-anomalies',
    client: { name: 'Gilles', trade: B('Accounting firm partner', "Associé de cabinet comptable") },
    title: B('Anomalies in 500 bank statements', "Les anomalies de 500 relevés"),
    ask: B(
      "For an audit I have 500 bank statements to go through. I need every line in a table, then the odd ones flagged: duplicates, round sums, weekends.",
      "Pour un audit, j'ai 500 relevés bancaires à passer au crible. Il me faut chaque ligne dans un tableau, puis les lignes bizarres signalées : doublons, sommes rondes, week-ends.",
    ),
    needs: { extraction: 3, analysis: 2 },
    tokens: 20000, reward: 340, work: 40, tier: 3,
    tip: B(
      "At this volume the extractor must be expert: one misread line and the analyst flags a false fraud. Clean extraction first, judgement second.",
      "À ce volume, l'extracteur doit être expert : une ligne mal lue, et l'analyste signale une fausse fraude. Extraction propre d'abord, jugement ensuite.",
    ),
  },
  {
    id: 'b-veille-fonderie',
    client: { name: 'Fabienne', trade: B('Foundry manager', "Dirigeante de fonderie") },
    title: B('Metal prices and new rules', "Prix des métaux et nouvelles normes"),
    ask: B(
      "Metal prices and environmental rules move every week and they hit our quotes. I want a weekly brief: what changed, the source, and what it means for us.",
      "Les prix des métaux et les normes environnementales bougent chaque semaine et touchent nos devis. Je veux un point hebdo : ce qui a changé, la source, et ce que ça change pour nous.",
    ),
    needs: { watch: 3, research: 2, writing: 1 },
    tokens: 20000, reward: 340, work: 40, tier: 3,
    tip: B(
      "The watcher catches the change, the researcher sources it, the writer makes it a one-page read. Drop any one and the brief is late, unsourced or unread.",
      "La vigie capte le changement, le chercheur le source, le rédacteur en fait une page lisible. Retire-en un, et le point arrive en retard, sans source ou sans lecteur.",
    ),
  },
  {
    id: 'b-devis-couvreur',
    client: { name: 'Benoît', trade: B('Roofer', "Couvreur") },
    title: B('A quote tool linked to suppliers', "Un outil de devis relié aux fournisseurs"),
    ask: B(
      "I lose my evenings on quotes. I'd like a small tool: I enter the roof size, it pulls the supplier prices and gives me a quote I can check.",
      "Je perds mes soirées sur les devis. J'aimerais un petit outil : je tape la surface du toit, il va chercher les prix fournisseurs et me sort un devis que je vérifie.",
    ),
    needs: { coding: 3, tools: 2 },
    tokens: 20000, reward: 340, work: 40, tier: 3,
    tip: B(
      "The engineer builds the calculation, the operator fetches live prices. Without the operator, the tool quotes last year's prices with total confidence.",
      "Le codeur construit le calcul, l'outilleur va chercher les prix du jour. Sans l'outilleur, l'outil chiffre avec les prix de l'an dernier, en toute confiance.",
    ),
  },
  {
    id: 'b-bilans-clubs',
    client: { name: 'Nadia', trade: B('Regional sports federation officer', "Chargée de mission de ligue sportive") },
    title: B('One report from 40 club reports', "Un bilan à partir de 40 bilans"),
    ask: B(
      "Our 40 clubs each sent their annual report, every one in its own format. I need the key figures pulled out and a comparison that holds up.",
      "Nos 40 clubs ont chacun envoyé leur bilan annuel, chacun dans son format. Il me faut les chiffres clés extraits et une comparaison qui tienne la route.",
    ),
    needs: { extraction: 2, analysis: 2, orchestration: 2 },
    tokens: 22000, reward: 380, work: 42, tier: 3,
    tip: B(
      "Forty documents, two stages: the conductor runs the extractor club by club and finds the one that broke before the analyst compares.",
      "Quarante documents, deux étapes : le chef d'orchestre fait passer l'extracteur club par club et repère celui qui a cassé avant que l'analyste compare.",
    ),
  },
  {
    id: 'b-veto-rdv',
    client: { name: 'Arnaud', trade: B('Veterinarian', "Vétérinaire") },
    title: B('Bookings and reminders by message', "Rendez-vous et rappels par message"),
    ask: B(
      "Pet owners message us to book, move or cancel. I want that handled in the diary, with a reminder the day before, and emergencies sent straight to us.",
      "Les propriétaires nous écrivent pour prendre, déplacer ou annuler un rendez-vous. Je veux que ça se fasse dans l'agenda, avec un rappel la veille, et les urgences envoyées direct à nous.",
    ),
    needs: { tools: 3, support: 2, orchestration: 1 },
    tokens: 21000, reward: 360, work: 42, tier: 3,
    tip: B(
      "The operator moves real appointments, so it must be expert; the responder talks to owners; the conductor makes sure an emergency never waits in the diary.",
      "L'outilleur déplace de vrais rendez-vous, il doit être expert ; le répondant parle aux propriétaires ; le chef d'orchestre veille à ce qu'une urgence n'attende jamais.",
    ),
  },
  {
    id: 'b-cinquieme-boutique',
    client: { name: 'Sylvie', trade: B('Owner of four bakeries', "Gérante de quatre boulangeries") },
    title: B('Should we open a fifth shop', "Ouvrir une cinquième boutique ?"),
    ask: B(
      "I have four bakeries and a spot for a fifth. Looking at the figures of the four, is it a good idea, and if so, how do we open it step by step?",
      "J'ai quatre boulangeries et un local pour une cinquième. Au vu des chiffres des quatre, est-ce une bonne idée, et si oui, comment on l'ouvre étape par étape ?",
    ),
    needs: { analysis: 3, planning: 2, orchestration: 1 },
    tokens: 23000, reward: 400, work: 44, tier: 3,
    tip: B(
      "The expert analyst gives a clear yes or no, the planner builds the steps only if it's yes. The conductor keeps the plan from starting before the verdict.",
      "L'analyste expert tranche oui ou non, le planificateur ne construit les étapes que si c'est oui. Le chef d'orchestre empêche le plan de partir avant le verdict.",
    ),
  },
  {
    id: 'b-note-jurisprudence',
    client: { name: 'Laurent', trade: B('Employment lawyer', "Avocat en droit du travail") },
    title: B('A sourced case-law memo', "Une note de jurisprudence sourcée"),
    ask: B(
      "I plead next week on a dismissal case. I need a memo on recent case law, every decision quoted with its reference, written so the judge can follow.",
      "Je plaide la semaine prochaine sur un licenciement. Il me faut une note sur la jurisprudence récente, chaque décision citée avec sa référence, écrite pour que le juge suive.",
    ),
    needs: { research: 3, writing: 2 },
    tokens: 18000, reward: 300, work: 38, tier: 3,
    tip: B(
      "An expert researcher who quotes every decision, a writer who makes it clear. One invented reference and the memo hurts the case it was meant to help.",
      "Un chercheur expert qui cite chaque décision, un rédacteur qui rend le tout clair. Une seule référence inventée, et la note dessert le dossier qu'elle devait aider.",
    ),
  },
  {
    id: 'b-pubs-the',
    client: { name: 'Justine', trade: B('Tea online shop owner', "Gérante d'e-commerce de thé") },
    title: B('Forty ad variants and a verdict', "Quarante variantes de pub et un verdict"),
    ask: B(
      "Christmas is our big season. I want forty ad variants, images and texts, tested in small batches, and a clear answer on what to scale.",
      "Noël, c'est notre grosse saison. Je veux quarante variantes de pub, visuels et textes, testées par petits lots, et une réponse claire sur ce qu'il faut pousser.",
    ),
    needs: { growth: 3, analysis: 2, orchestration: 1 },
    tokens: 20000, reward: 350, work: 40, tier: 3,
    tip: B(
      "Forty variants need an expert campaigner, an analyst to check the numbers are fair, and a conductor to run the batches in order.",
      "Quarante variantes demandent un expérimentateur expert, un analyste qui vérifie que les chiffres se comparent, et un chef d'orchestre qui enchaîne les lots.",
    ),
  },
  {
    id: 'b-exercices-code',
    client: { name: 'Samir', trade: B('Coding bootcamp founder', "Fondateur d'école de code") },
    title: B('Grade and group 120 exercises', "Corriger et classer 120 exercices"),
    ask: B(
      "I have 120 student exercises to review. I'd like each one checked, the errors grouped by type, so I know which lesson to teach again.",
      "J'ai 120 exercices d'élèves à relire. J'aimerais que chacun soit vérifié, et les erreurs regroupées par type, pour savoir quelle leçon refaire.",
    ),
    needs: { coding: 2, triage: 2, orchestration: 2 },
    tokens: 19000, reward: 320, work: 38, tier: 3,
    tip: B(
      "The engineer finds real bugs, the sorter groups them by type, the conductor runs 120 files through both. Without it, half the files get lost on the way.",
      "Le codeur trouve les vrais bugs, le trieur les regroupe par type, le chef d'orchestre fait passer 120 fichiers par les deux. Sans lui, la moitié se perd en route.",
    ),
  },
  {
    id: 'b-mandats-annonces',
    client: { name: 'Delphine', trade: B('Estate agency owner', "Directrice d'agence immobilière") },
    title: B('From signed mandate to listing', "Du mandat signé à l'annonce"),
    ask: B(
      "Each week we sign ten new mandates. I want the key details read from each one, a listing written in our style, and the whole chain running without me.",
      "Chaque semaine, on signe dix nouveaux mandats. Je veux les infos clés lues dans chacun, une annonce écrite dans notre style, et toute la chaîne qui tourne sans moi.",
    ),
    needs: { orchestration: 3, extraction: 2, writing: 2 },
    tokens: 24000, reward: 420, work: 45, tier: 3,
    tip: B(
      "A chain that runs alone needs an expert conductor: it passes each mandate from extractor to writer and stops a listing with a wrong surface area.",
      "Une chaîne qui tourne seule demande un chef d'orchestre expert : il passe chaque mandat de l'extracteur au rédacteur et bloque une annonce à la mauvaise surface.",
    ),
  },
]
