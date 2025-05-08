import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default <Config>{
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        cascadia: ["Cascadia Mono", "monospace"],
        code: ["var(--font-code)"],
      },
      fontSize: {
        xs: "var(--fs-xs)",
        sm: "var(--fs-sm)",
        base: "var(--fs-base)",
        md: "var(--fs-md)",
        lg: "var(--fs-lg)",
        xl: "var(--fs-xl)",
        "2xl": "var(--fs-2xl)",
        "3xl": "var(--fs-3xl)",
        "4xl": "var(--fs-4xl)",
        "5xl": "var(--fs-5xl)",
      },
      fontWeight: {
        light: "var(--fw-light)",
        normal: "var(--fw-regular)",
        medium: "var(--fw-medium)",
        semibold: "var(--fw-semibold)",
        bold: "var(--fw-bold)",
        extrabold: "var(--fw-extrabold)",
        black: "var(--fw-black)",
      },
      colors: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        tertiary: "var(--text-tertiary)",
        placeholder: "var(--text-placeholder)",
        disabled: "var(--text-disabled)",
        link: "var(--text-link)",
        "link-hover": "var(--text-link-hover)",
        error: "var(--text-error)",
        success: "var(--text-success)",
        warning: "var(--text-warning)",
        "on-brand": "var(--text-on-brand)",
      },
      lineHeight: {
        tight: "var(--lh-tight)",
        normal: "var(--lh-normal)",
        relaxed: "var(--lh-relaxed)",
      },
      letterSpacing: {
        tight: "var(--ls-tight)",
        normal: "var(--ls-normal)",
        wide: "var(--ls-wide)",
      },
      transitionTimingFunction: {
        "cubic-bezier": "cubic-bezier(0.23, 1, 0.32, 1)",
      },
      transitionDuration: {
        "800": "800ms",
      },
      scale: {
        "120": "1.2",
      },
      animation: {
        float: "float 12s ease-in-out infinite",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in-slow": "fadeIn 1.2s ease-out forwards",
        "fade-in-scale":
          "fadeInScale 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "slide-down": "slideDown 0.6s ease-out forwards",
        "scroll-x": "scrollX 30s linear infinite",
        "circle-rotate": "circleRotate 120s linear infinite",
        "circle-pulse": "circlePulse 15s ease-in-out infinite",
        "wave-pulse": "wavePulse 8s ease-in-out infinite",
        "arrow-bounce": "arrowBounce 1.5s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "scale-in": "scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "bounce-in": "bounceIn 1s cubic-bezier(0.19, 1, 0.22, 1) forwards",
        "slide-in-right": "slideInRight 0.7s ease-out forwards",
        "slide-in-left": "slideInLeft 0.7s ease-out forwards",
        "rotate-slow": "rotateAround 25s linear infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite",
        "text-focus-in":
          "textFocusIn 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards",
        "rise-in": "riseIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "cursor-blink": "cursorBlink 1s step-end infinite",
        "pop-in": "popIn 0.5s cubic-bezier(0.26, 1.44, 0.46, 0.93) forwards",
        "morph-bg": "morphBackground 10s ease-in-out infinite",
        "slide-up-fade": "slideUpFade 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "float-shadow": "floatWithShadow 6s ease-in-out infinite",
        "pulse-ring": "pulseRing 1.5s cubic-bezier(0.24, 0, 0.38, 1) infinite",
        "perspective-tilt": "perspectiveTilt 7s ease-in-out infinite",
        "typing-cursor": "typingCursor 1.5s steps(1) infinite",
        "fade-in-blur": "fadeInBlur 1s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "rotate-scale": "rotateScale 20s linear infinite",
        "hover-float": "hoverFloat 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(45deg)" },
          "50%": { transform: "translateY(-10px) rotate(45deg)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInScale: {
          from: { opacity: "0", transform: "scale(0.92)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        slideDown: {
          from: { opacity: "0", transform: "translateY(-100%)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scrollX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        circleRotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        circlePulse: {
          "0%, 100%": { strokeWidth: "100" },
          "50%": { strokeWidth: "120" },
        },
        wavePulse: {
          "0%, 100%": { strokeWidth: "2" },
          "50%": { strokeWidth: "3" },
        },
        arrowBounce: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(5px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(255, 255, 255, 0.2)" },
          "50%": { boxShadow: "0 0 20px rgba(255, 255, 255, 0.6)" },
        },
        scaleIn: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "80%": { transform: "scale(1.1)", opacity: "0.8" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        bounceIn: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "60%": { transform: "translateY(-10px)", opacity: "0.8" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        rotateAround: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        textFocusIn: {
          "0%": { filter: "blur(12px)", opacity: "0" },
          "100%": { filter: "blur(0px)", opacity: "1" },
        },
        riseIn: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "cursor-blink": {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        popIn: {
          "0%": { transform: "scale(0.6)", opacity: "0" },
          "60%": { transform: "scale(1.1)", opacity: "0.8" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        morphBackground: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "25%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
          "50%": { borderRadius: "50% 60% 30% 40%/30% 40% 70% 60%" },
          "75%": { borderRadius: "60% 40% 50% 30%/60% 40% 60% 50%" },
        },
        slideUpFade: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        floatWithShadow: {
          "0%, 100%": { 
            transform: "translateY(0)",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
          },
          "50%": { 
            transform: "translateY(-15px)",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
          },
        },
        pulseRing: {
          "0%": { transform: "scale(0.8)", opacity: "0.5" },
          "50%": { transform: "scale(1.1)", opacity: "0.3" },
          "100%": { transform: "scale(0.8)", opacity: "0.5" },
        },
        perspectiveTilt: {
          "0%, 100%": { transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)" },
          "25%": { transform: "perspective(1000px) rotateX(2deg) rotateY(-2deg)" },
          "50%": { transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)" },
          "75%": { transform: "perspective(1000px) rotateX(-2deg) rotateY(2deg)" },
        },
        typingCursor: {
          "0%, 100%": { borderRightColor: "transparent" },
          "50%": { borderRightColor: "currentColor" },
        },
        fadeInBlur: {
          "0%": { filter: "blur(20px)", opacity: "0" },
          "100%": { filter: "blur(0)", opacity: "1" },
        },
        rotateScale: {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(0.95)" },
          "100%": { transform: "rotate(360deg) scale(1)" },
        },
        hoverFloat: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-8px) scale(1.03)" },
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
    },
  },
  plugins: [
    plugin(({ addUtilities, theme, e }) => {
      const delayUtilities = Object.entries(
        theme("animationDelay") as Record<string, string>
      ).map(([key, value]) => {
        return {
          [`.${e(`delay-${key}`)}`]: {
            "animation-delay": value,
          },
        };
      });
      addUtilities(delayUtilities);
    }),
  ],
};
