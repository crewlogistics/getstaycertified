<script setup lang="ts">
import { getCategoryBySlug } from '~/data/certifications'

definePageMeta({ layout: 'default' })

const certImages: Record<string, string> = {
  // Fire & Life Safety
  'fire-safety-extinguisher-training': '/images/cert-fire-safety-extinguisher-training.webp',
  'fire-suppression-system': '/images/cert-fire-suppression-system.webp',
  'emergency-evacuation-planning': '/images/cert-emergency-evacuation-planning.webp',
  'first-aid-training': '/images/cert-first-aid-training.webp',
  'first-aid-cpr-aed': '/images/cert-first-aid-cpr-aed.webp',
  'chemical-handling-safety': '/images/cert-chemical-handling-safety.webp',

  // Housekeeping
  'gbac-star': '/images/cert-gbac-star.webp',
  'issa-cims-gb': '/images/cert-issa-cims-gb.webp',
  'osha-hazard-communication': '/images/cert-osha-hazard-communication.webp',
  'npma-bed-bug-training': '/images/cert-npma-bed-bug-training.webp',
  'pest-control': '/images/cert-pest-control.webp',
  'trsa-hygienically-clean': '/images/cert-trsa-hygienically-clean.webp',

  // Food & Beverage
  'alcohol-service': '/images/cert-alcohol-service.webp',
  'servsafe-haccp-iso-22000': '/images/cert-servsafe-haccp-iso-22000.webp',
  'allergen-awareness-training': '/images/cert-allergen-awareness-training.webp',
  'health-department-kitchen': '/images/cert-health-department-kitchen.webp',
  'halal-kosher-kitchen': '/images/cert-halal-kosher-kitchen.webp',
  'food-waste-composting': '/images/cert-food-waste-composting.webp',

  // Front Desk & Concierge
  'customer-service': '/images/cert-customer-service.webp',
  'language-proficiency': '/images/cert-language-proficiency.webp',
  'code-of-conduct-anti-trafficking': '/images/cert-code-of-conduct-anti-trafficking.webp',
  'child-protection-training': '/images/cert-child-protection-training.webp',

  // HR, Security & Ops
  'workplace-harassment-prevention': '/images/cert-workplace-harassment-prevention.webp',
  'workplace-violence-prevention': '/images/cert-workplace-violence-prevention.webp',
  'security-officer-licensing': '/images/cert-security-officer-licensing.webp',
  'background-screening': '/images/cert-background-screening.webp',
  'osha-workplace-safety': '/images/cert-osha-workplace-safety.webp',

  // Back Office & Finance
  'pci-dss-compliance': '/images/cert-pci-dss-compliance.webp',
  'data-protection-cybersecurity': '/images/cert-data-protection-cybersecurity.webp',
  'data-privacy-pci-compliance': '/images/cert-data-privacy-pci-compliance.webp',
  'financial-auditing-anti-fraud': '/images/cert-financial-auditing-anti-fraud.webp',
  'accounting-standards-training': '/images/cert-accounting-standards-training.webp',
  'kyc-anti-money-laundering': '/images/cert-kyc-anti-money-laundering.webp',

  // Maintenance & Engineering
  'boiler-pressure-vessel': '/images/cert-boiler-pressure-vessel.webp',
  'elevator-escalator': '/images/cert-elevator-escalator.webp',
  'state-electrical-license': '/images/cert-state-electrical-license.webp',
  'epa-section-608-hvac': '/images/cert-epa-section-608-hvac.webp',
  'osha-confined-space-ladder': '/images/cert-osha-confined-space-ladder.webp',
  'maintenance-and-engineering': '/images/cert-maintenance-and-engineering.webp',

  // Environmental Sustainability
  'iso-14001': '/images/cert-iso-14001.webp',
  'energy-star': '/images/cert-energy-star.webp',
  'green-key-global': '/images/cert-green-key-global.webp',
  'true-zero-waste': '/images/cert-true-zero-waste.webp',
  'epa-ahera-mold-asbestos': '/images/cert-epa-ahera-mold-asbestos.webp',
  'ashrae-188-legionella': '/images/cert-ashrae-188-legionella.webp',
  'water-energy-efficiency': '/images/cert-water-energy-efficiency.webp',

  // Fitness, Spa & Wellness
  'massage-therapy-licensing': '/images/cert-massage-therapy-licensing.webp',
  'spa-hygiene-infection-control': '/images/cert-spa-hygiene-infection-control.webp',
  'fitness-equipment-safety': '/images/cert-fitness-equipment-safety.webp',
  'pool-hot-tub-water-quality': '/images/cert-pool-hot-tub-water-quality.webp',
  'sauna-steam-room-maintenance': '/images/cert-sauna-steam-room-maintenance.webp',
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
const displayHeroTitle = (cert as any).heroTitle || cert.title
const displayFullTitle = (cert as any).fullTitle || cert.title
const accordionSections = (cert as any).accordionSections || []

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
    <section class="bg-ink text-white min-h-[420px] md:min-h-[730px] flex items-center justify-center">
      <div class="max-w-[1200px] mx-auto px-6 md:px-10 text-center">
        <h1 class="font-medium leading-[1.05] tracking-[-0.03em] text-[50px] sm:text-[70px] md:text-[90px] lg:text-[110px]">
          {{ displayHeroTitle }}
        </h1>
      </div>
    </section>

    <!-- FULL-BLEED PHOTO -->
    <section class="bg-white">
      <img
        :src="heroImage"
        :alt="displayHeroTitle"
        class="hero-img"
      />
    </section>

    <!-- GREY PANEL: Issuing body + title + two-column body copy -->
    <section class="bg-mist">
      <div class="container-x py-[80px] md:py-[140px]">
        <!-- Issuing body eyebrow -->
        <p v-if="cert.issuingBody" class="eyebrow mb-8">
          Certification Issuing Body | {{ cert.issuingBody }}
        </p>

        <!-- Full title -->
        <h2 class="section-heading mb-16">{{ displayFullTitle }}</h2>

        <!-- Two-column body copy matching live site layout -->
        <div class="grid gap-10 md:grid-cols-2">
          <!-- Left column: lead paragraph only -->
          <div>
            <p v-if="cert.description[0]" class="text-ink/80 text-[17px] md:text-[19px] leading-[1.65]">
              {{ cert.description[0] }}
            </p>
          </div>
          <!-- Right column: remaining paragraphs with bold section headers -->
          <div class="space-y-6">
            <template v-for="(para, i) in cert.description.slice(1)" :key="'r'+i">
              <div>
                <p v-if="i === 0" class="font-semibold text-ink text-[14px] mb-2">Importance:</p>
                <p v-else-if="i === 1" class="font-semibold text-ink text-[14px] mb-2">Benefits:</p>
                <p v-else-if="i === 2" class="font-semibold text-ink text-[14px] mb-2">Risks of Non-Compliance:</p>
                <p class="text-ink/70 text-[15px] leading-[1.75]">{{ para }}</p>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>

    <!-- ACCORDION SECTIONS -->
    <section v-if="accordionSections.length > 0" class="bg-white">
      <div class="container-x py-[80px] md:py-[140px]">
        <div class="max-w-4xl mx-auto">
          <div
            v-for="(section, i) in accordionSections"
            :key="i"
            class="border-t border-ink/10"
          >
            <details class="group py-4">
              <summary class="flex items-center justify-between py-4 cursor-pointer">
                <span class="text-[13px] font-medium uppercase tracking-[2px] text-[#2c5282]">{{ section.title }}</span>
                <span class="text-[#2c5282] text-[28px] leading-none font-light transition group-open:hidden">+</span>
                <span class="text-[#2c5282] text-[28px] leading-none font-light hidden group-open:inline">&mdash;</span>
              </summary>
              <div class="pb-6 pt-2">
                <p class="text-ink/70 text-[15px] leading-[1.75] max-w-3xl">{{ section.body }}</p>
              </div>
            </details>
          </div>
          <div class="border-t border-ink/10"></div>
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
