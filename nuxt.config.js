export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'jay-test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },


  css: [
    "~/assets/css/global.css",
    "~/assets/css/fonts.css",

  ],


  plugins: [
    { src: "~/plugins/utils.js" },
  ],

 
  components: true,


  buildModules: [
    "@nuxtjs/moment"
  ],
  moment: {
    timezone: false,
  },

  modules: [
  ],

 
  build: {
  }
}
