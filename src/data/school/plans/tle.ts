// LES PLANS DE LA TERMINALE · un plan par matière de GRADE_SUBJECTS['tle'], dans
// cet ordre. Programmes en vigueur en 2026-2027 :
// - philosophie, histoire-géographie (enseignement commun), enseignement
//   scientifique et les six spécialités : programmes de terminale de la voie
//   générale fixés par les arrêtés du 19 juillet 2019 (BO spécial n°8 du
//   25 juillet 2019), toujours en vigueur ; le nouveau programme de
//   mathématiques du lycée (BO n°14 du 2 avril 2026) ne s'appliquera en
//   terminale qu'à la rentrée 2027 ;
// - EMC : programme du BO n°24 du 13 juin 2024, appliqué en terminale à la
//   rentrée 2026 (thème « La vie démocratique : débat, délibération et prise de
//   décision ») ;
// - anglais : nouveaux programmes de langues vivantes étrangères (arrêté du
//   5 mai 2025, BO n°22 du 29 mai 2025), appliqués au cycle terminal à la
//   rentrée 2026 : six axes, dont l'axe 6 propre à la langue, obligatoire ;
// - Grand oral : note de service du BO spécial n°4 du 17 septembre 2026,
//   applicable à compter de la session 2027 (20 minutes de préparation,
//   10 minutes d'exposé sur l'une des deux questions choisie par le jury,
//   10 minutes d'échange ; le temps consacré au projet d'orientation a été
//   supprimé dès la session 2024).
// Chaque spécialité et la philosophie se terminent par « Préparer l'épreuve du bac ».
import type { UnitPlan } from '../types'

