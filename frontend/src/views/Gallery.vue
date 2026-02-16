<script setup>
import { ref, computed } from 'vue'
import PageHero from '@/components/PageHero.vue'
import CTASection from '@/components/CTASection.vue'

const activeFilter = ref('All')

const filters = ['All', 'Bathroom', 'Deck', 'Kitchen', 'Room Additions']

const projects = [
  { title: 'The Overlook', image: '/images/the-overlook-40-400x284.jpeg', categories: ['Bathroom', 'Kitchen', 'Room Additions'] },
  { title: 'Oakley LEED Platinum Build', image: '/images/oakley-leed-platinum-build-01-400x284.jpeg', categories: ['Room Additions'] },
  { title: 'Hyde Park Bath Update', image: '/images/hyde-park-bath-update-02-400x284.jpeg', categories: ['Bathroom', 'Kitchen'] },
  { title: 'Hyde Park 3rd Floor Bath', image: '/images/hyde-park-3rd-floor-bath-01-400x284.jpeg', categories: ['Bathroom'] },
  { title: 'East Walnut Hills Project', image: '/images/east-walnut-hille-project-01-400x284.jpeg', categories: ['Deck'] },
  { title: 'Columbia Township Deck', image: '/images/columbia-township-deck-06-400x284.jpeg', categories: ['Deck'] },
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects
  return projects.filter(p => p.categories.includes(activeFilter.value))
})
</script>

<template>
  <PageHero
    subtitle="Portfolio"
    title="Our Portfolio"
    description="We are committed to providing our Cincinnati neighbors beautiful homes. View our portfolio of kitchen remodeling, bathroom remodeling, room additions and upgrades."
  />

  <section class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Filter Buttons -->
      <div class="flex flex-wrap justify-center gap-3 mb-16" role="group" aria-label="Filter projects by category">
        <button
          v-for="filter in filters"
          :key="filter"
          @click="activeFilter = filter"
          :aria-pressed="activeFilter === filter"
          class="px-6 py-2.5 font-medium transition-all duration-300 text-sm uppercase tracking-wide border"
          :class="activeFilter === filter ? 'bg-af-accent text-white border-af-accent' : 'bg-transparent text-af-text border-af-border hover:border-af-accent hover:text-af-accent'"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Project Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <transition-group name="fade">
          <div v-for="project in filteredProjects" :key="project.title" class="group relative overflow-hidden cursor-pointer aspect-[4/3]">
            <img :src="project.image" :alt="project.title" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-af-dark/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <span class="text-af-accent text-xs font-semibold uppercase tracking-wider">{{ project.categories.join(' / ') }}</span>
              <h3 class="text-white font-heading font-bold text-lg mt-1">{{ project.title }}</h3>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </section>

  <CTASection />
</template>
