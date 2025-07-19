<script setup>
import { Icon } from '@iconify/vue';

defineProps({
  error: Object
});

const handleGoBack = () => {
  window.history.back();
};
</script>

<template>
  <div class="min-h-screen flex flex-col relative overflow-hidden bg-white">
    <!-- Header spacing to match layout -->
    <div class="h-24"></div>

    <!-- Background elements matching project style - Only on desktop -->
    <div class="absolute inset-0 z-0 hidden lg:block">
      <!-- Geometric shapes similar to other pages -->
      <div class="absolute w-[clamp(300px,30vw,400px)] h-[clamp(300px,30vw,400px)] top-1/2 right-0 -translate-y-1/2">
        <div class="absolute w-1/2 h-full rounded-l-full border-t border-l border-b border-gray-900 opacity-10 right-0">
        </div>
        <div class="absolute w-full h-[1px] bg-black opacity-15 top-1/2 -translate-y-1/2"></div>
        <div class="absolute w-20 h-20 rounded-full bg-gray-800 opacity-5 top-1/4 left-1/4"></div>
      </div>
    </div>

    <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[70vh] lg:min-h-[80vh]">
        <!-- Left side - Error content -->
        <div class="flex flex-col justify-center space-y-6 lg:space-y-8 opacity-0 animate-fade-in-up lg:order-1 order-1">
          <div>
            <p
              class="text-sm font-heading uppercase tracking-widest text-tertiary font-semibold mb-6 opacity-0 animate-fade-in-up delay-200">
              ERROR {{ error?.statusCode || '404' }}
            </p>

            <h1
              class="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-primary mb-6 leading-none opacity-0 animate-fade-in-up delay-300">
              Page not found
            </h1>

            <p
              class="text-lg md:text-xl text-secondary max-w-lg leading-relaxed opacity-0 animate-fade-in-up delay-400">
              Sorry, the page you're looking for doesn't exist or has been moved. Let's get you back to exploring my
              work.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up delay-500">
            <NuxtLink to="/"
              class="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-heading font-semibold text-sm tracking-wide rounded-none transition-colors duration-300 group">
              <span class="mr-3">BACK TO HOME</span>
              <Icon icon="mdi:arrow-right" class="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </NuxtLink>

            <button @click="handleGoBack"
              class="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-primary font-heading font-semibold text-sm tracking-wide rounded-none hover:border-primary transition-colors duration-300">
              GO BACK
            </button>
          </div>
        </div>

        <!-- Right side - Visual illustration with helpful links -->
        <div class="flex flex-col space-y-6 lg:space-y-8 opacity-0 animate-fade-in-up delay-300 lg:order-2 order-2">
          <!-- Large 404 illustration - Hidden on mobile -->
          <div class="relative aspect-square max-w-md mx-auto lg:mx-0 hidden lg:block">
            <div class="absolute inset-0 flex items-center justify-center">
              <!-- Background circle -->
              <div class="w-full h-full rounded-full bg-gray-50 opacity-80 animate-pulse-slow"></div>
            </div>

            <!-- 404 text -->
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-8xl md:text-9xl font-heading font-bold text-gray-200 select-none">
                404
              </span>
            </div>

            <!-- Floating elements -->
            <div
              class="absolute top-4 left-4 w-12 h-12 rounded-lg bg-white shadow-sm opacity-0 animate-fade-in delay-700 transform rotate-12">
              <div class="w-full h-full flex items-center justify-center">
                <div class="w-6 h-6 bg-gray-200 rounded"></div>
              </div>
            </div>

            <div
              class="absolute bottom-8 right-6 w-16 h-16 rounded-lg bg-white shadow-sm opacity-0 animate-fade-in delay-900 transform -rotate-6">
              <div class="w-full h-full flex flex-col justify-center items-center space-y-1">
                <div class="w-8 h-1 bg-gray-200 rounded"></div>
                <div class="w-6 h-1 bg-gray-200 rounded"></div>
                <div class="w-10 h-1 bg-gray-200 rounded"></div>
              </div>
            </div>

            <div class="absolute top-1/3 right-0 w-8 h-8 rounded-full bg-primary opacity-20 animate-bounce-slow"></div>
            <div
              class="absolute bottom-1/4 left-2 w-4 h-4 rounded-full bg-secondary opacity-30 animate-bounce-slow delay-500">
            </div>
          </div>

          <!-- Quick navigation -->
          <div class="space-y-4 lg:space-y-6 opacity-0 animate-fade-in-up delay-600">
            <h3 class="text-lg font-heading font-semibold text-primary mb-6 lg:mb-8">
              Maybe you're looking for:
            </h3>

            <div class="space-y-4 pb-8">
              <NuxtLink to="/works" class="group flex items-center py-3 hover:pl-2 transition-all duration-300">
                <div
                  class="w-8 h-8 flex items-center justify-center mr-4 opacity-60 group-hover:opacity-100 transition-all duration-300">
                  <Icon icon="mdi:folder-open" class="w-5 h-5 text-black" />
                </div>
                <div
                  class="border-b border-gray-200 pb-2 flex-1 group-hover:border-primary transition-all duration-300 relative">
                  <h4
                    class="font-heading font-medium text-primary text-base group-hover:text-black transition-colors duration-300">
                    MY WORKS</h4>
                  <p class="text-sm text-secondary mt-1">View my projects and portfolio</p>
                  <div class="absolute bottom-2 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Icon icon="mdi:arrow-right" class="w-4 h-4 text-primary transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </NuxtLink>

              <NuxtLink to="/about" class="group flex items-center py-3 hover:pl-2 transition-all duration-300">
                <div
                  class="w-8 h-8 flex items-center justify-center mr-4 opacity-60 group-hover:opacity-100 transition-all duration-300">
                  <Icon icon="mdi:card-text" class="w-5 h-5 text-black" />
                </div>
                <div
                  class="border-b border-gray-200 pb-2 flex-1 group-hover:border-primary transition-all duration-300 relative">
                  <h4
                    class="font-heading font-medium text-primary text-base group-hover:text-black transition-colors duration-300">
                    ABOUT ME</h4>
                  <p class="text-sm text-secondary mt-1">Learn about my skills and experience</p>
                  <div class="absolute bottom-2 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Icon icon="mdi:arrow-right" class="w-4 h-4 text-primary transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </NuxtLink>

              <NuxtLink to="/contact" class="group flex items-center py-3 hover:pl-2 transition-all duration-300">
                <div
                  class="w-8 h-8 flex items-center justify-center mr-4 opacity-60 group-hover:opacity-100 transition-all duration-300">
                  <Icon icon="mdi:email" class="w-5 h-5 text-black" />
                </div>
                <div
                  class="border-b border-gray-200 pb-2 flex-1 group-hover:border-primary transition-all duration-300 relative">
                  <h4
                    class="font-heading font-medium text-primary text-base group-hover:text-black transition-colors duration-300">
                    CONTACT</h4>
                  <p class="text-sm text-secondary mt-1">Get in touch with me</p>
                  <div class="absolute bottom-2 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Icon icon="mdi:arrow-right" class="w-4 h-4 text-primary transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </NuxtLink>

              <a href="https://github.com/christianchiavelli" target="_blank" rel="noopener noreferrer"
                class="group flex items-center py-3 hover:pl-2 transition-all duration-300">
                <div
                  class="w-8 h-8 flex items-center justify-center mr-4 opacity-60 group-hover:opacity-100 transition-all duration-300">
                  <Icon icon="simple-icons:github" class="w-5 h-5 text-black" />
                </div>
                <div
                  class="border-b border-gray-200 pb-2 flex-1 group-hover:border-primary transition-all duration-300 relative">
                  <h4
                    class="font-heading font-medium text-primary text-base group-hover:text-black transition-colors duration-300">
                    GITHUB</h4>
                  <p class="text-sm text-secondary mt-1">View my code and repositories</p>
                  <div class="absolute bottom-2 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Icon icon="mdi:external-link" class="w-4 h-4 text-primary transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>