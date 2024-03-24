// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', "@nuxt/image", '@nuxtjs/color-mode'],
  googleFonts: {
    families: {
      Inter: true
    }
  },
  colorMode: {
    classSuffix: ''
  },
  plugins: [
    "~/plugins/preline.client.ts",
  ]
})