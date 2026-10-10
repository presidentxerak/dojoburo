// LA CATÉGORIE SCOLAIRE · demandé : « Une catégorie scolaire pour les
// collégiens et les lycéens, afin qu'ils puissent suivre et apprendre tous les
// cours de A à Z dans toutes les matières, avec, comme on a fait pour les
// formations IA, des cours des quiz, des jeux, des exercices. Il faut vraiment
// que ça soit lié au programme scolaire de l'école, et aussi avec un système de
// validation par les parents à chaque étape [...] et aussi les préparer soit au
// brevet blanc, au brevet, ou au bac blanc et au bac ».
//
// LA LANGUE · le programme est celui de l'Éducation nationale française : le
// contenu des cours est écrit en français (vouvoiement, registre pédagogique).
// L'interface reste en deux langues ; les autres passent par la traduction du
// navigateur, comme le reste de l'app.
//
// LA STRUCTURE · une classe (Grade) et une matière (Subject) forment une unité
// (SchoolUnit) : « Mathématiques 3e ». Une unité se découpe en chapitres alignés
// sur les thèmes du programme officiel, et chaque chapitre en leçons. Le plan
// (syllabus) existe pour toutes les classes ; le contenu complet des leçons est
// rédigé classe par classe, les classes d'examen d'abord.

export type Grade = '6e' | '5e' | '4e' | '3e' | '2nde' | '1re' | 'tle'

/** une leçon telle que le plan la prévoit · le titre et ce qu'elle fait acquérir */
export interface PlannedLesson {
  /** identifiant stable dans l'unité (minuscules, chiffres et tirets) */
  id: string
  title: string
}

export interface PlannedChapter {
  id: string
  title: string
  /** le thème ou la partie du programme officiel couverte, telle qu'il la nomme */
  programme: string
  lessons: PlannedLesson[]
}

/** le plan d'une unité · présent pour toutes les classes et toutes les matières */
export interface UnitPlan {
  /** `${subject}-${grade}`, par exemple 'maths-3e' */
  id: string
  subject: string
  /** null pour l'unité transversale « Apprendre avec l'IA », ouverte à toutes les classes */
  grade: Grade | null
  /** une phrase : ce que l'élève aura appris à la fin de l'année */
  intro: string
  /** le texte officiel de référence (programme et année de publication), sans adresse inventée */
  reference: string
  chapters: PlannedChapter[]
}

/* ------------------------------------------------------------------ */
/* UNE LEÇON COMPLÈTE                                                   */
/* ------------------------------------------------------------------ */

/** une partie du cours · un titre, des paragraphes, et parfois un encadré */
export interface CourseSection {
  heading: string
  paragraphs: string[]
  /** une définition, une propriété, une formule ou une règle à encadrer */
  box?: { label: string; text: string }
}

export interface WorkedExample {
  statement: string
  /** la correction rédigée, étape par étape */
  solution: string[]
}

export interface Exercise {
  /** 1 · application directe, 2 · entraînement, 3 · approfondissement ou type examen */
  level: 1 | 2 | 3
  statement: string
  /** un coup de pouce, montré à la demande */
  hint: string
  /** la correction rédigée, étape par étape */
  solution: string[]
}

export interface SchoolQuestion {
  q: string
  /** trois ou quatre propositions */
  options: string[]
  /** le rang de la bonne réponse */
  answer: number
  /** pourquoi c'est la bonne réponse, en une ou deux phrases */
  why: string
}

/** LE JEU DE LA LEÇON · trois formes, toutes jouables au doigt */
export type SchoolGame =
  /** relier chaque terme à sa définition (4 à 6 paires) */
  | { kind: 'pairs'; prompt: string; pairs: { left: string; right: string }[] }
  /** remettre dans l'ordre (étapes, chronologie, démonstration) · 4 à 7 éléments, donnés dans le bon ordre */
  | { kind: 'order'; prompt: string; items: string[] }
  /** vrai ou faux, en série (5 à 8 affirmations) */
  | { kind: 'truefalse'; prompt: string; statements: { text: string; true: boolean; why: string }[] }

export interface SchoolLesson {
  id: string
  title: string
  minutes: number
  /** ce que l'élève saura faire, avec les mots du programme (2 à 4) */
  objectives: string[]
  /** le cours, en 2 à 5 parties */
  course: CourseSection[]
  /** l'essentiel à retenir, la fiche de révision (3 à 7 points) */
  keyPoints: string[]
  example: WorkedExample
  /** trois exercices, du plus simple au type examen */
  exercises: Exercise[]
  game: SchoolGame
  /** cinq questions */
  quiz: SchoolQuestion[]
  /** l'erreur fréquente, nommée */
  trap: string
  /** un conseil de méthode */
  method: string
}

export interface ContentChapter {
  id: string
  lessons: SchoolLesson[]
}

/** le contenu rédigé d'une unité · un fichier par partie, chargé à la demande */
export interface UnitContent {
  unit: string
  chapters: ContentChapter[]
}
