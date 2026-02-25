<script setup>
import PageHero from '@/components/PageHero.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import CTASection from '@/components/CTASection.vue'
</script>

<template>
  <PageHero
    subtitle="Our Services"
    title="Kitchen Remodeling"
    description="We are not your average every-day remodeling company. Our kitchens will go beyond your expectations. Let us wow your guests and potential future buyer with a fresh new redesign."
    compact
  />

  <!-- Dream Kitchen Intro -->
  <section class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Premium Quality</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-4">Your Dream Kitchen Can Become a Reality</h2>
          <p class="text-af-gray leading-relaxed">We have the vision and talent to create the dream kitchen your home craves! Are you a chef, an entertainer or a family with a determined vision? Allen & Frey is well known for creating professional top-to-bottom well-constructed remodels. Our design and build team understands that not all style requests will be the same. We build kitchens beyond your dreams.</p>
        </div>
        <div>
          <img src="/images/Kitchen.png" alt="Dream kitchen remodel by Allen & Frey" class="w-full max-w-md mx-auto shadow-2xl" loading="lazy">
        </div>
      </div>
    </div>
  </section>

  <!-- Kitchen Details -->
  <section class="py-24 lg:py-32 bg-af-light">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="w-8 h-px bg-af-accent"></div>
          <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">What We Do</span>
          <div class="w-8 h-px bg-af-accent"></div>
        </div>
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text">Kitchen Remodeling Services</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        <!-- Countertops -->
        <div class="bg-white p-6 md:p-8 shadow-lg">
          <h3 class="text-xl font-heading font-bold text-af-text mb-4">Countertops</h3>
          <p class="text-af-gray leading-relaxed">Trends are changing. The counter-tops of today vary greatly from the counter-tops of yesterday. Installing a clean updated look with a new counter-top can make all the difference. Granite counters are no longer the only premium choice. Quartz stone comes in colors and patterns that provide a clean look and are less porous. There has also been a return of the chunky butcher block counters. We can help you pick what's best for your home and show you the proper maintenance to keep your countertops in shape.</p>
        </div>
        <!-- Cabinets -->
        <div class="bg-white p-6 md:p-8 shadow-lg">
          <h3 class="text-xl font-heading font-bold text-af-text mb-4">Cabinets</h3>
          <p class="text-af-gray leading-relaxed">Kitchen cabinets are the crown of the room. We work with quality suppliers for semi-custom and custom cabinets. The styles are seemingly unlimited! Oak, maple, cherry and hickory are all popular wood choices for kitchen cabinets.</p>
        </div>
        <!-- Backsplash -->
        <div class="bg-white p-6 md:p-8 shadow-lg">
          <h3 class="text-xl font-heading font-bold text-af-text mb-4">Backsplash</h3>
          <p class="text-af-gray leading-relaxed">A beautiful backsplash adds style, elegance, and personality to your kitchen. This is where your personality can stand out. With a creative backsplash, you can raise the value of your home. We also recommend them to make cleanups faster and easier.</p>
        </div>
        <!-- Island Designs -->
        <div class="bg-white p-6 md:p-8 shadow-lg">
          <h3 class="text-xl font-heading font-bold text-af-text mb-4">Island Designs</h3>
          <p class="text-af-gray leading-relaxed">Create more counter space and a bonus of storage easily with an island. Modern kitchen islands are designed with both practicality and entertaining in mind. Many clients choose to add an additional bar area so that when company comes over they have somewhere extra to sit.</p>
        </div>
        <!-- Appliance Installation -->
        <div class="bg-white p-6 md:p-8 shadow-lg">
          <h3 class="text-xl font-heading font-bold text-af-text mb-4">Appliance Installation</h3>
          <p class="text-af-gray leading-relaxed">A brand new kitchen deserves premium appliances. Seeking high-end options such as Viking, Thermador, Gaggenau, Miele, Sub-Zero & Wolf and/or La Cornue? We can help you with your selection, from standard to premium. Our kitchen design and remodeling team install and test your appliances to ensure everything is as it should be.</p>
        </div>
        <!-- Design -->
        <div class="bg-white p-6 md:p-8 shadow-lg">
          <h3 class="text-xl font-heading font-bold text-af-text mb-4">Design</h3>
          <p class="text-af-gray leading-relaxed">Allen & Frey have an amazing team that will make your design dreams a reality. We know the kitchen is the heart of the home. We work with you in decision making to get the design, color and materials right. Even the smallest details are made a focus.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Knocking Down Walls + CTA -->
  <section class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center">
        <div>
          <img src="/images/Kitchen2.jpeg" alt="Kitchen layout redesign by Allen & Frey" class="w-full max-w-xs mx-auto shadow-2xl" loading="lazy">
        </div>
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Open Concept</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-6">Knocking Down and Adding Walls</h2>
          <div class="space-y-5 text-af-gray leading-relaxed">
            <p>Let's recreate the kitchen layout! Is a wall getting in your way? Allow us to knock it down! Adding more open space to a kitchen area is the new trend among home building. It also allows for an easier time preparing and entertaining.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <ProcessSection />
  <CTASection />
</template>
