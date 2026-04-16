<script setup lang="ts">
import { getCertBySlug, getCategoryBySlug, categories } from '~/data/certifications'

definePageMeta({ layout: 'default' })

/* ------------------------------------------------------------------ */
/*  Slug-mapping helpers                                               */
/* ------------------------------------------------------------------ */

// Special WordPress slugs that don't follow the standard pattern
const specialCertSlugs: Record<string, string> = {
  'gbac-star-blockchain-certificates': 'gbac-star',
  'issa-cims-gb-blockchain-certificates': 'issa-cims-gb',
  'osha-hazard-blockchain-certificates': 'osha-hazard-communication',
  'npma-bed-bug-training-blockain-certifications': 'npma-bed-bug-training',
}

// Category WordPress slugs → internal category slugs
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
}

// Top-level page redirects
const topLevelPages: Record<string, string> = {
  'the-hotel-blockchain-certification-process': '/the-process',
  'stay-certified-blockchain-certification-features': '/features',
  'staycertified': '/contact',
  'hotel-blockchain-certifications': '/certifications',
}

// Build reverse map: data slug → WordPress URL slug for cert pages
const dataSlugToWpSlug: Record<string, string> = {}
// Populate from special slugs (reversed)
for (const [wpSlug, dataSlug] of Object.entries(specialCertSlugs)) {
  dataSlugToWpSlug[dataSlug] = wpSlug
}
// Populate standard certs: data-slug + '-blockchain-hotel-certificates'
for (const cat of categories) {
  for (const cert of cat.certifications) {
    if (!dataSlugToWpSlug[cert.slug]) {
      dataSlugToWpSlug[cert.slug] = `${cert.slug}-blockchain-hotel-certificates`
    }
  }
}

/* ------------------------------------------------------------------ */
/*  Resolve incoming URL                                               */
/* ------------------------------------------------------------------ */

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
const fullSlug = (route.params.slug as string[]).join('/')

// --- Top-level page redirect ---
if (topLevelPages[fullSlug]) {
  navigateTo(topLevelPages[fullSlug], { redirectCode: 301 })
}

// --- Category page ---
const matchedCategorySlug = categorySlugs[fullSlug]
const matchedCategory = matchedCategorySlug ? getCategoryBySlug(matchedCategorySlug) : undefined

// --- Cert page ---
let certDataSlug: string | undefined
let certResult: ReturnType<typeof getCertBySlug> | undefined

if (!matchedCategory) {
  // Check special slugs first
  if (specialCertSlugs[fullSlug]) {
    certDataSlug = specialCertSlugs[fullSlug]
  }
  // Standard pattern: strip -blockchain-hotel-certificates suffix
  else if (fullSlug.endsWith('-blockchain-hotel-certificates')) {
    certDataSlug = fullSlug.replace(/-blockchain-hotel-certificates$/, '')
  }

  if (certDataSlug) {
    certResult = getCertBySlug(certDataSlug)
  }
}

// 404 if nothing matched
if (!matchedCategory && !certResult && !topLevelPages[fullSlug]) {
  throw createError({ statusCode: 404, message: 'Page not found' })
}

// --- SEO head ---
if (matchedCategory) {
  useHead({
    title: `${matchedCategory.title} Blockchain Certifications - StayCertified`,
    meta: [
      { name: 'description', content: matchedCategory.description[0] || `${matchedCategory.title} hotel blockchain certifications managed by StayCertified.` },
    ],
  })
}

if (certResult) {
  useHead({
    title: `${certResult.cert.title} - StayCertified`,
    meta: [
      { name: 'description', content: certResult.cert.summary },
    ],
  })
}

// Helpers for template
const cert = certResult?.cert
const category = certResult?.category || matchedCategory
const heroImage = cert
  ? (certImages[cert.slug] || categoryImages[category!.slug] || '/images/certifications-hero.webp')
  : (matchedCategory ? (categoryImages[matchedCategory.slug] || '/images/certifications-hero.webp') : '/images/certifications-hero.webp')

// Helper: get the WordPress URL slug for a cert's data slug
function getCertWpSlug(dataSlug: string): string {
  return dataSlugToWpSlug[dataSlug] || `${dataSlug}-blockchain-hotel-certificates`
}
</script>

<template>
  <!-- ==================== CERT DETAIL PAGE ==================== -->
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
          <NuxtLink :to="`/certifications/${category.slug}`" class="hover:text-ink transition">{{ category.navLabel }}</NuxtLink>
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
      <div class="container-x py-24 md:py-32">
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
          :to="`/certifications/${category.slug}`"
          class="text-coral hover:text-coral-hover text-[14px] font-medium uppercase tracking-[0.05em] transition"
        >
          &larr; View All {{ category.navLabel }} Certifications
        </NuxtLink>
      </div>
    </section>

    <!-- PRICING -->
    <PricingSection />
  </div>

  <!-- ==================== CATEGORY PAGE ==================== -->
  <div v-else-if="matchedCategory">
    <!-- HERO -->
    <section class="bg-ink text-white">
      <div class="container-x py-32 md:py-48 text-center">
        <h1 class="font-medium leading-[1.05] tracking-tight text-[42px] sm:text-[56px] md:text-[72px] lg:text-[85px]">
          {{ matchedCategory.heroTagline }}
        </h1>
      </div>
    </section>

    <!-- FULL-BLEED PHOTO -->
    <section class="bg-white">
      <img
        :src="heroImage"
        :alt="matchedCategory.title + ' certifications'"
        class="hero-img"
      />
    </section>

    <!-- INTRO -->
    <section class="bg-mist">
      <div class="container-x py-24 md:py-32">
        <div class="grid gap-14 md:grid-cols-2">
          <div>
            <p class="eyebrow mb-6">{{ matchedCategory.navLabel }} Blockchain Certifications</p>
            <h2 class="section-heading">
              {{ matchedCategory.title }}
            </h2>
          </div>
          <div class="md:pt-16 space-y-5 text-ink/75 text-[15px] leading-[1.75]">
            <p v-for="(para, i) in matchedCategory.description" :key="i">
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
            v-for="cert in matchedCategory.certifications"
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
