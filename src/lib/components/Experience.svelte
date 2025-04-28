<script lang="ts">
  import { language, t } from '$lib/i18n/i18n';
  import { sectionTitles } from '$lib/i18n/translations';
  import { getExperience } from '$lib/data/dataService';
  
  // Subscribe to language changes
  $: experience = getExperience($language);
</script>

<section id="experience" class="py-16 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="section-title">{t(sectionTitles.experience, $language)}</h2>
    
    <div class="content-container">
      <div class="space-y-6">
        {#each experience as job}
          <div class="bg-gray-50 rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div class="p-5">
              <div class="flex flex-col md:flex-row justify-between mb-3">
                <div>
                  <h3 class="text-xl font-bold text-gray-800">{job.title}</h3>
                  {#if job.employmentType}
                    <span class="inline-block px-2 py-0.5 mt-1 bg-gray-200 text-xs rounded text-gray-700">
                      {job.employmentType}
                    </span>
                  {/if}
                </div>
                <div class="text-gray-600 md:text-right">
                  {job.startDate} - {job.endDate || 'Present'}
                </div>
              </div>
              
              <div class="flex flex-col md:flex-row justify-between mb-3">
                <div class="text-gray-700 font-medium">{job.company}</div>
                <div class="text-gray-600 md:text-right">{job.location}</div>
              </div>
              
              <div class="prose text-gray-600 mb-4">
                {#if job.description && job.description.length > 0}
                  <ul class="list-disc pl-5 space-y-1">
                    {#each job.description as item}
                      <li>{item}</li>
                    {/each}
                  </ul>
                {/if}
              </div>
              
              <div class="flex flex-wrap gap-2">
                {#each job.technologies as tech}
                  <span class="inline-block px-2 py-1 bg-gray-200 text-xs rounded text-gray-700">{tech}</span>
                {/each}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>