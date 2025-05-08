<script setup>
const workProcessSteps = [
  {
    title: "Discovery",
    description: "When a client comes to a project, I try to get all the information and build enough understanding of the client's business and their goals. This means I need to ask many questions and explore a lot before jumping in.",
    number: "01"
  },
  {
    title: "Plan & Design",
    description: "After I have all the data that I need, I start by drafting the structure, build wireframes and eventually create a technical and design plan for the project based on your needs.",
    number: "02"
  },
  {
    title: "Development",
    description: "After all the planning and design is done, I start my dev work as needed up to deployment or hand off. Then the product is finalized in coordination with you, which often goes hand in hand with testing and feedback, until we have reached a result we are both happy with.",
    number: "03"
  }
];
</script>

<template>
  <section class="w-full py-16 md:py-24">
    <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="heading-2 mb-20 opacity-0 animate-fade-in-slow">How I work.</h2>

      <div class="space-y-24 max-w-5xl">
        <div v-for="(step, index) in workProcessSteps" :key="step.number"
          class="relative opacity-0 animate-fade-in-up group" :class="[
            index === 0 ? 'delay-0' : '',
            index === 1 ? 'delay-300' : '',
            index === 2 ? 'delay-600' : ''
          ]">
          <!-- Redesigned number with sophisticated styling -->
          <div
            class="absolute -top-6 md:-top-9 right-0 md:right-0 flex items-center justify-center opacity-0 animate-fade-in-scale"
            :class="[
              index === 0 ? 'delay-200' : '',
              index === 1 ? 'delay-500' : '',
              index === 2 ? 'delay-800' : ''
            ]">
            <div class="relative">
              <!-- Background shape -->
              <div
                class="absolute -inset-3 bg-gray-100 rounded-full opacity-80 transform scale-0 group-hover:scale-100 transition-transform duration-500">
              </div>
              <!-- Line element -->
              <div
                class="absolute h-[1px] w-16 bg-gray-300 right-full mr-3 top-1/2 -translate-y-1/2 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100">
              </div>
              <!-- Actual number -->
              <span
                class="text-9xl font-bold text-gray-300 relative z-10 transition-all duration-500 group-hover:text-gray-400 group-hover:-translate-y-1">
                {{ step.number }}
              </span>
              <!-- Accent dot -->
              <div
                class="absolute -top-3 -right-3 w-4 h-4 rounded-full bg-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
              </div>
            </div>
          </div>

          <div class="pr-16 md:pr-32 relative">
            <h3 class="heading-4 mb-5">{{ step.title }}</h3>
            <p class="body-large max-w-3xl">
              {{ step.description }}
            </p>
          </div>
        </div>

        <div class="mt-16 opacity-0 animate-fade-in-up delay-900 relative">
          <div class="absolute left-0 top-0 w-1 h-full bg-gray-200 rounded-full"></div>
          <div class="pl-8 relative">
            <h4 class="text-lg font-medium text-gray-400 mb-3">Final Refinement</h4>
            <p
              class="text-base font-light italic text-gray-800 max-w-3xl leading-relaxed border-b pb-6 border-gray-100">
              After the actual design and development, I carry on editing and finalizing the design,
              <span class="font-medium">making sure all typography, colors, alignment and spacing are spot on.</span>
              Only then the product can be published or shared.
            </p>
            <div class="mt-6 flex items-center">
              <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-gray-500">
                  <polygon points="16 2 8 2 2 8 12 22 22 8 16 2" />
                  <path d="M2 8h20" />
                  <path d="M12 2v20" />
                </svg>
              </div>
              <span class="ml-3 text-sm text-gray-500">Attention to detail makes the difference</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
