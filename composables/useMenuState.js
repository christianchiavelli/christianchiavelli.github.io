export const useMenuState = () => {
  const isMenuOpen = useState("menuOpen", () => false);
  const applyBodyClasses = (shouldLock) => {
    if (typeof window === "undefined") return;

    if (shouldLock) {
      document.body.classList.add("menu-open");
      setTimeout(() => {
        document.body.classList.add("overflow-hidden");
      }, 80);
    } else {
      document.body.classList.remove("overflow-hidden");
      setTimeout(() => {
        document.body.classList.remove("menu-open");
      }, 400);
    }
  };

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    applyBodyClasses(isMenuOpen.value);
  };

  return {
    isMenuOpen,
    toggleMenu,
  };
};
