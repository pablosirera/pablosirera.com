import META_INFO from './constants/meta.js'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.APP_TITLE,
    meta: META_INFO,
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Cookie',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/main.css'],
  components: true,
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/global.js', '~/plugins/directives.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.GOOGLE_ANALYTICS_ID,
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    'nuxt-i18n',
    '@nuxtjs/color-mode',
    '@nuxtjs/svg',
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas'],
          },
        ],
      },
    ],
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    markdown: {
      prism: {
        theme: '~/assets/prism-themes/prism-material-oceanic.css',
      },
    },
  },
  /*
   ** env variables
   */
  env: {
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    APP_TITLE: process.env.APP_TITLE,
    APP_DESC: process.env.APP_DESC,
  },
  /*
   ** color mode config
   */
  colorMode: {
    preference: 'light',
  },
  /*
   ** nuxt-i18n config
   */
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
      },
      {
        code: 'es',
        iso: 'es-ES',
        file: 'es.json',
      },
    ],
    seo: true,
    lazy: true,
    defaultLocale: 'es',
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: 'es',
      dateTimeFormats: {
        es: {
          short: {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          },
        },
        en: {
          short: {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          },
        },
      },
    },
  },
  /*
   ** Server configuration
   */
  // server: {
  //   port: 3030,
  //   host: '0.0.0.0',
  // },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
