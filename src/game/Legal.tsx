// LES PAGES LÉGALES ET LE PIED DE PAGE · demandé : « créé un footer et ajoute
// dans les paramètres la partie legal et privacy, RGPD etc... ».
//
// Trois pages dans le cadre du jeu (même en-tête, même barre du bas) :
// mentions légales, politique de confidentialité, conditions générales de
// vente. Le texte vit dans data/legal ; ici, seulement la mise en page.
//
// Le pied de page vit à part (game/GameFooter), parce que le cadre l'importe
// et que ces pages importent le cadre.
import { Lnk } from '../lib/router'
import { useHeadTags } from '../lib/headTags'
import { useLang } from '../i18n'
import { B, say } from '../data/bilingual'
import { LEGAL, LEGAL_PAGES, PRIVACY, TERMS, legalValue, type LegalSection } from '../data/legal'
import { Shell } from './Shell'

const FT = {
  updated: B('Last updated', 'Dernière mise à jour'),
  contact: B('Contact', 'Contact'),
  editor: B('Publisher', 'Éditeur'),
  form: B('Legal form', 'Forme juridique'),
  siret: B('Registration (SIRET)', 'Immatriculation (SIRET)'),
  vat: B('VAT number', 'Numéro de TVA'),
  address: B('Registered office', 'Siège'),
  director: B('Publication director', 'Directeur de la publication'),
  host: B('Host', 'Hébergeur'),
  ip: B('Intellectual property', 'Propriété intellectuelle'),
  ipBody: B('The texts, lessons, illustrations, characters and code of Dojoburo are protected. Any reproduction or automated extraction without permission is forbidden.',
    "Les textes, leçons, illustrations, personnages et le code de Dojoburo sont protégés. Toute reproduction ou extraction automatisée sans autorisation est interdite."),
  personal: B('Personal data', 'Données personnelles'),
  personalBody: B('How your data is handled is described in the privacy policy.', 'Le traitement de vos données est décrit dans la politique de confidentialité.'),
}

function LegalShell({ which, children }: { which: keyof typeof LEGAL_PAGES; children: React.ReactNode }) {
  const lang = useLang()
  const page = LEGAL_PAGES[which]
  useHeadTags({ title: `${say(page.title, lang)} · Dojoburo`, description: say(page.title, lang), path: page.path })
  return (
    <Shell>
      <article className="gm-sec lg">
        <h1 className="gm-h1">{say(page.title, lang)}</h1>
        <p className="lg-updated">{say(FT.updated, lang)} : {LEGAL.updated}</p>
        {children}
        <p className="lg-contact">{say(FT.contact, lang)} : <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a></p>
        <nav className="lg-other">
          {(Object.keys(LEGAL_PAGES) as (keyof typeof LEGAL_PAGES)[]).filter((k) => k !== which).map((k) => (
            <Lnk key={k} className="cc-btn cc-slate" href={LEGAL_PAGES[k].path}>{say(LEGAL_PAGES[k].title, lang)} →</Lnk>
          ))}
        </nav>
      </article>
    </Shell>
  )
}

function Sections({ list }: { list: LegalSection[] }) {
  const lang = useLang()
  return (
    <>
      {list.map((sec) => (
        <section key={sec.h.en} className="lg-sec">
          <h2>{say(sec.h, lang)}</h2>
          {sec.p.map((p) => <p key={p.en}>{say(p, lang)}</p>)}
        </section>
      ))}
    </>
  )
}

export function MentionsPage() {
  const lang = useLang()
  const s = (b: { en: string; fr: string }) => say(b, lang)
  const row = (k: { en: string; fr: string }, v: string) => <div><dt>{s(k)}</dt><dd>{legalValue(v, lang)}</dd></div>
  return (
    <LegalShell which="mentions">
      <section className="lg-sec">
        <h2>{s(FT.editor)}</h2>
        <dl className="lg-dl">
          {row(FT.editor, LEGAL.editor)}
          {row(FT.form, LEGAL.form)}
          {row(FT.siret, LEGAL.siret)}
          {row(FT.vat, LEGAL.vat)}
          {row(FT.address, LEGAL.address)}
          {row(FT.director, LEGAL.director)}
          <div><dt>{s(FT.contact)}</dt><dd><a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a></dd></div>
        </dl>
      </section>
      <section className="lg-sec">
        <h2>{s(FT.host)}</h2>
        <p>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis · vercel.com</p>
      </section>
      <section className="lg-sec">
        <h2>{s(FT.ip)}</h2>
        <p>{s(FT.ipBody)}</p>
      </section>
      <section className="lg-sec">
        <h2>{s(FT.personal)}</h2>
        <p>{s(FT.personalBody)} <Lnk href={LEGAL_PAGES.privacy.path}>{s(LEGAL_PAGES.privacy.title)} →</Lnk></p>
      </section>
    </LegalShell>
  )
}

export function PrivacyPage() {
  return <LegalShell which="privacy"><Sections list={PRIVACY} /></LegalShell>
}

export function TermsPage() {
  return <LegalShell which="terms"><Sections list={TERMS} /></LegalShell>
}
