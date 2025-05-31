<template>
  <header class="fixed top-0 left-0 right-0 z-50 py-8 px-4 sm:px-6 lg:px-8 transition-all duration-300" :class=" [
      isMenuOpen ? 'bg-transparent' : isScrolled ? 'bg-gray-50/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    ]">
    <div class="container max-w-7xl mx-auto">      <nav class="flex justify-between items-center">
        <!-- Logo/Brand -->
        <NuxtLink to="/" class="text-primary font-bold text-xl z-50 relative hover:opacity-80 transition-opacity duration-300">CC</NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-10 opacity-0 animate-fade-in delay-500">
          <NuxtLink to="/" class="font-heading text-sm font-semibold text-primary tracking-wide relative group"
            active-class="active-link">
            HOME
            <span
              class="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-primary/0 -translate-x-1/2 transition-all duration-300 group-hover:w-4 group-hover:bg-primary/50 nav-indicator"></span>
          </NuxtLink>

          <NuxtLink to="/about" class="font-heading text-sm font-semibold text-primary tracking-wide relative group"
            active-class="active-link">
            ABOUT
            <span
              class="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-primary/0 -translate-x-1/2 transition-all duration-300 group-hover:w-4 group-hover:bg-primary/50 nav-indicator"></span>
          </NuxtLink>

          <NuxtLink to="/works" class="font-heading text-sm font-semibold text-primary tracking-wide relative group"
            active-class="active-link">
            WORKS
            <span
              class="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-primary/0 -translate-x-1/2 transition-all duration-300 group-hover:w-4 group-hover:bg-primary/50 nav-indicator"></span>
          </NuxtLink>

          <NuxtLink to="/contact" class="font-heading text-sm font-semibold text-primary tracking-wide relative group"
            active-class="active-link">
            CONTACT
            <span
              class="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-primary/0 -translate-x-1/2 transition-all duration-300 group-hover:w-4 group-hover:bg-primary/50 nav-indicator"></span>
          </NuxtLink>
        </div> <!-- Mobile Menu Button --> <button
          class="md:hidden flex items-center justify-center w-12 h-12 z-50 relative" @click="toggleMenu"
          aria-label="Toggle menu">
          <div class="w-6 h-6 relative flex items-center justify-center">
            <span class="absolute h-0.5 bg-primary will-change-transform"
              style="transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);" :class="{ 
                'rotate-45 w-6': isMenuOpen,
                '-translate-y-1.5 w-5': !isMenuOpen 
              }"></span>
            <span class="absolute h-0.5 bg-primary will-change-opacity"
              style="transition: all 0.25s cubic-bezier(0.4, 0.0, 0.2, 1);"
              :class="{ 'opacity-0 w-6': isMenuOpen, 'opacity-100 w-4': !isMenuOpen }"></span> <span
              class="absolute h-0.5 bg-primary will-change-transform"
              style="transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);" :class="{ 
                '-rotate-45 w-6': isMenuOpen,
                'translate-y-1.5 w-5': !isMenuOpen 
              }"></span>
          </div>
        </button>
      </nav>
    </div> <!-- Transição circular do menu -->
    <MenuTransition :is-open="isMenuOpen" /> <!-- Mobile Navigation Menu (Fullscreen) -->
    <div class="fixed inset-0 z-40 flex flex-col justify-center overflow-auto bg-white will-change-[transform,opacity]"
      :class="isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'"
      style="transition: opacity 0.45s cubic-bezier(0.4, 0.0, 0.2, 1), visibility 0.45s cubic-bezier(0.4, 0.0, 0.2, 1); backface-visibility: hidden; -webkit-backface-visibility: hidden;">
      <!-- Elementos decorativos de fundo -->
      <MenuBackground :is-visible="isMenuOpen" />

      <!-- Menu principal -->
      <div class="container max-w-7xl mx-auto px-8 py-20 relative z-10 mb-16">
        <div class="flex flex-col space-y-8 items-start">
          <NuxtLink @click="toggleMenu" to="/"
            class="font-heading text-4xl font-bold text-primary tracking-wide relative group transition-all duration-400 hover:pl-4 hover:text-black"
            :class="isMenuOpen ? 'opacity-100 transform translate-x-0 transition-all duration-500 delay-100 ease-out' : 'opacity-0 transform -translate-x-4'"
            active-class="text-black">
            HOME
            <span
              class="absolute w-0 -bottom-2 left-0 h-0.5 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </NuxtLink>
          <NuxtLink @click="toggleMenu" to="/about"
            class="font-heading text-4xl font-bold text-primary tracking-wide relative group transition-all duration-400 hover:pl-4 hover:text-black"
            :class="isMenuOpen ? 'opacity-100 transform translate-x-0 transition-all duration-500 delay-150 ease-out' : 'opacity-0 transform -translate-x-4'"
            active-class="text-black">
            ABOUT
            <span
              class="absolute w-0 -bottom-2 left-0 h-0.5 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </NuxtLink>
          <NuxtLink @click="toggleMenu" to="/works"
            class="font-heading text-4xl font-bold text-primary tracking-wide relative group transition-all duration-400 hover:pl-4 hover:text-black"
            :class="isMenuOpen ? 'opacity-100 transform translate-x-0 transition-all duration-500 delay-200 ease-out' : 'opacity-0 transform -translate-x-4'"
            active-class="text-black">
            WORKS
            <span
              class="absolute w-0 -bottom-2 left-0 h-0.5 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </NuxtLink>
          <NuxtLink @click="toggleMenu" to="/contact"
            class="font-heading text-4xl font-bold text-primary tracking-wide relative group transition-all duration-400 hover:pl-4 hover:text-black"
            :class="isMenuOpen ? 'opacity-100 transform translate-x-0 transition-all duration-500 delay-250 ease-out' : 'opacity-0 transform -translate-x-4'"
            active-class="text-black">
            CONTACT
            <span
              class="absolute w-0 -bottom-2 left-0 h-0.5 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </NuxtLink>
        </div> <!-- Social links -->
        <div class="mt-16 flex flex-wrap items-center gap-x-4"
          :class="isMenuOpen ? 'opacity-100 transform translate-y-0 transition-all duration-500 delay-350 ease-out' : 'opacity-0 transform translate-y-4'">
          <a href="https://github.com/christianchiavelli" target="_blank" rel="noopener noreferrer"
            class="text-lg font-medium text-tertiary transition-colors duration-300 hover:text-primary font-body px-2 first:pl-0">
            GitHub
          </a>
          <span class="text-gray-300 opacity-50">/</span> <a href="https://www.linkedin.com/in/christianchiavelli/"
            target="_blank" rel="noopener noreferrer"
            class="text-lg font-medium text-tertiary transition-colors duration-300 hover:text-primary font-body px-2">
            LinkedIn
          </a>
          <span class="text-gray-300 opacity-50">/</span>
          <a href="mailto:chiavellidev@gmail.com"
            class="text-lg font-medium text-tertiary transition-colors duration-300 hover:text-primary font-body px-2">
            Email
          </a>
        </div> <!-- Tagline de marca -->
        <div class="fixed bottom-8 left-0 right-0 text-center text-xs text-tertiary/50 font-light py-2"
          :class="isMenuOpen ? 'opacity-100 transition-opacity duration-500 delay-450' : 'opacity-0'">
          © {{ new Date().getFullYear() }} Christian Leonardo Chiavelli
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import MenuTransition from '~/components/ui/MenuTransition.vue';
import MenuBackground from '~/components/ui/MenuBackground.vue';

// Usando o composable para gerenciar o estado do menu
const { isMenuOpen, toggleMenu } = useMenuState();
const { isMobile } = useResponsive();
const isScrolled = ref(false);

// Controlar a classe no body para prevenir scroll quando o menu está aberto
const toggleBodyScroll = (shouldLock) => {
  if (process.client) {
    if (shouldLock) {
      document.body.classList.add('overflow-hidden');
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('overflow-hidden');
      document.body.classList.remove('menu-open');
    }
  }
};

// Adicionar efeito de scroll
const handleScroll = () => {
  if (process.client) {
    isScrolled.value = window.scrollY > 50;
  }
};

// Fechar o menu quando mudar para desktop
watch(isMobile, (newValue) => {
  if (!newValue && isMenuOpen.value) {
    toggleMenu();
  }
});

// Inicializar eventos
onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verificar posição inicial
  }
});

// Limpar eventos
onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('scroll', handleScroll);
    
    // Garantir que o menu esteja fechado ao desmontar
    if (isMenuOpen.value) {
      toggleMenu();
    }
  }
});
</script>

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