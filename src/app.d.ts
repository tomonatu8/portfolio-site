// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
  
  // データ型の定義
  interface Skill {
    name: string;
    level?: number;
  }

  interface Publication {
    title: string;
    authors: string;
    venue: string;
    year: number;
    link?: string;
    doi?: string;
  }
}

export {};
