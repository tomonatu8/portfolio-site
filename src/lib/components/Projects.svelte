<script lang="ts">
  import { language, t } from '$lib/i18n/i18n';
  import { sectionTitles, projects as projectsTranslations } from '$lib/i18n/translations';
  import { getProjects } from '$lib/data/dataService';
  
  // Subscribe to language changes
  $: projects = getProjects($language);
</script>

<section id="projects" class="py-16 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="section-title">{t(sectionTitles.projects, $language)}</h2>
    
    <div class="content-container">
      <div class="space-y-6">
        {#each projects as project}
          <div class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div class="p-5">
              <h3 class="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
              <p class="text-gray-600 mb-4">{project.description}</p>
              
              <div class="flex flex-wrap gap-2 mb-4">
                {#each project.technologies as tech}
                  <span class="px-2 py-1 bg-gray-100 text-xs rounded text-gray-700">{tech}</span>
                {/each}
              </div>
              
              <div class="flex space-x-4">
                {#if project.repo}
                  <a 
                    href={project.repo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.58v-2.03c-3.34.73-4.03-1.6-4.03-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.3.47-2.38 1.24-3.22-.13-.3-.54-1.5.12-3.13 0 0 1-.32 3.3 1.23.96-.27 1.98-.4 3-.4 1.02 0 2.04.13 3 .4 2.28-1.55 3.3-1.23 3.3-1.23.66 1.63.25 2.83.12 3.13.77.84 1.24 1.9 1.24 3.22 0 4.6-2.8 5.63-5.48 5.92.42.37.8 1.1.8 2.2v3.28c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    {t(projectsTranslations.github, $language)}
                  </a>
                {/if}
                {#if project.demo}
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                    {t(projectsTranslations.liveDemo, $language)}
                  </a>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>