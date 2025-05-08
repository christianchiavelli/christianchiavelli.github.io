<script setup>
defineProps({
  quoteText: {
    type: String,
    default: 'Good design is actually a lot harder to notice than poor design, in part because good designs fit our needs so well that the design is invisible.'
  },
  quoteAuthor: {
    type: String,
    default: 'Don Norman'
  }
})
</script>

<template>
  <div class="w-full">
    <div
      class="relative w-full h-full min-h-[400px] bg-cover bg-center overflow-hidden flex items-center justify-center"
      :style="{ backgroundImage: `url('/images/quote.jpg')` }">
      <div class="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60 z-10 animate-fade-in-slow"></div>

      <div class="relative z-20 w-full max-w-screen-2xl mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <div class="relative mb-10 animate-scale-in delay-200">
            <svg width="64" height="48" viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg"
              class="mx-auto">
              <path
                d="M24.48 0C29.44 0 33.28 1.92 36 5.76C38.72 9.6 40 14.56 40 20.64C40 32.16 32.64 41.6 21.44 48.96L16.8 44.16C26.08 37.92 31.2 30.88 31.2 23.04H20.16V0H24.48ZM64.48 0C69.44 0 73.28 1.92 76 5.76C78.72 9.6 80 14.56 80 20.64C80 32.16 72.64 41.6 61.44 48.96L56.8 44.16C66.08 37.92 71.2 30.88 71.2 23.04H60.16V0H64.48Z"
                fill="#ffffff" class="animate-glow-pulse" />
            </svg>
            <div class="absolute w-16 h-1 bg-primary bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
          </div>
          <p class="quote-large mb-12 leading-snug max-w-3xl mx-auto animate-text-focus-in delay-400 px-8 text-[2.6rem]">
            {{ quoteText }}
          </p>
          <div
            class="animate-fade-in-up delay-700 inline-block bg-primary/30 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/40">
            <span class="font-heading text-lg font-medium tracking-wide text-white">— {{ quoteAuthor }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
