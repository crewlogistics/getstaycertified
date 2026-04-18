<script setup lang="ts">
const plans = [
  {
    name: 'Starter',
    subtitle: 'For small independent properties. 1-50 Rooms',
    monthlyPrice: '99',
    annualPrice: '82',
    features: [
      'Store up to 10 certifications',
      'Self-managed vendor log',
      'Renewal reminders',
      'Guest trust badge',
    ],
    solvesLabel: 'Solve issues like:',
    solves: ['Scattered paperwork', 'Missed renewal deadlines', 'No public-facing compliance signal'],
    featured: false,
  },
  {
    name: 'Pro',
    subtitle: 'For boutique or mid-sized properties. 51-100 Rooms',
    monthlyPrice: '199',
    annualPrice: '165',
    features: [
      'Everything in Starter plus:',
      'Automated reminders',
      'Guest trust widget',
      'Manage up to 25 certifications',
    ],
    solvesLabel: 'Great for:',
    solves: ['Audit Preparation', 'Boosting guest confidence'],
    featured: false,
  },
  {
    name: 'Concierge',
    subtitle: 'For hotels that want "done for you" compliance',
    monthlyPrice: '399',
    annualPrice: '331',
    features: [
      'Everything in Pro plus:',
      'Vendor coordination',
      'Certificate uploads',
      'Priority concierge support',
    ],
    solvesLabel: 'Solve issues like:',
    solves: ['Time-strapped teams', 'Vendor follow-up headaches', 'Preventing compliance gaps'],
    featured: true,
  },
  {
    name: 'Enterprise',
    subtitle: 'For property chains or franchises. 100+ Rooms',
    monthlyPrice: '900+',
    annualPrice: '747+',
    features: [
      'Everything in Concierge plus:',
      'Training + KYC tracking',
      'Insurance export reports',
      'Enterprise-level compliance controls',
    ],
    solvesLabel: 'Solve issues like:',
    solves: ['Multi-site visibility', 'Corporate compliance consistency', 'Reducing brand-wide liability'],
    featured: false,
  },
]

const billing = ref<'monthly' | 'annual'>('monthly')

const displayPrice = (plan: typeof plans[number]) => {
  return billing.value === 'annual' ? plan.annualPrice : plan.monthlyPrice
}

const displayPeriod = computed(() => {
  return billing.value === 'annual' ? '/ month, billed annually' : '/ month'
})
</script>

<template>
  <!-- PRICING INTRO -->
  <section class="bg-mist">
    <div class="container-x py-[80px] md:py-[140px]">
      <p class="eyebrow mb-6">Compliance made scalable</p>
      <h2 class="section-heading mb-12">
        Smart, flexible pricing that grows with your property&mdash;compliance made effortless
      </h2>
      <div class="grid gap-10 md:grid-cols-2 text-ink/75 text-[15px] leading-[1.75]">
        <p>
          StayCertified&trade; helps all types of lodging providers&mdash;hotels, motels, inns,
          camps, and workforce housing properties&mdash;stay compliant. No matter how many
          properties you manage, we&rsquo;ve got you covered with tiered plans built to match
          your scale.
        </p>
        <p>
          Whether you run one property or many, StayCertified&trade; offers flexible plans to
          match your compliance needs.
        </p>
      </div>
    </div>
  </section>

  <!-- PRICING CARDS -->
  <section id="pricing" class="bg-mist">
    <div class="container-x py-[100px] md:py-[160px]">
      <h3 class="text-center text-[22px] md:text-[26px] font-medium text-ink">
        Save up to 17% with an Annual Plan
      </h3>

      <!-- Monthly / Annual toggle -->
      <div class="mt-8 flex justify-center">
        <div class="inline-flex items-center rounded-full bg-ink p-1">
          <button
            type="button"
            :class="[
              'px-6 py-2 rounded-full text-[12px] font-medium uppercase tracking-wider transition',
              billing === 'monthly' ? 'bg-coral text-white' : 'text-white/70 hover:text-white',
            ]"
            @click="billing = 'monthly'"
          >
            Monthly
          </button>
          <button
            type="button"
            :class="[
              'px-6 py-2 rounded-full text-[12px] font-medium uppercase tracking-wider transition',
              billing === 'annual' ? 'bg-coral text-white' : 'text-white/70 hover:text-white',
            ]"
            @click="billing = 'annual'"
          >
            Annual
          </button>
        </div>
      </div>

      <div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="plan in plans"
          :key="plan.name"
          :class="[
            'relative flex flex-col rounded-lg p-8 transition',
            plan.featured
              ? 'bg-ink text-white shadow-xl'
              : 'bg-white text-ink border border-rule',
          ]"
        >
          <h3 class="text-[22px] font-semibold" :class="plan.featured ? 'text-white' : 'text-ink'">
            {{ plan.name }}
          </h3>
          <p
            class="mt-2 text-[12px] leading-[1.5] min-h-[3rem]"
            :class="plan.featured ? 'text-white/70' : 'text-ink/60'"
          >
            {{ plan.subtitle }}
          </p>

          <div class="mt-6 flex items-baseline">
            <span class="text-[18px]" :class="plan.featured ? 'text-white/70' : 'text-ink/60'">$</span>
            <span class="text-[48px] font-semibold leading-none" :class="plan.featured ? 'text-white' : 'text-ink'">
              {{ displayPrice(plan) }}
            </span>
            <span class="ml-1 text-[13px]" :class="plan.featured ? 'text-white/70' : 'text-ink/60'">
              {{ displayPeriod }}
            </span>
          </div>

          <div class="mt-6">
            <NuxtLink
              to="/contact"
              :class="[
                'inline-flex items-center justify-center rounded-[20px] px-6 py-[10px] text-[11px] font-semibold uppercase tracking-[0.08em] transition',
                plan.featured
                  ? 'bg-coral text-white hover:bg-coral-hover'
                  : 'border border-coral text-coral hover:bg-coral hover:text-white',
              ]"
            >
              Enquire Now
            </NuxtLink>
          </div>

          <ul class="mt-7 space-y-3 text-[13px] leading-[1.5]">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="flex items-start gap-2"
            >
              <svg
                class="mt-0.5 h-4 w-4 flex-shrink-0"
                :class="plan.featured ? 'text-coral' : 'text-tick'"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fill-rule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clip-rule="evenodd"/>
              </svg>
              <span :class="plan.featured ? 'text-white/90' : 'text-ink/80'">{{ feature }}</span>
            </li>
          </ul>

          <div class="mt-6 pt-5 border-t" :class="plan.featured ? 'border-white/15' : 'border-rule'">
            <p
              class="text-[11px] font-medium mb-3"
              :class="plan.featured ? 'text-white/60' : 'text-ink/50'"
            >
              {{ plan.solvesLabel }}
            </p>
            <ul class="space-y-2 text-[12px] leading-[1.5]">
              <li
                v-for="item in plan.solves"
                :key="item"
                class="flex items-start gap-2"
              >
                <span class="mt-0.5" :class="plan.featured ? 'text-white/40' : 'text-ink/30'">&mdash;</span>
                <span :class="plan.featured ? 'text-white/75' : 'text-ink/70'">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
