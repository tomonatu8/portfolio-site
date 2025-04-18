<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import { language, toggleLanguage, t } from '$lib/i18n/i18n';
  import { nav, footer } from '$lib/i18n/translations';
  
  let mobileMenuOpen = false;
  let mounted = false;
  
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
  
  function handleLinkClick() {
    mobileMenuOpen = false;
  }
  
  function safeToggleLanguage() {
    if (mounted) {
      toggleLanguage();
    }
  }
  
  // Initialize language on client-side
  onMount(() => {
    mounted = true;
    // Language is initialized in i18n.ts
    // This flag ensures we don't try to use browser APIs before mounting
  });
</script>

<header class="sticky top-0 bg-white border-b border-gray-200 z-10">
  <div class="container mx-auto px-4 py-3">
    <nav class="flex justify-between items-center">
      <a href="/" class="text-lg font-medium text-gray-800">Tomohiko Yokoyama</a>
      
      <div class="hidden md:flex space-x-6 items-center">
        <!-- About リンクを削除 -->
        <a href="#education" class="text-gray-600 hover:text-primary transition-colors">{t(nav.education, $language)}</a>
        <a href="#experience" class="text-gray-600 hover:text-primary transition-colors">{t(nav.experience, $language)}</a>
        <a href="#publications" class="text-gray-600 hover:text-primary transition-colors">{t(nav.publications, $language)}</a>
        <a href="#projects" class="text-gray-600 hover:text-primary transition-colors">{t(nav.projects, $language)}</a>
        <a href="#skills" class="text-gray-600 hover:text-primary transition-colors">{t(nav.skills, $language)}</a>
        
        <!-- Language toggle button -->
        <button 
          class="ml-2 px-3 py-1 rounded border border-gray-300 text-sm font-medium hover:bg-gray-100 transition-colors"
          on:click={safeToggleLanguage}
        >
          {$language === 'en' ? '日本語' : 'English'}
        </button>
      </div>
      
      <button 
        class="md:hidden" 
        aria-label="Menu"
        on:click={toggleMobileMenu}
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
    
    {#if mobileMenuOpen}
      <div class="md:hidden bg-white py-4 px-2 mt-2 border-t border-gray-100">
        <div class="flex flex-col space-y-3">
          <a href="#education" class="text-gray-600 py-1" on:click={handleLinkClick}>{t(nav.education, $language)}</a>
          <a href="#experience" class="text-gray-600 py-1" on:click={handleLinkClick}>{t(nav.experience, $language)}</a>
          <a href="#publications" class="text-gray-600 py-1" on:click={handleLinkClick}>{t(nav.publications, $language)}</a>
          <a href="#projects" class="text-gray-600 py-1" on:click={handleLinkClick}>{t(nav.projects, $language)}</a>
          <a href="#skills" class="text-gray-600 py-1" on:click={handleLinkClick}>{t(nav.skills, $language)}</a>
          
          <button 
            class="text-left py-1 text-gray-600"
            on:click={() => { safeToggleLanguage(); handleLinkClick(); }}
          >
            {$language === 'en' ? '日本語' : 'English'}
          </button>
        </div>
      </div>
    {/if}
  </div>
</header>

<main>
  <slot />
</main>

<footer class="bg-gray-800 text-white py-6">
  <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <div class="mb-4 md:mb-0">
        <p class="text-sm">© {new Date().getFullYear()} Tomohiko Yokoyama. {t(footer.copyright, $language)}</p>
      </div>
      <div class="flex space-x-4">
        <a href="mailto:tomohiko.yokoyama.888@gmail.com" class="text-white hover:text-gray-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>
        <a href="https://linkedin.com/in/tomohiko-yokoyama-aa172b205" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM19 19h-3v-4.7c0-1.4-.7-1.8-1.5-1.8s-1.5.7-1.5 1.8V19h-3v-9h3v1.2a3 3 0 012.5-1.5c1.7 0 3.5 1.2 3.5 4v5.3z" />
          </svg>
        </a>
        <a href="https://github.com/tomonatu8" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.58v-2.03c-3.34.73-4.03-1.6-4.03-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.3.47-2.38 1.24-3.22-.13-.3-.54-1.5.12-3.13 0 0 1-.32 3.3 1.23.96-.27 1.98-.4 3-.4 1.02 0 2.04.13 3 .4 2.28-1.55 3.3-1.23 3.3-1.23.66 1.63.25 2.83.12 3.13.77.84 1.24 1.9 1.24 3.22 0 4.6-2.8 5.63-5.48 5.92.42.37.8 1.1.8 2.2v3.28c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>
