// LES JAUGES DU JEU · l'expérience et l'avancement, dessinées une seule fois.
//
// Deux jauges qui ont l'air de venir de deux jeux, c'est ce qui fait
// « maquette ». Les deux partagent donc le même objet : une rigole creusée
// dans la surface (ombre intérieure), un remplissage bombé et brillant de la
// couleur du contexte, et une lueur douce au bout qui dit « ça avance ici ».
//
// ELLES SE LISENT SANS LA COULEUR. Le nombre est écrit à côté, et la jauge
// porte son rôle d'accessibilité : un lecteur d'écran annonce « 3 sur 9 », pas
// une barre muette.
import { useLang } from '../i18n'

/** L'avancement · « fait sur total », avec le pourcentage. */
export function Gauge({ value, total, label, big = false }: {
  value: number
  total: number
  /** ce qui est compté, pour le lecteur d'écran et sous la jauge */
  label: string
  big?: boolean
}) {
  const lang = useLang()
  const pct = total > 0 ? Math.round((value / total) * 100) : 0
  return (
    <div className={`gg${big ? ' big' : ''}`}>
      <div
        className="gg-track"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={value}
      >
        <i className="gg-fill" style={{ width: `${pct}%` }} />
      </div>
      <div className="gg-read">
        <span><b>{value}</b> / {total} {label}</span>
        {/* l'espace fine avant « % » est la typographie française */}
        <span className="gg-pct">{pct}{lang === 'fr' ? ' %' : '%'}</span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */

/** UN NIVEAU TOUS LES 250 XP · dérivé de l'expérience, jamais écrit.
 *
 *  L'expérience seule n'a pas de maximum, donc une jauge d'expérience seule
 *  n'a rien à remplir : elle était une pilule pleine où seul le nombre
 *  bougeait. Un palier donne à la jauge un sens · elle se remplit vers le
 *  niveau suivant, et repart à vide en montant. Le palier est une constante
 *  ronde, choisie pour qu'un dojo (50 à 90 XP) fasse bouger la barre à vue
 *  d'oeil et qu'un niveau demande trois ou quatre dojos. */
export const XP_PER_LEVEL = 250

export function levelOf(xp: number): { level: number; into: number; need: number } {
  const safe = Math.max(0, Math.floor(xp))
  return {
    level: Math.floor(safe / XP_PER_LEVEL) + 1,
    into: safe % XP_PER_LEVEL,
    need: XP_PER_LEVEL,
  }
}
