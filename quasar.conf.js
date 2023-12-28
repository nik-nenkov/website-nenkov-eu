module.exports = function (/* ctx */) {
  return {
    // Quasar looks for these configurations for its CLI and related tools
    boot: [
      'i18n',
      // 'axios',
    ],

    css: [
      'src/main.scss',
    'src/quasar-variables.scss'],

    extras: [
      // 'ionicons-v4',
      // 'mdi-v5',
      // 'fontawesome-v5',
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!
      // 'material-icons', // optional, you are not bound to it
      // 'material-icons-outlined',
      // 'material-icons-round',
      // 'material-icons-sharp',
    ],

    framework: {
      // iconSet: 'material-icons',
      // lang: 'en-us', // Quasar language pack
      // All Quasar components
      components: 'all',
      // directives: 'all',
      // Quasar plugins
      plugins: [
        // 'Notify',
        // 'Loading',
        // ...
      ],
    },

    build: {
      // vueRouterMode: 'hash', // available values: 'hash', 'history'
      // other build options...
    },

    devServer: {
      // dev server options...
    },

    // other global options...
  }
}
