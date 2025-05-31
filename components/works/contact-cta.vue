<template>
  <section class="bg-gray-50 py-10 overflow-hidden">
    <div class="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="opacity-0 animate-fade-in-up">
          <div class="flex items-center mb-4">
            <span class="h-px w-12 bg-gray-300 mr-4"></span>
            <h3 class="font-medium text-sm uppercase tracking-wider text-gray-500">Let's talk</h3>
          </div>
          <h2 class="heading-2 mb-6">Have a project in mind?</h2>
          <p class="subtitle mb-12">Need a digital expert to bring your vision to life? I transform complex requirements
            into elegant, user-focused interfaces that drive results. Ready when you are.</p>

          <NuxtLink to="/contact" class="inline-block relative transition-opacity duration-300 hover:opacity-90 h-[72px] group mt-6">
            <div class="relative flex items-center">
              <div class="w-[72px] h-[72px] bg-gray-200 rounded-full absolute left-0 -z-10 transition-transform duration-300 ease-out group-hover:scale-110">
              </div>

              <div class="flex items-center pl-6">
                <span class="font-body text-base font-semibold leading-tight tracking-wide">
                  GET IN TOUCH
                </span>

                <div class="relative ml-3 transition-all duration-300 ease-in-out">
                  <svg width="20" height="8" viewBox="0 0 20 8" fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="transform transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                    <path d="M19 4L15 1M19 4L15 7M19 4L1 4" stroke="black" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" class="transition-all duration-300 group-hover:opacity-100" />
                  </svg>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>

        <div class="relative h-80 opacity-0 animate-fade-in-up delay-300 hidden md:block">
          <div class="absolute inset-0 bg-[radial-gradient(circle,currentColor_1px,transparent_1px)] bg-[size:12px_12px] opacity-10"></div>
        </div>
      </div>
    </div>
  </section>
</template>