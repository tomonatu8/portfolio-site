# Multilingual Support Implementation

This document outlines the multilingual (i18n) implementation for the portfolio site.

## Architecture

The internationalization system is built with the following components:

1. **Language Store**: Using Svelte's store to manage the current language state.
2. **Translation Files**: Structured JSON-like objects with translations for UI elements.
3. **Data Service Layer**: Handles language-specific content rendering for dynamic data.
4. **Localized Data Models**: TypeScript interfaces for handling bilingual content.
5. **Persistent Preferences**: Using localStorage to remember user's language preference.

## Key Components

### Language Selection

- Default language: English (`en`)
- Available languages: English (`en`), Japanese (`ja`)
- Toggle button in header to switch between languages
- Detects browser language for first-time visitors
- Remembers user preference with localStorage

### Translation Structure

- Static UI translations in `src/lib/i18n/translations.ts`
- Organized by component/section:
  - Navigation
  - Section titles
  - Skills categories
  - Publications sections
  - Projects links
  - Footer

### Content Translation

Dynamic content (portfolio data) is stored with bilingual support:
- `BilingualText` type for single text items with both languages
- `BilingualArray` type for arrays of texts with both languages

### Data Flow

1. Language selection changes the `language` store
2. Components subscribe to the store and re-render when language changes
3. `dataService.ts` converts bilingual data to the current language
4. Components display the language-specific content

## How to Add a New Language

To add support for a new language (e.g., Spanish):

1. Update the Language type in `translations.ts`:
   ```ts
   export type Language = 'en' | 'ja' | 'es';
   ```

2. Add the new language to all translation objects:
   ```ts
   about: {
     en: 'About',
     ja: '自己紹介',
     es: 'Sobre mí'
   },
   ```

3. Update the bilingual types to multilingual types in `localizedData.ts`:
   ```ts
   export type MultilingualText = {
     en: string;
     ja: string;
     es: string;
   };
   ```

4. Update the portfolio data to include the new language

5. Add language detection in `i18n.ts`:
   ```ts
   if (browserLang === 'ja') return 'ja';
   if (browserLang === 'es') return 'es';
   ```

6. Update the toggle button in the layout to support multiple languages

## Best Practices

- Keep translation keys descriptive and organized by component
- Use helper types to ensure type safety for multilingual content
- Ensure translations keep the same meaning and tone across languages
- Test translations in context to ensure proper layout and formatting
- Consider text expansion (some languages take more space than others)
