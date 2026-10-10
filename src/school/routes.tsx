// LES ADRESSES DE L'ÉCOLE · lues par main.tsx.
//   /ecole                         l'accueil
//   /ecole/<classe>                une classe (6e ... tle)
//   /ecole/u/<unité>               une matière d'une classe, ou l'unité IA
//   /ecole/u/<unité>/<leçon>       une leçon
//   /ecole/parents                 l'Espace parents
//   /ecole/examens/<examen>        un examen
//   /ecole/examens/<examen>/<ép.>  une épreuve blanche
import type { ReactNode } from 'react'
import { GRADES, type Grade } from '../data/school'
import { SchoolHome, GradePage, UnitPage } from './SchoolPages'
import { SchoolLessonPage } from './SchoolLesson'
import { ParentsPage } from './Parents'
import { ExamPage, MockPage } from './Exams'

export function schoolRoute(path: string): ReactNode {
  const p = path.replace(/\/+$/, '')
  if (p === '/ecole') return <SchoolHome />
  if (p === '/ecole/parents') return <ParentsPage />
  const g = p.match(/^\/ecole\/([a-z0-9]+)$/i)
  if (g && GRADES.some((x) => x.id === g[1])) return <GradePage grade={g[1] as Grade} />
  const u = p.match(/^\/ecole\/u\/([a-z0-9-]+)(?:\/([a-z0-9-]+))?$/i)
  if (u) return u[2] ? <SchoolLessonPage unit={u[1]} lessonId={u[2]} /> : <UnitPage unit={u[1]} />
  const x = p.match(/^\/ecole\/examens\/([a-z0-9-]+)(?:\/([a-z0-9-]+))?$/i)
  if (x) return x[2] ? <MockPage examId={x[1]} epreuveId={x[2]} /> : <ExamPage id={x[1]} />
  return <SchoolHome />
}
