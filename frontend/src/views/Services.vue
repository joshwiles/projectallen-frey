<script setup>
import PageHero from '@/components/PageHero.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import CTASection from '@/components/CTASection.vue'
</script>

<template>
  <PageHero
    subtitle="Our Services"
    title="Allen & Frey Services"
    description="Whether it's adding a deck, a back-splash, or installing a new lighting fixture we have you covered! Our remodeling contractors are here to answer your questions."
  />

  <!-- Kitchen -->
  <section class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Kitchens</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-5">Chef-Quality Kitchens</h2>
          <p class="text-af-gray mb-4 leading-relaxed">We are not your average every-day remodeling company. Our chef-quality kitchens will go beyond your expectations. We have the vision and talent to create the dream kitchen your home craves! Trends are changing. The counter-tops of today vary greatly from the counter-tops of yesterday.</p>
          <p class="text-af-gray mb-8 leading-relaxed">Kitchen cabinets are the crown of the room. We work with quality suppliers for semi-custom and custom cabinets. A creative back-splash not only adds style, elegance, and personality, but you can raise the value of your home most definitely.</p>
          <router-link to="/services/kitchen-remodeler" class="inline-flex items-center bg-af-dark text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-af-accent transition-colors duration-300">
            Learn More
            <svg class="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </router-link>
        </div>
        <div class="relative mx-auto w-3/4 overflow-hidden rounded-lg">
          <img src="/images/Kitchen.jpeg" alt="Chef-quality kitchen remodel by Allen & Frey" class="w-full shadow-2xl" loading="lazy">
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
          <img src="/images/bathroom.jpeg" alt="High-end bathroom remodel by Allen & Frey" class="w-full shadow-2xl" loading="lazy">
          <div class="absolute inset-0 bg-af-dark/10"></div>
        </div>
        <div class="order-1 lg:order-2">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Bathrooms</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-5">High-End Bathroom Remodels</h2>
          <p class="text-af-gray mb-4 leading-relaxed">Bathrooms can be improved for aesthetics, but also for functionality! Our bathroom remodeling team works hard to not only bring you a beautiful design but a practical one.</p>
          <p class="text-af-gray mb-8 leading-relaxed">Replacing the toilet can be taxing; they are heavy and fragile. The plumbing can be intricate and tedious. Leave it to the licensed contractors at Allen & Frey to ensure proper operation!</p>
          <router-link to="/services/bathroom-remodeler" class="inline-flex items-center bg-af-dark text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-af-accent transition-colors duration-300">
            Learn More
            <svg class="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>

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
          <p class="text-af-gray mb-4 leading-relaxed">Room additions are the answer for families that love their home. Life happens, and sometimes there just aren't enough rooms in the home. Let us add some!</p>
          <p class="text-af-gray mb-8 leading-relaxed">Leaving rooms additions to licensed professionals cannot be overstated. With the high expense of this type of job, you want to ensure that it is done right. No matter if it's an office or a new baby's room we have the skills needed.</p>
          <router-link to="/services/room-additions" class="inline-flex items-center bg-af-dark text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-af-accent transition-colors duration-300">
            Learn More
            <svg class="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </router-link>
        </div>
        <div class="relative overflow-hidden rounded-lg">
          <img src="/images/east-walnut-hille-project-01-400x284.jpeg" alt="Room addition project by Allen & Frey" class="w-full shadow-2xl" loading="lazy">
          <div class="absolute inset-0 bg-af-dark/10"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Home Builder -->
  <section class="py-24 lg:py-32 bg-af-warm">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div class="order-2 lg:order-1 relative overflow-hidden rounded-lg">
          <img src="/images/oakley-leed-platinum-build-01-400x284.jpeg" alt="New home construction by Allen & Frey" class="w-full shadow-2xl" loading="lazy">
          <div class="absolute inset-0 bg-af-dark/10"></div>
        </div>
        <div class="order-1 lg:order-2">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">New Builds</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-5">We Are Home Builders</h2>
          <p class="text-af-gray mb-4 leading-relaxed">At Allen & Frey we don't just remodel, we also build homes from scratch. If you are looking for home builders that specialize in high-end design and quality materials, look no further.</p>
          <p class="text-af-gray mb-8 leading-relaxed">Our builders understand that customization really is a huge plus when it comes to buying a home. We want to make sure the house becomes a home by fitting it to your style and needs.</p>
          <router-link to="/services/home-builder" class="inline-flex items-center bg-af-dark text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-af-accent transition-colors duration-300">
            Learn More
            <svg class="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- Home Maintenance -->
  <section class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="w-8 h-px bg-af-accent"></div>
          <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Maintenance</span>
          <div class="w-8 h-px bg-af-accent"></div>
        </div>
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-5">Home Maintenance</h2>
        <p class="text-af-gray mb-4 leading-relaxed">Allen & Frey understands that a lot of homeowners don't have the time or knowledge to update their homes alone. Ever start a project and then halfway through realize that you should have called a professional?</p>
        <p class="text-af-gray mb-8 leading-relaxed">There are millions of people that get encouragement from YouTube or their neighbor that an update such as installing a new light fixture or doing some electrical wiring work can be done by the homeowner. For the rest, we are here for you. Don't take on more than you can bear. Let our home remodeling and home maintenance team take the burden of raising your homes equity.</p>
        <router-link to="/services/home-maintenance" class="inline-flex items-center bg-af-dark text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-af-accent transition-colors duration-300">
          Learn More
          <svg class="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </router-link>
      </div>
    </div>
  </section>

  <ProcessSection />
  <CTASection />
</template>
