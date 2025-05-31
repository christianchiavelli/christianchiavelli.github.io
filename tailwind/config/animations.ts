export const animationConfig = {  extend: {
    animation: {
      "fade-in": "fadeIn 0.8s ease-out forwards",
      "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      "fade-in-slow": "fadeIn 1.2s ease-out forwards",
      "fade-in-down": "fadeInDown 0.5s ease-out forwards",
      "fade-in-scale": "fadeInScale 0.6s cubic-bezier(0.33, 1, 0.68, 1) forwards",
      "pulse-slow": "pulseSlow 3s ease-in-out infinite",      "menu-fade-in": "menuFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      "menu-fade-out": "menuFadeOut 0.3s ease-out forwards",
      "scale-circle": "scaleCircle 0.7s cubic-bezier(0.33, 1, 0.68, 1) forwards",
      "menu-circle-in": "menuCircleIn 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      "menu-stagger-in": "menuStaggerIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      "slide-in-right": "slideInRight 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards",
      "slide-in-left": "slideInLeft 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards",
    },
    keyframes: {
      fadeIn: {
        from: { opacity: "0" },
        to: { opacity: "1" },
      },
      fadeInUp: {
        from: { opacity: "0", transform: "translateY(20px)" },
        to: { opacity: "1", transform: "translateY(0)" },
      },
      fadeInDown: {
        from: { opacity: "0", transform: "translateY(-20px)" },
        to: { opacity: "1", transform: "translateY(0)" },
      },
      fadeInScale: {
        from: { opacity: "0", transform: "scale(0.9)" },
        to: { opacity: "1", transform: "scale(1)" },
      },
      pulseSlow: {
        "0%, 100%": { transform: "scale(1)", opacity: "0.5" },
        "50%": { transform: "scale(1.15)", opacity: "0.8" },
      },      menuFadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },      menuFadeOut: {
        "0%": { opacity: "1" },
        "100%": { opacity: "0" },
      },scaleCircle: {
        "0%": { transform: "scale(0.95)", opacity: "0" },
        "30%": { transform: "scale(0.97)", opacity: "0.5" },
        "100%": { transform: "scale(1)", opacity: "1" },
      },
      menuStaggerIn: {
        "0%": { transform: "translateX(-20px)", opacity: "0" },
        "100%": { transform: "translateX(0)", opacity: "1" },
      },slideInRight: {
        "0%": { transform: "translateX(-100%)", opacity: "0" },
        "100%": { transform: "translateX(0)", opacity: "1" },
      },      slideInLeft: {
        "0%": { transform: "translateX(100%)", opacity: "0" },
        "100%": { transform: "translateX(0)", opacity: "1" },
      },
      menuCircleIn: {
        "0%": { transform: "translate(-50%, -50%) scale(0.95)", opacity: "0" },
        "40%": { transform: "translate(-50%, -50%) scale(0.98)", opacity: "0.6" },
        "100%": { transform: "translate(-50%, -50%) scale(1)", opacity: "1" },
      },
    },
    animationDelay: {
      "0": "0ms",
      "100": "100ms",
      "200": "200ms",
      "300": "300ms",
      "400": "400ms",
      "500": "500ms",
      "600": "600ms",
      "700": "700ms",
      "800": "800ms",
      "900": "900ms",
      "1000": "1000ms",
      "1100": "1100ms",
      "1200": "1200ms",
      "1300": "1300ms",
      "1400": "1400ms",
      "1500": "1500ms",
      "1600": "1600ms",
      "1700": "1700ms",
      "1800": "1800ms",
      "1900": "1900ms",
    },
  }
};
