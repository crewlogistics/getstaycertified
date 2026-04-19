<script setup lang="ts">
definePageMeta({ layout: 'default' })

useHead({
  title: 'The Process - StayCertified',
  meta: [
    { name: 'description', content: 'From paperwork to peace of mind in three simple steps. Upload, verify, and get listed with StayCertified.' },
  ],
})

const steps = [
  {
    number: '1',
    title: 'Upload & Centralize',
    subtitle: 'Fast. Clear. Actionable.',
    body: 'Gather your property\u2019s certifications\u2014fire, elevator, pest, insurance, and more\u2014and upload them to one secure, centralized platform.',
    detail: 'No more folders, emails, or last-minute audits\u2014just a streamlined system built for hospitality.',
  },
  {
    number: '2',
    title: 'Verify & Align',
    subtitle: 'Built for hotels, backed by experts.',
    body: 'We review and validate your documents to ensure they meet GSA, FedRooms, and state travel compliance standards\u2014so you\u2019re bid-ready and booking-ready.',
    detail: 'Whether you\u2019re independent or managing multiple locations, StayCertified\u2122 scales with you.',
  },
  {
    number: '3',
    title: 'Get Listed, Trust-Built & Booking-Ready',
    subtitle: 'The easiest way to stay eligible.',
    body: 'Receive a public trust badge, generate branded reports, and start appearing on government and institutional booking platforms with verified status.',
    detail: 'With verified documentation and live status tracking, you\u2019re always prepared for the next opportunity.',
  },
]

const maintenance = [
  {
    title: 'Real-Time Tracking & Reminders',
    body: 'Our system monitors every expiration date and sends automatic alerts to your team and vendors before anything lapses.',
  },
  {
    title: 'Multi-Property Oversight',
    body: 'View and manage certifications, staff training, and risk audits across all your locations from a single dashboard. (Multi-Property Plan)',
  },
  {
    title: 'Vendor Coordination & Uploads',
    body: 'We follow up with vendors directly, collect updated documents, and upload them on your behalf\u2014keeping you hands-free. (Concierge Plan)',
  },
  {
    title: 'Continuous Updates & Feature Upgrades',
    body: 'You benefit from evolving government standards, new integrations, and trust-enhancing features\u2014all without extra setup.',
  },
  {
    title: 'Compliance Reports & Audit Prep',
    body: 'Generate downloadable, inspector-ready compliance packets with one click, branded to your property or chain.',
  },
]
</script>

