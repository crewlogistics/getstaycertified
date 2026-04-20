<script setup lang="ts">
import { getCategoryBySlug } from '~/data/certifications'

definePageMeta({ layout: 'default' })

const categoryImages: Record<string, string> = {
  'back-office-and-finance': '/images/features-front-desk.webp',
  'environmental-sustainability': '/images/cat-environmental.webp',
  'fire-life-safety': '/images/cat-fire-life-safety.webp',
  'fitness-spa-wellness': '/images/cat-fitness-spa.webp',
  'food-and-beverage': '/images/cat-food-beverage.webp',
  'front-desk-concierge': '/images/cat-front-desk.webp',
  'housekeeping': '/images/cat-housekeeping.webp',
  'hr-security-ops': '/images/cat-hr-security.webp',
  'laundry-and-linen-services': '/images/cat-laundry.webp',
  'maintenance-and-engineering': '/images/cat-maintenance.webp',
}

// Data slug → WordPress URL slug (for "Read More" links)
const specialCertSlugs: Record<string, string> = {
  'gbac-star': 'gbac-star-blockchain-certificates',
  'issa-cims-gb': 'issa-cims-gb-blockchain-certificates',
  'osha-hazard-communication': 'osha-hazard-blockchain-certificates',
  'npma-bed-bug-training': 'npma-bed-bug-training-blockain-certifications',
  'leed-certification': 'ardhin-3-blockchain-hotel-certificates',
  'ashrae-188-legionella': 'ashrae-188-legionella-water-safety-plan-blockchain-hotel-certificates',
  'background-screening': 'background-screening-standards-blockchain-hotel-certificates',
  'massage-therapy-licensing': 'certifications-fitness-spa-wellness-blockchain-hotel-certificates',
  'energy-star': 'energy-star-certification-for-hotels-blockchain-hotel-certificates',
  'epa-ahera-mold-asbestos': 'epa-ahera-iicrc-mold-and-asbestos-awareness-certification-blockchain-hotel-certificates',
  'first-aid-training': 'first-aid-and-training-blockchain-hotel-certificates',
  'fitness-equipment-safety': 'fitness-equipment-safety-and-maintenance-blockchain-hotel-certificates',
  'food-waste-composting': 'food-waste-composting-compliance-blockchain-hotel-certificates',
  'green-key-global': 'green-key-global-sustainable-tourism-blockchain-hotel-certificates',
  'halal-kosher-kitchen': 'halal-kosher-kitchen-compliance-blockchain-hotel-certificates',
  'iso-14001': 'iso-14001-environmental-management-systems-blockchain-hotel-certificates',
  'osha-confined-space-ladder': 'osha-confined-space-and-ladder-safety-blockchain-hotel-certificates',
  'osha-workplace-safety': 'osha-nebosh-iosh-workplace-safety-blockchain-hotel-certificates',
  'pool-hot-tub-water-quality': 'pool-and-hot-tub-water-quality-blockchain-hotel-certificates',
  'trsa-hygienically-clean': 'servsafe-haccp-laundry-sanitation-compliance-blockchain-hotel-certificates',
  'true-zero-waste': 'true-zero-waste-certification-blockchain-hotel-certificates',
  'water-energy-efficiency': 'water-energy-efficiency-programs-blockchain-hotel-certificates',
}

function getCertWpSlug(dataSlug: string): string {
  return specialCertSlugs[dataSlug] || `${dataSlug}-blockchain-hotel-certificates`
}

const route = useRoute()
const slug = route.params.category as string
const category = getCategoryBySlug(slug)

if (!category) {
  throw createError({ statusCode: 404, message: 'Category not found' })
}

const heroImage = categoryImages[slug] || '/images/certifications-hero.webp'

const pageTitle = `${category.title} Blockchain Certifications - StayCertified`
const pageDescription = category.description[0] || `${category.title} hotel blockchain certifications managed by StayCertified.`

useHead({
  title: pageTitle,
  meta: [
    { name: 'description', content: pageDescription },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:url', content: `https://getstaycertified.com${route.path}` },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://getstaycertified.com/images/front-desk.webp' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: pageDescription },
  ],
  link: [
    { rel: 'canonical', href: `https://getstaycertified.com${route.path}` },
  ],
})
</script>

<template>
  <div v-if="category">
    <!-- HERO -->
    <section class="bg-ink text-white">
      <div class="container-x pt-[140px] md:pt-[220px] pb-[80px] md:pb-[120px] text-center">
        <h1 class="font-medium leading-[1.05] tracking-tight text-[56px] sm:text-[72px] md:text-[90px] lg:text-[110px]">
          {{ category.heroTagline }}
        </h1>
      </div>
    </section>

    <!-- FULL-BLEED PHOTO -->
    <section class="bg-white">
      <img
        :src="heroImage"
        :alt="category.title + ' certifications'"
        class="hero-img"
      />
    </section>

    <!-- INTRO -->
    <section class="bg-mist">
      <div class="container-x py-[80px] md:py-[140px]">
        <!-- Eyebrow + Heading -->
        <p class="eyebrow mb-6">Hotel Operations Blockchain Certifications</p>
        <h2 class="section-heading mb-12">
          {{ category.title }}
        </h2>
        <!-- Lead paragraph + body text in 2-column grid -->
        <div class="grid gap-10 md:grid-cols-2">
          <div class="space-y-5">
            <p v-if="category.description[0]" class="text-ink/80 text-[18px] md:text-[20px] leading-[1.6]">
              {{ category.description[0] }}
            </p>
            <p v-for="(para, i) in category.description.slice(1, Math.ceil(category.description.length / 2) + 1)" :key="'l'+i" class="text-ink/70 text-[15px] leading-[1.75]">
              {{ para }}
            </p>
          </div>
          <div class="space-y-5">
            <p v-for="(para, i) in category.description.slice(Math.ceil(category.description.length / 2) + 1)" :key="'r'+i" class="text-ink/70 text-[15px] leading-[1.75]">
              {{ para }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CERTIFICATIONS ACCORDION -->
    <section class="bg-white">
      <div class="container-x py-[80px] md:py-[140px]">
        <div class="max-w-4xl mx-auto">
          <div
            v-for="cert in category.certifications"
            :key="cert.slug"
            class="border-t border-ink/10"
          >
            <details class="group py-4">
              <summary class="flex items-center justify-between py-4 cursor-pointer">
                <span class="text-[13px] font-medium uppercase tracking-[2px] text-ink/70 group-open:text-[#005C99]">{{ cert.title }}</span>
                <span class="text-ink/40 group-open:text-[#005C99] text-[32px] leading-none transition group-open:hidden" style="font-weight:300">+</span>
                <span class="text-[#005C99] text-[32px] leading-none hidden group-open:inline" style="font-weight:300">&minus;</span>
              </summary>
              <div class="pb-6 pt-2">
                <p class="text-ink/70 text-[15px] leading-[1.75] max-w-3xl">{{ cert.summary }}</p>
                <NuxtLink
                  :to="`/${getCertWpSlug(cert.slug)}`"
                  class="inline-block mt-4 text-[13px] font-semibold text-ink hover:text-coral transition"
                >
                  Read More
                </NuxtLink>
              </div>
            </details>
          </div>
          <div class="border-t border-ink/10"></div>
        </div>
      </div>
    </section>

    <!-- FULL-BLEED PHOTO -->
    <section class="bg-white">
      <img src="/images/features-inspector.webp" alt="Hotel compliance" loading="lazy" class="hero-img" />
    </section>

    <!-- PRICING -->
    <PricingSection />
  </div>
</template>
