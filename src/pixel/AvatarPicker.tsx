// L'ÉDITEUR DE PERSONNAGE · « l'utilisateur choisira (homme, femme, LGBT+,
// alien, robots, monstres, animaux, bizarres etc.) ».
//
// Un aperçu en grand, des points de départ (présentations et espèces), puis
// chaque trait se règle à part. « Au hasard » tire un personnage entier. Les
// présentations ne verrouillent rien : toutes les coiffures, tenues et
// accessoires restent ouverts à tout le monde, et les drapeaux des fiertés
// s'épinglent sur n'importe quel personnage.
import { useState } from 'react'
import { useLang } from '../i18n'
import { B, say, type Bi } from '../data/bilingual'
import { ChibiSprite } from './ChibiSprite'
import {
  PRESETS, VARIANTS, HAIRS, EYES, MOUTHS, OUTFITS, ACCESSORIES, FACIALS, PRIDES,
  SKINS, ALIEN_SKINS, MONSTER_SKINS, HAIR_COLORS, OUTFIT_COLORS, randomChibi,
  type ChibiSpec, type Species,
} from './chibi'

const T = {
  title: B('Your character', 'Votre personnage'),
  lead: B('It represents you on the map, in the courses and in the community. Everything can be changed later.', 'Il vous représente sur la carte, dans les formations et dans la communauté. Tout se modifie ensuite.'),
  start: B('Start from', 'Partir de'),
  variant: B('Variant', 'Variante'),
  skin: B('Skin', 'Peau'),
  hair: B('Hair', 'Coiffure'),
  hairColor: B('Hair colour', 'Couleur des cheveux'),
  eyes: B('Eyes', 'Yeux'),
  mouth: B('Mouth', 'Bouche'),
  outfit: B('Outfit', 'Tenue'),
  outfitColor: B('Outfit colour', 'Couleur de la tenue'),
  accent: B('Accent colour', "Couleur d'accent"),
  accessory: B('Accessory', 'Accessoire'),
  facial: B('Facial hair', 'Pilosité'),
  pride: B('Pride pin', 'Badge des fiertés'),
  random: B('Surprise me', 'Au hasard'),
  save: B("That's me", "C'est moi"),
  cancel: B('Cancel', 'Annuler'),
}

const PRESET_LABEL: Record<string, Bi> = {
  man: B('Man', 'Homme'),
  woman: B('Woman', 'Femme'),
  nonbinary: B('Non-binary', 'Non-binaire'),
  alien: B('Alien', 'Alien'),
  robot: B('Robot', 'Robot'),
  monster: B('Monster', 'Monstre'),
  animal: B('Animal', 'Animal'),
  weird: B('Weird', 'Bizarre'),
}

const LABELS: Record<string, Bi> = {
  human: B('Human', 'Humain'), antenna: B('Antennae', 'Antennes'), bigeyes: B('Big eyes', 'Grands yeux'),
  visor: B('Visor', 'Visière'), screen: B('Screen', 'Écran'), horns: B('Horns', 'Cornes'), cyclops: B('Cyclops', 'Cyclope'),
  cat: B('Cat', 'Chat'), bear: B('Bear', 'Ours'), bunny: B('Bunny', 'Lapin'), fox: B('Fox', 'Renard'), frog: B('Frog', 'Grenouille'), panda: B('Panda', 'Panda'),
  ghost: B('Ghost', 'Fantôme'), slime: B('Slime', 'Slime'), mushroom: B('Mushroom', 'Champignon'),
  short: B('Short', 'Courts'), bob: B('Bob', 'Carré'), long: B('Long', 'Longs'), bun: B('Bun', 'Chignon'), ponytail: B('Ponytail', 'Queue de cheval'),
  curly: B('Curly', 'Bouclés'), mohawk: B('Mohawk', 'Crête'), spiky: B('Spiky', 'En pics'), buzz: B('Buzz cut', 'Rasés'), none: B('None', 'Aucun'),
  dot: B('Round', 'Ronds'), big: B('Big', 'Grands'), happy: B('Happy', 'Joyeux'), sleepy: B('Sleepy', 'Endormis'), wink: B('Wink', 'Clin d\'oeil'),
  smile: B('Smile', 'Sourire'), open: B('Open', 'Ouverte'), flat: B('Calm', 'Calme'), fangs: B('Fangs', 'Crocs'),
  tee: B('T-shirt', 'T-shirt'), hoodie: B('Hoodie', 'Sweat'), suit: B('Suit', 'Costume'), kimono: B('Kimono', 'Kimono'), dress: B('Dress', 'Robe'),
  labcoat: B('Lab coat', 'Blouse'), overalls: B('Overalls', 'Salopette'),
  glasses: B('Glasses', 'Lunettes'), sunglasses: B('Sunglasses', 'Lunettes de soleil'), headphones: B('Headphones', 'Casque'), cap: B('Cap', 'Casquette'),
  beanie: B('Beanie', 'Bonnet'), crown: B('Crown', 'Couronne'), bow: B('Bow', 'Nœud'), flower: B('Flower', 'Fleur'), beret: B('Beret', 'Béret'),
  wizard: B('Wizard hat', 'Chapeau de mage'), goggles: B('Goggles', 'Masque'), beard: B('Beard', 'Barbe'), mustache: B('Mustache', 'Moustache'),
  rainbow: B('Rainbow', 'Arc-en-ciel'), trans: B('Trans', 'Trans'), bi: B('Bi', 'Bi'), nonbinary: B('Non-binary', 'Non-binaire'),
  lesbian: B('Lesbian', 'Lesbienne'), pan: B('Pan', 'Pan'), ace: B('Ace', 'Ace'),
}

