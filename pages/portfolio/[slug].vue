<script setup>
const projects = [
  {
    id: 1,
    slug: 'channels-hub',
    title: 'Channels Hub',
    category: 'PAYMENT MANAGEMENT SYSTEM',
    heroImage: '/images/project1.jpg',
    clientLogo: '/images/project1.jpg',
    year: '2023-2024',
    client: 'Valtech',
    role: 'Frontend Developer',
    technologies: ['.NET Core', 'Vue 3', 'TailwindCSS', 'Microsoft SQL Server', 'Git', 'Azure DevOps', 'JIRA'],
    overview: 'Payment hub management platform that allows creating and administering entities (hubs), their respective payment service channels, and custom models for different occasions, centralizing the entire payment ecosystem.',
    challenge: 'Create a unified and intuitive solution to manage multiple payment channels that could serve different business models and ensure consistency and security of financial operations.',
    solution: 'We developed a scalable and flexible architecture that enables centralized management of payment channels. The interface was designed with an emphasis on usability to make payment management more efficient and less error-prone.',
    results: 'The system provided a significant reduction in payment processing time and a decrease in transaction errors. Centralized management also facilitated gaining insights into payment patterns and user behavior.',
    testimonial: {
      quote: "The Channels Hub platform completely transformed our way of managing payments, bringing unprecedented efficiency and visibility.",
      author: "Technology Director",
      company: "Valtech Client"
    },
    gallery: [
      '/images/project1.jpg',
      '/images/project2.jpg',
      '/images/project3.jpg'
    ],
    nextProject: 'adm-nutrition'
  },
  {
    id: 2,
    slug: 'adm-nutrition',
    title: 'ADM Nutrition',
    category: 'INFORMATIONAL SYSTEM',
    heroImage: '/images/project1.jpg',
    clientLogo: '/images/project1.jpg', // Replace with actual client logo
    year: '2022-2023',
    client: 'Valtech',
    role: 'Fullstack Developer',
    technologies: ['.NET Core', '.NET Framework', 'Optimizely (EpiServer)', 'Vue 3', 'TailwindCSS', 'Microsoft SQL Server', 'Git', 'Azure DevOps', 'JIRA'],
    overview: 'Informational system with the goal and purpose of showcasing information about the ADM company, its products, and services, emphasizing its expertise and knowledge in human and animal nutrition.',
    challenge: 'Create a robust and visually appealing informational system that could effectively demonstrate ADM\'s range of nutrition products and services, focusing on both human and animal nutrition.',
    solution: 'We developed a rich content platform using Optimizely (EpiServer) that allows easy management of information about products, services, and technical expertise, offering a fluid user experience for site visitors.',
    results: 'The system resulted in a significant increase in user engagement, with longer average time spent and higher conversion rates. The platform also improved the perception of the ADM brand as a leader in nutrition solutions.',
    testimonial: {
      quote: "The informational system developed by the team not only met but exceeded our expectations in terms of functionality and design.",
      author: "Marketing Manager",
      company: "ADM"
    },
    gallery: [
      '/images/project1.jpg',
      '/images/project2.jpg',
      '/images/project3.jpg'
    ],
    nextProject: 'abeka'
  },
  {
    id: 3,
    slug: 'abeka',
    title: 'Abeka',
    category: 'EDUCATIONAL SYSTEM',
    heroImage: '/images/project2.jpg',
    clientLogo: '/images/project2.jpg', // Replace with actual client logo
    year: '2021-2022',
    client: 'Valtech',
    role: 'Backend Developer',
    technologies: ['.NET Core', '.NET Framework', 'Optimizely (EpiServer)', 'Vue 3', 'TailwindCSS', 'Microsoft SQL Server', 'Git', 'Azure DevOps', 'JIRA'],
    overview: 'Educational system with the goal and purpose of providing a Christian distance learning (homeschooling) program for students in kindergarten, elementary and high school.',
    challenge: 'Develop a complete educational platform that could offer quality distance learning content, aligned with Christian values, for students from kindergarten through high school.',
    solution: 'We created a comprehensive system with modules for educational content management, student progress tracking, teacher-student interaction tools, and personalized learning resources.',
    results: 'The platform allowed thousands of families to access quality education at home, with a 45% increase in student retention and improved academic results compared to previous years.',
    testimonial: {
      quote: "This system transformed our ability to provide quality education at home, perfectly combining Christian values with cutting-edge technology.",
      author: "Educational Director",
      company: "Abeka"
    },
    gallery: [
      '/images/project2.jpg',
      '/images/project3.jpg',
      '/images/project4.jpg'
    ],
    nextProject: 'degust-one'
  },
  {
    id: 4,
    slug: 'degust-one',
    title: 'Degust One',
    category: 'ADMINISTRATIVE SYSTEM',
    heroImage: '/images/project3.jpg',
    clientLogo: '/images/project3.jpg', // Replace with actual client logo
    year: '2020-2021',
    client: 'Linx Stone',
    role: 'Frontend Developer',
    technologies: ['.NET Core', '.NET Framework', 'Vue 2', 'Ant Design Vue', 'Microsoft SQL Server', 'Git', 'Azure DevOps', 'JIRA'],
    overview: 'Advanced administrative system designed for efficient business management, including a customizable cash-front interface, streamlining operations and enhancing financial control.',
    challenge: 'Develop an advanced administrative system that could efficiently manage business operations, with special focus on a customizable point-of-sale interface and enhanced financial control.',
    solution: 'We implemented a complete enterprise solution with modules for inventory management, sales, financial and administrative functions, with a customizable interface for different types of businesses and an agile and intuitive point-of-sale system.',
    results: 'The system provided a 30% reduction in sales processing time and a significant improvement in inventory and financial control accuracy, resulting in more informed and agile business decisions.',
    testimonial: {
      quote: "Degust One revolutionized our daily operations, simplifying complex processes and giving us complete visibility of our financial operations.",
      author: "CEO",
      company: "Linx Stone Client"
    },
    gallery: [
      '/images/project3.jpg',
      '/images/project4.jpg',
      '/images/project1.jpg'
    ],
    nextProject: 'neoassist360'
  },
  {
    id: 5,
    slug: 'neoassist360',
    title: 'NeoAssist360',
    category: 'OMNICHANNEL SYSTEM',
    heroImage: '/images/project4.jpg',
    clientLogo: '/images/project4.jpg', // Replace with actual client logo
    year: '2019-2020',
    client: 'NeoAssist',
    role: 'Frontend Developer',
    technologies: ['Vue 2', 'Sass', 'Git', 'Git Labs', 'JIRA'],
    overview: 'Omnichannel system that unifies relationship centers with the administrative environment, allowing for efficient management of diverse contact methods in a single platform.',
    challenge: 'Create an omnichannel system that could unify relationship centers with administrative environments, allowing efficient management of various contact methods in a single platform.',
    solution: 'We developed a unified platform that integrates chatbots, email, social media, phone, and other communication channels in a single interface, with advanced routing tools, automation, and ticket management.',
    results: 'The system increased agent productivity by 40%, reduced average problem resolution time by 35%, and significantly improved end-customer satisfaction, as measured by NPS.',
    testimonial: {
      quote: "NeoAssist360 transformed our ability to manage customer interactions, providing a truly 360-degree view of each relationship.",
      author: "Operations Director",
      company: "NeoAssist Client"
    },
    gallery: [
      '/images/project4.jpg',
      '/images/project1.jpg',
      '/images/project2.jpg'
    ],
    nextProject: 'segweb'
  },
];

