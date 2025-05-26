<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import Education from '$lib/components/Education.svelte';
  import Research from '$lib/components/Research.svelte';
  import ResearchExperience from '$lib/components/ResearchExperience.svelte';
  import EngineerExperience from '$lib/components/EngineerExperience.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Skills from '$lib/components/Skills.svelte';
</script>

<svelte:head>
  <title>Tomohiko Yokoyama</title>
</svelte:head>

<Hero />
<Research />
<ResearchExperience />
<EngineerExperience />
<Education />
<Projects />
<!-- <Skills /> -->
