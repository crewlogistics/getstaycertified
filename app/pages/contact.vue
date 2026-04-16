<script setup lang="ts">
definePageMeta({ layout: 'default' })

useHead({
  title: 'Contact - StayCertified',
  meta: [
    { name: 'description', content: 'Get in touch with StayCertified. We\u2019re here to help your property get compliant and stay certified.' },
  ],
})
</script>

<template>
  <!-- HERO -->
  <section class="bg-ink text-white">
    <div class="container-x py-32 md:py-48 text-center">
      <h1 class="font-medium leading-[1.05] tracking-tight text-[48px] sm:text-[64px] md:text-[78px] lg:text-[85px]">
        Real People.<br />
        Real Help.
      </h1>
    </div>
  </section>

  <!-- TEAM PHOTO -->
  <section class="bg-white">
    <img
      src="/images/team.webp"
      alt="The StayCertified team"
      class="hero-img"
    />
  </section>

  <!-- CONTACT FORM -->
  <section class="bg-white">
    <div class="container-x py-[80px] md:py-[140px]">
      <div class="max-w-2xl mx-auto">
        <div class="text-center mb-12">
          <p class="eyebrow mb-6">We&rsquo;re here to help</p>
          <h2 class="section-heading">
            We love talking about what we do and the difference we can make.
          </h2>
          <p class="mt-6 text-ink/75 text-[16px] leading-[1.7]">
            Fill in some details and we&rsquo;ll be in touch!
          </p>
        </div>

        <form class="space-y-6" @submit.prevent>
          <div class="grid gap-6 md:grid-cols-2">
            <div>
              <label for="firstName" class="block text-[12px] font-medium uppercase tracking-[0.08em] text-ink/60 mb-2">First Name</label>
              <input
                id="firstName"
                type="text"
                class="w-full rounded-lg border border-rule px-4 py-3 text-[15px] text-ink focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral"
                placeholder="Your first name"
              />
            </div>
            <div>
              <label for="lastName" class="block text-[12px] font-medium uppercase tracking-[0.08em] text-ink/60 mb-2">Last Name</label>
              <input
                id="lastName"
                type="text"
                class="w-full rounded-lg border border-rule px-4 py-3 text-[15px] text-ink focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral"
                placeholder="Your last name"
              />
            </div>
          </div>

          <div>
            <label for="email" class="block text-[12px] font-medium uppercase tracking-[0.08em] text-ink/60 mb-2">Email</label>
            <input
              id="email"
              type="email"
              class="w-full rounded-lg border border-rule px-4 py-3 text-[15px] text-ink focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral"
              placeholder="you@hotel.com"
            />
          </div>

          <div>
            <label for="property" class="block text-[12px] font-medium uppercase tracking-[0.08em] text-ink/60 mb-2">Property Name</label>
            <input
              id="property"
              type="text"
              class="w-full rounded-lg border border-rule px-4 py-3 text-[15px] text-ink focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral"
              placeholder="Hotel / Property name"
            />
          </div>

          <div>
            <label for="message" class="block text-[12px] font-medium uppercase tracking-[0.08em] text-ink/60 mb-2">Message</label>
            <textarea
              id="message"
              rows="5"
              class="w-full rounded-lg border border-rule px-4 py-3 text-[15px] text-ink focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral resize-none"
              placeholder="How can we help?"
            />
          </div>

          <div class="text-center pt-4">
            <button
              type="submit"
              class="btn-coral-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>

  <!-- PRICING -->
  <PricingSection />
</template>
