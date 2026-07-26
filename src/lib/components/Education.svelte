<script lang="ts">
  import { language, t } from '$lib/i18n/i18n';
  import { sectionTitles } from '$lib/i18n/translations';
  import { getEducation } from '$lib/data/dataService';

  // Subscribe to language changes
  $: education = getEducation($language);
</script>

<section id="education" class="bg-white pb-4 pt-0">
  <div class="container mx-auto max-w-4xl px-4">
    <h2 class="section-title">{t(sectionTitles.education, $language)}</h2>

    <div class="content-container">
      <div class="space-y-4">
        {#each education as edu}
          <div class="mb-4">
            <div class="">
              <div class="mb-0.5 ml-4">
                <div class="flex flex-wrap items-baseline gap-x-2">
                  <h3 class="text-base font-bold text-gray-800">{edu.degree}</h3>
                  <span class="text-xs text-gray-600">
                    ({edu.startDate} - {$language === 'ja' &&
                    edu.endDate &&
                    edu.endDate.includes('Expected:')
                      ? edu.endDate.replace('Expected:', '卒業予定：')
                      : edu.endDate === 'Present'
                        ? $language === 'ja'
                          ? '現在'
                          : 'Present'
                        : !edu.endDate
                          ? $language === 'ja'
                            ? '現在'
                            : 'Present'
                          : edu.endDate})
                  </span>
                </div>
              </div>

              {#if edu.institution && edu.institution.trim()}
                <div class="mb-0.5 ml-8 text-sm font-medium text-gray-700">{edu.institution}</div>
              {/if}

              {#if edu.field}
                <div class="mb-0.5 ml-8 text-sm text-gray-700">{edu.field}</div>
              {/if}

              {#if edu.description.length > 0}
                <div class="prose mb-0.5 text-gray-600">
                  <div class="ml-8 space-y-0">
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