const skinsFor = (sp: Species) => (sp === 'alien' ? ALIEN_SKINS : sp === 'monster' ? MONSTER_SKINS : SKINS)

export function AvatarPicker({ initial, onSave, onCancel }: { initial: ChibiSpec; onSave: (s: ChibiSpec) => void; onCancel?: () => void }) {
  const lang = useLang()
  const s = (b: Bi) => say(b, lang)
  const [spec, setSpec] = useState<ChibiSpec>(initial)
  const set = <K extends keyof ChibiSpec>(k: K, v: ChibiSpec[K]) => setSpec((p) => ({ ...p, [k]: v }))
  const label = (k: string) => (LABELS[k] ? s(LABELS[k]) : k)

  const applyPreset = (key: string) => {
    const p = PRESETS[key]
    setSpec((prev) => {
      const sp = (p.species ?? prev.species) as Species
      const skins = skinsFor(sp)
      return { ...prev, ...p, species: sp, variant: p.variant ?? VARIANTS[sp][0], skin: skins.includes(prev.skin) ? prev.skin : skins[0] }
    })
  }

  const chips = <V extends string>(k: keyof ChibiSpec, list: readonly V[]) => (
    <div className="ap-chips" role="group">
      {list.map((v) => (
        <button key={v} type="button" className={`ap-chip${spec[k] === v ? ' on' : ''}`} aria-pressed={spec[k] === v} onClick={() => set(k, v as ChibiSpec[typeof k])}>
          {label(v)}
        </button>
      ))}
    </div>
  )
  const colors = (k: keyof ChibiSpec, list: readonly string[], name: string) => (
    <div className="ap-colors" role="group" aria-label={name}>
      {list.map((c) => (
        <button key={c} type="button" className={`ap-color${spec[k] === c ? ' on' : ''}`} style={{ background: c }}
          aria-label={`${name} ${c}`} aria-pressed={spec[k] === c} onClick={() => set(k, c as ChibiSpec[typeof k])} />
      ))}
    </div>
  )
  const human = spec.species === 'human'
  const hasHair = spec.species === 'human' || spec.species === 'alien' || spec.species === 'monster'

  return (
    <div className="ap">
      <div className="ap-preview">
        <div className="ap-stage"><ChibiSprite spec={spec} scale={8} title={s(T.title)} /></div>
        <button type="button" className="cc-btn cc-slate" onClick={() => setSpec(randomChibi(Math.floor(Math.random() * 1e9)))}>{s(T.random)}</button>
      </div>
      <div className="ap-controls">
        <h2 className="pf-h2">{s(T.title)}</h2>
        <p className="cy-sub">{s(T.lead)}</p>

        <h3>{s(T.start)}</h3>
        <div className="ap-chips">
          {Object.keys(PRESETS).map((k) => (
            <button key={k} type="button" className="ap-chip" onClick={() => applyPreset(k)}>{s(PRESET_LABEL[k])}</button>
          ))}
        </div>

        {VARIANTS[spec.species].length > 1 && <><h3>{s(T.variant)}</h3>{chips('variant', VARIANTS[spec.species])}</>}
        {(spec.species === 'human' || spec.species === 'alien' || spec.species === 'monster') && <><h3>{s(T.skin)}</h3>{colors('skin', skinsFor(spec.species), s(T.skin))}</>}
        {hasHair && <><h3>{s(T.hair)}</h3>{chips('hair', HAIRS)}<h3>{s(T.hairColor)}</h3>{colors('hairColor', HAIR_COLORS, s(T.hairColor))}</>}
        {spec.species !== 'robot' && <><h3>{s(T.eyes)}</h3>{chips('eyes', EYES)}<h3>{s(T.mouth)}</h3>{chips('mouth', MOUTHS)}</>}
        {!(spec.species === 'weird' && spec.variant === 'slime') && (
          <>
            <h3>{s(T.outfit)}</h3>{chips('outfit', OUTFITS)}
            <h3>{s(T.outfitColor)}</h3>{colors('outfitColor', OUTFIT_COLORS, s(T.outfitColor))}
          </>
        )}
        <h3>{s(T.accent)}</h3>{colors('accent', OUTFIT_COLORS, s(T.accent))}
        <h3>{s(T.accessory)}</h3>{chips('accessory', ACCESSORIES)}
        {human && <><h3>{s(T.facial)}</h3>{chips('facial', FACIALS)}</>}
        <h3>{s(T.pride)}</h3>{chips('pride', PRIDES)}

        <div className="ap-acts">
          {onCancel && <button type="button" className="cc-btn cc-slate" onClick={onCancel}>{s(T.cancel)}</button>}
          <button type="button" className="gm-cta" onClick={() => onSave(spec)}>{s(T.save)}</button>
        </div>
      </div>
    </div>
  )
}
