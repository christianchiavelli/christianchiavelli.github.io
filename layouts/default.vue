<template>
  <div class="min-h-screen bg-white antialiased">
    <!-- Header -->
    <LayoutHeader />

    <!-- Conteúdo principal -->
    <main class="w-full">
      <slot /> 
    </main>

    <!-- Footer -->
    <LayoutFooter />
  </div>
</template>

<style>
:root {
  /* Otimizações para renderização de texto */
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-size-adjust: 100%;
}

body {
  font-family: var(--font-body);
  font-size: var(--fs-base);
  font-weight: var(--fw-regular);
  line-height: var(--lh-normal);
  color: var(--text-secondary);
  letter-spacing: var(--ls-normal);
}

/* Transições de página */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>