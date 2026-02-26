<script setup>
import PageHero from '@/components/PageHero.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import CTASection from '@/components/CTASection.vue'
</script>

<template>
  <PageHero
    subtitle="Our Services"
    title="Home Maintenance"
    description="Allen & Frey understands that a lot of homeowners don't have the time or knowledge to tackle their to-do list alone. Let our team of contractors take the burden of raising the equity of your home."
    compact
  />

  <!-- Intro -->
  <section class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">We're Here to Help</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-4">Home Maintenance Services</h2>
          <div class="space-y-5 text-af-gray leading-relaxed">
            <p>Ever start a project with the realization halfway through that you should have called a professional?</p>
            <p>There are millions of people that get encouragement from YouTube or their neighbor on updates the homeowner can do — often things like installing a new light fixture or doing some electrical wiring work. Now, don’t get us wrong; some people are phenomenal at DIY. We commend you!</p>
            <p>For the rest, we are here for you. Don’t take on more than you can bear. Let us start and finish the job right, guaranteed.</p>
           </div>
        </div>
        <div class="relative overflow-hidden rounded-lg">
          <img src="/images/maintenance.jpeg" alt="Home maintenance services by Allen & Frey" class="w-full shadow-2xl" loading="lazy">
          <div class="absolute inset-0 bg-af-dark/10"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Common Updates - Cards -->
  <section class="py-24 lg:py-32 bg-af-light">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="w-8 h-px bg-af-accent"></div>
          <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">What We Do</span>
          <div class="w-8 h-px bg-af-accent"></div>
        </div>
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text">Common Home Maintenance Updates We Help With</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        <!-- Lighting -->
        <div class="bg-white p-6 md:p-8 shadow-lg">
          <h3 class="text-xl font-heading font-bold text-af-text mb-4">Lighting</h3>
          <p class="text-af-gray leading-relaxed">Change up your lighting. Light can bring life into a room or set the mood. Updating the light fixtures can bring an old home into the present making it easier to sell or just bring enjoyable aesthetics to a room.</p>
        </div>
        <!-- Cabinets -->
        <div class="bg-white p-6 md:p-8 shadow-lg">
          <h3 class="text-xl font-heading font-bold text-af-text mb-4">Cabinets</h3>
          <p class="text-af-gray leading-relaxed">Add or remove a cabinet in your kitchen or bathroom. Families grow with kids and digress as kids move out. You may have needed more space for things when you bought the home, but now do not need all the storage. Maybe you'd like to open up the room more. We'll help you tackle that and refinish any space no matter the size.</p>
        </div>
        <!-- Backsplash -->
        <div class="bg-white p-6 md:p-8 shadow-lg">
          <h3 class="text-xl font-heading font-bold text-af-text mb-4">Backsplash</h3>
          <p class="text-af-gray leading-relaxed">A huge trend taking the housing market by storm is backsplashes. They can vary in design and add a nice touch to your bathroom or kitchen. You might have heard that they are easy to do on your own, but know that if it comes out wrong, you might have to live with it being subpar or pay a lot to fix it.</p>
        </div>
        <!-- Windows & Doors -->
        <div class="bg-white p-6 md:p-8 shadow-lg">
          <h3 class="text-xl font-heading font-bold text-af-text mb-4">Windows &amp; Doors</h3>
          <p class="text-af-gray leading-relaxed">Give your home an extra window or door. Want more light in a room or more access? We'll add a window or door free of hassle.</p>
        </div>
        <!-- Deck & Sun Porch -->
        <div class="bg-white p-6 md:p-8 shadow-lg">
          <h3 class="text-xl font-heading font-bold text-af-text mb-4">Deck &amp; Sun Porch</h3>
          <p class="text-af-gray leading-relaxed">Imagine yourself basking in the sun on a warm day or enjoying a book surrounded by nature. Add a deck or sun porch that makes it possible to host backyard barbecues! We can handle it!</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Team Ready -->
  <section class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="w-8 h-px bg-af-accent"></div>
          <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Get in Touch</span>
          <div class="w-8 h-px bg-af-accent"></div>
        </div>
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-6">Our Home Maintenance Team Is Ready</h2>
        <p class="text-af-gray text-lg leading-relaxed">This is just a sample of what our team can tackle — the possibilities don't stop there. Reach out to our home maintenance coordinator today to discuss your project and see how we can help.</p>
      </div>
    </div>
  </section>

  <ProcessSection />
  <CTASection />
</template>
