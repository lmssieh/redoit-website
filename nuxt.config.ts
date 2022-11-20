// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  app: {
    head: {
      title: 'redoit! habit tracker',
      meta: [
        { name: 'description', content: 'redotit! a habit tracker that helps you do more, by doing less.' }
      ],
    }
  },
  css: [
    '~/assets/styles.css'
  ],
  modules: [
    'nuxt-windicss',
    'nuxt-icon',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://redoit.app'
  },
  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700],
    }
  }
})
