<script setup>
import { useProjects } from '@/composables/useProjects';

const { getProjectBySlug, getNextProject } = useProjects();

const route = useRoute();
const currentSlug = route.params.slug;
const project = computed(() => {
  return getProjectBySlug(currentSlug) || null;
});

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' });
}

useHead({
  title: `${project.value.title} | Christian Chiavelli Portfolio`,
  meta: [
    { name: 'description', content: project.value.overview }
  ]
});

const isVisible = ref(false);
const inViewport = ref(false);

onMounted(() => {
  if (process.client) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          inViewport.value = true;
          isVisible.value = true;
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });

    const el = document.getElementById('project-detail');
    if (el) observer.observe(el);

    setTimeout(() => {
      isVisible.value = true;
    }, 100);
  }
});

const nextProject = computed(() => {
  return getNextProject(currentSlug);
});

const scrollToSection = (sectionId) => {
  if (process.client) {
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 80;

      // Removendo quaisquer animações de opacidade que possam estar interferindo
      element.classList.add('opacity-100');

      // Adicionando um pequeno atraso para garantir que as animações sejam concluídas
      setTimeout(() => {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Destacar visualmente a seção selecionada
        element.classList.add('ring-2', 'ring-primary', 'ring-opacity-50');

        // Remover o destaque após 1.5 segundos
        setTimeout(() => {
          element.classList.remove('ring-2', 'ring-primary', 'ring-opacity-50');
        }, 1500);
      }, 100);
    }
  }
};
</script>

