import { writable } from 'svelte/store';
import type { Language } from './translations';

// ブラウザ環境のチェック
const isBrowser = typeof window !== 'undefined';

// サーバーサイドレンダリング中は安全に初期値を提供
// ブラウザ環境でのみlocalStorageをチェック
const getBrowserLanguage = (): Language => {
  // サーバーサイドでは常に英語を返す
  if (!isBrowser) return 'en';
  
  try {
    // ブラウザ環境でのみ実行
    const savedLang = localStorage.getItem('preferred_language');
    if (savedLang === 'en' || savedLang === 'ja') {
      return savedLang;
    }
    
    // ブラウザの言語設定を検出
    const browserLang = navigator.language.substring(0, 2);
    if (browserLang === 'ja') {
      return 'ja';
    }
  } catch (e) {
    console.error('Error accessing localStorage or navigator:', e);
    // エラーが発生した場合は英語をデフォルトとする
    return 'en';
  }
  
  // デフォルトは英語
  return 'en';
};

// デフォルトで英語を設定して言語ストアを初期化
export const language = writable<Language>('en');

// クライアントサイドのみで実行する初期化コード
if (isBrowser) {
  // ページロード時に1回だけ実行
  setTimeout(() => {
    try {
      language.set(getBrowserLanguage());
    } catch (e) {
      console.error('Error initializing language:', e);
    }
  }, 0);
}

// 言語切り替え関数
export function toggleLanguage() {
  try {
    language.update(currentLang => {
      const newLang = currentLang === 'en' ? 'ja' : 'en';
      
      // ブラウザ環境のみでlocalStorageに保存
      if (isBrowser) {
        try {
          localStorage.setItem('preferred_language', newLang);
        } catch (e) {
          console.error('Error saving language preference:', e);
        }
      }
      
      return newLang;
    });
  } catch (e) {
    console.error('Error toggling language:', e);
  }
}

// 翻訳ヘルパー関数（エラーを防止するための対策を追加）
export function t(translations: {en: string, ja: string} | undefined | null, lang: Language): string {
  try {
    if (!translations) return '';
    if (!lang || (lang !== 'en' && lang !== 'ja')) lang = 'en';
    
    const translation = translations[lang];
    return translation || translations['en'] || '';
  } catch (e) {
    console.error('Translation error:', e);
    return '';
  }
}
