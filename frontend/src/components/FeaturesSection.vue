<template>
  <section class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16" v-reveal>
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="w-8 h-px bg-af-accent"></div>
          <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Why Choose Us</span>
          <div class="w-8 h-px bg-af-accent"></div>
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-af-text">The Allen & Frey Difference</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">

        <div v-reveal="{ delay: 0 }" class="group">
          <div class="w-14 h-14 bg-af-accent/10 flex items-center justify-center mb-6 group-hover:bg-af-accent/20 transition-colors duration-300">
            <svg class="w-6 h-6 text-af-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <h3 class="text-xl font-heading font-bold text-af-text mb-4">Locally Owned & Operated</h3>
          <p class="text-af-gray leading-relaxed">Allen & Frey isn't a franchise or a national chain. We're your Cincinnati neighbors — locally owned and operated for over 40 years, with a genuine stake in the community we call home.</p>
        </div>

        <div v-reveal="{ delay: 100 }" class="group">
          <div class="w-14 h-14 bg-af-accent/10 flex items-center justify-center mb-6 group-hover:bg-af-accent/20 transition-colors duration-300">
            <svg class="w-6 h-6 text-af-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </div>
          <h3 class="text-xl font-heading font-bold text-af-text mb-4">Direct, Honest Communication</h3>
          <p class="text-af-gray leading-relaxed">When you call Allen & Frey, you speak with the same team building your home — not a call center. Real conversations, full transparency, and regular updates from start to finish.</p>
        </div>

        <div v-reveal="{ delay: 200 }" class="group">
          <div class="w-14 h-14 bg-af-accent/10 flex items-center justify-center mb-6 group-hover:bg-af-accent/20 transition-colors duration-300">
            <svg class="w-6 h-6 text-af-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
            </svg>
          </div>
          <h3 class="text-xl font-heading font-bold text-af-text mb-4">Master-Level Craftsmanship</h3>
          <p class="text-af-gray leading-relaxed">With 30+ master carpenters and 40 years of experience, our team sets the bar for quality in Cincinnati. Every detail is deliberate, every finish is precise — because your home deserves nothing less.</p>
        </div>

      </div>
    </div>
  </section>
</template>
