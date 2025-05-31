// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  css: ["~/assets/fonts/fonts.css"],

  build: {
    transpile: ["@iconify/vue"],
  },

  runtimeConfig: {
    public: {
      formspreeId: process.env.FORMSPREE_ID,
    },
  },

  app: {
    head: {
      title: "Christian Leonardo Chiavelli | Creative Developer & Designer",
      meta: [
        {
          name: "description",
          content:
            "Christian Leonardo Chiavelli is a creative developer and digital designer specializing in impactful visual experiences, elegant interfaces, and modern web solutions. Based in Bauru, Brazil, Christian partners with forward-thinking clients worldwide to craft memorable digital products. Open to new projects and collaborations.",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "robots", content: "index, follow" },
        {
          property: "og:title",
          content:
            "Christian Leonardo Chiavelli | Creative Developer & Designer",
        },
        {
          property: "og:description",
          content:
            "Creative developer and digital designer passionate about building meaningful, visually striking web experiences. Let’s connect and create something remarkable together.",
        },
        { property: "og:image", content: "/images/profile.png" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  image: {
    quality: 100,
    format: ["webp", "jpg"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
  vite: {
    build: {
      minify: "esbuild",
    },
  },
  nitro: {
    compressPublicAssets: true,
    preset: "static",
    prerender: {
      routes: ["/", "/about", "/contact", "/works"],
    },
  },
});
