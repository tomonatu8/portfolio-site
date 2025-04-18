<script lang="ts">
  import { language } from '$lib/i18n/i18n';
  import { getProfile } from '$lib/data/dataService';
  
  // Subscribe to language changes
  $: profile = getProfile($language);
  
  // @を[at]に置換
  $: emailDisplay = profile.email.replace('@', '[at]');
</script>

<section id="hero" class="py-16 bg-gray-50">
  <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row items-center justify-between">
      <div class="md:w-2/3 mb-8 md:mb-0">
        <h1 class="text-3xl md:text-4xl font-bold mb-3 text-gray-800">{profile.name}</h1>
        <h2 class="text-lg md:text-xl mb-5 text-gray-600">{profile.title}</h2>
        
        <div class="space-y-2 mb-6">
          {#each profile.bio as point}
            <p class="flex items-start text-gray-700">
              <span class="mr-2">•</span>
              <span>{point}</span>
            </p>
          {/each}
        </div>
        
        {#if profile.jobSeekingInfo}
          <p class="text-gray-700 mb-6 font-medium">{profile.jobSeekingInfo}</p>
        {/if}
        
        <div class="flex flex-wrap gap-4">
          <a href="mailto:{profile.email}" class="inline-flex items-center text-primary hover:text-primary-dark transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <!-- {emailDisplay} -->
            Email
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-primary hover:text-primary-dark transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM19 19h-3v-4.7c0-1.4-.7-1.8-1.5-1.8s-1.5.7-1.5 1.8V19h-3v-9h3v1.2a3 3 0 012.5-1.5c1.7 0 3.5 1.2 3.5 4v5.3z" />
            </svg>
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-primary hover:text-primary-dark transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.58v-2.03c-3.34.73-4.03-1.6-4.03-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.3.47-2.38 1.24-3.22-.13-.3-.54-1.5.12-3.13 0 0 1-.32 3.3 1.23.96-.27 1.98-.4 3-.4 1.02 0 2.04.13 3 .4 2.28-1.55 3.3-1.23 3.3-1.23.66 1.63.25 2.83.12 3.13.77.84 1.24 1.9 1.24 3.22 0 4.6-2.8 5.63-5.48 5.92.42.37.8 1.1.8 2.2v3.28c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a href="https://orcid.org/0009-0004-7641-029X" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-primary hover:text-primary-dark transition-colors">
            ORCID
          </a>
          <a href="https://speakerdeck.com/tomonatu8" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-primary hover:text-primary-dark transition-colors">
            Speaker Deck
          </a>
        </div>
      </div>
      
      <!-- <div class="md:w-1/3 flex justify-center">
        <div class="w-40 h-40 rounded-full bg-white p-1 shadow-md">
          <div class="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
            <span class="text-4xl font-bold text-primary">T</span>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</section>

<!-- <img src="/face.png" alt="Profile" class="w-full h-full object-cover" /> -->
