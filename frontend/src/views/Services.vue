<script setup>
import PageHero from '@/components/PageHero.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import CTASection from '@/components/CTASection.vue'
</script>

<template>
  <PageHero
    subtitle="Our Services"
    title="What We Build"
    description="From a new backsplash to a full custom home — Allen & Frey's local Cincinnati team handles every scale of project with the same care and craftsmanship."
  />

  <!-- Room Additions -->
  <section class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Additions</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-5">Room Additions</h2>
          <p class="text-af-gray mb-4 leading-relaxed">Love your neighborhood but need more space? Room additions let you stay in the home and community you love while growing into the space you need. We keep the original architecture in mind from day one — so every addition feels like it was always there.</p>
          <p class="text-af-gray mb-8 leading-relaxed">From a home office to a new nursery, our Cincinnati-based team manages every aspect of the addition — permits, planning, and construction — with full transparency throughout.</p>
          <router-link to="/services/room-additions" class="inline-flex items-center bg-af-dark text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-af-accent transition-colors duration-300">
            Learn More
            <svg class="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </router-link>
        </div>
        <div class="relative overflow-hidden rounded-lg">
          <img src="/images/Deck1.jpeg" alt="Room addition project by Allen & Frey" class="w-full shadow-2xl" loading="lazy">
          <div class="absolute inset-0 bg-af-dark/10"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- New Construction -->
  <section class="py-24 lg:py-32 bg-af-warm">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div class="order-2 lg:order-1 relative overflow-hidden rounded-lg">
          <img src="/images/littlehouse.jpg" alt="New home construction by Allen & Frey" class="w-full shadow-2xl" loading="lazy">
          <div class="absolute inset-0 bg-af-dark/10"></div>
        </div>
        <div class="order-1 lg:order-2">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">New Builds</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-5">Custom Home Building</h2>
          <p class="text-af-gray mb-4 leading-relaxed">At Allen & Frey, we don't just remodel — we build homes from the ground up. If you're looking for a Cincinnati-area builder who puts premium craftsmanship and personal service above everything else, you've found us.</p>
          <p class="text-af-gray mb-8 leading-relaxed">We'll work with you to choose the lot, finalize the design, and build it exactly the way you want it — with full access to your team every step of the way. No surprises, no call centers, just your neighbors getting it right.</p>
          <router-link to="/services/home-builder" class="inline-flex items-center bg-af-dark text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-af-accent transition-colors duration-300">
            Learn More
            <svg class="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- Kitchen -->
  <section class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Kitchens</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-5">Kitchens Built to Last</h2>
          <p class="text-af-gray mb-4 leading-relaxed">From custom cabinetry to premium countertops, our kitchen remodels are built around how you actually live. We work with quality suppliers for semi-custom and custom cabinets in styles as varied as Cincinnati's neighborhoods themselves.</p>
          <p class="text-af-gray mb-8 leading-relaxed">Whether you want a showroom-quality backsplash, an entertainer's island, or a full open-concept layout, our local team brings the design vision and the craftsmanship to make it happen.</p>
          <router-link to="/services/kitchen-remodeler" class="inline-flex items-center bg-af-dark text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-af-accent transition-colors duration-300">
            Learn More
            <svg class="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </router-link>
        </div>
        <div class="relative mx-auto w-3/4 overflow-hidden rounded-lg">
          <img src="/images/Kitchen.png" alt="Kitchen remodel by Allen & Frey" class="w-[120%] max-w-none shadow-2xl" loading="lazy">
          <div class="absolute inset-0 bg-af-dark/10"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Bathroom -->
  <section class="py-24 lg:py-32 bg-af-warm">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div class="order-2 lg:order-1 relative mx-auto w-3/4 overflow-hidden rounded-lg">
          <img src="/images/Bathroom.jpg" alt="Bathroom remodel by Allen & Frey" class="w-full shadow-2xl" loading="lazy">
          <div class="absolute inset-0 bg-af-dark/10"></div>
        </div>
        <div class="order-1 lg:order-2">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Bathrooms</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-5">Bathrooms You'll Love</h2>
          <p class="text-af-gray mb-4 leading-relaxed">A great bathroom balances beauty with function. Our team designs and builds bathrooms that work beautifully every day — not just for showings. From updated fixtures to full spa transformations, we handle every detail.</p>
          <p class="text-af-gray mb-8 leading-relaxed">Heavy, fragile toilet replacements. Intricate plumbing. Complex tile work. These are exactly the jobs our licensed Cincinnati contractors handle day in, day out. Leave it to us — and enjoy the result.</p>
          <router-link to="/services/bathroom-remodeler" class="inline-flex items-center bg-af-dark text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-af-accent transition-colors duration-300">
            Learn More
            <svg class="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- Home Improvement -->
  <section class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Exterior</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-5">Home Improvement</h2>
          <p class="text-af-gray mb-4 leading-relaxed">Protect and transform your home from the outside in. Our home improvement services cover the critical exterior systems that keep your Cincinnati home safe, efficient, and looking its best — roof, gutters, downspouts, siding, windows, and doors.</p>
          <p class="text-af-gray mb-8 leading-relaxed">Whether you're dealing with aging systems or simply want to refresh your home's exterior, our local team brings the same craftsmanship and attention to detail we bring to every project.</p>
          <router-link to="/services/home-improvement" class="inline-flex items-center bg-af-dark text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-af-accent transition-colors duration-300">
            Learn More
            <svg class="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </router-link>
        </div>
        <div class="relative overflow-hidden rounded-lg">
          <img src="/images/littlehouse.jpg" alt="Home improvement by Allen & Frey" class="w-full shadow-2xl" loading="lazy">
          <div class="absolute inset-0 bg-af-dark/10"></div>
        </div>
      </div>
    </div>
  </section>

  <ProcessSection />
  <CTASection />
</template>
