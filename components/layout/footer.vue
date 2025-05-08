<template>
  <footer class="py-8 px-4 sm:px-6 lg:px-8 opacity-0 animate-fade-in">
    <div class="container max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <div class="mb-4 md:mb-0">
        <p class="text-xs font-medium text-tertiary tracking-wide">
          © {{ new Date().getFullYear() }} Christian Leonardo Chiavelli. All rights reserved.
        </p>
      </div>

      <div class="flex space-x-6">
        <a href="mailto:chiavellidev@gmail.com" class="text-sm font-medium text-tertiary transition-colors duration-300 hover:text-primary font-body">
          chiavellidev@gmail.com
        </a>
        <a href="https://github.com/christianchiavelli" target="_blank" rel="noopener noreferrer"
          class="text-sm font-medium text-tertiary transition-colors duration-300 hover:text-primary font-body">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/christianchiavelli/" target="_blank" rel="noopener noreferrer"
          class="text-sm font-medium text-tertiary transition-colors duration-300 hover:text-primary font-body">
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
</template>