<script setup>
import PageHero from '@/components/PageHero.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import CTASection from '@/components/CTASection.vue'
</script>

<template>
  <PageHero
    subtitle="Our Services"
    title="Bathroom Remodeling"
    description="Bathrooms can be improved for aesthetics, but also for functionality! Our design and construction team brings you the best of both worlds."
  />

  <section class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Premium Quality</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-6">High-End Bathroom Remodels</h2>
          <div class="space-y-5 text-af-gray leading-relaxed">
            <p>Our bathroom remodeling team works hard to not only bring you a beautiful design but a practical one. Updates can be beneficial for the eyes but also for your pocketbook when it comes to the water bill.</p>
            <p>Replacing the toilet can be taxing; they are heavy and fragile. The plumbing can be intricate and tedious. Leave it to the licensed contractors at Allen & Frey to ensure proper operation!</p>
            <p>One of the biggest eye-sores of a bathroom can be an old sink. There is such a vast array of newer designs out there that the options are endless! One of the best reasons to redo your bathroom is the tub/shower. We start with a high-end bathroom design, and then implement the plan accordingly.</p>
            <p>Trying to coordinate the high-end bathroom remodel features you are wanting can make your head spin. Don't waste your time and energy. Let us take that stress off your shoulders. We create dream bathrooms!</p>
          </div>
        </div>
        <div>
          <img src="/images/hyde-park-bath-update-02-400x284.jpeg" alt="High-end bathroom remodel by Allen & Frey" class="w-full shadow-2xl" loading="lazy">
        </div>
      </div>
    </div>
  </section>

  <ProcessSection />
  <CTASection />
</template>
