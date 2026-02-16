<script setup>
import PageHero from '@/components/PageHero.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import CTASection from '@/components/CTASection.vue'
</script>

<template>
  <PageHero
    subtitle="Our Services"
    title="Room Additions"
    description="Room additions are the answer for families that love their home. Life happens, and sometimes there just aren't enough rooms."
  />

  <section class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Expand Your Home</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-6">Room Additions</h2>
          <div class="space-y-5 text-af-gray leading-relaxed">
            <p>Room additions are the answer for families that love their home. Life happens, and sometimes there just aren't enough rooms in the home. Let us add some! Our jobs are well-thought-out, with all aspects of construction considered.</p>
            <p>We understand that rooms additions are a big deal. We keep the look and feel of the original architecture in mind from start to finish. We are transparent and thorough with the job. You will have full disclosure and understanding from throughout the process of building your room addition project.</p>
            <p>Leaving rooms additions to licensed professionals cannot be overstated. With the high expense of this type of job, you want to ensure that it is done right. No matter if it's an office or a new baby's room we have the skills needed to efficiently add on to your home.</p>
          </div>
        </div>
        <div>
          <img src="/images/east-walnut-hille-project-01-400x284.jpeg" alt="Room addition project by Allen & Frey" class="w-full shadow-2xl" loading="lazy">
        </div>
      </div>
    </div>
  </section>

  <ProcessSection />
  <CTASection />
</template>
