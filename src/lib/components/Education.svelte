<script lang="ts">
  import { language, t } from '$lib/i18n/i18n';
  import { sectionTitles } from '$lib/i18n/translations';
  import { getEducation } from '$lib/data/dataService';
  
  // Subscribe to language changes
  $: education = getEducation($language);
</script>

<section id="education" class="pt-0 pb-4 bg-white">
  <div class="container mx-auto px-4 max-w-4xl">
    <h2 class="section-title">{t(sectionTitles.education, $language)}</h2>
    
    <div class="content-container">
      <div class="space-y-0">
        {#each education as edu}
          <div class="mb-2">
            <div class="">
              <div class="mb-0.5">
                <div class="flex flex-wrap items-baseline gap-x-2">
                  <h3 class="text-base font-bold text-gray-800">{edu.degree}</h3>
                  <span class="text-gray-600 text-xs">
                    ({edu.startDate} - {$language === 'ja' && edu.endDate && edu.endDate.includes('Expected:') 
                      ? edu.endDate.replace('Expected:', '卒業予定：') 
                      : edu.endDate === 'Present' ? ($language === 'ja' ? '現在' : 'Present') : (!edu.endDate ? ($language === 'ja' ? '現在' : 'Present') : edu.endDate)})
                  </span>
                </div>
              </div>
              
              <div class="text-gray-700 font-medium mb-0.5 text-sm ml-4">{edu.institution}</div>
              
              {#if edu.field}
                <div class="text-gray-700 mb-0.5 text-sm ml-4">{edu.field}</div>
              {/if}
              
              {#if edu.description.length > 0}
                <div class="prose text-gray-600 mb-0.5">
                  <div class="space-y-0 ml-4">
                    {#each edu.description as item}
                      <p class="text-xs">{item}</p>
                    {/each}
                  </div>
                </div>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>