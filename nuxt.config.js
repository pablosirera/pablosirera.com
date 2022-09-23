import { COURSES } from './constants/courses.js'
import META_INFO from './constants/meta.js'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.APP_TITLE,
    meta: META_INFO,
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '~/assets/img/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '~/assets/img/favicon-16x16.png',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Cookie',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '~/assets/img/apple-touch-icon.png',
      },
    ],
  },
  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const dynamicRoutes = await $content('blog').only(['slug']).fetch()
      const contentRoutes = dynamicRoutes.map(myRoute =>
        myRoute.slug === '/index' ? '/' : `/blog/${myRoute.slug}`,
      )
      const coursesRoutes = Object.keys(COURSES).map(key => COURSES[key].route)
      return [contentRoutes, coursesRoutes].flat()
    },
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
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/feed',
    'nuxt-i18n',
    '@nuxtjs/color-mode',
    '@nuxtjs/svg',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/pwa',
    // Doc: https://axios.nuxtjs.org/
    '@nuxtjs/axios',
    '@/modules/sitemapRouteGenerator',
    // Doc: https://www.npmjs.com/package/nuxt-youtube-subscribe-module
    [
      'nuxt-youtube-subscribe-module',
      {
        tag: 'YoutubeSubscribeButton',
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
   ** Sitemap Configuration
   */
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://pablosirera.com',
    cacheTime: 1000 * 60 * 15,
    exclude: ['/social'],
  },
  /*
   ** RSS Feed configuration
   */
  feed: [
    {
      path: '/feed.xml',
      type: 'rss2',
      async create(feed) {
        const baseUrlArticles = 'https://pablosirera.com/blog'
        const { $content } = require('@nuxt/content')

        feed.options = {
          title: `Blog | ${process.env.APP_TITLE}`,
          description: process.env.APP_DESC,
          link: baseUrlArticles,
        }
        const articles = await $content('blog').sortBy('date', 'desc').fetch()

        articles.forEach(article => {
          const url = `${baseUrlArticles}/${article.slug}`

          feed.addItem({
            title: article.title,
            id: url,
            link: url,
            date: new Date(article.date),
            description: article.description,
            content: article.summary,
            author: 'Pablo Sirera',
          })
        })
      },
    },
  ],
  /*
   ** env variables
   */
  env: {
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    APP_TITLE: process.env.APP_TITLE,
    APP_DESC: process.env.APP_DESC,
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
  },
  /*
   ** color mode config
   */
  colorMode: {
    preference: 'light',
    fallback: 'dark',
    classSuffix: '',
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
    strategy: 'no_prefix',
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
