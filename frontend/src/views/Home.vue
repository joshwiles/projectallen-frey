<script setup>
import { ref } from 'vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import CTASection from '@/components/CTASection.vue'

const carousel = ref(null)
function scrollCarousel(dir) {
  carousel.value.scrollBy({ left: dir * 360, behavior: 'smooth' })
}

const services = [
  {
    icon: '/images/kitchen-icon-01.png',
    title: 'Kitchen Remodeling',
    description: 'Professional top-to-bottom kitchen remodels crafted beyond your dreams with meticulous attention to detail.',
    link: '/services/kitchen-remodeler'
  },
  {
    icon: '/images/bathroom-icon-01.png',
    title: 'Bathroom Remodeling',
    description: 'Beautiful and functional bathroom designs that combine aesthetics with practical, everyday usability.',
    link: '/services/bathroom-remodeler'
  },
  {
    icon: '/images/renovations-icon-01.png',
    title: 'Room Additions',
    description: 'Thoughtfully designed room additions and renovations that maximize usability and transform your home.',
    link: '/services/room-additions'
  },
  {
    icon: '/images/construction-icon-01.png',
    title: 'New Construction',
    description: 'Custom-built dream homes focused on quality construction, premium materials, and the details that matter.',
    link: '/services/home-builder'
  },
  {
    icon: '/images/home-maintenance-icon-01.svg',
    title: 'Home Maintenance',
    description: 'Professional home maintenance services for homeowners who want quality updates without the DIY hassle.',
    link: '/services/home-maintenance'
  }
]

const sections = [
  { title: 'Bathrooms', cover: '/images/Bathroom.jpg', count: 2 },
  { title: 'Kitchens', cover: '/images/Kitchen.jpg', count: 3 },
  { title: 'Living Rooms', cover: '/images/livingroom.jpeg', count: 2 },
  { title: 'Dining Rooms', cover: '/images/DiningRoom.jpg', count: 2 },
  { title: 'Outdoor Spaces', cover: '/images/Porch.jpg', count: 5 },
  { title: 'Other Projects', cover: '/images/littlehouse.jpg', count: 4 },
]

const stats = [
  { number: '40+', label: 'Years Experience' },
  { number: '500+', label: 'Projects Completed' },
  { number: '30+', label: 'Master Carpenters' },
  { number: '100%', label: 'Client Satisfaction' },
]
</script>

<template>
  <!-- Hero Section -->
  <section class="relative min-h-screen flex items-center -mt-20">
    <div class="absolute inset-0">
      <img src="/images/DiningRoom2.jpg" alt="" class="w-full h-full object-cover" aria-hidden="true">
      <div class="absolute inset-0 bg-gradient-to-r from-af-dark/95 via-af-dark/80 to-af-dark/40"></div>
    </div>
    <div class="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
      <div class="max-w-2xl">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-px bg-af-accent"></div>
          <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Cincinnati's Premier Builder</span>
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-[1.1] mb-6">
          Building Dreams,<br>
          <span class="text-af-accent">Crafting Homes</span>
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
      <div class="text-center mb-16">
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="w-8 h-px bg-af-accent"></div>
          <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">What We Do</span>
          <div class="w-8 h-px bg-af-accent"></div>
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-af-text">Our Services</h2>
      </div>
      <div class="flex flex-wrap justify-center gap-8">
        <router-link
          v-for="service in services"
          :key="service.title"
          :to="service.link"
          class="group text-center p-8 lg:p-10 border border-af-border hover:border-af-accent/30 transition-all duration-500 hover:shadow-lg w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
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

  <!-- About Section -->
  <section class="py-24 lg:py-32 bg-af-warm">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="relative">
          <img src="/images/allen-and-frey-img-01.png" alt="Allen & Frey construction team at work" class="w-full shadow-2xl" loading="lazy" width="600" height="450">
          <div class="absolute -bottom-6 -right-6 bg-af-accent text-white p-6 hidden lg:block">
            <div class="text-3xl font-heading font-bold">40+</div>
            <div class="text-sm uppercase tracking-wide">Years of Excellence</div>
          </div>
        </div>
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">About Us</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-6 leading-snug">Exceptional Craftsmanship & Attention to Detail</h2>
          <p class="text-af-gray mb-5 leading-relaxed">For nearly 40 years we have provided Cincinnati homeowners with the highest quality of service in the industry. Our attention to detail and willingness to go the extra mile provides our clients with the best building and remodeling experience possible.</p>
          <p class="text-af-gray mb-8 leading-relaxed">Our approach to home renovation projects begins with our full-time project managers and carpenters. It leverages the experience and expertise of our trusted subcontractors and then allows our in-house painters and finishers to wrap up the job.</p>
          <router-link to="/about-us" class="inline-flex items-center bg-af-dark text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-af-accent transition-colors duration-300">
            Learn More About Us
            <svg class="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- Features -->
  <FeaturesSection />

  <!-- Process -->
  <ProcessSection />

  <!-- Recent Projects -->
  <section class="py-24 lg:py-32 bg-af-light">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 mb-14">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Portfolio</span>
          </div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-af-text">Recent Projects</h2>
        </div>
        <router-link to="/gallery" class="mt-6 md:mt-0 inline-flex items-center text-af-accent font-semibold text-sm uppercase tracking-wide gap-2 hover:gap-3 transition-all duration-300">
          View All Projects
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </router-link>
      </div>
    </div>

    <!-- Scroll carousel with fade edges -->
    <div class="relative max-w-7xl mx-auto">
      <!-- Arrows -->
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
          style="width: 340px; aspect-ratio: 4/3;"
        >
          <img :src="section.cover" :alt="section.title" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-af-dark/80 via-af-dark/20 to-transparent"></div>
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
