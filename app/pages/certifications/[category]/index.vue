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

    <!-- CERTIFICATIONS LIST -->
    <section class="bg-white">
      <div class="container-x py-24 md:py-32">
        <div class="space-y-8 max-w-4xl mx-auto">
          <NuxtLink
            v-for="cert in category.certifications"
            :key="cert.slug"
            :to="`/certifications/${slug}/${cert.slug}`"
            class="group block bg-white rounded-lg p-8 border border-rule hover:border-coral/40 hover:shadow-lg transition"
          >
            <div class="flex items-start gap-5">
              <div class="flex-shrink-0 w-12 h-12 rounded-full bg-tick group-hover:bg-coral flex items-center justify-center transition">
                <svg class="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="text-[14px] font-semibold uppercase tracking-[0.08em] text-ink group-hover:text-coral transition">
                  {{ cert.title }}
                </h3>
                <p v-if="cert.issuingBody" class="mt-1 text-[11px] uppercase tracking-[0.1em] text-ink/40">
                  {{ cert.issuingBody }}
                </p>
                <p class="mt-3 text-ink/70 text-[14px] leading-[1.7]">
                  {{ cert.summary }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- PRICING -->
    <PricingSection />
  </div>
</template>
