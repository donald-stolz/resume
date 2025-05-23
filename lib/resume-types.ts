export interface ResumeSchema {
  basics: {
    name: string
    label: string
    image?: string
    email?: string
    phone?: string
    url?: string
    summary?: string
    location?: {
      address?: string
      postalCode?: string
      city?: string
      countryCode?: string
      region?: string
    }
    profiles?: Array<{
      network: string
      username?: string
      url?: string
    }>
  }
  work?: Array<{
    name: string
    position: string
    url?: string
    startDate: string
    endDate?: string
    summary?: string
    highlights?: string[]
    location?: string
  }>
  volunteer?: Array<{
    organization: string
    position: string
    url?: string
    startDate: string
    endDate?: string
    summary?: string
    highlights?: string[]
  }>
  education?: Array<{
    institution: string
    url?: string
    area: string
    studyType: string
    startDate: string
    endDate?: string
    score?: string
    courses?: string[]
  }>
  awards?: Array<{
    title: string
    date: string
    awarder: string
    summary?: string
  }>
  publications?: Array<{
    name: string
    publisher: string
    releaseDate: string
    url?: string
    summary?: string
  }>
  skills?: Array<{
    name: string
    level?: string
    keywords?: string[]
  }>
  languages?: Array<{
    language: string
    fluency: string
  }>
  interests?: Array<{
    name: string
    keywords?: string[]
  }>
  references?: Array<{
    name: string
    reference: string
  }>
  projects?: Array<{
    name: string
    description: string
    highlights?: string[]
    keywords?: string[]
    startDate?: string
    endDate?: string
    url?: string
    roles?: string[]
    entity?: string
    type?: string
  }>
}
