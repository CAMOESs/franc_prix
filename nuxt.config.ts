// // https://nuxt.com/docs/api/configuration/nuxt-config
// import viteTsconfigPaths from 'vite-tsconfig-paths'

// export default defineNuxtConfig({
//   compatibilityDate: '2025-07-15',
//   devtools: { enabled: true },
//   vite: {
//     plugins: [viteTsconfigPaths()]
//   },
//   // css: ['~/assets/css/main.css'],
//    googleFonts: {
//     families: {
//       'Inter': [300, 400, 500, 600, 700],
//       'Poppins': [300, 400, 500, 600, 700]
//     }
//   },
//   app: {
//     head: {
//       title: 'FRANC-PRIX - Centre Commercial Premium',
//       meta: [
//         { name: 'description', content: 'Explorez nos produits frais et nos boissons rafraîchissantes chez FRANC-PRIX, votre centre commercial premium.' },
//         { name: 'viewport', content: 'width=device-width, initial-scale=1' }
//       ],
//       link: [
//         { rel: 'icon', type: 'image/x-icon', href: '/francprix_logo_.ico' }
//       ]
//     }
//   },
//   modules: [
//     '@nuxtjs/google-fonts',
//     '@nuxtjs/tailwindcss',
//     '@vueuse/nuxt'
//   ]
// })
// https://nuxt.com/docs/api/configuration/nuxt-config
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({

  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },
  ssr: false,

  vite: {
    plugins: [viteTsconfigPaths()]
  },

  modules: [
    '@nuxtjs/tailwindcss', // ⭐ toujours avant google-fonts
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt'
  ],

  googleFonts: {
    families: {
      Inter: [300,400,500,600,700],
      Poppins: [300,400,500,600,700]
    },
    display: 'swap',
    download: true, // ⭐ CORRIGE erreur import.meta
    preload: true
  },

  app: {
    head: {
      title: 'FRANC-PRIX - Centre Commercial Premium',
      meta: [
        {
          name: 'description',
          content: 'Explorez nos produits frais et nos boissons rafraîchissantes chez FRANC-PRIX, votre centre commercial premium.'
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/francprix_logo_.ico' }
      ]
    }
  }

})
