<script setup>
const reviews = [
  {
    name: 'Sarah M.',
    initials: 'SM',
    location: 'Hyde Park, Cincinnati',
    text: 'Allen & Frey completely transformed our kitchen. The team was professional, communicative throughout, and the craftsmanship is outstanding. They treated our home like it was their own.'
  },
  {
    name: 'Mike & Jennifer T.',
    initials: 'MT',
    location: 'Mount Lookout, Cincinnati',
    text: "We've hired Allen & Frey twice — first for a bathroom, then a room addition. They're a true local company that genuinely cares about their reputation in this community. Wouldn't go anywhere else."
  },
  {
    name: 'David R.',
    initials: 'DR',
    location: 'Indian Hill, Cincinnati',
    text: 'After getting several quotes, we chose Allen & Frey for our room addition. Best decision we made. On time, on budget, and the craftsmanship is incredible. Highly recommend to any Cincinnati homeowner.'
  }
]
</script>

<template>
  <section class="py-24 lg:py-32 bg-af-warm">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-14" v-reveal>
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="w-8 h-px bg-af-accent"></div>
          <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Reviews</span>
          <div class="w-8 h-px bg-af-accent"></div>
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-af-text">What Your Neighbors Say</h2>
        <p class="text-af-gray mt-4 max-w-xl mx-auto">Real Cincinnati homeowners. Real results.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <div v-for="(review, index) in reviews" :key="review.name" v-reveal="{ delay: index * 100 }" class="bg-white p-8 shadow-sm flex flex-col">
          <!-- Stars + Google icon -->
          <div class="flex items-center justify-between mb-5">
            <div class="flex gap-1">
              <svg v-for="i in 5" :key="i" class="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <svg class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" aria-label="Google review" role="img">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>

          <!-- Review text -->
          <p class="text-af-gray leading-relaxed italic flex-1 mb-6">"{{ review.text }}"</p>

          <!-- Reviewer info -->
          <div class="flex items-center gap-3 pt-5 border-t border-af-border">
            <div class="w-10 h-10 rounded-full bg-af-accent/10 flex items-center justify-center flex-shrink-0">
              <span class="text-af-accent font-bold text-sm">{{ review.initials }}</span>
            </div>
            <div>
              <p class="font-semibold text-af-text text-sm">{{ review.name }}</p>
              <p class="text-af-gray text-xs">{{ review.location }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Rating badge — update href to your Google Business Profile URL -->
      <div v-reveal="{ delay: 300 }" class="mt-12 text-center">
        <div class="inline-flex items-center gap-4 bg-white px-8 py-4 shadow-sm">
          <svg class="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <div class="text-left">
            <div class="flex items-center gap-2">
              <span class="font-bold text-af-text text-base">4.9</span>
              <div class="flex gap-0.5">
                <svg v-for="i in 5" :key="i" class="w-3.5 h-3.5 fill-current text-yellow-400" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
            </div>
            <p class="text-af-gray text-xs">Based on Google Reviews</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
