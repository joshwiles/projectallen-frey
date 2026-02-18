<script setup>
import PageHero from '@/components/PageHero.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import CTASection from '@/components/CTASection.vue'
</script>

<template>
  <PageHero
    subtitle="Our Services"
    title="Home Builder"
    description="Let Allen & Frey build the home of your dreams! Everything you want custom made for you."
    compact
  />

  <!-- Intro -->
  <section class="py-24 lg:py-32">
    <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <div class="flex items-center justify-center gap-3 mb-5">
        <div class="w-8 h-px bg-af-accent"></div>
        <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Custom Builds</span>
        <div class="w-8 h-px bg-af-accent"></div>
      </div>
      <h2 class="text-2xl md:text-3xl font-heading font-bold text-af-text mb-6">Quality Home Building Construction</h2>
      <p class="text-af-gray text-lg leading-relaxed max-w-2xl mx-auto">At Allen & Frey we don't just remodel, we also build from scratch. If you are looking for a home, look no further. We can build it in the location you choose just the way you want it. Our team will work hard in planning with you for what works!</p>
    </div>
  </section>

  <!-- Why Let Us Build - Feature Cards -->
  <section class="py-24 lg:py-32 bg-af-light">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="flex items-center justify-center gap-3 mb-5">
          <div class="w-8 h-px bg-af-accent"></div>
          <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Why Choose Us</span>
          <div class="w-8 h-px bg-af-accent"></div>
        </div>
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text">Why Let Us Build Your Home?</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="bg-white p-8 shadow-lg text-center">
          <div class="w-12 h-12 bg-af-accent/10 flex items-center justify-center mx-auto mb-5">
            <svg class="w-6 h-6 text-af-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
          </div>
          <h3 class="text-lg font-heading font-bold text-af-text mb-3">Custom Design</h3>
          <p class="text-af-gray leading-relaxed text-sm">We make sure the house becomes a home by fitting it to your style and needs. Your personality reflected in every detail of the build.</p>
        </div>
        <div class="bg-white p-8 shadow-lg text-center">
          <div class="w-12 h-12 bg-af-accent/10 flex items-center justify-center mx-auto mb-5">
            <svg class="w-6 h-6 text-af-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
          </div>
          <h3 class="text-lg font-heading font-bold text-af-text mb-3">Energy Efficient</h3>
          <p class="text-af-gray leading-relaxed text-sm">From solar panels to autonomous heating and air control. Take advantage of the latest green applications that save you money long-term.</p>
        </div>
        <div class="bg-white p-8 shadow-lg text-center">
          <div class="w-12 h-12 bg-af-accent/10 flex items-center justify-center mx-auto mb-5">
            <svg class="w-6 h-6 text-af-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.42 15.17l-5.1-5.1a1.5 1.5 0 010-2.12l.71-.71a1.5 1.5 0 012.12 0l3.57 3.57 7.07-7.07a1.5 1.5 0 012.12 0l.71.71a1.5 1.5 0 010 2.12l-8.49 8.49a1.5 1.5 0 01-2.12 0z" /></svg>
          </div>
          <h3 class="text-lg font-heading font-bold text-af-text mb-3">Brand New Everything</h3>
          <p class="text-af-gray leading-relaxed text-sm">No worrying about replacing ducts, doors, vents, or flooring. Everything is new from day one with no hidden problems.</p>
        </div>
        <div class="bg-white p-8 shadow-lg text-center">
          <div class="w-12 h-12 bg-af-accent/10 flex items-center justify-center mx-auto mb-5">
            <svg class="w-6 h-6 text-af-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>
          </div>
          <h3 class="text-lg font-heading font-bold text-af-text mb-3">Your Team</h3>
          <p class="text-af-gray leading-relaxed text-sm">You are the leader of your project. Our project manager keeps you in the loop every step of the way from foundation to finish.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Watch Your Dream -->
  <section class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">The Experience</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-6">Watch Your Dream Come to Life</h2>
          <p class="text-af-gray leading-relaxed">One of the best parts is, you get to experience it firsthand! Really! You can see the foundation get poured, and the walls put up. Imagine being able to show your family pictures of the house they are living in that used to be just a blank slate.</p>
        </div>
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Peace of Mind</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-6">Everything Brand New</h2>
          <p class="text-af-gray leading-relaxed">Isn't it also nice knowing that everything is brand new? Not having to worry about replacing ducts, doors, vents, flooring, painting, etc. Moving is hard enough, but even harder when you have to repair and replace things right off the bat. Many times home inspections for existing homes don't even catch problems that can rack up your bills sky-high.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Hire Us Banner -->
  <section class="py-20 bg-af-dark">
    <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Hire Us to Build Your Dream Home Today!</h2>
      <p class="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">At Allen & Frey, our home building construction team is your team. We will give your dream home the attention it deserves. The project manager will keep you in the loop every step of the way. We Build From the Ground Up!</p>
      <div class="flex flex-wrap justify-center gap-4">
        <router-link to="/get-started" class="bg-af-accent text-white px-10 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-af-accent-light transition-all duration-300">
          Start Your Project
        </router-link>
        <router-link to="/contact-us" class="border border-white/30 text-white px-10 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-white/10 transition-all duration-300">
          Contact Us
        </router-link>
      </div>
    </div>
  </section>

  <ProcessSection />
  <CTASection />
</template>
