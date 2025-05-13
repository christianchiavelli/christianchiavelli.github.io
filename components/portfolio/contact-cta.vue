<script setup>
const emit = defineEmits(['contact']);
</script>

<template>
  <section class="py-24 md:py-32 bg-white relative overflow-hidden opacity-0 animate-fade-in-up">
    <div class="absolute top-0 left-0 w-full h-full opacity-5">
      <div class="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary animate-circle-pulse"></div>
      <div class="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-secondary animate-circle-pulse delay-700"></div>
    </div>

    <div class="px-6 sm:px-8 lg:px-10 relative z-10">
      <div class="container max-w-5xl mx-auto text-center">
        <span
          class="text-xs font-medium text-tertiary tracking-wide uppercase mb-3 block opacity-0 animate-fade-in-up delay-300">LET'S
          WORK TOGETHER</span>
        <h2 class="heading-2 mb-6 opacity-0 animate-fade-in-up delay-400">Have a project in mind?</h2>
        <p class="body-large text-secondary max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in-up delay-500">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div class="mt-8 opacity-0 animate-fade-in-up delay-600">
          <NuxtLink to="/contact"
            class="inline-block relative transition-opacity duration-300 hover:opacity-90 h-[72px] group mt-6">
            <div class="relative flex items-center">
              <div
                class="w-[72px] h-[72px] bg-gray-200 rounded-full absolute left-0 -z-10 transition-transform duration-300 ease-out group-hover:scale-110">
              </div>

              <div class="flex items-center pl-6">
                <span class="font-body text-base font-semibold leading-tight tracking-wide">
                  GET IN TOUCH
                </span>

                <div class="relative ml-3 transition-all duration-300 ease-in-out">
                  <svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="transform transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                    <path d="M19 4L15 1M19 4L15 7M19 4L1 4" stroke="black" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" class="transition-all duration-300 group-hover:opacity-100" />
                  </svg>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>