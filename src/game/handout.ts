// LA RESSOURCE D'UNE CITÉ · une fiche, écrite depuis le cours lui-même.
//
// ---------------------------------------------------------------------------
// POURQUOI ELLE EST CALCULÉE ET NON DÉPOSÉE
//
// Une formation qui promet « des ressources » dépose d'habitude des fichiers à
// côté du cours. Ces fichiers se périment le jour où le cours change, et
// personne ne s'en aperçoit : ils ne sont ouverts qu'après l'achat, c'est à
// dire au seul moment où l'on ne peut plus rien corriger. La fiche est donc
// écrite à partir des niveaux au moment du téléchargement. Elle ne peut pas
// dire autre chose que ce qui vient d'être enseigné.
//
// CE QU'ELLE CONTIENT, ET CE QU'ELLE NE CONTIENT PAS. Elle contient ce qu'on
// relit : le geste, les étapes, le piège. Elle ne contient pas les questions ni
// leurs réponses · une fiche qui donne les réponses transforme la vérification
// en formalité, et quelqu'un qui reprend le parcours six mois plus tard mérite
// de se tester pour de vrai.
//
// LE FORMAT EST DU MARKDOWN · il s'ouvre partout, se relit sans logiciel, se
// colle dans un carnet de notes, et se donne tel quel à un modèle. Un PDF
// serait plus joli et moins utile.
import { say, type Module } from '../data/curriculum'
import type { Lang } from '../i18n/lang'

/** La fiche d'une cité, en texte. */
export function handout(m: Module, lang: Lang): string {
  const fr = lang === 'fr'
  const out: string[] = []
  out.push(`# ${say(m.title, lang)}`)
  out.push('')
  out.push(say(m.blurb, lang))
  out.push('')
  out.push(fr
    ? `${m.levels.length} dojos · ${m.levels.reduce((n, l) => n + l.minutes, 0)} minutes`
    : `${m.levels.length} dojos · ${m.levels.reduce((n, l) => n + l.minutes, 0)} minutes`)
  out.push('')

  m.levels.forEach((l, i) => {
    out.push(`## ${i + 1}. ${say(l.title, lang)}`)
    out.push('')
    out.push(say(l.learn, lang))
    out.push('')
    out.push(`**${fr ? 'Ce que vous faites' : 'What you do'}** · ${say(l.act, lang)}`)
    out.push('')
    l.steps.forEach((s, n) => out.push(`${n + 1}. ${say(s, lang)}`))
    out.push('')
    out.push(`**${fr ? 'Le piège' : 'The trap'}** · ${say(l.trap, lang)}`)
    out.push('')
    out.push(`**${fr ? 'Badge' : 'Badge'}** · ${say(l.badge, lang)}`)
    out.push('')
  })

  out.push('---')
  out.push('')
  out.push(fr
    ? 'DojoBuro · vous pouvez refaire chaque dojo autant de fois que vous voulez.'
    : 'DojoBuro · you can redo every dojo as many times as you want.')
  out.push('')
  return out.join('\n')
}

/** Le nom du fichier · sans accent ni espace, parce qu'il traverse des systèmes
 *  qui ne les aiment pas tous. */
export const handoutName = (m: Module) => `dojoburo-${m.id}.md`

/** Le téléchargement · un objet local, révoqué tout de suite. Rien ne part sur
 *  le réseau : la fiche est fabriquée dans le navigateur, donc elle marche hors
 *  ligne et ne dit à personne ce que vous téléchargez. */
export function downloadHandout(m: Module, lang: Lang) {
  const blob = new Blob([handout(m, lang)], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = handoutName(m)
  a.click()
  URL.revokeObjectURL(url)
}
