export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  generate: {
    fallback: true,
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: '%s' + ' - Campus INSA CVL',
    title: 'CHARGEMENT...',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'fr_FR',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://raw.githubusercontent.com/Campus-INSA-CVL/campus-website/master/static/icon.png?token=AKZLUYA3V5QXSSQYTXWCOLC7ACPPW',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Campus INSA CVL',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },

      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content:
          'https://raw.githubusercontent.com/Campus-INSA-CVL/campus-website/master/static/icon.png?token=AKZLUYA3V5QXSSQYTXWCOLC7ACPPW',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#EF1D13',
    height: '4px',
    throttle: 0,
  },
  /*
   ** Customize the loading indicator color
   */
  loadingIndicator: {
    name: '~/loading-indicator.html',
    color: 'white',
    background: '#EF1D13',
  },
  /**
   * Customize the page transition
   */
  pageTransition: {
    name: 'page',
    mode: 'out-in',
  },
  /**
   * Customize the layout transition
   */
  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: [
    '~/components/',
    { path: '~/components/shell/', prefix: 'shell' },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    'nuxt-webfontloader',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: false,
    icons: {
      iconfont: 'mdiSvg',
    },
    theme: {
      options: {
        customProperties: true,
      },
      dark: false,
      themes: {
        light: {
          primary: '#EF1D13',
          elusColor: '#EEAB00',
          culturelColor: '#80BA27',
          sportColor: '#772056',
          galaColor: '#0096AA',
          solidaritesColor: '#ED6C26',
          techniquesColor: '#B4B2B1',
          cafetColor: '#78e08f',
          partenariatsColor: '#38ada9',
          shopColor: '#079992',
          alumniColor: '#a55eea',
          documentsColor: '#eb3b5a',
          elevesColor: '#a55eea',
          tutorinsaColor: '#4c98d2',
        },
        dark: {
          primary: '#EF1D13',
          elusColor: '#EEAB00',
          culturelColor: '#80BA27',
          sportColor: '#772056',
          galaColor: '#0096AA',
          solidaritesColor: '#ED6C26',
          techniquesColor: '#B4B2B1',
          cafetColor: '#78e08f',
          partenariatsColor: '#38ada9',
          shopColor: '#079992',
          alumniColor: '#a55eea',
          documentsColor: '#eb3b5a',
          elevesColor: '#a55eea',
          tutorinsaColor: '#4c98d2',
        },
      },
    },
  },
  /*
   ** Webfontloader module configuration
   ** https://github.com/Developmint/nuxt-webfontloader
   */
  webfontloader: {
    google: {
      families: ['Roboto:100,300,400,500,700,900'],
    },
  },
  /*
   ** PWA module configuration
   ** https://github.com/nuxt-community/pwa-module
   */
  pwa: {
    manifest: {
      name: 'Campus INSA Centre-Val de Loire',
      short_name: 'Campus INSA CVL',
      orientation: 'portrait',
      display: 'standalone',
      lang: 'fr',
      description: "Website du campus de l'INSA Centre-Val de Loire",
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
