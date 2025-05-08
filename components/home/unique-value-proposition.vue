<script setup>
import { Icon } from '@iconify/vue'; // Importação correta do componente Icon

// Unique benefits as a developer
const valueProps = [
  {
    icon: 'fluent:design-ideas-24-filled',
    title: 'User-Centered Design',
    description: 'I create intuitive and elegant interfaces that balance aesthetics and functionality for an exceptional user experience.'
  },
  {
    icon: 'ph:code-bold',
    title: 'Quality Code',
    description: 'I develop clean, modular, and well-documented code, following best practices to ensure easy maintenance and scalability.'
  },
  {
    icon: 'carbon:chart-relationship',
    title: 'End-to-End Solutions',
    description: 'From design to implementation, I offer complete solutions that transform complex ideas into high-performance digital products.'
  }
];

// Featured projects (small sample of the best ones)
const featuredProjects = [
  {
    id: 1,
    title: 'Channels Hub',
    category: 'PAYMENT MANAGEMENT',
    image: '/images/project1.jpg',
    link: '/portfolio/channels-hub',
  },
  {
    id: 2,
    title: 'ADM Nutrition',
    category: 'INFORMATIONAL SYSTEM',
    image: '/images/project1.jpg',
    link: '/portfolio/adm-nutrition',
  },
  {
    id: 3,
    title: 'Abeka',
    category: 'EDUCATIONAL SYSTEM',
    image: '/images/project2.jpg',
    link: '/portfolio/abeka',
  }
];

// Animation for components to appear in sequence
onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
});
</script>

<template>
  <section class="w-full py-32 bg-white overflow-hidden opacity-0 animate-fade-in-slow">
    <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section title -->
      <div class="text-center mb-20 animate-on-scroll opacity-0 transition-opacity duration-700 delay-300">
        <h2 class="heading-2 mb-6">How I transform <span class="text-primary">ideas</span> into <span
            class="text-primary">digital experiences</span></h2>
        <p class="subtitle max-w-3xl mx-auto">
          Working as a Vue.js Specialist, I combine strategic thinking, design, and development to create impactful
          digital products.
        </p>
      </div>

      <!-- Unique values - Estilo redesenhado baseado na imagem de referência -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 animate-on-scroll opacity-0 transition-all duration-700 delay-500">
        <div v-for="(prop, index) in valueProps" :key="index"
          class="value-prop-card rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
          :class="index === 0 ? 'bg-[#111827] text-white' : 'bg-gray-50'">
          <div class="mb-6">
            <div class="icon-container">
              <Icon :icon="prop.icon" class="icon" />
            </div>
          </div>
          <h3 class="font-heading text-lg font-semibold mb-4" 
            :class="index === 0 ? 'text-white' : 'text-primary'">
            {{ prop.title }}
          </h3>
          <p class="font-body text-base" 
            :class="index === 0 ? 'text-white/90' : 'text-secondary'">
            {{ prop.description }}
          </p>
        </div>
      </div>

      <!-- Featured Projects -->
      <div class="animate-on-scroll opacity-0 transition-all duration-700 delay-700">
        <div class="flex justify-between items-center mb-10">
          <h3 class="heading-3">Selected Projects</h3>
          <NuxtLink to="/works"
            class="text-sm font-medium text-link flex items-center transition-all duration-300 hover:translate-x-1 group">
            View all projects
            <svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg"
              class="ml-2 transform transition-transform duration-300 ease-out group-hover:translate-x-1">
              <path d="M19 4L15 1M19 4L15 7M19 4L1 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NuxtLink v-for="project in featuredProjects" :key="project.id" :to="project.link"
            class="group block relative overflow-hidden rounded-xl h-[clamp(320px,50vh,420px)] bg-gray-100">
            <!-- Gradient overlay with stronger contrast -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 z-10">
            </div>

            <!-- Project title and category with enhanced visibility -->
            <div class="absolute bottom-0 left-0 p-8 z-20">
              <!-- Category label with maximum contrast -->
              <span class="caption text-white/90 block mb-3 font-medium">{{ project.category }}</span>
              
              <!-- Project title with enhanced visibility -->
              <h4 class="heading-4 text-white font-bold text-2xl drop-shadow-lg" style="color: #fff !important;">{{ project.title }}</h4>
              
              <!-- View details only appears on hover -->
              <div class="flex items-center mt-4 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <span class="button-text text-white font-semibold">View details</span>
                <svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="ml-2 transform transition-transform duration-300 ease-out group-hover:translate-x-1">
                  <path d="M19 4L15 1M19 4L15 7M19 4L1 4" stroke="white" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>

            <img :src="project.image" :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.is-visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

.animate-on-scroll {
  transform: translateY(20px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

/* Estilos dos cards com base na imagem de referência */
.value-prop-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 12px;
}

.icon-container {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 24px;
  height: 24px;
}

.text-primary {
  color: var(--text-primary);
}

.text-secondary {
  color: var(--text-secondary);
}

.text-link {
  color: var(--text-link);
}
</style>