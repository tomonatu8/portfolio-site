<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import Education from '$lib/components/Education.svelte';
  import Research from '$lib/components/Research.svelte';
  import ResearchExperience from '$lib/components/ResearchExperience.svelte';
  import EngineerExperience from '$lib/components/EngineerExperience.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import { language } from '$lib/i18n/i18n';

  const SITE_URL = 'https://tomonatu8.github.io/portfolio-site';

  $: pageTitle = $language === 'ja'
    ? '横山智彦 (Tomohiko Yokoyama) | ポートフォリオ'
    : 'Tomohiko Yokoyama (横山智彦) | Portfolio';

  const metaDescription = 'Tomohiko Yokoyama (横山智彦) - Applied Research Engineer at Sakana AI. PhD, The University of Tokyo. Multi-agent systems, algorithms, and machine learning.';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tomohiko Yokoyama',
    alternateName: '横山智彦',
    jobTitle: 'Applied Research Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Sakana AI'
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'The University of Tokyo'
    },
    url: SITE_URL,
    sameAs: [
      'https://github.com/tomonatu8',
      'https://linkedin.com/in/tomohiko-yokoyama-aa172b205',
      'https://orcid.org/0009-0004-7641-029X',
      'https://scholar.google.com/citations?user=2gp2WlEAAAAJ'
    ],
    knowsAbout: [
      'Algorithm Design',
      'Machine Learning',
      'Mechanism Design',
      'Fair Division',
      'Matching Theory'
    ],
    description: 'Applied Research Engineer at Sakana AI with a PhD from the University of Tokyo, specializing in algorithms, machine learning, and mechanism design.'
  };
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={metaDescription} />
  <meta name="author" content="Tomohiko Yokoyama" />
  <meta name="keywords" content="Tomohiko Yokoyama, 横山智彦, Sakana AI, University of Tokyo, 東京大学, algorithm, machine learning, mechanism design, fair division, portfolio, researcher, engineer" />

  <link rel="canonical" href="{SITE_URL}/" />

  <link rel="alternate" hreflang="en" href="{SITE_URL}/" />
  <link rel="alternate" hreflang="ja" href="{SITE_URL}/" />
  <link rel="alternate" hreflang="x-default" href="{SITE_URL}/" />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="{SITE_URL}/" />
  <meta property="og:title" content="Tomohiko Yokoyama (横山智彦) | Portfolio" />
  <meta property="og:description" content={metaDescription} />
  <meta property="og:locale" content="en_US" />
  <meta property="og:locale:alternate" content="ja_JP" />
  <meta property="og:site_name" content="Tomohiko Yokoyama Portfolio" />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Tomohiko Yokoyama (横山智彦) | Portfolio" />
  <meta name="twitter:description" content={metaDescription} />

  {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<Hero />
<EngineerExperience />
<ResearchExperience />
<Research />
<Projects />
<Education />
<!-- <Skills /> -->
