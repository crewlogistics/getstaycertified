<script setup lang="ts">
definePageMeta({ layout: 'default' })

useHead({
  title: 'Features - StayCertified',
  meta: [
    { name: 'description', content: 'Full marks for full features. Compliance made effortless with StayCertified\u2122.' },
  ],
})

const coreFeatures = [
  {
    title: 'Effortless Onboarding',
    body: 'Quickly upload, verify, and organize all your property certifications in one streamlined, mobile-friendly portal.',
  },
  {
    title: 'Guest Trust Widgets',
    body: 'Display trust badges and live compliance status on your booking pages to boost guest confidence and conversion.',
  },
  {
    title: 'Blockchain-Stored Certification',
    body: 'Certifications will be hashed and timestamped on a secure blockchain ledger for tamper-proof proof of compliance.',
  },
  {
    title: 'Vendor Coordination Tools',
    body: 'Easily track service vendors, upload certifications (fire, lift, food, pest, etc.), and monitor inspection history to avoid gaps.',
  },
  {
    title: 'Built for Government Bids',
    body: 'Stay compliant with GSA, FedRooms, and state travel standards so your property remains eligible for high-value government bookings.',
  },
  {
    title: 'Real-Time Compliance Tracking',
    body: 'Receive automatic alerts before expiration dates hit so you never miss a renewal, inspection, or audit deadline again.',
  },
  {
    title: 'Branded Compliance Reports',
    body: 'Generate professional, inspector-ready PDFs that showcase your property\u2019s certifications in a branded, organized format.',
  },
  {
    title: 'FedRAMP-Aligned',
    body: 'Generate professional, inspector-ready PDFs that showcase your property\u2019s certifications in a branded, organized format.',
  },
]

const customFeatures = [
  {
    title: 'Vendor Assignment & Follow-Up Automation',
    body: 'Automatically assign vendors (fire, elevator, pest, etc.) and trigger reminders or follow-ups if documents or inspections aren\u2019t completed on time.',
  },
  {
    title: 'Custom Certification Categories & Tags',
    body: 'Tailor the platform to your property\u2019s unique compliance needs\u2014add niche cert types (e.g., eco, wellness, accessibility) and tag them by department or region.',
  },
  {
    title: 'White-Label Compliance Portals',
    body: 'Offer a custom-branded compliance dashboard for each property or group, complete with your logo, report templates, and audit-ready exports.',
  },
  {
    title: 'Inspection Readiness Kits',
    body: 'Generate a custom checklist and bundled PDF report (with embedded certificates) that\u2019s formatted for local, state, or federal audits.',
  },
  {
    title: 'Dedicated Compliance Specialist Support',
    body: 'Access a real human concierge who reviews submissions, validates documents, and escalates issues before they become costly.',
  },
]

const upcomingFeatures = [
  {
    title: 'Direct Integration with GSA/FedRooms',
    body: 'Seamlessly sync your certifications and listing status directly with government booking platforms for real-time visibility.',
  },
  {
    title: 'AI-Powered Risk Scoring per Vendor Type',
    body: 'Automatically evaluate risk levels for each vendor category\u2014like fire safety or food handling\u2014to prioritize compliance efforts.',
  },
  {
    title: 'Smart Inspector View Mode',
    body: 'Generate a simplified, read-only compliance snapshot designed specifically for inspectors and auditors during site visits.',
  },
  {
    title: 'Public Trust Index Ranking for Listings',
    body: 'Display your property\u2019s trust score based on compliance history, making it easier for travel managers and government buyers to choose you.',
  },
  {
    title: 'Mobile App for Staff and Vendor Check-Ins',
    body: 'Let your staff and vendors check in, upload certs, and log inspections from anywhere via a dedicated mobile app.',
  },
  {
    title: 'Automated Risk & Expiry Heatmaps',
    body: 'View dynamic dashboards that visualize high-risk vendors, upcoming renewals, and outstanding certifications by urgency or category.',
  },
]
</script>

