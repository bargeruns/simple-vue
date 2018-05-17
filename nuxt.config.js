require('dotenv').config();
const client = require('./plugins/contentful');

module.exports = {
  /*
  ** Headers of the page
  */
  env: {
    DISQUS_SN: process.env.NODE_ENV === 'develop' ? process.env.DISQUS_SANDBOX_SHORTNAME : process.env.DISQUS_SHORTNAME
  },

  head: {
    title: 'simple-vue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tips and Tricks for VueJS Developers' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/bulma.min.css' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css' },
      { rel: 'stylesheet', href: '/css/solarized-dark.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  plugins: [
    '~/plugins/contentful.js',
    '~/plugins/directives.js',
    '~/plugins/disqus.js'
  ],

  modules: ['@nuxtjs/dotenv', '@nuxtjs/markdownit'],
  

  components: ['./components/AppBio.vue'],

  markdownit: {
    injected: true
  },

  mode: 'spa',

  generate: {
    routes() {
      return Promise.all([client.getEntries({ 'content_type': 'post' }), client.getEntries({ 'content_type': 'page' })])
        .then(results => {
          const entries = [ ...results[0].items, ...results[1].items ];

          return entries.map(entry => { return { route: entry.fields.slug, payload: entry } });
        }) ;
    }
  }
}
