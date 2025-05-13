<script setup>
const fullTitleLine1 = "Creative coder";
const fullTitleLine2 = "& developer.";
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
  <section
    class="w-full flex items-center relative overflow-hidden bg-gray-50 py-28 md:py-56 opacity-0 animate-fade-in-slow">
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      <div class="w-[clamp(220px,40vw,500px)] h-[clamp(220px,40vw,500px)] bg-white rounded-full"></div>
    </div>
    <div class="px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 container max-w-7xl mx-auto relative z-10">
        <div class="flex flex-col justify-center pr-4">
          <h1
            class="font-heading text-5xl font-bold leading-tight tracking-tight text-primary min-h-[1.5em] opacity-0 animate-fade-in-up delay-200">
            <span class="typing-line">{{ displayedTitleLine1 }}</span><br>
            <span class="typing-line">{{ displayedTitleLine2 }}</span>
          </h1>

          <div class="mt-6 mb-12 opacity-0 animate-fade-in-up delay-400">
            <p class="text-base leading-relaxed text-secondary max-w-[540px]">
              Hi! I'm Christian.
              <span
                class="font-code bg-black/[0.03] px-3 py-1 rounded text-primary font-medium tracking-wide whitespace-nowrap inline-block transition-all duration-300 hover:bg-black/[0.06] hover:-translate-y-[1px]"><span
                  class="text-primary font-semibold">&lt;</span>
                Digital Designer
                <span class="text-primary font-semibold">/&gt;</span>
              </span>
              with a passion for impactful visual experiences and elegant interfaces.
              Vue.js specialist based in Bauru, Brazil.
            </p>
          </div>

          <div class="opacity-0 animate-fade-in-up delay-600">
            <NuxtLink to="/works"
              class="inline-block relative transition-opacity duration-300 hover:opacity-90 h-[72px] group">
              <div class="relative flex items-center">
                <div
                  class="w-[72px] h-[72px] bg-gray-200 rounded-full absolute left-0 -z-10 transition-transform duration-300 ease-out group-hover:scale-110">
                </div>

                <div class="flex items-center pl-6">
                  <span class="font-body text-base font-semibold leading-tight tracking-wide">SEE MY WORKS</span>

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

          <div class="mt-16 flex items-center space-x-2 opacity-0 animate-fade-in-up delay-800">
            <a href="https://github.com/christianchiavelli" target="_blank" rel="noopener noreferrer"
              class="text-sm font-medium text-tertiary transition-colors duration-300 hover:text-primary font-body">
              GitHub
            </a>
            <span class="text-gray-400">/</span>
            <a href="https://www.linkedin.com/in/christianchiavelli/" target="_blank" rel="noopener noreferrer"
              class="text-sm font-medium text-tertiary transition-colors duration-300 hover:text-primary font-body">
              LinkedIn
            </a>
            <span class="text-gray-400">/</span>
            <a href="https://www.instagram.com/christian.chiavelli/" target="_blank" rel="noopener noreferrer"
              class="text-sm font-medium text-tertiary transition-colors duration-300 hover:text-primary font-body">
              Instagram
            </a>
            <span class="text-gray-400">/</span>
            <a href="mailto:chiavellidev@gmail.com"
              class="text-sm font-medium text-tertiary transition-colors duration-300 hover:text-primary font-body">
              chiavellidev@gmail.com
            </a>
          </div>
        </div>

        <div class="relative flex items-center justify-center opacity-0 animate-fade-in delay-500 group">
          <div class="absolute w-full h-full z-10">
            <div class="relative w-full h-full">
              <div class="absolute w-full h-[5cap] bg-black top-1/2 -translate-y-1/2 rotate-45"></div>
              <div class="absolute w-full h-[5cap] bg-black top-1/2 -translate-y-1/2 -rotate-45"></div>
            </div>
          </div>

          <div class="profile-container z-20 opacity-0 animate-fade-in-scale delay-900 bg-transparent">
            <NuxtImg src="/images/profile.png" alt="Christian Leonardo Chiavelli"
              class="profile-image mix-blend-multiply object-contain h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
          </div>
        </div>
      </div>

      <div class="container max-w-7xl mx-auto relative">
        <div
          class="absolute bottom-0 right-0 flex flex-col items-center opacity-0 animate-fade-in delay-1000 translate-y-28">
          <div class="[writing-mode:vertical-rl] text-xs font-semibold text-tertiary tracking-wider mb-4">
            SCROLL DOWN
          </div>
          <div class="flex justify-center">
            <svg width="20" height="60" viewBox="0 0 20 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 1L10 59M10 59L19 50" stroke="black" stroke-width="1.8" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
