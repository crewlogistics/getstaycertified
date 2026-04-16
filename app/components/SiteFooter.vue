<template>
  <footer id="contact" class="bg-ink text-white">
    <!-- Top bar: logo -->
    <div class="container-x pt-16 pb-10">
      <NuxtLink to="/">
        <img src="/images/logo-white.svg" alt="StayCertified" class="h-[26px] w-auto" />
      </NuxtLink>
    </div>

    <!-- Main footer content -->
    <div class="container-x grid gap-14 md:grid-cols-[1fr_200px] pb-16">
      <div>
        <p class="text-[28px] md:text-[34px] leading-[1.25] font-medium max-w-xl">
          We don&rsquo;t build hotels.<br />
          We build the trust layer they run on.
        </p>
      </div>

      <div>
        <h4 class="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50 mb-4">Company</h4>
        <ul class="space-y-2 text-sm text-white/80">
          <li>
            <NuxtLink to="/contact" class="hover:text-white">Contact</NuxtLink>
          </li>
          <li>
            <a href="mailto:compliance@getstaycertified.com" class="hover:text-white">compliance@getstaycertified.com</a>
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

        <a href="#" aria-label="LinkedIn" class="text-white/60 hover:text-white">
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 3H3.55A.55.55 0 003 3.55v16.9a.55.55 0 00.55.55h16.9a.55.55 0 00.55-.55V3.55A.55.55 0 0020.45 3zM8.84 18.3H5.94V9.75h2.9v8.55zM7.39 8.47a1.68 1.68 0 11.01-3.36 1.68 1.68 0 01-.01 3.36zM18.3 18.3h-2.9v-4.15c0-1 0-2.27-1.38-2.27s-1.6 1.08-1.6 2.2v4.22h-2.9V9.75h2.79v1.17h.04a3.06 3.06 0 012.75-1.5c2.94 0 3.48 1.93 3.48 4.45v4.43z"/></svg>
        </a>
      </div>
    </div>
  </footer>
</template>
