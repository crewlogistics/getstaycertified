<script setup lang="ts">
definePageMeta({ layout: 'default' })

useHead({
  title: 'Hotel Blockchain Certifications - StayCertified',
  meta: [
    { name: 'description', content: 'Browse all hotel blockchain certification categories. From fire safety to housekeeping, StayCertified covers every department.' },
  ],
})

const categories = [
  {
    slug: 'back-office-and-finance',
    title: 'Back Office and Finance',
    description: 'Accounting standards, financial auditing, anti-fraud compliance, and data protection certifications.',
    image: '/images/cat-back-office.png',
  },
  {
    slug: 'environmental-sustainability',
    title: 'Environmental & Sustainability',
    description: 'Energy Star, ISO 14001, Green Key Global, true zero waste, and water/energy efficiency certifications.',
    image: '/images/cat-environmental.webp',
  },
  {
    slug: 'fire-life-safety',
    title: 'Fire, Life and Safety',
    description: 'NFPA fire safety, emergency evacuation, first aid, elevator compliance, and workplace violence prevention.',
    image: '/images/cat-fire-life-safety.webp',
  },
  {
    slug: 'fitness-spa-wellness',
    title: 'Fitness, Spa & Wellness',
    description: 'Fitness equipment safety, spa hygiene, pool/hot tub water quality, and sauna maintenance certifications.',
    image: '/images/cat-fitness-spa.webp',
  },
  {
    slug: 'food-and-beverage',
    title: 'Food and Beverage',
    description: 'ServSafe, HACCP, ISO 22000, allergen awareness, alcohol service, and kitchen health department certifications.',
    image: '/images/cat-food-beverage.webp',
  },
  {
    slug: 'front-desk-concierge',
    title: 'Front Desk / Concierge',
    description: 'Customer service, language proficiency, PCI DSS compliance, and guest-facing operational certifications.',
    image: '/images/cat-front-desk.webp',
  },
  {
    slug: 'housekeeping',
    title: 'Housekeeping',
    description: 'GBAC STAR, ISSA CIMS-GB, OSHA hazard communication, chemical handling, and bed bug prevention certifications.',
    image: '/images/cat-housekeeping.webp',
  },
  {
    slug: 'hr-security-ops',
    title: 'HR / Security / Ops',
    description: 'Background screening, child protection, anti-trafficking, workplace harassment prevention, and security officer licensing.',
    image: '/images/cat-hr-security.webp',
  },
  {
    slug: 'laundry-and-linen-services',
    title: 'Laundry and Linen Services',
    description: 'ServSafe HACCP laundry sanitation compliance and linen service certifications for hospitality properties.',
    image: '/images/cat-laundry.webp',
  },
  {
    slug: 'maintenance-and-engineering',
    title: 'Maintenance and Engineering',
    description: 'EPA Section 608 HVAC, state electrical licensing, boiler certification, and mold/asbestos awareness.',
    image: '/images/cat-maintenance.webp',
  },
]
</script>

<template>
  <!-- HERO -->
  <section class="bg-ink text-white">
    <div class="container-x pt-[140px] md:pt-[220px] pb-[80px] md:pb-[120px] text-center">
      <p class="text-white/70 text-[14px] md:text-[16px] font-normal mb-6">StayCertified&trade;</p>
      <h1 class="font-medium leading-[1.05] tracking-tight text-[56px] sm:text-[72px] md:text-[90px] lg:text-[110px]">
        Hotel Blockchain<br />
        Certifications
      </h1>
      <p class="mt-10 text-[18px] md:text-[20px] text-white/75 font-light max-w-3xl mx-auto leading-relaxed">
        Browse every certification category managed by StayCertified&trade;&mdash;from
        fire safety and food service to housekeeping and engineering.
      </p>
    </div>
  </section>

  <!-- FULL-BLEED PHOTO -->
  <section class="bg-white">
    <img
      src="/images/certifications-hero.webp"
      alt="Hotel certification inspector"
      class="hero-img"
    />
  </section>

  <!-- CATEGORIES GRID -->
  <section class="bg-white">
    <div class="container-x py-[80px] md:py-[140px]">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        <NuxtLink
          v-for="cat in categories"
          :key="cat.slug"
          :to="`/certifications/${cat.slug}`"
          class="group block bg-white rounded-lg overflow-hidden border border-rule hover:border-coral/40 hover:shadow-lg transition"
        >
          <img
            :src="cat.image"
            :alt="cat.title"
            class="w-full h-[180px] object-cover object-top group-hover:scale-105 transition duration-500"
          />
          <div class="p-6">
            <h3 class="text-[14px] font-semibold uppercase tracking-[0.08em] text-ink group-hover:text-coral transition">
              {{ cat.title }}
            </h3>
            <p class="mt-3 text-ink/70 text-[13px] leading-[1.7]">
              {{ cat.description }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>

  <!-- PRICING -->
  <PricingSection />
</template>