export const PLANS: UnitPlan[] = [
  /* ------------------------------------------------------------------ */
  /* PHILOSOPHIE                                                          */
  /* ------------------------------------------------------------------ */
  {
    id: 'philosophie-tle',
    subject: 'philosophie',
    grade: 'tle',
    intro:
      'Vous saurez interroger les dix-sept notions du programme à l\'aide des repères et des auteurs, construire un problème philosophique et le traiter dans une dissertation ou une explication de texte.',
    reference:
      'Programme de philosophie de la classe terminale de la voie générale, arrêté du 19 juillet 2019, BO spécial n°8 du 25 juillet 2019',
    chapters: [
      {
        id: 'entrer-en-philosophie',
        title: 'Entrer en philosophie',
        programme: 'Le programme : notions, perspectives, repères et auteurs',
        lessons: [
          { id: 'qu-est-ce-que-philosopher', title: 'Qu\'est-ce que philosopher ?' },
          { id: 'lire-le-programme', title: 'Notions, perspectives, repères, auteurs : lire le programme' },
          { id: 'du-sujet-au-probleme', title: 'D\'une question à un problème philosophique' },
        ],
      },
      {
        id: 'reperes',
        title: 'Les repères : distinguer pour penser',
        programme: 'Les repères du programme (absolu/relatif, croire/savoir, légal/légitime, etc.)',
        lessons: [
          { id: 'reperes-connaissance', title: 'Croire et savoir, expliquer et comprendre, exemple et preuve' },
          { id: 'reperes-action', title: 'Légal et légitime, obligation et contrainte, public et privé' },
          { id: 'reperes-concepts', title: 'Universel, général, particulier, singulier et autres distinctions' },
        ],
      },
      {
        id: 'le-sujet',
        title: 'Le sujet : conscience, inconscient, temps',
        programme: 'Notions : la conscience, l\'inconscient, le temps (perspective : l\'existence humaine et la culture)',
        lessons: [
          { id: 'la-conscience', title: 'La conscience : se connaître soi-même ?' },
          { id: 'l-inconscient', title: 'L\'inconscient : sommes-nous maîtres de nous-mêmes ?' },
          { id: 'le-temps', title: 'Le temps : pouvons-nous échapper au temps ?' },
        ],
      },
      {
        id: 'la-culture',
        title: 'La culture : langage, art, religion',
        programme: 'Notions : le langage, l\'art, la religion (perspective : l\'existence humaine et la culture)',
        lessons: [
          { id: 'le-langage', title: 'Le langage : les mots nous permettent-ils de tout dire ?' },
          { id: 'l-art', title: 'L\'art : à quoi reconnaît-on une œuvre d\'art ?' },
          { id: 'la-religion', title: 'La religion : croire, est-ce renoncer à la raison ?' },
        ],
      },
      {
        id: 'agir-sur-le-monde',
        title: 'Transformer le monde : nature, travail, technique',
        programme: 'Notions : la nature, le travail, la technique (perspective : l\'existence humaine et la culture)',
        lessons: [
          { id: 'la-nature', title: 'La nature : l\'être humain est-il un être naturel ?' },
          { id: 'le-travail', title: 'Le travail : travailler, est-ce seulement produire ?' },
          { id: 'la-technique', title: 'La technique : nous libère-t-elle ?' },
        ],
      },
      {
        id: 'connaitre',
        title: 'Connaître : raison, science, vérité',
        programme: 'Notions : la raison, la science, la vérité (perspective : la connaissance)',
        lessons: [
          { id: 'la-raison', title: 'La raison : peut-on tout démontrer ?' },
          { id: 'la-science', title: 'La science : que vaut une connaissance scientifique ?' },
          { id: 'la-verite', title: 'La vérité : existe-t-il des vérités définitives ?' },
        ],
      },
      {
        id: 'la-morale',
        title: 'La morale : liberté, devoir, bonheur',
        programme: 'Notions : la liberté, le devoir, le bonheur (perspective : la morale et la politique)',
        lessons: [
          { id: 'la-liberte', title: 'La liberté : être libre, est-ce faire ce que l\'on veut ?' },
          { id: 'le-devoir', title: 'Le devoir : d\'où vient l\'obligation morale ?' },
          { id: 'le-bonheur', title: 'Le bonheur : est-il le but de l\'existence ?' },
        ],
      },
      {
        id: 'la-politique',
        title: 'La politique : l\'État et la justice',
        programme: 'Notions : l\'État, la justice (perspective : la morale et la politique)',
        lessons: [
          { id: 'l-etat', title: 'L\'État : pourquoi obéir à l\'État ?' },
          { id: 'la-justice', title: 'La justice : le juste se confond-il avec le légal ?' },
          { id: 'justice-et-egalite', title: 'Justice et égalité : donner à chacun ce qui lui revient' },
        ],
      },
      {
        id: 'bac-philosophie',
        title: 'Préparer l\'épreuve du bac',
        programme: 'Épreuve écrite de philosophie du baccalauréat : dissertation ou explication de texte',
        lessons: [
          { id: 'la-dissertation', title: 'La dissertation : de l\'analyse du sujet au plan' },
          { id: 'l-explication-de-texte', title: 'L\'explication de texte : thèse, structure, enjeux' },
          { id: 'mobiliser-ses-references', title: 'Mobiliser auteurs, exemples et repères à bon escient' },
          { id: 'gerer-les-quatre-heures', title: 'Gérer les quatre heures de l\'épreuve' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* MATHÉMATIQUES (SPÉCIALITÉ)                                           */
  /* ------------------------------------------------------------------ */
  {
    id: 'maths-tle',
    subject: 'maths',
    grade: 'tle',
    intro:
      'Vous saurez étudier des suites et des fonctions (limites, convexité, logarithme, intégrales, équations différentielles), raisonner dans l\'espace, dénombrer et utiliser la loi binomiale et la loi des grands nombres.',
    reference:
      'Programme de l\'enseignement de spécialité de mathématiques de la classe terminale de la voie générale, arrêté du 19 juillet 2019, BO spécial n°8 du 25 juillet 2019',
    chapters: [
      {
        id: 'suites',
        title: 'Suites : récurrence et limites',
        programme: 'Analyse : suites (raisonnement par récurrence, limites de suites)',
        lessons: [
          { id: 'raisonnement-par-recurrence', title: 'Le raisonnement par récurrence' },
          { id: 'limites-de-suites', title: 'Limites de suites et théorèmes de comparaison' },
          { id: 'convergence-monotone', title: 'Convergence monotone et algorithmes de seuil' },
        ],
      },
      {
        id: 'limites-continuite',
        title: 'Limites de fonctions et continuité',
        programme: 'Analyse : limites des fonctions ; continuité des fonctions d\'une variable réelle',
        lessons: [
          { id: 'limites-et-asymptotes', title: 'Limites d\'une fonction et asymptotes' },
          { id: 'operations-croissances-comparees', title: 'Opérations sur les limites et croissances comparées' },
          { id: 'continuite-tvi', title: 'Continuité et théorème des valeurs intermédiaires' },
        ],
      },
      {
        id: 'derivation-convexite',
        title: 'Compléments sur la dérivation et convexité',
        programme: 'Analyse : compléments sur la dérivation',
        lessons: [
          { id: 'derivee-composee', title: 'Dérivée d\'une fonction composée' },
          { id: 'derivee-seconde', title: 'La dérivée seconde' },
          { id: 'convexite-inflexion', title: 'Convexité et points d\'inflexion' },
        ],
      },
      {
        id: 'denombrement',
        title: 'Combinatoire et dénombrement',
        programme: 'Algèbre et géométrie : combinatoire et dénombrement',
        lessons: [
          { id: 'principes-de-denombrement', title: 'Principes additif et multiplicatif, k-uplets' },
          { id: 'permutations-arrangements', title: 'Permutations et arrangements' },
          { id: 'combinaisons-pascal', title: 'Combinaisons et triangle de Pascal' },
        ],
      },
      {
        id: 'espace-vecteurs',
        title: 'Vecteurs, droites et plans de l\'espace',
        programme: 'Algèbre et géométrie : manipulation des vecteurs, des droites et des plans de l\'espace',
        lessons: [
          { id: 'vecteurs-espace', title: 'Vecteurs de l\'espace, colinéarité et coplanarité' },
          { id: 'bases-et-reperes', title: 'Bases et repères de l\'espace' },
          { id: 'positions-relatives', title: 'Positions relatives de droites et de plans' },
        ],
      },
      {
        id: 'espace-orthogonalite',
        title: 'Orthogonalité, distances et équations dans l\'espace',
        programme:
          'Algèbre et géométrie : orthogonalité et distances dans l\'espace ; représentations paramétriques et équations cartésiennes',
        lessons: [
          { id: 'produit-scalaire-espace', title: 'Produit scalaire, orthogonalité et projeté orthogonal' },
          { id: 'equation-cartesienne-plan', title: 'Vecteur normal et équation cartésienne d\'un plan' },
          { id: 'representation-parametrique', title: 'Représentation paramétrique d\'une droite et intersections' },
        ],
      },
      {
        id: 'logarithme',
        title: 'La fonction logarithme népérien',
        programme: 'Analyse : fonction logarithme',
        lessons: [
          { id: 'ln-definition-proprietes', title: 'Définition et propriétés algébriques du logarithme' },
          { id: 'etude-de-ln', title: 'Étude de la fonction ln : limites, dérivée, croissances comparées' },
          { id: 'ln-equations-seuils', title: 'Équations, inéquations et recherche de seuils avec ln' },
        ],
      },
      {
        id: 'sinus-cosinus',
        title: 'Les fonctions sinus et cosinus',
        programme: 'Analyse : fonctions sinus et cosinus',
        lessons: [
          { id: 'sinus-cosinus-proprietes', title: 'Sinus et cosinus : parité, périodicité, dérivées' },
          { id: 'etude-trigonometrique', title: 'Étudier une fonction trigonométrique' },
        ],
      },
      {
        id: 'primitives-equadiff',
        title: 'Primitives et équations différentielles',
        programme: 'Analyse : primitives, équations différentielles',
        lessons: [
          { id: 'primitives', title: 'Primitives d\'une fonction' },
          { id: 'equation-y-prime-ay', title: 'Les équations différentielles y\' = ay' },
          { id: 'equation-y-prime-ay-b', title: 'Les équations y\' = ay + b et y\' = ay + f' },
        ],
      },
      {
        id: 'calcul-integral',
        title: 'Calcul intégral',
        programme: 'Analyse : calcul intégral',
        lessons: [
          { id: 'integrale-et-aire', title: 'Intégrale d\'une fonction et aire sous la courbe' },
          { id: 'proprietes-integrale', title: 'Propriétés de l\'intégrale et valeur moyenne' },
          { id: 'integration-par-parties', title: 'Intégration par parties et calculs d\'aires' },
        ],
      },
      {
        id: 'probabilites',
        title: 'Loi binomiale, sommes de variables et loi des grands nombres',
        programme:
          'Probabilités : succession d\'épreuves indépendantes, schéma de Bernoulli ; sommes de variables aléatoires ; concentration, loi des grands nombres',
        lessons: [
          { id: 'schema-de-bernoulli', title: 'Schéma de Bernoulli et loi binomiale' },
          { id: 'sommes-variables-aleatoires', title: 'Sommes de variables aléatoires : espérance et variance' },
          { id: 'bienayme-tchebychev', title: 'Inégalités de Bienaymé-Tchebychev et de concentration' },
          { id: 'loi-des-grands-nombres', title: 'Loi des grands nombres et simulation avec des listes Python' },
        ],
      },
      {
        id: 'bac-maths',
        title: 'Préparer l\'épreuve du bac',
        programme: 'Épreuve écrite de l\'enseignement de spécialité de mathématiques du baccalauréat',
        lessons: [
          { id: 'methode-des-exercices', title: 'Lire un sujet et traiter les exercices avec méthode' },
          { id: 'demonstrations-attendues', title: 'Les démonstrations attendues du programme' },
          { id: 'rediger-et-gerer-son-temps', title: 'Rédiger une solution complète et gérer son temps' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* PHYSIQUE-CHIMIE (SPÉCIALITÉ)                                         */
  /* ------------------------------------------------------------------ */
  {
    id: 'physique-chimie-tle',
    subject: 'physique-chimie',
    grade: 'tle',
    intro:
      'Vous saurez analyser et faire évoluer des systèmes chimiques, expliquer un mouvement par les lois de Newton, faire des bilans d\'énergie et décrire ondes, lumière et circuits électriques.',
    reference:
      'Programme de l\'enseignement de spécialité de physique-chimie de la classe terminale de la voie générale, arrêté du 19 juillet 2019, BO spécial n°8 du 25 juillet 2019',
    chapters: [
      {
        id: 'acide-base-ph',
        title: 'Réactions acide-base et pH',
        programme:
          'Constitution et transformations de la matière : déterminer la composition d\'un système par des méthodes physiques et chimiques (transformations acide-base)',
        lessons: [
          { id: 'couples-acide-base', title: 'Couples acide-base et transfert d\'ion hydrogène' },
          { id: 'ph-acide-fort', title: 'Le pH d\'une solution et la concentration en ions oxonium' },
        ],
      },
      {
        id: 'analyser-un-systeme',
        title: 'Analyser un système chimique',
        programme:
          'Constitution et transformations de la matière : déterminer la composition d\'un système par des méthodes physiques et chimiques',
        lessons: [
          { id: 'spectroscopies', title: 'Spectroscopies UV-visible et infrarouge, loi de Beer-Lambert' },
          { id: 'conductimetrie', title: 'Conductimétrie et loi de Kohlrausch' },
          { id: 'titrages', title: 'Titrages avec suivi pH-métrique ou conductimétrique' },
        ],
      },
      {
        id: 'evolution-temporelle',
        title: 'Évolution temporelle : cinétique et radioactivité',
        programme:
          'Constitution et transformations de la matière : modéliser l\'évolution temporelle d\'un système, siège d\'une transformation',
        lessons: [
          { id: 'vitesse-de-reaction', title: 'Vitesse de réaction et facteurs cinétiques' },
          { id: 'loi-de-vitesse-mecanisme', title: 'Loi de vitesse d\'ordre 1 et mécanisme réactionnel' },
          { id: 'decroissance-radioactive', title: 'La décroissance radioactive' },
        ],
      },
      {
        id: 'etat-final',
        title: 'Prévoir l\'état final d\'une transformation',
        programme:
          'Constitution et transformations de la matière : prévoir l\'état final d\'un système, siège d\'une transformation chimique',
        lessons: [
          { id: 'quotient-et-constante', title: 'Quotient de réaction et constante d\'équilibre' },
          { id: 'force-acides-bases', title: 'Force des acides et des bases : Ka, pKa, prédominance' },
          { id: 'piles', title: 'Les piles : une transformation spontanée' },
          { id: 'electrolyse', title: 'L\'électrolyse : forcer le sens d\'évolution' },
        ],
      },
      {
        id: 'synthese-organique',
        title: 'Stratégies de synthèse organique',
        programme: 'Constitution et transformations de la matière : élaborer des stratégies en synthèse organique',
        lessons: [
          { id: 'structure-des-molecules', title: 'Structure des molécules et modifications de chaîne ou de groupe' },
          { id: 'optimiser-une-synthese', title: 'Optimiser une synthèse : vitesse, rendement, protection' },
        ],
      },
      {
        id: 'mouvement-newton',
        title: 'Décrire et expliquer un mouvement',
        programme:
          'Mouvement et interactions : décrire un mouvement ; relier les actions appliquées à un système à son mouvement',
        lessons: [
          { id: 'vitesse-acceleration', title: 'Vecteurs position, vitesse et accélération' },
          { id: 'deuxieme-loi-newton', title: 'Deuxième loi de Newton et mouvement dans un champ uniforme' },
          { id: 'gravitation-kepler', title: 'Mouvement des satellites et des planètes, lois de Kepler' },
        ],
      },
      {
        id: 'ecoulement-fluide',
        title: 'L\'écoulement d\'un fluide',
        programme: 'Mouvement et interactions : modéliser l\'écoulement d\'un fluide',
        lessons: [
          { id: 'poussee-archimede', title: 'La poussée d\'Archimède' },
          { id: 'debit-bernoulli', title: 'Débit volumique et relation de Bernoulli' },
        ],
      },
      {
        id: 'thermodynamique',
        title: 'Énergie : thermodynamique et bilans',
        programme:
          'L\'énergie : conversions et transferts. Décrire un système thermodynamique ; effectuer des bilans d\'énergie sur un système',
        lessons: [
          { id: 'gaz-parfait', title: 'Le modèle du gaz parfait' },
          { id: 'premier-principe', title: 'Le premier principe de la thermodynamique' },
          { id: 'transferts-thermiques', title: 'Transferts thermiques et évolution de la température' },
          { id: 'bilan-radiatif-terre', title: 'Bilan radiatif de la Terre et effet de serre' },
        ],
      },
      {
        id: 'ondes',
        title: 'Phénomènes ondulatoires',
        programme: 'Ondes et signaux : caractériser les phénomènes ondulatoires',
        lessons: [
          { id: 'intensite-sonore', title: 'Intensité sonore, niveau d\'intensité et atténuation' },
          { id: 'diffraction-interferences', title: 'Diffraction et interférences' },
          { id: 'effet-doppler', title: 'L\'effet Doppler' },
        ],
      },
      {
        id: 'lumiere-photons',
        title: 'Former des images, la lumière comme flux de photons',
        programme: 'Ondes et signaux : former des images, décrire la lumière par un flux de photons',
        lessons: [
          { id: 'lunette-astronomique', title: 'La lunette astronomique' },
          { id: 'effet-photoelectrique', title: 'Le photon et l\'effet photoélectrique' },
        ],
      },
      {
        id: 'circuit-rc',
        title: 'Dynamique d\'un système électrique',
        programme: 'Ondes et signaux : étudier la dynamique d\'un système électrique',
        lessons: [
          { id: 'condensateur', title: 'Le condensateur : charge et capacité' },
          { id: 'circuit-rc', title: 'Charge et décharge dans un circuit RC' },
        ],
      },
      {
        id: 'bac-physique-chimie',
        title: 'Préparer l\'épreuve du bac',
        programme:
          'Épreuve de l\'enseignement de spécialité de physique-chimie : épreuve écrite et évaluation des compétences expérimentales',
        lessons: [
          { id: 'methode-epreuve-ecrite', title: 'L\'épreuve écrite : lire l\'énoncé et rédiger' },
          { id: 'resolution-de-probleme', title: 'Résoudre un problème scientifique ouvert' },
          { id: 'competences-experimentales', title: 'L\'évaluation des compétences expérimentales' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* SVT (SPÉCIALITÉ)                                                     */
  /* ------------------------------------------------------------------ */
  {
    id: 'svt-tle',
    subject: 'svt',
    grade: 'tle',
    intro:
      'Vous saurez expliquer l\'origine de la diversité génétique et l\'évolution des génomes, reconstituer l\'histoire géologique et climatique de la Terre, et comprendre le mouvement, l\'énergie musculaire et la réponse au stress.',
    reference:
      'Programme de l\'enseignement de spécialité de sciences de la vie et de la Terre de la classe terminale de la voie générale, arrêté du 19 juillet 2019, BO spécial n°8 du 25 juillet 2019',
    chapters: [
      {
        id: 'origine-du-genotype',
        title: 'L\'origine du génotype des individus',
        programme: 'Thème 1 : La Terre, la vie et l\'organisation du vivant. Génétique et évolution : l\'origine du génotype des individus',
        lessons: [
          { id: 'conservation-des-genomes', title: 'La conservation des génomes : mitose et clones' },
          { id: 'brassage-meiose-fecondation', title: 'Brassages génétiques : méiose et fécondation' },
          { id: 'analyse-de-croisements', title: 'Analyser des croisements et des arbres généalogiques' },
        ],
      },
      {
        id: 'complexification-genomes',
        title: 'La complexification des génomes',
        programme:
          'Thème 1 : Génétique et évolution. La complexification des génomes : transferts horizontaux et endosymbioses',
        lessons: [
          { id: 'transferts-horizontaux', title: 'Les transferts horizontaux de gènes' },
          { id: 'endosymbioses', title: 'Les endosymbioses : mitochondries et chloroplastes' },
        ],
      },
      {
        id: 'evolution-des-populations',
        title: 'L\'évolution des génomes au sein des populations',
        programme: 'Thème 1 : Génétique et évolution. L\'inéluctable évolution des génomes au sein des populations',
        lessons: [
          { id: 'hardy-weinberg', title: 'Le modèle de Hardy-Weinberg' },
          { id: 'derive-et-selection', title: 'Dérive génétique et sélection naturelle' },
          { id: 'speciation', title: 'La spéciation : naissance de nouvelles espèces' },
        ],
      },
      {
        id: 'autres-mecanismes-diversite',
        title: 'D\'autres mécanismes de la diversité du vivant',
        programme: 'Thème 1 : Génétique et évolution. D\'autres mécanismes contribuent à la diversité du vivant',
        lessons: [
          { id: 'associations-symbioses', title: 'Associations et symbioses entre êtres vivants' },
          { id: 'transmission-culturelle', title: 'Les comportements transmis par apprentissage' },
        ],
      },
      {
        id: 'temps-et-roches',
        title: 'Le temps et les roches',
        programme: 'Thème 1 : À la recherche du passé géologique de notre planète. Le temps et les roches',
        lessons: [
          { id: 'datation-relative', title: 'La datation relative : principes et chronologie' },
          { id: 'datation-absolue', title: 'La datation absolue par radiochronologie' },
          { id: 'echelle-des-temps', title: 'L\'échelle des temps géologiques' },
        ],
      },
      {
        id: 'passe-mouvemente',
        title: 'Les traces du passé mouvementé de la Terre',
        programme:
          'Thème 1 : À la recherche du passé géologique de notre planète. Les traces du passé mouvementé de la Terre',
        lessons: [
          { id: 'ocean-disparu', title: 'Les traces d\'un océan disparu dans les montagnes' },
          { id: 'formation-chaines-montagnes', title: 'Collision et formation d\'une chaîne de montagnes' },
        ],
      },
      {
        id: 'plante-domestiquee',
        title: 'De la plante sauvage à la plante domestiquée',
        programme: 'Thème 2 : Enjeux contemporains de la planète. De la plante sauvage à la plante domestiquée',
        lessons: [
          { id: 'organisation-plante', title: 'L\'organisation fonctionnelle des plantes à fleurs' },
          { id: 'reproduction-plante', title: 'La reproduction des plantes à fleurs et la vie fixée' },
          { id: 'domestication-des-plantes', title: 'La domestication des plantes' },
        ],
      },
      {
        id: 'climats-de-la-terre',
        title: 'Les climats de la Terre',
        programme:
          'Thème 2 : Les climats de la Terre : comprendre le passé pour agir aujourd\'hui et demain',
        lessons: [
          { id: 'reconstituer-climats-passes', title: 'Reconstituer les climats passés : les indices' },
          { id: 'variations-climatiques', title: 'Les variations climatiques et leurs causes' },
          { id: 'rechauffement-actuel', title: 'Le réchauffement actuel : conséquences et actions' },
        ],
      },
      {
        id: 'mouvement-systeme-nerveux',
        title: 'Comportements, mouvement et système nerveux',
        programme: 'Thème 3 : Corps humain et santé. Comportements, mouvement et système nerveux',
        lessons: [
          { id: 'reflexe-myotatique', title: 'Le réflexe myotatique' },
          { id: 'mouvement-volontaire', title: 'Le cerveau et le mouvement volontaire' },
          { id: 'cerveau-fragile', title: 'Le cerveau, un organe fragile à préserver' },
        ],
      },
      {
        id: 'contraction-musculaire',
        title: 'Produire le mouvement : contraction et énergie',
        programme:
          'Thème 3 : Produire le mouvement : contraction musculaire et apport d\'énergie',
        lessons: [
          { id: 'cellule-musculaire', title: 'La cellule musculaire et la contraction' },
          { id: 'origine-atp', title: 'L\'origine de l\'ATP : respiration et fermentation' },
          { id: 'regulation-glycemie', title: 'Le contrôle de la glycémie et le diabète' },
        ],
      },
      {
        id: 'comportements-et-stress',
        title: 'Comportements et stress',
        programme: 'Thème 3 : Comportements et stress : vers une vision intégrée de l\'organisme',
        lessons: [
          { id: 'stress-aigu', title: 'Le stress aigu : une réponse adaptative' },
          { id: 'stress-chronique', title: 'Le stress chronique et sa prise en charge' },
        ],
      },
      {
        id: 'bac-svt',
        title: 'Préparer l\'épreuve du bac',
        programme:
          'Épreuve de l\'enseignement de spécialité de SVT : épreuve écrite et évaluation des compétences expérimentales',
        lessons: [
          { id: 'question-de-synthese', title: 'L\'exercice de synthèse : mobiliser ses connaissances' },
          { id: 'raisonnement-documents', title: 'L\'exercice sur documents : construire un raisonnement' },
          { id: 'ece-svt', title: 'L\'évaluation des compétences expérimentales' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* SES (SPÉCIALITÉ)                                                     */
  /* ------------------------------------------------------------------ */
  {
    id: 'ses-tle',
    subject: 'ses',
    grade: 'tle',
    intro:
      'Vous saurez analyser la croissance, le commerce international, le chômage, les crises financières et les politiques européennes, la structure et la mobilité sociales, l\'école, le travail, l\'engagement, la justice sociale et l\'environnement.',
    reference:
      'Programme de l\'enseignement de spécialité de sciences économiques et sociales de la classe terminale de la voie générale, arrêté du 19 juillet 2019, BO spécial n°8 du 25 juillet 2019',
    chapters: [
      {
        id: 'croissance',
        title: 'Les sources et les défis de la croissance',
        programme: 'Science économique : Quels sont les sources et les défis de la croissance économique ?',
        lessons: [
          { id: 'sources-de-la-croissance', title: 'Les sources de la croissance : facteurs et productivité globale' },
          { id: 'innovation-et-institutions', title: 'Progrès technique, innovation et institutions' },
          { id: 'croissance-soutenable', title: 'Les limites écologiques et la soutenabilité de la croissance' },
        ],
      },
      {
        id: 'commerce-international',
        title: 'Commerce international et internationalisation de la production',
        programme:
          'Science économique : Quels sont les fondements du commerce international et de l\'internationalisation de la production ?',
        lessons: [
          { id: 'avantages-comparatifs', title: 'Avantages comparatifs et dotations factorielles' },
          { id: 'commerce-entre-pays-comparables', title: 'Le commerce entre pays comparables : différenciation et qualité' },
          { id: 'chaines-de-valeur', title: 'Firmes multinationales et chaînes de valeur mondiales' },
        ],
      },
      {
        id: 'chomage',
        title: 'Comment lutter contre le chômage ?',
        programme: 'Science économique : Comment lutter contre le chômage ?',
        lessons: [
          { id: 'mesurer-le-chomage', title: 'Mesurer le chômage et le sous-emploi' },
          { id: 'causes-du-chomage', title: 'Les causes du chômage structurel et conjoncturel' },
          { id: 'politiques-de-l-emploi', title: 'Les politiques de lutte contre le chômage' },
        ],
      },
      {
        id: 'crises-financieres',
        title: 'Crises financières et régulation',
        programme: 'Science économique : Comment expliquer les crises financières et réguler le système financier ?',
        lessons: [
          { id: 'bulles-et-paniques', title: 'Bulles spéculatives et paniques bancaires' },
          { id: 'crise-et-economie-reelle', title: 'De la crise financière à l\'économie réelle' },
          { id: 'reguler-le-systeme-financier', title: 'Réguler le système financier' },
        ],
      },
      {
        id: 'politiques-europeennes',
        title: 'Les politiques économiques dans le cadre européen',
        programme: 'Science économique : Quelles politiques économiques dans le cadre européen ?',
        lessons: [
          { id: 'politique-monetaire-bce', title: 'La politique monétaire de la Banque centrale européenne' },
          { id: 'politiques-budgetaires', title: 'Politiques budgétaires et coordination dans la zone euro' },
        ],
      },
      {
        id: 'structure-sociale',
        title: 'La structure de la société française',
        programme: 'Sociologie et science politique : Comment est structurée la société française actuelle ?',
        lessons: [
          { id: 'facteurs-de-structuration', title: 'Les facteurs de structuration de l\'espace social' },
          { id: 'analyses-des-classes', title: 'Les classes sociales selon Marx et Weber' },
          { id: 'pertinence-des-classes', title: 'Les classes sociales sont-elles encore pertinentes ?' },
        ],
      },
      {
        id: 'ecole',
        title: 'L\'école et les destins individuels',
        programme:
          'Sociologie et science politique : Quelle est l\'action de l\'École sur les destins individuels et sur l\'évolution de la société ?',
        lessons: [
          { id: 'massification-scolaire', title: 'Massification et démocratisation scolaire' },
          { id: 'inegalites-de-reussite', title: 'Les inégalités de réussite scolaire et leurs explications' },
        ],
      },
      {
        id: 'mobilite-sociale',
        title: 'La mobilité sociale',
        programme:
          'Sociologie et science politique : Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ?',
        lessons: [
          { id: 'mesurer-la-mobilite', title: 'Mesurer la mobilité sociale : les tables de mobilité' },
          { id: 'mobilite-observee', title: 'Mobilité structurelle, mobilité ascendante et déclassement' },
          { id: 'facteurs-de-mobilite', title: 'Les facteurs de la mobilité sociale' },
        ],
      },
      {
        id: 'travail-et-emploi',
        title: 'Les mutations du travail et de l\'emploi',
        programme: 'Sociologie et science politique : Quelles mutations du travail et de l\'emploi ?',
        lessons: [
          { id: 'organisation-du-travail', title: 'Les modèles d\'organisation du travail' },
          { id: 'numerique-et-emploi', title: 'Le numérique et la qualité des emplois' },
          { id: 'travail-et-integration', title: 'Le travail, source d\'intégration sociale ?' },
        ],
      },
      {
        id: 'engagement-politique',
        title: 'L\'engagement politique',
        programme:
          'Sociologie et science politique : Comment expliquer l\'engagement politique dans les sociétés démocratiques ?',
        lessons: [
          { id: 'formes-de-l-engagement', title: 'Les formes de l\'engagement politique' },
          { id: 'paradoxe-action-collective', title: 'Le paradoxe de l\'action collective et les déterminants de l\'engagement' },
        ],
      },
      {
        id: 'regards-croises',
        title: 'Justice sociale et action publique pour l\'environnement',
        programme:
          'Regards croisés : Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ? Quelle action publique pour l\'environnement ?',
        lessons: [
          { id: 'mesurer-les-inegalites', title: 'Mesurer les inégalités : courbe de Lorenz et indice de Gini' },
          { id: 'conceptions-justice-sociale', title: 'Les conceptions de la justice sociale et l\'action des pouvoirs publics' },
          { id: 'environnement-agenda', title: 'L\'environnement : acteurs et mise à l\'agenda' },
          { id: 'instruments-environnement', title: 'Réglementation, taxation, marché de quotas' },
        ],
      },
      {
        id: 'bac-ses',
        title: 'Préparer l\'épreuve du bac',
        programme: 'Épreuve écrite de l\'enseignement de spécialité de SES : dissertation ou épreuve composée',
        lessons: [
          { id: 'dissertation-ses', title: 'La dissertation appuyée sur un dossier documentaire' },
          { id: 'epreuve-composee', title: 'L\'épreuve composée : ses trois parties' },
          { id: 'savoir-faire-quantitatifs', title: 'Lire et calculer : les savoir-faire quantitatifs' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* HGGSP (SPÉCIALITÉ)                                                   */
  /* ------------------------------------------------------------------ */
  {
    id: 'hggsp-tle',
    subject: 'hggsp',
    grade: 'tle',
    intro:
      'Vous saurez analyser les conquêtes de l\'océan et de l\'espace, la guerre et la paix, les liens entre histoire et mémoires, le patrimoine, l\'environnement et la connaissance comme enjeux géopolitiques.',
    reference:
      'Programme de l\'enseignement de spécialité d\'histoire-géographie, géopolitique et sciences politiques de la classe terminale de la voie générale, arrêté du 19 juillet 2019, BO spécial n°8 du 25 juillet 2019',
    chapters: [
      {
        id: 'espaces-de-conquete',
        title: 'De nouveaux espaces de conquête',
        programme: 'Thème 1 : De nouveaux espaces de conquête',
        lessons: [
          { id: 'ocean-espace-intro', title: 'L\'océan et l\'espace, des espaces convoités' },
          { id: 'conquetes-et-rivalites', title: 'Conquêtes, affirmations de puissance et rivalités' },
          { id: 'cooperations-espaces', title: 'Enjeux diplomatiques et coopérations' },
          { id: 'chine-espace-mers', title: 'La Chine à la conquête de l\'espace, des mers et des océans' },
        ],
      },
      {
        id: 'guerre-et-paix',
        title: 'Faire la guerre, faire la paix',
        programme: 'Thème 2 : Faire la guerre, faire la paix : formes de conflits et modes de résolution',
        lessons: [
          { id: 'clausewitz', title: 'La guerre, continuation de la politique ? Clausewitz' },
          { id: 'dimension-politique-guerre', title: 'Des conflits interétatiques aux enjeux transnationaux' },
          { id: 'construire-la-paix', title: 'Le défi de la construction de la paix' },
          { id: 'moyen-orient', title: 'Le Moyen-Orient : conflits régionaux et tentatives de paix' },
        ],
      },
      {
        id: 'histoire-et-memoires',
        title: 'Histoire et mémoires',
        programme: 'Thème 3 : Histoire et mémoires',
        lessons: [
          { id: 'histoire-memoire-distinction', title: 'Histoire et mémoire : distinguer deux rapports au passé' },
          { id: 'memoires-des-conflits', title: 'Histoire et mémoires des conflits' },
          { id: 'histoire-memoire-justice', title: 'Histoire, mémoire et justice' },
          { id: 'memoire-genocide', title: 'L\'histoire et les mémoires du génocide des Juifs et des Tsiganes' },
        ],
      },
      {
        id: 'patrimoine',
        title: 'Le patrimoine, un enjeu géopolitique',
        programme: 'Thème 4 : Identifier, protéger et valoriser le patrimoine : enjeux géopolitiques',
        lessons: [
          { id: 'notion-de-patrimoine', title: 'La construction de la notion de patrimoine' },
          { id: 'usages-du-patrimoine', title: 'Usages sociaux et politiques du patrimoine' },
          { id: 'preservation-patrimoine', title: 'Préserver le patrimoine : tensions et concurrences' },
          { id: 'france-et-patrimoine', title: 'La France et le patrimoine : valoriser et protéger' },
        ],
      },
      {
        id: 'environnement',
        title: 'L\'environnement, un enjeu planétaire',
        programme: 'Thème 5 : L\'environnement, entre exploitation et protection : un enjeu planétaire',
        lessons: [
          { id: 'notion-environnement', title: 'Qu\'est-ce que l\'environnement ? Une notion construite' },
          { id: 'exploiter-preserver-proteger', title: 'Exploiter, préserver et protéger' },
          { id: 'changement-climatique', title: 'Le changement climatique : approches historique et géopolitique' },
          { id: 'etats-unis-environnement', title: 'Les États-Unis et la question environnementale' },
        ],
      },
      {
        id: 'enjeu-connaissance',
        title: 'L\'enjeu de la connaissance',
        programme: 'Thème 6 : L\'enjeu de la connaissance',
        lessons: [
          { id: 'societe-de-la-connaissance', title: 'La notion de société de la connaissance' },
          { id: 'produire-diffuser-connaissances', title: 'Produire et diffuser des connaissances' },
          { id: 'connaissance-enjeu-politique', title: 'La connaissance, enjeu politique et géopolitique' },
          { id: 'cyberespace', title: 'Le cyberespace : conflictualités et coopérations' },
        ],
      },
      {
        id: 'bac-hggsp',
        title: 'Préparer l\'épreuve du bac',
        programme: 'Épreuve écrite de l\'enseignement de spécialité HGGSP : dissertation et étude critique de document(s)',
        lessons: [
          { id: 'dissertation-hggsp', title: 'La dissertation : problématiser et construire un plan' },
          { id: 'etude-critique-documents', title: 'L\'étude critique de document(s)' },
          { id: 'organiser-l-epreuve', title: 'Organiser son temps et mobiliser des exemples précis' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* NSI (SPÉCIALITÉ)                                                     */
  /* ------------------------------------------------------------------ */
  {
    id: 'nsi-tle',
    subject: 'nsi',
    grade: 'tle',
    intro:
      'Vous saurez programmer avec la récursivité et les objets, manipuler piles, files, arbres et graphes, interroger une base de données en SQL, comprendre processus, routage et chiffrement, et concevoir des algorithmes avancés.',
    reference:
      'Programme de l\'enseignement de spécialité de numérique et sciences informatiques de la classe terminale de la voie générale, arrêté du 19 juillet 2019, BO spécial n°8 du 25 juillet 2019',
    chapters: [
      {
        id: 'recursivite-modularite',
        title: 'Récursivité, modularité et mise au point',
        programme: 'Langages et programmation : récursivité ; modularité ; mise au point des programmes, gestion des bugs',
        lessons: [
          { id: 'recursivite', title: 'La récursivité' },
          { id: 'modularite', title: 'Modularité : modules, interfaces et API' },
          { id: 'mise-au-point', title: 'Mettre au point un programme et gérer les bugs' },
        ],
      },
      {
        id: 'programmation-objet',
        title: 'La programmation orientée objet',
        programme: 'Structures de données : vocabulaire de la programmation objet ; interface et implémentation',
        lessons: [
          { id: 'classes-et-objets', title: 'Classes, attributs, méthodes et objets' },
          { id: 'interface-implementation', title: 'Interface et implémentation d\'une structure de données' },
        ],
      },
      {
        id: 'structures-lineaires',
        title: 'Listes, piles, files et dictionnaires',
        programme: 'Structures de données : listes, piles, files (structures linéaires) ; dictionnaires, index et clé',
        lessons: [
          { id: 'listes-chainees', title: 'Les listes chaînées' },
          { id: 'piles', title: 'Les piles' },
          { id: 'files', title: 'Les files' },
          { id: 'dictionnaires', title: 'Dictionnaires : index et clé' },
        ],
      },
      {
        id: 'bases-de-donnees',
        title: 'Bases de données relationnelles et SQL',
        programme: 'Bases de données : modèle relationnel, base de données relationnelle, SGBD, langage SQL',
        lessons: [
          { id: 'modele-relationnel', title: 'Le modèle relationnel : relations, clés, schéma' },
          { id: 'sgbd', title: 'Les systèmes de gestion de bases de données' },
          { id: 'sql-interrogation', title: 'Requêtes SQL d\'interrogation' },
          { id: 'sql-jointures-mises-a-jour', title: 'Jointures et requêtes SQL de mise à jour' },
        ],
      },
      {
        id: 'arbres',
        title: 'Les arbres',
        programme:
          'Structures de données : arbres, structures hiérarchiques ; algorithmique : algorithmes sur les arbres binaires et les arbres binaires de recherche',
        lessons: [
          { id: 'arbres-binaires', title: 'Arbres binaires : vocabulaire, taille et hauteur' },
          { id: 'parcours-arbres', title: 'Parcourir un arbre binaire' },
          { id: 'arbres-binaires-de-recherche', title: 'Les arbres binaires de recherche' },
        ],
      },
      {
        id: 'graphes',
        title: 'Les graphes',
        programme:
          'Structures de données : graphes, structures relationnelles ; algorithmique : algorithmes sur les graphes',
        lessons: [
          { id: 'graphes-representations', title: 'Graphes : vocabulaire et représentations' },
          { id: 'parcours-graphes', title: 'Parcours en profondeur et en largeur' },
          { id: 'chemins-et-cycles', title: 'Chercher un chemin, détecter un cycle' },
        ],
      },
      {
        id: 'architectures-reseaux',
        title: 'Architectures, systèmes d\'exploitation et réseaux',
        programme: 'Architectures matérielles, systèmes d\'exploitation et réseaux',
        lessons: [
          { id: 'systeme-sur-puce', title: 'Les composants d\'un système sur puce' },
          { id: 'processus', title: 'Processus et ressources : ordonnancement et interblocage' },
          { id: 'routage', title: 'Les protocoles de routage RIP et OSPF' },
          { id: 'securiser-les-communications', title: 'Sécuriser les communications : chiffrement et HTTPS' },
        ],
      },
      {
        id: 'algorithmique-avancee',
        title: 'Méthodes algorithmiques',
        programme:
          'Algorithmique : méthode « diviser pour régner » ; programmation dynamique ; recherche textuelle',
        lessons: [
          { id: 'diviser-pour-regner', title: 'Diviser pour régner : le tri fusion' },
          { id: 'programmation-dynamique', title: 'La programmation dynamique' },
          { id: 'recherche-textuelle', title: 'La recherche textuelle : l\'algorithme de Boyer-Moore' },
        ],
      },
      {
        id: 'calculabilite-paradigmes',
        title: 'Calculabilité, paradigmes et histoire',
        programme:
          'Langages et programmation : programme en tant que donnée, calculabilité, décidabilité ; paradigmes de programmation. Histoire de l\'informatique',
        lessons: [
          { id: 'calculabilite-decidabilite', title: 'Programme en tant que donnée, calculabilité, décidabilité' },
          { id: 'paradigmes', title: 'Les paradigmes de programmation' },
          { id: 'histoire-informatique', title: 'Les événements clés de l\'histoire de l\'informatique' },
        ],
      },
      {
        id: 'bac-nsi',
        title: 'Préparer l\'épreuve du bac',
        programme: 'Épreuve de l\'enseignement de spécialité NSI : épreuve écrite et épreuve pratique',
        lessons: [
          { id: 'epreuve-ecrite-nsi', title: 'L\'épreuve écrite : méthode des exercices' },
          { id: 'epreuve-pratique-nsi', title: 'L\'épreuve pratique sur machine' },
          { id: 'erreurs-classiques-nsi', title: 'Écrire du code sur papier et éviter les erreurs classiques' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* ENSEIGNEMENT SCIENTIFIQUE                                            */
  /* ------------------------------------------------------------------ */
  {
    id: 'ens-sci-tle',
    subject: 'ens-sci',
    grade: 'tle',
    intro:
      'Vous saurez expliquer le fonctionnement du climat et ses évolutions, les enjeux de l\'énergie électrique, l\'histoire du vivant, les modèles démographiques et les principes de l\'intelligence artificielle.',
    reference:
      'Programme d\'enseignement scientifique de la classe terminale de la voie générale, arrêté du 19 juillet 2019, BO spécial n°8 du 25 juillet 2019',
    chapters: [
      {
        id: 'science-climat-societe',
        title: 'Science, climat et société',
        programme: 'Thème 1 : Science, climat et société',
        lessons: [
          { id: 'atmosphere-et-vie', title: 'L\'atmosphère terrestre et la vie' },
          { id: 'systeme-climatique', title: 'La complexité du système climatique' },
          { id: 'climat-du-futur', title: 'Le climat du futur' },
          { id: 'energie-et-climat', title: 'Énergie, choix de développement et futur climatique' },
        ],
      },
      {
        id: 'futur-des-energies',
        title: 'Le futur des énergies',
        programme: 'Thème 2 : Le futur des énergies',
        lessons: [
          { id: 'deux-siecles-electricite', title: 'Deux siècles d\'énergie électrique' },
          { id: 'atouts-electricite', title: 'Les atouts de l\'électricité' },
          { id: 'transport-electricite', title: 'Optimiser le transport de l\'électricité' },
          { id: 'choix-energetiques', title: 'Choix énergétiques et impacts sur les sociétés' },
        ],
      },
      {
        id: 'histoire-du-vivant',
        title: 'Biodiversité et évolution',
        programme: 'Thème 3 : Une histoire du vivant',
        lessons: [
          { id: 'biodiversite', title: 'La biodiversité et son évolution' },
          { id: 'evolution-grille-de-lecture', title: 'L\'évolution comme grille de lecture du monde' },
          { id: 'evolution-humaine', title: 'L\'évolution humaine' },
        ],
      },
      {
        id: 'modeles-demographiques',
        title: 'Les modèles démographiques',
        programme: 'Thème 3 : Une histoire du vivant. Les modèles démographiques',
        lessons: [
          { id: 'modele-de-malthus', title: 'Croissance exponentielle et modèle de Malthus' },
          { id: 'modele-de-verhulst', title: 'Le modèle logistique de Verhulst' },
        ],
      },
      {
        id: 'intelligence-artificielle',
        title: 'L\'intelligence artificielle',
        programme: 'Thème 3 : Une histoire du vivant. L\'intelligence artificielle',
        lessons: [
          { id: 'apprentissage-machine', title: 'Les principes de l\'apprentissage machine' },
          { id: 'ia-classer-des-donnees', title: 'Classer des données et mesurer les limites de l\'IA' },
        ],
      },
      {
        id: 'projet-experimental',
        title: 'Le projet expérimental et numérique',
        programme: 'Projet expérimental et numérique',
        lessons: [
          { id: 'concevoir-un-projet', title: 'Concevoir et mener un projet scientifique' },
          { id: 'communiquer-resultats', title: 'Traiter des données et communiquer ses résultats' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* HISTOIRE-GÉOGRAPHIE                                                  */
  /* ------------------------------------------------------------------ */
  {
    id: 'hg-tle',
    subject: 'hg',
    grade: 'tle',
    intro:
      'Vous saurez expliquer le monde de 1929 à nos jours, des totalitarismes à la mondialisation, et analyser le rôle des mers et des océans, les dynamiques territoriales et la place de la France et de l\'Union européenne dans le monde.',
    reference:
      'Programme d\'histoire-géographie de la classe terminale de la voie générale (enseignement commun), arrêté du 19 juillet 2019, BO spécial n°8 du 25 juillet 2019',
    chapters: [
      {
        id: 'democraties-totalitarismes',
        title: 'Fragilités des démocraties, totalitarismes et Seconde Guerre mondiale',
        programme:
          'Histoire, thème 1 : Fragilités des démocraties, totalitarismes et Seconde Guerre mondiale (1929-1945)',
        lessons: [
          { id: 'crise-de-1929', title: 'L\'impact de la crise de 1929 : déséquilibres économiques et sociaux' },
          { id: 'regimes-totalitaires', title: 'Les régimes totalitaires' },
          { id: 'guerre-d-aneantissement', title: 'La Seconde Guerre mondiale, une guerre d\'anéantissement' },
          { id: 'france-dans-la-guerre', title: 'La France dans la guerre : Vichy, collaboration, Résistance' },
        ],
      },
      {
        id: 'mers-et-oceans',
        title: 'Mers et océans : au cœur de la mondialisation',
        programme: 'Géographie, thème 1 : Mers et océans : au cœur de la mondialisation',
        lessons: [
          { id: 'vecteurs-mondialisation', title: 'Mers et océans : vecteurs essentiels de la mondialisation' },
          { id: 'appropriation-protection', title: 'Entre appropriation, protection et liberté de circulation' },
          { id: 'france-puissance-maritime', title: 'La France : une puissance maritime ?' },
        ],
      },
      {
        id: 'monde-bipolaire',
        title: 'Un monde bipolaire (1945 au début des années 1970)',
        programme:
          'Histoire, thème 2 : La multiplication des acteurs internationaux dans un monde bipolaire (de 1945 au début des années 1970)',
        lessons: [
          { id: 'nouvel-ordre-mondial', title: 'La fin de la guerre et les débuts d\'un nouvel ordre mondial' },
          { id: 'bipolarisation-tiers-monde', title: 'Bipolarisation et émergence du tiers-monde' },
          { id: 'france-nouvelle-place', title: 'La France : une nouvelle place dans le monde' },
        ],
      },
      {
        id: 'dynamiques-territoriales',
        title: 'Dynamiques territoriales dans la mondialisation',
        programme:
          'Géographie, thème 2 : Dynamiques territoriales, coopérations et tensions dans la mondialisation',
        lessons: [
          { id: 'territoires-inegalement-integres', title: 'Des territoires inégalement intégrés à la mondialisation' },
          { id: 'cooperations-tensions-regulations', title: 'Coopérations, tensions et régulations aux différentes échelles' },
          { id: 'france-rayonnement-attractivite', title: 'La France : rayonnement international et inégale attractivité' },
        ],
      },
      {
        id: 'remises-en-cause',
        title: 'Les remises en cause des années 1970 à 1991',
        programme:
          'Histoire, thème 3 : Les remises en cause économiques, politiques et sociales des années 1970 à 1991',
        lessons: [
          { id: 'equilibres-economiques', title: 'La modification des grands équilibres économiques mondiaux' },
          { id: 'recompositions-politiques', title: 'Recompositions politiques du monde jusqu\'à la fin de l\'URSS' },
          { id: 'france-1974-1988', title: 'La France de 1974 à 1988 : un tournant social, politique et culturel' },
        ],
      },
      {
        id: 'union-europeenne-mondialisation',
        title: 'L\'Union européenne dans la mondialisation',
        programme:
          'Géographie, thème 3 : L\'Union européenne dans la mondialisation : des dynamiques complexes',
        lessons: [
          { id: 'ue-espace-ouvert', title: 'L\'Union européenne, un espace plus ou moins ouvert sur le monde' },
          { id: 'ue-territoires-contrastes', title: 'Des territoires européens inégalement ouverts' },
          { id: 'france-territoires-transfrontaliers', title: 'La France : les dynamiques des territoires transfrontaliers' },
        ],
      },
      {
        id: 'monde-depuis-1990',
        title: 'Le monde, l\'Europe et la France depuis les années 1990',
        programme:
          'Histoire, thème 4 : Le monde, l\'Europe et la France depuis les années 1990, entre coopérations et conflits',
        lessons: [
          { id: 'rapports-de-puissance', title: 'Nouveaux rapports de puissance et enjeux mondiaux' },
          { id: 'construction-europeenne', title: 'La construction européenne : élargir, approfondir, remettre en question' },
          { id: 'republique-francaise', title: 'La République française' },
        ],
      },
      {
        id: 'france-et-ses-regions',
        title: 'La France et ses régions dans l\'Union européenne et le monde',
        programme:
          'Géographie, thème conclusif : La France et ses régions dans l\'Union européenne et dans la mondialisation : lignes de force et recompositions',
        lessons: [
          { id: 'lignes-de-force', title: 'Les lignes de force du territoire français' },
          { id: 'recompositions-regionales', title: 'Des régions en recomposition dans l\'Europe et le monde' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* EMC                                                                  */
  /* ------------------------------------------------------------------ */
  {
    id: 'emc-tle',
    subject: 'emc',
    grade: 'tle',
    intro:
      'Vous saurez comment se construit le débat démocratique, quels en sont les acteurs et les espaces, et comment les institutions délibèrent et décident, jusqu\'aux échelles européenne et internationale.',
    reference:
      'Programme d\'enseignement moral et civique du lycée, BO n°24 du 13 juin 2024 (appliqué en terminale à la rentrée 2026)',
    chapters: [
      {
        id: 'culture-du-debat',
        title: 'La culture du débat et l\'éthique de la discussion',
        programme:
          'La vie démocratique : débat, délibération et prise de décision. Les principes et les espaces du débat démocratique',
        lessons: [
          { id: 'debattre-en-democratie', title: 'Pourquoi débattre en démocratie ?' },
          { id: 'ethique-de-la-discussion', title: 'L\'éthique de la discussion : argumenter, écouter, respecter' },
        ],
      },
      {
        id: 'acteurs-du-debat',
        title: 'Partis, société civile et opinion publique',
        programme:
          'Les principes et les espaces du débat démocratique : partis politiques, société civile organisée, opinion publique',
        lessons: [
          { id: 'partis-politiques', title: 'Le rôle des partis politiques' },
          { id: 'societe-civile', title: 'La société civile organisée : associations et syndicats' },
          { id: 'opinion-publique', title: 'L\'opinion publique : comment se forme-t-elle ?' },
        ],
      },
      {
        id: 'participer',
        title: 'Participer à la vie démocratique',
        programme:
          'Les principes et les espaces du débat démocratique : démocratie participative, société numérique, citoyenneté active',
        lessons: [
          { id: 'democratie-participative', title: 'La démocratie participative' },
          { id: 'debat-et-numerique', title: 'S\'informer et débattre dans la société numérique' },
          { id: 'citoyennete-active', title: 'Être un citoyen actif' },
        ],
      },
      {
        id: 'penser-la-deliberation',
        title: 'Penser la délibération : Athènes, Rousseau, Tocqueville',
        programme: 'La délibération dans les institutions : approche historique et philosophique',
        lessons: [
          { id: 'athenes', title: 'Athènes : délibérer dans la cité' },
          { id: 'rousseau-volonte-generale', title: 'Rousseau : la volonté générale' },
          { id: 'tocqueville', title: 'Tocqueville : la démocratie et ses risques' },
        ],
      },
      {
        id: 'decider-dans-les-institutions',
        title: 'Délibérer et décider dans les institutions',
        programme: 'La délibération dans les institutions : légitimité, consensus ou majorité',
        lessons: [
          { id: 'legitimite', title: 'Qu\'est-ce qu\'une décision légitime ?' },
          { id: 'consensus-ou-majorite', title: 'Décider : consensus ou majorité ?' },
          { id: 'fabrication-de-la-loi', title: 'La fabrication de la loi' },
        ],
      },
      {
        id: 'deliberer-au-dela-nation',
        title: 'Délibérer au-delà de la nation',
        programme: 'La délibération dans les institutions : droit européen, droit international',
        lessons: [
          { id: 'droit-europeen', title: 'Le droit européen : décider ensemble dans l\'Union' },
          { id: 'droit-international', title: 'Le droit international : délibérer entre États' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* ANGLAIS                                                              */
  /* ------------------------------------------------------------------ */
  {
    id: 'anglais-tle',
    subject: 'anglais',
    grade: 'tle',
    intro:
      'Vous saurez comprendre des documents authentiques variés, vous exprimer et débattre en anglais au niveau B2 sur les six axes du programme, et connaître le Royaume-Uni et ses nations.',
    reference:
      'Programme de langues vivantes étrangères du cycle terminal (anglais), arrêté du 5 mai 2025, BO n°22 du 29 mai 2025 (appliqué en terminale à la rentrée 2026)',
    chapters: [
      {
        id: 'competences-b2',
        title: 'Les compétences du niveau B2',
        programme: 'Activités langagières : réception, production, interaction et médiation',
        lessons: [
          { id: 'comprendre-l-oral', title: 'Comprendre un document audio ou vidéo authentique' },
          { id: 'lire-un-texte-long', title: 'Lire et analyser un texte long' },
          { id: 'prendre-la-parole', title: 'Prendre la parole en continu et en interaction' },
        ],
      },
      {
        id: 'prive-public',
        title: 'Espace privé et espace public',
        programme: 'Axe 1 : Espace privé et espace public',
        lessons: [
          { id: 'privacy-numerique', title: 'La vie privée à l\'ère numérique : « Privacy matters »' },
          { id: 'espaces-publics', title: 'Les espaces publics : à qui appartient la ville ?' },
          { id: 'personnalites-publiques', title: 'Personnalités publiques et vie privée' },
        ],
      },
      {
        id: 'territoire-memoire',
        title: 'Territoire et mémoire',
        programme: 'Axe 2 : Territoire et mémoire',
        lessons: [
          { id: 'commemorations', title: 'Monuments et commémorations dans le monde anglophone' },
          { id: 'memoires-contestees', title: 'Mémoires contestées : statues et débats' },
          { id: 'sense-of-place', title: 'Territoires et identités : « a sense of place »' },
        ],
      },
      {
        id: 'fictions-realites',
        title: 'Fictions et réalités',
        programme: 'Axe 3 : Fictions et réalités',
        lessons: [
          { id: 'fiction-et-reel', title: 'Quand la fiction s\'inspire du réel' },
          { id: 'utopies-dystopies', title: 'Utopies et dystopies' },
          { id: 'series-et-societe', title: 'Séries et cinéma : le pouvoir du récit' },
        ],
      },
      {
        id: 'communication',
        title: 'Enjeux et formes de la communication',
        programme: 'Axe 4 : Enjeux et formes de la communication',
        lessons: [
          { id: 'speeches', title: 'L\'art du discours : « famous speeches »' },
          { id: 'medias-et-information', title: 'Médias, information et désinformation' },
          { id: 'global-english', title: 'L\'anglais, langue de communication mondiale' },
        ],
      },
      {
        id: 'citoyennete-mondes-virtuels',
        title: 'Citoyenneté et mondes virtuels',
        programme: 'Axe 5 : Citoyenneté et mondes virtuels',
        lessons: [
          { id: 'citoyen-reseaux-sociaux', title: 'Être citoyen à l\'ère des réseaux sociaux' },
          { id: 'activisme-en-ligne', title: 'Mobilisations et activisme en ligne' },
          { id: 'donnees-surveillance', title: 'Données, surveillance et libertés' },
        ],
      },
      {
        id: 'royaume-uni-nations',
        title: 'Le Royaume-Uni et ses nations',
        programme: 'Axe 6 : Le Royaume-Uni et ses nations',
        lessons: [
          { id: 'royaume-toujours-uni', title: '« Un Royaume toujours uni ? » : quatre nations, un État' },
          { id: 'devolution-identites', title: 'Écosse, pays de Galles, Irlande du Nord : identités et dévolution' },
          { id: 'brexit', title: 'Le Brexit et ses conséquences pour les nations' },
          { id: 'monarchie-soft-power', title: 'La monarchie et le rayonnement britannique' },
        ],
      },
      {
        id: 'outils-de-la-langue',
        title: 'Les outils de la langue',
        programme: 'Compétences linguistiques : grammaire, lexique et phonologie au service des activités langagières',
        lessons: [
          { id: 'temps-et-aspects', title: 'Temps et aspects : raconter et situer dans le passé' },
          { id: 'modalite', title: 'La modalité : hypothèse, regret, obligation' },
          { id: 'structurer-un-discours', title: 'Structurer un discours : connecteurs et discours rapporté' },
        ],
      },
      {
        id: 'evaluations',
        title: 'Se préparer aux évaluations de l\'année',
        programme: 'Évaluation des activités langagières en fin de cycle terminal',
        lessons: [
          { id: 'evaluation-ecrite', title: 'Compréhension et expression écrites : méthode' },
          { id: 'evaluation-orale', title: 'Expression orale : présenter et défendre un point de vue' },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* GRAND ORAL                                                           */
  /* ------------------------------------------------------------------ */
  {
    id: 'grand-oral-tle',
    subject: 'grand-oral',
    grade: 'tle',
    intro:
      'Vous saurez choisir et formuler vos deux questions, construire un exposé de dix minutes, échanger avec le jury avec assurance et maîtriser votre voix, votre posture et votre trac.',
    reference:
      'Épreuve orale terminale du baccalauréat général (Grand oral), note de service publiée au BO spécial n°4 du 17 septembre 2026, applicable à compter de la session 2027',
    chapters: [
      {
        id: 'comprendre-l-epreuve',
        title: 'Comprendre l\'épreuve',
        programme: 'Grand oral : finalité, déroulement et évaluation de l\'épreuve',
        lessons: [
          { id: 'deroulement', title: 'Le Grand oral : préparation, exposé, échange' },
          { id: 'criteres-du-jury', title: 'Ce que le jury évalue' },
        ],
      },
      {
        id: 'deux-questions',
        title: 'Choisir et formuler ses deux questions',
        programme: 'Grand oral : les deux questions préparées en lien avec les enseignements de spécialité',
        lessons: [
          { id: 'choisir-ses-questions', title: 'Choisir deux questions en lien avec ses spécialités' },
          { id: 'formuler-une-question', title: 'Formuler une question problématisée' },
          { id: 'question-et-parcours', title: 'Relier ses questions à son parcours et à ses projets' },
        ],
      },
      {
        id: 'construire-l-argumentation',
        title: 'Construire son argumentation',
        programme: 'Grand oral : préparer le contenu de l\'exposé',
        lessons: [
          { id: 'documenter-sa-question', title: 'Documenter sa question : sources et références' },
          { id: 'plan-de-l-expose', title: 'Construire le plan de l\'exposé' },
          { id: 'ecrire-pour-l-oral', title: 'Écrire pour l\'oral sans réciter' },
        ],
      },
      {
        id: 'temps-de-preparation',
        title: 'Les vingt minutes de préparation',
        programme: 'Grand oral : le temps de préparation et le support remis au jury',
        lessons: [
          { id: 'organiser-la-preparation', title: 'Organiser ses vingt minutes de préparation' },
          { id: 'support-pour-le-jury', title: 'Concevoir le support remis au jury' },
        ],
      },
      {
        id: 'l-expose',
        title: 'L\'exposé de dix minutes',
        programme: 'Grand oral : premier temps, la présentation de la question',
        lessons: [
          { id: 'capter-l-attention', title: 'Capter l\'attention dès l\'introduction' },
          { id: 'expliquer-clairement', title: 'Expliquer clairement des notions de spécialité' },
          { id: 'conclure', title: 'Conclure et ouvrir' },
        ],
      },
      {
        id: 'echange-avec-le-jury',
        title: 'L\'échange avec le jury',
        programme: 'Grand oral : second temps, l\'échange avec le candidat',
        lessons: [
          { id: 'anticiper-les-questions', title: 'Anticiper les questions du jury' },
          { id: 'approfondir-et-argumenter', title: 'Approfondir et défendre son point de vue' },
          { id: 'question-difficile', title: 'Réagir à une question difficile' },
        ],
      },
      {
        id: 'voix-et-posture',
        title: 'Voix, posture et gestion du trac',
        programme: 'Grand oral : qualité orale de l\'épreuve',
        lessons: [
          { id: 'la-voix', title: 'La voix : débit, volume, articulation' },
          { id: 'posture-regard-gestes', title: 'Posture, regard et gestes' },
          { id: 'gerer-le-trac', title: 'Gérer le trac' },
        ],
      },
      {
        id: 's-entrainer',
        title: 'S\'entraîner jusqu\'au jour J',
        programme: 'Grand oral : préparation tout au long du cycle terminal',
        lessons: [
          { id: 'repeter-avec-methode', title: 'Répéter avec méthode : chronométrer et s\'enregistrer' },
          { id: 'oral-blanc', title: 'L\'oral blanc : une simulation complète' },
        ],
      },
    ],
  },
]
