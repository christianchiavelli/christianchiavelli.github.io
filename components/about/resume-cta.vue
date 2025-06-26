<template>
  <div class="py-16 bg-gray-50">
    <div class="container max-w-3xl mx-auto px-6 lg:px-8 text-center">
      <h2 class="heading-2 mb-6">
        Want a deeper dive?
      </h2>
      <p class="body-large text-secondary leading-relaxed max-w-2xl mx-auto mb-10">
        Explore my detailed resume for a comprehensive overview of my skills, experience, and impactful projects.
      </p>
      <div class="mt-10">
        <a href="/resume/christian-chiavelli.pdf" download="christian-chiavelli.pdf"
          class="inline-block bg-primary text-white font-semibold font-body px-6 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50 group">
          <span class="flex items-center justify-center">
            <span>Download My Resume</span>
            <span class="text-sm opacity-75 ml-1.5">(PDF)</span>
            <Icon icon="mdi:download" class="ml-2 text-xl text-white transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" />
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>
