<script setup lang="ts">
const nav = [
  { label: 'Why StayCertified', href: '/' },
  { label: 'The Process', href: '/the-process' },
  { label: 'Features', href: '/features' },
]

const certifications = [
  { label: 'Back Office and Finance', href: '/certifications/back-office-and-finance' },
  { label: 'Environmental & Sustainability', href: '/certifications/environmental-sustainability' },
  { label: 'Food and Beverage', href: '/certifications/food-and-beverage' },
  { label: 'Fire, Life and Safety', href: '/certifications/fire-life-safety' },
  { label: 'Fitness, Spa & Wellness', href: '/certifications/fitness-spa-wellness' },
  { label: 'Front Desk / Concierge', href: '/certifications/front-desk-concierge' },
  { label: 'Housekeeping', href: '/certifications/housekeeping' },
  { label: 'HR / Security / Ops', href: '/certifications/hr-security-ops' },
  { label: 'Laundry and Linen Services', href: '/certifications/laundry-and-linen-services' },
  { label: 'Maintenance and Engineering', href: '/certifications/maintenance-and-engineering' },
]

const mobileOpen = ref(false)
</script>

<template>
  <header class="sticky top-0 z-50 bg-ink">
    <div class="container-x flex items-center justify-between h-[72px]">
      <NuxtLink to="/" class="flex items-center">
        <img src="/images/logo-white.svg" alt="StayCertified" class="h-[26px] w-auto" />
      </NuxtLink>

      <nav class="hidden lg:flex items-center gap-10">
        <NuxtLink
          v-for="item in nav"
          :key="item.label"
          :to="item.href"
          class="nav-link"
        >{{ item.label }}</NuxtLink>

        <div class="relative group">
          <NuxtLink to="/certifications" class="nav-link flex items-center gap-1">
            Certifications<span class="text-coral">*</span>
            <svg class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path d="M5.5 7.5l4.5 4.5 4.5-4.5"/></svg>
          </NuxtLink>
          <div class="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition absolute left-1/2 top-full -translate-x-1/2 pt-4">
            <div class="w-72 rounded-md border border-white/10 bg-ink p-2 shadow-2xl">
              <NuxtLink
                v-for="c in certifications"
                :key="c.label"
                :to="c.href"
                class="block rounded px-3 py-2 text-[12px] uppercase tracking-wider text-[#9aa3ad] hover:bg-white/5 hover:text-white"
              >{{ c.label }}</NuxtLink>
            </div>
          </div>
        </div>
      </nav>

      <div class="hidden lg:block">
        <NuxtLink to="/contact" class="btn-coral">Stay Certified Now</NuxtLink>
      </div>

      <button
        class="lg:hidden p-2 text-white"
        aria-label="Menu"
        @click="mobileOpen = !mobileOpen"
      >
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>

    <div v-if="mobileOpen" class="lg:hidden border-t border-white/10 bg-ink">
      <div class="container-x py-4 space-y-2">
        <NuxtLink
          v-for="item in nav"
          :key="item.label"
          :to="item.href"
          class="block py-2 nav-link"
          @click="mobileOpen = false"
        >{{ item.label }}</NuxtLink>
        <details class="py-1">
          <summary class="cursor-pointer py-2 nav-link">Certifications*</summary>
          <div class="pl-4 pb-2 space-y-1">
            <NuxtLink
              v-for="c in certifications"
              :key="c.label"
              :to="c.href"
              class="block py-1.5 text-[12px] uppercase tracking-wider text-[#9aa3ad]"
              @click="mobileOpen = false"
            >{{ c.label }}</NuxtLink>
          </div>
        </details>
        <NuxtLink to="/contact" class="btn-coral mt-2" @click="mobileOpen = false">Stay Certified Now</NuxtLink>
      </div>
    </div>
  </header>
</template>