const route = useRoute();
const currentSlug = route.params.slug;
const project = computed(() => {
  return projects.find(p => p.slug === currentSlug) || null;
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

// Refs para animações
const isVisible = ref(false);
const inViewport = ref(false);

// Detectar quando o componente estiver visível na viewport
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

    // Animação inicial
    setTimeout(() => {
      isVisible.value = true;
    }, 100);
  }
});

// Função para encontrar o próximo projeto
const nextProject = computed(() => {
  return projects.find(p => p.slug === project.value.nextProject) || projects[0];
});

// Função para rolagem suave para as seções
const scrollToSection = (sectionId) => {
  if (process.client) {
    const element = document.getElementById(sectionId);
    if (element) {
      // Obter a altura do cabeçalho fixo
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 80; // Valor padrão se o cabeçalho não for encontrado

      // Calcular a posição correta considerando o offset do cabeçalho e uma pequena margem adicional
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;

      // Executar o scroll suave
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<template>
  <div id="project-detail" class="min-h-screen">
    <section class="py-20 md:py-24 bg-gray-50 border-b border-gray-100">
      <div class="px-6 sm:px-8 lg:px-10">
        <div class="container max-w-7xl mx-auto">
          <div class="mb-8 md:mb-12 opacity-0 animate-fade-in-up" :class="{ 'opacity-100': isVisible }">
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
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span class="font-medium text-primary">{{ project.title }}</span>
            </div>
          </div>

          <div class="mb-12 opacity-0 animate-fade-in-up delay-100" :class="{ 'opacity-100': isVisible }">
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

          <div class="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10 lg:items-start">
            <div class="lg:col-span-3 opacity-0 animate-fade-in-up delay-200">
              <div class="rounded-lg overflow-hidden shadow-lg w-full h-full">
                <img :src="project.heroImage" :alt="project.title" class="w-full object-cover aspect-[16/10]" />
              </div>
            </div>

            <div class="lg:col-span-2 opacity-0 animate-fade-in-up delay-300 flex flex-col h-full">
              <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6 flex-grow">
                <h2 class="text-lg font-semibold text-primary mb-3">Overview</h2>
                <p class="body-large text-secondary">{{ project.overview }}</p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start">
                  <div class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mr-3 flex-shrink-0">
                    <span class="text-primary font-bold text-sm">{{ project.client.charAt(0) }}</span>
                  </div>
                  <div>
                    <span class="text-xs uppercase font-medium text-tertiary block mb-1">Client</span>
                    <p class="font-medium text-primary text-sm">{{ project.client }}</p>
                  </div>
                </div>

                <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start">
                  <div class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg class="w-4 h-4 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </div>
                  <div>
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
              <div class="sticky top-32">
                <div class="space-y-6">
                  <div>
                    <span class="caption uppercase block mb-3">Sections</span>
                    <ul class="space-y-4">
                      <li>
                        <a href="#challenge" @click.prevent="scrollToSection('challenge')"
                          class="font-body text-sm font-medium text-tertiary hover:text-primary transition-colors duration-300">The
                          Challenge</a>
                      </li>
                      <li>
                        <a href="#solution" @click.prevent="scrollToSection('solution')"
                          class="font-body text-sm font-medium text-tertiary hover:text-primary transition-colors duration-300">The
                          Solution</a>
                      </li>
                      <li>
                        <a href="#results" @click.prevent="scrollToSection('results')"
                          class="font-body text-sm font-medium text-tertiary hover:text-primary transition-colors duration-300">Results</a>
                      </li>
                      <li>
                        <a href="#gallery" @click.prevent="scrollToSection('gallery')"
                          class="font-body text-sm font-medium text-tertiary hover:text-primary transition-colors duration-300">Gallery</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="lg:col-span-9 xl:col-span-10">
              <div id="challenge" class="mb-16 opacity-0 animate-fade-in-up delay-700">
                <h2 class="heading-3 mb-6">The Challenge</h2>
                <p class="body text-secondary mb-6">{{ project.challenge }}</p>
              </div>

              <div id="solution" class="mb-16 opacity-0 animate-fade-in-up delay-800">
                <h2 class="heading-3 mb-6">The Solution</h2>
                <p class="body text-secondary mb-6">{{ project.solution }}</p>
              </div>

              <div id="results" class="mb-16 opacity-0 animate-fade-in-up delay-900">
                <h2 class="heading-3 mb-6">Results</h2>
                <p class="body text-secondary mb-12">{{ project.results }}</p>
              </div>

              <div id="gallery" class="my-20 opacity-0 animate-fade-in-up delay-1100">
                <h2 class="heading-3 mb-8">Project Gallery</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div v-for="(image, index) in project.gallery" :key="index"
                    class="rounded-lg overflow-hidden shadow-md transform hover:scale-[1.02] transition-all duration-500">
                    <img :src="image" :alt="`${project.title} - Image ${index + 1}`"
                      class="w-full h-auto object-cover aspect-[4/3]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50 border-t border-gray-100 opacity-0 animate-fade-in-up delay-1200">
      <div class="px-6 sm:px-8 lg:px-10">
        <div class="container max-w-7xl mx-auto">
          <div class="flex flex-col items-center text-center mb-10">
            <span class="text-xs font-medium text-tertiary tracking-wide uppercase mb-2 block">CONTINUE EXPLORING</span>
            <h3 class="heading-3 mb-4">Next Project</h3>
          </div>

          <div class="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer">
            <NuxtLink :to="`/portfolio/${nextProject.slug}`" class="block relative">
              <div class="relative w-full aspect-[21/9] overflow-hidden">
                <img :src="nextProject.heroImage" :alt="nextProject.title"
                  class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
                <div class="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300"></div>
              </div>

              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-white text-center px-4">
                  <span class="text-xs font-medium tracking-wide uppercase mb-2 block">{{ nextProject.category }}</span>
                  <h4 class="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">{{ nextProject.title }}
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