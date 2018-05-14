require('dotenv').config();
const client = require('./plugins/contentful');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'simple-vue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tips and Tricks for VueJS Developers' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: '/bulma.min.css' }
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

  plugins: ['./plugins/contentful.js'],
  modules: ['@nuxtjs/dotenv', '@nuxtjs/markdownit'],

  markdownit: {
    injected: true
  },

  generate: {
    routes() {
      return Promise.all([client.getEntries({ 'content_type': 'post' }), client.getEntries({ 'content_type': 'page' })])
        .then(results => {
          console.log(results)
          const entries = [ ...results[0].items, ...results[1].items ];

          return entries.map(entry => { return { route: entry.fields.slug, payload: entry } });
        }) ;
    }
  }
}
