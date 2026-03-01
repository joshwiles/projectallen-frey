<script setup>
defineProps({
  bg: { type: String, default: 'bg-af-light' }
})
</script>

<template>
  <section :class="['py-24 lg:py-32', bg]">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16" v-reveal>
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="w-8 h-px bg-af-accent"></div>
          <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Our Process</span>
          <div class="w-8 h-px bg-af-accent"></div>
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-af-text mb-5">How We Work</h2>
        <p class="text-af-gray max-w-2xl mx-auto leading-relaxed">Every project starts with a conversation — in your home, in your neighborhood. We build a plan around your vision, not a one-size-fits-all package.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
        <div v-reveal="{ delay: 0 }" class="text-center group relative">
          <div class="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-af-border"></div>
          <div class="relative mx-auto mb-6 w-20 h-20 flex items-center justify-center">
            <img src="/images/allen-frey-number-icons-1.png" alt="Step 1" class="w-16 h-16 group-hover:scale-110 transition-transform duration-500">
          </div>
          <h3 class="text-xl font-heading font-bold text-af-text mb-3">Discovery & Consultation</h3>
          <p class="text-af-gray leading-relaxed">We sit down with you — in your home, in your neighborhood — to understand your vision, your goals, and what matters most to you and your family.</p>
        </div>
        <div v-reveal="{ delay: 150 }" class="text-center group relative">
          <div class="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-af-border"></div>
          <div class="relative mx-auto mb-6 w-20 h-20 flex items-center justify-center">
            <img src="/images/allen-frey-number-icons-2.png" alt="Step 2" class="w-16 h-16 group-hover:scale-110 transition-transform duration-500">
          </div>
          <h3 class="text-xl font-heading font-bold text-af-text mb-3">Design & Planning</h3>
          <p class="text-af-gray leading-relaxed">Our local Cincinnati team builds a custom plan around your home, your style, and your budget. No cookie-cutter solutions — everything tailored to you.</p>
        </div>
        <div v-reveal="{ delay: 300 }" class="text-center group">
          <div class="relative mx-auto mb-6 w-20 h-20 flex items-center justify-center">
            <img src="/images/allen-frey-number-icons-3.png" alt="Step 3" class="w-16 h-16 group-hover:scale-110 transition-transform duration-500">
          </div>
          <h3 class="text-xl font-heading font-bold text-af-text mb-3">Build & Delivery</h3>
          <p class="text-af-gray leading-relaxed">Our master craftsmen bring your project to life with precision and care. We finish what we start — on time, on budget, and to the highest standard.</p>
        </div>
      </div>
    </div>
  </section>
</template>
