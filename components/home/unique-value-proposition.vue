<script setup>
import { Icon } from '@iconify/vue';

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

const featuredProjects = [
  {
    id: 1,
    title: 'Channels Hub',
    category: 'PAYMENT MANAGEMENT',
    image: '/images/channels-hub.jpg',
    link: '/portfolio/channels-hub',
  },
  {
    id: 2,
    title: 'ADM Nutrition',
    category: 'INFORMATIONAL SYSTEM',
    image: '/images/adm-nutrition.jpg',
    link: '/portfolio/adm-nutrition',
  },
  {
    id: 3,
    title: 'Abeka',
    category: 'EDUCATIONAL SYSTEM',
    image: '/images/abeka.jpg',
    link: '/portfolio/abeka',
  }
];

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
  <section class="w-full py-12 bg-white overflow-hidden opacity-0 animate-fade-in-slow">
    <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section title -->
      <div class="text-center mb-20 mt-8 py-16 animate-on-scroll opacity-0 transition-opacity duration-700 delay-300">
        <h2 class="heading-2 mb-6">How I transform <span class="text-primary">ideas</span> into <span
            class="text-primary">digital experiences</span></h2>
        <p class="subtitle max-w-3xl mx-auto">
          Working as a Vue.js Specialist, I combine strategic thinking, design, and development to create impactful
          digital products.
        </p>
      </div>

      <!-- Unique values - Redesign profissional com cards com contraste aprimorado e altura reduzida -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 animate-on-scroll opacity-0 transition-all duration-700 delay-500">
        <div v-for="(prop, index) in valueProps" :key="index"
          class="value-prop-card group relative flex flex-col rounded-xl overflow-hidden transition-all duration-500 bg-gray-50 border border-gray-100 shadow-sm hover:shadow-lg">

          <!-- Linha decorativa superior -->
          <div class="absolute top-0 left-0 right-0 h-1 bg-gray-100 overflow-hidden">
            <div
              class="h-full w-16 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700">
            </div>
          </div>

          <div class="flex flex-col p-6 flex-grow">
            <!-- Header com ícone e numeração -->
            <div class="flex justify-between items-start mb-4">
              <!-- Ícone em um container com borda -->
              <div
                class="p-2.5 rounded-md bg-white border border-gray-100 shadow-sm group-hover:border-primary/20 transition-colors duration-500">
                <Icon :icon="prop.icon" class="w-5 h-5 text-primary" />
              </div>

              <!-- Numeração com círculo decorativo e efeito pulsante -->
              <div class="relative flex items-center justify-center">
                <!-- Círculo decorativo externo com efeito pulsante -->
                <div
                  class="absolute w-14 h-14 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-pulse-slow">
                </div>
                <!-- Círculo decorativo médio -->
                <div
                  class="absolute w-11 h-11 rounded-full bg-primary/10 scale-0 group-hover:scale-100 transition-all duration-500 ease-out">
                </div>
                <!-- Círculo interno com borda -->
                <div
                  class="absolute w-8 h-8 rounded-full border border-primary/30 scale-0 group-hover:scale-100 transition-all duration-300 delay-100">
                </div>
                <!-- Número com melhor contraste e alinhamento -->
                <span
                  class="text-gray-300 text-xl font-heading font-bold group-hover:text-primary transition-colors duration-500 relative z-10">
                  0{{ index + 1 }}
                </span>
              </div>
            </div>

            <!-- Título com linha de destaque aprimorada -->
            <div class="mb-2">
              <h3
                class="font-heading text-lg text-primary font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                {{ prop.title }}
              </h3>
              <div class="w-10 h-[2px] bg-gray-200 group-hover:w-16 group-hover:bg-primary transition-all duration-500">
              </div>
            </div>

            <!-- Descrição com melhor legibilidade -->
            <p class="font-body text-secondary text-base leading-relaxed mt-3">
              {{ prop.description }}
            </p>

            <!-- Indicador de ação mais sutil -->
            <div
              class="mt-4 pt-1 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <NuxtLink to="/about" class="inline-flex items-center text-sm font-medium text-primary cursor-pointer">
                <span class="mr-2">Learn more</span>
                <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="transform transition-transform duration-300 ease-out group-hover:translate-x-1">
                  <path d="M15 4L11 1M15 4L11 7M15 4L1 4" stroke="currentColor" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </NuxtLink>
            </div>
          </div>

          <!-- Elemento de destaque para o card atual -->
          <div
            class="absolute bottom-0 left-0 right-0 h-0 bg-gray-100 group-hover:h-1/2 transition-all duration-700 -z-10">
          </div>

          <!-- Formas decorativas sutis que combinam com o design do site -->
          <div
            class="absolute -bottom-12 -right-12 w-32 h-32 rounded-full border border-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
          </div>
          <div
            class="absolute -top-16 -right-16 w-32 h-32 rounded-full border border-gray-100 opacity-0 group-hover:opacity-50 transition-all duration-700 delay-200">
          </div>
        </div>
      </div>

      <!-- Featured Projects -->
      <div class="animate-on-scroll opacity-0 transition-all duration-700 delay-700">
        <h3 class="heading-3 mb-10">Selected Projects</h3>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NuxtLink v-for="project in featuredProjects" :key="project.id" :to="project.link"
            class="group block relative overflow-hidden rounded-xl h-[clamp(320px,50vh,420px)] bg-gray-100">
            <!-- Gradient overlay with stronger contrast -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 z-10">
            </div>

            <!-- Project title and category with enhanced visibility -->
            <div class="absolute bottom-0 left-0 p-8 z-20">
              <span class="caption text-white/90 block mb-3 font-medium">{{ project.category }}</span>
              <h4 class="heading-4 !text-white font-bold text-2xl drop-shadow-lg">
                {{ project.title }}
              </h4>
              <div
                class="flex items-center mt-4 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-[transform,opacity] duration-500 ease-out">
                <span class="button-text !text-white font-semibold">View details</span>
                <svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="ml-2 transition-transform duration-500 ease-out group-hover:translate-x-1">
                  <path d="M19 4L15 1M19 4L15 7M19 4L1 4" stroke="white" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </div>
            </div>

            <NuxtImg :src="project.image" :alt="project.title"
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