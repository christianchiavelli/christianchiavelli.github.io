<script setup>
import AboutBio from '~/components/about/bio.vue';
import AboutSkillsList from '~/components/about/skills-list.vue';
import AboutWorkProcess from '~/components/about/work-process.vue';
import AboutQuote from '~/components/about/quote.vue';
import AboutTechnicalSkills from '~/components/about/technical-skills.vue';
import AboutResumeCta from '~/components/about/resume-cta.vue';
import AboutContactCta from '~/components/about/contact-cta.vue';

useHead({
  title: 'About | Christian Chiavelli',
  meta: [
    { name: 'description', content: 'Learn more about Christian Chiavelli, my experience, technical skills and work process as a frontend development specialist.' }
  ]
});
</script>

<template>
  <div>
    <AboutBio />
    <AboutSkillsList />
    <AboutWorkProcess />
    <AboutTechnicalSkills />
    <AboutResumeCta /> 
    <AboutQuote />
    <AboutContactCta />
  </div>
</template>