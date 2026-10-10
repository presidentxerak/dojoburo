// LE PLAN DE LA 3e · une unité par matière (GRADE_SUBJECTS['3e']), dans
// l'ordre d'affichage. Programmes en vigueur pour l'année scolaire 2026-2027 :
// - français, mathématiques : programmes du cycle 4 du BO n°31 du 30 juillet
//   2020 (les programmes de l'arrêté du 18 février 2026, BO n°10 du 5 mars
//   2026, n'arrivent en 3e qu'à la rentrée 2028) ;
// - histoire-géographie, physique-chimie, SVT, langues vivantes : programmes du
//   cycle 4 du BO n°31 du 30 juillet 2020 ;
// - EMC : programme du BO n°24 du 13 juin 2024, en vigueur en 3e à la rentrée
//   2026 (thème de l'année : « Faire vivre la démocratie ») ;
// - technologie : programme du cycle 4 du BO n°9 du 29 février 2024, en
//   vigueur en 3e à la rentrée 2026.
// Classe du brevet (session 2027) : les unités de français, mathématiques,
// histoire-géographie-EMC, physique-chimie, SVT et technologie se terminent
// par un chapitre « Préparer le brevet ».
import type { UnitPlan } from '../types'

export const PLANS: UnitPlan[] = [
  /* ------------------------------------------------------------------ */
  /* FRANÇAIS                                                             */
  /* ------------------------------------------------------------------ */
  {
    id: 'francais-3e',
    subject: 'francais',
    grade: '3e',
    intro: 'Vous saurez lire et analyser des textes littéraires et des images, maîtriser la phrase complexe, les temps du verbe et l\'orthographe grammaticale, et rédiger un récit ou une argumentation pour réussir l\'épreuve de français du brevet.',
    reference: 'Programme de français du cycle 4, BO n°31 du 30 juillet 2020 (le programme publié au BO n°10 du 5 mars 2026 ne s\'applique en 3e qu\'à la rentrée 2028)',
    chapters: [
      {
        id: 'se-raconter',
        title: 'Se raconter, se représenter',
        programme: 'Se chercher, se construire : se raconter, se représenter',
        lessons: [
          { id: 'genre-autobiographique', title: 'L\'autobiographie : un genre, un pacte avec le lecteur' },
          { id: 'recit-enfance', title: 'Le récit d\'enfance : souvenirs et mémoire' },
          { id: 'autoportrait', title: 'Se représenter : autoportraits en mots et en images' },
          { id: 'ecrire-souvenir', title: 'Écrire un souvenir personnel' },
        ],
      },
      {
        id: 'phrase-complexe',
        title: 'La phrase complexe',
        programme: 'Étude de la langue : analyser le fonctionnement de la phrase simple et de la phrase complexe',
        lessons: [
          { id: 'juxtaposition-coordination', title: 'Juxtaposition, coordination et subordination' },
          { id: 'subordonnees-relatives', title: 'Les propositions subordonnées relatives' },
          { id: 'subordonnees-conjonctives', title: 'Les subordonnées conjonctives : complétives et circonstancielles' },
          { id: 'cause-consequence-but', title: 'Exprimer la cause, la conséquence, le but et l\'opposition' },
        ],
      },
      {
        id: 'denoncer-travers',
        title: 'Dénoncer les travers de la société',
        programme: 'Vivre en société, participer à la société : dénoncer les travers de la société',
        lessons: [
          { id: 'satire-ironie', title: 'La satire et l\'ironie : faire rire pour dénoncer' },
          { id: 'apologue', title: 'L\'apologue : fables et contes pour dénoncer' },
          { id: 'caricature-dessin-presse', title: 'Caricature et dessin de presse : lire une image qui dénonce' },
        ],
      },
      {
        id: 'verbe-temps-modes',
        title: 'Le verbe : temps, modes et voix',
        programme: 'Étude de la langue : maîtriser le fonctionnement du verbe et son orthographe',
        lessons: [
          { id: 'valeurs-temps-recit', title: 'Les valeurs des temps dans le récit' },
          { id: 'subjonctif-conditionnel', title: 'Le subjonctif et le conditionnel : formes et emplois' },
          { id: 'voix-passive', title: 'La voix active et la voix passive' },
        ],
      },
      {
        id: 'visions-poetiques',
        title: 'Visions poétiques du monde',
        programme: 'Regarder le monde, inventer des mondes : visions poétiques du monde',
        lessons: [
          { id: 'poesie-regard', title: 'La poésie, une autre façon de voir le monde' },
          { id: 'images-poetiques', title: 'Les images poétiques : comparaison, métaphore, personnification' },
          { id: 'versification', title: 'Lire un poème : vers, strophes, rythmes et sonorités' },
          { id: 'poeme-en-prose', title: 'Du vers libre au poème en prose' },
        ],
      },
      {
        id: 'orthographe-lexique',
        title: 'Orthographe et lexique',
        programme: 'Étude de la langue : consolider l\'orthographe lexicale et grammaticale ; enrichir et structurer le lexique',
        lessons: [
          { id: 'accord-participe-passe', title: 'L\'accord du participe passé' },
          { id: 'homophones-grammaticaux', title: 'Les homophones grammaticaux' },
          { id: 'formation-mots-etymologie', title: 'La formation des mots et l\'étymologie' },
        ],
      },
      {
        id: 'individu-pouvoir',
        title: 'Agir dans la cité : individu et pouvoir',
        programme: 'Agir sur le monde : agir dans la cité : individu et pouvoir',
        lessons: [
          { id: 'litterature-engagee', title: 'La littérature engagée au XXe siècle' },
          { id: 'ecrire-guerre', title: 'Écrire la guerre et témoigner' },
          { id: 'resister-par-les-mots', title: 'Résister par les mots : poèmes et textes de la Résistance' },
        ],
      },
      {
        id: 'progres-reves-scientifiques',
        title: 'Progrès et rêves scientifiques',
        programme: 'Questionnement complémentaire : progrès et rêves scientifiques',
        lessons: [
          { id: 'science-fiction-anticipation', title: 'Science-fiction et récit d\'anticipation' },
          { id: 'dystopie', title: 'La dystopie : quand le progrès inquiète' },
        ],
      },
      {
        id: 'argumenter',
        title: 'Argumenter à l\'écrit et à l\'oral',
        programme: 'Écrire ; comprendre et s\'exprimer à l\'oral',
        lessons: [
          { id: 'these-arguments-exemples', title: 'Thèse, arguments et exemples' },
          { id: 'connecteurs-logiques', title: 'Organiser sa pensée avec les connecteurs logiques' },
          { id: 'debat-oral', title: 'Débattre à l\'oral : écouter, reformuler, répondre' },
        ],
      },
      {
        id: 'preparer-brevet',
        title: 'Préparer le brevet',
        programme: 'Diplôme national du brevet : épreuve écrite de français',
        lessons: [
          { id: 'questions-comprehension', title: 'Les questions de compréhension, de grammaire et sur l\'image' },
          { id: 'dictee-reecriture', title: 'La dictée et la réécriture' },
          { id: 'redaction-imagination', title: 'La rédaction : le sujet d\'imagination' },
          { id: 'redaction-reflexion', title: 'La rédaction : le sujet de réflexion' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* MATHÉMATIQUES                                                        */
  /* ------------------------------------------------------------------ */
  {
    id: 'maths-3e',
    subject: 'maths',
    grade: '3e',
    intro: 'Vous saurez calculer, résoudre des équations, utiliser les fonctions, le théorème de Thalès, la trigonométrie, les statistiques et les probabilités pour résoudre des problèmes et réussir l\'épreuve de mathématiques du brevet.',
    reference: 'Programme de mathématiques du cycle 4, BO n°31 du 30 juillet 2020 (le programme publié au BO n°10 du 5 mars 2026 ne s\'applique en 3e qu\'à la rentrée 2028)',
    chapters: [
      {
        id: 'arithmetique',
        title: 'Arithmétique',
        programme: 'Nombres et calculs : comprendre et utiliser les notions de divisibilité et de nombres premiers',
        lessons: [
          { id: 'diviseurs-nombres-premiers', title: 'Diviseurs, multiples et nombres premiers' },
          { id: 'decomposition-facteurs-premiers', title: 'Décomposer un nombre en produit de facteurs premiers' },
          { id: 'fractions-irreductibles', title: 'Rendre une fraction irréductible' },
        ],
      },
      {
        id: 'puissances-racines',
        title: 'Puissances et racines carrées',
        programme: 'Nombres et calculs : utiliser les nombres pour comparer, calculer et résoudre des problèmes',
        lessons: [
          { id: 'puissances', title: 'Calculer avec les puissances' },
          { id: 'notation-scientifique', title: 'Puissances de 10 et notation scientifique' },
          { id: 'racine-carree', title: 'La racine carrée d\'un nombre positif' },
        ],
      },
      {
        id: 'calcul-litteral',
        title: 'Calcul littéral',
        programme: 'Nombres et calculs : utiliser le calcul littéral',
        lessons: [
          { id: 'developper-distributivite', title: 'Développer avec la simple et la double distributivité' },
          { id: 'factoriser-identite', title: 'Factoriser, et utiliser (a + b)(a - b) = a² - b²' },
          { id: 'prouver-calcul-litteral', title: 'Démontrer une propriété avec le calcul littéral' },
        ],
      },
      {
        id: 'thales-triangles-semblables',
        title: 'Le théorème de Thalès et les triangles semblables',
        programme: 'Espace et géométrie : utiliser les notions de géométrie plane pour démontrer',
        lessons: [
          { id: 'triangles-semblables', title: 'Les triangles semblables' },
          { id: 'theoreme-thales', title: 'Le théorème de Thalès : calculer une longueur' },
          { id: 'reciproque-thales', title: 'La réciproque du théorème de Thalès : prouver un parallélisme' },
        ],
      },
      {
        id: 'equations',
        title: 'Équations et problèmes',
        programme: 'Nombres et calculs : utiliser le calcul littéral (mettre un problème en équation, résoudre)',
        lessons: [
          { id: 'equations-premier-degre', title: 'Résoudre une équation du premier degré' },
          { id: 'equation-produit-nul', title: 'Équations produit nul et équations du type x² = a' },
          { id: 'mettre-en-equation', title: 'Mettre un problème en équation' },
        ],
      },
      {
        id: 'trigonometrie',
        title: 'Trigonométrie dans le triangle rectangle',
        programme: 'Espace et géométrie : utiliser les notions de géométrie plane pour démontrer (cosinus, sinus, tangente)',
        lessons: [
          { id: 'cosinus-sinus-tangente', title: 'Cosinus, sinus et tangente d\'un angle aigu' },
          { id: 'trigo-calculer-longueur', title: 'Calculer une longueur avec la trigonométrie' },
          { id: 'trigo-calculer-angle', title: 'Calculer la mesure d\'un angle' },
        ],
      },
      {
        id: 'fonctions',
        title: 'Les fonctions',
        programme: 'Organisation et gestion de données, fonctions : comprendre et utiliser la notion de fonction',
        lessons: [
          { id: 'notion-fonction', title: 'La notion de fonction : image et antécédent' },
          { id: 'representations-fonction', title: 'Tableau de valeurs, formule et représentation graphique' },
          { id: 'fonctions-lineaires', title: 'Les fonctions linéaires et la proportionnalité' },
          { id: 'fonctions-affines', title: 'Les fonctions affines' },
        ],
      },
      {
        id: 'statistiques-probabilites',
        title: 'Statistiques et probabilités',
        programme: 'Organisation et gestion de données, fonctions : interpréter, représenter et traiter des données ; comprendre et utiliser des notions élémentaires de probabilités',
        lessons: [
          { id: 'indicateurs-statistiques', title: 'Moyenne, médiane et étendue : résumer une série' },
          { id: 'calculer-probabilite', title: 'Calculer une probabilité' },
          { id: 'experiences-deux-epreuves', title: 'Expériences à deux épreuves, fréquences et probabilités' },
        ],
      },
      {
        id: 'transformations',
        title: 'Transformations du plan',
        programme: 'Espace et géométrie : utiliser les notions de géométrie plane pour démontrer (transformations)',
        lessons: [
          { id: 'translations-rotations', title: 'Translations et rotations' },
          { id: 'homotheties', title: 'Les homothéties' },
        ],
      },
      {
        id: 'espace-grandeurs',
        title: 'Géométrie dans l\'espace et grandeurs',
        programme: 'Espace et géométrie : représenter l\'espace ; Grandeurs et mesures : calculer avec des grandeurs mesurables',
        lessons: [
          { id: 'sphere-boule', title: 'La sphère et la boule : aire et volume' },
          { id: 'sections-solides', title: 'Sections de solides par un plan' },
          { id: 'reperage-sphere', title: 'Se repérer sur la sphère : latitude et longitude' },
          { id: 'agrandissement-reduction', title: 'Agrandissement et réduction : effet sur les longueurs, aires et volumes' },
        ],
      },
      {
        id: 'algorithmique',
        title: 'Algorithmique et programmation',
        programme: 'Algorithmique et programmation : écrire, mettre au point et exécuter un programme',
        lessons: [
          { id: 'variables-boucles-conditions', title: 'Variables, boucles et instructions conditionnelles' },
          { id: 'sous-programmes', title: 'Décomposer un problème en sous-programmes' },
        ],
      },
      {
        id: 'preparer-brevet',
        title: 'Préparer le brevet',
        programme: 'Diplôme national du brevet : épreuve de mathématiques',
        lessons: [
          { id: 'automatismes', title: 'Les automatismes sans calculatrice' },
          { id: 'resoudre-probleme', title: 'Résoudre un problème et rédiger sa démarche' },
          { id: 'sujet-temps-limite', title: 'S\'entraîner sur un sujet complet en temps limité' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* HISTOIRE-GÉOGRAPHIE ET EMC                                           */
  /* ------------------------------------------------------------------ */
  {
    id: 'hg-emc-3e',
    subject: 'hg-emc',
    grade: '3e',
    intro: 'Vous saurez expliquer les guerres, les transformations du monde et de la France depuis 1914, analyser les dynamiques du territoire français et européen et comprendre comment faire vivre la démocratie, pour réussir l\'épreuve d\'histoire-géographie et EMC du brevet.',
    reference: 'Programme d\'histoire-géographie du cycle 4, BO n°31 du 30 juillet 2020 ; programme d\'enseignement moral et civique, BO n°24 du 13 juin 2024 (en vigueur en 3e à la rentrée 2026)',
    chapters: [
      {
        id: 'guerres-totales',
        title: 'L\'Europe, un théâtre majeur des guerres totales (1914-1945)',
        programme: 'Histoire, thème 1 : L\'Europe, un théâtre majeur des guerres totales (1914-1945)',
        lessons: [
          { id: 'premiere-guerre-mondiale', title: 'Civils et militaires dans la Première Guerre mondiale' },
          { id: 'democraties-totalitarismes', title: 'Démocraties fragilisées et expériences totalitaires dans l\'entre-deux-guerres' },
          { id: 'guerre-aneantissement', title: 'La Deuxième Guerre mondiale, une guerre d\'anéantissement' },
          { id: 'france-vichy-resistance', title: 'La France défaite et occupée : Vichy, collaboration, Résistance' },
        ],
      },
      {
        id: 'dynamiques-territoriales',
        title: 'Dynamiques territoriales de la France contemporaine',
        programme: 'Géographie, thème 1 : Dynamiques territoriales de la France contemporaine',
        lessons: [
          { id: 'aires-urbaines', title: 'Les aires urbaines, une nouvelle géographie d\'une France mondialisée' },
          { id: 'espaces-productifs', title: 'Les espaces productifs et leurs évolutions' },
          { id: 'espaces-faible-densite', title: 'Les espaces de faible densité et leurs atouts' },
        ],
      },
      {
        id: 'regles-jeu-democratique',
        title: 'Les règles du jeu démocratique',
        programme: 'Enseignement moral et civique, « Faire vivre la démocratie » : les règles du jeu démocratique',
        lessons: [
          { id: 'constitution-etat-droit', title: 'La Constitution et l\'État de droit' },
          { id: 'separation-pouvoirs', title: 'La séparation des pouvoirs et les institutions de la Ve République' },
          { id: 'elections-pluralisme', title: 'Voter : élections, pluralisme et place de l\'opposition' },
        ],
      },
      {
        id: 'monde-depuis-1945',
        title: 'Le monde depuis 1945',
        programme: 'Histoire, thème 2 : Le monde depuis 1945',
        lessons: [
          { id: 'independances', title: 'Indépendances et construction de nouveaux États' },
          { id: 'guerre-froide', title: 'Un monde bipolaire au temps de la guerre froide' },
          { id: 'projet-europeen', title: 'Affirmation et mise en œuvre du projet européen' },
          { id: 'monde-apres-1989', title: 'Enjeux et conflits dans le monde après 1989' },
        ],
      },
      {
        id: 'amenager-territoire',
        title: 'Pourquoi et comment aménager le territoire ?',
        programme: 'Géographie, thème 2 : Pourquoi et comment aménager le territoire ?',
        lessons: [
          { id: 'amenager-inegalites', title: 'Aménager pour répondre aux inégalités entre territoires' },
          { id: 'territoires-ultramarins', title: 'Les territoires ultramarins français : une problématique spécifique' },
        ],
      },
      {
        id: 'opinion',
        title: 'L\'opinion : s\'informer et débattre',
        programme: 'Enseignement moral et civique, « Faire vivre la démocratie » : l\'opinion',
        lessons: [
          { id: 'medias-reseaux-sociaux', title: 'Médias et réseaux sociaux : comment se forme l\'opinion' },
          { id: 'sondages-opinion-publique', title: 'Les sondages et l\'opinion publique' },
          { id: 'desinformation-ia', title: 'Désinformation, complotisme et intelligence artificielle' },
        ],
      },
      {
        id: 'republique-repensee',
        title: 'Françaises et Français dans une République repensée',
        programme: 'Histoire, thème 3 : Françaises et Français dans une République repensée',
        lessons: [
          { id: 'refonder-republique', title: '1944-1947 : refonder la République, redéfinir la démocratie' },
          { id: 'cinquieme-republique', title: 'La Ve République : de la République gaullienne à la cohabitation' },
          { id: 'societe-1950-1980', title: 'Femmes et hommes dans la société des années 1950 aux années 1980' },
        ],
      },
      {
        id: 'france-union-europeenne',
        title: 'La France et l\'Union européenne',
        programme: 'Géographie, thème 3 : La France et l\'Union européenne',
        lessons: [
          { id: 'ue-territoire', title: 'L\'Union européenne, un territoire de référence et d\'appartenance' },
          { id: 'france-europe-monde', title: 'La France et l\'Europe dans le monde' },
        ],
      },
      {
        id: 'engagement-collectif',
        title: 'L\'engagement collectif',
        programme: 'Enseignement moral et civique, « Faire vivre la démocratie » : l\'engagement collectif',
        lessons: [
          { id: 'partis-syndicats-associations', title: 'S\'engager : partis politiques, syndicats et associations' },
          { id: 'engagement-college', title: 'S\'engager au collège : délégués et conseil de vie collégienne' },
          { id: 'servir-interet-general', title: 'Servir l\'intérêt général : engagement civique et institutions' },
        ],
      },
      {
        id: 'preparer-brevet',
        title: 'Préparer le brevet',
        programme: 'Diplôme national du brevet : épreuve d\'histoire-géographie et d\'enseignement moral et civique',
        lessons: [
          { id: 'analyser-document', title: 'Analyser un document en histoire et en géographie' },
          { id: 'developpement-construit', title: 'Rédiger un développement construit' },
          { id: 'reperes-croquis', title: 'Maîtriser les repères et compléter un croquis' },
          { id: 'situation-pratique-emc', title: 'Répondre à une situation pratique en EMC' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* PHYSIQUE-CHIMIE                                                      */
  /* ------------------------------------------------------------------ */
  {
    id: 'physique-chimie-3e',
    subject: 'physique-chimie',
    grade: '3e',
    intro: 'Vous saurez décrire la structure de la matière, interpréter des transformations chimiques, modéliser des mouvements et des interactions, raisonner sur l\'énergie et les signaux, et résoudre un exercice de physique-chimie du brevet.',
    reference: 'Programme de physique-chimie du cycle 4, BO n°31 du 30 juillet 2020',
    chapters: [
      {
        id: 'atomes-univers',
        title: 'Des atomes à l\'Univers',
        programme: 'Organisation et transformations de la matière : décrire l\'organisation de la matière dans l\'Univers',
        lessons: [
          { id: 'structure-atome', title: 'La structure de l\'atome : noyau et électrons' },
          { id: 'elements-tableau-periodique', title: 'Les éléments chimiques et le tableau périodique' },
          { id: 'matiere-univers', title: 'La matière dans l\'Univers : formation des éléments' },
        ],
      },
      {
        id: 'ions-ph',
        title: 'Ions, acides et bases',
        programme: 'Organisation et transformations de la matière : décrire et expliquer des transformations chimiques (pH, ions H+ et HO-, tests caractéristiques)',
        lessons: [
          { id: 'ions', title: 'Les ions : des atomes qui ont gagné ou perdu des électrons' },
          { id: 'tests-ions', title: 'Identifier des ions par des tests chimiques' },
          { id: 'ph-acides-bases', title: 'Le pH : solutions acides, neutres et basiques' },
        ],
      },
      {
        id: 'transformations-chimiques',
        title: 'Les transformations chimiques',
        programme: 'Organisation et transformations de la matière : décrire et expliquer des transformations chimiques',
        lessons: [
          { id: 'acides-metaux', title: 'La réaction entre un acide et un métal' },
          { id: 'reaction-acide-base', title: 'La réaction entre un acide et une base' },
          { id: 'equation-reaction', title: 'Écrire et ajuster une équation de réaction' },
          { id: 'conservation-masse', title: 'La conservation de la masse et des atomes' },
        ],
      },
      {
        id: 'mouvements',
        title: 'Décrire un mouvement',
        programme: 'Mouvement et interactions : caractériser un mouvement',
        lessons: [
          { id: 'referentiel-trajectoire', title: 'Référentiel, trajectoire et nature du mouvement' },
          { id: 'vitesse', title: 'Calculer et exploiter une vitesse' },
          { id: 'chronophotographie', title: 'Mouvements uniformes et variés : lire une chronophotographie' },
        ],
      },
      {
        id: 'forces-interactions',
        title: 'Forces et interactions',
        programme: 'Mouvement et interactions : modéliser une interaction par une force caractérisée par un point d\'application, une direction, un sens et une valeur',
        lessons: [
          { id: 'actions-mecaniques', title: 'Actions mécaniques et diagramme objet-interaction' },
          { id: 'modeliser-force', title: 'Modéliser une action par une force' },
          { id: 'gravitation', title: 'L\'interaction gravitationnelle' },
          { id: 'poids-masse', title: 'Le poids et la masse : P = m × g' },
        ],
      },
      {
        id: 'energie',
        title: 'L\'énergie et ses conversions',
        programme: 'L\'énergie et ses conversions : identifier les sources, les transferts, les conversions et les formes d\'énergie ; utiliser la conservation de l\'énergie',
        lessons: [
          { id: 'formes-conversions', title: 'Sources, formes et conversions d\'énergie' },
          { id: 'energie-cinetique', title: 'L\'énergie cinétique et la sécurité routière' },
          { id: 'conservation-energie', title: 'Énergie de position et conservation de l\'énergie' },
        ],
      },
      {
        id: 'electricite',
        title: 'Puissance et énergie électriques',
        programme: 'L\'énergie et ses conversions : réaliser des circuits électriques simples et exploiter les lois de l\'électricité',
        lessons: [
          { id: 'loi-ohm', title: 'La loi d\'Ohm et la résistance' },
          { id: 'puissance-electrique', title: 'La puissance électrique : P = U × I' },
          { id: 'energie-electrique', title: 'L\'énergie électrique : E = P × t et la facture' },
        ],
      },
      {
        id: 'signaux',
        title: 'Signaux lumineux et sonores',
        programme: 'Des signaux pour observer et communiquer',
        lessons: [
          { id: 'signaux-lumineux', title: 'La lumière : propagation, vitesse et année-lumière' },
          { id: 'signaux-sonores', title: 'Le son : propagation, vitesse et fréquence' },
          { id: 'communiquer-signaux', title: 'Émettre et recevoir des signaux pour communiquer' },
        ],
      },
      {
        id: 'preparer-brevet',
        title: 'Préparer le brevet',
        programme: 'Diplôme national du brevet : épreuve de sciences (physique-chimie)',
        lessons: [
          { id: 'exploiter-documents', title: 'Extraire et exploiter des informations de documents' },
          { id: 'rediger-calcul', title: 'Rédiger un calcul : formule, conversion et unité' },
          { id: 'temps-limite', title: 'Résoudre un exercice de sciences en temps limité' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* SVT                                                                  */
  /* ------------------------------------------------------------------ */
  {
    id: 'svt-3e',
    subject: 'svt',
    grade: '3e',
    intro: 'Vous saurez expliquer comment l\'information génétique se transmet, comment le vivant évolue, comment l\'organisme se défend face aux micro-organismes et comment les activités humaines agissent sur la planète, et résoudre un exercice de SVT du brevet.',
    reference: 'Programme de sciences de la vie et de la Terre du cycle 4, BO n°31 du 30 juillet 2020',
    chapters: [
      {
        id: 'information-genetique',
        title: 'L\'information génétique',
        programme: 'Le vivant et son évolution : la diversité génétique des individus',
        lessons: [
          { id: 'chromosomes-adn', title: 'Chromosomes, ADN et gènes' },
          { id: 'caryotype', title: 'Le caryotype humain' },
          { id: 'genes-alleles-caracteres', title: 'Gènes, allèles et caractères' },
        ],
      },
      {
        id: 'transmission-genetique',
        title: 'La transmission de l\'information génétique',
        programme: 'Le vivant et son évolution : la diversité génétique des individus',
        lessons: [
          { id: 'mitose', title: 'La division cellulaire : conserver l\'information génétique' },
          { id: 'meiose-fecondation', title: 'Méiose et fécondation : l\'unicité de chaque individu' },
          { id: 'mutations', title: 'Les mutations, source de diversité' },
        ],
      },
      {
        id: 'evolution',
        title: 'L\'évolution des êtres vivants',
        programme: 'Le vivant et son évolution : la classification du vivant, la biodiversité et l\'évolution des êtres vivants',
        lessons: [
          { id: 'parentes-classification', title: 'Relations de parenté et classification du vivant' },
          { id: 'selection-naturelle', title: 'La sélection naturelle et la dérive génétique' },
          { id: 'biodiversite-evolution', title: 'La biodiversité, résultat de l\'évolution' },
        ],
      },
      {
        id: 'monde-microbien',
        title: 'Le monde microbien et nous',
        programme: 'Le corps humain et la santé : relier le monde microbien hébergé par notre organisme et son fonctionnement',
        lessons: [
          { id: 'micro-organismes', title: 'Micro-organismes : bactéries, virus et microbiote' },
          { id: 'contamination-infection', title: 'Contamination et infection' },
          { id: 'hygiene-asepsie', title: 'Se protéger : hygiène, asepsie et antiseptiques' },
        ],
      },
      {
        id: 'defenses-organisme',
        title: 'Les défenses de l\'organisme',
        programme: 'Le corps humain et la santé : expliquer quelques processus biologiques impliqués dans le fonctionnement de l\'organisme (le système immunitaire)',
        lessons: [
          { id: 'reaction-inflammatoire', title: 'La réaction immunitaire rapide : inflammation et phagocytose' },
          { id: 'lymphocytes-anticorps', title: 'Les lymphocytes et les anticorps' },
          { id: 'vaccination', title: 'La vaccination et la mémoire immunitaire' },
          { id: 'antibiotiques-resistance', title: 'Les antibiotiques et la résistance bactérienne' },
        ],
      },
      {
        id: 'sante-comportements',
        title: 'Santé et comportements responsables',
        programme: 'Le corps humain et la santé : relier la connaissance de ces processus biologiques aux enjeux liés aux comportements responsables individuels et collectifs en matière de santé',
        lessons: [
          { id: 'alimentation-microbiote', title: 'Alimentation, microbiote et santé' },
          { id: 'sante-publique', title: 'Santé individuelle et santé publique : prévenir les épidémies' },
        ],
      },
      {
        id: 'climat-meteo',
        title: 'Météorologie et climat',
        programme: 'La planète Terre, l\'environnement et l\'action humaine : expliquer quelques phénomènes météorologiques et climatiques',
        lessons: [
          { id: 'meteo-climat', title: 'Distinguer météorologie et climat' },
          { id: 'climats-passes', title: 'Les changements climatiques du passé' },
          { id: 'changement-climatique', title: 'Le changement climatique actuel et ses causes' },
        ],
      },
      {
        id: 'activites-humaines',
        title: 'Activités humaines et environnement',
        programme: 'La planète Terre, l\'environnement et l\'action humaine : identifier les principaux impacts de l\'action humaine, bénéfices et risques, à la surface de la planète Terre',
        lessons: [
          { id: 'ressources-naturelles', title: 'L\'exploitation des ressources naturelles' },
          { id: 'ecosystemes-impacts', title: 'Les écosystèmes face aux activités humaines' },
          { id: 'risques-naturels', title: 'Les risques naturels et leur prévention' },
          { id: 'gestion-durable', title: 'Agir pour une gestion durable de l\'environnement' },
        ],
      },
      {
        id: 'preparer-brevet',
        title: 'Préparer le brevet',
        programme: 'Diplôme national du brevet : épreuve de sciences (sciences de la vie et de la Terre)',
        lessons: [
          { id: 'exploiter-documents-svt', title: 'Exploiter des documents scientifiques : graphiques, tableaux, schémas' },
          { id: 'reponse-argumentee', title: 'Construire une réponse argumentée' },
          { id: 'temps-limite-svt', title: 'Résoudre un exercice de sciences en temps limité' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* TECHNOLOGIE                                                          */
  /* ------------------------------------------------------------------ */
  {
    id: 'technologie-3e',
    subject: 'technologie',
    grade: '3e',
    intro: 'Vous saurez analyser l\'usage et le fonctionnement d\'un objet ou d\'un système technique, décrire ses chaînes d\'information et d\'énergie, le programmer, conduire un projet de conception et résoudre un exercice de technologie du brevet.',
    reference: 'Programme de technologie du cycle 4, BO n°9 du 29 février 2024 (en vigueur en 3e à la rentrée 2026)',
    chapters: [
      {
        id: 'objets-usages',
        title: 'Objets techniques, usages et société',
        programme: 'Les objets et les systèmes techniques : leurs usages et leurs interactions à découvrir et à analyser',
        lessons: [
          { id: 'besoin-fonction-usage', title: 'Besoin, fonction d\'usage et contraintes' },
          { id: 'cycle-vie-impact', title: 'Cycle de vie, impact environnemental et réparabilité' },
          { id: 'evolution-objets', title: 'L\'évolution des objets et leurs effets sur la société' },
        ],
      },
      {
        id: 'chaines-information-energie',
        title: 'Chaîne d\'information et chaîne d\'énergie',
        programme: 'Structure, fonctionnement, comportement : des objets et des systèmes techniques à comprendre',
        lessons: [
          { id: 'chaine-information', title: 'La chaîne d\'information : acquérir, traiter, communiquer' },
          { id: 'chaine-energie', title: 'La chaîne d\'énergie : alimenter, distribuer, convertir, transmettre' },
          { id: 'capteurs-actionneurs', title: 'Capteurs et actionneurs' },
        ],
      },
      {
        id: 'modeliser-simuler',
        title: 'Modéliser et simuler',
        programme: 'Structure, fonctionnement, comportement : des objets et des systèmes techniques à comprendre',
        lessons: [
          { id: 'modele-3d', title: 'Représenter un objet : croquis, schéma et modèle 3D' },
          { id: 'simuler-comportement', title: 'Simuler un comportement et comparer aux mesures' },
        ],
      },
      {
        id: 'informatique-programmation',
        title: 'Informatique et programmation',
        programme: 'Informatique et programmation (apprentissages associés aux trois thèmes du programme)',
        lessons: [
          { id: 'algorithme-programme', title: 'De l\'algorithme au programme' },
          { id: 'programmer-systeme', title: 'Programmer un système avec capteurs et actionneurs' },
          { id: 'reseaux-donnees', title: 'Réseaux informatiques et transmission des données' },
        ],
      },
      {
        id: 'concevoir-realiser',
        title: 'Concevoir et réaliser un projet',
        programme: 'Création, conception, réalisation, innovations',
        lessons: [
          { id: 'demarche-projet', title: 'La démarche de projet et le cahier des charges' },
          { id: 'design-innovation', title: 'Design, créativité et innovation' },
          { id: 'prototyper', title: 'Réaliser et tester un prototype' },
        ],
      },
      {
        id: 'preparer-brevet',
        title: 'Préparer le brevet',
        programme: 'Diplôme national du brevet : épreuve de sciences (technologie)',
        lessons: [
          { id: 'analyser-systeme-documents', title: 'Analyser un système technique à partir de documents' },
          { id: 'lire-completer-programme', title: 'Lire et compléter un programme ou un algorithme' },
          { id: 'temps-limite-techno', title: 'Résoudre un exercice de technologie en temps limité' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* ANGLAIS                                                              */
  /* ------------------------------------------------------------------ */
  {
    id: 'anglais-3e',
    subject: 'anglais',
    grade: '3e',
    intro: 'Vous saurez comprendre, raconter, décrire et argumenter en anglais, à l\'oral comme à l\'écrit, au niveau A2 en route vers le B1, en vous appuyant sur des repères culturels du monde anglophone.',
    reference: 'Programme de langues vivantes étrangères et régionales du cycle 4, BO n°31 du 30 juillet 2020',
    chapters: [
      {
        id: 'school-life',
        title: 'École et société : « School life »',
        programme: 'Culture et lexique : École et société',
        lessons: [
          { id: 'school-systems', title: 'Les systèmes scolaires britannique et américain' },
          { id: 'present-perfect', title: 'Le present perfect : bilan et expérience' },
          { id: 'talk-about-future', title: 'Parler de son avenir : « will », « going to » et projets' },
        ],
      },
      {
        id: 'standing-up',
        title: 'École et société : « Standing up for your rights »',
        programme: 'Culture et lexique : École et société',
        lessons: [
          { id: 'civil-rights', title: 'Le mouvement des droits civiques aux États-Unis' },
          { id: 'past-simple-continuous', title: 'Raconter au passé : past simple et past continuous' },
          { id: 'express-opinion', title: 'Exprimer et justifier son opinion' },
        ],
      },
      {
        id: 'leaving-home',
        title: 'Voyages et migrations : « Leaving home »',
        programme: 'Culture et lexique : Voyages et migrations',
        lessons: [
          { id: 'ellis-island', title: 'Ellis Island et l\'immigration vers les États-Unis' },
          { id: 'past-perfect', title: 'Le past perfect : l\'antériorité dans le récit' },
          { id: 'used-to', title: 'Parler d\'habitudes passées avec « used to »' },
        ],
      },
      {
        id: 'around-the-world',
        title: 'Voyages et migrations : « Around the world »',
        programme: 'Culture et lexique : Voyages et migrations',
        lessons: [
          { id: 'travel-plans', title: 'Organiser un voyage : réserver, demander son chemin' },
          { id: 'describe-places', title: 'Décrire un lieu : comparatifs et superlatifs' },
          { id: 'conditional', title: 'Faire des hypothèses : « if » et le conditionnel' },
        ],
      },
      {
        id: 'english-speaking-world',
        title: 'Rencontres avec d\'autres cultures : « The English-speaking world »',
        programme: 'Culture et lexique : Rencontres avec d\'autres cultures',
        lessons: [
          { id: 'english-speaking-countries', title: 'Les pays anglophones dans le monde' },
          { id: 'stereotypes', title: 'Clichés et stéréotypes : dépasser les idées reçues' },
          { id: 'relative-clauses', title: 'Les propositions relatives : « who », « which », « that »' },
        ],
      },
      {
        id: 'heroes-legends',
        title: 'Rencontres avec d\'autres cultures : « Heroes and legends »',
        programme: 'Culture et lexique : Rencontres avec d\'autres cultures',
        lessons: [
          { id: 'real-heroes', title: 'Héros réels et héros de fiction' },
          { id: 'modals', title: 'Les modaux : capacité, obligation, possibilité' },
          { id: 'passive-voice', title: 'La voix passive' },
        ],
      },
      {
        id: 'media-communication',
        title: 'Langages : « Media and communication »',
        programme: 'Culture et lexique : Langages',
        lessons: [
          { id: 'media-news', title: 'Les médias et l\'information : lire un article de presse' },
          { id: 'social-networks', title: 'Les réseaux sociaux et la communication en ligne' },
          { id: 'reported-speech', title: 'Rapporter des paroles : le discours indirect' },
        ],
      },
      {
        id: 'art-expression',
        title: 'Langages : « Art and expression »',
        programme: 'Culture et lexique : Langages',
        lessons: [
          { id: 'protest-songs', title: 'Musique et chansons engagées' },
          { id: 'english-accents', title: 'Les accents et les variétés de l\'anglais' },
          { id: 'describe-picture', title: 'Décrire et commenter une image' },
        ],
      },
      {
        id: 'communication-skills',
        title: 'Méthodes : comprendre et s\'exprimer',
        programme: 'Activités langagières : écouter et comprendre, lire, parler en continu, écrire, réagir et dialoguer',
        lessons: [
          { id: 'listening-strategies', title: 'Comprendre un document audio ou vidéo' },
          { id: 'oral-presentation', title: 'Prendre la parole en continu : présenter un projet' },
          { id: 'writing-story', title: 'Écrire un récit ou un courriel structuré' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* ESPAGNOL (langue vivante 2)                                          */
  /* ------------------------------------------------------------------ */
  {
    id: 'espagnol-3e',
    subject: 'espagnol',
    grade: '3e',
    intro: 'Vous saurez comprendre et produire en espagnol des messages simples et structurés au niveau A2, raconter au passé, parler de vos projets, exprimer vos goûts et vos opinions et situer des repères culturels du monde hispanophone.',
    reference: 'Programme de langues vivantes étrangères et régionales du cycle 4, BO n°31 du 30 juillet 2020',
    chapters: [
      {
        id: 'vida-jovenes',
        title: 'École et société : « La vida de los jóvenes »',
        programme: 'Culture et lexique : École et société',
        lessons: [
          { id: 'jovenes-mundo-hispano', title: 'La vie des jeunes en Espagne et en Amérique latine' },
          { id: 'preterito-perfecto', title: 'Le passé composé : le « pretérito perfecto »' },
          { id: 'obligacion-consejo', title: 'Exprimer l\'obligation et donner un conseil' },
        ],
      },
      {
        id: 'emigrar',
        title: 'Voyages et migrations : « Emigrar »',
        programme: 'Culture et lexique : Voyages et migrations',
        lessons: [
          { id: 'migraciones', title: 'Les migrations dans le monde hispanique' },
          { id: 'preterito-indefinido', title: 'Raconter au passé : le « pretérito indefinido »' },
          { id: 'imperfecto', title: 'Décrire au passé : l\'imparfait' },
        ],
      },
      {
        id: 'fiestas-tradiciones',
        title: 'Rencontres avec d\'autres cultures : « Fiestas y tradiciones »',
        programme: 'Culture et lexique : Rencontres avec d\'autres cultures',
        lessons: [
          { id: 'fiestas-hispanas', title: 'Fêtes et traditions hispaniques' },
          { id: 'civilizaciones-precolombinas', title: 'Les civilisations précolombiennes' },
          { id: 'futuro', title: 'Parler de l\'avenir : le futur' },
        ],
      },
      {
        id: 'arte-expresion',
        title: 'Langages : « Arte y expresión »',
        programme: 'Culture et lexique : Langages',
        lessons: [
          { id: 'arte-hispano', title: 'Les artistes du monde hispanique : décrire un tableau' },
          { id: 'gustos-opiniones', title: 'Exprimer ses goûts et son opinion' },
          { id: 'imperativo', title: 'Donner un ordre ou une consigne : l\'impératif' },
        ],
      },
      {
        id: 'comunicar',
        title: 'Méthodes : comprendre et s\'exprimer',
        programme: 'Activités langagières : écouter et comprendre, lire, parler en continu, écrire, réagir et dialoguer',
        lessons: [
          { id: 'comprender-oral', title: 'Comprendre un document audio ou vidéo' },
          { id: 'hablar-continuo', title: 'Prendre la parole en continu' },
          { id: 'escribir-mensaje', title: 'Écrire un message ou un court récit' },
        ],
      },
    ],
  },
]
