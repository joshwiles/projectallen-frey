<script setup>
defineProps({
  subtitle: String,
  title: String,
  description: String,
  compact: Boolean,
  image: {
    type: String,
    default: '/images/DiningRoom2.jpg'
  }
})
</script>

<template>
  <section :class="['relative bg-af-dark text-white -mt-[100px] overflow-hidden', compact ? 'py-14 md:py-20' : 'py-28 md:py-36']">
    <div class="absolute inset-0 opacity-20">
      <img :src="image" alt="" class="w-full h-full object-cover" aria-hidden="true">
    </div>
    <div class="absolute inset-0 bg-gradient-to-b from-af-dark/60 via-af-dark/90 to-af-dark"></div>
    <div class="relative max-w-7xl mx-auto px-6 lg:px-8 text-center pt-10">
      <div v-if="subtitle" class="flex items-center justify-center gap-3 mb-5">
        <div class="w-8 h-px bg-af-accent"></div>
        <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">{{ subtitle }}</span>
        <div class="w-8 h-px bg-af-accent"></div>
      </div>
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-5">{{ title }}</h1>
      <p v-if="description" class="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">{{ description }}</p>
    </div>
  </section>
</template>
