// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  nitro: {
    preset: 'static',
  },
  css: ['~/assets/css/tailwind.css'],
  app: {
    head: {
      title: 'StayCertified — Verified Environments. Trusted Operations.',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'StayCertified keeps your hotel GSA/FedRooms compliant. Automate certifications, win government contracts, and stay bid-ready — without paperwork stress.',
        },
        { property: 'og:title', content: 'StayCertified — Verified Environments. Trusted Operations.' },
        {
          property: 'og:description',
          content:
            'The certification and compliance layer behind every qualified facility. Blockchain-verified hotel compliance for GSA, FedRooms, and beyond.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/images/front-desk.webp' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap',
        },
      ],
    },
  },
})
