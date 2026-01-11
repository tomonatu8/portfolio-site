<script lang="ts">
  import { language, t } from '$lib/i18n/i18n';
  import { publications as pubTranslations } from '$lib/i18n/translations';
  import { fly } from 'svelte/transition';
  
  export let title: { en: string; ja: string };
  export let publications: any[];
</script>

<div class="mb-8">
  <h3 class="text-lg font-bold mb-3">{t(title, $language)}</h3>
  <div class="space-y-1">
    {#each publications as pub, index}
      <div 
        class=""
        in:fly={{ y: 20, duration: 300, delay: index * 100 }}
      >
        <!-- タイトルとリンク -->
        <div class="mb-1 ml-4">
          <span style="display: inline;">
            <span class="text-base font-bold text-gray-800">{pub.title}</span>
            {#if pub.url || pub.repo}
              <span class="inline-flex space-x-2 items-center ml-2">
                {#if pub.url}
                  <a 
                    href={pub.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="inline-flex items-center text-primary hover:text-primary-dark transition-colors text-xs whitespace-nowrap"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                    {t(pubTranslations.paper, $language)}
                  </a>
                {/if}
                {#if pub.repo}
                  <a 
                    href={pub.repo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="inline-flex items-center text-primary hover:text-primary-dark transition-colors text-xs whitespace-nowrap"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.58v-2.03c-3.34.73-4.03-1.6-4.03-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.3.47-2.38 1.24-3.22-.13-.3-.54-1.5.12-3.13 0 0 1-.32 3.3 1.23.96-.27 1.98-.4 3-.4 1.02 0 2.04.13 3 .4 2.28-1.55 3.3-1.23 3.3-1.23.66 1.63.25 2.83.12 3.13.77.84 1.24 1.9 1.24 3.22 0 4.6-2.8 5.63-5.48 5.92.42.37.8 1.1.8 2.2v3.28c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    {t(pubTranslations.github, $language)}
                  </a>
                {/if}
              </span>
            {/if}
          </span>
        </div>
        
        <!-- 著者名 -->
        <p class="text-gray-700 mb-0.5 text-xs ml-8">
          {pub.authors}
        </p>
        
        <!-- 掲載情報（イタリック体で区別） -->
        <p class="text-gray-600 italic mb-1 text-xs ml-8">
          {pub.venue}
        </p>
        
        <!-- 研究キーワード（タグ表示） -->
        <div class="flex flex-wrap gap-1 mb-3 ml-8">
          {#each pub.description as tag}
            <span class="px-1.5 py-0.5 bg-gray-100 text-xs rounded text-gray-700">{tag}</span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>
