// LE SÉLECTEUR DE LANGUE.
//
// UNE LISTE, PUISQU'IL Y A SEPT LANGUES · demandé : « mets en place la
// traduction en fonction de la langue du user (français, anglais, espagnol,
// italien, allemand, portugais, japonais etc...) ». La version d'avant posait
// deux boutons et prévenait : « le jour où une troisième langue arrive, la
// liste redevient le bon outil ». Ce jour est venu.
//
// La liste native du système : au doigt, elle ouvre le sélecteur du téléphone,
// lisible et accessible sans rien réinventer. Fermée, elle montre le code de
// la langue (FR, EN, JA...) dans la pastille de l'en-tête ; ouverte, chaque
// langue est écrite DANS SA PROPRE LANGUE, parce que « Japanese » écrit en
// anglais ne sert qu'à quelqu'un qui lit déjà l'anglais. Voir LANG_LABEL.
import { LANGS, LANG_LABEL, setLang, useLang, useT, type Lang } from '../i18n'

export function LangSwitch({ compact = false }: { compact?: boolean }) {
  const lang = useLang()
  const t = useT()
  return (
    <label className={`lsw lsw-sel${compact ? ' sm' : ''}`} title={t('lang.switch')}>
      <span className="lsw-cur" aria-hidden="true">{compact ? lang.toUpperCase() : LANG_LABEL[lang]}<i /></span>
      <select value={lang} aria-label={t('lang.switch')} onChange={(e) => setLang(e.target.value as Lang)}>
        {LANGS.map((l) => <option key={l} value={l}>{LANG_LABEL[l]}</option>)}
      </select>
    </label>
  )
}
