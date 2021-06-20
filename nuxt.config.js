export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Jéssica Fernandes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://google-fonts.nuxtjs.org/options
    '@nuxtjs/google-fonts',
  ],

  // Google Fonts: https://google-fonts.nuxtjs.org/
  googleFonts: {
    families: {
      Roboto: true,
      'Courier Prime': true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyAaLM2ouihUtO70itQhquX5er0DU9Z-WVA',
          authDomain: 'portfolio-jazz.firebaseapp.com',
          projectId: 'portfolio-jazz',
          storageBucket: 'portfolio-jazz.appspot.com',
          messagingSenderId: '1067913269806',
          appId: '1:1067913269806:web:8e4b1dd43f16748b3d05bf',
          measurementId: 'G-R7SDNM3Q0X',
        },
        services: {
          auth: {
            persistence: 'local',
            initialize: {
              onAuthStateChangedMutation: 'user/setUser',
              onAuthStateChangedAction: 'user/changeUser',
              subscribeManually: false,
            },
            ssr: false,
          },
          firestore: true,
          analytics: true,
        },
      },
    ],
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
