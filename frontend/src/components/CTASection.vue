<template>
  <section class="relative py-24 lg:py-32 overflow-hidden">
    <div class="absolute inset-0 bg-af-dark"></div>
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: url('/images/the-overlook-40-510x382.jpeg'); background-size: cover; background-position: center;"></div>
    </div>
    <div class="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <div class="flex items-center justify-center gap-3 mb-6">
        <div class="w-8 h-px bg-af-accent"></div>
        <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Get Started</span>
        <div class="w-8 h-px bg-af-accent"></div>
      </div>
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">Ready For Your Next Project?</h2>
      <p class="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">For nearly 40 years we have provided Cincinnati homeowners with the highest quality contractor service in the industry.</p>
      <div class="flex flex-wrap justify-center gap-4">
        <router-link to="/get-started" class="bg-af-accent text-white px-10 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-af-accent-light transition-all duration-300">
          Start Your Project
        </router-link>
        <router-link to="/contact-us" class="border border-white/30 text-white px-10 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-white/10 transition-all duration-300">
          Contact Us
        </router-link>
      </div>
    </div>
  </section>
</template>
