// LE PLAN DE LA CLASSE DE 6E · demandé : « Il faut vraiment que ça soit lié au
// programme scolaire de l'école ». Programmes en vigueur en 2026-2027 :
// français et mathématiques du cycle 3 (BO n°16 du 17 avril 2025, appliqués en
// 6e depuis la rentrée 2025) ; histoire et géographie du cycle 3 dans leur
// version de 2020 (le nouveau programme du BO n°22 du 28 mai 2026 n'arrive en 6e
// qu'à la rentrée 2027) ; EMC du BO n°24 du 13 juin 2024 (appliqué en 6e à la
// rentrée 2026) ; sciences et technologie du BO n°25 du 22 juin 2023 (le
// programme du BO n°24 du 11 juin 2026 n'arrive en 6e qu'à la rentrée 2027) ;
// langues vivantes du BO n°22 du 29 mai 2025 (appliqué en 6e depuis la rentrée 2025).
import type { UnitPlan } from '../types'

export const PLANS: UnitPlan[] = [
  /* ---------------------------------------------------------------- */
  /* FRANÇAIS                                                           */
  /* ---------------------------------------------------------------- */
  {
    id: 'francais-6e',
    subject: 'francais',
    grade: '6e',
    intro: 'Vous saurez lire et comprendre des récits, des poèmes et des pièces de théâtre, maîtriser la phrase, le verbe et les accords, et écrire des textes clairs et corrects.',
    reference: 'Programme de français du cycle 3, BO n°16 du 17 avril 2025',
    chapters: [
      {
        id: 'lire-ecrire-dire',
        title: 'Bien commencer : lire, écrire et parler en 6e',
        programme: 'Oral ; Lecture et compréhension de l\'écrit ; Écriture',
        lessons: [
          { id: 'comprendre-un-texte', title: 'Lire et comprendre un texte : les bonnes questions à se poser' },
          { id: 'rediger-reviser', title: 'Écrire un texte, puis le relire et l\'améliorer' },
          { id: 'prendre-la-parole', title: 'Prendre la parole devant la classe' },
        ],
      },
      {
        id: 'recits-origines',
        title: 'Créer, recréer le monde : récits des origines',
        programme: 'Culture littéraire et artistique : « Créer, recréer le monde : récits des origines »',
        lessons: [
          { id: 'mythe-definition', title: 'Qu\'est-ce qu\'un mythe ?' },
          { id: 'creation-du-monde', title: 'Raconter la création du monde' },
          { id: 'recits-etiologiques', title: 'Expliquer le monde : les récits du « pourquoi »' },
          { id: 'ecrire-recit-origines', title: 'Écrire à votre tour un récit des origines' },
        ],
      },
      {
        id: 'phrase',
        title: 'La phrase',
        programme: 'Étude de la langue : la phrase simple et la phrase complexe, la ponctuation',
        lessons: [
          { id: 'phrase-ponctuation', title: 'Reconnaître une phrase et bien la ponctuer' },
          { id: 'types-formes-phrase', title: 'Les types de phrases et la forme négative' },
          { id: 'phrase-simple-complexe', title: 'Phrase simple et phrase complexe' },
        ],
      },
      {
        id: 'verbe-conjugaison',
        title: 'Le verbe et sa conjugaison',
        programme: 'Étude de la langue : le verbe, les temps de l\'indicatif et l\'impératif',
        lessons: [
          { id: 'verbe-infinitif-groupe', title: 'Le verbe : infinitif, radical, terminaison et groupe' },
          { id: 'present-futur', title: 'Le présent et le futur de l\'indicatif' },
          { id: 'imparfait-passe-simple', title: 'L\'imparfait et le passé simple dans le récit' },
          { id: 'passe-compose-imperatif', title: 'Le passé composé et l\'impératif présent' },
        ],
      },
      {
        id: 'monstres',
        title: 'Rencontrer des monstres',
        programme: 'Culture littéraire et artistique : « Rencontrer des monstres : expérience de l\'autre, expérience de soi »',
        lessons: [
          { id: 'monstres-mythes', title: 'Les monstres des mythes et des contes' },
          { id: 'portrait-monstre', title: 'Décrire un monstre : l\'art du portrait' },
          { id: 'humanite-monstre', title: 'Le monstre est-il toujours celui que l\'on croit ?' },
        ],
      },
      {
        id: 'groupe-nominal',
        title: 'Le groupe nominal et ses accords',
        programme: 'Étude de la langue : le groupe nominal, les accords dans le groupe nominal',
        lessons: [
          { id: 'nom-determinant', title: 'Le nom et le déterminant' },
          { id: 'expansions-nom', title: 'Enrichir le nom : adjectif et complément du nom' },
          { id: 'accords-gn', title: 'Accorder dans le groupe nominal : genre et nombre' },
        ],
      },
      {
        id: 'poesie',
        title: 'Chanter et enchanter le monde : la poésie',
        programme: 'Culture littéraire et artistique : « Chanter et enchanter le monde : mots et merveilles »',
        lessons: [
          { id: 'vers-strophe-rime', title: 'Le vers, la strophe et la rime' },
          { id: 'sonorites-images', title: 'Jouer avec les sons et les images' },
          { id: 'dire-poeme', title: 'Dire un poème à voix haute' },
          { id: 'ecrire-poeme', title: 'Écrire votre propre poème' },
        ],
      },
      {
        id: 'fonctions',
        title: 'Les fonctions dans la phrase',
        programme: 'Étude de la langue : les fonctions syntaxiques, l\'accord du sujet et du verbe',
        lessons: [
          { id: 'sujet-accord', title: 'Le sujet et l\'accord du verbe' },
          { id: 'cod-coi-attribut', title: 'Les compléments du verbe et l\'attribut du sujet' },
          { id: 'complements-circonstanciels', title: 'Les compléments circonstanciels : où, quand, comment ?' },
        ],
      },
      {
        id: 'theatre-ruses',
        title: 'Se masquer, jouer, déjouer : la ruse au théâtre',
        programme: 'Culture littéraire et artistique : « Se masquer, jouer, déjouer : ruses en action »',
        lessons: [
          { id: 'texte-theatre', title: 'Lire un texte de théâtre : répliques et didascalies' },
          { id: 'ruses-personnages', title: 'Masques, ruses et tromperies : les personnages qui jouent un rôle' },
          { id: 'mettre-en-voix', title: 'Mettre en voix et en scène une scène' },
        ],
      },
      {
        id: 'lexique',
        title: 'Les mots et leur sens',
        programme: 'Étude de la langue : le lexique, formation et sens des mots',
        lessons: [
          { id: 'formation-mots', title: 'Former des mots : radical, préfixe et suffixe' },
          { id: 'synonymes-antonymes', title: 'Familles de mots, synonymes et antonymes' },
          { id: 'sens-propre-figure', title: 'Sens propre, sens figuré et usage du dictionnaire' },
        ],
      },
      {
        id: 'aventure',
        title: 'Partir à l\'aventure !',
        programme: 'Culture littéraire et artistique : « Partir à l\'aventure ! »',
        lessons: [
          { id: 'schema-narratif', title: 'Le schéma narratif d\'un récit d\'aventures' },
          { id: 'heros-epreuves', title: 'Le héros et ses épreuves' },
          { id: 'ecrire-aventure', title: 'Écrire un épisode d\'aventures' },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* MATHÉMATIQUES                                                      */
  /* ---------------------------------------------------------------- */
  {
    id: 'maths-6e',
    subject: 'maths',
    grade: '6e',
    intro: 'Vous saurez calculer avec les nombres entiers, décimaux et les fractions, résoudre des problèmes de proportionnalité, mesurer et construire des figures, et lire des données.',
    reference: 'Programme de mathématiques du cycle 3, BO n°16 du 17 avril 2025',
    chapters: [
      {
        id: 'entiers-decimaux',
        title: 'Nombres entiers et nombres décimaux',
        programme: 'Nombres, calculs et résolution de problèmes : nombres entiers et nombres décimaux',
        lessons: [
          { id: 'grands-nombres', title: 'Lire, écrire et décomposer les grands nombres' },
          { id: 'ecriture-decimale', title: 'Des fractions décimales à l\'écriture décimale' },
          { id: 'comparer-decimaux', title: 'Comparer, ranger, encadrer et arrondir des décimaux' },
        ],
      },
      {
        id: 'droites-cercles',
        title: 'Droites, segments et cercles',
        programme: 'Espace et géométrie : vocabulaire, notations et constructions',
        lessons: [
          { id: 'points-droites-segments', title: 'Points, droites, demi-droites et segments' },
          { id: 'perpendiculaires-paralleles', title: 'Droites perpendiculaires et droites parallèles' },
          { id: 'cercle-disque', title: 'Le cercle et le disque' },
        ],
      },
      {
        id: 'calcul-decimaux',
        title: 'Calculer avec les nombres décimaux',
        programme: 'Nombres, calculs et résolution de problèmes : calcul mental, en ligne et posé',
        lessons: [
          { id: 'addition-soustraction', title: 'Additionner et soustraire des décimaux' },
          { id: 'multiplication-decimaux', title: 'Multiplier des décimaux et estimer un ordre de grandeur' },
          { id: 'problemes-schemas', title: 'Résoudre un problème à étapes avec un schéma en barres' },
        ],
      },
      {
        id: 'longueurs-durees',
        title: 'Longueurs, périmètres et durées',
        programme: 'Grandeurs et mesures : longueurs, périmètres et durées',
        lessons: [
          { id: 'unites-longueur', title: 'Les unités de longueur et les conversions' },
          { id: 'perimetres', title: 'Le périmètre d\'un polygone et la longueur d\'un cercle' },
          { id: 'durees', title: 'Calculer des durées et des horaires' },
        ],
      },
      {
        id: 'angles',
        title: 'Les angles',
        programme: 'Grandeurs et mesures ; Espace et géométrie : les angles',
        lessons: [
          { id: 'angles-vocabulaire', title: 'Nommer un angle : aigu, droit, obtus' },
          { id: 'rapporteur', title: 'Mesurer et tracer un angle au rapporteur' },
          { id: 'bissectrice-somme-angles', title: 'La bissectrice et la somme des angles d\'un triangle' },
        ],
      },
      {
        id: 'division',
        title: 'Division, multiples et diviseurs',
        programme: 'Nombres, calculs et résolution de problèmes : division, multiples et diviseurs',
        lessons: [
          { id: 'division-euclidienne', title: 'La division euclidienne : quotient et reste' },
          { id: 'multiples-diviseurs', title: 'Multiples, diviseurs et critères de divisibilité' },
          { id: 'division-decimale', title: 'Calculer un quotient décimal' },
        ],
      },
      {
        id: 'fractions',
        title: 'Les fractions',
        programme: 'Nombres, calculs et résolution de problèmes : les fractions',
        lessons: [
          { id: 'fraction-partage', title: 'Une fraction pour partager et pour mesurer' },
          { id: 'fraction-demi-droite', title: 'Placer une fraction sur une demi-droite graduée' },
          { id: 'fractions-egales-comparer', title: 'Fractions égales et comparaison de fractions' },
          { id: 'additionner-fractions', title: 'Additionner et soustraire des fractions' },
        ],
      },
      {
        id: 'figures-symetrie',
        title: 'Figures planes et symétrie axiale',
        programme: 'Espace et géométrie : figures planes, médiatrice, symétrie axiale',
        lessons: [
          { id: 'triangles-quadrilateres', title: 'Construire des triangles et des quadrilatères' },
          { id: 'mediatrice', title: 'La médiatrice d\'un segment et le cercle circonscrit' },
          { id: 'symetrie-axiale', title: 'Axes de symétrie et figure symétrique' },
        ],
      },
      {
        id: 'pensee-algebrique',
        title: 'Premiers pas vers l\'algèbre',
        programme: 'Nombres, calculs et résolution de problèmes : initiation à la pensée algébrique',
        lessons: [
          { id: 'motifs-evolutifs', title: 'Motifs qui évoluent : trouver la règle' },
          { id: 'nombre-inconnu', title: 'Trouver un nombre inconnu avec une balance ou un schéma' },
        ],
      },
      {
        id: 'proportionnalite',
        title: 'La proportionnalité',
        programme: 'Proportionnalité',
        lessons: [
          { id: 'reconnaitre-proportionnalite', title: 'Reconnaître une situation de proportionnalité' },
          { id: 'resoudre-proportionnalite', title: 'Résoudre un problème : passage à l\'unité et linéarité' },
          { id: 'pourcentages', title: 'Appliquer un pourcentage' },
        ],
      },
      {
        id: 'aires-volumes',
        title: 'Aires, solides et volumes',
        programme: 'Grandeurs et mesures : aires et volumes ; Espace et géométrie : solides',
        lessons: [
          { id: 'aires', title: 'Aires : unités, conversions et aire du rectangle' },
          { id: 'solides-patrons', title: 'Reconnaître les solides et construire un patron' },
          { id: 'volume-pave', title: 'Le volume d\'un pavé droit et les contenances' },
        ],
      },
      {
        id: 'donnees-probabilites-algo',
        title: 'Données, hasard et algorithmes',
        programme: 'Organisation et gestion de données et probabilités ; Initiation à la pensée informatique',
        lessons: [
          { id: 'tableaux-diagrammes', title: 'Lire et construire des tableaux et des diagrammes' },
          { id: 'probabilites', title: 'Le hasard : certain, possible ou impossible ?' },
          { id: 'algorithmes-programmation', title: 'Écrire un algorithme et programmer des déplacements' },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* HISTOIRE-GÉOGRAPHIE ET EMC                                         */
  /* ---------------------------------------------------------------- */
  {
    id: 'hg-emc-6e',
    subject: 'hg-emc',
    grade: '6e',
    intro: 'Vous saurez raconter les débuts de l\'humanité et l\'histoire de l\'Antiquité, expliquer comment les êtres humains habitent la Terre, et comprendre la vie démocratique, la laïcité et le respect de la vie privée.',
    reference: 'Programme d\'histoire et géographie du cycle 3, BO n°31 du 30 juillet 2020, et programme d\'enseignement moral et civique, BO n°24 du 13 juin 2024',
    chapters: [
      {
        id: 'debuts-humanite',
        title: 'La longue histoire de l\'humanité et des migrations',
        programme: 'Histoire, thème 1 : La longue histoire de l\'humanité et des migrations',
        lessons: [
          { id: 'reperes-temps', title: 'Se repérer dans le temps : frise, siècles et millénaires' },
          { id: 'premiers-humains', title: 'Les débuts de l\'humanité' },
          { id: 'revolution-neolithique', title: 'La « révolution » néolithique' },
          { id: 'premiers-etats-ecritures', title: 'Premiers États, premières écritures' },
        ],
      },
      {
        id: 'representer-interet-general',
        title: 'Représenter les autres et servir l\'intérêt général',
        programme: 'EMC, thème 1 : Représenter les autres et servir l\'intérêt général',
        lessons: [
          { id: 'delegues', title: 'Élire et être délégué de classe' },
          { id: 'interet-general', title: 'Intérêt général et intérêts particuliers' },
          { id: 'vote-representation', title: 'Voter et être représenté dans une démocratie' },
        ],
      },
      {
        id: 'habiter-metropole',
        title: 'Habiter une métropole',
        programme: 'Géographie, thème 1 : Habiter une métropole',
        lessons: [
          { id: 'metropoles-habitants', title: 'Les métropoles et leurs habitants' },
          { id: 'vivre-metropole', title: 'Se loger, travailler et se déplacer dans une métropole' },
          { id: 'ville-de-demain', title: 'La ville de demain' },
        ],
      },
      {
        id: 'mediterranee-antique',
        title: 'Récits fondateurs, croyances et citoyenneté dans la Méditerranée antique',
        programme: 'Histoire, thème 2 : Récits fondateurs, croyances et citoyenneté dans la Méditerranée antique au Ier millénaire avant J.-C.',
        lessons: [
          { id: 'cites-grecques', title: 'Le monde des cités grecques' },
          { id: 'citoyennete-athenes', title: 'Être citoyen à Athènes' },
          { id: 'rome-mythe-histoire', title: 'Rome, du mythe à l\'histoire' },
          { id: 'monotheisme-juif', title: 'La naissance du monothéisme juif dans un monde polythéiste' },
        ],
      },
      {
        id: 'faible-densite',
        title: 'Habiter un espace de faible densité',
        programme: 'Géographie, thème 2 : Habiter un espace de faible densité',
        lessons: [
          { id: 'espace-contraintes', title: 'Habiter un espace à fortes contraintes naturelles ou de grande biodiversité' },
          { id: 'espace-agricole', title: 'Habiter un espace de faible densité à vocation agricole' },
        ],
      },
      {
        id: 'laicite-ecole',
        title: 'Respecter des règles : la laïcité à l\'École',
        programme: 'EMC, thème 2 : Respecter des règles et en comprendre la finalité : l\'exemple de la laïcité à l\'École',
        lessons: [
          { id: 'regles-college', title: 'Pourquoi des règles au collège ?' },
          { id: 'laicite-liberte-conscience', title: 'La laïcité : liberté de conscience et neutralité' },
          { id: 'charte-laicite', title: 'La laïcité au quotidien à l\'École' },
        ],
      },
      {
        id: 'empire-romain',
        title: 'L\'empire romain dans le monde antique',
        programme: 'Histoire, thème 3 : L\'empire romain dans le monde antique',
        lessons: [
          { id: 'conquetes-romanisation', title: 'Conquêtes, paix romaine et romanisation' },
          { id: 'chretiens-empire', title: 'Des chrétiens dans l\'empire' },
          { id: 'route-soie-han', title: 'Rome et la Chine des Han : l\'ancienne route de la soie' },
        ],
      },
      {
        id: 'littoraux',
        title: 'Habiter les littoraux',
        programme: 'Géographie, thème 3 : Habiter les littoraux',
        lessons: [
          { id: 'littoral-industrialo-portuaire', title: 'Un littoral industrialo-portuaire' },
          { id: 'littoral-touristique', title: 'Un littoral touristique' },
        ],
      },
      {
        id: 'vie-privee',
        title: 'Avoir des droits et respecter ceux des autres : la vie privée',
        programme: 'EMC, thème 3 : Avoir des droits en tant que personne et respecter ceux des autres : l\'exemple du droit à la vie privée',
        lessons: [
          { id: 'droit-vie-privee', title: 'Le droit à la vie privée' },
          { id: 'donnees-traces-numeriques', title: 'Données personnelles et traces numériques' },
          { id: 'droit-image', title: 'Le droit à l\'image et les bons usages en ligne' },
        ],
      },
      {
        id: 'monde-habite',
        title: 'Le monde habité',
        programme: 'Géographie, thème 4 : Le monde habité',
        lessons: [
          { id: 'repartition-population', title: 'La répartition de la population mondiale et ses dynamiques' },
          { id: 'occupation-espace', title: 'La variété des formes d\'occupation de l\'espace dans le monde' },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* SCIENCES ET TECHNOLOGIE                                            */
  /* ---------------------------------------------------------------- */
  {
    id: 'sciences-techno-6e',
    subject: 'sciences-techno',
    grade: '6e',
    intro: 'Vous saurez décrire la matière, le mouvement et l\'énergie, classer et comprendre les êtres vivants, expliquer le fonctionnement de la planète Terre et analyser un objet technique.',
    reference: 'Programme de sciences et technologie du cycle 3, BO n°25 du 22 juin 2023',
    chapters: [
      {
        id: 'etats-matiere',
        title: 'La matière et ses états',
        programme: 'Matière, mouvement, énergie, information : décrire les états et la constitution de la matière à l\'échelle macroscopique',
        lessons: [
          { id: 'trois-etats', title: 'Solide, liquide, gaz : les trois états de la matière' },
          { id: 'changements-etat', title: 'Les changements d\'état de l\'eau' },
          { id: 'masse-volume', title: 'Mesurer une masse et un volume' },
        ],
      },
      {
        id: 'melanges',
        title: 'Mélanges et séparation',
        programme: 'Matière, mouvement, énergie, information : les mélanges',
        lessons: [
          { id: 'melanges-homogenes', title: 'Mélanges homogènes et hétérogènes' },
          { id: 'dissolution', title: 'La dissolution : quand un solide disparaît dans l\'eau' },
          { id: 'separer-melange', title: 'Séparer un mélange : décantation et filtration' },
        ],
      },
      {
        id: 'classer-vivant',
        title: 'La diversité et la classification du vivant',
        programme: 'Le vivant, sa diversité et les fonctions qui le caractérisent : classer les organismes',
        lessons: [
          { id: 'notion-espece', title: 'Qu\'est-ce qu\'une espèce ?' },
          { id: 'groupes-emboites', title: 'Classer les êtres vivants en groupes emboîtés' },
          { id: 'biodiversite-passee', title: 'La biodiversité actuelle et passée' },
        ],
      },
      {
        id: 'cellule',
        title: 'La cellule, unité du vivant',
        programme: 'Le vivant, sa diversité et les fonctions qui le caractérisent : l\'organisation des êtres vivants',
        lessons: [
          { id: 'microscope', title: 'Observer au microscope' },
          { id: 'cellule-unite', title: 'Tous les êtres vivants sont faits de cellules' },
        ],
      },
      {
        id: 'mouvement',
        title: 'Décrire un mouvement',
        programme: 'Matière, mouvement, énergie, information : observer et décrire différents types de mouvements',
        lessons: [
          { id: 'trajectoire', title: 'Trajectoire et point de vue de l\'observateur' },
          { id: 'vitesse', title: 'La vitesse : mouvement uniforme, accéléré ou ralenti' },
        ],
      },
      {
        id: 'energie',
        title: 'Les sources et les formes d\'énergie',
        programme: 'Matière, mouvement, énergie, information : identifier différentes sources d\'énergie',
        lessons: [
          { id: 'sources-energie', title: 'Les sources d\'énergie utilisées par les êtres humains' },
          { id: 'formes-conversions', title: 'Formes d\'énergie et chaînes de conversion' },
          { id: 'energies-renouvelables', title: 'Énergies renouvelables et non renouvelables' },
        ],
      },
      {
        id: 'signal-information',
        title: 'Signal et information',
        programme: 'Matière, mouvement, énergie, information : identifier un signal et une information',
        lessons: [
          { id: 'types-signaux', title: 'Signaux sonores, lumineux et radio' },
          { id: 'transmettre-information', title: 'Transmettre une information avec un signal' },
        ],
      },
      {
        id: 'nutrition',
        title: 'Se nourrir : d\'où vient la matière des êtres vivants ?',
        programme: 'Le vivant, sa diversité et les fonctions qui le caractérisent : les besoins nutritifs et l\'origine de la matière des êtres vivants',
        lessons: [
          { id: 'besoins-vegetaux', title: 'Les besoins des végétaux chlorophylliens' },
          { id: 'besoins-animaux', title: 'Les besoins alimentaires des animaux' },
          { id: 'decomposeurs', title: 'Le devenir de la matière : le rôle des décomposeurs' },
        ],
      },
      {
        id: 'reproduction-developpement',
        title: 'Reproduction, croissance et développement',
        programme: 'Le vivant, sa diversité et les fonctions qui le caractérisent : reproduction, croissance et développement',
        lessons: [
          { id: 'cycle-vie-plante', title: 'Le cycle de vie d\'une plante à fleurs' },
          { id: 'developpement-animaux', title: 'Le développement des animaux' },
          { id: 'puberte', title: 'Les changements du corps à la puberté' },
        ],
      },
      {
        id: 'planete-terre',
        title: 'La Terre, une planète active',
        programme: 'La Terre, une planète peuplée par des êtres vivants : la Terre dans le système solaire et les phénomènes géologiques',
        lessons: [
          { id: 'systeme-solaire', title: 'La Terre dans le système solaire' },
          { id: 'jour-nuit-saisons', title: 'Les mouvements de la Terre : jours, nuits et saisons' },
          { id: 'seismes-volcans', title: 'Séismes et volcans' },
          { id: 'risques-naturels', title: 'Les risques naturels et comment s\'en protéger' },
        ],
      },
      {
        id: 'vivants-environnement',
        title: 'Les êtres vivants dans leur environnement',
        programme: 'La Terre, une planète peuplée par des êtres vivants : les êtres vivants dans leur environnement',
        lessons: [
          { id: 'peuplement-milieux', title: 'Comment les êtres vivants peuplent un milieu' },
          { id: 'reseaux-alimentaires', title: 'Chaînes et réseaux alimentaires' },
          { id: 'activites-humaines', title: 'Les activités humaines et l\'environnement' },
        ],
      },
      {
        id: 'objets-techniques',
        title: 'Les objets techniques',
        programme: 'Les objets techniques au cœur de la société',
        lessons: [
          { id: 'evolution-objets', title: 'Comment un objet technique a évolué dans le temps' },
          { id: 'fonctionnement-objet', title: 'Décrire le fonctionnement d\'un objet technique' },
          { id: 'familles-materiaux', title: 'Les grandes familles de matériaux' },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* ANGLAIS                                                            */
  /* ---------------------------------------------------------------- */
  {
    id: 'anglais-6e',
    subject: 'anglais',
    grade: '6e',
    intro: 'Vous saurez vous présenter, parler de votre famille, de votre quotidien, de vos goûts et de vos émotions en anglais, et découvrir des pays, des légendes et des œuvres du monde anglophone.',
    reference: 'Programme de langues vivantes étrangères pour les classes de collège (anglais), BO n°22 du 29 mai 2025',
    chapters: [
      {
        id: 'se-presenter',
        title: '« Hello! » : se présenter',
        programme: 'Axe « Personnes et personnages »',
        lessons: [
          { id: 'saluer', title: 'Saluer et prendre congé : « Hi! », « Goodbye! »' },
          { id: 'se-presenter', title: 'Dire son nom, son âge et d\'où l\'on vient avec « to be »' },
          { id: 'alphabet-epeler', title: 'L\'alphabet : épeler son nom' },
          { id: 'nombres', title: 'Les nombres pour compter et donner son âge' },
        ],
      },
      {
        id: 'famille',
        title: 'Ma famille et mes proches',
        programme: 'Axe « Personnes et personnages »',
        lessons: [
          { id: 'membres-famille', title: 'Les membres de la famille et le génitif « \'s »' },
          { id: 'possessifs', title: 'Les adjectifs possessifs : « my », « your », « his », « her »' },
          { id: 'decrire-personne', title: 'Décrire quelqu\'un avec « have got » et des adjectifs' },
        ],
      },
      {
        id: 'ecole',
        title: 'À l\'école',
        programme: 'Axe « Le quotidien : vivre, jouer, apprendre »',
        lessons: [
          { id: 'matieres-emploi-temps', title: 'Les matières et l\'emploi du temps' },
          { id: 'heure', title: 'Dire l\'heure : « What time is it? »' },
          { id: 'consignes-classe', title: 'Comprendre les consignes en classe : l\'impératif' },
        ],
      },
      {
        id: 'quotidien',
        title: 'Ma maison et ma journée',
        programme: 'Axe « Le quotidien : vivre, jouer, apprendre »',
        lessons: [
          { id: 'maison', title: 'Décrire sa maison avec « there is » et « there are »' },
          { id: 'routine', title: 'Raconter sa journée au présent simple' },
          { id: 'jours-mois-dates', title: 'Les jours, les mois et les dates' },
        ],
      },
      {
        id: 'loisirs',
        title: 'Loisirs, sports et talents',
        programme: 'Axe « Le quotidien : vivre, jouer, apprendre »',
        lessons: [
          { id: 'gouts', title: 'Dire ce que l\'on aime : « I like », « I love », « I hate »' },
          { id: 'can', title: 'Parler de ses talents avec « can »' },
          { id: 'frequence', title: 'Dire à quelle fréquence : « always », « often », « never »' },
        ],
      },
      {
        id: 'pays',
        title: 'Pays et paysages du monde anglophone',
        programme: 'Axe « Pays et paysages »',
        lessons: [
          { id: 'pays-nationalites', title: 'Les pays anglophones et les nationalités' },
          { id: 'situer-lieu', title: 'Situer un lieu : les prépositions de lieu' },
          { id: 'meteo-paysages', title: 'Décrire un paysage et le temps qu\'il fait' },
        ],
      },
      {
        id: 'animaux-nature',
        title: 'Animaux et nature',
        programme: 'Axe « Pays et paysages »',
        lessons: [
          { id: 'animaux', title: 'Les animaux et leur milieu' },
          { id: 'pluriels', title: 'Le pluriel des noms, réguliers et irréguliers' },
          { id: 'presenter-animal', title: 'Présenter un animal : « It lives in... », « It eats... »' },
        ],
      },
      {
        id: 'contes-legendes',
        title: 'Contes et légendes',
        programme: 'Axe « Imaginaire, contes et légendes »',
        lessons: [
          { id: 'creatures-legendes', title: 'Dragons, sorciers et leprechauns : les créatures des légendes' },
          { id: 'decrire-creature', title: 'Décrire une créature imaginaire' },
          { id: 'raconter-legende', title: 'Comprendre et raconter une courte légende' },
        ],
      },
      {
        id: 'arts-sentiments',
        title: 'Arts et émotions',
        programme: 'Axe « Arts et expression des sentiments »',
        lessons: [
          { id: 'emotions', title: 'Exprimer ses émotions : « I feel happy because... »' },
          { id: 'decrire-image', title: 'Décrire un tableau ou une image au présent en be + -ing' },
          { id: 'chanson-poeme', title: 'Comprendre et dire une chanson ou un poème' },
        ],
      },
    ],
  },
]