<template>
  <div id="project-detail" class="min-h-screen">
    <section class="py-20 md:py-24 bg-gray-50 border-b border-gray-100">
      <div class="px-6 sm:px-8 lg:px-10">
        <div class="container max-w-7xl mx-auto">
          <div :class="['mb-8 md:mb-12 animate-fade-in-up', isVisible ? 'opacity-100' : 'opacity-0']">
            <div class="flex items-center text-sm text-tertiary">
              <NuxtLink to="/" class="hover:text-primary transition-colors duration-300">Home</NuxtLink>
              <svg class="w-3 h-3 mx-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <NuxtLink to="/works" class="hover:text-primary transition-colors duration-300">Projects</NuxtLink>
              <svg class="w-3 h-3 mx-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a 1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span class="font-medium text-primary">{{ project.title }}</span>
            </div>
          </div>

          <div :class="['mb-12 animate-fade-in-up delay-100', isVisible ? 'opacity-100' : 'opacity-0']">
            <div class="flex flex-wrap items-center gap-3 mb-4">
              <span
                class="inline-block px-3 py-1 bg-white border border-gray-200 text-xs font-medium text-tertiary uppercase rounded-full shadow-sm">
                {{ project.category }}
              </span>
              <span class="inline-block h-1.5 w-1.5 rounded-full bg-gray-300"></span>
              <span class="text-xs font-medium text-tertiary">{{ project.year }}</span>
            </div>
            <h1 class="heading-1 text-primary max-w-4xl mb-4">{{ project.title }}</h1>
            <p class="body-large text-secondary max-w-3xl">{{ project.overview }}</p>
          </div>

          <div class="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10 lg:items-stretch">
            <div class="lg:col-span-3 opacity-0 animate-fade-in-up delay-200">
              <div class="rounded-lg overflow-hidden shadow-lg w-full h-full">
                <img :src="project.heroImage" :alt="project.title" class="w-full h-full object-cover aspect-[16/10]" />
              </div>
            </div>
            <div class="lg:col-span-2 opacity-0 animate-fade-in-up delay-300 flex flex-col h-full">
              <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6 flex-grow">
                <h2 class="text-lg font-semibold text-primary mb-3">Description</h2>
                <p class="body-large text-secondary">{{ project.description }}</p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start">
                  <div class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg class="w-4 h-4 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <span class="text-xs uppercase font-medium text-tertiary block mb-1">Company</span>
                    <div v-if="project.companyLinkedIn" class="flex items-center">
                      <a :href="project.companyLinkedIn" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         class="inline-flex items-center font-medium text-primary text-sm hover:text-secondary transition-colors duration-300 group">
                        <svg class="w-3 h-3 mr-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span class="hover:underline">{{ project.company }}</span>
                      </a>
                    </div>
                    <p v-else class="font-medium text-primary text-sm">{{ project.company }}</p>
                  </div>
                </div>

                <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start">
                  <div class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg class="w-4 h-4 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <span class="text-xs uppercase font-medium text-tertiary block mb-1">My Role</span>
                    <p class="font-medium text-primary text-sm">{{ project.role }}</p>
                  </div>
                </div>

                <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100 col-span-full">
                  <span class="text-xs uppercase font-medium text-tertiary block mb-2">Technologies Used</span>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tech in project.technologies" :key="tech"
                      class="text-xs font-medium bg-gray-50 text-tertiary py-1 px-2 rounded-md border border-gray-100 hover:bg-gray-100 transition-colors">
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white opacity-0 animate-fade-in-up delay-500">
      <div class="px-6 sm:px-8 lg:px-10">
        <div class="container max-w-7xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div class="hidden lg:block lg:col-span-3 xl:col-span-2">
              <div
                :class="['sticky top-32 animate-fade-in-up delay-[750ms]', isVisible ? 'opacity-100' : 'opacity-0']">
                <div class="space-y-6">
                  <div>
                    <span
                      :class="['caption uppercase block mb-3 animate-fade-in-up delay-[800ms]', isVisible ? 'opacity-100' : 'opacity-0']">Sections</span>
                    <ul class="space-y-4">
                      <li
                        :class="['animate-fade-in-up delay-[850ms]', isVisible ? 'opacity-100' : 'opacity-0']">
                        <a href="#challenge" @click.prevent="scrollToSection('challenge')"
                          class="font-body text-sm font-medium text-tertiary hover:text-primary transition-colors duration-300 flex items-center group py-1 pl-3">
                          <span
                            class="absolute left-0 top-0 h-full w-0.5 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"></span>
                          The Challenge
                        </a>
                      </li>
                      <li
                        :class="['animate-fade-in-up delay-[900ms]', isVisible ? 'opacity-100' : 'opacity-0']">
                        <a href="#solution" @click.prevent="scrollToSection('solution')"
                          class="font-body text-sm font-medium text-tertiary hover:text-primary transition-colors duration-300 flex items-center group py-1 pl-3">
                          <span
                            class="absolute left-0 top-0 h-full w-0.5 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"></span>
                          The Solution
                        </a>
                      </li>
                      <li
                        :class="['animate-fade-in-up delay-[950ms]', isVisible ? 'opacity-100' : 'opacity-0']">
                        <a href="#results" @click.prevent="scrollToSection('results')"
                          class="font-body text-sm font-medium text-tertiary hover:text-primary transition-colors duration-300 flex items-center group py-1 pl-3">
                          <span
                            class="absolute left-0 top-0 h-full w-0.5 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"></span>
                          Results
                        </a>
                      </li>
                      <li
                        :class="['animate-fade-in-up delay-[1000ms]', isVisible ? 'opacity-100' : 'opacity-0']">
                        <a href="#achievements" @click.prevent="scrollToSection('achievements')"
                          class="font-body text-sm font-medium text-tertiary hover:text-primary transition-colors duration-300 flex items-center group py-1 pl-3">
                          <span
                            class="absolute left-0 top-0 h-full w-0.5 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"></span>
                          Key Achievements
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:col-span-9 xl:col-span-10">
              <div
                :class="['mb-10 animate-fade-in-up delay-[700ms]', isVisible ? 'opacity-100' : 'opacity-0']">
                <h2 class="heading-3 text-left mb-8">
                  Project Details.
                </h2>
              </div>

              <!-- Unified section for Challenge, Solution, and Results -->
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                <!-- Card for The Challenge -->
                <div id="challenge"
                  :class="['bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full flex flex-col animate-fade-in-up', isVisible ? 'opacity-100' : 'opacity-0']">
                  <div class="flex items-start">
                    <div>
                      <h3 class="font-medium text-lg text-primary mb-2">The Challenge</h3>
                      <p class="text-secondary">{{ project.challenge }}</p>
                    </div>
                  </div>
                </div>

                <!-- Card for The Solution -->
                <div id="solution"
                  :class="['bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full flex flex-col animate-fade-in-up', isVisible ? 'opacity-100' : 'opacity-0']">
                  <div class="flex items-start">
                    <div>
                      <h3 class="font-medium text-lg text-primary mb-2">The Solution</h3>
                      <p class="text-secondary">{{ project.solution }}</p>
                    </div>
                  </div>
                </div>

                <!-- Card for Results -->
                <div id="results"
                  :class="['bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full flex flex-col animate-fade-in-up', isVisible ? 'opacity-100' : 'opacity-0']">
                  <div class="flex items-start">
                    <div>
                      <h3 class="font-medium text-lg text-primary mb-2">Results</h3>
                      <p class="text-secondary">{{ project.results }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="achievements"
                :class="['mt-8 animate-fade-in-up delay-1000', isVisible ? 'opacity-100' : 'opacity-0']">
                <div class="flex flex-col items-start mb-8">
                  <div class="flex items-center mb-4">
                    <h2 class="heading-3 text-primary">Key Achievements.</h2>
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div v-for="(achievement, index) in project.achievements" :key="index"
                    :class="['bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1', isVisible ? 'opacity-100' : 'opacity-0']">
                    <div class="flex items-start">
                      <div>
                        <h3 class="font-medium text-lg text-primary mb-2">{{ achievement.title }}</h3>
                        <p class="text-secondary">{{ achievement.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      :class="['py-20 bg-gray-50 border-t border-gray-100 animate-fade-in-up delay-1200', isVisible ? 'opacity-100' : 'opacity-0']">
      <div class="px-6 sm:px-8 lg:px-10">
        <div class="container max-w-7xl mx-auto">
          <div class="flex flex-col items-center text-center mb-10">
            <span class="text-xs font-medium text-tertiary tracking-wide uppercase mb-2 block">CONTINUE EXPLORING</span>
            <h3 class="heading-3 mb-4 flex items-center">
              Next Project
            </h3>
          </div>

          <div
            class="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer transform transition-all duration-500 hover:shadow-xl">
            <NuxtLink :to="`/portfolio/${nextProject.slug}`" class="block relative">
              <div class="relative w-full aspect-[21/9] overflow-hidden"> <img :src="nextProject.heroImage"
                  :alt="nextProject.title"
                  class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
                <div class="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300"></div>
              </div>

              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-white text-center px-4">
                  <span class="text-xs font-medium tracking-wide uppercase mb-2 block">
                    {{ nextProject.category }}
                  </span>
                  <h4 class="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
                    {{ nextProject.title }}
                  </h4>
                  <div
                    class="inline-flex items-center group/btn bg-white bg-opacity-10 backdrop-blur-sm py-3 px-6 rounded-full hover:bg-opacity-20 transition-all duration-300">
                    <span class="text-white font-medium mr-3">View Project</span>
                    <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"
                      class="transform transition-transform duration-300 ease-out group-hover/btn:translate-x-1.5">
                      <path
                        d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z"
                        fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>

          <div class="mt-12 text-center">
            <NuxtLink to="/works" class="inline-flex items-center group">
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="transform rotate-180 transition-transform duration-300 ease-out group-hover:-translate-x-1.5 mr-3">
                <path
                  d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z"
                  fill="currentColor" />
              </svg>
              <span
                class="font-body text-base font-semibold text-primary hover:text-secondary transition-colors duration-300">
                Back to all projects
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <PortfolioContactCta />
  </div>
</template>