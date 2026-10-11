// LES POINTS DE L'ÉCOLE · demandé : « Vérifie si toutes les niveaux [...] ont
// bien le système de points et de récompense ». Comme dans les formations IA
// (game/achievements), chaque réussite rapporte ses points une fois :
//   · un exercice réussi après la correction, le jeu gagné, chaque bonne
//     réponse au quiz : `ecole/<unité>/<leçon>/<partie>` ;
//   · la leçon validée par un parent : `ecole/<unité>/<leçon>` ;
//   · une épreuve blanche notée : `ecole/blanc/<examen>/<épreuve>`.
// Les exploits s'ajoutent : quiz sans faute, première leçon validée, matière
// entière validée, examen blanc complet. Le professeur de la matière félicite
// (game/LessonGame, MasterCheer).
import { awardPart, unlockFeat, type Feat } from '../game/achievements'
import type { Cheer } from '../game/LessonGame'

export type { Cheer }

/** une partie réussie · la récompense à montrer, ou rien si elle était déjà acquise */
export function rewardPart(key: string, label: string): Cheer[] {
  const r = awardPart(key)
  if (!r) return []
  return [{ id: `part:${key}`, points: r.points, part: label }, ...r.feats.map(featCheer)]
}

export function featCheer(f: Feat): Cheer {
  return { id: `feat:${f.id}`, points: f.points, feat: f }
}

/** un exploit · la récompense à montrer, ou rien s'il était déjà débloqué */
export function rewardFeat(id: string): Cheer[] {
  const f = unlockFeat(id)
  return f ? [featCheer(f)] : []
}
