export const useResponsive = () => {
  const isMobile = ref(false);
  const isTablet = ref(false);
  const isDesktop = ref(false);

  // Breakpoints
  const MOBILE_BREAKPOINT = 768;
  const TABLET_BREAKPOINT = 1024;

  // Atualiza os estados baseados na largura da janela
  const updateViewportState = () => {
    if (process.client) {
      const width = window.innerWidth;
      isMobile.value = width < MOBILE_BREAKPOINT;
      isTablet.value = width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT;
      isDesktop.value = width >= TABLET_BREAKPOINT;
    }
  };

  // Inicializa evento de resize apenas no cliente
  onMounted(() => {
    updateViewportState();
    window.addEventListener("resize", updateViewportState);
  });

  // Remove o evento ao desmontar o componente
  onUnmounted(() => {
    if (process.client) {
      window.removeEventListener("resize", updateViewportState);
    }
  });

  return {
    isMobile,
    isTablet,
    isDesktop,
    MOBILE_BREAKPOINT,
    TABLET_BREAKPOINT,
  };
};
