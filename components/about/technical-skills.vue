<script setup>
import { Icon } from '@iconify/vue';

const skillCategories = [
  {
    title: 'Design & UX',
    description: 'Tools I use to replicate designs created for the system',
    skills: [
      { name: 'Figma', icon: 'simple-icons:figma' },
      { name: 'Storybook', icon: 'simple-icons:storybook' }
    ]
  },
  {
    title: 'Frontend',
    description: 'Technologies I master to build interactive and responsive interfaces',
    skills: [
      { name: 'HTML', icon: 'simple-icons:html5' },
      { name: 'CSS', icon: 'simple-icons:css3' },
      { name: 'JavaScript', icon: 'simple-icons:javascript' },
      { name: 'TypeScript', icon: 'simple-icons:typescript' },
      { name: 'Vue.js', icon: 'simple-icons:vuedotjs' },
      { name: 'Nuxt.js', icon: 'simple-icons:nuxtdotjs' }
    ]
  },
  {
    title: 'UI Frameworks',
    description: 'Frameworks I use to create responsive and modern interfaces',
    skills: [
      { name: 'TailwindCSS', icon: 'simple-icons:tailwindcss' },
      { name: 'Vuetify', icon: 'simple-icons:vuetify' },
      { name: 'PrimeVue', icon: 'simple-icons:primevue' },
      { name: 'Sass', icon: 'simple-icons:sass' }
    ]
  },
  {
    title: 'Build Tools',
    description: 'Tools I use to build and optimize web applications',
    skills: [
      { name: 'Webpack', icon: 'simple-icons:webpack' },
      { name: 'Vite', icon: 'simple-icons:vite' },
      { name: 'npm', icon: 'simple-icons:npm' },
      { name: 'yarn', icon: 'simple-icons:yarn' },
      { name: 'pnpm', icon: 'simple-icons:pnpm' }
    ]
  },
  {
    title: 'Backend',
    description: 'Technologies I leverage to create robust and scalable solutions',
    skills: [
      { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
      { name: '.NET', icon: 'simple-icons:dotnet' },
      { name: 'RESTful APIs', icon: 'mdi:api' }
    ]
  },
  {
    title: 'Databases',
    description: 'Database systems I use for information persistence',
    skills: [
      { name: 'MS SQL Server', icon: 'simple-icons:microsoftsqlserver' },
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql' },
      { name: 'SQLite', icon: 'simple-icons:sqlite' },
      { name: 'MongoDB', icon: 'simple-icons:mongodb' }
    ]
  },
  {
    title: 'Testing Tools',
    description: 'Tools I use for testing web applications',
    skills: [
      { name: 'Jest', icon: 'simple-icons:jest' },
      { name: 'Playwright', icon: 'simple-icons:playwright' }
    ]
  },
  {
    title: 'Development Tools',
    description: 'Tools I use for development and project management',
    skills: [
      { name: 'Visual Studio', icon: 'simple-icons:visualstudio' },
      { name: 'VS Code', icon: 'simple-icons:visualstudiocode' },
      { name: 'Git', icon: 'simple-icons:git' },
      { name: 'GitHub', icon: 'simple-icons:github' },
      { name: 'GitLab', icon: 'simple-icons:gitlab' },
      { name: 'Bitbucket', icon: 'simple-icons:bitbucket' },
      { name: 'Azure DevOps', icon: 'simple-icons:azuredevops' },
      { name: 'Jira', icon: 'simple-icons:jira' },
      { name: 'Trello', icon: 'simple-icons:trello' }
    ]
  }
];
</script>

<template>
  <section class="w-full pt-24 pb-6 md:pt-32 md:pb-8 bg-neutral-50 opacity-0 animate-fade-in-slow delay-400">
    <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto md:mx-0">
        <h2 class="heading-2 mb-6 opacity-0 animate-fade-in-up delay-500">Technical Expertise.</h2>
        <p class="body-large mb-16 text-secondary leading-relaxed opacity-0 animate-fade-in-up delay-600">
          Combining cutting-edge technologies with creativity, I transform concepts into memorable digital experiences
          that balance aesthetics and functionality.
        </p>
      </div>

      <div class="space-y-24">
        <div v-for="(category, catIndex) in skillCategories" :key="catIndex" class="group opacity-0 animate-fade-in-up"
          :class="[
            catIndex === 0 ? 'delay-800' : '',
            catIndex === 1 ? 'delay-1000' : '',
            catIndex === 2 ? 'delay-1200' : '',
            catIndex === 3 ? 'delay-1400' : '',
            catIndex === 4 ? 'delay-1600' : '',
            catIndex === 5 ? 'delay-1800' : '',
            catIndex === 6 ? 'delay-2000' : '',
            catIndex === 7 ? 'delay-2200' : '',
            catIndex === 8 ? 'delay-2400' : ''
          ]">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div class="md:col-span-4">
              <h3 class="heading-4 mb-3 transition-colors duration-500 group-hover:text-primary">{{ category.title }}
              </h3>
              <p class="body text-secondary">{{ category.description }}</p>
            </div>

            <div class="md:col-span-8">
              <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                <div v-for="(skill, index) in category.skills" :key="index"
                  class="group/card flex flex-col items-center p-5 rounded-xl bg-white border border-neutral-100 shadow-sm hover:-translate-y-1 hover:shadow-md"
                  :style="{
                    'transition': 'transform 0.3s ease, box-shadow 0.3s ease',
                    'animation-delay': `${900 + (index * 100)}ms`
                  }">
                  <div class="h-14 w-14 flex items-center justify-center mb-4 text-primary">
                    <Icon :icon="skill.icon" class="h-10 w-10" />
                  </div>
                  <span class="button-text text-center">{{ skill.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>