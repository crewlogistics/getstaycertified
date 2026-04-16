<script setup lang="ts">
import { getCertBySlug, getCategoryBySlug, categories } from '~/data/certifications'

definePageMeta({ layout: false })

// Special WordPress slugs → data slugs
const specialCertSlugs: Record<string, string> = {
  'gbac-star-blockchain-certificates': 'gbac-star',
  'issa-cims-gb-blockchain-certificates': 'issa-cims-gb',
  'osha-hazard-blockchain-certificates': 'osha-hazard-communication',
  'npma-bed-bug-training-blockain-certifications': 'npma-bed-bug-training',
  'ardhin-3-blockchain-hotel-certificates': 'leed-certification',
  'ashrae-188-legionella-water-safety-plan-blockchain-hotel-certificates': 'ashrae-188-legionella',
  'background-screening-standards-blockchain-hotel-certificates': 'background-screening',
  'certifications-fitness-spa-wellness-blockchain-hotel-certificates': 'massage-therapy-licensing',
  'energy-star-certification-for-hotels-blockchain-hotel-certificates': 'energy-star',
  'epa-ahera-iicrc-mold-and-asbestos-awareness-certification-blockchain-hotel-certificates': 'epa-ahera-mold-asbestos',
  'first-aid-and-training-blockchain-hotel-certificates': 'first-aid-training',
  'fitness-equipment-safety-and-maintenance-blockchain-hotel-certificates': 'fitness-equipment-safety',
  'food-waste-composting-compliance-blockchain-hotel-certificates': 'food-waste-composting',
  'green-key-global-sustainable-tourism-blockchain-hotel-certificates': 'green-key-global',
  'halal-kosher-kitchen-compliance-blockchain-hotel-certificates': 'halal-kosher-kitchen',
  'iso-14001-environmental-management-systems-blockchain-hotel-certificates': 'iso-14001',
  'osha-confined-space-and-ladder-safety-blockchain-hotel-certificates': 'osha-confined-space-ladder',
  'osha-nebosh-iosh-workplace-safety-blockchain-hotel-certificates': 'osha-workplace-safety',
  'pool-and-hot-tub-water-quality-blockchain-hotel-certificates': 'pool-hot-tub-water-quality',
  'servsafe-haccp-laundry-sanitation-compliance-blockchain-hotel-certificates': 'trsa-hygienically-clean',
  'true-zero-waste-certification-blockchain-hotel-certificates': 'true-zero-waste',
  'water-energy-efficiency-programs-blockchain-hotel-certificates': 'water-energy-efficiency',
}

// Category WordPress slugs → internal slugs
const categorySlugs: Record<string, string> = {
  'back-office-and-finance-hotel-blockchain-certificates': 'back-office-and-finance',
  'environmental-sustainability-blockchain-certificates': 'environmental-sustainability',
  'fire-life-safety-blockchain-certificates': 'fire-life-safety',
  'fitness-spa-wellness-blockchain-certificates': 'fitness-spa-wellness',
  'food-and-beverage-blockchain-certificates': 'food-and-beverage',
  'front-desk-concierge-blockchain-certificates': 'front-desk-concierge',
  'housekeeping-blockchain-certificates': 'housekeeping',
  'hr-security-ops-blockchain-certificates': 'hr-security-ops',
  'laundry-and-linen-services-blockchain-certificates': 'laundry-and-linen-services',
  'maintenance-and-engineering-blockchain-certificates': 'maintenance-and-engineering',
  'maintenance-and-engineering-blockchain-hotel-certificates': 'maintenance-and-engineering',
}

// Top-level page redirects
const topLevelPages: Record<string, string> = {
  'the-hotel-blockchain-certification-process': '/the-process',
  'stay-certified-blockchain-certification-features': '/features',
  'staycertified': '/contact',
  'hotel-blockchain-certifications': '/certifications',
}

const route = useRoute()
const fullSlug = (route.params.slug as string[]).join('/')

// --- Determine redirect target ---
let target = ''

if (topLevelPages[fullSlug]) {
  target = topLevelPages[fullSlug]
} else if (categorySlugs[fullSlug]) {
  target = `/certifications/${categorySlugs[fullSlug]}`
} else {
  // Cert page — find the data slug and its category
  let dataSlug: string | undefined

  if (specialCertSlugs[fullSlug]) {
    dataSlug = specialCertSlugs[fullSlug]
  } else if (fullSlug.endsWith('-blockchain-hotel-certificates')) {
    dataSlug = fullSlug.replace(/-blockchain-hotel-certificates$/, '')
  }

  if (dataSlug) {
    const result = getCertBySlug(dataSlug)
    if (result) {
      target = `/certifications/${result.category.slug}/${result.cert.slug}`
    }
  }
}

if (target) {
  await navigateTo(target, { redirectCode: 301 })
}
</script>

<template>
  <div />
</template>
