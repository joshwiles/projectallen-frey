<script setup>
import { ref } from 'vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import CTASection from '@/components/CTASection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'

const carousel = ref(null)

function scrollCarousel(dir) {
  carousel.value.scrollBy({ left: dir * 520, behavior: 'smooth' })
}

const services = [
  {
    icon: '/images/renovations-icon-01.png',
    title: 'Room Additions',
    description: 'Need more space? We design and build additions that blend seamlessly with your existing home — inside and out.',
    link: '/services/room-additions'
  },
  {
    icon: '/images/construction-icon-01.png',
    title: 'New Construction',
    description: 'Your dream home, built from the ground up. Custom design, premium materials, and hands-on management at every stage.',
    link: '/services/home-builder'
  },
  {
    icon: '/images/kitchen-icon-01.png',
    title: 'Kitchen Remodeling',
    description: 'Custom top-to-bottom kitchen remodels built to your vision — exceptional materials, expert craftsmanship, and details that last.',
    link: '/services/kitchen-remodeler'
  },
  {
    icon: '/images/bathroom-icon-01.png',
    title: 'Bathroom Remodeling',
    description: 'Beautiful, functional bathrooms designed to fit your lifestyle — from a quick refresh to a full spa transformation.',
    link: '/services/bathroom-remodeler'
  },
]


const sections = [
  { title: 'Bathrooms', cover: '/images/Bathroom.jpg', count: 2 },
  { title: 'Kitchens', cover: '/images/Kitchen.png', count: 3 },
  { title: 'Living Rooms', cover: '/images/livingroom.jpeg', count: 2 },
  { title: 'Dining Rooms', cover: '/images/DiningRoom.jpg', count: 2 },
  { title: 'Outdoor Spaces', cover: '/images/Porch.jpg', count: 5 },
  { title: 'Other Projects', cover: '/images/littlehouse.jpg', count: 4 },
]

const stats = [
  { number: '40+', label: 'Years in Cincinnati' },
  { number: '500+', label: 'Projects Completed' },
  { number: '30+', label: 'Master Carpenters' },
  { number: '100%', label: 'Locally Operated' },
]

const whyLocal = [
  {
    number: '01',
    title: 'We Know Your Neighborhood',
    description: "From Hyde Park to Indian Hill, we know Cincinnati's neighborhoods, architectural styles, and local building codes inside and out. No learning curve — just decades of local expertise."
  },
  {
    number: '02',
    title: 'You Always Talk to Your Team',
    description: "Call us and you'll speak with the same people building your home. No call centers, no handoffs — just honest conversations with real people who know your project."
  },
  {
    number: '03',
    title: 'Our Reputation Lives Here',
    description: "In a tight-knit community, reputation is everything. Our next client is usually a neighbor of the last one. That's why we're obsessive about quality and follow-through on every single job."
  },
  {
    number: '04',
    title: 'We Invest in Cincinnati',
    description: "Every project keeps money in the local economy, supports Cincinnati suppliers, and strengthens the neighborhoods we all share. When you hire us, you're investing in your city too."
  }
]
</script>

