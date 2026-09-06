export interface AffiliationItem {
  name: string
  role: string
  logoKey: string
}

export interface ProfileContent {
  name: string
  degree: string
  photoCaption: string
  easterEggPhotoCaption: string
  easterEggPhotoSubtitle: string
  easterEggHint: string
  bio: string
  researchStatement: string
  contact: {
    addressJpLabel: string
    addressJp: string
    addressUsLabel: string
    addressUs: string
    email: string
    emailUtokyoTag: string
    emailCmu: string
    emailCmuTag: string
    emailAndWord: string
    web: string
  }
  affiliations: AffiliationItem[]
  cvNote: string
  internshipNote: string
  socialHints: {
    github: string
    scholar: string
    linkedin: string
    x: string
  }
}

export interface NewsItem {
  date: string
  html: string
}

export interface PublicationItem {
  title: string
  authors: string
  venue: string
}

export interface ScholarshipEntry {
  text: string
  url?: string
  explain?: string
  supp?: string
}

export interface EducationEntry {
  period: string
  degree: string
  mentor: string
  mentorUrl: string
  mentorTag?: string
  mentor2?: string
  mentor2Url?: string
  mentor2Tag?: string
  thesis?: string
  institution: string
  institution2?: string
  support?: string
  supportUrl?: string
}

export interface SiteContent {
  langLabel: string
  navHome: string
  profile: ProfileContent
  newsTitle: string
  navNews: string
  news: NewsItem[]
  newsShowAll: string
  newsShowLess: string

  publicationsTitle: string
  navPublications: string
  publications: PublicationItem[]
  paperLabel: string
  projectLabel: string
  codeLabel: string
  videoLabel: string
  openreviewLabel: string
  datasetLabel: string
  comingSoonLabel: string

  educationTitle: string
  navEducation: string
  supervisedByLabel: string
  supportedByLabel: string
  thesisLabel: string
  andWord: string
  education: EducationEntry[]

  honorsTitle: string
  navHonors: string
  scholarshipLabel: string
  scholarships: ScholarshipEntry[]
  awardsLabel: string
  awards: { text: string; url?: string }[]

  fundTitle: string
  navFund: string
  scientificFund: { name: string; match: string; note?: string; role: string }[]

  footerPeriod: string
  lastUpdatedLabel: string
}

export type Locale = 'en' | 'zh' | 'jp'
