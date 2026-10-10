// LES EXAMENS · demandé : « les préparer soit au brevet blanc, au brevet, ou au
// bac blanc et au bac ».
//
// Les formats ci-dessous ont été relevés en octobre 2026 dans des sources
// d'information concordantes (citées pour chaque examen). Ils ne remplacent
// pas les textes officiels : chaque page renvoie vers le site du ministère.
// Une épreuve blanche tire ses questions et ses exercices des unités listées.

export interface Epreuve {
  id: string
  name: string
  /** durée de l'épreuve réelle, en minutes */
  duration: number
  /** le coefficient, seulement quand les sources s'accordent */
  coefficient?: number
  /** ce que contient l'épreuve, en une à trois phrases */
  format: string
  /** les unités dont elle évalue le programme */
  units: string[]
  /** l'épreuve blanche : nombre de questions et d'exercices tirés des unités */
  mock?: { questions: number; exercises: number }
}

export interface Exam {
  id: string
  name: string
  grade: string
  /** ce qu'il faut savoir sur l'examen, en quelques phrases */
  summary: string[]
  epreuves: Epreuve[]
  sources: { label: string; url: string }[]
}

const OFFICIAL = { label: 'Ministère de l\'Éducation nationale', url: 'https://www.education.gouv.fr' }

