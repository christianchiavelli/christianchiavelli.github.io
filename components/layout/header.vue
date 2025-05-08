<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50/95 backdrop-blur-sm opacity-0 -translate-y-full animate-slide-down">
    <div class="container max-w-7xl mx-auto">
      <nav class="flex justify-end items-center">
        <div class="flex items-center space-x-10 opacity-0 animate-fade-in delay-500">
          <NuxtLink to="/" class="font-heading text-sm font-semibold text-primary tracking-wide relative group" active-class="active-link">
            HOME
            <span class="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-primary/0 -translate-x-1/2 transition-all duration-300 group-hover:w-4 group-hover:bg-primary/50 nav-indicator"></span>
          </NuxtLink>

          <NuxtLink to="/about" class="font-heading text-sm font-semibold text-primary tracking-wide relative group" active-class="active-link">
            ABOUT
            <span class="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-primary/0 -translate-x-1/2 transition-all duration-300 group-hover:w-4 group-hover:bg-primary/50 nav-indicator"></span>
          </NuxtLink>

          <NuxtLink to="/works" class="font-heading text-sm font-semibold text-primary tracking-wide relative group" active-class="active-link">
            WORKS
            <span class="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-primary/0 -translate-x-1/2 transition-all duration-300 group-hover:w-4 group-hover:bg-primary/50 nav-indicator"></span>
          </NuxtLink>

          <NuxtLink to="/contact" class="font-heading text-sm font-semibold text-primary tracking-wide relative group" active-class="active-link">
            CONTACT
            <span class="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-primary/0 -translate-x-1/2 transition-all duration-300 group-hover:w-4 group-hover:bg-primary/50 nav-indicator"></span>
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.active-link .nav-indicator {
  width: 1.25rem;
  height: 0.125rem;
  background-color: rgb(var(--color-primary) / 1);
  transform: translateX(-50%);
}

.active-link {
  position: relative;
  font-weight: 700;
}
</style>