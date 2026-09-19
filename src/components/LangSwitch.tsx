// LE SÉLECTEUR DE LANGUE.
//
// DEUX BOUTONS, PAS UNE LISTE DÉROULANTE. Avec deux langues, une liste demande
// deux gestes (ouvrir, choisir) et cache le choix disponible derrière le choix
// actuel. Deux boutons côte à côte montrent l'état ET l'alternative en un coup
// d'oeil, ce qui est exactement ce qu'on cherche pour un réglage qu'on utilise
// une fois. Le jour où une troisième langue arrive, la liste redevient le bon
// outil · pas avant.
//
// CHAQUE LANGUE EST ÉCRITE DANS SA PROPRE LANGUE. « French » écrit en anglais
// ne sert qu'à quelqu'un qui lit déjà l'anglais, c'est à dire exactement la
// personne qui n'a pas besoin de ce bouton. Voir LANG_LABEL.
import { LANGS, LANG_LABEL, setLang, useLang, useT } from '../i18n'

export function LangSwitch({ compact = false }: { compact?: boolean }) {
  const lang = useLang()
  const t = useT()
  return (
    <div className={`lsw${compact ? ' sm' : ''}`} role="group" aria-label={t('lang.switch')}>
      {LANGS.map((l) => (
        <button
          key={l}
          className={`lsw-b${l === lang ? ' on' : ''}`}
          // aria-pressed dit l'état à un lecteur d'écran · sans lui, les deux
          // boutons sont indiscernables et on ne sait pas lequel est actif.
          aria-pressed={l === lang}
          onClick={() => setLang(l)}
          title={LANG_LABEL[l]}
        >
          {compact ? l.toUpperCase() : LANG_LABEL[l]}
        </button>
      ))}
    </div>
  )
}