export const EXAMS: Exam[] = [
  {
    id: 'brevet',
    name: 'Diplôme national du brevet',
    grade: '3e',
    summary: [
      'Depuis la session 2027, la note finale est sur 20 : 40 % de contrôle continu, calculé sur les moyennes annuelles de 3e, et 60 % d\'épreuves finales.',
      'Les épreuves écrites portent sur le programme de 3e. Le diplôme est obtenu à partir de 10 sur 20.',
      'Les candidats scolaires passent quatre écrits et une soutenance orale ; les dates de la session sont publiées par le ministère.',
    ],
    epreuves: [
      { id: 'francais', name: 'Français', duration: 180, coefficient: 2, format: 'Compréhension et analyse d\'un texte, grammaire et réécriture, dictée, puis rédaction (sujet d\'imagination ou de réflexion).', units: ['francais-3e'], mock: { questions: 15, exercises: 3 } },
      { id: 'maths', name: 'Mathématiques', duration: 120, coefficient: 2, format: 'Des exercices indépendants sur l\'ensemble du programme, dont une partie d\'automatismes et un exercice de programmation ou d\'algorithmique.', units: ['maths-3e'], mock: { questions: 15, exercises: 3 } },
      { id: 'hg-emc', name: 'Histoire-géographie et EMC', duration: 120, format: 'Analyse de documents, développement construit et repères chronologiques et spatiaux, puis un exercice d\'enseignement moral et civique.', units: ['hg-emc-3e'], mock: { questions: 15, exercises: 3 } },
      { id: 'sciences', name: 'Sciences', duration: 60, coefficient: 2, format: 'Deux disciplines parmi la physique-chimie, les SVT et la technologie, chacune sur 30 minutes.', units: ['physique-chimie-3e', 'svt-3e', 'technologie-3e'], mock: { questions: 12, exercises: 2 } },
      { id: 'oral', name: 'Soutenance orale', duration: 15, coefficient: 2, format: 'La présentation d\'un projet mené dans l\'année, suivie d\'un entretien avec le jury.', units: ['francais-3e'] },
    ],
    sources: [
      OFFICIAL,
      { label: 'FCPE, tout savoir sur le brevet', url: 'https://www.fcpe.asso.fr/actualite/tout-savoir-sur-le-brevet-2026' },
      { label: 'CIDJ, dates du brevet', url: 'https://www.cidj.com/s-orienter/au-college/dates-brevet' },
    ],
  },
  {
    id: 'bac-francais',
    name: 'Épreuve anticipée de français',
    grade: '1re',
    summary: [
      'Passée en fin de Première, elle compte pour le baccalauréat : un écrit et un oral.',
      'L\'oral porte sur les textes étudiés dans l\'année, présentés dans un descriptif.',
    ],
    epreuves: [
      { id: 'ecrit', name: 'Écrit', duration: 240, format: 'Au choix, un commentaire de texte ou une dissertation sur l\'une des œuvres au programme et son parcours associé.', units: ['francais-1re'], mock: { questions: 12, exercises: 2 } },
      { id: 'oral', name: 'Oral', duration: 20, format: 'L\'explication linéaire d\'un texte du descriptif et une question de grammaire, puis un entretien sur l\'œuvre choisie par le candidat.', units: ['francais-1re'] },
    ],
    sources: [OFFICIAL, { label: 'Educfr, le bac de français', url: 'https://educfr.com/guide-du-bac/articles/bac-francais-2027-fonctionnement-epreuves-coefficients/' }],
  },
  {
    id: 'maths-anticipee',
    name: 'Épreuve anticipée de mathématiques',
    grade: '1re',
    summary: [
      'Créée en 2025, passée pour la première fois en juin 2026, elle compte pour le baccalauréat 2027 avec un coefficient 2.',
      'Il en existe trois versions : voie générale avec la spécialité mathématiques, voie générale sans cette spécialité, voie technologique.',
    ],
    epreuves: [
      { id: 'ecrit', name: 'Écrit', duration: 120, coefficient: 2, format: 'Sans calculatrice. Une première partie d\'automatismes en questions à choix multiples (6 points), puis des exercices indépendants (14 points).', units: ['maths-1re'], mock: { questions: 12, exercises: 2 } },
    ],
    sources: [
      OFFICIAL,
      { label: 'CIDJ, l\'épreuve anticipée de maths', url: 'https://www.cidj.com/s-orienter/apres-la-3eme/bac-2026-la-nouvelle-epreuve-de-maths-en-premiere' },
      { label: 'Diplomeo, le déroulé de l\'épreuve', url: 'https://diplomeo.com/actualite-epreuve_anticipee_mathematiques_bac' },
    ],
  },
  {
    id: 'bac',
    name: 'Baccalauréat général',
    grade: 'tle',
    summary: [
      'Le bac est noté sur 100 coefficients : 40 de contrôle continu et 60 d\'épreuves finales, dont les épreuves anticipées de Première.',
      'En Terminale : les deux spécialités, la philosophie et le Grand oral. À partir de la session 2027, le Grand oral passe au coefficient 8.',
    ],
    epreuves: [
      { id: 'philosophie', name: 'Philosophie', duration: 240, coefficient: 8, format: 'Au choix, une dissertation parmi deux sujets ou l\'explication d\'un texte.', units: ['philosophie-tle'], mock: { questions: 12, exercises: 2 } },
      { id: 'maths', name: 'Spécialité mathématiques', duration: 240, coefficient: 16, format: 'Des exercices indépendants sur le programme de Terminale.', units: ['maths-tle'], mock: { questions: 12, exercises: 3 } },
      { id: 'physique-chimie', name: 'Spécialité physique-chimie', duration: 210, coefficient: 16, format: 'Des exercices sur le programme de Terminale, avec une part d\'analyse de documents et de résolution de problèmes.', units: ['physique-chimie-tle'], mock: { questions: 12, exercises: 3 } },
      { id: 'svt', name: 'Spécialité SVT', duration: 210, coefficient: 16, format: 'Une restitution de connaissances argumentée et un exercice de raisonnement scientifique à partir de documents.', units: ['svt-tle'], mock: { questions: 12, exercises: 2 } },
      { id: 'ses', name: 'Spécialité SES', duration: 240, coefficient: 16, format: 'Au choix, une dissertation ou une épreuve composée.', units: ['ses-tle'], mock: { questions: 12, exercises: 2 } },
      { id: 'hggsp', name: 'Spécialité HGGSP', duration: 240, coefficient: 16, format: 'Une dissertation et une étude critique de documents.', units: ['hggsp-tle'], mock: { questions: 12, exercises: 2 } },
      { id: 'nsi', name: 'Spécialité NSI', duration: 210, coefficient: 16, format: 'Une épreuve écrite d\'exercices et une épreuve pratique sur ordinateur.', units: ['nsi-tle'], mock: { questions: 12, exercises: 3 } },
      { id: 'grand-oral', name: 'Grand oral', duration: 20, coefficient: 8, format: 'La présentation d\'une question préparée, un échange avec le jury, puis un temps sur le projet d\'orientation.', units: ['grand-oral-tle'] },
    ],
    sources: [
      OFFICIAL,
      { label: 'L\'Étudiant, coefficients du bac', url: 'https://www.letudiant.fr/bac/coefficients-bac-par-matiere-et-serie.html' },
      { label: 'L\'Express Éducation, tout savoir sur le bac', url: 'https://lexpress-education.com/articles/tout-savoir-sur-le-baccalaureat/' },
    ],
  },
]

export const examOf = (id: string) => EXAMS.find((x) => x.id === id) ?? null
