// LE BOUTON DU SON · couper ou remettre la musique zen, d'un geste, depuis la
// carte et les temples. Le même réglage que Profil, Paramètres, Musique.
import { useLang } from '../i18n'
import { say } from '../data/bilingual'
import { useSettings, setSetting } from '../lib/settings'
import { PixelIcon } from '../pixel/PixelIcon'
import { TT } from './templeText'

export function SoundToggle({ className = '' }: { className?: string }) {
  const lang = useLang()
  const st = useSettings()
  const label = say(st.music ? TT.musicOff : TT.musicOn, lang)
  return (
    <button type="button" className={`tp-snd${className ? ` ${className}` : ''}`} aria-pressed={st.music} aria-label={label} title={label}
      onClick={() => setSetting('music', !st.music)}>
      <PixelIcon name={st.music ? 'music' : 'mute'} size={22} />
    </button>
  )
}
