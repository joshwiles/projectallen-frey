<script setup>
import PageHero from '@/components/PageHero.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import CTASection from '@/components/CTASection.vue'
</script>

<template>
  <PageHero
    subtitle="Our Services"
    title="Kitchen Remodeling"
    description="Allen & Frey is well known for creating professional top to bottom well-constructed remodels. We build kitchens beyond your dreams."
  />

  <section class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Premium Quality</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-6">Chef-Quality Kitchens</h2>
          <div class="space-y-5 text-af-gray leading-relaxed">
            <p>We are not your average every-day remodeling company. Our chef-quality kitchens will go beyond your expectations. We have the vision and talent to create the dream kitchen your home craves!</p>
            <p>Trends are changing. The counter-tops of today vary greatly from the counter-tops of yesterday. Installing a clean updated look with a new counter-top can make all the difference. Kitchen cabinets are the crown of the room. We work with quality suppliers for semi-custom and custom cabinets.</p>
            <p>A creative back-splash not only adds style, elegance, and personality, but you can raise the value of your home most definitely. Create more counter space and a bonus of storage easily with an island. Need new appliances? Our kitchen design and remodeling team install and test them.</p>
          </div>
        </div>
        <div>
          <img src="/images/the-overlook-40-510x382.jpeg" alt="Chef-quality kitchen remodel by Allen & Frey" class="w-full shadow-2xl" loading="lazy">
        </div>
      </div>
    </div>
  </section>

  <ProcessSection />
  <CTASection />
</template>
