<script setup>
// Importar o composable de projetos para usar os dados centralizados
import { useProjects } from '@/composables/useProjects';

// Obter a lista de projetos em formato simplificado para o componente de works
const { getProjectsForList } = useProjects();
const featuredWorks = getProjectsForList();

const getDelayClass = (index) => {
  const delayMap = {
    0: 'delay-0',
    1: 'delay-200',
    2: 'delay-400',
    3: 'delay-600',
    4: 'delay-800',
    5: 'delay-1000',
    6: 'delay-700',
  };
  return delayMap[index] || 'delay-0';
};
</script>

<template>
  <div class="py-20 opacity-0 animate-fade-in-up">
    <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center mb-4">
        <h2 class="heading-2 mr-4">Crafted for enterprise success.</h2>
        <span class="h-px w-24 bg-gray-300"></span>
      </div>
      <p class="subtitle">Solutions I've implemented as a front-end developer, making an impact on businesses and users.
      </p>
    </div>
  </div>

  <div class="mb-24">
    <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-for="(project, index) in featuredWorks" :key="project.id"
        :class="[index % 2 === 0 ? 'bg-white' : 'bg-gray-50 rounded-lg', 'overflow-hidden opacity-0 animate-fade-in-up', getDelayClass(index)]">
        <WorksFeaturedProject :project="project" />
      </div>
    </div>
  </div>
</template>