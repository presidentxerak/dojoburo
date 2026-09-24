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
      "La voix d'une marque relève du rédacteur : fournissez-lui le ton et quelques interdits, afin que les posts ressemblent à la boulangerie et non à un assistant générique.",
    ),
  },
  {
    id: 'b-avis-resto',
    client: { name: 'Karim', trade: B('Restaurant owner', "Restaurateur") },
    title: B('Sort 80 reviews', "Trier 80 avis"),
    ask: B(
      "I have 80 reviews I never read properly. Can you sort them into praise, complaints and questions so I know where to start?",
      "J'ai 80 avis que je n'ai jamais vraiment lus. Pourriez-vous les classer en compliments, plaintes et questions, pour que je sache par où commencer ?",
    ),
    needs: { triage: 1 },
    tokens: 6000, reward: 110, work: 22, tier: 1,
    tip: B(
      "Putting things in boxes is the sorter's job. Write each category as a test, and add a \"none of these\" so it stops forcing a fit.",
      "Classer relève du trieur : formulez chaque catégorie comme un critère vérifiable et prévoyez une case « aucune », afin qu'il cesse de forcer le classement.",
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
      "Extraire des champs d'un document relève de l'extracteur : définissez d'abord le schéma, et exigez une case vide plutôt qu'une valeur devinée.",
    ),
  },
  {
    id: 'b-fusion-fichiers',
    client: { name: 'Hugo', trade: B('Online shop owner', "Gérant d'e-commerce") },
    title: B('Merge two customer files', "Fusionner deux fichiers clients"),
    ask: B(
      "I have two customer files, one from the shop and one from the website, with duplicates everywhere. I need a small script that merges them.",
      "J'ai deux fichiers clients, l'un de la boutique, l'autre du site, avec des doublons partout. Il me faudrait un petit script qui les fusionne.",
    ),
    needs: { coding: 1 },
    tokens: 6000, reward: 110, work: 22, tier: 1,
    tip: B(
      "A script is the engineer's job. Ask it to show the duplicates it merged, so you can check the rule before running it on everything.",
      "Un script relève du codeur : demandez-lui d'afficher les doublons fusionnés, afin de vérifier la règle avant de l'appliquer à l'ensemble des fichiers.",
    ),
  },
  {
    id: 'b-pharma-faq',
    client: { name: 'Sophie', trade: B('Pharmacist', "Pharmacienne") },
    title: B('Answer the opening-hours calls', "Répondre aux questions d'horaires"),
    ask: B(
      "Half our messages ask about opening hours and night duty. I want something that answers those politely and passes anything medical to us.",
      "La moitié de nos messages portent sur les horaires et les gardes. Je voudrais un outil qui y réponde poliment et qui nous transmette tout ce qui relève du médical.",
    ),
    needs: { support: 1 },
    tokens: 5000, reward: 95, work: 20, tier: 1,
    tip: B(
      "Answering people is the responder's job, and its key rule here is the handover: anything medical goes to a human, never a guess.",
      "Répondre au public relève du répondant, dont la règle essentielle est ici le transfert : toute question médicale revient à un humain, jamais à une supposition.",
    ),
  },
  {
    id: 'b-prix-caviste',
    client: { name: 'Thomas', trade: B('Wine merchant', "Caviste") },
    title: B('Watch three rivals\' prices', "Surveiller les prix de trois rivaux"),
    ask: B(
      "Three shops in town sell the same wines as me. Every Monday I'd like to know which prices moved, and only that.",
      "Trois boutiques en ville vendent les mêmes vins que moi. Chaque lundi, j'aimerais savoir quels prix ont bougé, et rien d'autre.",
    ),
    needs: { watch: 1 },
    tokens: 5000, reward: 100, work: 20, tier: 1,
    tip: B(
      "Noticing change on a rhythm is the watcher's job. It reports what differs from last week, not an opinion on the market.",
      "Repérer les changements à intervalle régulier relève de la vigie : elle signale ce qui diffère de la semaine précédente, sans émettre d'avis sur le marché.",
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
      "Décomposer un objectif en étapes relève du planificateur : chaque étape exige un responsable et un résultat observable, faute de quoi le plan reste un souhait.",
    ),
  },
  {
    id: 'b-coach-agenda',
    client: { name: 'Mehdi', trade: B('Personal trainer', "Coach sportif") },
    title: B('Bookings straight into the calendar', "Les réservations dans l'agenda"),
    ask: B(
      "People book sessions through my website form, then I copy everything into my calendar by hand. Can the booking land there by itself?",
      "Les clients réservent via le formulaire de mon site, puis je recopie tout à la main dans mon agenda. La réservation pourrait-elle s'y inscrire toute seule ?",
    ),
    needs: { tools: 1 },
    tokens: 7000, reward: 120, work: 24, tier: 1,
    tip: B(
      "Acting in a real system is the operator's job. Limit what it may touch, here one calendar, and keep a step where you say yes.",
      "Agir dans un système réel relève de l'outilleur : limitez son périmètre, ici un seul agenda, et conservez une étape où vous donnez votre accord.",
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
      "Produire des variantes et un verdict relève de l'expérimentateur : définissez le critère de réussite avant l'envoi, sinon tout résultat passera pour un succès.",
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
      "Transformer des chiffres en décision relève de l'analyste : il vérifie d'abord les calculs, puis recommande, en précisant ce qui pourrait invalider sa conclusion.",
    ),
  },
  {
    id: 'b-sacs-epicerie',
    client: { name: 'Élodie', trade: B('Organic grocer', "Gérante d'épicerie bio") },
    title: B('What the rules say on bags', "Ce que dit la loi sur les sacs"),
    ask: B(
      "A supplier says my paper bags will soon be banned. Can you find what the official texts actually say, with the links?",
      "Un fournisseur m'affirme que mes sacs en papier seront bientôt interdits. Pourriez-vous trouver ce que disent réellement les textes officiels, avec les liens ?",
    ),
    needs: { research: 1 },
    tokens: 6000, reward: 110, work: 22, tier: 1,
    tip: B(
      "A sourced answer is the researcher's job. Every claim must quote its text, and what the sources don't cover must be said out loud.",
      "Une réponse sourcée relève du chercheur : chaque affirmation doit citer son texte, et ce que les sources ne couvrent pas doit être signalé explicitement.",
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
      "Trois files claires constituent un travail de trieur, modeste et peu coûteux : inutile de consacrer des tokens au rédacteur lorsque rien n'est à rédiger.",
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
      "Relever les mêmes champs dans des documents hétérogènes relève de l'extracteur : sans mention du permis, la case reste vide, car un « oui » deviné peut coûter une mission.",
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
      "Vingt textes d'une même voix relèvent du rédacteur : les interdits du client forment le meilleur brief, à formuler une seule fois pour l'appliquer vingt fois.",
    ),
  },
  {
    id: 'b-avis-gite',
    client: { name: 'Nicolas', trade: B('Guesthouse owner', "Propriétaire de gîte") },
    title: B('Reply to the guest reviews', "Répondre aux avis des voyageurs"),
    ask: B(
      "I have a dozen reviews to answer, two of them angry. I want replies that sound like me and never promise a refund.",
      "J'ai une douzaine d'avis auxquels répondre, dont deux mécontents. Je veux des réponses qui me ressemblent et qui ne promettent jamais de remboursement.",
    ),
    needs: { support: 1, writing: 1 },
    tokens: 9000, reward: 150, work: 28, tier: 1,
    tip: B(
      "Two jobs here: the responder knows what must never be promised, the writer knows the owner's voice. One alone gets half of it right.",
      "Deux compétences sont requises : le répondant sait ce qu'il ne faut jamais promettre, le rédacteur connaît la voix du gérant, et un seul n'en réussit que la moitié.",
    ),
  },
  {
    id: 'b-formulaire-danse',
    client: { name: 'Sarah', trade: B('Dance school owner', "Directrice d'école de danse") },
    title: B('The sign-up form is broken', "Le formulaire d'inscription en panne"),
    ask: B(
      "Since last week the sign-up form on our site shows an error when parents click send. Registrations open Monday.",
      "Depuis la semaine dernière, le formulaire d'inscription de notre site affiche une erreur quand les parents cliquent sur envoyer. Les inscriptions ouvrent lundi.",
    ),
    needs: { coding: 1 },
    tokens: 8000, reward: 140, work: 26, tier: 1,
    tip: B(
      "A bug is the engineer's job. Ask for the defect it can show, with the input that breaks it, not a list of things it would rewrite.",
      "Un bug relève du codeur : demandez-lui le défaut qu'il peut démontrer, avec l'entrée qui le provoque, plutôt qu'une liste de ce qu'il aimerait réécrire.",
    ),
  },
  {
    id: 'b-subventions-club',
    client: { name: 'Olivier', trade: B('Sports club treasurer', "Trésorier d'association sportive") },
    title: B('Grants the club could get', "Les subventions possibles du club"),
    ask: B(
      "Our football club needs new goals. Which public grants could we apply for, and where is it written? I don't want rumours.",
      "Notre club de foot a besoin de nouvelles cages. À quelles aides publiques pourrions-nous prétendre, et où est-ce écrit ? Je ne veux pas de rumeurs.",
    ),
    needs: { research: 1 },
    tokens: 7000, reward: 125, work: 24, tier: 1,
    tip: B(
      "\"Where is it written\" calls for the researcher. Without sources you would hand the club a list of grants that may not exist.",
      "La question « où est-ce écrit ? » appelle le chercheur : sans sources, vous remettriez au club une liste d'aides qui n'existent peut-être pas.",
    ),
  },
  {
    id: 'b-appels-offres',
    client: { name: 'Claire', trade: B('Architect', "Architecte") },
    title: B('Tenders worth answering', "Les appels d'offres pertinents"),
    ask: B(
      "New public tenders come out every week. I want to see only the ones near here, for buildings under a certain size, every Monday.",
      "Des appels d'offres publics paraissent chaque semaine. Je veux voir uniquement ceux de la région, pour des bâtiments sous une certaine taille, chaque lundi.",
    ),
    needs: { watch: 1, triage: 1 },
    tokens: 10000, reward: 160, work: 30, tier: 1,
    tip: B(
      "The watcher spots what's new each week, the sorter keeps only what fits. Without the sorter, Claire gets fifty tenders and reads none.",
      "La vigie repère les nouveautés de la semaine, le trieur retient ce qui correspond : sans le trieur, Claire reçoit cinquante appels d'offres et n'en lit aucun.",
    ),
  },

  /* --- niveau 2 · deux spécialistes --------------------------------------- */
  {
    id: 'b-avis-hotel',
    client: { name: 'Aurélie', trade: B('Hotel manager', "Directrice d'hôtel") },
    title: B('What 300 reviews are telling us', "Ce que disent 300 avis"),
    ask: B(
      "We have 300 reviews from the past year. I want to know what really bothers guests, in order, so I know what to fix first.",
      "Nous avons 300 avis sur l'année écoulée. Je veux savoir ce qui dérange vraiment les clients, par ordre d'importance, pour savoir quoi corriger en premier.",
    ),
    needs: { triage: 1, analysis: 2 },
    tokens: 12000, reward: 210, work: 32, tier: 2,
    tip: B(
      "Sort first, analyse second. Without the sorter, the analyst counts complaints mixed with praise and its ranking means nothing.",
      "Triez d'abord, analysez ensuite : sans le trieur, l'analyste compte des plaintes mêlées aux compliments, et son classement perd toute signification.",
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
      "L'outilleur envoie au bon moment, le rédacteur rend la relance humaine : l'outil seul produit un courriel mécanique, le rédacteur seul n'envoie rien.",
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
      "La vigie détecte le changement, le chercheur l'étaye par une source : une veille dépourvue de liens n'est qu'une rumeur que personne ne peut vérifier.",
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
      "Le planificateur ordonne le lancement, l'expérimentateur teste les offres : un plan sans test lance une supposition, des tests sans plan ne lancent rien.",
    ),
  },
  {
    id: 'b-chatbot-sav',
    client: { name: 'Laura', trade: B('Cosmetics online shop owner', "Gérante d'e-shop de cosmétiques") },
    title: B('A support chatbot that checks orders', "Un chatbot SAV qui voit les commandes"),
    ask: B(
      "Most messages are \"where is my parcel?\". I want a chatbot that looks up the tracking itself and answers, and sends the rest to me.",
      "La plupart des messages demandent « où est mon colis ? ». Je voudrais un chatbot qui consulte lui-même le suivi, qui réponde, et qui me transmette le reste.",
    ),
    needs: { support: 2, tools: 1 },
    tokens: 14000, reward: 240, work: 34, tier: 2,
    tip: B(
      "The responder talks to customers, the operator reads the tracking. Without the tool, the bot can only guess where the parcel is.",
      "Le répondant dialogue avec les clients, l'outilleur consulte le suivi : sans cet outil, le bot ne peut que deviner où se trouve le colis.",
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
      "L'extracteur convertit les scans en lignes, l'analyste convertit les lignes en verdict : sans extraction, l'analyste raisonne sur des chiffres inventés.",
    ),
  },
  {
    id: 'b-clauses-baux',
    client: { name: 'Valérie', trade: B('Lawyer', "Avocate") },
    title: B('Clauses from 25 leases', "Les clauses de 25 baux"),
    ask: B(
      "I have 25 commercial leases. I need the rent review clause of each one pulled out, and to know which ones don't match the current law.",
      "J'ai 25 baux commerciaux. Il me faut la clause de révision du loyer de chacun, et savoir lesquels ne sont plus conformes à la loi actuelle.",
    ),
    needs: { extraction: 2, research: 1 },
    tokens: 14000, reward: 250, work: 34, tier: 2,
    tip: B(
      "The extractor pulls the exact clause, the researcher checks it against the source text. A summarised clause is worthless to a lawyer.",
      "L'extracteur relève la clause exacte, le chercheur la confronte au texte de loi : pour une avocate, une clause résumée n'a aucune valeur.",
    ),
  },
  {
    id: 'b-messages-velo',
    client: { name: 'Romain', trade: B('Bike repair shop owner', "Réparateur de vélos") },
    title: B('Sort and answer the messages', "Trier et répondre aux messages"),
    ask: B(
      "I get repair requests, price questions and complaints all mixed up. I'd like each one routed, and the simple ones answered.",
      "Je reçois des demandes de réparation, des questions de prix et des réclamations, tout mélangé. J'aimerais que chaque message soit orienté, et qu'on réponde aux plus simples.",
    ),
    needs: { triage: 1, support: 1 },
    tokens: 9000, reward: 170, work: 28, tier: 2,
    tip: B(
      "The sorter decides who handles what, the responder answers the simple ones. Skip the sorter and a complaint gets a price list back.",
      "Le trieur répartit les demandes, le répondant traite les cas simples : sans le trieur, une réclamation risque de recevoir une grille de tarifs en guise de réponse.",
    ),
  },
  {
    id: 'b-annonces-immo',
    client: { name: 'Céline', trade: B('Estate agent', "Agente immobilière") },
    title: B('Three versions of a listing', "Trois versions d'une annonce"),
    ask: B(
      "This flat has been online for two months with no visits. Write me three different listings and tell me which one pulls the most calls.",
      "Cet appartement est en ligne depuis deux mois sans aucune visite. Rédigez-moi trois annonces différentes et dites-moi laquelle suscite le plus d'appels.",
    ),
    needs: { growth: 2, writing: 1 },
    tokens: 10000, reward: 180, work: 28, tier: 2,
    tip: B(
      "The writer makes three real options, the campaigner reads which one won. Three near-identical texts would teach nothing.",
      "Le rédacteur produit trois options réellement distinctes, l'expérimentateur identifie la gagnante : trois textes presque identiques n'apprendraient rien.",
    ),
  },
  {
    id: 'b-ruptures-stock',
    client: { name: 'Hélène', trade: B('Pharmacist', "Pharmacienne") },
    title: B('Spot stock-outs in advance', "Anticiper les ruptures de stock"),
    ask: B(
      "Our software exports sales every night. I'd like a script that reads it and tells me which products will run out next week.",
      "Notre logiciel exporte les ventes chaque nuit. J'aimerais un script qui lise cet export et m'indique quels produits vont manquer la semaine prochaine.",
    ),
    needs: { coding: 2, analysis: 1 },
    tokens: 12000, reward: 220, work: 32, tier: 2,
    tip: B(
      "The engineer writes the script, the analyst checks the forecast holds up. Code that runs is not the same as a forecast that's right.",
      "Le codeur écrit le script, l'analyste vérifie la solidité de la prévision : un code qui s'exécute ne garantit pas une prévision juste.",
    ),
  },
  {
    id: 'b-planning-salle',
    client: { name: 'David', trade: B('Restaurant owner', "Restaurateur") },
    title: B('Staff rota in the shared calendar', "Le planning d'équipe dans l'agenda"),
    ask: B(
      "Every week I juggle eight people's availability on paper. I want a fair rota for the month, and everyone gets it in their calendar.",
      "Chaque semaine, je jongle sur papier avec les disponibilités de huit personnes. Je veux un planning équitable pour le mois, que chacun reçoive dans son agenda.",
    ),
    needs: { planning: 2, tools: 1 },
    tokens: 11000, reward: 200, work: 30, tier: 2,
    tip: B(
      "The planner builds the rota, the operator puts it in the calendars. A perfect plan that stays in a document changes nothing for the team.",
      "Le planificateur construit le planning, l'outilleur l'inscrit dans les agendas : un plan parfait qui reste dans un document ne change rien pour l'équipe.",
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
      "L'analyste vérifie ce que montrent réellement les chiffres, le rédacteur les rend lisibles : une belle plume au service de chiffres faux fait perdre un financeur.",
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
      "Le trieur détermine le niveau, l'outilleur l'inscrit dans la liste : trier sans agir laisse à la secrétaire le soin de tout recopier à la main.",
    ),
  },
  {
    id: 'b-note-fiscale',
    client: { name: 'Paul', trade: B('Accountant', "Comptable") },
    title: B('Monthly tax news for clients', "La note fiscale du mois"),
    ask: B(
      "My clients keep asking what changed in tax rules. I'd like the month's changes spotted, then a one-page note they can understand.",
      "Mes clients me demandent sans cesse ce qui a changé en matière fiscale. J'aimerais qu'on repère les nouveautés du mois, puis qu'on en tire une note d'une page qu'ils comprennent.",
    ),
    needs: { watch: 2, writing: 1 },
    tokens: 12000, reward: 210, work: 32, tier: 2,
    tip: B(
      "The watcher finds what changed this month, the writer makes it plain. A writer alone would rewrite last year's rules in a nice tone.",
      "La vigie identifie les changements du mois, le rédacteur les rend clairs : seul, le rédacteur reformulerait avec élégance les règles de l'an dernier.",
    ),
  },
  {
    id: 'b-galerie-photo',
    client: { name: 'Alexandre', trade: B('Freelance photographer', "Photographe indépendant") },
    title: B('Move the gallery to the new site', "Migrer la galerie vers le nouveau site"),
    ask: B(
      "I'm moving 2,000 photos to my new site. I need a script that renames them properly and sends them through the site's upload API.",
      "Je transfère 2 000 photos vers mon nouveau site. Il me faut un script qui les renomme correctement et les envoie via l'API d'upload du site.",
    ),
    needs: { coding: 2, tools: 1 },
    tokens: 14000, reward: 250, work: 34, tier: 2,
    tip: B(
      "The engineer writes the script, the operator calls the API with limits. Without a test on ten photos first, you upload 2,000 mistakes.",
      "Le codeur écrit le script, l'outilleur appelle l'API dans des limites fixées : sans un essai préalable sur dix photos, vous envoyez 2 000 erreurs.",
    ),
  },
  {
    id: 'b-pubs-soldes',
    client: { name: 'Sandrine', trade: B('Shoe shop owner', "Gérante de magasin de chaussures") },
    title: B('Which sale ads to keep', "Les pubs de soldes à conserver"),
    ask: B(
      "I ran six ads for the sales. I have the results but I can't read them. Tell me which ones to keep for next time and why.",
      "J'ai lancé six pubs pour les soldes. J'ai les résultats mais je ne sais pas les lire. Dites-moi lesquelles garder pour la prochaine fois, et pourquoi.",
    ),
    needs: { growth: 2, analysis: 1 },
    tokens: 11000, reward: 200, work: 30, tier: 2,
    tip: B(
      "The campaigner knows how to read a test, the analyst checks the numbers are comparable. Six ads with different budgets can't be ranked as is.",
      "L'expérimentateur sait lire un test, l'analyste vérifie que les chiffres sont comparables : six pubs aux budgets différents ne peuvent être classées en l'état.",
    ),
  },
  {
    id: 'b-biere-export',
    client: { name: 'Thibault', trade: B('Craft brewer', "Brasseur artisanal") },
    title: B('Selling our beer in Belgium', "Vendre notre bière en Belgique"),
    ask: B(
      "A Belgian bar wants our beer. What do we need to know before selling there, rules, taxes, labels, and in what order do we do it?",
      "Un bar belge veut notre bière. Que faut-il savoir avant d'y vendre (règles, taxes, étiquettes), et dans quel ordre devons-nous procéder ?",
    ),
    needs: { research: 2, planning: 1 },
    tokens: 13000, reward: 230, work: 34, tier: 2,
    tip: B(
      "The researcher finds the real rules with sources, the planner turns them into ordered steps. A plan built on unchecked rules sends the beer to customs.",
      "Le chercheur établit les règles, sources à l'appui, et le planificateur les ordonne en étapes : un plan fondé sur des règles non vérifiées bloque la bière en douane.",
    ),
  },
  {
    id: 'b-notes-frais',
    client: { name: 'Isabelle', trade: B('Travel agency manager', "Gérante d'agence de voyages") },
    title: B('200 expense receipts', "200 notes de frais"),
    ask: B(
      "The team sent me 200 receipt photos. I need them sorted by type, meals, transport, hotel, with the date and the amount of each.",
      "L'équipe m'a envoyé 200 photos de tickets. Il faudrait les classer par type (repas, transport, hôtel), avec la date et le montant de chacun.",
    ),
    needs: { extraction: 2, triage: 1 },
    tokens: 12000, reward: 210, work: 30, tier: 2,
    tip: B(
      "The extractor reads date and amount, the sorter picks the category. Asking one specialist to do both halves makes both halves worse.",
      "L'extracteur lit la date et le montant, le trieur attribue la catégorie : confier ces deux tâches à un seul spécialiste dégrade chacune d'elles.",
    ),
  },

  /* --- niveau 3 · deux ou trois spécialistes, souvent un chef d'orchestre -- */
  {
    id: 'b-sav-meubles',
    client: { name: 'Christophe', trade: B('Furniture online shop owner', "Gérant d'e-commerce de meubles") },
    title: B('Rebuild the whole customer service', "Refaire tout le service client"),
    ask: B(
      "We get 150 messages a day: delivery dates, damaged items, returns. I want them sorted, the easy ones answered, and the delicate ones sent to us.",
      "Nous recevons 150 messages par jour : dates de livraison, meubles abîmés, retours. Je veux qu'ils soient triés, qu'on réponde aux plus simples et qu'on nous transmette les cas délicats.",
    ),
    needs: { support: 3, triage: 2, orchestration: 1 },
    tokens: 22000, reward: 380, work: 42, tier: 3,
    tip: B(
      "The sorter routes, the responder answers, the conductor hands work between them. Without it, a damaged sofa slips into the easy pile.",
      "Le trieur aiguille, le répondant répond, le chef d'orchestre assure la transmission entre eux : sans lui, un canapé abîmé se glisse parmi les cas simples.",
    ),
  },
  {
    id: 'b-lancement-app',
    client: { name: 'Margaux', trade: B('SaaS startup founder', "Fondatrice de startup SaaS") },
    title: B('Launch the app in three months', "Lancer l'appli en trois mois"),
    ask: B(
      "We launch our booking app for hairdressers in three months. I need the full plan, the campaigns to test, and someone keeping it all in step.",
      "Nous lançons notre appli de réservation pour coiffeurs dans trois mois. Il me faut le plan complet, les campagnes à tester, et quelqu'un qui coordonne l'ensemble.",
    ),
    needs: { planning: 3, growth: 2, orchestration: 2 },
    tokens: 24000, reward: 420, work: 45, tier: 3,
    tip: B(
      "A launch is a plan, tests and handovers. The conductor makes the test results reach the plan; without it, the plan ignores what the tests learned.",
      "Un lancement combine un plan, des tests et des passages de relais : le chef d'orchestre fait remonter les résultats des tests dans le plan, qui sinon les ignorerait.",
    ),
  },
  {
    id: 'b-releves-anomalies',
    client: { name: 'Gilles', trade: B('Accounting firm partner', "Associé de cabinet comptable") },
    title: B('Anomalies in 500 bank statements', "Les anomalies de 500 relevés"),
    ask: B(
      "For an audit I have 500 bank statements to go through. I need every line in a table, then the odd ones flagged: duplicates, round sums, weekends.",
      "Pour un audit, j'ai 500 relevés bancaires à passer au crible. Il me faut chaque ligne dans un tableau, puis les lignes suspectes signalées : doublons, sommes rondes, week-ends.",
    ),
    needs: { extraction: 3, analysis: 2 },
    tokens: 20000, reward: 340, work: 40, tier: 3,
    tip: B(
      "At this volume the extractor must be expert: one misread line and the analyst flags a false fraud. Clean extraction first, judgement second.",
      "À ce volume, l'extracteur doit être expert, car une seule ligne mal lue conduit l'analyste à signaler une fraude inexistante : l'extraction propre précède le jugement.",
    ),
  },
  {
    id: 'b-veille-fonderie',
    client: { name: 'Fabienne', trade: B('Foundry manager', "Dirigeante de fonderie") },
    title: B('Metal prices and new rules', "Prix des métaux et nouvelles normes"),
    ask: B(
      "Metal prices and environmental rules move every week and they hit our quotes. I want a weekly brief: what changed, the source, and what it means for us.",
      "Les prix des métaux et les normes environnementales évoluent chaque semaine et pèsent sur nos devis. Je veux un point hebdomadaire : ce qui a changé, la source, et ce que cela implique pour nous.",
    ),
    needs: { watch: 3, research: 2, writing: 1 },
    tokens: 20000, reward: 340, work: 40, tier: 3,
    tip: B(
      "The watcher catches the change, the researcher sources it, the writer makes it a one-page read. Drop any one and the brief is late, unsourced or unread.",
      "La vigie capte le changement, le chercheur le source, le rédacteur en tire une page lisible : sans l'un d'eux, le point arrive en retard, sans source ou sans lecteur.",
    ),
  },
  {
    id: 'b-devis-couvreur',
    client: { name: 'Benoît', trade: B('Roofer', "Couvreur") },
    title: B('A quote tool linked to suppliers', "Un outil de devis relié aux fournisseurs"),
    ask: B(
      "I lose my evenings on quotes. I'd like a small tool: I enter the roof size, it pulls the supplier prices and gives me a quote I can check.",
      "Je perds mes soirées sur les devis. J'aimerais un petit outil : je saisis la surface du toit, il récupère les prix fournisseurs et me propose un devis que je n'ai plus qu'à vérifier.",
    ),
    needs: { coding: 3, tools: 2 },
    tokens: 20000, reward: 340, work: 40, tier: 3,
    tip: B(
      "The engineer builds the calculation, the operator fetches live prices. Without the operator, the tool quotes last year's prices with total confidence.",
      "Le codeur construit le calcul, l'outilleur récupère les prix du jour : sans l'outilleur, l'outil chiffre avec assurance sur la base des prix de l'an dernier.",
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
      "Quarante documents, deux étapes : le chef d'orchestre soumet chaque bilan à l'extracteur et repère celui qui a échoué avant que l'analyste ne compare.",
    ),
  },
  {
    id: 'b-veto-rdv',
    client: { name: 'Arnaud', trade: B('Veterinarian', "Vétérinaire") },
    title: B('Bookings and reminders by message', "Rendez-vous et rappels par message"),
    ask: B(
      "Pet owners message us to book, move or cancel. I want that handled in the diary, with a reminder the day before, and emergencies sent straight to us.",
      "Les propriétaires nous écrivent pour prendre, déplacer ou annuler un rendez-vous. Je voudrais que tout cela soit géré dans l'agenda, avec un rappel la veille, et que les urgences nous parviennent directement.",
    ),
    needs: { tools: 3, support: 2, orchestration: 1 },
    tokens: 21000, reward: 360, work: 42, tier: 3,
    tip: B(
      "The operator moves real appointments, so it must be expert; the responder talks to owners; the conductor makes sure an emergency never waits in the diary.",
      "L'outilleur, qui déplace de vrais rendez-vous, doit être expert ; le répondant dialogue avec les propriétaires ; le chef d'orchestre veille à ce qu'aucune urgence n'attende.",
    ),
  },
  {
    id: 'b-cinquieme-boutique',
    client: { name: 'Sylvie', trade: B('Owner of four bakeries', "Gérante de quatre boulangeries") },
    title: B('Should we open a fifth shop', "Ouvrir une cinquième boutique ?"),
    ask: B(
      "I have four bakeries and a spot for a fifth. Looking at the figures of the four, is it a good idea, and if so, how do we open it step by step?",
      "J'ai quatre boulangeries et un local pour une cinquième. Au vu des chiffres des quatre premières, est-ce une bonne idée, et si oui, comment l'ouvrir étape par étape ?",
    ),
    needs: { analysis: 3, planning: 2, orchestration: 1 },
    tokens: 23000, reward: 400, work: 44, tier: 3,
    tip: B(
      "The expert analyst gives a clear yes or no, the planner builds the steps only if it's yes. The conductor keeps the plan from starting before the verdict.",
      "L'analyste expert tranche par oui ou par non, le planificateur n'intervient qu'en cas de oui, et le chef d'orchestre empêche le plan de démarrer avant le verdict.",
    ),
  },
  {
    id: 'b-note-jurisprudence',
    client: { name: 'Laurent', trade: B('Employment lawyer', "Avocat en droit du travail") },
    title: B('A sourced case-law memo', "Une note de jurisprudence sourcée"),
    ask: B(
      "I plead next week on a dismissal case. I need a memo on recent case law, every decision quoted with its reference, written so the judge can follow.",
      "Je plaide la semaine prochaine dans une affaire de licenciement. Il me faut une note sur la jurisprudence récente, chaque décision citée avec sa référence, rédigée pour que le juge suive le raisonnement.",
    ),
    needs: { research: 3, writing: 2 },
    tokens: 18000, reward: 300, work: 38, tier: 3,
    tip: B(
      "An expert researcher who quotes every decision, a writer who makes it clear. One invented reference and the memo hurts the case it was meant to help.",
      "Un chercheur expert cite chaque décision, un rédacteur rend l'ensemble clair : une seule référence inventée, et la note dessert le dossier qu'elle devait soutenir.",
    ),
  },
  {
    id: 'b-pubs-the',
    client: { name: 'Justine', trade: B('Tea online shop owner', "Gérante d'e-commerce de thé") },
    title: B('Forty ad variants and a verdict', "Quarante variantes de pub et un verdict"),
    ask: B(
      "Christmas is our big season. I want forty ad variants, images and texts, tested in small batches, and a clear answer on what to scale.",
      "Noël est notre plus grosse saison. Je veux quarante variantes de pub, visuels et textes, testées par petits lots, et une réponse claire sur celles qu'il faut amplifier.",
    ),
    needs: { growth: 3, analysis: 2, orchestration: 1 },
    tokens: 20000, reward: 350, work: 40, tier: 3,
    tip: B(
      "Forty variants need an expert campaigner, an analyst to check the numbers are fair, and a conductor to run the batches in order.",
      "Quarante variantes exigent un expérimentateur expert, un analyste qui vérifie la comparabilité des chiffres, et un chef d'orchestre qui enchaîne les lots.",
    ),
  },
  {
    id: 'b-exercices-code',
    client: { name: 'Samir', trade: B('Coding bootcamp founder', "Fondateur d'école de code") },
    title: B('Grade and group 120 exercises', "Corriger et classer 120 exercices"),
    ask: B(
      "I have 120 student exercises to review. I'd like each one checked, the errors grouped by type, so I know which lesson to teach again.",
      "J'ai 120 exercices d'élèves à relire. J'aimerais que chacun soit vérifié, et les erreurs regroupées par type, pour savoir quelle leçon reprendre.",
    ),
    needs: { coding: 2, triage: 2, orchestration: 2 },
    tokens: 19000, reward: 320, work: 38, tier: 3,
    tip: B(
      "The engineer finds real bugs, the sorter groups them by type, the conductor runs 120 files through both. Without it, half the files get lost on the way.",
      "Le codeur repère les vrais bugs, le trieur les regroupe par type, le chef d'orchestre fait passer les 120 fichiers par les deux : sans lui, la moitié se perd en route.",
    ),
  },
  {
    id: 'b-mandats-annonces',
    client: { name: 'Delphine', trade: B('Estate agency owner', "Directrice d'agence immobilière") },
    title: B('From signed mandate to listing', "Du mandat signé à l'annonce"),
    ask: B(
      "Each week we sign ten new mandates. I want the key details read from each one, a listing written in our style, and the whole chain running without me.",
      "Chaque semaine, nous signons dix nouveaux mandats. Je voudrais que les informations clés de chacun soient relevées, une annonce rédigée dans notre style, et toute la chaîne automatisée.",
    ),
    needs: { orchestration: 3, extraction: 2, writing: 2 },
    tokens: 24000, reward: 420, work: 45, tier: 3,
    tip: B(
      "A chain that runs alone needs an expert conductor: it passes each mandate from extractor to writer and stops a listing with a wrong surface area.",
      "Une chaîne autonome exige un chef d'orchestre expert : il transmet chaque mandat de l'extracteur au rédacteur et bloque toute annonce dont la surface est erronée.",
    ),
  },
]
