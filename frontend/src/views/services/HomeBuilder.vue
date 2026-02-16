<script setup>
import PageHero from '@/components/PageHero.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import CTASection from '@/components/CTASection.vue'
</script>

<template>
  <PageHero
    subtitle="Our Services"
    title="Home Building"
    description="Let Allen & Frey design and build your dream home in your dream location. We focus on quality construction and the details that matter."
  />

  <section class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Custom Builds</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-6">We Are Home Builders</h2>
          <div class="space-y-5 text-af-gray leading-relaxed">
            <p>At Allen & Frey we don't just remodel, we also build homes from scratch. If you are looking for home builders that specialize in high-end design and quality materials, look no further. We can build it in the location you choose just the way you want it.</p>
            <p>Our builders understand that customization really is a huge plus when it comes to buying a home. We want to make sure the house becomes a home by fitting it to your style and needs.</p>
            <p>Allen & Frey will make sure you have the chance to choose the latest technological advances from solar panels to autonomous heating and air control. We will give your dream home the attention it deserves keeping you in the loop every step of the way. At Allen & Frey our team is your team. We will work hard and with you in planning what works!</p>
          </div>
        </div>
        <div>
          <img src="/images/oakley-leed-platinum-build-01-400x284.jpeg" alt="New home construction by Allen & Frey" class="w-full shadow-2xl" loading="lazy">
        </div>
      </div>
    </div>
  </section>

  <ProcessSection />
  <CTASection />
</template>
