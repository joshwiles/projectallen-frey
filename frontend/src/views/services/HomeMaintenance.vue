<script setup>
import PageHero from '@/components/PageHero.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import CTASection from '@/components/CTASection.vue'
</script>

<template>
  <PageHero
    subtitle="Our Services"
    title="Home Maintenance"
    description="Allen & Frey understands that a lot of homeowners don't have the time or knowledge to update their homes alone."
  />

  <section class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-8 h-px bg-af-accent"></div>
          <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">We're Here to Help</span>
        </div>
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-6">Home Maintenance Services</h2>
        <div class="space-y-5 text-af-gray leading-relaxed">
          <p>Allen & Frey understands that a lot of homeowners don't have the time or knowledge to update their homes alone. Ever start a project and then halfway through realize that you should have called a professional?</p>
          <p>There are millions of people that get encouragement from YouTube or their neighbor that an update such as installing a new light fixture or doing some electrical wiring work can be done by the homeowner. Now, don't get us wrong, some people are phenomenal at DIY. We commend you!</p>
          <p>For the rest, we are here for you. Don't take on more than you can bear. Let our home remodeling and home maintenance team take the burden of raising your homes equity. In the long run, you'll thank us!</p>
        </div>
      </div>
    </div>
  </section>

  <ProcessSection />
  <CTASection />
</template>
