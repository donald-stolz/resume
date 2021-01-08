export interface ResumeSchema {
  basics: BasicInfo;
  work: WorkExperience[];
  volunteer: VolunteerExperience[];
  education: EducationExperience[];
  awards: Award[];
  publications: Publication[];
  skills: Skill[];
  languages: Language[];
  interests: Interest[];
  references: Reference[];
}

export interface AdditionalSiteContent {
  headerIntro: string;
  resumeDownload: string;
}

export type SocialProfile = {
  network: string;
  username: string;
  url: string;
};

export type LocationInfo = {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
};

export interface BasicInfo {
  name: string;
  label?: string;
  picture?: string;
  email?: string;
  phone?: string;
  website?: string;
  summary?: string;
  location?: LocationInfo;
  profiles?: SocialProfile[];
}
interface Experience {
  // [name in 'company' | 'organization' ]: string;
  position: string;
  website?: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
  image: string;
}

export interface WorkExperience extends Experience {
  company: string;
}

export interface VolunteerExperience extends Experience {
  organization: string;
}

export interface EducationExperience {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate?: string;
  gpa?: string;
  //   courses?: string[];
  // ! Not standard for ResumeJSON
  highlights?: string[];
  image: string;
  website: string;
}

export interface Award {
  title: string;
  date: string;
  awarder: string;
  summary?: string;
}

export interface Publication {
  name: string;
  publisher: string;
  releaseDate: string;
  website?: string;
  summary: string;
}

export enum SkillLevel {
  basic,
  novice,
  intermediate,
  advanced,
  master,
}
export interface Skill {
  name: string;
  level: SkillLevel;
  keywords?: string[];
}

export enum FluencyLevel {
  none,
  basic,
  conversational,
  professional,
  native,
}
export interface Language {
  language: string;
  fluency: FluencyLevel;
}

export interface Interest {
  name: string;
  keywords?: string[];
}
export interface Reference {
  name: string;
  reference: string;
}

export interface PortfolioItem {
  title: string;
  description?: string;
  image: string;
  website: string;
}
