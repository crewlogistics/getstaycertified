// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  experimental: {
    payloadExtraction: false,
  },
  nitro: {
    preset: 'static',
    prerender: {
      routes: [
        // Nested cert detail pages
        '/certifications/back-office-and-finance/pci-dss-compliance',
        '/certifications/back-office-and-finance/accounting-standards-training',
        '/certifications/back-office-and-finance/financial-auditing-anti-fraud',
        '/certifications/back-office-and-finance/data-protection-cybersecurity',
        '/certifications/environmental-sustainability/leed-certification',
        '/certifications/environmental-sustainability/energy-star',
        '/certifications/environmental-sustainability/iso-14001',
        '/certifications/environmental-sustainability/green-key-global',
        '/certifications/environmental-sustainability/true-zero-waste',
        '/certifications/environmental-sustainability/food-waste-composting',
        '/certifications/fire-life-safety/fire-safety-extinguisher-training',
        '/certifications/fire-life-safety/emergency-evacuation-planning',
        '/certifications/fire-life-safety/first-aid-training',
        '/certifications/fire-life-safety/elevator-escalator',
        '/certifications/fire-life-safety/boiler-pressure-vessel',
        '/certifications/fire-life-safety/workplace-violence-prevention',
        '/certifications/fire-life-safety/fire-suppression-system',
        '/certifications/fitness-spa-wellness/fitness-equipment-safety',
        '/certifications/fitness-spa-wellness/spa-hygiene-infection-control',
        '/certifications/fitness-spa-wellness/pool-hot-tub-water-quality',
        '/certifications/fitness-spa-wellness/sauna-steam-room-maintenance',
        '/certifications/fitness-spa-wellness/first-aid-cpr-aed',
        '/certifications/fitness-spa-wellness/massage-therapy-licensing',
        '/certifications/food-and-beverage/servsafe-haccp-iso-22000',
        '/certifications/food-and-beverage/health-department-kitchen',
        '/certifications/food-and-beverage/allergen-awareness-training',
        '/certifications/food-and-beverage/alcohol-service',
        '/certifications/food-and-beverage/halal-kosher-kitchen',
        '/certifications/food-and-beverage/pest-control',
        '/certifications/front-desk-concierge/customer-service',
        '/certifications/front-desk-concierge/data-privacy-pci-compliance',
        '/certifications/front-desk-concierge/language-proficiency',
        '/certifications/front-desk-concierge/code-of-conduct-anti-trafficking',
        '/certifications/housekeeping/gbac-star',
        '/certifications/housekeeping/issa-cims-gb',
        '/certifications/housekeeping/osha-hazard-communication',
        '/certifications/housekeeping/npma-bed-bug-training',
        '/certifications/hr-security-ops/background-screening',
        '/certifications/hr-security-ops/child-protection-training',
        '/certifications/hr-security-ops/kyc-anti-money-laundering',
        '/certifications/hr-security-ops/security-officer-licensing',
        '/certifications/hr-security-ops/workplace-harassment-prevention',
        '/certifications/hr-security-ops/osha-workplace-safety',
        '/certifications/laundry-and-linen-services/trsa-hygienically-clean',
        '/certifications/laundry-and-linen-services/chemical-handling-safety',
        '/certifications/laundry-and-linen-services/water-energy-efficiency',
        '/certifications/maintenance-and-engineering/state-electrical-license',
        '/certifications/maintenance-and-engineering/epa-section-608-hvac',
        '/certifications/maintenance-and-engineering/epa-ahera-mold-asbestos',
        '/certifications/maintenance-and-engineering/osha-confined-space-ladder',
        '/certifications/maintenance-and-engineering/ashrae-188-legionella',
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
        // Retired WordPress pages (no 1:1 match — redirect to nearest live page)
        '/staycertified-home',
        '/niosh-hygiene-training-blockchain-certificates',
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
        { name: 'robots', content: 'index, follow' },
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
        { property: 'og:image', content: 'https://getstaycertified.com/images/front-desk.webp' },
        { property: 'og:url', content: 'https://getstaycertified.com' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'StayCertified — Verified Environments. Trusted Operations.' },
        {
          name: 'twitter:description',
          content:
            'The certification and compliance layer behind every qualified facility. Blockchain-verified hotel compliance for GSA, FedRooms, and beyond.',
        },
      ],
      link: [
        // SVG first for browsers that support it; .ico (16/32/48/64) is the fallback.
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'canonical', href: 'https://getstaycertified.com/' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap',
        },
      ],
      script: [
        // Google Analytics 4 - G-HSNTD6TEMD.
        // Same property the old staycertified.ai WordPress site reported to, so
        // the domain migration reads as one continuous dataset rather than an
        // old property flatlining beside a new one.
        //
        // No manual page_view calls on route change: Nuxt navigates client-side,
        // and GA4 Enhanced Measurement already counts those via browser history
        // events (on by default). Sending them here as well would double-count.
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-HSNTD6TEMD',
          async: true,
        },
        {
          innerHTML:
            "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-HSNTD6TEMD');",
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': 'StayCertified',
            'url': 'https://getstaycertified.com',
            'description': 'The certification and compliance layer behind every qualified facility.',
            'logo': 'https://getstaycertified.com/images/logo-black.svg',
          }),
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            'name': 'StayCertified',
            'url': 'https://getstaycertified.com',
          }),
        },
      ],
    },
  },
})
