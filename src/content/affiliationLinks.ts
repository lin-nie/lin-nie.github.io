import utokyo from '../assets/affiliations/utokyo.jpg'
import microsoft from '../assets/affiliations/microsoft.png'
import sony from '../assets/affiliations/sony.svg'
import cmu from '../assets/affiliations/cmu.png'
import jsps from '../assets/affiliations/jsps.png'

export const affiliationLogos: Record<string, string> = {
  utokyo,
  microsoft,
  sony,
  cmu,
  jsps,
}

// Visual weight varies a lot across these logos (bold wordmarks vs. thin
// icon+text lockups), so each gets a manual scale to balance the strip.
export const affiliationLogoScale: Record<string, number> = {
  utokyo: 1,
  microsoft: 1,
  sony: 0.8,
  cmu: 0.75,
  jsps: 0.95,
}
