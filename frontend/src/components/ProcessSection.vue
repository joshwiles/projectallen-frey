<script setup>
defineProps({
  bg: { type: String, default: 'bg-af-light' }
})
</script>

<template>
  <section :class="['py-24 lg:py-32', bg]">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="w-8 h-px bg-af-accent"></div>
          <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Our Process</span>
          <div class="w-8 h-px bg-af-accent"></div>
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-af-text mb-5">How We Work</h2>
        <p class="text-af-gray max-w-2xl mx-auto leading-relaxed">We've developed a meticulous process designed to turn your vision into reality, keeping you informed every step of the way.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
        <div class="text-center group relative">
          <div class="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-af-border"></div>
          <div class="relative mx-auto mb-6 w-20 h-20 flex items-center justify-center">
            <img src="/images/allen-frey-number-icons-1.png" alt="Step 1" class="w-16 h-16 group-hover:scale-110 transition-transform duration-500">
          </div>
          <h3 class="text-xl font-heading font-bold text-af-text mb-3">Discovery & Consultation</h3>
          <p class="text-af-gray leading-relaxed">We start by getting to know you and your vision through an initial consultation, gathering essential information about your project scope and unique needs.</p>
        </div>
        <div class="text-center group relative">
          <div class="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-af-border"></div>
          <div class="relative mx-auto mb-6 w-20 h-20 flex items-center justify-center">
            <img src="/images/allen-frey-number-icons-2.png" alt="Step 2" class="w-16 h-16 group-hover:scale-110 transition-transform duration-500">
          </div>
          <h3 class="text-xl font-heading font-bold text-af-text mb-3">Design & Planning</h3>
          <p class="text-af-gray leading-relaxed">Our team of experts collaborates closely with you to develop a customized plan that aligns with your vision, budget, and timeline.</p>
        </div>
        <div class="text-center group">
          <div class="relative mx-auto mb-6 w-20 h-20 flex items-center justify-center">
            <img src="/images/allen-frey-number-icons-3.png" alt="Step 3" class="w-16 h-16 group-hover:scale-110 transition-transform duration-500">
          </div>
          <h3 class="text-xl font-heading font-bold text-af-text mb-3">Execution & Completion</h3>
          <p class="text-af-gray leading-relaxed">Our skilled craftsmen bring your vision to life with precision and care, maintaining open communication and keeping you informed of progress.</p>
        </div>
      </div>
    </div>
  </section>
</template>
