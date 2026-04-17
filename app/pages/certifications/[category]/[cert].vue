<script setup lang="ts">
import { getCategoryBySlug } from '~/data/certifications'

definePageMeta({ layout: 'default' })

const certImages: Record<string, string> = {
  'fire-suppression-system': '/images/cert-fire-suppression.webp',
  'gbac-star': '/images/cert-gbac-star.webp',
  'issa-cims-gb': '/images/cert-issa-cims.webp',
  'osha-hazard-communication': '/images/cert-osha-hazcom.webp',
  'npma-bed-bug-training': '/images/cert-bed-bug.webp',
  'pest-control': '/images/cert-pest-control.webp',
  'alcohol-service': '/images/cert-alcohol-service.webp',
  'servsafe-haccp-iso-22000': '/images/cert-servsafe.webp',
  'allergen-awareness-training': '/images/cert-allergen.webp',
  'health-department-kitchen': '/images/cert-health-dept.webp',
}

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

const route = useRoute()
const categorySlug = route.params.category as string
const certSlug = route.params.cert as string

const category = getCategoryBySlug(categorySlug)
const cert = category?.certifications.find(c => c.slug === certSlug)

if (!category || !cert) {
  throw createError({ statusCode: 404, message: 'Certification not found' })
}

const heroImage = certImages[certSlug] || categoryImages[categorySlug] || '/images/certifications-hero.webp'

useHead({
  title: `${cert.title} - StayCertified`,
  meta: [
    { name: 'description', content: cert.summary },
  ],
})
</script>

<template>
  <div v-if="cert && category">
    <!-- HERO -->
    <section class="bg-ink text-white">
      <div class="container-x pt-[60px] md:pt-[80px] pb-[40px] md:pb-[50px] text-left">
        <h1 class="font-semibold leading-[1.0] tracking-tight text-[32px] sm:text-[36px] md:text-[42px] max-w-lg">
          {{ cert.title }}
        </h1>
      </div>
    </section>

    <!-- FULL-BLEED PHOTO -->
    <section class="bg-white">
      <img
        :src="heroImage"
        :alt="cert.title"
        class="hero-img"
      />
    </section>

    <!-- ISSUING BODY -->
    <section v-if="cert.issuingBody" class="bg-mist">
      <div class="container-x py-8">
        <p class="eyebrow">
          Certification Issuing Body | {{ cert.issuingBody }}
        </p>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="bg-white">
      <div class="container-x py-[80px] md:py-[140px]">
        <h2 class="section-heading mb-12">{{ cert.title }}</h2>
        <div class="max-w-4xl space-y-6">
          <p v-if="cert.description[0]" class="text-ink/80 text-[18px] md:text-[20px] leading-[1.6]">
            {{ cert.description[0] }}
          </p>
          <p v-for="(para, i) in cert.description.slice(1)" :key="i" class="text-ink/70 text-[15px] leading-[1.75]">
            {{ para }}
          </p>
        </div>
      </div>
    </section>

    <!-- FULL-BLEED PHOTO -->
    <section class="bg-white">
      <img src="/images/features-inspector.webp" alt="Hotel compliance" class="hero-img" />
    </section>

    <!-- PRICING -->
    <PricingSection />
  </div>
</template>
