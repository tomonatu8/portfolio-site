<script lang="ts">
  import { language, t } from '$lib/i18n/i18n';
  import { sectionTitles } from '$lib/i18n/translations';
  import { getExperience } from '$lib/data/dataService';

  // Subscribe to language changes
  $: allExperience = getExperience($language);

  // フィルター: エンジニア経験
  $: engineerExperience = allExperience.filter(
    (job) => (job as any).experienceType === 'engineering'
  );
</script>

<section id="engineer-experience" class="bg-white pb-4 pt-0">
  <div class="container mx-auto max-w-4xl px-4">
    <h2 class="section-title">{t(sectionTitles.engineeringExperience, $language)}</h2>

    <div class="content-container">
      <div class="space-y-0">
        {#each engineerExperience as job}
          <div class="">
            <div class="">
              <div class="mb-2 ml-4">
                <div class="flex flex-wrap items-baseline gap-x-2">
                  <h3 class="text-base font-bold text-gray-800">{job.title}</h3>
                  <span class="text-xs text-gray-600">
                    ({job.startDate} - {job.endDate === 'Present'
                      ? $language === 'ja'
                        ? '現在'
                        : 'Present'
                      : !job.endDate
                        ? $language === 'ja'
                          ? '現在'
                          : 'Present'
                        : job.endDate})
                  </span>
                </div>
              </div>

              <!-- 会社名 -->
              <div class="mb-2 ml-8 flex items-baseline">
                <div class="text-sm font-medium text-gray-700">{job.company}</div>
                <!-- <span class="text-gray-600 text-xs ml-2">({job.location})</span> -->
              </div>

              <div class="prose mb-2 text-gray-600">
                {#if job.description && job.description.length > 0}
                  <div class="ml-8 space-y-0.5">
                    {#each job.description as item}
                      <p class="text-xs">{item}</p>
                    {/each}
                  </div>
                {/if}
              </div>

              <div class="ml-8 flex flex-wrap gap-1.5">
                {#each job.technologies as tech}
                  <span class="inline-block rounded bg-gray-200 px-1.5 py-0.5 text-xs text-gray-700"
                    >{tech}</span
                  >
                {/each}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
