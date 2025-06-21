<script setup>
const fullTitleLine1 = "Senior Frontend";
const fullTitleLine2 = "Architect";
const displayedTitleLine1 = ref("");
const displayedTitleLine2 = ref("");
const typingSpeed = 50;
const startDelay = 500;

const typeWriter = () => {
  let i = 0;
  let j = 0;

  const typeLine1 = () => {
    if (i < fullTitleLine1.length) {
      displayedTitleLine1.value += fullTitleLine1.charAt(i);
      i++;
      setTimeout(typeLine1, typingSpeed);
    } else {
      setTimeout(typeLine2, typingSpeed * 2);
    }
  };

  const typeLine2 = () => {
    if (j < fullTitleLine2.length) {
      displayedTitleLine2.value += fullTitleLine2.charAt(j);
      j++;
      setTimeout(typeLine2, typingSpeed);
    }
  };

  setTimeout(typeLine1, startDelay);
};

onMounted(() => {
  typeWriter();
});
</script>

<template>
  <section class="w-full py-12 md:py-28 relative overflow-hidden opacity-0 animate-fade-in-slow">
    <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div class="absolute w-[clamp(300px,30vw,400px)] h-[clamp(300px,30vw,400px)] 
                    top-1/2 right-0 -translate-y-1/2">
          <div
            class="absolute w-1/2 h-full rounded-l-full border-t border-l border-b border-gray-900 opacity-10 right-0">
          </div>

          <div class="absolute w-full h-[1px] bg-black opacity-15 top-1/2 -translate-y-1/2"></div>

          <div class="absolute w-20 h-20 rounded-full bg-gray-800 opacity-5 top-1/4 left-1/4"></div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
        <div class="md:w-1/2 order-2 md:order-1">
          <div class="mt-4 md:mt-8 mb-8 md:mb-12">
            <p
              class="text-2xl md:text-3xl font-normal mb-4 md:mb-5 text-primary opacity-0 animate-fade-in-up delay-200">
              I am a passionate
            </p>
            <h2
              class="text-3xl md:text-4xl font-bold mb-2 text-primary whitespace-nowrap opacity-0 animate-fade-in-up delay-300">
              <span class="typing-line">{{ displayedTitleLine1 }}</span><br>
              <span class="typing-line">{{ displayedTitleLine2 }}</span>
            </h2>
            <p class="text-2xl md:text-3xl mb-4 md:mb-5 text-primary opacity-0 animate-fade-in-up delay-400">and <span
                class="font-bold">Vue
                Specialist</span> with expertise in
              modern UI.</p>
          </div>

          <div class="mt-6 md:mt-8 opacity-0 animate-fade-in-up delay-500">
            <p class="text-sm md:text-base leading-relaxed max-w-[540px] tracking-[0.01em] text-secondary font-normal">
              Hi! I'm Christian.
              <span
                class="font-cascadia bg-black/[0.03] px-[0.3rem] py-[0.1rem] rounded tracking-[0.5px] whitespace-nowrap font-medium inline-block hover:bg-black/[0.06] transition-all duration-300 ease-in-out hover:scale-105 transform-gpu"><span
                  class="text-primary font-semibold">&lt;</span>
                Vue Specialist
                <span class="text-primary font-semibold">/&gt;</span>
              </span>
              crafting exceptional digital experiences with Vue 3 and Nuxt 3.
              Full-stack developer with expertise in modern JavaScript frameworks and UI/UX implementation.
            </p>
          </div>
        </div>

        <div class="md:w-1/2 flex justify-center order-1 md:order-2">
          <div class="relative group">
            <div class="relative z-10 overflow-hidden profile-container opacity-0 animate-fade-in-scale delay-600">
              <img src="/images/profile.png" alt="Christian Chiavelli - Developer"
                class="object-cover w-full max-w-[280px] md:max-w-md mix-blend-multiply scale-x-[-1] transition-transform duration-500 ease-out group-hover:scale-[1.03] group-hover:scale-x-[-1.03]" />
            </div>
          </div>
        </div>
      </div>      <div class="container max-w-7xl mx-auto relative">
        <div
          class="absolute bottom-12 md:bottom-8 right-0 hidden sm:flex flex-col items-center opacity-0 animate-fade-in delay-1000 translate-y-28">
          <div class="[writing-mode:vertical-rl] text-xs font-semibold text-tertiary tracking-wider mb-4">SCROLL DOWN
          </div>
          <div class="flex justify-center">
            <svg width="20" height="60" viewBox="0 0 20 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 1L10 59M10 59L19 50" stroke="black" stroke-width="1.8" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </div>
        </div>

        <!-- Mobile scroll indicator -->
        <div class="flex justify-center sm:hidden mt-8 opacity-0 animate-fade-in delay-1000">
          <div class="flex flex-col items-center">
            <div class="text-xs font-semibold text-tertiary tracking-wider mb-2">SCROLL DOWN</div>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1L8 23M8 23L15 16" stroke="black" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
