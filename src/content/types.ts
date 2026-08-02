export interface AffiliationItem {
  name: string
  role: string
  logoKey: string
}

export interface ProfileContent {
  name: string
  degree: string
  photoCaption: string
  bio: string
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
  thesis?: string
  department: string
  university: string
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

  educationTitle: string
  navEducation: string
  supervisedByLabel: string
  education: EducationEntry[]

  honorsTitle: string
  navHonors: string
  scholarshipLabel: string
  scholarships: ScholarshipEntry[]
  awardsLabel: string
  awards: string[]

  fundTitle: string
  navFund: string
  scientificFund: { name: string; match: string }[]

  footerPeriod: string
  lastUpdatedLabel: string
}

export type Locale = 'en' | 'zh' | 'jp'
