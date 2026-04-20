<script setup lang="ts">
definePageMeta({ layout: 'default' })

useHead({
  title: 'Contact - StayCertified',
  meta: [
    { name: 'description', content: 'Get in touch with StayCertified. We\u2019re here to help your property get compliant and stay certified.' },
    { property: 'og:title', content: 'Contact - StayCertified' },
    { property: 'og:description', content: 'Get in touch with StayCertified. We\u2019re here to help your property get compliant and stay certified.' },
    { property: 'og:url', content: 'https://getstaycertified.com/contact' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://getstaycertified.com/images/front-desk.webp' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Contact - StayCertified' },
    { name: 'twitter:description', content: 'Get in touch with StayCertified. We\u2019re here to help your property get compliant and stay certified.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://getstaycertified.com/contact' },
  ],
})

const submitted = ref(false)

async function submitForm(e: Event) {
  const form = e.target as HTMLFormElement
  const formData = new FormData(form)

  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    })
    submitted.value = true
  } catch (err) {
    alert('Something went wrong. Please try again.')
  }
}
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

        <form
          v-if="!submitted"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          class="space-y-6"
          @submit.prevent="submitForm"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p class="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>
          <div class="grid gap-6 md:grid-cols-2">
            <div>
              <label for="firstName" class="block text-[12px] font-medium uppercase tracking-[0.08em] text-ink/60 mb-2">First Name *</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                class="w-full rounded-lg border border-rule px-4 py-3 text-[15px] text-ink focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral"
                placeholder="Your first name"
              />
            </div>
            <div>
              <label for="lastName" class="block text-[12px] font-medium uppercase tracking-[0.08em] text-ink/60 mb-2">Last Name *</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                class="w-full rounded-lg border border-rule px-4 py-3 text-[15px] text-ink focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral"
                placeholder="Your last name"
              />
            </div>
          </div>

          <div>
            <label for="email" class="block text-[12px] font-medium uppercase tracking-[0.08em] text-ink/60 mb-2">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              class="w-full rounded-lg border border-rule px-4 py-3 text-[15px] text-ink focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral"
              placeholder="you@hotel.com"
            />
          </div>

          <div>
            <label for="company" class="block text-[12px] font-medium uppercase tracking-[0.08em] text-ink/60 mb-2">Company Name *</label>
            <input
              id="company"
              name="company"
              type="text"
              required
              class="w-full rounded-lg border border-rule px-4 py-3 text-[15px] text-ink focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral"
              placeholder="Your company name"
            />
          </div>

          <div>
            <label for="position" class="block text-[12px] font-medium uppercase tracking-[0.08em] text-ink/60 mb-2">Your Position *</label>
            <input
              id="position"
              name="position"
              type="text"
              required
              class="w-full rounded-lg border border-rule px-4 py-3 text-[15px] text-ink focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral"
              placeholder="Your role or title"
            />
          </div>

          <div class="grid gap-6 md:grid-cols-2">
            <div>
              <label for="phone" class="block text-[12px] font-medium uppercase tracking-[0.08em] text-ink/60 mb-2">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                class="w-full rounded-lg border border-rule px-4 py-3 text-[15px] text-ink focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral"
                placeholder="Your phone number"
              />
            </div>
            <div>
              <label for="employees" class="block text-[12px] font-medium uppercase tracking-[0.08em] text-ink/60 mb-2">Number of Employees *</label>
              <select
                id="employees"
                name="employees"
                required
                class="w-full rounded-lg border border-rule px-4 py-3 text-[15px] text-ink focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral bg-white"
              >
                <option value="">Please select</option>
                <option value="1-49">1-49</option>
                <option value="50-99">50-99</option>
                <option value="100-499">100-499</option>
                <option value="499-999">499-999</option>
                <option value="1000+">1000+</option>
              </select>
            </div>
          </div>

          <div>
            <label for="message" class="block text-[12px] font-medium uppercase tracking-[0.08em] text-ink/60 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
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
              Say Hello
            </button>
          </div>
        </form>

        <!-- Success message -->
        <div v-if="submitted" class="text-center py-16">
          <h3 class="text-[28px] font-light text-ink mb-4">Thank you!</h3>
          <p class="text-ink/70 text-[16px] leading-[1.7]">
            We&rsquo;ve received your message and will be in touch shortly.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- PRICING -->
  <PricingSection />
</template>
