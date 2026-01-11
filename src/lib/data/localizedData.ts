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
  bio: BilingualText; // 配列からテキストに変更
  jobSeekingInfo?: BilingualText; 
  email: string; 
  github: string; 
  linkedin: string; 
}


export interface LocalizedEducation {
  institution: BilingualText;
  degree: BilingualText;
  field?: BilingualText;
  location: BilingualText;
  startDate: string;
  endDate: string;
  description?: BilingualArray;
}


export interface LocalizedExperience {
  company: BilingualText;
  title: BilingualText;
  location?: BilingualText;
  startDate: string; 
  endDate: string; 
  description?: BilingualArray;
  technologies?: BilingualArray; 
  employmentType?: BilingualText; 
  experienceType: string; // 'research' | 'engineering' のいずれか
}


export interface LocalizedSkill {
  name: BilingualText; 
  category: string; 
  description?: BilingualText; 
}


export interface LocalizedPublication {
  title: BilingualText;
  authors: string; 
  venue: BilingualText;
  category: string; 
  description?: BilingualArray; 
  url?: string; 
  repo?: string; 
}


export interface LocalizedProject {
  title: BilingualText;
  description: BilingualText;
  image: string;
  technologies?: BilingualArray;
  repo?: string;
  demo?: string;
  article?: string;
}