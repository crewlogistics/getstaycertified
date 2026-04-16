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
      <div class="container-x pt-[140px] md:pt-[220px] pb-[80px] md:pb-[120px] text-left">
        <h1 class="font-medium leading-[1.05] tracking-tight text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px]">
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
      <div class="container-x py-6">
        <p class="text-[11px] font-medium uppercase tracking-[0.15em] text-ink/40">
          Certification Issuing Body | {{ cert.issuingBody }}
        </p>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="bg-white">
      <div class="container-x py-[80px] md:py-[140px]">
        <div class="grid gap-14 md:grid-cols-2">
          <div>
            <p class="eyebrow mb-6">Certification Issuing Body | {{ cert.issuingBody }}</p>
            <h2 class="section-heading">{{ cert.title }}</h2>
          </div>
          <div class="md:pt-16 space-y-5 text-ink/75 text-[15px] leading-[1.75]">
            <p v-for="(para, i) in cert.description" :key="i">{{ para }}</p>
          </div>
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
