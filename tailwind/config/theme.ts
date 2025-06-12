export const themeConfig = {
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
  },
};