<template>
  <!-- Hero Section -->
  <section class="relative min-h-screen flex items-center -mt-[100px]">
    <div class="absolute inset-0">
      <img src="/images/DiningRoom2.jpg" alt="" class="w-full h-full object-cover" aria-hidden="true">
      <div class="absolute inset-0 bg-gradient-to-r from-af-dark/95 via-af-dark/80 to-af-dark/20"></div>
    </div>
    <div class="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
      <div class="max-w-2xl">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-px bg-af-accent"></div>
          <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Cincinnati's Local Contractor Since 1985</span>
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-[1.1] mb-6">
          Homegrown<br>
          <span class="text-af-accent">Craftsmanship.</span><br>
          Lasting Results.
        </h1>
        <p class="text-lg lg:text-xl text-white/70 mb-10 leading-relaxed max-w-xl">
          For nearly 40 years, Allen & Frey has delivered exceptional craftsmanship and uncompromising quality to Cincinnati homeowners.
        </p>
        <div class="flex flex-wrap gap-4">
          <router-link to="/get-started" class="bg-af-accent text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-af-accent-light transition-all duration-300">
            Start Your Project
          </router-link>
          <router-link to="/gallery" class="border border-white/30 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-white/10 transition-all duration-300">
            View Our Work
          </router-link>
        </div>
      </div>
    </div>

    <!-- Stats Bar -->
    <div class="absolute bottom-0 left-0 right-0">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="bg-white/10 backdrop-blur-md border-t border-white/10">
          <div class="grid grid-cols-2 md:grid-cols-4">
            <div v-for="stat in stats" :key="stat.label" class="text-center py-6 md:py-8 border-r border-white/10 last:border-r-0">
              <div class="text-2xl md:text-3xl font-heading font-bold text-af-accent">{{ stat.number }}</div>
              <div class="text-white/60 text-xs md:text-sm uppercase tracking-wide mt-1">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Grid -->
  <section class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16" v-reveal>
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="w-8 h-px bg-af-accent"></div>
          <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">What We Do</span>
          <div class="w-8 h-px bg-af-accent"></div>
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-af-text">Our Services</h2>
        <p class="text-af-gray mt-4 max-w-xl mx-auto">Full-service home building and remodeling from Cincinnati's most trusted local team.</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <router-link
          v-for="(service, index) in services"
          :key="service.title"
          :to="service.link"
          v-reveal="{ delay: index * 100 }"
          class="group text-center p-8 lg:p-10 border border-af-border hover:border-af-accent/40 transition-all duration-500 hover:shadow-lg"
        >
          <img :src="service.icon" :alt="service.title + ' icon'" class="w-14 h-14 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" width="56" height="56">
          <h3 class="text-lg font-heading font-bold text-af-text mb-3 group-hover:text-af-accent transition-colors duration-300">{{ service.title }}</h3>
          <p class="text-af-gray text-sm leading-relaxed mb-5">{{ service.description }}</p>
          <span class="inline-flex items-center text-af-accent font-semibold text-sm gap-1.5 group-hover:gap-3 transition-all duration-300">
            Learn More
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </span>
        </router-link>
      </div>
    </div>
  </section>

  <!-- Home Improvement -->
  <section class="py-24 lg:py-32 bg-af-dark">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">

      <!-- Heading -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-16">
        <div v-reveal="{ direction: 'left' }">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Exterior Services</span>
          </div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white">Home Improvement</h2>
        </div>
        <p v-reveal="{ direction: 'right', delay: 100 }" class="text-white/60 leading-relaxed lg:pb-1">Protect and transform your home from the outside in. We handle every exterior system that keeps your Cincinnati home safe, energy-efficient, and looking its best.</p>
      </div>

      <!-- Service grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 mb-12">

        <div v-reveal="{ delay: 0 }" class="group bg-af-dark p-8 hover:bg-white/5 transition-colors duration-300">
          <div class="w-9 h-9 border border-af-accent/30 flex items-center justify-center mb-5 group-hover:border-af-accent group-hover:bg-af-accent/10 transition-all duration-300">
            <svg class="w-4 h-4 text-af-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          </div>
          <p class="text-white font-semibold mb-1.5">Roofing</p>
          <p class="text-white/45 text-sm leading-relaxed">Full replacements and repairs built for Cincinnati weather</p>
        </div>

        <div v-reveal="{ delay: 75 }" class="group bg-af-dark p-8 hover:bg-white/5 transition-colors duration-300">
          <div class="w-9 h-9 border border-af-accent/30 flex items-center justify-center mb-5 group-hover:border-af-accent group-hover:bg-af-accent/10 transition-all duration-300">
            <svg class="w-4 h-4 text-af-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>
          </div>
          <p class="text-white font-semibold mb-1.5">Gutters</p>
          <p class="text-white/45 text-sm leading-relaxed">Seamless installation and replacement to protect your foundation</p>
        </div>

        <div v-reveal="{ delay: 150 }" class="group bg-af-dark p-8 hover:bg-white/5 transition-colors duration-300">
          <div class="w-9 h-9 border border-af-accent/30 flex items-center justify-center mb-5 group-hover:border-af-accent group-hover:bg-af-accent/10 transition-all duration-300">
            <svg class="w-4 h-4 text-af-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
          </div>
          <p class="text-white font-semibold mb-1.5">Downspouts</p>
          <p class="text-white/45 text-sm leading-relaxed">Proper drainage keeping water away from your foundation</p>
        </div>

        <div v-reveal="{ delay: 225 }" class="group bg-af-dark p-8 hover:bg-white/5 transition-colors duration-300">
          <div class="w-9 h-9 border border-af-accent/30 flex items-center justify-center mb-5 group-hover:border-af-accent group-hover:bg-af-accent/10 transition-all duration-300">
            <svg class="w-4 h-4 text-af-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"/></svg>
          </div>
          <p class="text-white font-semibold mb-1.5">Siding</p>
          <p class="text-white/45 text-sm leading-relaxed">Fiber cement, vinyl, and engineered wood to match your home</p>
        </div>

        <div v-reveal="{ delay: 300 }" class="group bg-af-dark p-8 hover:bg-white/5 transition-colors duration-300">
          <div class="w-9 h-9 border border-af-accent/30 flex items-center justify-center mb-5 group-hover:border-af-accent group-hover:bg-af-accent/10 transition-all duration-300">
            <svg class="w-4 h-4 text-af-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>
          </div>
          <p class="text-white font-semibold mb-1.5">Windows</p>
          <p class="text-white/45 text-sm leading-relaxed">Energy-efficient replacements suited to every architectural style</p>
        </div>

        <div v-reveal="{ delay: 375 }" class="group bg-af-dark p-8 hover:bg-white/5 transition-colors duration-300">
          <div class="w-9 h-9 border border-af-accent/30 flex items-center justify-center mb-5 group-hover:border-af-accent group-hover:bg-af-accent/10 transition-all duration-300">
            <svg class="w-4 h-4 text-af-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/></svg>
          </div>
          <p class="text-white font-semibold mb-1.5">Doors</p>
          <p class="text-white/45 text-sm leading-relaxed">Entry and patio doors for curb appeal, security, and comfort</p>
        </div>

      </div>

      <div v-reveal="{ delay: 200 }">
        <router-link
          to="/services/home-improvement"
          class="inline-flex items-center bg-af-accent text-white px-8 py-4 text-sm font-bold uppercase tracking-wide hover:bg-af-accent-light transition-all duration-300 gap-2"
        >
          Explore Home Improvement
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </router-link>
      </div>

    </div>
  </section>

  <!-- About / Local Story -->
  <section class="py-24 lg:py-32 bg-af-warm">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="relative" v-reveal="{ direction: 'left' }">
          <img src="/images/allen-and-frey-img-01.png" alt="Allen & Frey construction team at work" class="w-full shadow-2xl" loading="lazy" width="600" height="450">
          <div class="absolute -bottom-6 -right-6 bg-af-accent text-white p-6 hidden lg:block">
            <div class="text-3xl font-heading font-bold">1985</div>
            <div class="text-sm uppercase tracking-wide">Founded in Cincinnati</div>
          </div>
        </div>
        <div v-reveal="{ direction: 'right', delay: 150 }">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Our Story</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-6 leading-snug">Built in Cincinnati.<br>For Cincinnati.</h2>
          <p class="text-af-gray mb-5 leading-relaxed">We grew up here. We live here. And we build here. Allen & Frey is a family-owned contractor that has called Greater Cincinnati home for over 40 years — not because it's a business decision, but because this community is ours too.</p>
          <p class="text-af-gray mb-8 leading-relaxed">When you hire Allen & Frey, you're hiring neighbors who know your streets, your architectural styles, and your standards. Every project manager, every carpenter — Cincinnati locals who take pride in their work and their city.</p>
          <ul class="space-y-3 mb-8">
            <li class="flex items-center gap-3 text-af-gray text-sm">
              <svg class="w-4 h-4 text-af-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              Locally founded &amp; headquartered in Cincinnati since 1985
            </li>
            <li class="flex items-center gap-3 text-af-gray text-sm">
              <svg class="w-4 h-4 text-af-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              30+ master carpenters, all Cincinnati-area professionals
            </li>
            <li class="flex items-center gap-3 text-af-gray text-sm">
              <svg class="w-4 h-4 text-af-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              500+ projects completed across Greater Cincinnati
            </li>
            <li class="flex items-center gap-3 text-af-gray text-sm">
              <svg class="w-4 h-4 text-af-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              Not a franchise — independently owned and operated
            </li>
          </ul>
          <router-link to="/about-us" class="inline-flex items-center bg-af-dark text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-af-accent transition-colors duration-300">
            Learn More About Us
            <svg class="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Hire Local -->
  <section class="py-24 lg:py-32 bg-af-dark">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16" v-reveal>
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="w-8 h-px bg-af-accent"></div>
          <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Why It Matters</span>
          <div class="w-8 h-px bg-af-accent"></div>
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">Why Hire Local?</h2>
        <p class="text-white/60 max-w-2xl mx-auto leading-relaxed">National contractors may have bigger budgets and flashier ads. But when it comes to your home, local makes all the difference.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
        <div v-for="(reason, index) in whyLocal" :key="reason.number" v-reveal="{ delay: index * 100 }" class="flex gap-6">
          <div class="text-4xl font-heading font-bold text-af-accent/25 leading-none flex-shrink-0 w-12 pt-1">{{ reason.number }}</div>
          <div>
            <h3 class="text-xl font-heading font-bold text-white mb-3">{{ reason.title }}</h3>
            <p class="text-white/55 leading-relaxed">{{ reason.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features -->
  <FeaturesSection />

  <!-- Testimonials -->
  <TestimonialsSection />

  <!-- Process -->
  <ProcessSection />

  <!-- Recent Projects -->
  <section class="py-24 lg:py-32 bg-af-light">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 mb-14">
      <div v-reveal class="flex flex-col md:flex-row md:items-end md:justify-between">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Our Work</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text">Recent Projects</h2>
        </div>
        <router-link to="/gallery" class="mt-6 md:mt-0 inline-flex items-center text-af-accent font-semibold text-sm uppercase tracking-wide gap-2 hover:gap-3 transition-all duration-300">
          View All Projects
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </router-link>
      </div>
    </div>

    <!-- Scroll carousel with fade edges -->
    <div class="relative max-w-7xl mx-auto">
      <button
        @click="scrollCarousel(-1)"
        class="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        aria-label="Scroll left"
      >
        <svg class="w-5 h-5 text-af-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
      </button>
      <button
        @click="scrollCarousel(1)"
        class="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        aria-label="Scroll right"
      >
        <svg class="w-5 h-5 text-af-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </button>

      <div
        ref="carousel"
        class="flex gap-5 overflow-x-auto scroll-smooth pb-4 px-16"
        style="scrollbar-width: none; -ms-overflow-style: none; mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%); -webkit-mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);"
      >
        <router-link
          v-for="section in sections"
          :key="section.title"
          :to="{ path: '/gallery', query: { open: section.title } }"
          class="group relative flex-shrink-0 overflow-hidden cursor-pointer rounded-lg"
          style="width: 500px; aspect-ratio: 4/3;"
        >
          <img :src="section.cover" :alt="section.title" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-af-dark via-af-dark/40 to-transparent"></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center">
            <h3 class="text-white font-heading font-bold text-2xl drop-shadow-lg">{{ section.title }}</h3>
            <span class="mt-2 text-af-accent text-xs font-semibold uppercase tracking-widest">
              {{ section.count }} {{ section.count === 1 ? 'Photo' : 'Photos' }}
            </span>
          </div>
        </router-link>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <CTASection />
</template>
