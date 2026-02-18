<script setup>
import PageHero from '@/components/PageHero.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import CTASection from '@/components/CTASection.vue'
</script>

<template>
  <PageHero
    subtitle="Our Services"
    title="Bathroom Remodeler"
    description="Bathrooms can be improved for aesthetics and for functionality. Our team works hard to bring you a beautiful design and a practical one."
    compact
  />

  <!-- Intro - Centered -->
  <section class="py-24 lg:py-32">
    <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <div class="flex items-center justify-center gap-3 mb-5">
        <div class="w-8 h-px bg-af-accent"></div>
        <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Premium Quality</span>
        <div class="w-8 h-px bg-af-accent"></div>
      </div>
      <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-4">Bathroom Design and Remodeling</h2>
      <h3 class="text-xl font-heading font-semibold text-af-text mb-6">Is It Time to Remodel or Upgrade Your Bathroom?</h3>
      <div class="space-y-5 text-af-gray text-lg leading-relaxed max-w-2xl mx-auto">
        <p>Do you have a dated bathroom? Our team works hard to not only bring you a beautiful design, but a practical one. Updates can benefit both your eyes and your pocketbook when it comes to resell value and efficiency.</p>
        <p>At Allen and Frey we understand this principle and implement it into every top-to-bottom, well-constructed, remodel that we do. You'll be glad you chose us!</p>
      </div>
    </div>
  </section>

  <!-- What We Consider - Two Column Text -->
  <section class="py-24 lg:py-32 bg-af-light">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Our Approach</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-6">Every Detail Matters</h2>
          <p class="text-af-gray leading-relaxed">Your professional bathroom design and remodel project manager takes all the important things into consideration. Choice of cabinets, faucets and fixtures, flooring, toilets, vanities, showers and bathtubs are all details we like to focus on. We make the process easy so you don't have to worry about getting overwhelmed.</p>
        </div>
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Accessibility</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-6">Senior Friendly Bathrooms</h2>
          <p class="text-af-gray leading-relaxed">Designing safe and accessible bathrooms for seniors is an upgrade that can improve the quality of your life! Age in place, with dignity. Reduce the risk of falling by replacing the bathtub and/or shower with a walk-in version. We also follow ADA guidelines requiring a 5-foot turning radius for easy wheelchair access.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Four Important Elements -->
  <section class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="flex items-center justify-center gap-3 mb-5">
          <div class="w-8 h-px bg-af-accent"></div>
          <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Key Elements</span>
          <div class="w-8 h-px bg-af-accent"></div>
        </div>
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-4">Four Important Elements</h2>
        <p class="text-af-gray text-lg max-w-2xl mx-auto">With Cincinnati homes, there are four important elements to consider when doing a bathroom remodel:</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="bg-af-light p-8 text-center">
          <div class="w-12 h-12 bg-af-accent/10 flex items-center justify-center mx-auto mb-5">
            <svg class="w-6 h-6 text-af-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>
          </div>
          <h3 class="text-lg font-heading font-bold text-af-text mb-3">Layout & Design</h3>
          <p class="text-af-gray leading-relaxed text-sm">Statistics show that renovating a bathroom adds more value to your home.</p>
        </div>
        <div class="bg-af-light p-8 text-center">
          <div class="w-12 h-12 bg-af-accent/10 flex items-center justify-center mx-auto mb-5">
            <svg class="w-6 h-6 text-af-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
          </div>
          <h3 class="text-lg font-heading font-bold text-af-text mb-3">Cabinets</h3>
          <p class="text-af-gray leading-relaxed text-sm">Our team will show you a wide range of cabinetry, in many different styles.</p>
        </div>
        <div class="bg-af-light p-8 text-center">
          <div class="w-12 h-12 bg-af-accent/10 flex items-center justify-center mx-auto mb-5">
            <svg class="w-6 h-6 text-af-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </div>
          <h3 class="text-lg font-heading font-bold text-af-text mb-3">Fixtures</h3>
          <p class="text-af-gray leading-relaxed text-sm">From the shower to the sinks, there is a wide variety to choose from. Seeking elegant or contemporary? Let us impress you!</p>
        </div>
        <div class="bg-af-light p-8 text-center">
          <div class="w-12 h-12 bg-af-accent/10 flex items-center justify-center mx-auto mb-5">
            <svg class="w-6 h-6 text-af-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 6h16.5M3.75 12h16.5m-16.5 6h16.5" /></svg>
          </div>
          <h3 class="text-lg font-heading font-bold text-af-text mb-3">Flooring</h3>
          <p class="text-af-gray leading-relaxed text-sm">Create the look and feel you desire with floors that work for your space.</p>
        </div>
      </div>
      <div class="mt-12 text-center">
        <p class="text-af-gray text-lg max-w-2xl mx-auto">Let us take that stress off your shoulders! Your newly remodeled bathroom will be beautiful and functional. Allen and Frey have been remodeling bathrooms for years!</p>
      </div>
    </div>
  </section>

  <!-- Highlighted Quote -->
  <section class="py-20 bg-af-dark">
    <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <p class="text-white text-xl md:text-2xl font-heading font-semibold leading-relaxed">"A new bathroom will not only bring appeal and equity to your home, but protection from built-up contaminants as well as more needed functionality, sustainability, and safety to all who use it."</p>
      <div class="flex flex-wrap justify-center gap-4 mt-10">
        <router-link to="/get-started" class="bg-af-accent text-white px-10 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-af-accent-light transition-all duration-300">
          Start Your Project
        </router-link>
        <a href="tel:5138716679" class="border border-white/30 text-white px-10 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-white/10 transition-all duration-300">
          Call 513-871-6679
        </a>
      </div>
    </div>
  </section>

  <ProcessSection />
  <CTASection />
</template>
