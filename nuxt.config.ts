// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  nitro: {
    preset: 'static',
    prerender: {
      routes: [
        // Category flat URLs
        '/back-office-and-finance-hotel-blockchain-certificates',
        '/environmental-sustainability-blockchain-certificates',
        '/fire-life-safety-blockchain-certificates',
        '/fitness-spa-wellness-blockchain-certificates',
        '/food-and-beverage-blockchain-certificates',
        '/front-desk-concierge-blockchain-certificates',
        '/housekeeping-blockchain-certificates',
        '/hr-security-ops-blockchain-certificates',
        '/laundry-and-linen-services-blockchain-certificates',
        '/maintenance-and-engineering-blockchain-certificates',
        '/maintenance-and-engineering-blockchain-hotel-certificates',
        // Top-level redirects
        '/the-hotel-blockchain-certification-process',
        '/stay-certified-blockchain-certification-features',
        '/staycertified',
        '/hotel-blockchain-certifications',
        // Individual cert flat URLs (non-standard slugs)
        '/ardhin-3-blockchain-hotel-certificates',
        '/ashrae-188-legionella-water-safety-plan-blockchain-hotel-certificates',
        '/background-screening-standards-blockchain-hotel-certificates',
        '/certifications-fitness-spa-wellness-blockchain-hotel-certificates',
        '/energy-star-certification-for-hotels-blockchain-hotel-certificates',
        '/epa-ahera-iicrc-mold-and-asbestos-awareness-certification-blockchain-hotel-certificates',
        '/first-aid-and-training-blockchain-hotel-certificates',
        '/fitness-equipment-safety-and-maintenance-blockchain-hotel-certificates',
        '/food-waste-composting-compliance-blockchain-hotel-certificates',
        '/green-key-global-sustainable-tourism-blockchain-hotel-certificates',
        '/halal-kosher-kitchen-compliance-blockchain-hotel-certificates',
        '/iso-14001-environmental-management-systems-blockchain-hotel-certificates',
        '/osha-confined-space-and-ladder-safety-blockchain-hotel-certificates',
        '/osha-nebosh-iosh-workplace-safety-blockchain-hotel-certificates',
        '/pool-and-hot-tub-water-quality-blockchain-hotel-certificates',
        '/servsafe-haccp-laundry-sanitation-compliance-blockchain-hotel-certificates',
        '/true-zero-waste-certification-blockchain-hotel-certificates',
        '/water-energy-efficiency-programs-blockchain-hotel-certificates',
        // Special cert slugs
        '/gbac-star-blockchain-certificates',
        '/issa-cims-gb-blockchain-certificates',
        '/osha-hazard-blockchain-certificates',
        '/npma-bed-bug-training-blockain-certifications',
      ],
    },
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
