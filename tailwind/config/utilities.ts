import plugin from "tailwindcss/plugin";

export const utilitiesPlugin = plugin(({ addUtilities, theme, e }) => {
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
});