<template>
  <!-- HERO -->
  <section class="bg-ink text-white">
    <div class="container-x pt-[140px] md:pt-[220px] pb-[80px] md:pb-[120px] text-center">
      <h1 class="font-medium leading-[1.05] tracking-tight text-[42px] sm:text-[56px] md:text-[72px] lg:text-[85px]">
        From paperwork<br />
        to peace of mind<br />
        &mdash;in three<br />
        simple steps.
      </h1>
    </div>
  </section>

  <!-- FULL-BLEED PHOTO -->
  <section class="bg-white">
    <img
      src="/images/hero-process.webp"
      alt="Hotel compliance certification process"
      class="hero-img"
    />
  </section>

  <!-- 3 STEPS INTRO -->
  <section class="bg-mist">
    <div class="container-x py-[80px] md:py-[140px]">
      <p class="eyebrow mb-6">The process &ndash; stay certified in 3 steps</p>
      <h2 class="section-heading mb-12">
        How StayCertified&trade; Works
      </h2>
      <div class="grid gap-10 md:grid-cols-2">
        <div>
          <p class="text-ink/80 text-[18px] md:text-[20px] leading-[1.6]">
            Get compliant. Get listed. Get booked. From paperwork chaos to certified clarity&mdash;in just three steps.
          </p>
        </div>
        <div class="space-y-5 text-ink/70 text-[15px] leading-[1.75]">
          <p>
            Compliance shouldn&rsquo;t be complicated. With StayCertified&trade;, your property
            moves from disorganized folders and missed renewals to verified, audit-ready status
            in just a few clicks. We centralize your certifications, verify alignment with GSA and FedRooms standards,
            and position you to win government and institutional bookings&mdash;fast. Whether you&rsquo;re starting from scratch or catching up, we make the path to certification simple, secure, and seamless.
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

  <!-- 3 STEPS -->
  <section class="bg-white">
    <div class="container-x py-[80px] md:py-[140px]">
      <div class="space-y-16 max-w-4xl mx-auto">
        <div
          v-for="step in steps"
          :key="step.number"
          class="grid gap-8 md:grid-cols-[auto_1fr]"
        >
          <div class="flex items-start">
            <div class="w-[60px] h-[60px] rounded-full border-2 border-ink/20 flex items-center justify-center text-[24px] font-light text-ink/60">
              {{ step.number }}
            </div>
          </div>
          <div>
            <h3 class="text-[14px] font-light uppercase tracking-[2px] text-ink mb-3">
              {{ step.title }}
            </h3>
            <p class="text-ink/75 text-[15px] leading-[1.75] mb-4">
              {{ step.body }}
            </p>
            <p class="text-[12px] font-semibold uppercase tracking-[2px] text-ink/40 mb-2">
              {{ step.subtitle }}
            </p>
            <p class="text-ink/60 text-[14px] leading-[1.7]">
              {{ step.detail }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- DARK BANNER -->
  <section class="bg-ink text-white">
    <div class="container-x py-[120px] md:py-[260px] text-center">
      <h2 class="font-light leading-[1.06] tracking-[-2px] text-[38px] md:text-[52px]">
        Certification handled. Start to finish.
      </h2>
    </div>
  </section>

  <!-- FULL-BLEED PHOTO: inspection -->
  <section class="bg-white">
    <img
      src="/images/process-inspection.webp"
      alt="Hotel compliance inspection"
      class="hero-img"
    />
  </section>

  <!-- ONGOING MAINTENANCE -->
  <section class="bg-mist">
    <div class="container-x py-[80px] md:py-[140px]">
      <p class="eyebrow mb-6">The process &ndash; stay certified in 3 steps</p>
      <h2 class="section-heading mb-8">
        StayCertified&trade; Ongoing Maintenance
      </h2>
      <p class="text-ink/80 text-[18px] md:text-[20px] leading-[1.6] max-w-2xl mb-4">
        Set it. Forget it. StayCertified&trade;&mdash;automatically.
        Compliance doesn&rsquo;t end at upload, and neither do we.
      </p>
      <div class="grid gap-10 md:grid-cols-2 mb-16">
        <p class="text-ink/70 text-[15px] leading-[1.75]">
          StayCertified&trade; keeps your property continuously compliant with automatic tracking,
          proactive reminders, and concierge-level vendor coordination.
        </p>
        <p class="text-ink/70 text-[15px] leading-[1.75]">
          Our system monitors expiration dates, notifies your team and service providers, and compiles
          fresh reports&mdash;all without chasing paperwork.
        </p>
      </div>
      <p class="text-ink/70 text-[15px] leading-[1.75] max-w-3xl mb-16">
        For multi-property portfolios, gain centralized oversight and instant insight into risk,
        training, and certification gaps. It&rsquo;s not just maintenance&mdash;it&rsquo;s peace of mind, built in.
      </p>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl">
        <div
          v-for="item in maintenance"
          :key="item.title"
          class="bg-white rounded-lg p-8 border border-rule"
        >
          <div class="flex items-start gap-4">
            <img src="/images/tick-icon.webp" alt="" class="flex-shrink-0 w-9 h-9" />
            <div>
              <h3 class="text-[13px] font-light uppercase tracking-[2px] text-ink">
                {{ item.title }}
              </h3>
              <p class="mt-3 text-ink/70 text-[14px] leading-[1.7]">
                {{ item.body }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PRICING -->
  <PricingSection />
</template>
