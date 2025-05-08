<script setup>
const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};
</script>

<template>
  <section class="w-full pt-32 pb-10 bg-black text-white relative overflow-hidden">
    <div
      class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/3 border border-gray-600 rounded-full w-[600px] h-[600px] opacity-60">
    </div>

    <div
      class="absolute left-0 bottom-0 w-[300px] h-[300px] bg-gradient-to-r from-transparent to-purple-500/10 rounded-full blur-3xl animate-glow-pulse">
    </div>

    <div class="container max-w-7xl mx-auto px-6 sm:px-8 relative">
      <div class="relative">
        <div class="relative mb-14">
          <div class="absolute left-[-5rem] top-[-4rem] w-[200px] h-[200px] z-0 animate-scale-in delay-200">
            <div class="w-full h-full rounded-full overflow-hidden">
              <div
                class="w-full h-full bg-[repeating-linear-gradient(45deg,#2B2B2B,#2B2B2B_12px,transparent_12px,transparent_24px)]">
              </div>
            </div>
          </div>

          <div class="relative z-10 ml-6">
            <h2 class="text-5xl md:text-6xl font-bold animate-text-focus-in delay-300">
              Let's work together.
            </h2>

            <p class="text-gray-300 mt-6 max-w-md animate-slide-in-left delay-600">
              Let's work together to build something great.
            </p>
          </div>
        </div>

        <div class="relative ml-8 mt-16 animate-rise-in delay-800">
          <a href="/contact" class="group relative inline-flex items-center">
            <div class="flex items-center relative transition-all duration-300">
              <div class="absolute rounded-full bg-[#2B2B2B] h-10 w-10 transition-all duration-500 ease-out
                group-hover:w-[140px] group-hover:rounded-full"></div>

              <div class="flex items-center relative z-10 pl-3 pr-4">
                <span class="font-medium mr-2 text-white whitespace-nowrap">SAY HELLO</span>
                <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="mt-20 flex justify-end items-center space-x-6">
        <a href="https://github.com/christianchiavelli" target="_blank" rel="noopener noreferrer"
          class="text-white hover:text-gray-300 transition duration-300 hover:scale-110 animate-fade-in-scale delay-900">
          <span class="sr-only">GitHub</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/christianchiavelli/" target="_blank" rel="noopener noreferrer"
          class="text-white hover:text-gray-300 transition duration-300 hover:scale-110 animate-fade-in-scale delay-1100">
          <span class="sr-only">LinkedIn</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
          </svg>
        </a>
        <a href="https://www.instagram.com/christian.chiavelli/" target="_blank" rel="noopener noreferrer"
          class="text-white hover:text-gray-300 transition duration-300 hover:scale-110 animate-fade-in-scale delay-1300">
          <span class="sr-only">Instagram</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
          class="text-white hover:text-gray-300 transition duration-300 hover:scale-110 animate-fade-in-scale delay-1500">
          <span class="sr-only">Twitter</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>
        <a href="mailto:chiavellidev@gmail.com"
          class="text-white hover:text-gray-300 transition duration-300 hover:scale-110 animate-fade-in-scale delay-1700">
          <span class="sr-only">Email</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
        </a>
      </div>
    </div>

    <div
      class="absolute right-10 top-10 hidden md:flex flex-col items-center cursor-pointer opacity-0 animate-fade-in delay-600 group z-50"
      @click="scrollToTop">
      <div class="flex justify-center mb-4">
        <svg width="20" height="60" viewBox="0 0 20 60" fill="none" xmlns="http://www.w3.org/2000/svg"
          class="text-white group-hover:text-gray-300 transition-all duration-300 transform group-hover:-translate-y-1.5">
          <path d="M10 59L10 1M10 1L1 10" stroke="currentColor" stroke-width="1.8" class="group-hover:stroke-2"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <button @click.stop="scrollToTop" class="bg-transparent border-0 p-0 cursor-pointer">
        <div class="[writing-mode:vertical-rl] text-xs font-semibold text-white tracking-wide rotate-180">
          SCROLL TO TOP
        </div>
      </button>
    </div>
  </section>
</template>