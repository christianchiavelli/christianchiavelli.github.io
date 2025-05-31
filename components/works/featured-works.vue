<script setup>
import { useProjects } from '@/composables/useProjects';

const { getProjectsForList } = useProjects();
const featuredWorks = getProjectsForList();

const getDelayClass = (index) => `delay-${index * 200}`;
</script>

<template>
  <div class="py-16">
    <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="space-y-0">
        <div v-for="(project, index) in featuredWorks" :key="project.id"
          :class="['opacity-0 animate-fade-in-up', getDelayClass(index)]">
          <WorksFeaturedProject :project="project" />
        </div>
      </div>
    </div>
  </div>
</template>