<script setup lang="ts">
definePageMeta({ layout: 'default' })

const features = [
  {
    title: 'Build trust with guests',
    body: 'Show customers your hotel is verified, professional, and committed to high standards of safety and service.',
  },
  {
    title: 'Effortless onboarding',
    body: 'Upload and verify all your certifications in one place — fast, clean, and mobile-ready.',
  },
  {
    title: 'Stay fully compliant',
    body: 'Ensure your certifications meet all local, state, and federal regulations — without the paperwork headache.',
  },
  {
    title: 'Built for government bids',
    body: 'Stay aligned with procurement standards from GSA to FedRooms. Be visible. Be eligible.',
  },
  {
    title: 'Bid-ready in no time',
    body: 'Streamlined updates make your hotel eligible for lucrative federal and state lodging contracts.',
  },
  {
    title: 'Real-time compliance tracking',
    body: 'Automatic reminders, instant updates, zero scrambling. Your certifications? Covered.',
  },
]

const partners = [
  { name: 'InterContinental Hotels Group', src: '/images/hotel-ihg.webp' },
  { name: 'Holiday Inn Express', src: '/images/hotel-holiday-inn-express.webp' },
  { name: 'Homewood Suites by Hilton', src: '/images/hotel-homewood-suites.webp' },
  { name: 'MainStay Suites', src: '/images/hotel-mainstay-suites.webp' },
  { name: 'Microtel by Wyndham', src: '/images/hotel-microtel.webp' },
  { name: 'Ramada', src: '/images/hotel-ramada.webp' },
]

</script>

<template>
  <!-- HERO -->
  <section class="bg-ink text-white">
    <div class="container-x pt-[140px] md:pt-[220px] pb-[100px] md:pb-[160px] text-center">
      <h1 class="font-medium leading-[1.15] tracking-tight text-[48px] sm:text-[64px] md:text-[78px] lg:text-[85px]">
        StayCertified&trade;
      </h1>
      <p class="font-medium leading-[1.15] tracking-tight text-[40px] sm:text-[56px] md:text-[72px] lg:text-[80px] text-white">
        Verified Environments.<br />
        Trusted Operations.
      </p>
      <p class="mt-8 text-[24px] md:text-[40px] text-white/75 font-extralight max-w-4xl mx-auto leading-[1.1]">
        The certification and compliance layer behind every qualified facility.
      </p>
    </div>
  </section>

  <!-- FULL-BLEED PHOTO: front desk -->
  <section class="bg-white">
    <img
      src="/images/front-desk.webp"
      alt="Hotel front desk check-in"
      class="w-full h-auto block"
    />
  </section>

  <!-- INTRO: Never worry about staying certified -->
  <section class="bg-mist">
    <div class="container-x py-24 md:py-32">
      <div class="grid gap-14 md:grid-cols-2">
        <div>
          <p class="eyebrow mb-6">Stay certified and compliant &mdash; in minutes</p>
          <h2 class="section-heading">
            Never worry about staying certified again.
          </h2>
          <p class="mt-8 text-ink/75 text-[16px] leading-[1.7] max-w-md">
            Get compliant, stay current, and win government contracts&mdash;without lifting a finger.
          </p>
        </div>
        <div class="md:pt-24 space-y-5 text-ink/75 text-[15px] leading-[1.75]">
          <p>Your time is better spent booking guests&mdash;not chasing paperwork.</p>
          <p>
            StayCertified&trade; puts your property&rsquo;s compliance on autopilot.
            Whether you&rsquo;re listed with GSA, FedRooms, or state travel portals, we help
            general managers and sales directors keep certifications active, accurate,
            and bid-ready&mdash;start to finish.
          </p>
          <p>
            From instant uploads and audit-ready reports to real-time alerts and vendor
            coordination, StayCertified&trade; gives you every tool to stay bid-ready and
            booking&mdash;automatically.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- FEATURE GRID: 2 x 3 with circular tick icon on the left -->
  <section id="features" class="bg-white">
    <div class="container-x py-24 md:py-32">
      <div class="grid gap-x-16 gap-y-12 md:grid-cols-2 max-w-5xl mx-auto">
        <div
          v-for="feature in features"
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

  <!-- DARK BANNER: Certification handled. Start to finish. -->
  <section class="bg-ink text-white">
    <div class="container-x py-20 md:py-24 text-center">
      <h2 class="font-light leading-[1.06] tracking-[-2px] text-[38px] md:text-[52px]">
        Certification handled. Start to finish.
      </h2>
    </div>
  </section>

  <!-- FULL-BLEED PHOTO: inspector -->
  <section class="bg-white">
    <img
      src="/images/inspector.webp"
      alt="Compliance inspector in hotel lobby"
      class="w-full h-auto block"
    />
  </section>

  <!-- PRICING -->
  <PricingSection />

  <!-- HOTEL PARTNER LOGOS BAR -->
  <section class="bg-white">
    <div class="container-x py-20 md:py-24">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center gap-10 md:gap-12">
        <div
          v-for="partner in partners"
          :key="partner.name"
          class="flex items-center justify-center"
        >
          <img
            :src="partner.src"
            :alt="partner.name"
            class="max-h-14 w-auto object-contain grayscale opacity-70 hover:opacity-100 transition"
          />
        </div>
      </div>
    </div>
  </section>
</template>
