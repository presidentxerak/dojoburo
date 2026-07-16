// Public types for the DojoCity kit · the entire API surface a host app needs.
import type { ReactNode } from 'react'

/** A company plaque placed on one of the buildings ringing the player HQ.
 *  Every field except id + name is optional; missing fields are gracefully
 *  omitted from the detail card. */
export interface CityCompany {
  id: string
  name: string
  /** brand accent for the building + detail card (default: a neutral blue). */
  accent?: string
  /** short category label (e.g. "SaaS", "Studio"). */
  cat?: string
  /** one-line description / mission shown on the detail card. */
  tagline?: string
  /** headline number on the detail card. */
  revenue?: number
  /** secondary number on the detail card. */
  sales?: number
  /** where the "Open site" button links to. */
  href?: string
  /** optional card theming (fall back to sensible defaults). */
  bg?: string
  ink?: string
}

export interface DojoCityProps {
  /** the player HQ grows one floor per unit (e.g. one per company/dojo). */
  hqFloors?: number
  /** label shown over the player HQ. */
  hqName?: string
  /** accent colour of the player HQ. */
  hqAccent?: string
  /** companies to place on the surrounding buildings (optional). */
  companies?: CityCompany[]
  /** big title in the default header. */
  title?: string
  /** subtitle under the title in the default header. */
  subtitle?: string
  /** click the player HQ (default: no-op). */
  onEnterDojo?: () => void
  /** the header "back" button (omit to hide it). */
  onExit?: () => void
  /** click the Academy building (omit to make it inert). */
  onGuide?: () => void
  /** click a company building (also opens the built-in detail card). */
  onSelectCompany?: (c: CityCompany) => void
  /** replace the default top header entirely (brand slot, nav, etc.). */
  header?: ReactNode
  /** render a custom footer / bottom bar below the 3D stage. */
  footer?: ReactNode
  /** extra class on the root element. */
  className?: string
}
