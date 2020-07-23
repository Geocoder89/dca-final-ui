/* eslint-disable prettier/prettier */
export default {
  mode: 'universal',
  /*
   ** headers of the page
   */
  head: {
    title: 'DrCallAWay',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: '/app-assets/vendors/css/tables/datatable/datatables.min.css'},
      {rel: 'stylesheet', href: '/app-assets/vendors/css/charts/apexcharts.css'},
      {rel: 'stylesheet', href: '/app-assets/vendors/css/ui/prism.min.css'},
      {rel: 'stylesheet', href: '/app-assets/vendors/css/file-uploaders/dropzone.min.css'},
      {rel: 'stylesheet', href: '/app-assets/vendors/css/tables/datatable/extensions/dataTables.checkboxes.css'},
      {rel: 'stylesheet', href: '/app-assets/css/bootstrap.css'},
      {rel: 'stylesheet', href: '/app-assets/css/bootstrap-extended.css'},
      {rel: 'stylesheet', href: '/app-assets/css/colors.css'},
      {rel: 'stylesheet', href: '/app-assets/css/components.css'},
      {rel: 'stylesheet', href: '/app-assets/css/themes/dark-layout.css'},
      {rel: 'stylesheet', href: '/app-assets/css/themes/semi-dark-layout.css'},
      {rel: 'stylesheet', href: '/app-assets/css/pages/card-analytics.css'},
      {rel: 'stylesheet', href: '/app-assets/css/pages/data-list-view.css'},
      {rel: 'stylesheet', href: '/app-assets/css/core/menu/menu-types/vertical-menu.css'},
      {rel: 'stylesheet', href: '/app-assets/css/core/colors/palette-gradient.css'},
      {rel: 'stylesheet', href: '/app-assets/css/pages/dashboard-ecommerce.css'},
      {rel: 'stylesheet', href: '/app-assets/css/pages/app-user.css'},
      {rel: 'stylesheet', href: '/app-assets/css/pages/authentication.css'},
      {rel: 'stylesheet', href: '/app-assets/vendors/css/vendors.min.css'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600'}
    ],
     // Load all javascript codes here
  script: [
    {type: 'text/javascript', src: '/app-assets/vendors/js/vendors.min.js', defer: true},
    {type: 'text/javascript', src: '/app-assets/vendors/js/forms/select/select2.full.min.js', defer: true},
    {type: 'text/javascript', src: '/app-assets/vendors/js/tables/datatable/datatables.bootstrap4.min.js', defer: true},
    {type: 'text/javascript', src: '/app-assets/vendors/js/ui/prism.min.js', defer: true},
    {type: 'text/javascript', src: '/app-assets/vendors/js/charts/apexcharts.min.js', defer: true},
    {type: 'text/javascript', src: '/app-assets/js/core/app-menu.js', defer: true},
    {type: 'text/javascript', src: '/app-assets/js/core/app.js', defer: true},
    {type: 'text/javascript', src: '/app-assets/js/scripts/cards/card-analytics.js', defer: true},
    {type: 'text/javascript', src: '/app-assets/js/scripts/ui/data-list-view.js', defer: true},
    {type: 'text/javascript', src: '/app-assets/vendors/js/extensions/dropzone.min.js'},
    {type: 'text/javascript', src: 'https://unpkg.com/ionicons@5.1.2/dist/ionicons.js'},
    {type: 'text/javascript', src: '/app-assets/vendors/js/tables/datatable/datatables.min.js'},
    {type: 'text/javascript', src: '/app-assets/vendors/js/tables/datatable/datatables.buttons.min.js'},
    {type: 'text/javascript', src: '/app-assets/vendors/js/tables/datatable/buttons.bootstrap.min.js'},
    {type: 'text/javascript', src: '/app-assets/vendors/js/tables/datatable/dataTables.select.min.js'},
    {type: 'text/javascript', src: '/app-assets/vendors/js/tables/datatable/datatables.checkboxes.min.js'},
    {type: 'text/javascript', src: '/app-assets/js/scripts/components.js'},
  ],
},

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~assets/css/style.css',
  ],




  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