<template>
  <!-- HERO -->
  <section class="bg-ink text-white">
    <div class="container-x py-32 md:py-48 text-center">
      <h1 class="font-medium leading-[1.05] tracking-tight text-[42px] sm:text-[56px] md:text-[72px] lg:text-[85px]">
        From Vendor Chasing<br />
        to Audit-Ready&mdash;<br />
        We&rsquo;ve Got You
      </h1>
    </div>
  </section>

  <!-- FULL-BLEED PHOTO -->
  <section class="bg-white">
    <img
      src="/images/features-hero.webp"
      alt="StayCertified platform features"
      class="hero-img"
    />
  </section>

  <!-- INTRO -->
  <section class="bg-mist">
    <div class="container-x py-24 md:py-32">
      <div class="grid gap-14 md:grid-cols-2">
        <div>
          <p class="eyebrow mb-6">Features</p>
          <h2 class="section-heading">
            Full marks for full features
          </h2>
        </div>
        <div class="md:pt-16 space-y-5 text-ink/75 text-[15px] leading-[1.75]">
          <p>
            Compliance made effortless. Trusted certification that scales with your property.
            We handle vendor coordination, document uploads, risk audits, and renewal
            tracking&mdash;so your team can focus on bookings, not bureaucracy.
          </p>
          <p>
            With StayCertified&trade;, your hotel&rsquo;s certification process goes from
            scattered to streamlined. Whether you&rsquo;re a boutique inn or a multi-property
            brand, our platform automates compliance and prepares you for government
            bids&mdash;saving your team time, resources, and revenue lost to missed opportunities.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- CORE FEATURES GRID -->
  <section class="bg-white">
    <div class="container-x py-24 md:py-32">
      <div class="grid gap-x-16 gap-y-12 md:grid-cols-2 max-w-5xl mx-auto">
        <div
          v-for="feature in coreFeatures"
          :key="feature.title"
          class="flex items-start gap-5"
        >
          <img src="/images/tick-icon.webp" alt="" class="flex-shrink-0 w-10 h-10" />
          <div>
            <h3 class="text-[14px] font-light uppercase tracking-[2px] text-ink">
              {{ feature.title }}
            </h3>
            <p class="mt-3 text-ink/70 text-[14px] leading-[1.7]">
              {{ feature.body }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FULL-BLEED PHOTO -->
  <section class="bg-white">
    <img
      src="/images/features-front-desk.webp"
      alt="Hotel front desk operations"
      class="hero-img"
    />
  </section>

  <!-- DARK BANNER -->
  <section class="bg-ink text-white">
    <div class="container-x py-20 md:py-24 text-center">
      <h2 class="font-light leading-[1.06] tracking-[-2px] text-[38px] md:text-[52px]">
        Customizable Features
      </h2>
    </div>
  </section>

  <!-- CUSTOMIZABLE FEATURES -->
  <section class="bg-white">
    <div class="container-x py-24 md:py-32">
      <div class="grid gap-x-16 gap-y-12 md:grid-cols-2 max-w-5xl mx-auto">
        <div
          v-for="feature in customFeatures"
          :key="feature.title"
          class="flex items-start gap-5"
        >
          <img src="/images/tick-icon.webp" alt="" class="flex-shrink-0 w-10 h-10" />
          <div>
            <h3 class="text-[14px] font-light uppercase tracking-[2px] text-ink">
              {{ feature.title }}
            </h3>
            <p class="mt-3 text-ink/70 text-[14px] leading-[1.7]">
              {{ feature.body }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FULL-BLEED PHOTO -->
  <section class="bg-white">
    <img
      src="/images/features-inspector.webp"
      alt="Hotel compliance inspector"
      class="hero-img"
    />
  </section>

  <!-- WHAT'S NEXT -->
  <section class="bg-mist">
    <div class="container-x py-24 md:py-32">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <p class="eyebrow mb-6">What&rsquo;s next for StayCertified&trade;</p>
        <h2 class="section-heading">
          Coming Soon
        </h2>
        <p class="mt-6 text-ink/75 text-[16px] leading-[1.7] max-w-2xl mx-auto">
          We&rsquo;re constantly designing smarter ways to manage compliance so you can focus
          on what really matters&mdash;running your property and growing your bookings.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        <div
          v-for="feature in upcomingFeatures"
          :key="feature.title"
          class="bg-white rounded-lg p-8 border border-rule"
        >
          <h3 class="text-[13px] font-semibold uppercase tracking-[0.08em] text-ink">
            {{ feature.title }}
          </h3>
          <p class="mt-3 text-ink/70 text-[14px] leading-[1.7]">
            {{ feature.body }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- PRICING -->
  <PricingSection />
</template>
