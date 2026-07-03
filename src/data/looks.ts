// ---------------------------------------------------------------------------
// Per-agent pixel-avatar specs. Each agent gets a distinct silhouette via a mix
// of hairstyle, skin/hair/outfit colors and an accessory. Rendered by
// <PixelAvatar/>. Emotions are shown separately by the animated ASCII bubble.
// ---------------------------------------------------------------------------

export type HairStyle =
  | 'buzz'
  | 'short'
  | 'long'
  | 'ponytail'
  | 'bun'
  | 'spiky'
  | 'afro'
  | 'mohawk'
  | 'beanie'
  | 'cap'
  | 'hijab'
  | 'bald'

export type Accessory =
  | 'none'
  | 'glasses'
  | 'shades'
  | 'headset'
  | 'tie'
  | 'earrings'
  | 'monocle'

export interface Look {
  skin: string
  hair: string
  hairStyle: HairStyle
  outfit: string
  outfit2: string // collar / accent
  accessory: Accessory
}

export const LOOKS: Record<string, Look> = {
  // Ava — CEO: elegant bun, gold blazer, glasses
  ava: { skin: '#f1c9a5', hair: '#3a2a20', hairStyle: 'bun', outfit: '#f4b400', outfit2: '#fff4d6', accessory: 'glasses' },
  // Rex — CTO: spiky hair, hoodie-blue, headset
  rex: { skin: '#e7b184', hair: '#1c1c1c', hairStyle: 'spiky', outfit: '#2f80ed', outfit2: '#0b3b73', accessory: 'headset' },
  // Otto — DevOps: beanie, green tee
  otto: { skin: '#d59d6e', hair: '#4a3420', hairStyle: 'beanie', outfit: '#22a35a', outfit2: '#0f5a2f', accessory: 'none' },
  // Fin — CFO: short neat hair, purple suit, tie, monocle
  fin: { skin: '#eec6a0', hair: '#2b2b2b', hairStyle: 'short', outfit: '#7c5cdf', outfit2: '#efe6ff', accessory: 'tie' },
  // Mia — CMO: long pink-tinted hair, coral top, earrings
  mia: { skin: '#f3cbab', hair: '#7a2f16', hairStyle: 'long', outfit: '#f2617a', outfit2: '#7a1730', accessory: 'earrings' },
  // Sol — Sales: cap, orange shirt, shades
  sol: { skin: '#dfa475', hair: '#141414', hairStyle: 'cap', outfit: '#f2843b', outfit2: '#7a3a10', accessory: 'shades' },
  // Pia — PM: ponytail, teal top, glasses
  pia: { skin: '#eec3a0', hair: '#33404a', hairStyle: 'ponytail', outfit: '#17b8a6', outfit2: '#0a4f48', accessory: 'glasses' },
  // Dex — Designer: mohawk, violet tee
  dex: { skin: '#e8bf98', hair: '#7b2ff2', hairStyle: 'mohawk', outfit: '#b06cf0', outfit2: '#3a1466', accessory: 'earrings' },
  // Ada — Data: hijab, sky top, glasses
  ada: { skin: '#e6b98f', hair: '#0e6f66', hairStyle: 'hijab', outfit: '#1aa0e6', outfit2: '#0a5a86', accessory: 'glasses' },
  // Hana — HR: afro, green top, warm
  hana: { skin: '#c78a54', hair: '#20140c', hairStyle: 'afro', outfit: '#2fce88', outfit2: '#0f5a3a', accessory: 'none' },
  // Sam — Support: buzz cut, blue tee, headset
  sam: { skin: '#e0aa7f', hair: '#1a2a4a', hairStyle: 'buzz', outfit: '#5aa2f5', outfit2: '#14345f', accessory: 'headset' },
  // Lex — Legal: bald, grey suit, monocle
  lex: { skin: '#eac49b', hair: '#2b2620', hairStyle: 'bald', outfit: '#8a94a6', outfit2: '#2a3140', accessory: 'monocle' },
}

// The player-hero: a founder in a hoodie + cap with a backpack vibe.
export const HERO_LOOK: Look = {
  skin: '#eab98c',
  hair: '#2a1d12',
  hairStyle: 'cap',
  outfit: '#e23b57',
  outfit2: '#ffd23b',
  accessory: 'none',
}
