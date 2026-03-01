<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import PageHero from '@/components/PageHero.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import CTASection from '@/components/CTASection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'

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
    description="For over 40 years, Allen & Frey has been Cincinnati's locally owned, full-service contractor. Real neighbors. Real quality. Right here in your community."
  />

  <!-- Main About -->
  <section class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Proudly Cincinnati-Based</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-6 leading-snug">40 Years Serving Cincinnati's Neighborhoods</h2>
          <p class="text-af-gray mb-5 leading-relaxed">We grew up here. We live here. And we build here. Allen & Frey is a family-owned contractor that has called Greater Cincinnati home since 1985 — not because it's a business decision, but because this community is ours too.</p>
          <p class="text-af-gray leading-relaxed">Our team of full-time project managers, master carpenters, and trusted subcontractors brings together decades of local experience on every project. When you hire Allen & Frey, you're not hiring a national chain. You're hiring your neighbors.</p>
        </div>
        <div class="relative">
          <img src="/images/allen-and-frey-img-01.png" alt="Allen & Frey construction team at work" class="w-full shadow-2xl" loading="lazy" width="600" height="450">
          <div class="absolute -bottom-6 -right-6 bg-af-accent text-white p-6 hidden lg:block">
            <div class="text-3xl font-heading font-bold">1985</div>
            <div class="text-sm uppercase tracking-wide">Founded in Cincinnati</div>
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
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text">Built on Word of Mouth</h2>
        </div>
        <div class="space-y-6 text-af-gray leading-relaxed">
          <p>In a city like Cincinnati, reputation is everything. Our next client is usually a neighbor of the last one — which is exactly why we're obsessive about quality, communication, and follow-through on every project we take on.</p>
          <p>Our construction professionals bring the ultimate expertise in high-end remodeling and new builds. Each project manager has over a decade of local experience, and we employ over 30 master carpenters. We've built a level of professional integrity in the construction process that's rare in an industry dominated by national franchises.</p>
          <p>We use only the highest-quality local subcontractors and suppliers — relationships built over decades, not contracts signed in a boardroom. Every member of the Allen & Frey team takes personal pride in delivering outstanding craftsmanship, meticulous attention to detail, and genuine customer care on every project.</p>
          <p>At Allen & Frey, we take safety and sustainability seriously. Our entire team trains monthly on OSHA health and safety standards, and we actively incorporate green building practices and recycled materials into our projects wherever possible.</p>
        </div>
      </div>
    </div>
  </section>

  <FeaturesSection />
  <TestimonialsSection />
  <ProcessSection />
  <CTASection />
</template>
