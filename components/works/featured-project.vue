<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div
    class="group relative bg-white border-b border-gray-100 last:border-b-0 hover:bg-gray-100/60 transition-all duration-300">
    <div
      class="absolute left-0 top-0 h-full w-0.5 bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center">
    </div>

    <div class="py-8 px-4 sm:px-6 lg:px-8 relative">
      <div class="container max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between"> <!-- Project Info Section -->
          <div class="flex items-center space-x-4 md:space-x-6 flex-1">
            <div class="flex-shrink-0 relative w-12 md:w-16 lg:w-20 flex justify-center items-center h-16 md:h-auto">
              <span
                class="text-3xl md:text-4xl lg:text-5xl font-light text-gray-300 group-hover:text-primary/80 group-hover:scale-110 transition-all duration-300 inline-block">
                {{ project.number }}
              </span>
              <div
                class="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-150">
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                <div class="flex-1">
                  <h3
                    class="text-xl lg:text-2xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {{ project.title }}
                  </h3>
                  <p
                    class="text-sm font-medium text-gray-500 uppercase tracking-wider mt-1 group-hover:text-gray-600 transition-colors duration-300">
                    {{ project.category }}
                  </p>
                </div>

                <div v-if="project.technologies" class="mt-3 md:mt-0 md:ml-6">
                  <div class="flex flex-wrap gap-2">
                    <span v-for="(tech, index) in project.technologies?.slice(0, 3)" :key="tech"
                      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                      :style="{ transitionDelay: `${index * 50}ms` }">
                      {{ tech }}
                    </span>
                    <span v-if="project.technologies?.length > 3"
                      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-500 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                      style="transition-delay: 150ms">
                      +{{ project.technologies.length - 3 }}
                    </span>
                  </div>
                </div>
              </div>

              <div class="mt-4 md:hidden">
                <NuxtLink :to="project.link"
                  class="group/link relative inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary transition-all duration-300 overflow-hidden">
                  <div
                    class="absolute inset-0 bg-primary/5 rounded-lg transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left">
                  </div>

                  <div class="relative flex items-center py-2">
                    <span class="mr-2 group-hover/link:tracking-wide transition-all duration-300">View Details</span>
                    <div class="relative overflow-hidden">
                      <svg class="w-4 h-4 transform transition-all duration-300 group-hover/link:translate-x-1"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                      <svg
                        class="w-4 h-4 absolute top-0 left-0 transform -translate-x-4 transition-all duration-300 group-hover/link:translate-x-0"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="hidden md:block flex-shrink-0 md:ml-6 mt-4 md:mt-0">
            <NuxtLink :to="project.link"
              class="group/link relative inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary transition-all duration-300 overflow-hidden">
              <div
                class="absolute inset-0 bg-primary/5 rounded-lg transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left">
              </div>

              <div class="relative flex items-center px-4 py-2">
                <span class="mr-2 group-hover/link:tracking-wide transition-all duration-300">View Details</span>
                <div class="relative overflow-hidden">
                  <svg class="w-4 h-4 transform transition-all duration-300 group-hover/link:translate-x-1" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <svg
                    class="w-4 h-4 absolute top-0 left-0 transform -translate-x-4 transition-all duration-300 group-hover/link:translate-x-0"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>