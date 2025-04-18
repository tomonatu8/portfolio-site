export type BilingualText = {
  en: string;
  ja: string;
};

export type BilingualArray = {
  en: string[];
  ja: string[];
};


export interface LocalizedProfile {
  name: BilingualText; 
  title: BilingualText;
  image: string; 
  bio: BilingualArray;
  jobSeekingInfo?: BilingualText; 
  email: string; 
  github: string; 
  linkedin: string; 
}


export interface LocalizedEducation {
  institution: BilingualText;
  degree: BilingualText;
  field: BilingualText;
  location: BilingualText;
  startDate: string;
  endDate: string;
  description?: BilingualArray;
}


export interface LocalizedExperience {
  company: BilingualText;
  title: BilingualText;
  location: BilingualText;
  startDate: string; 
  endDate: string; 
  description?: BilingualArray;
  technologies: string[]; 
  isFullTime?: boolean; 
}


export interface LocalizedSkill {
  name: string; 
  category: string; 
  description?: BilingualText; 
}


export interface LocalizedPublication {
  title: BilingualText;
  authors: string; 
  venue: BilingualText;
  category: string; 
  year: number; 
  description: string[]; 
  url?: string; 
  repo?: string; 
}


export interface LocalizedProject {
  title: BilingualText;
  description: BilingualText;
  image: string; 
  technologies: string[];
  repo?: string; 
  demo?: string; 
}
