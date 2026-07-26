<script lang="ts">
  import { language, t } from '$lib/i18n/i18n';
  import { sectionTitles, skills as skillsTranslations } from '$lib/i18n/translations';
  import { getSkills } from '$lib/data/dataService';

  // Subscribe to language changes
  $: skillsData = getSkills($language);

  // Group skills by category
  $: {
    // Programming languages and other skills
    programmingSkills = skillsData.filter((skill) => skill.category === 'programming');
    aiSkills = skillsData.filter((skill) => skill.category === 'ai');
    devopsSkills = skillsData.filter((skill) => skill.category === 'devops');
    otherSkills = skillsData.filter((skill) => skill.category === 'other');

    // Split programming skills into those with descriptions and those without
    progLangs = programmingSkills.filter((skill) => skill.description);
    otherProgSkills = programmingSkills.filter((skill) => !skill.description);
  }

  let programmingSkills: any[] = [];
  let aiSkills: any[] = [];
  let devopsSkills: any[] = [];
  let otherSkills: any[] = [];
  let progLangs: any[] = [];
  let otherProgSkills: any[] = [];
</script>

<section id="skills" class="bg-white py-10">
  <div class="container mx-auto max-w-4xl px-4">
    <h2 class="section-title">{t(sectionTitles.skills, $language)}</h2>

    <div class="content-container">
      <div class="space-y-6">
        <!-- Programming languages -->
        <div>
          <h3 class="mb-3 text-base font-medium text-gray-700">
            {t(skillsTranslations.programmingLanguages, $language)}
          </h3>
          <div class="space-y-3">
            {#each progLangs as skill}
              <div>
                <p class="text-sm font-medium text-gray-700">{skill.name}</p>
                <p class="text-xs text-gray-600">{skill.description}</p>
              </div>
            {/each}
          </div>
        </div>

        <!-- Other programming skills -->
        {#if otherProgSkills.length > 0}
          <div>
            <h3 class="mb-1 text-base font-medium text-gray-700">
              {t(skillsTranslations.frameworksLibraries, $language)}
            </h3>
            <p class="text-xs text-gray-600">
              {otherProgSkills.map((skill) => skill.name).join(', ')}
            </p>
          </div>
        {/if}

        <!-- AI & ML -->
        <div>
          <h3 class="mb-1 text-base font-medium text-gray-700">
            {t(skillsTranslations.aiMl, $language)}
          </h3>
          <p class="text-xs text-gray-600">
            {aiSkills.map((skill) => skill.name).join(', ')}
          </p>
        </div>

        <!-- DevOps & Tools -->
        <div>
          <h3 class="mb-1 text-base font-medium text-gray-700">
            {t(skillsTranslations.devops, $language)}
          </h3>
          <p class="text-xs text-gray-600">
            {devopsSkills.map((skill) => skill.name).join(', ')}
          </p>
        </div>

        <!-- Other -->
        <div>
          <h3 class="mb-1 text-base font-medium text-gray-700">
            {t(skillsTranslations.other, $language)}
          </h3>
          <p class="text-xs text-gray-600">
            {otherSkills.map((skill) => skill.name).join(', ')}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
