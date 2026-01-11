<script lang="ts">
  import { language, t } from '$lib/i18n/i18n';
  import { sectionTitles, publications as pubTranslations } from '$lib/i18n/translations';
  import { getPublications } from '$lib/data/dataService';
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import PublicationSection from './PublicationSection.svelte';
  
  // Subscribe to language changes
  $: pubData = getPublications($language);
  
  // カテゴリごとにフィルタ
  $: conferences = pubData.filter(pub => pub.category === 'conference');
  $: journals = pubData.filter(pub => pub.category === 'journal');
  
  // アニメーション用の変数
  let visible = false;
  onMount(() => {
    visible = true;
  });
</script>

<section id="research" class="pt-0 pb-4 bg-white">
  <div class="container mx-auto px-4 max-w-4xl">
    <h2 class="section-title">{t(sectionTitles.research, $language)}</h2>
    
    {#if visible}
      <div class="content-container" in:fly={{ y: 20, duration: 300, delay: 50 }}>
        <PublicationSection title={pubTranslations.journals} publications={journals} />
        <PublicationSection title={pubTranslations.conferences} publications={conferences} />
      </div>
    {/if}
  </div>
</section>
