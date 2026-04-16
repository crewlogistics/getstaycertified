<script setup lang="ts">
import { getCategoryBySlug } from '~/data/certifications'

definePageMeta({ layout: 'default' })

const categoryImages: Record<string, string> = {
  'back-office-and-finance': '/images/cat-back-office.png',
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

// Special WordPress slugs that don't follow the standard pattern
const specialCertSlugs: Record<string, string> = {
  'gbac-star': 'gbac-star-blockchain-certificates',
  'issa-cims-gb': 'issa-cims-gb-blockchain-certificates',
  'osha-hazard-communication': 'osha-hazard-blockchain-certificates',
  'npma-bed-bug-training': 'npma-bed-bug-training-blockain-certifications',
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

useHead({
  title: `${category.title} Blockchain Certifications - StayCertified`,
  meta: [
    { name: 'description', content: category.description[0] || `${category.title} hotel blockchain certifications managed by StayCertified.` },
  ],
})
</script>

<template>
  <div v-if="category">
    <!-- HERO -->
    <section class="bg-ink text-white">
      <div class="container-x py-32 md:py-48 text-center">
        <h1 class="font-medium leading-[1.05] tracking-tight text-[42px] sm:text-[56px] md:text-[72px] lg:text-[85px]">
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
      <div class="container-x py-24 md:py-32">
        <div class="grid gap-14 md:grid-cols-2">
          <div>
            <p class="eyebrow mb-6">{{ category.navLabel }} Blockchain Certifications</p>
            <h2 class="section-heading">
              {{ category.title }}
            </h2>
          </div>
          <div class="md:pt-16 space-y-5 text-ink/75 text-[15px] leading-[1.75]">
            <p v-for="(para, i) in category.description" :key="i">
              {{ para }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CERTIFICATIONS ACCORDION -->
    <section class="bg-white">
      <div class="container-x py-24 md:py-32">
        <div class="max-w-4xl mx-auto">
          <details
            v-for="cert in category.certifications"
            :key="cert.slug"
            class="group border-b border-rule"
          >
            <summary class="flex items-center justify-between py-5 cursor-pointer">
              <span class="text-[15px] font-medium text-ink">{{ cert.title }}</span>
              <span class="text-ink/40 transition group-open:rotate-45 text-[20px] leading-none">+</span>
            </summary>
            <div class="pb-6 pr-12">
              <p class="text-ink/70 text-[14px] leading-[1.7]">{{ cert.summary }}</p>
              <NuxtLink
                :to="`/${getCertWpSlug(cert.slug)}`"
                class="inline-block mt-4 text-[13px] font-semibold text-ink hover:text-coral transition"
              >
                Read More
              </NuxtLink>
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- PRICING -->
    <PricingSection />
  </div>
</template>
