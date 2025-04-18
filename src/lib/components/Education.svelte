<script lang="ts">
  import { language, t } from '$lib/i18n/i18n';
  import { sectionTitles } from '$lib/i18n/translations';
  import { getEducation } from '$lib/data/dataService';
  
  // Subscribe to language changes
  $: education = getEducation($language);
</script>

<section id="education" class="py-16 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="section-title">{t(sectionTitles.education, $language)}</h2>
    
    <div class="content-container">
      <div class="space-y-8">
        {#each education as edu}
          <div class="flex flex-col md:flex-row">
            <div class="md:w-3/4 mb-4 md:mb-0">
              <h3 class="text-xl font-bold mb-2 text-gray-800">{edu.degree}</h3>
              <div class="text-gray-700 font-medium mb-2">{edu.institution}</div>
              {#if edu.location}
                <div class="text-gray-600 text-sm mb-2">{edu.location}</div>
              {/if}
              {#if edu.field}
                <div class="text-gray-700 mb-2">{edu.field}</div>
              {/if}
              {#if edu.description.length > 0}
                <div class="prose text-gray-600">
                  <ul class="list-disc pl-5 space-y-1">
                    {#each edu.description as item}
                      <li>{item}</li>
                    {/each}
                  </ul>
                </div>
              {/if}
            </div>
            <div class="md:w-1/4 md:pl-8 md:text-right">
              <div class="text-gray-700 font-medium">{edu.startDate} - {edu.endDate || 'Present'}</div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>