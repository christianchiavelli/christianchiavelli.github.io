<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const isHovering = ref(false)
</script>

<template>
  <div class="relative transition-all duration-500 overflow-hidden min-h-[140px]" @mouseenter="isHovering = true"
    @mouseleave="isHovering = false">
    <div class="py-12 relative z-10">
      <div class="pl-4 sm:pl-6 lg:pl-8 w-full">
        <div class="container max-w-7xl mx-auto">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="flex items-center md:w-1/2">
              <div class="mr-6 transition-all duration-500"
                :class="{ 'opacity-80 transform scale-[1.25]': isHovering }">
                <span class="text-6xl text-gray-200"
                  :class="{ 'font-medium': isHovering, 'font-light': !isHovering }">{{ project.number }}</span>
              </div>

              <div class="flex flex-col transition-all duration-500">
                <h3 class="font-heading text-2xl font-semibold transition-colors duration-500"
                  :class="{ 'text-primary': isHovering, 'text-secondary': !isHovering }">{{ project.title }}</h3>
                <p class="text-xs font-medium text-tertiary tracking-wider uppercase mt-1">{{ project.category }}</p>
              </div>
            </div>

            <div class="md:w-1/2 relative h-12 md:h-16">
              <div class="absolute top-1/2 right-0 transform -translate-y-1/2 transition-all duration-700 ease-out"
                :class="{ 'opacity-100 translate-x-0': isHovering, 'opacity-0 -translate-x-24': !isHovering, 'z-[1]': true }">
                <div
                  class="w-[280px] h-[160px] md:w-[240px] md:h-[140px] lg:w-[280px] lg:h-[160px] xl:w-[320px] xl:h-[180px] rounded-xl shadow-lg overflow-hidden origin-center will-change-transform relative transition-transform duration-500 ease-out">

                  <NuxtImg :src="project.image" :alt="project.title" loading="lazy"
                    class="w-full h-full object-cover transition-transform duration-700" />
                </div>
              </div>

              <div class="absolute top-1/2 transform -translate-y-1/2 transition-all duration-700 ease-out" :class="{
                'right-6 z-10': isHovering,
                'right-0 z-5': !isHovering
              }">
                <NuxtLink :to="project.link" class="block relative group pr-4 sm:pr-6 lg:pr-8">
                  <div class="flex items-center relative transition-all duration-300 overflow-hidden p-3 rounded-full">
                    <div class="absolute rounded-full z-0 transition-all duration-300" :class="{
                      'w-full h-full top-0 left-0 bg-white shadow-md': isHovering,
                      'w-10 h-10 top-1/2 left-0 -translate-y-1/2 bg-gray-200': !isHovering
                    }"></div>
                    <span
                      class="font-body text-base font-semibold text-primary tracking-wide mr-4 whitespace-nowrap relative z-10">VIEW
                      DETAILS</span>
                    <svg class="transform transition-transform duration-300 group-hover:translate-x-1 relative z-10"
                      width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z"
                        fill="currentColor" />
                    </svg>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>