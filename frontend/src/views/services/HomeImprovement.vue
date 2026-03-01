<script setup>
import PageHero from '@/components/PageHero.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import CTASection from '@/components/CTASection.vue'
</script>

<template>
  <PageHero
    subtitle="Our Services"
    title="Home Improvement"
    description="From roof to foundation, Allen & Frey protects and transforms Cincinnati homes with 40 years of hands-on experience and the care of a neighbor — not a national chain."
    compact
  />

  <!-- Lead -->
  <section class="py-24 lg:py-32">
    <div class="max-w-3xl mx-auto px-6 lg:px-8 text-center">
      <div class="flex items-center justify-center gap-3 mb-4">
        <div class="w-8 h-px bg-af-accent"></div>
        <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Exterior Expertise</span>
        <div class="w-8 h-px bg-af-accent"></div>
      </div>
      <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-6">Your Home's Exterior, Done Right</h2>
      <p class="text-af-gray leading-relaxed mb-5">The exterior of your home is its first line of defense against weather, wear, and the elements. Allen & Frey covers every system that keeps your Cincinnati home protected, energy-efficient, and looking great — roofing, gutters, siding, windows, and doors.</p>
      <p class="text-af-gray leading-relaxed">We're not a franchise or a national chain. We're a locally owned company that's been working in this city since 1985. That means real accountability, direct communication, and craftsmanship you can count on long after the job is done.</p>
    </div>
  </section>

  <!-- Services Grid -->
  <section class="py-24 lg:py-32 bg-af-light">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="w-8 h-px bg-af-accent"></div>
          <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">What We Do</span>
          <div class="w-8 h-px bg-af-accent"></div>
        </div>
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text">Home Improvement Services</h2>
        <p class="text-af-gray mt-4 max-w-2xl mx-auto">One trusted local team for every exterior need — no subcontracting, no runaround, no surprises.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

        <div class="bg-white p-6 md:p-8 shadow-sm">
          <div class="w-10 h-10 bg-af-accent/10 flex items-center justify-center mb-5">
            <svg class="w-5 h-5 text-af-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
          </div>
          <h3 class="text-xl font-heading font-bold text-af-text mb-3">Roofing</h3>
          <p class="text-af-gray leading-relaxed">Whether it's a full replacement or targeted repairs, we use premium materials built to handle Cincinnati's seasons — from summer storms to winter ice. We assess, recommend, and install with minimal disruption to your household.</p>
        </div>

        <div class="bg-white p-6 md:p-8 shadow-sm">
          <div class="w-10 h-10 bg-af-accent/10 flex items-center justify-center mb-5">
            <svg class="w-5 h-5 text-af-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
            </svg>
          </div>
          <h3 class="text-xl font-heading font-bold text-af-text mb-3">Gutters</h3>
          <p class="text-af-gray leading-relaxed">We install, repair, and replace gutter systems — including seamless aluminum and copper options — sized and positioned to protect your foundation, siding, and landscaping from Cincinnati's year-round rainfall.</p>
        </div>

        <div class="bg-white p-6 md:p-8 shadow-sm">
          <div class="w-10 h-10 bg-af-accent/10 flex items-center justify-center mb-5">
            <svg class="w-5 h-5 text-af-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </div>
          <h3 class="text-xl font-heading font-bold text-af-text mb-3">Downspouts</h3>
          <p class="text-af-gray leading-relaxed">Clogged or misaligned downspouts cause serious long-term foundation damage. We install and reposition them to maximize drainage efficiency — keeping water moving away from your home, not into it.</p>
        </div>

        <div class="bg-white p-6 md:p-8 shadow-sm">
          <div class="w-10 h-10 bg-af-accent/10 flex items-center justify-center mb-5">
            <svg class="w-5 h-5 text-af-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"/>
            </svg>
          </div>
          <h3 class="text-xl font-heading font-bold text-af-text mb-3">Siding</h3>
          <p class="text-af-gray leading-relaxed">New siding transforms your home's appearance while adding weather protection and improving energy efficiency. We work with fiber cement, vinyl, and engineered wood to match your home's character and your budget.</p>
        </div>

        <div class="bg-white p-6 md:p-8 shadow-sm">
          <div class="w-10 h-10 bg-af-accent/10 flex items-center justify-center mb-5">
            <svg class="w-5 h-5 text-af-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
            </svg>
          </div>
          <h3 class="text-xl font-heading font-bold text-af-text mb-3">Windows</h3>
          <p class="text-af-gray leading-relaxed">Drafty windows drive up energy bills and undermine comfort. We replace single windows and full packages with energy-efficient, low-maintenance options suited to every style — from traditional Cincinnati craftsman homes to modern builds.</p>
        </div>

        <div class="bg-white p-6 md:p-8 shadow-sm">
          <div class="w-10 h-10 bg-af-accent/10 flex items-center justify-center mb-5">
            <svg class="w-5 h-5 text-af-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-heading font-bold text-af-text mb-3">Doors</h3>
          <p class="text-af-gray leading-relaxed">Entry and patio doors are both a security feature and a design statement. We install front doors, back doors, and sliding or French patio doors in steel, fiberglass, and wood — one of the highest-ROI upgrades for curb appeal and security.</p>
        </div>

      </div>
    </div>
  </section>

  <!-- Cincinnati Band -->
  <section class="py-24 lg:py-32 bg-af-dark">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="max-w-3xl mb-16">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-8 h-px bg-af-accent"></div>
          <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">40 Years in Cincinnati</span>
        </div>
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-6">We Know These Homes — We Live Here Too</h2>
        <p class="text-white/70 leading-relaxed mb-4">Cincinnati homes are built to last, and so is our work. From the older craftsman bungalows of Hyde Park and Mount Lookout to newer builds in Blue Ash and Anderson Township, we've worked on homes across the area for over four decades.</p>
        <p class="text-white/70 leading-relaxed">We know how Cincinnati's climate — wet springs, humid summers, hard winters — stresses roofs, windows, and siding differently than other parts of the country. We spec materials accordingly, and we stand behind every project with a team that's here to stay.</p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
        <div class="bg-af-dark px-8 py-10">
          <div class="text-4xl font-heading font-bold text-af-accent mb-2">1985</div>
          <div class="text-white/60 text-sm">Founded in Cincinnati</div>
        </div>
        <div class="bg-af-dark px-8 py-10">
          <div class="text-4xl font-heading font-bold text-af-accent mb-2">40+</div>
          <div class="text-white/60 text-sm">Years in business</div>
        </div>
        <div class="bg-af-dark px-8 py-10">
          <div class="text-4xl font-heading font-bold text-af-accent mb-2">500+</div>
          <div class="text-white/60 text-sm">Projects completed</div>
        </div>
        <div class="bg-af-dark px-8 py-10">
          <div class="text-4xl font-heading font-bold text-af-accent mb-2">30+</div>
          <div class="text-white/60 text-sm">Master carpenters</div>
        </div>
      </div>
    </div>
  </section>

  <ProcessSection />
  <CTASection />
</template>
