<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import PageHero from '@/components/PageHero.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import CTASection from '@/components/CTASection.vue'

const videoRef = ref(null)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        videoRef.value?.play()
      } else {
        videoRef.value?.pause()
      }
    },
    { threshold: 0.3 }
  )
  if (videoRef.value) observer.observe(videoRef.value)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <PageHero
    subtitle="About Us"
    title="About Allen & Frey"
    description="Communication and responsiveness are at the heart of our philosophy. We pride ourselves on our ability to provide each client with project information they need when they need it."
  />

  <!-- Main About -->
  <section class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Your Local Full-Service Contractor</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-6 leading-snug">Nearly 40 Years of Excellence in Cincinnati</h2>
          <p class="text-af-gray mb-5 leading-relaxed">For nearly 40 years we have provided Cincinnati homeowners with the highest quality of service in the industry. Our attention to detail and willingness to go the extra mile provides our clients with the best building and remodeling experience possible.</p>
          <p class="text-af-gray leading-relaxed">Our approach to home renovation projects begins with our full-time project managers and carpenters. It leverages the experience and expertise of our trusted subcontractors and then allows our in-house painters and finishers to wrap up the job. Our team is focused on providing the right resource at the right time for every project.</p>
        </div>
        <div class="relative">
          <img src="/images/allen-and-frey-img-01.png" alt="Allen & Frey construction team at work" class="w-full shadow-2xl" loading="lazy" width="600" height="450">
          <div class="absolute -bottom-6 -right-6 bg-af-accent text-white p-6 hidden lg:block">
            <div class="text-3xl font-heading font-bold">40+</div>
            <div class="text-sm uppercase tracking-wide">Years of Excellence</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Video -->
  <section class="py-24 lg:py-32 bg-af-light">
    <div class="max-w-5xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-12">
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="w-8 h-px bg-af-accent"></div>
          <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">See Our Work</span>
          <div class="w-8 h-px bg-af-accent"></div>
        </div>
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text">Allen & Frey in Action</h2>
      </div>
      <div class="shadow-2xl">
        <video ref="videoRef" controls muted playsinline preload="metadata" class="w-full block">
          <source src="/images/allen-frey-main-video-01.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </section>

  <!-- Reputation -->
  <section class="py-24 lg:py-32 bg-af-warm">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Our Reputation</span>
            <div class="w-8 h-px bg-af-accent"></div>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text">Outstanding Reputation</h2>
        </div>
        <div class="space-y-6 text-af-gray leading-relaxed">
          <p>We have a reputation for delivering outstanding customer service and uncompromising quality on every project we undertake. Our construction professionals have the ultimate experience and expertise in high-end remodeling projects. Each of our project managers has over ten years of experience and we employ over 30 master carpenters. We have instilled a level of professional management and integrity in the construction process that is rare in most commercial companies.</p>
          <p>We use only the highest quality professional subcontractors and suppliers and have spent numerous years developing these relationships. Every member of the Allen & Frey team takes great personal pride in delivering the finest craftsmanship, uncompromising attention to detail and outstanding customer service on every luxury residence we build or renovate.</p>
          <p>At Allen & Frey, we take safety standards and environmental issues seriously. Everyone on the team is trained monthly on OSHA health and safety regulations. We hold the highest standard of safety for the homeowners and the staff. In addition to safety, we also believe in the green movement. The Allen & Frey design and build team takes personal responsibility to stay green by using green products and recycling for all of our projects.</p>
        </div>
      </div>
    </div>
  </section>

  <FeaturesSection />
  <ProcessSection />
  <CTASection />
</template>
