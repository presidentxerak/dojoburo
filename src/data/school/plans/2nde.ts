// LE PLAN DE LA SECONDE GÉNÉRALE · demandé : « Il faut vraiment que ça soit lié
// au programme scolaire de l'école ». Programmes en vigueur en 2026-2027 :
// mathématiques, nouveau programme (arrêté du 26 février 2026, BO n°14 du
// 2 avril 2026, applicable dès la rentrée 2026) ; langues vivantes, programmes
// de 2025 (BO n°22 du 29 mai 2025, applicables en seconde depuis la rentrée
// 2025) ; EMC, programme de 2024 (BO n°24 du 13 juin 2024) ; les autres
// matières, programmes de la réforme du lycée (BO spécial n°1 du 22 janvier
// 2019). La SNT est en cours de révision pour la rentrée 2027 : le programme
// de 2019 reste celui de l'année.
import type { UnitPlan } from '../types'

export const PLANS: UnitPlan[] = [
  /* ------------------------------------------------------------------ */
  /* FRANÇAIS                                                            */
  /* ------------------------------------------------------------------ */
  {
    id: "francais-2nde",
    subject: "francais",
    grade: "2nde",
    intro: "Vous saurez lire, analyser et commenter des textes des quatre grands genres, du Moyen Âge à nos jours, et maîtriser la langue et les méthodes d'écriture attendues au lycée.",
    reference: "Programme de français de seconde générale et technologique, BO spécial n°1 du 22 janvier 2019",
    chapters: [
      {
        id: "roman-xviiie-xixe",
        title: "Le roman aux XVIIIe et XIXe siècles : un genre moderne",
        programme: "Le roman et le récit du XVIIIe siècle au XXIe siècle",
        lessons: [
          { id: "roman-genre-moderne", title: "Le roman, un genre en liberté : formes et ambitions" },
          { id: "narrateur-point-de-vue", title: "Qui raconte ? Narrateur, focalisation et point de vue" },
          { id: "realisme-naturalisme", title: "Réalisme et naturalisme : représenter le réel au XIXe siècle" },
          { id: "personnage-roman", title: "Le personnage de roman : héros, antihéros et parcours" },
        ],
      },
      {
        id: "langue-accords-verbe",
        title: "Grammaire : les accords et le verbe",
        programme: "Étude de la langue : les accords, le verbe (temps, modes, valeurs)",
        lessons: [
          { id: "accords-groupe-nominal", title: "Les accords dans le groupe nominal" },
          { id: "accord-verbe-participe", title: "L'accord du verbe avec son sujet et du participe passé" },
          { id: "temps-modes-valeurs", title: "Le verbe : temps, modes et valeurs" },
        ],
      },
      {
        id: "recit-xxe-xxie",
        title: "Le récit aux XXe et XXIe siècles : renouvellements",
        programme: "Le roman et le récit du XVIIIe siècle au XXIe siècle",
        lessons: [
          { id: "roman-xxe-ruptures", title: "Les remises en cause du roman au XXe siècle" },
          { id: "ordre-rythme-recit", title: "L'ordre et le rythme du récit : ellipse, retour en arrière, sommaire" },
          { id: "nouvelle-recit-bref", title: "La nouvelle et le récit bref" },
        ],
      },
      {
        id: "poesie-formes",
        title: "La poésie du Moyen Âge au XVIIIe siècle : formes et poètes",
        programme: "La poésie du Moyen Âge au XVIIIe siècle",
        lessons: [
          { id: "versification", title: "Les outils de la versification : vers, rimes et rythme" },
          { id: "poesie-medievale", title: "La poésie médiévale : de la lyrique courtoise à Villon" },
          { id: "renaissance-pleiade", title: "La Renaissance et la Pléiade : le sonnet et l'imitation des Anciens" },
          { id: "poesie-classique", title: "Du baroque au XVIIIe siècle : La Fontaine et la poésie classique" },
        ],
      },
      {
        id: "poesie-lire",
        title: "Lire et interpréter un poème",
        programme: "La poésie du Moyen Âge au XVIIIe siècle",
        lessons: [
          { id: "images-poetiques", title: "Les images poétiques : comparaison, métaphore, allégorie" },
          { id: "analyser-poeme", title: "Analyser un poème : du sens au jeu des formes" },
        ],
      },
      {
        id: "methodes-ecrit",
        title: "Méthodes : le commentaire et la dissertation",
        programme: "Les exercices écrits : le commentaire et la dissertation",
        lessons: [
          { id: "commentaire-problematique", title: "Construire une problématique et un plan de commentaire" },
          { id: "commentaire-paragraphe", title: "Rédiger un paragraphe de commentaire : citer et analyser" },
          { id: "commentaire-intro-conclusion", title: "Rédiger l'introduction et la conclusion d'un commentaire" },
          { id: "dissertation-initiation", title: "S'initier à la dissertation sur une œuvre" },
        ],
      },
      {
        id: "idees-argumenter",
        title: "La littérature d'idées : convaincre, persuader, délibérer",
        programme: "La littérature d'idées et la presse du XIXe siècle au XXIe siècle",
        lessons: [
          { id: "convaincre-persuader", title: "Convaincre, persuader, délibérer : les stratégies argumentatives" },
          { id: "genres-argumentatifs", title: "Les formes de l'argumentation : essai, discours, pamphlet, apologue" },
          { id: "ecrivain-engage", title: "L'écrivain engagé : de Hugo à Zola" },
        ],
      },
      {
        id: "idees-presse",
        title: "La presse et le débat d'idées du XIXe au XXIe siècle",
        programme: "La littérature d'idées et la presse du XIXe siècle au XXIe siècle",
        lessons: [
          { id: "essor-presse", title: "L'essor de la presse au XIXe siècle et les écrivains journalistes" },
          { id: "genres-journalistiques", title: "Lire un article : éditorial, chronique, tribune, reportage" },
          { id: "presse-numerique", title: "Du journal au numérique : informer et débattre aujourd'hui" },
        ],
      },
      {
        id: "langue-phrase-complexe",
        title: "Grammaire : la phrase complexe et le lexique",
        programme: "Étude de la langue : les relations au sein de la phrase complexe, le lexique",
        lessons: [
          { id: "juxtaposition-coordination", title: "Juxtaposition, coordination et subordination" },
          { id: "relations-logiques", title: "Exprimer les relations logiques : cause, conséquence, opposition" },
          { id: "lexique-formation", title: "Le lexique : formation des mots et champs lexicaux" },
        ],
      },
      {
        id: "theatre-classique",
        title: "Le théâtre au XVIIe siècle : comédie et tragédie",
        programme: "Le théâtre du XVIIe siècle au XXIe siècle",
        lessons: [
          { id: "texte-representation", title: "Le texte théâtral et sa représentation : dialogue, didascalies, mise en scène" },
          { id: "comedie-moliere", title: "La comédie : Molière et les ressorts du comique" },
          { id: "tragedie-racine", title: "La tragédie classique : règles et passions chez Racine" },
        ],
      },
      {
        id: "theatre-moderne",
        title: "Le théâtre du XVIIIe au XXIe siècle : héritages et ruptures",
        programme: "Le théâtre du XVIIe siècle au XXIe siècle",
        lessons: [
          { id: "theatre-xviiie-xixe", title: "De Marivaux et Beaumarchais au drame romantique" },
          { id: "theatre-xxe-xxie", title: "Le théâtre aux XXe et XXIe siècles : absurde et nouvelles écritures" },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* MATHÉMATIQUES                                                       */
  /* ------------------------------------------------------------------ */
  {
    id: "maths-2nde",
    subject: "maths",
    grade: "2nde",
    intro: "Vous maîtriserez les nombres et le calcul littéral, les vecteurs et les droites, les fonctions de référence, les statistiques et les probabilités conditionnelles, avec la logique et la programmation qui les accompagnent.",
    reference: "Programme de mathématiques de seconde générale et technologique, arrêté du 26 février 2026, BO n°14 du 2 avril 2026",
    chapters: [
      {
        id: "ensembles-nombres",
        title: "Ensembles de nombres et intervalles",
        programme: "Nombres et calculs ; Vocabulaire ensembliste et logique",
        lessons: [
          { id: "ensembles-n-z-d-q-r", title: "Les ensembles de nombres N, Z, D, Q et R" },
          { id: "intervalles", title: "Intervalles, réunion et intersection" },
          { id: "implication-quantificateurs", title: "Implication, contraposée et quantificateurs" },
        ],
      },
      {
        id: "arithmetique-calcul",
        title: "Arithmétique, puissances et racines carrées",
        programme: "Nombres et calculs",
        lessons: [
          { id: "multiples-diviseurs", title: "Multiples, diviseurs et nombres premiers" },
          { id: "puissances", title: "Calculer avec les puissances" },
          { id: "racines-carrees", title: "Calculer avec les racines carrées" },
        ],
      },
      {
        id: "vecteurs",
        title: "Vecteurs du plan",
        programme: "Géométrie : vecteurs",
        lessons: [
          { id: "translation-vecteur", title: "Translation et vecteur" },
          { id: "somme-chasles", title: "Somme de vecteurs et relation de Chasles" },
          { id: "produit-reel-vecteur", title: "Produit d'un vecteur par un nombre réel" },
        ],
      },
      {
        id: "calcul-litteral",
        title: "Calcul littéral",
        programme: "Nombres et calculs : calcul littéral",
        lessons: [
          { id: "developper-reduire", title: "Développer et réduire une expression" },
          { id: "identites-remarquables", title: "Les identités remarquables pour factoriser" },
          { id: "choisir-forme", title: "Choisir la forme adaptée d'une expression" },
        ],
      },
      {
        id: "fonctions-generalites",
        title: "Généralités sur les fonctions",
        programme: "Fonctions ; Algorithmique et programmation",
        lessons: [
          { id: "notion-fonction", title: "Fonction, image, antécédent et domaine de définition" },
          { id: "courbe-resolution-graphique", title: "Courbe représentative et résolutions graphiques" },
          { id: "fonctions-python", title: "Écrire une fonction en Python" },
        ],
      },
      {
        id: "coordonnees",
        title: "Vecteurs et coordonnées dans un repère",
        programme: "Géométrie : vecteurs et repérage",
        lessons: [
          { id: "coordonnees-vecteur", title: "Coordonnées d'un vecteur, d'une somme, d'un produit par un réel" },
          { id: "milieu-distance", title: "Milieu d'un segment et distance entre deux points" },
          { id: "colinearite", title: "Colinéarité et combinaison linéaire de deux vecteurs" },
        ],
      },
      {
        id: "statistiques",
        title: "Statistiques et croisement de variables",
        programme: "Statistiques et probabilités : statistique descriptive, croisement de deux variables qualitatives",
        lessons: [
          { id: "proportions-evolutions", title: "Proportions, pourcentages et évolutions successives" },
          { id: "indicateurs-statistiques", title: "Indicateurs de position et de dispersion" },
          { id: "tableaux-croises", title: "Tableaux croisés : fréquences marginales et conditionnelles" },
        ],
      },
      {
        id: "equations-inequations",
        title: "Équations et inéquations",
        programme: "Nombres et calculs : équations et inéquations",
        lessons: [
          { id: "equations-premier-degre", title: "Résoudre une équation du premier degré" },
          { id: "equation-produit-nul", title: "Équations produit nul et équations x² = a" },
          { id: "inequations", title: "Résoudre une inéquation et écrire les solutions en intervalle" },
        ],
      },
      {
        id: "variations",
        title: "Variations et extremums",
        programme: "Fonctions : variations et extremums",
        lessons: [
          { id: "sens-variation", title: "Sens de variation et tableau de variations" },
          { id: "extremums", title: "Maximum et minimum d'une fonction" },
        ],
      },
      {
        id: "droites",
        title: "Droites du plan",
        programme: "Géométrie : droites du plan",
        lessons: [
          { id: "equation-droite", title: "Équations de droites et coefficient directeur" },
          { id: "droites-paralleles", title: "Droites parallèles et droites sécantes" },
          { id: "intersection-droites", title: "Déterminer le point d'intersection de deux droites" },
        ],
      },
      {
        id: "fonctions-reference",
        title: "Fonctions de référence et signe",
        programme: "Fonctions : fonctions de référence, signe",
        lessons: [
          { id: "fonctions-affines", title: "Fonctions affines : variations et signe" },
          { id: "tableau-signes", title: "Étudier le signe d'une expression : le tableau de signes" },
          { id: "carre-inverse", title: "Les fonctions carré et inverse" },
          { id: "valeur-absolue", title: "La fonction valeur absolue" },
        ],
      },
      {
        id: "probabilites",
        title: "Probabilités",
        programme: "Statistiques et probabilités : probabilités, probabilités conditionnelles",
        lessons: [
          { id: "modele-evenements", title: "Modèle de probabilité et événements" },
          { id: "probabilites-conditionnelles", title: "Probabilités conditionnelles et arbres pondérés" },
          { id: "simulation-python", title: "Simuler une expérience aléatoire avec Python" },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* HISTOIRE-GÉOGRAPHIE                                                 */
  /* ------------------------------------------------------------------ */
  {
    id: "hg-2nde",
    subject: "hg",
    grade: "2nde",
    intro: "Vous saurez expliquer les grandes étapes de la formation du monde moderne, de l'Antiquité aux Lumières, et analyser les défis d'un monde en transition : environnement, développement et mobilités.",
    reference: "Programme d'histoire-géographie de seconde générale et technologique, BO spécial n°1 du 22 janvier 2019",
    chapters: [
      {
        id: "mediterranee-antique",
        title: "La Méditerranée antique : les empreintes grecques et romaines",
        programme: "Histoire, thème 1 : Le monde méditerranéen : empreintes de l'Antiquité et du Moyen Âge",
        lessons: [
          { id: "pericles-democratie", title: "Périclès et la démocratie athénienne" },
          { id: "auguste-empire", title: "Auguste et la naissance de l'Empire romain" },
          { id: "empire-christianise", title: "Constantin et un Empire romain qui se christianise" },
        ],
      },
      {
        id: "mediterranee-medievale",
        title: "La Méditerranée médiévale : trois civilisations entre échanges et conflits",
        programme: "Histoire, thème 1 : Le monde méditerranéen : empreintes de l'Antiquité et du Moyen Âge",
        lessons: [
          { id: "trois-civilisations", title: "Byzance, l'Islam et l'Occident chrétien autour de la Méditerranée" },
          { id: "croisades-reconquista", title: "Croisades et Reconquista : guerres et contacts" },
          { id: "venise-echanges", title: "Venise et les échanges en Méditerranée" },
        ],
      },
      {
        id: "societes-environnements",
        title: "Sociétés et environnements : des équilibres fragiles",
        programme: "Géographie, thème 1 : Sociétés et environnements : des équilibres fragiles",
        lessons: [
          { id: "societes-risques", title: "Les sociétés face aux risques" },
          { id: "ressources-pression", title: "Des ressources majeures sous pression : tensions et gestion" },
          { id: "france-milieux", title: "La France : des milieux entre valorisation et protection" },
        ],
      },
      {
        id: "ouverture-atlantique",
        title: "L'ouverture atlantique : les conséquences du « Nouveau Monde »",
        programme: "Histoire, thème 2 : XVe-XVIe siècles : un nouveau rapport au monde, un temps de mutation intellectuelle",
        lessons: [
          { id: "grandes-explorations", title: "Les grandes explorations : de Colomb à Magellan" },
          { id: "conquete-amerique", title: "La conquête de l'Amérique et le sort des sociétés amérindiennes" },
          { id: "seville-traite", title: "Séville, l'or américain et les débuts de la traite atlantique" },
        ],
      },
      {
        id: "renaissance-reformes",
        title: "Renaissance, humanisme et réformes religieuses",
        programme: "Histoire, thème 2 : XVe-XVIe siècles : un nouveau rapport au monde, un temps de mutation intellectuelle",
        lessons: [
          { id: "humanisme-imprimerie", title: "L'humanisme et l'imprimerie : la diffusion des idées" },
          { id: "renaissance-artistique", title: "La Renaissance artistique : de Florence à Fontainebleau" },
          { id: "reformes-religieuses", title: "Réformes protestante et catholique : Luther, Calvin, Trente" },
        ],
      },
      {
        id: "territoires-developpement",
        title: "Territoires, populations et développement : quels défis ?",
        programme: "Géographie, thème 2 : Territoires, populations et développement : quels défis ?",
        lessons: [
          { id: "inegalites-developpement", title: "Des territoires inégalement développés : mesurer le développement" },
          { id: "trajectoires-demographiques", title: "Des trajectoires démographiques différenciées : nombre et vieillissement" },
          { id: "france-dynamiques", title: "La France : dynamiques démographiques et inégalités socio-économiques" },
        ],
      },
      {
        id: "etat-france",
        title: "L'affirmation de l'État dans le royaume de France",
        programme: "Histoire, thème 3 : L'État à l'époque moderne : France et Angleterre",
        lessons: [
          { id: "francois-ier", title: "François Ier et le renforcement du pouvoir royal" },
          { id: "guerres-religion", title: "Les guerres de Religion et l'édit de Nantes" },
          { id: "louis-xiv-absolutisme", title: "Louis XIV et la monarchie absolue" },
        ],
      },
      {
        id: "modele-britannique",
        title: "Le modèle britannique et son influence",
        programme: "Histoire, thème 3 : L'État à l'époque moderne : France et Angleterre",
        lessons: [
          { id: "revolutions-anglaises", title: "Les révolutions anglaises et le Bill of Rights" },
          { id: "monarchie-parlementaire", title: "La monarchie parlementaire, un modèle admiré par les Lumières" },
        ],
      },
      {
        id: "mobilites",
        title: "Des mobilités généralisées",
        programme: "Géographie, thème 3 : Des mobilités généralisées",
        lessons: [
          { id: "migrations-internationales", title: "Les migrations internationales" },
          { id: "tourisme", title: "Le développement du tourisme et ses impacts" },
          { id: "france-mobilites", title: "La France : mobilités, transports et enjeux d'aménagement" },
        ],
      },
      {
        id: "lumieres-sciences",
        title: "Les Lumières et le développement des sciences",
        programme: "Histoire, thème 4 : Dynamiques et ruptures dans les sociétés des XVIIe et XVIIIe siècles",
        lessons: [
          { id: "revolution-scientifique", title: "La révolution scientifique : de Galilée à Newton" },
          { id: "philosophes-lumieres", title: "Les Lumières : philosophes, Encyclopédie et diffusion des idées" },
          { id: "sciences-xviiie", title: "Sciences et techniques au XVIIIe siècle : expérimenter et diffuser" },
        ],
      },
      {
        id: "societe-ordres",
        title: "Tensions, mutations et crispations de la société d'ordres",
        programme: "Histoire, thème 4 : Dynamiques et ruptures dans les sociétés des XVIIe et XVIIIe siècles",
        lessons: [
          { id: "societe-ordres-structure", title: "La société d'ordres : clergé, noblesse et tiers état" },
          { id: "mutations-economiques", title: "Mutations économiques et essor de la bourgeoisie" },
          { id: "contestations-ancien-regime", title: "Crispations et contestations à la fin de l'Ancien Régime" },
        ],
      },
      {
        id: "afrique-australe",
        title: "L'Afrique australe : un espace en profonde mutation",
        programme: "Géographie, thème 4 (conclusif) : L'Afrique australe : un espace en profonde mutation",
        lessons: [
          { id: "afrique-australe-milieux", title: "Des milieux à valoriser et à ménager" },
          { id: "afrique-australe-developpement", title: "Les défis de la transition et du développement" },
          { id: "afrique-australe-mobilites", title: "Des territoires traversés et remodelés par des mobilités" },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* ENSEIGNEMENT MORAL ET CIVIQUE                                       */
  /* ------------------------------------------------------------------ */
  {
    id: "emc-2nde",
    subject: "emc",
    grade: "2nde",
    intro: "Vous saurez expliquer ce qu'est la liberté dans un État de droit, comment la loi la garantit et la limite, et quelles responsabilités elle implique face à l'information et à l'environnement.",
    reference: "Programme d'enseignement moral et civique, arrêté du 29 mai 2024, BO n°24 du 13 juin 2024",
    chapters: [
      {
        id: "liberte-libertes",
        title: "La liberté et les libertés fondamentales",
        programme: "Classe de seconde : la liberté, thème de l'année",
        lessons: [
          { id: "definir-liberte", title: "Qu'est-ce que la liberté ? Liberté et loi" },
          { id: "libertes-fondamentales", title: "Les libertés fondamentales et les textes qui les garantissent" },
        ],
      },
      {
        id: "etat-de-droit",
        title: "L'État de droit, garant des libertés",
        programme: "La liberté : l'État de droit (hiérarchie des normes, ordre public)",
        lessons: [
          { id: "hierarchie-normes", title: "La hiérarchie des normes et le contrôle de constitutionnalité" },
          { id: "ordre-public", title: "L'ordre public et les limites des libertés" },
          { id: "justice-libertes", title: "La justice, gardienne des droits et des libertés" },
        ],
      },
      {
        id: "laicite",
        title: "La laïcité, garantie de la liberté de conscience",
        programme: "La liberté : l'État de droit, la laïcité",
        lessons: [
          { id: "laicite-principes", title: "La laïcité : principes et histoire, de 1905 à aujourd'hui" },
          { id: "laicite-ecole", title: "La laïcité à l'école et dans les services publics" },
        ],
      },
      {
        id: "information",
        title: "Liberté et responsabilité : l'information",
        programme: "Liberté et responsabilité : l'exemple de l'information (liberté de la presse, liberté d'expression)",
        lessons: [
          { id: "liberte-presse", title: "La liberté de la presse, une conquête démocratique" },
          { id: "liberte-expression", title: "La liberté d'expression et ses limites" },
          { id: "esprit-critique-information", title: "S'informer avec esprit critique : sources, réseaux et désinformation" },
        ],
      },
      {
        id: "environnement",
        title: "Droits et responsabilités face à l'environnement",
        programme: "Droits et responsabilités : l'environnement et la biodiversité",
        lessons: [
          { id: "charte-environnement", title: "La Charte de l'environnement et le droit à un environnement sain" },
          { id: "proteger-biodiversite", title: "Protéger la biodiversité : responsabilités individuelles et collectives" },
        ],
      },
      {
        id: "egalite-fraternite",
        title: "Égalité et fraternité, fondements d'une société démocratique",
        programme: "Les valeurs de la République : liberté, égalité, fraternité",
        lessons: [
          { id: "egalite-discriminations", title: "L'égalité devant la loi et la lutte contre les discriminations" },
          { id: "fraternite-solidarite", title: "La fraternité : solidarité et engagement" },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* SCIENCES ÉCONOMIQUES ET SOCIALES                                    */
  /* ------------------------------------------------------------------ */
  {
    id: "ses-2nde",
    subject: "ses",
    grade: "2nde",
    intro: "Vous saurez comment raisonnent économistes, sociologues et politistes, comment se créent et se mesurent les richesses, comment se forment les prix, comment on devient un acteur social et comment s'organise la vie politique.",
    reference: "Programme de sciences économiques et sociales de seconde générale et technologique, BO spécial n°1 du 22 janvier 2019",
    chapters: [
      {
        id: "raisonner-ses",
        title: "Comment travaillent les sciences économiques et sociales",
        programme: "Comment les économistes, les sociologues et les politistes raisonnent-ils et travaillent-ils ?",
        lessons: [
          { id: "demarche-sciences-sociales", title: "La démarche des sciences sociales : questions, hypothèses, modèles" },
          { id: "enquetes-donnees", title: "Enquêtes et données : produire des connaissances" },
          { id: "savoir-faire-quantitatifs", title: "Lire des données : proportions, taux de variation et indices" },
        ],
      },
      {
        id: "creer-richesses",
        title: "Comment crée-t-on des richesses ?",
        programme: "Comment crée-t-on des richesses et comment les mesure-t-on ?",
        lessons: [
          { id: "producteurs", title: "Qui produit ? Entreprises, administrations, économie sociale et solidaire" },
          { id: "facteurs-production", title: "Les facteurs de production et leur combinaison" },
          { id: "valeur-ajoutee", title: "Chiffre d'affaires, consommations intermédiaires et valeur ajoutée" },
        ],
      },
      {
        id: "mesurer-richesses",
        title: "Comment mesure-t-on les richesses ?",
        programme: "Comment crée-t-on des richesses et comment les mesure-t-on ?",
        lessons: [
          { id: "pib", title: "Le PIB : mesurer la production d'un pays" },
          { id: "limites-pib", title: "Les limites du PIB : activités non marchandes et soutenabilité" },
        ],
      },
      {
        id: "marche-offre-demande",
        title: "Le marché : offre, demande et prix d'équilibre",
        programme: "Comment se forment les prix sur un marché ?",
        lessons: [
          { id: "quest-ce-marche", title: "Qu'est-ce qu'un marché ? Échanges et institutions" },
          { id: "courbes-offre-demande", title: "Les courbes d'offre et de demande" },
          { id: "equilibre-marche", title: "L'équilibre du marché et la formation du prix" },
        ],
      },
      {
        id: "marche-variations",
        title: "Quand le prix change : chocs et intervention publique",
        programme: "Comment se forment les prix sur un marché ?",
        lessons: [
          { id: "deplacements-courbes", title: "Quand l'offre ou la demande se déplace : effets sur le prix" },
          { id: "taxe-subvention", title: "Les effets d'une taxe ou d'une subvention" },
        ],
      },
      {
        id: "socialisation",
        title: "Comment devenons-nous des acteurs sociaux ?",
        programme: "Comment devenons-nous des acteurs sociaux ?",
        lessons: [
          { id: "socialisation-normes", title: "La socialisation : apprendre normes et valeurs" },
          { id: "instances-socialisation", title: "Famille, école, pairs, médias : les instances de socialisation" },
          { id: "socialisation-differenciee", title: "Une socialisation différenciée selon le genre et le milieu social" },
        ],
      },
      {
        id: "vie-politique",
        title: "Comment s'organise la vie politique ?",
        programme: "Comment s'organise la vie politique ?",
        lessons: [
          { id: "institutions-france", title: "Les institutions de la Ve République et la séparation des pouvoirs" },
          { id: "acteurs-politiques", title: "Partis, associations, groupes d'intérêt et médias" },
          { id: "opinion-publique", title: "L'opinion publique et les sondages" },
        ],
      },
      {
        id: "diplome-emploi-salaire",
        title: "Diplôme, emploi et salaire : quelles relations ?",
        programme: "Quelles relations entre le diplôme, l'emploi et le salaire ?",
        lessons: [
          { id: "diplome-emploi", title: "Le diplôme, une protection face au chômage" },
          { id: "diplome-salaire", title: "Diplôme et salaire : un lien statistique" },
          { id: "autres-facteurs-insertion", title: "Origine sociale, réseaux, genre : d'autres facteurs d'insertion" },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* PHYSIQUE-CHIMIE                                                     */
  /* ------------------------------------------------------------------ */
  {
    id: "physique-chimie-2nde",
    subject: "physique-chimie",
    grade: "2nde",
    intro: "Vous saurez décrire la matière de l'échelle macroscopique jusqu'à l'atome, modéliser ses transformations, décrire un mouvement et ses causes, et comprendre les sons, la lumière et les signaux électriques.",
    reference: "Programme de physique-chimie de seconde générale et technologique, BO spécial n°1 du 22 janvier 2019",
    chapters: [
      {
        id: "corps-purs-melanges",
        title: "Corps purs et mélanges au quotidien",
        programme: "Constitution et transformations de la matière : décrire et caractériser la matière à l'échelle macroscopique",
        lessons: [
          { id: "corps-pur-melange", title: "Corps purs et mélanges, composition de l'air" },
          { id: "identifier-especes", title: "Identifier une espèce chimique : changement d'état, masse volumique, tests" },
          { id: "chromatographie", title: "La chromatographie sur couche mince" },
        ],
      },
      {
        id: "solutions-aqueuses",
        title: "Les solutions aqueuses",
        programme: "Constitution et transformations de la matière : décrire et caractériser la matière à l'échelle macroscopique",
        lessons: [
          { id: "concentration-masse", title: "Solvant, soluté et concentration en masse" },
          { id: "dissolution-dilution", title: "Préparer une solution par dissolution ou par dilution" },
          { id: "dosage-etalonnage", title: "Déterminer une concentration par un dosage par étalonnage" },
        ],
      },
      {
        id: "atome",
        title: "Le modèle de l'atome",
        programme: "Constitution et transformations de la matière : modéliser la matière à l'échelle microscopique",
        lessons: [
          { id: "structure-atome", title: "Noyau et électrons : la structure de l'atome" },
          { id: "noyau-isotopes", title: "Numéro atomique, nombre de masse et isotopes" },
          { id: "configuration-tableau", title: "Configuration électronique et tableau périodique" },
        ],
      },
      {
        id: "entites-stables",
        title: "Des entités chimiques plus stables, et les compter",
        programme: "Constitution et transformations de la matière : modéliser la matière à l'échelle microscopique",
        lessons: [
          { id: "ions-monoatomiques", title: "Les ions monoatomiques et la stabilité des gaz nobles" },
          { id: "molecules-lewis", title: "Molécules, schéma de Lewis et énergie de liaison" },
          { id: "mole-avogadro", title: "Compter les entités : la mole et la constante d'Avogadro" },
        ],
      },
      {
        id: "transformations-physiques",
        title: "Les transformations physiques",
        programme: "Constitution et transformations de la matière : modéliser les transformations de la matière et transfert d'énergie",
        lessons: [
          { id: "changements-etat", title: "Les changements d'état et leur écriture symbolique" },
          { id: "energie-changement-etat", title: "L'énergie massique de changement d'état" },
        ],
      },
      {
        id: "transformations-chimiques",
        title: "Les transformations chimiques",
        programme: "Constitution et transformations de la matière : modéliser les transformations de la matière et transfert d'énergie",
        lessons: [
          { id: "reaction-equation", title: "Modéliser une transformation par une réaction : l'équation chimique" },
          { id: "reactif-limitant", title: "Réactif limitant et proportions stœchiométriques" },
          { id: "exo-endothermique", title: "Transformations exothermiques et endothermiques" },
          { id: "synthese-espece", title: "Synthétiser une espèce chimique" },
        ],
      },
      {
        id: "transformations-nucleaires",
        title: "Les transformations nucléaires",
        programme: "Constitution et transformations de la matière : modéliser les transformations de la matière et transfert d'énergie",
        lessons: [
          { id: "reaction-nucleaire", title: "Les réactions nucléaires et leurs équations" },
          { id: "fission-fusion", title: "Fission, fusion et énergie : du Soleil aux centrales" },
        ],
      },
      {
        id: "decrire-mouvement",
        title: "Décrire un mouvement",
        programme: "Mouvement et interactions : décrire un mouvement",
        lessons: [
          { id: "systeme-referentiel", title: "Système, référentiel et relativité du mouvement" },
          { id: "vecteur-vitesse", title: "Vecteur déplacement et vecteur vitesse" },
          { id: "mouvements-rectilignes", title: "Mouvements rectilignes uniformes, accélérés ou ralentis" },
        ],
      },
      {
        id: "forces-inertie",
        title: "Forces et principe d'inertie",
        programme: "Mouvement et interactions : modéliser une action sur un système, principe d'inertie",
        lessons: [
          { id: "actions-forces", title: "Actions mécaniques, forces et principe des actions réciproques" },
          { id: "gravitation-poids", title: "L'interaction gravitationnelle et le poids" },
          { id: "support-fil", title: "Forces exercées par un support et par un fil" },
          { id: "principe-inertie", title: "Le principe d'inertie : forces et variation de la vitesse" },
        ],
      },
      {
        id: "sons",
        title: "Émission et perception d'un son",
        programme: "Ondes et signaux : émission et perception d'un son",
        lessons: [
          { id: "emission-propagation-son", title: "Émission et propagation d'un son" },
          { id: "periode-frequence", title: "Signal sonore périodique : période, fréquence et hauteur" },
          { id: "intensite-sonore", title: "Intensité et niveau d'intensité sonore : protéger votre audition" },
        ],
      },
      {
        id: "vision-image",
        title: "Vision et image",
        programme: "Ondes et signaux : vision et image",
        lessons: [
          { id: "propagation-spectres", title: "Propagation de la lumière et spectres" },
          { id: "refraction-dispersion", title: "Réfraction et dispersion : la loi de Snell-Descartes" },
          { id: "lentilles-oeil", title: "Lentilles convergentes, images et modèle de l'œil" },
        ],
      },
      {
        id: "signaux-capteurs",
        title: "Signaux et capteurs",
        programme: "Ondes et signaux : signaux et capteurs",
        lessons: [
          { id: "loi-noeuds-mailles", title: "Loi des nœuds et loi des mailles" },
          { id: "loi-ohm", title: "Caractéristique d'un dipôle et loi d'Ohm" },
          { id: "capteurs", title: "Les capteurs électriques et leur étalonnage" },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* SCIENCES DE LA VIE ET DE LA TERRE                                   */
  /* ------------------------------------------------------------------ */
  {
    id: "svt-2nde",
    subject: "svt",
    grade: "2nde",
    intro: "Vous saurez expliquer l'organisation du vivant de l'organisme à la cellule, l'évolution de la biodiversité, la dynamique des paysages et des sols, et des enjeux de santé liés à la procréation et aux microorganismes.",
    reference: "Programme de sciences de la vie et de la Terre de seconde générale et technologique, BO spécial n°1 du 22 janvier 2019",
    chapters: [
      {
        id: "organisme-pluricellulaire",
        title: "L'organisme pluricellulaire, un ensemble de cellules spécialisées",
        programme: "La Terre, la vie et l'organisation du vivant : l'organisation fonctionnelle du vivant",
        lessons: [
          { id: "echelles-vivant", title: "De l'organisme à la cellule : les échelles du vivant" },
          { id: "cellule-structure", title: "La cellule, une structure complexe" },
          { id: "adn-information", title: "L'ADN, support de l'information génétique" },
          { id: "specialisation-cellulaire", title: "La spécialisation des cellules" },
        ],
      },
      {
        id: "metabolisme",
        title: "Le métabolisme des cellules",
        programme: "La Terre, la vie et l'organisation du vivant : l'organisation fonctionnelle du vivant",
        lessons: [
          { id: "metabolisme-notion", title: "Le métabolisme : les transformations chimiques de la cellule" },
          { id: "enzymes", title: "Les enzymes, catalyseurs du métabolisme" },
          { id: "autotrophie-heterotrophie", title: "Autotrophie et hétérotrophie : photosynthèse et respiration" },
        ],
      },
      {
        id: "biodiversite",
        title: "La biodiversité, résultat et étape de l'évolution",
        programme: "La Terre, la vie et l'organisation du vivant : la biodiversité et son évolution",
        lessons: [
          { id: "echelles-biodiversite", title: "Les trois échelles de la biodiversité" },
          { id: "capture-recapture", title: "Estimer l'effectif d'une population : capture, marquage, recapture" },
          { id: "biodiversite-temps", title: "La biodiversité change au cours du temps" },
        ],
      },
      {
        id: "mecanismes-evolution",
        title: "Les mécanismes de l'évolution",
        programme: "La Terre, la vie et l'organisation du vivant : la biodiversité et son évolution",
        lessons: [
          { id: "selection-naturelle", title: "La sélection naturelle" },
          { id: "derive-genetique", title: "La dérive génétique" },
          { id: "notion-espece", title: "La notion d'espèce et la formation de nouvelles espèces" },
        ],
      },
      {
        id: "geosciences-paysages",
        title: "Géosciences et dynamique des paysages",
        programme: "Enjeux contemporains de la planète : géosciences et dynamique des paysages",
        lessons: [
          { id: "alteration-erosion", title: "Altération et érosion des roches" },
          { id: "transport-sedimentation", title: "Transport, sédimentation et formation des roches sédimentaires" },
          { id: "paysages-activites-humaines", title: "Les activités humaines et la dynamique des paysages" },
        ],
      },
      {
        id: "agrosystemes",
        title: "Agrosystèmes et développement durable",
        programme: "Enjeux contemporains de la planète : agrosystèmes et développement durable",
        lessons: [
          { id: "sol-formation", title: "Le sol, un patrimoine fragile : composition et formation" },
          { id: "agrosysteme-fonctionnement", title: "Fonctionnement d'un agrosystème : flux de matière et d'énergie" },
          { id: "agriculture-durable", title: "Vers des pratiques agricoles durables" },
        ],
      },
      {
        id: "procreation-sexualite",
        title: "Procréation et sexualité humaine",
        programme: "Corps humain et santé : procréation et sexualité humaine",
        lessons: [
          { id: "appareils-sexuels", title: "Les appareils sexuels : structure et fonctions" },
          { id: "puberte-hormones", title: "La puberté et la régulation hormonale" },
          { id: "contraception-pma", title: "Maîtriser sa procréation : contraception et aide médicale à la procréation" },
          { id: "sexualite-ist", title: "Sexualité, plaisir et prévention des IST" },
        ],
      },
      {
        id: "microorganismes-sante",
        title: "Microorganismes et santé",
        programme: "Corps humain et santé : microorganismes et santé",
        lessons: [
          { id: "microbiote", title: "Le microbiote humain" },
          { id: "agents-pathogenes", title: "Agents pathogènes et maladies infectieuses" },
          { id: "antibiotiques-resistances", title: "Les antibiotiques et les résistances bactériennes" },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* SCIENCES NUMÉRIQUES ET TECHNOLOGIE                                  */
  /* ------------------------------------------------------------------ */
  {
    id: "snt-2nde",
    subject: "snt",
    grade: "2nde",
    intro: "Vous saurez expliquer le fonctionnement d'Internet, du Web, des réseaux sociaux, des données, de la géolocalisation, des objets connectés et de la photographie numérique, et écrire de courts programmes en Python.",
    reference: "Programme de sciences numériques et technologie de seconde générale et technologique, BO spécial n°1 du 22 janvier 2019",
    chapters: [
      {
        id: "programmation-python",
        title: "Programmer en Python : les bases",
        programme: "Notions transversales de programmation",
        lessons: [
          { id: "variables-types", title: "Variables, types et affectations" },
          { id: "conditions-boucles", title: "Instructions conditionnelles et boucles" },
          { id: "fonctions-python", title: "Écrire et utiliser des fonctions" },
        ],
      },
      {
        id: "internet",
        title: "Internet",
        programme: "Internet",
        lessons: [
          { id: "adresses-ip-tcp", title: "Réseaux, adresses IP et protocole TCP/IP" },
          { id: "paquets-routage", title: "Paquets et routage : le voyage d'une donnée" },
          { id: "dns-pair-a-pair", title: "Le DNS et les réseaux pair à pair" },
        ],
      },
      {
        id: "web",
        title: "Le Web",
        programme: "Le Web",
        lessons: [
          { id: "html-css", title: "Les pages web : HTML et CSS" },
          { id: "url-http", title: "URL, HTTP et dialogue entre client et serveur" },
          { id: "moteurs-recherche", title: "Les moteurs de recherche et l'indexation" },
        ],
      },
      {
        id: "reseaux-sociaux",
        title: "Les réseaux sociaux",
        programme: "Les réseaux sociaux",
        lessons: [
          { id: "graphes-sociaux", title: "Modéliser un réseau social par un graphe" },
          { id: "modele-economique", title: "Le modèle économique des réseaux sociaux" },
          { id: "identite-numerique", title: "Identité numérique, e-réputation et cyberharcèlement" },
        ],
      },
      {
        id: "donnees-structurees",
        title: "Les données structurées et leur traitement",
        programme: "Les données structurées et leur traitement",
        lessons: [
          { id: "donnees-metadonnees", title: "Données, métadonnées et format CSV" },
          { id: "traiter-table", title: "Trier et filtrer une table de données" },
          { id: "centres-donnees", title: "Stocker les données : centres de données et cloud" },
        ],
      },
      {
        id: "localisation",
        title: "Localisation, cartographie et mobilité",
        programme: "Localisation, cartographie et mobilité",
        lessons: [
          { id: "gps", title: "Le GPS : se géolocaliser par satellite" },
          { id: "cartes-itineraires", title: "Cartes numériques et calcul d'itinéraire" },
          { id: "nmea-vie-privee", title: "Trames NMEA et protection de la vie privée" },
        ],
      },
      {
        id: "objets-connectes",
        title: "Informatique embarquée et objets connectés",
        programme: "Informatique embarquée et objets connectés",
        lessons: [
          { id: "systemes-embarques", title: "Les systèmes informatiques embarqués" },
          { id: "capteurs-actionneurs", title: "Capteurs, actionneurs et interfaces homme-machine" },
          { id: "programmer-objet", title: "Programmer un objet connecté" },
        ],
      },
      {
        id: "photographie-numerique",
        title: "La photographie numérique",
        programme: "La photographie numérique",
        lessons: [
          { id: "pixels-couleurs", title: "Pixels, définition et codage des couleurs" },
          { id: "capteur-traitements", title: "Du capteur à l'image : traitements et algorithmes" },
          { id: "exif-retouche", title: "Métadonnées EXIF et retouche d'image" },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* ANGLAIS (LANGUE VIVANTE A)                                          */
  /* ------------------------------------------------------------------ */
  {
    id: "anglais-2nde",
    subject: "anglais",
    grade: "2nde",
    intro: "Vous saurez comprendre et vous exprimer en anglais sur les axes culturels de la seconde, de l'image de soi aux pays du Commonwealth, avec la grammaire et les stratégies attendues au lycée.",
    reference: "Programme d'anglais pour les classes de lycée général et technologique, arrêté du 5 mai 2025, BO n°22 du 29 mai 2025",
    chapters: [
      {
        id: "activites-langagieres",
        title: "Comprendre et s'exprimer : les méthodes",
        programme: "Activités langagières : réception, production et interaction",
        lessons: [
          { id: "comprehension-orale", title: "Comprendre un document audio ou vidéo" },
          { id: "comprehension-ecrite", title: "Comprendre un texte écrit : stratégies de lecture" },
          { id: "expression-ecrite-orale", title: "S'exprimer à l'écrit et à l'oral : raconter et argumenter" },
        ],
      },
      {
        id: "soi-autrui",
        title: "Représentation de soi et rapport à autrui",
        programme: "Axe 1 : Représentation de soi et rapport à autrui",
        lessons: [
          { id: "identite-who-am-i", title: "Parler de soi et de son identité : « Who am I? »" },
          { id: "image-de-soi-en-ligne", title: "L'image de soi en ligne : « Selfies and social media »" },
          { id: "amitie-prejuges", title: "Amitié, préjugés et rapport à l'autre" },
        ],
      },
      {
        id: "generations",
        title: "Vivre entre générations",
        programme: "Axe 2 : Vivre entre générations",
        lessons: [
          { id: "modeles-familiaux", title: "Les modèles familiaux dans le monde anglophone" },
          { id: "generation-gap", title: "Parents et adolescents : « The generation gap »" },
          { id: "transmettre", title: "Transmettre : mémoire, traditions et valeurs" },
        ],
      },
      {
        id: "grammaire-anglais",
        title: "Les outils de la langue : grammaire",
        programme: "Compétences linguistiques : grammaire",
        lessons: [
          { id: "present-simple-be-ing", title: "Présent simple et présent en « be + -ing »" },
          { id: "preterit-present-perfect", title: "Prétérit et « present perfect »" },
          { id: "modaux", title: "Les modaux : « can », « must », « should », « may »" },
          { id: "futur-hypothese", title: "Exprimer le futur et l'hypothèse" },
        ],
      },
      {
        id: "passe-present",
        title: "Le passé dans le présent",
        programme: "Axe 3 : Le passé dans le présent",
        lessons: [
          { id: "lieux-memoire", title: "Lieux de mémoire et monuments" },
          { id: "histoire-ecran", title: "Raconter l'histoire : récits, films et séries historiques" },
          { id: "memoires-contestees", title: "Un héritage débattu : statues et mémoires contestées" },
        ],
      },
      {
        id: "defis-transitions",
        title: "Défis et transitions",
        programme: "Axe 4 : Défis et transitions",
        lessons: [
          { id: "defi-climatique", title: "Le défi climatique : « Saving the planet »" },
          { id: "transition-numerique", title: "Innovations et transition numérique" },
          { id: "villes-transition", title: "Villes et modes de vie en transition" },
        ],
      },
      {
        id: "creer-recreer",
        title: "Créer et recréer",
        programme: "Axe 5 : Créer et recréer",
        lessons: [
          { id: "creation-artistique", title: "La création artistique : musique, peinture, street art" },
          { id: "adapter-reecrire", title: "Adapter et réécrire : du livre à l'écran" },
        ],
      },
      {
        id: "commonwealth",
        title: "Les pays du Commonwealth : héritages, unité, diversité",
        programme: "Axe 6 : Les pays du Commonwealth : héritages, unité, diversité",
        lessons: [
          { id: "empire-commonwealth", title: "De l'Empire britannique au Commonwealth" },
          { id: "commonwealth-aujourdhui", title: "Le Commonwealth aujourd'hui : institutions et pays membres" },
          { id: "inde-afrique-sud-nigeria", title: "Regards sur l'Inde, l'Afrique du Sud et le Nigeria" },
          { id: "canada-australie-nz", title: "Regards sur le Canada, l'Australie et la Nouvelle-Zélande" },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* ESPAGNOL (LANGUE VIVANTE B)                                         */
  /* ------------------------------------------------------------------ */
  {
    id: "espagnol-2nde",
    subject: "espagnol",
    grade: "2nde",
    intro: "Vous saurez comprendre et produire des messages simples en espagnol sur les axes culturels de la seconde, et regarder l'Espagne au-delà des clichés.",
    reference: "Programme d'espagnol pour les classes de lycée général et technologique, arrêté du 5 mai 2025, BO n°22 du 29 mai 2025",
    chapters: [
      {
        id: "soi-autrui",
        title: "Représentation de soi et rapport à autrui",
        programme: "Axe 1 : Représentation de soi et rapport à autrui",
        lessons: [
          { id: "presenter-gouts", title: "Se présenter et parler de ses goûts : « me gusta »" },
          { id: "ser-estar", title: "Décrire une personne : « ser » et « estar »" },
        ],
      },
      {
        id: "outils-langue",
        title: "Les outils de la langue",
        programme: "Compétences linguistiques : grammaire",
        lessons: [
          { id: "present-irreguliers", title: "Le présent de l'indicatif et les verbes irréguliers" },
          { id: "obligation-conseil", title: "Exprimer l'obligation et le conseil" },
          { id: "futur-projets", title: "Parler de ses projets : le futur" },
        ],
      },
      {
        id: "generations",
        title: "Vivre entre générations",
        programme: "Axe 2 : Vivre entre générations",
        lessons: [
          { id: "famille-hispanique", title: "La famille dans le monde hispanique" },
          { id: "jeunes-adultes", title: "Jeunes et adultes : dialogues et tensions" },
        ],
      },
      {
        id: "passe-present",
        title: "Le passé dans le présent",
        programme: "Axe 3 : Le passé dans le présent",
        lessons: [
          { id: "raconter-passe", title: "Raconter au passé : le « pretérito indefinido »" },
          { id: "memoire-patrimoine", title: "Mémoire et patrimoine dans le monde hispanique" },
        ],
      },
      {
        id: "defis-transitions",
        title: "Défis et transitions",
        programme: "Axe 4 : Défis et transitions",
        lessons: [
          { id: "reto-ecologico", title: "Protéger l'environnement : « el reto ecológico »" },
          { id: "ville-campagne", title: "Ville et campagne : un pays qui se transforme" },
        ],
      },
      {
        id: "creer-recreer",
        title: "Créer et recréer",
        programme: "Axe 5 : Créer et recréer",
        lessons: [
          { id: "artistes-hispaniques", title: "Peintres et artistes du monde hispanique" },
          { id: "musique-cinema", title: "Musique et cinéma en espagnol" },
        ],
      },
      {
        id: "espagne-cliches",
        title: "L'Espagne au-delà des clichés",
        programme: "Axe 6 : L'Espagne au-delà des clichés",
        lessons: [
          { id: "identifier-cliches", title: "Les clichés sur l'Espagne : les repérer et les dépasser" },
          { id: "regions-langues", title: "La diversité de l'Espagne : régions et langues" },
          { id: "espagne-aujourdhui", title: "L'Espagne d'aujourd'hui : une société en mouvement" },
        ],
      },
    ],
  },
]
