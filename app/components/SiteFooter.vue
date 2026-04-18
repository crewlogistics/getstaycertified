<template>
  <footer id="contact" class="bg-ink text-white">
    <!-- Top bar: logo -->
    <div class="container-x pt-[80px] md:pt-[100px] pb-[60px] md:pb-[80px]">
      <NuxtLink to="/">
        <img src="/images/logo-white.svg" alt="StayCertified" class="h-[26px] w-auto" />
      </NuxtLink>
    </div>

    <!-- Main footer content -->
    <div class="container-x grid gap-14 md:grid-cols-[1fr_300px] pb-[80px] md:pb-[120px]">
      <div>
        <p class="text-[20px] md:text-[24px] leading-[1.4] font-light text-white/90 max-w-md">
          We don&rsquo;t build hotels.<br />
          We build the trust<br />
          layer they run on.
        </p>
      </div>

      <div>
        <h4 class="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">Company</h4>
        <ul class="space-y-2 text-[14px] text-white/80">
          <li>
            <NuxtLink to="/contact" class="hover:text-white">Contact</NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom strip -->
    <div class="border-t border-white/10">
      <div class="container-x py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <img src="/images/built-on-hedera.png" alt="Built on Hedera Hashgraph" class="h-10 w-auto opacity-90" />

        <p class="text-[11px] text-white/40 text-center md:text-left max-w-2xl leading-relaxed">
          &ldquo;Hedera&rdquo; is a trademark of Hedera Hashgraph, LLC. StayCertified is not affiliated with,
          sponsored, or endorsed by Hedera Hashgraph, LLC. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
