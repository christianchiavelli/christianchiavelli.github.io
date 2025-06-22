<script setup>
const skills = [
  'Vue.js & Nuxt.js Expert',
  'Full Stack Architecture',
  '.NET Core Development',
  'TypeScript Specialist',
  'Modern UI/UX Design',
  'API Design & Integration',
  'Web Performance Optimization',
  'SQL Server & Entity Framework',
  'Azure DevOps & CI/CD',
  'Responsive Design Systems',
  'Agile Development Methodologies',
  'Legacy System Modernization'
];

const duplicatedSkills = [...skills, ...skills];

const isLoaded = ref(false);

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 300);
});
</script>

<template>
  <section class="w-full bg-black py-10 overflow-hidden relative">
    <div class="absolute inset-0 pointer-events-none z-10">
      <div class="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-black to-transparent"></div>
      <div class="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-black to-transparent"></div>
    </div>

    <div class="absolute top-1/2 left-0 w-full h-px bg-white/5 transform -translate-y-1/2"></div>

    <div class="relative w-full py-4 transition-opacity duration-800"
      :class="{ 'opacity-100': isLoaded, 'opacity-0': !isLoaded }">
      <div class="flex animate-scroll-x hover:[animation-play-state:paused]">
        <div class="flex items-center whitespace-nowrap pr-12">
          <div v-for="(skill, index) in duplicatedSkills" :key="index"
            class="text-gray-400 text-xl font-medium font-code px-10 py-2 relative transition-all duration-300 ease-out hover:text-white hover:tracking-wider hover:scale-[1.025] hover:-translate-y-[1px] group">
            <span class="relative z-10">{{ skill }}</span>
            <span
              class="absolute top-1/2 right-0 w-1 h-1 bg-white/15 rounded-full transform -translate-y-1/2 transition-all duration-300 ease-out group-hover:bg-white/40 group-hover:scale-125"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>