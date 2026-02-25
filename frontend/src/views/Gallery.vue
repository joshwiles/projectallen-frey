<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import PageHero from '@/components/PageHero.vue'
import CTASection from '@/components/CTASection.vue'

const sections = [
  {
    title: 'Bathrooms',
    cover: '/images/Bathroom.jpg',
    images: [
      { src: '/images/Bathroom.jpg', caption: 'Bathroom Remodel' },
      { src: '/images/Bathroom2.jpg', caption: 'Bathroom Renovation' },
    ],
  },
  {
    title: 'Kitchens',
    cover: '/images/Kitchen.png',
    images: [
      { src: '/images/Kitchen.png', caption: 'Kitchen Remodel' },
      { src: '/images/Kitchen.png', caption: 'Kitchen Renovation' },
      { src: '/images/Kitchen2.jpeg', caption: 'Kitchen Update' },
    ],
  },
  {
    title: 'Living Rooms',
    cover: '/images/livingroom.jpeg',
    images: [
      { src: '/images/livingroom.jpeg', caption: 'Living Room Renovation' },
      { src: '/images/livingroom2.jpeg', caption: 'Living Room Update' },
    ],
  },
  {
    title: 'Dining Rooms',
    cover: '/images/DiningRoom.jpg',
    images: [
      { src: '/images/DiningRoom.jpg', caption: 'Dining Room Renovation' },
      { src: '/images/DiningRoom2.jpg', caption: 'Dining Room' },
    ],
  },
  {
    title: 'Outdoor Spaces',
    cover: '/images/Porch.jpg',
    images: [
      { src: '/images/Porch.jpg', caption: 'Porch' },
      { src: '/images/Deck1.jpeg', caption: 'Deck' },
      { src: '/images/outdoorstairs.jpeg', caption: 'Outdoor Stairs' },
      { src: '/images/outdoorstairs2.jpeg', caption: 'Outdoor Stairs' },
      { src: '/images/Outdoorstairs3.jpeg', caption: 'Outdoor Stairs' },
    ],
  },
  {
    title: 'Other Projects',
    cover: '/images/littlehouse.jpg',
    images: [
      { src: '/images/littlehouse.jpg', caption: 'Hangout Space' },
      { src: '/images/Stairwell.jpg', caption: 'Stairwell' },
      { src: '/images/Hallway.jpeg', caption: 'Hallway' },
    ],
  },
]

const activeSection = ref(null)
const activeIndex = ref(0)

function openSection(section) {
  activeSection.value = section
  activeIndex.value = 0
}

function closeModal() {
  activeSection.value = null
}

function prev() {
  activeIndex.value = (activeIndex.value - 1 + activeSection.value.images.length) % activeSection.value.images.length
}

function next() {
  activeIndex.value = (activeIndex.value + 1) % activeSection.value.images.length
}

function handleBackdrop(e) {
  if (e.target === e.currentTarget) closeModal()
}

const route = useRoute()
onMounted(() => {
  if (route.query.open) {
    const match = sections.find(s => s.title === route.query.open)
    if (match) openSection(match)
  }
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
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="section in sections"
          :key="section.title"
          @click="openSection(section)"
          class="group relative overflow-hidden cursor-pointer aspect-[4/3] rounded-lg"
        >
          <img
            :src="section.cover"
            :alt="section.title"
            class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-af-dark via-af-dark/40 to-transparent"></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center">
            <h3 class="text-white font-heading font-bold text-2xl drop-shadow-lg">{{ section.title }}</h3>
            <span class="mt-2 text-af-accent text-xs font-semibold uppercase tracking-widest">
              {{ section.images.length }} {{ section.images.length === 1 ? 'Photo' : 'Photos' }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Modal -->
  <Teleport to="body">
    <div
      v-if="activeSection"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      @click="handleBackdrop"
    >
      <div class="relative w-full max-w-4xl bg-af-dark rounded-xl overflow-hidden shadow-2xl">
        <!-- Header -->
        <div class="flex items-center justify-between px-6 py-4 border-b border-af-border">
          <h2 class="text-white font-heading font-bold text-xl">{{ activeSection.title }}</h2>
          <button @click="closeModal" class="text-white/60 hover:text-white transition-colors text-2xl leading-none">&times;</button>
        </div>

        <!-- Image -->
        <div class="relative aspect-[4/3] bg-black">
          <img
            :src="activeSection.images[activeIndex].src"
            :alt="activeSection.images[activeIndex].caption"
            class="absolute inset-0 w-full h-full object-contain"
          >

          <!-- Prev/Next (only if multiple images) -->
          <template v-if="activeSection.images.length > 1">
            <button
              @click="prev"
              class="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            >&#8249;</button>
            <button
              @click="next"
              class="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            >&#8250;</button>
          </template>
        </div>

        <!-- Footer -->
        <div v-if="activeSection.images.length > 1" class="px-6 py-4 flex items-center justify-end">
          <span class="text-white/50 text-sm">
            {{ activeIndex + 1 }} / {{ activeSection.images.length }}
          </span>
        </div>

        <!-- Thumbnails (only if multiple images) -->
        <div v-if="activeSection.images.length > 1" class="flex gap-2 px-6 pb-5">
          <button
            v-for="(img, i) in activeSection.images"
            :key="i"
            @click="activeIndex = i"
            class="w-16 h-12 rounded overflow-hidden border-2 transition-colors flex-shrink-0"
            :class="activeIndex === i ? 'border-af-accent' : 'border-transparent opacity-60 hover:opacity-100'"
          >
            <img :src="img.src" :alt="img.caption" class="w-full h-full object-cover">
          </button>
        </div>
      </div>
    </div>
  </Teleport>

  <CTASection />
</template>
