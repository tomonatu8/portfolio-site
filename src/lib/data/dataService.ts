import { get } from 'svelte/store';
import { language } from '$lib/i18n/i18n';
import type { Language } from '$lib/i18n/translations';
import * as bilingualData from './bilingualPortfolio';
import type { BilingualText, BilingualArray } from './localizedData';

const isBrowser = typeof window !== 'undefined';

// Helper function to get text based on current language
export function getText(text: BilingualText, lang?: Language): string {
  try {
    const currentLang = lang || (isBrowser ? get(language) : 'en');
    return text[currentLang] || text.en || '';
  } catch (e) {
    console.error('Error in getText:', e);
    return '';
  }
}

// Helper function to get array based on current language
export function getArray(array: BilingualArray | undefined, lang?: Language): string[] {
  try {
    // 配列が未定義または null の場合は空の配列を返す
    if (!array) return [];
    
    const currentLang = lang || (isBrowser ? get(language) : 'en');
    return array[currentLang] || array.en || [];
  } catch (e) {
    console.error('Error in getArray:', e);
    return [];
  }
}

// Convert bilingual education data to language-specific data
export function getEducation(lang?: Language) {
  try {
    const currentLang = lang || (isBrowser ? get(language) : 'en');
    
    return bilingualData.education.map(edu => ({
      degree: getText(edu.degree, currentLang),
      institution: getText(edu.institution, currentLang),
      field: getText(edu.field, currentLang),
      location: getText(edu.location, currentLang),
      startDate: edu.startDate,
      endDate: edu.endDate,
      description: getArray(edu.description, currentLang)
    }));
  } catch (e) {
    console.error('Error in getEducation:', e);
    return [];
  }
}

// Convert bilingual experience data to language-specific data
export function getExperience(lang?: Language) {
  try {
    const currentLang = lang || (isBrowser ? get(language) : 'en');
    
    return bilingualData.experience.map(exp => ({
      title: getText(exp.title, currentLang),
      company: getText(exp.company, currentLang),
      location: getText(exp.location, currentLang),
      startDate: exp.startDate,
      endDate: exp.endDate,
      description: exp.description ? getArray(exp.description, currentLang) : undefined,
      technologies: getArray(exp.technologies, currentLang),
      employmentType: exp.employmentType ? getText(exp.employmentType, currentLang) : undefined
    }));
  } catch (e) {
    console.error('Error in getExperience:', e);
    return [];
  }
}

// Convert bilingual publications data to language-specific data
export function getPublications(lang?: Language) {
  try {
    const currentLang = lang || (isBrowser ? get(language) : 'en');
    
    return bilingualData.publications.map(pub => ({
      title: getText(pub.title, currentLang),
      authors: pub.authors,
      venue: getText(pub.venue, currentLang),
      year: pub.year,
      description: getArray(pub.description, currentLang),
      category: pub.category,
      url: pub.url,
      repo: pub.repo
    }));
  } catch (e) {
    console.error('Error in getPublications:', e);
    return [];
  }
}

// Convert bilingual projects data to language-specific data
export function getProjects(lang?: Language) {
  try {
    const currentLang = lang || (isBrowser ? get(language) : 'en');
    
    return bilingualData.projects.map(proj => ({
      title: getText(proj.title, currentLang),
      description: getText(proj.description, currentLang),
      image: proj.image,
      technologies: getArray(proj.technologies, currentLang),
      repo: proj.repo,
      demo: proj.demo
    }));
  } catch (e) {
    console.error('Error in getProjects:', e);
    return [];
  }
}

// Convert bilingual skills data to language-specific data
export function getSkills(lang?: Language) {
  try {
    const currentLang = lang || (isBrowser ? get(language) : 'en');
    
    return bilingualData.skills.map(skill => ({
      name: getText(skill.name, currentLang),
      description: skill.description ? getText(skill.description, currentLang) : undefined,
      category: skill.category
    }));
  } catch (e) {
    console.error('Error in getSkills:', e);
    return [];
  }
}

// Get profile data for the current language
export function getProfile(lang?: Language) {
  try {
    const currentLang = lang || (isBrowser ? get(language) : 'en');
    
    return {
      name: getText(bilingualData.profile.name, currentLang),
      title: getText(bilingualData.profile.title, currentLang),
      image: bilingualData.profile.image,
      bio: getArray(bilingualData.profile.bio, currentLang),
      jobSeekingInfo: bilingualData.profile.jobSeekingInfo ? getText(bilingualData.profile.jobSeekingInfo, currentLang) : undefined,
      email: bilingualData.profile.email,
      github: bilingualData.profile.github,
      linkedin: bilingualData.profile.linkedin
    };
  } catch (e) {
    console.error('Error in getProfile:', e);
    return {
      name: 'Tomohiko Yokoyama',
      title: '',
      image: '',
      bio: [],
      email: 'tomohiko.yokoyama.888@gmail.com',
      github: 'https://github.com/tomonatu8',
      linkedin: 'https://linkedin.com/in/tomohiko-yokoyama-aa172b205'
    };
  }
}