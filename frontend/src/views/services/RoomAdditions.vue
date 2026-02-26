<script setup>
import PageHero from '@/components/PageHero.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import CTASection from '@/components/CTASection.vue'
</script>

<template>
  <PageHero
    subtitle="Our Services"
    title="Room Additions"
    description="With Allen & Frey you can expect only the best in service and installation. Our jobs are well thought out, with all aspects of construction considered."
    compact
  />

  <!-- Two Column: Done Right + Local & Trusted -->
  <section class="py-24 lg:py-32 bg-af-light">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Done Right</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-6">Room Additions Done Right</h2>
          <div class="space-y-5 text-af-gray leading-relaxed">
            <p>With Allen & Frey's home-building knowledge we can work with you on what is possible and logical when it comes to fitting your needs. We know that your everyday person usually does not have the knowledge of what will work when constructing a home. That is why we take the time to go over plans and ensure that this big undertaking is a success.</p>
            <p>We understand that room additions are a big deal. It can be a huge expense that can come with unexpected surprises. Which sometimes means more time and money being involved in the process. Our team is transparent and thorough throughout the entirety of the job. You will have full disclosure and understanding from start to finish. We are in this together.</p>
          </div>
        </div>
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Expand Your Home</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-4">Has your family grown or are you starting a business?</h2>
          <h3 class="text-xl font-heading font-semibold text-af-text mb-6">Sometimes you just don't have enough rooms. Let us add them!</h3>
          <div class="space-y-5 text-af-gray leading-relaxed">
            <p>Oftentimes, when we buy homes they don't totally meet our expectations at the time of purchase. We figure that we can change things overtime to meet our needs. Our lives also change in that process. When the home was bought maybe the family was smaller or you've taken up a work-from-home situation. No matter if it's an office or a new baby's room, we have the skills needed to efficiently add on to your home.</p>
            <p>Leaving room additions to the licensed professionals cannot be overstated. With the high expense of this type of job, you want to ensure that it is done right.</p>
          </div>
        </div>
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Local & Trusted</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-6">Local Construction Company</h2>
          <div class="space-y-5 text-af-gray leading-relaxed">
            <p>We are local and have been in business for a long time. When you choose us you are not only benefiting yourself, but your surrounding community. Bigger non-local companies might have lower prices, but oftentimes their teams are not as knowledgeable and the supplies are not as durable.</p>
            <p>With Allen & Frey you can expect only the best in service and installation. Our jobs are well thought out, with all aspects of construction considered.</p>
            <p class="font-semibold text-af-text">Allen & Frey are room addition contractors with 40 years of experience in the home construction industry. We take the time to do it right.</p>
          </div>
        </div>
      </div>
    </div>
  </section>


  <ProcessSection bg="bg-white" />
  <CTASection />
</template>
