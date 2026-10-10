// LES PLANS DE LA CINQUIÈME · un plan par matière de GRADE_SUBJECTS['5e'], dans
// cet ordre. Programmes en vigueur en 2026-2027 :
// - français et mathématiques : nouveaux programmes du cycle 4 (arrêté du
//   18 février 2026, BO n°10 du 5 mars 2026), appliqués en 5e dès la rentrée 2026 ;
// - anglais et espagnol : nouveaux programmes de langues vivantes étrangères
//   (arrêté du 5 mai 2025, BO n°22 du 29 mai 2025), appliqués en 5e à la rentrée 2026 ;
// - EMC : programme du BO n°24 du 13 juin 2024 ; technologie : programme du
//   cycle 4 du BO n°9 du 29 février 2024 ;
// - histoire-géographie, physique-chimie, SVT : programmes du cycle 4 de 2015,
//   dans leur version consolidée au BO n°31 du 30 juillet 2020.
import type { UnitPlan } from '../types'

export const PLANS: UnitPlan[] = [
  /* ------------------------------------------------------------------ */
  /* FRANÇAIS                                                             */
  /* ------------------------------------------------------------------ */
  {
    id: 'francais-5e',
    subject: 'francais',
    grade: '5e',
    intro:
      'Vous saurez lire et analyser des romans, des poèmes, des pièces de théâtre et des récits brefs, raconter et argumenter par écrit, et maîtriser les temps, les modes et la construction de la phrase.',
    reference:
      'Programme de français du cycle 4, arrêté du 18 février 2026, BO n°10 du 5 mars 2026 (appliqué en 5e à la rentrée 2026)',
    chapters: [
      {
        id: 'destins-romanesques',
        title: 'Devenir héroïne ou héros : destins romanesques',
        programme:
          'Éprouver, expérimenter : la découverte de soi, d\'autrui et du monde. Devenir héroïne/héros : destins romanesques (récit, fiction)',
        lessons: [
          { id: 'heros-de-roman', title: 'Qu\'est-ce qu\'un héros de roman ?' },
          { id: 'quete-et-epreuves', title: 'La quête du héros : épreuves et initiation' },
          { id: 'heroines-de-roman', title: 'Des héroïnes qui prennent leur destin en main' },
          { id: 'raconter-epreuve', title: 'Écrire la suite des aventures d\'un héros' },
        ],
      },
      {
        id: 'temps-du-recit',
        title: 'Le verbe : les temps du récit',
        programme: 'Étude de la langue : le verbe, valeurs temporelles et aspectuelles des temps',
        lessons: [
          { id: 'passe-simple', title: 'Conjuguer le passé simple' },
          { id: 'imparfait-passe-simple', title: 'Imparfait ou passé simple : premier plan et arrière-plan' },
          { id: 'passe-compose-plus-que-parfait', title: 'Le passé composé et le plus-que-parfait dans un récit' },
        ],
      },
      {
        id: 'voyager-en-poesie',
        title: 'Voyager en poésie',
        programme:
          'Éprouver, expérimenter : la découverte de soi, d\'autrui et du monde. Voyager en poésie : « Du monde entier au cœur du monde » (poésie)',
        lessons: [
          { id: 'poesie-invitation-voyage', title: 'La poésie, une invitation au voyage' },
          { id: 'vers-rimes-strophes', title: 'Lire un poème : vers, rimes et strophes' },
          { id: 'images-poetiques', title: 'Les images poétiques : comparaison et métaphore' },
          { id: 'ecrire-poeme-voyage', title: 'Écrire un poème du voyage' },
        ],
      },
      {
        id: 'phrase-complexe',
        title: 'La phrase simple et la phrase complexe',
        programme: 'Étude de la langue : la phrase, propositions principales et subordonnées',
        lessons: [
          { id: 'phrase-simple-complexe', title: 'Phrase simple, phrase complexe : repérer les propositions' },
          { id: 'juxtaposition-coordination', title: 'Juxtaposer, coordonner, subordonner' },
          { id: 'subordonnee-relative', title: 'La proposition subordonnée relative et son antécédent' },
        ],
      },
      {
        id: 'theatre-sens-dessus-dessous',
        title: 'Expérimenter et jouer au théâtre',
        programme:
          'Éprouver, expérimenter : la découverte de soi, d\'autrui et du monde. Expérimenter et jouer au théâtre : la société sens dessus dessous (théâtre)',
        lessons: [
          { id: 'lire-texte-theatre', title: 'Lire un texte de théâtre : répliques et didascalies' },
          { id: 'ressorts-comiques', title: 'Les ressorts du comique : gestes, mots, situations' },
          { id: 'maitres-et-valets', title: 'Maîtres et valets : une société renversée' },
          { id: 'jouer-une-scene', title: 'Mettre en voix et jouer une scène' },
        ],
      },
      {
        id: 'fonctions-phrase',
        title: 'Les fonctions dans la phrase',
        programme: 'Étude de la langue : les fonctions syntaxiques et le groupe nominal',
        lessons: [
          { id: 'sujet-attribut', title: 'Le sujet et l\'attribut du sujet' },
          { id: 'complements-du-verbe', title: 'Les compléments du verbe : COD et COI' },
          { id: 'complements-circonstanciels', title: 'Les compléments circonstanciels et les expansions du nom' },
        ],
      },
      {
        id: 'plaire-et-instruire',
        title: 'Des histoires pour plaire et instruire',
        programme:
          'Éprouver, expérimenter : la découverte de soi, d\'autrui et du monde. Imaginer, sentir, raisonner : des histoires pour plaire et instruire (récit, fiction)',
        lessons: [
          { id: 'la-fable', title: 'La fable : un récit bref qui porte une morale' },
          { id: 'recit-qui-fait-reflechir', title: 'Un récit qui fait réfléchir : imaginer pour raisonner' },
          { id: 'ecrire-un-apologue', title: 'Écrire une histoire qui défend une leçon' },
        ],
      },
      {
        id: 'modes-et-voix',
        title: 'Les modes et les voix du verbe',
        programme: 'Étude de la langue : le verbe, modes et voix',
        lessons: [
          { id: 'imperatif', title: 'L\'impératif : donner un ordre ou un conseil' },
          { id: 'subjonctif-present', title: 'Le subjonctif présent et ses emplois' },
          { id: 'voix-active-passive', title: 'La voix active et la voix passive' },
        ],
      },
      {
        id: 'orthographe-accords',
        title: 'L\'orthographe grammaticale',
        programme: 'Étude de la langue : orthographe grammaticale et lexicale',
        lessons: [
          { id: 'accord-sujet-verbe', title: 'L\'accord du verbe avec son sujet' },
          { id: 'accord-participe-passe', title: 'L\'accord du participe passé avec être et avoir' },
          { id: 'homophones-dictee', title: 'Les homophones grammaticaux et la relecture d\'une dictée' },
        ],
      },
      {
        id: 'lexique-etymologie',
        title: 'Le lexique : former et comprendre les mots',
        programme: 'Étude de la langue : lexique, formation des mots et étymologie',
        lessons: [
          { id: 'formation-des-mots', title: 'Radical, préfixes et suffixes : la formation des mots' },
          { id: 'etymologie', title: 'Les racines latines et grecques' },
          { id: 'sens-propre-figure', title: 'Sens propre, sens figuré et niveaux de langue' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* MATHÉMATIQUES                                                        */
  /* ------------------------------------------------------------------ */
  {
    id: 'maths-5e',
    subject: 'maths',
    grade: '5e',
    intro:
      'Vous saurez enchaîner des calculs, opérer sur les nombres relatifs et les fractions, écrire vos premières expressions littérales, raisonner sur la proportionnalité, les données et les probabilités, et justifier des propriétés de géométrie.',
    reference:
      'Programme de mathématiques du cycle 4, arrêté du 18 février 2026, BO n°10 du 5 mars 2026 (appliqué en 5e à la rentrée 2026)',
    chapters: [
      {
        id: 'enchainer-calculs',
        title: 'Enchaîner des calculs',
        programme: 'Nombres et calculs : enchaînement d\'opérations et priorités opératoires',
        lessons: [
          { id: 'priorites-operatoires', title: 'Les priorités opératoires et les parenthèses' },
          { id: 'programme-de-calcul', title: 'Traduire un programme de calcul en une seule expression' },
          { id: 'multiples-diviseurs', title: 'Multiples, diviseurs et nombres premiers' },
        ],
      },
      {
        id: 'symetrie-centrale-angles',
        title: 'Symétrie centrale et angles',
        programme: 'Espace et géométrie : symétrie centrale, angles et parallélisme',
        lessons: [
          { id: 'construire-symetrique', title: 'Construire le symétrique d\'une figure par rapport à un point' },
          { id: 'proprietes-symetrie-centrale', title: 'Les propriétés de la symétrie centrale' },
          { id: 'angles-et-parallelisme', title: 'Angles alternes-internes, correspondants et droites parallèles' },
        ],
      },
      {
        id: 'nombres-relatifs',
        title: 'Les nombres relatifs',
        programme: 'Nombres et calculs : nombres relatifs, repérage',
        lessons: [
          { id: 'relatifs-droite-graduee', title: 'Les nombres relatifs sur une droite graduée' },
          { id: 'comparer-relatifs', title: 'Comparer et ranger des nombres relatifs' },
          { id: 'additionner-soustraire-relatifs', title: 'Additionner et soustraire des nombres relatifs' },
          { id: 'reperage-plan', title: 'Se repérer dans le plan : abscisse et ordonnée' },
        ],
      },
      {
        id: 'triangles',
        title: 'Les triangles',
        programme: 'Espace et géométrie : triangles, construction et justification',
        lessons: [
          { id: 'inegalite-triangulaire', title: 'L\'inégalité triangulaire et la construction des triangles' },
          { id: 'somme-angles-triangle', title: 'La somme des angles d\'un triangle' },
          { id: 'hauteurs-mediatrices', title: 'Hauteurs et médiatrices d\'un triangle' },
        ],
      },
      {
        id: 'fractions',
        title: 'Les fractions',
        programme: 'Nombres et calculs : fractions',
        lessons: [
          { id: 'fractions-egales', title: 'Fractions égales et simplification' },
          { id: 'comparer-fractions', title: 'Comparer des fractions' },
          { id: 'additionner-fractions', title: 'Additionner et soustraire des fractions, résoudre des problèmes' },
        ],
      },
      {
        id: 'proportionnalite-fonctions',
        title: 'Proportionnalité et dépendance entre grandeurs',
        programme: 'Proportionnalité, fonctions',
        lessons: [
          { id: 'reconnaitre-proportionnalite', title: 'Reconnaître une situation de proportionnalité, le coefficient' },
          { id: 'pourcentages-echelles', title: 'Appliquer un pourcentage, utiliser une échelle' },
          { id: 'en-fonction-de', title: 'Une grandeur en fonction d\'une autre : tableaux de valeurs' },
          { id: 'representation-graphique', title: 'Représenter et lire un graphique' },
        ],
      },
      {
        id: 'parallelogrammes',
        title: 'Les parallélogrammes',
        programme: 'Espace et géométrie : parallélogrammes',
        lessons: [
          { id: 'proprietes-parallelogramme', title: 'Le parallélogramme et ses propriétés' },
          { id: 'parallelogrammes-particuliers', title: 'Rectangle, losange, carré : les parallélogrammes particuliers' },
        ],
      },
      {
        id: 'calcul-litteral',
        title: 'Premiers pas en calcul littéral',
        programme: 'Nombres et calculs : calcul littéral, puissances',
        lessons: [
          { id: 'expressions-litterales', title: 'Écrire une expression littérale' },
          { id: 'substituer-tester', title: 'Calculer une expression, tester une égalité' },
          { id: 'carres-et-cubes', title: 'Le carré et le cube d\'un nombre' },
        ],
      },
      {
        id: 'pensee-informatique',
        title: 'Programmer avec des blocs',
        programme: 'La pensée informatique',
        lessons: [
          { id: 'sequence-instructions', title: 'Séquencer des instructions dans un programme par blocs' },
          { id: 'boucles', title: 'Répéter des instructions avec une boucle' },
          { id: 'formules-en-blocs', title: 'Programmer une formule et lire des données' },
        ],
      },
      {
        id: 'statistiques',
        title: 'Organiser et représenter des données',
        programme: 'Organisation et gestion de données et probabilités : statistiques',
        lessons: [
          { id: 'effectifs-frequences', title: 'Effectifs et fréquences' },
          { id: 'diagrammes', title: 'Lire et construire des diagrammes' },
          { id: 'moyenne', title: 'Calculer et interpréter une moyenne' },
        ],
      },
      {
        id: 'aires-volumes',
        title: 'Aires, solides et volumes',
        programme: 'Espace et géométrie : aires, solides et volumes',
        lessons: [
          { id: 'aires-figures', title: 'Aire du parallélogramme, du triangle et du disque' },
          { id: 'prismes-cylindres', title: 'Prismes droits et cylindres : représentations et patrons' },
          { id: 'volumes', title: 'Calculer un volume, convertir les unités' },
        ],
      },
      {
        id: 'probabilites',
        title: 'Premières probabilités',
        programme: 'Organisation et gestion de données et probabilités : probabilités',
        lessons: [
          { id: 'vocabulaire-probabilites', title: 'Expérience aléatoire, issues et événements' },
          { id: 'calculer-probabilite', title: 'Calculer une probabilité dans une situation simple' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* HISTOIRE-GÉOGRAPHIE ET EMC                                           */
  /* ------------------------------------------------------------------ */
  {
    id: 'hg-emc-5e',
    subject: 'hg-emc',
    grade: '5e',
    intro:
      'Vous saurez raconter et expliquer l\'histoire du Moyen Âge et des débuts de l\'époque moderne, analyser les grands défis du développement, des ressources et des risques dans le monde, et agir pour l\'égalité et la solidarité.',
    reference:
      'Programme d\'histoire-géographie du cycle 4 (2015, version consolidée au BO n°31 du 30 juillet 2020) ; programme d\'enseignement moral et civique, BO n°24 du 13 juin 2024',
    chapters: [
      {
        id: 'byzance-carolingiens',
        title: 'Byzance et l\'Europe carolingienne',
        programme:
          'Histoire, Thème 1 : Chrétientés et islam (VIe-XIIIe siècles), des mondes en contact. Byzance et l\'Europe carolingienne',
        lessons: [
          { id: 'empire-byzantin', title: 'L\'Empire byzantin, héritier de Rome' },
          { id: 'charlemagne-empire', title: 'Charlemagne et l\'Empire carolingien' },
          { id: 'deux-chretientes', title: 'Deux chrétientés qui se séparent' },
        ],
      },
      {
        id: 'naissance-islam',
        title: 'De la naissance de l\'islam à la prise de Bagdad',
        programme:
          'Histoire, Thème 1 : Chrétientés et islam (VIe-XIIIe siècles), des mondes en contact. De la naissance de l\'islam à la prise de Bagdad par les Mongols : pouvoirs, sociétés, cultures',
        lessons: [
          { id: 'naissance-islam', title: 'Muhammad et la naissance de l\'islam' },
          { id: 'empires-musulmans', title: 'Les califats : un empire qui s\'étend' },
          { id: 'contacts-mediterranee', title: 'Bagdad, Cordoue et les contacts en Méditerranée' },
        ],
      },
      {
        id: 'croissance-demographique',
        title: 'La croissance démographique et l\'inégal développement',
        programme: 'Géographie, Thème 1 : La question démographique et l\'inégal développement',
        lessons: [
          { id: 'croissance-population', title: 'La croissance démographique et ses effets' },
          { id: 'richesse-pauvrete', title: 'La répartition de la richesse et de la pauvreté dans le monde' },
          { id: 'mesurer-developpement', title: 'Mesurer le développement : indicateurs et cartes' },
        ],
      },
      {
        id: 'seigneurs-paysans-villes',
        title: 'Seigneurs, paysans et villes au Moyen Âge',
        programme:
          'Histoire, Thème 2 : Société, Église et pouvoir politique dans l\'Occident féodal (XIe-XVe siècles). L\'ordre seigneurial ; l\'émergence d\'une nouvelle société urbaine',
        lessons: [
          { id: 'ordre-seigneurial', title: 'L\'ordre seigneurial : seigneurs et paysans' },
          { id: 'eglise-medievale', title: 'L\'Église au cœur de la société médiévale' },
          { id: 'societe-urbaine', title: 'L\'essor des villes et des marchands' },
        ],
      },
      {
        id: 'etat-monarchique',
        title: 'L\'affirmation de l\'État monarchique',
        programme:
          'Histoire, Thème 2 : Société, Église et pouvoir politique dans l\'Occident féodal (XIe-XVe siècles). L\'affirmation de l\'État monarchique dans le royaume des Capétiens et des Valois',
        lessons: [
          { id: 'rois-capetiens', title: 'Les Capétiens renforcent le pouvoir royal' },
          { id: 'guerre-de-cent-ans', title: 'La guerre de Cent Ans et l\'affirmation de l\'État' },
        ],
      },
      {
        id: 'egalite-discriminations',
        title: 'Agir pour l\'égalité et contre les discriminations',
        programme:
          'Enseignement moral et civique, classe de 5e : Égalité, fraternité et solidarité. Agir pour l\'égalité femmes-hommes et lutter contre les discriminations',
        lessons: [
          { id: 'egalite-femmes-hommes', title: 'L\'égalité entre les femmes et les hommes' },
          { id: 'reconnaitre-discriminations', title: 'Reconnaître une discrimination et ce que dit la loi' },
          { id: 'harcelement-haine-en-ligne', title: 'Lutter contre le harcèlement et la haine en ligne' },
        ],
      },
      {
        id: 'ressources-limitees',
        title: 'Des ressources limitées, à gérer et à renouveler',
        programme: 'Géographie, Thème 2 : Des ressources limitées, à gérer et à renouveler',
        lessons: [
          { id: 'energie-ressource', title: 'L\'énergie : une ressource à ménager' },
          { id: 'eau-ressource', title: 'L\'eau : une ressource inégalement répartie' },
          { id: 'nourrir-humanite', title: 'Nourrir une humanité en croissance' },
        ],
      },
      {
        id: 'monde-xvie-siecle',
        title: 'L\'Europe et le monde aux XVIe et XVIIe siècles',
        programme:
          'Histoire, Thème 3 : Transformations de l\'Europe et ouverture sur le monde aux XVIe et XVIIe siècles. Le monde au temps de Charles Quint et Soliman le Magnifique ; Humanisme, réformes et conflits religieux',
        lessons: [
          { id: 'grandes-decouvertes', title: 'Les grandes découvertes et les empires européens' },
          { id: 'charles-quint-soliman', title: 'Le monde au temps de Charles Quint et Soliman le Magnifique' },
          { id: 'humanisme-renaissance', title: 'L\'humanisme et la Renaissance' },
          { id: 'reformes-guerres-religion', title: 'Les réformes religieuses et les guerres de Religion' },
        ],
      },
      {
        id: 'prince-roi-absolu',
        title: 'Du prince de la Renaissance au roi absolu',
        programme:
          'Histoire, Thème 3 : Transformations de l\'Europe et ouverture sur le monde aux XVIe et XVIIe siècles. Du Prince de la Renaissance au roi absolu (François Ier, Henri IV, Louis XIV)',
        lessons: [
          { id: 'francois-ier-henri-iv', title: 'François Ier et Henri IV : renforcer l\'autorité du roi' },
          { id: 'louis-xiv-absolutisme', title: 'Louis XIV, un roi absolu' },
        ],
      },
      {
        id: 'risques-changement-global',
        title: 'Prévenir les risques, s\'adapter au changement global',
        programme: 'Géographie, Thème 3 : Prévenir les risques, s\'adapter au changement global',
        lessons: [
          { id: 'changement-global', title: 'Le changement global et ses effets dans le monde' },
          { id: 'risques-industriels', title: 'Prévenir les risques industriels et technologiques' },
          { id: 'societes-adaptation', title: 'Des sociétés qui s\'adaptent' },
        ],
      },
      {
        id: 'solidarite-echelles',
        title: 'La solidarité et ses échelles',
        programme:
          'Enseignement moral et civique, classe de 5e : Égalité, fraternité et solidarité. La solidarité et ses échelles',
        lessons: [
          { id: 'solidarite-face-aux-risques', title: 'Solidarité et fraternité face aux risques' },
          { id: 'echelles-solidarite', title: 'Être solidaire : de la commune au monde' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* PHYSIQUE-CHIMIE                                                      */
  /* ------------------------------------------------------------------ */
  {
    id: 'physique-chimie-5e',
    subject: 'physique-chimie',
    grade: '5e',
    intro:
      'Vous saurez décrire les états de la matière et ses changements, séparer un mélange, réaliser un circuit électrique, suivre les conversions d\'énergie, décrire un mouvement et expliquer comment la lumière se propage.',
    reference: 'Programme de physique-chimie du cycle 4 (2015, version consolidée au BO n°31 du 30 juillet 2020)',
    chapters: [
      {
        id: 'etats-de-la-matiere',
        title: 'Les états de la matière et leurs changements',
        programme: 'Organisation et transformations de la matière : décrire la constitution et les états de la matière',
        lessons: [
          { id: 'trois-etats', title: 'Solide, liquide, gaz : les trois états de la matière' },
          { id: 'changements-etat', title: 'Les changements d\'état' },
          { id: 'temperature-changement-etat', title: 'La température pendant un changement d\'état' },
        ],
      },
      {
        id: 'masse-et-volume',
        title: 'Masse et volume',
        programme: 'Organisation et transformations de la matière : décrire la constitution et les états de la matière',
        lessons: [
          { id: 'mesurer-masse-volume', title: 'Mesurer une masse et un volume' },
          { id: 'conservation-masse', title: 'Ce qui se conserve lors d\'un changement d\'état' },
          { id: 'masse-volumique', title: 'Comparer des matériaux : la masse volumique' },
        ],
      },
      {
        id: 'melanges',
        title: 'Mélanges et corps purs',
        programme: 'Organisation et transformations de la matière : décrire la constitution et les états de la matière',
        lessons: [
          { id: 'melanges-homogenes', title: 'Mélanges homogènes et hétérogènes, corps purs' },
          { id: 'solubilite-miscibilite', title: 'Dissoudre et mélanger : solubilité et miscibilité' },
          { id: 'separer-melange', title: 'Séparer les constituants : décantation, filtration, distillation' },
        ],
      },
      {
        id: 'systeme-solaire',
        title: 'La Terre dans l\'Univers',
        programme: 'Organisation et transformations de la matière : décrire la structure de l\'Univers et du système solaire',
        lessons: [
          { id: 'systeme-solaire', title: 'Le système solaire : le Soleil et ses planètes' },
          { id: 'structure-univers', title: 'Galaxies et étoiles : la structure de l\'Univers' },
        ],
      },
      {
        id: 'circuit-electrique',
        title: 'Le circuit électrique',
        programme: 'L\'énergie et ses conversions : réaliser des circuits électriques simples',
        lessons: [
          { id: 'circuit-simple', title: 'Réaliser et schématiser un circuit simple' },
          { id: 'serie-derivation', title: 'Circuits en série et en dérivation' },
          { id: 'conducteurs-securite', title: 'Conducteurs, isolants et dangers du court-circuit' },
        ],
      },
      {
        id: 'energie-conversions',
        title: 'Sources et conversions d\'énergie',
        programme: 'L\'énergie et ses conversions : identifier les sources, les transferts et les conversions d\'énergie',
        lessons: [
          { id: 'formes-energie', title: 'Les formes et les sources d\'énergie' },
          { id: 'chaine-energie', title: 'La chaîne d\'énergie d\'un appareil' },
          { id: 'energies-renouvelables', title: 'Énergies renouvelables et non renouvelables' },
        ],
      },
      {
        id: 'mouvement',
        title: 'Décrire un mouvement',
        programme: 'Mouvement et interactions : caractériser un mouvement',
        lessons: [
          { id: 'relativite-mouvement', title: 'Mouvement ou immobilité : tout dépend de l\'observateur' },
          { id: 'trajectoire', title: 'Trajectoire et types de mouvement' },
          { id: 'vitesse', title: 'Calculer une vitesse moyenne' },
        ],
      },
      {
        id: 'lumiere',
        title: 'La lumière',
        programme: 'Des signaux pour observer et communiquer : caractériser différents types de signaux (lumière)',
        lessons: [
          { id: 'sources-recepteurs', title: 'Sources de lumière et objets diffusants' },
          { id: 'propagation-rectiligne', title: 'La propagation rectiligne de la lumière, ombres' },
          { id: 'vitesse-lumiere', title: 'La vitesse de la lumière et l\'année-lumière' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* SVT                                                                  */
  /* ------------------------------------------------------------------ */
  {
    id: 'svt-5e',
    subject: 'svt',
    grade: '5e',
    intro:
      'Vous saurez expliquer comment les êtres vivants respirent et se nourrissent, comment fonctionnent la digestion, la respiration et la circulation du corps humain, et comment les paysages, le climat et la biodiversité évoluent sous l\'action de la nature et de l\'être humain.',
    reference:
      'Programme de sciences de la vie et de la Terre du cycle 4 (2015, version consolidée au BO n°31 du 30 juillet 2020)',
    chapters: [
      {
        id: 'respiration-milieux',
        title: 'Respirer dans différents milieux',
        programme: 'Le vivant et son évolution : relier les besoins des cellules à la respiration des organismes',
        lessons: [
          { id: 'respiration-etres-vivants', title: 'Tous les êtres vivants respirent' },
          { id: 'organes-respiratoires', title: 'Poumons, branchies, trachées : respirer dans l\'air ou dans l\'eau' },
          { id: 'respiration-vegetaux', title: 'La respiration des végétaux' },
        ],
      },
      {
        id: 'nutrition-vegetaux',
        title: 'La nutrition des plantes chlorophylliennes',
        programme: 'Le vivant et son évolution : besoins nutritifs et production de matière par les végétaux',
        lessons: [
          { id: 'besoins-plante', title: 'Les besoins nutritifs d\'une plante verte' },
          { id: 'production-matiere', title: 'La plante produit sa matière grâce à la lumière' },
        ],
      },
      {
        id: 'digestion',
        title: 'L\'alimentation et la digestion',
        programme: 'Le corps humain et la santé : nutrition et organisation fonctionnelle de l\'organisme',
        lessons: [
          { id: 'alimentation-equilibree', title: 'Les aliments et une alimentation équilibrée' },
          { id: 'transformation-aliments', title: 'La digestion : des aliments aux nutriments' },
          { id: 'absorption-intestinale', title: 'Le passage des nutriments dans le sang' },
        ],
      },
      {
        id: 'respiration-circulation',
        title: 'Respiration et circulation chez l\'être humain',
        programme: 'Le corps humain et la santé : nutrition et organisation fonctionnelle de l\'organisme',
        lessons: [
          { id: 'appareil-respiratoire', title: 'L\'appareil respiratoire et les échanges gazeux' },
          { id: 'circulation-sanguine', title: 'Le cœur et la circulation du sang' },
          { id: 'besoins-organes', title: 'Le sang apporte aux organes ce dont ils ont besoin' },
        ],
      },
      {
        id: 'effort-physique',
        title: 'Le corps pendant un effort',
        programme: 'Le corps humain et la santé : expliquer quelques processus biologiques impliqués dans le fonctionnement de l\'organisme lors d\'un effort',
        lessons: [
          { id: 'adaptations-effort', title: 'Les adaptations de l\'organisme à l\'effort' },
          { id: 'hygiene-de-vie', title: 'Entraînement, récupération et hygiène de vie' },
        ],
      },
      {
        id: 'paysages-erosion',
        title: 'Les paysages et l\'érosion',
        programme: 'La planète Terre, l\'environnement et l\'action humaine : explorer et expliquer certains phénomènes géologiques',
        lessons: [
          { id: 'erosion', title: 'L\'érosion façonne les paysages' },
          { id: 'transport-sedimentation', title: 'Transport et dépôt des sédiments' },
          { id: 'roches-sedimentaires-fossiles', title: 'Des roches sédimentaires et des fossiles' },
        ],
      },
      {
        id: 'meteo-climat',
        title: 'Météorologie et climat',
        programme: 'La planète Terre, l\'environnement et l\'action humaine : explorer et expliquer certains phénomènes météorologiques et climatiques',
        lessons: [
          { id: 'meteo-ou-climat', title: 'Distinguer la météo et le climat' },
          { id: 'changement-climatique', title: 'Le changement climatique actuel et ses causes' },
        ],
      },
      {
        id: 'biodiversite',
        title: 'Le peuplement des milieux et la biodiversité',
        programme: 'La planète Terre, l\'environnement et l\'action humaine : l\'action humaine sur les écosystèmes et la biodiversité',
        lessons: [
          { id: 'repartition-etres-vivants', title: 'Pourquoi les êtres vivants ne sont pas répartis au hasard' },
          { id: 'activites-humaines-biodiversite', title: 'Les activités humaines modifient les milieux' },
          { id: 'preserver-biodiversite', title: 'Préserver la biodiversité' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* TECHNOLOGIE                                                          */
  /* ------------------------------------------------------------------ */
  {
    id: 'technologie-5e',
    subject: 'technologie',
    grade: '5e',
    intro:
      'Vous saurez analyser l\'usage et le cycle de vie des objets de votre quotidien, les mettre en service et les tester, décrire leur fonctionnement, programmer un comportement simple et mener un mini-projet de conception.',
    reference: 'Programme de technologie du cycle 4, BO n°9 du 29 février 2024 (appliqué en 5e depuis la rentrée 2024)',
    chapters: [
      {
        id: 'objets-et-besoins',
        title: 'Les objets techniques et leurs usages',
        programme:
          'Thème 1 : Les objets et les systèmes techniques : leurs usages et leurs interactions à découvrir et analyser',
        lessons: [
          { id: 'besoin-fonction-usage', title: 'Un objet répond à un besoin : la fonction d\'usage' },
          { id: 'evolution-objets', title: 'Comment les objets évoluent au fil du temps' },
          { id: 'experience-utilisateur', title: 'L\'expérience utilisateur : un objet facile à utiliser ?' },
        ],
      },
      {
        id: 'mettre-en-service',
        title: 'Mettre en service, paramétrer et tester',
        programme:
          'Thème 1 : Les objets et les systèmes techniques : leurs usages et leurs interactions à découvrir et analyser',
        lessons: [
          { id: 'notice-mise-en-service', title: 'Lire une notice et mettre en service un objet' },
          { id: 'parametrer-tester', title: 'Paramétrer un objet et tester son fonctionnement' },
        ],
      },
      {
        id: 'cycle-de-vie',
        title: 'Le cycle de vie des objets',
        programme:
          'Thème 1 : Les objets et les systèmes techniques : leurs usages et leurs interactions à découvrir et analyser',
        lessons: [
          { id: 'etapes-cycle-vie', title: 'Les étapes du cycle de vie d\'un objet' },
          { id: 'materiaux-recyclage', title: 'Les familles de matériaux et le recyclage' },
          { id: 'reparabilite', title: 'Réparer plutôt que jeter : la réparabilité' },
        ],
      },
      {
        id: 'structure-fonctionnement',
        title: 'Comprendre le fonctionnement d\'un objet',
        programme: 'Thème 2 : Structure, fonctionnement, comportement : des objets et des systèmes techniques à comprendre',
        lessons: [
          { id: 'chaine-information-energie', title: 'Chaîne d\'information et chaîne d\'énergie' },
          { id: 'capteurs-actionneurs', title: 'Capteurs et actionneurs' },
          { id: 'representer-objet', title: 'Représenter un objet : croquis et schéma' },
        ],
      },
      {
        id: 'reseaux-donnees',
        title: 'Réseaux, données et sécurité',
        programme: 'Thème 2 : Structure, fonctionnement, comportement : des objets et des systèmes techniques à comprendre',
        lessons: [
          { id: 'reseau-informatique', title: 'Comment les objets communiquent en réseau' },
          { id: 'cybersecurite', title: 'Protéger ses données : les bases de la cybersécurité' },
        ],
      },
      {
        id: 'programmer-objet',
        title: 'Programmer le comportement d\'un objet',
        programme: 'Thème 2 : Structure, fonctionnement, comportement : des objets et des systèmes techniques à comprendre',
        lessons: [
          { id: 'algorithme', title: 'Décrire un comportement par un algorithme' },
          { id: 'programme-blocs', title: 'Programmer avec des blocs : boucles et conditions' },
        ],
      },
      {
        id: 'mini-projet',
        title: 'Mener un mini-projet',
        programme: 'Thème 3 : Création, conception, réalisation, innovations : des objets à concevoir et à réaliser',
        lessons: [
          { id: 'identifier-probleme', title: 'Identifier un besoin et formuler un problème' },
          { id: 'imaginer-solutions', title: 'Imaginer des solutions et les comparer' },
          { id: 'realiser-tester-prototype', title: 'Réaliser, tester et améliorer un prototype' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* ANGLAIS                                                              */
  /* ------------------------------------------------------------------ */
  {
    id: 'anglais-5e',
    subject: 'anglais',
    grade: '5e',
    intro:
      'Vous saurez vous présenter, parler de votre quotidien, de l\'école et de vos loisirs, raconter une histoire au passé, comparer des lieux et découvrir le Royaume-Uni en anglais.',
    reference:
      'Programme d\'anglais pour les classes de collège, arrêté du 5 mai 2025, BO n°22 du 29 mai 2025 (appliqué en 5e à la rentrée 2026)',
    chapters: [
      {
        id: 'portrait-autoportrait',
        title: 'Portrait, autoportrait',
        programme: 'Axe 1 : Portrait, autoportrait',
        lessons: [
          { id: 'se-presenter', title: 'Se présenter : « be » et « have got »' },
          { id: 'decrire-quelquun', title: 'Décrire le physique et le caractère' },
          { id: 'famille-genitif', title: 'Présenter sa famille : le génitif « \'s »' },
          { id: 'gouts', title: 'Dire ce que l\'on aime : « like », « love », « hate »' },
        ],
      },
      {
        id: 'ecole-et-loisirs',
        title: 'École et loisirs',
        programme: 'Axe 4 : École et loisirs',
        lessons: [
          { id: 'school-life', title: 'La vie à l\'école : matières et emploi du temps' },
          { id: 'present-simple-frequence', title: 'Le présent simple et les adverbes de fréquence' },
          { id: 'can-must', title: 'Capacités et règles : « can » et « must »' },
        ],
      },
      {
        id: 'quotidien',
        title: 'Le quotidien : lieux, rythmes, saisons',
        programme: 'Axe 2 : Le quotidien : lieux, rythmes, saisons',
        lessons: [
          { id: 'daily-routine', title: 'Raconter sa journée et dire l\'heure' },
          { id: 'maison-et-ville', title: 'Décrire sa maison et sa ville : « there is », « there are »' },
          { id: 'meteo-saisons', title: 'La météo et les saisons' },
          { id: 'be-ing', title: 'Ce qui se passe maintenant : le présent en « be + -ing »' },
        ],
      },
      {
        id: 'reel-et-imaginaire',
        title: 'Le réel et l\'imaginaire',
        programme: 'Axe 3 : Le réel et l\'imaginaire',
        lessons: [
          { id: 'preterit-be', title: 'Parler du passé : « was » et « were »' },
          { id: 'preterit-verbes', title: 'Le prétérit des verbes réguliers et irréguliers' },
          { id: 'legendes', title: 'Lire un conte ou une légende du monde anglophone' },
          { id: 'raconter-histoire', title: 'Raconter une histoire au passé' },
        ],
      },
      {
        id: 'langues-lieux-histoires',
        title: 'Des langues, des lieux, des histoires',
        programme: 'Axe 5 : Des langues, des lieux, des histoires',
        lessons: [
          { id: 'english-world', title: 'L\'anglais dans le monde' },
          { id: 'comparatifs-superlatifs', title: 'Comparer : comparatifs et superlatifs' },
          { id: 'directions', title: 'Demander et indiquer son chemin' },
        ],
      },
      {
        id: 'royaume-uni-nations',
        title: 'Le Royaume-Uni : quatre nations',
        programme: 'Axe 6 : Le Royaume-Uni',
        lessons: [
          { id: 'quatre-nations', title: 'Angleterre, Écosse, pays de Galles, Irlande du Nord' },
          { id: 'londres', title: 'Découvrir Londres' },
          { id: 'symboles-royaume-uni', title: 'Les symboles du Royaume-Uni' },
        ],
      },
      {
        id: 'royaume-uni-traditions',
        title: 'Vivre au Royaume-Uni : fêtes et traditions',
        programme: 'Axe 6 : Le Royaume-Uni',
        lessons: [
          { id: 'fetes-traditions', title: 'Les fêtes et les traditions britanniques' },
          { id: 'british-food', title: 'La cuisine britannique : « some », « any », « much », « many »' },
          { id: 'inviter-proposer', title: 'Inviter, proposer, accepter, refuser' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* ESPAGNOL                                                             */
  /* ------------------------------------------------------------------ */
  {
    id: 'espagnol-5e',
    subject: 'espagnol',
    grade: '5e',
    intro:
      'Vous saurez saluer, vous présenter, parler de votre famille, de votre collège, de vos goûts et de votre quotidien en espagnol, et découvrir le monde hispanique et le Mexique.',
    reference:
      'Programme d\'espagnol pour les classes de collège, arrêté du 5 mai 2025, BO n°22 du 29 mai 2025 (appliqué en 5e à la rentrée 2026)',
    chapters: [
      {
        id: 'premiers-pas',
        title: 'Premiers pas en espagnol',
        programme: 'Axe 5 : Des langues, des lieux, des histoires',
        lessons: [
          { id: 'saluer', title: 'Saluer et prendre congé : « ¡Hola! », « ¡Adiós! »' },
          { id: 'alphabet-prononciation', title: 'L\'alphabet, la prononciation et l\'accent tonique' },
          { id: 'monde-hispanique', title: 'Où parle-t-on espagnol dans le monde ?' },
        ],
      },
      {
        id: 'portrait',
        title: 'Portrait, autoportrait',
        programme: 'Axe 1 : Portrait, autoportrait',
        lessons: [
          { id: 'se-presenter', title: 'Se présenter : « llamarse », « tener », les nombres' },
          { id: 'se-decrire', title: 'Se décrire : « ser » et l\'accord des adjectifs' },
          { id: 'la-familia', title: 'Présenter sa famille : les possessifs' },
        ],
      },
      {
        id: 'ecole-loisirs',
        title: 'École et loisirs',
        programme: 'Axe 4 : École et loisirs',
        lessons: [
          { id: 'el-instituto', title: 'Le collège : matières, jours et heures' },
          { id: 'gustar', title: 'Dire ce que l\'on aime : « me gusta », « me gustan »' },
          { id: 'present-reguliers', title: 'Les loisirs : le présent des verbes réguliers' },
        ],
      },
      {
        id: 'quotidien',
        title: 'Le quotidien : lieux, rythmes, saisons',
        programme: 'Axe 2 : Le quotidien : lieux, rythmes, saisons',
        lessons: [
          { id: 'casa-ciudad', title: 'Ma maison, ma ville : « hay » et « estar »' },
          { id: 'jornada', title: 'Une journée ordinaire : quelques verbes irréguliers' },
          { id: 'tiempo-estaciones', title: 'Le temps qu\'il fait et les saisons' },
        ],
      },
      {
        id: 'reel-imaginaire',
        title: 'Le réel et l\'imaginaire',
        programme: 'Axe 3 : Le réel et l\'imaginaire',
        lessons: [
          { id: 'personnage-imaginaire', title: 'Décrire un personnage ou un animal imaginaire' },
          { id: 'leyenda', title: 'Lire une légende du monde hispanique' },
        ],
      },
      {
        id: 'mexique',
        title: 'Découvrir le Mexique',
        programme: 'Axe 6 : Le Mexique',
        lessons: [
          { id: 'mexique-carte', title: 'Le Mexique : un pays, une capitale, des paysages' },
          { id: 'dia-de-muertos', title: 'Une fête mexicaine : « el Día de Muertos »' },
          { id: 'cocina-mexicana', title: 'La cuisine mexicaine : commander au restaurant' },
        ],
      },
    ],
  },
]
