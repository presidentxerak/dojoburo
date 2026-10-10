// LE PLAN DE LA PREMIÈRE GÉNÉRALE · une unité par matière, dans l'ordre de
// GRADE_SUBJECTS['1re']. Programmes en vigueur pour l'année scolaire 2026-2027 :
// - français : programme de 2019 et programme national d'œuvres 2026-2027
//   (seul l'objet d'étude « roman et récit » est renouvelé cette année) ;
// - mathématiques : nouveau programme de spécialité (BO n°14 du 2 avril 2026),
//   applicable en première à la rentrée 2026 ; épreuve anticipée en juin ;
// - enseignement scientifique : programme de 2019, et nouveau programme de
//   mathématiques intégré (BO n°14 du 2 avril 2026) ;
// - EMC : programme de 2024 (BO n°24 du 13 juin 2024) ;
// - anglais : programme de langues vivantes de 2025 (BO n°22 du 29 mai 2025),
//   applicable au cycle terminal à la rentrée 2026 ;
// - autres spécialités et histoire-géographie : programmes de 2019.
import type { UnitPlan } from '../types'

export const PLANS: UnitPlan[] = [
  /* ------------------------------------------------------------------ */
  /* FRANÇAIS                                                             */
  /* ------------------------------------------------------------------ */
  {
    id: 'francais-1re',
    subject: 'francais',
    grade: '1re',
    intro: 'Vous saurez lire, analyser et commenter les œuvres des quatre objets d’étude de première, maîtriser la grammaire attendue et réussir l’écrit comme l’oral de l’épreuve anticipée de français.',
    reference: 'Programme de français de seconde et de première des voies générale et technologique, BO spécial n°1 du 22 janvier 2019 ; programme national d’œuvres pour l’année scolaire 2026-2027, BO n°30 du 24 juillet 2025',
    chapters: [
      {
        id: 'poesie',
        title: 'La poésie du XIXe au XXIe siècle',
        programme: 'La poésie du XIXe siècle au XXIe siècle',
        lessons: [
          { id: 'vers-et-libertes', title: 'Du vers régulier au vers libre : lire un poème' },
          { id: 'rimbaud-cahier-de-douai', title: 'Rimbaud, « Cahier de Douai » : émancipations créatrices' },
          { id: 'ponge-rage-expression', title: 'Ponge, « La rage de l’expression » : dans l’atelier du poète' },
          { id: 'dorion-mes-forets', title: 'Dorion, « Mes forêts » : la poésie, la nature, l’intime' },
        ],
      },
      {
        id: 'langue-phrase-complexe',
        title: 'Étude de la langue : la phrase complexe',
        programme: 'Étude de la langue : les subordonnées circonstancielles (et reprise des notions de seconde)',
        lessons: [
          { id: 'juxtaposition-coordination', title: 'Juxtaposition, coordination, subordination : relier les propositions' },
          { id: 'subordonnees-circonstancielles', title: 'Les subordonnées circonstancielles : cause, but, conséquence, temps' },
          { id: 'circonstancielles-concession', title: 'Opposition, concession, condition, comparaison' },
        ],
      },
      {
        id: 'litterature-idees',
        title: 'La littérature d’idées du XVIe au XVIIIe siècle',
        programme: 'La littérature d’idées du XVIe siècle au XVIIIe siècle',
        lessons: [
          { id: 'argumenter-xvie-xviiie', title: 'Convaincre, persuader, délibérer : les formes de l’argumentation' },
          { id: 'la-boetie-servitude', title: 'La Boétie, « Discours de la servitude volontaire » : défendre la liberté' },
          { id: 'fontenelle-pluralite-mondes', title: 'Fontenelle, « Entretiens sur la pluralité des mondes » : le goût de la science' },
          { id: 'graffigny-peruvienne', title: 'Graffigny, « Lettres d’une Péruvienne » : un nouvel univers' },
        ],
      },
      {
        id: 'roman-recit',
        title: 'Le roman et le récit du Moyen Âge au XXIe siècle',
        programme: 'Le roman et le récit du Moyen Âge au XXIe siècle',
        lessons: [
          { id: 'histoire-du-roman', title: 'Du roman de chevalerie au roman contemporain : repères' },
          { id: 'chretien-chevalier-charrette', title: 'Chrétien de Troyes, « Le Chevalier de la charrette » : l’invention de l’amour' },
          { id: 'zola-pot-bouille', title: 'Zola, « Pot-Bouille » : dévoiler les rouages de la société' },
          { id: 'schwarz-bart-telumee', title: 'Schwarz-Bart, « Pluie et vent sur Télumée Miracle » : tisser les mémoires' },
        ],
      },
      {
        id: 'langue-interrogation-negation',
        title: 'Étude de la langue : interrogation et négation',
        programme: 'Étude de la langue : l’interrogation ; l’expression de la négation',
        lessons: [
          { id: 'interrogation-directe-indirecte', title: 'L’interrogation : totale, partielle, directe, indirecte' },
          { id: 'expression-negation', title: 'L’expression de la négation : totale, partielle, exceptive' },
          { id: 'analyser-une-phrase', title: 'Analyser une phrase complexe pas à pas' },
        ],
      },
      {
        id: 'theatre',
        title: 'Le théâtre du XVIIe au XXIe siècle',
        programme: 'Le théâtre du XVIIe siècle au XXIe siècle',
        lessons: [
          { id: 'texte-et-representation', title: 'Lire le théâtre : texte, représentation, mise en scène' },
          { id: 'corneille-menteur', title: 'Corneille, « Le Menteur » : mensonge et comédie' },
          { id: 'musset-on-ne-badine-pas', title: 'Musset, « On ne badine pas avec l’amour » : les jeux du cœur' },
          { id: 'sarraute-pour-un-oui', title: 'Sarraute, « Pour un oui ou pour un non » : théâtre et dispute' },
        ],
      },
      {
        id: 'bac-ecrit',
        title: 'Préparer l’écrit du bac de français',
        programme: 'Épreuve anticipée de français : épreuve écrite (commentaire ou dissertation)',
        lessons: [
          { id: 'comprendre-epreuve-ecrite', title: 'Comprendre l’épreuve écrite : commentaire ou dissertation' },
          { id: 'methode-commentaire', title: 'Le commentaire : de la lecture du texte au plan rédigé' },
          { id: 'methode-dissertation', title: 'La dissertation sur une œuvre et son parcours' },
          { id: 'rediger-gerer-temps', title: 'Rédiger, soigner la langue et gérer ses quatre heures' },
        ],
      },
      {
        id: 'bac-oral',
        title: 'Préparer l’oral du bac de français',
        programme: 'Épreuve anticipée de français : épreuve orale',
        lessons: [
          { id: 'deroule-oral', title: 'Le déroulé de l’oral et le récapitulatif des textes' },
          { id: 'explication-lineaire', title: 'L’explication linéaire : lecture expressive et analyse' },
          { id: 'question-grammaire-oral', title: 'Réussir la question de grammaire' },
          { id: 'entretien-oeuvre-choisie', title: 'L’entretien : présenter et défendre l’œuvre choisie' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* MATHÉMATIQUES (SPÉCIALITÉ)                                           */
  /* ------------------------------------------------------------------ */
  {
    id: 'maths-1re',
    subject: 'maths',
    grade: '1re',
    intro: 'Vous saurez étudier le second degré, les suites, la dérivation, l’exponentielle et la trigonométrie, calculer avec le produit scalaire et les probabilités, et réussir l’épreuve anticipée de mathématiques.',
    reference: 'Programme d’enseignement de spécialité de mathématiques de la classe de première de la voie générale, arrêté du 26 février 2026, BO n°14 du 2 avril 2026',
    chapters: [
      {
        id: 'second-degre',
        title: 'Le second degré',
        programme: 'Algèbre : équations, fonctions polynômes du second degré',
        lessons: [
          { id: 'forme-canonique', title: 'Forme canonique et variations d’un trinôme' },
          { id: 'discriminant-equations', title: 'Résoudre une équation du second degré : le discriminant' },
          { id: 'signe-factorisation', title: 'Signe d’un trinôme, factorisation, somme et produit des racines' },
        ],
      },
      {
        id: 'suites',
        title: 'Les suites numériques',
        programme: 'Algèbre : suites numériques, modèles discrets',
        lessons: [
          { id: 'generer-une-suite', title: 'Définir une suite : formule explicite ou relation de récurrence' },
          { id: 'suites-arithmetiques', title: 'Suites arithmétiques et croissance linéaire' },
          { id: 'suites-geometriques', title: 'Suites géométriques et croissance exponentielle' },
          { id: 'sommes-et-seuils', title: 'Sommes de termes, sens de variation et recherche de seuil en Python' },
        ],
      },
      {
        id: 'derivation',
        title: 'La dérivation',
        programme: 'Analyse : dérivation (point de vue local et point de vue global)',
        lessons: [
          { id: 'taux-de-variation', title: 'Taux de variation et nombre dérivé' },
          { id: 'tangente', title: 'Tangente à une courbe en un point' },
          { id: 'derivees-usuelles', title: 'Fonctions dérivées des fonctions usuelles' },
          { id: 'operations-derivees', title: 'Dériver une somme, un produit, un quotient, une composée affine' },
        ],
      },
      {
        id: 'variations',
        title: 'Variations et courbes représentatives',
        programme: 'Analyse : variations et courbes représentatives des fonctions',
        lessons: [
          { id: 'signe-derivee-variations', title: 'Signe de la dérivée et sens de variation' },
          { id: 'extremums', title: 'Extremums d’une fonction et problèmes d’optimisation' },
          { id: 'etude-de-fonction', title: 'Étudier une fonction de A à Z' },
        ],
      },
      {
        id: 'probabilites-conditionnelles',
        title: 'Probabilités conditionnelles et indépendance',
        programme: 'Probabilités et statistiques : probabilités conditionnelles et indépendance',
        lessons: [
          { id: 'probabilite-conditionnelle', title: 'Probabilité conditionnelle et tableaux croisés' },
          { id: 'arbres-probabilites-totales', title: 'Arbres pondérés et formule des probabilités totales' },
          { id: 'independance', title: 'Événements indépendants et succession de deux épreuves' },
        ],
      },
      {
        id: 'exponentielle',
        title: 'La fonction exponentielle',
        programme: 'Analyse : fonction exponentielle',
        lessons: [
          { id: 'definition-exponentielle', title: 'Définir la fonction exponentielle : f’ = f et f(0) = 1' },
          { id: 'proprietes-exponentielle', title: 'Propriétés algébriques et calculs avec l’exponentielle' },
          { id: 'etude-exponentielle', title: 'Variations, courbe et fonctions t ↦ exp(kt)' },
        ],
      },
      {
        id: 'trigonometrie',
        title: 'La trigonométrie',
        programme: 'Analyse : fonctions trigonométriques',
        lessons: [
          { id: 'cercle-trigonometrique', title: 'Le cercle trigonométrique et le radian' },
          { id: 'cosinus-sinus', title: 'Cosinus et sinus d’un réel, angles associés' },
          { id: 'fonctions-cos-sin', title: 'Les fonctions cosinus et sinus : parité, périodicité, courbes' },
        ],
      },
      {
        id: 'produit-scalaire',
        title: 'Le produit scalaire',
        programme: 'Géométrie : calcul vectoriel et produit scalaire',
        lessons: [
          { id: 'definitions-produit-scalaire', title: 'Définitions du produit scalaire' },
          { id: 'calculs-produit-scalaire', title: 'Propriétés, orthogonalité et calcul en repère orthonormé' },
          { id: 'al-kashi', title: 'Formule d’Al-Kashi et applications aux triangles' },
        ],
      },
      {
        id: 'geometrie-reperee',
        title: 'La géométrie repérée',
        programme: 'Géométrie : géométrie repérée',
        lessons: [
          { id: 'vecteur-normal-droite', title: 'Vecteur normal et équation cartésienne d’une droite' },
          { id: 'equation-cercle', title: 'Équation d’un cercle' },
          { id: 'parabole', title: 'Parabole représentative d’une fonction du second degré' },
        ],
      },
      {
        id: 'variables-aleatoires',
        title: 'Les variables aléatoires réelles',
        programme: 'Probabilités et statistiques : variables aléatoires réelles',
        lessons: [
          { id: 'loi-variable-aleatoire', title: 'Variable aléatoire et loi de probabilité' },
          { id: 'esperance', title: 'Espérance : le gain moyen' },
          { id: 'variance-ecart-type', title: 'Variance et écart type' },
        ],
      },
      {
        id: 'epreuve-anticipee',
        title: 'Préparer l’épreuve anticipée de mathématiques',
        programme: 'Épreuve anticipée de mathématiques : automatismes et exercices (2 heures, sans calculatrice)',
        lessons: [
          { id: 'automatismes-calcul', title: 'Automatismes : calcul numérique et algébrique sans calculatrice' },
          { id: 'automatismes-qcm', title: 'Automatismes : proportions, évolutions, lectures graphiques en QCM' },
          { id: 'methode-exercices', title: 'Méthode des exercices et gestion des deux heures' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* PHYSIQUE-CHIMIE (SPÉCIALITÉ)                                         */
  /* ------------------------------------------------------------------ */
  {
    id: 'physique-chimie-1re',
    subject: 'physique-chimie',
    grade: '1re',
    intro: 'Vous saurez suivre et doser une transformation chimique, relier la structure des entités aux propriétés de la matière, décrire mouvements, fluides et champs, faire des bilans d’énergie et expliquer ondes, images et couleurs.',
    reference: 'Programme de physique-chimie de première générale (enseignement de spécialité), BO spécial n°1 du 22 janvier 2019',
    chapters: [
      {
        id: 'composition-systeme',
        title: 'La composition d’un système chimique',
        programme: 'Constitution et transformations de la matière : détermination de la composition du système initial à l’aide de grandeurs physiques',
        lessons: [
          { id: 'quantite-de-matiere', title: 'Quantité de matière, masse molaire et volume molaire d’un gaz' },
          { id: 'concentration-absorbance', title: 'Concentration et absorbance : la loi de Beer-Lambert' },
          { id: 'spectrophotometrie', title: 'Doser par étalonnage avec un spectrophotomètre' },
        ],
      },
      {
        id: 'evolution-systeme',
        title: 'Suivre et doser une transformation chimique',
        programme: 'Constitution et transformations de la matière : suivi et modélisation de l’évolution d’un système chimique ; détermination d’une quantité de matière grâce à une transformation chimique',
        lessons: [
          { id: 'oxydoreduction', title: 'Oxydants, réducteurs et demi-équations électroniques' },
          { id: 'tableau-avancement', title: 'Tableau d’avancement, réactif limitant et état final' },
          { id: 'titrage-equivalence', title: 'Le titrage : équivalence et repérage par changement de couleur' },
        ],
      },
      {
        id: 'structure-entites',
        title: 'De la structure des entités aux propriétés de la matière',
        programme: 'Constitution et transformations de la matière : de la structure des entités aux propriétés physiques de la matière',
        lessons: [
          { id: 'schema-de-lewis', title: 'Schéma de Lewis d’une molécule ou d’un ion' },
          { id: 'geometrie-polarite', title: 'Géométrie des entités, électronégativité et polarité' },
          { id: 'cohesion-solides', title: 'Cohésion des solides ioniques et moléculaires' },
          { id: 'dissolution-extraction', title: 'Dissolution, solubilité, miscibilité et extraction' },
        ],
      },
      {
        id: 'chimie-organique',
        title: 'Les espèces chimiques organiques',
        programme: 'Constitution et transformations de la matière : propriétés physico-chimiques, synthèses et combustions d’espèces chimiques organiques',
        lessons: [
          { id: 'squelettes-groupes', title: 'Squelettes carbonés, groupes caractéristiques et nomenclature' },
          { id: 'spectroscopie-ir', title: 'Identifier une molécule par spectroscopie infrarouge' },
          { id: 'synthese-rendement', title: 'Les étapes d’une synthèse et le rendement' },
        ],
      },
      {
        id: 'combustions',
        title: 'Combustions et énergie chimique',
        programme: 'Constitution et transformations de la matière : conversions d’énergie au cours d’une transformation chimique',
        lessons: [
          { id: 'combustion-equation', title: 'Écrire et exploiter l’équation d’une combustion' },
          { id: 'energie-combustion', title: 'Énergie libérée, pouvoir calorifique et énergies de liaison' },
        ],
      },
      {
        id: 'interactions-champs',
        title: 'Interactions fondamentales et champs',
        programme: 'Mouvement et interactions : interactions fondamentales et introduction à la notion de champ',
        lessons: [
          { id: 'loi-coulomb-gravitation', title: 'Loi de Coulomb et loi de la gravitation universelle' },
          { id: 'champs-electrique-gravitation', title: 'Champ électrostatique et champ de gravitation' },
        ],
      },
      {
        id: 'fluide-au-repos',
        title: 'Un fluide au repos',
        programme: 'Mouvement et interactions : description d’un fluide au repos',
        lessons: [
          { id: 'pression-mariotte', title: 'Pression, force pressante et loi de Mariotte' },
          { id: 'statique-des-fluides', title: 'La loi fondamentale de la statique des fluides' },
        ],
      },
      {
        id: 'mouvement-systeme',
        title: 'Le mouvement d’un système',
        programme: 'Mouvement et interactions : mouvement d’un système',
        lessons: [
          { id: 'vecteur-variation-vitesse', title: 'Le vecteur variation de vitesse' },
          { id: 'forces-et-mouvement', title: 'Somme des forces et variation de la vitesse' },
        ],
      },
      {
        id: 'energie-electrique',
        title: 'L’énergie électrique',
        programme: 'L’énergie : conversions et transferts : aspects énergétiques des phénomènes électriques',
        lessons: [
          { id: 'intensite-porteurs', title: 'Porteurs de charge et intensité du courant' },
          { id: 'source-reelle-tension', title: 'Modèle d’une source réelle de tension' },
          { id: 'puissance-rendement', title: 'Puissance, effet Joule et rendement d’un convertisseur' },
        ],
      },
      {
        id: 'energie-mecanique',
        title: 'L’énergie mécanique',
        programme: 'L’énergie : conversions et transferts : aspects énergétiques des phénomènes mécaniques',
        lessons: [
          { id: 'energie-cinetique-travail', title: 'Énergie cinétique, travail d’une force et théorème de l’énergie cinétique' },
          { id: 'energie-potentielle', title: 'Forces conservatives et énergie potentielle de pesanteur' },
          { id: 'conservation-energie', title: 'Énergie mécanique : conservation et non-conservation' },
        ],
      },
      {
        id: 'ondes-mecaniques',
        title: 'Les ondes mécaniques',
        programme: 'Ondes et signaux : ondes mécaniques',
        lessons: [
          { id: 'onde-progressive', title: 'Onde mécanique progressive, célérité et retard' },
          { id: 'ondes-periodiques', title: 'Ondes périodiques : période et longueur d’onde' },
        ],
      },
      {
        id: 'lumiere',
        title: 'La lumière : images et couleurs',
        programme: 'Ondes et signaux : la lumière : images et couleurs, modèles ondulatoire et particulaire',
        lessons: [
          { id: 'lentilles-images', title: 'Lentilles minces : relation de conjugaison et grandissement' },
          { id: 'couleurs', title: 'Synthèse additive, synthèse soustractive et couleur des objets' },
          { id: 'photon-energie', title: 'Le photon et les niveaux d’énergie de l’atome' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* SVT (SPÉCIALITÉ)                                                     */
  /* ------------------------------------------------------------------ */
  {
    id: 'svt-1re',
    subject: 'svt',
    grade: '1re',
    intro: 'Vous saurez expliquer comment le patrimoine génétique se transmet, varie et s’exprime, comment fonctionnent la Terre interne et les écosystèmes, et comment le corps se défend.',
    reference: 'Programme de sciences de la vie et de la Terre de première générale (enseignement de spécialité), BO spécial n°1 du 22 janvier 2019',
    chapters: [
      {
        id: 'divisions-cellulaires',
        title: 'Les divisions cellulaires des eucaryotes',
        programme: 'La Terre, la vie et l’organisation du vivant : transmission, variation et expression du patrimoine génétique (les divisions cellulaires des eucaryotes)',
        lessons: [
          { id: 'chromosomes-cycle', title: 'Chromosomes et cycle cellulaire' },
          { id: 'mitose', title: 'La mitose : deux cellules génétiquement identiques' },
          { id: 'meiose', title: 'La méiose : des cellules à n chromosomes' },
        ],
      },
      {
        id: 'replication-adn',
        title: 'La réplication de l’ADN',
        programme: 'La Terre, la vie et l’organisation du vivant : transmission, variation et expression du patrimoine génétique (la réplication de l’ADN)',
        lessons: [
          { id: 'structure-adn', title: 'La molécule d’ADN, support de l’information génétique' },
          { id: 'replication-semi-conservative', title: 'La réplication semi-conservative' },
        ],
      },
      {
        id: 'mutations',
        title: 'Mutations de l’ADN et variabilité génétique',
        programme: 'La Terre, la vie et l’organisation du vivant : transmission, variation et expression du patrimoine génétique (mutations de l’ADN et variabilité génétique)',
        lessons: [
          { id: 'types-de-mutations', title: 'Les différents types de mutations' },
          { id: 'origine-reparation', title: 'Erreurs de réplication, agents mutagènes et réparation' },
          { id: 'mutations-somatiques-germinales', title: 'Mutations somatiques, mutations germinales et diversité des allèles' },
        ],
      },
      {
        id: 'expression-genetique',
        title: 'L’expression du patrimoine génétique',
        programme: 'La Terre, la vie et l’organisation du vivant : transmission, variation et expression du patrimoine génétique (l’expression du patrimoine génétique)',
        lessons: [
          { id: 'transcription', title: 'La transcription et la maturation des ARN' },
          { id: 'traduction-code', title: 'La traduction et le code génétique' },
          { id: 'genotype-phenotype', title: 'Du génotype au phénotype, à plusieurs échelles' },
        ],
      },
      {
        id: 'enzymes',
        title: 'Les enzymes',
        programme: 'La Terre, la vie et l’organisation du vivant : transmission, variation et expression du patrimoine génétique (les enzymes, des biomolécules aux propriétés catalytiques)',
        lessons: [
          { id: 'enzymes-catalyseurs', title: 'Les enzymes, des catalyseurs biologiques spécifiques' },
          { id: 'activite-enzymatique', title: 'Ce qui fait varier l’activité d’une enzyme' },
        ],
      },
      {
        id: 'structure-globe',
        title: 'La structure du globe terrestre',
        programme: 'La Terre, la vie et l’organisation du vivant : la dynamique interne de la Terre (la structure du globe terrestre)',
        lessons: [
          { id: 'ondes-sismiques', title: 'Les ondes sismiques révèlent l’intérieur de la Terre' },
          { id: 'enveloppes-terrestres', title: 'Croûtes, manteau, noyau : un modèle du globe' },
          { id: 'lithosphere-asthenosphere', title: 'Lithosphère et asthénosphère' },
        ],
      },
      {
        id: 'dynamique-lithosphere',
        title: 'La dynamique de la lithosphère',
        programme: 'La Terre, la vie et l’organisation du vivant : la dynamique interne de la Terre (la dynamique de la lithosphère)',
        lessons: [
          { id: 'mobilite-plaques', title: 'Les arguments de la mobilité des plaques' },
          { id: 'dorsales', title: 'Les dorsales : naissance de la lithosphère océanique' },
          { id: 'subduction', title: 'Les zones de subduction : la lithosphère plonge' },
        ],
      },
      {
        id: 'ecosystemes',
        title: 'Écosystèmes et services environnementaux',
        programme: 'Enjeux contemporains de la planète : écosystèmes et services environnementaux',
        lessons: [
          { id: 'interactions-ecosysteme', title: 'Un écosystème : des interactions entre êtres vivants et milieu' },
          { id: 'dynamique-ecosystemes', title: 'Équilibre dynamique et perturbations d’un écosystème' },
          { id: 'services-ecosystemiques', title: 'L’humanité et les services écosystémiques' },
        ],
      },
      {
        id: 'genetique-sante',
        title: 'Variation génétique et santé',
        programme: 'Corps humain et santé : variation génétique et santé',
        lessons: [
          { id: 'genetique-maladie', title: 'Patrimoine génétique et maladie' },
          { id: 'cancerisation', title: 'Altérations du génome et cancérisation' },
          { id: 'resistance-antibiotiques', title: 'Variation génétique bactérienne et résistance aux antibiotiques' },
        ],
      },
      {
        id: 'systeme-immunitaire',
        title: 'Le fonctionnement du système immunitaire',
        programme: 'Corps humain et santé : le fonctionnement du système immunitaire humain',
        lessons: [
          { id: 'immunite-innee', title: 'L’immunité innée et la réaction inflammatoire' },
          { id: 'lymphocytes-b-anticorps', title: 'L’immunité adaptative : lymphocytes B et anticorps' },
          { id: 'lymphocytes-t', title: 'L’immunité adaptative : lymphocytes T' },
          { id: 'vaccination', title: 'La mémoire immunitaire et la vaccination' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* SES (SPÉCIALITÉ)                                                     */
  /* ------------------------------------------------------------------ */
  {
    id: 'ses-1re',
    subject: 'ses',
    grade: '1re',
    intro: 'Vous saurez expliquer le fonctionnement et les défaillances des marchés, le financement de l’économie et la monnaie, la socialisation, les liens sociaux, la déviance, l’opinion et le vote, la protection sociale et l’entreprise.',
    reference: 'Programme de sciences économiques et sociales de première générale (enseignement de spécialité), BO spécial n°1 du 22 janvier 2019',
    chapters: [
      {
        id: 'socialisation',
        title: 'La socialisation',
        programme: 'Sociologie et science politique : Comment la socialisation contribue-t-elle à expliquer les différences de comportement des individus ?',
        lessons: [
          { id: 'socialisation-instances', title: 'Normes, valeurs et instances de socialisation' },
          { id: 'socialisation-differenciee', title: 'Une socialisation différenciée selon le milieu et le genre' },
          { id: 'socialisation-secondaire', title: 'Socialisation primaire, socialisation secondaire' },
        ],
      },
      {
        id: 'marche-concurrentiel',
        title: 'Le marché concurrentiel',
        programme: 'Science économique : Comment un marché concurrentiel fonctionne-t-il ?',
        lessons: [
          { id: 'offre-demande', title: 'Courbes d’offre et de demande' },
          { id: 'equilibre-marche', title: 'L’équilibre de marché et ses déplacements' },
          { id: 'surplus-gains-echange', title: 'Surplus et gains à l’échange' },
        ],
      },
      {
        id: 'concurrence-imparfaite',
        title: 'Les marchés imparfaitement concurrentiels',
        programme: 'Science économique : Comment les marchés imparfaitement concurrentiels fonctionnent-ils ?',
        lessons: [
          { id: 'pouvoir-de-marche', title: 'Pouvoir de marché et monopole' },
          { id: 'oligopole-ententes', title: 'L’oligopole, la stratégie et les ententes' },
          { id: 'politique-concurrence', title: 'La politique de la concurrence' },
        ],
      },
      {
        id: 'defaillances-marche',
        title: 'Les défaillances du marché',
        programme: 'Science économique : Quelles sont les principales défaillances du marché ?',
        lessons: [
          { id: 'externalites', title: 'Les externalités et l’intervention publique' },
          { id: 'biens-collectifs-communs', title: 'Biens collectifs et biens communs' },
          { id: 'asymetries-information', title: 'Les asymétries d’information' },
        ],
      },
      {
        id: 'liens-sociaux',
        title: 'Les liens sociaux',
        programme: 'Sociologie et science politique : Comment se construisent et évoluent les liens sociaux ?',
        lessons: [
          { id: 'groupes-sociaux', title: 'Groupes sociaux, sociabilités et réseaux' },
          { id: 'solidarite-cohesion', title: 'Des solidarités en mutation et des liens fragilisés' },
        ],
      },
      {
        id: 'financement-economie',
        title: 'Le financement des agents économiques',
        programme: 'Science économique : Comment les agents économiques se financent-ils ?',
        lessons: [
          { id: 'besoin-capacite-financement', title: 'Épargne, besoin et capacité de financement' },
          { id: 'financement-direct-indirect', title: 'Financement direct, financement intermédié et taux d’intérêt' },
        ],
      },
      {
        id: 'monnaie',
        title: 'La monnaie et sa création',
        programme: 'Science économique : Qu’est-ce que la monnaie et comment est-elle créée ?',
        lessons: [
          { id: 'fonctions-formes-monnaie', title: 'Fonctions et formes de la monnaie' },
          { id: 'creation-monetaire', title: 'Les banques créent la monnaie par le crédit' },
          { id: 'banque-centrale', title: 'Le rôle de la banque centrale' },
        ],
      },
      {
        id: 'deviance',
        title: 'La déviance',
        programme: 'Sociologie et science politique : Quels sont les processus sociaux qui contribuent à la déviance ?',
        lessons: [
          { id: 'normes-deviance', title: 'Normes, déviance et délinquance' },
          { id: 'controle-etiquetage', title: 'Contrôle social et étiquetage' },
        ],
      },
      {
        id: 'opinion-publique',
        title: 'L’opinion publique',
        programme: 'Sociologie et science politique : Comment se forme et s’exprime l’opinion publique ?',
        lessons: [
          { id: 'formation-opinion', title: 'Comment l’opinion publique se forme' },
          { id: 'sondages', title: 'Les sondages d’opinion et leurs limites' },
        ],
      },
      {
        id: 'vote',
        title: 'Le vote',
        programme: 'Sociologie et science politique : Voter : une affaire individuelle ou collective ?',
        lessons: [
          { id: 'participation-abstention', title: 'Participation électorale et abstention' },
          { id: 'variables-du-vote', title: 'Les variables lourdes du vote' },
          { id: 'volatilite-electorale', title: 'Volatilité électorale et offre politique' },
        ],
      },
      {
        id: 'risques-protection-sociale',
        title: 'Assurance et protection sociale',
        programme: 'Regards croisés : Comment l’assurance et la protection sociale contribuent-elles à la gestion des risques dans les sociétés développées ?',
        lessons: [
          { id: 'risques-assurance', title: 'Les risques et le principe de l’assurance' },
          { id: 'protection-sociale', title: 'La protection sociale : assurance, assistance, solidarité' },
        ],
      },
      {
        id: 'entreprises',
        title: 'L’organisation et la gouvernance des entreprises',
        programme: 'Regards croisés : Comment les entreprises sont-elles organisées et gouvernées ?',
        lessons: [
          { id: 'diversite-entreprises', title: 'La diversité des entreprises' },
          { id: 'gouvernance-entreprise', title: 'Gouvernance, pouvoir et relations dans l’entreprise' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* HGGSP (SPÉCIALITÉ)                                                   */
  /* ------------------------------------------------------------------ */
  {
    id: 'hggsp-1re',
    subject: 'hggsp',
    grade: '1re',
    intro: 'Vous saurez analyser la démocratie, la puissance, les frontières, l’information et les relations entre États et religions, en croisant histoire, géographie, géopolitique et science politique.',
    reference: 'Programme d’histoire-géographie, géopolitique et sciences politiques de première générale (enseignement de spécialité), BO spécial n°1 du 22 janvier 2019',
    chapters: [
      {
        id: 'penser-democratie',
        title: 'Penser la démocratie',
        programme: 'Thème 1 : Comprendre un régime politique : la démocratie (introduction ; axe 1 : Penser la démocratie : démocratie directe et démocratie représentative)',
        lessons: [
          { id: 'definir-democratie', title: 'Qu’est-ce qu’une démocratie ?' },
          { id: 'athenes-democratie-directe', title: 'Athènes au Ve siècle avant J.-C. : une démocratie directe' },
          { id: 'democratie-representative', title: 'Constant et Tocqueville : penser la démocratie représentative' },
        ],
      },
      {
        id: 'avancees-reculs-democratie',
        title: 'Avancées et reculs des démocraties',
        programme: 'Thème 1 : Comprendre un régime politique : la démocratie (axe 2 : Avancées et reculs des démocraties ; objet de travail conclusif : L’Union européenne et la démocratie)',
        lessons: [
          { id: 'chili-1970-1973', title: 'Le Chili de 1970 à 1973 : une démocratie renversée' },
          { id: 'portugal-espagne-transitions', title: 'Portugal et Espagne, 1974-1982 : des transitions démocratiques' },
          { id: 'union-europeenne-democratie', title: 'L’Union européenne et la démocratie' },
        ],
      },
      {
        id: 'puissance-histoire',
        title: 'Essor et déclin des puissances',
        programme: 'Thème 2 : Analyser les dynamiques des puissances internationales (introduction ; axe 1 : Essor et déclin des puissances : un regard historique)',
        lessons: [
          { id: 'definir-puissance', title: 'Qu’est-ce que la puissance ?' },
          { id: 'empire-ottoman', title: 'L’Empire ottoman, de l’essor au déclin' },
          { id: 'russie-depuis-1991', title: 'La Russie depuis 1991 : une puissance qui se reconstruit' },
        ],
      },
      {
        id: 'formes-indirectes-puissance',
        title: 'Les formes indirectes de la puissance',
        programme: 'Thème 2 : Analyser les dynamiques des puissances internationales (axe 2 : Formes indirectes de la puissance ; objet de travail conclusif : La puissance des États-Unis aujourd’hui)',
        lessons: [
          { id: 'puissance-langue', title: 'L’enjeu de la langue : anglais, français, francophonie' },
          { id: 'geants-numerique', title: 'Les nouvelles technologies et la puissance des géants du numérique' },
          { id: 'puissance-etats-unis', title: 'La puissance des États-Unis aujourd’hui' },
        ],
      },
      {
        id: 'tracer-frontieres',
        title: 'Tracer des frontières',
        programme: 'Thème 3 : Étudier les divisions politiques du monde : les frontières (introduction ; axe 1 : Tracer des frontières, approche géopolitique)',
        lessons: [
          { id: 'frontieres-aujourdhui', title: 'Les frontières dans le monde d’aujourd’hui' },
          { id: 'limes-rhenan', title: 'Le limes rhénan : une frontière pour se protéger' },
          { id: 'conference-berlin-afrique', title: 'La conférence de Berlin et le partage de l’Afrique' },
          { id: 'frontiere-deux-corees', title: 'La frontière entre les deux Corées' },
        ],
      },
      {
        id: 'frontieres-en-debat',
        title: 'Les frontières en débat',
        programme: 'Thème 3 : Étudier les divisions politiques du monde : les frontières (axe 2 : Les frontières en débat ; objet de travail conclusif : Les frontières internes et externes de l’Union européenne)',
        lessons: [
          { id: 'frontiere-germano-polonaise', title: 'La frontière germano-polonaise de 1939 à 1990' },
          { id: 'droit-de-la-mer', title: 'Le droit de la mer et les espaces maritimes' },
          { id: 'frontieres-union-europeenne', title: 'Les frontières internes et externes de l’Union européenne' },
        ],
      },
      {
        id: 'revolutions-information',
        title: 'Les révolutions techniques de l’information',
        programme: 'Thème 4 : S’informer : un regard critique sur les sources et modes de communication (introduction ; axe 1 : Les grandes révolutions techniques de l’information)',
        lessons: [
          { id: 'sinformer-aujourdhui', title: 'S’informer aujourd’hui : sources, médias, réseaux' },
          { id: 'presse-grand-tirage', title: 'De l’imprimerie à la presse à grand tirage' },
          { id: 'radio-television-internet', title: 'Radio, télévision, Internet : une information mondialisée' },
        ],
      },
      {
        id: 'liberte-controle-information',
        title: 'Liberté ou contrôle de l’information',
        programme: 'Thème 4 : S’informer : un regard critique sur les sources et modes de communication (axe 2 : Liberté ou contrôle de l’information : un débat politique fondamental ; objet de travail conclusif)',
        lessons: [
          { id: 'liberte-presse', title: 'La liberté de la presse, un combat politique' },
          { id: 'information-controlee', title: 'Information, censure et propagande' },
          { id: 'information-internet', title: 'L’information à l’heure d’Internet' },
        ],
      },
      {
        id: 'pouvoir-religion',
        title: 'Pouvoir politique et religion',
        programme: 'Thème 5 : Analyser les relations entre États et religions (introduction ; axe 1 : Pouvoir et religion : des liens historiques traditionnels)',
        lessons: [
          { id: 'etats-religions-monde', title: 'États et religions dans le monde actuel' },
          { id: 'pouvoir-religion-histoire', title: 'Pouvoir et religion : des liens historiques traditionnels' },
        ],
      },
      {
        id: 'secularisation',
        title: 'États et religions : une inégale sécularisation',
        programme: 'Thème 5 : Analyser les relations entre États et religions (axe 2 : États et religions : une inégale sécularisation ; objet de travail conclusif : État et religions en Inde)',
        lessons: [
          { id: 'secularisation-laicite', title: 'Sécularisation et laïcisation : des chemins différents' },
          { id: 'religion-vie-politique', title: 'La religion dans la vie politique d’États contemporains' },
          { id: 'etat-religions-inde', title: 'État et religions en Inde' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* NSI (SPÉCIALITÉ)                                                     */
  /* ------------------------------------------------------------------ */
  {
    id: 'nsi-1re',
    subject: 'nsi',
    grade: '1re',
    intro: 'Vous saurez programmer en Python, représenter et traiter des données, écrire et analyser des algorithmes classiques, et comprendre le fonctionnement d’un ordinateur, d’un réseau et du Web.',
    reference: 'Programme de numérique et sciences informatiques de première générale (enseignement de spécialité), BO spécial n°1 du 22 janvier 2019',
    chapters: [
      {
        id: 'histoire-informatique',
        title: 'Une histoire de l’informatique',
        programme: 'Histoire de l’informatique',
        lessons: [
          { id: 'machines-pionniers', title: 'Des machines à calculer aux ordinateurs : les pionniers' },
          { id: 'langages-reseaux-web', title: 'Langages, réseaux, Web : les grandes étapes' },
        ],
      },
      {
        id: 'bases-python',
        title: 'Programmer en Python : les bases',
        programme: 'Langages et programmation : constructions élémentaires',
        lessons: [
          { id: 'variables-affectation', title: 'Variables, types et affectation' },
          { id: 'instructions-conditionnelles', title: 'Les instructions conditionnelles' },
          { id: 'boucles', title: 'Les boucles bornées et non bornées' },
          { id: 'fonctions', title: 'Écrire et appeler des fonctions' },
        ],
      },
      {
        id: 'types-de-base',
        title: 'Représenter les données : types de base',
        programme: 'Représentation des données : types et valeurs de base',
        lessons: [
          { id: 'binaire-hexadecimal', title: 'Écrire un entier en binaire et en hexadécimal' },
          { id: 'complement-a-deux', title: 'Les entiers relatifs : le complément à deux' },
          { id: 'nombres-flottants', title: 'Les nombres flottants et leurs limites' },
          { id: 'booleens-texte', title: 'Booléens, opérateurs logiques et encodage des textes' },
        ],
      },
      {
        id: 'types-construits',
        title: 'Représenter les données : types construits',
        programme: 'Représentation des données : types construits',
        lessons: [
          { id: 'p-uplets', title: 'Les p-uplets et p-uplets nommés' },
          { id: 'tableaux-listes', title: 'Les tableaux : listes, compréhension, matrices' },
          { id: 'dictionnaires', title: 'Les dictionnaires : clés et valeurs' },
        ],
      },
      {
        id: 'mise-au-point',
        title: 'Spécifier, tester, mettre au point',
        programme: 'Langages et programmation : spécification, mise au point de programmes, utilisation de bibliothèques, diversité des langages',
        lessons: [
          { id: 'specification-assertions', title: 'Spécifier une fonction : préconditions, postconditions, assertions' },
          { id: 'tests-mise-au-point', title: 'Tester et corriger un programme' },
          { id: 'bibliotheques-langages', title: 'Utiliser des bibliothèques et comparer des langages' },
        ],
      },
      {
        id: 'donnees-en-tables',
        title: 'Traiter des données en tables',
        programme: 'Traitement de données en tables',
        lessons: [
          { id: 'fichiers-csv', title: 'Importer une table depuis un fichier CSV' },
          { id: 'recherche-selection', title: 'Rechercher et sélectionner dans une table' },
          { id: 'trier-fusionner', title: 'Trier une table et fusionner deux tables' },
        ],
      },
      {
        id: 'parcours-tris',
        title: 'Algorithmique : parcours et tris',
        programme: 'Algorithmique : parcours séquentiel d’un tableau ; tris par insertion, par sélection',
        lessons: [
          { id: 'parcours-sequentiel', title: 'Parcours séquentiel : recherche, maximum, moyenne' },
          { id: 'tri-par-selection', title: 'Le tri par sélection' },
          { id: 'tri-par-insertion', title: 'Le tri par insertion' },
          { id: 'cout-correction', title: 'Coût, terminaison et correction d’un algorithme' },
        ],
      },
      {
        id: 'dichotomie-glouton-knn',
        title: 'Algorithmique : dichotomie, gloutons, k plus proches voisins',
        programme: 'Algorithmique : recherche dichotomique dans un tableau trié ; algorithmes gloutons ; algorithme des k plus proches voisins',
        lessons: [
          { id: 'recherche-dichotomique', title: 'La recherche dichotomique dans un tableau trié' },
          { id: 'algorithmes-gloutons', title: 'Les algorithmes gloutons : le rendu de monnaie' },
          { id: 'k-plus-proches-voisins', title: 'L’algorithme des k plus proches voisins' },
        ],
      },
      {
        id: 'architecture-os',
        title: 'Architecture des machines et systèmes d’exploitation',
        programme: 'Architectures matérielles et systèmes d’exploitation : modèle de von Neumann, systèmes d’exploitation, périphériques',
        lessons: [
          { id: 'von-neumann', title: 'Le modèle de von Neumann et le langage machine' },
          { id: 'systeme-exploitation', title: 'Le système d’exploitation et la ligne de commande' },
          { id: 'peripheriques-capteurs', title: 'Périphériques, capteurs et actionneurs' },
        ],
      },
      {
        id: 'reseaux',
        title: 'Les réseaux',
        programme: 'Architectures matérielles et systèmes d’exploitation : transmission de données dans un réseau, protocoles de communication',
        lessons: [
          { id: 'paquets-protocoles', title: 'Transmettre des données : paquets, adresses, protocoles' },
          { id: 'bit-alterne', title: 'Fiabiliser une transmission : le protocole du bit alterné' },
        ],
      },
      {
        id: 'web',
        title: 'Interactions sur le Web',
        programme: 'Interactions entre l’homme et la machine sur le Web',
        lessons: [
          { id: 'html-css-javascript', title: 'Pages Web et événements : HTML, CSS, JavaScript' },
          { id: 'client-serveur-http', title: 'Le modèle client-serveur et le protocole HTTP' },
          { id: 'formulaires-get-post', title: 'Les formulaires : méthodes GET et POST' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* ENSEIGNEMENT SCIENTIFIQUE                                            */
  /* ------------------------------------------------------------------ */
  {
    id: 'ens-sci-1re',
    subject: 'ens-sci',
    grade: '1re',
    intro: 'Vous saurez expliquer l’histoire de la matière, l’énergie solaire, la place singulière de la Terre et la physique du son, et utiliser les mathématiques pour analyser des données, l’aléatoire et des évolutions.',
    reference: 'Programme d’enseignement scientifique de première générale, BO spécial n°1 du 22 janvier 2019 ; programme de mathématiques intégré à l’enseignement scientifique de première, BO n°14 du 2 avril 2026',
    chapters: [
      {
        id: 'histoire-matiere',
        title: 'Une longue histoire de la matière',
        programme: 'Thème 1 : Une longue histoire de la matière',
        lessons: [
          { id: 'elements-chimiques', title: 'Les éléments chimiques : nucléosynthèse et radioactivité' },
          { id: 'cristaux', title: 'Des édifices ordonnés : les cristaux' },
          { id: 'cellule-vivante', title: 'Une structure complexe : la cellule vivante' },
        ],
      },
      {
        id: 'soleil-energie',
        title: 'Le Soleil, notre source d’énergie',
        programme: 'Thème 2 : Le Soleil, notre source d’énergie',
        lessons: [
          { id: 'rayonnement-solaire', title: 'Le rayonnement solaire' },
          { id: 'bilan-radiatif', title: 'Le bilan radiatif terrestre et l’effet de serre' },
          { id: 'photosynthese', title: 'La photosynthèse : convertir l’énergie solaire' },
          { id: 'bilan-thermique-corps', title: 'Le bilan thermique du corps humain' },
        ],
      },
      {
        id: 'terre-astre',
        title: 'La Terre, un astre singulier',
        programme: 'Thème 3 : La Terre, un astre singulier',
        lessons: [
          { id: 'forme-de-la-terre', title: 'La forme de la Terre : d’Ératosthène à la géodésie' },
          { id: 'age-de-la-terre', title: 'L’histoire de l’âge de la Terre' },
          { id: 'terre-dans-univers', title: 'La Terre dans l’Univers : du géocentrisme à l’héliocentrisme' },
        ],
      },
      {
        id: 'son-musique',
        title: 'Son et musique, porteurs d’information',
        programme: 'Thème 4 : Son et musique, porteurs d’information',
        lessons: [
          { id: 'son-vibration', title: 'Le son, un phénomène vibratoire' },
          { id: 'gammes-nombres', title: 'La musique ou l’art de faire entendre les nombres' },
          { id: 'numerisation-son', title: 'Le son, une information à coder' },
          { id: 'entendre-musique', title: 'Entendre la musique : l’oreille et le cerveau' },
        ],
      },
      {
        id: 'information-chiffree',
        title: 'Mathématiques : analyser l’information chiffrée',
        programme: 'Mathématiques intégrées : analyse de l’information chiffrée',
        lessons: [
          { id: 'proportions-evolutions', title: 'Proportions, taux d’évolution et coefficients multiplicateurs' },
          { id: 'statistique-deux-variables', title: 'Séries statistiques à deux variables' },
        ],
      },
      {
        id: 'phenomenes-aleatoires',
        title: 'Mathématiques : les phénomènes aléatoires',
        programme: 'Mathématiques intégrées : phénomènes aléatoires',
        lessons: [
          { id: 'tableaux-croises', title: 'Tableaux croisés et fréquences conditionnelles' },
          { id: 'probabilites-arbres', title: 'Probabilités conditionnelles et arbres' },
        ],
      },
      {
        id: 'phenomenes-evolution',
        title: 'Mathématiques : modéliser des évolutions',
        programme: 'Mathématiques intégrées : phénomènes d’évolution modélisés par des fonctions',
        lessons: [
          { id: 'evolution-lineaire', title: 'Évolutions linéaires : suites arithmétiques et fonctions affines' },
          { id: 'modele-quadratique', title: 'Modéliser par une fonction du second degré' },
          { id: 'evolution-exponentielle', title: 'Évolutions exponentielles : suites géométriques et fonctions x ↦ aˣ' },
        ],
      },
      {
        id: 'epreuve-anticipee-es',
        title: 'Préparer l’épreuve anticipée de mathématiques',
        programme: 'Épreuve anticipée de mathématiques (candidats sans spécialité mathématiques) : automatismes et exercices',
        lessons: [
          { id: 'automatismes-es', title: 'Automatismes : calculs, pourcentages et graphiques sans calculatrice' },
          { id: 'exercices-type-es', title: 'Méthode des exercices et gestion des deux heures' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* HISTOIRE-GÉOGRAPHIE (TRONC COMMUN)                                   */
  /* ------------------------------------------------------------------ */
  {
    id: 'hg-1re',
    subject: 'hg',
    grade: '1re',
    intro: 'Vous saurez raconter et expliquer l’Europe et la France de la Révolution à la Première Guerre mondiale, et analyser la métropolisation, les espaces productifs, les espaces ruraux et les recompositions de la Chine.',
    reference: 'Programme d’histoire-géographie de première générale (enseignement commun), BO spécial n°1 du 22 janvier 2019',
    chapters: [
      {
        id: 'europe-revolutions',
        title: 'L’Europe face aux révolutions',
        programme: 'Histoire, thème 1 : L’Europe face aux révolutions',
        lessons: [
          { id: 'revolution-francaise', title: 'La Révolution française : une nouvelle conception de la nation' },
          { id: 'empire-napoleonien', title: 'Le Consulat et l’Empire : consolider et diffuser la Révolution' },
          { id: 'restauration-revolution', title: 'L’Europe entre restauration et révolution (1814-1848)' },
        ],
      },
      {
        id: 'france-nationalites',
        title: 'La France dans l’Europe des nationalités (1848-1871)',
        programme: 'Histoire, thème 2 : La France dans l’Europe des nationalités : politique et société (1848-1871)',
        lessons: [
          { id: 'deuxieme-republique', title: 'La Deuxième République : l’entrée dans l’âge démocratique' },
          { id: 'second-empire', title: 'Le Second Empire, un régime autoritaire qui se libéralise' },
          { id: 'industrialisation', title: 'L’industrialisation transforme l’économie et la société' },
          { id: 'nouveaux-etats-europe', title: 'La France et la construction de l’Italie et de l’Allemagne' },
        ],
      },
      {
        id: 'troisieme-republique',
        title: 'La Troisième République avant 1914',
        programme: 'Histoire, thème 3 : La Troisième République avant 1914 : un régime politique, un empire colonial',
        lessons: [
          { id: 'projet-republicain', title: 'La mise en œuvre du projet républicain' },
          { id: 'societe-francaise-1914', title: 'Permanences et mutations de la société française jusqu’en 1914' },
          { id: 'metropole-colonies', title: 'Métropole et colonies' },
        ],
      },
      {
        id: 'premiere-guerre-mondiale',
        title: 'La Première Guerre mondiale',
        programme: 'Histoire, thème 4 : La Première Guerre mondiale : le « suicide de l’Europe » et la fin des empires européens',
        lessons: [
          { id: 'embrasement-mondial', title: 'Un embrasement mondial et ses grandes étapes' },
          { id: 'societes-en-guerre', title: 'Les sociétés en guerre : civils acteurs et victimes' },
          { id: 'sortir-de-la-guerre', title: 'Sortir de la guerre : traités et nouvel ordre des nations' },
        ],
      },
      {
        id: 'metropolisation',
        title: 'La métropolisation',
        programme: 'Géographie, thème 1 : La métropolisation : un processus mondial différencié',
        lessons: [
          { id: 'poids-des-metropoles', title: 'Les villes à l’échelle mondiale : le poids croissant des métropoles' },
          { id: 'metropoles-inegales', title: 'Des métropoles inégales et en mutation' },
          { id: 'france-metropolisation', title: 'La France : la métropolisation et ses effets' },
        ],
      },
      {
        id: 'espaces-production',
        title: 'Espaces et acteurs de la production',
        programme: 'Géographie, thème 2 : Une diversification des espaces et des acteurs de la production',
        lessons: [
          { id: 'espaces-productifs-monde', title: 'Les espaces de production dans le monde : une diversité croissante' },
          { id: 'littoralisation-flux', title: 'Métropolisation, littoralisation et accroissement des flux' },
          { id: 'france-espaces-productifs', title: 'La France : les espaces de production et leurs acteurs' },
        ],
      },
      {
        id: 'espaces-ruraux',
        title: 'Les espaces ruraux',
        programme: 'Géographie, thème 3 : Les espaces ruraux : multifonctionnalité ou fragmentation ?',
        lessons: [
          { id: 'fragmentation-rurale', title: 'La fragmentation des espaces ruraux' },
          { id: 'fonctions-non-agricoles', title: 'Fonctions non agricoles et conflits d’usage' },
          { id: 'france-espaces-ruraux', title: 'La France : des espaces ruraux multifonctionnels' },
        ],
      },
      {
        id: 'chine',
        title: 'La Chine : des recompositions spatiales multiples',
        programme: 'Géographie, thème conclusif : La Chine : des recompositions spatiales multiples',
        lessons: [
          { id: 'chine-developpement', title: 'Développement et inégalités en Chine' },
          { id: 'chine-metropoles-rural', title: 'Métropoles, littoraux et campagnes chinoises' },
        ],
      },
      {
        id: 'methodes-hg',
        title: 'Les méthodes de l’histoire-géographie',
        programme: 'Capacités et méthodes du programme d’histoire-géographie',
        lessons: [
          { id: 'analyse-de-document', title: 'Analyser un document en histoire et en géographie' },
          { id: 'reponse-construite', title: 'Rédiger une réponse construite' },
          { id: 'croquis-schema', title: 'Réaliser un croquis ou un schéma' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* EMC                                                                  */
  /* ------------------------------------------------------------------ */
  {
    id: 'emc-1re',
    subject: 'emc',
    grade: '1re',
    intro: 'Vous saurez expliquer comment les valeurs de la République, la nation et la citoyenneté assurent la cohésion d’une société démocratique diverse.',
    reference: 'Programme d’enseignement moral et civique du cours préparatoire à la classe terminale, BO n°24 du 13 juin 2024 (classe de première : « Cohésion et diversité dans une société démocratique »)',
    chapters: [
      {
        id: 'valeurs-republique',
        title: 'Les valeurs et les principes de la République',
        programme: 'Cohésion et diversité dans une société démocratique : les valeurs et les principes de la République à l’épreuve de la cohésion sociale',
        lessons: [
          { id: 'valeurs-principes', title: 'Liberté, égalité, fraternité, laïcité : les principes communs' },
          { id: 'solidarite-cohesion-sociale', title: 'La solidarité, fondement de la cohésion sociale' },
        ],
      },
      {
        id: 'egalite-discriminations',
        title: 'L’égalité à l’épreuve des discriminations',
        programme: 'Cohésion et diversité dans une société démocratique : les valeurs et les principes de la République à l’épreuve de la cohésion sociale',
        lessons: [
          { id: 'egalite-femmes-hommes', title: 'L’égalité entre les femmes et les hommes' },
          { id: 'discriminations-racisme', title: 'Discriminations et racisme : ce que dit le droit' },
          { id: 'medias-minorites', title: 'Médias et représentation des minorités' },
        ],
      },
      {
        id: 'nation-citoyennete',
        title: 'Nation, nationalité, citoyenneté',
        programme: 'Cohésion et diversité dans une société démocratique : la République et la Nation',
        lessons: [
          { id: 'quest-ce-quune-nation', title: 'Qu’est-ce qu’une nation ?' },
          { id: 'nationalite-citoyennete', title: 'Nationalité et citoyenneté' },
        ],
      },
      {
        id: 'republique-indivisible',
        title: 'Une République indivisible et décentralisée',
        programme: 'Cohésion et diversité dans une société démocratique : la République et la Nation',
        lessons: [
          { id: 'indivisibilite', title: 'L’indivisibilité de la République' },
          { id: 'decentralisation', title: 'La décentralisation et les collectivités territoriales' },
        ],
      },
      {
        id: 'defense-securite',
        title: 'Défendre la Nation',
        programme: 'Cohésion et diversité dans une société démocratique : la République et la Nation',
        lessons: [
          { id: 'defense-securite-nationale', title: 'La défense et la sécurité nationale' },
          { id: 'menaces-hybrides', title: 'Guerres hybrides et nouvelles menaces' },
        ],
      },
      {
        id: 'societe-numerique',
        title: 'Citoyenneté et société numérique',
        programme: 'Cohésion et diversité dans une société démocratique : la République et la Nation',
        lessons: [
          { id: 'information-desinformation', title: 'Information et désinformation dans la société numérique' },
          { id: 'citoyen-numerique', title: 'Être citoyen dans un espace numérique' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* ANGLAIS                                                              */
  /* ------------------------------------------------------------------ */
  {
    id: 'anglais-1re',
    subject: 'anglais',
    grade: '1re',
    intro: 'Vous saurez comprendre, raconter, argumenter et débattre en anglais au niveau attendu en première, en vous appuyant sur les six axes culturels du programme.',
    reference: 'Programme d’anglais pour les classes de lycée général et technologique, BO n°22 du 29 mai 2025 (applicable en première à la rentrée 2026)',
    chapters: [
      {
        id: 'identites-echanges',
        title: 'Identités et échanges',
        programme: 'Axe 1 : Identités et échanges',
        lessons: [
          { id: 'migrations-identites', title: 'Migrations et construction des identités' },
          { id: 'global-english', title: 'L’anglais, langue mondiale : « Global English »' },
          { id: 'voyages-echanges', title: 'Voyager, étudier à l’étranger, échanger' },
        ],
      },
      {
        id: 'temps-du-recit',
        title: 'Raconter et situer dans le temps',
        programme: 'Repères linguistiques : grammaire et lexique',
        lessons: [
          { id: 'present-perfect-preterit', title: 'Prétérit ou « present perfect » ?' },
          { id: 'past-perfect-recit', title: 'Le « past perfect » et l’organisation du récit' },
          { id: 'exprimer-le-futur', title: 'Exprimer le futur et l’intention' },
        ],
      },
      {
        id: 'diversite-inclusion',
        title: 'Diversité et inclusion',
        programme: 'Axe 2 : Diversité et inclusion',
        lessons: [
          { id: 'droits-civiques', title: 'Combats pour l’égalité et les droits civiques' },
          { id: 'societes-multiculturelles', title: 'Sociétés multiculturelles : vivre ensemble' },
          { id: 'inclusion-ecole-travail', title: 'Inclusion à l’école et au travail' },
        ],
      },
      {
        id: 'art-pouvoir',
        title: 'Art et pouvoir',
        programme: 'Axe 3 : Art et pouvoir',
        lessons: [
          { id: 'art-engage', title: 'L’art engagé : chanter, peindre, protester' },
          { id: 'pouvoir-des-images', title: 'Le pouvoir des images et des médias' },
          { id: 'censure-liberte', title: 'Censure et liberté d’expression' },
        ],
      },
      {
        id: 'nuancer-argumenter',
        title: 'Nuancer et argumenter',
        programme: 'Repères linguistiques : grammaire et lexique',
        lessons: [
          { id: 'modaux', title: 'Les modaux : obligation, possibilité, probabilité' },
          { id: 'conditionnel-hypotheses', title: 'Hypothèses et conditionnels : « if » et ses structures' },
          { id: 'passif-discours-rapporte', title: 'La voix passive et le discours rapporté' },
        ],
      },
      {
        id: 'innovations-responsabilite',
        title: 'Innovations scientifiques et responsabilité',
        programme: 'Axe 4 : Innovations scientifiques et responsabilité',
        lessons: [
          { id: 'intelligence-artificielle', title: 'Intelligence artificielle : promesses et dangers' },
          { id: 'progres-medical-ethique', title: 'Progrès médical et questions éthiques' },
          { id: 'vie-numerique', title: 'Réseaux sociaux et vie numérique' },
        ],
      },
      {
        id: 'humain-nature',
        title: 'L’être humain et la nature',
        programme: 'Axe 5 : L’être humain et la nature',
        lessons: [
          { id: 'climat-engagement', title: 'Le changement climatique et l’engagement des jeunes' },
          { id: 'nature-wilderness', title: 'La nature sauvage : « wilderness » et parcs nationaux' },
          { id: 'villes-durables', title: 'Habiter autrement : villes et modes de vie durables' },
        ],
      },
      {
        id: 'aires-americaines',
        title: 'Les aires anglophones américaines',
        programme: 'Axe 6 : Les aires anglophones américaines',
        lessons: [
          { id: 'reve-americain', title: 'Le rêve américain en question' },
          { id: 'canada-anglophone', title: 'Le Canada anglophone et ses identités' },
          { id: 'caraibes-anglophones', title: 'Les Caraïbes anglophones : histoire et cultures' },
        ],
      },
      {
        id: 'methodes-anglais',
        title: 'Comprendre et s’exprimer : les méthodes',
        programme: 'Activités langagières : réception, production et interaction, écrites et orales',
        lessons: [
          { id: 'comprehension-orale', title: 'Comprendre un document audio ou vidéo' },
          { id: 'comprehension-ecrite', title: 'Comprendre un texte écrit et en rendre compte' },
          { id: 'expression-ecrite', title: 'Rédiger un essai ou un article argumenté' },
          { id: 'expression-orale', title: 'Prendre la parole et interagir à l’oral' },
        ],
      },
    ],
  },
]
