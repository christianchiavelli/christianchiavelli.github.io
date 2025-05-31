import type { Config } from "tailwindcss";
import tailwindConfig from "./tailwind/config";

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
      ...tailwindConfig.theme.extend,
    },
  },
  plugins: [...tailwindConfig.plugins],
};
