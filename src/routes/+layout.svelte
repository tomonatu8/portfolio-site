<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import { language, toggleLanguage, t } from '$lib/i18n/i18n';
  import { nav, footer } from '$lib/i18n/translations';
  import { base } from '$app/paths';
  
  let mobileMenuOpen = false;
  let mounted = false;
  let lastScrollY = 0;
  let isHeaderVisible = true;
  
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
  
  // Initialize language on client-side and add scroll listener
  onMount(() => {
    mounted = true;
    
    // スクロールイベントのリスナーを追加
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  
  // スクロールハンドラー
  function handleScroll() {
    const currentScrollY = window.scrollY;
    
    // スクロール方向に基づいてヘッダーの表示/非表示を制御
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      isHeaderVisible = false; // 下にスクロール時は非表示
    } else {
      isHeaderVisible = true; // 上にスクロール時は表示
    }
    
    lastScrollY = currentScrollY;
  }
</script>

<header class="sticky top-0 bg-white border-b border-gray-200 z-10 transition-transform duration-300 {isHeaderVisible ? '' : '-translate-y-full'}">
  <div class="container mx-auto px-4 py-3">
    <nav class="flex justify-between items-center">
      <a href="{base}/" class="text-lg font-medium text-gray-800">Tomohiko Yokoyama</a>
      
      <div class="flex items-center">
        <!-- Language toggle button -->
        <button 
          class="px-3 py-1 rounded border border-gray-300 text-sm font-medium hover:bg-gray-100 transition-colors"
          on:click={safeToggleLanguage}
        >
          {$language === 'en' ? '日本語' : 'English'}
        </button>
      </div>
    </nav>
  </div>
</header>

<main>
  <slot />
</main>

<footer class="py-6 text-gray-600">
  <div class="container mx-auto px-4">
    <div class="flex justify-center">
      <p class="text-sm">© {new Date().getFullYear()} Tomohiko Yokoyama. {t(footer.copyright, $language)}</p>
    </div>
  </div>
</footer>
