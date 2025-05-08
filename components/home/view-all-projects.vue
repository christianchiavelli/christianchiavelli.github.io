<script setup>
const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};
</script>

<template>
  <section class="py-24 md:py-16 min-h-[150px] bg-white relative opacity-0 animate-fade-in-slow">
    <div class="px-6 sm:px-8 lg:px-10">
      <div class="container max-w-7xl mx-auto relative">
        <div class="py-4 opacity-0 animate-fade-in-up delay-300">
          <span class="text-xs font-medium text-tertiary tracking-wide uppercase mb-2 block">DISCOVER MORE</span>
          <NuxtLink to="/works"
            class="font-heading text-3xl font-semibold text-primary hover:text-secondary transition-colors duration-300 inline-flex items-center group">
            View all projects
            <div class="relative ml-4 transition-all duration-300 ease-in-out">
              <svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="transform transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                <path d="M19 4L15 1M19 4L15 7M19 4L1 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
          </NuxtLink>
        </div>
        <div
          class="absolute right-0 top-0 hidden md:flex flex-col items-center cursor-pointer opacity-0 animate-fade-in delay-600 group"
          @click="scrollToTop">
          <div class="flex justify-center mb-4">
            <svg width="20" height="60" viewBox="0 0 20 60" fill="none" xmlns="http://www.w3.org/2000/svg"
              class="text-primary group-hover:text-secondary transition-all duration-300 transform group-hover:-translate-y-1.5">
              <path d="M10 59L10 1M10 1L1 10" stroke="currentColor" stroke-width="1.8" class="group-hover:stroke-2"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div class="[writing-mode:vertical-rl] text-xs font-semibold text-tertiary tracking-wide rotate-180">
            SCROLL TO TOP
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
