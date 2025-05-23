export interface Location {
  address?: string;
  postalCode?: string;
  city?: string;
  countryCode?: string;
  region?: string;
}

export interface Profile {
  network: string;
  username?: string;
  url?: string;
}

export interface Basics {
  name: string;
  label: string;
  image?: string;
  email?: string;
  phone?: string;
  url?: string;
  summary?: string;
  location?: Location;
  profiles?: Profile[];
}

export interface Work {
  name: string;
  position: string;
  url?: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
  location?: string;
}

export interface Volunteer {
  organization: string;
  position: string;
  url?: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

export interface Education {
  institution: string;
  url?: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate?: string;
  score?: string;
  courses?: string[];
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
  url?: string;
  summary?: string;
}

export enum SkillLevel {
  Expert = "Expert",
  Advanced = "Advanced",
  Intermediate = "Intermediate",
  Proficient = "Proficient",
  Beginner = "Beginner",
}

export interface Skill {
  name: string;
  level?: SkillLevel;
  keywords?: string[];
}

export interface Language {
  language: string;
  fluency: string;
}

export interface Interest {
  name: string;
  keywords?: string[];
}

export interface Reference {
  name: string;
  reference: string;
}

export interface Project {
  name: string;
  description: string;
  highlights?: string[];
  keywords?: string[];
  startDate?: string;
  endDate?: string;
  url?: string;
  roles?: string[];
  entity?: string;
  type?: string;
}

export interface ResumeSchema {
  basics: Basics;
  work?: Work[];
  volunteer?: Volunteer[];
  education?: Education[];
  awards?: Award[];
  publications?: Publication[];
  skills?: Skill[];
  languages?: Language[];
  interests?: Interest[];
  references?: Reference[];
  projects?: Project[];
}
