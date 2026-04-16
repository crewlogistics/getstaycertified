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
      <div class="container-x py-32 md:py-48 text-center">
        <h1 class="font-medium leading-[1.05] tracking-tight text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] max-w-4xl mx-auto">
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

    <!-- BREADCRUMB + ISSUING BODY -->
    <section class="bg-mist">
      <div class="container-x py-6">
        <nav class="flex items-center gap-2 text-[12px] uppercase tracking-[0.08em] text-ink/50">
          <NuxtLink to="/certifications" class="hover:text-ink transition">Certifications</NuxtLink>
          <span>&rsaquo;</span>
          <NuxtLink :to="`/certifications/${categorySlug}`" class="hover:text-ink transition">{{ category.navLabel }}</NuxtLink>
          <span>&rsaquo;</span>
          <span class="text-ink/80">{{ cert.title }}</span>
        </nav>
      </div>
    </section>

    <!-- ISSUING BODY -->
    <section v-if="cert.issuingBody" class="bg-mist border-b border-rule">
      <div class="container-x pb-8">
        <p class="text-[11px] font-medium uppercase tracking-[0.15em] text-ink/40">
          Certification Issuing Body | {{ cert.issuingBody }}
        </p>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="bg-white">
      <div class="container-x py-[80px] md:py-[140px]">
        <div class="max-w-3xl mx-auto">
          <div class="space-y-6 text-ink/75 text-[16px] leading-[1.8]">
            <p v-for="(para, i) in cert.description" :key="i">
              {{ para }}
            </p>
          </div>

          <div class="mt-16 text-center">
            <NuxtLink to="/contact" class="btn-coral-lg">
              Get Certified Now
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- BACK TO CATEGORY -->
    <section class="bg-mist">
      <div class="container-x py-16 text-center">
        <p class="eyebrow mb-4">More {{ category.title }} Certifications</p>
        <NuxtLink
          :to="`/certifications/${categorySlug}`"
          class="text-coral hover:text-coral-hover text-[14px] font-medium uppercase tracking-[0.05em] transition"
        >
          &larr; View All {{ category.navLabel }} Certifications
        </NuxtLink>
      </div>
    </section>

    <!-- PRICING -->
    <PricingSection />
  </div>
</template>
