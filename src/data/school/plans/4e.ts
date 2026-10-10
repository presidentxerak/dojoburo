// LE PLAN DE LA 4e · demandé : « Il faut vraiment que ça soit lié au programme
// scolaire de l'école ». Programmes en vigueur en 4e pour l'année 2026-2027 :
// cycle 4 du BO n°31 du 30 juillet 2020 (français, mathématiques, histoire-
// géographie, physique-chimie, SVT, langues vivantes ; les nouveaux programmes de
// français et de mathématiques du BO n°10 du 5 mars 2026 n'arrivent en 4e qu'à la
// rentrée 2027), EMC du BO n°24 du 13 juin 2024, technologie du BO n°9 du
// 29 février 2024 (en 4e depuis la rentrée 2025).
import type { UnitPlan } from '../types'

export const PLANS: UnitPlan[] = [
  {
    id: 'francais-4e',
    subject: 'francais',
    grade: '4e',
    intro: 'Vous saurez lire et analyser des textes du XVIIe au XXIe siècle sur l\'amour, la société, le réel et l\'information, maîtriser la phrase complexe et les valeurs des temps, et rédiger des récits et des paragraphes argumentés.',
    reference: 'Programme de français du cycle 4, BO n°31 du 30 juillet 2020',
    chapters: [
      {
        id: 'dire-l-amour',
        title: 'Dire l\'amour : poésie, théâtre et roman',
        programme: 'Se chercher, se construire : Dire l\'amour',
        lessons: [
          { id: 'poesie-lyrique', title: 'Qu\'est-ce que la poésie lyrique ?' },
          { id: 'sonnet-versification', title: 'Le sonnet et les règles de la versification' },
          { id: 'images-poetiques', title: 'Les images poétiques : comparaison, métaphore, personnification' },
          { id: 'scene-de-rencontre', title: 'L\'amour sur scène et dans le roman : la scène de rencontre' },
        ],
      },
      {
        id: 'phrase-complexe',
        title: 'La phrase complexe : juxtaposition, coordination, subordination',
        programme: 'Étude de la langue : analyser le fonctionnement de la phrase simple et de la phrase complexe',
        lessons: [
          { id: 'propositions', title: 'Identifier les propositions d\'une phrase complexe' },
          { id: 'subordonnee-relative', title: 'La proposition subordonnée relative' },
          { id: 'subordonnee-completive', title: 'La proposition subordonnée conjonctive complétive' },
        ],
      },
      {
        id: 'fiction-interroger-reel',
        title: 'Le récit réaliste : la fiction pour interroger le réel',
        programme: 'Regarder le monde, inventer des mondes : La fiction pour interroger le réel',
        lessons: [
          { id: 'realisme-naturalisme', title: 'Réalisme et naturalisme au XIXe siècle' },
          { id: 'nouvelle-realiste', title: 'La nouvelle réaliste : lire Maupassant' },
          { id: 'description-portrait', title: 'Le rôle de la description et du portrait' },
          { id: 'narrateur-point-de-vue', title: 'Narrateur et points de vue' },
        ],
      },
      {
        id: 'verbe-temps-modes',
        title: 'Le verbe : temps, modes et voix',
        programme: 'Étude de la langue : le fonctionnement du verbe et son orthographe',
        lessons: [
          { id: 'valeurs-temps-recit', title: 'Les valeurs des temps du récit' },
          { id: 'subjonctif-present', title: 'Le subjonctif présent : formes et emplois' },
          { id: 'conditionnel', title: 'Le conditionnel : futur dans le passé et hypothèse' },
          { id: 'voix-passive', title: 'La voix active et la voix passive' },
        ],
      },
      {
        id: 'individu-et-societe',
        title: 'Individu et société : confrontations de valeurs ?',
        programme: 'Vivre en société, participer à la société : Individu et société : confrontations de valeurs ?',
        lessons: [
          { id: 'lire-texte-theatral', title: 'Lire un texte théâtral : répliques, didascalies, monologue' },
          { id: 'tragedie-dilemme', title: 'La tragédie classique et le dilemme' },
          { id: 'comedie-critique', title: 'La comédie : faire rire pour critiquer la société' },
        ],
      },
      {
        id: 'circonstancielles',
        title: 'Les subordonnées circonstancielles',
        programme: 'Étude de la langue : analyser le fonctionnement de la phrase simple et de la phrase complexe',
        lessons: [
          { id: 'temps-et-cause', title: 'Exprimer le temps et la cause' },
          { id: 'but-et-consequence', title: 'Exprimer le but et la conséquence' },
          { id: 'opposition-concession', title: 'Exprimer l\'opposition et la concession' },
        ],
      },
      {
        id: 'informer-deformer',
        title: 'Informer, s\'informer, déformer ?',
        programme: 'Agir sur le monde : Informer, s\'informer, déformer ?',
        lessons: [
          { id: 'presse-et-medias', title: 'La presse et les médias : qui informe, et comment ?' },
          { id: 'fait-et-opinion', title: 'Distinguer le fait, l\'information et l\'opinion' },
          { id: 'fausses-informations', title: 'Repérer une fausse information et vérifier une source' },
          { id: 'rediger-article', title: 'Rédiger un article de presse' },
        ],
      },
      {
        id: 'orthographe-lexique',
        title: 'Orthographe et lexique',
        programme: 'Étude de la langue : consolider l\'orthographe lexicale et grammaticale, enrichir et structurer le lexique',
        lessons: [
          { id: 'accord-participe-passe', title: 'L\'accord du participe passé' },
          { id: 'homophones-grammaticaux', title: 'Les homophones grammaticaux' },
          { id: 'formation-des-mots', title: 'La formation des mots : préfixes, suffixes, radicaux' },
        ],
      },
      {
        id: 'ville-possibles',
        title: 'La ville, lieu de tous les possibles ?',
        programme: 'Agir sur le monde (questionnement complémentaire) : La ville, lieu de tous les possibles ?',
        lessons: [
          { id: 'ville-roman', title: 'La ville dans le roman du XIXe siècle' },
          { id: 'ville-poesie', title: 'La ville en poésie, de Baudelaire à aujourd\'hui' },
        ],
      },
      {
        id: 'ecrire-oral',
        title: 'Écrire et s\'exprimer à l\'oral',
        programme: 'Écrire ; Comprendre et s\'exprimer à l\'oral',
        lessons: [
          { id: 'rediger-recit', title: 'Rédiger un récit cohérent et enrichi' },
          { id: 'paragraphe-argumente', title: 'Construire un paragraphe argumenté' },
          { id: 'expose-oral', title: 'Préparer et présenter un exposé oral' },
        ],
      },
    ],
  },
  {
    id: 'maths-4e',
    subject: 'maths',
    grade: '4e',
    intro: 'Vous saurez calculer avec les nombres relatifs, les fractions et les puissances, résoudre des équations, utiliser le théorème de Pythagore, le théorème de Thalès et le cosinus, et traiter des problèmes de proportionnalité, de statistiques et de probabilités.',
    reference: 'Programme de mathématiques du cycle 4, BO n°31 du 30 juillet 2020',
    chapters: [
      {
        id: 'nombres-relatifs',
        title: 'Multiplier et diviser des nombres relatifs',
        programme: 'Nombres et calculs : utiliser les nombres pour comparer, calculer et résoudre des problèmes',
        lessons: [
          { id: 'multiplication-relatifs', title: 'Multiplier des nombres relatifs : la règle des signes' },
          { id: 'division-relatifs', title: 'Diviser des nombres relatifs' },
          { id: 'enchainer-calculs', title: 'Enchaîner les calculs : priorités opératoires' },
        ],
      },
      {
        id: 'pythagore',
        title: 'Le théorème de Pythagore',
        programme: 'Espace et géométrie : utiliser les notions de géométrie plane pour démontrer',
        lessons: [
          { id: 'carres-racines', title: 'Carrés et racines carrées' },
          { id: 'theoreme-pythagore', title: 'Calculer une longueur avec le théorème de Pythagore' },
          { id: 'reciproque-pythagore', title: 'Démontrer qu\'un triangle est rectangle, ou qu\'il ne l\'est pas' },
        ],
      },
      {
        id: 'fractions',
        title: 'Calculer avec les fractions',
        programme: 'Nombres et calculs : utiliser les nombres pour comparer, calculer et résoudre des problèmes',
        lessons: [
          { id: 'fractions-irreductibles', title: 'Nombres premiers et fractions irréductibles' },
          { id: 'addition-fractions', title: 'Additionner et soustraire des fractions' },
          { id: 'multiplication-division-fractions', title: 'Multiplier et diviser des fractions' },
        ],
      },
      {
        id: 'calcul-litteral-equations',
        title: 'Calcul littéral et équations',
        programme: 'Nombres et calculs : utiliser le calcul littéral',
        lessons: [
          { id: 'developper', title: 'Développer : simple et double distributivité' },
          { id: 'factoriser-prouver', title: 'Factoriser et prouver avec le calcul littéral' },
          { id: 'resoudre-equation', title: 'Résoudre une équation du premier degré' },
          { id: 'mettre-en-equation', title: 'Mettre un problème en équation' },
        ],
      },
      {
        id: 'proportionnalite',
        title: 'Proportionnalité, pourcentages et vitesse',
        programme: 'Organisation et gestion de données, fonctions : résoudre des problèmes de proportionnalité ; Grandeurs et mesures : grandeurs produits et quotients',
        lessons: [
          { id: 'reconnaitre-proportionnalite', title: 'Reconnaître la proportionnalité, dans un tableau et sur un graphique' },
          { id: 'quatrieme-proportionnelle', title: 'Calculer une quatrième proportionnelle' },
          { id: 'pourcentages', title: 'Appliquer et calculer un pourcentage' },
          { id: 'vitesse-moyenne', title: 'La vitesse moyenne, une grandeur quotient' },
        ],
      },
      {
        id: 'puissances',
        title: 'Les puissances',
        programme: 'Nombres et calculs : utiliser les nombres pour comparer, calculer et résoudre des problèmes',
        lessons: [
          { id: 'puissances-nombre', title: 'Puissances d\'un nombre : exposants positifs et négatifs' },
          { id: 'puissances-de-dix', title: 'Les puissances de 10 et les préfixes' },
          { id: 'ecriture-scientifique', title: 'L\'écriture scientifique' },
        ],
      },
      {
        id: 'thales',
        title: 'Le théorème de Thalès dans le triangle',
        programme: 'Espace et géométrie : utiliser les notions de géométrie plane pour démontrer',
        lessons: [
          { id: 'agrandissement-reduction', title: 'Agrandissement et réduction d\'une figure' },
          { id: 'theoreme-thales', title: 'Calculer une longueur avec le théorème de Thalès' },
          { id: 'problemes-thales', title: 'Résoudre un problème avec le théorème de Thalès' },
        ],
      },
      {
        id: 'cosinus',
        title: 'Le cosinus d\'un angle aigu',
        programme: 'Espace et géométrie : utiliser les notions de géométrie plane pour démontrer',
        lessons: [
          { id: 'cosinus-definition', title: 'Le cosinus dans un triangle rectangle' },
          { id: 'cosinus-longueur', title: 'Calculer une longueur avec le cosinus' },
          { id: 'cosinus-angle', title: 'Calculer la mesure d\'un angle avec le cosinus' },
        ],
      },
      {
        id: 'statistiques-probabilites',
        title: 'Statistiques et probabilités',
        programme: 'Organisation et gestion de données, fonctions : interpréter, représenter et traiter des données ; comprendre et utiliser des notions élémentaires de probabilités',
        lessons: [
          { id: 'moyenne-ponderee', title: 'Calculer une moyenne, y compris pondérée' },
          { id: 'mediane-etendue', title: 'Médiane et étendue d\'une série' },
          { id: 'calculer-probabilite', title: 'Expériences aléatoires : calculer une probabilité' },
        ],
      },
      {
        id: 'translation',
        title: 'La translation',
        programme: 'Espace et géométrie : utiliser les notions de géométrie plane pour démontrer (transformations)',
        lessons: [
          { id: 'image-translation', title: 'Construire l\'image d\'une figure par une translation' },
          { id: 'proprietes-translation', title: 'Propriétés de la translation, frises et pavages' },
        ],
      },
      {
        id: 'pyramides-cones',
        title: 'Pyramides et cônes',
        programme: 'Espace et géométrie : représenter l\'espace ; Grandeurs et mesures : calculer avec des grandeurs mesurables',
        lessons: [
          { id: 'representer-pyramide-cone', title: 'Reconnaître, représenter et se repérer : pyramides et cônes' },
          { id: 'volume-pyramide-cone', title: 'Calculer le volume d\'une pyramide et d\'un cône' },
        ],
      },
      {
        id: 'algorithmique',
        title: 'Algorithmique et programmation',
        programme: 'Algorithmique et programmation : écrire, mettre au point et exécuter un programme simple',
        lessons: [
          { id: 'boucles-conditions', title: 'Boucles et instructions conditionnelles' },
          { id: 'variables', title: 'Utiliser des variables dans un programme' },
          { id: 'evenements-messages', title: 'Programmer des actions en parallèle : évènements et messages' },
        ],
      },
    ],
  },
  {
    id: 'hg-emc-4e',
    subject: 'hg-emc',
    grade: '4e',
    intro: 'Vous saurez expliquer l\'histoire de l\'Europe et de la France du XVIIIe au XIXe siècle, analyser l\'urbanisation, les mobilités et les espaces transformés par la mondialisation, et comprendre comment l\'État de droit et la défense nationale protègent les droits et les libertés.',
    reference: 'Programme d\'histoire et géographie du cycle 4, BO n°31 du 30 juillet 2020 ; programme d\'enseignement moral et civique, arrêté du 29 mai 2024, BO n°24 du 13 juin 2024',
    chapters: [
      {
        id: 'negoce-traites',
        title: 'Bourgeoisies marchandes, négoces et traites négrières',
        programme: 'Histoire, thème 1 : Le XVIIIe siècle. Expansions, Lumières et révolutions : bourgeoisies marchandes, négoces internationaux et traites négrières au XVIIIe siècle',
        lessons: [
          { id: 'ports-negoce', title: 'Les ports et le grand commerce atlantique' },
          { id: 'commerce-triangulaire', title: 'Le commerce triangulaire et la traite des Noirs' },
          { id: 'esclavage-colonies', title: 'L\'esclavage dans les colonies d\'Amérique' },
        ],
      },
      {
        id: 'urbanisation-monde',
        title: 'L\'urbanisation du monde',
        programme: 'Géographie, thème 1 : L\'urbanisation du monde',
        lessons: [
          { id: 'croissance-urbaine', title: 'Un monde de plus en plus urbain' },
          { id: 'centres-peripheries', title: 'Espaces et paysages urbains : centres et périphéries' },
          { id: 'villes-connectees', title: 'Des villes inégalement connectées aux réseaux de la mondialisation' },
        ],
      },
      {
        id: 'lumieres',
        title: 'L\'Europe des Lumières',
        programme: 'Histoire, thème 1 : L\'Europe des Lumières : circulation des idées, despotisme éclairé et contestation de l\'absolutisme',
        lessons: [
          { id: 'philosophes-lumieres', title: 'Les philosophes des Lumières et leurs idées' },
          { id: 'circulation-idees', title: 'La circulation des idées : salons, Encyclopédie, sciences' },
          { id: 'despotisme-eclaire', title: 'Despotisme éclairé et contestation de l\'absolutisme' },
        ],
      },
      {
        id: 'revolution-empire',
        title: 'La Révolution française et l\'Empire',
        programme: 'Histoire, thème 1 : La Révolution française et l\'Empire : nouvel ordre politique et société révolutionnée en France et en Europe',
        lessons: [
          { id: 'fin-monarchie-absolue', title: '1789 : la fin de la monarchie absolue' },
          { id: 'premiere-republique', title: 'La Première République, une période de conflits' },
          { id: 'napoleon-empire', title: 'Napoléon et l\'Empire : héritages en France et en Europe' },
        ],
      },
      {
        id: 'etat-de-droit-libertes',
        title: 'L\'État de droit et les libertés',
        programme: 'EMC, classe de 4e, Défendre les droits et les libertés : l\'État de droit et les libertés',
        lessons: [
          { id: 'libertes-individuelles-collectives', title: 'Libertés individuelles et libertés collectives' },
          { id: 'limites-libertes', title: 'Les limites des libertés : les droits d\'autrui et l\'ordre public' },
          { id: 'etat-de-droit-normes', title: 'L\'État de droit et la hiérarchie des normes' },
          { id: 'justice-audience', title: 'La justice en France : assister à une audience correctionnelle' },
        ],
      },
      {
        id: 'mobilites-transnationales',
        title: 'Les mobilités humaines transnationales',
        programme: 'Géographie, thème 2 : Les mobilités humaines transnationales',
        lessons: [
          { id: 'monde-de-migrants', title: 'Un monde de migrants : pourquoi migre-t-on ?' },
          { id: 'flux-migratoires', title: 'Les grands flux migratoires et leurs effets' },
          { id: 'tourisme-espaces', title: 'Le tourisme et ses espaces' },
        ],
      },
      {
        id: 'revolution-industrielle',
        title: 'L\'Europe de la révolution industrielle',
        programme: 'Histoire, thème 2 : L\'Europe et le monde au XIXe siècle : l\'Europe de la révolution industrielle',
        lessons: [
          { id: 'industrialisation', title: 'Nouvelles énergies et industrialisation de l\'Europe' },
          { id: 'monde-ouvrier', title: 'Le monde ouvrier et la question sociale' },
          { id: 'bourgeoisie-ideologies', title: 'Bourgeoisie et nouvelles idéologies : libéralisme et socialisme' },
        ],
      },
      {
        id: 'conquetes-coloniales',
        title: 'Conquêtes et sociétés coloniales',
        programme: 'Histoire, thème 2 : L\'Europe et le monde au XIXe siècle : conquêtes et sociétés coloniales',
        lessons: [
          { id: 'expansion-coloniale', title: 'L\'expansion coloniale européenne' },
          { id: 'empire-colonial-francais', title: 'La France construit un empire colonial' },
          { id: 'societe-coloniale', title: 'La société coloniale : domination et résistances' },
        ],
      },
      {
        id: 'mers-oceans',
        title: 'Mers et océans : un monde maritimisé',
        programme: 'Géographie, thème 3 : Des espaces transformés par la mondialisation : mers et océans, un monde maritimisé',
        lessons: [
          { id: 'routes-maritimes', title: 'Les grandes routes maritimes et les ports' },
          { id: 'ressources-oceans', title: 'Les ressources des océans et leur partage' },
          { id: 'tensions-maritimes', title: 'Les espaces maritimes : appropriations et tensions' },
        ],
      },
      {
        id: 'securite-defense',
        title: 'Sécurité et défense nationale',
        programme: 'EMC, classe de 4e, Défendre les droits et les libertés : sécurité et défense nationale',
        lessons: [
          { id: 'securite-interieure', title: 'Les forces de sécurité intérieure' },
          { id: 'forces-armees', title: 'Les forces armées et la défense nationale' },
          { id: 'citoyen-defense', title: 'Le citoyen et la défense : recensement et journée défense et citoyenneté' },
        ],
      },
      {
        id: 'france-xixe',
        title: 'Société, culture et politique dans la France du XIXe siècle',
        programme: 'Histoire, thème 3 : Société, culture et politique dans la France du XIXe siècle',
        lessons: [
          { id: 'voter-1815-1870', title: 'Une difficile conquête : voter de 1815 à 1870' },
          { id: 'troisieme-republique', title: 'La Troisième République' },
          { id: 'conditions-feminines', title: 'Conditions féminines dans une société en mutation' },
        ],
      },
      {
        id: 'etats-unis-afrique',
        title: 'Les États-Unis et l\'Afrique face à la mondialisation',
        programme: 'Géographie, thème 3 : Des espaces transformés par la mondialisation : les États-Unis et les dynamiques d\'un grand ensemble géographique africain',
        lessons: [
          { id: 'etats-unis-mondialisation', title: 'L\'adaptation du territoire des États-Unis à la mondialisation' },
          { id: 'afrique-de-l-ouest', title: 'Les dynamiques d\'un grand ensemble africain : l\'Afrique de l\'Ouest' },
        ],
      },
    ],
  },
  {
    id: 'physique-chimie-4e',
    subject: 'physique-chimie',
    grade: '4e',
    intro: 'Vous saurez décrire la matière à l\'échelle des atomes et des molécules, interpréter des transformations chimiques, caractériser un mouvement et une interaction, mesurer et prévoir dans un circuit électrique, et expliquer la propagation de la lumière et du son.',
    reference: 'Programme de physique-chimie du cycle 4, BO n°31 du 30 juillet 2020',
    chapters: [
      {
        id: 'corps-purs-melanges',
        title: 'Corps purs, mélanges et masse volumique',
        programme: 'Organisation et transformations de la matière : décrire la constitution et les états de la matière',
        lessons: [
          { id: 'corps-purs-melanges', title: 'Corps purs et mélanges' },
          { id: 'masse-volumique', title: 'La masse volumique' },
          { id: 'solubilite-miscibilite', title: 'Solubilité et miscibilité' },
        ],
      },
      {
        id: 'atomes-molecules',
        title: 'Atomes et molécules',
        programme: 'Organisation et transformations de la matière : décrire la constitution et les états de la matière',
        lessons: [
          { id: 'atome', title: 'L\'atome, constituant de la matière' },
          { id: 'molecules-formules', title: 'Les molécules et leurs formules chimiques' },
          { id: 'modele-particulaire', title: 'Les états de la matière expliqués par les molécules' },
        ],
      },
      {
        id: 'transformations-chimiques',
        title: 'Les transformations chimiques',
        programme: 'Organisation et transformations de la matière : décrire et expliquer des transformations chimiques',
        lessons: [
          { id: 'physique-ou-chimique', title: 'Transformation physique ou transformation chimique ?' },
          { id: 'reactifs-produits', title: 'Réactifs, produits et équation de réaction' },
          { id: 'conservation-masse', title: 'La conservation de la masse et des atomes' },
        ],
      },
      {
        id: 'combustions',
        title: 'Les combustions',
        programme: 'Organisation et transformations de la matière : décrire et expliquer des transformations chimiques',
        lessons: [
          { id: 'combustion-carbone', title: 'La combustion du carbone' },
          { id: 'combustion-methane', title: 'La combustion du méthane' },
          { id: 'dangers-combustions', title: 'Les dangers des combustions et la sécurité' },
        ],
      },
      {
        id: 'mouvement-vitesse',
        title: 'Mouvement et vitesse',
        programme: 'Mouvement et interactions : caractériser un mouvement',
        lessons: [
          { id: 'referentiel-trajectoire', title: 'Référentiel et trajectoire' },
          { id: 'vitesse-moyenne', title: 'Calculer une vitesse moyenne' },
          { id: 'mouvement-uniforme-varie', title: 'Mouvement uniforme, accéléré ou ralenti' },
        ],
      },
      {
        id: 'interactions-forces',
        title: 'Interactions et forces',
        programme: 'Mouvement et interactions : modéliser une interaction par une force caractérisée par un point d\'application, une direction, un sens et une valeur',
        lessons: [
          { id: 'actions-mecaniques', title: 'Actions de contact et actions à distance' },
          { id: 'diagramme-objets-interactions', title: 'Le diagramme objets-interactions' },
          { id: 'modeliser-force', title: 'Modéliser une action par une force' },
        ],
      },
      {
        id: 'circuits-electriques',
        title: 'Les circuits électriques',
        programme: 'L\'énergie et ses conversions : réaliser des circuits électriques simples et exploiter les lois de l\'électricité',
        lessons: [
          { id: 'serie-derivation', title: 'Circuits en série et circuits avec dérivations' },
          { id: 'intensite-courant', title: 'L\'intensité du courant et ses lois' },
          { id: 'tension-electrique', title: 'La tension électrique et ses lois' },
        ],
      },
      {
        id: 'resistance-ohm',
        title: 'Résistance et loi d\'Ohm',
        programme: 'L\'énergie et ses conversions : réaliser des circuits électriques simples et exploiter les lois de l\'électricité',
        lessons: [
          { id: 'resistance', title: 'La résistance électrique' },
          { id: 'loi-ohm', title: 'La loi d\'Ohm' },
        ],
      },
      {
        id: 'energie-conversions',
        title: 'L\'énergie et ses conversions',
        programme: 'L\'énergie et ses conversions : identifier les sources, les transferts, les conversions et les formes d\'énergie',
        lessons: [
          { id: 'sources-formes-energie', title: 'Sources et formes d\'énergie' },
          { id: 'chaine-energetique', title: 'Conversions d\'énergie et chaîne énergétique' },
          { id: 'conservation-energie', title: 'La conservation de l\'énergie' },
        ],
      },
      {
        id: 'lumiere',
        title: 'La lumière',
        programme: 'Des signaux pour observer et communiquer : caractériser différents types de signaux (lumineux, sonores, radio)',
        lessons: [
          { id: 'propagation-lumiere', title: 'La propagation rectiligne de la lumière' },
          { id: 'vitesse-lumiere', title: 'La vitesse de la lumière et l\'année-lumière' },
          { id: 'couleurs', title: 'Lumières colorées et couleur des objets' },
        ],
      },
      {
        id: 'son',
        title: 'Le son',
        programme: 'Des signaux pour observer et communiquer : caractériser différents types de signaux (lumineux, sonores, radio)',
        lessons: [
          { id: 'propagation-son', title: 'Production et propagation du son' },
          { id: 'frequence-audible', title: 'Fréquence et domaine audible' },
          { id: 'vitesse-son', title: 'La vitesse du son et ses applications : écho, sonar' },
        ],
      },
    ],
  },
  {
    id: 'svt-4e',
    subject: 'svt',
    grade: '4e',
    intro: 'Vous saurez expliquer l\'activité interne de la Terre, les phénomènes météorologiques et les risques naturels, la reproduction des êtres vivants et de l\'être humain, et le fonctionnement de l\'organisme, pour faire des choix responsables pour votre santé.',
    reference: 'Programme de sciences de la vie et de la Terre du cycle 4, BO n°31 du 30 juillet 2020',
    chapters: [
      {
        id: 'activite-interne-terre',
        title: 'L\'activité interne de la Terre',
        programme: 'La planète Terre, l\'environnement et l\'action humaine : expliquer quelques phénomènes géologiques à partir du contexte géodynamique global',
        lessons: [
          { id: 'seismes', title: 'Les séismes et leur origine' },
          { id: 'volcanisme', title: 'Le volcanisme : éruptions effusives et explosives' },
          { id: 'tectonique-plaques', title: 'La tectonique des plaques' },
        ],
      },
      {
        id: 'risques-naturels',
        title: 'Les risques naturels',
        programme: 'La planète Terre, l\'environnement et l\'action humaine : relier les connaissances scientifiques sur les risques naturels aux mesures de prévention, de protection et d\'adaptation',
        lessons: [
          { id: 'alea-enjeux-risque', title: 'Aléa, enjeux et risque' },
          { id: 'prevention-protection', title: 'Prévenir et se protéger des séismes et des éruptions' },
        ],
      },
      {
        id: 'meteo-climat',
        title: 'Météorologie et climat',
        programme: 'La planète Terre, l\'environnement et l\'action humaine : expliquer quelques phénomènes météorologiques et climatiques',
        lessons: [
          { id: 'phenomenes-meteo', title: 'L\'atmosphère et les phénomènes météorologiques' },
          { id: 'circulation-air-eau', title: 'Les mouvements de l\'air et de l\'eau à l\'échelle du globe' },
          { id: 'meteo-ou-climat', title: 'Distinguer la météo et le climat' },
        ],
      },
      {
        id: 'ressources-action-humaine',
        title: 'Ressources naturelles et action humaine',
        programme: 'La planète Terre, l\'environnement et l\'action humaine : identifier les impacts des activités humaines et expliquer les choix de gestion des ressources naturelles',
        lessons: [
          { id: 'ressources-naturelles', title: 'Les ressources naturelles et leur exploitation' },
          { id: 'impacts-ecosystemes', title: 'Les impacts des activités humaines sur les écosystèmes' },
        ],
      },
      {
        id: 'reproduction-vivant',
        title: 'La reproduction des êtres vivants',
        programme: 'Le vivant et son évolution : expliquer l\'organisation du monde vivant, sa structure et son dynamisme à différentes échelles',
        lessons: [
          { id: 'sexuee-asexuee', title: 'Reproduction sexuée et reproduction asexuée' },
          { id: 'plantes-a-fleurs', title: 'La reproduction des plantes à fleurs' },
          { id: 'facteurs-reproduction', title: 'Les facteurs qui influencent la reproduction' },
        ],
      },
      {
        id: 'puberte',
        title: 'Puberté et appareils reproducteurs',
        programme: 'Le corps humain et la santé : expliquer quelques processus biologiques impliqués dans le fonctionnement de l\'organisme humain',
        lessons: [
          { id: 'transformations-puberte', title: 'Les transformations de la puberté' },
          { id: 'appareils-reproducteurs', title: 'Les appareils reproducteurs et les cellules reproductrices' },
          { id: 'hormones-cycles', title: 'Hormones et cycle menstruel' },
        ],
      },
      {
        id: 'procreation',
        title: 'De la fécondation à la naissance',
        programme: 'Le corps humain et la santé : relier la connaissance des processus biologiques aux comportements responsables en matière de santé',
        lessons: [
          { id: 'fecondation-grossesse', title: 'Fécondation, grossesse et naissance' },
          { id: 'contraception', title: 'Maîtriser sa fertilité : la contraception' },
          { id: 'ist-prevention', title: 'Les infections sexuellement transmissibles et leur prévention' },
        ],
      },
      {
        id: 'nutrition-organes',
        title: 'Nourrir les organes : respiration et circulation',
        programme: 'Le corps humain et la santé : expliquer quelques processus biologiques impliqués dans le fonctionnement de l\'organisme humain',
        lessons: [
          { id: 'besoins-organes', title: 'Les besoins des organes en dioxygène et en nutriments' },
          { id: 'respiration', title: 'La respiration et les échanges gazeux' },
          { id: 'circulation-sanguine', title: 'La circulation sanguine' },
        ],
      },
      {
        id: 'digestion-microbiote',
        title: 'Digestion, alimentation et microbiote',
        programme: 'Le corps humain et la santé : expliquer quelques processus biologiques impliqués dans le fonctionnement de l\'organisme humain',
        lessons: [
          { id: 'digestion', title: 'La digestion des aliments' },
          { id: 'microbiote', title: 'Le microbiote intestinal' },
          { id: 'alimentation-sante', title: 'Alimentation équilibrée et santé' },
        ],
      },
    ],
  },
  {
    id: 'technologie-4e',
    subject: 'technologie',
    grade: '4e',
    intro: 'Vous saurez analyser l\'usage et le fonctionnement d\'un objet technique, suivre l\'énergie et l\'information dans un système, écrire un programme pour le piloter, et participer à la conception d\'une solution en tenant compte de son impact sur l\'environnement.',
    reference: 'Programme de technologie du cycle 4, BO n°9 du 29 février 2024',
    chapters: [
      {
        id: 'besoins-usages',
        title: 'Besoins, usages et évolution des objets',
        programme: 'Thème 1 : Les objets et les systèmes techniques : leurs usages et leurs interactions à découvrir et à analyser',
        lessons: [
          { id: 'besoin-fonction', title: 'Du besoin à la fonction d\'usage' },
          { id: 'evolution-objets', title: 'L\'évolution des objets techniques' },
          { id: 'cycle-de-vie', title: 'Cycle de vie et impact environnemental d\'un objet' },
        ],
      },
      {
        id: 'objets-interactions',
        title: 'Objets, environnement et réseaux',
        programme: 'Thème 1 : Les objets et les systèmes techniques : leurs usages et leurs interactions à découvrir et à analyser',
        lessons: [
          { id: 'interactions-environnement', title: 'Décrire les interactions d\'un objet avec son environnement' },
          { id: 'objets-communicants', title: 'Les objets communicants et les réseaux' },
          { id: 'donnees-cybersecurite', title: 'Données personnelles et cybersécurité' },
        ],
      },
      {
        id: 'matiere-energie-information',
        title: 'Matière, énergie, information : la structure d\'un système',
        programme: 'Thème 2 : Structure, fonctionnement, comportement : des objets et des systèmes techniques à comprendre',
        lessons: [
          { id: 'materiaux', title: 'Les familles de matériaux et leurs propriétés' },
          { id: 'chaine-energie', title: 'La chaîne d\'énergie : alimenter, transmettre, convertir' },
          { id: 'chaine-information', title: 'La chaîne d\'information : acquérir, traiter, communiquer' },
        ],
      },
      {
        id: 'capteurs-actionneurs',
        title: 'Capteurs, actionneurs et comportement',
        programme: 'Thème 2 : Structure, fonctionnement, comportement : des objets et des systèmes techniques à comprendre',
        lessons: [
          { id: 'capteurs', title: 'Les capteurs : acquérir une information' },
          { id: 'actionneurs', title: 'Les actionneurs : agir sur le monde physique' },
          { id: 'simuler-comportement', title: 'Simuler et mesurer le comportement d\'un système' },
        ],
      },
      {
        id: 'programmer',
        title: 'Programmer un système',
        programme: 'Thème 2 : Structure, fonctionnement, comportement : des objets et des systèmes techniques à comprendre',
        lessons: [
          { id: 'algorigramme', title: 'Algorithme et algorigramme' },
          { id: 'programmer-blocs', title: 'Programmer un système avec des blocs' },
          { id: 'modifier-programme', title: 'Modifier un programme sur un objet réel ou simulé' },
          { id: 'intelligence-artificielle', title: 'L\'intelligence artificielle : apprendre à partir de données' },
        ],
      },
      {
        id: 'concevoir-realiser',
        title: 'Concevoir et réaliser une solution',
        programme: 'Thème 3 : Création, conception, réalisation, innovations : des objets à concevoir et à réaliser',
        lessons: [
          { id: 'cahier-des-charges', title: 'Le cahier des charges' },
          { id: 'croquis-modelisation', title: 'Du croquis à la modélisation 3D' },
          { id: 'prototype', title: 'Réaliser et tester un prototype' },
        ],
      },
    ],
  },
  {
    id: 'anglais-4e',
    subject: 'anglais',
    grade: '4e',
    intro: 'Vous saurez comprendre et produire en anglais des messages variés du niveau A2 vers le niveau B1, raconter des faits passés, exprimer vos projets, vos obligations et vos opinions, et découvrir les cultures du monde anglophone.',
    reference: 'Programme de langues vivantes étrangères et régionales du cycle 4, BO n°31 du 30 juillet 2020',
    chapters: [
      {
        id: 'school-life',
        title: 'La vie au collège : « School life »',
        programme: 'École et société ; parler en continu',
        lessons: [
          { id: 'present-simple-continu', title: 'Le présent simple et le présent en be + -ing' },
          { id: 'daily-routine', title: 'Décrire sa routine et sa vie au collège' },
          { id: 'schools-uk-us', title: 'L\'école au Royaume-Uni et aux États-Unis' },
        ],
      },
      {
        id: 'let-s-talk',
        title: 'Prendre la parole : « Let\'s talk »',
        programme: 'Réagir et dialoguer',
        lessons: [
          { id: 'wh-questions', title: 'Poser des questions : les mots interrogatifs' },
          { id: 'likes-feelings', title: 'Exprimer ses goûts et ses sentiments' },
          { id: 'opinion-agreement', title: 'Donner son avis : « I think », « I agree », « because »' },
        ],
      },
      {
        id: 'telling-the-past',
        title: 'Raconter le passé : « Once upon a time »',
        programme: 'Langages ; lire et comprendre ; écrire',
        lessons: [
          { id: 'simple-past', title: 'Le prétérit des verbes réguliers et irréguliers' },
          { id: 'past-continuous', title: 'Le prétérit en be + -ing : une action en cours dans le passé' },
          { id: 'write-a-story', title: 'Écrire un court récit au passé' },
        ],
      },
      {
        id: 'present-perfect',
        title: 'Le present perfect : « Have you ever...? »',
        programme: 'Rencontres avec d\'autres cultures ; réagir et dialoguer',
        lessons: [
          { id: 'present-perfect-form', title: 'Former le present perfect' },
          { id: 'ever-never', title: 'Parler de ses expériences : ever, never' },
          { id: 'for-since', title: 'Durée et bilan : for, since, already, yet' },
        ],
      },
      {
        id: 'travel-migration',
        title: 'Voyages et migrations : « A new life »',
        programme: 'Voyages et migrations ; écouter et comprendre',
        lessons: [
          { id: 'ellis-island', title: 'L\'immigration vers les États-Unis : Ellis Island' },
          { id: 'oral-testimony', title: 'Comprendre un témoignage oral' },
          { id: 'comparatives-superlatives', title: 'Comparer : comparatifs et superlatifs' },
        ],
      },
      {
        id: 'future-plans',
        title: 'Projets et avenir : « What will you do? »',
        programme: 'Voyages et migrations ; parler en continu',
        lessons: [
          { id: 'will-going-to', title: 'Exprimer le futur : will et be going to' },
          { id: 'if-clauses', title: 'Exprimer une condition : if + présent, will' },
          { id: 'plan-a-trip', title: 'Organiser un voyage dans un pays anglophone' },
        ],
      },
      {
        id: 'rules-advice',
        title: 'Règles et conseils : « You must, you should »',
        programme: 'École et société ; réagir et dialoguer',
        lessons: [
          { id: 'must-have-to', title: 'L\'obligation : must et have to' },
          { id: 'should-advice', title: 'Le conseil : should' },
          { id: 'can-could', title: 'Capacité et permission : can, could, be able to' },
        ],
      },
      {
        id: 'media-news',
        title: 'Médias et réseaux : « Breaking news »',
        programme: 'Langages ; lire et comprendre',
        lessons: [
          { id: 'read-article', title: 'Lire et comprendre un article de presse' },
          { id: 'headlines', title: 'Comprendre et écrire des gros titres' },
          { id: 'social-networks', title: 'Les adolescents anglophones et les réseaux sociaux' },
        ],
      },
      {
        id: 'english-speaking-world',
        title: 'Le monde anglophone : « Around the world »',
        programme: 'Rencontres avec d\'autres cultures ; découvrir les aspects culturels d\'une langue vivante étrangère',
        lessons: [
          { id: 'english-speaking-countries', title: 'Les pays anglophones dans le monde' },
          { id: 'celebrations', title: 'Fêtes et traditions : Thanksgiving, Bonfire Night' },
          { id: 'civil-rights', title: 'Rosa Parks et Martin Luther King : la lutte pour les droits civiques' },
        ],
      },
    ],
  },
  {
    id: 'espagnol-4e',
    subject: 'espagnol',
    grade: '4e',
    intro: 'Vous saurez communiquer en espagnol dans des situations simples du quotidien, du niveau A1 vers le niveau A2, parler de vous, de vos goûts et de vos projets, raconter des faits passés simples et découvrir des aspects du monde hispanique.',
    reference: 'Programme de langues vivantes étrangères et régionales du cycle 4, BO n°31 du 30 juillet 2020',
    chapters: [
      {
        id: 'presentarse',
        title: 'Se présenter et décrire : « ¿Quién eres? »',
        programme: 'Rencontres avec d\'autres cultures ; réagir et dialoguer',
        lessons: [
          { id: 'ser-estar', title: 'Ser et estar' },
          { id: 'presente-irregulares', title: 'Le présent des verbes irréguliers et à diphtongue' },
          { id: 'describir-personas', title: 'Décrire une personne : physique et caractère' },
        ],
      },
      {
        id: 'gustos-ocio',
        title: 'Goûts et loisirs : « Me gusta »',
        programme: 'Langages ; parler en continu',
        lessons: [
          { id: 'gustar-encantar', title: 'Exprimer ses goûts : gustar, encantar, preferir' },
          { id: 'ocio-deporte', title: 'Parler de ses loisirs et du sport' },
          { id: 'tambien-tampoco', title: 'Exprimer l\'accord et le désaccord : también, tampoco' },
        ],
      },
      {
        id: 'colegio-vida-diaria',
        title: 'Le collège et la vie quotidienne',
        programme: 'École et société ; écouter et comprendre',
        lessons: [
          { id: 'rutina-diaria', title: 'La journée : verbes pronominaux et heure' },
          { id: 'colegio-hispano', title: 'Le collège en Espagne et en Amérique latine' },
          { id: 'obligacion', title: 'Exprimer l\'obligation : tener que, hay que' },
        ],
      },
      {
        id: 'ciudad-viajes',
        title: 'La ville et les voyages',
        programme: 'Voyages et migrations ; réagir et dialoguer',
        lessons: [
          { id: 'orientarse-ciudad', title: 'Se repérer en ville : hay, estar et les prépositions de lieu' },
          { id: 'ir-a-infinitivo', title: 'Parler de ses projets : ir a + infinitif' },
          { id: 'preparar-viaje', title: 'Préparer un voyage dans un pays hispanophone' },
        ],
      },
      {
        id: 'contar-pasado',
        title: 'Raconter au passé',
        programme: 'Langages ; écrire',
        lessons: [
          { id: 'preterito-perfecto', title: 'Le passé composé : le pretérito perfecto' },
          { id: 'preterito-indefinido', title: 'Le pretérito indefinido des verbes réguliers' },
          { id: 'contar-fin-de-semana', title: 'Raconter un week-end ou un voyage' },
        ],
      },
      {
        id: 'mundo-hispanico',
        title: 'Fêtes et traditions du monde hispanique',
        programme: 'Rencontres avec d\'autres cultures ; découvrir les aspects culturels d\'une langue vivante étrangère',
        lessons: [
          { id: 'fiestas-espana', title: 'Fêtes d\'Espagne : las Fallas, la Semana Santa' },
          { id: 'dia-de-muertos', title: 'Le Día de Muertos au Mexique' },
          { id: 'comparar', title: 'Comparer : más... que, menos... que, tan... como' },
        ],
      },
    ],
  },
]
