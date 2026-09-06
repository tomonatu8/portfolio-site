<script lang="ts">
  import { language, t } from '$lib/i18n/i18n';
  import { sectionTitles, involvements as involvementsTranslations } from '$lib/i18n/translations';
  import { getInvolvements } from '$lib/data/dataService';

  // Subscribe to language changes
  $: involvements = getInvolvements($language);

  // カテゴリごとにグループ化（この配列の順に表示、空のカテゴリは非表示）
  $: categories = [{ key: 'reviewing', title: involvementsTranslations.reviewing }]
    .map((cat) => ({ ...cat, items: involvements.filter((item) => item.category === cat.key) }))
    .filter((cat) => cat.items.length > 0);
</script>

<section id="other-involvements" class="bg-white pb-4 pt-0">
  <div class="container mx-auto max-w-4xl px-4">
    <h2 class="section-title">{t(sectionTitles.otherInvolvements, $language)}</h2>

    <div class="content-container">
      {#each categories as category}
        <div class="mb-8">
          <h3 class="mb-3 text-lg font-bold">{t(category.title, $language)}</h3>
          <div class="space-y-1">
            {#each category.items as item}
              <div class="ml-4 flex flex-wrap items-baseline gap-x-2">
                <span class="text-base font-bold text-gray-800">{item.role}:</span>
                <span class="text-sm text-gray-700">
                  {#each item.venues as venue, i}
                    {#if i > 0}<span class="mx-1 text-gray-400">/</span>{/if}
                    {#if venue.url}
                      <a
                        href={venue.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-primary transition-colors hover:text-primary-dark"
                      >
                        {venue.name}
                      </a>
                    {:else}
                      {venue.name}
                    {/if}
                  {/each}
                </span>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
