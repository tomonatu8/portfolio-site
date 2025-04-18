<script lang="ts">
  import { personalInfo } from '$lib/data/portfolio';
  
  // @を[at]に置き換え
  const emailDisplay = personalInfo.email.replace('@', '[at]');
</script>

<section id="contact" class="py-16 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="text-2xl font-bold mb-8 text-center text-gray-800">Contact</h2>
    
    <div class="max-w-xl mx-auto">
      <p class="text-center mb-6 text-gray-600">
        Feel free to reach out through any of the channels below.
      </p>
      
      <div class="space-y-4">
        <a 
          href="mailto:{personalInfo.email}" 
          class="flex items-center p-3 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
        >
          <div class="mr-3 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <div>
            <h3 class="font-medium text-gray-800">Email</h3>
            <p class="text-gray-600 text-sm break-all">{emailDisplay}</p>
          </div>
        </a>
        
        <a 
          href={personalInfo.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          class="flex items-center p-3 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
        >
          <div class="mr-3 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.58v-2.03c-3.34.73-4.03-1.6-4.03-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.3.47-2.38 1.24-3.22-.13-.3-.54-1.5.12-3.13 0 0 1-.32 3.3 1.23.96-.27 1.98-.4 3-.4 1.02 0 2.04.13 3 .4 2.28-1.55 3.3-1.23 3.3-1.23.66 1.63.25 2.83.12 3.13.77.84 1.24 1.9 1.24 3.22 0 4.6-2.8 5.63-5.48 5.92.42.37.8 1.1.8 2.2v3.28c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </div>
          <div>
            <h3 class="font-medium text-gray-800">GitHub</h3>
            <p class="text-gray-600 text-sm">@tomonatu8</p>
          </div>
        </a>
        
        <a 
          href={personalInfo.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          class="flex items-center p-3 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
        >
          <div class="mr-3 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM19 19h-3v-4.7c0-1.4-.7-1.8-1.5-1.8s-1.5.7-1.5 1.8V19h-3v-9h3v1.2a3 3 0 012.5-1.5c1.7 0 3.5 1.2 3.5 4v5.3z" />
            </svg>
          </div>
          <div>
            <h3 class="font-medium text-gray-800">LinkedIn</h3>
            <p class="text-gray-600 text-sm">Tomohiko Yokoyama</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>
