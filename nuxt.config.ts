// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  app: {
    head: {
      title: 'REDOIT! habit tracker',
      meta: [
        { name: 'description', content: 'My amazing site.' }
      ],
    }
  },
  css: [
    '~/assets/styles.css'
  ],
  modules: [
    'nuxt-windicss',
    'nuxt-icon',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700],
    }
  }
})
