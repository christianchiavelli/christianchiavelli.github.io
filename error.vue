<script setup>
defineProps({
  error: Object
});

const handleGoBack = () => {
  window.history.back();
};
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-white to-neutral-50">
    <div class="absolute inset-0 z-0">
      <div
        class="absolute top-20 left-20 w-96 h-96 rounded-full bg-blue-50 filter blur-3xl opacity-60 animate-morph-bg">
      </div>
      <div
        class="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-purple-50 filter blur-3xl opacity-60 animate-morph-bg delay-500">
      </div>
      <div
        class="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-orange-50 filter blur-3xl opacity-40 animate-morph-bg delay-700">
      </div>

      <div class="absolute inset-0 opacity-10 animate-fade-in-blur">
        <div class="bg-[radial-gradient(circle,#e5e5e5_1px,transparent_1px)] bg-[length:30px_30px] w-full h-full"></div>
      </div>
    </div>

    <div class="container mx-auto px-4 py-16 relative z-10">
      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div class="flex flex-col justify-center space-y-6 animate-slide-up-fade opacity-0">
          <span class="text-sm uppercase tracking-widest text-neutral-500 font-medium mb-2 delay-300">Error</span>

          <h1
            class="text-[10rem] md:text-[12rem] font-bold leading-none bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-800 animate-fade-in-blur delay-100 opacity-0">
            {{ error?.statusCode || '404' }}
          </h1>

          <h2 class="text-2xl md:text-3xl font-medium text-neutral-800 animate-slide-in-left delay-200 opacity-0">Page
            not found</h2>

          <p class="text-lg text-neutral-600 max-w-md animate-slide-in-left delay-300 opacity-0">
            Looks like you've tried to access a page that doesn't exist or has been removed.
          </p>

          <!-- Removendo o botão redundante "GO BACK" -->
        </div>

        <div class="relative animate-fade-in-scale opacity-0 delay-200">
          <div class="aspect-square max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <div class="relative w-full h-full flex items-center justify-center perspective">
              <div
                class="absolute w-[85%] h-[85%] rounded-full bg-gradient-to-br from-neutral-50 to-neutral-100 opacity-80 animate-pulse-ring">
              </div>
              <div class="absolute w-[90%] h-[90%] rounded-full border-4 border-dashed border-neutral-100 opacity-40">
              </div>

              <div
                class="absolute -left-14 top-1/4 w-40 h-56 rounded-lg bg-white shadow-sm p-4 transform -rotate-6 hover:rotate-0 transition-transform duration-300 z-10 animate-slide-in-left opacity-0 delay-300">
                <div class="w-full h-full flex flex-col gap-3">
                  <div class="w-full flex justify-between items-center mb-2">
                    <div class="flex space-x-1.5">
                      <div class="w-2.5 h-2.5 rounded-full bg-neutral-300"></div>
                      <div class="w-2.5 h-2.5 rounded-full bg-neutral-300"></div>
                      <div class="w-2.5 h-2.5 rounded-full bg-neutral-300"></div>
                    </div>
                    <div class="w-16 h-1.5 bg-neutral-200 rounded-full"></div>
                  </div>

                  <div class="w-full h-2 bg-neutral-200 rounded-full"></div>
                  <div class="w-3/4 h-2 bg-neutral-200 rounded-full"></div>

                  <div class="w-full h-16 bg-neutral-100 rounded-md mt-1"></div>

                  <div class="space-y-1.5 mt-2">
                    <div class="w-full h-1.5 bg-neutral-200 rounded-full"></div>
                    <div class="w-5/6 h-1.5 bg-neutral-200 rounded-full"></div>
                    <div class="w-3/4 h-1.5 bg-neutral-200 rounded-full"></div>
                    <div class="w-full h-1.5 bg-neutral-200 rounded-full"></div>
                    <div class="w-2/3 h-1.5 bg-neutral-200 rounded-full"></div>
                  </div>

                  <div class="flex gap-2 mt-auto">
                    <div class="w-10 h-3 bg-neutral-200 rounded-full"></div>
                    <div class="w-12 h-3 bg-neutral-200 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div
                class="relative z-10 w-4/5 aspect-square bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-500">
                <div
                  class="w-full h-2 bg-neutral-100 rounded-full mb-8 animate-shimmer bg-[linear-gradient(to_right,#f5f5f5_0%,#e0e0e0_20%,#f5f5f5_40%)] bg-[length:200%_100%]">
                </div>

                <div
                  class="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-700 animate-text-focus-in">
                  404
                </div>

                <div class="text-sm font-medium text-neutral-500 text-center opacity-0 animate-fade-in delay-400">
                  <span class="inline-block relative">
                    <span class="animate-typing-cursor delay-300">Page not found</span>
                  </span>
                </div>

                <div class="flex space-x-3 mt-8">
                  <div
                    class="w-6 h-6 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors duration-300 cursor-pointer">
                  </div>
                  <div
                    class="w-6 h-6 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors duration-300 cursor-pointer">
                  </div>
                  <div
                    class="w-6 h-6 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors duration-300 cursor-pointer">
                  </div>
                </div>
              </div>

              <div
                class="absolute -top-4 -right-4 w-28 h-16 rounded-lg bg-white shadow-sm p-3 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <div class="w-full h-full flex flex-col justify-between">
                  <div class="w-full flex justify-between items-center">
                    <div class="w-3 h-3 rounded-full bg-neutral-400"></div>
                    <div class="w-12 h-1.5 bg-neutral-400 rounded-full"></div>
                  </div>
                  <div
                    class="w-full h-6 bg-neutral-200 opacity-70 rounded animate-shimmer bg-[linear-gradient(to_right,theme(colors.neutral.200)_0%,theme(colors.neutral.100)_20%,theme(colors.neutral.200)_40%)] bg-[length:200%_100%]">
                  </div>
                </div>
              </div>

              <div class="absolute top-1/4 -right-2 w-4 h-4 rounded-full bg-neutral-300 shadow-sm">
              </div>
              <div class="absolute bottom-10 -left-6 w-3 h-3 rounded-full bg-neutral-400 shadow-sm z-20">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-16 animate-slide-up-fade opacity-0 delay-800">
        <p class="text-neutral-400 text-sm font-medium tracking-wide mb-3">
          <span class="inline-block">&mdash;</span>
          <span class="mx-2">ERROR {{ error?.statusCode || '404' }}</span>
          <span class="inline-block">&mdash;</span>
        </p>
        <div class="flex items-center justify-center space-x-6 text-sm">
          <router-link to="/"
            class="text-neutral-500 hover:text-neutral-700 transition-colors duration-300 flex items-center group">
            <span class="mr-1.5 group-hover:translate-x-[-2px] transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-home">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </span>
            <span class="relative overflow-hidden">
              HOME
              <span
                class="absolute bottom-0 left-0 w-full h-px bg-neutral-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </router-link>
          <span class="h-4 w-px bg-neutral-300"></span>
          <a href="javascript:history.back()"
            class="text-neutral-500 hover:text-neutral-700 transition-colors duration-300 flex items-center group">
            <span class="mr-1.5 group-hover:translate-x-[-2px] transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-arrow-left">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </span>
            <span class="relative overflow-hidden">
              GO BACK
              <span
                class="absolute bottom-0 left-0 w-full h-px bg-neutral-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>